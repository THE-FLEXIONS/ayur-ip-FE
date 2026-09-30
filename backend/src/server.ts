import { createApp } from "./app.js";
import { loadEnv } from "./config/env.js";
import { createGemini } from "./rag/providers/gemini.js";
import { createChatService } from "./services/chat.service.js";

let env;
try {
  env = loadEnv();
} catch (err) {
  console.error((err as Error).message);
  process.exit(1);
}

const chat = createChatService({
  generate: createGemini({
    apiKey: env.GEMINI_API_KEY,
    model: env.GEMINI_MODEL,
    timeoutMs: env.GEMINI_TIMEOUT_MS,
    store: env.GEMINI_STORE_INTERACTIONS,
  }),
  // No retriever yet: add the pgvector retriever here once the document store exists.
});

const app = createApp({ chat, corsOrigins: env.CORS_ORIGINS });

app.listen(env.PORT, () => {
  console.log(`AYUR-IP API listening on http://localhost:${env.PORT} (model ${env.GEMINI_MODEL})`);
});
