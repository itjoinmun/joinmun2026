import Image from "next/image"
import Container from "@/src/components/ui/container"

const Theme = () => {
  return (
    // Only temporary background color so I could better see the dark box AND (mostly) dark font in this section
    // WILL REMOVE after document background color is set
    <section className="text-neutral-1000">
      <Container className="gap-14 py-5.5 md:flex-row md:items-center md:py-8">
        <div className="space-y-1">
          <h2 className="font-h4 leading-10 md:font-h2">
            <span className="font-normal">The 2026</span> Theme!
          </h2>
          <h2 className="font-h3 leading-10.5 md:font-h1">
            Beyond the Status Quo: Diplomacy for an Evolving World
          </h2>
          <Image
            src="/landing/themeMobile.webp"
            alt="Official Meeting"
            className="w-full block md:hidden"
            height={355}
            width={291}
          />
          <div className="space-y-2 font-b2 text-base text-justify">
            <p>The theme begins with a simple recognition:</p>
            <p className="bg-primary-500 py-2 font-h7 leading-7.5 italic text-neutral-100 text-center">
              The conditions shaping international affairs are changing faster
              than diplomatic habits can accommodate.
            </p>
            <p>
              Emerging{" "}
              <b>
                technologies, environmental disruption, contested information,
                shifting economic relations, and increasingly complex conflicts
              </b>{" "}
              demand forms of cooperation that are more adaptive, inclusive, and
              progressive.
              <br />
              <br />
              To move beyond the status quo is to examine where established
              approaches remain valuable, where they have become insufficient, and
              how they can evolve in response to new realities. JOINMUN 2026
              therefore{" "}
              <b>
                invites delegates to question assumptions, listen across
                differences, and design solutions that are both principled and
                workable.
              </b>{" "}
              Throughout the conference, diplomacy is presented not as a passive
              reaction to change, but as a means of shaping it.
            </p>
          </div>
        </div>
        <Image
          src="/landing/themeDesktop.webp"
          alt="Official Meeting"
          className="hidden shrink-0 md:block"
          width={353}
          height={533}
        />
      </Container>
    </section>
  )
}

export default Theme
