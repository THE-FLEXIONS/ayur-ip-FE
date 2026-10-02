import { useEffect, useState } from "react";
import { libraryApi, toApiError, type LibraryFacets, type LibraryFilters, type LibraryItem } from "../lib/api";

type Loadable<T> = { status: "loading" | "ready" | "error"; data: T; error: string | null };

/** True when any search text or filter is set (an empty filter set means "not searching"). */
export function hasActiveFilters(filters: LibraryFilters): boolean {
  return Boolean(filters.q || filters.kind || filters.therapeuticArea || filters.partUsed || filters.region);
}

/**
 * Library search results for `filters`, with "load more" paging. Nothing is
 * fetched while no filter is active.
 */
export function useLibrarySearch(filters: LibraryFilters, pageSize = 12) {
  const [state, setState] = useState<Loadable<LibraryItem[]> & { total: number }>({
    status: "ready",
    data: [],
    error: null,
    total: 0,
  });
  const active = hasActiveFilters(filters);
  const key = JSON.stringify(filters);
  // The page belongs to one set of filters; new filters start again from page 1.
  const [paging, setPaging] = useState({ key, page: 1 });
  const page = paging.key === key ? paging.page : 1;

  useEffect(() => {
    if (!active) {
      setState({ status: "ready", data: [], error: null, total: 0 });
      return;
    }
    const controller = new AbortController();
    setState((s) => ({ ...s, status: "loading", error: null, ...(page === 1 && { data: [] }) }));
    libraryApi
      .search({ ...filters, page, limit: pageSize }, controller.signal)
      .then((res) =>
        setState((s) => ({
          status: "ready",
          error: null,
          total: res.total,
          data: page === 1 ? res.items : [...s.data, ...res.items],
        })),
      )
      .catch((err) => {
        if (controller.signal.aborted) return;
        setState((s) => ({ ...s, status: "error", error: toApiError(err).message }));
      });
    return () => controller.abort();
    // `key` stands in for `filters`, which is a new object on every render.
  }, [key, page, active, pageSize]);

  return {
    ...state,
    active,
    hasMore: state.data.length < state.total,
    loadMore: () => setPaging({ key, page: page + 1 }),
  };
}

/** Category counts, loaded once. */
export function useLibraryFacets() {
  const [facets, setFacets] = useState<LibraryFacets | null>(null);
  useEffect(() => {
    libraryApi.facets().then(setFacets).catch(() => setFacets(null));
  }, []);
  return facets;
}

/** Featured herbs; `null` while loading or if the backend is unreachable. */
export function useFeaturedHerbs(limit = 5) {
  const [items, setItems] = useState<LibraryItem[] | null>(null);
  useEffect(() => {
    libraryApi.featured("herb", limit).then(setItems).catch(() => setItems(null));
  }, [limit]);
  return items;
}

/** Full detail for one library item, or null when nothing is selected. */
export function useLibraryItem(slug: string | null) {
  const [state, setState] = useState<Loadable<LibraryItem | null>>({ status: "ready", data: null, error: null });
  useEffect(() => {
    if (!slug) {
      setState({ status: "ready", data: null, error: null });
      return;
    }
    let cancelled = false;
    setState({ status: "loading", data: null, error: null });
    libraryApi
      .get(slug)
      .then((item) => !cancelled && setState({ status: "ready", data: item, error: null }))
      .catch((err) => !cancelled && setState({ status: "error", data: null, error: toApiError(err).message }));
    return () => {
      cancelled = true;
    };
  }, [slug]);
  return state;
}
