"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowLeft, FaCheck, FaCloud, FaServer, FaNetworkWired, FaShieldAlt,
  FaSyncAlt, FaChartLine, FaLayerGroup,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";

const cloudServices = [
  { icon: FaCloud, title: "Public Cloud Services", desc: "Leverage shared, on-demand compute and storage from leading cloud providers." },
  { icon: FaServer, title: "Private Cloud Services", desc: "Dedicated, isolated environments built for performance and control." },
  { icon: FaLayerGroup, title: "Hybrid & Managed Cloud", desc: "Blend on-premise and cloud workloads with a single operating model." },
  { icon: FaChartLine, title: "High Availability & Optimization", desc: "Tune performance and uptime for critical, business-facing workloads." },
  { icon: FaShieldAlt, title: "Secure & Compliant Operations", desc: "Meet regulatory and security requirements with governed cloud ops." },
];

const migrationServices = [
  "Cloud readiness assessment",
  "Application and workload migration",
  "Secure data transfer and validation",
  "Downtime minimization strategies",
  "Post-migration performance optimization",
];

const platformServices = [
  { icon: FaNetworkWired, title: "Compute & Storage", desc: "Elastic compute and resilient storage on AWS and Azure." },
  { icon: FaShieldAlt, title: "Security & Identity", desc: "Secure networking, identity, and access management services." },
  { icon: FaSyncAlt, title: "Backup & Disaster Recovery", desc: "Automated backup and recovery that keeps data safe." },
  { icon: FaChartLine, title: "Cost Optimization & Monitoring", desc: "Continuous monitoring and FinOps to control spend." },
];

const faqs = [
  { q: "How does cloud migration work for a business?", a: "Cloud migration involves four phases: Assessment (auditing your current on-premise infrastructure), Planning (selecting the right provider and architecture), Execution (migrating workloads with minimal downtime), and Validation (testing systems and optimizing performance). We handle every phase and provide a detailed migration runbook upfront." },
  { q: "Which cloud platforms do you support?", a: "We support all major platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We recommend the best platform based on your workloads, budget, compliance requirements, and existing technology stack. Multi-cloud and hybrid architectures are fully supported." },
  { q: "Will migrating to the cloud cause downtime?", a: "No. We use zero-downtime migration strategies including Blue-Green deployments, canary releases, and live data replication. Your existing systems remain fully operational during the migration process, with final cutover typically a brief maintenance window scheduled at off-peak hours." },
  { q: "Is cloud hosting secure for sensitive business data?", a: "Yes. Major cloud platforms have more security certifications and compliance controls than virtually any on-premise data center. We add network isolation, encryption at rest and in transit, multi-factor authentication, role-based access control, and 24/7 security monitoring — while you retain full data ownership." },
  { q: "Do you offer managed cloud services after migration?", a: "Yes. Our fully managed cloud service includes 24/7 infrastructure monitoring, automated backups, security patching, performance optimization, scaling management, and monthly reporting — without needing an in-house DevOps team." },
  { q: "What disaster recovery options do you provide?", a: "We implement cloud-based disaster recovery with Recovery Time Objectives (RTO) as low as 15 minutes and near-zero Recovery Point Objectives (RPO). Options range from simple backup-and-restore to full active-active multi-region configurations for business continuity." },
];

