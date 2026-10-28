import Link from "next/link";
import { buttonClass } from "@/components/button";

export default function NotFound() {
  return (
    <section className="wrap grid min-h-[60vh] content-center justify-items-start gap-6 py-20">
      <span className="-rotate-2 font-hand text-3xl font-bold text-muted">hmm, this frame is empty</span>
      <h1 className="text-[clamp(56px,10vw,120px)] font-bold tracking-[-.04em]">404</h1>
      <Link href="/" className={buttonClass()}>
        Back home
      </Link>
    </section>
  );
}
