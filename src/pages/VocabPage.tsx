// pages/VocabPage.tsx — Vocabulary browser with mark-as-learned toggling and todo/done filter
import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getVocabForLevel } from "../data/repo"
import { useProgress } from "../context/ProgressContext"
import { NavBar } from "../components/NavBar"
import { MarkCompleteButton } from "../components/MarkCompleteButton"
import { LevelBadge } from "../components/LevelBadge"
import { SpeakButton } from "../components/SpeakButton"
import { VocabItem } from "../types"
import { getUI } from "../i18n"

function VocabCard({
    item,
    done,
    langId,
    onComplete,
}: {
    item: VocabItem
    done: boolean
    langId: string
    onComplete: () => void
}) {
    const [open, setOpen] = useState(false)

    return (
        <div
            className={`bg-white dark:bg-gray-800 border rounded-2xl overflow-hidden transition-all cursor-pointer
                ${done ? "border-green-300" : "border-gray-200 dark:border-gray-700 hover:border-indigo-300"}`}
            onClick={() => setOpen(o => !o)}
        >
            <div className="px-4 py-3 flex items-center gap-3">
                <span className={`text-base ${done ? "text-green-500" : "text-gray-300 dark:text-gray-600"}`} aria-hidden="true">
                    {done ? "✓" : "○"}
                </span>
                <span className="sr-only">{done ? "Learned" : "Not yet learned"}</span>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">{item.word}</span>
                        <SpeakButton text={item.word} langId={langId} />
                    </div>
                    {item.romanized && (
                        <span className="text-xs text-indigo-500">{item.romanized}</span>
                    )}
                </div>
                <div className="shrink-0 flex flex-col items-end gap-0.5">
                    <span className="text-sm text-gray-500 dark:text-gray-400 text-right">{item.translation}</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full px-2 py-0.5">
                        {item.category}
                    </span>
                </div>
            </div>

            {open && (
                <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-700 pt-3" onClick={e => e.stopPropagation()}>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 mb-3 relative">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.example.native}</p>
                        {item.example.romanized && (
                            <p className="text-xs text-indigo-500 mt-0.5">{item.example.romanized}</p>
                        )}
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.example.translation}</p>
                        <SpeakButton text={item.example.native} langId={langId} className="absolute top-1.5 right-1.5" />
                    </div>
                    <MarkCompleteButton done={done} onClick={onComplete} label="Mark as learned" />
                </div>
            )}
        </div>
    )
}

export function VocabPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const { level: getLevel, completed: getCompleted, markLessonComplete } = useProgress()
    const level = getLevel(langId)
    const ui = getUI(langId, level)
    const completed = getCompleted(langId)
    const [filter, setFilter] = useState<"all" | "todo" | "done">("all")

    if (!language) return null

    const items = getVocabForLevel(langId, level)
    const filtered = items.filter(item => {
        if (filter === "done") return completed.includes(item.id)
        if (filter === "todo") return !completed.includes(item.id)
        return true
    })
    const doneCount = items.filter(i => completed.includes(i.id)).length
    const coming = items.length === 0

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={ui.sectionVocab} level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-3xl mx-auto px-4 py-6">
                <div className="flex items-center gap-2 mb-4">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{ui.sectionVocab}</h1>
                    <LevelBadge level={level} />
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                        {doneCount} / {items.length} learned
                    </span>
                </div>

                {!coming && (
                    <div className="flex gap-2 mb-5">
                        {(["all", "todo", "done"] as const).map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors capitalize
                                    ${filter === f
                                        ? "bg-indigo-600 text-white"
                                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400"}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                )}

                {coming ? (
                    <div className="flex flex-col items-center text-center py-16 text-gray-400 dark:text-gray-500 gap-3">
                        <p className="text-4xl">🚧</p>
                        <p className="font-medium text-gray-600 dark:text-gray-400">{level} vocabulary is coming soon!</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Keep reviewing with Flashcards or explore Reading passages while you wait.
                        </p>
                        <div className="flex flex-col gap-2 w-full max-w-xs mt-2">
                            <Link
                                to={`/learn/${langId}/flashcards`}
                                className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
                            >
                                Go to Flashcards
                            </Link>
                            <Link
                                to={`/learn/${langId}`}
                                className="block w-full text-center px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 text-sm font-medium"
                            >
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                ) : filtered.length === 0 ? (
                    <p className="text-center text-gray-400 dark:text-gray-500 py-12">No words match this filter.</p>
                ) : (
                    <div className="flex flex-col gap-2">
                        {filtered.map(item => (
                            <VocabCard
                                key={item.id}
                                item={item}
                                done={completed.includes(item.id)}
                                langId={langId}
                                onComplete={() => markLessonComplete(langId, item.id, "vocab")}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
