"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiClock,
} from "react-icons/fi";
import { benefits, nextSteps, services } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    code: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const inputClass =
    "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition-all duration-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/25";

  return (
    <section id="contactus" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary-400/20 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">
                Let&apos;s Talk
              </p>
              <h2 className="text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                Partner with Us for Comprehensive IT & Digital Marketing{" "}
                <span className="text-gradient">Solutions</span>
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Get in touch & let&apos;s start crafting solutions that drive your business forward.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <a
                href="mailto:business@netrootstech.com"
                className="inline-flex items-center gap-3 rounded-2xl border border-primary-300 bg-primary-100/60 px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400 hover:bg-primary-100/90 hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)]"
              >
                <FiMail className="text-primary-600" size={20} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Email us at
                  </p>
                  <p className="text-sm font-semibold text-zinc-900">business@netrootstech.com</p>
                </div>
              </a>
            </Reveal>

            <div className="mt-10">
              <Reveal delay={0.15}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-700">
                  Your Benefits
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {benefits.map((benefit, i) => (
                    <motion.span
                      key={benefit}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/70 hover:shadow-[0_8px_22px_rgba(139,92,246,0.14)]"
                    >
                      <FiCheck className="text-accent-600" />
                      {benefit}
                    </motion.span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2} className="mt-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-700">
                  What&apos;s Next?
                </h3>
                <ol className="mt-4 space-y-4">
                  {nextSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-sm font-bold text-white shadow-[0_6px_18px_rgba(124,58,237,0.35)]">
                        {i + 1}
                      </span>
                      <p className="pt-1.5 text-zinc-600">{step}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1} x={40} y={0}>
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_20px_60px_rgba(139,92,246,0.14)] backdrop-blur-md sm:p-9">
              <h3 className="text-2xl font-bold text-zinc-900">
                Get your <span className="text-gradient">Free Quote</span> Today!
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Tell us about your project and we&apos;ll get back within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your Name"
                  className={inputClass}
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Your Email"
                  className={inputClass}
                />
                <input
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Phone"
                  className={inputClass}
                />
                <input
                  value={form.code}
                  onChange={update("code")}
                  placeholder="Code"
                  className={inputClass}
                />
                <select
                  value={form.service}
                  onChange={update("service")}
                  className={`${inputClass} sm:col-span-2 ${form.service ? "text-zinc-900" : "text-zinc-400"}`}
                >
                  <option value="" disabled>
                    Select Services
                  </option>
                  {[...services.map((s) => s.title), "Web Development", "Mobile Development", "Digital Marketing"].map(
                    (s) => (
                      <option key={s} value={s} className="text-zinc-900">
                        {s}
                      </option>
                    ),
                  )}
                </select>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Your Message"
                  className={`${inputClass} resize-none sm:col-span-2`}
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.45)] transition-all duration-300 hover:brightness-110 sm:col-span-2"
                >
                  <FiSend />
                  {submitted ? "Submitted! We'll be in touch." : "Submit"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-400/60 hover:shadow-[0_18px_44px_rgba(139,92,246,0.16)]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_8px_20px_rgba(124,58,237,0.35)]">
                <FiMapPin />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-900">Head Office</p>
                <p className="text-xs text-zinc-500">Easton, Pennsylvania, USA</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-400/60 hover:shadow-[0_18px_44px_rgba(139,92,246,0.16)]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_8px_20px_rgba(124,58,237,0.35)]">
                <FiPhone />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-900">Call Us</p>
                <p className="text-xs text-zinc-500">+1 (302) 300-1742</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-400/60 hover:shadow-[0_18px_44px_rgba(139,92,246,0.16)]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_8px_20px_rgba(124,58,237,0.35)]">
                <FiClock />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-900">Working Hours</p>
                <p className="text-xs text-zinc-500">Mon–Sat, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_16px_50px_rgba(139,92,246,0.12)]">
            <iframe
              title="Our location on Google Maps"
              src="https://www.google.com/maps?q=Easton,+Pennsylvania,+USA&output=embed"
              className="h-[360px] w-full grayscale-[0.3] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
