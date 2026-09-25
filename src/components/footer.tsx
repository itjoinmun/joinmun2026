import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-neutral-100">
      <div className="mx-auto grid max-w-400 grid-cols-2 gap-x-8 gap-y-8 px-9 py-10 sm:px-12 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:gap-8 md:px-20 md:py-8 lg:px-20">
        <div className="col-span-2 flex items-start md:col-span-1">
          <Image src="/logo/footer.png" alt="JOINMUN 2026" width={206} height={186} className="h-auto w-28 sm:w-36 md:w-52" />
        </div>

        <div>
          <h2 className="text-xs font-bold md:font-b3">Event Info</h2>
          <div className="mt-3 flex flex-col gap-3 text-xs text-white/75 md:mt-4 md:font-b3 md:text-base">
            <Link href="#councils" className="transition-colors hover:text-white">Councils</Link>
            <Link href="#timeline" className="transition-colors hover:text-white">Timeline</Link>
            <Link href="/pricing" className="transition-colors hover:text-white">Pricing</Link>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold md:font-b3">Contact Us</h2>
          <Link href="mailto:publicaffairs.joinmun@gmail.com" className="mt-3 block text-xs text-white/75 transition-colors hover:text-white md:mt-4 md:font-b3 md:text-base">
            Email
          </Link>
        </div>

        <div>
          <h2 className="text-xs font-bold md:font-b3">Follow Us</h2>
          <div className="mt-4 flex gap-2">
            <Link href="https://www.instagram.com/joinmun.ugm" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-6 w-7 items-center justify-center rounded-md bg-primary-300 text-xs transition-colors hover:bg-primary-200 md:h-9 md:w-10 md:rounded-lg md:text-lg">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/company/jogjainternationalmodelunitednations/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-6 w-7 items-center justify-center rounded-md bg-primary-300 text-xs transition-colors hover:bg-primary-200 md:h-9 md:w-10 md:rounded-lg md:text-lg">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
