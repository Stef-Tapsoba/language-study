// hooks/useDarkMode.ts — Persisted dark-mode toggle that syncs with the <html> class
import { useState, useEffect } from "react"

const LS_KEY = "ls:dark-mode"

function prefersDark(): boolean {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
}

function readStored(): boolean {
    const v = localStorage.getItem(LS_KEY)
    return v !== null ? v === "true" : prefersDark()
}

export function useDarkMode(): [boolean, () => void] {
    const [dark, setDark] = useState(readStored)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark)
        localStorage.setItem(LS_KEY, String(dark))
    }, [dark])

    // Sync the class on mount (before first paint when SSR/hydration isn't a concern,
    // this also guards against stale HTML class from a previous session).
    useEffect(() => {
        document.documentElement.classList.toggle("dark", readStored())
    }, [])

    return [dark, () => setDark(d => !d)]
}
