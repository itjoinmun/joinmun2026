import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { Button } from "@/src/components/ui/button";

export interface ValueCardProps {
  title: string;
  description: string;
  imageSrc: string;
  waveSrc: string;
  // href: string;
}

const ValueCard = ({
  title,
  description,
  imageSrc,
  waveSrc,
  // href,
}: ValueCardProps) => {
  return (
    <div className="relative flex h-fit xl:max-h-none max-h-50 pb-5 flex-col overflow-hidden rounded-md shadow-md">
      <Image src={imageSrc} alt="" fill className="object-cover" />

      <div className="absolute inset-0 bg-neutral-300/83" aria-hidden />

      <Image
        src={waveSrc}
        alt=""
        width={774}
        height={410}
        className="absolute bottom-[-5] right-0 h-auto w-[75%] sm:w-fit"
      />

      <div className="relative flex h-full flex-col justify-between">
        <div className="px-[18px] pt-4 pb-1 sm:pt-5 sm:pb-1">
          <h3 className="font-h7 text-neutral-200 sm:font-h6">{title}</h3>
          <div className="mt-1.5 mb-2 h-px w-full bg-neutral-200 sm:mt-2 sm:mb-3" />
          <p className="font-b5 font-medium max-w-[95%] text-neutral-200 sm:font-b2">
            {description}
          </p>
        </div>
        <Button
          size="sm"
          disabled
          className="w-fit gap-3 self-end rounded-lg font-b5 mb-4.5 mx-3"
        >
          Coming Soon
          {/* <HiArrowRight /> */}
        </Button>
      </div>
    </div>
  );
};

export default ValueCard;
