"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Screenshot } from "@/data/projects";

/**
 * A browser window around a screenshot. As it scrolls into view it rises, straightens
 * and grows to full size. Tall full-page captures scroll inside the frame.
 */
export function BrowserFrame({ shot }: { shot: Screenshot }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.45"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 0]);
  const animated = mounted && !reduce;

  return (
    <motion.div
      ref={ref}
      style={animated ? { y, scale, rotate } : undefined}
      className="mt-2 overflow-hidden rounded-card border border-line bg-surface shadow-[0_30px_60px_-40px_var(--shadow)]"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5" aria-hidden="true">
        <i className="size-2.5 rounded-full bg-[#ff5f57]" />
        <i className="size-2.5 rounded-full bg-[#febc2e]" />
        <i className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="label-mono ml-2.5 truncate rounded-md bg-canvas px-2.5 py-0.5 text-[11px] text-muted">{shot.url}</span>
      </div>
      <div
        className={shot.scroll ? "max-h-[min(620px,75vh)] overflow-auto overscroll-contain" : ""}
        tabIndex={shot.scroll ? 0 : undefined}
        role={shot.scroll ? "region" : undefined}
        aria-label={shot.scroll ? `${shot.heading}, scrollable` : undefined}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          sizes="(min-width: 1160px) 880px, (min-width: 760px) 70vw, 100vw"
          placeholder="blur"
          className="block h-auto w-full"
        />
      </div>
    </motion.div>
  );
}
