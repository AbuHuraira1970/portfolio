import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, pad, projects } from "@/data/projects";
import { BrowserFrame } from "@/components/browser-frame";
import { ContactCard } from "@/components/contact-card";
import { Cover } from "@/components/covers";
import { TransitionLink } from "@/components/transition-link";
import { Blocks, Inline } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { type: "article", title: project.title, description: project.summary, url: `/work/${project.slug}` },
  };
}

const enter = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="wrap">
      <div className="flex flex-wrap items-center justify-between gap-3 pt-10 pb-6">
        <TransitionLink
          href="/#work"
          className="label-mono rounded-full border border-line bg-surface px-3.5 py-2 text-muted no-underline transition-colors hover:border-ink hover:text-ink"
        >
          ← All work
        </TransitionLink>
        <span className="label-mono text-muted">
          {pad(index + 1)} / {pad(projects.length)}
        </span>
      </div>

      <header className="grid gap-[22px] pb-9">
        <div className="label-mono cs-enter flex items-center gap-3 text-muted" style={enter(0)}>
          <b className="font-medium text-accent">● {pad(index + 1)}</b>
          <span>{project.tag}</span>
        </div>
        <h1
          className="cs-enter max-w-[16ch] text-[clamp(40px,7vw,92px)] font-bold tracking-[-.035em]"
          style={{ ...enter(1), viewTransitionName: `title-${project.slug}` }}
        >
          {project.title}
        </h1>
        <p className="cs-enter max-w-[52ch] text-[clamp(19px,2vw,23px)] leading-[1.45] text-muted" style={enter(2)}>
          {project.summary}
        </p>
        <dl
          className="cs-enter m-0 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-px overflow-hidden rounded-card border border-line bg-line"
          style={enter(3)}
        >
          {project.meta.map((m) => (
            <div key={m.label} className="grid min-w-0 content-start gap-1 bg-surface px-[18px] py-4">
              <dt className="label-mono text-[11px] text-muted">{m.label}</dt>
              <dd className="m-0 font-semibold">
                <Inline text={m.value} />
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="vt-cover cs-enter my-9" style={{ ...enter(4), viewTransitionName: `cover-${project.slug}` }}>
        <Cover project={project} sizes="(min-width: 1160px) 1128px, 100vw" priority className="aspect-[16/10.5] sm:aspect-[16/8.5]" />
      </div>

      <div className="mt-3">
        {project.sections.map((section, k) => (
          <section
            key={section.heading}
            data-reveal
            className="grid gap-1.5 border-t border-line py-[34px] min-[760px]:grid-cols-[220px_minmax(0,1fr)] min-[760px]:gap-7"
          >
            <span className="label-mono pt-2 text-accent">[{pad(k + 1)}]</span>
            <div>
              <h2 className="mb-3.5 text-[clamp(26px,3vw,36px)] font-bold tracking-[-.02em]">{section.heading}</h2>
              <Blocks blocks={section.blocks} />
              {section.reviewImage && (
                <div className="mt-[18px] max-w-[520px] -rotate-1 transition-transform duration-300 hover:rotate-0">
                  <Image
                    src={section.reviewImage.src}
                    alt={section.reviewImage.alt}
                    sizes="520px"
                    placeholder="blur"
                    className="block h-auto w-full rounded-xl border border-line shadow-[0_18px_36px_-26px_var(--shadow)]"
                  />
                </div>
              )}
            </div>
          </section>
        ))}

        {project.screenshots?.map((shot) => (
          <section
            key={shot.url}
            className="grid gap-1.5 border-t border-line py-[34px] min-[760px]:grid-cols-[220px_minmax(0,1fr)] min-[760px]:gap-7"
          >
            <span className="label-mono pt-2 text-accent">{shot.label ?? "[Live]"}</span>
            <div className="min-w-0">
              <div data-reveal>
                <h2 className="mb-3.5 text-[clamp(26px,3vw,36px)] font-bold tracking-[-.02em]">{shot.heading}</h2>
                <p className="mb-4 max-w-[66ch] text-muted">{shot.caption}</p>
              </div>
              <BrowserFrame shot={shot} />
            </div>
          </section>
        ))}
      </div>

      {project.note && (
        <div data-reveal>
          <p className="mt-5 max-w-[640px] -rotate-[.6deg] rounded-md bg-note px-5 py-4 text-[15px] text-note-ink shadow-[0_10px_24px_-16px_var(--shadow)]">
            {project.note}
          </p>
        </div>
      )}

      <TransitionLink
        href={`/work/${next.slug}`}
        data-cursor="view"
        data-reveal
        className="group mt-14 mb-5 grid grid-cols-[1fr_auto] items-center gap-5 rounded-[20px] border border-line bg-surface p-[clamp(22px,4vw,36px)] text-inherit no-underline transition-colors duration-300 hover:border-accent"
      >
        <div>
          <span className="label-mono text-muted">Next project · {pad(((index + 1) % projects.length) + 1)}</span>
          <h2 className="mt-1.5 text-[clamp(26px,3.6vw,44px)] font-bold tracking-[-.02em]">{next.title}</h2>
        </div>
        <span
          className="font-display text-[40px] text-accent transition-transform duration-300 group-hover:translate-x-2"
          aria-hidden="true"
        >
          →
        </span>
      </TransitionLink>

      <div className="mb-6">
        <ContactCard variant="case" />
      </div>
    </article>
  );
}
