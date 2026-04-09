// pages/SentenceScramblePage.test.ts
// Unit tests for exampleToItem — the pure mapping function that converts a
// GrammarLesson example (Example or DialogueExample) into a ScrambleItem.

import { describe, it, expect } from "vitest"
import { exampleToItem } from "./SentenceScramblePage"
import type { Example, DialogueExample } from "../types"

const LESSON_ID = "ko-g-a1-5"
const LESSON_TITLE = "Asking who someone is"
const LANG_ID = "ko"

// ── helpers ──────────────────────────────────────────────────────────────────

function sentence(native: string, translation = "the translation", romanized?: string): Example {
    return { native, translation, romanized }
}

function dialogue(
    aNative: string, aTranslation: string,
    bNative: string, bTranslation: string,
    bRomanized?: string,
): DialogueExample {
    return {
        type: "dialogue",
        exchanges: [
            { native: aNative, translation: aTranslation },
            { native: bNative, translation: bTranslation, romanized: bRomanized },
        ],
    }
}

// 3-token test sentences (Korean space-delimited words)
const SHORT = "안녕하세요"                                      // 1 token → null
const TWO   = "안녕 하세요"                                     // 2 tokens → null
const THREE = "저는 한국 사람이에요."                            // 3 tokens → valid
const FOUR  = "저는 서울에서 왔어요."                            // 3 tokens
const FIVE  = "저는 한국어를 공부하고 있어요."                   // 4 tokens

// ── plain Example items ───────────────────────────────────────────────────────

describe("exampleToItem — plain Example", () => {
    it("returns null for a 1-token sentence", () => {
        expect(exampleToItem(sentence(SHORT), LESSON_ID, LESSON_TITLE, LANG_ID)).toBeNull()
    })

    it("returns null for a 2-token sentence", () => {
        expect(exampleToItem(sentence(TWO), LESSON_ID, LESSON_TITLE, LANG_ID)).toBeNull()
    })

    it("returns a ScrambleItem for a 3-token sentence", () => {
        const item = exampleToItem(
            sentence(THREE, "I am Korean.", "Jeoneun hanguk saramieyo."),
            LESSON_ID, LESSON_TITLE, LANG_ID
        )
        expect(item).not.toBeNull()
        expect(item?.correct).toBe(THREE)
        expect(item?.prompt).toBe("I am Korean.")
        expect(item?.romanized).toBe("Jeoneun hanguk saramieyo.")
    })

    it("returns a ScrambleItem for a 4-token sentence", () => {
        expect(exampleToItem(sentence(FIVE), LESSON_ID, LESSON_TITLE, LANG_ID)).not.toBeNull()
    })

    it("sets lessonId, lessonTitle, and langId from the call args", () => {
        const item = exampleToItem(sentence(THREE, "I am Korean."), LESSON_ID, LESSON_TITLE, LANG_ID)
        expect(item?.lessonId).toBe(LESSON_ID)
        expect(item?.lessonTitle).toBe(LESSON_TITLE)
        expect(item?.langId).toBe(LANG_ID)
    })

    it("does not set context for plain sentences", () => {
        const item = exampleToItem(sentence(THREE), LESSON_ID, LESSON_TITLE, LANG_ID)
        expect(item?.context).toBeUndefined()
    })

    it("strips leading/trailing punctuation when counting tokens", () => {
        // "가요. 왔어요. 먹어요." → ["가요", "왔어요", "먹어요"] = 3 tokens → valid
        const item = exampleToItem(sentence("가요. 왔어요. 먹어요."), LESSON_ID, LESSON_TITLE, LANG_ID)
        expect(item).not.toBeNull()
    })
})

// ── DialogueExample items ─────────────────────────────────────────────────────

describe("exampleToItem — DialogueExample", () => {
    it("uses B turn (exchanges[1]) as the scramble target", () => {
        const item = exampleToItem(
            dialogue(
                "이름이 뭐예요?", "What's your name?",
                FOUR, "I'm from Seoul.", "Jeoneun seoureseo wasseoyo."
            ),
            LESSON_ID, LESSON_TITLE, LANG_ID
        )
        expect(item?.correct).toBe(FOUR)
        expect(item?.prompt).toBe("I'm from Seoul.")
        expect(item?.romanized).toBe("Jeoneun seoureseo wasseoyo.")
    })

    it("populates context with A turn (exchanges[0]) native and translation", () => {
        const item = exampleToItem(
            dialogue("이름이 뭐예요?", "What's your name?", FOUR, "I'm from Seoul."),
            LESSON_ID, LESSON_TITLE, LANG_ID
        )
        expect(item?.context?.native).toBe("이름이 뭐예요?")
        expect(item?.context?.translation).toBe("What's your name?")
    })

    it("returns null when B turn has fewer than 3 tokens", () => {
        // "민준이에요" = 1 token
        const item = exampleToItem(
            dialogue("이름이 뭐예요?", "What's your name?", "민준이에요", "I'm Minjun."),
            LESSON_ID, LESSON_TITLE, LANG_ID
        )
        expect(item).toBeNull()
    })

    it("does not return null when A turn is short but B turn has 3+ tokens", () => {
        // A is only 1 token — does not affect the threshold check on B
        const item = exampleToItem(
            dialogue("뭐?", "What?", FOUR, "I'm from Seoul."),
            LESSON_ID, LESSON_TITLE, LANG_ID
        )
        expect(item).not.toBeNull()
    })

    it("sets lessonId, lessonTitle, and langId from the call args", () => {
        const item = exampleToItem(
            dialogue("뭐예요?", "What?", FOUR, "I'm from Seoul."),
            LESSON_ID, LESSON_TITLE, LANG_ID
        )
        expect(item?.lessonId).toBe(LESSON_ID)
        expect(item?.lessonTitle).toBe(LESSON_TITLE)
        expect(item?.langId).toBe(LANG_ID)
    })
})
