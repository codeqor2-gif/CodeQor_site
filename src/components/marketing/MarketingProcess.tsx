"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { number: "01", title: "Discovery", subtitle: "Research & Audit" },
  { number: "02", title: "Strategy", subtitle: "Custom Marketing Plan" },
  { number: "03", title: "Campaign Launch", subtitle: "Multi-Channel Execution" },
  { number: "04", title: "Optimization", subtitle: "A/B Testing & Scaling" },
  { number: "05", title: "Reporting", subtitle: "Insights & ROI Tracking" },
];

const colors = [
  { bg: "from-blue-500 to-blue-600", ring: "ring-blue-100", glow: "rgba(59,130,246,0.2)" },
  { bg: "from-emerald-500 to-emerald-600", ring: "ring-emerald-100", glow: "rgba(16,185,129,0.2)" },
  { bg: "from-violet-500 to-violet-600", ring: "ring-violet-100", glow: "rgba(139,92,246,0.2)" },
  { bg: "from-primary-500 to-primary-600", ring: "ring-primary-100", glow: "rgba(0,102,204,0.2)" },
  { bg: "from-accent-500 to-accent-600", ring: "ring-accent-100", glow: "rgba(17,197,232,0.2)" },
];

const iconPaths = [
  "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
];

export default function MarketingProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 10%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading title="Our Marketing" highlight="Process" />
        </Reveal>

        {/* Desktop: horizontal zig-zag timeline */}
        <div className="relative hidden lg:block pt-4 pb-4">
          <div className="grid grid-cols-5 gap-3">
            {steps.map((step, i) => {
              const isTop = i % 2 === 0;
              return (
                <div key={step.number} className="flex flex-col items-center">
                  {isTop && (
                    <Reveal y={-18} delay={i * 0.08}>
                      <div className="group relative mb-2">
                        <div className="relative w-[140px] rounded-2xl border border-zinc-100/80 bg-white/80 p-3 shadow-[0_1px_6px_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all duration-300 hover:border-zinc-200 hover:shadow-[0_6px_24px_rgba(0,102,204,0.06)]">
                          <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(ellipse at 50% 0%, ${colors[i].glow}, transparent 70%)` }} />
                          <div className="relative flex flex-col items-center text-center">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${colors[i].bg} text-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] ring-4 ${colors[i].ring}`}>
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[i]} /></svg>
                            </div>
                            <h3 className="mt-2 text-xs font-bold text-zinc-800 leading-tight">{step.title}</h3>
                            <p className="mt-0.5 text-[9px] text-zinc-400 leading-tight">{step.subtitle}</p>
                          </div>
                        </div>
                        <div className="mx-auto h-3 w-px bg-gradient-to-b from-zinc-300 to-zinc-200" />
                      </div>
                    </Reveal>
                  )}
                  {!isTop && <div className="h-[96px]" />}
                </div>
              );
            })}
          </div>

          <div className="relative h-10 flex items-center">
            <div className="absolute inset-x-6 h-[2px] rounded-full bg-zinc-100" />
            <motion.div className="absolute h-[2px] origin-left rounded-full bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400" style={{ width: lineWidth, left: "1.5rem" }} />
            {steps.map((step, i) => (
              <div key={step.number} className="absolute z-10 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-primary-600 to-accent-600 text-[9px] font-bold text-white shadow-[0_2px_10px_rgba(0,102,204,0.25)]" style={{ left: `calc(1.5rem + ${(i / (steps.length - 1)) * (100 - 8)}%)`, top: "50%", transform: "translate(-50%, -50%)" }}>
                {step.number}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-3">
            {steps.map((step, i) => {
              const isBottom = i % 2 !== 0;
              return (
                <div key={step.number} className="flex flex-col items-center">
                  {isBottom && (
                    <Reveal y={18} delay={i * 0.08}>
                      <div className="group relative mt-2 mb-2">
                        <div className="mx-auto h-3 w-px bg-gradient-to-b from-zinc-200 to-zinc-300" />
                        <div className="relative w-[140px] rounded-2xl border border-zinc-100/80 bg-white/80 p-3 shadow-[0_1px_6px_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all duration-300 hover:border-zinc-200 hover:shadow-[0_6px_24px_rgba(0,102,204,0.06)]">
                          <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(ellipse at 50% 100%, ${colors[i].glow}, transparent 70%)` }} />
                          <div className="relative flex flex-col items-center text-center">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${colors[i].bg} text-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] ring-4 ${colors[i].ring}`}>
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[i]} /></svg>
                            </div>
                            <h3 className="mt-2 text-xs font-bold text-zinc-800 leading-tight">{step.title}</h3>
                            <p className="mt-0.5 text-[9px] text-zinc-400 leading-tight">{step.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  )}
                  {!isBottom && <div className="h-[96px]" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="relative lg:hidden mt-6">
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-zinc-200" />
          {steps.map((step, i) => (
            <Reveal key={step.number} y={16} delay={i * 0.05}>
              <div className="relative mb-3 flex items-center gap-3 last:mb-0">
                <div className="relative z-10 shrink-0">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-white bg-gradient-to-br ${colors[i].bg} text-[8px] font-bold text-white shadow-[0_2px_8px_rgba(0,102,204,0.25)]`}>
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:border-primary-300">
                  <div className="flex items-center gap-2">
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br ${colors[i].bg} text-white`}>
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[i]} /></svg>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold text-zinc-900">{step.title}</h3>
                      <p className="text-[9px] text-zinc-500">{step.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
