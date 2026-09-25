"use client";

import * as React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TestimonialCard } from "@/src/ui/testimonial-card";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: React.ReactNode;
};

const testimonials: Testimonial[] = [
  {
    name: "Hanna",
    role: "Delegate of UNSC in JOINMUN 2025",
    avatar: "https://i.pravatar.cc/150?img=5",
    quote: (
      <>
        Being one of the delegates in JOINMUN 2024 have been{" "}
        <strong className="font-semibold text-primary-500">
          one of the most memorable MUN
        </strong>{" "}
        that I have ever attended. The committee made me feel right at home, the
        standard for{" "}
        <strong className="font-semibold text-primary-500">
          academic integrity
        </strong>{" "}
        and substance made it a{" "}
        <strong className="font-semibold text-primary-500">
          very fun challenge
        </strong>{" "}
        to navigate such a complex and interesting topic — definitely{" "}
        <strong className="font-semibold text-primary-500">
          one of the best MUNs
        </strong>{" "}
        I have ever joined.
      </>
    ),
  },
  {
    name: "Zayden",
    role: "Head Chair of UNSC in JOINMUN 2025",
    avatar: "/landing/zayden-testimonies.webp",
    quote: (
      <>
        Serving as one of the Chairperson for JOINMUN 2025 was an experience{" "}
        <strong className="font-semibold text-primary-500">
          best described
        </strong>{" "}
        as nothing but{" "}
        <strong className="font-semibold text-primary-500">exceptional</strong>.
        The committee&apos;s ability in maintaining utmost{" "}
        <strong className="font-semibold text-primary-500">academic</strong>{" "}
        integrity while preserving warmth{" "}
        <strong className="font-semibold text-primary-500">
          and excellent hospitality
        </strong>{" "}
        is a testament for JOINMUN&apos;s sterling reputation. Truly one of if
        not{" "}
        <strong className="font-semibold text-primary-500">
          the best chairing experience
        </strong>{" "}
        I&apos;ve ever had.
      </>
    ),
  },
  {
    name: "Andreas",
    role: "Head Chair of WHO in JOINMUN 2025",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote: (
      <>
        JOINMUN is that event where{" "}
        <strong className="font-semibold text-primary-500">
          excellent academic standard
        </strong>{" "}
        meets with{" "}
        <strong className="font-semibold text-primary-500">
          excellent hospitality
        </strong>
        . The MUN standard is{" "}
        <strong className="font-semibold text-primary-500">top notch</strong>{" "}
        and working with the warm welcome from the Secretariat, President, and
        the other committees as well makes me believe that JOINMUN will surely
        be{" "}
        <strong className="font-semibold text-primary-500">
          one of the best MUN in Southeast Asia
        </strong>
        !
      </>
    ),
  },
];

