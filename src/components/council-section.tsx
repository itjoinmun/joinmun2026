"use client";

import Image from "next/image";
import { useState } from "react";
import { CarouselNav } from "@/src/components/ui/carousel-nav";
import { ArrowUpRightIcon } from "@/src/components/ui/icons";

interface Council {
  name: string;
  nameSize: "lg" | "sm";
  type: string;
  level: string;
  mode: string;
  description: string;
  logo: string;
  image: string;
}

const councils: Council[] = [
  {
    name: "FIFA",
    nameSize: "lg",
    type: "Single",
    level: "Beginner",
    mode: "Offline",
    description:
      "World Cup Expansion: The Importance of Regional Representation in Global Sporting Events",
    logo: "/landing/fifa-logo.png",
    image: "/landing/fifa-bg.png",
  },
  {
    name: "UNICEF",
    nameSize: "lg",
    type: "Single",
    level: "Beginner",
    mode: "Online",
    description:
      "Addressing the Impact of Climate-Induced Displacement of Children Following the 2022 Pakistani Floods",
    logo: "/landing/unicef-logo.png",
    image: "/landing/unicef-bg.png",
  },
  {
    name: "UNEP",
    nameSize: "lg",
    type: "Single",
    level: "Beginner",
    mode: "Offline",
    description:
      "Facilitating a Sustainable and Actionable Green Transition for Developing States’ Mining Sector",
    logo: "/landing/unep-logo.png",
    image: "/landing/unep-bg.png",
  },
  {
    name: "UNWomen",
    nameSize: "sm",
    type: "Single",
    level: "Intermediate",
    mode: "Offline",
    description:
      "Addressing the Threat of Artificial Intelligence-Based Gender Violence Following The Case of the 2024 South Korean Deepfake Crisis",
    logo: "/landing/unwoman-logo.png",
    image: "/landing/unwomen-bg.png",
  },
  {
    name: "African Union",
    nameSize: "sm",
    type: "Single",
    level: "Intermediate",
    mode: "Online",
    description:
      "Increasing Regional Currency Independence: The Possibility of a Common Currency for African Trade",
    logo: "/landing/african-union-logo.png",
    image: "/landing/african-union-bg.png",
  },
  {
    name: "UNCTAD",
    nameSize: "sm",
    type: "Single",
    level: "Intermediate",
    mode: "Online",
    description:
      "Data Nationalism vs Data Sovereignty: Should States Restrict Cross-Border Data Flows?",
    logo: "/landing/unctad-logo.png",
    image: "/landing/unctad-bg.png",
  },
  {
    name: "UNSC",
    nameSize: "sm",
    type: "Double",
    level: "Advanced",
    mode: "Offline",
    description:
      "Addressing the Security of Middle Eastern Countries: The Threat of Unprovoked Retaliation",
    logo: "/landing/unsc-logo.png",
    image: "/landing/unsc-bg.png",
  },
  {
    name: "Historical Crisis",
    nameSize: "sm",
    type: "Single",
    level: "Advanced",
    mode: "Offline",
    description:
      "The Fate of the Indonesian National Revolution: The Occupation of Yogyakarta and the General Offensive of 1 March 1949",
    logo: "/landing/historical-crisis-logo.png",
    image: "/landing/historical-crisis-bg.png",
  },
];

const levelTagStyles: Record<string, string> = {
  Beginner: "bg-neutral-100 text-black",
  Intermediate: "bg-secondary-100 text-black",
  Advanced: "bg-tertiary-100 text-black",
};

const modeTagStyles: Record<string, string> = {
  Offline: "bg-tertiary-500 text-neutral-100",
  Online: "bg-primary-300 text-neutral-100",
};

const CARDS_PER_PAGE = 4;
const CARD_STEP = (300 + 24) * CARDS_PER_PAGE;
const TOTAL_PAGES = Math.ceil(councils.length / CARDS_PER_PAGE);

export function CouncilSection() {
  const [page, setPage] = useState(0);

  return (
    <section className="relative overflow-hidden bg-primary-500 max-w-[1440px] mx-auto px-[120px] py-9">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/landing/pattern.svg"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none mix-blend-color-dodge"
        style={{ left: -156, top: -211, width: 1705, height: 858 }}
      />

      <div className="relative flex flex-col items-center gap-[23px]">
        <div className="w-full max-w-[1200px]">
          <h2 className="font-serif text-[34px] font-bold leading-[51px] text-neutral-100">
            Choose Your Council!
          </h2>
          <p className="font-serif text-[20px] font-medium leading-[30px] tracking-[-0.015em] text-neutral-100">
            Each council is
            <strong className="font-bold"> thoughtfully curated</strong> to
            reflect pressing real-world issues, offering delegates the space to
            debate. Our councils are designed to
            <strong className="font-bold">
              {" "}
              stimulate critical thinking, encourage collaboration, and develop
              articulate, confident leaders.
            </strong>
          </p>
        </div>

        <div className="w-full max-w-[1200px] flex flex-col gap-3">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${page * CARD_STEP}px)` }}
            >
              {councils.map((council) => (
                <div
                  key={council.name}
                  className="relative w-[300px] h-[400px] shrink-0 rounded-[4px] overflow-hidden bg-neutral-300"
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
                        {council.description}
                      </p>
                      <button
                        type="button"
                        className="w-full h-9 rounded-lg bg-primary-300 border border-primary-300 text-neutral-100 text-[12px] leading-[18px] font-normal flex items-center justify-center gap-2 hover:border-primary-400 active:bg-primary-200 active:border-primary-100 transition-colors"
                      >
                        Explore council
                        <ArrowUpRightIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CarouselNav
            page={page}
            total={TOTAL_PAGES}
            onChange={setPage}
            label="councils"
            dotLabel="page"
            activeDotClass="bg-neutral-100"
            inactiveDotClass="bg-neutral-500"
          />
        </div>
      </div>
    </section>
  );
}
