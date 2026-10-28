"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Figma-style multiplayer cursor with a name tag. Over anything marked
 * `data-cursor="view"` the tag becomes a "View case →" label.
 * Desktop with a fine pointer only; off for touch and reduced motion.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<"default" | "view">("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const tagX = useSpring(x, { stiffness: 900, damping: 50, mass: 0.3 });
  const tagY = useSpring(y, { stiffness: 900, damping: 50, mass: 0.3 });

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // A new page has rendered under the pointer: drop the "view" label until it moves.
  const pathname = usePathname();
  useEffect(() => setMode("default"), [pathname]);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target instanceof Element ? e.target.closest("[data-cursor]") : null;
      setMode(target?.getAttribute("data-cursor") === "view" ? "view" : "default");
    };
    const hide = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]" style={{ opacity: visible ? 1 : 0 }}>
      <motion.svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        className="absolute top-0 left-0 drop-shadow-sm"
        style={{ x, y }}
      >
        <path d="M1 1 L16 8.6 L9.4 10.4 L6.6 17.6 Z" fill="var(--accent)" stroke="var(--surface)" strokeWidth="1.5" strokeLinejoin="round" />
      </motion.svg>
      <motion.div className="absolute top-0 left-0" style={{ x: tagX, y: tagY }}>
        <AnimatePresence mode="popLayout" initial={false}>
          {mode === "view" ? (
            <motion.span
              key="view"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-5 left-4 origin-top-left whitespace-nowrap rounded-full bg-ink px-3.5 py-2 font-mono text-[12px] tracking-[.06em] text-canvas uppercase shadow-lg"
            >
              View case →
            </motion.span>
          ) : (
            <motion.span
              key="name"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-[18px] left-3.5 origin-top-left whitespace-nowrap rounded-[4px] rounded-tl-none bg-accent px-1.5 py-0.5 font-body text-[11px] font-semibold text-accent-ink"
            >
              Huraira
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
