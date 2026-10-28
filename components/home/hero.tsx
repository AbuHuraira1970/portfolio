import { hero, profile } from "@/data/projects";
import { Button } from "../button";
import { Chip } from "../ui";

const handles: { key: string; style: React.CSSProperties }[] = [
  { key: "tl", style: { left: 0, top: 0 } },
  { key: "tr", style: { right: 0, top: 0 } },
  { key: "br", style: { right: 0, bottom: 0 } },
  { key: "bl", style: { left: 0, bottom: 0 } },
];

export function Hero() {
  return (
    <section id="top" className="pt-[clamp(48px,8vw,80px)] pb-16">
      <div className="wrap">
        {/* "hi, my name is" writes in letter by letter */}
        <p className="mb-2 inline-block -rotate-2 font-hand text-[clamp(26px,3vw,34px)] font-bold text-muted">
          <span className="sr-only">{hero.hello}</span>
          <span aria-hidden="true">
            {[...hero.hello].map((ch, i) => (
              <span key={i} className="hello-char" style={{ "--c": i } as React.CSSProperties}>
                {ch === " " ? " " : ch}
              </span>
            ))}
          </span>
        </p>

        {/* Selection box: edges draw, then the handles pop in */}
        <div className="relative mt-3.5 mb-12 inline-block max-w-full px-[clamp(8px,2vw,14px)] pt-1 pb-2.5">
          <span className="sel-edge t" aria-hidden="true" />
          <span className="sel-edge r" aria-hidden="true" />
          <span className="sel-edge b" aria-hidden="true" />
          <span className="sel-edge l" aria-hidden="true" />
          {handles.map((h, i) => (
            <span
              key={h.key}
              className="sel-handle"
              style={{ ...h.style, "--h": i } as React.CSSProperties}
              aria-hidden="true"
            />
          ))}
          <h1 className="text-[clamp(50px,11.5vw,156px)] leading-[.9] font-bold tracking-[-.035em]">
            {profile.firstName} <em className="text-accent not-italic">{profile.lastName}</em>
          </h1>
          <span className="hero-dim absolute -bottom-[30px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-accent px-2 py-[3px] font-mono text-[11px] tracking-[.03em] text-accent-ink">
            {profile.role} · {profile.location}
          </span>
        </div>

        <div className="grid items-end gap-7 md:grid-cols-[1.25fr_1fr] md:gap-12">
          <p
            className="hero-rise max-w-[20ch] font-body text-[clamp(26px,3vw,38px)] leading-[1.12] font-bold tracking-[-.025em]"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            {hero.thesis}
          </p>
          <div className="grid gap-[22px]">
            <p className="hero-rise max-w-[42ch] text-muted" style={{ "--i": 1 } as React.CSSProperties}>
              {hero.intro}
            </p>
            <div className="hero-rise flex flex-wrap gap-2" style={{ "--i": 2 } as React.CSSProperties}>
              {hero.chips.map((c) => (
                <Chip key={c.label} live={c.live}>{c.label}</Chip>
              ))}
            </div>
            <div className="hero-rise flex flex-wrap items-center gap-3" style={{ "--i": 3 } as React.CSSProperties}>
              <Button href="#work">See my work ↓</Button>
              <Button href="#contact" ghost>Let&apos;s talk</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
