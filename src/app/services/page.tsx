"use client";

import Link from "next/link";
import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight, FaBrain, FaChartLine, FaCheck, FaCloud, FaCode, FaCogs,
  FaCommentDots, FaDatabase, FaGlobe, FaMobileAlt, FaPaintBrush, FaRocket,
  FaServer, FaShieldAlt, FaShoppingCart, FaStar, FaWordpress,
} from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { testimonials } from "@/lib/data";

type Service = { icon: ElementType; title: string; description: string; points: string[]; gradient: string; hex: string };

const services: Service[] = [
  { icon: FaGlobe, title: "Web Development", description: "Modern, responsive websites built with cutting-edge technologies and optimized for performance.", points: ["Next.js & React", "Performance Optimized", "SEO Ready"], gradient: "from-sky-500 to-blue-600", hex: "#0ea5e9" },
  { icon: FaMobileAlt, title: "Mobile Development", description: "Native and cross-platform mobile applications that deliver exceptional user experiences.", points: ["iOS & Android", "React Native", "App Store Ready"], gradient: "from-blue-500 to-indigo-600", hex: "#2563eb" },
  { icon: FaServer, title: "Backend Development", description: "Powerful and scalable backend solutions that form the foundation of robust digital experiences.", points: ["Node.js & Django", "API Development", "Database Design"], gradient: "from-emerald-500 to-teal-600", hex: "#10b981" },
  { icon: FaCogs, title: "DevOps Development", description: "Streamlined development and operations processes for efficient software delivery and deployment.", points: ["CI/CD", "Infrastructure as Code", "Monitoring"], gradient: "from-slate-600 to-slate-800", hex: "#475569" },
  { icon: FaCommentDots, title: "Voice Over IP (VoIP)", description: "Reliable, cost-effective VoIP solutions for clear voice and video communication over the internet.", points: ["Call Forwarding", "Voicemail", "Conferencing"], gradient: "from-cyan-500 to-teal-500", hex: "#06b6d4" },
  { icon: FaCloud, title: "Cloud Services", description: "Comprehensive cloud services to help businesses scale, innovate, and optimize their operations.", points: ["Cloud Infrastructure", "Data Storage", "Disaster Recovery"], gradient: "from-sky-500 to-cyan-600", hex: "#22d3ee" },
  { icon: FaWordpress, title: "WordPress", description: "Custom WordPress solutions, creating responsive, user-friendly websites tailored to your needs.", points: ["Custom Themes", "Plugin Development", "E-commerce"], gradient: "from-blue-600 to-indigo-500", hex: "#21759b" },
  { icon: FaPaintBrush, title: "UI/UX Design", description: "User-centered design solutions that create intuitive and engaging digital experiences.", points: ["User Research", "Prototyping", "Design Systems"], gradient: "from-violet-500 to-fuchsia-600", hex: "#8b5cf6" },
  { icon: FaShoppingCart, title: "Point of Sale Software", description: "POS applications that simplify sales, inventory management, and reporting for modern operations.", points: ["Sales Management", "Inventory Control", "Reporting"], gradient: "from-orange-500 to-amber-600", hex: "#f59e0b" },
  { icon: FaDatabase, title: "Web and Domain Hosting", description: "Secure and reliable hosting services to help establish and grow your online presence.", points: ["Domain Registration", "DNS Management", "Email Forwarding"], gradient: "from-violet-500 to-purple-600", hex: "#8b5cf6" },
  { icon: FaChartLine, title: "Digital Marketing", description: "Data-driven marketing strategies that boost your online presence and drive conversions.", points: ["SEO & SEM", "Social Media", "Analytics"], gradient: "from-rose-500 to-pink-600", hex: "#f43f5e" },
  { icon: FaRocket, title: "Consulting", description: "Strategic technology consulting to help you make informed decisions and optimize processes.", points: ["Tech Strategy", "Architecture Review", "Best Practices"], gradient: "from-amber-500 to-orange-600", hex: "#f59e0b" },
  { icon: FaBrain, title: "AI Service", description: "Custom AI capabilities, from intelligent assistants and search to model integration, built around your workflows.", points: ["LLM Integration", "Knowledge Bases", "Secure Pipelines"], gradient: "from-purple-600 to-violet-600", hex: "#7c3aed" },
  { icon: FaCogs, title: "AI Automation", description: "Automate repetitive work with AI-driven workflows, routing, reporting, and integrations that save time.", points: ["Workflow Automation", "Process Intelligence", "API Orchestration"], gradient: "from-fuchsia-500 to-purple-600", hex: "#d946ef" },
  { icon: FaShieldAlt, title: "Blockchain Development", description: "Secure and transparent blockchain-based applications for modern businesses and platforms.", points: ["Smart Contracts", "Wallet Integration", "Decentralized Apps"], gradient: "from-blue-600 to-indigo-600", hex: "#2563eb" },
  { icon: FaBrain, title: "Generative AI Integration", description: "Integrate modern AI tools like ChatGPT and Gemini into products and business workflows.", points: ["AI Content", "Smart Search", "LLM Integration"], gradient: "from-teal-500 to-cyan-600", hex: "#14b8a6" },
  { icon: FiLayers, title: "Custom SaaS Development", description: "Create scalable and secure cloud-based software platforms tailored to your business needs.", points: ["Multi-Tenant Apps", "Subscription Systems", "Cloud Deployment"], gradient: "from-indigo-500 to-blue-600", hex: "#6366f1" },
  { icon: FaCommentDots, title: "AI Chatbot Development", description: "Build intelligent chatbots for websites, apps, and support channels to improve engagement 24/7.", points: ["Support Bots", "WhatsApp Integration", "NLP Conversations"], gradient: "from-cyan-600 to-sky-500", hex: "#0891b2" },
];

