"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

const cards = [
  {
    icon: <FiMapPin size={24} />,
    title: "Head Office",
    content: "Easton, Pennsylvania, USA",
  },
  {
    icon: <FiPhone size={24} />,
    title: "Call Us",
    content: "+1 (302) 300-1742",
    href: "tel:+13023001742",
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#0a1628" }}>
            Get In{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #0052CC, #11C5E8)",
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
              title="Our location on Google Maps"
              src="https://www.google.com/maps?q=Easton,+Pennsylvania,+USA&output=embed"
              className="h-[280px] w-full sm:h-[340px] lg:h-full lg:min-h-[380px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
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
