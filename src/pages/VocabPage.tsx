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
import { Button } from "../components/ui/button"
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
            className={`bg-surface-card border rounded-2xl overflow-hidden transition-all cursor-pointer
                ${done ? "border-grammar-border" : "border-border-default hover:border-grammar"}`}
            onClick={() => setOpen(o => !o)}
        >
            <div className="px-4 py-3 flex items-center gap-3">
                <span className={`text-base ${done ? "text-grammar" : "text-text-ter"}`} aria-hidden="true">
                    {done ? "✓" : "○"}
                </span>
                <span className="sr-only">{done ? "Learned" : "Not yet learned"}</span>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-text-pri whitespace-nowrap">{item.word}</span>
                        <SpeakButton text={item.word} langId={langId} />
                    </div>
                    {item.romanized && (
                        <span className="text-xs text-indigo-500">{item.romanized}</span>
                    )}
                </div>
                <div className="shrink-0 flex flex-col items-end gap-0.5">
                    <span className="text-sm text-text-sec text-right">{item.translation}</span>
                    <span className="text-xs bg-surface-elevated text-text-sec rounded-full px-2 py-0.5">
                        {item.category}
                    </span>
                </div>
            </div>

            {open && (
                <div className="px-4 pb-4 border-t border-border-subtle pt-3" onClick={e => e.stopPropagation()}>
                    <div className="bg-surface-elevated rounded-xl p-3 mb-3 relative">
                        <p className="text-sm font-medium text-text-pri">{item.example.native}</p>
                        {item.example.romanized && (
                            <p className="text-xs text-indigo-500 mt-0.5">{item.example.romanized}</p>
                        )}
                        <p className="text-xs text-text-sec mt-1">{item.example.translation}</p>
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
        <div className="min-h-screen bg-surface-app">
            <NavBar title={ui.sectionVocab} level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-3xl mx-auto px-4 py-6">
                <div className="flex items-center gap-2 mb-4">
                    <h1 className="text-xl font-bold text-text-pri">{ui.sectionVocab}</h1>
                    <LevelBadge level={level} />
                    <span className="text-sm text-text-sec ml-1">
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
                                        ? "bg-grammar-surface border border-grammar text-grammar"
                                        : "bg-surface-card border border-border-default text-text-sec hover:border-grammar"}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                )}

                {coming ? (
                    <div className="flex flex-col items-center text-center py-16 text-text-ter gap-3">
                        <p className="text-4xl">🚧</p>
                        <p className="font-medium text-text-sec">{level} vocabulary is coming soon!</p>
                        <p className="text-sm text-text-sec">
                            Keep reviewing with Flashcards or explore Reading passages while you wait.
                        </p>
                        <div className="flex flex-col gap-2 w-full max-w-xs mt-2">
                            <Button asChild className="w-full rounded-lg">
                                <Link to={`/learn/${langId}/flashcards`}>Go to Flashcards</Link>
                            </Button>
                            <Link
                                to={`/learn/${langId}`}
                                className="block w-full text-center px-4 py-2 border border-border-default text-text-sec rounded-lg hover:bg-surface-elevated text-sm font-medium"
                            >
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                ) : filtered.length === 0 ? (
                    <p className="text-center text-text-ter py-12">No words match this filter.</p>
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
