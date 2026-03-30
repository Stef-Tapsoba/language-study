// pages/LanguageSelectPage.tsx — Language selection screen for new users
import { useNavigate } from "react-router-dom"
import { VISIBLE_LANGUAGES } from "../data/languages"
import { useProgress } from "../context/ProgressContext"
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar
                title={isReturning ? "Add a language" : "Language Study"}
                backTo={isReturning ? "back" : undefined}
            />

            <main className="max-w-3xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {isReturning ? "Add a language" : "Choose a language to learn"}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                    {isReturning
                        ? "Pick another language to start learning alongside your current ones."
                        : "Select a language to get started."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {VISIBLE_LANGUAGES.map(lang => (
                        <button
                            key={lang.id}
                            onClick={() => pick(lang.id)}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 flex items-center gap-4
                                       hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all text-left"
                        >
                            <Flag langId={lang.id} size="lg" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{lang.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{lang.nativeName}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </main>
        </div>
    )
}
