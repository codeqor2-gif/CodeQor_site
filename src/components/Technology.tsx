"use client";

import { useState, useRef, useCallback, useEffect, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  FaMobileAlt,
  FaCode,
  FaServer,
  FaCloud,
  FaRobot,
  FaPaintBrush,
  FaBug,
  FaLink,
  FaGlobe,
} from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import {
  SiReact,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiNodedotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiTensorflow,
  SiPytorch,
  SiFigma,
  SiSelenium,
  SiJest,
  SiCypress,
  SiEthereum,
  SiSolidity,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiExpress,
  SiSass,
  SiSketch,
  SiJira,
  SiPostman,
  SiHuggingface,
  SiGraphql,
  SiPolkadot,
} from "react-icons/si";
import { techTabs, techData, unsplashImages } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const icons = [
  <FaMobileAlt key="mobile" />,
  <FaGlobe key="front" />,
  <FaCode key="web" />,
  <FaServer key="back" />,
  <FaCloud key="cloud" />,
  <FaRobot key="ai" />,
  <FaPaintBrush key="uiux" />,
  <FaBug key="qa" />,
  <FaLink key="chain" />,
];

const techLogos: Record<string, ReactNode> = {
  "React Native": <SiReact className="h-3.5 w-3.5 text-[#61DAFB]" />,
  React: <SiReact className="h-3.5 w-3.5 text-[#61DAFB]" />,
  "React.js": <SiReact className="h-3.5 w-3.5 text-[#61DAFB]" />,
  Flutter: <SiFlutter className="h-3.5 w-3.5 text-[#02569B]" />,
  Swift: <SiSwift className="h-3.5 w-3.5 text-[#F05138]" />,
  Kotlin: <SiKotlin className="h-3.5 w-3.5 text-[#7F52FF]" />,
  "Vue.js": <SiVuedotjs className="h-3.5 w-3.5 text-[#4FC08D]" />,
  Angular: <SiAngular className="h-3.5 w-3.5 text-[#DD0031]" />,
  "Next.js": <SiNextdotjs className="h-3.5 w-3.5" />,
  "Node.js": <SiNodedotjs className="h-3.5 w-3.5 text-[#339933]" />,
  "Express.js": <SiExpress className="h-3.5 w-3.5" />,
  Express: <SiExpress className="h-3.5 w-3.5" />,
  MongoDB: <SiMongodb className="h-3.5 w-3.5 text-[#47A248]" />,
  PostgreSQL: <SiPostgresql className="h-3.5 w-3.5 text-[#4169E1]" />,
  Docker: <SiDocker className="h-3.5 w-3.5 text-[#2496ED]" />,
  Kubernetes: <SiKubernetes className="h-3.5 w-3.5 text-[#326CE5]" />,
  AWS: <FaAws className="h-3.5 w-3.5 text-[#FF9900]" />,
  Azure: <FaCloud className="h-3.5 w-3.5 text-[#0078D4]" />,
  Terraform: <SiTerraform className="h-3.5 w-3.5 text-[#7B42BC]" />,
  TensorFlow: <SiTensorflow className="h-3.5 w-3.5 text-[#FF6F00]" />,
  PyTorch: <SiPytorch className="h-3.5 w-3.5 text-[#EE4C2C]" />,
  Figma: <SiFigma className="h-3.5 w-3.5" />,
  Selenium: <SiSelenium className="h-3.5 w-3.5 text-[#43B02A]" />,
  Jest: <SiJest className="h-3.5 w-3.5 text-[#C21325]" />,
  Cypress: <SiCypress className="h-3.5 w-3.5 text-[#17202C]" />,
  Ethereum: <SiEthereum className="h-3.5 w-3.5 text-[#627EEA]" />,
  Solidity: <SiSolidity className="h-3.5 w-3.5 text-[#363636]" />,
  "Tailwind CSS": <SiTailwindcss className="h-3.5 w-3.5 text-[#06B6D4]" />,
  Sass: <SiSass className="h-3.5 w-3.5 text-[#CC6699]" />,
  HTML: <FaCode className="h-3.5 w-3.5 text-[#E34F26]" />,
  Redis: <SiRedis className="h-3.5 w-3.5 text-[#DC382D]" />,
  "Hugging Face": <SiHuggingface className="h-3.5 w-3.5 text-[#FFD21E]" />,
  Polkadot: <SiPolkadot className="h-3.5 w-3.5 text-[#E6007A]" />,
  GraphQL: <SiGraphql className="h-3.5 w-3.5 text-[#E10098]" />,
  Sketch: <SiSketch className="h-3.5 w-3.5" />,
  Jira: <SiJira className="h-3.5 w-3.5" />,
  Postman: <SiPostman className="h-3.5 w-3.5 text-[#FF6C37]" />,
};

