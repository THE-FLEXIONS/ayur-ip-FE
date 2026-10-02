import type { LanguageCode } from "../../config/app";
import type { Jurisdiction, ResearchMode, ResearchTool } from "../../config/research";

// Shapes returned by the backend (see the backend README's API reference).

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isDemo: boolean;
  createdAt: string;
};

export type Session = { token: string; user: User };

export type DemoCredentials = { enabled: true; email: string; password: string } | { enabled: false };

export type Source = { title: string; url: string };

export type EntryStatus = "pending" | "complete" | "error" | "aborted";

export type HistoryEntry = {
  id: string;
  question: string;
  mode: ResearchMode;
  jurisdiction: Jurisdiction;
  language: LanguageCode;
  tool: ResearchTool | null;
  answer: string;
  sources: Source[];
  status: EntryStatus;
  errorMessage: string | null;
  saved: boolean;
  /** Epoch milliseconds. */
  askedAt: number;
  completedAt: number | null;
};

export type Preferences = {
  mode: ResearchMode;
  jurisdiction: Jurisdiction;
  language: LanguageCode;
};

export type LibraryKind = "herb" | "formulation" | "classical_text";

export type LibraryItem = {
  id: string;
  slug: string;
  kind: LibraryKind;
  name: string;
  latinName: string | null;
  sanskritName: string | null;
  hindiName: string | null;
  summary: string;
  description: string | null;
  therapeuticAreas: string[];
  partsUsed: string[];
  regions: string[];
  tags: string[];
  classicalReferences: string[];
  imageUrl: string | null;
  isFeatured: boolean;
};

export type LibraryPage = {
  items: LibraryItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type FacetCount<T extends string = string> = { value: T; count: number };

export type LibraryFacets = {
  kinds: FacetCount<LibraryKind>[];
  therapeuticAreas: FacetCount[];
  partsUsed: FacetCount[];
  regions: FacetCount[];
};

export type LibraryFilters = {
  q?: string;
  kind?: LibraryKind;
  therapeuticArea?: string;
  partUsed?: string;
  region?: string;
  page?: number;
  limit?: number;
};

export type SuggestionKind = "herb" | "formulation" | "classical_text" | "reference" | "other";
