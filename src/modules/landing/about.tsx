import Link from "next/link";
import Image from "next/image";
import Container from "@/src/components/ui/container";
import { Button } from "@/src/components/ui/button";

export default function About() {
  return (
    <section className="flex justify-center bg-background py-10 sm:py-14 lg:py-16 xl:py-20 overflow-x-hidden">
      <Container>
        <div className="flex w-full container mx-auto flex-col md:flex-row justify-center gap-6">
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
              className="w-auto object-cover block min-h-65 h-full"
            />
          </div>

          <div className="flex min-w-0 w-full flex-col justify-between gap-4 text-black">
            <h1 className="font-h1 hidden sm:block">
              About Us: Empower Voices, Build Connections
            </h1>
            <p className="font-b4 md:font-b2 text-justify text-black">
              Jogja International Model United Nations (JOINMUN) is an{" "}
              <strong>International Model United Nations</strong> conference
              initiated by the{" "}
              <strong>
                Universitas Gadjah Mada Model United Nations Community{" "}
              </strong>{" "}
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
            <Button className="w-fit" disabled>
              <Link href={"#about"} className="flex items-center gap-2">
                Coming Soon
                {/* <FaArrowRight /> */}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
