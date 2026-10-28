"use client";

import { motion, motionValue, useScroll, useTransform, type MotionValue } from "motion/react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

/** Must match the sticky media query in globals.css */
const STACK_QUERY = "(prefers-reduced-motion: no-preference) and (min-width: 768px) and (min-height: 480px)";

type StackState = {
  progress: MotionValue<number>;
  /** 0 → 1 while the list scrolls up into the viewport (drives the first card's entrance) */
  entry: MotionValue<number>;
  stacked: boolean;
  total: number;
};
const StackContext = createContext<StackState>({ progress: motionValue(0), entry: motionValue(1), stacked: false, total: 1 });

/** Tracks scroll through the project list so each card can react as it arrives and as later ones cover it. */
export function StackList({ total, children }: { total: number; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [stacked, setStacked] = useState(false);
  const { scrollYProgress: progress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const { scrollYProgress: entry } = useScroll({ target: ref, offset: ["start end", "start 0.2"] });

  useEffect(() => {
    const mq = window.matchMedia(STACK_QUERY);
    const update = () => setStacked(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <StackContext.Provider value={{ progress, entry, stacked, total }}>
      <div ref={ref} className="grid gap-16">
        {children}
      </div>
    </StackContext.Provider>
  );
}

const TILT_IN = 4; // degrees a card is rotated while it slides up into place
const TILT_BACK = 1; // degrees a covered card leans back in the pile

/**
 * One sticky card. It slides up tilted and straightens as it lands; once the next card
 * covers it, it shrinks, leans slightly and dims, leaving only its tab visible.
 */
export function StackItem({ index, children }: { index: number; children: React.ReactNode }) {
  const { progress, entry, stacked, total } = useContext(StackContext);
  const step = 1 / total;
  const start = index * step;
  const isLast = index === total - 1;
  const lean = index % 2 ? TILT_BACK : -TILT_BACK;

  // Arriving: card 0 uses the list's own entrance, later cards the step before their slot.
  const arriving = index === 0 ? entry : progress;
  const arriveRange = index === 0 ? [0, 1] : [start - step, start];
  const tiltIn = useTransform(arriving, arriveRange, [TILT_IN, 0]);
  const tiltBack = useTransform(progress, [start, start + step], [0, isLast ? 0 : lean]);
  const rotate = useTransform(() => tiltIn.get() + tiltBack.get());

  const scale = useTransform(progress, [start, 1], [1, 1 - (total - 1 - index) * 0.035]);
  const shade = useTransform(progress, [start, start + step], [0, isLast ? 0 : 0.35]);

  return (
    <div className="stack-item" style={{ "--i": index } as React.CSSProperties} data-reveal>
      <motion.div className="relative origin-[12%_0]" style={stacked ? { scale, rotate } : undefined}>
        {children}
        {stacked && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[24px] bg-[#0b0c0f]"
            style={{ opacity: shade }}
          />
        )}
      </motion.div>
    </div>
  );
}
