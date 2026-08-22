"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "ROI-Focused",
    description: "Every dollar of ad spend is optimized for maximum return on investment.",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-8 0 4 4 0 008 0zm6-3.87a4 4 0 11-2.59-3.74M7.05 8.05a2.5 2.5 0 113.54-3.54" />
      </svg>
    ),
    title: "Multi-Channel Expertise",
    description: "Integrated campaigns across social media, search, email, and display networks.",
    gradient: "from-indigo-600 to-indigo-700",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Creative Excellence",
    description: "Compelling ad creatives, copy, and content that stops the scroll.",
    gradient: "from-violet-600 to-violet-700",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Real-Time Optimization",
    description: "Continuous campaign monitoring and adjustments for peak performance.",
    gradient: "from-primary-600 to-primary-700",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Dedicated Account Managers",
    description: "Personal attention from senior marketers who know your brand inside out.",
    gradient: "from-accent-600 to-accent-700",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Transparent Reporting",
    description: "Clear metrics and insights so you always understand campaign performance.",
    gradient: "from-emerald-600 to-emerald-700",
  },
];

export default function MarketingWhyChoose() {
  return (
    <section className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading title="Why Choose" highlight="CodeQor" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} y={30} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-zinc-300 hover:shadow-[0_12px_40px_-12px_rgba(0,102,204,0.1)]">
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,102,204,0.06), transparent 70%)" }} />
                <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="relative mb-3 text-xl font-bold text-zinc-900">{feature.title}</h3>
                <p className="relative text-sm leading-relaxed text-zinc-600">{feature.description}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
