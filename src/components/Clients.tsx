"use client";

import { clients } from "@/lib/data";
import Reveal from "./Reveal";

function LogoCard({ name }: { name: string }) {
  return (
    <div className="mx-3 flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 shadow-[0_6px_20px_rgba(0,102,204,0.05)] transition-all duration-300 hover:border-primary-400/60 hover:shadow-[0_12px_32px_rgba(0,102,204,0.12)]">
      <span className="truncate text-center text-sm font-bold tracking-wide text-zinc-600 transition-colors duration-300 group-hover:text-primary-700">
        {name}
      </span>
    </div>
  );
}

export default function Clients() {
  const row = [...clients, ...clients];

  return (
    <section id="clients" className="relative overflow-hidden py-6">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-left text-2xl font-bold text-zinc-900 sm:text-3xl">
            Some of Our <span className="text-gradient">Trusted Clients</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-10 flex flex-col gap-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-zinc-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-zinc-50 to-transparent" />

        <div className="flex w-max items-center">
          <div
            className="flex w-max items-center"
            style={{ animation: "marquee 200s linear infinite" }}
          >
            {row.map((name, i) => (
              <LogoCard key={`row1-${i}`} name={name} />
            ))}
          </div>
        </div>

        <div className="flex w-max items-center">
          <div
            className="flex w-max items-center"
            style={{ animation: "marquee-reverse 210s linear infinite" }}
          >
            {row.map((name, i) => (
              <LogoCard key={`row2-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
