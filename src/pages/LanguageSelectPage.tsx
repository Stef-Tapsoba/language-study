// pages/LanguageSelectPage.tsx
import { useNavigate } from "react-router-dom"
import { LANGUAGES } from "../data/languages"
import { setSelectedLanguage } from "../store/progress"
import { useAuth } from "../auth/AuthContext"

export function LanguageSelectPage() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    function pick(langId: string) {
        setSelectedLanguage(langId)
        navigate(`/learn/${langId}`)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Language Study</span>
                    <button onClick={logout} className="text-sm text-gray-500 hover:text-gray-800">
                        Sign out
                    </button>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a language</h2>
                <p className="text-gray-500 mb-8">Select a language to start or continue learning.</p>

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