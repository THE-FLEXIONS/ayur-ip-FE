import { useId, useState } from "react";
import { ChevronDownIcon, SearchIcon } from "../../components/ui/LineIcons";
import { inputClass } from "../../components/ui/ToolKit";
import { FAQ_CATEGORIES, FAQS, type FaqCategory } from "../../config/help";

/** Searchable, filterable FAQ accordion. */
export default function FaqSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategory | "All">("All");
  const [open, setOpen] = useState<string | null>(FAQS[0].q);
  const baseId = useId();

  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const visible = FAQS.filter(
    (f) => (category === "All" || f.category === category) && words.every((w) => `${f.q} ${f.a} ${f.category}`.toLowerCase().includes(w)),
  );

  return (
    <section aria-labelledby={`${baseId}-title`} className="rounded-[24px] border border-[#ecebe3] bg-white/85 p-5 sm:p-6">
      <h2 id={`${baseId}-title`} className="text-[18px] font-semibold text-ayur-ink">
        Frequently asked questions
      </h2>
      <div className="relative mt-4">
        <SearchIcon size={18} strokeWidth={1.8} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a918a]" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search help, e.g. 'fees', 'Hindi', 'delete'"
          aria-label="Search help articles"
          className={`${inputClass} pl-10`}
        />
      </div>

      <div role="tablist" aria-label="Help categories" className="-mx-1 mt-3 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
        {(["All", ...FAQ_CATEGORIES] as const).map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={`h-8 shrink-0 whitespace-nowrap rounded-full border px-3 text-[12.5px] font-medium transition-colors ${
              category === c ? "border-ayur-green bg-ayur-green text-white" : "border-[#e2e4da] bg-white text-[#3d4840] hover:bg-[#f4f6ef]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">
        {visible.length} {visible.length === 1 ? "article" : "articles"} found
      </p>

      {visible.length === 0 ? (
        <p className="mt-6 rounded-2xl bg-[#f6f6f0] px-4 py-6 text-center text-[14px] text-ayur-muted">
          No articles match “{query.trim()}”. Try other words, or send us a request below.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-[#efeee6] border-y border-[#efeee6]">
          {visible.map((f, i) => {
            const isOpen = open === f.q;
            const panelId = `${baseId}-faq-${i}`;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : f.q)}
                  className="flex w-full items-start gap-3 py-3.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14.5px] font-medium leading-snug text-ayur-ink">{f.q}</span>
                    <span className="mt-0.5 block text-[11.5px] font-medium uppercase tracking-[0.12em] text-[#8a918a]">{f.category}</span>
                  </span>
                  <ChevronDownIcon size={18} strokeWidth={1.8} className={`mt-0.5 shrink-0 text-ayur-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <p id={panelId} className="animate-rise pb-4 pr-6 text-[14px] leading-relaxed text-[#3d4840] [animation-duration:200ms]">
                    {f.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
