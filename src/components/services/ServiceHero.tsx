"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function ServiceHero({ title, highlight, tagline }: { title: string; highlight: string; tagline: string }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-night-950 pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12">
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
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 52%, rgba(2,8,23,0.45) 100%)" }} />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-44 h-[34rem] w-[34rem]" style={{ background: "radial-gradient(circle, rgba(0,159,227,0.25) 0%, transparent 70%)" }} />
        <div className="absolute -right-48 bottom-[-10rem] h-[34rem] w-[34rem]" style={{ background: "radial-gradient(circle, rgba(18,196,212,0.22) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(180,230,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,255,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <Link href="/services" className="absolute left-6 top-24 z-10 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white lg:left-10 lg:top-32"><FaArrowLeft /> Back to services</Link>
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.2rem]">{title} <span className="bg-gradient-to-r from-sky-200 via-white to-sky-300 bg-clip-text text-transparent">{highlight}</span></motion.h1>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 inline-flex items-center rounded-full border border-sky-300/20 bg-white/[0.06] px-5 py-3 backdrop-blur-md">
            <span className="text-sm font-medium text-white/90">{tagline}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
