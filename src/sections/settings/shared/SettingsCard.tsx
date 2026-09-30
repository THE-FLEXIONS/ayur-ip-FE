import type { ReactNode } from "react";

/** Titled card that groups one area of settings. */
export default function SettingsCard({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="rounded-[22px] border border-[#ecebe3] bg-white/80 p-5 shadow-[0_10px_28px_-24px_rgba(30,50,35,0.45)] sm:p-7">
      <h2 className="text-[18px] font-semibold tracking-[-0.01em]">{title}</h2>
      <p className="mt-1 text-[14px] leading-relaxed text-ayur-muted">{description}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}
