import { AboutHero, ImpactSection, JoinCTA, MeetTheTeam, OurJourney, OurPurpose, WhatDrivesUs } from "../sections/about";

// ─── About Page ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="pt-16" style={{ fontFamily: "Inter, sans-serif" }}>
      <AboutHero />
      <WhatDrivesUs />
      <ImpactSection />
      <OurPurpose />
      <OurJourney />
      <MeetTheTeam />
      <JoinCTA />
    </div>
  );
}
