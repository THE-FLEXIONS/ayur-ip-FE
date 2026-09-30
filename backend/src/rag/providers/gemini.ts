import { GoogleGenAI } from "@google/genai";
import { providerError } from "../../lib/errors.js";

export type GeminiOptions = {
  apiKey: string;
  model: string;
  timeoutMs: number;
  store: boolean;
};

export type JsonRequest = {
  systemInstruction: string;
  input: string;
  /** JSON schema the model's reply must follow. */
  schema: Record<string, unknown>;
};

/** Returns the model's raw JSON text for a request. Parsing is the caller's job. */
export type GenerateJson = (request: JsonRequest) => Promise<string>;

/**
 * Gemini answer generation through the Interactions API, which Google
 * recommends for new projects, with structured JSON output. The guide asks for
 * temperature 0.1, but the Interactions API in @google/genai 2.x has no
 * temperature setting, so the strict prompt and schema carry that job.
 */
export function createGemini(options: GeminiOptions): GenerateJson {
  const ai = new GoogleGenAI({ apiKey: options.apiKey });

  return async ({ systemInstruction, input, schema }) => {
    try {
      const interaction = await ai.interactions.create(
        {
          model: options.model,
          system_instruction: systemInstruction,
          input,
          response_format: { type: "text", mime_type: "application/json", schema },
          store: options.store,
        },
        { timeout: options.timeoutMs, maxRetries: 1 },
      );
      return interaction.output_text ?? "";
    } catch (err) {
      throw providerError("gemini", err);
    }
  };
}
