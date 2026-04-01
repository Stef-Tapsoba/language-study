# Architecture Review — Modularity & Migration Readiness

*Author: Software Architect Agent | Date: 2026-04-01*
*Focus: Changes needed before and during Supabase migration (Stage 2)*

---

## Summary Table

| ID | Finding | Category | Priority | Pre-migration? | Effort |
|----|---------|----------|----------|----------------|--------|
| A-1 | `isUnitUnlocked()` imported directly from `progress.ts`, bypasses registry | Modularity | P1 | Yes | 2h |
| A-2 | `ProgressContext` mutations are fire-and-forget: no await, no error propagation | Async / Modularity | P1 | Yes | 3h |
| A-3 | `initUserSession()` doesn't await `resetAll()` before `refresh()` — race condition | Async | P1 | Yes | 1h |
| A-4 | `resetAllStats()` returns void; callers cannot await or detect failure | Async | P1 | Yes | 1h |
| M-1 | `IProgressStorage.load()` has no cache layer — becomes 4 DB round trips at Stage 2 | Migration | P1 | Yes | 2h |
| M-2 | `registry.srs.getStates()` is synchronous; race if hydration hasn't completed | Migration | P1 | Yes | 1h |
| M-3 | `ProfilePage` reaches into `registry` directly instead of through `actions.ts` | Migration | P2 | No | 1h |
| M-4 | `completedByType` is written but never read — dead data field | Migration | P2 | No | 0.5h |
| D-1 | Merge logic (progress / SRS / stats) is private to `ProfilePage` — not reusable | Duplication | P2 | No | 1h |
| D-2 | `resetLanguageData` and `removeLanguageData` are structurally identical | Duplication | P3 | No | 0.5h |
| T-1 | `contentType` in `markLessonComplete` is required by interface but optional in `progress.ts` | Type Safety | P2 | Yes | 1h |
| T-2 | `DayStats` field relationships (`reviewed` vs `qTotal`) are ambiguous and undocumented | Type Safety | P2 | No | 0.5h |
| T-3 | SRS schema migration is buried inside `LocalStorageSRSStorage` with no versioning strategy | Type Safety | P2 | No | 1h |
| T-4 | `UserProgress` has no `updatedAt` timestamp — conflict detection impossible | Type Safety | P3 | No | 1h |

---

## P1 Findings — Fix Before Supabase Migration

---

### A-1 · `isUnitUnlocked()` bypasses the registry

**File:** `src/store/progress.ts:229`, imported in `DashboardPage.tsx` and `UnitPage.tsx`

**Problem:**
`isUnitUnlocked()` reads from the `_cache` variable inside `progress.ts` — the LocalStorage-only cache. When `SupabaseProgressStorage` becomes active, its data is hydrated into a *separate* cache inside the adapter. Pages still calling `isUnitUnlocked()` directly will read stale data, causing units to appear locked when they should be open.

**Recommendation:**
The function already takes `masteredIds: string[]` as an explicit parameter — it's already pure. The fix is to stop importing it from `progress.ts` and instead move it to a dedicated file that has no localStorage import:

```typescript
// src/store/progressUtils.ts — no storage imports, pure logic only
export function isUnitUnlocked(
    unitId: string,
    allUnits: { id: string; order: number }[],
    masteredIds: string[]
): boolean { ... }
```

Pages read `masteredIds` from `useProgress().mastered(langId)` (which already reads the registry cache), so no other change is needed at call sites.

---

### A-2 · `ProgressContext` mutations are fire-and-forget

**File:** `src/context/ProgressContext.tsx:83–107`

**Problem:**
Every mutation follows this pattern:
```typescript
const setSelectedLanguage = useCallback((langId: string) => {
    registry.progress.setSelectedLanguage(langId).catch(console.error) // ← error swallowed
    refresh()  // ← reads stale state before write completes
}, [refresh])
```

In Stage 1 this is harmless (localStorage is synchronous). In Stage 2, Supabase writes are async: the refresh reads stale state, errors are never shown to the user, and a slow network will silently drop data.

**Recommendation:**
Make mutations async and expose errors via `mutationError` state:

```typescript
interface ProgressContextValue {
    ...
    mutationError: Error | null
    clearMutationError: () => void
}

const setSelectedLanguage = useCallback(async (langId: string) => {
    try {
        await registry.progress.setSelectedLanguage(langId)
        refresh()
    } catch (err) {
        setMutationError(err instanceof Error ? err : new Error(String(err)))
    }
}, [refresh])
```

Pages render an error banner when `mutationError` is non-null (reuse the `hydrateError` banner pattern already planned in SUPABASE_MIGRATION.md §5).

---

### A-3 · `initUserSession` races between reset and refresh

**File:** `src/context/ProgressContext.tsx:63–81`

**Problem:**
When a different user logs in, the current code fires `resetAll()` and `resetAllStats()` without awaiting them before calling `hydrate()`. The new user's stats are loaded before the old user's stats are cleared, so they briefly coexist in the Zustand store.

