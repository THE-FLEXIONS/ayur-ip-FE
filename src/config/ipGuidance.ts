// ─── IP Guidance ─────────────────────────────────────────────────────────────
// Recommends the forms of IP protection that fit an Ayurvedic innovation and
// what each involves in India. Fees are indicative official e-filing fees
// (verify on ipindia.gov.in before filing); they change with fee revisions.
//
// Sources: Patents Act, 1970 (s.3(e), s.3(p), s.29–31) and Patents Rules, 2003
// as amended in 2024 (request for examination within 31 months); Trade Marks
// Act, 1999; Geographical Indications of Goods Act, 1999; Designs Act, 2000;
// Copyright Act, 1957; Biological Diversity Act, 2002 (s.6).

export type Asset = "formulation" | "process" | "brand" | "origin" | "design" | "content" | "tk";
export type Disclosure = "no" | "yes" | "unsure";
export type ClassicalBasis = "no" | "partly" | "yes";
export type Applicant = "individual" | "startup" | "small" | "large" | "group";
export type Market = "india" | "global";

export type IpAnswers = {
  assets: Asset[];
  disclosed: Disclosure | null;
  classical: ClassicalBasis | null;
  applicant: Applicant | null;
  market: Market | null;
};

export const EMPTY_IP_ANSWERS: IpAnswers = { assets: [], disclosed: null, classical: null, applicant: null, market: null };

export const ASSET_OPTIONS: { value: Asset; label: string; hint: string }[] = [
  { value: "formulation", label: "A new formulation", hint: "A composition of herbs or extracts" },
  { value: "process", label: "A process or method", hint: "Extraction, standardisation, manufacture" },
  { value: "brand", label: "A brand name or logo", hint: "Product or company name" },
  { value: "origin", label: "A product from a specific region", hint: "Quality tied to where it's made" },
  { value: "design", label: "Packaging or product shape", hint: "How the product looks" },
  { value: "content", label: "Content, software or data", hint: "Books, apps, databases, images" },
  { value: "tk", label: "Community traditional knowledge", hint: "Practices held by a community" },
];

export const APPLICANT_OPTIONS: { value: Applicant; label: string; hint: string }[] = [
  { value: "individual", label: "Individual inventor", hint: "Natural person" },
  { value: "startup", label: "DPIIT-recognised startup", hint: "Reduced fees, fast-track options" },
  { value: "small", label: "Small entity / MSME", hint: "Registered under the MSMED Act" },
  { value: "large", label: "Company or institution", hint: "Any other legal entity" },
  { value: "group", label: "Producer group or community", hint: "Association, cooperative, FPO" },
];

export function isIpComplete(a: IpAnswers): boolean {
  return a.assets.length > 0 && Boolean(a.disclosed && a.classical && a.applicant && a.market);
}

export type Fit = "strong" | "possible" | "unsuitable";

export type IpRoute = {
  id: string;
  name: string;
  fit: Fit;
  fitNote: string;
  protects: string;
  term: string;
  fee: string;
  timeline: string;
  law: string;
  steps: string[];
  watchOuts: string[];
  portal: { label: string; url: string };
};

type FeeBand = "low" | "mid" | "high";

function feeBand(applicant: Applicant): FeeBand {
  if (applicant === "individual" || applicant === "startup") return "low";
  if (applicant === "small" || applicant === "group") return "mid";
  return "high";
}

const PATENT_FEES: Record<FeeBand, string> = {
  low: "₹1,600 to file + ₹4,000 to request examination",
  mid: "₹4,000 to file + ₹10,000 to request examination",
  high: "₹8,000 to file + ₹20,000 to request examination",
};

const TRADEMARK_FEE: Record<FeeBand, string> = {
  low: "₹4,500 per class",
  mid: "₹4,500 per class",
  high: "₹9,000 per class",
};

const DESIGN_FEE: Record<FeeBand, string> = {
  low: "₹1,000",
  mid: "₹2,000",
  high: "₹4,000",
};

const FIT_ORDER: Record<Fit, number> = { strong: 0, possible: 1, unsuitable: 2 };

