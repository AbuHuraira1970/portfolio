import { review } from "@/data/projects";
import { buttonClass } from "../button";
import { Magnetic } from "../magnetic";
import { TransitionLink } from "../transition-link";
import { FrameLabel } from "../ui";

export function Review() {
  return (
    <section id="reviews" className="py-[72px]">
      <div className="wrap">
        <div data-reveal>
          <FrameLabel>Reviews</FrameLabel>
        </div>
        <div className="grid items-center gap-10 min-[860px]:grid-cols-2">
          <figure data-reveal className="m-0 grid gap-[18px] rounded-[20px] border border-line bg-surface p-[clamp(24px,4vw,40px)]">
            <div className="text-xl tracking-[4px] text-accent" role="img" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote className="m-0 text-[clamp(26px,3vw,36px)] leading-[1.15] font-bold tracking-[-.02em]">
              {review.quote}
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-3 text-[15px] text-muted">
              <b className="text-ink">{review.author}</b>
              {[review.country, review.context].map((part) => (
                <span key={part} className="flex gap-3">
                  <span aria-hidden="true">·</span>
                  {part}
                </span>
              ))}
            </figcaption>
          </figure>
          <div className="grid gap-3.5" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            <span className="inline-block -rotate-2 justify-self-start font-hand text-[26px] font-bold text-accent">{review.aside}</span>
            <p className="max-w-[40ch] text-muted">{review.blurb}</p>
            <div>
              <Magnetic>
                <TransitionLink href={`/work/${review.caseSlug}`} className={buttonClass(true)}>
                  Read the case study →
                </TransitionLink>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
