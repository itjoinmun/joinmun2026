"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CarouselNav } from "@/src/components/ui/carousel-nav";
import type { CouncilChair } from "./data";

export function ChairCarousel({ chairs }: { chairs: CouncilChair[] }) {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setPerPage(media.matches ? 2 : 1);
      setPage(0);
    };

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const total = Math.ceil(chairs.length / perPage);
  const visibleChairs = chairs.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="relative mt-9 md:mt-12" aria-labelledby="chairs-heading">
      <h2 id="chairs-heading" className="font-serif text-[26px] font-bold leading-tight text-black">
        Chairs Profile
      </h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2" aria-live="polite">
        {visibleChairs.map((chair) => (
          <article
            key={chair.name}
            className="grid min-h-[311px] overflow-hidden rounded-[5px] bg-[#fff6d5] sm:grid-cols-[45%_55%]"
          >
            <div className="relative min-h-[280px] bg-neutral-300 sm:min-h-full">
              <Image
                src={chair.image}
                alt={`${chair.name}, ${chair.role}`}
                fill
                sizes="(min-width: 768px) 274px, (min-width: 640px) 45vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-3 px-6 py-7 lg:px-8">
              <div>
                <p className="text-sm font-medium text-secondary-600 md:text-base">{chair.role}</p>
                <h3 className="font-serif text-[24px] font-bold leading-[1.05] text-black">
                  {chair.name}
                </h3>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-black">Past Experiences:</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-[1.45] text-black lg:text-sm">
                  {chair.experiences.map((experience) => (
                    <li key={experience}>{experience}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4">
        <CarouselNav
          page={page}
          total={total}
          onChange={setPage}
          label="chair profiles"
          dotLabel="chair profile page"
          activeDotClass="bg-black"
          inactiveDotClass="bg-neutral-400"
        />
      </div>
    </section>
  );
}
