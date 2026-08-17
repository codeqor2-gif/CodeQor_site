import { clients } from "@/lib/data";
import Reveal from "./Reveal";

function LogoCard({ name }: { name: string }) {
  return (
    <div className="mx-3 flex h-24 w-52 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 shadow-[0_10px_30px_rgba(139,92,246,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-primary-400/60 hover:shadow-[0_18px_44px_rgba(139,92,246,0.16)]">
      <span className="truncate text-center text-base font-bold tracking-wide text-zinc-700">
        {name}
      </span>
    </div>
  );
}

export default function Clients() {
  const row = [...clients, ...clients];

  return (
    <section id="clients" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl md:text-4xl">
            Some of Our <span className="text-gradient">Trusted Clients</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            Brands across healthcare, finance, retail, and education trust our technology to grow.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-14 flex flex-col gap-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-50 to-transparent" />

        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <LogoCard key={`row1-${i}`} name={name} />
          ))}
        </div>

        <div className="flex w-max animate-marquee-reverse items-center hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <LogoCard key={`row2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
