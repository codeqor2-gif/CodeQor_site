"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiChevronDown, FiZap } from "react-icons/fi";
import { unsplashImages } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={unsplashImages.hero}
          alt="Technology and digital network background"
          fill
          priority
          sizes="100vw"
          className="object-cover saturate-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 via-transparent to-accent-100/40" />
      </div>

      <div className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-96 w-96 animate-blob rounded-full bg-primary-400/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 -z-10 h-96 w-96 animate-blob rounded-full bg-accent-400/25 blur-[120px] [animation-delay:-8s]" />
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 animate-pulse-glow rounded-full bg-primary-400/20 blur-[100px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl px-6 py-32 lg:px-10"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-300/70 bg-white/70 px-4 py-1.5 text-sm font-semibold text-primary-700 shadow-[0_4px_18px_rgba(139,92,246,0.15)] backdrop-blur-md"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white">
            <FiZap size={11} />
          </span>
          IT Services &amp; Digital Marketing for Modern Business
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Driving Business{" "}
          <span className="text-gradient">Growth with</span>
          <br />
          Scalable Digital
          <br />
          <span className="relative inline-block">
            Solutions!
            <svg
              className="absolute -bottom-3 left-0 w-full"
              viewBox="0 0 320 16"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 12C80 3 240 3 318 11"
                stroke="url(#underlineGrad)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underlineGrad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8b5cf6" />
                  <stop offset="1" stopColor="#d946ef" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base"
        >
          We seamlessly blend creative marketing strategies with novel solutions that help
          businesses grow, connect, and thrive in their niche.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo("contactus")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_36px_rgba(124,58,237,0.4)] transition-all duration-300 hover:shadow-[0_14px_44px_rgba(217,70,239,0.5)] hover:brightness-110"
          >
            Book a Strategy Call
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("technology")}
            className="inline-flex items-center gap-2 rounded-full border border-primary-300/70 bg-white/70 px-7 py-3.5 text-sm font-semibold text-primary-700 backdrop-blur-md transition-all duration-300 hover:border-primary-500 hover:bg-white hover:shadow-[0_8px_28px_rgba(139,92,246,0.18)]"
          >
            Check Our Expertise
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo("clients")}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 text-zinc-500 transition-colors hover:text-primary-600"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiChevronDown size={22} />
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
}
