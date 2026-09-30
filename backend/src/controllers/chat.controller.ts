import type { RequestHandler } from "express";
import { z } from "zod";
import { HttpError } from "../lib/errors.js";
import type { ChatService } from "../services/chat.service.js";

export const MAX_MESSAGE_CHARS = 1000;

const chatBody = z.object({
  message: z
    .string({ error: "Please enter a question." })
    .trim()
    .min(1, "Please enter a question.")
    .max(MAX_MESSAGE_CHARS, `Questions can be up to ${MAX_MESSAGE_CHARS} characters.`),
  // Only English answers until the BHASHINI translation layer is added.
  language: z.enum(["en", "hi"]).default("en"),
  mode: z.enum(["deep", "quick"]).default("deep"),
  jurisdiction: z.enum(["IN", "EU", "US", "GLOBAL"]).default("IN"),
});

/** POST /api/chat */
export function chatController(chat: ChatService): RequestHandler {
  return async (req, res) => {
    const parsed = chatBody.safeParse(req.body ?? {});
    if (!parsed.success) throw new HttpError(400, parsed.error.issues[0]?.message ?? "Invalid request.");
    res.json(await chat.ask(parsed.data));
  };
}
