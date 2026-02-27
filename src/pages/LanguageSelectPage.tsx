// pages/LanguageSelectPage.tsx
import { useNavigate } from "react-router-dom"
import { LANGUAGES } from "../data/languages"
import { setSelectedLanguage, getSelectedLanguage } from "../store/progress"
import { NavBar } from "../components/NavBar"

export function LanguageSelectPage() {
    const navigate = useNavigate()
    const existingLang = getSelectedLanguage()
    const isReturning = Boolean(existingLang)

    function pick(langId: string) {
        setSelectedLanguage(langId)
        navigate(`/learn/${langId}`)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar
                title={isReturning ? "Add a language" : "Language Study"}
                backTo={isReturning ? "back" : undefined}
            />

            <main className="max-w-3xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {isReturning ? "Add a language" : "Choose a language to learn"}
                </h2>
                <p className="text-gray-500 mb-8">
                    {isReturning
                        ? "Pick another language to start learning alongside your current ones."
                        : "Select a language to get started."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {LANGUAGES.map(lang => (
                        <button
                            key={lang.id}
                            onClick={() => pick(lang.id)}
                            className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4
                                       hover:border-indigo-400 hover:shadow-md transition-all text-left"
                        >
                            <span className="text-4xl">{lang.flag}</span>
                            <div>
                                <p className="font-semibold text-gray-900 text-lg">{lang.name}</p>
                                <p className="text-sm text-gray-500">{lang.nativeName}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </main>
        </div>
    )
}
