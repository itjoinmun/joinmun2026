import Value from "@/src/modules/landing/value";
import Award from "@/src/modules/landing/award"
import Hero from "@/src/modules/landing/hero"
import Timeline from "@/src/modules/landing/timeline"
import Chair from "@/src/modules/landing/chair"
import Theme from "@/src/modules/landing/theme"
import Award from "@/src/modules/landing/award"
import Gallery from "@/src/modules/landing/gallery"
import { Faq } from "@/src/modules/landing/faq"
import { faqItems } from "@/src/modules/landing/data/faq-data"

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <About/> haidar */}
       <Value />
      {/* <Council/> ramzi */}
      {/* <Events /> ramzi */}
      <Timeline />
      <Chair />
      <Theme />
      <Award />
      {/* <PastRecords /> dani */}
      {/* <Testimonies /> haidar */}
      <Gallery />
      <Faq items={faqItems} />
      {/* <CTA /> aya */}
    </main>
  )
}
