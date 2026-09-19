"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaDollarSign, FaUsers, FaHistory, FaArrowRight } from "react-icons/fa";
import { engagementModels } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ReactNode> = {
  dollar: <FaDollarSign />,
  users: <FaUsers />,
  history: <FaHistory />,
};

export default function Engagement() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-8">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 animate-blob rounded-full bg-primary-400/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 animate-blob rounded-full bg-accent-400/10 blur-[100px] [animation-delay:-6s]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
             
              <h2 className="text-2xl font-bold leading-tight text-zinc-900 sm:text-3xl">
                Engagement <span className="text-gradient">Models</span>
              </h2>
             
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,102,204,0.4)] transition-all duration-300 hover:brightness-110 cursor-pointer"
            >
              Get A Quote
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal x={-40} y={0} className="order-2 lg:order-1">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/25 to-accent-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_16px_50px_rgba(0,102,204,0.14)]">
                <Image
                  src="/images/engaging2model.jpg"
                  alt="Team meeting"
                  width={800}
                  height={600}
                  className="h-56 w-full object-cover sm:h-72 lg:h-[380px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/15 bg-night-900/70 px-4 py-2.5 backdrop-blur-md">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                    <FaUsers size={14} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white">Global Teams</p>
                    <p className="text-[10px] text-zinc-400">Remote-first & collaborative</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 order-1 lg:order-2">
            {engagementModels.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="group flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,102,204,0.06)] transition-all duration-400 hover:border-primary-400 hover:shadow-[0_8px_40px_rgba(0,102,204,0.25)]"
              >
                <div className="text-xl font-extrabold text-accent-500 md:text-2xl">
                  {model.number}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl text-primary-600">
                      {iconMap[model.icon]}
                    </span>
                    <h3 className="text-sm font-semibold text-zinc-900 md:text-base">{model.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-600">{model.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
