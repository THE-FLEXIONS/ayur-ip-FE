/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Backend origin, e.g. https://ayur-ip-backend.onrender.com (no trailing slash). */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
