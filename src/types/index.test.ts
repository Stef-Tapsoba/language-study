// types/index.test.ts — tests for exported type guards

import { describe, it, expect } from "vitest"
import { isDialogueExample } from "./index"
import type { Example, DialogueExample } from "./index"

const sentence: Example = {
    native: "저는 학생이에요.",
    romanized: "Jeoneun haksaengieyo.",
    translation: "I am a student.",
}

const dialogue: DialogueExample = {
    type: "dialogue",
    exchanges: [
        { native: "이름이 뭐예요?", romanized: "Ireumi mwoyeyo?", translation: "What's your name?" },
        { native: "저는 민준이에요.", romanized: "Jeoneun minjunieyo.", translation: "I'm Minjun." },
    ],
}

describe("isDialogueExample", () => {
    it("returns true for a DialogueExample", () => {
        expect(isDialogueExample(dialogue)).toBe(true)
    })

    it("returns false for a plain Example", () => {
        expect(isDialogueExample(sentence)).toBe(false)
    })

    it("narrows type so the else branch gives access to Example fields", () => {
        const items: Array<Example | DialogueExample> = [sentence, dialogue, sentence]
        const sentences = items.filter((ex): ex is Example => !isDialogueExample(ex))
        // TypeScript narrows these to Example — accessing .native must compile
        expect(sentences.map(ex => ex.native)).toEqual([sentence.native, sentence.native])
    })

    it("correctly identifies all exchanges in a mixed array", () => {
        const mixed: Array<Example | DialogueExample> = [sentence, dialogue, sentence, dialogue]
        const dialogues = mixed.filter(isDialogueExample)
        expect(dialogues).toHaveLength(2)
    })
})
