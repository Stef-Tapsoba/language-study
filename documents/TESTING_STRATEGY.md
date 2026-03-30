# Testing Strategy — language-study

QA review date: 2026-03-30
Stack: React 18 + TypeScript + Vite + Tailwind + React Router v6 + localStorage

---

## Tooling

| Tool | Purpose | Install |
|------|---------|---------|
| **Vitest** | Unit + integration tests (native Vite integration, no config overhead) | `npm i -D vitest @vitest/coverage-v8` |
| **@testing-library/react** | Component tests | `npm i -D @testing-library/react @testing-library/user-event` |
| **@testing-library/jest-dom** | DOM matchers | `npm i -D @testing-library/jest-dom` |
| **happy-dom** | Lightweight DOM for Vitest (faster than jsdom) | `npm i -D happy-dom` |
| **Playwright** | E2E user flows | `npm i -D @playwright/test` |

Minimum `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        environment: "happy-dom",
        globals: true,
        setupFiles: ["./src/test/setup.ts"],
        coverage: {
            provider: "v8",
            include: ["src/**", "packages/*/src/**"],
            thresholds: { lines: 80, functions: 80 },
        },
    },
})
```

`src/test/setup.ts`:

```ts
import "@testing-library/jest-dom"
import { afterEach } from "vitest"
import { cleanup } from "@testing-library/react"
afterEach(() => { cleanup(); localStorage.clear() })
```

---

## Priority tiers

| Tier | Scope | When |
|------|-------|------|
| **P0** | Pure logic — no React, no DOM | Every PR |
| **P1** | React hooks and components (RTL) | Every PR touching UI |
| **P2** | Cross-module integration flows | Feature-complete merges |
| **P3** | E2E critical user journeys (Playwright) | Pre-release |

---

## P0 — Pure Unit Tests

### 1. `answerMatches` (`src/utils/answerMatch.ts`)

These should be the very first tests written. The function is pure and has known edge cases.

```ts
describe("answerMatches", () => {
    // Happy path
    it("matches exact strings", () => expect(answerMatches("hola", "hola")).toBe(true))
    it("is case-insensitive", () => expect(answerMatches("HOLA", "hola")).toBe(true))
    it("strips leading/trailing whitespace", () => expect(answerMatches("  hola  ", "hola")).toBe(true))
    it("strips diacritics from input", () => expect(answerMatches("cafe", "café")).toBe(true))
    it("strips diacritics from target", () => expect(answerMatches("café", "cafe")).toBe(true))

    // Punctuation — currently failing (BUG-001)
    it("ignores leading ¡ in target", () => expect(answerMatches("hola", "¡Hola!")).toBe(true))
    it("ignores trailing ? in input", () => expect(answerMatches("hola?", "hola")).toBe(true))
    it("ignores apostrophes", () => expect(answerMatches("cest", "c'est")).toBe(true))

    // Multi-answer — currently failing (BUG-002)
    it("accepts any answer in an array", () =>
        expect(answerMatches("hello", ["hola", "hello"])).toBe(true))
    it("rejects answer not in array", () =>
        expect(answerMatches("buenos dias", ["hola", "hello"])).toBe(false))

    // Rejection
    it("rejects wrong answer", () => expect(answerMatches("adios", "hola")).toBe(false))
    it("rejects empty string against non-empty target", () =>
        expect(answerMatches("", "hola")).toBe(false))
    it("rejects partial match", () => expect(answerMatches("hol", "hola")).toBe(false))

    // Whitespace within string
    it("normalises internal whitespace (multiple spaces)", () =>
        expect(answerMatches("buenos  dias", "buenos días")).toBe(true))

    // Japanese / Korean (no diacritics — exact match required)
    it("matches exact Japanese", () => expect(answerMatches("ありがとう", "ありがとう")).toBe(true))
    it("rejects wrong Japanese", () => expect(answerMatches("こんにちは", "ありがとう")).toBe(false))
})
```

---

### 2. SRS algorithm (`packages/srs/src/algorithm.ts`)

