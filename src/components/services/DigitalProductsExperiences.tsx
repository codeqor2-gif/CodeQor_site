"use client";

import Image from "next/image";
import {FaCheck, FaGlobe, FaMobileAlt, FaPaintBrush, FaLayerGroup,
  FaRocket, FaUsers, FaChartLine,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";
import ServiceHero from "./ServiceHero";

const services = [
  { icon: FaGlobe, title: "Web Experiences", desc: "High-performance, responsive websites that build brand trust and convert visitors." },
  { icon: FaMobileAlt, title: "Mobile Applications", desc: "Native and cross-platform apps that feel effortless and keep users engaged." },
  { icon: FaPaintBrush, title: "UI/UX Design Systems", desc: "Consistent, accessible interfaces and design systems that scale with your product." },
  { icon: FaLayerGroup, title: "Interactive Products", desc: "Immersive, motion-rich experiences that connect brands with their audiences." },
  { icon: FaRocket, title: "Product Launch & Growth", desc: "Ship, measure, and iterate to keep your product fresh and growing." },
  { icon: FaUsers, title: "Dedicated Product Teams", desc: "Cross-functional teams covering design, engineering, and product strategy." },
];

const benefits = [
  "Delightful, brand-aligned user experiences",
  "Higher engagement and conversion rates",
  "Responsive across every device",
  "Scalable, maintainable architecture",
  "Fast performance and accessibility",
  "Built with a full product mindset",
];

const faqs = [
  { q: "What digital products do you build?", a: "We build websites, mobile applications, and immersive interactive experiences — from marketing sites and landing pages to full cross-platform products." },
  { q: "Can you design and develop a complete product?", a: "Yes. Our cross-functional team covers UX/UI design, engineering, QA, and growth so you get a complete, polished product end to end." },
  { q: "Do you support both web and mobile?", a: "Yes. We build responsive web experiences and native/cross-platform mobile apps that share a consistent brand and design language." },
  { q: "How do you ensure experiences feel immersive?", a: "We use motion, interaction design, and performance optimization to create engaging, memorable experiences that keep users coming back." },
  { q: "Can you scale or improve an existing product?", a: "Absolutely. We modernize and extend existing products to improve performance, usability, and engagement." },
];

export default function DigitalProductsExperiences() {
  return (
    <main className="overflow-hidden bg-[#f7fbff]">
      {/* Premium Hero */}
<ServiceHero title="Digital Products &" highlight="Immersive Experiences" tagline="Create experiences that connect brands with audiences" />

      {/* Image + description */}
      <section className="relative overflow-hidden bg-[#f7fbff] py-12 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem]" style={{ background: "radial-gradient(circle, rgba(30,64,175,0.12) 0%, transparent 70%)" }} />
          <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem]" style={{ background: "radial-gradient(circle, rgba(18,196,212,0.1) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(117,211,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(117,211,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal x={-40}>
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2.5rem]" style={{ background: "radial-gradient(ellipse at center, rgba(0,102,204,0.16) 0%, transparent 70%)" }} />
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_28px_70px_rgba(0,102,204,0.16)]">
                  <Image src="/images/IntroDigitalProduct.jpg" alt="Digital product on mobile" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/55 via-night-950/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 via-transparent to-accent-400/20 mix-blend-multiply" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_10px_26px_rgba(0,102,204,0.45)] ring-1 ring-white/30"><FaMobileAlt /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Digital Products & Immersive Experiences</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">Create powerful websites, mobile applications, and engaging digital experiences that connect brands with their audiences.</p>
                <ul className="mt-8 space-y-4">
                  {["Websites", "Mobile Applications", "Engaging Experiences"].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-base font-medium text-slate-700">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-[0_6px_16px_rgba(0,102,204,0.3)]"><FaCheck className="h-3.5 w-3.5" /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services cards */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What we <span className="text-gradient">create</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <Reveal key={item.title} y={30} delay={(i % 3) * 0.06}>
                <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_16px_44px_rgba(0,102,204,0.14)]">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle, rgba(0,102,204,0.14) 0%, transparent 70%)" }} />
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-base text-white shadow-[0_4px_14px_rgba(0,102,204,0.2)]"><item.icon /></div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image + benefits */}
      <section className="relative overflow-hidden bg-[#f7fbff] py-8 sm:py-10 lg:py-12">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem]" style={{ background: "radial-gradient(circle, rgba(30,64,175,0.1) 0%, transparent 70%)" }} />
          <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem]" style={{ background: "radial-gradient(circle, rgba(18,196,212,0.1) 0%, transparent 70%)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal x={-40}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl" style={{ background: "radial-gradient(ellipse at center, rgba(0,102,204,0.16) 0%, transparent 70%)" }} />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-[0_20px_60px_rgba(0,102,204,0.14)]">
                  <Image src="/images/BenefitsDigitalProducts.jpg" alt="Product team collaborating" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/45 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.4)]"><FaChartLine /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Benefits of digital products</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">Craft products that delight users, build brand loyalty, and turn visitors into customers.</p>
                <ul className="mt-7 space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-base font-medium text-slate-700">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-[0_6px_16px_rgba(0,102,204,0.3)]"><FaCheck className="h-3.5 w-3.5" /></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} y={16} delay={(i % 4) * 0.05}>
                <details className="group rounded-2xl border border-slate-200 bg-[#fbfdff] p-6 open:border-primary-300 open:shadow-[0_12px_36px_rgba(0,102,204,0.1)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-900">
                    {faq.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
