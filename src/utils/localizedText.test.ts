// utils/localizedText.test.ts
//
// Pure-function tests for localizedText.ts — no DOM or hook machinery needed.
// Pattern follows answerMatch.test.ts (plain describe/it/expect, no renderHook).

import { describe, it, expect } from "vitest"
import { toLocalized, resolveDisplay, resolvePrimary } from "./localizedText"
import type { LocalizedText } from "../types"

// ---------------------------------------------------------------------------
// toLocalized
// ---------------------------------------------------------------------------

describe("toLocalized", () => {
    it("wraps a plain string as { native: string }", () => {
        expect(toLocalized("hello")).toEqual({ native: "hello" })
    })

    it("passes a LocalizedText object through unchanged", () => {
        const lt: LocalizedText = { native: "hola", target: "hello" }
        expect(toLocalized(lt)).toBe(lt)
    })
})

// ---------------------------------------------------------------------------
// resolveDisplay — plain string input (treated as native-only)
// ---------------------------------------------------------------------------

describe("resolveDisplay — plain string input", () => {
    it("returns single mode with the string at A1 (native-only level)", () => {
        const result = resolveDisplay("hola", "A1")
        expect(result).toEqual({ mode: "single", text: "hola" })
    })

    it("returns single mode with the string at B2 (no target present → graceful fallback)", () => {
        const result = resolveDisplay("hola", "B2")
        expect(result).toEqual({ mode: "single", text: "hola" })
    })
})

// ---------------------------------------------------------------------------
// resolveDisplay — LocalizedText with native + target
// ---------------------------------------------------------------------------

describe("resolveDisplay — LocalizedText with native and target", () => {
    const lt: LocalizedText = { native: "hola", target: "hello" }

    it("A1 → single mode, native text only", () => {
        expect(resolveDisplay(lt, "A1")).toEqual({ mode: "single", text: "hola" })
    })

    it("A2 → bilingual-native-primary: native is primary, target is secondary", () => {
        expect(resolveDisplay(lt, "A2")).toEqual({
            mode: "bilingual-native-primary",
            primary: "hola",
            secondary: "hello",
        })
    })

    it("B1 → bilingual-target-primary: target is primary, native is secondary", () => {
        expect(resolveDisplay(lt, "B1")).toEqual({
            mode: "bilingual-target-primary",
            primary: "hello",
            secondary: "hola",
        })
    })

    it("B2 → single mode, target text only", () => {
        expect(resolveDisplay(lt, "B2")).toEqual({ mode: "single", text: "hello" })
    })

    it("C1 → single mode, target text only", () => {
        expect(resolveDisplay(lt, "C1")).toEqual({ mode: "single", text: "hello" })
    })
})

// ---------------------------------------------------------------------------
// resolveDisplay — LocalizedText with native only (no target)
// ---------------------------------------------------------------------------

describe("resolveDisplay — LocalizedText without target (graceful fallback)", () => {
    const lt: LocalizedText = { native: "hola" }

    it("A1 → single mode with native", () => {
        expect(resolveDisplay(lt, "A1")).toEqual({ mode: "single", text: "hola" })
    })

    it("A2 → single mode with native (no target to pair with)", () => {
        expect(resolveDisplay(lt, "A2")).toEqual({ mode: "single", text: "hola" })
    })

    it("B1 → single mode with native (no target to pair with)", () => {
        expect(resolveDisplay(lt, "B1")).toEqual({ mode: "single", text: "hola" })
    })

    it("B2 → single mode with native (no target available)", () => {
        expect(resolveDisplay(lt, "B2")).toEqual({ mode: "single", text: "hola" })
    })
})

// ---------------------------------------------------------------------------
// resolvePrimary — convenience wrapper
// ---------------------------------------------------------------------------

describe("resolvePrimary", () => {
    it("returns the plain string directly when given a string at A1", () => {
        expect(resolvePrimary("hola", "A1")).toBe("hola")
    })

    it("returns the plain string at B2 when no target exists", () => {
        expect(resolvePrimary("hola", "B2")).toBe("hola")
    })

    it("returns native text at A1 when LocalizedText has both native and target", () => {
        const lt: LocalizedText = { native: "hola", target: "hello" }
        expect(resolvePrimary(lt, "A1")).toBe("hola")
    })

    it("returns native as primary at A2 (bilingual-native-primary mode)", () => {
        const lt: LocalizedText = { native: "hola", target: "hello" }
        expect(resolvePrimary(lt, "A2")).toBe("hola")
    })

    it("returns target as primary at B1 (bilingual-target-primary mode)", () => {
        const lt: LocalizedText = { native: "hola", target: "hello" }
        expect(resolvePrimary(lt, "B1")).toBe("hello")
    })

    it("returns target text at B2 when target is available", () => {
        const lt: LocalizedText = { native: "hola", target: "hello" }
        expect(resolvePrimary(lt, "B2")).toBe("hello")
    })

    it("returns native text at B2 when target is absent (graceful fallback)", () => {
        const lt: LocalizedText = { native: "hola" }
        expect(resolvePrimary(lt, "B2")).toBe("hola")
    })
})
