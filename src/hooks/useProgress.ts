// hooks/useProgress.ts — Accessor hook for ProgressContext.
//
// Extracted from ProgressContext.tsx so that file only exports React components,
// satisfying Vite Fast Refresh's "consistent exports" requirement.

import { useContext } from "react"
import { ProgressContext, type ProgressContextValue } from "../context/ProgressContext"

export function useProgress(): ProgressContextValue {
    const ctx = useContext(ProgressContext)
    if (!ctx) throw new Error("useProgress must be used inside <ProgressProvider>")
    return ctx
}
