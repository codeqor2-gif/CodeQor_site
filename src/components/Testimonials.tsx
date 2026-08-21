"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

const GAP_PX = 20;

export default function Testimonials() {
  const visible = useVisibleCount();
  const maxIndex = Math.max(0, testimonials.length - visible);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [cardW, setCardW] = useState(0);

  const measure = useCallback(() => {
    if (!wrapRef.current) return;
    const wrapW = wrapRef.current.offsetWidth;
    const w = (wrapW - GAP_PX * (visible - 1)) / visible;
    setCardW(w);
  }, [visible]);

  useEffect(() => {
    measure();
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);
  const goTo = useCallback((i: number) => setIndex(Math.min(i, maxIndex)), [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(t);
  }, [paused, maxIndex]);

  const tx = cardW > 0 ? -(index * (cardW + GAP_PX)) : 0;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/80 to-white py-10"
    >
      <div className="pointer-events-none absolute left-1/4 top-16 -z-10 h-60 w-60 animate-aurora rounded-full bg-primary-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-16 -z-10 h-60 w-60 animate-aurora rounded-full bg-accent-400/10 blur-[100px] [animation-delay:-11s]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
        
          title="Trusted by Our Clients"
          highlight="Worldwide"
          
        />

        <div
          className="relative mt-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={wrapRef} className="overflow-hidden">
            <motion.div
              animate={{ x: tx }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
              style={{ gap: GAP_PX }}
            >
              {testimonials.map((t, i) => {
                const isActive = i === index;
                return (
                  <motion.div
                    key={t.author}
                    style={{ width: cardW > 0 ? cardW : undefined }}
                    className={`group relative flex shrink-0 flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_6px_22px_rgba(0,102,204,0.06)] transition-all duration-500 ${
                      isActive
                        ? "border-primary-300 shadow-[0_8px_40px_rgba(0,102,204,0.14)]"
                        : "border-zinc-200 shadow-[0_6px_22px_rgba(0,102,204,0.06)] opacity-80"
                    } hover:border-primary-400 hover:shadow-[0_8px_40px_rgba(0,102,204,0.25)]`}
                  >
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, j) => {
                        if (j < Math.floor(t.rating)) return <FaStar key={j} size={12} />;
                        if (j === Math.floor(t.rating) && t.rating % 1 >= 0.5)
                          return <FaStarHalfAlt key={j} size={12} />;
                        return <FaStar key={j} size={12} className="opacity-30" />;
                      })}
                      <span className="ml-1 text-[11px] font-bold text-primary-600">
                        {t.rating.toFixed(1)}
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-sm font-bold text-zinc-900">{t.title}</h3>

                    <p className="mt-1.5 flex-1 text-xs leading-relaxed text-zinc-600 line-clamp-4">
                      {t.quote}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-[10px] font-bold text-white">
                          {t.author
                            .split(" ")
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                        <span className="text-xs font-semibold text-zinc-800">{t.author}</span>
                      </div>
                      <button className="text-[11px] font-semibold text-blue-500 transition-colors hover:text-blue-700">
                        Read More
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-primary-400 hover:text-primary-600 disabled:opacity-40"
              disabled={index === 0}
            >
              <FaChevronLeft size={10} />
            </button>

            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === index
                      ? "w-6 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                      : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-primary-400 hover:text-primary-600 disabled:opacity-40"
              disabled={index >= maxIndex}
            >
              <FaChevronRight size={10} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
