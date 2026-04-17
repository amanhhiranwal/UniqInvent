import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Constellation Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Top left constellation */}
          <g className="text-muted-foreground/30">
            <path d="M80 120 L180 80 L280 140 L220 220 L120 180 L80 120" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M280 140 L380 100 L420 180" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M180 80 L240 40 L320 60" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="80" cy="120" r="3" fill="currentColor" />
            <circle cx="180" cy="80" r="2" fill="currentColor" />
            <circle cx="280" cy="140" r="4" fill="currentColor" />
            <circle cx="220" cy="220" r="2" fill="currentColor" />
            <circle cx="120" cy="180" r="3" fill="currentColor" />
            <circle cx="380" cy="100" r="2" fill="currentColor" />
            <circle cx="420" cy="180" r="3" fill="currentColor" />
            <circle cx="240" cy="40" r="2" fill="currentColor" />
          </g>

          {/* Top center constellation */}
          <g className="text-muted-foreground/25">
            <path d="M620 160 L720 120 L820 180 L780 260 L680 220 L620 160" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M720 120 L800 80 L880 120" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="620" cy="160" r="3" fill="currentColor" />
            <circle cx="720" cy="120" r="4" fill="currentColor" />
            <circle cx="820" cy="180" r="2" fill="currentColor" />
            <circle cx="780" cy="260" r="3" fill="currentColor" />
            <circle cx="800" cy="80" r="2" fill="currentColor" />
          </g>

          {/* Top right constellation */}
          <g className="text-muted-foreground/30">
            <path d="M1100 100 L1200 140 L1280 80 L1360 120 L1320 200 L1220 180 L1100 100" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M1200 140 L1260 220 L1320 200" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="1100" cy="100" r="3" fill="currentColor" />
            <circle cx="1200" cy="140" r="4" fill="currentColor" />
            <circle cx="1280" cy="80" r="2" fill="currentColor" />
            <circle cx="1360" cy="120" r="3" fill="currentColor" />
            <circle cx="1320" cy="200" r="2" fill="currentColor" />
            <circle cx="1260" cy="220" r="3" fill="currentColor" />
          </g>

          {/* Bottom left constellation */}
          <g className="text-muted-foreground/20">
            <path d="M60 700 L160 740 L120 820 L40 780 L60 700" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M160 740 L260 700 L320 760" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="60" cy="700" r="3" fill="currentColor" />
            <circle cx="160" cy="740" r="2" fill="currentColor" />
            <circle cx="120" cy="820" r="3" fill="currentColor" />
            <circle cx="260" cy="700" r="2" fill="currentColor" />
            <circle cx="320" cy="760" r="4" fill="currentColor" />
          </g>

          {/* Bottom right constellation */}
          <g className="text-muted-foreground/25">
            <path d="M1200 680 L1300 720 L1380 680 L1400 760 L1320 800 L1240 760 L1200 680" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M1300 720 L1340 640 L1400 660" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="1200" cy="680" r="3" fill="currentColor" />
            <circle cx="1300" cy="720" r="4" fill="currentColor" />
            <circle cx="1380" cy="680" r="2" fill="currentColor" />
            <circle cx="1400" cy="760" r="3" fill="currentColor" />
            <circle cx="1320" cy="800" r="2" fill="currentColor" />
            <circle cx="1340" cy="640" r="2" fill="currentColor" />
          </g>

          {/* Accent dots with primary color */}
          <circle cx="280" cy="140" r="4" className="fill-primary/60" />
          <circle cx="720" cy="120" r="4" className="fill-primary/40" />
          <circle cx="1200" cy="140" r="4" className="fill-primary/50" />
          <circle cx="320" cy="760" r="4" className="fill-primary/30" />
          <circle cx="1300" cy="720" r="4" className="fill-primary/40" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-foreground leading-tight mb-8 tracking-tight">
            Simplifying a Sustainable
            <br />
            Transformation{" "}
            <span 
              className="italic font-light"
              style={{
                background: "linear-gradient(90deg, #00d4aa 0%, #00b4d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for Tomorrow
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            With a mission to make sustainable systems more structured and effective, we design and deliver
            integrated solutions across lithium battery recycling, renewable energy, and EV infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm font-medium uppercase tracking-widest rounded-sm"
            >
              Explore the Domains
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground/40 text-foreground hover:bg-secondary/50 px-8 py-6 text-sm font-medium uppercase tracking-widest rounded-sm bg-transparent"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
