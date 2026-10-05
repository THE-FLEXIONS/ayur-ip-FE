// ─── ABS Compliance ──────────────────────────────────────────────────────────
// Access and Benefit Sharing checker for the Biological Diversity Act, 2002,
// as amended by the Biological Diversity (Amendment) Act, 2023.
//
//   s.3  Foreign persons and foreign-controlled companies need NBA approval to
//        obtain biological resources or associated knowledge.
//   s.4  Transferring research results to a foreign person needs NBA approval
//        (publishing papers and seminars are exempt).
//   s.6  Applying for an IPR based on research on Indian biological resources:
//        NBA approval / registration is needed before the IPR is granted.
//   s.7  Indian persons using biological resources for commercial utilisation
//        give prior intimation to the State Biodiversity Board. Exempt: local
//        people and communities, growers and cultivators, vaids and hakims,
//        registered AYUSH practitioners, codified traditional knowledge and
//        cultivated medicinal plants.
//   s.21 Benefit sharing as determined by the NBA / SBB.

export type Who = "indian" | "foreign-controlled" | "foreign";
export type Resource = "wild" | "cultivated" | "market" | "none";
export type Purpose = "research" | "commercial" | "ipr" | "transfer" | "biosurvey";
export type Knowledge = "none" | "codified" | "community";
export type Role = "business" | "practitioner" | "community";

export type AbsAnswers = {
  who: Who | null;
  role: Role | null;
  resource: Resource | null;
  purposes: Purpose[];
  knowledge: Knowledge | null;
};

export const EMPTY_ABS: AbsAnswers = { who: null, role: null, resource: null, purposes: [], knowledge: null };

export function isAbsComplete(a: AbsAnswers): boolean {
  return Boolean(a.who && a.role && a.resource && a.knowledge) && a.purposes.length > 0;
}

export type Level = "approval" | "intimation" | "exempt" | "none";

export type Obligation = {
  id: string;
  title: string;
  level: Level;
  authority: string;
  when: string;
  why: string;
  section: string;
};

export type AbsResult = {
  level: Level;
  headline: string;
  summary: string;
  obligations: Obligation[];
  benefitSharing: string;
  documents: string[];
  tips: string[];
};

export const LEVEL_TONE: Record<Level, "red" | "amber" | "green" | "blue"> = {
  approval: "red",
  intimation: "amber",
  exempt: "green",
  none: "blue",
};

export const LEVEL_LABEL: Record<Level, string> = {
  approval: "Prior approval",
  intimation: "Prior intimation",
  exempt: "Exempt",
  none: "Not applicable",
};

const RANK: Record<Level, number> = { approval: 3, intimation: 2, exempt: 1, none: 0 };

