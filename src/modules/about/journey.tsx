import Image from "next/image";
import Container from "@/src/components/ui/container";

const Journey = () => {
  return (
    <section className="bg-background py-10 sm:py-14 lg:py-16 xl:py-20">
      <Container>
        <h2 className="font-h5 text-neutral-200 md:font-h1">
          A Journey of Ideas, Diplomacy, and Impact
        </h2>
        <p className="font-b3 font-medium font-serif text-neutral-200 md:font-b1 md:font-serif">
          Growing through every conference, connection, and conversation.
        </p>

        <div className="mt-1 grid gap-3 md:grid-cols-[1fr_2fr] md:items-start md:mt-2 md:gap-6">
          <div className="relative aspect-357/150 w-full overflow-hidden md:aspect-384/157">
            <Image
              src="/about/journey.webp"
              alt="journey of JOINMUN"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>

          <p className="font-b5 text-neutral-200 md:font-b3">
            Since its early beginnings, JOINMUN has grown from a student-led
            Model United Nations initiative at Universitas Gadjah Mada into an
            international platform connecting young leaders through diplomacy,
            debate, and cross-cultural exchange. Across the years, JOINMUN has
            expanded its reach, welcomed participants and speakers from diverse
            backgrounds, and continued to create meaningful spaces for young
            people to engage with global issues.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Journey;
