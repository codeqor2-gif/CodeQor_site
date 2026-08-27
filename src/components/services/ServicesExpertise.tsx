"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { services } from "./servicesData";

export default function ServicesExpertise() {
  return (
    <section id="expertise" className="relative bg-white py-8 sm:py-10 lg:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-accent-100/50 blur-3xl" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(117,211,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(117,211,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center"><h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:whitespace-nowrap lg:text-4xl">Comprehensive <span className="text-gradient">Digital Solutions</span></h2></div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i % 3) * 0.06 }} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_22px_55px_rgba(0,102,204,0.16)]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle, rgba(0,102,204,0.14), transparent 70%)" }} />
            <div className="absolute inset-x-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transition-transform duration-500 group-hover:scale-x-100" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.24)]">{<service.icon />}</div>
            <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{service.description}</p>
            <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-600">{service.points.map((point) => <li key={point} className="flex items-center gap-2.5"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600"><FaCheck className="h-2.5 w-2.5" /></span>{point}</li>)}</ul>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}
