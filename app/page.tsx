import Image from "next/image";
import Link from "next/link";
import { Council } from "@/src/modules/landing/council";
import { Event } from "@/src/modules/landing/event";
import { ArrowRightIcon } from "@/src/components/ui/icons";

export default function Home() {
  return (
    <>
    
      <Council />
      <Event />
    </>
  );
}
