"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { services } from "./servicesData";

type Props = { slug: string };

export default function ServiceDetail({ slug }: Props) {
  const service = services.find((s) => s.slug === slug) ?? services[0];
  const index = services.findIndex((s) => s.slug === service.slug);
  const next = services[(index + 1) % services.length];

  return (
    <main className="overflow-hidden bg-[#f7fbff]">
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-20"
        style={{ background: `linear-gradient(135deg, #05070f 0%, ${service.hex}66 60%, ${service.hex} 100%)` }}
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(180,230,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-30 blur-3xl" style={{ background: service.hex }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"><FaArrowLeft /> Back to all services</Link>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl text-white shadow-lg" style={{ backgroundImage: `linear-gradient(135deg, ${service.hex}, ${service.hex}99)` }}>
              <service.icon />
            </div>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal x={-40}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">What we deliver</h2>
                <p className="mt-5 text-base leading-7 text-slate-600">{service.description} We pair deep technical expertise with a rigorous, transparent process to ensure every outcome is measurable and built to last.</p>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_8px_26px_rgba(0,75,140,0.06)]">
                <h3 className="text-lg font-bold text-slate-900">Key capabilities</h3>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundImage: `linear-gradient(135deg, ${service.hex}, ${service.hex}99)` }}>
                        <FaCheck className="h-3 w-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Next service */}
      <section className="bg-[#edf8ff] py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link href={`/services/${next.slug}`} className="group flex items-center justify-between rounded-2xl border border-white bg-white/80 p-6 shadow-[0_8px_26px_rgba(0,102,204,0.07)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(0,102,204,0.14)] sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Next service</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{next.title}</h3>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_8px_20px_rgba(0,102,204,0.28)] transition-transform duration-300 group-hover:translate-x-1"><FaArrowRight /></span>
          </Link>
        </div>
      </section>
    </main>
  );
}
