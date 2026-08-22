"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const platforms = [
  {
    name: "iOS",
    title: "Native iOS",
    description:
      "Swift and SwiftUI powered applications optimized for iPhone and iPad with seamless App Store integration.",
    gradient: "from-blue-500 to-blue-700",
    halo: "ring-blue-100",
    icon: (
      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
    ),
  },
  {
    name: "Android",
    title: "Native Android",
    description:
      "Kotlin and Java applications following Material Design guidelines for the best Android experience.",
    gradient: "from-green-500 to-emerald-600",
    halo: "ring-green-100",
    icon: (
      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.98 5.98 0 006 7h12a5.98 5.98 0 00-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
      </svg>
    ),
  },
  {
    name: "Cross-Platform",
    title: "Cross-Platform",
    description:
      "React Native and Flutter solutions that deliver native-like performance across both platforms.",
    gradient: "from-violet-500 to-purple-600",
    halo: "ring-violet-100",
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4.5-8 4.5-8-4.5L12 3zM4 12l8 4.5 8-4.5M4 16.5L12 21l8-4.5" />
      </svg>
    ),
  },
];

export default function MobilePlatforms() {
  return (
    <section className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          center
          title="Platforms We"
          highlight="Develop For"
          subtitle="From native apps to cross-platform solutions, we build for every device your users love."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {platforms.map((platform, index) => (
            <Reveal key={platform.name} delay={index * 0.15}>
              <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div
                  className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${platform.gradient} ring-4 ${platform.halo} transition-transform duration-300 group-hover:scale-110`}
                >
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{platform.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {platform.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
