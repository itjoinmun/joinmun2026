import Image from "next/image";
import Container from "@/src/components/ui/container";

export default function AboutTheme() {
  return (
    <section id="about-theme" className="bg-background py-9 lg:pt-8 lg:pb-6">
      <Container className="gap-0 px-6 md:px-20 lg:px-28">
        <h2 className="mb-3 font-h4 text-black lg:hidden">
          JOINMUN 2026: Invitational
        </h2>

        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-6">
          <Image
            src="/about/about-image.webp"
            alt="JOINMUN 2026 delegates holding invitation cards"
            width={451}
            height={313}
            sizes="(min-width: 1024px) 420px, calc(100vw - 48px)"
            className="h-auto w-full"
          />

          <div className="text-black">
            <h2 className="hidden font-h2 lg:block">
              JOINMUN 2026: Invitational
            </h2>
            <div className="mt-0 space-y-4 font-b5 md:font-b4 lg:mt-3 lg:space-y-5">
              <p>
                JOINMUN 2026: Invitational renews the annual JOINMUN experience
                through a more curated conference model. It preserves the
                qualities of academic integrity, inclusive participation,
                institutional engagement, and cultural resonance, while
                introducing a carefully composed set of councils, both
                in-person and online.
              </p>
              <p>
                Invitations are extended to selected Model United Nations clubs
                and communities, with designated delegate allocations and
                participation arrangements. Public registration remains an
                essential pathway, while the invitational mechanism strengthens
                institutional relationships and creates a balanced, diverse
                delegate cohort. The event is intended to feel focused and
                distinctive without compromising openness or accessibility.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
