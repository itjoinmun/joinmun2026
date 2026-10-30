"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CarouselNav } from "@/src/components/ui/carousel-nav";
import { HiArrowUpRight } from "react-icons/hi2";
import Container from "@/src/components/ui/container";

interface EventItem {
  date: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
}

const events: EventItem[] = [
  {
    date: "20 Nov ",
    tag: "Pre-Event",
    title: "Coming Soon",
    description: "Stay tuned for a very interesting event reveal!",
    image: "/landing/event-pre-event-bg.png",
  },
  {
    date: "20 Nov ",
    title: "Opening Ceremony",
    description:
      "Through cultural performance into brings Javanese heritage into dialogue with the practice of diplomacy",
    image: "/landing/event-opening-bg.png",
  },
  {
    date: "21 Nov - 22 Nov ",
    title: "Committee Sessions",
    description:
      " Across six substantive sessions over two days, delegates will be debating diplomatically",
    image: "/landing/event-committee-bg.png",
  },
  {
    date: "21 Nov ",
    title: "Social Night",
    description:
      "Offers delegates a restorative evening of entertainment, networking, and cultural exchange ",
    image: "/landing/event-social-bg.png",
  },
  {
    date: "22 Nov ",
    title: "Closing Ceremony",
    description:
      "Marks  the end of the delegates’  journey. Through final remarks, the announcement of awards, and reflection",
    image: "/landing/event-closing-bg.png",
  },
];

const CARD_GAP = 24;
const STRIDE = 300 + CARD_GAP;

const scrollEntries = (max: number) => {
  const seen = new Set<number>();
  const out: { pos: number; idx: number }[] = [];
  events.forEach((_, i) => {
    const pos = Math.min(i * STRIDE, max);
    if (!seen.has(pos)) {
      seen.add(pos);
      out.push({ pos, idx: i });
    }
  });
  return out;
};

const nearestIdx = (scrollLeft: number, max: number) => {
  let best = 0;
  let bestDist = Infinity;
  for (const entry of scrollEntries(max)) {
    const dist = Math.abs(entry.pos - scrollLeft);
    if (dist < bestDist) {
      bestDist = dist;
      best = entry.idx;
    }
  }
  return best;
};

function DateBadge({ date, featured }: { date: string; featured?: boolean }) {
  return (
    <div className="relative flex items-center w-fit h-[34px] rounded-lg bg-white pl-8 pr-3">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 w-5 h-9 rounded-lg ${featured ? "" : "bg-neutral-200"
          }`}
        style={
          featured
            ? {
              background:
                "linear-gradient(180deg, #E86959 0%, #5E2921 100%)",
            }
            : undefined
        }
      />
      <span className="relative text-[12px] leading-[18px] font-normal text-black">
        {date}
      </span>
    </div>
  );
}

function LearnMoreButton() {
  return (
    <button
      type="button"
      className="w-full h-9 rounded-lg bg-primary-300 border border-primary-300 text-neutral-100 text-[12px] leading-[18px] font-normal flex items-center justify-center gap-2 hover:border-primary-400 active:bg-primary-200 active:border-primary-100 transition-colors"
    >
      Learn more
      <HiArrowUpRight />
    </button>
  );
}

function Shadows() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[95px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[224px] bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </>
  );
}

function EventCard({ event, active }: { event: EventItem; active: boolean }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden bg-neutral-300 transition-[width,height] duration-300 ease-out ${active ? "w-[320px] h-[380px]" : "w-[300px] h-[356px]"
        }`}
    >
      <Image
        src={event.image}
        alt={event.title}
        fill
        sizes={active ? "320px" : "300px"}
        className="object-cover"
      />
      <Shadows />

      {active && (
        <div
          aria-hidden="true"
          className="absolute inset-0 backdrop-blur-[6px] bg-gradient-to-b from-transparent to-black/50 pointer-events-none"
        />
      )}

      <div className="absolute top-6 left-4 z-10">
        <DateBadge date={event.date} featured={active} />
      </div>

      {active ? (
        <div className="absolute top-[227px] left-4 right-4 z-10 flex flex-col">
          {event.tag && (
            <span className="w-fit px-3 py-1 rounded-lg bg-white text-black text-[12px] leading-[18px] font-bold">
              {event.tag}
            </span>
          )}
          <span className="font-serif text-[30px] font-bold leading-[45px] text-white">
            {event.title}
          </span>
          <span className="text-[10px] leading-[15px] font-normal text-white">
            {event.description}
          </span>
        </div>
      ) : (
        <div className="absolute bottom-6 left-4 right-4 z-10 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-serif text-[30px] font-bold leading-[45px] text-white">
              {event.title}
            </span>
            <span className="text-[10px] leading-[15px] font-normal text-white">
              {event.description}
            </span>
          </div>
          <LearnMoreButton />
        </div>
      )}
    </div>
  );
}

export default function Events() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState<number | null>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      const m = el.scrollWidth - el.clientWidth;
      setMax(m);
      setIdx(nearestIdx(el.scrollLeft, m));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setIdx(nearestIdx(el.scrollLeft, el.scrollWidth - el.clientWidth));
  };

  const scrollToIdx = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const m = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: Math.min(i * STRIDE, m), behavior: "smooth" });
  };

  const entries = max === null ? [] : scrollEntries(max);
  const page = Math.max(0, entries.findIndex((entry) => entry.idx === idx));

  return (
    <section
      className="relative overflow-hidden mx-auto lg:h-[605px] flex flex-col items-center justify-center gap-[17px] py-9 lg:py-0"
    >
      <Container>
        <div className="w-full">
          <h2 className="font-serif text-[34px] font-bold leading-[47px] text-black">
            Explore our Events!
          </h2>
          <p className="font-serif text-[16px] leading-[25px] lg:text-[20px] lg:leading-[30px] font-medium tracking-[-0.015em] text-black">
            JOINMUN is a 3-day event that brings together participants for{" "}
            <strong className="font-bold">diplomatic discussions.</strong>{" "}
            During the conference, delegates represent different countries and
            participate in workshops to enhance their skills. The event aims to{" "}
            <strong className="font-bold">
              foster collaboration, critical thinking, and international
              awareness.
            </strong>
          </p>
        </div>

        <div className="w-full flex flex-col gap-[17px]">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="h-[380px] contain-size overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex items-center gap-6">
              {events.map((event, i) => (
                <EventCard
                  key={event.title}
                  event={event}
                  active={i === idx}
                />
              ))}
            </div>
          </div>

          {max !== null && (
            <CarouselNav
              page={page}
              total={entries.length}
              onChange={(p) => scrollToIdx(entries[p].idx)}
              label="events"
              dotLabel="slide"
              activeDotClass="bg-black"
              inactiveDotClass="bg-neutral-400"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
