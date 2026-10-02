// ─── Footer link data ────────────────────────────────────────────────────────
// `page` links switch pages through the app's navigate(); the rest are anchors.
// Links without a destination yet point at "#" until those pages exist.

export type FooterLink = {
  label: string;
  /** App page opened through onNavigate (e.g. "Features"). */
  page?: string;
  href?: string;
  /** Shown but not clickable yet. */
  comingSoon?: boolean;
};

export const PRODUCT_LINKS: FooterLink[] = [
  { label: "Features", page: "Features" },
  { label: "Use Cases", page: "Use Cases" },
  { label: "How it Works", page: "Features" },
  { label: "Pricing", href: "#" },
  { label: "FAQs", href: "#" },
];

export const RESOURCE_LINKS: FooterLink[] = [
  { label: "Knowledge Base", page: "Herbal Library" },
  { label: "Ayurveda References", page: "Herbal Library" },
  { label: "Guidelines & Policies", href: "#" },
  { label: "Research Papers", href: "#" },
  { label: "Case Studies", page: "Use Cases" },
  { label: "Blogs & Updates", href: "#" },
  { label: "API", comingSoon: true },
];

export const ABOUT_LINKS: FooterLink[] = [
  { label: "Our Mission", page: "About" },
  { label: "Our Team", page: "About" },
  { label: "Partners", page: "About" },
  { label: "Media & News", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
];

/** Replace "#" with the real profile URLs. */
export const SOCIAL_LINKS = {
  x: "#",
  linkedin: "#",
  youtube: "#",
  instagram: "#",
};

/** "1800-11-AYUSH" spelled out on a phone keypad. */
export const SUPPORT_PHONE = { display: "1800-11-AYUSH", tel: "+9118001129874" };

export const GOV_PORTALS = [
  { label: "india.gov.in", href: "https://www.india.gov.in" },
  { label: "ayush.gov.in", href: "https://ayush.gov.in" },
  { label: "ipindia.gov.in", href: "https://ipindia.gov.in" },
  { label: "mygov.in", href: "https://www.mygov.in" },
];