function ArrowButton({
  direction,
  onClick,
  label,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  className?: string;
}) {
  const Icon = direction === "prev" ? FiChevronLeft : FiChevronRight;
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-primary-300 text-white shadow-md transition-all duration-200 hover:bg-primary-200 hover:scale-[1.04] active:scale-[0.94] active:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-200 ${className ?? ""}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

export default function Testimonies() {
  const [active, setActive] = React.useState(1);
  const len = testimonials.length;
  const prevIndex = (active - 1 + len) % len;
  const nextIndex = (active + 1) % len;
  const prevItem = testimonials[prevIndex];
  const activeItem = testimonials[active];
  const nextItem = testimonials[nextIndex];

  const goPrev = React.useCallback(
    () => setActive((p) => (p - 1 + len) % len),
    [len],
  );
  const goNext = React.useCallback(
    () => setActive((p) => (p + 1) % len),
    [len],
  );

  const [dragOffset, setDragOffset] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const startX = React.useRef(0);
  const CLONE = 2;
  const cloned: Testimonial[] = React.useMemo(
    () => [
      ...testimonials.slice(-CLONE),
      ...testimonials,
      ...testimonials.slice(0, CLONE),
    ],
    [],
  );
  const clonedActive = active + CLONE;

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX.current;
    setDragOffset(Math.max(-180, Math.min(180, diff)));
  };
  const endDrag = () => {
    if (!isDragging) return;
    const threshold = 60;
    if (dragOffset < -threshold) goNext();
    else if (dragOffset > threshold) goPrev();
    setDragOffset(0);
    setIsDragging(false);
  };
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX.current;
    setDragOffset(Math.max(-180, Math.min(180, diff)));
  };
  const onTouchEnd = () => {
    if (!isDragging) return;
    const threshold = 50;
    if (dragOffset < -threshold) goNext();
    else if (dragOffset > threshold) goPrev();
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <section className="overflow-hidden bg-black px-4 py-14 sm:py-16 select-none">
      <div className="mx-auto flex flex-col gap-8 max-w-300">
        <div>
          <h1 className="font-h1">What Our Chairs and Delegates Say</h1>
          <h3 className="font-h7">
            Hear from the delegates and chairs who have experienced the rigorous
            debates, forged global connections, and shaped our legacy of
            diplomacy.
          </h3>
        </div>

        <div className="hidden w-fit mx-auto items-center justify-center gap-3 md:flex lg:gap-4">
          <div
            key={`prev-${prevIndex}`}
            className="shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <TestimonialCard
              name={prevItem.name}
              role={prevItem.role}
              avatarSrc={prevItem.avatar}
              quote={prevItem.quote}
              isActive={false}
            />
          </div>
          <ArrowButton
            direction="prev"
            onClick={goPrev}
            label="Previous testimonial"
          />
          <div
            key={`active-${active}`}
            className="shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <TestimonialCard
              name={activeItem.name}
              role={activeItem.role}
              avatarSrc={activeItem.avatar}
              quote={activeItem.quote}
              isActive
            />
          </div>
          <ArrowButton
            direction="next"
            onClick={goNext}
            label="Next testimonial"
          />
          <div
            key={`next-${nextIndex}`}
            className="shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <TestimonialCard
              name={nextItem.name}
              role={nextItem.role}
              avatarSrc={nextItem.avatar}
              quote={nextItem.quote}
              isActive={false}
            />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to testimonial ${idx + 1}`}
              aria-current={idx === active ? "true" : undefined}
              onClick={() => setActive(idx)}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-200 hover:scale-110 active:scale-90 ${
                idx === active
                  ? "scale-110 bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="md:hidden">
          <div className="overflow-hidden py-2">
            <div
              className={`flex gap-4 will-change-transform touch-pan-y ${isDragging ? "cursor-grabbing" : "cursor-grab"} ${isDragging ? "" : "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"}`}
              style={{
                transform: `translateX(calc(50% - 160px - ${clonedActive * 336}px + ${dragOffset}px))`,
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={endDrag}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {cloned.map((t, idx) => {
                const origIdx = (idx - CLONE + len) % len;
                const isActive = origIdx === active;
                return (
                  <TestimonialCard
                    key={`m-${origIdx}-${idx}`}
                    name={t.name}
                    role={t.role}
                    avatarSrc={t.avatar}
                    quote={t.quote}
                    isActive={isActive}
                    className={`w-[320px] shrink-0 ${isActive ? "" : "opacity-50"} ${isDragging ? "pointer-events-none" : ""}`}
                  />
                );
              })}
            </div>
          </div>

          <div className="relative mt-3 flex items-center justify-center gap-3">
            <ArrowButton
              direction="prev"
              onClick={goPrev}
              label="Previous testimonial"
            />
            <div className="flex items-center justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1}`}
                  aria-current={idx === active ? "true" : undefined}
                  onClick={() => setActive(idx)}
                  className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-200 hover:scale-110 active:scale-90 ${
                    idx === active
                      ? "scale-110 bg-white"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <ArrowButton
              direction="next"
              onClick={goNext}
              label="Next testimonial"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
