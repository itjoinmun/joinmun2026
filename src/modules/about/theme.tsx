import Image from "next/image";

export default function ThemeAbout() {
  return (
    <section className="min-h-103 flex flex-col md:flex-row justify-center items-stretch py-4 px-5 md:py-9 md:gap-7 gap-2">
      <h1 className="font-h3 inline md:hidden">JOINMUN 2026: Invitational</h1>

      <Image
        src={"/about/about-theme.webp"}
        alt="About Theme Image"
        width={451}
        height={313}
        className="md:min-w-112.75 md:min-h-78.25"
      />

      <div className="flex flex-col gap-3 max-w-178.25">
        <h1 className="font-h1 hidden md:inline">JOINMUN 2026: Invitational</h1>

        <p className="font-b4 md:font-b2">
          JOINMUN 2026: Invitational renews the annual JOINMUN experience
          through a more curated conference model. It preserves the qualities of
          academic integrity, inclusive participation, institutional engagement,
          and cultural resonance, while introducing a carefully composed set of
          councils, both in-person and online.
          <br />
          <br />
          Invitations are extended to selected Model United Nations clubs and
          communities, with designated delegate allocations and participation
          arrangements. Public registration remains an essential pathway, while
          the invitational mechanism strengthens institutional relationships and
          creates a balanced, diverse delegate cohort. The event is intended to
          feel focused and distinctive without compromising openness or
          accessibility.
        </p>
      </div>
    </section>
  );
}
