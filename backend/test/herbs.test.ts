import assert from "node:assert/strict";
import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { after, before, describe, it } from "node:test";
import request from "supertest";
import { createApp } from "../src/app.js";
import { SEED_HERBS } from "../src/data/seedHerbs.js";
import { createChatService } from "../src/services/chat.service.js";
import { createHerbalService } from "../src/services/herbal/herbal.service.js";
import { createMemoryHerbStore } from "../src/services/herbal/memoryStore.js";
import { createPostgresHerbStore } from "../src/services/herbal/postgresStore.js";
import { createTrefleSearch } from "../src/services/herbal/trefle.js";
import type { HerbStore } from "../src/services/herbal/types.js";

/** A stand-in for Trefle's /species/search that records what it was asked. */
function fakeTrefle() {
  const calls: URL[] = [];
  let reply: { status: number; body: unknown } = { status: 200, body: { data: [] } };
  const server: Server = createServer((req, res) => {
    const url = new URL(req.url ?? "/", "http://x");
    calls.push(url);
    res.writeHead(reply.status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(reply.body));
  });
  return {
    calls,
    setReply: (status: number, body: unknown) => (reply = { status, body }),
    start: () => new Promise<string>((ok) => server.listen(0, "127.0.0.1", () => ok(`http://127.0.0.1:${(server.address() as AddressInfo).port}/api/v1`))),
    stop: () => new Promise<void>((ok) => server.close(() => ok())),
  };
}

const TREFLE_ITEMS = [
  { id: 1, common_name: "Winter cherry", scientific_name: "Withania coagulans", family: "Solanaceae", image_url: "https://bs.plantnet.org/x.jpg" },
  { id: 2, common_name: null, scientific_name: "Withania frutescens", family: { name: "Solanaceae" }, image_url: "javascript:alert(1)" },
  { id: 3, common_name: "No name", scientific_name: "" },
];

function appWith(store: HerbStore, trefleBase?: string, maxPerMinute?: number) {
  const trefle = trefleBase
    ? createTrefleSearch({ token: "SECRET-TOKEN", baseUrl: trefleBase, timeoutMs: 2000, storeRaw: false, maxPerMinute })
    : undefined;
  const chat = createChatService({ generate: async () => "{}" });
  return createApp({ chat, herbs: createHerbalService({ store, trefle }), corsOrigins: [] });
}

