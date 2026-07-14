// domain/placement.test.ts

import { describe, it, expect } from "vitest"
import { evaluatePlacement, passThreshold, IDK_ANSWER } from "./placement"
import type { QuizQuestion, CEFRLevel } from "../types"

// 4 questions per level, answer is always "yes"
function makeQuestions(perLevel = 4): QuizQuestion[] {
    const levels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1"]
    return levels.flatMap(level =>
        Array.from({ length: perLevel }, (_, i): QuizQuestion => ({
            id: `${level}-${i}`,
            level,
            prompt: `q ${level} ${i}`,
            options: ["yes", "no"],
            answer: "yes",
        }))
    )
}

/** Answer the given question ids correctly, everything else in `wrongIds` wrong. */
function answers(rightIds: string[], wrongIds: string[] = []): Record<string, string> {
    const map: Record<string, string> = {}
    for (const id of rightIds) map[id] = "yes"
    for (const id of wrongIds) map[id] = "no"
    return map
}

describe("passThreshold", () => {
    it("requires 3 of 4", () => expect(passThreshold(4)).toBe(3))
    it("requires 2 of 2 (Japanese-sized levels can never silently auto-fail)", () =>
        expect(passThreshold(2)).toBe(2))
    it("requires 4 of 5", () => expect(passThreshold(5)).toBe(4))
})

describe("evaluatePlacement — early exit", () => {
    const qs = makeQuestions()

    it("is incomplete before any answers", () => {
        expect(evaluatePlacement(qs, {})).toEqual({ complete: false })
    })

    it("places at A1 after just two wrong A1 answers (threshold unreachable)", () => {
        const result = evaluatePlacement(qs, answers([], ["A1-0", "A1-1"]))
        expect(result).toEqual({ complete: true, level: "A1" })
    })

    it("stays incomplete after one wrong A1 answer (still recoverable)", () => {
        expect(evaluatePlacement(qs, answers([], ["A1-0"]))).toEqual({ complete: false })
    })

    it("advances past a level once fully answered at threshold", () => {
        // 3/4 on A1 → passed; A2 untouched → incomplete
        const result = evaluatePlacement(qs, answers(["A1-0", "A1-1", "A1-2"], ["A1-3"]))
        expect(result).toEqual({ complete: false })
    })

    it("places at the first failed level even if later levels would pass", () => {
        const result = evaluatePlacement(qs, {
            ...answers(["A1-0", "A1-1", "A1-2", "A1-3"]),
            ...answers([], ["A2-0", "A2-1"]),
            ...answers(["B1-0", "B1-1", "B1-2", "B1-3"]),
        })
        expect(result).toEqual({ complete: true, level: "A2" })
    })

    it("places at C1 when every level passes", () => {
        const all = answers(qs.map(q => q.id))
        expect(evaluatePlacement(qs, all)).toEqual({ complete: true, level: "C1" })
    })

    it("counts 'I don't know' as incorrect", () => {
        const result = evaluatePlacement(qs, {
            "A1-0": IDK_ANSWER,
            "A1-1": IDK_ANSWER,
        })
        expect(result).toEqual({ complete: true, level: "A1" })
    })

    it("handles 2-question levels with the proportional threshold", () => {
        const small = makeQuestions(2)
        // Perfect answers must reach C1 (regression: fixed threshold of 3 placed everyone at A1)
        expect(evaluatePlacement(small, answers(small.map(q => q.id))))
            .toEqual({ complete: true, level: "C1" })
        // One wrong at A2 fails A2 immediately (threshold 2 of 2)
        expect(evaluatePlacement(small, {
            ...answers(["A1-0", "A1-1"]),
            ...answers([], ["A2-0"]),
        })).toEqual({ complete: true, level: "A2" })
    })
})
