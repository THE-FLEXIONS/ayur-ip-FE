import type { ComponentType, SVGProps } from "react";
import { ChevronRightIcon, LeafIcon } from "../../components/ui/LineIcons";
import { AbsNavIcon, DatabaseNavIcon, FormulationNavIcon, IpGuidanceNavIcon, NewQueryNavIcon } from "../../components/ui/NavIcons";

type Guide = {
  title: string;
  body: string;
  page: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
};

const GUIDES: Guide[] = [
  { title: "Ask your first question", body: "Choose a research mode and jurisdiction, then ask in plain language.", page: "New Query", icon: NewQueryNavIcon },
  { title: "Classify a formulation", body: "Find the regulatory category and licence route for a product.", page: "Formulation Classifier", icon: FormulationNavIcon },
  { title: "Plan IP protection", body: "See which rights fit, with fees and filing steps.", page: "IP Guidance", icon: IpGuidanceNavIcon },
  { title: "Check ABS compliance", body: "Know when the NBA or your State Biodiversity Board is involved.", page: "ABS Compliance", icon: AbsNavIcon },
  { title: "Explore the Herbal Library", body: "Search herbs, formulations and classical texts.", page: "Herbal Library", icon: LeafIcon },
  { title: "Open official databases", body: "TKDL, IP India, GI Registry, AYUSH and more.", page: "Resources", icon: DatabaseNavIcon },
];

/** Shortcuts into each part of the app, with one line on what it's for. */
export default function QuickGuides({ onOpen }: { onOpen: (page: string) => void }) {
  return (
    <section aria-label="Quick guides">
      <h2 className="text-[18px] font-semibold text-ayur-ink">Quick guides</h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map(({ title, body, page, icon: Icon }) => (
          <li key={title}>
            <button
              type="button"
              onClick={() => onOpen(page)}
              className="group flex h-full w-full items-start gap-3 rounded-[20px] border border-[#ecebe3] bg-white/85 p-4 text-left transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#d8e3d5] hover:shadow-[0_14px_30px_-22px_rgba(30,60,40,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green motion-reduce:hover:translate-y-0"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ayur-mint text-ayur-green-deep">
                <Icon size={20} strokeWidth={1.7} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1 text-[14.5px] font-semibold text-ayur-ink">
                  {title}
                  <ChevronRightIcon size={16} strokeWidth={2} className="text-ayur-muted transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="mt-0.5 block text-[13px] leading-snug text-ayur-muted">{body}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
