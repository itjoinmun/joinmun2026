import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section className="flex justify-center bg-background px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 xl:py-20 overflow-x-hidden">
      <div className="flex w-full container mx-auto flex-col md:flex-row justify-center gap-8 md:gap-16">
        <div className="w-full flex flex-col gap-4">
          <h1 className="font-h1 block md:hidden">
            About Us: Empower Voices, Build Connections
          </h1>
          <Image
            src={"/landing/about-image.webp"}
            alt={"About Image"}
            width={640}
            height={480}
            priority
            className="w-full max-w-150 mx-auto object-cover block min-h-65"
          />
        </div>

        <div className="flex min-w-0 w-full flex-col gap-4 text-black">
          <h1 className="font-h1 hidden sm:block">
            About Us: Empower Voices, Build Connections
          </h1>
          <p className="font-b4 md:font-b2 text-justify text-black">
            Jogja International Model United Nations (JOINMUN) is an{" "}
            <span className="font-bold">
              International Model United Nations
            </span>{" "}
            conference initiated by the{" "}
            <span className="font-bold">
              Universitas Gadjah Mada Model United Nations Community
            </span>
            . It brings together emerging leaders to explore urgent global
            issues through structured debate, negotiation, coalition-building,
            and resolution drafting. In professionally moderated councils,
            delegates represent countries, institutions, or relevant
            stakeholders while learning to balance national interests with
            collective action. <br />
            <br /> More than an academic simulation, JOINMUN is a space for
            intellectual curiosity, intercultural exchange, and responsible
            leadership. By combining high academic standards with the
            hospitality and cultural richness of Yogyakarta, the conference
            empowers participants to sharpen their reasoning, express ideas
            confidently, and build connections beyond the committee room.
          </p>
          <Link
            href={"#about"}
            className="inline-flex items-center justify-center gap-2.5 bg-primary-300 text-white w-fit min-h-11 px-5 py-3 rounded-lg font-b2 hover:bg-primary-200 active:bg-primary-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2"
          >
            Explore More{" "}
            <FaArrowRight className="shrink-0 text-sm" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
