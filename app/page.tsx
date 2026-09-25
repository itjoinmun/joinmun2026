import Hero from "@/src/modules/landing/hero"
import About from "@/src/modules/landing/about";
import Value from "@/src/modules/landing/value";
import { Council } from "@/src/modules/landing/council";
import Events from "@/src/modules/landing/event";
import Timeline from "@/src/modules/landing/timeline"
import Chair from "@/src/modules/landing/chair"
import Theme from "@/src/modules/landing/theme"
import Award from "@/src/modules/landing/award"
import PastRecords from "@/src/modules/landing/past-records";
import Gallery from "@/src/modules/landing/gallery"
import { Faq } from "@/src/modules/landing/faq"
import { faqItems } from "@/src/modules/landing/data/faq-data"

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="about">
        <About/>
      </div>
      <Value />
      <div id="councils">
        <Council />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <Chair />
      <Theme />
      <Award />
      <PastRecords />
      {/* <Testimonies /> haidar */}
      <Gallery />
      <Faq items={faqItems} />
    </main>
  )
}
