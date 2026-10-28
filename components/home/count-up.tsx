"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Server-renders the final value (so it's correct without JS), then counts up from 0
 * when it scrolls into view. `delay` lines it up with its receipt line printing.
 */
export function CountUp({ to, decimals = 0, suffix = "", delay = 0 }: { to: number; decimals?: number; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const format = (v: number) => v.toFixed(decimals) + suffix;

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el || !document.documentElement.classList.contains("motion-ok")) return;
    el.textContent = format(0);
    const controls = animate(0, to, {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = format(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{format(to)}</span>;
}
