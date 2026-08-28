"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowLeft, FaChartLine, FaCheck, FaDatabase,
  FaChartBar, FaChartPie, FaTable, FaLightbulb, FaUsers, FaShieldAlt,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";

const features = [
  { icon: FaTable, title: "Interactive Dashboards", desc: "Real-time KPIs and visual reports for smarter, faster decisions." },
  { icon: FaChartBar, title: "Data Visualization", desc: "Transform complex data into simple, easy-to-read charts and graphs." },
  { icon: FaDatabase, title: "Data Warehousing", desc: "Centralized storage to integrate information from multiple sources." },
  { icon: FaChartLine, title: "Predictive & Forecasting Analytics", desc: "AI-powered forecasting for sales, demand, and market trends." },
  { icon: FaChartPie, title: "Advanced Reporting", desc: "Customizable reports tailored to your specific business needs." },
  { icon: FaLightbulb, title: "Process Optimization", desc: "Identify inefficiencies and improve workflows with data insights." },
  { icon: FaUsers, title: "Customer Insights", desc: "Track customer behavior and buying patterns for better strategies." },
  { icon: FaShieldAlt, title: "Data Security & Compliance", desc: "Ensure compliance and protect sensitive business information." },
];

const benefits = [
  "Smarter & faster decision-making",
  "Improved business efficiency",
  "360° visibility across departments",
  "Reduced risks with predictive insights",
  "Increased profitability & growth",
];

const faqs = [
  { q: "What is Business Intelligence (BI)?", a: "Business Intelligence is the use of data analysis, reporting, and visualization tools to help businesses make informed, data-driven decisions." },
  { q: "Why is Business Intelligence important?", a: "BI provides insights into performance, identifies trends, and supports strategic planning by turning raw data into meaningful information." },
  { q: "What are examples of Business Intelligence tools?", a: "Dashboards, customizable reports, data visualization charts, and predictive analytics tools are common BI solutions." },
  { q: "How can Business Intelligence help my business?", a: "It helps track KPIs, improve efficiency, identify opportunities, and reduce risks through actionable insights." },
  { q: "Can Business Intelligence be customized?", a: "Yes. BI solutions offer customizable reports tailored to business needs, ensuring insights are aligned with specific goals." },
];

export default function DataAnalyticsBI() {
  return (
    <main className="overflow-hidden bg-[#f7fbff]">
      {/* Premium Hero — dark navy with analytics dashboard on the right */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-night-950 pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-44 h-[34rem] w-[34rem] rounded-full bg-[#009fe3]/25 blur-3xl" />
          <div className="absolute -right-48 bottom-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#12c4d4]/25 blur-3xl" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(180,230,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,255,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"><FaArrowLeft /> Back to services</Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.2rem]">Data Analytics & <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-300 bg-clip-text text-transparent">Business Intelligence</span></motion.h1>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-3 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" /></span>
              <span className="text-sm font-medium text-white/90">Turning complex data into clear decisions</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.92, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="relative mx-auto w-full max-w-[32rem]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/30 to-primary-500/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#06233f] via-[#0a3a63] to-[#045c86] p-6 sm:p-8">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="relative flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-red-300" /><i className="h-2 w-2 rounded-full bg-amber-300" /><i className="h-2 w-2 rounded-full bg-emerald-300" /></div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">BI / Analytics</span>
                </div>
                <div className="relative mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-medium text-white/45">Revenue growth</p>
                    <p className="mt-1 text-2xl font-bold text-white">+32%</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: ["0%", "78%"] }} transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }} className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-primary-400" /></div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-medium text-white/45">Data sources</p>
                    <p className="mt-1 text-2xl font-bold text-white">24+</p>
                    <p className="mt-3 text-[10px] text-white/40">fully integrated</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-primary-500/10 p-4">
                    <p className="text-[10px] font-medium text-white/45">Live performance stream</p>
                    <div className="mt-4 flex h-16 items-end gap-1.5">
                      {[40, 55, 42, 68, 58, 74, 66, 88, 82, 100].map((h, i) => <motion.i key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }} className="flex-1 rounded-t bg-gradient-to-t from-primary-500 to-cyan-300" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features cards */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Core features of <span className="text-gradient">Business Intelligence</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal key={feature.title} y={30} delay={(i % 4) * 0.06}>
                <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_16px_44px_rgba(0,102,204,0.14)]">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-200 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.24)]"><feature.icon /></div>
                  <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + image */}
      <section className="relative overflow-hidden bg-[#f7fbff] py-8 sm:py-10 lg:py-12">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-primary-100/60 blur-3xl" />
          <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-accent-100/50 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal x={-40}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/25 to-accent-400/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-[0_20px_60px_rgba(0,102,204,0.14)]">
                  <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="Business intelligence dashboards" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/45 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.4)]"><FaChartLine /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Benefits of Business Intelligence</h3>
                <ul className="mt-8 space-y-4">
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
