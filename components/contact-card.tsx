import { contact, profile } from "@/data/projects";
import { CopyEmail } from "./copy-email";

const chip = "rounded-full bg-white/10 px-3.5 py-[9px] font-mono text-xs tracking-[.06em] text-[#eceef2] uppercase no-underline";
const linkChip = `${chip} transition-colors hover:bg-accent hover:text-accent-ink`;

/** Dark contact block, used on the home page and (shorter) at the end of each case study. */
export function ContactCard({ variant = "home" }: { variant?: "home" | "case" }) {
  const home = variant === "home";
  return (
    <div data-reveal className="relative grid gap-7 overflow-hidden rounded-[28px] bg-[#121317] p-[clamp(28px,6vw,72px)] text-[#eceef2] ring-1 ring-white/10">
      <span className="font-hand text-[26px] font-bold text-note">{home ? contact.aside : contact.caseAside}</span>
      {home && <h2 className="text-[clamp(52px,9vw,120px)] font-bold tracking-[-.04em]">{contact.title}</h2>}
      <p className="max-w-[52ch] text-lg opacity-85">{home ? contact.body : contact.caseBody}</p>
      <div className="flex flex-wrap items-center gap-3.5">
        <CopyEmail email={profile.email} />
      </div>
      {home && (
        <div className="flex flex-wrap gap-2.5">
          <a className={linkChip} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className={linkChip} href={profile.behance} target="_blank" rel="noopener noreferrer">
            Behance ↗
          </a>
          <a className={linkChip} href={profile.cv} target="_blank" rel="noopener">
            Download CV ↓
          </a>
          <a className={linkChip} href={profile.phoneHref}>
            {profile.phone}
          </a>
          <span className={chip}>{profile.city}</span>
        </div>
      )}
    </div>
  );
}
