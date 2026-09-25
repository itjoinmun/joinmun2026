import * as React from "react";
import { cn } from "@/src/lib/utils";

export type TestimonialCardProps = {
  name: string;
  role: string;
  avatarSrc: string;
  avatarAlt?: string;
  quote: React.ReactNode;
  isActive?: boolean;
  className?: string;
};

export function TestimonialCard({
  name,
  role,
  avatarSrc,
  avatarAlt,
  quote,
  isActive = true,
  className,
}: TestimonialCardProps) {
  return (
    <article
      aria-current={isActive ? "true" : undefined}
      className={cn(
        "relative flex w-75 shrink-0 flex-col gap-4 overflow-hidden rounded-lg border bg-cover bg-center bg-no-repeat p-6 text-left shadow-sm transition-all duration-300 sm:w-85 sm:p-7",
        "border-[#E8D99A]/70",
        !isActive && "scale-[0.96] opacity-60 blur-[1.5px]",
        isActive && "scale-100 opacity-100 blur-0",
        className,
      )}
      style={{
        backgroundImage: "url('/landing/testimonial-image.webp')",
        minHeight: 460,
      }}
    >
      <div className="flex items-center gap-3">
        <img
          src={avatarSrc}
          alt={avatarAlt ?? name}
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-full border-[1.5px] border-secondary-300 object-cover"
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="font-b3 font-semibold leading-none text-primary-400">
            {name}
          </h3>
          <p className="font-b5 mt-1 italic leading-tight text-primary-300/80">
            {role}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span
          aria-hidden
          className="font-serif text-[28px] font-bold leading-none text-primary-300/90"
        >
          “
        </span>
        <div className="font-b4 leading-relaxed text-primary-400">{quote}</div>
      </div>
    </article>
  );
}

export default TestimonialCard;
