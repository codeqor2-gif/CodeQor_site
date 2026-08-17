"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDollarSign, FaUsers, FaHistory, FaArrowRight } from "react-icons/fa";
import { engagementModels, unsplashImages } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ReactNode> = {
  dollar: <FaDollarSign />,
  users: <FaUsers />,
  history: <FaHistory />,
};

export default function Engagement() {
  const scrollToContact = () => {
    const el = document.getElementById("contactus");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24">
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 animate-blob rounded-full bg-primary-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 animate-blob rounded-full bg-accent-400/15 blur-[120px] [animation-delay:-6s]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Engagement <span className="text-gradient">Models</span>
          </h2>
          <p className="max-w-2xl text-zinc-600">
            Flexible ways to work with our team, tailored to your budget, timeline, and goals.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.4)] transition-all duration-300 hover:brightness-110"
          >
            Get A Quote
            <FaArrowRight size={14} />
          </button>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal x={-40} y={0} className="order-2 lg:order-1">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/30 to-accent-400/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_20px_60px_rgba(139,92,246,0.16)]">
                <Image
                  src={unsplashImages.team}
                  alt="Team meeting"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover sm:h-80 lg:h-[430px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/15 bg-night-900/70 px-4 py-3 backdrop-blur-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                    <FaUsers />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">Global Teams</p>
                    <p className="text-xs text-zinc-400">Remote-first & collaborative</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 order-1 lg:order-2">
            {engagementModels.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group flex gap-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_10px_40px_rgba(139,92,246,0.07)] transition-all duration-400 hover:border-accent-400/70 hover:shadow-[0_20px_50px_rgba(217,70,239,0.18)]"
              >
                <div className="text-2xl font-extrabold text-accent-500 md:text-3xl">
                  {model.number}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-primary-600 transition-transform duration-300 group-hover:scale-110">
                      {iconMap[model.icon]}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-900 md:text-xl">{model.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-600">{model.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
