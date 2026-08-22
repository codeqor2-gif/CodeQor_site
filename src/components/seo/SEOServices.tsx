"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "On-Page SEO",
    description: "Optimize meta tags, content structure, keyword placement, and internal linking for maximum search visibility.",
    gradient: "from-blue-500 to-blue-600",
    glow: "rgba(59,130,246,0.12)",
    ring: "ring-blue-100",
    dot: "bg-blue-400",
    tags: ["Meta Tags", "Content", "Keywords"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5m8.156-8.156l1.5-1.5a4 4 0 015.656 5.656l-3 3a4 4 0 01-5.656 0M10 14L14 10" />
      </svg>
    ),
    title: "Off-Page SEO",
    description: "Build high-quality backlinks through guest posting, outreach campaigns, and strategic brand mentions.",
    gradient: "from-emerald-500 to-emerald-600",
    glow: "rgba(16,185,129,0.12)",
    ring: "ring-emerald-100",
    dot: "bg-emerald-400",
    tags: ["Link Building", "Guest Posts", "Outreach"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Technical SEO",
    description: "Improve site speed, mobile optimization, schema markup, and crawlability for better search engine indexing.",
    gradient: "from-violet-500 to-violet-600",
    glow: "rgba(139,92,246,0.12)",
    ring: "ring-violet-100",
    dot: "bg-violet-400",
    tags: ["Site Speed", "Schema", "Mobile"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local SEO",
    description: "Optimize your Google Business Profile, local citations, and reviews to dominate local search results.",
    gradient: "from-primary-500 to-primary-600",
    glow: "rgba(0,102,204,0.12)",
    ring: "ring-primary-100",
    dot: "bg-primary-400",
    tags: ["Google Business", "Citations", "Reviews"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    title: "E-commerce SEO",
    description: "Product optimization, category structure, and rich snippets to boost your online store's search rankings.",
    gradient: "from-accent-500 to-accent-600",
    glow: "rgba(17,197,232,0.12)",
    ring: "ring-accent-100",
    dot: "bg-accent-400",
    tags: ["Products", "Rich Snippets", "Categories"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "SEO Analytics",
    description: "Comprehensive traffic analysis, competitor research, and detailed reporting to track your SEO ROI.",
    gradient: "from-rose-500 to-rose-600",
    glow: "rgba(244,63,94,0.12)",
    ring: "ring-rose-100",
    dot: "bg-rose-400",
    tags: ["Analytics", "Reporting", "Competitors"],
  },
];

export default function SEOServices() {
  return (
    <section className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading title="Our SEO" highlight="Services" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} y={30} delay={i * 0.08}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 hover:border-zinc-300 hover:shadow-[0_12px_40px_-12px_var(--card-glow)]"
                style={{ "--card-glow": service.glow } as React.CSSProperties}
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100" style={{ background: `radial-gradient(ellipse at 50% -10%, ${service.glow}, transparent 70%)` }} />

                <div className="relative mb-5">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] ring-4 ${service.ring} transition-shadow duration-300 group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="relative mb-2 text-lg font-bold text-zinc-900 transition-colors duration-300 group-hover:text-zinc-950">
                  {service.title}
                </h3>

                <p className="relative mb-4 flex-1 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-600">
                  {service.description}
                </p>

                <div className="relative flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-semibold text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700">
                      <span className={`h-1 w-1 rounded-full ${service.dot} transition-transform duration-300 group-hover:scale-125`} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r ${service.gradient} transition-transform duration-500 group-hover:scale-x-100`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
