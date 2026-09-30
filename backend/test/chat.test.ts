import assert from "node:assert/strict";
import { describe, it } from "node:test";
import request from "supertest";
import { createApp } from "../src/app.js";
import { providerError } from "../src/lib/errors.js";
import { createHerbalService } from "../src/services/herbal/herbal.service.js";
import { createMemoryHerbStore } from "../src/services/herbal/memoryStore.js";
import type { GenerateJson, JsonRequest } from "../src/rag/providers/gemini.js";
import { ABSTAIN_ANSWER, createChatService, type Evidence, type Retriever } from "../src/services/chat.service.js";

function appWith(generate: GenerateJson, retriever?: Retriever) {
  const herbs = createHerbalService({ store: createMemoryHerbStore() });
  return createApp({ chat: createChatService({ generate, retriever }), herbs, corsOrigins: [] });
}

const reply = (body: unknown): GenerateJson => async () => JSON.stringify(body);

const EVIDENCE: Evidence[] = [
  { id: "doc_1_chunk_0", text: "Section 3(p) excludes traditional knowledge.", title: "Patents Act, 1970", url: "https://ipindia.gov.in", score: 0.9 },
  { id: "doc_2_chunk_3", text: "TKDL is a prior-art database.", title: "TKDL overview", url: null, score: 0.8 },
];

describe("GET /api/health", () => {
  it("reports ok", async () => {
    const res = await request(appWith(reply({}))).get("/api/health");
    assert.equal(res.status, 200);
    assert.equal(res.body.status, "ok");
  });
});

describe("POST /api/chat validation", () => {
  const app = appWith(reply({ answer: "x", insufficient_evidence: false }));

  it("rejects an empty question", async () => {
    const res = await request(app).post("/api/chat").send({ message: "   " });
    assert.equal(res.status, 400);
    assert.equal(res.body.error, "Please enter a question.");
  });

  it("rejects a question over 1000 characters", async () => {
    const res = await request(app).post("/api/chat").send({ message: "a".repeat(1001) });
    assert.equal(res.status, 400);
  });

  it("rejects invalid JSON", async () => {
    const res = await request(app).post("/api/chat").set("Content-Type", "application/json").send("{oops");
    assert.equal(res.status, 400);
    assert.equal(res.body.error, "Request body must be valid JSON.");
  });

  it("rejects an unknown jurisdiction", async () => {
    const res = await request(app).post("/api/chat").send({ message: "hi", jurisdiction: "MARS" });
    assert.equal(res.status, 400);
  });
});

describe("POST /api/chat without a document store (preview)", () => {
  it("returns an ungrounded answer with no sources", async () => {
    let seen: JsonRequest | undefined;
    const app = appWith(async (req) => {
      seen = req;
      return JSON.stringify({ answer: "  A general answer.  ", insufficient_evidence: false });
    });
    const res = await request(app).post("/api/chat").send({ message: "Can I patent a formulation?", mode: "quick", jurisdiction: "EU" });
    assert.equal(res.status, 200);
    assert.deepEqual(res.body, { answer: "A general answer.", sources: [], grounded: false });
    assert.match(seen!.input, /European Union/);
    assert.match(seen!.input, /2 to 4 sentences/);
  });

  it("abstains when the model reports insufficient evidence", async () => {
    const res = await request(appWith(reply({ answer: "maybe", insufficient_evidence: true }))).post("/api/chat").send({ message: "q" });
    assert.equal(res.status, 200);
    assert.equal(res.body.answer, ABSTAIN_ANSWER);
    assert.equal(res.body.insufficientEvidence, true);
  });

  it("returns a controlled error for malformed model JSON, without raw text", async () => {
    const res = await request(appWith(async () => "not json SECRET-RAW-TEXT")).post("/api/chat").send({ message: "q" });
    assert.equal(res.status, 502);
    assert.doesNotMatch(JSON.stringify(res.body), /SECRET-RAW-TEXT/);
  });
});

describe("POST /api/chat with retrieved evidence (grounded)", () => {
  const retriever: Retriever = async () => EVIDENCE;

  it("returns cited sources from the database, not the model", async () => {
    const app = appWith(reply({ answer: "Grounded.", cited_source_ids: ["SOURCE_2", "SOURCE_1", "SOURCE_2"], insufficient_evidence: false }), retriever);
    const res = await request(app).post("/api/chat").send({ message: "q" });
    assert.equal(res.status, 200);
    assert.equal(res.body.grounded, true);
    assert.deepEqual(res.body.sources.map((s: { id: string }) => s.id), ["doc_2_chunk_3", "doc_1_chunk_0"]);
    assert.equal(res.body.sources[1].url, "https://ipindia.gov.in");
  });

  it("abstains when the model cites a label that was not retrieved", async () => {
    const app = appWith(reply({ answer: "Made up.", cited_source_ids: ["SOURCE_9"], insufficient_evidence: false }), retriever);
    const res = await request(app).post("/api/chat").send({ message: "q" });
    assert.equal(res.body.answer, ABSTAIN_ANSWER);
    assert.deepEqual(res.body.sources, []);
  });

  it("abstains without calling the model when evidence is below the threshold", async () => {
    let called = false;
    const app = appWith(async () => ((called = true), "{}"), async () => [{ ...EVIDENCE[0]!, score: 0.3 }]);
    const res = await request(app).post("/api/chat").send({ message: "q" });
    assert.equal(res.body.answer, ABSTAIN_ANSWER);
    assert.equal(called, false);
  });
});

describe("provider error mapping", () => {
  const failWith = (err: unknown) => appWith(async () => { throw providerError("gemini", err); });

  it("maps a quota error to 429", async () => {
    const res = await request(failWith(Object.assign(new Error("quota"), { status: 429 }))).post("/api/chat").send({ message: "q" });
    assert.equal(res.status, 429);
  });

  it("maps an invalid key to 503 without leaking provider details", async () => {
    const err = Object.assign(new Error('{"error":"API key not valid AIzaLEAKED"}'), { status: 400 });
    const res = await request(failWith(err)).post("/api/chat").send({ message: "q" });
    assert.equal(res.status, 503);
    assert.doesNotMatch(JSON.stringify(res.body), /AIza|API key/);
  });

  it("maps a timeout to 503", async () => {
    const err = Object.assign(new Error("timed out"), { name: "APIConnectionTimeoutError" });
    const res = await request(failWith(err)).post("/api/chat").send({ message: "q" });
    assert.equal(res.status, 503);
    assert.match(res.body.error, /in time/);
  });

  it("returns a generic 500 for unexpected errors", async () => {
    const res = await request(appWith(async () => { throw new Error("boom"); })).post("/api/chat").send({ message: "q" });
    assert.equal(res.status, 500);
    assert.equal(res.body.error, "Something went wrong. Please try again.");
  });
});

describe("routing", () => {
  it("returns JSON 404 for unknown routes", async () => {
    const res = await request(appWith(reply({}))).get("/api/nope");
    assert.equal(res.status, 404);
  });
});
