import { experience } from "@/data/projects";
import { FrameLabel, SectionTitle } from "../ui";

export function Experience() {
  return (
    <section id="experience" className="py-[72px]">
      <div className="wrap">
        <div className="mb-10" data-reveal>
          <FrameLabel>Where I&apos;ve been</FrameLabel>
          <SectionTitle>Experience</SectionTitle>
        </div>
        <ol className="m-0 list-none border-t-[1.5px] border-ink p-0">
          {experience.map((job, i) => (
            <li
              key={job.company}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
              className="group grid items-start gap-2 border-b border-line py-7 min-[760px]:grid-cols-[200px_1fr_auto] min-[760px]:gap-6"
            >
              <span className="label-mono pt-1.5 tracking-[.05em] text-muted">{job.when}</span>
              <div>
                <h3 className="text-[clamp(26px,3vw,36px)] font-bold tracking-[-.02em] transition-transform duration-300 group-hover:translate-x-1.5">
                  {job.company}
                </h3>
                <div className="mt-2 mb-2.5 flex flex-wrap gap-2.5 text-[15px] text-muted">
                  <b className="font-semibold text-ink">{job.role}</b>
                  {job.details.map((d) => (
                    <span key={d} className="flex gap-2.5">
                      <span aria-hidden="true">·</span>
                      {d}
                    </span>
                  ))}
                </div>
                <ul className="m-0 grid max-w-[62ch] list-disc gap-1 pl-[18px] text-muted">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {job.aside && <span className="mt-2 block font-hand text-[22px] font-bold text-accent">{job.aside}</span>}
              </div>
              <span
                className={`label-mono justify-self-start rounded-full border px-2.5 py-[5px] text-[11px] tracking-[.06em] whitespace-nowrap ${
                  job.current ? "border-accent bg-accent text-accent-ink" : "border-line"
                }`}
              >
                {job.badge}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
