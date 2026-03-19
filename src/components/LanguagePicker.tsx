// components/LanguagePicker.tsx — NavBar flag button that opens a horizontal language-switcher popover
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LANGUAGES } from "../data/languages"
import { Flag } from "./Flag"
import { getModule } from "../data/modules"
import {
    getStartedLanguages,
    getCurrentLevel,
    getCompletedLessons,
    getSelectedLanguage,
    setSelectedLanguage,
} from "../store/progress"

function overallPct(langId: string): number {
    const mod = getModule(langId)
    const level = getCurrentLevel(langId)
    if (!mod) return 0
    const items = [
        ...mod.grammar.filter(g => g.level === level),
        ...mod.vocab.filter(v => v.level === level),
        ...mod.verbs.filter(v => v.level === level),
        ...(mod.readingPassages ?? []).filter(r => r.level === level),
        ...(mod.listeningExercises ?? []).filter(l => l.level === level),
    ]
    if (!items.length) return 0
    const done = getCompletedLessons(langId)
    return Math.round(items.filter(i => done.includes(i.id)).length / items.length * 100)
}

export function LanguagePicker() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const started = getStartedLanguages()
    const selectedId = getSelectedLanguage() ?? started[0] ?? ""
    const current = LANGUAGES.find(l => l.id === selectedId)

    // Close on outside click
    useEffect(() => {
        if (!open) return
        function handle(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
        }
        document.addEventListener("mousedown", handle)
        return () => document.removeEventListener("mousedown", handle)
    }, [open])

    if (started.length === 0 || !current) return null

    function switchTo(langId: string) {
        setSelectedLanguage(langId)
        setOpen(false)
        navigate(`/learn/${langId}`)
    }

    function addCourse() {
        setOpen(false)
        navigate("/languages")
    }

    return (
        <div ref={ref} className="relative shrink-0">
            {/* Trigger button */}
            <button
                onClick={() => setOpen(v => !v)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium
                            transition-colors ${open
                        ? "bg-indigo-100 text-indigo-700"
                        : "hover:bg-gray-100 text-gray-700"}`}
                aria-label="Switch language"
            >
                <Flag langId={selectedId} size="sm" />
                <span className="hidden sm:inline">{current.name}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="fixed sm:absolute top-14 sm:top-full left-2 right-2 sm:left-auto sm:right-0
                                sm:mt-1 z-50 bg-white border border-gray-200
                                rounded-2xl shadow-lg p-3 sm:w-max sm:max-w-[90vw]">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-1 mb-2">
                        Your courses
                    </p>

                    {/* Horizontal scroll row */}
                    <div className="flex gap-2 overflow-x-auto pb-1 pr-1">
                        {started.map(langId => {
                            const lang = LANGUAGES.find(l => l.id === langId)
                            const level = getCurrentLevel(langId)
                            const pct = overallPct(langId)
                            const active = langId === selectedId
                            if (!lang) return null
                            return (
                                <button
                                    key={langId}
                                    onClick={() => switchTo(langId)}
                                    className={`shrink-0 w-28 flex flex-col items-center gap-1.5 p-3
                                                rounded-xl border transition-all text-center
                                                ${active
                                            ? "border-indigo-400 bg-indigo-50 ring-2 ring-indigo-200"
                                            : "border-gray-200 hover:border-indigo-300 hover:shadow-sm"}`}
                                >
                                    <Flag langId={langId} size="lg" />
                                    <p className="text-xs font-semibold text-gray-900 leading-tight">{lang.name}</p>
                                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full
                                                     ${active
                                            ? "bg-indigo-200 text-indigo-800"
                                            : "bg-gray-100 text-gray-600"}`}>
                                        {level}
                                    </span>
                                    {/* Mini progress bar */}
                                    <div className="w-full bg-gray-100 rounded-full h-1 mt-0.5">
                                        <div
                                            className="bg-indigo-400 h-1 rounded-full transition-all"
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400">{pct}%</p>
                                    {active && (
                                        <span className="text-xs text-indigo-600 font-semibold">✓ Active</span>
                                    )}
                                </button>
                            )
                        })}

                        {/* Add course card */}
                        <button
                            onClick={addCourse}
                            className="shrink-0 w-28 flex flex-col items-center justify-center gap-2 p-3
                                       rounded-xl border border-dashed border-gray-300
                                       hover:border-indigo-400 hover:bg-indigo-50 transition-all text-center"
                        >
                            <span className="text-2xl text-gray-400">＋</span>
                            <p className="text-xs font-medium text-gray-500">Add a course</p>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
