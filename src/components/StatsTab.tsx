// components/StatsTab.tsx — Stats tab for the Dashboard
import { getHistory, getTotalReviews, getGlobalStreak, getOverallAccuracy } from "../store/stats"
import { CEFRLevel } from "../types"
import { SECTION_CONFIG } from "../data/sectionConfig"
import { useProgressStats } from "../hooks/useProgressStats"

function BreakdownBar({ label, done, total, color }: Readonly<{
    label: string; done: number; total: number; color: string
}>) {
    const pct = total ? done / total * 100 : 0
    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 w-24 shrink-0">{label}</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
            </div>
            <span className="text-xs text-gray-500 w-12 text-right shrink-0">{done}/{total}</span>
        </div>
    )
}

export function StatsTab({ langId, level }: Readonly<{ langId: string; level: CEFRLevel }>) {
    const history = getHistory(langId, 14)
    const total = getTotalReviews(langId)
    const streak = getGlobalStreak()
    const maxReviewed = Math.max(...history.map(d => d.reviewed), 1)
    const allReviewed = history.reduce((s, d) => s + d.reviewed, 0)
    const avgAcc = getOverallAccuracy(langId, 14)

    const { grammar, vocab, verbs, reading, listening } = useProgressStats(langId, level)

    return (
        <div className="flex flex-col gap-5">
            {/* Stat chips */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
                    <p className="text-2xl font-bold text-violet-600">{allReviewed}</p>
                    <p className="text-xs text-gray-500 mt-1">cards reviewed</p>
                    <p className="text-xs text-gray-400">last 14 days</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
                    <p className="text-2xl font-bold text-green-600">{avgAcc}%</p>
                    <p className="text-xs text-gray-500 mt-1">quiz accuracy</p>
                    <p className="text-xs text-gray-400">all activities</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
                    <p className="text-2xl font-bold text-amber-500">{streak}🔥</p>
                    <p className="text-xs text-gray-500 mt-1">day streak</p>
                    <p className="text-xs text-gray-400">keep it up!</p>
                </div>
            </div>

            {/* Bar chart */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Daily reviews</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
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
                                {d.getDay() === 1 && <span className="text-xs text-gray-300">M</span>}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Progress breakdown */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Progress breakdown</p>
                <div className="flex flex-col gap-3">
                    <BreakdownBar label={SECTION_CONFIG.grammar.label}   done={grammar.done}   total={grammar.total}   color={SECTION_CONFIG.grammar.color}   />
                    <BreakdownBar label={SECTION_CONFIG.vocab.label}     done={vocab.done}     total={vocab.total}     color={SECTION_CONFIG.vocab.color}     />
                    <BreakdownBar label={SECTION_CONFIG.verbs.label}     done={verbs.done}     total={verbs.total}     color={SECTION_CONFIG.verbs.color}     />
                    <BreakdownBar label={SECTION_CONFIG.reading.label}   done={reading.done}   total={reading.total}   color={SECTION_CONFIG.reading.color}   />
                    <BreakdownBar label={SECTION_CONFIG.listening.label} done={listening.done} total={listening.total} color={SECTION_CONFIG.listening.color} />
                </div>
            </div>

            {total === 0 && (
                <p className="text-center text-gray-400 text-sm py-2">
                    Complete a drill, flashcard session, or exercise to see your stats.
                </p>
            )}
        </div>
    )
}
