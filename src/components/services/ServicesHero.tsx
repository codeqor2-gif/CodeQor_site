"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
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
        src="/sErviceS.mp4"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night-950/70 via-night-950/30 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 52%, rgba(2,8,23,0.45) 100%)" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <div>
            <p className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4rem]">
              Explore Our <span className="bg-gradient-to-r from-sky-200 via-white to-sky-300 bg-clip-text text-transparent">Services</span>
            </p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100/75 sm:text-base">
            At CodQor Technologies, we offer a comprehensive range of services to help businesses thrive in the digital age. 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
