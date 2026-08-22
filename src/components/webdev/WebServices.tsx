"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: "Custom Web Development",
    description: "Tailor-made web applications built from scratch to match your unique business requirements and workflows.",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>,
    title: "E-Commerce Solutions",
    description: "Feature-rich online stores with secure payment gateways, inventory management, and seamless checkout experiences.",
    gradient: "from-sky-600 to-sky-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    title: "CMS Development",
    description: "User-friendly content management systems that let you update and manage your website content effortlessly.",
    gradient: "from-violet-600 to-violet-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    title: "Progressive Web Apps",
    description: "Lightning-fast PWAs that deliver native app-like experiences directly through the browser, works offline too.",
    gradient: "from-primary-600 to-primary-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Single Page Applications",
    description: "Dynamic SPAs with instant page transitions, real-time updates, and smooth animations for engaging user experiences.",
    gradient: "from-accent-600 to-accent-700",
  },
  {
    icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    title: "API Development & Integration",
    description: "Robust RESTful and GraphQL APIs that connect your systems, enabling seamless data flow across your tech stack.",
    gradient: "from-rose-600 to-rose-700",
  },
];

export default function WebServices() {
  return (
    <section className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading title="Our Web Development" highlight="Services" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <Reveal key={svc.title} y={30} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,102,204,0.06)] transition-all duration-400 hover:border-primary-300 hover:shadow-[0_8px_40px_rgba(59,130,246,0.12),0_0_0_1px_rgba(0,102,204,0.06)]">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,102,204,0.06), transparent 70%)" }} />
                <div className={`relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${svc.gradient} text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:shadow-[0_6px_20px_rgba(0,102,204,0.25)]`}>
                  {svc.icon}
                </div>
                <h3 className="relative mb-2 text-lg font-bold text-zinc-900 transition-colors duration-300 group-hover:text-primary-700">{svc.title}</h3>
                <p className="relative text-sm leading-relaxed text-zinc-600">{svc.description}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
