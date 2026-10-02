// ─── API client ──────────────────────────────────────────────────────────────
// One place for the backend URL, the stored login token and error handling.
// Every request helper in src/lib/api goes through `request` (or `apiFetch`
// for streaming).

const rawUrl = import.meta.env.VITE_API_URL as string | undefined;

/** Backend origin, e.g. https://ayur-ip-backend.onrender.com. Set VITE_API_URL at build time. */
export const API_URL = (rawUrl?.trim() || "http://localhost:4000").replace(/\/+$/, "");

if (!rawUrl && import.meta.env.PROD) {
  console.warn("VITE_API_URL is not set; API calls will go to http://localhost:4000.");
}

const TOKEN_KEY = "ayurip.token";

/** Fired when the backend rejects the stored token, so the app can sign out. */
export const UNAUTHORIZED_EVENT = "ayurip:unauthorized";

export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string | null) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    // Storage unavailable (private mode): the session lasts until the tab closes.
  }
}

/** An error from the API (or the network), with a message that's safe to show. */
export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  /** Per-field validation messages, e.g. { email: ["Enter a valid email address."] }. */
  readonly fields: Record<string, string[]>;

  constructor(status: number, code: string, message: string, fields: Record<string, string[]> = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.fields = fields;
  }

  /** First message for a field, if the server flagged it. */
  field(name: string): string | undefined {
    return this.fields[name]?.[0];
  }
}

export function toApiError(err: unknown): ApiError {
  if (err instanceof ApiError) return err;
  return new ApiError(0, "NETWORK_ERROR", "Can't reach the server. Check your connection and try again.");
}

type RequestOptions = {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined | null>;
  signal?: AbortSignal;
};

function buildUrl(path: string, query?: RequestOptions["query"]): string {
  const url = new URL(`${API_URL}/api${path}`);
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, String(value));
  }
  return url.toString();
}

/** fetch() with the API URL, JSON body and auth header. Rejects with ApiError on any failure. */
export async function apiFetch(path: string, options: RequestOptions = {}): Promise<Response> {
  const token = getToken();
  const headers: Record<string, string> = {};
  if (options.body !== undefined) headers["Content-Type"] = "application/json";
  if (token) headers.Authorization = `Bearer ${token}`;

  let res: Response;
  try {
    res = await fetch(buildUrl(path, options.query), {
      method: options.method ?? "GET",
      headers,
      body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
      signal: options.signal,
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") throw err;
    throw toApiError(err);
  }

  if (!res.ok) {
    const payload = (await res.json().catch(() => null)) as {
      error?: { code?: string; message?: string; details?: Record<string, string[]> };
    } | null;
    const error = new ApiError(
      res.status,
      payload?.error?.code ?? "HTTP_ERROR",
      payload?.error?.message ?? "Something went wrong. Please try again.",
      payload?.error?.details ?? {},
    );
    if (res.status === 401 && token) window.dispatchEvent(new Event(UNAUTHORIZED_EVENT));
    throw error;
  }
  return res;
}

/** JSON request helper. Returns undefined for 204 responses. */
export async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const res = await apiFetch(path, options);
  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}
