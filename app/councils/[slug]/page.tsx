import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiChevronLeft } from "react-icons/hi2";
import { ChairCarousel } from "@/src/modules/councils/chair-carousel";
import { councils, getCouncil } from "@/src/modules/councils/data";
import { ReadMoreDescription } from "@/src/modules/councils/read-more-description";

interface CouncilPageProps {
  params: Promise<{ slug: string }>;
}

const levelTagStyles: Record<string, string> = {
  Beginner: "bg-neutral-100 text-black border border-neutral-400",
  Intermediate: "bg-secondary-100 text-black",
  Advanced: "bg-tertiary-100 text-black",
};

const modeTagStyles: Record<string, string> = {
  Offline: "bg-tertiary-500 text-neutral-100",
  Online: "bg-primary-300 text-neutral-100",
};

export function generateStaticParams() {
  return councils.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CouncilPageProps): Promise<Metadata> {
  const { slug } = await params;
  const council = getCouncil(slug);

  if (!council) return {};

  return {
    title: `${council.detailName} | JOINMUN 2026`,
    description: council.topic,
  };
}

export default async function CouncilPage({ params }: CouncilPageProps) {
  const { slug } = await params;
  const council = getCouncil(slug);

  if (!council) notFound();

  return (
    <main className="relative isolate overflow-hidden bg-[#fdfaec] px-6 pb-10 pt-28 text-black sm:px-10 md:pb-16 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[430px] -z-10 h-[920px] bg-[url('/landing/pattern.svg')] bg-center bg-no-repeat opacity-[0.055] [background-size:1700px_auto]"
      />

      <div className="mx-auto w-full max-w-[1200px]">
        <Link
          href="/#councils"
          className="inline-flex h-9 items-center gap-1 rounded-lg bg-primary-300 px-3 text-sm font-medium text-white transition-colors hover:bg-primary-200"
        >
          <HiChevronLeft aria-hidden="true" />
          Back
        </Link>

        <header className="mt-3">
          <div className="flex items-center gap-3">
            <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full bg-white">
              <Image
                src={council.logo}
                alt={`${council.name} logo`}
                fill
                sizes="60px"
                className="object-contain"
              />
            </div>
            <h1 className="font-serif text-[29px] font-bold leading-tight sm:text-[34px]">
              {council.detailName}
            </h1>
          </div>

          <div className="mt-3 flex flex-wrap gap-3">
            <span className={`min-w-[105px] rounded-lg px-3 py-2 text-center text-xs font-bold ${levelTagStyles[council.level]}`}>
              {council.level}
            </span>
            <span className={`min-w-[105px] rounded-lg px-3 py-2 text-center text-xs font-bold ${modeTagStyles[council.mode]}`}>
              {council.mode}
            </span>
            <span className="min-w-[105px] rounded-lg bg-secondary-200 px-3 py-2 text-center text-xs font-bold text-black">
              {council.type}
            </span>
          </div>
        </header>

        <section className="mt-6 rounded-[5px] border border-neutral-500 bg-[#f3efce] p-5 md:p-6" aria-labelledby="topic-heading">
          <h2 id="topic-heading" className="font-serif text-[26px] font-bold leading-tight">
            Topic
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-black">{council.topic}</p>
        </section>

        <section className="mt-6 rounded-[5px] border border-neutral-500 bg-[#f3efce] p-5 md:p-6" aria-labelledby="description-heading">
          <h2 id="description-heading" className="font-serif text-[26px] font-bold leading-tight">
            Council Description
          </h2>
          <ReadMoreDescription description={council.description} />
        </section>

        <ChairCarousel chairs={council.chairs} />
      </div>
    </main>
  );
}
