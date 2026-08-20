"use client";

import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaCloud } from "react-icons/fa";
import { services } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ReactNode> = {
  brain: <FaBrain size={22} />,
  chart: <FaChartLine size={22} />,
  cloud: <FaCloud size={22} />,
};

export default function Services() {
  return (
    <section id="solutions" className="relative py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl">
              Services We Provide to <span className="text-gradient">Elevate Your Business</span>
            </h2>
          </div>
          <Reveal delay={0.15}>
            <button className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,102,204,0.4)] transition-all duration-300 hover:brightness-110 cursor-pointer">
              View All Services
            </button>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-primary-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(0,102,204,0.12)] transition-all duration-400 hover:border-primary-400 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_6px_18px_rgba(0,102,204,0.35)]">
                {iconMap[service.icon]}
              </div>

              <h3 className="text-base font-semibold text-zinc-900">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
