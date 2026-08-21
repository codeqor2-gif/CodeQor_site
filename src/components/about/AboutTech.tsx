"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  SiReact, SiNextdotjs, SiTypescript,
  SiNodedotjs, SiExpress, SiNestjs,
  SiMongodb, SiPostgresql, SiRedis,
  SiDocker,
  SiTensorflow, SiPytorch,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";

const categories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", icon: <SiReact size={18} className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs size={18} className="text-zinc-900" /> },
      { name: "TypeScript", icon: <SiTypescript size={18} className="text-[#3178C6]" /> },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs size={18} className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress size={18} className="text-zinc-700" /> },
      { name: "NestJS", icon: <SiNestjs size={18} className="text-[#E0234E]" /> },
    ],
  },
  {
    title: "Database",
    techs: [
      { name: "MongoDB", icon: <SiMongodb size={18} className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={18} className="text-[#4169E1]" /> },
      { name: "Redis", icon: <SiRedis size={18} className="text-[#DC382D]" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    techs: [
      { name: "AWS", icon: <FaAws size={18} className="text-[#FF9900]" /> },
      { name: "Azure", icon: <FaMicrosoft size={18} className="text-[#0089D6]" /> },
      { name: "Docker", icon: <SiDocker size={18} className="text-[#2496ED]" /> },
    ],
  },
  {
    title: "AI & ML",
    techs: [
      { name: "OpenAI", icon: <HiOutlineSparkles size={18} className="text-[#10a37f]" /> },
      { name: "TensorFlow", icon: <SiTensorflow size={18} className="text-[#FF6F00]" /> },
      { name: "PyTorch", icon: <SiPytorch size={18} className="text-[#EE4C2C]" /> },
    ],
  },
];

export default function AboutTech() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading
            title="Technologies &"
            highlight="Expertise"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} y={30} delay={i * 0.08}>
              <motion.div
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_6px_20px_rgba(0,102,204,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_16px_40px_rgba(0,102,204,0.1)]"
              >
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-600">{cat.title}</h3>
                <div className="flex flex-1 flex-col gap-2.5">
                  {cat.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-2.5 transition-all duration-200 hover:border-primary-200 hover:bg-primary-50/50"
                    >
                      <span className="shrink-0">{tech.icon}</span>
                      <span className="text-sm font-medium text-zinc-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}