```typescript
// Current — resetAll and resetAllStats fire without await
if (prev.userId !== userId) {
    registry.srs.resetAll().catch(console.error)   // ← fire-and-forget
    useStatsStore.getState().resetAllStats()        // ← returns void
}
return useStatsStore.getState().hydrate()           // ← runs before resets complete
```

**Recommendation:**
```typescript
const resets = prev.userId !== userId
    ? [registry.srs.resetAll(), useStatsStore.getState().resetAllStats()]
    : []

registry.progress.initSession(userId)
    .then(() => Promise.all(resets))
    .then(() => useStatsStore.getState().hydrate())
    .then(() => { refresh(); setIsHydrating(false) })
    .catch(...)
```

This requires `resetAllStats()` to return `Promise<void>` (see A-4).

---

### A-4 · `resetAllStats()` returns void — callers cannot await

**File:** `src/store/useStatsStore.ts:122–132`

**Problem:**
`resetAllStats()` calls `registry.stats.load()` and then `registry.stats.resetLanguage()` in a `.then()` chain, but the method signature returns `void`. Callers can't await completion, and if `load()` fails, the local state is already wiped but the backend is not.

**Recommendation:**
Change the return type to `Promise<void>` and update the implementation:

```typescript
async resetAllStats(): Promise<void> {
    set({ data: {} })
    const current = await registry.stats.load()
    await Promise.all(Object.keys(current).map(lang => registry.stats.resetLanguage(lang)))
},
```

This is a non-breaking change in Stage 1 (all callers currently ignore the return value).

---

### M-1 · `IProgressStorage.load()` has no caching layer

**File:** `src/store/IProgressStorage.ts:41`

**Problem:**
`load(): UserProgress` is called by `ProgressContext.refresh()` after every single mutation. In Stage 1 this is a cheap `JSON.parse`. In Stage 2, `SupabaseProgressStorage` will need to execute the `hydrate_progress` RPC (or 4 individual queries) on every call — meaning a simple lesson completion triggers a full DB round trip just to refresh React state.

The `SupabaseProgressStorage` adapter will work around this with an internal `_cache` (already shown in SUPABASE_MIGRATION.md §2.1), but the interface doesn't make the contract explicit, so the next developer could call `load()` anywhere and not realize it's an expensive operation.

**Recommendation:**
Clarify the interface contract with docs and add an optional `getCached()` read:

```typescript
export interface IProgressStorage {
    /**
     * Return the current in-memory cache.
     * Stage 1: reads localStorage directly (cheap).
     * Stage 2: reads from the local write-through cache — never hits the DB.
     * Never call this before initSession() completes.
     */
    load(): UserProgress

    /**
     * Hydrate the in-memory cache from the storage backend.
     * Stage 1: no-op (load() is always current).
     * Stage 2: issues the hydrate_progress RPC. Call once on login.
     * Called by ProgressContext.initSession() — do not call from pages.
     */
    initSession(userId: string): Promise<void>
    ...
}
```

Update `ProgressContext` to rely on the write-through cache invariant: after a mutation, the adapter updates its own cache and resolves. Then `refresh()` calls `load()` which reads from cache — no extra DB trip.

**This works already for Stage 2 because `SupabaseProgressStorage` maintains `_cache` internally.** The only fix needed now is adding the documentation so Stage 2 implementors know the contract.

---

### M-2 · SRS `getStates()` can return empty data if called before hydration

**File:** `src/store/ISRSStorage.ts:14`, `src/store/srs.ts:42`

**Problem:**
`getStates(langId)` is synchronous. At Stage 2, it must be served from a pre-hydrated cache. If `FlashcardsPage` loads before `initSession()` completes (e.g., deep-link navigation), `getDueCards()` sees an empty cache and returns all vocab as "new cards", overriding real SRS state.

**Recommendation:**
Add a guard in `srs.ts` using the `hydrated` flag already available on the stats store:

```typescript
// src/store/srs.ts
export function getSRSStates(langId: string): Record<string, SRSCardState> {
    // In Stage 2: if the registry is a SupabaseSRSStorage and hydrate() hasn't run
    // for this langId, log a warning. Pages should await initSession before rendering.
    return registry.srs.getStates(langId)
}
```

And in `FlashcardsPage`, gate rendering on `!isHydrating` from `useProgress()`:

```typescript
const { isHydrating } = useProgress()
if (isHydrating) return <LoadingSkeleton />
```

This is already unblocked by A-2 (which adds `isHydrating` to the context).

---

## P2 Findings — Important But Not Blocking

---

### M-3 · `ProfilePage` bypasses `actions.ts` for export/import

**File:** `src/pages/ProfilePage.tsx`

