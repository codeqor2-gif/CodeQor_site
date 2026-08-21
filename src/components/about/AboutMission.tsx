"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const cards = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Our Mission",
    description: "To empower businesses with innovative, scalable, and reliable software solutions that drive digital transformation and create measurable impact.",
    gradient: "from-primary-600 to-primary-700",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Our Vision",
    description: "To be the most trusted technology partner for businesses worldwide — recognized for innovation, quality, and the lasting value we create for our clients.",
    gradient: "from-accent-600 to-accent-700",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Our Values",
    description: "Integrity, innovation, collaboration, and excellence. We believe in transparent communication, agile delivery, and building technology that makes a real difference.",
    gradient: "from-emerald-600 to-emerald-700",
  },
];

export default function AboutMission() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="absolute inset-0 bg-zinc-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading
            title="Mission, Vision &"
            highlight="Values"
           
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} y={30} delay={i * 0.12}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_8px_30px_rgba(0,102,204,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_20px_50px_rgba(0,102,204,0.12)]"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))" }} />

                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg`}>
                  {card.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">{card.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{card.description}</p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}