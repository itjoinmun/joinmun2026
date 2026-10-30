"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import AwardCard from "@/src/components/landing/award-card";
import Container from "@/src/components/ui/container";
import { awards } from "./data/award-data";

const dotClass = (active: boolean) =>
  `h-3 w-3 rounded-full ${active ? "bg-neutral-100" : "bg-neutral-500"}`;

export default function Award() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0); 
  const [index, setIndex] = useState(0);
  const getStep = (el: HTMLDivElement) => {
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return el.clientWidth;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    return first.offsetWidth + gap;
  };

  const slide = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const amount = isDesktop ? el.clientWidth : getStep(el);
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setPage(max > 0 && el.scrollLeft > max / 2 ? 1 : 0);
    const atEnd = max > 0 && el.scrollLeft >= max - 1;
    setIndex(
      atEnd
        ? awards.length - 1
        : Math.round(el.scrollLeft / getStep(el))
    );
  };

  return (
    <section
      className="relative overflow-hidden py-16"
      style={{ background: "linear-gradient(to bottom, #E86958, #5E2922)" }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 block w-16 overflow-visible md:w-30">
        <Image
          src="/landing/awards/award-ornament.webp"
          alt=""
          fill
          className="object-fill object-left -hue-rotate-45 saturate-250 md:object-cover"
        />
        <Image
          src="/landing/awards/award-ornament.webp"
          alt=""
          fill
          className="object-fill object-left brightness-0 opacity-40 md:object-cover"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 10%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 10%, black 100%)",
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 block w-16 overflow-visible md:w-30">
        <Image
          src="/landing/awards/award-ornament.webp"
          alt=""
          fill
          className="-scale-x-100 object-fill object-left -hue-rotate-45 saturate-250 md:object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-5/3 bg-linear-to-l from-black/50 to-transparent" />
      <Container className="relative z-10 gap-8">
        <div className="flex flex-col">
          <h2 className="font-h4 md:font-h2 text-neutral-100">What You Could Achieve?</h2>
          <p className="font-serif font-b3 md:font-h7 text-neutral-100">
            Explore the <b>rewards waiting for you</b> as you achieve your goals.
            Celebrate your success and dedication with <b>exclusive benefits per council.</b>
          </p>
        </div>
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scrollbar-none overflow-y-hidden lg:justify-between"
        >
          {awards.map((award) => (
            <div key={award.id} className="shrink-0 snap-start">
              <AwardCard {...award} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => slide(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-300 text-neutral-100"
          >
            <FaChevronLeft size={14} />
          </button>
          <div className="flex items-center gap-2 lg:hidden">
            {awards.map((award, i) => (
              <span key={award.id} className={dotClass(index === i)} />
            ))}
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            {[0, 1].map((i) => (
              <span key={i} className={dotClass(page === i)} />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next"
            onClick={() => slide(1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-300 text-neutral-100"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </Container>
    </section>
  );
}
