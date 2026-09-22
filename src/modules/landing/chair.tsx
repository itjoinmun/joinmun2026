import Card from "@/src/components/chair/card"
import { GiEarthAsiaOceania } from "react-icons/gi"
import { LuHandshake } from "react-icons/lu"
import { MdOutlineGroups } from "react-icons/md"
import { RiBookLine } from "react-icons/ri"

const Chair = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <section>
        <h2 className="font-h3 md:font-h1">
          Behind the Debate: Good Chairing in Action
        </h2>
        <p className="font-medium leading-6.25 md:font-h7">
          Discover how our Chairs shape meaningful debate, guide committee
          discussions, and keep every session running smoothly.
        </p>
      </section>
      <div className="flex flex-col gap-6 md:flex-row">
        <Card Icon={MdOutlineGroups} title="Academic Leadership">
          Guide debate and facilitates meaningful discussion
        </Card>
        <Card Icon={RiBookLine} title="Preparation & Resource">
          Create Study Guides, RoP, and relevant preferences.
        </Card>
        <Card Icon={LuHandshake} title="Team Collaboration">
          Work closely with the academic team to shape your council
        </Card>
        <Card Icon={GiEarthAsiaOceania} title="Impactful Experience">
          Join JOINMUN as a Chair and help create meaningful
        </Card>
      </div>
    </div>
  )
}

export default Chair
