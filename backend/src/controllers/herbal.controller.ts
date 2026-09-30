import type { RequestHandler } from "express";
import { z } from "zod";
import { HttpError } from "../lib/errors.js";
import type { HerbalService } from "../services/herbal/herbal.service.js";

const searchQuery = z.object({
  q: z
    .string({ error: "Enter a herb name to search." })
    .trim()
    .min(2, "Enter at least 2 characters.")
    .max(100, "Search terms can be up to 100 characters."),
});

/** GET /api/herbs/search?q= */
export function herbSearchController(herbs: HerbalService): RequestHandler {
  return async (req, res) => {
    const parsed = searchQuery.safeParse({ q: typeof req.query.q === "string" ? req.query.q : undefined });
    if (!parsed.success) throw new HttpError(400, parsed.error.issues[0]?.message ?? "Invalid search.");
    res.json({ results: await herbs.search(parsed.data.q) });
  };
}