```ts
describe("calcNextReview", () => {
    const base = INITIAL_STATE   // { easeFactor: 2.5, reviewCount: 0, streak: 0, nextReviewAt: 0, intervalDays: 0 }
    const DAY = 86_400_000
    const now = 1_000_000_000_000   // fixed timestamp

    // Interval schedule
    it("first pass: interval = 1 day", () => {
        const { nextState } = calcNextReview(base, 4, now)
        expect(nextState.intervalDays).toBe(1)
        expect(nextState.streak).toBe(1)
    })

    it("second pass: interval = 6 days", () => {
        const s1 = calcNextReview(base, 4, now).nextState
        const { nextState } = calcNextReview(s1, 4, now + DAY)
        expect(nextState.intervalDays).toBe(6)
        expect(nextState.streak).toBe(2)
    })

    it("third pass: interval = round(6 * EF)", () => {
        const s1 = calcNextReview(base, 4, now).nextState
        const s2 = calcNextReview(s1, 4, now + DAY).nextState
        const { nextState } = calcNextReview(s2, 4, now + 7 * DAY)
        expect(nextState.intervalDays).toBeGreaterThan(6)
    })

    // Failure resets streak
    it("fail resets streak to 0 and interval to 1", () => {
        const s1 = calcNextReview(base, 4, now).nextState
        const { nextState } = calcNextReview(s1, 2, now + DAY)
        expect(nextState.streak).toBe(0)
        expect(nextState.intervalDays).toBe(1)
    })

    // Ease factor floor
    it("ease factor never goes below 1.3", () => {
        let state = base
        for (let i = 0; i < 20; i++) {
            state = calcNextReview(state, 0, now + i * DAY).nextState
        }
        expect(state.easeFactor).toBeGreaterThanOrEqual(1.3)
    })

    // nextReviewAt timestamp
    it("nextReviewAt is approximately now + intervalDays * 24h", () => {
        const { nextState } = calcNextReview(base, 4, now)
        expect(nextState.nextReviewAt).toBeCloseTo(now + 1 * DAY, -3)
    })

    // Quality 3 is the pass/fail boundary
    it("quality 3 is a pass", () => {
        const { nextState } = calcNextReview(base, 3, now)
        expect(nextState.streak).toBe(1)
    })

    it("quality 2 is a fail", () => {
        const { nextState } = calcNextReview(base, 2, now)
        expect(nextState.streak).toBe(0)
    })

    // Interval cap
    it("interval never exceeds 365 days", () => {
        let state = { ...base, streak: 100, intervalDays: 200, easeFactor: 2.5, reviewCount: 100, nextReviewAt: now }
        const { nextState } = calcNextReview(state, 5, now)
        expect(nextState.intervalDays).toBeLessThanOrEqual(365)
    })
})

describe("getDueCards", () => {
    const now = 1_000_000_000_000

    it("includes new cards (nextReviewAt === 0)", () => {
        const states: Record<string, SRSCardState> = {}
        expect(getDueCards(states, ["a", "b"], undefined, now)).toEqual(["a", "b"])
    })

    it("includes overdue cards", () => {
        const states = { a: { ...INITIAL_STATE, nextReviewAt: now - 1000 } }
        expect(getDueCards(states, ["a"], undefined, now)).toContain("a")
    })

    it("excludes future cards", () => {
        const states = { a: { ...INITIAL_STATE, nextReviewAt: now + 1_000_000 } }
        expect(getDueCards(states, ["a"], undefined, now)).not.toContain("a")
    })

    it("caps new cards with maxNew", () => {
        const states: Record<string, SRSCardState> = {}
        const ids = ["a", "b", "c", "d", "e"]
        expect(getDueCards(states, ids, 3, now)).toHaveLength(3)
    })

    it("orders overdue before new", () => {
        const states = { a: { ...INITIAL_STATE, nextReviewAt: now - 1 } }
        const result = getDueCards(states, ["b", "a"], undefined, now)
        expect(result[0]).toBe("a")   // overdue first
        expect(result[1]).toBe("b")   // new second
    })
})
```

---

### 3. `getGlobalStreak` and `getHistory` (`src/store/useStatsStore.ts`)

