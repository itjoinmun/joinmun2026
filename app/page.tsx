import Value from "@/src/modules/landing/value";
import Award from "@/src/modules/landing/award"
import Chair from "@/src/modules/landing/chair"
import Theme from "@/src/modules/landing/theme"
import { Faq } from "@/src/modules/landing/faq"
import { faqItems } from "@/src/modules/landing/data/faq-data"

export default function Home() {
  return (
    <main>
      {/* <Hero/> aya */}
      {/* <About/> haidar */}
       <Value />
      {/* <Council/> ramzi */}
      {/* <Events /> ramzi */}
      {/* <Timeline /> aya */}
      <Chair />
      <Theme />
      <Award />
      {/* <PastRecords /> dani */}
      {/* <Testimonies /> haidar */}
      {/* <Gallery /> aya */}
      <Faq items={faqItems} />
      {/* <CTA /> aya */}
    </main>
  )
}
