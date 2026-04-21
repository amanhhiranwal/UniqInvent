import { NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { z } from "zod"
import crypto from "crypto"

const contactSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  organization: z.string().optional(),
  message: z.string().min(1, "Message is required").max(2000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
         // Validate input
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          fields: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    let { firstName, lastName, email, organization, message } = parsed.data

        // Normalize fields
    const name = `${firstName} ${lastName || ""}`.trim()
    const company = organization || null

        // Sanitization
    email = email.trim().toLowerCase()
    message = message.trim()

    const db = await getDatabase()
    const collection = db.collection("contacts")

        //Hash (duplicate prevention)
    const hash = crypto
      .createHash("sha256")
      .update(email + message)
      .digest("hex")

    //Duplicate check (5 minutes)
    const existing = await collection.findOne({
      hash,
      createdAt: { $gte: new Date(Date.now() - 5 * 60 * 1000) },
    })

    if (existing) {
      return NextResponse.json(
        { error: "Duplicate submission detected" },
        { status: 429 }
      )
    }

       // IP logging (for security and analytics) - ensure compliance with privacy laws
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown"

         //Insert into database
    const result = await collection.insertOne({
      name,
      email,
      company,
      message,
      hash,
      ip,
      createdAt: new Date(),
      status: "new",
    })

    return NextResponse.json(
      {
        success: true,
        message: "Message received",
        id: result.insertedId.toString(),
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}