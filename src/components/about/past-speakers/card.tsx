import Image from "next/image"

import { speaker } from "@/src/modules/about/data/past-speakers"

const Bolded = ({ plaintext }: { plaintext: string }) => {
  const strings = plaintext.split("*")
  return (
    <>
      {strings[0]}
      <b>{strings[1]}</b>
    </>
  )
}

const Card = ({ speaker, bgImage }: { speaker: speaker; bgImage: string }) => {
  return (
    <div className="space-y-1 text-xs font-b4 flex flex-col justify-between w-45.5 bg-neutral-100 border border-neutral-300 overflow-hidden pb-2.5">
      <div className="space-y-1.5">
        <div className="relative h-37.5">
          <Image
            src={bgImage}
            alt={`Background`}
            width="142"
            height="234"
            className="absolute left-22 -top-16"
          />
          <Image
            src={speaker.imgSrc}
            alt={`Gambar dari ${speaker.name}`}
            width="113"
            height="122"
            className="absolute bottom-0 left-1"
          />
        </div>
        <div className="px-3 md:px-3.5 space-y-1">
          <section>
            <h3 className="font-h7">{speaker.name}</h3>
            <p>
              <Bolded plaintext={speaker.description} />
            </p>
          </section>
        </div>
      </div>
      <p className="text-right px-3 md:px-3.5">{speaker.year}</p>
    </div>
  )
}

export default Card
