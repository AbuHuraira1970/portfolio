"use client";

import { useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy");
  const addr = useRef<HTMLAnchorElement>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
    } catch {
      // Clipboard blocked: select the address so it can be copied by hand.
      if (addr.current) {
        const range = document.createRange();
        range.selectNodeContents(addr.current);
        getSelection()?.removeAllRanges();
        getSelection()?.addRange(range);
      }
      setLabel("Selected");
    }
    setTimeout(() => setLabel("Copy"), 1600);
  };

  return (
    <div className="flex max-w-full min-w-0 items-center gap-1.5 rounded-full border-[1.5px] border-white/30 py-1.5 pr-1.5 pl-5">
      <a
        ref={addr}
        href={`mailto:${email}`}
        className="min-w-0 font-mono text-[clamp(12px,1.6vw,15px)] [overflow-wrap:anywhere] text-[#eceef2] no-underline hover:underline"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy email address (${label})`}
        className="rounded-full bg-note px-4 py-2.5 font-mono text-xs tracking-[.06em] whitespace-nowrap text-note-ink uppercase transition-transform hover:-translate-y-0.5"
      >
        <span aria-live="polite">{label}</span>
      </button>
    </div>
  );
}
