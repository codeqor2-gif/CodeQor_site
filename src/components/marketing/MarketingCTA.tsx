"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function MarketingCTA() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="absolute inset-0 bg-gradient-to-br from-night-950 via-night-900 to-primary-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,204,0.2),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Grow Your{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed">
              Let CodeQor build a digital marketing strategy that turns clicks into customers and ad spend into measurable, scalable ROI.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contactus"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(0,102,204,0.4)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,102,204,0.5)] hover:brightness-110"
              >
                Get Free Marketing Audit
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                View Our Results
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
