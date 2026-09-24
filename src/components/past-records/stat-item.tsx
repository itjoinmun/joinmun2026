import React from "react";
import { IconType } from "react-icons/lib";

export interface StatItemProps {
  icon: IconType;
  title: string;
  description: React.ReactNode;
}

const StatItem = ({ icon: Icon, title, description }: StatItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-secondary-100 p-3 outline-2 outline-secondary-300 shadow-md sm:gap-4 sm:p-4">
      <span className="flex h-10 w-11 shrink-0 items-center justify-center rounded-md bg-gradient-to-tl from-tertiary-700 to-red-700 sm:h-12 sm:w-12">
        <Icon className="size-6 text-secondary-100 sm:size-7" />
      </span>
      <div className="min-w-0">
        <p className="font-h7 text-base text-primary-400 sm:font-h6">{title}</p>
        <p className="font-b5 text-neutral-200 sm:font-b4">{description}</p>
      </div>
    </div>
  );
};

export default StatItem;
