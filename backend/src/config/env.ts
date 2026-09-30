import "dotenv/config";
import { z } from "zod";

/** Treats an empty value (e.g. `HERBAL_API_KEY=`) as not set. */
const optional = <T extends z.ZodType>(inner: T) =>
  z.preprocess((v) => (v === "" ? undefined : v), inner.optional());

const MISSING_KEY = "GEMINI_API_KEY is required. Copy .env.example to .env and add your key.";

// Validated once at startup so a missing or malformed setting fails fast
// with a clear message instead of surfacing as a runtime error later.
const schema = z.object({
  PORT: z.coerce.number().int().positive().default(5000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  // Number of proxies in front of the app (1 on Render). Lets rate limits see
  // each client's real IP instead of the proxy's. Keep 0 when not behind one.
  TRUST_PROXY: z.coerce.number().int().min(0).default(0),
  CORS_ORIGINS: z
    .string()
    .default("")
    .transform((v) => v.split(",").map((s) => s.trim()).filter(Boolean)),
  GEMINI_API_KEY: z
    .string({ error: MISSING_KEY })
    .min(1, MISSING_KEY)
    .refine((v) => v !== "replace_me", "GEMINI_API_KEY is still the placeholder. Add your real key to .env."),
  GEMINI_MODEL: z.string().min(1).default("gemini-3.8-flash"),
  GEMINI_TIMEOUT_MS: z.coerce.number().int().positive().default(30_000),
  GEMINI_STORE_INTERACTIONS: z
    .enum(["true", "false"])
    .default("false")
    .transform((v) => v === "true"),

  // Herbal Library. Without DATABASE_URL the cache is kept in memory; without
  // HERBAL_API_KEY search covers only the cache and the built-in seed herbs.
  DATABASE_URL: optional(z.string().min(1)),
  HERBAL_API_KEY: optional(z.string().min(1).refine((v) => v !== "replace_me", "HERBAL_API_KEY is still the placeholder.")),
  HERBAL_API_BASE_URL: z.url().default("https://trefle.io/api/v1"),
  HERBAL_TIMEOUT_MS: z.coerce.number().int().positive().default(10_000),
  // Keep Trefle's full record in raw_data only if Trefle's current terms allow it.
  HERBAL_STORE_RAW: z
    .enum(["true", "false"])
    .default("false")
    .transform((v) => v === "true"),
});

export type Env = z.infer<typeof schema>;

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  const result = schema.safeParse(source);
  if (!result.success) {
    const problems = result.error.issues.map((i) => `  - ${i.path.join(".")}: ${i.message}`).join("\n");
    throw new Error(`Invalid environment configuration:\n${problems}`);
  }
  return result.data;
}
