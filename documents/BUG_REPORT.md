# Bug Report — language-study

QA review date: 2026-03-30
Source: static analysis of critical-path modules
Tester: QA Engineer Agent

---

## BUG-001 — `answerMatches` rejects valid punctuated inputs

**File:** `src/utils/answerMatch.ts`
**Severity:** High
**Area:** Typed flashcard mode

### What is wrong

`normalize()` strips only literal period characters (`.`). All other punctuation — `!`, `¡`, `?`, `¿`, `'`, `"`, `-`, `,` — survives normalisation and causes an exact-string mismatch.

```ts
const normalize = (s: string) =>
    s.trim().toLowerCase().normalize("NFD")
     .replace(/[\u0300-\u036f]/g, "")
     .replace(/\./g, "")   // ← only periods
```

### Why it's a problem

Spanish exclamations (`¡Hola!`), French contractions (`c'est`), and phrases with commas will be rejected even when semantically correct. Users who type an answer exactly as shown and include natural punctuation are penalised.

### How to reproduce

1. Enable "Type answers" mode.
2. For a card whose answer is `¡Hola!`, type `hola` → rejected (¡ and ! remain in the target).
3. For a card whose answer is `c'est`, type `cest` → rejected (' survives in target).

### Suggested fix

Expand the `replace` to strip all non-alphanumeric, non-space characters:

```ts
.replace(/[^\p{L}\p{N}\s]/gu, "")
```

---

## BUG-002 — `answerMatches` has no multi-answer API

**File:** `src/utils/answerMatch.ts`
**Severity:** High
**Area:** Typed flashcard mode

### What is wrong

The function signature is `answerMatches(input: string, target: string): boolean`. It accepts a single target. If a flashcard has multiple valid answers (e.g. "hola" / "hello" for the same card), the caller must manually OR multiple calls. There is no evidence in the codebase that call sites do this consistently.

### Why it's a problem

Any call site that passes only the primary answer string will mark valid alternates as incorrect, silently degrading the user's score and SRS schedule.

### How to reproduce

1. Find a vocab item with multiple translations.
2. Type the secondary translation in typed flashcard mode.
3. Observe "incorrect" result despite the answer being valid.

### Suggested fix

Accept a union type:

```ts
export function answerMatches(input: string, target: string | string[]): boolean {
    const norm = normalize(input)
    const targets = Array.isArray(target) ? target : [target]
    return targets.some(t => normalize(t) === norm)
}
```

---

## BUG-003 — `getGlobalStreak` resets to 0 at midnight even after consistent study

**File:** `src/store/useStatsStore.ts`
**Severity:** Medium
**Area:** Streak / stats

### What is wrong

`getGlobalStreak` walks backwards from **today**. If the user has not yet studied today, `hasActivity` is false for today's date, and the loop exits immediately returning `streak = 0`. A user who studied every day for 30 days will see a streak of 0 the moment a new calendar day starts.

```ts
for (let i = 0; i < 365; i++) {
    const dateStr = d.toISOString().slice(0, 10)
    const hasActivity = Object.values(data).some(...)
    if (!hasActivity) break   // ← today with no study → immediate break
    streak++
    d.setDate(d.getDate() - 1)
}
```

### Why it's a problem

The streak is displayed in the NavBar and on the Profile page. After midnight each day it shows 0 until the user completes a session. This is a severe UX regression for a gamification mechanic that depends on visible consistency.

### How to reproduce

1. Study any language today.
2. Advance the system clock past midnight (or test with a mocked date for tomorrow).
3. Open the app → streak shows 0 despite yesterday's activity.

### Suggested fix

Walk back starting from yesterday if today has no activity, and only break the streak if **yesterday** also has no activity:

```ts
export function getGlobalStreak(data: StatsData): number {
    const today = new Date()
    const todayStr = today.toISOString().slice(0, 10)
    const hasToday = Object.values(data).some(ld => {
        const d = ld[todayStr]
        return d && (d.acts ?? 0) + (d.reviewed ?? 0) > 0
    })
    let streak = hasToday ? 1 : 0
    const d = new Date(today)
    if (!hasToday) d.setDate(d.getDate() - 1)   // start checking from yesterday
    else d.setDate(d.getDate() - 1)              // already counted today, go back
    for (let i = 0; i < 364; i++) {
        const dateStr = d.toISOString().slice(0, 10)
        const hasActivity = Object.values(data).some(ld => {
            const day = ld[dateStr]
            return day && (day.acts ?? 0) + (day.reviewed ?? 0) > 0
        })
        if (!hasActivity) break
        streak++
        d.setDate(d.getDate() - 1)
    }
    return streak
}
```

---

## BUG-004 — `useDrill.advance` silently skips questions when `selected === null`

**File:** `packages/quiz-engine/src/useDrill.ts`
**Severity:** Medium
**Area:** Drill state machine

### What is wrong

`handleNext()` calls `advance(score, index, selected)` unconditionally. If `selected` is `null` at call time, `advance` runs:

```ts
const isCorrect = null === q.correct    // → false
if (!isCorrect && currentSelected !== null) {  // ← null guard, no miss recorded
    setMissed(...)
}
// question is silently skipped, score unaffected
```

The question is skipped with no penalty and no missed-entry. The keyboard path is safe (Enter only fires when `revealed === true`), but `handleNext` is a public API exported in `DrillState` and can be called from the UI or programmatically.

### Why it's a problem

If the "Next" button is rendered without being gated on `revealed`, or if a component test calls `handleNext()` directly, the question is skipped silently. Score and missed-list are both wrong.

### Suggested fix

Guard at the top of `handleNext`:

```ts
function handleNext() {
    if (!revealed) return
    advance(score, index, selected)
}
```

---

## BUG-005 — No localStorage schema versioning guard

**File:** `src/store/progress.ts`
**Severity:** Medium
**Area:** Data persistence / migrations

### What is wrong

`loadProgress()` merges stored data with `DEFAULT` via a shallow spread:

```ts
_cache = { ...DEFAULT, ...JSON.parse(localStorage.getItem(KEY) ?? "{}") }
```

There is no version field in the schema, no migration path, and no schema validation. If a field is renamed or removed in a future release (e.g. `masteredUnits` restructured), old data silently persists with a wrong shape.

### Why it's a problem

Users who have existing `ls:progress` data from a previous version will silently carry stale or conflicting fields. This can cause subtle runtime errors or incorrect UI state (e.g. units appearing as locked when they shouldn't be, or vice versa). The risk is noted in the project context but there is still no guard in place.

### Suggested fix

Add a `schemaVersion` field and a migration function:

```ts
const SCHEMA_VERSION = 1

function migrate(raw: Record<string, unknown>): UserProgress {
    const version = (raw.schemaVersion as number) ?? 0
    if (version < 1) {
        // v0 → v1: rename example field, etc.
    }
    return { ...DEFAULT, ...raw, schemaVersion: SCHEMA_VERSION } as UserProgress
}
```

---

## BUG-006 — `isUnitUnlocked` assumes contiguous `order` values

**File:** `src/store/progress.ts`
**Severity:** Low
**Area:** Unit unlock logic

### What is wrong

`isUnitUnlocked` unlocks a unit if no "previous" unit (order - 1) is found:

```ts
const prev = allUnits.find(u => u.order === unit.order - 1)
if (!prev) return true   // ← silently unlocks if gap in ordering
```

If content data has non-contiguous order values (e.g. `1, 2, 4`), unit with `order = 4` looks for `order = 3`, finds nothing, and returns `true` — unlocking the unit regardless of completion of unit 2.

### Why it's a problem

A content authoring mistake (incorrect `order` values, reordering units) silently breaks the unlock gate for all affected units.

### Suggested fix

Sort units by `order` and use index-based lookup instead of relying on contiguous ordering:

```ts
export function isUnitUnlocked(langId, unitId, allUnits): boolean {
    const sorted = [...allUnits].sort((a, b) => a.order - b.order)
    const idx = sorted.findIndex(u => u.id === unitId)
    if (idx <= 0) return true
    return getMasteredUnits(langId).includes(sorted[idx - 1].id)
}
```

---

## Latent Risks (not confirmed bugs, but high-risk design gaps)

| # | Area | Risk |
|---|------|------|
| L1 | SRS import | `getDueCards` treats any card with `nextReviewAt === 0` as a new, always-due card — a corrupt or manually-imported card state with `nextReviewAt: 0` will never leave the due queue |
| L2 | Auth | `isAuthenticated()` returns `false` for an expired session, but the session object remains in storage; stale session could be misread by code that calls `getSession()` directly rather than `isAuthenticated()` |
| L3 | Stats | `resetAllStats()` loads from storage asynchronously *after* clearing in-memory state; in Stage 2 (Supabase) this introduces a TOCTOU race where some language keys may not be wiped if the async load returns empty |
| L4 | TTS | Timezone-shifted `nextReviewAt` timestamps (device clock drift, travel) will cause cards to appear due earlier or later than expected — no clock-drift guard in `getDueCards` |
