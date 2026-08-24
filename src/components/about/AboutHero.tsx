"use client";

import { motion } from "framer-motion";
import { SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  return (
    <section className="relative isolate flex h-screen min-h-screen max-h-screen items-center overflow-hidden bg-gradient-to-br from-[#02152f] via-[#043d70] to-[#0077b5] px-6 pt-24 pb-[60px] sm:px-8 sm:pt-28 sm:pb-20 lg:px-10 lg:pt-24 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-44 h-[34rem] w-[34rem] rounded-full bg-[#009fe3]/25 blur-3xl [animation:aurora_18s_ease-in-out_infinite]" />
        <div className="absolute -right-48 bottom-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#12c4d4]/25 blur-3xl [animation:aurora_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] [animation:spin_32s_linear_infinite]" />
        <div className="absolute left-1/2 top-[45%] h-[23rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rotate-[22deg] rounded-[50%] border border-cyan-200/15 [animation:spin_28s_linear_infinite_reverse]" />
        <div className="absolute left-1/2 top-[45%] h-[23rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 -rotate-[22deg] rounded-[50%] border border-primary-200/10 [animation:spin_34s_linear_infinite]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(180,230,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,255,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <span className="absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-cyan-200/80 shadow-[0_0_18px_rgba(165,243,252,0.9)] [animation:float_7s_ease-in-out_infinite]" />
        <span className="absolute right-[16%] top-[22%] h-3 w-3 rounded-full bg-primary-200/70 shadow-[0_0_20px_rgba(191,219,254,0.8)] [animation:float_9s_ease-in-out_infinite_reverse]" />
        <span className="absolute bottom-[20%] left-[22%] h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.9)] [animation:float_6s_ease-in-out_infinite]" />
        <span className="absolute bottom-[17%] right-[28%] h-2 w-2 rounded-full bg-accent-200/80 shadow-[0_0_16px_rgba(178,235,242,0.9)] [animation:float_8s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="mx-auto grid min-h-0 w-full max-w-7xl items-center gap-14 sm:gap-16 lg:grid-cols-[0.84fr_1.16fr] lg:gap-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="relative z-10 max-w-2xl text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-[1.04] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.8rem]">
            About <span className="bg-gradient-to-r from-[#8cecff] via-white to-[#53d7e8] bg-clip-text text-transparent">CodeQor</span>
            <br />
            Technologies
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92, x: 28 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.15, ease }} className="relative mx-auto w-full max-w-[42rem] lg:justify-self-end">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#32c8f0]/35 via-transparent to-[#0066cc]/45 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/25 [animation:spin_26s_linear_infinite]" />
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent-300/35 [animation:spin_18s_linear_infinite_reverse]" />

          <motion.div animate={{ y: [0, -14, 0], rotateZ: [-2, -1, -2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative flex aspect-[1.3/1] items-center justify-center [perspective:1200px]">
            <div className="relative w-[88%] max-w-[35rem] [transform:rotateX(8deg)_rotateY(-14deg)_rotateZ(-3deg)] [transform-style:preserve-3d]">
              <div className="relative mx-auto aspect-[1.72/1] w-[83%] rounded-[1.25rem] border-[6px] border-slate-300/90 bg-slate-950 p-2 shadow-[0_24px_50px_rgba(0,8,35,0.5)] sm:rounded-[1.5rem] sm:border-[8px] sm:p-3">
                <div className="relative h-full overflow-hidden rounded-lg border border-cyan-200/30 bg-gradient-to-br from-[#0a5283] via-[#063562] to-[#041b3b] p-4 sm:rounded-xl sm:p-6">
                  <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
                  <div className="relative flex items-center justify-between border-b border-white/15 pb-3"><div className="flex gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-red-300/80" /><i className="h-1.5 w-1.5 rounded-full bg-amber-300/80" /><i className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" /></div><span className="h-1.5 w-20 rounded-full bg-white/20" /></div>
                  <div className="relative mt-5 grid grid-cols-[0.4fr_1fr] gap-3 sm:mt-7 sm:gap-5"><div className="space-y-2 rounded-lg border border-white/10 bg-white/[0.07] p-2 sm:rounded-xl sm:p-3"><span className="block h-1.5 w-3/4 rounded-full bg-cyan-300/80" /><span className="block h-1.5 w-full rounded-full bg-white/20" /><span className="block h-1.5 w-4/5 rounded-full bg-white/20" /><span className="mt-5 block h-8 rounded-md bg-primary-400/30" /></div><div className="space-y-2.5 pt-1 sm:space-y-3"><span className="block h-2 w-3/5 rounded-full bg-white/80" /><span className="block h-1.5 w-4/5 rounded-full bg-white/20" /><span className="mt-3 block h-12 rounded-lg border border-cyan-200/20 bg-gradient-to-r from-primary-500/50 to-accent-400/25 sm:h-16" /><div className="flex gap-2"><span className="h-1.5 w-1/3 rounded-full bg-cyan-300/80" /><span className="h-1.5 w-1/4 rounded-full bg-white/20" /></div></div></div>
                </div>
              </div>
              <div className="relative -mt-1 h-12 origin-top rounded-b-[1.5rem] border border-slate-300/90 bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 px-[8%] pt-1.5 shadow-[0_20px_30px_rgba(0,8,35,0.5)] [transform:perspective(700px)_rotateX(52deg)] sm:h-18 sm:rounded-b-[2rem] sm:pt-2">
                <div className="grid grid-cols-10 gap-1 rounded-lg bg-slate-400/60 p-1.5 sm:gap-1.5 sm:p-2">{Array.from({ length: 40 }, (_, index) => <i key={index} className="h-2 rounded-[2px] border border-white/40 bg-slate-200 shadow-[0_1px_1px_rgba(0,20,45,0.25)] sm:h-3" />)}</div>
                <div className="absolute bottom-1.5 left-1/2 h-3 w-1/4 -translate-x-1/2 rounded border border-slate-400/60 bg-slate-200/90 shadow-inner sm:bottom-2 sm:h-5" />
              </div>
              <div className="mx-auto h-1.5 w-1/4 rounded-b-full bg-slate-500 sm:h-2" />
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[3%] top-[20%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/30 bg-[#062d58]/90 text-cyan-300 shadow-[0_12px_26px_rgba(0,20,60,0.35)] backdrop-blur-md sm:h-16 sm:w-16"><SiReact className="h-6 w-6 sm:h-8 sm:w-8" /></motion.div>
          <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute right-[3%] top-[16%] z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/30 bg-[#062d58]/90 text-white shadow-[0_12px_26px_rgba(0,20,60,0.35)] backdrop-blur-md sm:h-14 sm:w-14"><SiNextdotjs className="h-5 w-5 sm:h-7 sm:w-7" /></motion.div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute bottom-[12%] left-[11%] z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/30 bg-[#062d58]/90 text-emerald-300 shadow-[0_12px_26px_rgba(0,20,60,0.35)] backdrop-blur-md sm:h-14 sm:w-14"><SiNodedotjs className="h-5 w-5 sm:h-6 sm:w-6" /></motion.div>
          <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[10%] right-[10%] z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/30 bg-[#062d58]/90 text-blue-200 shadow-[0_12px_26px_rgba(0,20,60,0.35)] backdrop-blur-md sm:h-14 sm:w-14"><SiTypescript className="h-5 w-5 sm:h-6 sm:w-6" /></motion.div>

          <span className="absolute left-[5%] top-[18%] h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_22px_8px_rgba(34,211,238,0.35)] [animation:float_6s_ease-in-out_infinite]" />
          <span className="absolute bottom-[15%] right-[7%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_6px_rgba(255,255,255,0.3)] [animation:float_8s_ease-in-out_infinite_reverse]" />
        </motion.div>
      </div>
    </section>
  );
}
