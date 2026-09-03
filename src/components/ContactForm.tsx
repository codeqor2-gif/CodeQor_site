"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  return (
    <section className="relative py-6" style={{ background: "#F8FAFC" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[52%_1fr] lg:gap-10">
          {/* Left — IT Image (Engagement style) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 flex flex-col"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/25 to-accent-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_16px_50px_rgba(0,102,204,0.14)] h-full min-h-[340px]">
              <Image
                src="/images/NewForm.jpg"
                alt="Modern office workspace"
                fill
                className="object-cover"
                style={{ filter: "saturate(1.08) brightness(1.04)" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/15 bg-night-900/70 px-4 py-2.5 backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white text-sm font-bold">
                  Q
                </span>
                <div>
                  <p className="text-xs font-bold text-white">Let&apos;s Build Something Great Together</p>
                  <p className="text-[10px] text-zinc-400">Tell us about your project and we&apos;ll respond within 24 hours.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 overflow-hidden rounded-3xl border border-primary-200/80 bg-white p-6 shadow-[0_8px_40px_rgba(0,82,204,0.08)] transition-all duration-400 hover:border-primary-400 hover:shadow-[0_8px_40px_rgba(0,102,204,0.25)] lg:order-2"
          >
            <form className="relative flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-zinc-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-zinc-700">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-zinc-700">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-zinc-700">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-zinc-700">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <button
                type="button"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-primary-600 to-accent-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,102,204,0.4)] transition-all duration-300 hover:brightness-110 cursor-pointer"
              >
                Send Message
                <FiSend size={15} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
