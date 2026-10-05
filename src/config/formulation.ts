// ─── Formulation Classifier ──────────────────────────────────────────────────
// Rules that place an Ayurvedic product in its regulatory category under
// Indian law. Indicative guidance only: the UI says so, and the AI hand-off
// asks for a cited review.
//
// Sources the rules follow:
//   Drugs and Cosmetics Act, 1940: s.3(a) ASU drug, s.3(h) patent or
//     proprietary medicine, First Schedule (authoritative books).
//   Drugs Rules, 1945: Rule 158-B (licensing conditions for ASU drugs),
//     Rule 161 (labelling), Schedule E(1) (poisonous substances), Schedule T (GMP),
//     Forms 24-D / 25-D (manufacturing licence).
//   Cosmetics Rules, 2020. FSS (Ayurveda Aahara) Regulations, 2022. FSSAI
//     nutraceutical / health-supplement regulations. Patents Act, 1970 s.3(e), s.3(p).

export type DosageForm =
  | "churna"
  | "vati"
  | "kwatha"
  | "asava"
  | "avaleha"
  | "ghrita"
  | "taila"
  | "bhasma"
  | "capsule"
  | "syrup"
  | "cream"
  | "food";

export type SourceBasis = "exact" | "modified" | "none";
export type IntendedUse = "therapeutic" | "supplement" | "cosmetic" | "food";
export type IngredientKind = "herb" | "mineral" | "animal" | "nutrient" | "synthetic" | "allopathic" | "excipient";

export type Ingredient = {
  name: string;
  kind: IngredientKind;
  /** Listed in Schedule E(1) of the Drugs Rules (poisonous substances). */
  scheduleE1?: boolean;
  /** Metal or mineral preparation that needs heavy-metal testing. */
  metal?: boolean;
};

export const DOSAGE_FORMS: { value: DosageForm; label: string; hint: string; topical?: boolean }[] = [
  { value: "churna", label: "Churna", hint: "Powder" },
  { value: "vati", label: "Vati / Gutika", hint: "Tablet or pill" },
  { value: "kwatha", label: "Kwatha", hint: "Decoction" },
  { value: "asava", label: "Asava / Arishta", hint: "Fermented liquid" },
  { value: "avaleha", label: "Avaleha / Lehya", hint: "Semi-solid jam" },
  { value: "ghrita", label: "Ghrita", hint: "Medicated ghee" },
  { value: "taila", label: "Taila", hint: "Medicated oil", topical: true },
  { value: "bhasma", label: "Bhasma / Rasa", hint: "Mineral preparation" },
  { value: "capsule", label: "Capsule", hint: "Modern dosage form" },
  { value: "syrup", label: "Syrup", hint: "Modern dosage form" },
  { value: "cream", label: "Cream / Gel / Serum", hint: "Topical", topical: true },
  { value: "food", label: "Food / Beverage", hint: "Tea, bar, drink mix" },
];

export const AUTHORITATIVE_BOOKS = [
  "Charaka Samhita",
  "Sushruta Samhita",
  "Ashtanga Hridaya",
  "Ashtanga Sangraha",
  "Sharangadhara Samhita",
  "Bhaishajya Ratnavali",
  "Bhavaprakasha",
  "Chakradatta",
  "Yogaratnakara",
  "Rasa Ratna Samuchchaya",
  "Rasatarangini",
  "Sahasrayoga",
] as const;

