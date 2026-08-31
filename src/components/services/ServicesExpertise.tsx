"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { services } from "./servicesData";

export default function ServicesExpertise() {
  return (
    <section id="expertise" className="relative bg-white py-8 sm:py-10 lg:py-12">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Comprehensive <span className="text-gradient">Digital Solutions</span></h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_36px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:bg-primary-50/40 hover:shadow-[0_24px_55px_rgba(0,102,204,0.16)]"
            >
              {/* Card header */}
              <div className="flex items-center justify-between p-6 pb-0">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-[0_6px_16px_rgba(0,102,204,0.24)]">
                    <service.icon />
                  </span>
                  <span className="text-sm font-bold text-slate-900">{service.label}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">Services</span>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-primary-700">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="group/link mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary-600 transition-colors duration-300 hover:text-primary-700"
                >
                  Learn more
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Blue footer */}
              <div className="relative overflow-hidden p-6" style={{ background: "linear-gradient(160deg, #021830 0%, #032d52 25%, #054575 50%, #075d98 75%, #0874b5 100%)" }}>
                <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M-10 90 C 80 40 180 120 260 70 C 320 30 360 60 410 40" fill="none" stroke="white" strokeWidth="2" />
                </svg>
                <h4 className="relative text-base font-bold text-white">{service.footerTitle}</h4>
                <p className="relative mt-2 text-[13px] leading-6 text-white/80">{service.footerDesc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
