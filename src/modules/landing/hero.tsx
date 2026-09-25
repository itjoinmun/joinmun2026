"use client";

import { Button } from "@/src/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const title = "Where Voices Shape Global Conversations";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.9, staggerChildren: 0.035 },
  },
};

const characterVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative isolate h-[550px] min-h-[550px] max-h-[550px] overflow-hidden text-white sm:h-auto sm:min-h-[760px] md:h-screen sm:max-h-none">
      <Image
        src="/landing/hero/hero-background.webp"
        alt="Delegates in a JOINMUN conference session"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <motion.div
        initial={{ opacity: 0, x: 180 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 z-10 w-[76%] max-w-[820px] right-0 lg:w-[56%]"
      >
        <Image
          src="/landing/hero/green-wave.webp"
          alt=""
          width={812}
          height={339}
          className="h-auto w-full z-3 hidden md:block"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[58%] max-w-none md:h-[68%] md:max-w-[780px] lg:right-[4%] lg:left-auto lg:h-[88%] lg:w-[52%] lg:max-w-[760px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-[27%] bottom-0 h-full w-[46%] max-w-none z-3 md:right-[34%] md:w-full md:max-w-95.75"
        >
          <Image
            src="/landing/hero/hero-female.webp"
            alt="JOINMUN delegate speaking into a microphone"
            fill
            sizes="(max-width: 640px) 35vw, (max-width: 1024px) 30vw, 20vw"
            className="object-contain object-bottom"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 130 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-[-5%] bottom-0 h-full w-[60%] max-w-none z-2 md:right-0 md:w-full md:max-w-[434px]"
        >
          <Image
            src="/landing/hero/hero-male.webp"
            alt="JOINMUN delegate holding a microphone"
            fill
            sizes="(max-width: 640px) 42vw, (max-width: 1024px) 38vw, 28vw"
            className="object-contain object-bottom"
          />
        </motion.div>
      </div>

      <div className="relative z-30 mx-auto flex h-full max-h-[550px] max-w-[1440px] flex-col items-start justify-start px-6 pb-7 sm:h-auto md:h-screen md:max-h-screen md:items-start md:justify-end lg:px-11 lg:pb-12.5 xl:px-11">
        <div className="mt-24 w-full max-w-[750px] md:mt-0 md:w-auto">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display font-bold bg-clip-text text-[2rem] leading-[1.08] text-transparent sm:text-6xl md:text-4xl lg:text-[clamp(3.5rem,5vw,5rem)] bg-linear-to-r from-white to-[#E3BC53]"
            aria-label={title}
          >
            {title.split(" ").map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
                {word.split("").map((character, characterIndex) => (
                  <motion.span key={`${character}-${characterIndex}`} variants={characterVariants} className="inline-block">
                    {character}
                  </motion.span>
                ))}
                {wordIndex < title.split(" ").length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.7 }}
            className="mt-3 max-w-[800px] font-b4 text-sm leading-snug text-white md:mt-5 md:font-h5 md:text-base md:leading-normal"
          >
            Step into the world of diplomacy through committee sessions, connections, cultural experiences, and unforgettable moments at JOINMUN 2026.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.7 }}
            className="mt-5 flex w-full flex-nowrap gap-3 max-md:absolute max-md:right-6 max-md:bottom-7 max-md:left-6 max-md:mt-0 md:mt-7 md:w-auto md:flex-wrap"
          >
            <Button size="xl" className="bg-transparent font-bold text-primary-100 ring-1 ring-primary-100 transition-colors hover:bg-primary-100 hover:text-white">
              <Link href="#councils">
                See Councils
              </Link>
            </Button>
            <Button size="xl">
              <Link href="https://bit.ly/LateWaveJOINMUN2026" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Register as a Delegate <HiArrowUpRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
