"use client";

import { FaGoogle, FaStar } from "react-icons/fa";
import Counter from "./Counter";
import Reveal from "./Reveal";

const statItems = [
  {
    value: 40,
    suffix: "%",
    label: "Boost",
    sub: "In website traffic within 6 months",
  },
  {
    value: 98,
    suffix: "%",
    label: "",
    sub: "Customer Satisfaction",
  },
  {
    value: 100,
    suffix: "+",
    label: "Projects",
    sub: "Completed Successfully",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-100 via-primary-200 to-accent-200">
      <div className="pointer-events-none absolute -left-10 -top-16 h-64 w-64 rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl" />

      <Reveal className="mx-auto hidden max-w-7xl grid-cols-5 gap-6 px-6 py-12 sm:grid lg:px-10">
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2 rounded-md bg-gradient-to-r from-primary-600 to-accent-600 px-3 py-1.5">
            <FaGoogle className="text-white" size={18} />
            <Counter to={4.8} decimals={1} className="text-base font-bold text-white" />
          </div>
          <div className="flex gap-1 text-amber-400">
            {[0, 1, 2, 3, 4].map((i) => (
              <FaStar key={i} size={12} />
            ))}
          </div>
          <p className="text-xs font-semibold text-primary-700">
            <Counter to={1250} className="text-primary-700" /> Reviews
          </p>
        </div>

        {statItems.map((stat) => (
          <div
            key={stat.sub}
            className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/70 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm"
          >
            <p className="text-2xl font-extrabold text-primary-700">
              <Counter to={stat.value} />
              <span className="text-sm text-primary-500">{stat.suffix}</span>
              {stat.label && <span className="ml-1 text-sm text-primary-500">{stat.label}</span>}
            </p>
            <p className="mt-1 text-xs font-medium text-zinc-700">{stat.sub}</p>
          </div>
        ))}

        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/70 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm">
          <p className="text-2xl font-extrabold text-primary-700">24/7</p>
          <p className="mt-1 text-xs font-medium text-zinc-700">Support Available</p>
        </div>
      </Reveal>

      <Reveal className="px-6 py-10 sm:hidden">
        <div className="flex flex-col items-center gap-4 rounded-xl border border-white/70 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2 rounded-md bg-gradient-to-r from-primary-600 to-accent-600 px-3 py-1.5">
            <FaGoogle className="text-white" size={16} />
            <Counter to={4.8} decimals={1} className="text-base font-bold text-white" />
          </div>
          <div className="flex gap-1 text-amber-400">
            {[0, 1, 2, 3, 4].map((i) => (
              <FaStar key={i} size={12} />
            ))}
          </div>
          <p className="text-xs font-semibold text-primary-700">
            <Counter to={1250} className="text-primary-700" /> Reviews
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          {statItems.map((stat) => (
            <div key={stat.sub} className="rounded-xl border border-white/70 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm">
              <p className="text-xl font-extrabold text-primary-700">
                <Counter to={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-700">{stat.sub}</p>
            </div>
          ))}
          <div className="rounded-xl border border-white/70 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm">
            <p className="text-xl font-extrabold text-primary-700">24/7</p>
            <p className="mt-1 text-xs font-medium text-zinc-700">Support Available</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
