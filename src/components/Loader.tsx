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
        background: "radial-gradient(circle at center, #43B2F2 0%, #2E9FE8 25%, #0078E7 60%, #0052CC 100%)",
        willChange: "opacity",
      }}
      aria-busy="true"
    >
      <motion.img
        src="/titlelogo.jpeg"
        alt="CodeQor Technologies"
        width={210}
        height={105}
        className="h-20 w-40 rounded-lg object-contain shadow-[0_12px_40px_rgba(0,20,70,0.2)]"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

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