export const INGREDIENTS: Ingredient[] = [
  // Herbs
  { name: "Ashwagandha (Withania somnifera)", kind: "herb" },
  { name: "Amalaki (Phyllanthus emblica)", kind: "herb" },
  { name: "Haritaki (Terminalia chebula)", kind: "herb" },
  { name: "Bibhitaki (Terminalia bellirica)", kind: "herb" },
  { name: "Haridra / Turmeric (Curcuma longa)", kind: "herb" },
  { name: "Tulsi (Ocimum sanctum)", kind: "herb" },
  { name: "Neem (Azadirachta indica)", kind: "herb" },
  { name: "Brahmi (Bacopa monnieri)", kind: "herb" },
  { name: "Guduchi (Tinospora cordifolia)", kind: "herb" },
  { name: "Shatavari (Asparagus racemosus)", kind: "herb" },
  { name: "Yashtimadhu (Glycyrrhiza glabra)", kind: "herb" },
  { name: "Pippali (Piper longum)", kind: "herb" },
  { name: "Shunthi / Ginger (Zingiber officinale)", kind: "herb" },
  { name: "Maricha / Black pepper (Piper nigrum)", kind: "herb" },
  { name: "Manjishtha (Rubia cordifolia)", kind: "herb" },
  { name: "Arjuna (Terminalia arjuna)", kind: "herb" },
  { name: "Guggulu (Commiphora wightii)", kind: "herb" },
  { name: "Kumkuma / Saffron (Crocus sativus)", kind: "herb" },
  { name: "Chandana / Sandalwood (Santalum album)", kind: "herb" },
  { name: "Bhringraj (Eclipta alba)", kind: "herb" },
  { name: "Punarnava (Boerhavia diffusa)", kind: "herb" },
  { name: "Gokshura (Tribulus terrestris)", kind: "herb" },
  { name: "Til taila / Sesame oil", kind: "herb" },
  // Poisonous plants (Schedule E(1))
  { name: "Vatsanabha (Aconitum ferox)", kind: "herb", scheduleE1: true },
  { name: "Bhallataka (Semecarpus anacardium)", kind: "herb", scheduleE1: true },
  { name: "Kuchala (Strychnos nux-vomica)", kind: "herb", scheduleE1: true },
  { name: "Dhattura (Datura metel)", kind: "herb", scheduleE1: true },
  { name: "Gunja (Abrus precatorius)", kind: "herb", scheduleE1: true },
  // Minerals and metals
  { name: "Shilajit (Asphaltum)", kind: "mineral" },
  { name: "Gandhaka / Sulphur", kind: "mineral" },
  { name: "Swarna bhasma (gold)", kind: "mineral", metal: true },
  { name: "Abhraka bhasma (mica)", kind: "mineral", metal: true },
  { name: "Loha bhasma (iron)", kind: "mineral", metal: true },
  { name: "Parada (mercury)", kind: "mineral", metal: true, scheduleE1: true },
  { name: "Hingula / Rasa sindura (mercury sulphide)", kind: "mineral", metal: true, scheduleE1: true },
  { name: "Hartala (arsenic trisulphide)", kind: "mineral", metal: true, scheduleE1: true },
  // Animal origin
  { name: "Goghrita / Cow ghee", kind: "animal" },
  { name: "Madhu / Honey", kind: "animal" },
  // Modern nutrients
  { name: "Vitamin C (ascorbic acid)", kind: "nutrient" },
  { name: "Vitamin D3", kind: "nutrient" },
  { name: "Zinc", kind: "nutrient" },
  // Synthetic cosmetic ingredients
  { name: "Synthetic fragrance", kind: "synthetic" },
  { name: "Hyaluronic acid", kind: "synthetic" },
  { name: "Parabens (preservative)", kind: "synthetic" },
  // Modern (allopathic) drugs
  { name: "Paracetamol", kind: "allopathic" },
  { name: "Dexamethasone (steroid)", kind: "allopathic" },
  // Excipients
  { name: "Sugar / Jaggery", kind: "excipient" },
  { name: "Gum acacia (binder)", kind: "excipient" },
  { name: "Microcrystalline cellulose", kind: "excipient" },
];

export const KIND_LABELS: Record<IngredientKind, string> = {
  herb: "Plant",
  mineral: "Mineral",
  animal: "Animal origin",
  nutrient: "Nutrient",
  synthetic: "Synthetic",
  allopathic: "Modern drug",
  excipient: "Excipient",
};

export function findIngredient(name: string): Ingredient {
  return INGREDIENTS.find((i) => i.name === name) ?? { name, kind: "herb" };
}

export type FormulationInput = {
  productName: string;
  dosageForm: DosageForm | null;
  ingredients: string[];
  basis: SourceBasis | null;
  book: string;
  use: IntendedUse | null;
};

