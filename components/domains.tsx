"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const domains = [
  {
    title: "Commercial LED & Display Systems",
    description: "End-to-end LED display solutions — from specification through installation and full system integration.",
    image: "/images/led-display.jpg",
    tags: ["DISPLAY SOLUTIONS", "SYSTEM INTEGRATION"],
  },
  {
    title: "Recycling & Resource Recovery",
    description: "Closing material loops through precision lithium battery recycling and advanced resource reprocessing.",
    image: "/images/recycling.jpg",
    tags: ["LITHIUM RECOVERY", "MATERIAL PROCESSING"],
  },
  {
    title: "Green Energy Systems",
    description: "Solar infrastructure, power systems, and UPS solutions — reliable energy for an electrified world.",
    image: "/images/green-energy.jpg",
    tags: ["SOLAR POWER", "POWER INFRASTRUCTURE", "UPS"],
  },
  {
    title: "EV Platforms & Managed Services",
    description: "A smart platform connecting landowners, EV brands, and users — enabling the charging ecosystem at scale.",
    image: "/images/ev-charging.jpg",
    tags: ["EV CHARGING", "PLATFORM", "LOCATION DISCOVERY"],
  },
]

export function Domains() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">WHAT WE ENABLE</p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Four domains. One intelligence.
          </h2>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="group relative bg-card overflow-hidden cursor-pointer transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                <Image
                  src={domain.image}
                  alt={domain.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-6 pb-6">
                <h3 className="text-xl md:text-2xl font-light text-foreground">
                  {domain.title}
                </h3>
                
                {/* Description - only visible on hover with smooth animation */}
                <div 
                  className={`grid transition-all duration-500 ease-out ${
                    hoveredIndex === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4">
                      {domain.description}
                    </p>
                  </div>
                </div>

                {/* Tags and Arrow */}
                <div className="flex items-center justify-between mt-4">
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
                  
                  {/* Arrow - only visible on hover */}
                  <div className={`transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}>
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                <div className="h-full w-full bg-gradient-to-r from-primary via-cyan-400 to-purple-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
