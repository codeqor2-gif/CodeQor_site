"use client";

import { motion } from "framer-motion";
import { industries } from "./industriesData";

export default function IndustriesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-8 sm:py-10 lg:py-12">
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-100/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_18px_45px_rgba(0,102,204,0.14)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img src={industry.image} alt={industry.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-primary-700">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{industry.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
