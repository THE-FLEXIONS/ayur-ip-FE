import { ApiError, apiRequest, FALLBACK_MESSAGE } from "./api";

// Client for the Herbal Library search endpoint (GET /api/herbs/search).

export const MIN_HERB_QUERY_CHARS = 2;
export const MAX_HERB_QUERY_CHARS = 100;

/** Botanical data only (names, family, image). Unknown fields are null. */
export type Herb = {
  commonName: string | null;
  botanicalName: string;
  family: string | null;
  imageUrl: string | null;
  /** "trefle" for Trefle botanical data, "seed" for AYUR-IP's built-in list. */
  source: string;
};

const nullableText = (v: unknown) => (typeof v === "string" && v.trim() ? v : null);

function normalize(data: unknown): Herb[] {
  const results = (data as { results?: unknown } | null)?.results;
  if (!Array.isArray(results)) throw new ApiError(FALLBACK_MESSAGE, 502);
  return results.flatMap((item): Herb[] => {
    const r = (item ?? {}) as Record<string, unknown>;
    if (typeof r.botanicalName !== "string" || !r.botanicalName) return [];
    return [
      {
        commonName: nullableText(r.commonName),
        botanicalName: r.botanicalName,
        family: nullableText(r.family),
        imageUrl: nullableText(r.imageUrl),
        source: typeof r.source === "string" ? r.source : "unknown",
      },
    ];
  });
}

/** Searches herbs by common or botanical name. Pass `signal` to cancel it. */
export async function searchHerbs(query: string, signal?: AbortSignal): Promise<Herb[]> {
  const q = query.trim();
  if (q.length < MIN_HERB_QUERY_CHARS) throw new ApiError(`Enter at least ${MIN_HERB_QUERY_CHARS} characters.`, 400);
  if (q.length > MAX_HERB_QUERY_CHARS) throw new ApiError(`Search terms can be up to ${MAX_HERB_QUERY_CHARS} characters.`, 400);
  return normalize(await apiRequest(`/api/herbs/search?q=${encodeURIComponent(q)}`, { signal, timeoutMs: 80_000 }));
}
