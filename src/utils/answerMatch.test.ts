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
})
