"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Constellation Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Hero-Video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1
            className="mx-auto text-center  text-foreground mb-8 max-w-[846px]"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 250,
              lineHeight: "100%",
              letterSpacing: "0px",
              fontSize: "clamp(23px, 4vw, 64px)",
            }}
          >
            <span className="block whitespace-nowrap">
              Simplifying a Sustainable
            </span>

            <span className="block whitespace-nowrap">
              Transformation{" "}
              <span
                className="inline-block pr-[0.2em]"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 250,
                  background:
                    "linear-gradient(90deg, #4efcd3 0%, #777bfb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                for Tomorrow
              </span>
            </span>
          </h1>

          {/* Subtext */}
          {/* <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            With a mission to make sustainable systems more structured and
            effective, we design and deliver integrated solutions across lithium
            battery recycling, renewable energy, and EV infrastructure.
          </p> */}

          <p
            className="text-muted-foreground mx-auto mb-12 text-center max-w-[846px]"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 300, // Light
              lineHeight: "150%",
              letterSpacing: "0px",
              fontSize: "clamp(10px, 4vw, 18px)",
            }}
          >
            <span className="block">
              With a mission to make sustainable systems more structured and
              effective, we design and deliver integrated solutions across lithium battery recycling, renewable
              energy, and EV infrastructure.
            </span>
            {/* <span className="block md:whitespace-nowrap">
              integrated solutions across lithium battery recycling, renewable
              energy, and EV infrastructure.
            </span> */}
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm font-medium uppercase tracking-widest rounded-sm">
              Explore the Domains
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground/40 text-foreground hover:bg-secondary/50 px-8 py-6 text-sm font-medium uppercase tracking-widest rounded-sm bg-transparent"
            >
              Get in Touch
            </Button>
          </div> */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="
      bg-primary text-[#0B4F9F] px-8 py-6 text-sm font-medium uppercase tracking-widest rounded-sm
      transition-all duration-300
      hover:shadow-[0_0_30px_8px_rgba(0,255,200,0.4)]
      hover:brightness-105
      hover:-translate-y-2.5
    "
            >
              Explore the Domains
            </Button>
            <Link href="/#contact">
              <Button
                variant="outline"
                className="
    border border-white/30 text-muted-foreground bg-transparent px-8 py-6 text-sm font-medium uppercase tracking-widest rounded-sm
    transition-all duration-300
    hover:bg-transparent hover:border-white/60 hover:text-white
    hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.08),inset_0_0_20px_2px_rgba(255,255,255,0.04)]
  "
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
