"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { CarouselNav } from "@/src/components/ui/carousel-nav";
import { HiArrowUpRight } from "react-icons/hi2";
import Container from "@/src/components/ui/container";
import { councils } from "@/src/modules/councils/data";

const levelTagStyles: Record<string, string> = {
  Beginner: "bg-neutral-100 text-black",
  Intermediate: "bg-secondary-100 text-black",
  Advanced: "bg-tertiary-100 text-black",
};

const modeTagStyles: Record<string, string> = {
  Offline: "bg-tertiary-500 text-neutral-100",
  Online: "bg-primary-300 text-neutral-100",
};

const STEP = 300 + 24;
const CARDS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(councils.length / CARDS_PER_PAGE);

export function Council() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    let nearest = 0;
    let nearestDist = Infinity;
    for (let i = 0; i < councils.length; i++) {
      const dist = Math.abs(Math.min(i * STEP, max) - el.scrollLeft);
      if (dist <= nearestDist) {
        nearestDist = dist;
        nearest = i;
      }
    }
    setIdx(nearest);
  };

  const scrollToIdx = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.min(Math.max(i, 0), councils.length - 1);
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: Math.min(clamped * STEP, max), behavior: "smooth" });
  };

  return (
    <section
      id="councils"
      className="relative overflow-hidden bg-primary-500 py-9"
    >
      <Container>
        <img
          src="/landing/pattern.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none mix-blend-color-dodge"
          style={{ left: -156, top: -211, width: 1705, height: 858 }}
        />

        <div className="relative flex flex-col items-center gap-[23px]">
          <div className="w-full">
            <h2 className="font-serif text-[28px] lg:text-[34px] font-bold leading-[51px] text-neutral-100">
              Choose Your Council!
            </h2>
            <p className="font-serif text-[16px] leading-[25px] lg:text-[20px] lg:leading-[30px] font-medium text-neutral-100">
              Each council is
              <strong className="font-bold"> thoughtfully curated</strong> to
              reflect pressing real-world issues, offering delegates the space
              to debate. Our councils are designed to
              <strong className="font-bold">
                {" "}
                stimulate critical thinking, encourage collaboration, and
                develop articulate, confident leaders.
              </strong>
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
              className="h-[400px] contain-size overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex gap-6">
                {councils.map((council, i) => (
                  <div
                    key={council.name}
                    className={`relative w-[300px] h-[400px] shrink-0 snap-start ${
                      i % CARDS_PER_PAGE === 0 ? "" : "lg:snap-none"
                    } rounded-[4px] overflow-hidden bg-neutral-300`}
                  >
                    <Image
                      src={council.image}
                      alt={`${council.name} Council`}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 right-0 h-[107px] bg-gradient-to-b from-black to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[208px] bg-gradient-to-b from-transparent via-black/85 to-black" />

                    <div className="relative z-10 h-full flex flex-col justify-between px-4 py-6">
                      <div className="flex items-center gap-2">
                        <Image
                          src={council.logo}
                          alt={`${council.name} Logo`}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full bg-neutral-100 object-cover shrink-0"
                        />
                        <div className="flex flex-col">
                          <span
                            className={`font-serif font-bold text-neutral-100 ${
                              council.nameSize === "lg"
                                ? "text-[26px] leading-[39px]"
                                : "text-[24px] leading-[36px]"
                            }`}
                          >
                            {council.name}
                          </span>
                          <span className="text-[14px] leading-[21px] font-normal text-neutral-100 -mt-1">
                            {council.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                          <span
                            className={`px-3 py-1 rounded-lg text-[12px] leading-[18px] font-normal ${levelTagStyles[council.level]}`}
                          >
                            {council.level}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-lg text-[10px] leading-[15px] font-normal ${modeTagStyles[council.mode]}`}
                          >
                            {council.mode}
                          </span>
                        </div>
                        <p className="text-[14px] leading-[21px] font-normal text-neutral-100">
                          {council.topic}
                        </p>
                        <Link
                          href={`/councils/${council.slug}`}
                          className="w-full h-9 rounded-lg bg-primary-300 border border-primary-300 text-neutral-100 text-[12px] leading-[18px] font-normal flex items-center justify-center gap-2 hover:border-primary-400 active:bg-primary-200 active:border-primary-100 transition-colors"
                        >
                          Explore council
                          <HiArrowUpRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full hidden lg:block">
              <CarouselNav
                page={idx >= CARDS_PER_PAGE ? 1 : 0}
                total={TOTAL_PAGES}
                onChange={(p) => scrollToIdx(p * CARDS_PER_PAGE)}
                label="councils"
                dotLabel="page"
                activeDotClass="bg-neutral-100"
                inactiveDotClass="bg-neutral-500"
              />
            </div>
            <div className="w-full lg:hidden">
              <CarouselNav
                page={idx}
                total={councils.length}
                onChange={scrollToIdx}
                label="councils"
                dotLabel="council"
                activeDotClass="bg-neutral-100"
                inactiveDotClass="bg-neutral-500"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
