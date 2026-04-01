// hooks/useContentQuery.ts — Async-ready wrapper for synchronous repo.ts queries.
//
// Stage 1 (current): queryFn is synchronous (reads from the in-memory module
//   cache loaded by LanguageLoader). The hook runs it immediately and returns
//   a stable { data, loading: false, error: null } shape.
//
// Stage 2 (Supabase): replace queryFn implementations in repo.ts with async
//   DB calls and switch the hook body to handle Promises + loading/error state.
//   No page code changes required — pages already consume the { data, loading, error }
//   shape.
//
// Usage:
//   const { data: lessons } = useContentQuery(
//     () => getGrammarForLevel(langId, level),
//     [langId, level]
//   )

import { useMemo } from "react"

export interface ContentQueryResult<T> {
    data: T
    loading: false
    error: null
}

export function useContentQuery<T>(
    queryFn: () => T,
    deps: readonly unknown[]
): ContentQueryResult<T> {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = useMemo(queryFn, deps)
    return { data, loading: false, error: null }
}
