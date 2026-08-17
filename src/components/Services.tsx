"use client";

import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaCloud } from "react-icons/fa";
import { services } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  brain: <FaBrain size={24} />,
  chart: <FaChartLine size={24} />,
  cloud: <FaCloud size={24} />,
};

export default function Services() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            className="mb-0 text-left sm:text-left sm:mx-0"
            center={false}
            title="Services We Provide to"
            highlight="Elevate Your Business"
          />
          <Reveal delay={0.15}>
            <button className="rounded-full border border-primary-400/60 bg-primary-100/70 px-6 py-2.5 text-sm font-semibold text-primary-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-600 hover:text-white hover:shadow-[0_10px_28px_rgba(124,58,237,0.4)]">
              View All Services
            </button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_10px_40px_rgba(139,92,246,0.07)] transition-all duration-400 hover:border-primary-400/60 hover:shadow-[0_24px_60px_rgba(124,58,237,0.18)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-400/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_8px_24px_rgba(124,58,237,0.4)] transition-transform duration-300 group-hover:scale-110">
                {iconMap[service.icon]}
              </div>

              <h3 className="text-lg font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-primary-700">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">{service.description}</p>

              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