```ts
describe("getGlobalStreak", () => {
    function dayStr(offsetFromToday: number): string {
        const d = new Date()
        d.setDate(d.getDate() + offsetFromToday)
        return d.toISOString().slice(0, 10)
    }
    function makeDay(acts: number): DayStats {
        return { reviewed: 0, correct: 0, acts, qTotal: 0, qCorrect: 0 }
    }

    it("returns 0 with no data", () => expect(getGlobalStreak({})).toBe(0))

    it("counts today as day 1 when studied", () => {
        const data = { es: { [dayStr(0)]: makeDay(1) } }
        expect(getGlobalStreak(data)).toBe(1)
    })

    it("preserves streak if not studied today but studied yesterday — BUG-003", () => {
        // This test CURRENTLY FAILS. Fix BUG-003 first.
        const data = { es: { [dayStr(-1)]: makeDay(1) } }
        expect(getGlobalStreak(data)).toBe(1)
    })

    it("breaks streak on a missed day", () => {
        const data = { es: {
            [dayStr(0)]:  makeDay(1),
            // day -1 missing
            [dayStr(-2)]: makeDay(1),
        } }
        expect(getGlobalStreak(data)).toBe(1)
    })

    it("counts across multiple languages", () => {
        const data = {
            es: { [dayStr(0)]: makeDay(1) },
            fr: { [dayStr(-1)]: makeDay(1) },
        }
        expect(getGlobalStreak(data)).toBe(2)
    })
})
```

---

### 4. Progress store — `isUnitUnlocked` (`src/store/progress.ts`)

```ts
describe("isUnitUnlocked", () => {
    const units = [
        { id: "u1", order: 1 },
        { id: "u2", order: 2 },
        { id: "u3", order: 3 },
    ]

    beforeEach(() => localStorage.clear())

    it("first unit is always unlocked", () => {
        expect(isUnitUnlocked("es", "u1", units)).toBe(true)
    })

    it("second unit locked until first mastered", () => {
        expect(isUnitUnlocked("es", "u2", units)).toBe(false)
    })

    it("second unit unlocked after first mastered", () => {
        masterUnit("es", "u1")
        expect(isUnitUnlocked("es", "u2", units)).toBe(true)
    })

    it("gap in order values does not bypass unlock — BUG-006", () => {
        // order 1, 2, 4 (gap at 3)
        const gapped = [{ id: "u1", order: 1 }, { id: "u2", order: 2 }, { id: "u4", order: 4 }]
        // u4 should require u2 mastered, not return true because no order-3 unit exists
        expect(isUnitUnlocked("es", "u4", gapped)).toBe(false)
        masterUnit("es", "u2")
        expect(isUnitUnlocked("es", "u4", gapped)).toBe(true)
    })
})
```

---

## P1 — Hook and Component Tests (React Testing Library)

### 5. `useDrill` hook (`packages/quiz-engine/src/useDrill.ts`)

```ts
const questions: DrillQuestion[] = [
    { correct: "hola",  options: ["hola", "adios", "gracias", "por favor"] },
    { correct: "adios", options: ["hola", "adios", "gracias", "por favor"] },
    { correct: "gracias", options: ["hola", "adios", "gracias", "por favor"] },
]

describe("useDrill", () => {
    it("starts at index 0, not revealed, not done", () => {
        const { result } = renderHook(() => useDrill(questions))
        expect(result.current.index).toBe(0)
        expect(result.current.revealed).toBe(false)
        expect(result.current.done).toBe(false)
    })

    it("selecting an option reveals answer", () => {
        const { result } = renderHook(() => useDrill(questions))
        act(() => result.current.handleSelect("hola"))
        expect(result.current.revealed).toBe(true)
        expect(result.current.selected).toBe("hola")
    })

    it("correct answer increments score", () => {
        const { result } = renderHook(() => useDrill(questions))
        act(() => { result.current.handleSelect("hola"); result.current.handleNext() })
        expect(result.current.score).toBe(1)
    })

    it("wrong answer does not increment score and adds to missed", () => {
        const { result } = renderHook(() => useDrill(questions))
        act(() => { result.current.handleSelect("adios"); result.current.handleNext() })
        expect(result.current.score).toBe(0)
        expect(result.current.missed).toHaveLength(1)
        expect(result.current.missed[0].yourAnswer).toBe("adios")
    })

    it("advances to next question after handleNext", () => {
        const { result } = renderHook(() => useDrill(questions))
        act(() => { result.current.handleSelect("hola"); result.current.handleNext() })
        expect(result.current.index).toBe(1)
        expect(result.current.revealed).toBe(false)
    })

    it("sets done after last question", () => {
        const { result } = renderHook(() => useDrill(questions))
        for (const q of questions) {
            act(() => { result.current.handleSelect(q.correct); result.current.handleNext() })
        }
        expect(result.current.done).toBe(true)
    })

    it("restart resets all state", () => {
        const { result } = renderHook(() => useDrill(questions))
        act(() => { result.current.handleSelect("hola"); result.current.handleNext() })
        act(() => result.current.restart())
        expect(result.current.index).toBe(0)
        expect(result.current.score).toBe(0)
        expect(result.current.done).toBe(false)
        expect(result.current.missed).toHaveLength(0)
    })

    it("handleNext without selection is a no-op — BUG-004", () => {
        // This test CURRENTLY FAILS (BUG-004 fix needed)
        const { result } = renderHook(() => useDrill(questions))
        act(() => result.current.handleNext())   // no selection made
        expect(result.current.index).toBe(0)     // should not advance
    })

    it("keyboard shortcut 1 selects first option", () => {
        const { result } = renderHook(() => useDrill(questions))
        act(() => { globalThis.dispatchEvent(new KeyboardEvent("keydown", { key: "1" })) })
        expect(result.current.selected).toBe(questions[0].options[0])
    })

    it("Enter advances after selection", () => {
        const { result } = renderHook(() => useDrill(questions))
        act(() => {
            globalThis.dispatchEvent(new KeyboardEvent("keydown", { key: "1" }))
            globalThis.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }))
        })
        expect(result.current.index).toBe(1)
    })
})
```

