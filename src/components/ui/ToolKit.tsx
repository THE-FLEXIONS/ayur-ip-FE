import { useEffect, useState, type ReactNode } from "react";
import { ArrowRightIcon, CheckIcon } from "./LineIcons";

// ─── Tool kit ────────────────────────────────────────────────────────────────
// Building blocks shared by the guided tools (Formulation Classifier, IP
// Guidance, ABS Compliance): question cards, option pickers, verdict banners,
// result lists and the copy / download / ask-AI action bar.

export type Tone = "green" | "amber" | "red" | "blue";

export const TONES: Record<Tone, { bg: string; border: string; text: string; chip: string; dot: string }> = {
  green: { bg: "bg-[#eef6ef]", border: "border-[#cfe3d2]", text: "text-[#1d5a36]", chip: "bg-[#dcefdf] text-[#1d5a36]", dot: "bg-[#2c8a52]" },
  amber: { bg: "bg-[#fbf5e6]", border: "border-[#eedcae]", text: "text-[#7a5410]", chip: "bg-[#f6e8c2] text-[#7a5410]", dot: "bg-[#d29a22]" },
  red: { bg: "bg-[#fbefec]", border: "border-[#f0d3cc]", text: "text-[#8a3325]", chip: "bg-[#f6dcd6] text-[#8a3325]", dot: "bg-[#c8503a]" },
  blue: { bg: "bg-[#eef3fb]", border: "border-[#d3def0]", text: "text-[#23477e]", chip: "bg-[#dde7f6] text-[#23477e]", dot: "bg-[#3b6fc0]" },
};

