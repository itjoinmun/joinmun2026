import Image from "next/image";

type AwardCardProps = {
  title: string;
  description: string;
  category: string;
  image: string;
  backgroundImage: string;
};
export default function AwardCard({
  title,
  description,
  category,
  image,
  backgroundImage,
}: AwardCardProps) {
  const isCrisis = category === "Crisis Only";

  return (
    <article className="relative h-89 w-55 rounded-lg border-4 border-neutral-100 bg-neutral-900">
        <div className="absolute inset-0 overflow-hidden rounded-sm">
          <Image src={backgroundImage} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-black/90" />
        </div>
      <div className="absolute -top-1 right-0 z-20">
        <span
          className={`rounded-bl-md bg-neutral-100 px-3 py-1 font-b5 font-bold ${
            isCrisis ? "text-primary-200" : "text-black"
          }`}
        >
          {category}
        </span>
      </div>
      <div className="relative z-10 flex flex-col gap-1 px-4 py-8">
        <div className="font-h4 text-neutral-100">{title}</div>
        <div className="text-[10px] text-neutral-100">{description}</div>
      </div>
      <div className="absolute inset-x-0 -bottom-4 z-10 aspect-square overflow-visible">
        <Image src={image} alt="" fill className="scale-116 object-contain" />
      </div>
    </article>
  );
}