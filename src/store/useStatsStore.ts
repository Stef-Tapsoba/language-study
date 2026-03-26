// store/useStatsStore.ts — Zustand v5 stats store with localStorage persistence
import { create } from "zustand"
import { persist, createJSONStorage, type StateStorage } from "zustand/middleware"

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

function todayStr(): string { return new Date().toISOString().slice(0, 10) }

const HISTORY_DAYS = 360

/** Remove stat entries older than HISTORY_DAYS to prevent unbounded localStorage growth. */
function pruneData(data: StatsData): StatsData {
    const cutoff = new Date()
    cutoff.setDate(cutoff.getDate() - HISTORY_DAYS)
    const cutoffStr = cutoff.toISOString().slice(0, 10)
    const pruned: StatsData = {}
    for (const [lang, days] of Object.entries(data)) {
        const kept: Record<string, DayStats> = {}
        for (const [day, stats] of Object.entries(days)) {
            if (day >= cutoffStr) kept[day] = stats
        }
        if (Object.keys(kept).length > 0) pruned[lang] = kept
    }
    return pruned
}

/** Wraps localStorage with a debounced setItem to avoid a write on every keystroke/flip */
function debouncedLocalStorage(delayMs = 500): StateStorage {
    const timers = new Map<string, ReturnType<typeof setTimeout>>()
    return {
        getItem:    (name) => localStorage.getItem(name),
        removeItem: (name) => localStorage.removeItem(name),
        setItem(name, value) {
            const t = timers.get(name)
            if (t !== undefined) clearTimeout(t)
            timers.set(name, setTimeout(() => {
                localStorage.setItem(name, value)
                timers.delete(name)
            }, delayMs))
        },
    }
}

// ─── Store shape ─────────────────────────────────────────────────────────────

interface StatsState {
    data: StatsData

    /** Record one flashcard result for a language */
    recordReview: (langId: string, correct: boolean) => void

    /** Record a quiz answer from any non-flashcard activity */
    recordQuizAnswer: (langId: string, correct: boolean) => void

    /** Record any study activity that doesn't produce a quiz result */
    recordActivity: (langId: string) => void

    /** Clear per-language history (called on language reset) */
    resetStats: (langId: string) => void
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useStatsStore = create<StatsState>()(
    persist(
        (set) => ({
            data: {},

            recordReview(langId, correct) {
                set(({ data }) => {
                    const d = todayStr()
                    const lang = data[langId] ?? {}
                    const e = lang[d]
                    return { data: { ...data, [langId]: { ...lang, [d]: {
                        reviewed: (e?.reviewed ?? 0) + 1,
                        correct:  (e?.correct  ?? 0) + (correct ? 1 : 0),
                        acts:     (e?.acts     ?? 0) + 1,
                        qTotal:   (e?.qTotal   ?? 0) + 1,
                        qCorrect: (e?.qCorrect ?? 0) + (correct ? 1 : 0),
                    } } } }
                })
            },

            recordQuizAnswer(langId, correct) {
                set(({ data }) => {
                    const d = todayStr()
                    const lang = data[langId] ?? {}
                    const e = lang[d]
                    return { data: { ...data, [langId]: { ...lang, [d]: {
                        reviewed: e?.reviewed ?? 0,
                        correct:  e?.correct  ?? 0,
                        acts:     (e?.acts     ?? 0) + 1,
                        qTotal:   (e?.qTotal   ?? 0) + 1,
                        qCorrect: (e?.qCorrect ?? 0) + (correct ? 1 : 0),
                    } } } }
                })
            },

            recordActivity(langId) {
                set(({ data }) => {
                    const d = todayStr()
                    const lang = data[langId] ?? {}
                    const e = lang[d]
                    return { data: { ...data, [langId]: { ...lang, [d]: {
                        reviewed: e?.reviewed ?? 0,
                        correct:  e?.correct  ?? 0,
                        acts:     (e?.acts ?? 0) + 1,
                        qTotal:   e?.qTotal   ?? 0,
                        qCorrect: e?.qCorrect ?? 0,
                    } } } }
                })
            },

            resetStats(langId) {
                set(({ data }) => {
                    const next = { ...data }
                    delete next[langId]
                    return { data: next }
                })
            },
        }),
        {
            name: "ls:stats",
            storage: createJSONStorage(() => debouncedLocalStorage(500)),
            version: 2,
            // Strip actions — only persist { data: StatsData }
            partialize: (state) => ({ data: state.data }),
            // v0 → v1: handle data stored before Zustand (raw StatsData, no { data: } wrapper)
            // v1 → v2: prune history to HISTORY_DAYS (360) to cap localStorage growth
            migrate(persistedState: unknown, version: number) {
                let data: StatsData
                if (version === 0) {
                    const s = persistedState as Record<string, unknown>
                    data = ("data" in s ? s.data : s) as StatsData
                } else {
                    data = (persistedState as { data: StatsData }).data ?? {}
                }
                return { data: pruneData(data) }
            },
        }
    )
)

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
 * Global streak: consecutive calendar days (including today if studied) with at least
 * one activity in ANY language. Walking back from today, stop at first day with no activity.
 */
export function getGlobalStreak(data: StatsData): number {
    let streak = 0
    const d = new Date()
    for (let i = 0; i < 365; i++) {
        const dateStr = d.toISOString().slice(0, 10)
        const hasActivity = Object.values(data).some(langDays => {
            const day = langDays[dateStr]
            if (!day) return false
            return (day.acts ?? 0) + (day.reviewed ?? 0) > 0
        })
        if (!hasActivity) break
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
