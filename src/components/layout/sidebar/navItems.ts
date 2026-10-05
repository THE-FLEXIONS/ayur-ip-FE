import type { ComponentType, SVGProps } from "react";
import {
  AbsNavIcon,
  DatabaseNavIcon,
  FormulationNavIcon,
  HelpNavIcon,
  HistoryNavIcon,
  HomeNavIcon,
  IpGuidanceNavIcon,
  NewQueryNavIcon,
  SavedNavIcon,
  SettingsNavIcon,
} from "../../ui/NavIcons";

export type SidebarKey =
  | "home"
  | "new-query"
  | "formulation"
  | "ip-guidance"
  | "abs"
  | "resources"
  | "saved"
  | "history"
  | "settings"
  | "help";

export type SidebarItem = {
  key: SidebarKey;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
};

export type SidebarGroup = { label: string; items: SidebarItem[] };

/** Main navigation, in the order and groups shown in the sidebar. */
export const PRIMARY_GROUPS: SidebarGroup[] = [
  {
    label: "Workspace",
    items: [
      { key: "home", label: "Home", icon: HomeNavIcon },
      { key: "new-query", label: "New Query", icon: NewQueryNavIcon },
    ],
  },
  {
    label: "Tools",
    items: [
      { key: "formulation", label: "Formulation Classifier", icon: FormulationNavIcon },
      { key: "ip-guidance", label: "IP Guidance", icon: IpGuidanceNavIcon },
      { key: "abs", label: "ABS Compliance", icon: AbsNavIcon },
      { key: "resources", label: "Databases & Resources", icon: DatabaseNavIcon },
    ],
  },
  {
    label: "Your library",
    items: [
      { key: "saved", label: "Saved", icon: SavedNavIcon },
      { key: "history", label: "History", icon: HistoryNavIcon },
    ],
  },
];

export const PRIMARY_ITEMS: SidebarItem[] = PRIMARY_GROUPS.flatMap((g) => g.items);

/** Utility items shown below the divider, after the Language picker. */
export const UTILITY_ITEMS: SidebarItem[] = [
  { key: "settings", label: "Settings", icon: SettingsNavIcon },
  { key: "help", label: "Help & Support", icon: HelpNavIcon },
];
