"use client";

import Image from "next/image";
import {FaCheck, FaUsers, FaUserTie, FaLaptopCode, FaGlobe,
  FaChalkboardTeacher, FaBuilding,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";
import ServiceHero from "./ServiceHero";

const talentTypes = [
  { icon: FaLaptopCode, title: "Software Team Augmentation", desc: "Add experienced developers to your existing team and workflows." },
  { icon: FaUserTie, title: "IT Team Augmentation", desc: "Fill technical skill gaps with experienced IT professionals instantly." },
  { icon: FaUsers, title: "Dedicated Development Team", desc: "A complete team of developers, designers, QA, and DevOps for your project." },
  { icon: FaGlobe, title: "Remote Development Team", desc: "Access top talent anywhere while cutting hiring and operational costs." },
  { icon: FaChalkboardTeacher, title: "Offshore Development Team", desc: "Expand engineering capacity cost-effectively with global teams." },
  { icon: FaBuilding, title: "Enterprise IT Staffing", desc: "Specialists for cloud, ERP, and enterprise transformation initiatives." },
];

const benefits = [
  "Experienced software and IT professionals",
  "Flexible short-term and long-term engagement models",
  "Rapid onboarding and instant access to talent",
  "Seamless integration with your existing team",
  "Expertise across modern technologies and frameworks",
  "Transparent communication and collaboration",
  "Flexible team scaling based on your needs",
];

const faqs = [
  { q: "What is team augmentation?", a: "Team augmentation is a hiring model that lets you add skilled developers or IT professionals to your existing team without recruiting full-time employees." },
  { q: "How does IT team augmentation work?", a: "We match vetted professionals to your technology stack and project needs. They onboard quickly and work as an extension of your team, following your workflows and standards." },
  { q: "What is the difference between team augmentation and outsourcing?", a: "With augmentation, professionals join and work inside your team and processes. Outsourcing hands a project to an external vendor; augmentation keeps full control with you." },
  { q: "How quickly can developers join my project?", a: "Top talent can typically onboard within days to a couple of weeks, depending on the required skill set and seniority." },
  { q: "Can I increase or reduce the team size later?", a: "Yes. Our flexible model lets you scale your team up or down based on changing project requirements." },
  { q: "Do you sign NDAs and protect intellectual property?", a: "Absolutely. We sign NDAs and put strong data security and intellectual property protections in place for every engagement." },
];

export default function TechTalentTeamExpansion() {
  return (
    <main className="overflow-hidden bg-[#f7fbff]">
      {/* Premium Hero — dark navy with image on the right */}
<ServiceHero title="Technology Talent &" highlight="Team Expansion" tagline="Scale your development team quickly" />

      {/* Technology Talent & Team Expansion — image left / text right like reference */}
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
                  <Image src="/images/introTechnologyTeam.jpg" alt="Technology talent team" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/55 via-night-950/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 via-transparent to-accent-400/20 mix-blend-multiply" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_10px_26px_rgba(0,102,204,0.45)] ring-1 ring-white/30"><FaUsers /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Technology Talent & Team Expansion</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">Strengthen your workforce with experienced developers, designers, engineers, and digital professionals available when you need them.</p>
                <ul className="mt-8 space-y-4">
                  {["Skilled Engineers", "Designers & Architects", "On-Demand Talent"].map((point) => (
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

      {/* Talent type cards */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our team augmentation <span className="text-gradient">services</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {talentTypes.map((item, i) => (
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
                  <Image src="/images/BenefitsTechnologyTeam.jpg" alt="Development team collaboration" width={800} height={600} className="aspect-[4/3] h-auto w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/45 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.4)]"><FaUsers /></div>
                </div>
              </div>
            </Reveal>
            <Reveal x={40}>
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Why choose CodQor for team expansion</h3>
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
