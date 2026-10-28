import { pad, principles, skills } from "@/data/projects";
import { Chip, FrameLabel, SectionTitle } from "../ui";

export function Process() {
  return (
    <section id="process" className="py-[72px]">
      <div className="wrap">
        <div className="mb-10" data-reveal>
          <FrameLabel>How I work</FrameLabel>
          <SectionTitle>Three habits</SectionTitle>
        </div>
        <div className="grid gap-[18px] min-[860px]:grid-cols-3">
          {principles.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
              className="grid content-start gap-3 rounded-card border border-line bg-surface p-[26px] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <span className="label-mono text-accent">{pad(i + 1)}</span>
              <h3 className="text-[26px] font-bold tracking-[-.015em]">{p.title}</h3>
              <p className="text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills: slow infinite marquee (a wrapped list with reduced motion) */}
      <div className="marquee mt-10" data-reveal>
        <ul aria-label="Skills" className="marquee-track m-0 list-none p-0">
          {[0, 1].map((copy) => (
            <li key={copy} className={`flex gap-2 pr-2 ${copy ? "marquee-copy" : ""}`} aria-hidden={copy ? true : undefined}>
              {skills.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