const fallbackLogo = (
  <span className="inline-block h-3.5 w-3.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
);

export default function Technology() {
  const [active, setActive] = useState(techTabs[0]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -200 : 200;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="technology" className="relative py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left — Image (fixed, no layout shift) */}
        <div className="relative order-1 flex flex-col">
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary-400/25 to-accent-400/20 blur-2xl" />
          <div className="h-[260px] overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_20px_60px_rgba(0,102,204,0.14)]">
            <Image
              src="/imagetech.jpg"
              alt="Technology illustration - circuits and code"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-night-900/80 p-2 backdrop-blur-md">
              <p className="text-[9px] font-medium uppercase tracking-widest text-primary-300">
                Powered by
              </p>
              <p className="mt-1 text-sm font-bold text-white">Modern Technology Stack</p>
            </div>
          </div>

          <div className="absolute -right-3 -top-3 rounded-2xl border border-primary-300 bg-white/95 px-2 py-1 text-center shadow-[0_10px_30px_rgba(0,102,204,0.2)] backdrop-blur-md">
            <p className="text-lg font-extrabold text-zinc-900">9+</p>
            <p className="text-[9px] font-medium uppercase tracking-wider text-primary-600">
              Domains
            </p>
          </div>
        </div>

        {/* Right — Tabs & Content */}
        <div className="order-2 flex flex-col">
          <SectionHeading
            title="We Offer Solutions Powered by"
            highlight="Technologies"
            subtitle="Our company uses modern technologies and frameworks to build innovative, scalable, and high-quality software solutions."
            headingClassName="md:text-2xl md:whitespace-nowrap"
            className="mb-0"
          />

          <div className="relative mt-3 group/tabs">
            {/* Left arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute -left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-md transition-all duration-200 hover:border-primary-400 hover:text-primary-600 hover:shadow-lg cursor-pointer"
              >
                <FiChevronLeft size={16} />
              </button>
            )}

            {/* Right arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute -right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-md transition-all duration-200 hover:border-primary-400 hover:text-primary-600 hover:shadow-lg cursor-pointer"
              >
                <FiChevronRight size={16} />
              </button>
            )}

            {/* Fade edges */}
            {canScrollLeft && (
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent" />
            )}
            {canScrollRight && (
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent" />
            )}

            {/* Scrollable tabs */}
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
            >
              {techTabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-300 cursor-pointer ${
                    active === tab
                      ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-[0_4px_16px_rgba(0,102,204,0.4)]"
                      : "border border-zinc-300 bg-white text-zinc-600 shadow-sm hover:border-primary-500/60 hover:text-primary-700"
                  }`}
                >
                  <span className="text-sm">{icons[i]}</span>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[260px] overflow-hidden rounded-2xl border border-primary-200/80 bg-white/90 p-4 shadow-[0_10px_36px_rgba(0,102,204,0.1)] backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h3 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent sm:text-xl">
                  {techData[active].title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{techData[active].description}</p>
                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {techData[active].techs.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-primary-50/50 px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/70 hover:bg-primary-100/60 hover:shadow-[0_6px_18px_rgba(0,102,204,0.14)]"
                    >
                      <span className="shrink-0">{techLogos[tech] || fallbackLogo}</span>
                      <span className="truncate text-xs font-semibold text-zinc-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
