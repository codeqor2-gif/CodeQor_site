"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaBrain,
  FaChartLine,
  FaShieldAlt,
  FaCogs,
  FaCode,
  FaDatabase,
  FaRocket,
  FaNetworkWired,
} from "react-icons/fa";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const rotatingSlides = [
  {
    heading: "Transforming Ideas Into Powerful Solutions",
    description: "We combine innovative technology with strategic digital solutions that empower businesses to achieve sustainable growth.",
  },
  {
    heading: "Innovate Smarter, Grow Faster, Lead Digitally",
    description: "We deliver smart digital strategies and powerful technology solutions designed to accelerate business growth and success.",
  },
  {
    heading: "Building Digital Solutions That Drive Growth",
    description: "We transform ideas into innovative digital experiences that help businesses connect, compete, and grow in today's market.",
  },
  {
    heading: "Powering Businesses Through Innovation",
    description: "We unite creativity, technology, and strategy to build digital solutions that create meaningful business impact.",
  },
  {
    heading: "Your Vision, Our Technology",
    description: "We create scalable digital solutions that simplify challenges, strengthen brands, and drive businesses toward greater success.",
  },
  {
    heading: "Turning Technology Into Business Growth",
    description: "We seamlessly blend creative marketing strategies with cutting-edge technology solutions that help businesses grow.",
  },
];

const widgets = [
  { label: "Cloud", icon: FaCloud, top: "5%", left: "8%", color: "#11C5E8", delay: 0 },
  { label: "AI", icon: FaBrain, top: "18%", left: "82%", color: "#0078E7", delay: 1.2 },
  { label: "Analytics", icon: FaChartLine, top: "78%", left: "5%", color: "#12C4D4", delay: 2.4 },
  { label: "Security", icon: FaShieldAlt, top: "82%", left: "80%", color: "#0066CC", delay: 0.6 },
  { label: "DevOps", icon: FaCogs, top: "48%", left: "-2%", color: "#11C5E8", delay: 1.8 },
];

const leftBubbles = [
  { size: 44, top: "12%", left: "3%", dur: 8, delay: 0 },
  { size: 28, top: "30%", left: "6%", dur: 10, delay: 1.5 },
  { size: 18, top: "50%", left: "2%", dur: 7, delay: 3 },
  { size: 36, top: "65%", left: "5%", dur: 9, delay: 0.8 },
  { size: 14, top: "80%", left: "1%", dur: 11, delay: 2.2 },
  { size: 22, top: "20%", left: "10%", dur: 8.5, delay: 4 },
];

const networkNodes = [
  { x: 8, y: 25 },
  { x: 5, y: 55 },
  { x: 12, y: 75 },
  { x: 18, y: 40 },
  { x: 3, y: 15 },
];

const orbitIconPositions = [
  { icon: FaCode, angle: 0, color: "#11C5E8" },
  { icon: FaCloud, angle: 60, color: "#0078E7" },
  { icon: FaDatabase, angle: 120, color: "#12C4D4" },
  { icon: FaRocket, angle: 180, color: "#11C5E8" },
  { icon: FaNetworkWired, angle: 240, color: "#0078E7" },
  { icon: FaShieldAlt, angle: 300, color: "#12C4D4" },
].map((ti) => {
  const rad = (ti.angle * Math.PI) / 180;
  return {
    ...ti,
    x: Math.round((260 + 210 * Math.cos(rad) - 16) * 100) / 100,
    y: Math.round((260 + 210 * Math.sin(rad) - 16) * 100) / 100,
  };
});

const sidebarWidths = ["w-[70%]", "w-[55%]", "w-[80%]", "w-[45%]", "w-[60%]"];

