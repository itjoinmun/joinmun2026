import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { buttonVariants } from "../ui/button";

export interface ValueCardProps {
  title: string;
  description: string;
  imageSrc: string;
  waveSrc: string;
  href: string;
}

const ValueCard = ({
  title,
  description,
  imageSrc,
  waveSrc,
  href,
}: ValueCardProps) => {
  return (
    <div className="relative flex min-h-40 flex-col overflow-hidden rounded-md shadow-md md:min-h-56 lg:min-h-50">
      <Image src={imageSrc} alt="" fill className="object-cover" />

      <div className="absolute inset-0 bg-neutral-300/83" aria-hidden />

      <Image
        src={waveSrc}
        alt=""
        width={774}
        height={410}
        className="absolute -bottom-2.5 right-0 h-auto w-[75%] sm:w-fit sm:bottom-0"
      />

      <div className="relative flex h-full flex-col justify-between">
        <div className="text-black px-4.5 pt-4 sm:pt-5 sm:pb-1">
          <h3 className="font-h7 text-[1.20rem] text-black sm:font-h6">
            {title}
          </h3>
          <div className="mt-3 mb-1.5 border-t-[0.8px] w-full border-black" />
          <p className="font-b4 text-[0.8rem] max-w-[93%] sm:font-b2 sm:text-[0.93rem]">
            {description}
          </p>
        </div>

        <Link
          href={href}
          className={cn(
            buttonVariants({ size: "sm" }),
            "w-fit gap-2 self-end rounded-lg font-b5 text-[0.7rem] mb-3 mx-3 sm:text-xs sm:mb-4",
          )}
        >
          See More
          <HiArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
};

export default ValueCard;
