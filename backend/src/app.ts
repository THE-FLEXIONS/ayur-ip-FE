import cors from "cors";
import express, { type ErrorRequestHandler } from "express";
import helmet from "helmet";
import { HttpError } from "./lib/errors.js";
import { createRoutes, type RouteDeps } from "./routes/index.js";

export type AppOptions = RouteDeps & {
  /** Browser origins allowed to call the API directly. Empty allows none. */
  corsOrigins: string[];
};

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message });
    return;
  }
  // Body-parser errors (bad JSON, oversized body) carry a 4xx status.
  const status = typeof err?.status === "number" ? err.status : 500;
  if (status === 400) {
    res.status(400).json({ error: "Request body must be valid JSON." });
  } else if (status === 413) {
    res.status(413).json({ error: "Request is too large." });
  } else {
    console.error("[api] unexpected error:", err instanceof Error ? err.message : err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

export function createApp({ corsOrigins, ...deps }: AppOptions) {
  const app = express();
  app.disable("x-powered-by");
  app.use(helmet());
  app.use(cors({ origin: corsOrigins, methods: ["GET", "POST"] }));
  app.use(express.json({ limit: "16kb" }));

  app.use("/api", createRoutes(deps));
  app.use((_req, res) => {
    res.status(404).json({ error: "Not found." });
  });
  app.use(errorHandler);
  return app;
}
