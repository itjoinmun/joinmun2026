import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="relative min-h-103 overflow-hidden rounded-b-2xl">
      <Image
        width={1000}
        height={1000}
        src="/about/hero.webp"
        alt="Hero About Image"
        className="absolute inset-0 h-full w-full object-cover md:object-[20%_40%] rounded-b-2xl"
      />

      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#111111]/50 to-black" />

      <div className="relative px-8 md:px-16 py-16 z-10 flex gap-3 min-h-103 flex-col items-start justify-end">
        <h1 className="font-h3 md:font-h1 inline-block bg-linear-to-r from-neutral-100 to-[#E3BC53] bg-clip-text text-transparent">
          Shaping Dialogue, Connecting Perspectives
        </h1>

        <h2 className="font-b3 md:font-h7 text-neutral-100">
          Discover the story and values behind JOINMUN, where global dialogue
          meets the spirit of Yogyakarta.
        </h2>
      </div>
    </section>
  );
}
