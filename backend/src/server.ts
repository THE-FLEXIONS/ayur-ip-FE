import { createApp } from "./app.js";
import { loadEnv } from "./config/env.js";
import { createGemini } from "./rag/providers/gemini.js";
import { SEED_HERBS } from "./data/seedHerbs.js";
import { createChatService } from "./services/chat.service.js";
import { createHerbalService } from "./services/herbal/herbal.service.js";
import { createMemoryHerbStore } from "./services/herbal/memoryStore.js";
import { createPostgresHerbStore } from "./services/herbal/postgresStore.js";
import { createTrefleSearch } from "./services/herbal/trefle.js";

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

let herbStore;
try {
  herbStore = env.DATABASE_URL ? await createPostgresHerbStore(env.DATABASE_URL) : createMemoryHerbStore();
  await herbStore.saveMany(SEED_HERBS);
} catch (err) {
  console.error(`Could not prepare the Herbal Library database: ${(err as Error).message}`);
  process.exit(1);
}

const herbs = createHerbalService({
  store: herbStore,
  trefle: env.HERBAL_API_KEY
    ? createTrefleSearch({
        token: env.HERBAL_API_KEY,
        baseUrl: env.HERBAL_API_BASE_URL,
        timeoutMs: env.HERBAL_TIMEOUT_MS,
        storeRaw: env.HERBAL_STORE_RAW,
      })
    : undefined,
});

const app = createApp({ chat, herbs, corsOrigins: env.CORS_ORIGINS, trustProxy: env.TRUST_PROXY });

app.listen(env.PORT, () => {
  console.log(`AYUR-IP API listening on http://localhost:${env.PORT} (model ${env.GEMINI_MODEL})`);
  console.log(
    `Herbal Library: ${env.DATABASE_URL ? "PostgreSQL" : "in-memory"} cache, ` +
      (env.HERBAL_API_KEY ? "Trefle enabled" : "Trefle off (set HERBAL_API_KEY); seed herbs only"),
  );
});
