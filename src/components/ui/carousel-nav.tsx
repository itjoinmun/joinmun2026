import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface CarouselNavProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
  label: string;
  dotLabel: string;
  activeDotClass: string;
  inactiveDotClass: string;
}

function CarouselNav({
  page,
  total,
  onChange,
  label,
  dotLabel,
  activeDotClass,
  inactiveDotClass,
}: CarouselNavProps) {
  const navButtonClass =
    "w-9 h-9 rounded-lg bg-primary-300 text-neutral-100 flex items-center justify-center hover:bg-primary-200 transition-colors disabled:opacity-50 disabled:hover:bg-primary-300";

  return (
    <nav className="flex items-center justify-center gap-[23px]">
      <button
        type="button"
        onClick={() => onChange(Math.max(0, page - 1))}
        disabled={page === 0}
        aria-label={`Previous ${label}`}
        className={navButtonClass}
      >
        <ChevronLeftIcon />
      </button>
      <div className="flex gap-2">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i)}
            aria-label={`Go to ${dotLabel} ${i + 1}`}
            aria-current={page === i}
            className={`w-4 h-4 rounded-full transition-colors ${
              page === i ? activeDotClass : inactiveDotClass
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange(Math.min(total - 1, page + 1))}
        disabled={page === total - 1}
        aria-label={`Next ${label}`}
        className={navButtonClass}
      >
        <ChevronRightIcon />
      </button>
    </nav>
  );
}

export { CarouselNav };
