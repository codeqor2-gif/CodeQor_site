"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

const cards = [
  {
    icon: <FiMapPin size={24} />,
    title: "Head Office",
    content: "CodeQor Technologies, Mumtaz Market, GT Rd, Civil Lines, Gujranwala",
  },
  {
    icon: <FiPhone size={24} />,
    title: "Call Us",
    content: "+92 322 4544934",
    href: "tel:+923224544934",
  },
  {
    icon: <FiClock size={24} />,
    title: "Working Hours",
    content: "Mon–Sat, 9:00 AM – 6:00 PM",
  },
];

export default function Contact() {
  return (
    <section
      id="contactus"
      className="relative py-6"
      style={{ background: "#F8FAFC" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: "#0a1628" }}>
            Get In{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #0052CC, #43B2F2)",
              }}
            >
              Touch
            </span>
          </h2>
        </motion.div>

        {/* 2-column: Map left 52%, Cards right */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[52%_1fr] lg:gap-10">
          {/* Left — Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-primary-200/80 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
          >
            <iframe
              title="Mumtaz Market, GT Rd, Civil Lines, Gujranwala"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.16513%2C32.17117%2C74.20513%2C32.19117&layer=mapnik&marker=32.18117%2C74.18513"
              className="block h-[280px] w-full sm:h-[340px] lg:h-[380px]"
              style={{ border: 0 }}
              loading="eager"
            />
            <a
              href="32.17965480072819, 74.18464942906243"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-t border-zinc-100 bg-slate-50 px-4 py-3 text-sm font-medium text-primary-700 transition-colors hover:bg-blue-50 hover:text-primary-600"
            >
              <FiMapPin size={15} /> View & Get Directions in Google Maps
            </a>
          </motion.div>

          {/* Right — 3 info cards stacked */}
          <div className="flex flex-col gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-primary-200/80 bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-400 hover:border-primary-400 hover:shadow-[0_8px_40px_rgba(0,102,204,0.25)]"
              >
                <div className="relative flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_8px_24px_rgba(0,82,204,0.3)]">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-zinc-900">
                      {card.title}
                    </h3>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="mt-1.5 block text-sm text-zinc-500"
                      >
                        {card.content}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-sm text-zinc-500">
                        {card.content}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
