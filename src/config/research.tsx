import { FlagEU, FlagIndia, FlagUS } from "../components/ui/Botanicals";
import { BulbIcon, GlobeIcon, ResearchIcon } from "../components/ui/LineIcons";
import type { ChipOption } from "../components/ui/SelectChip";

export type ResearchMode = "deep" | "quick";
export type Jurisdiction = "IN" | "EU" | "US" | "GLOBAL";

export type AskRequest = {
  question: string;
  mode: ResearchMode;
  jurisdiction: Jurisdiction;
};

export const MODE_OPTIONS: ChipOption<ResearchMode>[] = [
  { value: "deep", label: "Deep Research", hint: "Multi-source, fully cited", icon: <ResearchIcon size={20} strokeWidth={1.7} /> },
  { value: "quick", label: "Quick Answer", hint: "Short answer with key citations", icon: <BulbIcon size={20} strokeWidth={1.7} /> },
];

export const JURISDICTION_OPTIONS: ChipOption<Jurisdiction>[] = [
  { value: "IN", label: "India", icon: <FlagIndia className="size-6" /> },
  { value: "EU", label: "European Union", icon: <FlagEU className="size-6" /> },
  { value: "US", label: "United States", icon: <FlagUS className="size-6" /> },
  { value: "GLOBAL", label: "Global", icon: <GlobeIcon size={20} strokeWidth={1.7} className="text-ayur-leaf" /> },
];

export const MODE_LABELS: Record<ResearchMode, string> = { deep: "Deep Research", quick: "Quick Answer" };
export const JURISDICTION_LABELS: Record<Jurisdiction, string> = {
  IN: "India",
  EU: "European Union",
  US: "United States",
  GLOBAL: "Global",
};
