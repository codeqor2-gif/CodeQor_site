"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowLeft, FaArrowRight, FaBrain, FaChartLine, FaCheck, FaDatabase,
  FaMicrophone, FaNetworkWired,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";

const services = [
  { icon: FaDatabase, title: "Data Engineering & Preparation", desc: "Design pipelines that collect, clean, organize, and structure your data so it can power analytics and machine learning models." },
  { icon: FaBrain, title: "AI Model Development", desc: "Develop custom models that automate tasks, identify patterns, and generate predictive insights for your product." },
  { icon: FaMicrophone, title: "Natural Language Processing", desc: "Enable products to understand and process human language for chatbots, document analysis, semantic search, and more." },
  { icon: FaChartLine, title: "Predictive Analytics & Forecasting", desc: "Use historical and real-time data to anticipate demand, risks, and opportunities before they appear." },
  { icon: FaNetworkWired, title: "System Integration & Automation", desc: "Integrate AI capabilities with your existing platforms and workflows so intelligence is embedded where work actually happens." },
];

const why = [
  { icon: FaNetworkWired, title: "End-to-End AI Development", desc: "We manage the entire lifecycle of AI solutions — from data preparation and model development to deployment and monitoring." },
  { icon: FaBrain, title: "Cross-Industry Experience", desc: "Our AI solutions have applications across healthcare, retail, finance, logistics, and digital platforms." },
  { icon: FaDatabase, title: "Cloud-Optimized AI Systems", desc: "We deploy AI on scalable cloud infrastructure to ensure performance, scalability, and reliability." },
  { icon: FaChartLine, title: "Real-Time Insights", desc: "Our systems generate insights and trigger actions instantly, enabling real-time decision making." },
];

const faqs = [
  { q: "What is AI & Intelligent Automation?", a: "It combines machine learning systems with intelligent automation to streamline operations, deliver smarter customer experiences, and enable data-driven decision making." },
  { q: "Why is AI valuable for businesses?", a: "AI helps organizations automate repetitive tasks, uncover hidden patterns in data, improve predictions, and enhance customer experiences." },
  { q: "What does this service include?", a: "Data engineering, machine learning model development, natural language processing, predictive analytics, and system integration." },
  { q: "How do you ensure scalable AI solutions?", a: "We design AI systems using cloud-native architectures and scalable infrastructure that supports growing datasets and increasing workloads." },
  { q: "Which industries benefit from AI?", a: "Healthcare, retail, finance, logistics, and technology platforms — enabling smarter operations and better customer experiences." },
];

export default function AiIntelligentAutomation() {
  return (
    <main className="overflow-hidden bg-[#f7fbff]">
      {/* Premium Hero — dark navy with image on the right (static, GPU-friendly) */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-night-950 pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-44 h-[34rem] w-[34rem] rounded-full bg-[#009fe3]/25 blur-3xl" />
          <div className="absolute -right-48 bottom-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#12c4d4]/25 blur-3xl" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(180,230,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,255,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"><FaArrowLeft /> Back to services</Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.2rem]">AI & Intelligent <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-300 bg-clip-text text-transparent">Automation</span></motion.h1>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-3 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" /></span>
              <span className="text-sm font-medium text-white/90">Turning data into intelligent action</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.92, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="relative mx-auto w-full max-w-[32rem]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/30 to-primary-500/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#06233f] via-[#0a3a63] to-[#045c86] p-6 sm:p-8">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="relative flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-red-300" /><i className="h-2 w-2 rounded-full bg-amber-300" /><i className="h-2 w-2 rounded-full bg-emerald-300" /></div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">AI / Intelligence</span>
                </div>
                <div className="relative mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3.5">
                    <p className="text-[10px] font-medium text-white/45">Model accuracy</p>
                    <p className="mt-1 text-xl font-bold text-white">96.4%</p>
                    <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: ["0%", "96%"] }} transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }} className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-primary-400" /></div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3.5">
                    <p className="text-[10px] font-medium text-white/45">Automation</p>
                    <p className="mt-1 text-xl font-bold text-white">7.2x</p>
                    <p className="mt-2.5 text-[10px] text-white/40">faster workflows</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-primary-500/10 p-4">
                    <p className="text-[10px] font-medium text-white/45">Predictive insight stream</p>
                    <div className="mt-4 flex h-14 items-end gap-1.5">
                      {[30, 45, 38, 60, 52, 74, 66, 88, 80, 100].map((h, i) => <motion.i key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }} className="flex-1 rounded-t bg-gradient-to-t from-primary-500 to-cyan-300" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Turning data into insights — premium */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-primary-100/70 blur-3xl" />
          <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-accent-100/50 blur-3xl" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(117,211,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(117,211,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Turning data into <span className="text-gradient">meaningful insights</span></h2>
          </Reveal>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image + floating stat cards */}
            <Reveal x={-40}>
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-primary-400/25 to-accent-400/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_28px_70px_rgba(0,102,204,0.16)]">
                  <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop" alt="AI and data integration" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/55 via-night-950/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 via-transparent to-accent-400/20 mix-blend-multiply" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_10px_26px_rgba(0,102,204,0.45)] ring-1 ring-white/30"><FaBrain /></div>
                </div>
              </div>
            </Reveal>

            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">AI & Intelligent Automation</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">Harness the power of AI, machine learning, and intelligent automation to streamline operations and deliver smarter customer experiences.</p>
                <ul className="mt-8 space-y-4">
                  {["Machine Learning", "Intelligent Automation", "Smart Experiences"].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-base font-medium text-slate-700">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-[0_6px_16px_rgba(0,102,204,0.3)]"><FaCheck className="h-3.5 w-3.5" /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* Services cards */}
      <section id="services" className="bg-[#f7fbff] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">From raw data to <span className="text-gradient">intelligent products.</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} y={30} delay={(i % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_20px_50px_rgba(0,102,204,0.14)]">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-200 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.24)]"><service.icon /></div>
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose cards */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {why.map((item, i) => (
              <Reveal key={item.title} y={30} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_16px_44px_rgba(0,102,204,0.12)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-lg text-white shadow-[0_6px_18px_rgba(0,102,204,0.24)]"><item.icon /></div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7fbff] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} y={16} delay={(i % 4) * 0.05}>
                <details className="group rounded-2xl border border-slate-200 bg-[#fbfdff] p-6 open:border-primary-300 open:shadow-[0_12px_36px_rgba(0,102,204,0.1)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-900">
                    {faq.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
