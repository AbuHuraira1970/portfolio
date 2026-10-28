import { Magnetic } from "./magnetic";

const base =
  "inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-ink px-5 py-3.5 font-mono text-[13px] uppercase tracking-[.06em] no-underline transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5";

export const buttonClass = (ghost?: boolean) =>
  `${base} ${ghost ? "bg-transparent text-ink hover:bg-surface" : "bg-ink text-canvas"}`;

/** Plain anchor button with a magnetic pull. Use TransitionLink + buttonClass for routes. */
export function Button({ ghost, ...props }: React.ComponentProps<"a"> & { ghost?: boolean }) {
  return (
    <Magnetic>
      <a {...props} className={`${buttonClass(ghost)} ${props.className ?? ""}`} />
    </Magnetic>
  );
}
