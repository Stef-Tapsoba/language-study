// store/merge.ts — Smart merge functions for progress import/conflict resolution.
//
// Extracted from ProfilePage so that:
//  - Merge logic is testable in isolation
//  - Stage 2 (Supabase) conflict resolution can reuse the same functions
//  - ProfilePage only handles UI, not data policy
//
// Merge rules:
//   progress — keep current CEFR level if already started; union completed/mastered ids
//   srs      — keep whichever card has been reviewed more (higher reviewCount wins)
//   stats    — per-field max (highest value wins — prevents accidental downgrades)

import type { UserProgress, UnitReinforcementState } from "../types"
import type { StatsData } from "./useStatsStore"
import type { SRSCardState } from "@myorg/srs"

// ─── Progress ─────────────────────────────────────────────────────────────────

function unionArrays(
    a: Record<string, string[]> = {},
    b: Record<string, string[]> = {}
): Record<string, string[]> {
    const result: Record<string, string[]> = {}
    const keys = new Set([...Object.keys(a), ...Object.keys(b)])
    for (const k of keys) result[k] = [...new Set([...(a[k] ?? []), ...(b[k] ?? [])])]
    return result
}

/**
 * Merge reinforcement completion records — append-only, no downgrades.
 * A completed exercise is never un-completed by an import.
 */
function mergeReinforcement(
    current: Record<string, Record<string, UnitReinforcementState>> = {},
    imported: Record<string, Record<string, UnitReinforcementState>> = {}
): Record<string, Record<string, UnitReinforcementState>> {
    const result: Record<string, Record<string, UnitReinforcementState>> = {}
    const langs = new Set([...Object.keys(current), ...Object.keys(imported)])
    for (const lang of langs) {
        const units = new Set([
            ...Object.keys(current[lang] ?? {}),
            ...Object.keys(imported[lang] ?? {}),
        ])
        result[lang] = {}
        for (const unitId of units) {
            const c = current[lang]?.[unitId]
            const i = imported[lang]?.[unitId]
            result[lang][unitId] = {
                grammarLessonIds: [...new Set([
                    ...(c?.grammarLessonIds ?? []),
                    ...(i?.grammarLessonIds ?? []),
                ])],
                ...(c?.vocab === true || i?.vocab === true ? { vocab: true as const } : {}),
                ...(c?.verbs === true || i?.verbs === true ? { verbs: true as const } : {}),
            }
        }
    }
    return result
}

/**
 * Merge an imported UserProgress into the current one.
 * - CEFR levels: current wins for any language already started; imported fills gaps.
 * - completedLessons / masteredUnits / completedReinforcement: union (append-only, no downgrades).
 * - userId / selectedLanguage: always kept from current session.
 */
export function mergeProgress(current: UserProgress, imported: UserProgress): UserProgress {
    const levels = {
        ...imported.levels,
        ...current.levels,   // current wins on conflict
    }
    return {
        ...imported,
        userId:                   current.userId,
        selectedLanguage:         current.selectedLanguage ?? imported.selectedLanguage,
        // Current goal wins — don't override an active session's goal from an old backup
        goal:                     current.goal ?? imported.goal,
        levels,
        completedLessons:         unionArrays(current.completedLessons, imported.completedLessons),
        masteredUnits:            unionArrays(current.masteredUnits,    imported.masteredUnits),
        completedReinforcement:   mergeReinforcement(
                                      current.completedReinforcement,
                                      imported.completedReinforcement
                                  ),
    }
}

// ─── SRS ──────────────────────────────────────────────────────────────────────

/**
 * Merge imported SRS card states into the current ones.
 * For each card, keep whichever state has the higher reviewCount — this prevents
 * a stale backup from overwriting a card that has been reviewed more recently.
 */
export function mergeSRS(
    current: Record<string, Record<string, SRSCardState>>,
    imported: Record<string, Record<string, SRSCardState>>
): Record<string, Record<string, SRSCardState>> {
    const result: Record<string, Record<string, SRSCardState>> = { ...imported }
    for (const [lang, currCards] of Object.entries(current)) {
        const impCards = imported[lang] ?? {}
        const merged: Record<string, SRSCardState> = { ...impCards }
        for (const [cardId, card] of Object.entries(currCards)) {
            const imp = impCards[cardId]
            merged[cardId] = !imp || card.reviewCount >= imp.reviewCount ? card : imp
        }
        result[lang] = merged
    }
    return result
}

// ─── Stats ────────────────────────────────────────────────────────────────────

/**
 * Merge imported daily stats into the current ones.
 * For each (language, date, field) triple, keep the maximum value — this ensures
 * a backup never reduces a count that was achieved after the backup was taken.
 */
export function mergeStats(current: StatsData, imported: StatsData): StatsData {
    const result: StatsData = { ...imported }
    for (const [lang, days] of Object.entries(current)) {
        result[lang] = { ...imported[lang] }
        for (const [day, stats] of Object.entries(days)) {
            const imp = imported[lang]?.[day]
            result[lang][day] = {
                reviewed: Math.max(stats.reviewed, imp?.reviewed ?? 0),
                correct:  Math.max(stats.correct,  imp?.correct  ?? 0),
                acts:     Math.max(stats.acts,      imp?.acts     ?? 0),
                qTotal:   Math.max(stats.qTotal,    imp?.qTotal   ?? 0),
                qCorrect: Math.max(stats.qCorrect,  imp?.qCorrect ?? 0),
            }
        }
    }
    return result
}
