import React from "react";
import Image from "next/image";

export interface StatItemProps {
  icon: string;
  title: string;
  description: React.ReactNode;
}

const StatItem = ({ icon, title, description }: StatItemProps) => {
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-secondary-100 p-3 outline-2 outline-secondary-300 sm:gap-4 sm:p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-tl from-tertiary-700 to-red-700 sm:h-12 sm:w-12">
        <Image src={icon} alt="" width={24} height={24} />
      </span>
      <div className="min-w-0">
        <p className="font-h7 text-primary-400 sm:font-h6">{title}</p>
        <p className="font-b5 text-neutral-200 sm:font-b4">{description}</p>
      </div>
    </div>
  );
};

export default StatItem;
