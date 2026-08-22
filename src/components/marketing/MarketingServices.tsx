"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-8 0 4 4 0 008 0zm6-3.87a4 4 0 11-2.59-3.74M7.05 8.05a2.5 2.5 0 113.54-3.54" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Social Media Marketing",
    description:
      "Full-funnel social strategies with scroll-stopping content creation and hands-on community management that grows loyal audiences.",
    gradient: "from-blue-500 to-blue-600",
    glow: "rgba(59,130,246,0.12)",
    ring: "ring-blue-100",
    dot: "bg-blue-400",
    hoverTitle: "group-hover:text-blue-700",
    tags: ["Meta Ads", "LinkedIn", "Instagram"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.5 3.5L9 6m-5.5-.5h2.75M5.5 12H3m2.25 4.25L7 14.5" />
        <circle cx="6" cy="6" r="2.5" />
      </svg>
    ),
    title: "Pay-Per-Click (PPC)",
    description:
      "High-intent Google Ads and Facebook Ads campaigns paired with sharp remarketing to capture demand and lower cost per acquisition.",
    gradient: "from-emerald-500 to-emerald-600",
    glow: "rgba(16,185,129,0.12)",
    ring: "ring-emerald-100",
    dot: "bg-emerald-400",
    hoverTitle: "group-hover:text-emerald-700",
    tags: ["Google Ads", "Meta Ads", "Remarketing"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 7.5h.008v.008H8.25V7.5zm0 3h.008v.008H8.25v-.008z" />
      </svg>
    ),
    title: "Content Marketing",
    description:
      "SEO-optimized blog writing, engaging video content, and data-rich infographics that build authority and drive organic traffic.",
    gradient: "from-violet-500 to-violet-600",
    glow: "rgba(139,92,246,0.12)",
    ring: "ring-violet-100",
    dot: "bg-violet-400",
    hoverTitle: "group-hover:text-violet-700",
    tags: ["Blogs", "Video", "Infographics"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Marketing",
    description:
      "Smart automation flows, beautifully designed newsletters, and behavior-based drip campaigns that nurture leads into revenue.",
    gradient: "from-primary-500 to-primary-600",
    glow: "rgba(0,102,204,0.12)",
    ring: "ring-primary-100",
    dot: "bg-primary-400",
    hoverTitle: "group-hover:text-primary-700",
    tags: ["Automation", "Newsletters", "Drip Campaigns"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18" />
      </svg>
    ),
    title: "Conversion Optimization",
    description:
      "Rigorous A/B testing, high-converting landing pages, and funnel optimization that squeeze more revenue from every visitor.",
    gradient: "from-accent-500 to-accent-600",
    glow: "rgba(18,196,212,0.12)",
    ring: "ring-accent-100",
    dot: "bg-accent-400",
    hoverTitle: "group-hover:text-accent-700",
    tags: ["A/B Testing", "Landing Pages", "Funnel Optimization"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Brand Strategy",
    description:
      "Sharp market positioning, compelling brand messaging, and cohesive visual identity that make your business unforgettable.",
    gradient: "from-rose-500 to-rose-600",
    glow: "rgba(244,63,94,0.12)",
    ring: "ring-rose-100",
    dot: "bg-rose-400",
    hoverTitle: "group-hover:text-rose-700",
    tags: ["Positioning", "Messaging", "Brand Identity"],
  },
];

export default function MarketingServices() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Digital Marketing"
            highlight="Services"
            subtitle="End-to-end marketing services engineered to grow traffic, leads, and revenue."
            center
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} y={30} delay={i * 0.08}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 hover:border-zinc-300 hover:shadow-[0_12px_40px_-12px_var(--card-glow)]"
                style={{ "--card-glow": service.glow } as React.CSSProperties}
              >
                {/* Glow from top */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 50% -10%, ${service.glow}, transparent 70%)` }}
                />

                {/* Icon */}
                <div className="relative mb-5">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] ring-4 ${service.ring} transition-shadow duration-300 group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`relative mb-2 text-lg font-bold text-zinc-900 transition-colors duration-300 ${service.hoverTitle}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative mb-4 flex-1 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-600">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="relative flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-semibold text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700"
                    >
                      <span className={`h-1 w-1 rounded-full ${service.dot} transition-transform duration-300 group-hover:scale-125`} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r ${service.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
