"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const domains = [
  {
    title: "Commercial LED & Display Systems",
    description: "End-to-end LED display solutions — from specification through installation and full system integration.",
    image: "/images/Frame 97.png",
    tags: ["DISPLAY SOLUTIONS", "SYSTEM INTEGRATION"],
    cardType: "inverted",
  },
  {
    title: "Recycling & Resource Recovery",
    description: "Closing material loops through precision lithium battery recycling and advanced resource reprocessing.",
    image: "/images/recycling.png",
    tags: ["LITHIUM RECOVERY", "MATERIAL PROCESSING"],
    cardType: "default",
  },
  {
    title: "Green Energy Systems",
    description: "Solar infrastructure, power systems, and UPS solutions — reliable energy for an electrified world.",
    image: "/images/green-energy.png",
    tags: ["SOLAR POWER", "POWER INFRASTRUCTURE", "UPS"],
    cardType: "default",
  },
  {
    title: "EV Platforms & Managed Services",
    description: "A smart platform connecting landowners, EV brands, and users — enabling the charging ecosystem at scale.",
    image: "/images/ev-charging.png",
    tags: ["EV CHARGING", "PLATFORM", "LOCATION DISCOVERY"],
    cardType: "inverted",
  },
]

export function Domains() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">WHAT WE ENABLE</p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Four domains. One intelligence.
          </h2>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, index) => {
            const isHovered = hoveredIndex === index
            const isInverted = domain.cardType === "inverted"

            return (
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer flex flex-col"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <div
                  className={`relative w-full overflow-hidden rounded-lg flex-shrink-0 transition-[height] duration-500 ease-in-out ${
                    isHovered ? "h-44 md:h-52" : "h-64 md:h-80"
                  }`}
                >
                  <Image
                    src={domain.image}
                    alt={domain.title}
                    fill
                    className={`object-cover object-center transition-transform duration-500 ease-in-out ${
                      isInverted
                        ? isHovered
                          ? "scale-100"
                          : "scale-110"
                        : isHovered
                        ? "scale-105"
                        : "scale-100"
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col transition-all duration-500 ease-in-out ${
                    isHovered ? "px-4 pt-5 pb-4" : "px-0 pt-5 pb-0"
                  }`}
                >
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-light text-foreground leading-snug">
                    {domain.title}
                  </h3>

                  {/* Description */}
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                      isHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed pt-3">
                      {domain.description}
                    </p>
                  </div>

                  {/* Tags + Arrow */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      {domain.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-muted-foreground border border-border/50 px-4 py-2 tracking-[0.2em] uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div
                      className={`transition-all duration-500 ease-in-out flex-shrink-0 ml-4 ${
                        isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                    >
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="h-full w-full bg-gradient-to-r from-primary via-cyan-400 to-purple-500" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}