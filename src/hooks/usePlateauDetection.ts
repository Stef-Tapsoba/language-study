// hooks/usePlateauDetection.ts — Reactive plateau detection for a language.
//
// Thin reactive wrapper over domain/plateau.ts detectPlateau(), following the
// useBreakDetection pattern: pure read of the stats store, no side effects.

import { useMemo } from "react"
import { useStatsStore, todayStr } from "../store/useStatsStore"
import { detectPlateau, type PlateauResult } from "../domain/plateau"

export function usePlateauDetection(langId: string): PlateauResult {
    const data = useStatsStore(s => s.data)
    return useMemo(() => detectPlateau(data, langId, todayStr()), [data, langId])
}