---

### 6. `AuthService` (`packages/auth-core/src/authService.ts`)

```ts
describe("AuthService", () => {
    let storage: MockAuthStorage
    let api: MockAuthApi
    let service: AuthService

    beforeEach(() => {
        storage = new MockAuthStorage()
        api = new MockAuthApi()
        service = new AuthService(api, storage)
    })

    it("login stores session and emits event", async () => {
        const spy = vi.fn()
        service.events.on("login", spy)
        await service.login("user@test.com", "pass")
        expect(spy).toHaveBeenCalledOnce()
        expect(await service.isAuthenticated()).toBe(true)
    })

    it("logout removes session and emits event", async () => {
        await service.login("user@test.com", "pass")
        const spy = vi.fn()
        service.events.on("logout", spy)
        await service.logout()
        expect(spy).toHaveBeenCalledOnce()
        expect(await service.isAuthenticated()).toBe(false)
    })

    it("isAuthenticated returns false for expired session", async () => {
        const expired = { accessToken: "tok", refreshToken: null, expiresAt: Date.now() - 1000 }
        await storage.set("session", JSON.stringify(expired))
        expect(await service.isAuthenticated()).toBe(false)
    })

    it("getAccessToken refreshes when within buffer window", async () => {
        const soon = { accessToken: "old", refreshToken: "rt", expiresAt: Date.now() + 30_000 }
        await storage.set("session", JSON.stringify(soon))
        api.setRefreshed({ accessToken: "new", refreshToken: "rt2", expiresAt: Date.now() + 3600_000 })
        const token = await service.getAccessToken()
        expect(token).toBe("new")
    })

    it("getAccessToken throws SessionExpiredError with no refresh token", async () => {
        const expired = { accessToken: "tok", refreshToken: null, expiresAt: Date.now() - 1 }
        await storage.set("session", JSON.stringify(expired))
        await expect(service.getAccessToken()).rejects.toThrow(SessionExpiredError)
    })

    it("getAccessToken throws when no session exists", async () => {
        await expect(service.getAccessToken()).rejects.toThrow(SessionExpiredError)
    })
})
```

---

## P2 — Integration Tests

### 7. Progress actions + localStorage round-trip

```ts
describe("completeUnit integration", () => {
    beforeEach(() => localStorage.clear())

    it("marks unit mastered and records activity", async () => {
        await completeUnit("es", "unit-1", 8, 10)
        expect(getMasteredUnits("es")).toContain("unit-1")
        const stats = useStatsStore.getState().data
        expect(stats.es).toBeDefined()
        const today = new Date().toISOString().slice(0, 10)
        expect(stats.es[today].acts).toBeGreaterThan(0)
    })

    it("completeUnit is idempotent", async () => {
        await completeUnit("es", "unit-1", 8, 10)
        await completeUnit("es", "unit-1", 8, 10)
        expect(getMasteredUnits("es").filter(id => id === "unit-1")).toHaveLength(1)
    })
})

describe("resetLanguageData integration", () => {
    beforeEach(() => localStorage.clear())

    it("clears progress, SRS, and stats for language", async () => {
        await completeUnit("es", "unit-1", 5, 5)
        await resetLanguageData("es")
        expect(getMasteredUnits("es")).toHaveLength(0)
        expect(useStatsStore.getState().data.es).toBeUndefined()
    })

    it("does not affect other languages", async () => {
        await completeUnit("es", "unit-1", 5, 5)
        await completeUnit("fr", "unit-1", 5, 5)
        await resetLanguageData("es")
        expect(getMasteredUnits("fr")).toContain("unit-1")
    })
})
```

