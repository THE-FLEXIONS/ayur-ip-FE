import { request } from "./client";
import type { LibraryFacets, LibraryFilters, LibraryItem, LibraryKind, LibraryPage } from "./types";

export const libraryApi = {
  search: (filters: LibraryFilters, signal?: AbortSignal) =>
    request<LibraryPage>("/library", { query: filters, signal }),
  featured: (kind?: LibraryKind, limit = 5) =>
    request<{ items: LibraryItem[] }>("/library/featured", { query: { kind, limit } }).then((r) => r.items),
  facets: () => request<LibraryFacets>("/library/facets"),
  get: (slug: string) => request<{ item: LibraryItem }>(`/library/${slug}`).then((r) => r.item),
};
