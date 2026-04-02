// store/preferences.test.ts — NEW preferences functions only
// (isGoalSet, getGoal, setGoal, isReviewPromptDismissed, dismissReviewPrompt)
//
// Pre-existing functions (isOnboardingVisible, dismissOnboarding, getTtsAutoplay,
// setTtsAutoplay) are intentionally NOT tested here to avoid duplication.

import { describe, it, expect, beforeEach, vi, afterEach } from "vitest"
import {
    isGoalSet,
    getGoal,
    setGoal,
    isReviewPromptDismissed,
    dismissReviewPrompt,
} from "./preferences"

// localStorage is reset before each test by the global setup (src/test/setup.ts).

// ---------------------------------------------------------------------------
// isGoalSet / getGoal / setGoal
// ---------------------------------------------------------------------------

describe("isGoalSet", () => {
    it("returns false when no goal has ever been set", () => {
        expect(isGoalSet()).toBe(false)
    })

    it("returns true after setGoal() is called", () => {
        setGoal("traveller")
        expect(isGoalSet()).toBe(true)
    })

    it("returns true even when goal is set to 'general'", () => {
        setGoal("general")
        expect(isGoalSet()).toBe(true)
    })
})

describe("getGoal", () => {
    it("returns 'general' as default when no goal is stored", () => {
        expect(getGoal()).toBe("general")
    })

    it("returns the stored goal after setGoal()", () => {
        setGoal("traveller")
        expect(getGoal()).toBe("traveller")
    })

    it("returns the most recent value after multiple setGoal() calls", () => {
        setGoal("social")
        setGoal("culture")
        expect(getGoal()).toBe("culture")
    })

    it("reading from a fresh localStorage returns 'general' (no storage item)", () => {
        // Ensure the key is absent
        localStorage.removeItem("ls:goal")
        expect(getGoal()).toBe("general")
    })
})

describe("setGoal", () => {
    it("persists to localStorage so a subsequent getGoal() reads it back", () => {
        setGoal("traveller")
        expect(localStorage.getItem("ls:goal")).toBe("traveller")
    })

    it("overwrites a previously stored goal", () => {
        setGoal("social")
        setGoal("traveller")
        expect(getGoal()).toBe("traveller")
    })
})

// ---------------------------------------------------------------------------
// isReviewPromptDismissed / dismissReviewPrompt
// ---------------------------------------------------------------------------

describe("isReviewPromptDismissed", () => {
    it("returns false initially for any language", () => {
        expect(isReviewPromptDismissed("es")).toBe(false)
        expect(isReviewPromptDismissed("fr")).toBe(false)
    })

    it("returns true after dismissReviewPrompt() for the same language", () => {
        dismissReviewPrompt("es")
        expect(isReviewPromptDismissed("es")).toBe(true)
    })

    it("dismissal of one language does not affect another language", () => {
        dismissReviewPrompt("es")
        expect(isReviewPromptDismissed("fr")).toBe(false)
    })

    it("is idempotent — calling dismissReviewPrompt twice keeps it dismissed", () => {
        dismissReviewPrompt("es")
        dismissReviewPrompt("es")
        expect(isReviewPromptDismissed("es")).toBe(true)
    })
})

describe("dismissReviewPrompt — date-keyed reset behaviour", () => {
    afterEach(() => {
        vi.useRealTimers()
    })

    it("dismissed today is NOT dismissed the next calendar day", () => {
        // Pin today to 2026-04-01
        vi.useFakeTimers()
        vi.setSystemTime(new Date("2026-04-01T10:00:00Z"))

        dismissReviewPrompt("es")
        expect(isReviewPromptDismissed("es")).toBe(true)

        // Advance to the next calendar day
        vi.setSystemTime(new Date("2026-04-02T00:01:00Z"))

        // The key for 2026-04-01 is still in localStorage but today's key is different
        expect(isReviewPromptDismissed("es")).toBe(false)
    })

    it("dismissal on a given date produces a key containing that date", () => {
        vi.useFakeTimers()
        vi.setSystemTime(new Date("2026-04-01T08:00:00Z"))

        dismissReviewPrompt("ja")

        // The key written to localStorage should embed today's date
        const keys = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i))
        const reviewKey = keys.find(k => k?.startsWith("ls:review-dismissed:ja:"))
        expect(reviewKey).toBeDefined()
        expect(reviewKey).toContain("2026-04-01")
    })
})
