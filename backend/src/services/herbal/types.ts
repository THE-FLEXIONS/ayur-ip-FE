/** A herb as the frontend sees it (guide section 8). Unknown fields are null, never invented. */
export type HerbRecord = {
  commonName: string | null;
  botanicalName: string;
  family: string | null;
  imageUrl: string | null;
  /** Where the record came from: "trefle" or "seed". */
  source: string;
};

/** A record plus provider details kept only in the cache. */
export type StoredHerb = HerbRecord & {
  providerId: string | null;
  rawData: unknown;
};

/** The Herbal Library cache: PostgreSQL when configured, otherwise memory. */
export interface HerbStore {
  /** Case-insensitive match on common or botanical name, ordered by botanical name. */
  search(query: string, limit: number): Promise<HerbRecord[]>;
  /** The stored records for these botanical names (missing names are skipped). */
  getMany(botanicalNames: string[]): Promise<HerbRecord[]>;
  /** Adds records; an existing botanical name is left unchanged. */
  saveMany(records: StoredHerb[]): Promise<void>;
  close?(): Promise<void>;
}
