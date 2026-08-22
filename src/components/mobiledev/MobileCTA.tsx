"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function MobileCTA() {
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
              Ready to Launch Your{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Mobile App?
              </span>
            </h2>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed">
              Let CodeQor bring your mobile vision to life with a custom app that
              your users will love.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contactus"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(0,102,204,0.4)] transition-all duration-300 hover:brightness-110"
              >
                Get Started Today
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
