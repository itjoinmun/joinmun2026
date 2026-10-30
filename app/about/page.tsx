import AboutHero from "@/src/modules/about/hero";
import { Pillar } from "@/src/modules/about/pillars";
import Journey from "@/src/modules/about/journey";
import PastParticipants from "@/src/modules/about/past-participants";
import PastSpeakers from "@/src/modules/about/past-speakers";
import AboutTheme from "@/src/modules/about/theme";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutTheme />
      <Pillar />
      <Journey />
      <PastParticipants />
      <PastSpeakers />
    </main>
  );
}