export default function CloudSolutionsInfrastructure() {
  return (
    <main className="overflow-hidden bg-[#f7fbff]">
      {/* Premium Hero — dark navy with cloud dashboard on the right */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-night-950 pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-44 h-[34rem] w-[34rem]" style={{ background: "radial-gradient(circle, rgba(0,159,227,0.25) 0%, transparent 70%)" }} />
          <div className="absolute -right-48 bottom-[-10rem] h-[34rem] w-[34rem]" style={{ background: "radial-gradient(circle, rgba(18,196,212,0.22) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(180,230,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,255,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
          <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10" />
          <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
          <span className="absolute left-[14%] top-[20%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_5px_rgba(103,232,249,0.5)]" />
          <span className="absolute right-[18%] top-[26%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_20px_6px_rgba(255,255,255,0.4)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"><FaArrowLeft /> Back to services</Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.2rem]">Cloud Solutions & <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-300 bg-clip-text text-transparent">Digital Infrastructure</span></motion.h1>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-3 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" /></span>
              <span className="text-sm font-medium text-white/90">Scalable, secure cloud built for modern growth</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.92, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="relative mx-auto w-full max-w-[32rem]">
            <div className="absolute -inset-6 rounded-[2.5rem]" style={{ background: "radial-gradient(ellipse at center, rgba(34,211,238,0.22) 0%, rgba(0,102,204,0.16) 45%, transparent 70%)" }} />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#06233f] via-[#0a3a63] to-[#045c86] p-6 sm:p-8">
                <div className="absolute -right-16 -top-16 h-48 w-48" style={{ background: "radial-gradient(circle, rgba(103,232,249,0.2) 0%, transparent 70%)" }} />
                <div className="relative flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-red-300" /><i className="h-2 w-2 rounded-full bg-amber-300" /><i className="h-2 w-2 rounded-full bg-emerald-300" /></div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Cloud / Infrastructure</span>
                </div>
                <div className="relative mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-medium text-white/45">Uptime SLA</p>
                    <p className="mt-1 text-2xl font-bold text-white">99.99%</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: ["0%", "99%"] }} transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }} className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-primary-400" /></div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-medium text-white/45">Workloads</p>
                    <p className="mt-1 text-2xl font-bold text-white">120+</p>
                    <p className="mt-3 text-[10px] text-white/40">deployed & managed</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-primary-500/10 p-4">
                    <p className="text-[10px] font-medium text-white/45">Live infrastructure stream</p>
                    <div className="mt-4 flex h-16 items-end gap-1.5">
                      {[34, 50, 40, 62, 56, 74, 68, 86, 80, 100].map((h, i) => <motion.i key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }} className="flex-1 rounded-t bg-gradient-to-t from-primary-500 to-cyan-300" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Solutions & Infrastructure — image left / text right like reference */}
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
                  <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" alt="Cloud infrastructure" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/55 via-night-950/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 via-transparent to-accent-400/20 mix-blend-multiply" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_10px_26px_rgba(0,102,204,0.45)] ring-1 ring-white/30"><FaCloud /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Cloud Solutions & Digital Infrastructure</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">Build on a secure, scalable, and high-performance cloud infrastructure designed for modern business growth.</p>
                <ul className="mt-8 space-y-4">
                  {["Secure Cloud", "Scalable Infrastructure", "High Performance"].map((point) => (
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

      {/* Cloud services cards */}
      <section className="bg-[#f7fbff] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our cloud services <span className="text-gradient">include</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cloudServices.map((service, i) => (
              <Reveal key={service.title} y={30} delay={(i % 3) * 0.06}>
                <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_16px_44px_rgba(0,102,204,0.14)]">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle, rgba(0,102,204,0.14) 0%, transparent 70%)" }} />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.24)]"><service.icon /></div>
                  <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud migration — image + text */}
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
                <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-[0_20px_60px_rgba(0,102,204,0.14)]">
                  <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" alt="Cloud migration services" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/45 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.4)]"><FaSyncAlt /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Smooth, controlled cloud migration</h3>
                <ul className="mt-8 space-y-4">
                  {migrationServices.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base font-medium text-slate-700">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-[0_6px_16px_rgba(0,102,204,0.3)]"><FaCheck className="h-3.5 w-3.5" /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Platform services */}
      <section className="bg-[#f7fbff] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Enterprise cloud on <span className="text-gradient">global platforms</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformServices.map((service, i) => (
              <Reveal key={service.title} y={30} delay={(i % 4) * 0.06}>
                <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_16px_44px_rgba(0,102,204,0.14)]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.24)]"><service.icon /></div>
                  <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.desc}</p>
                </div>
              </Reveal>
            ))}
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
