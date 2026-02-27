// pages/DashboardPage.tsx
import { useParams, useNavigate, Link } from "react-router-dom"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel, getCompletedLessons } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { ProgressBar } from "../components/ProgressBar"
import { CEFR_LEVELS } from "../types"

interface SectionCardProps {
    emoji: string
    title: string
    description: string
    to: string
    progress?: number
}

function SectionCard({ emoji, title, description, to, progress }: SectionCardProps) {
    return (
        <Link
            to={to}
            className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-400
                       hover:shadow-md transition-all flex flex-col gap-2"
        >
            <span className="text-3xl">{emoji}</span>
            <p className="font-semibold text-gray-900">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
            {progress !== undefined && (
                <ProgressBar value={progress} className="mt-1" />
            )}
        </Link>
    )
}

export function DashboardPage() {
    const { langId = "" } = useParams()
    const navigate = useNavigate()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const completed = getCompletedLessons(langId)

    if (!language || !mod) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Language not found.</p>
            </div>
        )
    }

    const grammarItems = mod.grammar.filter(g => g.level === level)
    const vocabItems = mod.vocab.filter(v => v.level === level)
    const verbItems = mod.verbs.filter(v => v.level === level)

    const grammarDone = grammarItems.filter(g => completed.includes(g.id)).length
    const vocabDone = vocabItems.filter(v => completed.includes(v.id)).length
    const verbDone = verbItems.filter(v => completed.includes(v.id)).length

    const grammarPct = grammarItems.length ? (grammarDone / grammarItems.length) * 100 : 0
    const vocabPct = vocabItems.length ? (vocabDone / vocabItems.length) * 100 : 0
    const verbPct = verbItems.length ? (verbDone / verbItems.length) * 100 : 0

    const levelIndex = CEFR_LEVELS.indexOf(level)
    const canAdvance = levelIndex < CEFR_LEVELS.length - 1

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={`${language.flag} ${language.name}`} level={level} backTo="/languages" />

            <main className="max-w-3xl mx-auto px-4 py-8">
                {/* Level header */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6 flex items-center gap-4">
                    <div className="text-4xl">{language.flag}</div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Current level</p>
                        <div className="flex items-center gap-2">
                            <LevelBadge level={level} />
                            <span className="text-gray-700 text-sm">
                                {level === "A1" && "Beginner"}
                                {level === "A2" && "Elementary"}
                                {level === "B1" && "Intermediate"}
                                {level === "B2" && "Upper Intermediate"}
                                {level === "C1" && "Advanced"}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate(`/learn/${langId}/placement`)}
                        className="text-xs text-indigo-600 hover:underline shrink-0"
                    >
                        Change level
                    </button>
                </div>

                {/* Content sections */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Study</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <SectionCard
                        emoji="📖"
                        title="Grammar"
                        description={`${grammarItems.length} lessons at ${level}`}
                        to={`/learn/${langId}/grammar`}
                        progress={grammarPct}
                    />
                    <SectionCard
                        emoji="📝"
                        title="Vocabulary"
                        description={`${vocabItems.length} words at ${level}`}
                        to={`/learn/${langId}/vocab`}
                        progress={vocabPct}
                    />
                    <SectionCard
                        emoji="🔤"
                        title="Verbs"
                        description={`${verbItems.length} verbs at ${level}`}
                        to={`/learn/${langId}/verbs`}
                        progress={verbPct}
                    />
                </div>

                {/* Level test */}
                {canAdvance && (
                    <>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress</h3>
                        <div
                            className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 flex
                                       items-center justify-between gap-4 cursor-pointer hover:bg-indigo-100 transition-colors"
                            onClick={() => navigate(`/learn/${langId}/level-test`)}
                        >
                            <div>
                                <p className="font-semibold text-indigo-900">Level Test</p>
                                <p className="text-sm text-indigo-700">
                                    Pass 12/15 questions to advance to {CEFR_LEVELS[levelIndex + 1]}
                                </p>
                            </div>
                            <span className="text-2xl">🎯</span>
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}
