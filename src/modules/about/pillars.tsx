"use client";

import Image from "next/image";
import Container from "@/src/components/ui/container";

interface Pillar {
  name: string;
  description: string;
  image: string;
}

const pillars: Pillar[] = [
  {
    name: "Academic Excellence",
    description:
      "Thoughtfully selected agendas, capable chairs, disciplined procedure, and meaningful standards of recognition.",
    image: "/about/pillar1.jpg",
  },
 {
    name: "Inclusive Participation",
    description:
      "A welcoming conference environment for delegates from varied age groups, institutions, and levels of experience.",
    image: "/about/pillar2.png",
  },
  {
    name: "Diplomacy in Practice",
    description:
      "An immersive setting in which participants listen, persuade, negotiate, and build workable consensus.",
    image: "/about/pillar3.jpg",
  },
  {
    name: "Cultural Connection",
    description:
      "An experience that integrates Yogyakarta’s history, hospitality, and Javanese philosophical heritage.",
    image: "/about/pillar4.jpg",
  },
];

export function Pillar() {
  return (
    <section className="relative overflow-hidden bg-primary-500 py-9">
      <img
        src="/landing/pattern.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute mix-blend-color-dodge hidden lg:block"
        style={{ left: -180, top: -770, width: 4000, height: 1600, transform: "scale(1.2)", transformOrigin: "top left"}}
      />
      <img
        src="/landing/pattern.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute mix-blend-color-dodge hidden md:block lg:hidden"
        style={{ left: -90, top: -250, width: 800, height: 800, transform: "scale(1.25)", transformOrigin: "top left"}}
      />
      <img
        src="/landing/pattern.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute mix-blend-color-dodge block md:hidden lg:hidden"
        style={{ left: -60, top: -500, width: 800, height: 900, transform: "scale(2.0)", transformOrigin: "top left"}}
      />
      <Container>
        <div className="relative z-10 flex flex-col items-center gap-5">
          <div className="w-full">
            <h2 className="font-serif font-h4 md:text-[34px] font-bold leading-[51px] text-neutral-100">
              Institutional Pillars
            </h2>
            <p className="font-serif font-b3 md:font-h7 font-medium leading-[30px] text-neutral-100">
              Growing through every conference, connection, and conversation.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div
              className="w-full overflow-x-auto overscroll-x-contain pb-3 touch-pan-x snap-x snap-mandatory lg:overflow-visible lg:pb-0 scrollbar-none"
              aria-label="Institutional pillars"
              role="region"
              tabIndex={0}
            >
              <div className="flex w-max gap-6 lg:grid lg:w-full lg:grid-cols-4"> {pillars.map((pillar) => (
                  <div
                    key={pillar.name}
                    className="relative h-[400px] w-[280px] shrink-0 snap-start rounded-[4px] overflow-hidden bg-neutral-300 sm:w-[300px] lg:w-auto"
                  >
                    <Image
                      src={pillar.image}
                      alt={`${pillar.name} Pillar`}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 right-0 h-[107px] bg-gradient-to-b from-black to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[208px] bg-gradient-to-b from-transparent via-black/85 to-black" />
                    <div className="relative z-10 h-full flex flex-col justify-between px-4 py-6">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                          <span className={`font-serif font-bold text-neutral-100 text-[26px] leading-10`}>
                            {pillar.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-b4 leading-5 font-normal text-neutral-100">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
