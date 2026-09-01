"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowLeft, FaCheck, FaChartLine, FaSearch, FaBullseye, FaPenFancy,
  FaChartBar, FaEnvelope, FaNetworkWired,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";

const services = [
  { icon: FaSearch, title: "Search Engine Optimization (SEO)", desc: "Improve visibility through technical optimization, content strategy, and search performance." },
  { icon: FaBullseye, title: "Performance Advertising (PPC)", desc: "Run targeted campaigns on Google Ads and social media to generate qualified leads and conversions." },
  { icon: FaPenFancy, title: "Content & Brand Strategy", desc: "Develop content strategies that strengthen brand presence and engage target audiences." },
  { icon: FaChartBar, title: "Conversion Optimization", desc: "Improve website performance and user journeys to increase conversions and maximize traffic value." },
  { icon: FaChartLine, title: "Marketing Analytics & Insights", desc: "Measure campaign performance, track user behavior, and continuously improve strategies." },
  { icon: FaEnvelope, title: "Multi-Channel Campaigns", desc: "Coordinate campaigns across search, social, and digital channels for consistent performance." },
];

const benefits = [
  "Data-driven growth strategies",
  "Performance-focused campaigns",
  "Multi-channel marketing systems",
  "Strong return on marketing investment",
  "Higher visibility and qualified traffic",
  "Continuous optimization and scaling",
];

const faqs = [
  { q: "What digital marketing services do you provide?", a: "We provide digital marketing services including SEO optimization, performance advertising, content strategy, and marketing analytics." },
  { q: "Do you focus on long-term growth or short-term campaigns?", a: "We focus on long-term sustainable growth while running performance campaigns that deliver measurable results along the way." },
  { q: "How do you measure marketing success?", a: "We track KPIs such as traffic, conversions, cost per acquisition, and ROI, and report transparently with actionable insights." },
  { q: "Can digital marketing integrate with our product or platform analytics?", a: "Yes. We connect campaigns with your analytics stack to unify data and make smarter, evidence-based decisions." },
];

export default function DigitalGrowthMarketing() {
  return (
    <main className="overflow-hidden bg-[#f7fbff]">
      {/* Premium Hero — dark navy with image on the right */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-night-950 pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-44 h-[34rem] w-[34rem]" style={{ background: "radial-gradient(circle, rgba(0,159,227,0.25) 0%, transparent 70%)" }} />
          <div className="absolute -right-48 bottom-[-10rem] h-[34rem] w-[34rem]" style={{ background: "radial-gradient(circle, rgba(18,196,212,0.22) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(180,230,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,255,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"><FaArrowLeft /> Back to services</Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.2rem]">Digital Growth & <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-300 bg-clip-text text-transparent">Performance Marketing</span></motion.h1>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-3 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" /></span>
              <span className="text-sm font-medium text-white/90">Accelerate brand with data-driven strategies</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.92, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="relative mx-auto w-full max-w-[32rem]">
            <div className="absolute -inset-6 rounded-[2.5rem]" style={{ background: "radial-gradient(ellipse at center, rgba(34,211,238,0.22) 0%, rgba(0,102,204,0.16) 45%, transparent 70%)" }} />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#06233f] via-[#0a3a63] to-[#045c86] p-6 sm:p-8">
                <div className="absolute -right-16 -top-16 h-48 w-48" style={{ background: "radial-gradient(circle, rgba(103,232,249,0.2) 0%, transparent 70%)" }} />
                <div className="relative flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-red-300" /><i className="h-2 w-2 rounded-full bg-amber-300" /><i className="h-2 w-2 rounded-full bg-emerald-300" /></div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Growth / Marketing</span>
                </div>
                <div className="relative mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-medium text-white/45">ROI growth</p>
                    <p className="mt-1 text-2xl font-bold text-white">+3.4×</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: ["0%", "84%"] }} transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }} className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-primary-400" /></div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-medium text-white/45">Conversions</p>
                    <p className="mt-1 text-2xl font-bold text-white">+62%</p>
                    <p className="mt-3 text-[10px] text-white/40">qualified leads</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-primary-500/10 p-4">
                    <p className="text-[10px] font-medium text-white/45">Live campaign stream</p>
                    <div className="mt-4 flex h-16 items-end gap-1.5">
                      {[40, 54, 46, 64, 58, 76, 68, 86, 80, 100].map((h, i) => <motion.i key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }} className="flex-1 rounded-t bg-gradient-to-t from-primary-500 to-cyan-300" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image + description */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem]" style={{ background: "radial-gradient(circle, rgba(30,64,175,0.12) 0%, transparent 70%)" }} />
          <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem]" style={{ background: "radial-gradient(circle, rgba(18,196,212,0.1) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(117,211,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(117,211,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal x={-40}>
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2.5rem]" style={{ background: "radial-gradient(ellipse at center, rgba(0,102,204,0.16) 0%, transparent 70%)" }} />
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_28px_70px_rgba(0,102,204,0.16)]">
                  <Image src="/images/IntroDigitalGrowth.jpg" alt="Digital marketing analytics" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/55 via-night-950/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 via-transparent to-accent-400/20 mix-blend-multiply" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_10px_26px_rgba(0,102,204,0.45)] ring-1 ring-white/30"><FaChartLine /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Digital Growth & Performance Marketing</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">Accelerate your brand with data-driven strategies, targeted campaigns, and digital marketing solutions focused on measurable growth.</p>
                <ul className="mt-8 space-y-4">
                  {["Data-Driven Strategy", "Targeted Campaigns", "Measurable Growth"].map((point) => (
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
      <section className="bg-[#f7fbff] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Digital growth & marketing <span className="text-gradient">capabilities</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <Reveal key={item.title} y={30} delay={(i % 3) * 0.06}>
                <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_16px_44px_rgba(0,102,204,0.14)]">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle, rgba(0,102,204,0.14) 0%, transparent 70%)" }} />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.24)]"><item.icon /></div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image + benefits */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem]" style={{ background: "radial-gradient(circle, rgba(30,64,175,0.1) 0%, transparent 70%)" }} />
          <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem]" style={{ background: "radial-gradient(circle, rgba(18,196,212,0.1) 0%, transparent 70%)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal x={-40}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl" style={{ background: "radial-gradient(ellipse at center, rgba(0,102,204,0.16) 0%, transparent 70%)" }} />
                <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-[0_20px_60px_rgba(0,102,204,0.14)]">
                  <Image src="/images/BenefitsOfDigitalGrowth.jpg" alt="Marketing team with laptops" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/45 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.4)]"><FaBullseye /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Benefits of digital marketing</h3>
                <ul className="mt-7 space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-base font-medium text-slate-700">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-[0_6px_16px_rgba(0,102,204,0.3)]"><FaCheck className="h-3.5 w-3.5" /></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
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
