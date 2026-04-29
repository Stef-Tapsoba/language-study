// hooks/useDarkMode.test.ts
//
// Tests the useDarkMode hook.
// - localStorage is provided by the in-memory test setup (vitest jsdom environment).
// - document.documentElement is the real jsdom <html> element, so class mutations
//   are directly observable.
// - We clear localStorage and the "dark" class before each test to guarantee
//   a clean slate regardless of test ordering.

import { describe, it, expect, beforeEach } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useDarkMode } from "./useDarkMode"

const LS_KEY = "ls:dark-mode"

beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove("dark")
})

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("useDarkMode", () => {
    it("defaults to light mode (dark === false) when no preference is stored", () => {
        const { result } = renderHook(() => useDarkMode())
        const [dark] = result.current
        expect(dark).toBe(false)
    })

    it("does not add the 'dark' class to document.documentElement in light mode", () => {
        renderHook(() => useDarkMode())
        expect(document.documentElement.classList.contains("dark")).toBe(false)
    })

    it("reads a persisted 'true' preference on mount and returns dark === true", () => {
        localStorage.setItem(LS_KEY, "true")
        const { result } = renderHook(() => useDarkMode())
        const [dark] = result.current
        expect(dark).toBe(true)
    })

    it("reads a persisted 'false' preference on mount and returns dark === false", () => {
        localStorage.setItem(LS_KEY, "false")
        const { result } = renderHook(() => useDarkMode())
        const [dark] = result.current
        expect(dark).toBe(false)
    })

    it("applies the 'dark' class to document.documentElement when dark === true on mount", () => {
        localStorage.setItem(LS_KEY, "true")
        renderHook(() => useDarkMode())
        expect(document.documentElement.classList.contains("dark")).toBe(true)
    })

    it("toggling switches from light to dark and persists 'true' in localStorage", () => {
        const { result } = renderHook(() => useDarkMode())
        const [, toggle] = result.current

        act(() => { toggle() })

        const [dark] = result.current
        expect(dark).toBe(true)
        expect(localStorage.getItem(LS_KEY)).toBe("true")
    })

    it("toggling twice returns to light mode and persists 'false' in localStorage", () => {
        const { result } = renderHook(() => useDarkMode())
        const [, toggle] = result.current

        act(() => { toggle() })
        act(() => { toggle() })

        const [dark] = result.current
        expect(dark).toBe(false)
        expect(localStorage.getItem(LS_KEY)).toBe("false")
    })

    it("adds the 'dark' class after toggling to dark mode", () => {
        const { result } = renderHook(() => useDarkMode())
        const [, toggle] = result.current

        act(() => { toggle() })

        expect(document.documentElement.classList.contains("dark")).toBe(true)
    })

    it("removes the 'dark' class after toggling back to light mode", () => {
        localStorage.setItem(LS_KEY, "true")
        const { result } = renderHook(() => useDarkMode())
        const [, toggle] = result.current

        act(() => { toggle() })

        expect(document.documentElement.classList.contains("dark")).toBe(false)
    })
})
