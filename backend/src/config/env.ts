import "dotenv/config";
import { z } from "zod";

const MISSING_KEY = "GEMINI_API_KEY is required. Copy .env.example to .env and add your key.";

// Validated once at startup so a missing or malformed setting fails fast
// with a clear message instead of surfacing as a runtime error later.
const schema = z.object({
  PORT: z.coerce.number().int().positive().default(5000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
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
