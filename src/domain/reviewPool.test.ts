// domain/reviewPool.test.ts

import { describe, it, expect, beforeEach } from "vitest"
import { selectReviewSession, ReviewCard } from "./reviewPool"
import { registry } from "../store/registry"

beforeEach(() => {
    registry._resetForTests()
})

function vocabCards(ids: string[]): ReviewCard[] {
    return ids.map(id => ({ kind: "vocab", id, item: {} } as unknown as ReviewCard))
}
function grammarCards(ids: string[]): ReviewCard[] {
    return ids.map(id => ({ kind: "grammar", id, lesson: {}, example: {} } as unknown as ReviewCard))
}
function verbCards(ids: string[]): ReviewCard[] {
    return ids.map(id => ({ kind: "verb", id, verb: {}, tense: "present", form: {} } as unknown as ReviewCard))
}

function kindCounts(cards: ReviewCard[]): Record<string, number> {
    return cards.reduce((acc, c) => {
        acc[c.kind] = (acc[c.kind] ?? 0) + 1
        return acc
    }, {} as Record<string, number>)
}

describe("selectReviewSession", () => {
    it("is all vocab when only vocab has been taught", () => {
        const pool = vocabCards(Array.from({ length: 30 }, (_, i) => `v${i}`))
        const session = selectReviewSession("es", pool, 12)
        expect(session).toHaveLength(12)
        expect(kindCounts(session)).toEqual({ vocab: 12 })
    })

    it("splits 50/50 when vocab and grammar have been taught but not verbs", () => {
        const pool = [
            ...vocabCards(Array.from({ length: 30 }, (_, i) => `v${i}`)),
            ...grammarCards(Array.from({ length: 30 }, (_, i) => `g${i}`)),
        ]
        const session = selectReviewSession("es", pool, 12)
        expect(session).toHaveLength(12)
        expect(kindCounts(session)).toEqual({ vocab: 6, grammar: 6 })
    })

    it("splits roughly a third each when all three kinds have been taught", () => {
        const pool = [
            ...vocabCards(Array.from({ length: 30 }, (_, i) => `v${i}`)),
            ...grammarCards(Array.from({ length: 30 }, (_, i) => `g${i}`)),
            ...verbCards(Array.from({ length: 30 }, (_, i) => `vb${i}`)),
        ]
        const session = selectReviewSession("es", pool, 12)
        expect(session).toHaveLength(12)
        expect(kindCounts(session)).toEqual({ vocab: 4, grammar: 4, verb: 4 })
    })

    it("distributes any remainder one-per-kind rather than dropping it", () => {
        const pool = [
            ...vocabCards(Array.from({ length: 30 }, (_, i) => `v${i}`)),
            ...grammarCards(Array.from({ length: 30 }, (_, i) => `g${i}`)),
            ...verbCards(Array.from({ length: 30 }, (_, i) => `vb${i}`)),
        ]
        const session = selectReviewSession("es", pool, 10)
        expect(session).toHaveLength(10)
        const counts = kindCounts(session)
        expect(Object.values(counts).sort()).toEqual([3, 3, 4])
    })

    it("redistributes a kind's shortfall to the other kinds so the session still fills up", () => {
        const pool = [
            ...vocabCards(Array.from({ length: 30 }, (_, i) => `v${i}`)),
            ...grammarCards(Array.from({ length: 30 }, (_, i) => `g${i}`)),
            ...verbCards(["vb0", "vb1"]), // far fewer verbs than its 1/3 share
        ]
        const session = selectReviewSession("es", pool, 12)
        expect(session).toHaveLength(12)
        const counts = kindCounts(session)
        expect(counts.verb).toBe(2)
        expect(counts.vocab! + counts.grammar!).toBe(10)
    })

    it("returns an empty array when the pool is empty", () => {
        expect(selectReviewSession("es", [], 12)).toHaveLength(0)
    })

    it("never returns more cards than are actually in the pool", () => {
        const pool = vocabCards(["v0", "v1", "v2"])
        const session = selectReviewSession("es", pool, 12)
        expect(session).toHaveLength(3)
    })
})