export const EMPTY_FORMULATION: FormulationInput = {
  productName: "",
  dosageForm: null,
  ingredients: [],
  basis: null,
  book: "",
  use: null,
};

export type Classification = {
  tone: "green" | "amber" | "red" | "blue";
  category: string;
  summary: string;
  confidence: "High" | "Medium" | "Low";
  regulator: string;
  route: string;
  law: string;
  requirements: string[];
  labelling: string[];
  flags: string[];
  ipOutlook: string[];
};

export function isComplete(input: FormulationInput): boolean {
  return Boolean(input.dosageForm && input.ingredients.length > 0 && input.basis && input.use);
}

/** Places a product in its regulatory category. Call only when isComplete(input). */
export function classify(input: FormulationInput): Classification {
  const items = input.ingredients.map(findIngredient);
  const has = (kind: IngredientKind) => items.some((i) => i.kind === kind);
  const e1 = items.filter((i) => i.scheduleE1);
  const metals = items.filter((i) => i.metal);
  const form = DOSAGE_FORMS.find((f) => f.value === input.dosageForm);
  const book = input.book || "an authoritative book in the First Schedule";

  const flags: string[] = [];
  if (e1.length) {
    flags.push(
      `${e1.map((i) => i.name.split(" (")[0]).join(", ")} ${e1.length > 1 ? "are" : "is"} listed in Schedule E(1). The label must carry "Caution: To be taken under medical supervision" in English and Hindi (Rule 161(2)).`,
    );
  }
  if (metals.length) {
    flags.push("Contains a metal or mineral preparation: test every batch for heavy metals (lead, mercury, arsenic, cadmium) against Ayurvedic Pharmacopoeia limits. Export consignments need these test reports.");
  }
  if (has("animal")) flags.push("Contains ingredients of animal origin: declare them on the label and check the market's vegetarian-mark rules if sold as food.");

  // Modern drugs make the product something other than an Ayurvedic one, whatever the claim.
  if (has("allopathic")) {
    return {
      tone: "red",
      category: "Not permitted as an Ayurvedic product",
      summary:
        "It contains a modern (allopathic) drug. An ASU drug may only contain ingredients described in the authoritative books, so this combination would be treated as a new drug and reviewed by the central regulator.",
      confidence: "High",
      regulator: "CDSCO (Central Drugs Standard Control Organisation)",
      route: "New drug approval under the New Drugs and Clinical Trials Rules, 2019",
      law: "Drugs and Cosmetics Act, 1940, s.3(a) and s.3(h)",
      requirements: [
        "Remove the modern drug to stay within the Ayurvedic category, or",
        "Seek new-drug approval from CDSCO with clinical evidence for the combination.",
        "Never label or market the product as Ayurvedic while it contains a modern drug: this is treated as adulteration.",
      ],
      labelling: [],
      flags,
      ipOutlook: ["A novel fixed-dose combination may be patentable only if it shows a synergistic effect beyond the sum of its parts (Patents Act s.3(e))."],
    };
  }

  if (input.use === "cosmetic") {
    return {
      tone: "blue",
      category: "Cosmetic (herbal / Ayurvedic positioning)",
      summary: `A ${form?.label.toLowerCase() ?? "product"} meant to cleanse, beautify or improve appearance is a cosmetic. You may describe Ayurvedic ingredients, but any claim to treat or cure a condition would make it an ASU drug instead.`,
      confidence: form?.topical ? "High" : "Medium",
      regulator: "State Licensing Authority (manufacture); CDSCO for imports",
      route: "Cosmetic manufacturing licence under the Cosmetics Rules, 2020",
      law: "Drugs and Cosmetics Act, 1940, s.3(aaa) · Cosmetics Rules, 2020",
      requirements: [
        "Manufacturing licence from the State Licensing Authority for the premises.",
        "Ingredients must meet BIS standards for cosmetics; banned substances (e.g. mercury, lead compounds) are not allowed.",
        "Keep claims cosmetic: 'nourishes', 'brightens'. Avoid 'treats acne', 'cures eczema'.",
        ...(has("synthetic") ? ["Synthetic ingredients are allowed in cosmetics; list them by INCI name."] : []),
      ],
      labelling: ["Product name and use", "Full ingredient list (INCI names)", "Batch number, manufacturing and expiry dates", "Manufacturer name, address and licence number", "Net quantity"],
      flags: [...flags, ...(metals.length ? ["Metal bhasmas are not permitted in cosmetics."] : [])],
      ipOutlook: [
        "Brand name and logo: register a trademark in Class 3 (cosmetics).",
        "Bottle or jar shape: can be registered as an industrial design if new.",
        "Classical oil recipes (e.g. Kumkumadi taila) are prior art and cannot be patented.",
      ],
    };
  }

  if (input.use === "food") {
    const classicalFood = !has("nutrient") && !has("synthetic") && input.basis !== "none";
    return {
      tone: "blue",
      category: classicalFood ? "Ayurveda Aahara (food)" : "Food / nutraceutical product",
      summary: classicalFood
        ? "A food prepared from recipes or ingredients in the authoritative Ayurvedic books, eaten as food, falls under the Ayurveda Aahara category regulated by FSSAI."
        : "A food product with added nutrients or non-classical ingredients is regulated as a general food or nutraceutical by FSSAI.",
      confidence: classicalFood ? "High" : "Medium",
      regulator: "FSSAI (Food Safety and Standards Authority of India)",
      route: "FSSAI licence and product category approval",
      law: classicalFood ? "FSS (Ayurveda Aahara) Regulations, 2022" : "Food Safety and Standards Act, 2006 and FSSAI nutraceutical regulations",
      requirements: [
        "FSSAI licence (central or state, by turnover) before manufacture or sale.",
        ...(classicalFood
          ? ["Cite the authoritative book and recipe the product follows.", "Ayurveda Aahara products need prior FSSAI approval before launch."]
          : ["Nutrients must stay within FSSAI's permitted daily limits."]),
        "No disease-cure claims; only approved health or nutrition claims.",
      ],
      labelling: classicalFood
        ? ["The 'Ayurveda Aahara' logo", "Purpose of consumption and the book it is based on", "The statement 'Not for medicinal use'", "Ingredients, nutrition facts, FSSAI number, veg / non-veg mark"]
        : ["Ingredients, nutrition facts and FSSAI licence number", "Veg / non-veg mark", "Allergen and advisory statements where required"],
      flags,
      ipOutlook: ["Brand: trademark in Class 30 or 29 (foods) or Class 32 (beverages).", "Recipes from classical texts are prior art; a new process may be patentable."],
    };
  }

  if (input.use === "supplement" || has("nutrient")) {
    return {
      tone: "amber",
      category: "Health supplement / nutraceutical",
      summary: has("nutrient")
        ? "Herbal ingredients combined with vitamins or minerals and sold for general well-being are regulated as a health supplement, not as an Ayurvedic drug."
        : "Herbal products sold for general well-being without therapeutic claims are regulated by FSSAI as health supplements or nutraceuticals.",
      confidence: has("nutrient") ? "High" : "Medium",
      regulator: "FSSAI (Food Safety and Standards Authority of India)",
      route: "FSSAI licence under the nutraceutical / health-supplement regulations",
      law: "Food Safety and Standards Act, 2006 · FSSAI nutraceutical regulations",
      requirements: [
        "FSSAI licence before manufacture or sale.",
        "Use only botanicals and nutrients on FSSAI's permitted lists, within the daily usage levels.",
        "No claims to diagnose, treat or cure a disease: these would make it a drug.",
        ...(input.use === "therapeutic" ? ["You chose a therapeutic use: remove the vitamins or minerals if you want to register it as an Ayurvedic medicine instead."] : []),
      ],
      labelling: [
        'The words "Health Supplement" (or the relevant category)',
        'The statement "Not for medicinal use"',
        "Recommended daily usage and advisory warnings",
        "Ingredients, nutrition information and FSSAI licence number",
      ],
      flags,
      ipOutlook: [
        "Brand: trademark in Class 5 (dietary supplements).",
        "A new combination is patentable only with proof of a synergistic effect (Patents Act s.3(e)).",
      ],
    };
  }

  // Therapeutic use: an ASU drug, classical or proprietary.
  if (has("synthetic")) {
    return {
      tone: "amber",
      category: "Not classifiable as an ASU drug yet",
      summary:
        "You want therapeutic claims, but the formula has synthetic ingredients that the authoritative books don't describe. Remove them (excipients are fine) to register it as a proprietary Ayurvedic medicine.",
      confidence: "Medium",
      regulator: "State Licensing Authority (AYUSH)",
      route: "Reformulate, then apply as a patent or proprietary medicine",
      law: "Drugs and Cosmetics Act, 1940, s.3(h)",
      requirements: ["Replace synthetic actives with ingredients described in the First Schedule books.", "Pharmaceutical excipients (binders, preservatives within limits) are permitted."],
      labelling: [],
      flags,
      ipOutlook: [],
    };
  }

  const sharedRequirements = [
    "Manufacturing licence from the State Licensing Authority (apply on Form 24-D; licence issued on Form 25-D).",
    "Manufacture under Good Manufacturing Practice (Schedule T).",
    "Raw materials and finished product must meet Ayurvedic Pharmacopoeia of India standards where they exist.",
  ];
  const sharedLabelling = [
    'The words "Ayurvedic medicine" on the label',
    "Name and quantity of every ingredient, with the part of the plant used",
    "Batch number, manufacturing date and expiry date",
    "Manufacturer name, address and licence number",
    "Dosage and directions for use",
  ];

  if (input.basis === "exact") {
    return {
      tone: "green",
      category: "Classical Ayurvedic drug",
      summary: `The formula is reproduced exactly from ${book}, so it is an Ayurvedic drug "manufactured exclusively in accordance with the formulae described in the authoritative books". It must use the classical name.`,
      confidence: "High",
      regulator: "State Licensing Authority (AYUSH)",
      route: "Manufacturing licence for a classical formulation",
      law: "Drugs and Cosmetics Act, 1940, s.3(a) · Drugs Rules, 1945, Rule 158-B",
      requirements: [
        ...sharedRequirements,
        `Submit the reference to ${book} (chapter and verse) with the licence application.`,
        "Safety studies are generally not required for classical formulations; shelf-life data is.",
      ],
      labelling: [...sharedLabelling, "The classical name exactly as in the book, with its reference"],
      flags,
      ipOutlook: [
        "The formula itself is public knowledge (and usually in TKDL): it cannot be patented (Patents Act s.3(p)).",
        "Protect the brand with a trademark in Class 5, and packaging with a design registration.",
        "A genuinely new manufacturing process for it may still be patentable.",
      ],
    };
  }

  return {
    tone: "green",
    category: "Patent or proprietary Ayurvedic medicine",
    summary:
      input.basis === "modified"
        ? "The formula is adapted from the classics, but every ingredient is described in the authoritative books. That makes it a proprietary Ayurvedic medicine, which can carry a brand name."
        : "A new combination of Ayurvedic ingredients that isn't itself in the books is a proprietary Ayurvedic medicine, provided each ingredient appears in the First Schedule books.",
    confidence: input.basis === "modified" ? "High" : "Medium",
    regulator: "State Licensing Authority (AYUSH)",
    route: "Manufacturing licence for a patent or proprietary medicine",
    law: "Drugs and Cosmetics Act, 1940, s.3(h) · Drugs Rules, 1945, Rule 158-B",
    requirements: [
      ...sharedRequirements,
      "Show that each ingredient is described in a First Schedule book (give references).",
      "Provide evidence of safety and effectiveness as Rule 158-B requires (published literature or a pilot study).",
      "Not allowed for injection (parenteral) use.",
    ],
    labelling: sharedLabelling,
    flags,
    ipOutlook: [
      "Possibly patentable if new and inventive, but a mere admixture is excluded (s.3(e)): show a synergistic effect with data.",
      "Check prior art in TKDL and patent databases before any public disclosure.",
      "If the plants come from India, NBA approval is needed before a patent is granted (see ABS Compliance).",
      "Register the brand as a trademark in Class 5.",
    ],
  };
}

