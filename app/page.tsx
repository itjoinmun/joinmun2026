import Award from "@/src/modules/landing/award"
import Chair from "@/src/modules/landing/chair"
import Theme from "@/src/modules/landing/theme"
import { Faq } from "@/src/modules/landing/faq"
import { faqItems } from "@/src/modules/landing/data/faq-data"
import Gallery from "@/src/modules/landing/gallery"

export default function Home() {
  return (
    <main>
      {/* <Hero/> aya */}
      {/* <About/> haidar */}
      {/* <Value/> dani */}
      {/* <Council/> ramzi */}
      {/* <Events /> ramzi */}
      {/* <Timeline /> aya */}
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
