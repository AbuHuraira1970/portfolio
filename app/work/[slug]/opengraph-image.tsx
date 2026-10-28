import { getProject, profile, projects } from "@/data/projects";
import { ogSize, renderOg } from "@/lib/og";

export const alt = "Case study by Abu Huraira Nadeem";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  return renderOg({
    eyebrow: `Case study · ${project?.tag ?? ""}`,
    title: project?.title ?? profile.name,
    footer: `${profile.name} — ${profile.role}`,
  });
}
