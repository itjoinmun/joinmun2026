import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { HiArrowRight } from "react-icons/hi";
import StatItem, {
  StatItemProps,
} from "@/src/components/past-records/stat-item";

const STATS: StatItemProps[] = [
  {
    icon: "/landing/group.webp",
    title: "Growing Delegate Community",
    description: (
      <>
        <span className="font-bold">180+</span> participants and counting each
        year.
      </>
    ),
  },
  {
    icon: "/landing/earth.webp",
    title: "International Reach",
    description: (
      <>
        <span className="font-bold">35.9%</span> of delegates from across Asia.
      </>
    ),
  },
  {
    icon: "/landing/star.webp",
    title: "Distinguished Speakers & Diplomats",
    description: (
      <>
        <span className="font-bold">10+</span> ambassadors and diplomats from
        around the world.
      </>
    ),
  },
];

const PastRecords = () => {
  return (
    <section className="bg-secondary-100 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <div className="relative z-0 aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/landing/forum.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <Image
            src="/landing/clouds.webp"
            alt=""
            width={1321}
            height={624}
            className="absolute -bottom-15.5 -left-18 z-1 w-40 sm:w-165 max-w-none"
          />
        </div>

        <div>
          <p className="font-b4 text-neutral-200">Our Past Records</p>
          <h2 className="font-h4 mt-1 text-neutral-200 sm:font-h3 lg:font-h2">
            Years of Growth, Diplomacy, and Impact
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            {STATS.map((stat) => (
              <StatItem key={stat.title} {...stat} />
            ))}
          </div>

          <Link
            href="/track-records"
            className={cn(
              buttonVariants({
                size: "sm",
                className: "mt-8 w-fit gap-2 rounded-lg sm:w-fit",
              }),
            )}
          >
            Explore Track Records
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PastRecords;
