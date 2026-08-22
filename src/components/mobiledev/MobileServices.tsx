"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "iOS App Development",
    description:
      "Native iOS applications built with Swift and SwiftUI for iPhone and iPad users.",
    gradient: "from-primary-500 to-primary-600",
    glow: "rgba(0,102,204,0.12)",
    ring: "ring-primary-100",
    dot: "bg-primary-400",
    tags: ["Swift", "SwiftUI", "UIKit"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.75V19a2 2 0 11-4 0v-.25M15 17.75V19a2 2 0 104 0v-.25M6 9V6a3 3 0 013-3h6a3 3 0 013 3v3M4 13a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM7.5 14.5h.01M16.5 14.5h.01" />
      </svg>
    ),
    title: "Android App Development",
    description:
      "Feature-rich Android apps using Kotlin and Java with Material Design principles.",
    gradient: "from-accent-500 to-accent-600",
    glow: "rgba(17,197,232,0.12)",
    ring: "ring-accent-100",
    dot: "bg-accent-400",
    tags: ["Kotlin", "Java", "Material"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Cross-Platform Apps",
    description:
      "Single codebase, multiple platforms. React Native and Flutter solutions that save time and cost.",
    gradient: "from-emerald-500 to-emerald-600",
    glow: "rgba(16,185,129,0.12)",
    ring: "ring-emerald-100",
    dot: "bg-emerald-400",
    tags: ["React Native", "Flutter", "Dart"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "UI/UX for Mobile",
    description:
      "Intuitive, pixel-perfect mobile interfaces designed for engagement and ease of use.",
    gradient: "from-violet-500 to-violet-600",
    glow: "rgba(139,92,246,0.12)",
    ring: "ring-violet-100",
    dot: "bg-violet-400",
    tags: ["Figma", "Prototyping", "Design"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5m8.156-8.156l1.5-1.5a4 4 0 015.656 5.656l-3 3a4 4 0 01-5.656 0M10 14L14 10" />
      </svg>
    ),
    title: "App Integration",
    description:
      "Seamless integration with APIs, payment gateways, push notifications, and third-party services.",
    gradient: "from-rose-500 to-rose-600",
    glow: "rgba(244,63,94,0.12)",
    ring: "ring-rose-100",
    dot: "bg-rose-400",
    tags: ["REST API", "Firebase", "支付"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "App Maintenance & Support",
    description:
      "Ongoing updates, performance monitoring, and feature enhancements to keep your app competitive.",
    gradient: "from-amber-500 to-amber-600",
    glow: "rgba(245,158,11,0.12)",
    ring: "ring-amber-100",
    dot: "bg-amber-400",
    tags: ["Monitoring", "Updates", "Support"],
  },
];

export default function MobileServices() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading title="Our Mobile App" highlight="Services" center />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} y={30} delay={i * 0.08}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 hover:border-zinc-300 hover:shadow-[0_12px_40px_-12px_var(--card-glow)]"
                style={{ "--card-glow": service.glow } as React.CSSProperties}
              >
                {/* Glow overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 50% -10%, ${service.glow}, transparent 70%)` }}
                />

                {/* Dot pattern overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "8px 8px" }}
                />

                {/* Icon */}
                <div className="relative mb-5">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] ring-4 ${service.ring} transition-all duration-300 group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative mb-2 text-lg font-bold text-zinc-900 transition-colors duration-300 group-hover:text-zinc-950">
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
                      className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-semibold text-zinc-500 transition-all duration-300 group-hover:bg-zinc-100 group-hover:text-zinc-700"
                    >
                      <span className={`h-1 w-1 rounded-full ${service.dot} transition-transform duration-300 group-hover:scale-125`} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r ${service.gradient} transition-transform duration-500 group-hover:scale-x-100`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
