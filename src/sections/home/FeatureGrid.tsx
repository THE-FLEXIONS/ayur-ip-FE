import type { ComponentType, SVGProps } from "react";
import { BulbIcon, ChevronRightIcon, DatabaseIcon, DocumentIcon, GlobeIcon, LeafIcon, UsersIcon } from "../../components/ui/LineIcons";
import type { ResearchTool } from "../../config/research";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export type Feature = {
  title: string;
  description: string;
  icon: IconComponent;
  /** Starter question placed in the ask box when the card is chosen. */
  prompt: string;
  /** Sent with the question so the AI focuses on this tool's topic. */
  tool: ResearchTool;
};

export const FEATURES: Feature[] = [
  {
    title: "Formulation Classifier",
    tool: "formulation",
    description: "Understand your product category",
    icon: DocumentIcon,
    prompt: "Is my herbal formulation a classical Ayurvedic medicine or a proprietary one?",
  },
  {
    title: "IP Guidance",
    tool: "ip-guidance",
    description: "Patents, Trademarks, GI, Copyright & more",
    icon: BulbIcon,
    prompt: "Which forms of IP protection apply to my Ayurvedic product?",
  },
  {
    title: "ABS Compliance",
    tool: "abs",
    description: "Know when permissions are needed",
    icon: LeafIcon,
    prompt: "Do I need Access and Benefit Sharing approval to use this medicinal plant?",
  },
  {
    title: "Databases & Resources",
    tool: "resources",
    description: "Search TKDL, IPO, GI and more",
    icon: DatabaseIcon,
    prompt: "Search TKDL and IPO records for prior art on ",
  },
  {
    title: "International Guidance",
    tool: "international",
    description: "Explore global IP and market access",
    icon: GlobeIcon,
    prompt: "What do I need to protect and sell my Ayurvedic product abroad?",
  },
  {
    title: "Save & Collaborate",
    tool: "collaborate",
    description: "Save answers, export reports",
    icon: UsersIcon,
    prompt: "How can I save this research and share a report with my team?",
  },
];

export default function FeatureGrid({ onSelect }: { onSelect: (feature: Feature) => void }) {
  return (
    <ul aria-label="Explore AyurIP tools" className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
      {FEATURES.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <li key={feature.title} className="animate-rise" style={{ animationDelay: `${120 + i * 50}ms` }}>
            <button
              type="button"
              onClick={() => onSelect(feature)}
              className="group flex h-full w-full flex-col rounded-[20px] border border-[#ecebe3] bg-ayur-card/90 p-4 text-left shadow-[0_1px_2px_rgba(30,50,35,0.04),0_10px_30px_-24px_rgba(30,50,35,0.3)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#dfe6dc] hover:shadow-[0_2px_4px_rgba(30,50,35,0.04),0_22px_40px_-26px_rgba(30,60,40,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green motion-reduce:hover:translate-y-0 sm:p-5 lg:rounded-[24px] lg:p-6"
            >
              <span className="flex w-full items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-ayur-mint text-ayur-ink sm:size-12 lg:size-14">
                  <Icon size={24} strokeWidth={1.6} className="lg:size-[26px]" />
                </span>
                <ChevronRightIcon
                  size={20}
                  strokeWidth={1.8}
                  className="mt-2 text-ayur-ink transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                />
              </span>
              <span className="mt-4 text-[15px] font-semibold leading-tight tracking-[-0.01em] text-ayur-ink sm:text-[17px] lg:mt-5 lg:text-[19px]">
                {feature.title}
              </span>
              <span className="mt-1.5 text-[13px] leading-snug text-ayur-muted sm:text-[14px] lg:text-[15px]">
                {feature.description}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
