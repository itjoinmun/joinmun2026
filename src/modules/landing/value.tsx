import React from "react";
import ValueCard from "@/src/components/value/value-card";

const Value = () => {
  const VALUE_CARDS = [
    {
      title: "Curated conference",
      description:
        "Selection of councils, agendas, venues, and supporting events creates a coherent and memorable experience.",
      imageSrc: "/landing/curated-conference.webp",
      waveSrc: "/landing/wave-olive-hires.webp",
      // href: "/value/curated-conference",
    },
    {
      title: "Inclusive standards",
      description:
        "Delegates across age groups are welcomed while professional academic and event standards are maintained.",
      imageSrc: "/landing/inclusive-standards.webp",
      waveSrc: "/landing/wave-red-hires.webp",
      // href: "/value/inclusive-standards",
    },
    {
      title: "Yogyakarta experience",
      description:
        "Conference proceedings are enriched by cultural encounters and spaces that reflect the city’s identity.",
      imageSrc: "/landing/yogya-experience.webp",
      waveSrc: "/landing/wave-green-hires.webp",
      // href: "/value/yogya-experience",
    },
  ];

  return (
    <section className="py-20">
      {/* div ini nanti diganti pake <Container> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-h2 text-neutral-200">
          What Makes JOINMUN Worth It
        </h2>
        <p className="font-b1 font-serif mt-1 text-neutral-200">
          Explore diplomacy, connection, and culture in one journey.
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {VALUE_CARDS.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
