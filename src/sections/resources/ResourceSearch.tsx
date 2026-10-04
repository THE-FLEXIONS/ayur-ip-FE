import { useId } from "react";
import { CloseIcon, SearchIcon } from "../../components/ui/LineIcons";

type ResourceSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

// ─── Resource search ─────────────────────────────────────────────────────────
// Filters the cards as you type; Escape or the clear button empties it.

export default function ResourceSearch({ value, onChange }: ResourceSearchProps) {
  const id = useId();
  return (
    <div role="search" className="group relative">
      <label htmlFor={id} className="sr-only">
        Search databases, forms, or resources
      </label>
      <SearchIcon size={22} strokeWidth={1.9} className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2 text-[#3b4757] sm:left-[18px]" />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape" && value) {
            e.preventDefault();
            onChange("");
          }
        }}
        placeholder="Search databases, forms, or resources..."
        autoComplete="off"
        enterKeyHint="search"
        className={`h-[46px] w-full appearance-none rounded-full border border-[#dde2dd] bg-white pl-[46px] text-[16px] text-[#132033] outline-none placeholder:text-[14.5px] min-[400px]:placeholder:text-[15.5px] sm:placeholder:text-[16px] transition-[border-color,box-shadow] duration-200 placeholder:text-[#5f6a78] hover:border-[#cdd5cd] focus:border-[#8fbb9a] focus:shadow-[0_0_0_4px_rgba(29,106,63,0.1)] sm:h-[52px] sm:pl-[54px] ${value ? "pr-12" : "pr-3"} [&::-webkit-search-cancel-button]:hidden`}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-1.5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-[#55606f] transition-colors hover:bg-[#eef2ee] hover:text-[#132033] focus-visible:outline-2 focus-visible:outline-ayur-green"
        >
          <CloseIcon size={18} strokeWidth={2} />
        </button>
      )}
    </div>
  );
}
