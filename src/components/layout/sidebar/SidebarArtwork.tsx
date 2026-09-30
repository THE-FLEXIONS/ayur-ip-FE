import { LeafBranch } from "../../ui/Botanicals";

/** Outlined leaves in the green strip beside the navigation panel. */
export function SidebarLeafOutlines() {
  return (
    <svg
      viewBox="0 0 80 300"
      className="pointer-events-none absolute right-0 top-[42%] z-0 h-auto w-[13%] min-w-[44px] max-w-[64px]"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="#86b67e" strokeWidth="1.3" strokeLinecap="round" opacity="0.7">
        <path d="M86 6C58 22 34 52 30 92c30-10 50-40 56-86Z" />
        <path d="M84 12C66 40 48 66 32 90M62 40l6 14M52 56l7 12M44 70l6 10" />
        <path d="M86 118c-26 4-48 22-60 48 26 4 48-10 60-48Z" />
        <path d="M84 122C66 136 46 150 28 164M66 132l2 12M54 142l2 12" />
        <path d="M86 206c-24 0-44 16-54 38 24 4 44-8 54-38Z" />
        <path d="M84 210c-16 12-34 22-50 32M64 220l2 10" />
      </g>
    </svg>
  );
}

/** Flowering branch rising from the bottom-right corner, in front of the hills. */
export function SidebarFloweringBranch() {
  return (
    <LeafBranch
      flowers
      className="pointer-events-none absolute bottom-[58px] right-[-30px] z-30 w-[112px] rotate-[6deg] drop-shadow-[0_6px_12px_rgba(10,40,20,0.25)] sm:w-[124px]"
    />
  );
}
