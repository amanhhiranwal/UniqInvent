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
  //   card,
  //   index,
  //   scrollYProgress,
  // }: {
  //   card: (typeof architectCards)[0]
  //   index: number
  //   scrollYProgress: MotionValue<number>
  // }) {
  //    const total = architectCards.length
  //   const seg = 1 / total
  //   const enter = index * seg

  //   const y = useTransform(
  //     scrollYProgress,
  //     [enter, Math.min(1, enter + seg * 0.5)],  // enter - 0.05 hata diya, 0.6 → 0.5
  //     ["100vh", "0vh"],
  //   )
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
    [0.0, 0.1], // Card 0: 0% se 10% scroll pe aa jaayega
    [0.1, 0.2], // Card 1: 10% se 20% scroll pe aa jaayega
    [0.2, 0.3], // Card 2: 20% se 30% scroll pe aa jaayega
  ];
  // const triggers = [
  // [0.15, 0.35], // Card 0 → lands in center when section is visible
  // [0.35, 0.55],
  // [0.55, 0.75],
  // ]

  const [start, end] = triggers[index];

  const y = useTransform(scrollYProgress, [start, end], ["40vh", "0vh"]);

  return (
    <motion.article
      style={{ y }}
      className="group relative cursor-pointer rounded-lg border border-transparent px-3 py-3 transition-all duration-300  hover:bg-[#0b111d]"
    >
      {/* Teal left bar — hover pe visible */}
      <div className="absolute bottom-0 left-0 top-0 w-[2px] rounded-full  opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
              letterSpacing: "0px",
              verticalAlign: "middle",
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
              letterSpacing: "0px",
              verticalAlign: "middle",
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
            letterSpacing: "0px",
            verticalAlign: "middle",
            color: "#F5F5F566",
          }}
        >
          {card.description}
        </p>
      </div>
    </motion.article>
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
    <div
      ref={trackRef}
      style={{ height: "300vh", zIndex: 0 }}
      className="relative"
    >
      <div className="sticky top-15 h-screen overflow-hidden">
        {/* Background */}
        {/* <div className="absolute inset-0 bg-card">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,212,170,0.08),transparent_28%),linear-gradient(180deg,rgba(8,12,20,0)_0%,rgba(8,12,20,0.34)_100%)]" />
        </div> */}

        <div className="container relative mx-auto h-full">
          <div className="grid h-full grid-cols-1 lg:grid-cols-2 lg:gap-20">
            {/* LEFT: heading — top-left pe fixed */}
            <div className="flex flex-col justify-start pt-20 md:pt-24">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Why Uniqinvent
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                A System Architect
              </h2>
            </div>

            {/* RIGHT: cards stack — overflow hidden se clip hoga */}
            <div className="relative h-full overflow-hidden">
              <div className="absolute inset-0 flex flex-col pt-20 md:pt-24">
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
  );
}