const chartBarHeights = [
  40, 55, 35, 65, 50, 70, 45, 60, 75, 55, 80, 65,
  50, 72, 42, 68, 58, 74,
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 80% 10%, rgba(17,197,232,0.18), transparent 30%), linear-gradient(135deg, #020817 0%, #071425 35%, #0b1e36 100%)",
      }}
    >
      {/* Network connection lines — left side background */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {networkNodes.map((n, i) =>
          networkNodes.slice(i + 1).map((m, j) => (
            <line
              key={`net-${i}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="#11C5E8"
              strokeWidth="0.15"
            />
          ))
        )}
        {networkNodes.map((n, i) => (
          <circle
            key={`node-${i}`}
            cx={n.x}
            cy={n.y}
            r="0.4"
            fill="#11C5E8"
          />
        ))}
      </svg>

      {/* Ambient glow orbs */}
      <div
        className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(17,197,232,0.12) 0%, transparent 60%)",
          animation: "heroFloat1 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,102,204,0.1) 0%, transparent 60%)",
          animation: "heroFloat2 16s ease-in-out infinite",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(rgba(17,197,232,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated bubbles — LEFT side */}
      {leftBubbles.map((b, i) => (
        <div
          key={`lbubble-${i}`}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: "radial-gradient(circle at 30% 30%, rgba(17,197,232,0.35), rgba(0,102,204,0.12))",
            boxShadow: `0 0 ${b.size + 10}px rgba(17,197,232,0.2)`,
            animation: `heroBubbleOrbit${i % 3} ${b.dur}s ease-in-out infinite ${b.delay}s`,
          }}
        />
      ))}

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 pb-16 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col relative z-10 max-w-lg pl-8 pt-10 lg:pl-16"
          >
            {/* Rotating heading */}
            <motion.h1
              key={`heading-${textIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.8rem] lg:text-[2.4rem] xl:text-[2.8rem]"
            >
              {rotatingSlides[textIndex].heading}
            </motion.h1>

            {/* Rotating description */}
            <motion.p
              key={`desc-${textIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="mt-6 text-[15px] leading-[1.8] text-zinc-300 sm:text-base"
            >
              {rotatingSlides[textIndex].description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="mt-14 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("contactus")}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,102,204,0.4)] transition-all duration-300 hover:brightness-110 cursor-pointer"
              >
                Book a Strategy Call
              </button>
              <button
                onClick={() => scrollTo("solutions")}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#11C5E8]/40 hover:bg-white/[0.1] hover:text-white cursor-pointer"
              >
                Check Our Expertise
              </button>
            </motion.div>
          </motion.div>

          {/* Right visual — Premium 3D laptop + orbit + widgets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative h-[520px] w-[520px]" style={{ perspective: "1200px" }}>
              {/* Background pulse glow */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(17,197,232,0.1) 0%, transparent 60%)",
                  animation: "heroPulse 4s ease-in-out infinite",
                }}
              />

              {/* Orbit rings — blue glowing */}
              {[230, 195, 160].map((r, i) => (
                <div
                  key={`ring-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    top: `calc(50% - ${r}px)`,
                    left: `calc(50% - ${r}px)`,
                    border: `1px solid rgba(17,197,232,${0.12 - i * 0.03})`,
                    boxShadow: `0 0 ${20 + i * 8}px rgba(17,197,232,${0.06 - i * 0.01})`,
                    animation: `heroSpin ${40 + i * 20}s linear infinite${i % 2 !== 0 ? " reverse" : ""}`,
                  }}
                />
              ))}

              {/* Orbiting tech icons */}
              {orbitIconPositions.map((ti, i) => {
                const Icon = ti.icon;
                return (
                  <div
                    key={`orbiticon-${i}`}
                    className="absolute flex h-8 w-8 items-center justify-center rounded-lg border border-[#11C5E8]/20 bg-white/[0.06] backdrop-blur-sm pointer-events-none"
                    style={{
                      left: `${ti.x}px`,
                      top: `${ti.y}px`,
                      boxShadow: "0 0 16px rgba(17,197,232,0.15)",
                      animation: `heroFloatSmall ${5 + i * 0.7}s ease-in-out infinite ${i * 0.5}s`,
                    }}
                  >
                    <Icon size={14} style={{ color: ti.color }} />
                  </div>
                );
              })}

              {/* Floating futuristic widgets */}
              {widgets.map((w, i) => {
                const Icon = w.icon;
                return (
                  <div
                    key={`widget-${i}`}
                    className="absolute flex items-center gap-2 rounded-xl border border-[#11C5E8]/15 bg-white/[0.05] px-3 py-2 backdrop-blur-md pointer-events-none"
                    style={{
                      top: w.top,
                      left: w.left,
                      boxShadow: "0 4px 24px rgba(17,197,232,0.1)",
                      animation: `heroFloatSmall ${6 + i}s ease-in-out infinite ${w.delay}s`,
                    }}
                  >
                    <Icon size={14} style={{ color: w.color }} />
                    <span className="text-[11px] font-semibold text-white/70">{w.label}</span>
                  </div>
                );
              })}

              {/* === Premium 3D Laptop === */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: "heroLaptopFloat 5s ease-in-out infinite",
                  perspective: "1200px",
                }}
              >
                {/* Laptop lid — 3D tilt wrapper */}
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    animation: "heroLaptopTilt 8s ease-in-out infinite",
                  }}
                >
                  {/* Laptop lid back layer — 3D depth */}
                  <div
                    className="absolute inset-0 rounded-[18px]"
                    style={{
                      width: 420,
                      height: 280,
                      background: "linear-gradient(180deg, rgba(30,40,55,0.6) 0%, rgba(20,28,40,0.8) 100%)",
                      transform: "translateZ(-8px)",
                      boxShadow: "0 0 40px rgba(17,197,232,0.05)",
                    }}
                  />

                  {/* Metallic outer bezel */}
                  <div
                    className="relative rounded-[18px] p-[4px]"
                    style={{
                      width: 420,
                      height: 280,
                      background: "linear-gradient(160deg, rgba(120,140,165,0.45) 0%, rgba(60,75,95,0.25) 30%, rgba(120,140,165,0.35) 50%, rgba(40,50,65,0.2) 80%, rgba(100,120,145,0.4) 100%)",
                      boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(17,197,232,0.08), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.04)",
                    }}
                  >
                    {/* Inner dark bezel */}
                    <div
                      className="relative overflow-hidden rounded-[14px]"
                      style={{ background: "linear-gradient(180deg, #0d1520 0%, #0a0f1a 100%)" }}
                    >
                      {/* Camera dot */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                        <span className="h-[3px] w-[3px] rounded-full bg-white/10" />
                        <span className="h-[5px] w-[5px] rounded-full bg-white/10 ring-1 ring-white/5" />
                        <span className="h-[3px] w-[3px] rounded-full bg-white/10" />
                      </div>

                      {/* Screen display */}
                      <div
                        className="relative overflow-hidden"
                        style={{ width: 412, height: 250, background: "linear-gradient(135deg, #0a0f1a 0%, #0d1520 50%, #091218 100%)" }}
                      >
                        {/* Screen glow overlay */}
                        <div
                          className="absolute inset-0 z-10 pointer-events-none"
                          style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(17,197,232,0.1) 0%, transparent 55%)" }}
                        />

                        {/* Diagonal light streak reflection */}
                        <div
                          className="absolute inset-0 z-10 pointer-events-none"
                          style={{
                            background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 70%)",
                          }}
                        />

                        {/* === Dashboard UI === */}
                        <div className="relative z-[5] flex h-full">
                          {/* Left sidebar */}
                          <div
                            className="flex flex-col items-center gap-3 border-r border-white/[0.06] py-3 px-1"
                            style={{ width: 36 }}
                          >
                            <div className="h-4 w-4 rounded bg-[#11C5E8]/20 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-sm bg-[#11C5E8]/60" />
                            </div>
                            {sidebarWidths.map((_, i) => (
                              <div
                                key={`sb-${i}`}
                                className="flex flex-col gap-1 w-full"
                              >
                                <div
                                  className={`h-[3px] rounded-full bg-white/[0.08] ${sidebarWidths[i]}`}
                                />
                                <div
                                  className={`h-[3px] rounded-full bg-white/[0.04] ${
                                    i % 2 === 0 ? "w-[50%]" : "w-[65%]"
                                  }`}
                                />
                              </div>
                            ))}
                            <div className="mt-auto flex flex-col items-center gap-2 pt-2">
                              <div className="h-3 w-3 rounded-full bg-white/[0.06]" />
                              <div className="h-3 w-3 rounded-full bg-white/[0.06]" />
                            </div>
                          </div>

                          {/* Main content area */}
                          <div className="flex-1 flex flex-col min-w-0">
                            {/* Top bar */}
                            <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-1.5">
                              <div className="flex items-center gap-2">
                                {/* Traffic lights */}
                                <div className="flex gap-1 mr-1">
                                  <span className="h-[5px] w-[5px] rounded-full bg-[#FF5F56]" />
                                  <span className="h-[5px] w-[5px] rounded-full bg-[#FFBD2E]" />
                                  <span className="h-[5px] w-[5px] rounded-full bg-[#27C93F]" />
                                </div>
                                {/* URL bar */}
                                <div className="rounded bg-white/[0.05] px-2 py-0.5 flex items-center gap-1">
                                  <span className="h-[3px] w-[3px] rounded-full bg-[#11C5E8]/40" />
                                  <span className="text-[7px] text-white/25 font-mono">netroots.app/dashboard</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[6px] text-white/20 font-mono">v3.2.1</span>
                                <span className="rounded bg-[#11C5E8]/15 px-1.5 py-0.5 text-[6px] font-bold text-[#11C5E8]/70">AI</span>
                              </div>
                            </div>

                            {/* Content body */}
                            <div className="flex-1 grid grid-cols-6 gap-2 p-2 min-h-0">
                              {/* Left content column */}
                              <div className="col-span-4 flex flex-col gap-2 min-h-0">
                                {/* 3 Stat cards */}
                                <div className="grid grid-cols-3 gap-1.5">
                                  {[
                                    { label: "Revenue", value: "$48.2K", change: "+24%", color: "#11C5E8" },
                                    { label: "Users", value: "12.4K", change: "+18%", color: "#0078E7" },
                                    { label: "Growth", value: "+28%", change: "vs last", color: "#12C4D4" },
                                  ].map((stat) => (
                                    <div
                                      key={stat.label}
                                      className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-1.5"
                                    >
                                      <p className="text-[6px] text-white/25 uppercase tracking-wider">{stat.label}</p>
                                      <p className="text-[11px] font-bold" style={{ color: stat.color }}>{stat.value}</p>
                                      <p className="text-[6px] text-green-400/50">{stat.change}</p>
                                    </div>
                                  ))}
                                </div>

                                {/* Analytics bar chart — 18 bars */}
                                <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2 flex-1 min-h-0">
                                  <p className="text-[7px] font-medium text-white/30 uppercase tracking-wider mb-1.5">Analytics Overview</p>
                                  <div className="flex items-end gap-[3px] h-[calc(100%-14px)]">
                                    {chartBarHeights.map((h, i) => (
                                      <div
                                        key={`bar-${i}`}
                                        className="flex-1 rounded-t min-w-0"
                                        style={{
                                          height: `${h}%`,
                                          background: i % 3 === 0
                                            ? "linear-gradient(180deg, rgba(17,197,232,0.85) 0%, rgba(0,102,204,0.4) 100%)"
                                            : i % 3 === 1
                                            ? "linear-gradient(180deg, rgba(0,120,231,0.65) 0%, rgba(0,82,204,0.3) 100%)"
                                            : "linear-gradient(180deg, rgba(18,196,212,0.7) 0%, rgba(0,102,204,0.35) 100%)",
                                          animation: `heroBarPulse ${3 + i * 0.2}s ease-in-out infinite ${i * 0.15}s`,
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>

                                {/* Bottom row: Cloud Infra + AI Workflow panels */}
                                <div className="grid grid-cols-2 gap-1.5">
                                  <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-1.5">
                                    <div className="flex items-center gap-1 mb-1">
                                      <FaCloud size={6} style={{ color: "#11C5E8" }} className="opacity-60" />
                                      <span className="text-[6px] font-medium text-white/30 uppercase">Cloud Infra</span>
                                    </div>
                                    <div className="space-y-1">
                                      <div className="h-[3px] w-full rounded-full bg-white/[0.05]">
                                        <div className="h-full rounded-full bg-[#11C5E8]/40" style={{ width: "78%" }} />
                                      </div>
                                      <div className="h-[3px] w-full rounded-full bg-white/[0.05]">
                                        <div className="h-full rounded-full bg-[#0078E7]/35" style={{ width: "62%" }} />
                                      </div>
                                    </div>
                                    <p className="text-[6px] text-white/20 mt-1">3 instances active</p>
                                  </div>
                                  <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-1.5">
                                    <div className="flex items-center gap-1 mb-1">
                                      <FaBrain size={6} style={{ color: "#0078E7" }} className="opacity-60" />
                                      <span className="text-[6px] font-medium text-white/30 uppercase">AI Workflow</span>
                                    </div>
                                    <div className="flex gap-1 mt-1">
                                      {[1, 2, 3].map((n) => (
                                        <div
                                          key={`node-${n}`}
                                          className="flex-1 rounded border border-[#0078E7]/15 bg-[#0078E7]/5 h-3"
                                        />
                                      ))}
                                    </div>
                                    <p className="text-[6px] text-white/20 mt-1">Pipeline: 94% uptime</p>
                                  </div>
                                </div>
                              </div>

                              {/* Right panel */}
                              <div className="col-span-2 flex flex-col gap-2 min-h-0">
                                {/* Activity feed */}
                                <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-1.5 flex-1 min-h-0">
                                  <p className="text-[6px] font-medium text-white/30 uppercase tracking-wider mb-1.5">Activity</p>
                                  <div className="space-y-1.5">
                                    {[
                                      { dot: "#11C5E8", text: "Deploy completed", time: "2m ago" },
                                      { dot: "#0078E7", text: "New user signup", time: "5m ago" },
                                      { dot: "#12C4D4", text: "API call spike", time: "12m ago" },
                                      { dot: "#11C5E8", text: "Backup finished", time: "18m ago" },
                                      { dot: "#0078E7", text: "SSL renewed", time: "24m ago" },
                                      { dot: "#12C4D4", text: "Cache cleared", time: "31m ago" },
                                    ].map((a, i) => (
                                      <div key={`act-${i}`} className="flex items-center gap-1.5">
                                        <span className="h-[4px] w-[4px] rounded-full shrink-0" style={{ background: a.dot, opacity: 0.6 }} />
                                        <div className="flex-1 min-w-0">
                                          <p className="text-[6px] text-white/30 truncate">{a.text}</p>
                                        </div>
                                        <span className="text-[5px] text-white/15 shrink-0">{a.time}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Status panel */}
                                <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-1.5">
                                  <p className="text-[6px] font-medium text-white/30 uppercase tracking-wider mb-1.5">Status</p>
                                  <div className="space-y-1">
                                    {[
                                      { label: "API", pct: 99, color: "#11C5E8" },
                                      { label: "CDN", pct: 97, color: "#0078E7" },
                                      { label: "DB", pct: 100, color: "#12C4D4" },
                                    ].map((s) => (
                                      <div key={s.label} className="flex items-center gap-1">
                                        <span className="text-[5px] text-white/20 w-5 shrink-0">{s.label}</span>
                                        <div className="flex-1 h-[3px] rounded-full bg-white/[0.05]">
                                          <div
                                            className="h-full rounded-full"
                                            style={{ width: `${s.pct}%`, background: s.color, opacity: 0.5 }}
                                          />
                                        </div>
                                        <span className="text-[5px] text-white/20 shrink-0">{s.pct}%</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Keyboard base area */}
                  <div
                    className="relative mx-auto -mt-1 overflow-hidden"
                    style={{
                      width: 440,
                      height: 40,
                      borderRadius: "0 0 14px 14px",
                      transformOrigin: "top center",
                      transform: "rotateX(70deg)",
                      background: "linear-gradient(180deg, rgba(80,95,115,0.3) 0%, rgba(50,60,75,0.2) 100%)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    {/* Keyboard key lines */}
                    <div className="absolute inset-x-4 top-2 flex flex-col gap-[3px]">
                      {[0, 1, 2].map((row) => (
                        <div key={`kr-${row}`} className="flex gap-[2px] justify-center">
                          {Array.from({ length: row === 2 ? 8 : 12 }).map((_, ki) => (
                            <div
                              key={`k-${row}-${ki}`}
                              className="rounded-[1px] bg-white/[0.04]"
                              style={{
                                width: row === 2 && ki === 4 ? 60 : 22,
                                height: 5,
                              }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                    {/* Trackpad */}
                    <div
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded bg-white/[0.03] border border-white/[0.04]"
                      style={{ width: 80, height: 14 }}
                    />
                  </div>

                  {/* Base metallic bottom edge */}
                  <div
                    className="mx-auto h-1.5"
                    style={{
                      width: 450,
                      borderRadius: "0 0 18px 18px",
                      background: "linear-gradient(180deg, rgba(120,140,165,0.25) 0%, rgba(60,75,95,0.1) 100%)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                  />
                </div>
              </div>

              {/* Realistic shadow underneath */}
              <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  bottom: 30,
                  width: 320,
                  height: 40,
                  borderRadius: "50%",
                  background: "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
