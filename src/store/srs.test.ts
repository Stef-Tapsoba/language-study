// store/srs.test.ts

import {
    getSRSStates,
    getDueCards,
    getDueCount,
    updateCard,
    getNextDueDate,
    resetSRS,
    NEW_CARDS_PER_DAY,
} from "./srs"
import { INITIAL_STATE } from "@myorg/srs"

const SRS_KEY = "ls:srs"

// ── helpers ─────────────────────────────────────────────────────────────────

function seedV2Card(langId: string, vocabId: string, nextReviewAt: number) {
    const store = JSON.parse(localStorage.getItem(SRS_KEY) ?? "{}")
    store[langId] = store[langId] ?? {}
    store[langId][vocabId] = {
        easeFactor: 2.5,
        reviewCount: 1,
        streak: 1,
        nextReviewAt,
        intervalDays: 1,
    }
    localStorage.setItem(SRS_KEY, JSON.stringify(store))
}

function seedV1Card(langId: string, vocabId: string, nextReviewDate: number) {
    const store = JSON.parse(localStorage.getItem(SRS_KEY) ?? "{}")
    store[langId] = store[langId] ?? {}
    // V1 shape: nextReviewDate, interval, easeFactor, repetitions (no nextReviewAt)
    store[langId][vocabId] = {
        nextReviewDate,
        interval: 3,
        easeFactor: 2.3,
        repetitions: 2,
    }
    localStorage.setItem(SRS_KEY, JSON.stringify(store))
}

// ── getSRSStates ─────────────────────────────────────────────────────────────

describe("getSRSStates", () => {
    it("returns empty object for unknown language", () => {
        expect(getSRSStates("es")).toEqual({})
    })

    it("returns stored states for a language", () => {
        seedV2Card("es", "vocab-1", Date.now() + 100_000)
        const states = getSRSStates("es")
        expect(states["vocab-1"]).toBeDefined()
        expect(states["vocab-1"].easeFactor).toBe(2.5)
    })

    it("returns empty object on corrupted localStorage JSON", () => {
        localStorage.setItem(SRS_KEY, "corrupted{{{")
        expect(getSRSStates("es")).toEqual({})
    })
})

// ── v1 → v2 migration ────────────────────────────────────────────────────────

describe("v1 → v2 data migration", () => {
    it("migrates v1 card fields to v2 format on read", () => {
        seedV1Card("es", "vocab-v1", Date.now() + 86_400_000)
        const states = getSRSStates("es")
        const card = states["vocab-v1"]
        expect(card).toBeDefined()
        // v2 fields must be present
        expect(typeof card.nextReviewAt).toBe("number")
        expect(typeof card.intervalDays).toBe("number")
        expect(typeof card.streak).toBe("number")
        expect(typeof card.reviewCount).toBe("number")
        // nextReviewAt was mapped from nextReviewDate
        expect(card.nextReviewAt).toBeGreaterThan(Date.now())
    })

    it("passes through already-v2 cards unchanged", () => {
        const future = Date.now() + 200_000
        seedV2Card("es", "vocab-v2", future)
        const states = getSRSStates("es")
        expect(states["vocab-v2"].nextReviewAt).toBe(future)
    })

    it("uses INITIAL_STATE defaults for missing v1 fields", () => {
        // Seed a card with only nextReviewDate (no easeFactor, interval, repetitions)
        const store: Record<string, Record<string, unknown>> = { es: { "vocab-bare": { nextReviewDate: 0 } } }
        localStorage.setItem(SRS_KEY, JSON.stringify(store))
        const card = getSRSStates("es")["vocab-bare"]
        expect(card.easeFactor).toBe(INITIAL_STATE.easeFactor)
        expect(card.intervalDays).toBe(INITIAL_STATE.intervalDays)
        expect(card.streak).toBe(0)
        expect(card.reviewCount).toBe(0)
    })
})

// ── getDueCards ───────────────────────────────────────────────────────────────

