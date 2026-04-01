// store/useStatsStore.ts — Zustand v5 store for in-memory study stats.
//
// Persistence is handled by IStatsStorage (via registry) rather than Zustand's
// persist middleware. This decouples the reactive in-memory state from the
// storage backend, making it trivial to swap localStorage for Supabase at Stage 2.
//
// Hydration: call useStatsStore.getState().hydrate() once after the user session
// is established (done inside ProgressContext.initUserSession).

import { create } from "zustand"
import { registry } from "./registry"

// ─── Types ────────────────────────────────────────────────────────────────────

export type DayStats = {
    reviewed: number    // flashcard cards reviewed
    correct: number     // flashcard correct answers
    acts: number        // any study action (lessons, reading, listening, etc.)
    qTotal: number      // quiz answers across all activity types
    qCorrect: number    // correct quiz answers across all activity types
}

export type StatsData = Record<string, Record<string, DayStats>>

// ─── Internal helpers ─────────────────────────────────────────────────────────

export function todayStr(): string { return new Date().toISOString().slice(0, 10) }

// ─── Store shape ─────────────────────────────────────────────────────────────

interface StatsState {
    data: StatsData
    hydrated: boolean

    /** Load stats from storage into the in-memory state. Call once on login. */
    hydrate(): Promise<void>

    /** Record one flashcard result for a language */
    recordReview: (langId: string, correct: boolean) => void

    /** Record a quiz answer from any non-flashcard activity */
    recordQuizAnswer: (langId: string, correct: boolean) => void

    /** Record any study activity that doesn't produce a quiz result */
    recordActivity: (langId: string) => void

    /** Clear per-language history (called on language reset) */
    resetStats: (langId: string) => void

    /** Wipe all stats for every language (called on user change) */
    resetAllStats: () => Promise<void>
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useStatsStore = create<StatsState>()((set, get) => ({  // 'get' used by resetAllStats
    data: {},
    hydrated: false,

    async hydrate() {
        const data = await registry.stats.load()
        set({ data, hydrated: true })
    },

    recordReview(langId, correct) {
        const date = todayStr()
        set(({ data }) => {
            const lang = data[langId] ?? {}
            const e = lang[date]
            return { data: { ...data, [langId]: { ...lang, [date]: {
                reviewed: (e?.reviewed ?? 0) + 1,
                correct:  (e?.correct  ?? 0) + (correct ? 1 : 0),
                acts:     (e?.acts     ?? 0) + 1,
                qTotal:   (e?.qTotal   ?? 0) + 1,
                qCorrect: (e?.qCorrect ?? 0) + (correct ? 1 : 0),
            } } } }
        })
        registry.stats.recordReview(langId, date, correct).catch(console.error)
    },

    recordQuizAnswer(langId, correct) {
        const date = todayStr()
        set(({ data }) => {
            const lang = data[langId] ?? {}
            const e = lang[date]
            return { data: { ...data, [langId]: { ...lang, [date]: {
                reviewed: e?.reviewed ?? 0,
                correct:  e?.correct  ?? 0,
                acts:     (e?.acts     ?? 0) + 1,
                qTotal:   (e?.qTotal   ?? 0) + 1,
                qCorrect: (e?.qCorrect ?? 0) + (correct ? 1 : 0),
            } } } }
        })
        registry.stats.recordQuizAnswer(langId, date, correct).catch(console.error)
    },

    recordActivity(langId) {
        const date = todayStr()
        set(({ data }) => {
            const lang = data[langId] ?? {}
            const e = lang[date]
            return { data: { ...data, [langId]: { ...lang, [date]: {
                reviewed: e?.reviewed ?? 0,
                correct:  e?.correct  ?? 0,
                acts:     (e?.acts ?? 0) + 1,
                qTotal:   e?.qTotal   ?? 0,
                qCorrect: e?.qCorrect ?? 0,
            } } } }
        })
        registry.stats.recordActivity(langId, date).catch(console.error)
    },

    resetStats(langId) {
        set(({ data }) => {
            const next = { ...data }
            delete next[langId]
            return { data: next }
        })
        registry.stats.resetLanguage(langId).catch(console.error)
    },

    async resetAllStats() {
        // Read lang keys synchronously from the current Zustand state — avoids an
        // async gap where recordActivity() could fire between set({}) and load(),
        // creating a new entry that the subsequent resets would then also wipe.
        const langIds = Object.keys(get().data)
        await Promise.all(langIds.map(lang => registry.stats.resetLanguage(lang)))
        set({ data: {}, hydrated: false })
    },
}))

// ─── Plain computation functions (take data as first param — NOT hooks) ───────

/** Get the last `days` calendar days of stats for a language (oldest first), padded with zeros */
export function getHistory(
    data: StatsData,
    langId: string,
    days = 14
): Array<{ date: string; reviewed: number; correct: number }> {
    const langDays = data[langId] ?? {}
    return Array.from({ length: days }, (_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - (days - 1 - i))
        const date = d.toISOString().slice(0, 10)
        const { reviewed = 0, correct = 0 } = langDays[date] ?? {}
        return { date, reviewed, correct }
    })
}

/**
 * Global streak: consecutive calendar days with at least one activity in ANY language.
 * Includes today if studied. If today has no activity yet, the streak is preserved from
 * yesterday — it only breaks once two consecutive days have no activity.
 */
export function getGlobalStreak(data: StatsData): number {
    function hasActivityOn(dateStr: string): boolean {
        return Object.values(data).some(langDays => {
            const day = langDays[dateStr]
            return !!day && (day.acts ?? 0) + (day.reviewed ?? 0) > 0
        })
    }

    const d = new Date()
    const todayStr = d.toISOString().slice(0, 10)

    // If the user hasn't studied today, start counting from yesterday so the
    // streak is not broken until they miss a full calendar day.
    if (!hasActivityOn(todayStr)) {
        d.setDate(d.getDate() - 1)
    }

    let streak = 0
    for (let i = 0; i < 365; i++) {
        const dateStr = d.toISOString().slice(0, 10)
        if (!hasActivityOn(dateStr)) break
        streak++
        d.setDate(d.getDate() - 1)
    }
    return streak
}

/** Total reviews ever for a language */
export function getTotalReviews(data: StatsData, langId: string): number {
    const langDays = data[langId] ?? {}
    return Object.values(langDays).reduce((sum, day) => sum + day.reviewed, 0)
}

/** Overall accuracy across all quiz types for the last `days` days */
export function getOverallAccuracy(data: StatsData, langId: string, days = 14): number {
    const langDays = data[langId] ?? {}
    let total = 0
    let correct = 0
    Array.from({ length: days }, (_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - (days - 1 - i))
        return d.toISOString().slice(0, 10)
    }).forEach(date => {
        const day = langDays[date]
        if (!day) return
        total += day.qTotal ?? day.reviewed ?? 0
        correct += day.qCorrect ?? day.correct ?? 0
    })
    return total ? Math.round(correct / total * 100) : 0
}
