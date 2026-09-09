"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DOTS = [0, 1, 2];

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading CodQor Technologies"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.55,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, #43B2F2 0%, #2E9FE8 28%, #0078E7 62%, #0052CC 100%)",
          }}
        >
          {/* Subtle background glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute h-72 w-72 rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo */}
          <motion.img
            src="/tab.png"
            alt="CodQor Technologies"
            width={160}
            height={160}
            fetchPriority="high"
            draggable={false}
            className="relative z-10 h-24 w-24 select-none rounded-full object-contain"
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Loading indicator */}
          <div
            className="relative z-10 mt-7 flex items-center gap-2.5"
            aria-hidden="true"
          >
            {DOTS.map((index) => (
              <motion.span
                key={index}
                className="h-2.5 w-2.5 rounded-full bg-[#0e2345]"
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.35, 1, 0.35],
                  scale: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              />
            ))}
          </div>

          <span className="sr-only">Loading...</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
