"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  to: number;
  duration?: number;
  decimals?: number;
  className?: string;
};

export default function Counter({ to, duration = 2, decimals = 0, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = value.toFixed(decimals);
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
