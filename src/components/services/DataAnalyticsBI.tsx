"use client";

import Image from "next/image";
import {FaChartLine, FaCheck, FaDatabase,
  FaChartBar, FaChartPie, FaTable, FaLightbulb, FaUsers, FaShieldAlt,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";
import ServiceHero from "./ServiceHero";

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
<ServiceHero title="Data Analytics &" highlight="Business Intelligence" tagline="Turning complex data into clear decisions" />

      {/* Data Analytics & Business Intelligence — text left / image right like reference */}
      <section className="relative overflow-hidden bg-[#f7fbff] py-12 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem]" style={{ background: "radial-gradient(circle, rgba(30,64,175,0.12) 0%, transparent 70%)" }} />
          <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem]" style={{ background: "radial-gradient(circle, rgba(18,196,212,0.1) 0%, transparent 70%)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal x={-40}>
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2.5rem]" style={{ background: "radial-gradient(ellipse at center, rgba(0,102,204,0.16) 0%, transparent 70%)" }} />
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_28px_70px_rgba(0,102,204,0.16)]">
                  <Image src="/images/IntroDA.jpg" alt="Business intelligence analytics dashboard" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/55 via-night-950/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 via-transparent to-accent-400/20 mix-blend-multiply" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_10px_26px_rgba(0,102,204,0.45)] ring-1 ring-white/30"><FaChartLine /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Data Analytics & Business Intelligence</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">Turn complex data into meaningful insights with advanced analytics, interactive dashboards, and predictive intelligence.</p>
                <ul className="mt-8 space-y-4">
                  {["Predictive Intelligence", "Interactive Dashboards", "Advanced Analytics"].map((point) => (
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
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle, rgba(0,102,204,0.14) 0%, transparent 70%)" }} />
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-base text-white shadow-[0_4px_14px_rgba(0,102,204,0.2)]"><feature.icon /></div>
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
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem]" style={{ background: "radial-gradient(circle, rgba(30,64,175,0.1) 0%, transparent 70%)" }} />
          <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem]" style={{ background: "radial-gradient(circle, rgba(18,196,212,0.1) 0%, transparent 70%)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal x={-40}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl" style={{ background: "radial-gradient(ellipse at center, rgba(0,102,204,0.16) 0%, transparent 70%)" }} />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-[0_20px_60px_rgba(0,102,204,0.14)]">
                  <Image src="/images/benefitsOfDA.jpg" alt="Business intelligence dashboards" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
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
      <section className="bg-white py-8 sm:py-10 lg:py-12">
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
