// src/store/stats.ts — Study history and global streak

type DayStats = { reviewed: number; correct: number }
type StatsStore = Record<string, Record<string, DayStats>>
// StatsStore[langId]["2026-03-09"] = { reviewed: 5, correct: 4 }

function todayStr(): string { return new Date().toISOString().slice(0, 10) }
function load(): StatsStore { return JSON.parse(localStorage.getItem("ls:stats") ?? "{}") }
function save(s: StatsStore): void { localStorage.setItem("ls:stats", JSON.stringify(s)) }

/** Record one flashcard result for a language */
export function recordReview(langId: string, correct: boolean): void {
    const s = load()
    const d = todayStr()
    s[langId] ??= {}
    s[langId][d] ??= { reviewed: 0, correct: 0 }
    s[langId][d].reviewed++
    if (correct) s[langId][d].correct++
    save(s)
}

/** Get the last `days` calendar days of stats for a language (oldest first), padded with zeros */
export function getHistory(langId: string, days = 14): Array<{ date: string; reviewed: number; correct: number }> {
    const store = load()[langId] ?? {}
    return Array.from({ length: days }, (_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - (days - 1 - i))
        const date = d.toISOString().slice(0, 10)
        const { reviewed = 0, correct = 0 } = store[date] ?? {}
        return { date, reviewed, correct }
    })
}

/**
 * Global streak: consecutive calendar days (including today if studied) with at least
 * one review in ANY language. Walking back from today, stop at first day with no activity.
 */
export function getGlobalStreak(): number {
    const store = load()
    let streak = 0
    const d = new Date()
    for (let i = 0; i < 365; i++) {
        const dateStr = d.toISOString().slice(0, 10)
        const hasActivity = Object.values(store).some(langDays => (langDays[dateStr]?.reviewed ?? 0) > 0)
        if (!hasActivity) break
        streak++
        d.setDate(d.getDate() - 1)
    }
    return streak
}

/** Total reviews ever for a language */
export function getTotalReviews(langId: string): number {
    const store = load()[langId] ?? {}
    return Object.values(store).reduce((sum, day) => sum + day.reviewed, 0)
}

/** Clear per-language history (called on language reset). Global streak stays intact. */
export function resetStats(langId: string): void {
    const s = load()
    delete s[langId]
    save(s)
}
