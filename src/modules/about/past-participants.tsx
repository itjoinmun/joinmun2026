import Image from "next/image";
import Container from "@/src/components/ui/container";

type Stat = { value: string; label: string; tone: "green" | "red" };

const stats: Stat[] = [
  { value: "180+", label: "Participants", tone: "green" },
  { value: "74.5%", label: "High School Students", tone: "red" },
  { value: "25.5%", label: "University Students", tone: "red" },
  { value: "64.1%", label: "Indonesia", tone: "green" },
  { value: "35.9%", label: "Asia", tone: "red" },
];

type Logo = { src: string; alt: string; pngW: number; pngH: number; cls: string };

const logos: Logo[] = [
  { src: "ugm.png", alt: "Universitas Gadjah Mada", pngW: 146, pngH: 126, cls: "w-[37px] h-[32px] lg:w-[73px] lg:h-[63px]" },
  { src: "unj.png", alt: "Universitas Negeri Jakarta", pngW: 112, pngH: 122, cls: "w-[30px] h-[33px] lg:w-[56px] lg:h-[61px]" },
  { src: "smu.png", alt: "Singapore Management University", pngW: 272, pngH: 123, cls: "w-[68px] h-[31px] lg:w-[136px] lg:h-[61px]" },
  { src: "unibraw.png", alt: "Universitas Brawijaya", pngW: 120, pngH: 122, cls: "w-[30px] h-[31px] lg:w-[60px] lg:h-[61px]" },
  { src: "itb.png", alt: "Institut Teknologi Bandung", pngW: 124, pngH: 122, cls: "w-[31px] h-[31px] lg:w-[62px] lg:h-[61px]" },
  { src: "binus.png", alt: "BINUS University", pngW: 204, pngH: 122, cls: "w-[51px] h-[31px] lg:w-[102px] lg:h-[61px]" },
  { src: "unair.png", alt: "Universitas Airlangga", pngW: 134, pngH: 134, cls: "w-[35px] h-[35px] lg:w-[67px] lg:h-[67px]" },
  { src: "trisakti.png", alt: "Universitas Trisakti", pngW: 144, pngH: 134, cls: "w-[38px] h-[35px] lg:w-[72px] lg:h-[67px]" },
  { src: "um.png", alt: "University of Malaya", pngW: 382, pngH: 130, cls: "w-[119px] h-[33px] lg:w-[191px] lg:h-[65px]" },
  {
    src: "nus.png",
    alt: "National University of Singapore",
    pngW: 302,
    pngH: 130,
    cls: "w-[83px] h-[35px] lg:w-[151px] lg:h-[65px]",
  },
];

const numberTone = {
  green: "from-[#2AAC6C] to-[#1B462C]",
  red: "from-[#E86958] to-[#5E2922]",
} as const;

function Stat({ stat, className }: { stat: Stat; className?: string }) {
  return (
    <div className={`min-w-0 text-center ${className}`}>
      <span
        className={`block bg-gradient-to-b bg-clip-text font-serif font-bold text-transparent text-[34px] leading-[51px] lg:text-[48px] lg:leading-[58px] ${numberTone[stat.tone]}`}
      >
        {stat.value}
      </span>
      <span className="block font-serif font-medium text-black text-[20px] leading-[25px] lg:font-bold lg:text-[26px] lg:leading-[39px]">
        {stat.label}
      </span>
    </div>
  );
}

export default function PastParticipants() {
  return (
    <section className="relative h-[320px] overflow-hidden bg-[#F3EFCE] lg:h-[284px]">
      <Image
        src="/about/ornament-left.svg"
        alt=""
        aria-hidden="true"
        width={189}
        height={570}
        className="pointer-events-none absolute left-[-106px] top-[-182px] w-[186px] h-[559px] lg:left-[-34px] lg:top-[-185px] lg:w-[186px] lg:h-[558px]"
      />
      <Image
        src="/about/ornament-right.svg"
        alt=""
        aria-hidden="true"
        width={482}
        height={776}
        className="pointer-events-none absolute left-[251px] top-[-102px] w-[449px] h-[722px] lg:left-[1030px] lg:top-[-384px] lg:w-[490px] lg:h-[797px]"
      />

      <Container className="relative pt-[6px] pb-[23px] lg:pt-[17px] lg:pb-[28px]">
        <h2 className="font-serif font-bold text-black text-[22px] leading-[33px] lg:text-[30px] lg:leading-[45px]">
          Past Participants
        </h2>

        <div className="flex flex-col gap-[27px] lg:flex-row lg:gap-0">
          <div className="flex gap-6 lg:w-[662px] lg:gap-0">
            <Stat stat={stats[0]} className="flex-1 lg:flex-none lg:w-[182px]" />
            <Stat stat={stats[1]} className="flex-1 lg:flex-none lg:w-[240px]" />
            <Stat stat={stats[2]} className="flex-1 lg:flex-none lg:w-[240px]" />
          </div>
          <div className="flex gap-6 lg:ml-auto lg:w-[480px] lg:gap-0">
            <Stat stat={stats[3]} className="flex-1 lg:flex-none lg:w-[240px]" />
            <Stat stat={stats[4]} className="flex-1 lg:flex-none lg:w-[240px]" />
          </div>
        </div>

        <div className="mt-[23px] flex items-end gap-6 overflow-x-auto [scrollbar-width:none] lg:mt-[12px] lg:gap-[22px] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {logos.map((logo) => (
            <Image
              key={logo.src}
              src={`/about/${logo.src}`}
              alt={logo.alt}
              width={logo.pngW}
              height={logo.pngH}
              className={`shrink-0 ${logo.cls}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
