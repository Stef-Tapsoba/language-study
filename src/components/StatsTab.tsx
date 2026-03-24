// components/StatsTab.tsx — Stats tab for the Dashboard
import { useMemo } from "react"
import { useStatsStore, getHistory, getTotalReviews, getOverallAccuracy } from "../store/useStatsStore"
import { useGlobalStreak } from "../hooks/useGlobalStreak"
import { CEFRLevel } from "../types"
import { SECTION_CONFIG } from "../data/sectionConfig"
import { useProgressStats } from "../hooks/useProgressStats"

function BreakdownBar({ label, done, total, color }: Readonly<{
    label: string; done: number; total: number; color: string
}>) {
    const pct = total ? done / total * 100 : 0
    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-400 w-24 shrink-0">{label}</span>
            <div className="flex-1 h-2 bg-gray-200/70 dark:bg-gray-600/70 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full transition-[width] duration-700 ease-out`} style={{ width: `${pct}%` }} />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 w-12 text-right shrink-0">{done}/{total}</span>
        </div>
    )
}

export function StatsTab({ langId, level }: Readonly<{ langId: string; level: CEFRLevel }>) {
    const data = useStatsStore(s => s.data)
    const history    = useMemo(() => getHistory(data, langId, 14),        [data, langId])
    const total      = useMemo(() => getTotalReviews(data, langId),        [data, langId])
    const streak     = useGlobalStreak()
    const avgAcc     = useMemo(() => getOverallAccuracy(data, langId, 14), [data, langId])
    const maxReviewed = useMemo(() => Math.max(...history.map(d => d.reviewed), 1), [history])
    const allReviewed = useMemo(() => history.reduce((s, d) => s + d.reviewed, 0),  [history])

    const { grammar, vocab, verbs, reading, listening } = useProgressStats(langId, level)

    return (
        <div className="flex flex-col gap-5">
            {/* Stat chips */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 text-center">
                    <p className="text-2xl font-bold text-violet-600">{allReviewed}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">cards reviewed</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">last 14 days</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 text-center">
                    <p className="text-2xl font-bold text-green-600">{avgAcc}%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">quiz accuracy</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">all activities</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 text-center">
                    <p className="text-2xl font-bold text-amber-500">{streak}🔥</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">day streak</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">keep it up!</p>
                </div>
            </div>

            {/* Bar chart */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">Daily reviews</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />{" "}
                            {"Reviewed"}
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />{" "}
                            {"Correct"}
                        </span>
                    </div>
                </div>
                <div className="flex items-end gap-1.5" style={{ height: 80 }}>
                    {history.map(day => (
                        <div key={day.date} className="flex-1 flex items-end gap-px h-full">
                            <div
                                className="flex-1 rounded-t bg-violet-300 transition-all"
                                style={{ height: `${(day.reviewed / maxReviewed) * 100}%`, minHeight: day.reviewed ? 2 : 0 }}
                                title={`${day.date}: ${day.reviewed} reviewed`}
                            />
                            <div
                                className="flex-1 rounded-t bg-green-300 transition-all"
                                style={{ height: `${(day.correct / maxReviewed) * 100}%`, minHeight: day.correct ? 2 : 0 }}
                                title={`${day.date}: ${day.correct} correct`}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex gap-1.5 mt-1">
                    {history.map(day => {
                        const d = new Date(day.date + "T00:00:00")
                        return (
                            <div key={day.date} className="flex-1 text-center">
                                {d.getDay() === 1 && <span className="text-xs text-gray-300 dark:text-gray-600">M</span>}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Progress breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-4">Progress breakdown</p>
                <div className="flex flex-col gap-3">
                    <BreakdownBar label={SECTION_CONFIG.grammar.label}   done={grammar.done}   total={grammar.total}   color={SECTION_CONFIG.grammar.gradient}   />
                    <BreakdownBar label={SECTION_CONFIG.vocab.label}     done={vocab.done}     total={vocab.total}     color={SECTION_CONFIG.vocab.gradient}     />
                    <BreakdownBar label={SECTION_CONFIG.verbs.label}     done={verbs.done}     total={verbs.total}     color={SECTION_CONFIG.verbs.gradient}     />
                    <BreakdownBar label={SECTION_CONFIG.reading.label}   done={reading.done}   total={reading.total}   color={SECTION_CONFIG.reading.gradient}   />
                    <BreakdownBar label={SECTION_CONFIG.listening.label} done={listening.done} total={listening.total} color={SECTION_CONFIG.listening.gradient} />
                </div>
            </div>

            {total === 0 && (
                <p className="text-center text-gray-400 dark:text-gray-500 text-sm py-2">
                    Complete a drill, flashcard session, or exercise to see your stats.
                </p>
            )}
        </div>
    )
}
