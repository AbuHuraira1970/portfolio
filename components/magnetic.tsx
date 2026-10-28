"use client";

import { motion, useReducedMotion, useSpring } from "motion/react";

/** Pulls its child a few pixels toward a mouse pointer. No effect on touch or with reduced motion. */
export function Magnetic({ children, strength = 0.3, max = 8 }: { children: React.ReactNode; strength?: number; max?: number }) {
  const reduce = useReducedMotion();
  const spring = { stiffness: 260, damping: 18, mass: 0.4 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const clamp = (v: number) => Math.max(-max, Math.min(max, v));

  return (
    <motion.span
      className="inline-flex"
      style={{ x, y }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set(clamp((e.clientX - (r.left + r.width / 2)) * strength));
        y.set(clamp((e.clientY - (r.top + r.height / 2)) * strength));
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}
