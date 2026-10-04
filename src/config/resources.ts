// ─── Databases & Resources ───────────────────────────────────────────────────
// Every card on the Resources page comes from this list. To add a resource,
// add an entry; to swap in an official logo, drop src/assets/resources/<id>.svg
// (or .png/.webp) and it replaces the drawn icon automatically.

export type ResourceCategory = "national" | "international" | "treaties";

export type ResourceIconKey = "document" | "patent" | "pin" | "ministry" | "botanical" | "fssai" | "globe" | "scroll" | "handshake";

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  icon: ResourceIconKey;
  url: string;
  /** Extra words matched by search (acronyms, Hindi names, topics). */
  keywords?: string;
};

export const RESOURCE_CATEGORIES: { id: ResourceCategory; label: string }[] = [
  { id: "national", label: "National (India)" },
  { id: "international", label: "International" },
  { id: "treaties", label: "Treaties" },
];

export const RESOURCES: Resource[] = [
  // National (India)
  {
    id: "tkdl",
    title: "TKDL",
    description: "Search traditional knowledge database",
    category: "national",
    icon: "document",
    url: "https://www.tkdl.res.in",
    keywords: "traditional knowledge digital library prior art csir ayush",
  },
  {
    id: "ipo",
    title: "Indian Patent Search (IPO)",
    description: "Search patents, applications and status",
    category: "national",
    icon: "patent",
    url: "https://iprsearch.ipindia.gov.in/PublicSearch/",
    keywords: "patent office ip india inpass application status",
  },
  {
    id: "gi",
    title: "GI Registry",
    description: "Search registered Geographical Indications",
    category: "national",
    icon: "pin",
    url: "https://search.ipindia.gov.in/GIRPublic/",
    keywords: "geographical indication gi tag chennai",
  },
  {
    id: "ayush",
    title: "AYUSH Ministry",
    description: "Policies, guidelines, forms",
    category: "national",
    icon: "ministry",
    url: "https://ayush.gov.in",
    keywords: "ministry of ayush government policy licence",
  },
  {
    id: "nba",
    title: "Biological Diversity Authority",
    description: "ABS forms and guidance",
    category: "national",
    icon: "botanical",
    url: "http://nbaindia.org",
    keywords: "nba national biodiversity authority access benefit sharing abs",
  },
  {
    id: "fssai",
    title: "FSSAI (Ayurveda-Aahaar)",
    description: "Regulations and standards",
    category: "national",
    icon: "fssai",
    url: "https://www.fssai.gov.in",
    keywords: "food safety ayurveda aahar nutraceutical",
  },

  // International
  {
    id: "patentscope",
    title: "WIPO PATENTSCOPE",
    description: "Search international PCT applications",
    category: "international",
    icon: "globe",
    url: "https://patentscope.wipo.int",
    keywords: "wipo pct world patent search",
  },
  {
    id: "espacenet",
    title: "Espacenet (EPO)",
    description: "Search worldwide patent documents",
    category: "international",
    icon: "patent",
    url: "https://worldwide.espacenet.com",
    keywords: "european patent office epo europe",
  },
  {
    id: "uspto",
    title: "USPTO Patent Public Search",
    description: "Search US patents and applications",
    category: "international",
    icon: "patent",
    url: "https://ppubs.uspto.gov",
    keywords: "united states us patent",
  },
  {
    id: "branddb",
    title: "WIPO Global Brand Database",
    description: "Search trademarks across registries",
    category: "international",
    icon: "document",
    url: "https://branddb.wipo.int",
    keywords: "trademark brand name madrid",
  },
  {
    id: "who-tm",
    title: "WHO Traditional Medicine",
    description: "Global strategy, standards and reports",
    category: "international",
    icon: "globe",
    url: "https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine",
    keywords: "world health organization traditional complementary integrative medicine",
  },

  // Treaties
  {
    id: "cbd",
    title: "Convention on Biological Diversity",
    description: "Conservation and fair use of biodiversity",
    category: "treaties",
    icon: "scroll",
    url: "https://www.cbd.int/convention",
    keywords: "cbd biodiversity un",
  },
  {
    id: "nagoya",
    title: "Nagoya Protocol",
    description: "Access and benefit-sharing (ABS)",
    category: "treaties",
    icon: "handshake",
    url: "https://www.cbd.int/abs",
    keywords: "abs access benefit sharing genetic resources",
  },
  {
    id: "trips",
    title: "TRIPS Agreement (WTO)",
    description: "Minimum standards for IP protection",
    category: "treaties",
    icon: "scroll",
    url: "https://www.wto.org/english/tratop_e/trips_e/trips_e.htm",
    keywords: "wto trade related intellectual property",
  },
  {
    id: "pct",
    title: "Patent Cooperation Treaty",
    description: "File one application in many countries",
    category: "treaties",
    icon: "globe",
    url: "https://www.wipo.int/pct/en/",
    keywords: "pct wipo international filing",
  },
  {
    id: "wipo-tk",
    title: "WIPO Traditional Knowledge",
    description: "Genetic resources and TK treaty work",
    category: "treaties",
    icon: "botanical",
    url: "https://www.wipo.int/tk/en/",
    keywords: "igc gratk genetic resources traditional knowledge disclosure",
  },
];
