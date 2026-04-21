"use client";

import { useState } from "react";
import { RefreshCw, Zap, Monitor, LayoutDashboard } from "lucide-react";

const solutions = [
  {
    Icon: RefreshCw,
    title: "Circular Recovery",
    description: "Turning waste into reusable resources",
  },
  {
    Icon: Zap,
    title: "Energy Intelligence",
    description: "Smarter, reliable power systems",
  },
  {
    Icon: Monitor,
    title: "Digital Surfaces",
    description: "LED systems for modern environments",
  },
  {
    Icon: LayoutDashboard,
    title: "Connected Mobility",
    description: "Enabling EV ecosystem platforms",
  },
];

export function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 pb-28 px-10 min-h-[500px]"
      style={{
        background:
          "linear-gradient(160deg, #0e2a2a 0%, #0a1a2e 40%, #080f1a 100%)",
        boxShadow: "0 -40px 80px rgba(0,0,0,0.6)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <p
          className="text-[11px] uppercase mb-4 tracking-[0.18em]"
          style={{ color: "#4ecba0" }}
        >
          What we enable
        </p>
        <h2
          className="text-5xl font-extralight leading-tight tracking-tight"
          style={{ color: "#d6dce6" }}
        >
          Beyond Individual Solutions
        </h2>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-4 max-w-[1100px] mx-auto"
        style={{ border: "1px solid rgba(255,255,255,0.07)" }}
      >
        {solutions.map(({ Icon, title, description }, index) => {
          const isHovered = hoveredIndex === index;
          const isLast = index === solutions.length - 1;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex flex-col items-center text-center px-7 py-14 cursor-pointer transition-colors duration-300"
              style={{
                background: isHovered ? "#090A18" : "#090A18",
                borderRight: isLast
                  ? "none"
                  : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Icon Ring */}
              <div
                className="w-[76px] h-[76px] rounded-full flex items-center justify-center mb-8 transition-all duration-300"
                style={{
                  border: isHovered
                    ? "1.5px solid #4ecba0"
                    : "1.5px solid rgba(255,255,255,0.18)",
                }}
              >
                <Icon
                  size={28}
                  strokeWidth={1.4}
                  style={{
                    color: isHovered ? "#4ecba0" : "rgba(255,255,255,0.38)",
                    transition: "color 0.3s ease",
                  }}
                />
              </div>

              {/* Title */}
              <h3
                className="text-base font-normal mb-2 tracking-[0.01em]"
                style={{ color: "#cdd5e0" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "rgba(180,195,210,0.45)" }}
              >
                {description}
              </p>

              {/* Bottom Bar */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] transition-all duration-400"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #00D4AA, transparent)",
                  boxShadow: "0 0 8px 1px #00D4AA88",
                  width: isHovered ? "70%" : "0%",
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
