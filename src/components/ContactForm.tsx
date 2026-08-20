"use client";

import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  return (
    <section className="relative py-8" style={{ background: "#F8FAFC" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          {/* Left — IT Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-primary-200/80 bg-white shadow-[0_8px_40px_rgba(0,82,204,0.08)]"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
              alt="Technology infrastructure"
              className="h-full w-full object-cover"
              style={{ minHeight: "420px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-xl font-bold text-white">Let&apos;s Build Something Great Together</h3>
              <p className="mt-2 text-sm text-white/70">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-primary-200/80 bg-white p-8 shadow-[0_8px_40px_rgba(0,82,204,0.08)] transition-all duration-400 hover:border-primary-400 hover:shadow-[0_8px_40px_rgba(0,102,204,0.25)]"
          >
            <form className="relative flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-zinc-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-zinc-700">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-zinc-700">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-zinc-700">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-zinc-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors duration-200 placeholder:text-zinc-400 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <button
                type="button"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,102,204,0.4)] transition-all duration-300 hover:brightness-110 cursor-pointer"
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
