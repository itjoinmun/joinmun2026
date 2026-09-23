import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

type ValueCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  waveSrc: string;
  href: string;
};

export function ValueCard({
  title,
  description,
  imageSrc,
  waveSrc,
  href,
}: ValueCardProps) {
  return (
    <div className="relative flex aspect-[384/201] flex-col overflow-hidden rounded-[5px]">
      <Image src={imageSrc} alt="" fill aria-hidden className="object-cover" />

      <div className="absolute inset-0 bg-neutral-100/75" aria-hidden />

      <Image
        src={waveSrc}
        alt=""
        width={774}
        height={410}
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-auto w-full"
      />

      <div className="relative flex h-full flex-col justify-between px-[18px] py-5">
        <div>
          <h3 className="font-h6 text-neutral-200">{title}</h3>
          <div className="mt-2 mb-3 h-px w-full bg-neutral-200" />
          <p className="font-b3 text-neutral-200">{description}</p>
        </div>
        <Link
          href={href}
          className={cn(
            buttonVariants({ size: "sm" }),
            "w-fit gap-2 self-end rounded-xl font-b5",
          )}
        >
          See More
          <HiArrowRight />
        </Link>
      </div>
    </div>
  );
}