describe("GET /api/herbs/search", () => {
  const trefle = fakeTrefle();
  let base = "";
  before(async () => (base = await trefle.start()));
  after(() => trefle.stop());

  it("validates the query", async () => {
    const app = appWith(createMemoryHerbStore());
    assert.equal((await request(app).get("/api/herbs/search")).status, 400);
    assert.equal((await request(app).get("/api/herbs/search?q=a")).status, 400);
    assert.equal((await request(app).get(`/api/herbs/search?q=${"a".repeat(101)}`)).status, 400);
  });

  it("serves seed herbs from the cache without calling Trefle", async () => {
    const store = createMemoryHerbStore();
    await store.saveMany(SEED_HERBS);
    const before = trefle.calls.length;
    const res = await request(appWith(store, base)).get("/api/herbs/search?q=ashwa");
    assert.equal(res.status, 200);
    assert.deepEqual(res.body.results, [
      { commonName: "Ashwagandha", botanicalName: "Withania somnifera", family: "Solanaceae", imageUrl: null, source: "seed" },
    ]);
    assert.equal(trefle.calls.length, before);
  });

  it("queries Trefle on a miss, normalizes, caches, and serves the repeat from cache", async () => {
    trefle.setReply(200, { data: TREFLE_ITEMS });
    const store = createMemoryHerbStore();
    const app = appWith(store, base);
    const first = await request(app).get("/api/herbs/search?q=withania");
    assert.equal(first.status, 200);
    assert.deepEqual(first.body.results, [
      { commonName: "Winter cherry", botanicalName: "Withania coagulans", family: "Solanaceae", imageUrl: "https://bs.plantnet.org/x.jpg", source: "trefle" },
      { commonName: null, botanicalName: "Withania frutescens", family: "Solanaceae", imageUrl: null, source: "trefle" },
    ]);
    const call = trefle.calls.at(-1)!;
    assert.equal(call.pathname, "/api/v1/species/search");
    assert.equal(call.searchParams.get("q"), "withania");
    assert.equal(call.searchParams.get("token"), "SECRET-TOKEN");

    const calls = trefle.calls.length;
    const second = await request(app).get("/api/herbs/search?q=withania");
    assert.deepEqual(second.body.results, first.body.results);
    assert.equal(trefle.calls.length, calls, "repeat search should come from the cache");
  });

  it("returns the cached version when Trefle returns a herb the cache already has", async () => {
    trefle.setReply(200, { data: [{ id: 7, common_name: "Water hyssop", scientific_name: "Bacopa monnieri", family: "Plantaginaceae", image_url: "https://bs.plantnet.org/b.jpg" }] });
    const store = createMemoryHerbStore();
    await store.saveMany(SEED_HERBS);
    const res = await request(appWith(store, base)).get("/api/herbs/search?q=water%20hyssop");
    assert.deepEqual(res.body.results, [
      { commonName: "Brahmi", botanicalName: "Bacopa monnieri", family: "Plantaginaceae", imageUrl: null, source: "seed" },
    ]);
  });

  it("returns an empty list for an unknown herb, with no invented record", async () => {
    trefle.setReply(200, { data: [] });
    const res = await request(appWith(createMemoryHerbStore(), base)).get("/api/herbs/search?q=zzqqxx");
    assert.equal(res.status, 200);
    assert.deepEqual(res.body.results, []);
  });

  it("returns cache-only results when no Trefle token is configured", async () => {
    const res = await request(appWith(createMemoryHerbStore())).get("/api/herbs/search?q=withania");
    assert.deepEqual(res.body.results, []);
  });

  it("maps Trefle 429 to 429 and other failures to 503, never leaking the token", async () => {
    trefle.setReply(429, { error: true });
    const limited = await request(appWith(createMemoryHerbStore(), base)).get("/api/herbs/search?q=tulsi");
    assert.equal(limited.status, 429);

    trefle.setReply(401, { error: true, message: "token SECRET-TOKEN invalid" });
    const failed = await request(appWith(createMemoryHerbStore(), base)).get("/api/herbs/search?q=tulsi");
    assert.equal(failed.status, 503);
    assert.doesNotMatch(JSON.stringify([limited.body, failed.body]), /SECRET-TOKEN/);
  });

  it("maps an unreachable Trefle to 503", async () => {
    const res = await request(appWith(createMemoryHerbStore(), "http://127.0.0.1:1/api/v1")).get("/api/herbs/search?q=tulsi");
    assert.equal(res.status, 503);
  });

  it("stops calling Trefle once its per-minute budget is spent", async () => {
    trefle.setReply(200, { data: [] });
    const app = appWith(createMemoryHerbStore(), base, 2);
    const statuses = [];
    for (const q of ["aa", "bb", "cc"]) statuses.push((await request(app).get(`/api/herbs/search?q=${q}`)).status);
    assert.deepEqual(statuses, [200, 200, 429]);
  });
});

describe("PostgreSQL herb store", { skip: !process.env.TEST_DATABASE_URL && "set TEST_DATABASE_URL to run" }, () => {
  let store: HerbStore;
  before(async () => {
    store = await createPostgresHerbStore(process.env.TEST_DATABASE_URL!);
  });
  after(() => store.close?.());

  it("saves, ignores duplicates and searches case-insensitively", async () => {
    await store.saveMany(SEED_HERBS);
    await store.saveMany([{ ...SEED_HERBS[0]!, commonName: "Changed" }]);
    const rows = await store.search("ASHWA", 20);
    assert.deepEqual(rows, [
      { commonName: "Ashwagandha", botanicalName: "Withania somnifera", family: "Solanaceae", imageUrl: null, source: "seed" },
    ]);
  });

  it("treats LIKE wildcards and quotes in the query literally", async () => {
    assert.deepEqual(await store.search("%", 20), []);
    assert.deepEqual(await store.search("_", 20), []);
    assert.deepEqual(await store.search("'; DROP TABLE herbs; --", 20), []);
    assert.ok((await store.search("curcuma", 20)).length === 1, "table still intact");
  });

  it("fetches stored records by botanical name, in the order asked", async () => {
    const rows = await store.getMany(["Curcuma longa", "Not stored", "Withania somnifera"]);
    assert.deepEqual(rows.map((r) => r.commonName), ["Turmeric", "Ashwagandha"]);
  });

  it("stores Trefle records with nullable fields", async () => {
    await store.saveMany([
      { commonName: null, botanicalName: "Testus nullus", family: null, imageUrl: null, source: "trefle", providerId: "9", rawData: { id: 9 } },
    ]);
    assert.deepEqual(await store.search("testus", 20), [
      { commonName: null, botanicalName: "Testus nullus", family: null, imageUrl: null, source: "trefle" },
    ]);
  });
});
