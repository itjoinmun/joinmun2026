"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/src/lib/utils";

const links = [
  ["About", "/#about"],
  ["Timeline", "/#timeline"],
  ["Councils", "/#councils"],
  ["Events", "/#events"],
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <nav className={cn(
      "fixed z-[100] flex h-16 items-center bg-[#e5dc82] px-4 text-[#171717] shadow-sm justify-between transition-all duration-500 ease-in-out sm:px-5 lg:px-6",
      isScrolled
        ? "inset-x-0 top-0 md:inset-x-5 md:top-5 md:rounded-[10px]"
        : "inset-x-0 top-0 rounded-none",
    )}>
      <Link href="/" aria-label="JOINMUN home" className="shrink-0">
        <Image src="/logo/navbar.png" alt="JOINMUN 2026" width={179} height={47} className="h-auto w-28 sm:w-32" />
      </Link>
      <div className="hidden items-center gap-8 text-sm lg:flex justify-end w-full">
        {links.map(([label, href]) => <Link key={href} href={href} className="transition-opacity hover:opacity-60">{label}</Link>)}
        <RegisterLink />
      </div>
      <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="flex h-9 w-9 items-center justify-center rounded-md text-2xl leading-none lg:hidden">
        {menuOpen ? "×" : "☰"}
      </button>
      {menuOpen && (
        <div className="absolute top-full right-0 left-0 mt-2 flex flex-col gap-1 rounded-[10px] bg-[#e5dc82] p-3 text-sm shadow-lg lg:hidden">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-black/5">{label}</Link>)}
          <RegisterLink mobile />
        </div>
      )}
    </nav>
  );
}

function RegisterLink({ mobile = false }: { mobile?: boolean }) {
  return (
    <Link href="https://bit.ly/LateWaveJOINMUN2026" target="_blank" rel="noopener noreferrer" className={mobile ? "mt-1 rounded-md bg-primary-300 px-3 py-2 text-center font-semibold text-white" : "rounded-md bg-primary-300 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-200"}>
      Register Now <HiArrowUpRight className="ml-1 inline" size={14} />
    </Link>
  );
}
