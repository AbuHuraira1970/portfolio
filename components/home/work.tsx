import { pad, projects, type Project } from "@/data/projects";
import { Cover } from "../covers";
import { TransitionLink } from "../transition-link";
import { FrameLabel, StatusPill } from "../ui";
import { StackItem, StackList } from "./stack";

export function Work() {
  return (
    <section id="work" className="py-[72px]">
      <div className="wrap">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <FrameLabel>Portfolio</FrameLabel>
            <h2 className="text-[clamp(40px,6vw,76px)] font-bold tracking-[-.03em]">Selected work</h2>
          </div>
          <span className="-rotate-2 font-hand text-2xl font-bold text-muted">stuff I&apos;m proud of ↓</span>
        </div>

        <StackList total={projects.length}>
          {projects.map((p, i) => (
            <StackItem key={p.slug} index={i}>
              <ProjectCard project={p} index={i} />
            </StackItem>
          ))}
        </StackList>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = pad(index + 1);
  return (
    <TransitionLink
      href={`/work/${project.slug}`}
      data-cursor="view"
      className="proj group relative block rounded-[24px] text-ink no-underline shadow-[0_30px_60px_-34px_var(--shadow)] transition-transform duration-300 hover:-translate-y-1"
      style={{ background: `var(--card-${(index % 6) + 1})` }}
    >
      {/* Folder tab: the part that stays visible once later cards stack on top */}
      <span className="label-mono absolute -top-[30px] left-[clamp(18px,3vw,32px)] flex h-[30px] items-center gap-2 rounded-t-[10px] bg-ink px-3.5 text-[11px] tracking-[.08em] text-canvas">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        Project {num}
      </span>

      <div className="grid items-center gap-[clamp(24px,4vw,48px)] p-[clamp(20px,3.4vw,40px)] md:grid-cols-[1fr_1.1fr]">
        <div className="relative grid min-w-0 gap-3.5">
          <span
            className="pointer-events-none absolute -top-[clamp(18px,3vw,34px)] -left-1 font-display text-[clamp(110px,14vw,190px)] leading-none font-bold tracking-[-.04em] text-ink/[.07] select-none"
            aria-hidden="true"
          >
            {num}
          </span>
          <span className="label-mono relative mt-[clamp(24px,4vw,48px)] flex items-center gap-2 text-ink/70">
            <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
            {project.tag}
          </span>
          <h3
            className="relative text-[clamp(32px,3.6vw,46px)] font-bold tracking-[-.025em]"
            style={{ viewTransitionName: `title-${project.slug}` }}
          >
            {project.title}
          </h3>
          <p className="relative max-w-[46ch] text-ink/75">{project.card}</p>
          <StatusPill status={project.status} />
          <span className="mt-1 inline-flex items-center gap-2.5 justify-self-start rounded-full bg-ink px-4 py-2.5 font-mono text-[12px] tracking-[.06em] text-canvas uppercase">
            Open case study <span className="go-arrow" aria-hidden="true">→</span>
          </span>
        </div>

        {/* Taped-down print of the cover, with its label stuck on the corner */}
        <div className="relative px-2 pt-3 pb-5">
          <div className="relative rotate-[1.4deg] bg-white p-[clamp(6px,1vw,10px)] shadow-[0_22px_40px_-24px_rgba(0,0,0,.55)] transition-transform duration-500 group-hover:rotate-0">
            <span className="tape -top-3 -left-5 -rotate-[32deg]" aria-hidden="true" />
            <span className="tape -top-3 -right-5 rotate-[32deg]" aria-hidden="true" />
            <div className="vt-cover" style={{ viewTransitionName: `cover-${project.slug}` }}>
              <Cover project={project} sizes="(min-width: 860px) 540px, 100vw" className="aspect-[16/10.5] !rounded-[4px]" hideTagline />
            </div>
          </div>
          <span className="label-mono absolute bottom-1 left-5 -rotate-2 bg-ink px-2.5 py-1 text-[10.5px] tracking-[.08em] text-canvas shadow-md">
            {project.cover.tagline}
          </span>
        </div>
      </div>
    </TransitionLink>
  );
}
