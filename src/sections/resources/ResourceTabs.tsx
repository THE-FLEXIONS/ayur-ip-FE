import { useRef, type KeyboardEvent } from "react";
import { RESOURCE_CATEGORIES, type ResourceCategory } from "../../config/resources";

type ResourceTabsProps = {
  active: ResourceCategory;
  onChange: (category: ResourceCategory) => void;
  /** id of the panel the tabs control. */
  panelId: string;
};

// ─── Category tabs ───────────────────────────────────────────────────────────
// National (India) / International / Treaties. Arrow keys move between tabs.

export default function ResourceTabs({ active, onChange, panelId }: ResourceTabsProps) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const index = RESOURCE_CATEGORIES.findIndex((c) => c.id === active);
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (index + step + RESOURCE_CATEGORIES.length) % RESOURCE_CATEGORIES.length;
    onChange(RESOURCE_CATEGORIES[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div role="tablist" aria-label="Resource categories" onKeyDown={handleKeyDown} className="grid grid-cols-[1.12fr_1fr_0.86fr] gap-2.5 sm:flex sm:gap-3">
      {RESOURCE_CATEGORIES.map((category, i) => {
        const selected = category.id === active;
        return (
          <button
            key={category.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`resource-tab-${category.id}`}
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(category.id)}
            className={`h-10 min-w-0 whitespace-nowrap rounded-[13px] border px-2 text-[15px] transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green active:scale-[0.98] min-[400px]:text-[15.5px] sm:h-11 sm:px-5 ${
              selected
                ? "border-[#1d6a3f] bg-[#1d6a3f] font-medium text-white shadow-[0_6px_14px_-10px_rgba(21,82,49,0.8)]"
                : "border-[#dde2dd] bg-white font-normal text-[#1d5bb8] hover:border-[#c6d3e6] hover:bg-[#f6f9fd]"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
