import { Fragment } from "react";
import type { Block, Status } from "@/data/projects";

/** "# About me" style frame label */
export function FrameLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="label-mono mb-[18px] flex items-center gap-2.5 text-muted">
      <span className="text-accent" aria-hidden="true">#</span>
      {children}
    </div>
  );
}

export function SectionTitle({ children, as: Tag = "h2" }: { children: React.ReactNode; as?: "h1" | "h2" }) {
  return <Tag className="text-[clamp(40px,6vw,76px)] font-bold tracking-[-.03em]">{children}</Tag>;
}

export function Chip({ children, live }: { children: React.ReactNode; live?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs tracking-[.04em] text-ink">
      {live && <span className="size-[7px] rounded-full bg-live shadow-[0_0_0_3px_var(--live-soft)]" aria-hidden="true" />}
      {children}
    </span>
  );
}

const tones = {
  live: "bg-live-soft text-live",
  delivered: "bg-accent-soft text-accent",
  waiting: "bg-warn-soft text-warn",
};

export function StatusPill({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 justify-self-start rounded-full px-2.5 py-1 font-mono text-[11px] tracking-[.05em] uppercase ${tones[status.tone]}`}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {status.label}
    </span>
  );
}

/** Renders **bold** and [label](url) inside a content string. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*(.+)\*\*$/);
        if (bold) return <b key={i} className="font-semibold text-ink">{bold[1]}</b>;
        const link = part.match(/^\[(.+)\]\((.+)\)$/);
        if (link)
          return (
            <a
              key={i}
              href={link[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline decoration-[1.5px] underline-offset-[3px] hover:decoration-[2.5px]"
            >
              {link[1]}
            </a>
          );
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="grid max-w-[66ch] gap-3.5">
      {blocks.map((block, i) =>
        typeof block === "string" ? (
          <p key={i}><Inline text={block} /></p>
        ) : (
          <ul key={i} className="grid list-disc gap-2 pl-5 marker:text-accent">
            {block.list.map((item, k) => (
              <li key={k}><Inline text={item} /></li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}
