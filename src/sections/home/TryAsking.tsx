import { useId, useState, type ComponentType, type SVGProps } from "react";
import { ArrowRightIcon, DocumentIcon, GlobeIcon, LeafIcon, SearchIcon, ShieldCheckIcon, BulbIcon, DatabaseIcon, UsersIcon } from "../../components/ui/LineIcons";

type Suggestion = {
  question: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
};

const SUGGESTIONS: Suggestion[] = [
  { question: "Can I patent a new Ayurvedic formulation?", icon: SearchIcon },
  { question: "What approvals do I need to export to EU?", icon: LeafIcon },
  { question: "Is this a classical or proprietary medicine?", icon: GlobeIcon },
  { question: "How to register a GI for a herbal product?", icon: DocumentIcon },
  { question: "Is my product idea already documented in TKDL?", icon: DatabaseIcon },
  { question: "Can I trademark a Sanskrit name for my brand?", icon: BulbIcon },
  { question: "When is ABS approval needed for a medicinal plant?", icon: ShieldCheckIcon },
  { question: "How do I share a cited report with my co-founders?", icon: UsersIcon },
];

const INITIAL_COUNT = 4;

export default function TryAsking({ onPick }: { onPick: (question: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const headingId = useId();
  const listId = useId();
  const visible = expanded ? SUGGESTIONS : SUGGESTIONS.slice(0, INITIAL_COUNT);

  return (
    <section
      aria-labelledby={headingId}
      className="rounded-[22px] border border-[#ecebe3] bg-white/60 p-4 shadow-[0_12px_32px_-28px_rgba(40,50,30,0.45)] sm:p-6 lg:rounded-[26px] lg:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 id={headingId} className="text-[19px] font-semibold tracking-[-0.01em] text-ayur-ink sm:text-[22px]">
          Try asking
        </h2>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((e) => !e)}
          className="group flex items-center gap-2 rounded-full px-2 py-1 text-[14px] font-medium text-ayur-ink transition-colors hover:text-ayur-green focus-visible:outline-2 focus-visible:outline-ayur-green sm:text-[15px]"
        >
          {expanded ? "Show less" : "See all"}
          <ArrowRightIcon
            size={18}
            strokeWidth={1.8}
            className={`transition-transform duration-200 ${expanded ? "-rotate-90" : "group-hover:translate-x-0.5"}`}
          />
        </button>
      </div>

      <ul id={listId} className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
        {visible.map(({ question, icon: Icon }) => (
          <li key={question}>
            <button
              type="button"
              onClick={() => onPick(question)}
              className="group flex h-full w-full items-center gap-4 rounded-full border border-[#efeee7] bg-white px-5 py-3.5 text-left shadow-[0_6px_18px_-14px_rgba(30,50,35,0.4)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#dce6da] hover:shadow-[0_12px_24px_-16px_rgba(30,60,40,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green motion-reduce:hover:translate-y-0 sm:px-6 sm:py-4"
            >
              <Icon size={24} strokeWidth={1.6} className="shrink-0 text-ayur-leaf" />
              <span className="text-[14px] leading-snug text-[#2d3733] sm:text-[15px]">{question}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
