import { useId, useMemo, useState, type KeyboardEvent } from "react";
import { CloseIcon, SearchIcon } from "../../components/ui/LineIcons";
import { inputClass } from "../../components/ui/ToolKit";
import { INGREDIENTS, KIND_LABELS, findIngredient, type IngredientKind } from "../../config/formulation";

const KIND_DOT: Record<IngredientKind, string> = {
  herb: "bg-[#3b8a55]",
  mineral: "bg-[#6b5cb8]",
  animal: "bg-[#b07a3b]",
  nutrient: "bg-[#3b72b8]",
  synthetic: "bg-[#a2468f]",
  allopathic: "bg-[#c8503a]",
  excipient: "bg-[#8a918a]",
};

const KIND_STYLE: Record<IngredientKind, string> = {
  herb: "bg-[#e6f1e6] text-[#24603b]",
  mineral: "bg-[#ece9f6] text-[#4b3f86]",
  animal: "bg-[#f6ece0] text-[#7a4f1d]",
  nutrient: "bg-[#e3eef9] text-[#23518a]",
  synthetic: "bg-[#f1e6f2] text-[#78306f]",
  allopathic: "bg-[#f8e2dd] text-[#8a3325]",
  excipient: "bg-[#ecedea] text-[#4d544e]",
};

type IngredientPickerProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

/** Searchable ingredient combobox with removable chips. Unknown names can be added as-is. */
export default function IngredientPicker({ value, onChange }: IngredientPickerProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const listId = useId();
  const inputId = useId();

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INGREDIENTS.filter((i) => !value.includes(i.name) && (!q || i.name.toLowerCase().includes(q))).slice(0, 8);
  }, [query, value]);

  function add(name: string) {
    const clean = name.trim();
    if (!clean || value.includes(clean)) return;
    onChange([...value, clean]);
    setQuery("");
    setActive(0);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((a) => Math.min(a + 1, matches.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (open && matches[active]) add(matches[active].name);
      else add(query);
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Backspace" && !query && value.length) {
      onChange(value.slice(0, -1));
    }
  }

  return (
    <div>
      <div className="relative">
        <SearchIcon size={18} strokeWidth={1.8} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a918a]" />
        <input
          id={inputId}
          role="combobox"
          aria-expanded={open && matches.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && matches[active] ? `${listId}-${active}` : undefined}
          aria-label="Add an ingredient"
          value={query}
          placeholder="Search herbs, minerals, additives…"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(0);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={onKeyDown}
          className={`${inputClass} pl-10`}
        />
        {open && (matches.length > 0 || query.trim()) && (
          <ul
            id={listId}
            role="listbox"
            className="absolute inset-x-0 top-[calc(100%+6px)] z-20 max-h-72 overflow-y-auto rounded-2xl border border-[#e4e5dc] bg-white p-1.5 shadow-[0_18px_40px_-18px_rgba(20,40,30,0.35)]"
          >
            {matches.map((item, i) => (
              <li
                key={item.name}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === active}
                onMouseDown={(e) => {
                  e.preventDefault();
                  add(item.name);
                }}
                onMouseEnter={() => setActive(i)}
                className={`flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-[14px] ${i === active ? "bg-[#f1f6ef]" : ""}`}
              >
                <span className="min-w-0 flex-1 truncate">{item.name}</span>
                {item.scheduleE1 && <span className="rounded-full bg-[#f8e2dd] px-2 py-0.5 text-[10.5px] font-semibold text-[#8a3325]">E(1)</span>}
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-medium ${KIND_STYLE[item.kind]}`}>{KIND_LABELS[item.kind]}</span>
              </li>
            ))}
            {query.trim() && !INGREDIENTS.some((i) => i.name.toLowerCase() === query.trim().toLowerCase()) && (
              <li
                role="option"
                aria-selected={matches.length === 0}
                onMouseDown={(e) => {
                  e.preventDefault();
                  add(query);
                }}
                className="cursor-pointer rounded-xl px-3 py-2 text-[14px] text-ayur-green hover:bg-[#f1f6ef]"
              >
                Add “{query.trim()}” as a plant ingredient
              </li>
            )}
          </ul>
        )}
      </div>

      {value.length > 0 ? (
        <ul aria-label="Selected ingredients" className="mt-3 flex flex-wrap gap-2">
          {value.map((name) => {
            const item = findIngredient(name);
            return (
              <li key={name} className="flex max-w-full items-center gap-1.5 rounded-full border border-[#e4e5dc] bg-white py-1 pl-3 pr-1 text-[13px]">
                <span className={`size-2 shrink-0 rounded-full ${KIND_DOT[item.kind]}`} title={KIND_LABELS[item.kind]} aria-hidden="true" />
                <span className="min-w-0 truncate">{name}</span>
                <button
                  type="button"
                  onClick={() => onChange(value.filter((v) => v !== name))}
                  aria-label={`Remove ${name}`}
                  className="flex size-6 shrink-0 items-center justify-center rounded-full text-[#6a716a] hover:bg-[#f1f2ec] hover:text-ayur-ink"
                >
                  <CloseIcon size={13} strokeWidth={2.2} />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-2 text-[12.5px] text-ayur-muted">Add at least one ingredient. Press Enter to add a name that isn't listed.</p>
      )}
    </div>
  );
}
