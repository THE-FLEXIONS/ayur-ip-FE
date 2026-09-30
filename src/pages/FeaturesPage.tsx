import { CTASection, CoreFeatures, FeaturesHero, FooterSimple, HowItWorksV2, SecurityBanner } from "../sections/features";

// ─── Page ─────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <div>
      <FeaturesHero />
      <CoreFeatures />
      <HowItWorksV2 />
      <SecurityBanner />
      <CTASection />
      <FooterSimple />
    </div>
  );
}
