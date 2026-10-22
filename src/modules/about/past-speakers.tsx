import Container from "@/src/components/ui/container"

import { pastSpeakers } from "@/src/modules/about/data/past-speakers"
import Card from "@/src/components/about/past-speakers/card"

const bgImgColors = ["red.webp", "green.webp", "yellow.webp"]

const TOTAL_BG = bgImgColors.length

const PastSpeakers = () => {
  return (
    <Container className="pt-5 pb-9.5 md:pt-6 md:pb-11.5">
      <section className="space-y-2">
        <h2 className="font-h4">Past Speakers</h2>
        <div className="flex justify-between overflow-auto gap-6 *:shrink-0">
          {pastSpeakers.map((speaker, i) => (
            <Card
              key={i}
              speaker={speaker}
              bgImage={`/about/past-speakers/${bgImgColors[i % TOTAL_BG]}`}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default PastSpeakers
