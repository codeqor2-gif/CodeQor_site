"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { FaCheck, FaRocket, FaCode, FaPalette, FaServer, FaShieldAlt, FaLifeRing } from "react-icons/fa";

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

  return (
    <section ref={sectionRef} className="relative py-4 lg:py-8 overflow-hidden">
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

        {/* Desktop: Flat premium step timeline */}
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
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br text-white shadow-[0_10px_26px_rgba(0,102,204,0.2)]" style={{ backgroundImage: `linear-gradient(135deg, ${step.hex}, ${step.hex}cc)` }}>
                    <span className="absolute inset-[3px] rounded-full bg-white/20" />
                    <step.icon className="relative z-10 h-7 w-7 text-white drop-shadow" />
                    <span className="absolute -top-1 -right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.12)]" style={{ color: step.hex }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Connector stem */}
                  <div className="h-5 w-px bg-gradient-to-b from-zinc-300 to-zinc-100" />

                  {/* Step card */}
                  <div className="group relative flex w-full flex-1 flex-col rounded-2xl border border-zinc-100 bg-white p-4 shadow-[0_8px_26px_rgba(0,102,204,0.07)] transition-all duration-400 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_18px_44px_rgba(0,102,204,0.14)]">
                    <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(ellipse at 50% 0%, ${step.glow}, transparent 70%)` }} />
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

        {/* Mobile: Vertical timeline with enhanced cards */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-200 via-primary-200/30 to-zinc-200" />
            
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative mb-6"
              >
                <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-200" />
                
                <div className="relative flex items-start gap-4">
                  {/* Step indicator */}
                  <div className="relative z-10 flex shrink-0">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]" style={{ backgroundImage: `linear-gradient(135deg, ${step.hex}, ${step.hex}cc)` }}>
                      <span className="absolute inset-[3px] rounded-full bg-white/20" />
                      <step.icon className="relative z-10 h-7 w-7 text-white drop-shadow" />
                      <span className="absolute -top-1 -right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.12)]" style={{ color: step.hex }}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="flex-1 pt-1">
                    <div className="group relative rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_8px_30px_rgba(0,102,204,0.08)] transition-all duration-400 hover:border-primary-300 hover:shadow-[0_16px_40px_rgba(0,102,204,0.12)]">
                      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(ellipse at 50% 0%, ${step.glow}, transparent 70%)` }} />
                      
                      <div className="relative flex items-start gap-3">
                        <div className={`flex shrink-0 h-10 w-10 items-center justify-center rounded-xl text-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]`} style={{ backgroundImage: `linear-gradient(135deg, ${step.hex}, ${step.hex}cc)` }}>
                          <step.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-zinc-900">{step.title}</h3>
                          <p className="mt-1 text-sm text-zinc-500">{step.subtitle}</p>
                          <p className="mt-3 text-sm leading-relaxed text-zinc-600">{step.description}</p>
                          
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {step.deliverables.slice(0, 3).map((d, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] font-medium text-zinc-700 transition-all duration-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700">
                                <FaCheck className="h-3 w-3 text-primary-500" />
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}