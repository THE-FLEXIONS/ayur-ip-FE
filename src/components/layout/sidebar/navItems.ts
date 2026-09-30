import type { ComponentType, SVGProps } from "react";
import {
  BookmarkIcon,
  BulbIcon,
  ChatQueryIcon,
  ClockIcon,
  DatabaseIcon,
  FlaskIcon,
  GearIcon,
  HelpCircleIcon,
  HomeFilledIcon,
  LeafIcon,
} from "../../ui/LineIcons";

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
  { key: "home", label: "Home", icon: HomeFilledIcon },
  { key: "new-query", label: "New Query", icon: ChatQueryIcon },
  { key: "formulation", label: "Formulation Classifier", icon: FlaskIcon },
  { key: "ip-guidance", label: "IP Guidance", icon: BulbIcon },
  { key: "abs", label: "ABS Compliance", icon: LeafIcon },
  { key: "resources", label: "Databases & Resources", icon: DatabaseIcon },
  { key: "saved", label: "Saved", icon: BookmarkIcon },
  { key: "history", label: "History", icon: ClockIcon },
];

/** Utility items shown below the divider, after the Language picker. */
export const UTILITY_ITEMS: SidebarItem[] = [
  { key: "settings", label: "Settings", icon: GearIcon },
  { key: "help", label: "Help & Support", icon: HelpCircleIcon },
];
