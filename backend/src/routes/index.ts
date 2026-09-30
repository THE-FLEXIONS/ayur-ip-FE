import { Router } from "express";
import rateLimit from "express-rate-limit";
import { chatController } from "../controllers/chat.controller.js";
import type { ChatService } from "../services/chat.service.js";

export type RouteDeps = { chat: ChatService };

// Gemini enforces quotas, so limit each client before requests reach it.
const chatLimiter = () =>
  rateLimit({
    windowMs: 60_000,
    limit: 20,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: { error: "Too many questions in a short time. Please wait a minute." },
  });

export function createRoutes({ chat }: RouteDeps): Router {
  const router = Router();

  router.get("/health", (_req, res) => {
    res.json({ status: "ok", uptimeSeconds: Math.round(process.uptime()) });
  });

  router.post("/chat", chatLimiter(), chatController(chat));

  return router;
}
