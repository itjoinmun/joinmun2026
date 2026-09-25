import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Cta() {
  return (
    <section className="relative isolate min-h-[520px] md:mt-20 overflow-visible bg-gradient-to-br from-[#1f6a42] via-primary-400 to-primary-500 text-white md:min-h-[280px]">
      <Image
        src="/cta-left-ornament.webp"
        alt=""
        width={228}
        height={280}
        className="pointer-events-none absolute top-0 left-0 z-0 hidden h-full w-auto object-cover md:block"
      />
      <Image
        src="/cta-right-ornament.webp"
        alt=""
        width={228}
        height={280}
        className="pointer-events-none absolute right-0 bottom-0 z-0 hidden h-full w-auto object-cover md:block"
      />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-400 flex-col px-9 pt-8 md:min-h-[280px] md:flex-row md:items-center md:px-20 md:py-0">
        <Image
          src="/cta-person.webp"
          alt="JOINMUN delegates speaking"
          width={522}
          height={398}
          className="pointer-events-none absolute right-1/2 bottom-0 z-10 w-[96%] max-w-[522px] translate-x-1/2 md:left-[7%] md:right-auto md:w-[40%] md:max-w-[522px] md:translate-x-0"
        />

        <div className="relative z-20 ml-auto w-full md:w-[51%] lg:w-[48%]">
          <h2 className="font-h1 text-3xl leading-tight sm:text-4xl">
            Ready to Take the <span className="text-secondary-300">Floor?</span>
          </h2>
          <p className="mt-2 max-w-xl font-b3 text-sm leading-relaxed text-white/90 sm:text-base">
            Join hundreds of brilliant minds and test your negotiation skills in the most rigorous diplomatic simulation. The council is waiting for your voice.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="#councils" className="inline-flex items-center rounded-lg border border-primary-100 px-5 py-3 text-sm font-semibold text-primary-100 transition-colors hover:bg-primary-100 hover:text-primary-500">
              See Councils
            </Link>
            <Link href="https://bit.ly/LateWaveJOINMUN2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary-300 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-200">
              Register Now <HiArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
