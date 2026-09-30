import type { HerbRecord, HerbStore, StoredHerb } from "./types.js";

/** In-process cache used when DATABASE_URL is not set. Lost on restart. */
export function createMemoryHerbStore(maxEntries = 5_000): HerbStore {
  const byName = new Map<string, HerbRecord>();

  return {
    async search(query, limit) {
      const needle = query.toLowerCase();
      return [...byName.values()]
        .filter((h) => h.botanicalName.toLowerCase().includes(needle) || h.commonName?.toLowerCase().includes(needle))
        .sort((a, b) => a.botanicalName.localeCompare(b.botanicalName))
        .slice(0, limit);
    },
    async getMany(botanicalNames) {
      return botanicalNames.map((name) => byName.get(name)).filter((h): h is HerbRecord => h !== undefined);
    },
    async saveMany(records: StoredHerb[]) {
      for (const { providerId: _id, rawData: _raw, ...herb } of records) {
        if (byName.has(herb.botanicalName) || byName.size >= maxEntries) continue;
        byName.set(herb.botanicalName, herb);
      }
    },
  };
}
