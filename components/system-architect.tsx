"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const architectCards = [
  {
    eyebrow: "Why Uniqinvent",
    lead: "We architect systems",
    rest: "that outlast trends.",
    description:
      "Most companies offer components. UniqInvent designs the connective tissue — the logic that makes energy, material, and mobility work as one.",
  },
  {
    eyebrow: "Our Approach",
    lead: "Circular by design.",
    rest: "Not by marketing.",
    description:
      "Each sector we work in supports the next: recycled materials fuel clean energy, powering EV infrastructure, which then aids recovery. This is our real operating model.",
  },
  {
    eyebrow: "Our Horizon",
    lead: "Building Systems",
    rest: "for a Sustainable Tomorrow.",
    description:
      "We design interconnected solutions across energy, materials, and mobility to shape resilient, future-ready ecosystems.",
  },
];

function ScrollCard({
  
  card,
  index,
  scrollYProgress,
}: {
  card: (typeof architectCards)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Hardcoded triggers — jaldi fire hoge
  const triggers = [
  [0.0, 0.4],   
  [0.35, 0.45], 
  [0.45, 0.55], 
];


  const startPositions = [
  "40vh",   
  "60vh",  
  "80vh",  
];


  const [start, end] = triggers[index];

  
  const y = useTransform(
  scrollYProgress,
  [start, end],
  [startPositions[index], "0vh"]
);

  return (
    <motion.article
      style={{ y }}
      className="group relative cursor-pointer rounded-lg border border-transparent px-3 py-3 transition-all duration-300  hover:bg-[#0b111d]"
    >
      {/* Teal left bar — hover pe visible */}
      <div className="absolute bottom-0 left-0 top-0 w-[2px] rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="translate-x-0 translate-y-1 opacity-75 transition-all duration-[400ms] ease-out group-hover:translate-x-5 group-hover:translate-y-0 group-hover:opacity-100 pr-4">
        {/* Eyebrow */}
        <p className="text-[11px] uppercase tracking-[0.28em] text-primary">
          {card.eyebrow}
        </p>

        {/* Heading */}
        <h3 className="mb-2">
          <span
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
              // letterSpacing: "0px",
              // verticalAlign: "middle",
            }}
          >
            {card.lead}
          </span>{" "}
          <span
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
              // letterSpacing: "0px",
              // verticalAlign: "middle",
              color: "#F5F5F566",
            }}
          >
            {card.rest}
          </span>
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "150%",
            // letterSpacing: "0px",
            // verticalAlign: "middle",
            color: "#F5F5F566",
          }}
        >
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

function StaticCard({ card }: { card: (typeof architectCards)[0] }) {
  return (
    <article className="group relative cursor-pointer rounded-lg border border-transparent px-3 py-4 transition-all duration-300 hover:bg-[#0b111d]">
      <div className="absolute bottom-0 left-0 top-0 w-[2px] rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pr-4">
        <p className="text-[11px] uppercase tracking-[0.28em] text-primary mb-1">
          {card.eyebrow}
        </p>
        <h3 className="mb-2">
          <span
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
            }}
          >
            {card.lead}
          </span>{" "}
          <span
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
              color: "#F5F5F566",
            }}
          >
            {card.rest}
          </span>
        </h3>
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "150%",
            color: "#F5F5F566",
          }}
        >
          {card.description}
        </p>
      </div>
    </article>
  );
}

export function SystemArchitect() {
  const trackRef = useRef<HTMLDivElement>(null);

  // 400vh = enough scroll space, cards ek ek karke settle honge
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  return (
    <>

     {/* ✅ MOBILE: plain stacked layout, no scroll animation */}
      <div className="block lg:hidden px-4 py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">
          Why Uniqinvent
        </p>
        <h2 className="text-3xl font-light text-foreground mb-10">
          A System Architect
        </h2>
        <div className="flex flex-col gap-6">
          {architectCards.map((card) => (
            <StaticCard key={card.eyebrow} card={card} />
          ))}
        </div>
      </div>
    <div
      ref={trackRef}
      style={{ height: "300vh", zIndex: 0 }}
      className="relative hidden lg:block"
    >
      <div className="sticky top-15 h-screen overflow-hidden">
        {/* Background */}
        {/* <div className="absolute inset-0 bg-card">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,212,170,0.08),transparent_28%),linear-gradient(180deg,rgba(8,12,20,0)_0%,rgba(8,12,20,0.34)_100%)]" />
        </div> */}

        <div className="container relative mx-auto h-full">
          <div className="grid h-full grid-cols-2 gap-20">
            {/* LEFT: heading — top-left pe fixed */}
            <div className="flex flex-col justify-start pt-24">
              <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">
                Why Uniqinvent
              </p>
              <h2 className="text-5xl font-light text-foreground">
                A System Architect
              </h2>
            </div>

            {/* RIGHT: cards stack — overflow hidden se clip hoga */}
            <div className="relative h-full overflow-hidden">
              <div className="absolute inset-0 flex flex-col gap-5 pt-24">
                {architectCards.map((card, i) => (
                  <ScrollCard
                    key={card.eyebrow}
                    card={card}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
