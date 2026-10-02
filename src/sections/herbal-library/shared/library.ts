import type { LibraryKind } from "../../../lib/api";
import { IMG_AMLA, IMG_ASHWAGANDHA, IMG_NEEM, IMG_TULSI, IMG_TURMERIC } from "./assets";

/** Photos bundled with the page, used when an item has no image_url in the database. */
export const LOCAL_IMAGES: Record<string, string> = {
  ashwagandha: IMG_ASHWAGANDHA,
  turmeric: IMG_TURMERIC,
  neem: IMG_NEEM,
  tulsi: IMG_TULSI,
  amla: IMG_AMLA,
};

export const KIND_LABELS: Record<LibraryKind, string> = {
  herb: "Herb",
  formulation: "Formulation",
  classical_text: "Classical Text",
};

/** Tag colours, cycled so neighbouring tags look different. */
export const TAG_COLORS = [
  { bg: "#f0fdf4", color: "#166534" },
  { bg: "#fff7ed", color: "#c2410c" },
  { bg: "#eff6ff", color: "#1d4ed8" },
  { bg: "#fdf4ff", color: "#86198f" },
  { bg: "#fff1f2", color: "#be123c" },
];

/** Browse tabs: the first four filter by kind, the last three open a list of values. */
export type BrowseTab = "All" | "Herbs" | "Formulations" | "Classical Texts" | "Therapeutic Areas" | "Parts Used" | "Regions";

export const TAB_KIND: Partial<Record<BrowseTab, LibraryKind>> = {
  Herbs: "herb",
  Formulations: "formulation",
  "Classical Texts": "classical_text",
};

export const TAB_FACET: Partial<Record<BrowseTab, "therapeuticArea" | "partUsed" | "region">> = {
  "Therapeutic Areas": "therapeuticArea",
  "Parts Used": "partUsed",
  Regions: "region",
};
