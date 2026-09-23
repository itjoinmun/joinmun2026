import Image from "next/image";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Council {
  name: string;
  type: string;
  level: string;
  mode: string;
  description: string;
  logo: string;
  image: string;
}

const councils: Council[] = [
  {
    name: "FIFA",
    type: "Single",
    level: "Beginner",
    mode: "Offline",
    description: "World Cup Expansion: The Importance of Regional Representation in Global Sporting Events",
    logo: "/landing/fifa-logo.png",
    image: "/landing/fifa.jpg",
  },
  {
    name: "UNICEF",
    type: "Single",
    level: "Beginner",
    mode: "Online",
    description: "Addressing the Impact of Climate-Induced Displacement of Children Following the 2022 Pakistani Floods",
    logo: "/landing/unicef-logo.png",
    image: "/landing/unicef.jpg",
  },
  {
    name: "UNEP",
    type: "Single",
    level: "Beginner",
    mode: "Offline",
    description: "Facilitating a Sustainable and Actionable Green Transition for Developing States' Mining Sector",
    logo: "/landing/unep-logo.png",
    image: "/landing/unep.jpg",
  },
  {
    name: "UNWomen",
    type: "Single",
    level: "Intermediate",
    mode: "Offline",
    description: "Addressing the Threat of Artificial Intelligence-Based Gender Violence Following The Case of the 2024 South Korean Deepfake Crisis",
    logo: "/landing/unwoman-logo.png",
    image: "/landing/unwoman.jpg",
  },
];

const tagStyles: Record<string, string> = {
  Beginner: "bg-neutral-100 text-neutral-200",
  Intermediate: "bg-secondary-300 text-neutral-200",
  Online: "bg-primary-300 text-neutral-100",
  Offline: "bg-tertiary-300 text-neutral-100",
};

export function CouncilSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-[120px] py-[36px] bg-primary-500">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[24px]">
          <h2 className="font-h1 text-neutral-100 mb-4">Choose Your Council!</h2>
          <p className="font-h5 text-neutral-100">
            Find the perfect council that matches your experience and interests.
          </p>
        </div>

        <div className="flex gap-[24px] overflow-hidden">
          {councils.map((council, index) => (
            <div
              key={council.name}
              className="relative w-[300px] h-[400px] flex-shrink-0 rounded-[4px] overflow-hidden"
            >
              <Image
                src={council.image}
                alt={`${council.name} Council`}
                fill
                className="object-cover"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute inset-0 p-[24px_16px] flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={council.logo}
                      alt={`${council.name} Logo`}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                    <h3 className="font-h6 text-neutral-100">{council.name}</h3>
                  </div>
                  <span className="font-b4 text-neutral-100">{council.type}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-[8px] font-b4 ${tagStyles[council.level]}`}>
                    {council.level}
                  </span>
                  <span className={`px-3 py-1 rounded-[8px] font-b4 ${tagStyles[council.mode]}`}>
                    {council.mode}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="font-b4 text-neutral-100 leading-relaxed">{council.description}</p>
                  <button className="w-[268px] h-[36px] rounded-[8px] bg-primary-300 border border-primary-300 text-neutral-100 font-b4 flex items-center justify-center gap-2 hover:border-primary-400 active:bg-primary-200 active:border-primary-100 transition-colors">
                    Explore council
                    <FaArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-[59px] mt-[24px]">
          <button
            className="w-[36px] h-[36px] rounded-[8px] bg-primary-300 flex items-center justify-center hover:bg-primary-200 active:bg-primary-400 transition-colors"
            aria-label="Previous council"
          >
            <FaChevronLeft className="w-[20px] h-[20px] text-neutral-100" />
          </button>
          <div className="flex gap-[8px]">
            {councils.map((_, index) => (
              <span
                key={index}
                className={`w-[16px] h-[16px] rounded-full transition-colors ${
                  index === 0
                    ? "bg-primary-300"
                    : "bg-primary-300/30"
                }`}
              />
            ))}
          </div>
          <button
            className="w-[36px] h-[36px] rounded-[8px] bg-primary-300 flex items-center justify-center hover:bg-primary-200 active:bg-primary-400 transition-colors"
            aria-label="Next council"
          >
            <FaChevronRight className="w-[20px] h-[20px] text-neutral-100" />
          </button>
        </div>
      </div>
    </section>
  );
}