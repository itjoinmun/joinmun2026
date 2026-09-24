import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { HiArrowRight } from "react-icons/hi";
import StatItem, {
  StatItemProps,
} from "@/src/components/past-records/stat-item";
import { MdOutlineGroups } from "react-icons/md";
import { LiaGlobeSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa6";

const STATS: StatItemProps[] = [
  {
    icon: MdOutlineGroups,
    title: "Growing Delegate Community",
    description: (
      <>
        <span className="font-bold">180+</span> participants and counting each
        year.
      </>
    ),
  },
  {
    icon: LiaGlobeSolid,
    title: "International Reach",
    description: (
      <>
        <span className="font-bold">35.9%</span> of delegates from across Asia.
      </>
    ),
  },
  {
    icon: FaRegStar,
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
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <div className="relative z-0 aspect-square lg:aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/landing/forum.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <Image
            src="/landing/left-corner.webp"
            alt=""
            width={289}
            height={364}
            className="absolute bottom-0 left-0 z-10 w-22 max-w-none sm:w-36 lg:w-fit"
          />
          <Image
            src="/landing/right-corner.webp"
            alt=""
            width={510}
            height={88}
            className="absolute bottom-0 right-0 z-10 w-40 max-w-none sm:w-36 lg:w-fit"
          />
          <Image
            src="/landing/cloud-1.webp"
            alt=""
            width={392}
            height={184}
            className="absolute left-[-11%] bottom-[36%] z-10 w-27 max-w-none sm:w-36 lg:w-fit lg:bottom-[36%]"
          />

          <Image
            src="/landing/cloud-2.webp"
            alt=""
            width={542}
            height={255}
            className="absolute -bottom-[-3%] -left-[-15%] z-10 w-37 max-w-none sm:w-36 lg:w-fit sm:-bottom-[8%] sm:-left-[-16%]"
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
                size: "md",
                className:
                  "mt-6 w-fit font-b4 gap-2 rounded-lg sm:w-fit sm:mt-8",
              }),
            )}
          >
            Explore Track Records
            <HiArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PastRecords;