export const FORMULATION_EXAMPLES: { label: string; input: FormulationInput }[] = [
  {
    label: "Triphala Churna",
    input: {
      productName: "Triphala Churna",
      dosageForm: "churna",
      ingredients: ["Amalaki (Phyllanthus emblica)", "Haritaki (Terminalia chebula)", "Bibhitaki (Terminalia bellirica)"],
      basis: "exact",
      book: "Sharangadhara Samhita",
      use: "therapeutic",
    },
  },
  {
    label: "Calm-Mind tablets",
    input: {
      productName: "Calm-Mind Vati",
      dosageForm: "vati",
      ingredients: ["Ashwagandha (Withania somnifera)", "Brahmi (Bacopa monnieri)", "Shatavari (Asparagus racemosus)", "Gum acacia (binder)"],
      basis: "modified",
      book: "Charaka Samhita",
      use: "therapeutic",
    },
  },
  {
    label: "Immunity capsule + Vitamin C",
    input: {
      productName: "ImmunoShield Capsules",
      dosageForm: "capsule",
      ingredients: ["Guduchi (Tinospora cordifolia)", "Tulsi (Ocimum sanctum)", "Amalaki (Phyllanthus emblica)", "Vitamin C (ascorbic acid)", "Zinc"],
      basis: "none",
      book: "",
      use: "supplement",
    },
  },
  {
    label: "Kumkumadi face serum",
    input: {
      productName: "Kumkumadi Glow Serum",
      dosageForm: "cream",
      ingredients: ["Kumkuma / Saffron (Crocus sativus)", "Chandana / Sandalwood (Santalum album)", "Manjishtha (Rubia cordifolia)", "Til taila / Sesame oil", "Synthetic fragrance"],
      basis: "modified",
      book: "Ashtanga Hridaya",
      use: "cosmetic",
    },
  },
  {
    label: "Rasa preparation",
    input: {
      productName: "Rasa Sindura",
      dosageForm: "bhasma",
      ingredients: ["Hingula / Rasa sindura (mercury sulphide)", "Gandhaka / Sulphur"],
      basis: "exact",
      book: "Rasatarangini",
      use: "therapeutic",
    },
  },
];

