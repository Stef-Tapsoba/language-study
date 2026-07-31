// pages/DictationPage.test.ts — dictation item construction and A1 phrase chunking

import { describe, it, expect } from "vitest"
import { chunkIntoPhrases, buildDictationItems } from "./DictationPage"
import type { ListeningExercise } from "../types"

function exercise(id: string, script: string, translation = ""): ListeningExercise {
    return { id, level: "A1", title: id, script, translation, questions: [] } as unknown as ListeningExercise
}

describe("chunkIntoPhrases", () => {
    it("returns the sentence unchanged when at or under the word limit", () => {
        expect(chunkIntoPhrases("un dos tres", 3)).toEqual(["un dos tres"])
        expect(chunkIntoPhrases("un dos", 3)).toEqual(["un dos"])
    })

    it("splits a longer sentence into consecutive word groups", () => {
        expect(chunkIntoPhrases("me llamo Juan y soy de España", 3))
            .toEqual(["me llamo Juan", "y soy de", "España"])
    })

    it("collapses repeated whitespace before chunking", () => {
        expect(chunkIntoPhrases("uno   dos    tres cuatro", 3)).toEqual(["uno dos tres", "cuatro"])
    })
})

describe("buildDictationItems", () => {
    it("caps every phrase at 3 words for A1", () => {
        const items = buildDictationItems(
            [exercise("e1", "Me llamo Juan y soy de España. Vivo en Madrid con mi familia.")],
            "A1"
        )
        for (const item of items) {
            expect(item.sentence.trim().split(/\s+/).length).toBeLessThanOrEqual(3)
        }
    })

    it("keeps whole sentences for levels above A1", () => {
        const items = buildDictationItems(
            [exercise("e1", "Me llamo Juan y soy de España.")],
            "B1"
        )
        expect(items.map(i => i.sentence)).toContain("Me llamo Juan y soy de España.")
    })

    it("keeps the translation only for a single-sentence, single-phrase item", () => {
        const items = buildDictationItems([exercise("e1", "Hola.", "Hello.")], "A1")
        expect(items).toHaveLength(1)
        expect(items[0].translation).toBe("Hello.")
    })

    it("drops the translation once a sentence is split into multiple A1 phrases", () => {
        const items = buildDictationItems([exercise("e1", "Me llamo Juan y soy de España.", "My name is Juan and I'm from Spain.")], "A1")
        expect(items.every(i => i.translation === "")).toBe(true)
    })

    it("produces ids whose sentence/phrase suffix can be stripped back to the exercise id", () => {
        const items = buildDictationItems([exercise("e1", "Me llamo Juan y soy de España. Vivo en Madrid.")], "A1")
        for (const item of items) {
            expect(item.id.replace(/-s\d+-p\d+$/, "")).toBe("e1")
        }
    })
})