/** White card that frames one step of a tool. */
export function ToolCard({
  step,
  title,
  description,
  children,
  className = "",
}: {
  step?: number;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-[22px] border border-[#ecebe3] bg-white/85 p-5 shadow-[0_1px_2px_rgba(30,50,35,0.04)] sm:p-6 ${className}`}>
      <div className="flex items-start gap-3">
        {step !== undefined && (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ayur-mint text-[13px] font-semibold text-ayur-green-deep">
            {step}
          </span>
        )}
        <div className="min-w-0">
          <h2 className="text-[16.5px] font-semibold leading-snug text-ayur-ink sm:text-[17.5px]">{title}</h2>
          {description && <p className="mt-1 text-[13.5px] leading-relaxed text-ayur-muted sm:text-[14px]">{description}</p>}
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export type ChoiceOption<T extends string> = { value: T; label: string; hint?: string; icon?: ReactNode };

const choiceClass = (on: boolean) =>
  `flex h-full w-full items-start gap-3 rounded-2xl border px-3.5 py-3 text-left transition-[background-color,border-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green ${
    on
      ? "border-ayur-green bg-[#f1f7f1] shadow-[0_0_0_1px_var(--color-ayur-green)]"
      : "border-[#e4e5dc] bg-white hover:border-[#cfdccc] hover:bg-[#fafbf7]"
  }`;

function Mark({ on, round }: { on: boolean; round: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-0.5 flex size-[18px] shrink-0 items-center justify-center border transition-colors ${round ? "rounded-full" : "rounded-[6px]"} ${
        on ? "border-ayur-green bg-ayur-green text-white" : "border-[#c9ccc2] bg-white"
      }`}
    >
      {on && (round ? <span className="size-1.5 rounded-full bg-white" /> : <CheckIcon size={12} strokeWidth={3} />)}
    </span>
  );
}

function ChoiceBody<T extends string>({ option }: { option: ChoiceOption<T> }) {
  return (
    <span className="min-w-0 flex-1">
      <span className="flex items-center gap-2 text-[14.5px] font-medium leading-snug text-ayur-ink">
        {option.icon && <span className="shrink-0 text-ayur-leaf">{option.icon}</span>}
        {option.label}
      </span>
      {option.hint && <span className="mt-0.5 block text-[12.5px] leading-snug text-ayur-muted">{option.hint}</span>}
    </span>
  );
}

const gridCols = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3" } as const;

/** Single choice shown as cards (a radio group). */
export function ChoiceGroup<T extends string>({
  label,
  options,
  value,
  onChange,
  columns = 2,
}: {
  label: string;
  options: ChoiceOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  columns?: 1 | 2 | 3;
}) {
  return (
    <div role="radiogroup" aria-label={label} className={`grid gap-2.5 ${gridCols[columns]}`}>
      {options.map((option) => {
        const on = option.value === value;
        return (
          <button key={option.value} type="button" role="radio" aria-checked={on} onClick={() => onChange(option.value)} className={choiceClass(on)}>
            <Mark on={on} round />
            <ChoiceBody option={option} />
          </button>
        );
      })}
    </div>
  );
}

/** Several choices shown as cards (checkboxes). */
export function MultiChoice<T extends string>({
  label,
  options,
  value,
  onChange,
  columns = 2,
}: {
  label: string;
  options: ChoiceOption<T>[];
  value: T[];
  onChange: (value: T[]) => void;
  columns?: 1 | 2 | 3;
}) {
  return (
    <div role="group" aria-label={label} className={`grid gap-2.5 ${gridCols[columns]}`}>
      {options.map((option) => {
        const on = value.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            role="checkbox"
            aria-checked={on}
            onClick={() => onChange(on ? value.filter((v) => v !== option.value) : [...value, option.value])}
            className={choiceClass(on)}
          >
            <Mark on={on} round={false} />
            <ChoiceBody option={option} />
          </button>
        );
      })}
    </div>
  );
}

/** Small label above a field or group. */
export function FieldLabel({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[13px] font-medium text-[#3d4840]">
      {children}
    </label>
  );
}

export const inputClass =
  "h-11 w-full rounded-xl border border-[#e0e2d8] bg-white px-3.5 text-[14.5px] text-ayur-ink outline-none transition-[border-color,box-shadow] placeholder:text-[#9aa19a] focus:border-ayur-green focus:shadow-[0_0_0_3px_rgba(29,106,63,0.12)]";

/** Coloured result banner: the headline answer of a tool. */
export function Verdict({ tone, eyebrow, title, children, aside }: { tone: Tone; eyebrow: string; title: string; children?: ReactNode; aside?: ReactNode }) {
  const t = TONES[tone];
  return (
    <div className={`rounded-[22px] border ${t.border} ${t.bg} p-5 sm:p-6`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className={`flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.16em] ${t.text}`}>
          <span className={`size-2 rounded-full ${t.dot}`} />
          {eyebrow}
        </p>
        {aside}
      </div>
      <h3 className="mt-2 font-editorial text-[24px] font-semibold leading-tight text-ayur-ink sm:text-[28px]">{title}</h3>
      {children && <div className="mt-2 text-[14.5px] leading-relaxed text-[#3d4840]">{children}</div>}
    </div>
  );
}

/** Pill showing a short status, e.g. "Strong fit". */
export function TonePill({ tone, children }: { tone: Tone; children: ReactNode }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${TONES[tone].chip}`}>{children}</span>;
}

/** Titled bullet list used in results. */
export function ResultList({ title, items, icon }: { title: string; items: ReactNode[]; icon?: ReactNode }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="flex items-center gap-2 text-[14px] font-semibold text-ayur-ink">
        {icon && <span className="text-ayur-leaf">{icon}</span>}
        {title}
      </h4>
      <ul className="mt-2.5 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-[#3d4840]">
            <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ayur-leaf/70" aria-hidden="true" />
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Label / value rows, e.g. Regulator · CDSCO. */
export function FactGrid({ facts }: { facts: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-2xl border border-[#ecebe3] bg-[#ecebe3] sm:grid-cols-2">
      {facts.map((f) => (
        <div key={f.label} className="bg-white px-4 py-3">
          <dt className="text-[11.5px] font-medium uppercase tracking-[0.12em] text-[#7a817a]">{f.label}</dt>
          <dd className="mt-1 text-[14px] font-medium leading-snug text-ayur-ink">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function downloadText(filename: string, text: string) {
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const ghostButtonBase =
  "h-10 items-center gap-2 rounded-full border border-[#dfe2d8] bg-white px-4 text-[13.5px] font-medium text-ayur-ink transition-colors hover:bg-[#f4f6ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green";
const ghostButton = `inline-flex ${ghostButtonBase}`;

/** Copy, download and print a report, and hand the case to the AI. */
export function ActionBar({ report, filename, askLabel, onAsk }: { report: string; filename: string; askLabel: string; onAsk: () => void }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(report);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      downloadText(filename, report);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2 print:hidden">
      <button
        type="button"
        onClick={onAsk}
        className="inline-flex h-10 items-center gap-2 rounded-full bg-ayur-green px-4 text-[13.5px] font-medium text-white transition-colors hover:bg-ayur-green-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green"
      >
        {askLabel}
        <ArrowRightIcon size={16} strokeWidth={2} />
      </button>
      <button type="button" onClick={() => void copy()} className={ghostButton} aria-live="polite">
        {copied ? <CheckIcon size={15} strokeWidth={2.2} className="text-ayur-green" /> : null}
        {copied ? "Copied" : "Copy report"}
      </button>
      <button type="button" onClick={() => downloadText(filename, report)} className={ghostButton}>
        Download .txt
      </button>
      <button type="button" onClick={() => window.print()} className={`hidden sm:inline-flex ${ghostButtonBase}`}>
        Print
      </button>
    </div>
  );
}

/** "This is guidance, not legal advice" note under every tool result. */
export function Disclaimer({ children }: { children: ReactNode }) {
  return <p className="rounded-2xl bg-[#f3f2ea] px-4 py-3 text-[12.5px] leading-relaxed text-[#5e665f]">{children}</p>;
}

/**
 * Floating pill on phones and tablets that jumps to a tool's result, which sits
 * below the questions there. Hidden while the result is on screen.
 */
export function ResultJump({ targetId, label, tone }: { targetId: string; label: string; tone: Tone }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top > 0), { threshold: 0 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })}
      className="animate-rise fixed inset-x-4 bottom-[calc(76px+env(safe-area-inset-bottom))] z-30 mx-auto flex max-w-[420px] items-center gap-3 rounded-full bg-ayur-ink py-2.5 pl-4 pr-3 text-left text-white shadow-[0_14px_34px_-12px_rgba(10,30,20,0.6)] [animation-duration:250ms] lg:hidden print:hidden"
    >
      <span className={`size-2.5 shrink-0 rounded-full ${TONES[tone].dot}`} aria-hidden="true" />
      <span className="min-w-0 flex-1 truncate text-[14px] font-medium">{label}</span>
      <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-[12.5px] font-medium">View result ↓</span>
    </button>
  );
}

/** Empty right-hand panel shown until a tool has enough answers. */
export function ResultPlaceholder({ title, body, icon }: { title: string; body: string; icon: ReactNode }) {
  return (
    <div className="flex flex-col items-center rounded-[22px] border border-dashed border-[#d9dccf] bg-white/50 px-6 py-12 text-center">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-ayur-mint text-ayur-leaf">{icon}</span>
      <h3 className="mt-4 text-[16.5px] font-semibold text-ayur-ink">{title}</h3>
      <p className="mt-1.5 max-w-[40ch] text-[14px] leading-relaxed text-ayur-muted">{body}</p>
    </div>
  );
}
