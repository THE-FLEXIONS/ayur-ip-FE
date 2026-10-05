// ─── Help & Support content ──────────────────────────────────────────────────

export type FaqCategory = "Getting started" | "Asking questions" | "Tools" | "Account & data" | "Accuracy & legal";

export type Faq = { q: string; a: string; category: FaqCategory };

export const FAQ_CATEGORIES: FaqCategory[] = ["Getting started", "Asking questions", "Tools", "Account & data", "Accuracy & legal"];

export const FAQS: Faq[] = [
  {
    category: "Getting started",
    q: "What is AyurIP?",
    a: "AyurIP is an AI research assistant for Ayurveda and intellectual property. It answers questions on patents, trademarks, GIs, licensing and biodiversity rules with cited sources, and includes guided tools, a Herbal Library and links to official databases.",
  },
  {
    category: "Getting started",
    q: "Who is it for?",
    a: "Ayurvedic manufacturers and startups, researchers, practitioners, students and policymakers: anyone who needs to protect, license or research traditional knowledge.",
  },
  {
    category: "Getting started",
    q: "Do I need an account?",
    a: "You can browse the Herbal Library, Resources and all three guided tools without an account. Asking the AI and keeping a history of answers needs a free account; evaluators can use the demo account shown on the sign-in page.",
  },
  {
    category: "Asking questions",
    q: "What's the difference between Deep Research and Quick Answer?",
    a: "Deep Research reads several sources and writes a fully cited answer, which takes longer. Quick Answer gives a short answer with the key citations, for when you need a fast orientation.",
  },
  {
    category: "Asking questions",
    q: "Why should I choose a jurisdiction?",
    a: "IP and drug laws differ between countries. Choosing India, the EU, the US or Global focuses the answer on that legal system and its official sources.",
  },
  {
    category: "Asking questions",
    q: "Can I get answers in Hindi or other languages?",
    a: "Yes. Open Language in the sidebar, or Settings, and choose the language answers are written in. Menus stay in English.",
  },
  {
    category: "Tools",
    q: "How does the Formulation Classifier decide the category?",
    a: "It applies the definitions in the Drugs and Cosmetics Act (classical ASU drug, patent or proprietary medicine, cosmetic) and FSSAI's food and nutraceutical rules to your dosage form, ingredients, source text and intended claims. Modern drugs, vitamins and synthetic actives each change the outcome.",
  },
  {
    category: "Tools",
    q: "Are the fees in IP Guidance exact?",
    a: "They are the official e-filing fees at the time of writing, by applicant type. Fees are revised periodically, so confirm them on ipindia.gov.in before you file.",
  },
  {
    category: "Tools",
    q: "Does the ABS checker cover the 2023 amendment?",
    a: "Yes. It reflects the Biological Diversity (Amendment) Act, 2023, including the exemptions for cultivated medicinal plants, codified traditional knowledge and AYUSH practitioners, and the treatment of foreign-controlled Indian companies.",
  },
  {
    category: "Account & data",
    q: "Where are my questions stored?",
    a: "When you're signed in, your history, saved answers and preferences are stored in your account so they follow you to any device. Tool drafts and checklists are kept in this browser only.",
  },
  {
    category: "Account & data",
    q: "How do I delete my history?",
    a: "Open Settings and choose Clear history. Saved questions are kept until you unsave them. You can also delete single questions from the History page.",
  },
  {
    category: "Accuracy & legal",
    q: "Is this legal advice?",
    a: "No. AyurIP gives research and general guidance with sources so you can verify it. For filings and disputes, consult a registered patent or trademark agent, or a lawyer.",
  },
  {
    category: "Accuracy & legal",
    q: "Where do the answers come from?",
    a: "From official sources such as IP India, TKDL, the Ministry of AYUSH, the National Biodiversity Authority, CDSCO and FSSAI, along with published research. Every claim in an answer links to its source.",
  },
];

export const OFFICIAL_CHANNELS = [
  { name: "Ministry of AYUSH", note: "Policy, schemes and AYUSH regulation", url: "https://ayush.gov.in" },
  { name: "IP India", note: "Patents, trademarks, designs and GI filing", url: "https://ipindia.gov.in" },
  { name: "National Biodiversity Authority", note: "ABS approvals and benefit sharing", url: "https://nbaindia.org" },
  { name: "CDSCO", note: "Drug and cosmetic regulation", url: "https://cdsco.gov.in" },
  { name: "FSSAI", note: "Food, nutraceutical and Ayurveda Aahara rules", url: "https://fssai.gov.in" },
];