/** Works out what the Act requires. Call only when isAbsComplete(answers). */
export function assessAbs(a: AbsAnswers): AbsResult {
  const foreign = a.who !== "indian";
  const usesResource = a.resource !== "none";
  const has = (p: Purpose) => a.purposes.includes(p);
  const obligations: Obligation[] = [];

  // Access by foreign persons (s.3)
  if (foreign && (usesResource || a.knowledge !== "none") && (has("research") || has("commercial") || has("biosurvey"))) {
    obligations.push({
      id: "access",
      title: "Approval to access biological resources",
      level: "approval",
      authority: "National Biodiversity Authority (NBA)",
      when: "Before you collect, buy or use the resource or knowledge",
      why:
        a.who === "foreign-controlled"
          ? "An Indian-registered company controlled by foreign shareholders is treated like a foreign person under the 2023 amendment."
          : "Foreign nationals, NRIs and foreign companies need the NBA's approval for research, commercial use or bio-survey.",
      section: "Section 3",
    });
  }

  // Commercial use by Indians (s.7)
  if (!foreign && usesResource && (has("commercial") || has("biosurvey"))) {
    const exemptReason =
      a.role === "practitioner"
        ? "Vaids, hakims and registered AYUSH practitioners practising indigenous medicine are exempt."
        : a.role === "community"
          ? "Local people, communities, growers and cultivators are exempt."
          : a.resource === "cultivated"
            ? "Cultivated medicinal plants and their products are exempt. Keep cultivation or purchase records that prove the source."
            : null;
    obligations.push({
      id: "intimation",
      title: "Prior intimation for commercial utilisation",
      level: exemptReason ? "exempt" : "intimation",
      authority: "State Biodiversity Board (SBB) of the state where you source",
      when: "Before commercial use or bio-utilisation begins",
      why:
        exemptReason ??
        (a.resource === "market"
          ? "Raw material bought from traders whose origin you can't show counts as a biological resource. Intimate the SBB, or switch to traceable cultivated supply."
          : "Indian businesses using wild-collected biological resources for commercial products must inform the SBB first."),
      section: "Section 7",
    });
  }

  // Research by Indians: no permission, but collaborations abroad differ.
  if (!foreign && has("research") && !has("commercial")) {
    obligations.push({
      id: "research",
      title: "Research by Indian researchers",
      level: "none",
      authority: "None",
      when: "N/A",
      why: "Indian citizens and entities don't need approval for research. Government-approved collaborative projects with foreign institutions follow separate central guidelines.",
      section: "Sections 3 and 5",
    });
  }

  // IPR (s.6)
  if (has("ipr")) {
    obligations.push({
      id: "ipr",
      title: "NBA clearance for an IP application",
      level: usesResource || a.knowledge !== "none" ? "approval" : "none",
      authority: "National Biodiversity Authority (NBA)",
      when: "You can file the application first; clearance is needed before the IPR is granted",
      why:
        usesResource || a.knowledge !== "none"
          ? foreign
            ? "Foreign applicants need NBA approval before grant for inventions based on Indian biological resources or associated knowledge."
            : "Indian applicants register with the NBA before grant for inventions based on Indian biological resources or associated knowledge."
          : "No biological resource or associated knowledge is involved.",
      section: "Section 6",
    });
  }

  // Transfer of results (s.4)
  if (has("transfer")) {
    obligations.push({
      id: "transfer",
      title: "Transfer of research results abroad",
      level: "approval",
      authority: "National Biodiversity Authority (NBA)",
      when: "Before sharing results, samples or data with a foreign person or company",
      why: "Results of research on Indian biological resources can't be transferred to foreign persons for money or otherwise without approval. Publishing in journals and presenting at seminars is exempt.",
      section: "Section 4",
    });
  }

  if (obligations.length === 0) {
    obligations.push({
      id: "na",
      title: "No ABS obligation found",
      level: "none",
      authority: "None",
      when: "N/A",
      why: "Your activity doesn't involve accessing Indian biological resources or associated knowledge in a way the Act regulates.",
      section: "—",
    });
  }

  const level = obligations.reduce<Level>((max, o) => (RANK[o.level] > RANK[max] ? o.level : max), "none");

  const sharesBenefits = obligations.some((o) => o.level === "approval" || o.level === "intimation") && (has("commercial") || has("ipr") || has("transfer") || foreign);
  const benefitSharing = sharesBenefits
    ? "Expect a benefit-sharing agreement: usually a share of the sale price or royalties, set by the NBA or SBB, paid to the Biodiversity Fund and passed on to the communities that conserve the resource."
    : a.knowledge === "community"
      ? "Even where no approval is needed, agree benefit sharing with the knowledge holders and record their prior informed consent."
      : "No benefit sharing is triggered by the activities you selected.";

  const documents = [
    ...(usesResource ? ["Scientific and common name of each biological resource", "Place of collection, quantity and season", "Source records: cultivation records, farmer receipts or supplier invoices"] : []),
    ...(level === "approval" || level === "intimation" ? ["Purpose and nature of use, with a short project or product description", "Proposed benefit-sharing terms"] : []),
    ...(has("ipr") ? ["Copy of the patent application and its abstract", "How the invention uses the biological resource or knowledge"] : []),
    ...(has("transfer") ? ["Details of the foreign recipient and what will be transferred"] : []),
    ...(a.knowledge === "community" ? ["Prior informed consent from the knowledge holders or Biodiversity Management Committee"] : []),
    ...(a.who !== "indian" ? ["Certificate of incorporation and shareholding (to show foreign control)"] : []),
  ];

  const tips = [
    "Apply through the NBA's online portal (nbaindia.org); SBB intimations go to the board of the sourcing state.",
    ...(a.resource === "market" ? ["Move to traceable, cultivated supply where possible: it simplifies compliance and may make you exempt."] : []),
    ...(a.knowledge === "codified" ? ["Codified knowledge from classical texts is exempt from the commercial-use intimation, but not from the IPR clearance."] : []),
    ...(has("ipr") ? ["Mention the source and geographical origin of the biological material in your patent specification (Patents Act s.10(4))."] : []),
  ];

  const headline =
    level === "approval"
      ? "NBA approval needed"
      : level === "intimation"
        ? "Inform your State Biodiversity Board"
        : level === "exempt"
          ? "You're exempt from prior intimation"
          : "No ABS approval needed";

  const summary =
    level === "approval"
      ? "At least one of your activities needs prior approval from the National Biodiversity Authority. Start early: approvals can take several months."
      : level === "intimation"
        ? "You don't need approval, but you must give prior intimation to the State Biodiversity Board before commercial use, and benefit sharing may apply."
        : level === "exempt"
          ? "Your situation falls within an exemption under Section 7. Keep records that show why you're exempt."
          : "Based on your answers, the Biological Diversity Act doesn't require approval or intimation for this activity.";

  return { level, headline, summary, obligations, benefitSharing, documents, tips };
}

export function absReport(a: AbsAnswers, r: AbsResult): string {
  const lines = [
    "AyurIP · ABS Compliance Check",
    "=".repeat(29),
    `Who: ${a.who} · Role: ${a.role} · Resource: ${a.resource} · Knowledge: ${a.knowledge}`,
    `Activities: ${a.purposes.join(", ")}`,
    "",
    `RESULT: ${r.headline}`,
    r.summary,
    "",
    "Obligations:",
    ...r.obligations.map((o) => `  [${LEVEL_LABEL[o.level]}] ${o.title} (${o.section})\n     Authority: ${o.authority}\n     When: ${o.when}\n     Why: ${o.why}`),
    "",
    `Benefit sharing: ${r.benefitSharing}`,
  ];
  if (r.documents.length) lines.push("", "Documents to prepare:", ...r.documents.map((d) => `  - ${d}`));
  if (r.tips.length) lines.push("", "Tips:", ...r.tips.map((d) => `  - ${d}`));
  lines.push("", "Based on the Biological Diversity Act, 2002 as amended in 2023. Guidance only, not legal advice; confirm with the NBA or your SBB.");
  return lines.join("\n");
}
