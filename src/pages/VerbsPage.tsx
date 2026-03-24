// pages/VerbsPage.tsx — Verb conjugation reference with collapsible tense tables
import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { getLanguage } from "../data/languages"
import { getModule } from "../data/modules"
import { getCurrentLevel } from "../store/progress"
import { NavBar } from "../components/NavBar"
import { LevelBadge } from "../components/LevelBadge"
import { SpeakButton } from "../components/SpeakButton"
import { Verb } from "../types"
import { getUI } from "../i18n"

function VerbCard({ verb, langId }: Readonly<{ verb: Verb; langId: string }>) {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full px-5 py-4 flex items-center gap-3 text-left"
            >
                <div className="flex-1 flex items-center gap-1.5">
                    <span className="font-semibold text-gray-900">{verb.infinitive}</span>
                    {verb.romanized && (
                        <span className="text-xs text-indigo-500">{verb.romanized}</span>
                    )}
                    <SpeakButton text={verb.infinitive} langId={langId} />
                    <span className="text-sm text-gray-500">— {verb.meaning}</span>
                </div>
                <LevelBadge level={verb.level} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${open ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="px-5 pb-5 border-t border-gray-100">
                    {verb.conjugations.map(conj => (
                        <div key={conj.tense} className="mt-4">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                                {conj.tense}
                            </p>
                            <div className="overflow-x-auto">
                            <div className="rounded-xl border border-gray-100 overflow-hidden min-w-[300px]">
                                {conj.forms.map((f, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center px-4 py-2.5 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-gray-500 w-28 shrink-0">{f.pronoun}</span>
                                        <span className="font-medium text-gray-900">{f.form}</span>
                                        {f.romanized && (
                                            <span className="ml-2 text-xs text-indigo-400">{f.romanized}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export function VerbsPage() {
    const { langId = "" } = useParams()
    const language = getLanguage(langId)
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    const ui = getUI(langId, level)

    if (!language || !mod) return null

    const verbs = mod.verbs.filter(v => v.level === level)
    const coming = verbs.length === 0

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar title={ui.sectionVerbs} level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-3xl mx-auto px-4 py-6">
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-xl font-bold text-gray-900">{ui.sectionVerbs}</h1>
                    <LevelBadge level={level} />
                    <span className="text-sm text-gray-500 ml-1">{verbs.length} verbs</span>
                </div>

                {coming ? (
                    <div className="flex flex-col items-center text-center py-16 text-gray-400 gap-3">
                        <p className="text-4xl">🚧</p>
                        <p className="font-medium text-gray-600">{level} verbs are coming soon!</p>
                        <p className="text-sm text-gray-500">
                            In the meantime, try the Verb Drill or review your vocabulary with Flashcards.
                        </p>
                        <div className="flex flex-col gap-2 w-full max-w-xs mt-2">
                            <Link
                                to={`/learn/${langId}/verb-drill`}
                                className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
                            >
                                Go to Verb Drill
                            </Link>
                            <Link
                                to={`/learn/${langId}`}
                                className="block w-full text-center px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium"
                            >
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {verbs.map(verb => (
                            <VerbCard key={verb.id} verb={verb} langId={langId} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
