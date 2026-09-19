"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { FaCheck, FaRocket, FaCode, FaPalette, FaServer, FaShieldAlt, FaLifeRing } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding Requirements",
    description: "Deep-dive workshops, stakeholder interviews, and technical audits to define clear objectives and success metrics.",
    deliverables: ["Requirements document", "Technical audit", "Project charter", "Risk assessment"],
    duration: "1-2 weeks",
    icon: FaRocket,
    gradient: "from-blue-500 to-sky-500",
    hex: "#2b7fff",
    glow: "rgba(59,130,246,0.28)",
  },
  {
    number: "02",
    title: "Planning",
    subtitle: "Project Strategy",
    description: "Architecture decisions, technology selection, sprint planning, and resource allocation for optimal velocity.",
    deliverables: ["Technical architecture", "Sprint roadmap", "Team composition", "CI/CD strategy"],
    duration: "1 week",
    icon: FaCode,
    gradient: "from-blue-600 to-sky-500",
    hex: "#3b82f6",
    glow: "rgba(37,99,235,0.3)",
  },
  {
    number: "03",
    title: "UI/UX Design",
    subtitle: "Wireframes & Prototypes",
    description: "User research, design systems, interactive prototypes, and usability testing for intuitive experiences.",
    deliverables: ["Design system", "Hi-fi prototypes", "Usability report", "Component library"],
    duration: "2-3 weeks",
    icon: FaPalette,
    gradient: "from-sky-600 to-sky-400",
    hex: "#0ea5e9",
    glow: "rgba(14,165,233,0.3)",
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Frontend & Backend",
    description: "Clean code practices, code reviews, automated testing, and continuous integration for quality delivery.",
    deliverables: ["Source code repo", "API documentation", "Test coverage >80%", "Deploy preview"],
    duration: "4-8 weeks",
    icon: FaCode,
    gradient: "from-primary-500 to-primary-700",
    hex: "#0078e7",
    glow: "rgba(0,102,204,0.28)",
  },
  {
    number: "05",
    title: "Testing",
    subtitle: "Quality Assurance",
    description: "Automated E2E, performance, security, and accessibility testing across devices and browsers.",
    deliverables: ["Test reports", "Performance benchmarks", "Security audit", "Accessibility compliance"],
    duration: "1-2 weeks",
    icon: FaShieldAlt,
    gradient: "from-accent-500 to-accent-600",
    hex: "#35A6EF",
    glow: "rgba(53,166,239,0.28)",
  },
  {
    number: "06",
    title: "Deployment",
    subtitle: "Launch & Optimization",
    description: "Zero-downtime deployment, monitoring setup, performance tuning, and go-live support.",
    deliverables: ["Production release", "Monitoring dashboards", "Runbooks", "Rollback plan"],
    duration: "1 week",
    icon: FaRocket,
    gradient: "from-sky-500 to-sky-400",
    hex: "#38bdf8",
    glow: "rgba(56,189,248,0.3)",
  },
  {
    number: "07",
    title: "Support",
    subtitle: "Ongoing Maintenance",
    description: "24/7 monitoring, SLA-backed support, feature iterations, and continuous improvement.",
    deliverables: ["SLA documentation", "Monthly reports", "Feature backlog", "Security patches"],
    duration: "Ongoing",
    icon: FaLifeRing,
    gradient: "from-sky-600 to-sky-500",
    hex: "#0ea5e9",
    glow: "rgba(14,165,233,0.3)",
  },
];

