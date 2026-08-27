"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#04234a] to-[#0077b5] py-14 sm:py-16 lg:py-20">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Let&apos;s turn your next challenge into an advantage.</h2>
        </div>
        <Link href="/#contactus" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-700 transition hover:bg-cyan-50">Talk to our team</Link>
      </div>
    </section>
  );
}
