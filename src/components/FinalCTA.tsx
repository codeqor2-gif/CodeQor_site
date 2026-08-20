"use client";

import { FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";

export default function FinalCTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#002952] via-[#0052a3] to-[#0c8696]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(18,196,212,0.2),transparent)]" />

      <Reveal className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
          Ready to <span className="text-accent-300">Transform</span> Your Business?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
          Let&apos;s discuss how our IT services and digital marketing solutions can accelerate
          your growth. Get a free consultation today.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("contactus")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(0,102,204,0.4)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,102,204,0.5)] hover:brightness-110 cursor-pointer"
          >
            Start Your Project
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("solutions")}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20"
          >
            Explore Services
          </button>
        </div>
      </Reveal>
    </section>
  );
}
