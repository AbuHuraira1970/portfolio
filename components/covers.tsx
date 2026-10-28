import Image from "next/image";
import type { Project } from "@/data/projects";

/** The visual for a project: a screenshot, or an illustration for internal work that can't be shown. */
export function Cover({
  project,
  sizes,
  priority,
  className = "",
  hideTagline,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
  hideTagline?: boolean;
}) {
  const { cover } = project;
  return (
    <div className={`relative overflow-hidden rounded-xl border border-line bg-canvas ${className}`}>
      <div className="proj-cover-img absolute inset-0">
        {cover.kind === "image" && (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            className="object-cover object-top"
          />
        )}
        {cover.kind === "journey" && <JourneyIllustration />}
        {cover.kind === "support" && <SupportIllustration />}
      </div>
      {!hideTagline && (
        <span className="absolute right-3 bottom-3 z-[2] rounded-full bg-ink px-2.5 py-[5px] font-mono text-[11px] tracking-[.06em] text-canvas">
          {cover.tagline}
        </span>
      )}
    </div>
  );
}

function JourneyIllustration() {
  return (
    <div className="mini" role="img" aria-label="Illustration: a verification flow branching on an if/else rule, with the settings control bar below">
      <div className="flow" aria-hidden="true">
        <span className="node">Document</span>
        <span className="font-mono text-muted">→</span>
        <span className="diamond"><span>IF</span></span>
        <span className="font-mono text-muted">→</span>
        <div className="branch">
          <span className="node on"><small>pass</small> Face check</span>
          <span className="node"><small>else</small> Manual review</span>
        </div>
      </div>
      <div className="ctrlbar" aria-hidden="true">
        <span className="on">Next service ▾</span>
        <span>Settings</span>
        <span>+ If / else</span>
      </div>
    </div>
  );
}

function SupportIllustration() {
  return (
    <div className="mini" role="img" aria-label="Illustration: a support ticket showing its assignee, status and a progress bar">
      <div className="ticket" aria-hidden="true">
        <div className="flex items-center justify-between gap-2.5">
          <b className="text-sm">#4821 · Verification stuck</b>
          <span className="pill">In progress</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="grid size-[22px] place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-ink">SA</span>
          Assigned to Support Agent
        </div>
        <div className="steps"><i className="done" /><i className="done" /><i className="done" /><i /></div>
        <div className="steps-l"><span>Submitted</span><span>Assigned</span><span>In progress</span><span>Resolved</span></div>
      </div>
    </div>
  );
}
