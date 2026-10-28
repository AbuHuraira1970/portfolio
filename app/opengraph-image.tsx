import { hero, profile } from "@/data/projects";
import { ogSize, renderOg } from "@/lib/og";

export const alt = profile.seoTitle;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: `${profile.role} · Fintech · Identity · KYC/AML`, title: profile.name, footer: hero.thesis });
}