export default function AboutProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Mobile interactive timeline controls
  const [activeStep, setActiveStep] = useState(0);
  const [viewMode, setViewMode] = useState<"timeline" | "list">("timeline");
  const scrollRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-step-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
    const pillsContainer = pillsRef.current;
    if (pillsContainer) {
      const pills = pillsContainer.querySelectorAll<HTMLElement>("[data-step-pill]");
      if (pills[index]) {
        pills[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-step-card]");
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;
    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });
    if (closestIndex !== activeStep) {
      setActiveStep(closestIndex);
      const pillsContainer = pillsRef.current;
      if (pillsContainer) {
        const pills = pillsContainer.querySelectorAll<HTMLElement>("[data-step-pill]");
        if (pills[closestIndex]) {
          pills[closestIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-8 lg:py-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-primary-100/50 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-[28rem] w-[28rem] rounded-full bg-accent-100/50 blur-3xl" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(117,211,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(117,211,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-3">
          <SectionHeading
            title="Our Delivery"
            highlight="Process"
            center
            className="mb-0"
          />
        </Reveal>

        {/* Desktop: Flat premium step timeline (100% UNCHANGED) */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto max-w-[1240px] px-4">
            {/* Horizontal connecting line */}
            <div className="absolute left-0 right-0 top-8 h-[2px] rounded-full bg-zinc-100">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
              />
            </div>

            <div className="relative grid grid-cols-7 gap-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: -16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.09 }}
                  className="flex flex-col items-center w-full"
                >
                  {/* Premium node */}
                  <div
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br text-white shadow-[0_10px_26px_rgba(0,102,204,0.2)]"
                    style={{ backgroundImage: `linear-gradient(135deg, ${step.hex}, ${step.hex}cc)` }}
                  >
                    <span className="absolute inset-[3px] rounded-full bg-white/20" />
                    <step.icon className="relative z-10 h-7 w-7 text-white drop-shadow" />
                    <span
                      className="absolute -top-1 -right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                      style={{ color: step.hex }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Connector stem */}
                  <div className="h-5 w-px bg-gradient-to-b from-zinc-300 to-zinc-100" />

                  {/* Step card */}
                  <div className="group relative flex w-full flex-1 flex-col rounded-2xl border border-zinc-100 bg-white p-4 shadow-[0_8px_26px_rgba(0,102,204,0.07)] transition-all duration-400 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_18px_44px_rgba(0,102,204,0.14)]">
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: `radial-gradient(ellipse at 50% 0%, ${step.glow}, transparent 70%)` }}
                    />
                    <div className="relative flex h-full flex-col">
                      <h3 className="text-sm font-bold text-zinc-900">{step.title}</h3>
                      <p className="mt-1 text-[11px] font-medium text-zinc-500">{step.subtitle}</p>
                      <p className="mt-3 flex-1 text-[10px] leading-relaxed text-zinc-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: Professional Connected Timeline & Interactive Switcher */}
        <div className="lg:hidden mt-4">
          {/* Top Bar: View Mode Switcher + Step Controls */}
          <div className="mb-4 flex items-center justify-between gap-3">
            {/* View Mode Toggle */}
            <div className="inline-flex rounded-xl bg-zinc-100 p-1">
              <button
                type="button"
                onClick={() => setViewMode("timeline")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "timeline"
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                Connected Timeline
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "list"
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                All Steps
              </button>
            </div>

            {/* In Timeline Mode: Active counter & prev/next arrows */}
            {viewMode === "timeline" && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-zinc-500">
                  <strong className="text-primary-600 font-bold">{activeStep + 1}</strong> of {steps.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => scrollToStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    aria-label="Previous step"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 cursor-pointer"
                  >
                    <FiChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    aria-label="Next step"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 cursor-pointer"
                  >
                    <FiChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* VIEW 1: Connected Horizontal Timeline matching desktop design */}
          {viewMode === "timeline" && (
            <div>
              {/* Horizontal step selector pills */}
              <div
                ref={pillsRef}
                className="flex gap-2 overflow-x-auto scrollbar-none pb-3 -mx-2 px-2"
              >
                {steps.map((step, idx) => (
                  <button
                    key={step.number}
                    data-step-pill
                    type="button"
                    onClick={() => scrollToStep(idx)}
                    className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                      activeStep === idx
                        ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-sm"
                        : "bg-white border border-zinc-200 text-zinc-600 hover:border-primary-300 hover:text-primary-600"
                    }`}
                  >
                    <span>{step.number}</span>
                    <span className="hidden sm:inline">{step.title}</span>
                  </button>
                ))}
              </div>

              {/* Scrollable Timeline with Desktop-identical connecting line, node, stem, and card */}
              <div className="relative mt-2">
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 -mx-6 px-6 sm:-mx-10 sm:px-10"
                >
                  {/* Continuous horizontal connecting line behind nodes */}
                  <div className="absolute left-6 right-6 sm:left-10 sm:right-10 top-11 h-[2px] bg-zinc-200 pointer-events-none" />

                  {steps.map((step, i) => (
                    <div
                      key={step.number}
                      data-step-card
                      className="relative flex flex-col items-center w-[82vw] max-w-[310px] shrink-0 snap-center"
                    >
                      {/* Premium Node (exact desktop aesthetic, no duplicate icon) */}
                      <div
                        className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br text-white shadow-[0_10px_26px_rgba(0,102,204,0.22)]"
                        style={{ backgroundImage: `linear-gradient(135deg, ${step.hex}, ${step.hex}cc)` }}
                      >
                        <span className="absolute inset-[3px] rounded-full bg-white/20" />
                        <step.icon className="relative z-10 h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow" />
                        <span
                          className="absolute -top-1 -right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                          style={{ color: step.hex }}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Connector Stem */}
                      <div className="h-4 w-px bg-gradient-to-b from-zinc-300 to-zinc-100" />

                      {/* Step Card (clean desktop card styling) */}
                      <div className="group relative flex w-full flex-1 flex-col rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_8px_30px_rgba(0,102,204,0.08)] transition-all duration-300 hover:border-primary-300">
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                          style={{ background: `radial-gradient(ellipse at 50% 0%, ${step.glow}, transparent 70%)` }}
                        />
                        <div className="relative flex h-full flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary-600">
                                Phase {step.number}
                              </span>
                              <h3 className="text-base font-bold text-zinc-900">{step.title}</h3>
                            </div>
                            <span className="shrink-0 rounded-full border border-primary-100 bg-primary-50/70 px-2.5 py-0.5 text-[10px] font-semibold text-primary-700">
                              {step.duration}
                            </span>
                          </div>

                          <p className="mt-1 text-xs font-medium text-zinc-500">{step.subtitle}</p>
                          <p className="mt-2.5 text-xs leading-relaxed text-zinc-600 flex-1">{step.description}</p>

                          {/* Deliverables */}
                          <div className="mt-4 border-t border-zinc-100 pt-3">
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                              Key Deliverables
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {step.deliverables.map((d, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-100 bg-zinc-50/80 px-2 py-1 text-[10px] font-medium text-zinc-700"
                                >
                                  <FaCheck className="h-2.5 w-2.5 text-primary-500 shrink-0" />
                                  <span>{d}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Swipe Guidance Hint */}
              <p className="mt-2 text-center text-[11px] text-zinc-400">
                Swipe horizontally or tap the step numbers above to explore each stage
              </p>
            </div>
          )}

          {/* VIEW 2: Clean Vertical Cascade (no duplicate icons) */}
          {viewMode === "list" && (
            <div className="space-y-4 pt-2">
              {steps.map((step, idx) => (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_8px_24px_rgba(0,102,204,0.06)] transition-all duration-300 hover:border-primary-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Single Step Node */}
                    <div
                      className="relative shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-white text-white shadow-md"
                      style={{ backgroundImage: `linear-gradient(135deg, ${step.hex}, ${step.hex}cc)` }}
                    >
                      <step.icon className="h-5 w-5 text-white" />
                      <span
                        className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[9px] font-bold shadow-sm"
                        style={{ color: step.hex }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-zinc-900">{step.title}</h3>
                        <span className="rounded-full border border-primary-100 bg-primary-50/80 px-2.5 py-0.5 text-[10px] font-semibold text-primary-700">
                          {step.duration}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs font-medium text-primary-600">{step.subtitle}</p>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-600">{step.description}</p>

                      {/* Deliverables tags */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {step.deliverables.map((d, dIdx) => (
                          <span
                            key={dIdx}
                            className="inline-flex items-center gap-1 rounded-md border border-zinc-100 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-600"
                          >
                            <FaCheck className="h-2 w-2 text-primary-500" />
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}