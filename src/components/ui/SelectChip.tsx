import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { CheckIcon, ChevronDownIcon } from "./LineIcons";

export type ChipOption<T extends string> = {
  value: T;
  label: string;
  hint?: string;
  icon: ReactNode;
};

type SelectChipProps<T extends string> = {
  label: string;
  value: T;
  options: ChipOption<T>[];
  onChange: (value: T) => void;
  className?: string;
  /** Anchor the menu to the chip's right edge on small screens so it never overflows the viewport. */
  align?: "start" | "end";
};

/** Rounded selector chip that opens an accessible listbox. */
export default function SelectChip<T extends string>({ label, value, options, onChange, className = "", align = "start" }: SelectChipProps<T>) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();

  const selectedIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value),
  );
  const selected = options[selectedIndex];

  useEffect(() => {
    if (!open) return;
    listRef.current?.focus();
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function openList() {
    setActive(selectedIndex);
    setOpen(true);
  }

  function choose(index: number) {
    onChange(options[index].value);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onButtonKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openList();
    }
  }

  function onListKeyDown(e: KeyboardEvent<HTMLUListElement>) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => (i + 1) % options.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => (i - 1 + options.length) % options.length);
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        choose(active);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-label={`${label}: ${selected.label}`}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onButtonKeyDown}
        className="flex h-11 w-full items-center gap-2 rounded-full border border-ayur-line bg-white/80 pl-3 pr-2.5 sm:gap-2.5 sm:pr-3 text-[14px] text-ayur-ink transition-colors hover:border-[#cfd8cc] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green sm:h-12 sm:pl-4 sm:text-[15px]"
      >
        <span className="flex size-6 shrink-0 items-center justify-center text-ayur-ink">{selected.icon}</span>
        <span className="truncate font-medium">{selected.label}</span>
        <ChevronDownIcon
          size={18}
          strokeWidth={1.8}
          className={`ml-auto shrink-0 text-ayur-ink transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          ref={listRef}
          id={`${id}-list`}
          role="listbox"
          tabIndex={-1}
          aria-label={label}
          aria-activedescendant={`${id}-opt-${active}`}
          onKeyDown={onListKeyDown}
          className={`absolute ${align === "end" ? "right-0 sm:right-auto sm:left-0" : "left-0"} top-[calc(100%+8px)] z-30 min-w-full w-max max-w-[18rem] animate-rise rounded-2xl border border-ayur-line bg-white p-1.5 shadow-[0_18px_40px_-18px_rgba(18,32,31,0.35)] outline-none [animation-duration:180ms]`}
        >
          {options.map((opt, i) => {
            const isSelected = opt.value === value;
            return (
              <li
                key={opt.value}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => choose(i)}
                onMouseEnter={() => setActive(i)}
                className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] text-ayur-ink ${
                  i === active ? "bg-ayur-mint/70" : ""
                }`}
              >
                <span className="flex size-6 shrink-0 items-center justify-center">{opt.icon}</span>
                <span className="flex flex-col">
                  <span className="font-medium">{opt.label}</span>
                  {opt.hint && <span className="text-[12px] text-ayur-muted">{opt.hint}</span>}
                </span>
                {isSelected && <CheckIcon size={16} strokeWidth={2} className="ml-auto text-ayur-green" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
