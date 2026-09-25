import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="flex h-[calc(100vh-250px)] items-center justify-center bg-[#fdfaec] px-6 py-16 text-black">
      <div className="flex max-w-md flex-col items-center text-center">
        <h1 className="font-display text-[6rem] leading-none sm:text-[8rem]">404</h1>
        <p className="mt-4 max-w-xs font-h5 text-lg leading-snug sm:text-xl">
          Unfortunately, the page<br />
          you&apos;re looking for isn&apos;t here
        </p>
        <p className="mt-4 font-b4 text-xs sm:text-sm">Go back to home, find everything there</p>
        <Link
          href="/"
          className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary-300 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-200"
        >
          Go Home <HiArrowUpRight size={14} />
        </Link>
      </div>
    </main>
  );
}