/** Plain-text report for copy / download. */
export function formulationReport(input: FormulationInput, result: Classification): string {
  const lines = [
    "AyurIP · Formulation Classification",
    "=".repeat(36),
    `Product: ${input.productName || "Untitled product"}`,
    `Dosage form: ${DOSAGE_FORMS.find((f) => f.value === input.dosageForm)?.label ?? "-"}`,
    `Ingredients: ${input.ingredients.join("; ")}`,
    `Source: ${input.basis === "exact" ? `Exact formula from ${input.book || "a classical text"}` : input.basis === "modified" ? `Adapted from ${input.book || "classical texts"}` : "New combination"}`,
    `Intended use: ${input.use}`,
    "",
    `CATEGORY: ${result.category} (confidence: ${result.confidence})`,
    result.summary,
    "",
    `Regulator: ${result.regulator}`,
    `Route: ${result.route}`,
    `Law: ${result.law}`,
    "",
    "Requirements:",
    ...result.requirements.map((r) => `  - ${r}`),
  ];
  if (result.labelling.length) lines.push("", "Label must include:", ...result.labelling.map((r) => `  - ${r}`));
  if (result.flags.length) lines.push("", "Flags:", ...result.flags.map((r) => `  ! ${r}`));
  if (result.ipOutlook.length) lines.push("", "IP outlook:", ...result.ipOutlook.map((r) => `  - ${r}`));
  lines.push("", "Indicative guidance generated by AyurIP; not legal or regulatory advice. Confirm with the State Licensing Authority / FSSAI.");
  return lines.join("\n");
}
