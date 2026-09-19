"use client";

import Image from "next/image";
import {FaCheck, FaCloud, FaServer, FaNetworkWired, FaShieldAlt,
  FaSyncAlt, FaChartLine, FaLayerGroup,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";
import ServiceHero from "./ServiceHero";

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
<ServiceHero title="Cloud Solutions &" highlight="Digital Infrastructure" tagline="Scalable, secure cloud built for modern growth" />

      {/* Cloud Solutions & Infrastructure — image left / text right like reference */}
      <section className="relative overflow-hidden bg-[#f7fbff] py-12 sm:py-14 lg:py-16">
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
                  <Image src="/images/IntroCloud.jpg" alt="Cloud infrastructure" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
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
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our cloud services <span className="text-gradient">include</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cloudServices.map((service, i) => (
              <Reveal key={service.title} y={30} delay={(i % 3) * 0.06}>
                <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_16px_44px_rgba(0,102,204,0.14)]">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle, rgba(0,102,204,0.14) 0%, transparent 70%)" }} />
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-base text-white shadow-[0_4px_14px_rgba(0,102,204,0.2)]"><service.icon /></div>
                  <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud migration — image + text */}
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
                  <Image src="/images/benefitsOfcloud.jpg" alt="Cloud migration services" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
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
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Enterprise cloud on <span className="text-gradient">global platforms</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformServices.map((service, i) => (
              <Reveal key={service.title} y={30} delay={(i % 4) * 0.06}>
                <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_16px_44px_rgba(0,102,204,0.14)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-base text-white shadow-[0_4px_14px_rgba(0,102,204,0.2)]"><service.icon /></div>
                  <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.desc}</p>
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
