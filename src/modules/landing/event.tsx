"use client";

import Image from "next/image";
import { useState } from "react";
import { CarouselNav } from "@/src/components/ui/carousel-nav";
import { HiArrowUpRight } from "react-icons/hi2";
import Container from "@/src/components/ui/container";

interface EventItem {
  date: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
  tag?: string;
}

const events: EventItem[] = [
  {
    date: "20 Nov ",
    tag: "Pre-Event",
    title: "Coming Soon",
    description: "Stay tuned for a very interesting event reveal!",
    image: "/landing/event-pre-event-bg.png",
    featured: true,
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
const VIEW_WIDTH = 1200;
const cardWidth = (event: EventItem) => (event.featured ? 320 : 300);

const PAGE_OFFSETS = (() => {
  let x = 0;
  const starts: number[] = [];
  for (const event of events) {
    starts.push(x);
    x += cardWidth(event) + CARD_GAP;
  }
  const maxOffset = Math.max(0, x - CARD_GAP - VIEW_WIDTH);
  return [...new Set(starts.map((start) => Math.min(start, maxOffset)))];
})();

function DateBadge({ date, featured }: { date: string; featured?: boolean }) {
  return (
    <div className="relative flex items-center w-fit h-[34px] rounded-lg bg-white pl-8 pr-3">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 w-5 h-9 rounded-lg ${
          featured ? "" : "bg-neutral-200"
        }`}
        style={
          featured
            ? {
                background: "linear-gradient(180deg, #E86959 0%, #5E2921 100%)",
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

function FeaturedCard({ event }: { event: EventItem }) {
  return (
    <div className="relative w-[320px] h-[380px] shrink-0 overflow-hidden bg-neutral-300">
      <Image
        src={event.image}
        alt={event.title}
        fill
        sizes="320px"
        className="object-cover"
      />
      <Shadows />
      <div
        aria-hidden="true"
        className="absolute inset-0 backdrop-blur-[6px] bg-gradient-to-b from-transparent to-black/50 pointer-events-none"
      />

      <div className="absolute top-6 left-4 z-10">
        <DateBadge date={event.date} featured />
      </div>

      <div className="absolute top-[227px] left-4 right-4 z-10 flex flex-col">
        <span className="w-fit px-3 py-1 rounded-lg bg-white text-black text-[12px] leading-[18px] font-bold">
          {event.tag}
        </span>
        <span className="font-serif text-[30px] font-bold leading-[45px] text-white">
          {event.title}
        </span>
        <span className="text-[10px] leading-[15px] font-normal text-white">
          {event.description}
        </span>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: EventItem }) {
  if (event.featured) {
    return <FeaturedCard event={event} />;
  }

  return (
    <div className="relative w-[300px] h-[356px] shrink-0 overflow-hidden bg-neutral-300">
      <Image
        src={event.image}
        alt={event.title}
        fill
        sizes="300px"
        className="object-cover"
      />
      <Shadows />

      <div className="relative z-10 h-full flex flex-col justify-between px-4 py-6">
        <DateBadge date={event.date} />

        <div className="flex flex-col gap-3">
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
      </div>
    </div>
  );
}

export default function Events() {
  const [page, setPage] = useState(0);
  const offset = PAGE_OFFSETS[page] ?? 0;

  return (
    <section
      id="event"
      className="relative overflow-hidden mx-auto h-[605px] flex flex-col items-center justify-center gap-[17px]"
    >
      <Container>
        <div className="w-full">
          <h2 className="font-serif text-[34px] font-bold leading-[47px] text-black">
            Explore our Events!
          </h2>
          <p className="font-serif text-[20px] font-medium leading-[30px] tracking-[-0.015em] text-black">
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
          <div className="overflow-hidden">
            <div
              className="flex items-center gap-6 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {events.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </div>

          <CarouselNav
            page={page}
            total={PAGE_OFFSETS.length}
            onChange={setPage}
            label="events"
            dotLabel="slide"
            activeDotClass="bg-black"
            inactiveDotClass="bg-neutral-400"
          />
        </div>
      </Container>
    </section>
  );
}
