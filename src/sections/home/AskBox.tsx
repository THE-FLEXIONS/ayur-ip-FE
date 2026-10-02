import { useEffect, useId, useState, type FormEvent, type Ref } from "react";
import { ArrowRightIcon, SearchIcon } from "../../components/ui/LineIcons";
import SelectChip from "../../components/ui/SelectChip";
import {
  JURISDICTION_OPTIONS,
  MODE_OPTIONS,
  type AskRequest,
  type Jurisdiction,
  type ResearchMode,
} from "../../config/research";

export type { AskRequest, Jurisdiction, ResearchMode };

type AskBoxProps = {
  value: string;
  onValueChange: (value: string) => void;
  onAsk: (request: AskRequest) => void;
  inputRef?: Ref<HTMLInputElement>;
  /** Initial selector values, e.g. from the user's saved settings. */
  defaultMode?: ResearchMode;
  defaultJurisdiction?: Jurisdiction;
};

export default function AskBox({
  value,
  onValueChange,
  onAsk,
  inputRef,
  defaultMode = "deep",
  defaultJurisdiction = "IN",
}: AskBoxProps) {
  const [mode, setMode] = useState<ResearchMode>(defaultMode);
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction>(defaultJurisdiction);
  const inputId = useId();

  // Saved settings load after sign-in; pick them up when they arrive.
  useEffect(() => setMode(defaultMode), [defaultMode]);
  useEffect(() => setJurisdiction(defaultJurisdiction), [defaultJurisdiction]);
  const canSubmit = value.trim().length > 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    onAsk({ question: value.trim(), mode, jurisdiction });
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="rounded-[26px] border border-white/70 bg-white/85 p-2.5 shadow-[0_20px_50px_-30px_rgba(30,60,40,0.35),0_2px_6px_-2px_rgba(30,60,40,0.06)] backdrop-blur-sm sm:rounded-[30px] sm:p-4 lg:p-5"
    >
      <label htmlFor={inputId} className="sr-only">
        Ask your Ayurvedic IP question
      </label>
      <div className="group flex items-center gap-2.5 rounded-full border border-ayur-line bg-white py-1.5 pl-3.5 pr-1.5 transition-[border-color,box-shadow] duration-200 focus-within:border-[#9fc3a6] focus-within:shadow-[0_0_0_4px_rgba(29,106,63,0.08)] sm:gap-4 sm:py-2.5 sm:pl-6 sm:pr-2.5">
        <SearchIcon size={22} strokeWidth={1.8} className="shrink-0 text-ayur-ink" />
        <input
          ref={inputRef}
          id={inputId}
          type="text"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder="Ask your Ayurvedic IP question..."
          autoComplete="off"
          enterKeyHint="search"
          className="h-11 min-w-0 flex-1 bg-transparent text-[16px] placeholder:text-[14px] min-[400px]:placeholder:text-[15px] sm:placeholder:text-[18px] lg:placeholder:text-[19px] text-ayur-ink outline-none placeholder:text-[#7c827b] sm:h-12 sm:text-[18px] lg:text-[19px]"
        />
        <button
          type="submit"
          disabled={!canSubmit}
          aria-label="Ask question"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ayur-green text-white shadow-[0_6px_14px_-6px_rgba(21,82,49,0.7)] transition-[background-color,transform,opacity] duration-200 hover:bg-ayur-green-deep active:scale-95 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green sm:size-14"
        >
          <ArrowRightIcon size={24} strokeWidth={2} className="transition-transform duration-200 group-focus-within:translate-x-0.5" />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2.5 sm:mt-4 sm:gap-3">
        <SelectChip
          label="Research mode"
          value={mode}
          options={MODE_OPTIONS}
          onChange={setMode}
          className="sm:min-w-[12.5rem]"
        />
        <SelectChip
          label="Jurisdiction"
          value={jurisdiction}
          options={JURISDICTION_OPTIONS}
          onChange={setJurisdiction}
          align="end"
          className="sm:min-w-[10.5rem]"
        />
      </div>
    </form>
  );
}
