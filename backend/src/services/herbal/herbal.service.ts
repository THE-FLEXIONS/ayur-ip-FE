import type { TrefleSearch } from "./trefle.js";
import type { HerbRecord, HerbStore } from "./types.js";

export type HerbalServiceOptions = {
  store: HerbStore;
  /** Absent when no Trefle token is configured: search then covers only the cache. */
  trefle?: TrefleSearch;
  limit?: number;
};

export function createHerbalService({ store, trefle, limit = 20 }: HerbalServiceOptions) {
  return {
    /** Cache first; Trefle on a miss, whose results are cached and returned in the same shape. */
    async search(query: string): Promise<HerbRecord[]> {
      const cached = await store.search(query, limit);
      if (cached.length > 0 || !trefle) return cached;

      const found = (await trefle(query)).slice(0, limit);
      // Deduplicate within the batch; the store ignores names it already has.
      const unique = [...new Map(found.map((h) => [h.botanicalName, h])).values()];
      await store.saveMany(unique);
      // Return what the cache holds, so a herb looks the same on a hit and a miss
      // (e.g. a seed record is not replaced by Trefle's version).
      const names = unique.map((h) => h.botanicalName);
      const stored = new Map((await store.getMany(names)).map((h) => [h.botanicalName, h]));
      return unique.map(({ providerId: _id, rawData: _raw, ...herb }) => stored.get(herb.botanicalName) ?? herb);
    },
  };
}

export type HerbalService = ReturnType<typeof createHerbalService>;
