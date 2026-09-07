"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-night-950"
      style={{ minHeight: "100dvh" }}
    >
      {/* Desktop: landscape video (hidden on mobile) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.15)" }}
        src="Home2.mp4"
      />

      {/* Mobile: portrait video (hidden on desktop) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 block h-full w-full object-cover md:hidden"
        style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.15)" }}
        src="Home2.mp4"
      />

      {/* Darkening gradient so text stays readable over the video */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night-950/25 via-transparent to-night-950/45" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 48%, rgba(2,8,23,0.5) 100%)" }}
      />

      {/* Hero text overlay */}
      <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-24 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <div>
            <p className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4rem]">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-sky-200 via-white to-sky-300 bg-clip-text text-transparent">
                Ideas into Digital Solutions
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