describe("getDueCards", () => {
    it("treats all vocab as new cards when no states exist", () => {
        const { due, newCards } = getDueCards("es", ["v1", "v2"])
        expect(due).toEqual([])
        expect(newCards).toEqual(["v1", "v2"])
    })

    it("caps new cards at NEW_CARDS_PER_DAY", () => {
        // No cards stored → all are new
        const vocabIds = Array.from({ length: NEW_CARDS_PER_DAY + 5 }, (_, i) => `v${i}`)
        const { newCards } = getDueCards("es", vocabIds)
        expect(newCards.length).toBe(NEW_CARDS_PER_DAY)
    })

    it("includes overdue cards in due array (nextReviewAt in the past)", () => {
        seedV2Card("es", "v-overdue", Date.now() - 1000)
        const { due } = getDueCards("es", ["v-overdue"])
        expect(due).toContain("v-overdue")
    })

    it("excludes future cards from both arrays", () => {
        seedV2Card("es", "v-future", Date.now() + 100_000_000)
        const { due, newCards } = getDueCards("es", ["v-future"])
        expect(due).not.toContain("v-future")
        expect(newCards).not.toContain("v-future")
    })

    it("treats a card with nextReviewAt === 0 as a new card", () => {
        const store = { es: { "v-zero": { ...INITIAL_STATE, nextReviewAt: 0 } } }
        localStorage.setItem(SRS_KEY, JSON.stringify(store))
        const { due, newCards } = getDueCards("es", ["v-zero"])
        expect(due).not.toContain("v-zero")
        expect(newCards).toContain("v-zero")
    })

    it("does not include vocab ids absent from the provided list", () => {
        seedV2Card("es", "v-other", Date.now() - 1000)
        const { due } = getDueCards("es", ["v-unrelated"])
        expect(due).not.toContain("v-other")
    })
})

// ── getDueCount ────────────────────────────────────────────────────────────────

describe("getDueCount", () => {
    it("returns 0 for empty vocab list", () => {
        expect(getDueCount("es", [])).toBe(0)
    })

    it("counts due + new (capped) cards", () => {
        seedV2Card("es", "due-1", Date.now() - 1000)
        // Two new cards (never reviewed) — both under cap
        const count = getDueCount("es", ["due-1", "new-1", "new-2"])
        expect(count).toBe(3)
    })
})

// ── updateCard ────────────────────────────────────────────────────────────────

describe("updateCard", () => {
    it("stores a new card state after a passing review (quality 4)", () => {
        updateCard("es", "v1", 4)
        const states = getSRSStates("es")
        expect(states["v1"]).toBeDefined()
        expect(states["v1"].reviewCount).toBe(1)
        expect(states["v1"].nextReviewAt).toBeGreaterThan(Date.now())
    })

    it("stores a new card state after a failing review (quality 1)", () => {
        updateCard("es", "v1", 1)
        const states = getSRSStates("es")
        expect(states["v1"].streak).toBe(0)
    })

    it("accumulates state across multiple updateCard calls", () => {
        updateCard("es", "v1", 4)
        updateCard("es", "v1", 4)
        const states = getSRSStates("es")
        expect(states["v1"].reviewCount).toBe(2)
        expect(states["v1"].streak).toBe(2)
    })

    it("resets streak on failing review after passing reviews", () => {
        updateCard("es", "v1", 4)
        updateCard("es", "v1", 4)
        updateCard("es", "v1", 1)
        const states = getSRSStates("es")
        expect(states["v1"].streak).toBe(0)
        expect(states["v1"].reviewCount).toBe(3)
    })

    it("keeps cards for different languages independent", () => {
        updateCard("es", "v1", 4)
        updateCard("fr", "v1", 1)
        expect(getSRSStates("es")["v1"].streak).toBe(1)
        expect(getSRSStates("fr")["v1"].streak).toBe(0)
    })
})

// ── getNextDueDate ─────────────────────────────────────────────────────────────

describe("getNextDueDate", () => {
    it("returns null when no cards exist for language", () => {
        expect(getNextDueDate("es")).toBeNull()
    })

    it("returns null when all cards are already overdue (nextReviewAt in the past)", () => {
        seedV2Card("es", "v-past", Date.now() - 1000)
        expect(getNextDueDate("es")).toBeNull()
    })

    it("returns the earliest future nextReviewAt", () => {
        const soon = Date.now() + 5_000
        const later = Date.now() + 100_000
        seedV2Card("es", "v-soon", soon)
        seedV2Card("es", "v-later", later)
        expect(getNextDueDate("es")).toBe(soon)
    })
})

// ── resetSRS ──────────────────────────────────────────────────────────────────

describe("resetSRS", () => {
    it("removes all SRS state for the specified language", () => {
        updateCard("es", "v1", 4)
        resetSRS("es")
        expect(getSRSStates("es")).toEqual({})
    })

    it("does not affect other languages", () => {
        updateCard("es", "v1", 4)
        updateCard("fr", "v1", 4)
        resetSRS("es")
        expect(getSRSStates("fr")["v1"]).toBeDefined()
    })

    it("is safe to call on a language that has no stored data", () => {
        expect(() => resetSRS("xx")).not.toThrow()
    })
})
