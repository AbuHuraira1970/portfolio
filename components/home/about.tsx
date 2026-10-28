import Image from "next/image";
import { about } from "@/data/projects";
import { FrameLabel } from "../ui";

export function About() {
  return (
    <section id="about" className="py-[72px]">
      <div className="wrap">
        <div data-reveal><FrameLabel>About me</FrameLabel></div>
        <div className="grid items-start gap-10 md:grid-cols-[1.4fr_1fr]">
          <div data-reveal className="grid gap-[18px] rounded-card border border-line bg-surface p-[clamp(24px,4vw,44px)]">
            <p className="text-[clamp(21px,2.2vw,26px)] leading-[1.25] font-bold tracking-[-.015em]">
              {about.lead}
            </p>
            {about.paragraphs.map((p, i) => (
              <p key={i} className={`max-w-[62ch] ${i > 0 ? "text-muted" : ""}`}>{p}</p>
            ))}
          </div>
          <div>
            {/* Polaroid with the "Currently" sticky note pinned over its corner */}
            <div data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <figure className="m-0 -rotate-2 bg-white p-3 pb-2 shadow-[0_18px_40px_-22px_var(--shadow)] ring-1 ring-black/5 transition-transform duration-500 hover:rotate-0">
                <Image
                  src={about.photo.src}
                  alt={about.photo.alt}
                  sizes="(min-width: 768px) 420px, 100vw"
                  placeholder="blur"
                  className="block aspect-[896/700] h-auto w-full object-cover"
                />
                <figcaption className="pt-2 pb-1 text-center font-hand text-[22px] font-bold text-[#3a3f4a]">
                  {about.photo.caption}
                </figcaption>
              </figure>
            </div>
            <div data-reveal style={{ "--i": 2 } as React.CSSProperties} className="relative z-[1] -mt-1 ml-auto w-[88%]">
              <div className="grid rotate-1 gap-1.5 rounded bg-note px-[22px] pt-[22px] pb-[26px] text-note-ink shadow-[0_10px_24px_-14px_var(--shadow)] transition-transform duration-300 hover:rotate-0 md:rotate-2">
                <span className="label-mono opacity-70">{about.note.label}</span>
                <span className="font-hand text-[28px] leading-[1.1] font-bold">{about.note.text}</span>
              </div>
            </div>
            <div className="mt-7 grid gap-2.5">
              <div className="flex flex-wrap gap-2">
                {about.loves.map((tag, i) => (
                  <span
                    key={tag}
                    data-reveal
                    style={{ "--i": i + 3 } as React.CSSProperties}
                    className={`rounded-full border-[1.5px] px-4 py-2 font-display text-lg font-bold ${
                      i % 2 ? "border-accent bg-accent-soft" : "border-ink bg-surface"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-hand text-[22px] font-bold text-muted">{about.lovesCaption}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
