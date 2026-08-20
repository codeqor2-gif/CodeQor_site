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
    <section id="about" className="relative overflow-hidden py-10">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-60 w-[36rem] -translate-x-1/2 rounded-full bg-primary-400/15 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
          
            <h2 className="text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl">
              CodeQor Technologies <span className="text-gradient">Achievements</span>
            </h2>
          
          </div>
          <Reveal delay={0.1}>
            <button
              onClick={scrollToContact}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,102,204,0.4)] transition-all duration-300 hover:brightness-110 cursor-pointer"
            >
              Get in Touch
            </button>
          </Reveal>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-[0_8px_30px_rgba(0,102,204,0.06)] transition-all duration-400 hover:border-primary-400/60 hover:shadow-[0_16px_40px_rgba(0,102,204,0.14)]"
            >
              <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-600/20 p-2.5 transition-transform duration-300 group-hover:scale-110">
                <div className="h-full w-full rounded-full border-2 border-dashed border-primary-500/70" />
              </div>
              <p className="text-2xl font-extrabold text-zinc-900 sm:text-3xl md:text-4xl">
                <Counter to={item.value} />
                <span className="text-gradient">{item.suffix}</span>
              </p>
              <p className="mt-1.5 text-xs font-medium text-primary-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
