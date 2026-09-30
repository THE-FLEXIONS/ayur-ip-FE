import { version } from "../../package.json";

/** Shown in the sidebar footer. Bump `version` in package.json to change it. */
export const APP_VERSION = version;

export type LanguageCode = "en" | "hi";

export const LANGUAGES: { code: LanguageCode; label: string; native: string; available: boolean }[] = [
  { code: "en", label: "English", native: "English", available: true },
  // Listed so the picker is ready; enable once the interface is translated.
  { code: "hi", label: "Hindi", native: "हिन्दी", available: false },
];
