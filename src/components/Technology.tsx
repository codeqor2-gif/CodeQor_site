"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  FaMobileAlt,
  FaCode,
  FaServer,
  FaCloud,
  FaRobot,
  FaPaintBrush,
  FaBug,
  FaLink,
  FaGlobe,
} from "react-icons/fa";
import { techTabs, techData, unsplashImages } from "@/lib/data";
import Reveal from "./Reveal";

const icons = [
  <FaMobileAlt key="mobile" />,
  <FaGlobe key="front" />,
  <FaCode key="web" />,
  <FaServer key="back" />,
  <FaCloud key="cloud" />,
  <FaRobot key="ai" />,
  <FaPaintBrush key="uiux" />,
  <FaBug key="qa" />,
  <FaLink key="chain" />,
];

export default function Technology() {
  const [active, setActive] = useState(techTabs[0]);

  return (
    <section id="technology" className="relative py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal x={-40} y={0} className="relative order-2 lg:order-1">
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary-400/25 to-accent-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_20px_60px_rgba(139,92,246,0.14)]">
            <Image
              src={unsplashImages.tech}
              alt="Technology illustration - code on screen"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/15 bg-night-900/80 p-4 backdrop-blur-md">
              <p className="text-xs font-medium uppercase tracking-widest text-primary-300">
                Powered by
              </p>
              <p className="mt-1 text-lg font-bold text-white">Modern Technology Stack</p>
            </div>
          </div>

          <div className="absolute -right-4 -top-4 rounded-2xl border border-primary-300 bg-white/95 px-4 py-3 text-center shadow-[0_14px_40px_rgba(139,92,246,0.2)] backdrop-blur-md">
            <p className="text-xl font-extrabold text-zinc-900">9+</p>
            <p className="text-[10px] font-medium uppercase tracking-wider text-primary-600">
              Domains
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
              We Offer Solutions Powered by <span className="text-gradient">Technologies</span>
            </h2>
            <p className="mt-4 text-zinc-600">
              Our company uses modern technologies and frameworks to build innovative, scalable,
              and high-quality software solutions.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {techTabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active === tab
                      ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-[0_6px_20px_rgba(124,58,237,0.4)]"
                      : "border border-zinc-300 bg-white text-zinc-600 shadow-sm hover:border-primary-500/60 hover:text-primary-700"
                  }`}
                >
                  <span className="text-base">{icons[i]}</span>
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-6">
            <div className="rounded-2xl border border-primary-200/80 bg-white/90 p-6 shadow-[0_14px_44px_rgba(139,92,246,0.1)] backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-bold text-primary-700 sm:text-2xl">
                    {techData[active].title}
                  </h3>
                  <p className="mt-3 text-zinc-600">{techData[active].description}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {techData[active].techs.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2.5 rounded-lg border border-zinc-200 bg-primary-50/50 px-3 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/70 hover:bg-primary-100/60 hover:shadow-[0_8px_22px_rgba(139,92,246,0.18)]"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                        <span className="truncate text-sm font-semibold text-zinc-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
