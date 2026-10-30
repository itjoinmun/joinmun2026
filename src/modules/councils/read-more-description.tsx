"use client";

import { useId, useState } from "react";

export function ReadMoreDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false);
  const descriptionId = useId();

  return (
    <div>
      <p
        id={descriptionId}
        className={`mt-2 text-left text-sm leading-relaxed text-black md:text-justify ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {description}
      </p>
      <button
        type="button"
        aria-controls={descriptionId}
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
        className="mt-2 text-sm font-bold text-primary-300 underline-offset-4 transition-colors hover:text-primary-200 hover:underline"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}
