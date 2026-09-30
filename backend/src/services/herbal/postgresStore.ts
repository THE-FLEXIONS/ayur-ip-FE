import { readFile } from "node:fs/promises";
import pg from "pg";
import { HttpError } from "../../lib/errors.js";
import type { HerbRecord, HerbStore } from "./types.js";

const SCHEMA_URL = new URL("../../../db/schema.sql", import.meta.url);

/** Escapes LIKE wildcards so user input like "%" or "_" matches literally. */
export const escapeLike = (s: string) => s.replace(/[\\%_]/g, "\\$&");

function unavailable(err: unknown): HttpError {
  console.warn(`[herbs-db] query failed: ${err instanceof Error ? err.message : "unknown error"}`);
  return new HttpError(503, "The Herbal Library is temporarily unavailable. Please try again shortly.");
}

/** Herb cache in PostgreSQL (guide section 9). Creates the table if it is missing. */
export async function createPostgresHerbStore(connectionString: string): Promise<HerbStore> {
  const pool = new pg.Pool({ connectionString, max: 5, connectionTimeoutMillis: 5_000 });
  // An idle client losing its connection must not crash the server.
  pool.on("error", (err) => console.warn(`[herbs-db] idle client error: ${err.message}`));
  await pool.query(await readFile(SCHEMA_URL, "utf8"));

  const COLUMNS = `common_name AS "commonName", botanical_name AS "botanicalName",
                   family, image_url AS "imageUrl", provider_source AS source`;

  return {
    async getMany(botanicalNames) {
      if (botanicalNames.length === 0) return [];
      try {
        const { rows } = await pool.query<HerbRecord>(
          `SELECT ${COLUMNS} FROM herbs WHERE botanical_name = ANY($1::text[])`,
          [botanicalNames],
        );
        const byName = new Map(rows.map((r) => [r.botanicalName, r]));
        return botanicalNames.map((n) => byName.get(n)).filter((h): h is HerbRecord => h !== undefined);
      } catch (err) {
        throw unavailable(err);
      }
    },
    async search(query, limit) {
      try {
        const { rows } = await pool.query<HerbRecord>(
          `SELECT ${COLUMNS}
             FROM herbs
            WHERE common_name ILIKE $1 OR botanical_name ILIKE $1
            ORDER BY botanical_name
            LIMIT $2`,
          [`%${escapeLike(query)}%`, limit],
        );
        return rows;
      } catch (err) {
        throw unavailable(err);
      }
    },
    async saveMany(records) {
      if (records.length === 0) return;
      try {
        // One statement for the batch; parameterized throughout.
        await pool.query(
          `INSERT INTO herbs (common_name, botanical_name, family, image_url, provider_source, provider_id, raw_data)
           SELECT * FROM UNNEST($1::text[], $2::text[], $3::text[], $4::text[], $5::text[], $6::text[], $7::jsonb[])
           ON CONFLICT (botanical_name) DO NOTHING`,
          [
            records.map((r) => r.commonName),
            records.map((r) => r.botanicalName),
            records.map((r) => r.family),
            records.map((r) => r.imageUrl),
            records.map((r) => r.source),
            records.map((r) => r.providerId),
            records.map((r) => (r.rawData === undefined || r.rawData === null ? null : JSON.stringify(r.rawData))),
          ],
        );
      } catch (err) {
        throw unavailable(err);
      }
    },
    async close() {
      await pool.end();
    },
  };
}
