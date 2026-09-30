import { HttpError } from "../../lib/errors.js";
import type { StoredHerb } from "./types.js";

export type TrefleOptions = {
  token: string;
  baseUrl: string;
  timeoutMs: number;
  storeRaw: boolean;
  /** Trefle allows 60 requests per minute per token. */
  maxPerMinute?: number;
};

/** Looks up species on Trefle and returns normalized records. */
export type TrefleSearch = (query: string) => Promise<StoredHerb[]>;

type TrefleSpecies = {
  id?: number;
  common_name?: string | null;
  scientific_name?: string | null;
  family?: string | { name?: string } | null;
  image_url?: string | null;
};

const text = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);

function normalize(item: TrefleSpecies, storeRaw: boolean): StoredHerb | null {
  const botanicalName = text(item.scientific_name);
  if (!botanicalName) return null;
  const family = typeof item.family === "object" && item.family ? text(item.family.name) : text(item.family);
  const imageUrl = text(item.image_url);
  return {
    commonName: text(item.common_name),
    botanicalName,
    family,
    imageUrl: imageUrl && /^https?:\/\//i.test(imageUrl) ? imageUrl : null,
    source: "trefle",
    providerId: item.id === undefined ? null : String(item.id),
    rawData: storeRaw ? item : null,
  };
}

/**
 * Trefle client. The token travels in the query string, so request URLs are
 * never logged: failures are logged by status only.
 */
export function createTrefleSearch({ token, baseUrl, timeoutMs, storeRaw, maxPerMinute = 60 }: TrefleOptions): TrefleSearch {
  const recent: number[] = [];

  return async (query) => {
    // Stay under Trefle's own limit instead of burning requests on 429s.
    const now = Date.now();
    while (recent.length && now - recent[0]! >= 60_000) recent.shift();
    if (recent.length >= maxPerMinute) {
      throw new HttpError(429, "Too many herb searches right now. Please try again in a minute.");
    }
    recent.push(now);

    const url = new URL(`${baseUrl.replace(/\/+$/, "")}/species/search`);
    url.searchParams.set("q", query);
    url.searchParams.set("token", token);

    let res: Response;
    try {
      res = await fetch(url, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(timeoutMs) });
    } catch (err) {
      const name = err instanceof Error ? err.name : "UnknownError";
      console.warn(`[trefle] request failed: ${name}`);
      throw new HttpError(503, "The botanical data service did not respond. Please try again shortly.");
    }
    if (!res.ok) {
      console.warn(`[trefle] request failed: HTTP ${res.status}`);
      if (res.status === 429) throw new HttpError(429, "Too many herb searches right now. Please try again in a minute.");
      throw new HttpError(503, "The botanical data service is temporarily unavailable. Please try again shortly.");
    }

    let body: { data?: unknown };
    try {
      body = (await res.json()) as { data?: unknown };
    } catch {
      console.warn("[trefle] unreadable response body");
      throw new HttpError(503, "The botanical data service returned an unreadable response.");
    }
    const items = Array.isArray(body.data) ? (body.data as TrefleSpecies[]) : [];
    return items.map((item) => normalize(item, storeRaw)).filter((h): h is StoredHerb => h !== null);
  };
}
