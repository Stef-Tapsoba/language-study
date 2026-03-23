// hooks/useProgressStats.ts — Centralised progress calculation for a language at a CEFR level.
//
// Exports both:
//   computeProgressStats(langId, level, completed, masteredUnitIds) — plain function, safe outside React
//   useProgressStats(langId, level)                                 — React hook, reads from ProgressContext
//
// Both return ProgressStats. When Supabase lands, only ProgressContext changes.

import { CEFRLevel } from "../types"
import { useProgress } from "../context/ProgressContext"
import { getModule } from "../data/modules"

export interface SectionProgress {
    done: number
    total: number
    pct: number
}

export interface ProgressStats {
    grammar: SectionProgress
    vocab: SectionProgress
    verbs: SectionProgress
    reading: SectionProgress
    listening: SectionProgress
    totalDone: number
    totalItems: number
    overallPct: number
    /** Returns true if the item is done — either individually completed or part of a mastered unit. */
    isDone: (id: string) => boolean
}

/**
 * Pure function — computes content progress for langId at the given level.
 * Accepts completed lesson IDs and mastered unit IDs so it can be called
 * from both the React hook (ProgressContext) and non-hook contexts (ProfilePage reduce).
 */
export function computeProgressStats(
    langId: string,
    level: CEFRLevel,
    completedLessons: string[],
    masteredUnitIds: string[]
): ProgressStats {
    const mod = getModule(langId)

    const masteredUnitItems = new Set(
        (mod?.units ?? [])
            .filter(u => masteredUnitIds.includes(u.id))
            .flatMap(u => [...u.grammarIds, ...u.vocabIds, ...u.verbIds])
    )
    const isDone = (id: string) => completedLessons.includes(id) || masteredUnitItems.has(id)

    function calc(items: { id: string }[], unitAware = true): SectionProgress {
        const done = items.filter(x => unitAware ? isDone(x.id) : completedLessons.includes(x.id)).length
        const total = items.length
        return { done, total, pct: total ? done / total * 100 : 0 }
    }

    const grammar   = calc((mod?.grammar             ?? []).filter(g => g.level === level))
    const vocab     = calc((mod?.vocab               ?? []).filter(v => v.level === level))
    const verbs     = calc((mod?.verbs               ?? []).filter(v => v.level === level))
    const reading   = calc((mod?.readingPassages     ?? []).filter(r => r.level === level), false)
    const listening = calc((mod?.listeningExercises  ?? []).filter(l => l.level === level), false)

    const totalDone  = grammar.done  + vocab.done  + verbs.done  + reading.done  + listening.done
    const totalItems = grammar.total + vocab.total + verbs.total + reading.total + listening.total

    return {
        grammar, vocab, verbs, reading, listening,
        totalDone, totalItems,
        overallPct: totalItems ? Math.round(totalDone / totalItems * 100) : 0,
        isDone,
    }
}

/**
 * React hook — reads completed/mastered from ProgressContext, then delegates to computeProgressStats.
 * Reactively re-computes whenever progress state changes (e.g. after markLessonComplete).
 */
export function useProgressStats(langId: string, level: CEFRLevel): ProgressStats {
    const { completed, mastered } = useProgress()
    return computeProgressStats(langId, level, completed(langId), mastered(langId))
}
