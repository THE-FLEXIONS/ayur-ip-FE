/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the AYUR-IP API. Empty means same-origin `/api`. */
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
