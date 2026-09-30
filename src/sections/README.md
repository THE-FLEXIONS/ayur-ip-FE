# Sections

Every page is built from sections. Each page has its own folder here, and each section is its own file, so you can open and edit one section without touching the rest of the page.

```
sections/
  home/            HeroIntro, AskBox, FeatureGrid, HeritageBanner, TryAsking,
                   HeroBackdrop, FeaturesSection, HowItWorksSection
  features/        FeaturesHero, CoreFeatures, HowItWorks, HowItWorksV2, SecurityBanner, CTASection, FooterSimple
  use-cases/       UseCasesHero, ExplorePanel, KnowledgeInAction, UseCasesFooter
  herbal-library/  Hero, BrowseByCategory, FeaturedHerbs, CollectionAndTexts, KnowledgeBanner, SuggestBar, FooterBar
  about/           AboutHero, WhatDrivesUs, ImpactSection, OurPurpose, OurJourney, MeetTheTeam, JoinCTA
  auth/            LoginShowcase (left panel), SignUpForm (right panel)
  workspace/       QuestionList (History and Saved pages)
  settings/        ResearchDefaults, LanguagePreference, HistoryControls
```

Inside each folder:

- `<Section>.tsx`: one section, default export.
- `shared/icons.tsx`: icons used by that page's sections.
- `shared/assets.ts`: image URLs used by that page's sections.
- `shared/*`: other small building blocks used only by that page (for example `InputField`).
- `index.ts`: re-exports every section so pages can `import { AboutHero } from "../sections/about"`.

Related folders:

- `src/pages/`: one file per page that only puts its sections in order (`pages/auth/` for login).
- `src/components/`: pieces shared across pages: `layout/` (AppHeader, Navbar, Footer, WorkspaceShell, `sidebar/`), `ui/` (LineIcons, Botanicals, SelectChip, BrandMark), `icons.tsx`.
- `src/config/`: app version and languages (`app.ts`), research modes and jurisdictions (`research.tsx`).
- `src/hooks/useWorkspace.ts`: question history, saved questions and preferences (stored in localStorage).

To add a section: create the file in the page's folder, export it from that folder's `index.ts`, and add it to the page in `src/pages`.
