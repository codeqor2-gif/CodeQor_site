"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMonitor,
  FiSmartphone,
  FiShield,
  FiBarChart2,
  FiPenTool,
  FiCpu,
} from "react-icons/fi";
import { portfolio } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  "Web Development": <FiMonitor size={36} />,
  "Mobile Development": <FiSmartphone size={36} />,
  Security: <FiShield size={36} />,
  "Data Analytics": <FiBarChart2 size={36} />,
  "UI/UX Design": <FiPenTool size={36} />,
  "AI Solutions": <FiCpu size={36} />,
};

const gradientMap: Record<string, string> = {
  "Web Development": "from-primary-600 via-primary-500 to-accent-500",
  "Mobile Development": "from-accent-600 via-accent-500 to-primary-500",
  Security: "from-red-500 via-rose-500 to-primary-500",
  "Data Analytics": "from-blue-500 via-indigo-500 to-primary-500",
  "UI/UX Design": "from-pink-500 via-rose-500 to-accent-500",
  "AI Solutions": "from-violet-600 via-purple-500 to-accent-500",
};

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-gradient-to-b from-white via-primary-50/60 to-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects That"
          highlight="Drive Results"
          subtitle="A glimpse into the products and platforms we have engineered for businesses across the globe."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: "easeOut" }}
              whileHover={{ y: -10, rotateX: 4, rotateY: -3, scale: 1.02 }}
              style={{ perspective: 800 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_10px_40px_rgba(139,92,246,0.08)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(139,92,246,0.22)]"
            >
              <div className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${gradientMap[project.tag] || "from-primary-600 to-accent-600"} transition-all duration-500`}>
                <motion.span
                  className="text-white/90 drop-shadow-lg transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
                >
                  {iconMap[project.tag] || <FiMonitor size={36} />}
                </motion.span>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                  {project.tag}
                </span>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-primary-700 transition-colors duration-300">{project.title}</h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-md transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
