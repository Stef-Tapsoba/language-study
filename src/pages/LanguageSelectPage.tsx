// pages/LanguageSelectPage.tsx — Language selection screen for new users
import { useNavigate } from "react-router-dom"
import { VISIBLE_LANGUAGES } from "../data/languages"
import { useProgress } from "../hooks/useProgress"
import { loadModule } from "../data/modules"
import { NavBar } from "../components/NavBar"
import { Flag } from "../components/Flag"

export function LanguageSelectPage() {
    const navigate = useNavigate()
    const { selectedLanguage, startedLanguages, setSelectedLanguage } = useProgress()
    const existingLang = selectedLanguage
    const isReturning = Boolean(existingLang)

    function pick(langId: string) {
        setSelectedLanguage(langId)
        loadModule(langId) // pre-fetch chunk before navigation
        const alreadyStarted = startedLanguages.includes(langId)
        navigate(alreadyStarted ? `/learn/${langId}` : `/learn/${langId}/placement`)
    }

    return (
        <div className="min-h-screen bg-surface-app">
            <NavBar
                title={isReturning ? "Add a language" : "Language Study"}
                backTo={isReturning ? "back" : undefined}
            />

            <main className="max-w-3xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-text-pri mb-2">
                    {isReturning ? "Add a language" : "Choose a language to learn"}
                </h2>
                <p className="text-text-sec mb-8">
                    {isReturning
                        ? "Pick another language to start learning alongside your current ones."
                        : "Select a language to get started."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {VISIBLE_LANGUAGES.map(lang => (
                        <button
                            key={lang.id}
                            onClick={() => pick(lang.id)}
                            className="bg-surface-card border border-border-default rounded-2xl p-5 flex items-center gap-4
                                       hover:border-grammar hover:shadow-md transition-all text-left"
                        >
                            <Flag langId={lang.id} size="lg" />
                            <div>
                                <p className="font-semibold text-text-pri text-lg">{lang.name}</p>
                                <p className="text-sm text-text-sec">{lang.nativeName}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </main>
        </div>
    )
}
