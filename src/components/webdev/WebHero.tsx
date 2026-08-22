"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WebHero() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden flex items-center bg-gradient-to-br from-night-950 via-night-900 to-primary-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,102,204,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(17,197,232,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,102,204,0.08),transparent_50%)]" />

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div animate={{ y: [0, -25, 0], x: [0, 12, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-[15%] h-3 w-3 rounded-full bg-primary-400/40" />
      <motion.div animate={{ y: [0, 18, 0], x: [0, -10, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-40 right-[20%] h-2 w-2 rounded-full bg-accent-400/40" />
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }} className="absolute bottom-32 left-[30%] h-2.5 w-2.5 rounded-full bg-primary-300/30" />
      <motion.div animate={{ y: [0, 22, 0], x: [0, -15, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/3 right-[10%] h-4 w-4 rounded-full bg-accent-300/20" />
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-20 right-[35%] h-2 w-2 rounded-full bg-primary-500/30" />
      <motion.div animate={{ y: [0, 16, 0], x: [0, 8, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-24 right-[40%] h-2 w-2 rounded-full bg-white/10" />
      <motion.div animate={{ y: [0, -20, 0], x: [0, -6, 0] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute bottom-40 left-[20%] h-3 w-3 rounded-full bg-primary-400/20" />

      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-[10%] h-48 w-48 rounded-full bg-primary-500/10 blur-3xl" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-1/4 right-[10%] h-40 w-40 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Powerful{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Web Solutions
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 text-lg text-zinc-300 leading-relaxed">
            We craft high-performance, scalable web applications using cutting-edge technologies. From responsive websites to complex enterprise platforms, CodeQor delivers end-to-end web development excellence.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/#contactus" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(0,102,204,0.4)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,102,204,0.5)] hover:brightness-110">
              Start Your Project
            </Link>
            <Link href="/#portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-50 to-transparent" />
    </section>
  );
}
