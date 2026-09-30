# AYUR-IP API

Express + TypeScript backend for the AYUR-IP frontend, built to the *AYUR-IP MVP API Integration Guide*. All provider keys live here, on the server; the frontend only calls this API.

## Run it

```bash
cd backend
npm install
cp .env.example .env   # then set GEMINI_API_KEY (https://aistudio.google.com/apikey)
npm run dev            # http://localhost:5000
```

In another terminal, run the frontend (`npm run dev` in the repo root). Vite proxies `/api` to `http://localhost:5000`, so no CORS setup is needed locally. Set `API_PROXY_TARGET` in the root `.env` if the API runs elsewhere.

The server refuses to start if `GEMINI_API_KEY` is missing or still the placeholder.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start with reload on change |
| `npm test` | Run the API tests (no network or key needed) |
| `npm run typecheck` | Type-check |
| `npm run build` / `npm start` | Compile to `dist/` and run it |

## Endpoints

| Endpoint | Status |
| --- | --- |
| `GET /api/health` | Done |
| `POST /api/chat` | Done (Gemini). Answers are ungrounded until the document store exists; see below |
| `POST /api/translate` | Not yet (needs BHASHINI credentials) |
| `GET /api/herbs/search` | Done (Trefle, with a PostgreSQL or in-memory cache) |

### `POST /api/chat`

```json
{ "message": "Can I patent a new Ayurvedic formulation?", "language": "en", "mode": "deep", "jurisdiction": "IN" }
```

`message` is required (up to 1,000 characters). `mode` is `deep` or `quick`, `jurisdiction` is `IN`, `EU`, `US` or `GLOBAL`.

```json
{ "answer": "...", "sources": [{ "id": "...", "title": "...", "url": "...", "score": 0.86 }], "grounded": false }
```

When there is not enough evidence the answer is a fixed abstention, `sources` is empty and `insufficientEvidence` is `true`. Errors are `{ "error": "<user-safe message>" }` with status 400 (invalid request), 429 (rate or quota limit), 502 (unreadable model reply), 503 (Gemini unavailable or timed out) or 500.

### `GET /api/herbs/search?q=ashwagandha`

`q` is 2 to 100 characters and matches common or botanical names.

```json
{ "results": [{ "commonName": "Ashwagandha", "botanicalName": "Withania somnifera", "family": "Solanaceae", "imageUrl": null, "source": "seed" }] }
```

The flow follows the guide: search the cache first, and only on a miss call Trefle, then cache and return the normalized results. Unknown fields are `null`, never "Unknown", and an unknown herb returns an empty list.

- **Cache:** PostgreSQL when `DATABASE_URL` is set (the `herbs` table from `db/schema.sql` is created at startup), otherwise in memory, which is lost on restart.
- **Seed herbs:** 12 common Ayurvedic herbs (names and families only) are loaded at startup, so search works in a demo even without a Trefle token, and Ayurvedic names like "Tulsi" match. Trefle mostly uses English and botanical names.
- **Trefle:** used only when `HERBAL_API_KEY` is set. Calls are capped at Trefle's 60 per minute, and each client can search 30 times per minute. The token is sent in the query string, as Trefle requires, so request URLs are never logged.
- **Scope:** Trefle is general botanical data (names, families, images), not an Ayurvedic or medicinal source. Keep Ayurvedic properties in the curated, cited corpus.

To run the PostgreSQL tests, point `TEST_DATABASE_URL` at an empty database and run `npm test`.

## Grounded answers (RAG)

`src/services/chat.service.ts` already implements the guide's grounded flow: a score threshold, `SOURCE_n` labels, the citation check and abstention, with source titles and URLs taken from the database, never the model. It runs when a `retriever` is passed to `createChatService` in `src/server.ts`. Until then, answers come from Gemini alone and are returned with `grounded: false`; the frontend labels them as unverified.

To enable it, add the pgvector schema and `retrieveRelevantChunks` from sections 4 and 9 of the guide, and pass it as the retriever.

## Notes

- Uses the Gemini Interactions API (`@google/genai` 2.x) with a JSON response schema, and `store: false` by default.
- The guide sets temperature 0.1, but the Interactions API in this SDK version has no temperature option, so it is not set.
- Chat is rate-limited to 20 requests per minute per client. Provider errors are logged by status only, never with request bodies or keys.