/** Ranks the IP routes that apply to the answers. Call only when isIpComplete(answers). */
export function recommend(a: IpAnswers): IpRoute[] {
  const band = feeBand(a.applicant!);
  const routes: IpRoute[] = [];
  const has = (asset: Asset) => a.assets.includes(asset);
  const global = a.market === "global";

  if (has("formulation") || has("process")) {
    let fit: Fit = "strong";
    let fitNote = "New, inventive and industrially applicable inventions can be patented.";
    if (a.classical === "yes") {
      fit = "unsuitable";
      fitNote = "Knowledge already in classical texts or TKDL is traditional knowledge and is not an invention (s.3(p)).";
    } else if (a.disclosed === "yes") {
      fit = "unsuitable";
      fitNote = "Public sale or publication before filing usually destroys novelty. India's grace exceptions (s.29–31) are narrow.";
    } else if (a.classical === "partly" || a.disclosed === "unsure") {
      fit = "possible";
      fitNote =
        a.classical === "partly"
          ? "Only the genuinely new part can be claimed, and a mere mixture of known herbs is excluded (s.3(e)) unless it shows synergy."
          : "Check whether anything was shown publicly before you file; if not, you can still patent it.";
    }
    routes.push({
      id: "patent",
      name: "Patent",
      fit,
      fitNote,
      protects: has("process") && !has("formulation") ? "Your process or method" : "Your formulation (and process, if claimed)",
      term: "20 years from filing",
      fee: PATENT_FEES[band],
      timeline: "Typically 2–5 years to grant; faster with expedited examination",
      law: "Patents Act, 1970",
      steps: [
        "Search prior art in TKDL, InPASS (Indian patents) and Google Patents.",
        "File a provisional specification (Form 1 + Form 2) to secure the priority date.",
        "File the complete specification within 12 months.",
        "Request examination (Form 18) within 31 months of priority. Startups and small entities can opt for expedited examination (Form 18A).",
        "Reply to the First Examination Report within 6 months (extendable by 3).",
        "Grant, then pay annual renewal fees from the third year.",
        ...(global ? ["For other countries, file a PCT application within 12 months of the Indian filing."] : []),
      ],
      watchOuts: [
        "Keep it confidential until you file: no papers, talks, trade fairs or online listings.",
        "Claims on a plant extract need data showing a technical effect, not just a known use.",
        "If the invention uses Indian biological resources, NBA approval is needed before the patent is granted (see ABS Compliance).",
      ],
      portal: { label: "ipindia.gov.in", url: "https://ipindia.gov.in" },
    });
  }

  if (has("process") || has("formulation")) {
    routes.push({
      id: "trade-secret",
      name: "Trade secret",
      fit: "possible",
      fitNote: "No registration: protection lasts as long as the know-how stays confidential.",
      protects: "Manufacturing know-how that competitors can't learn from the product",
      term: "As long as it stays secret",
      fee: "No official fee",
      timeline: "Immediate",
      law: "Contract law and equity (India has no trade-secret statute)",
      steps: [
        "Write down exactly what the secret is and who knows it.",
        "Sign NDAs with employees, contract manufacturers and partners.",
        "Restrict access to batch records and process documents.",
      ],
      watchOuts: ["Lost the moment it leaks or is reverse-engineered: a patent is safer if the product reveals the formula."],
      portal: { label: "Startup India IP support", url: "https://www.startupindia.gov.in" },
    });
  }

  if (has("brand")) {
    routes.push({
      id: "trademark",
      name: "Trademark",
      fit: "strong",
      fitNote: "The most valuable protection for most Ayurvedic businesses: classical formulas are free to all, your brand is not.",
      protects: "Product or company name, logo and tagline",
      term: "10 years, renewable indefinitely",
      fee: TRADEMARK_FEE[band],
      timeline: "About 6–18 months if unopposed",
      law: "Trade Marks Act, 1999",
      steps: [
        "Run a public search on the IP India trademark search for similar marks.",
        "Pick your classes: Class 5 (Ayurvedic medicines, supplements), Class 3 (cosmetics), Class 30/29 (foods), Class 44 (clinics).",
        "File Form TM-A online.",
        "Reply to the examination report if objections are raised.",
        "After acceptance it is advertised in the Trade Marks Journal; anyone may oppose within 4 months.",
        "Registration certificate issued; use the ® symbol.",
        ...(global ? ["Extend abroad through the Madrid Protocol, filed via IP India."] : []),
      ],
      watchOuts: [
        "Descriptive names (e.g. 'Ashwagandha Capsules') can't be registered: choose a distinctive name.",
        "Classical drug names must stay as in the books; register your brand alongside them.",
      ],
      portal: { label: "IP India trademark e-filing", url: "https://ipindia.gov.in" },
    });
  }

  if (has("origin")) {
    const group = a.applicant === "group";
    routes.push({
      id: "gi",
      name: "Geographical Indication (GI)",
      fit: group ? "strong" : "possible",
      fitNote: group
        ? "Your group can register the GI for all producers of the region."
        : "A GI is registered by an association of producers; you can then join as an authorised user.",
      protects: "A product whose quality or reputation comes from its region",
      term: "10 years, renewable indefinitely",
      fee: "₹5,000 per class to apply",
      timeline: "Often 1–3 years",
      law: "Geographical Indications of Goods (Registration and Protection) Act, 1999",
      steps: [
        "Form or join an association of producers from the region.",
        "Document the history, the production method and why the region gives the product its qualities, with a map of the area.",
        "File Form GI-1 with the GI Registry, Chennai.",
        "Examination, then review by a consultative group of experts.",
        "Advertised in the GI Journal; open to opposition for 3 months.",
        "Registration; individual producers then register as authorised users.",
      ],
      watchOuts: ["Generic names (used everywhere for a type of product) can't be registered as a GI."],
      portal: { label: "IP India · GI Registry", url: "https://ipindia.gov.in" },
    });
  }

  if (has("design")) {
    routes.push({
      id: "design",
      name: "Industrial design",
      fit: a.disclosed === "yes" ? "unsuitable" : "strong",
      fitNote: a.disclosed === "yes" ? "A design must be new when filed; one already on sale has usually lost novelty." : "New shapes and patterns of bottles, jars or products qualify.",
      protects: "The shape, pattern or ornamentation of packaging or a product",
      term: "10 years, extendable by 5",
      fee: DESIGN_FEE[band],
      timeline: "Usually 6–12 months",
      law: "Designs Act, 2000",
      steps: [
        "Check the Designs database for similar registered designs.",
        "Prepare drawings or photos from all views.",
        "File Form 1 with the Patent Office (Kolkata) online, choosing the Locarno class.",
        "Reply to any objections; the design is registered and published.",
      ],
      watchOuts: ["Labels and logos are protected by trademark or copyright, not design."],
      portal: { label: "ipindia.gov.in", url: "https://ipindia.gov.in" },
    });
  }

  if (has("content")) {
    routes.push({
      id: "copyright",
      name: "Copyright",
      fit: "strong",
      fitNote: "Protection is automatic; registering gives you evidence in a dispute.",
      protects: "Books, monographs, label artwork, photos, software code and databases",
      term: "Author's lifetime + 60 years",
      fee: "₹500 per literary or software work",
      timeline: "A few months to register",
      law: "Copyright Act, 1957",
      steps: ["Keep dated drafts and source files.", "Register online with the Copyright Office (Form XIV).", "Add a © notice to published work."],
      watchOuts: ["Copyright covers the expression, not the underlying formula or idea."],
      portal: { label: "copyright.gov.in", url: "https://copyright.gov.in" },
    });
  }

  if (has("tk")) {
    routes.push({
      id: "tk",
      name: "Defensive protection of traditional knowledge",
      fit: "strong",
      fitNote: "Community knowledge can't be patented by anyone, so the aim is to document it and secure benefit sharing.",
      protects: "Community practices and knowledge against misappropriation",
      term: "Ongoing",
      fee: "No fee",
      timeline: "Ongoing",
      law: "Biological Diversity Act, 2002 · Patents Act, 1970 s.3(p)",
      steps: [
        "Record the knowledge in the People's Biodiversity Register through the local Biodiversity Management Committee.",
        "Anyone commercialising it must share benefits with the community (via the NBA or State Biodiversity Board).",
        "Codified knowledge from classical texts is already covered by TKDL, which patent offices search.",
        "If the product is tied to the region, consider a GI held by the community.",
      ],
      watchOuts: ["Get prior informed consent before using a community's knowledge in a product or patent."],
      portal: { label: "National Biodiversity Authority", url: "https://nbaindia.org" },
    });
  }

  return routes.sort((x, y) => FIT_ORDER[x.fit] - FIT_ORDER[y.fit]);
}

