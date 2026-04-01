import { describe, it, expect } from "vitest"
import { answerMatches } from "./answerMatch"

describe("answerMatches", () => {
    // ── Exact match ──────────────────────────────────────────────────────────
    it("returns true for an exact match", () => {
        expect(answerMatches("hello", "hello")).toBe(true)
    })

    // ── Case insensitivity ───────────────────────────────────────────────────
    it("is case-insensitive", () => {
        expect(answerMatches("Hello", "hello")).toBe(true)
        expect(answerMatches("HELLO", "hello")).toBe(true)
        expect(answerMatches("hello", "HELLO")).toBe(true)
    })

    // ── Accent stripping ─────────────────────────────────────────────────────
    it("matches when input is missing an accent (café → cafe)", () => {
        expect(answerMatches("cafe", "café")).toBe(true)
    })

    it("matches when target is missing an accent (user typed accented, target is plain)", () => {
        expect(answerMatches("café", "cafe")).toBe(true)
    })

    it("handles multiple accented characters (naïve → naive)", () => {
        expect(answerMatches("naive", "naïve")).toBe(true)
    })

    it("handles Spanish accents (español → espanol)", () => {
        expect(answerMatches("espanol", "español")).toBe(true)
    })

    it("handles Japanese/Korean input — no NFD decomposition side-effects", () => {
        // Non-Latin strings that have no combining characters should still match exactly
        expect(answerMatches("ねこ", "ねこ")).toBe(true)
    })

    // ── Whitespace tolerance ─────────────────────────────────────────────────
    it("trims leading whitespace", () => {
        expect(answerMatches("  hello", "hello")).toBe(true)
    })

    it("trims trailing whitespace", () => {
        expect(answerMatches("hello  ", "hello")).toBe(true)
    })

    it("trims both leading and trailing whitespace", () => {
        expect(answerMatches("  hello  ", "hello")).toBe(true)
    })

    // ── Empty / falsy input ──────────────────────────────────────────────────
    it("returns false for an empty string input", () => {
        expect(answerMatches("", "hello")).toBe(false)
    })

    it("returns false for a whitespace-only input", () => {
        expect(answerMatches("   ", "hello")).toBe(false)
    })

    it("returns false when target is non-empty and input is empty", () => {
        expect(answerMatches("", "café")).toBe(false)
    })

    it("returns true when both input and target are empty strings", () => {
        // Two empty strings are equal after normalisation
        expect(answerMatches("", "")).toBe(true)
    })

    // ── Non-matching cases ───────────────────────────────────────────────────
    it("returns false when the answer is wrong", () => {
        expect(answerMatches("world", "hello")).toBe(false)
    })

    it("returns false when target contains extra characters", () => {
        expect(answerMatches("hell", "hello")).toBe(false)
    })

    // ── Combined case + accent ───────────────────────────────────────────────
    it("matches when both case and accent differ simultaneously", () => {
        expect(answerMatches("CAFE", "café")).toBe(true)
        expect(answerMatches("Naïve", "naive")).toBe(true)
    })

    // ── Punctuation stripping (BUG-001) ──────────────────────────────────────
    it("ignores leading inverted exclamation mark in target (¡Hola! → hola)", () => {
        expect(answerMatches("hola", "¡Hola!")).toBe(true)
    })

    it("ignores trailing exclamation mark in input", () => {
        expect(answerMatches("hola!", "hola")).toBe(true)
    })

    it("ignores question marks", () => {
        expect(answerMatches("comment ca va", "comment ça va?")).toBe(true)
    })

    it("ignores apostrophes in target (c'est → cest)", () => {
        expect(answerMatches("cest", "c'est")).toBe(true)
    })

    it("ignores apostrophes in input", () => {
        expect(answerMatches("c'est", "cest")).toBe(true)
    })

    it("ignores hyphens", () => {
        expect(answerMatches("avant garde", "avant-garde")).toBe(true)
    })

    it("ignores commas", () => {
        expect(answerMatches("si si", "sí, sí")).toBe(true)
    })

    it("collapses multiple internal spaces after punctuation removal", () => {
        expect(answerMatches("buenos  dias", "buenos días")).toBe(true)
    })

    // ── Multi-answer array support ───────────────────────────────────────────
    it("accepts the first answer in an array", () => {
        expect(answerMatches("hola", ["hola", "hello"])).toBe(true)
    })

    it("accepts the second answer in an array", () => {
        expect(answerMatches("hello", ["hola", "hello"])).toBe(true)
    })

    it("accepts a normalised match within an array", () => {
        expect(answerMatches("cafe", ["café", "coffee"])).toBe(true)
    })

    it("rejects an answer not present in the array", () => {
        expect(answerMatches("adios", ["hola", "hello"])).toBe(false)
    })

    it("returns false for an empty array of targets", () => {
        expect(answerMatches("hola", [])).toBe(false)
    })

    // ── loose mode: parenthetical stripping ──────────────────────────────────
    describe("loose mode (default) — parenthetical stripping", () => {
        it("accepts answer without register qualifier: 'please' matches 'Please (formal)'", () => {
            expect(answerMatches("please", "Please (formal)")).toBe(true)
        })

        it("accepts answer without register qualifier: 'please' matches 'Please (informal)'", () => {
            expect(answerMatches("please", "Please (informal)")).toBe(true)
        })

        it("accepts answer without context qualifier: 'goodbye' matches 'Goodbye (to person leaving)'", () => {
            expect(answerMatches("goodbye", "Goodbye (to person leaving)")).toBe(true)
        })

        it("accepts answer without qualifier: 'good morning' matches 'Good morning (formal)'", () => {
            expect(answerMatches("good morning", "Good morning (formal)")).toBe(true)
        })

        it("still rejects a completely wrong answer even with parentheticals in target", () => {
            expect(answerMatches("goodbye", "Please (formal)")).toBe(false)
        })

        it("accepts the full answer including qualifier text when typed", () => {
            // user who types the full thing should still get credit
            expect(answerMatches("please formal", "Please (formal)")).toBe(true)
        })
    })

    // ── loose mode: slash-alternative splitting ───────────────────────────────
    describe("loose mode (default) — slash alternative splitting", () => {
        it("accepts first alternative: 'hello' matches 'Hello / Good morning'", () => {
            expect(answerMatches("hello", "Hello / Good morning")).toBe(true)
        })

        it("accepts second alternative: 'good morning' matches 'Hello / Good morning'", () => {
            expect(answerMatches("good morning", "Hello / Good morning")).toBe(true)
        })

        it("accepts any of three alternatives: 'please' matches 'Please / Here you go / Go ahead'", () => {
            expect(answerMatches("please", "Please / Here you go / Go ahead")).toBe(true)
        })

        it("accepts 'go ahead' from three alternatives", () => {
            expect(answerMatches("go ahead", "Please / Here you go / Go ahead")).toBe(true)
        })

        it("rejects answer not in alternatives", () => {
            expect(answerMatches("farewell", "Hello / Good morning")).toBe(false)
        })
    })

    // ── loose mode: combined parentheticals + slash alternatives ─────────────
    describe("loose mode (default) — parentheticals combined with alternatives", () => {
        it("strips qualifier then matches first alt: 'i' matches 'I / me (polite)'", () => {
            expect(answerMatches("i", "I / me (polite)")).toBe(true)
        })

        it("strips qualifier then matches second alt: 'me' matches 'I / me (polite)'", () => {
            expect(answerMatches("me", "I / me (polite)")).toBe(true)
        })

        it("strips qualifier then matches: 'sorry' matches 'Sorry / Pardon'", () => {
            expect(answerMatches("sorry", "Sorry / Pardon")).toBe(true)
        })
    })

    // ── strict mode: no parenthetical stripping ───────────────────────────────
    describe("strict mode — parentheticals are required", () => {
        it("does NOT match 'please' against 'Please (formal)' — qualifier is part of answer", () => {
            expect(answerMatches("please", "Please (formal)", "strict")).toBe(false)
        })

        it("matches full normalised form 'please formal' against 'Please (formal)'", () => {
            expect(answerMatches("please formal", "Please (formal)", "strict")).toBe(true)
        })

        it("still matches exact answer without parentheticals when target has none", () => {
            expect(answerMatches("bonjour", "Bonjour", "strict")).toBe(true)
        })
    })

    // ── strict mode: slash alternatives still work ────────────────────────────
    describe("strict mode — slash alternatives still expand", () => {
        it("accepts first alt in strict mode", () => {
            expect(answerMatches("je vais bien", "Je vais bien / Ça va bien", "strict")).toBe(true)
        })

        it("accepts second alt in strict mode", () => {
            expect(answerMatches("ca va bien", "Je vais bien / Ça va bien", "strict")).toBe(true)
        })
    })

    // ── dictation mode: no splitting or stripping ─────────────────────────────
    describe("dictation mode — exact script reproduction", () => {
        it("matches exact script (accent tolerance still applies)", () => {
            expect(answerMatches("bonjour comment ca va", "Bonjour, comment ça va?", "dictation")).toBe(true)
        })

        it("does NOT accept partial answer — dictation requires full script", () => {
            expect(answerMatches("bonjour", "Bonjour, comment ça va?", "dictation")).toBe(false)
        })

        it("does NOT split slash alternatives in dictation mode", () => {
            // If the script literally contains " / ", the user must type the whole thing
            expect(answerMatches("hello", "Hello / Good morning", "dictation")).toBe(false)
        })

        it("does NOT strip parentheticals in dictation mode", () => {
            expect(answerMatches("please", "Please (formal)", "dictation")).toBe(false)
        })
    })
})
