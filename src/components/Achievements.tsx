"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { achievements } from "@/lib/data";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Achievements() {
  const scrollToContact = () => {
    const el = document.getElementById("contactus");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary-400/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">
              Our Achievements
            </p>
            <h2 className="text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              NetRoots Technology <span className="text-gradient">Achievements</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              We take pride in delivering AI driven solutions that empower businesses globally.
              NetRoots Technology combines AI innovation with scalable digital strategies to
              drive growth and impact.
            </p>
          </div>
          <Reveal delay={0.1}>
            <button
              onClick={scrollToContact}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.4)] transition-all duration-300 hover:brightness-110"
            >
              Get in Touch
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-[0_10px_40px_rgba(139,92,246,0.07)] transition-all duration-400 hover:border-primary-400/60 hover:shadow-[0_20px_50px_rgba(139,92,246,0.18)]"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-600/20 p-3 transition-transform duration-300 group-hover:scale-110">
                <div className="h-full w-full rounded-full border-2 border-dashed border-primary-500/70" />
              </div>
              <p className="text-2xl font-extrabold text-zinc-900 md:text-3xl">
                <Counter to={item.value} />
                <span className="text-gradient">{item.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-primary-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