---

### 8. Progress export/import contract

```ts
describe("progress import/export", () => {
    it("exported data round-trips cleanly through import", async () => {
        await completeUnit("es", "unit-1", 5, 5)
        const exported = exportProgress()           // returns ls:progress, ls:srs, ls:stats
        localStorage.clear()
        importProgress(exported)
        expect(getMasteredUnits("es")).toContain("unit-1")
    })

    it("import does not downgrade existing progress", async () => {
        await completeUnit("es", "unit-1", 5, 5)
        await completeUnit("es", "unit-2", 5, 5)
        const snapshot = exportProgress()   // has unit-1 + unit-2
        await completeUnit("es", "unit-3", 5, 5)   // advance further
        importProgress(snapshot)            // older snapshot
        expect(getMasteredUnits("es")).toContain("unit-3")   // should not be lost
    })
})
```

---

## P3 — E2E Tests (Playwright)

### Critical user journeys

These run against the live dev server (`npm run dev`).

#### Journey 1 — New user completes a lesson

```ts
test("new user can log in, study a lesson, and see progress", async ({ page }) => {
    await page.goto("/")
    await page.click("text=Get started")
    await page.fill('[name=email]', "test@example.com")
    await page.fill('[name=password]', "password")
    await page.click("text=Sign in")
    await expect(page).toHaveURL(/dashboard/)

    // Pick a language
    await page.click("text=Spanish")

    // Open first unit
    await page.click("[data-testid=unit-1]")
    await page.click("text=Start lesson")

    // Answer all quiz questions
    // (use generic "select any option then Next" loop)
    while (await page.isVisible("text=Next")) {
        await page.click(".option-btn >> nth=0")
        await page.click("text=Next")
    }

    await expect(page.locator("[data-testid=done-screen]")).toBeVisible()
    await expect(page.locator("[data-testid=score]")).toContainText("/")
})
```

#### Journey 2 — Typed flashcard mode

```ts
test("typed flashcard mode accepts correct answer", async ({ page }) => {
    // ... login, navigate to flashcards ...
    await page.click("text=Type answers")
    await page.click("text=Start")
    await page.fill('[data-testid=answer-input]', /* correct answer */ "hola")
    await page.click("text=Submit")
    await expect(page.locator("[data-testid=result-correct]")).toBeVisible()
})
```

#### Journey 3 — Session persists on page reload

```ts
test("progress survives page reload", async ({ page }) => {
    // ... login, complete unit ...
    await page.reload()
    await expect(page.locator("[data-testid=unit-1-mastered]")).toBeVisible()
})
```

#### Journey 4 — Logout clears session

```ts
test("logout redirects to landing page", async ({ page }) => {
    // ... login ...
    await page.click("[data-testid=nav-menu]")
    await page.click("text=Log out")
    await expect(page).toHaveURL("/")
    // Direct nav to protected route redirects back
    await page.goto("/dashboard")
    await expect(page).toHaveURL("/")
})
```

---

## Coverage targets

| Module | Target | Rationale |
|--------|--------|-----------|
| `answerMatches` | 100% | Pure function, small surface, high user impact |
| `calcNextReview` | 100% | Pure function, mathematical correctness critical |
| `getDueCards` | 100% | Pure function, drives daily review queue |
| `useDrill` | 90% | Core game loop, multiple paths |
| `useStatsStore` (pure fns) | 90% | Streak + history calculations visible in UI |
| `progress.ts` | 85% | localStorage mutations, unlock logic |
| `AuthService` | 85% | Auth is a critical path even with mock backend |
| `actions.ts` | 70% | Integration layer; covered partially by integration tests |

---

## Execution order and ownership

```
Phase 1 (now)   — P0 pure unit tests (answerMatch, SRS, streak, isUnitUnlocked)
Phase 2         — P1 hook tests (useDrill, AuthService)
Phase 3         — P2 integration tests (actions + localStorage)
Phase 4         — P3 E2E (once dev server is stable and test IDs added to components)
```

Bug fixes should be gated on a failing test first:
1. Write the test that exposes the bug (it will fail).
2. Apply the fix.
3. Confirm the test passes.
4. Keep the test as a regression guard.