The page calls `registry.progress.load()`, `registry.srs.loadAll()`, and `registry.stats.load()` directly. This couples the UI to the storage layer, makes the logic untestable at the action level, and means any change to how data is exported (e.g., fetching from Supabase instead of localStorage) requires editing the page.

**Recommendation:** Create `exportProgressSnapshot()` and `importProgressSnapshot(backup)` in `actions.ts`. The page calls actions, not registry.

---

### M-4 · `completedByType` is written but never read

**File:** `src/store/progress.ts:136–147`, `src/types/index.ts:282`

The field accumulates data in localStorage silently. At Stage 2, the Supabase adapter will route by `content_type` column directly — `completedByType` in the hydrated object is redundant. Stop writing it in Stage 1 to avoid bloating localStorage; the Stage 2 adapter doesn't need it.

---

### D-1 · Merge logic is private to `ProfilePage`

**File:** `src/pages/ProfilePage.tsx` (functions `mergeProgressData`, `mergeSRS`, `mergeStats`)

These three functions implement the same "union nested maps without downgrades" pattern independently. They are untestable (private to a page) and can't be reused when the Supabase migration adds online conflict resolution.

**Recommendation:** Extract to `src/store/merge.ts`. Test independently with Vitest. `ProfilePage` imports from there.

---

### T-1 · `contentType` is required in the interface but optional in the implementation

**File:** `src/store/progress.ts:131` — `contentType?: ContentType`
**File:** `src/store/IProgressStorage.ts:60` — `contentType: ContentType` (required)

The implementation signature is looser than the interface. This compiles because TypeScript allows optional parameters at the concrete class level, but it means `markLessonComplete` can be called without `contentType` directly on `progress.ts` functions, bypassing the contract.

**Recommendation:** Change `progress.ts:131` to `contentType: ContentType` (required). Audit all call sites.

---

### T-2 · `DayStats` field relationships are undocumented and confusing

**File:** `src/store/useStatsStore.ts:15–21`

The overlap between `reviewed/correct` (flashcard-only) and `qTotal/qCorrect` (all quiz types) is not documented. `recordReview()` increments both, `recordQuizAnswer()` increments only `qTotal`. The fallback in `getOverallAccuracy()` (`qTotal ?? reviewed`) will silently compute wrong accuracy for users with pre-existing `reviewed`-only data.

**Recommendation:** Add inline documentation clarifying the overlap. Add a `getDayMetrics(stats: DayStats)` helper that computes canonical derived values (total actions, accuracy) in one place.

---

### T-3 · SRS schema migration is buried inside the storage adapter

**File:** `src/store/LocalStorageSRSStorage.ts:13–45`

The `migrateIfNeeded()` function handles v1→v2 SRS schema changes but is private, unversioned, and untested. If `@myorg/srs` adds a v3 shape, there is no obvious place to add the migration.

**Recommendation:** Extract to `src/store/srs-migrate.ts` with explicit versioning:

```typescript
export const SRS_SCHEMA_VERSION = 2

export function migrateSRSStore(raw: unknown): { schemaVersion: 2; [langId: string]: Record<string, SRSCardState> } {
    const version = (raw as { schemaVersion?: number })?.schemaVersion ?? 1
    let data = raw as Record<string, Record<string, unknown>>
    if (version < 2) data = migrateV1ToV2(data)
    // if (version < 3) data = migrateV2ToV3(data)
    return { schemaVersion: 2, ...data }
}
```

---

## P3 Findings — Nice to Have

---

### D-2 · `resetLanguageData` and `removeLanguageData` are structurally identical

**File:** `src/store/actions.ts:152–173`

Both functions perform identical cascades (progress + SRS + stats reset) differing only in `resetLanguage` vs `removeLanguage`. Extract a private helper.

---

### T-4 · No `updatedAt` timestamps on `UserProgress`

When multi-device sync is introduced at Stage 2, there's no way to resolve conflicts between local and remote progress without timestamps. Add `updatedAt?: number` to `UserProgress` and set it on every `save()` call. No UI change required; Stage 2 merge logic will use it.

---

## Implementation Order

### Do now (before Stage 2 work begins)

```
1. A-4  make resetAllStats() return Promise<void>
2. A-3  chain resets before hydrate in initUserSession()
3. A-1  move isUnitUnlocked() to progressUtils.ts
4. A-2  make ProgressContext mutations async + add mutationError state
5. M-1  document load() contract; verify write-through cache invariant holds
6. M-2  add isHydrating guard to FlashcardsPage (and any other page reading SRS)
7. T-1  make contentType required in progress.ts
```

### Do during Stage 2 setup

```
8. M-3  extract export/import to actions.ts
9. D-1  extract merge logic to store/merge.ts
10. T-3  extract SRS migration to srs-migrate.ts
11. M-4  stop writing completedByType in progress.ts
12. T-2  document DayStats relationships
```

### Defer

```
13. D-2  collapse resetLanguage*/removeLanguage* into helper
14. T-4  add updatedAt to UserProgress
```
