import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative isolate h-[417px] overflow-hidden rounded-b-[14px] text-white md:h-[407px]">
      <Image
        src="/about/about-hero.webp"
        alt="JOINMUN delegates gathering after a conference session"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-end px-6 pb-16 md:px-20 md:pb-14 lg:px-28">
        <div className="max-w-[760px]">
          <h1 className="font-h3 sm:font-h2 md:font-h1  bg-linear-to-r from-white to-[#E3BC53] text-transparent bg-clip-text">
            Shaping Dialogue, Connecting{" "}
            <span className="text-secondary-300">Perspectives</span>
          </h1>
          <p className="mt-4 max-w-[720px] font-b4 leading-relaxed md:mt-3 md:font-b3">
            Discover the story and values behind JOINMUN, where global dialogue
            meets the spirit of Yogyakarta.
          </p>
        </div>
      </div>
    </section>
  );
}
