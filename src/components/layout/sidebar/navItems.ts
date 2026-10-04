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

/** Main navigation, in the order shown in the sidebar. */
export const PRIMARY_ITEMS: SidebarItem[] = [
  { key: "home", label: "Home", icon: HomeNavIcon },
  { key: "new-query", label: "New Query", icon: NewQueryNavIcon },
  { key: "formulation", label: "Formulation Classifier", icon: FormulationNavIcon },
  { key: "ip-guidance", label: "IP Guidance", icon: IpGuidanceNavIcon },
  { key: "abs", label: "ABS Compliance", icon: AbsNavIcon },
  { key: "resources", label: "Databases & Resources", icon: DatabaseNavIcon },
  { key: "saved", label: "Saved", icon: SavedNavIcon },
  { key: "history", label: "History", icon: HistoryNavIcon },
];

/** Utility items shown below the divider, after the Language picker. */
export const UTILITY_ITEMS: SidebarItem[] = [
  { key: "settings", label: "Settings", icon: SettingsNavIcon },
  { key: "help", label: "Help & Support", icon: HelpNavIcon },
];
