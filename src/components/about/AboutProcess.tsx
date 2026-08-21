"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { number: "01", title: "Discovery", subtitle: "Understanding Requirements" },
  { number: "02", title: "Planning", subtitle: "Project Strategy" },
  { number: "03", title: "UI/UX Design", subtitle: "Wireframes & Prototypes" },
  { number: "04", title: "Development", subtitle: "Frontend & Backend" },
  { number: "05", title: "Testing", subtitle: "Quality Assurance" },
  { number: "06", title: "Deployment", subtitle: "Launch & Optimization" },
  { number: "07", title: "Support", subtitle: "Ongoing Maintenance" },
];

const icons = [
  <svg key="01" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  <svg key="02" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
  <svg key="03" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
  <svg key="04" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  <svg key="05" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="06" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>,
  <svg key="07" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
];

const VW = 1200;
const VH = 480;
const TOP_Y = 80;
const BOT_Y = 400;
const SX = 85;
const SP = 168;
const CR = 22;

const nodeXY = steps.map((_, i) => ({
  x: SX + i * SP,
  y: i % 2 === 0 ? TOP_Y : BOT_Y,
}));

function buildPath(): string {
  let d = "";
  for (let i = 0; i < nodeXY.length; i++) {
    const c = nodeXY[i];
    if (i === 0) {
      d = "M " + c.x + " " + c.y;
      continue;
    }
    const p = nodeXY[i - 1];
    const mx = (p.x + c.x) / 2;
    const dir = c.y > p.y ? 1 : -1;
    d += " L " + (mx - CR) + " " + p.y;
    d += " Q " + mx + " " + p.y + " " + mx + " " + (p.y + dir * CR);
    d += " Q " + mx + " " + c.y + " " + (mx + CR) + " " + c.y;
    d += " L " + c.x + " " + c.y;
  }
  return d;
}

const pathD = buildPath();

function StepNode({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[0];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const n = nodeXY[index];
  const isTop = index % 2 === 0;
  const th = (index + 0.3) / steps.length;
  const opacity = useTransform(progress, [Math.max(0, th - 0.12), th], [0.3, 1]);
  const glow = useTransform(progress, [th - 0.02, th + 0.08], [0, 0.7]);

  const leftPct = (n.x / VW) * 100;
  const topPct = isTop ? ((n.y - 70) / VH) * 100 : ((n.y + 14) / VH) * 100;

  return (
    <motion.div
      className="absolute z-10 flex flex-col items-center"
      style={{ left: leftPct + "%", top: topPct + "%", width: 110, marginLeft: -55 }}
    >
      <div className="text-center">
        <p className="text-[10px] font-bold uppercase tracking-wider text-primary-500">Step {step.number}</p>
        <h3 className="mt-0.5 text-[13px] font-bold text-zinc-900">{step.title}</h3>
        <p className="mt-0.5 text-[10px] text-zinc-500 leading-snug">{step.subtitle}</p>
      </div>
      <motion.div
        className="relative mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_4px_18px_rgba(0,102,204,0.35)]"
        style={{ opacity }}
      >
        <motion.div
          className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 blur-md"
          style={{ opacity: glow }}
        />
        <span className="relative z-10">{icons[index]}</span>
      </motion.div>
    </motion.div>
  );
}

export default function AboutProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.98", "end 0.02"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const viewBoxStr = "0 0 " + VW + " " + VH;
  const paddingBottomVal = (VH / VW) * 100;

  return (
    <section ref={sectionRef} className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-10">
          <SectionHeading title="Our Development" highlight="Process" />
        </Reveal>

        <div
          className="relative hidden lg:block"
          style={{ paddingBottom: paddingBottomVal + "%" }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox={viewBoxStr}
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient id="zzg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066CC" />
                <stop offset="50%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#0066CC" />
              </linearGradient>
            </defs>
            <path d={pathD} stroke="#e4e4e7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            <motion.path
              d={pathD}
              stroke="url(#zzg)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength }}
            />
          </svg>

          {steps.map((step, i) => (
            <StepNode key={step.number} step={step} index={i} progress={scrollYProgress} />
          ))}
        </div>

        <div className="relative lg:hidden mt-6">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-200" />
          {steps.map((step, i) => (
            <Reveal key={step.number} y={24} delay={i * 0.05}>
              <div className="relative mb-5 flex gap-4 last:mb-0">
                <div className="relative z-10 shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary-600 to-accent-600 text-xs font-bold text-white shadow-[0_4px_16px_rgba(0,102,204,0.35)]">
                    {step.number}
                  </div>
                </div>
                <div className="group flex-1 rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_4px_16px_rgba(0,102,204,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_12px_36px_rgba(0,102,204,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_4px_12px_rgba(0,102,204,0.3)]">
                      {icons[i]}
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-primary-500">Step {step.number}</span>
                      <h3 className="text-sm font-bold text-zinc-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-500">{step.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}