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

const GAP_PX = 24;

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
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/80 to-white py-24"
    >
      <div className="pointer-events-none absolute left-1/4 top-16 -z-10 h-72 w-72 animate-aurora rounded-full bg-primary-400/15 blur-[110px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-16 -z-10 h-72 w-72 animate-aurora rounded-full bg-accent-400/15 blur-[110px] [animation-delay:-11s]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Client Reviews"
          title="Trusted by Our Clients"
          highlight="Worldwide"
          subtitle="Real feedback from businesses that scaled with our technology and marketing solutions."
        />

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={wrapRef} className="overflow-hidden">
            <motion.div
              animate={{ x: tx }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
              style={{ gap: GAP_PX }}
            >
              {testimonials.map((t, i) => {
                const isActive = i === index;
                return (
                  <motion.div
                    key={t.author}
                    style={{ width: cardW > 0 ? cardW : undefined }}
                    className={`group relative flex shrink-0 flex-col rounded-2xl border bg-white p-6 transition-all duration-500 ${
                      isActive
                        ? "border-primary-300 shadow-[0_20px_60px_rgba(139,92,246,0.16)] scale-[1.02]"
                        : "border-zinc-200 shadow-[0_8px_28px_rgba(139,92,246,0.07)] scale-100 opacity-80"
                    }`}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, j) => {
                        if (j < Math.floor(t.rating)) return <FaStar key={j} size={13} />;
                        if (j === Math.floor(t.rating) && t.rating % 1 >= 0.5)
                          return <FaStarHalfAlt key={j} size={13} />;
                        return <FaStar key={j} size={13} className="opacity-30" />;
                      })}
                      <span className="ml-1 text-xs font-bold text-primary-600">
                        {t.rating.toFixed(1)}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-zinc-900">{t.title}</h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 line-clamp-4">
                      {t.quote}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-[11px] font-bold text-white">
                          {t.author
                            .split(" ")
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                        <span className="text-sm font-semibold text-zinc-800">{t.author}</span>
                      </div>
                      <button className="text-xs font-semibold text-blue-500 transition-colors hover:text-blue-700">
                        Read More
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-primary-400 hover:text-primary-600 disabled:opacity-40"
              disabled={index === 0}
            >
              <FaChevronLeft size={12} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === index
                      ? "w-7 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      : "w-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-primary-400 hover:text-primary-600 disabled:opacity-40"
              disabled={index >= maxIndex}
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
