"use client";

import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { FiMinus, FiPlus } from "react-icons/fi";

export interface FaqItemProps {
  question: React.ReactNode;
  answer: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}
export function FaqItem({
  question,
  answer,
  defaultOpen = false,
  className,
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={cn(
          "relative z-10 flex w-full p-5 items-center justify-between gap-4 text-left rounded-lg transition-colors duration-300",
          isOpen ? "bg-primary-300" : "bg-primary-400",
          "text-neutral-100 border-2 border-primary-500"
        )}
      >
        <span className="font-b5 md:font-b2 font-bold">{question}</span>
        <span className="flex flex-shrink-0 items-center justify-center transition-transform duration-300">
          {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
        </span>
      </button>
      <div className={cn("w-[96%] grid transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none")}
      >
        <div className="overflow-hidden">
          <div style={{ background:"linear-gradient(var(--background, #fff), var(--background, #fff)) padding-box, linear-gradient(to bottom, #42AC6C, #1B462C) border-box",
            border: "2px solid transparent",
            borderTop: "none",}}
            className="-mt-3 rounded-b-lg p-3 pt-6 text-[10px] md:font-b4 text-black"
            >{answer}</div>
        </div>
      </div>
    </div>
  );
}