export default function ServicesPage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="services-page overflow-hidden bg-[#f7fbff] [&>section:last-child]:hidden">
        <section className="relative flex min-h-screen items-center overflow-hidden bg-night-950 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ filter: "brightness(1.08) contrast(1.04) saturate(1.12)" }}
            src="/service-hero.mp4"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night-950/60 via-night-950/20 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 52%, rgba(2,8,23,0.35) 100%)" }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="max-w-xl">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl font-bold leading-[1.03] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.5rem]">EXPLORE OUR SERVICES</motion.h1>
              <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.8 }} className="mt-7 h-24 w-full max-w-[680px] overflow-visible" viewBox="0 0 680 96" preserveAspectRatio="none" aria-hidden="true"><path d="M0 10 H410 C500 10 490 76 560 76 C605 76 635 62 680 42" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="2" strokeLinecap="round" /></motion.svg>
              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-8 max-w-[650px] text-lg leading-8 text-white/90 sm:text-xl lg:text-2xl">Building digital solutions that turn ideas into meaningful experiences.</motion.p>
            </div>
          </div>
        </section>

        <section id="expertise" className="relative bg-white py-[60px] sm:py-20 lg:py-[120px]">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-primary-100/60 blur-3xl" />
            <div className="absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-accent-100/50 blur-3xl" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(117,211,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(117,211,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary-600">Our expertise</p><h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Comprehensive <span className="text-gradient">Digital Solutions</span></h2><p className="mt-5 text-base leading-7 text-slate-600">From concept to deployment, we deliver end-to-end solutions that transform your business and accelerate growth.</p></div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i % 3) * 0.06 }} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.06)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_22px_55px_rgba(0,102,204,0.16)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle, rgba(0,102,204,0.14), transparent 70%)" }} />
                <div className="absolute inset-x-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-xl text-white shadow-[0_8px_22px_rgba(0,102,204,0.24)]">{<service.icon />}</div>
                  <span className="text-xs font-bold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-primary-300">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-600">{service.points.map((point) => <li key={point} className="flex items-center gap-2.5"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600"><FaCheck className="h-2.5 w-2.5" /></span>{point}</li>)}</ul>
              </motion.article>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-[60px] sm:py-20 lg:py-[120px]"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="mx-auto mb-12 max-w-2xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Client love</p><h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">What Our <span className="text-gradient">Clients Say</span></h2><p className="mt-5 text-base leading-7 text-slate-600">Real partnerships, sharp execution, and products people actually enjoy using.</p></div><div className="grid grid-cols-1 gap-6 md:grid-cols-3">{[...testimonials].slice(0, 3).map((testimonial, i) => <article key={testimonial.author} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(0,75,140,0.05)] transition-all duration-300 hover:border-primary-300 hover:shadow-[0_20px_48px_rgba(0,102,204,0.14)]"><div className="pointer-events-none absolute -right-10 -top-10 text-primary-100/40 transition-colors group-hover:text-primary-100/70"><svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.9 14.017 15.1 14.017 13C14.017 8.5 17 5 21 5V1C16.5 1 11 5 11 13V21H5V18C5 16.9 5 15.1 5 13C5 8.5 7 5 11 5V1C6.5 1 1 5 1 13V21H7H8H14.017Z"/></svg></div><div className="relative flex items-center gap-1 text-amber-400">{Array.from({ length: 5 }).map((_, j) => <FaStar key={j} className="h-4 w-4" />)}</div><p className="relative mt-6 flex-1 text-sm leading-7 text-slate-600">&quot;{testimonial.quote}&quot;</p><div className="relative mt-6 flex items-center gap-3 border-t border-slate-100 pt-5"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-500 text-sm font-bold text-white shadow-[0_4px_14px_rgba(0,102,204,0.28)]">{testimonial.author.split(" ").map((word) => word[0]).slice(0, 2).join("")}</span><div><p className="text-sm font-bold text-slate-900">{testimonial.author}</p><p className="text-xs text-slate-500">Verified client</p></div></div></article>)}</div></div></section>

        <section className="relative overflow-hidden bg-gradient-to-br from-[#04234a] to-[#0077b5] py-20 sm:py-24 lg:py-28"><div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" /><div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10"><div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Ready when you are</p><h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Let&apos;s turn your next challenge into an advantage.</h2></div><Link href="/#contactus" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-700 transition hover:bg-cyan-50">Talk to our team <FaArrowRight /></Link></div></section>
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
