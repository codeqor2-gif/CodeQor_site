"use client";

import { motion } from "framer-motion";
import { FaHeartbeat, FaLandmark, FaNetworkWired, FaShoppingBag } from "react-icons/fa";

export default function IndustriesHero() {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-gradient-to-br from-[#021845] via-[#075b8f] to-[#0aa2c8] pt-24 pb-12 sm:min-h-[580px] sm:pt-28 sm:pb-16 lg:min-h-[620px] lg:pt-32 lg:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(180,230,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-32 -bottom-40 h-[34rem] w-[34rem] rounded-full bg-primary-300/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-[-8rem] h-[34rem] w-[54rem] rotate-[-18deg] rounded-[50%] border border-cyan-100/20" />
        <div className="absolute bottom-[-16rem] left-[22%] h-[30rem] w-[72rem] rotate-[-8deg] rounded-[50%] border border-white/15" />
        <motion.span animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[14%] top-[25%] h-2 w-2 rounded-full bg-cyan-100 shadow-[0_0_18px_5px_rgba(165,243,252,0.5)]" />
        <motion.span animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute right-[18%] top-[20%] h-3 w-3 rounded-full bg-white shadow-[0_0_20px_6px_rgba(255,255,255,0.4)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Industries we serve</p>
          <h1 className="text-5xl font-bold leading-[1.04] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.8rem]">Technology for <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-300 bg-clip-text text-transparent">every industry.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/80 sm:text-xl">We combine deep industry understanding with modern technology to solve real business challenges and create lasting advantage.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.15 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] bg-cyan-300/15 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/20 bg-white/[0.08] p-5 shadow-[0_20px_55px_rgba(0,20,60,0.24)] backdrop-blur-md sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Sectors we specialize in</p>
            <div className="mt-5 space-y-3">
              {[
                { icon: FaHeartbeat, label: "Healthcare & Life Sciences" },
                { icon: FaLandmark, label: "Banking & Finance" },
                { icon: FaShoppingBag, label: "Retail & E-commerce" },
                { icon: FaNetworkWired, label: "Telecom & IT Services" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-cyan-200/40 hover:bg-white/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200"><item.icon /></span>
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
