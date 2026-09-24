"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = Array.from({ length: 20 }, (_, index) => `/landing/gallery/${index + 1}.webp`);

export default function Gallery() {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main className="bg-background w-full text-white">
      {/*<div className="font-geist flex h-screen items-center justify-center gap-2">
        <div className="absolute top-[10%] left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
          <span className="relative max-w-[12ch] text-xs leading-tight uppercase opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            scroll down to see
          </span>
        </div>
      </div>*/}

      <div className="relative">
        <div
          ref={gallery}
          className="bg-background relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw]"
        >
          <div className="flex w-full gap-[3vw] md:hidden">
            <Column images={images.slice(0, 10)} y={y} />
            <Column images={images.slice(10, 20)} y={y3} />
          </div>

          <div className="hidden w-full gap-[2vw] md:flex lg:hidden">
            <Column images={images.slice(0, 7)} y={y} />
            <Column images={images.slice(7, 14)} y={y2} />
            <Column images={images.slice(14, 20)} y={y4} />
          </div>

          <div className="hidden w-full gap-[2vw] lg:flex">
            <Column images={images.slice(0, 5)} y={y} />
            <Column images={images.slice(5, 10)} y={y2} />
            <Column images={images.slice(10, 15)} y={y3} />
            <Column images={images.slice(15, 20)} y={y4} />
          </div>
        </div>

        {/* Top gradient overlay */}
        <div className="from-background via-background absolute top-0 right-0 left-0 z-10 h-[22rem] bg-gradient-to-b via-10% to-transparent lg:h-84" />

        {/* Bottom gradient overlay */}
        <div className="from-background via-background absolute right-0 bottom-0 left-0 z-10 h-[22rem] bg-gradient-to-t via-10% to-transparent lg:h-84" />
      </div>
    </main>
  );
}

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

function Column({ images, y }: ColumnProps) {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full min-w-0 flex-1 flex-col gap-[3vw] lg:gap-[2vw]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-auto w-full overflow-hidden">
          <Image
            src={src}
            alt={`Image ${i + 1}`}
            className="pointer-events-none object-cover"
            width={3226}
            height={2024}
          />
        </div>
      ))}
    </motion.div>
  );
}
