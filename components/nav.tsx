import Link from "next/link";
import { profile } from "@/data/projects";
import { ThemeToggle } from "./theme-toggle";

const pill = "rounded-full px-3 py-1.5 text-[15px] font-medium text-muted no-underline transition-colors hover:bg-surface hover:text-ink";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="wrap flex h-[var(--nav-h)] items-center justify-between gap-3">
        <Link href="/" className="font-display text-lg font-bold tracking-[-.01em] no-underline">
          Abu Huraira<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1">
          <Link className={pill} href="/#work">Work</Link>
          <Link className={`${pill} max-[760px]:hidden`} href="/#about">About</Link>
          <Link className={`${pill} max-[760px]:hidden`} href="/#experience">Experience</Link>
          <a className={`${pill} max-[960px]:hidden`} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className={`${pill} max-[960px]:hidden`} href={profile.behance} target="_blank" rel="noopener noreferrer">
            Behance ↗
          </a>
          <a className={`${pill} max-[960px]:hidden`} href={profile.cv} target="_blank" rel="noopener">
            CV ↓
          </a>
          <span className="mx-1"><ThemeToggle /></span>
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-3.5 py-2 font-mono text-xs tracking-[.06em] text-canvas no-underline transition-transform hover:-translate-y-0.5"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
