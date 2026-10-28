import { profile } from "@/data/projects";

export function Footer() {
  return (
    <footer className="pt-10 pb-14">
      <div className="wrap label-mono flex flex-wrap justify-between gap-4 text-muted">
        <span>© 2026 {profile.name} · {profile.role}</span>
        <span>
          Designed in Lahore ·{" "}
          <a href="#main" className="no-underline hover:text-ink">Back to top ↑</a>
        </span>
      </div>
    </footer>
  );
}
