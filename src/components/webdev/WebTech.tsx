"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Category = {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  glow: string;
  ring: string;
  dot: string;
  hoverBorder: string;
  techs: string[];
};

const categories: Category[] = [
  {
    title: "Frontend",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8m-4-4v4" />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-600",
    glow: "rgba(59,130,246,0.15)",
    ring: "ring-blue-100",
    dot: "bg-blue-400",
    hoverBorder: "hover:border-blue-300",
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"],
  },
  {
    title: "Backend",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="7" rx="2" strokeWidth={1.5} />
        <rect x="2" y="14" width="20" height="7" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeWidth={1.5} d="M6 6.5h.01M6 17.5h.01M10 6.5h5M10 17.5h5" />
      </svg>
    ),
    gradient: "from-indigo-500 to-indigo-600",
    glow: "rgba(99,102,241,0.15)",
    ring: "ring-indigo-100",
    dot: "bg-indigo-400",
    hoverBorder: "hover:border-indigo-300",
    techs: ["Node.js", "Express.js", "Python", "PHP", ".NET"],
  },
  {
    title: "Database",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"
        />
      </svg>
    ),
    gradient: "from-violet-500 to-violet-600",
    glow: "rgba(139,92,246,0.15)",
    ring: "ring-violet-100",
    dot: "bg-violet-400",
    hoverBorder: "hover:border-violet-300",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "Cloud",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"
        />
      </svg>
    ),
    gradient: "from-primary-500 to-primary-600",
    glow: "rgba(0,102,204,0.15)",
    ring: "ring-primary-100",
    dot: "bg-primary-400",
    hoverBorder: "hover:border-primary-300",
    techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    title: "Testing",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
      </svg>
    ),
    gradient: "from-accent-500 to-accent-600",
    glow: "rgba(17,197,232,0.15)",
    ring: "ring-accent-100",
    dot: "bg-accent-400",
    hoverBorder: "hover:border-accent-300",
    techs: ["Jest", "Cypress", "Selenium", "Playwright", "Mocha"],
  },
];

export default function WebTech() {
  return (
    <section className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading title="Technologies We" highlight="Master" />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} y={20} delay={i * 0.08}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ${cat.hoverBorder} hover:shadow-[0_18px_40px_-12px_var(--tech-glow-color)]`}
                style={{ "--tech-glow-color": cat.glow } as React.CSSProperties}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-14 h-28 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(60% 100% at 50% 0%, ${cat.glow} 0%, transparent 100%)`,
                  }}
                />

                <div
                  className={`relative mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white ring-4 ${cat.ring} ${cat.gradient}`}
                >
                  {cat.icon}
                </div>

                <h3 className="relative mb-3 text-center text-sm font-bold text-zinc-900">{cat.title}</h3>

                <div className="relative flex flex-col gap-1.5">
                  {cat.techs.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-1.5 transition-all duration-200 group-hover:bg-zinc-100 group-hover:shadow-sm"
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${cat.dot} transition-transform duration-200 group-hover:scale-125`}
                      />
                      <span className="text-[11px] font-medium text-zinc-600">{tech}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100 ${cat.gradient}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
