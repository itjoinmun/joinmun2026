"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Container from "@/src/components/ui/container";

const TIMELINE = [
  { date: "20 September 2026", label: "Late Wave Registration" },
  { date: "16 Jun — 14 Jul", label: "Close Late Wave Registration" },
  { date: "20 November 2026", label: "City Tour & Opening" },
  { date: "21 November 2026", label: "Comses & Social Night" },
  { date: "22 November 2026", label: "Closing Ceremony" },
];

export default function Timeline() {
  const section = useRef<HTMLElement>(null);
  const isVisible = useInView(section, { once: true, amount: 0.35 });

  return (
    <section ref={section} className="relative overflow-hidden bg-[#fdfaec] px-6 py-20 text-black md:px-12 md:py-28">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      </div>

      <Container className="relative z-10 max-w-320 justify-center overflow-visible ">
        <h2 className="font-h1">Save the Timeline!</h2>
        <p className="font-h7 font-normal">
          Get a clear view of <strong>all the important dates</strong>, from registration to the conference days. This timeline helps you stay prepared at every stage.
        </p>

        <div className="relative mt-16 md:mt-20">
          <div className="absolute top-1/2 right-[10%] left-[10%] z-0 hidden h-1 -translate-y-1/2 overflow-hidden rounded-full bg-black/15 md:block">
            <motion.div
              className="h-full origin-left rounded-full bg-black shadow-[0_0_12px_rgba(90,191,132,0.7)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isVisible ? 1 : 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          <div className="absolute top-0 bottom-0 left-3 z-0 w-1 overflow-hidden rounded-full bg-black/15 md:hidden">
            <motion.div
              className="h-full origin-top rounded-full bg-black shadow-[0_0_12px_rgba(90,191,132,0.7)]"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isVisible ? 1 : 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          <div className="grid gap-10 md:grid-cols-5 md:gap-4 md:py-8">
            {TIMELINE.map((timeline, index) => (
              <TimelineCard
                key={timeline.date}
                timeline={timeline}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function TimelineCard({
  timeline,
  index,
  isVisible,
}: {
  timeline: (typeof TIMELINE)[number];
  index: number;
  isVisible: boolean;
}) {
  const delay = 0.35 + index * 0.3;

  return (
    <div className={`relative flex min-h-28 items-center pl-10 md:min-h-72 md:items-center md:justify-center md:pl-0 ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
      <motion.span
        className="absolute left-1 top-1/2 z-10 h-5 w-5 -translate-y-1/2 rounded-full md:top-1/2 md:left-1/2 md:-translate-x-1/2"
        initial={{ opacity: 0.35, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0.35, scale: isVisible ? 1 : 0.8 }}
        transition={{ delay, duration: 0.45, ease: "easeOut" }}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-primary-200"
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay, duration: 0.3 }}
        />
      </motion.span>
      <motion.article
        className={`w-fit rounded-sm border-4 border-[#5E2922] bg-linear-to-br from-[#E86958] to-[#5E2922] px-3 py-6 text-center text-white shadow-[0_14px_28px_rgba(75,33,28,0.2)] backdrop-blur-sm md:absolute ${index % 2 === 0 ? "md:-top-15" : "md:-bottom-15"}`}
        initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : index % 2 === 0 ? 30 : -30, scale: isVisible ? 1 : 0.9 }}
        transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="font-h3 whitespace-nowrap">{timeline.date}</h3>
        <div className="my-3 h-px bg-white/60" />
        <p className="font-b1 whitespace-nowrap">{timeline.label}</p>
      </motion.article>
    </div>
  );
}
