"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1500);
    const t2 = setTimeout(() => setGone(true), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: hide ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: "radial-gradient(circle at center, #11C5E8 0%, #0AAFE0 25%, #0078E7 60%, #0052CC 100%)",
        willChange: "opacity",
      }}
      aria-busy="true"
    >
      <motion.svg
        width="96"
        height="96"
        viewBox="0 0 48 48"
        fill="none"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="loaderGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#123b82" />
            <stop offset="0.52" stopColor="#0066cc" />
            <stop offset="1" stopColor="#0aa9d1" />
          </linearGradient>
          <filter id="loaderGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="48" height="48" rx="13" fill="#004b91" fillOpacity="0.35" />
        <rect x="1" y="1" width="46" height="46" rx="12" fill="url(#loaderGrad)" stroke="#d9faff" strokeOpacity="0.45" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="17" stroke="#d9faff" strokeOpacity="0.2" />
        <g filter="url(#loaderGlow)">
          <circle cx="24" cy="15" r="4" fill="#fff" />
          <circle cx="13" cy="31" r="3" fill="#fff" opacity="0.9" />
          <circle cx="35" cy="31" r="3" fill="#fff" opacity="0.9" />
          <path d="M24 19v11M24 19L13.5 28M24 19l10.5 9M15.5 29.5h17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="33" r="2.5" fill="#d9faff" />
        </g>
      </motion.svg>

      <div className="mt-6 flex space-x-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "#0080cc", willChange: "opacity" }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
