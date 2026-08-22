"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Data-Driven Strategies",
    description: "We analyze competitors, keywords, and user behavior to build SEO strategies backed by data.",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "Transparent Reporting",
    description: "Clear monthly reports showing rankings, traffic, and ROI so you always know your investment is working.",
    gradient: "from-indigo-600 to-indigo-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    title: "Proven Results",
    description: "Track record of helping businesses rank on page one for competitive keywords.",
    gradient: "from-violet-600 to-violet-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a2.5 2.5 0 11-2.45-2.05M6.45 12.95A2.5 2.5 0 114 10.5a2.5 2.5 0 012.45 2.45z" /></svg>,
    title: "Dedicated SEO Team",
    description: "Assigned SEO specialists who understand your industry and business goals.",
    gradient: "from-primary-600 to-primary-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "White-Hat Practices",
    description: "Ethical SEO techniques that build sustainable rankings without risking penalties.",
    gradient: "from-accent-600 to-accent-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    title: "Custom Strategies",
    description: "Tailored SEO plans designed for your specific market, audience, and competitive landscape.",
    gradient: "from-emerald-600 to-emerald-700",
  },
];

export default function SEOWhyChoose() {
  return (
    <section className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading title="Why Choose" highlight="CodeQor" />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} y={30} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_8px_30px_rgba(0,102,204,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_20px_50px_rgba(0,102,204,0.12)]">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} text-white shadow-lg`}>{f.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">{f.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{f.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
