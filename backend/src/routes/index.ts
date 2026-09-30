import { Router } from "express";
import rateLimit from "express-rate-limit";
import { chatController } from "../controllers/chat.controller.js";
import { herbSearchController } from "../controllers/herbal.controller.js";
import type { ChatService } from "../services/chat.service.js";
import type { HerbalService } from "../services/herbal/herbal.service.js";

export type RouteDeps = { chat: ChatService; herbs: HerbalService };

// Gemini and Trefle both enforce quotas, so limit each client before requests reach them.
const perClientLimit = (limit: number, error: string) =>
  rateLimit({
    windowMs: 60_000,
    limit,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: { error },
  });

export function createRoutes({ chat, herbs }: RouteDeps): Router {
  const router = Router();

  router.get("/health", (_req, res) => {
    res.json({ status: "ok", uptimeSeconds: Math.round(process.uptime()) });
  });

  router.post("/chat", perClientLimit(20, "Too many questions in a short time. Please wait a minute."), chatController(chat));
  router.get(
    "/herbs/search",
    perClientLimit(30, "Too many searches in a short time. Please wait a minute."),
    herbSearchController(herbs),
  );

  return router;
}
