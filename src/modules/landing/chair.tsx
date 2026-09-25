import ChairCard from "@/src/components/landing/chair-card"
import Container from "@/src/components/ui/container"
import { GiEarthAsiaOceania } from "react-icons/gi"
import { LuHandshake } from "react-icons/lu"
import { MdOutlineGroups } from "react-icons/md"
import { RiBookLine } from "react-icons/ri"

const Chair = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('/landing/chairBG.webp'), linear-gradient(to bottom, #B35144, #5E2922)",
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
        backgroundPosition: "center, center",
      }}
    >
      <Container className="gap-4 py-5.5 md:gap-6 md:py-8">
        <div className="text-white">
          <h2 className="font-h3 md:font-h1">
            Behind the Debate: Good Chairing in Action
          </h2>
          <p className="font-medium leading-6.25 md:font-h7">
            Discover how our Chairs shape meaningful debate, guide committee
            discussions, and keep every session running smoothly.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <ChairCard Icon={MdOutlineGroups} title="Academic Leadership">
            Guide debate and facilitates meaningful discussion
          </ChairCard>
          <ChairCard Icon={RiBookLine} title="Preparation & Resource">
            Create Study Guides, RoP, and relevant preferences.
          </ChairCard>
          <ChairCard Icon={LuHandshake} title="Team Collaboration">
            Work closely with the academic team to shape your council
          </ChairCard>
          <ChairCard Icon={GiEarthAsiaOceania} title="Impactful Experience">
            Join JOINMUN as a Chair and help create meaningful
          </ChairCard>
        </div>
      </Container>
    </section >
  )
}

export default Chair
