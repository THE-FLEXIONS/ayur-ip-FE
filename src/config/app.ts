import { version } from "../../package.json";

/** Shown in the sidebar footer. Bump `version` in package.json to change it. */
export const APP_VERSION = version;

export type LanguageCode = "en" | "hi";

/**
 * Language the AI answers in. The interface itself is English-only for now,
 * so this doesn't change menus or labels.
 */
export const LANGUAGES: { code: LanguageCode; label: string; native: string; available: boolean }[] = [
  { code: "en", label: "English", native: "English", available: true },
  { code: "hi", label: "Hindi", native: "हिन्दी", available: true },
];
