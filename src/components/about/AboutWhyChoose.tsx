"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const reasons = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Experienced Team",
    description: "80+ skilled engineers, designers, and architects with deep expertise across modern tech stacks and industries.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Modern Technologies",
    description: "We use the latest frameworks, cloud platforms, and AI tools to build future-proof solutions.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Agile Development",
    description: "Iterative sprints, continuous integration, and rapid delivery cycles ensure you see working software early and often.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Transparent Communication",
    description: "Regular updates, clear documentation, and open channels keep you informed and in control at every stage.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Scalable Solutions",
    description: "Architecture designed for growth our solutions handle increasing loads without costly rewrites.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Long-Term Support",
    description: "We don't disappear after launch. Ongoing maintenance and optimization ensure your product stays ahead.",
  },
];

export default function AboutWhyChoose() {
  return (
    <section className="relative py-4 lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-2 -mt-4">
          <SectionHeading
            title="Why Choose"
            highlight="CodeQor"
            
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} y={30} delay={i * 0.08}>
              <motion.div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_8px_30px_rgba(0,102,204,0.06)] transition-all duration-300 hover:border-primary-300 hover:bg-primary-50/35 hover:shadow-[0_20px_50px_rgba(0,102,204,0.16)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-[0_8px_20px_rgba(0,102,204,0.28)]">
                  {reason.icon}
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-3 text-xl font-bold text-zinc-900">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600">{reason.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
