"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { services } from "./servicesData";

const images = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
];

export default function ServicesExpertise() {
  return (
    <section id="expertise" className="relative bg-white py-8 sm:py-10 lg:py-12">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:whitespace-nowrap lg:text-4xl">Comprehensive <span className="text-gradient">Digital Solutions</span></h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {services.map((service, i) => {
            const reversed = i % 2 !== 0;
            return (
              <div key={service.title} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative ${reversed ? "lg:order-2" : ""}`}
                >
                  <div className="absolute -inset-4 rounded-3xl opacity-70 blur-2xl" style={{ background: `radial-gradient(circle, ${service.hex}22, transparent 70%)` }} />
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_60px_rgba(0,102,204,0.12)] transition-all duration-500 hover:shadow-[0_28px_70px_rgba(0,102,204,0.2)]">
                    <Image src={images[i % images.length]} alt={service.title} width={800} height={600} className="h-auto w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl text-xl text-white shadow-lg" style={{ backgroundImage: `linear-gradient(135deg, ${service.hex}, ${service.hex}99)` }}>
                      <service.icon />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative ${reversed ? "lg:order-1" : ""}`}
                >
                  <div className="max-w-xl">
                    <Link href={`/services/${service.slug}`} className="group inline-block">
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-primary-600 sm:text-3xl">{service.title}</h3>
                    </Link>
                    <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                    <ul className="mt-7 space-y-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundImage: `linear-gradient(135deg, ${service.hex}, ${service.hex}99)` }}>
                            <FaCheck className="h-3 w-3" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${service.slug}`} className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700">
                      Learn more
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
