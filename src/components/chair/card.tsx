import React from "react"
import { IconType } from "react-icons"

interface Props {
  children: React.ReactNode
  title: string
  Icon: IconType
}

const Card = ({ children, Icon, title }: Props) => {
  return (
    <div className="rounded-sm border border-neutral-300 bg-neutral-100 text-black px-3 py-5 flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <div className="rounded-sm border border-primary-400 bg-primary-300 py-0.5 px-1">
          <Icon className=" text-secondary-200 size-6" />
        </div>
        <h3 className="font-h7">{title}</h3>
      </div>
      <p className="font-b3">{children}</p>
    </div>
  )
}

export default Card
