import { profile, receipt } from "@/data/projects";
import { FrameLabel, SectionTitle } from "../ui";
import { CountUp } from "./count-up";

const PRINT_START = 0.25; // seconds, matches .receipt-paper .rl in globals.css
const PRINT_STEP = 0.11;

function Line({ index, item, qty, className = "", children }: { index: number; item: string; qty?: string; className?: string; children?: React.ReactNode }) {
  return (
    <div className={`rl flex justify-between gap-4 py-1 tabular-nums ${className}`} style={{ "--l": index } as React.CSSProperties}>
      <span className="text-muted">{item}</span>
      <b className="text-right font-medium">{children ?? qty}</b>
    </div>
  );
}

export function Receipt() {
  let l = 0; // line counter so every row prints in order
  const n = () => l++;

  return (
    <section id="numbers" className="py-[72px]">
      <div className="wrap grid items-center gap-12 min-[860px]:grid-cols-[1fr_minmax(0,440px)]">
        <div className="grid gap-4" data-reveal>
          <FrameLabel>In numbers</FrameLabel>
          <SectionTitle>{receipt.title}</SectionTitle>
          <p className="max-w-[44ch] text-muted">{receipt.intro}</p>
        </div>

        <div className="relative">
          {/* printer slot */}
          <div className="relative z-10 mx-[-10px] h-3 rounded-full bg-[#14161b] shadow-[0_6px_12px_-6px_var(--shadow)] ring-1 ring-line" aria-hidden="true" />
          <div className="-mt-1.5 overflow-hidden px-3 pb-8">
            <div data-reveal className="receipt-paper">
              <div
                className="receipt bg-surface px-7 pt-[30px] pb-[34px] font-mono text-[13px] text-ink shadow-[0_22px_40px_-26px_var(--shadow)] min-[860px]:-rotate-[1.2deg]"
                role="group"
                aria-label="Portfolio receipt"
              >
                <div className="rl text-center" style={{ "--l": n() } as React.CSSProperties}>
                  <h3 className="font-display text-[22px] font-bold tracking-[.02em]">{profile.firstName.toUpperCase()}</h3>
                  <div className="text-[11px] tracking-[.06em] text-muted uppercase">★ Design receipt ★ {profile.location}</div>
                </div>
                <hr className="rl my-3.5 border-0 border-t-[1.5px] border-dashed border-line" style={{ "--l": n() } as React.CSSProperties} />
                <Line index={n()} item="Item" qty="Qty" className="text-[11px] tracking-[.06em] uppercase" />
                {receipt.lines.map((line) => {
                  const i = n();
                  return (
                    <Line key={line.item} index={i} item={line.item} qty={line.qty}>
                      {"count" in line && line.count ? (
                        <CountUp {...line.count} delay={PRINT_START + i * PRINT_STEP} />
                      ) : undefined}
                    </Line>
                  );
                })}
                <hr className="rl my-3.5 border-0 border-t-[1.5px] border-dashed border-line" style={{ "--l": n() } as React.CSSProperties} />
                <Line index={n()} item={receipt.total.item} className="text-[15px] font-medium [&_b]:text-accent">{receipt.total.qty}</Line>
                <Line index={n()} item={receipt.paidIn.item} qty={receipt.paidIn.qty} />
                <hr className="rl my-3.5 border-0 border-t-[1.5px] border-dashed border-line" style={{ "--l": n() } as React.CSSProperties} />
                <div className="rl text-center text-[11px] tracking-[.06em] text-muted uppercase" style={{ "--l": n() } as React.CSSProperties}>
                  {receipt.thanks}
                </div>
                <div className="rl barcode mt-3.5 h-[34px]" style={{ "--l": n() } as React.CSSProperties} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
