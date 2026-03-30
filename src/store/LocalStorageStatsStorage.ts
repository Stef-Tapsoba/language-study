// store/LocalStorageStatsStorage.ts — localStorage implementation of IStatsStorage.
//
// Reads and writes the ls:stats JSON blob that was previously managed entirely
// by Zustand's persist middleware. The schema is identical — this lets existing
// data survive the migration from Zustand-persist to the explicit storage seam.

import type { StatsData, DayStats } from "./useStatsStore"
import type { IStatsStorage } from "./IStatsStorage"

const STATS_KEY = "ls:stats"
const HISTORY_DAYS = 360

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

function loadRaw(): StatsData {
    try {
        const raw = localStorage.getItem(STATS_KEY)
        if (!raw) return {}
        // Support both Zustand-persist format ({ state: { data: ... } }) and plain StatsData
        const parsed = JSON.parse(raw)
        const inner = parsed?.state?.data ?? parsed?.data ?? parsed
        return pruneData(inner as StatsData)
    } catch {
        return {}
    }
}

function saveRaw(data: StatsData): void {
    localStorage.setItem(STATS_KEY, JSON.stringify(data))
}

function getDay(data: StatsData, langId: string, date: string): DayStats {
    return data[langId]?.[date] ?? { reviewed: 0, correct: 0, acts: 0, qTotal: 0, qCorrect: 0 }
}

export class LocalStorageStatsStorage implements IStatsStorage {
    async load(): Promise<StatsData> {
        return loadRaw()
    }

    async recordReview(langId: string, date: string, correct: boolean): Promise<void> {
        const data = loadRaw()
        const e = getDay(data, langId, date)
        const updated: DayStats = {
            ...e,
            reviewed: e.reviewed + 1,
            correct:  e.correct  + (correct ? 1 : 0),
            acts:     e.acts     + 1,
            qTotal:   e.qTotal   + 1,
            qCorrect: e.qCorrect + (correct ? 1 : 0),
        }
        saveRaw({ ...data, [langId]: { ...(data[langId] ?? {}), [date]: updated } })
    }

    async recordQuizAnswer(langId: string, date: string, correct: boolean): Promise<void> {
        const data = loadRaw()
        const e = getDay(data, langId, date)
        const updated: DayStats = {
            ...e,
            acts:     e.acts     + 1,
            qTotal:   e.qTotal   + 1,
            qCorrect: e.qCorrect + (correct ? 1 : 0),
        }
        saveRaw({ ...data, [langId]: { ...(data[langId] ?? {}), [date]: updated } })
    }

    async recordActivity(langId: string, date: string): Promise<void> {
        const data = loadRaw()
        const e = getDay(data, langId, date)
        const updated: DayStats = { ...e, acts: e.acts + 1 }
        saveRaw({ ...data, [langId]: { ...(data[langId] ?? {}), [date]: updated } })
    }

    async resetLanguage(langId: string): Promise<void> {
        const data = loadRaw()
        const next = { ...data }
        delete next[langId]
        saveRaw(next)
    }
}
