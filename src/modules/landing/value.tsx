import { ValueCard } from "../../components/value/value-card";

const VALUE_CARDS = [
  {
    title: "Curated conference",
    description:
      "Selection of councils, agendas, venues, and supporting events creates a coherent and memorable experience.",
    imageSrc: "/landing/curated-conference.webp",
    waveSrc: "/landing/wave-olive.webp",
    href: "/value/curated-conference", // coming soon (?)
  },
  {
    title: "Inclusive standards",
    description:
      "Delegates across age groups are welcomed while professional academic and event standards are maintained.",
    imageSrc: "/landing/inclusive-standards.webp",
    waveSrc: "/landing/wave-red-hires.webp",
    href: "/value/inclusive-standards", // coming soon (?)
  },
  {
    title: "Yogyakarta experience",
    description:
      "Conference proceedings are enriched by cultural encounters and spaces that reflect the city’s identity.",
    imageSrc: "/landing/yogya-experience.webp",
    waveSrc: "/landing/wave-green-hires.webp",
    href: "/value/yogya-experience", // coming soon (?)
  },
];

export function ValueSection() {
  return (
    // background FDFAEC diinsert nanti di globals sm kak aya
    <section className="bg-secondary-100 py-20">
      {/* div ini nanti diganti pake <Container> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-h2 text-primary-400">
          What Makes JOINMUN Worth It
        </h2>
        <p className="font-b2 mt-2 text-neutral-900">
          Explore diplomacy, connection, and culture in one journey.
        </p>

        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {VALUE_CARDS.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
