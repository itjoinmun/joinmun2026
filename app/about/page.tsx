import { Pillar } from "@/src/modules/about/pillars"
import PastParticipants from "@/src/modules/about/past-participants";
import PastSpeakers from "@/src/modules/about/past-speakers"

export default function AboutPage() {
  return (
    <main>
      <Pillar/>
      <PastParticipants />
      <PastSpeakers />
    </main>
  )
}
