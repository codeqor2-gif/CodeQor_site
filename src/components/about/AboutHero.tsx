"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-night-950">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ filter: "brightness(1.08) contrast(1.04) saturate(1.12)" }}
        src="/about-new.mp4"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night-950/60 via-night-950/20 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 52%, rgba(2,8,23,0.35) 100%)" }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl font-bold leading-[1.03] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.5rem]">WHO WE ARE</motion.h1>
          <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.8 }} className="mt-7 h-24 w-full max-w-[680px] overflow-visible" viewBox="0 0 680 96" preserveAspectRatio="none" aria-hidden="true"><path d="M0 10 H410 C500 10 490 76 560 76 C605 76 635 62 680 42" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="2" strokeLinecap="round" /></motion.svg>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-8 max-w-[650px] text-lg leading-8 text-white/90 sm:text-xl lg:text-2xl">Building digital solutions that turn ideas into meaningful experiences.</motion.p>
        </div>
      </div>
    </section>
  );
}
