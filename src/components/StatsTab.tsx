// components/StatsTab.tsx — 14-day review bar chart for the Dashboard Stats tab
import { getHistory, getTotalReviews } from "../store/stats"

function StatChip({ value, label, icon }: Readonly<{ value: string | number; label: string; icon: string }>) {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-indigo-600">{value}</p>
            <p className="text-xs text-gray-500 mt-1">{icon} {label}</p>
        </div>
    )
}

export function StatsTab({ langId }: Readonly<{ langId: string }>) {
    const history = getHistory(langId, 14)
    const total = getTotalReviews(langId)
    const maxReviewed = Math.max(...history.map(d => d.reviewed), 1)
    const allReviewed = history.reduce((s, d) => s + d.reviewed, 0)
    const allCorrect = history.reduce((s, d) => s + d.correct, 0)
    const avgAcc = allReviewed ? Math.round(allCorrect / allReviewed * 100) : 0

    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3">
                <StatChip value={allReviewed} label="reviews (14d)" icon="🃏" />
                <StatChip value={`${avgAcc}%`} label="accuracy (14d)" icon="🎯" />
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Last 14 days</p>
                <div className="flex items-end gap-1" style={{ height: 80 }}>
                    {history.map(day => (
                        <div key={day.date} className="flex-1 flex items-end">
                            <div
                                className="w-full rounded-t bg-indigo-400 transition-all"
                                style={{
                                    height: `${(day.reviewed / maxReviewed) * 100}%`,
                                    minHeight: day.reviewed ? 2 : 0,
                                }}
                                title={`${day.date}: ${day.reviewed} reviews`}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex gap-1 mt-1">
                    {history.map(day => {
                        const d = new Date(day.date + "T00:00:00")
                        return (
                            <div key={day.date} className="flex-1 text-center">
                                {d.getDay() === 1 && (
                                    <span className="text-xs text-gray-300">M</span>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {total === 0 && (
                <p className="text-center text-gray-400 text-sm py-4">
                    Complete a flashcard session to see your stats.
                </p>
            )}
        </div>
    )
}
