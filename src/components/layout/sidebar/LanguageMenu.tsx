import { useId, useState, type KeyboardEvent } from "react";
import { LANGUAGES, type LanguageCode } from "../../../config/app";
import { CheckIcon, ChevronRightIcon } from "../../ui/LineIcons";
import { LanguageNavIcon } from "../../ui/NavIcons";
import SidebarNavItem from "./SidebarNavItem";

type LanguageMenuProps = {
  value: LanguageCode;
  onChange: (code: LanguageCode) => void;
};

/** "Language" row that expands an inline radio list of answer languages. */
export default function LanguageMenu({ value, onChange }: LanguageMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const current = LANGUAGES.find((l) => l.code === value) ?? LANGUAGES[0];
  const available = LANGUAGES.filter((l) => l.available);

  function onRadioKeyDown(e: KeyboardEvent<HTMLButtonElement>, code: LanguageCode) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const i = available.findIndex((l) => l.code === code);
    const next = available[(i + (e.key === "ArrowDown" ? 1 : -1) + available.length) % available.length];
    onChange(next.code);
    document.getElementById(`${panelId}-${next.code}`)?.focus();
  }

  return (
    <div>
      <SidebarNavItem
        icon={LanguageNavIcon}
        label="Language"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        trailing={
          <span className="flex items-center gap-2">
            <span className="sr-only">, current: {current.label}</span>
            <ChevronRightIcon
              size={18}
              strokeWidth={1.8}
              className={`shrink-0 text-[#1a3a33] transition-transform duration-200 ${open ? "rotate-90" : ""}`}
            />
          </span>
        }
      />

      {open && (
        <div id={panelId} role="radiogroup" aria-label="Answer language" className="animate-rise pb-1 pl-[46px] pr-2 [animation-duration:200ms]">
          {LANGUAGES.map((lang) => {
            const checked = lang.code === value;
            return (
              <button
                key={lang.code}
                id={`${panelId}-${lang.code}`}
                type="button"
                role="radio"
                aria-checked={checked}
                disabled={!lang.available}
                tabIndex={checked ? 0 : -1}
                onClick={() => onChange(lang.code)}
                onKeyDown={(e) => onRadioKeyDown(e, lang.code)}
                className="flex h-9 w-full items-center gap-3 rounded-[10px] px-3 text-left text-[14px] text-[#16302b] transition-colors hover:bg-[#ebf0e5] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ayur-green disabled:cursor-not-allowed disabled:text-[#8a918a] disabled:hover:bg-transparent"
              >
                <span lang={lang.code}>{lang.native}</span>
                {lang.native !== lang.label && <span className="text-[13px] text-ayur-muted">{lang.label}</span>}
                {checked && <CheckIcon size={18} strokeWidth={2} className="ml-auto text-ayur-green" />}
                {!lang.available && <span className="ml-auto text-[11.5px] font-medium uppercase tracking-wide">Coming soon</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