export const FIT_LABEL: Record<Fit, string> = { strong: "Strong fit", possible: "Possible", unsuitable: "Not suitable" };
export const FIT_TONE: Record<Fit, "green" | "amber" | "red"> = { strong: "green", possible: "amber", unsuitable: "red" };

/** Patent journey shown when a patent is recommended. */
export const PATENT_TIMELINE = [
  { at: "Day 0", label: "Provisional filing", note: "Priority date secured" },
  { at: "12 months", label: "Complete specification", note: "And PCT, if going abroad" },
  { at: "18 months", label: "Publication", note: "Earlier on request (Form 9)" },
  { at: "≤ 31 months", label: "Request examination", note: "Form 18 / 18A" },
  { at: "+ 6 months", label: "Reply to the FER", note: "Extendable by 3 months" },
  { at: "Grant", label: "Patent granted", note: "Protected for 20 years from filing" },
];

export function ipReport(a: IpAnswers, routes: IpRoute[]): string {
  const lines = [
    "AyurIP · IP Protection Plan",
    "=".repeat(27),
    `Protecting: ${a.assets.map((x) => ASSET_OPTIONS.find((o) => o.value === x)?.label).join("; ")}`,
    `Already public: ${a.disclosed} · From classical texts: ${a.classical} · Applicant: ${APPLICANT_OPTIONS.find((o) => o.value === a.applicant)?.label} · Market: ${a.market === "global" ? "India and abroad" : "India"}`,
    "",
  ];
  for (const r of routes) {
    lines.push(`${r.name.toUpperCase()} (${FIT_LABEL[r.fit]})`, `  ${r.fitNote}`, `  Protects: ${r.protects}`, `  Term: ${r.term} · Fee: ${r.fee} · Timeline: ${r.timeline}`, `  Law: ${r.law}`, "  Steps:");
    r.steps.forEach((s, i) => lines.push(`    ${i + 1}. ${s}`));
    if (r.watchOuts.length) lines.push("  Watch out:", ...r.watchOuts.map((w) => `    ! ${w}`));
    lines.push("");
  }
  lines.push("Fees are indicative official e-filing fees; verify on ipindia.gov.in. Not legal advice; consult a registered patent or trademark agent.");
  return lines.join("\n");
}
