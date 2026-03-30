// pages/LandingPage.tsx — Public marketing/landing page; authenticated users are redirected to /home
import { Link, Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import { Flag } from "../components/Flag"

const HOW_IT_WORKS = [
    {
        step: "1",
        icon: "🌍",
        title: "Pick a language",
        body: "Choose from Spanish, French, Italian, Japanese, or Korean and take a short placement test to find your starting level.",
    },
    {
        step: "2",
        icon: "📖",
        title: "Learn at your level",
        body: "Work through grammar lessons, vocabulary cards, and verb conjugation tables — all filtered to your current CEFR level.",
    },
    {
        step: "3",
        icon: "🎯",
        title: "Test yourself to advance",
        body: "When you feel ready, take the level test. Pass 80% and unlock the next level. No time pressure — come back whenever you're ready.",
    },
]

const LANGUAGES = [
    { id: "es", name: "Spanish" },
    { id: "fr", name: "French" },
    { id: "it", name: "Italian" },
    { id: "ja", name: "Japanese" },
    { id: "ko", name: "Korean" },
]

export function LandingPage() {
    const { session, loading } = useAuth()

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        </div>
    )
    if (session) return <Navigate to="/home" replace />

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* ── Nav ── */}
            <header className="border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
                <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
                    <span className="font-bold text-gray-900 dark:text-gray-100 text-lg">Language Study</span>
                    <div className="flex items-center gap-3">
                        <Link to="/login"
                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                            Sign in
                        </Link>
                        <Link to="/register"
                            className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                                       px-4 py-1.5 rounded-lg transition-colors">
                            Get started
                        </Link>
                    </div>
                </div>
            </header>

            {/* ── Hero ── */}
            <section className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
                <div className="flex justify-center gap-3 mb-8">
                    {LANGUAGES.map(l => (
                        <Flag key={l.id} langId={l.id} size="lg" />
                    ))}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                    Learn a language,<br className="hidden sm:block" /> your way.
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                    Grammar, vocabulary, and practice — structured by CEFR level, at your own pace.
                    No time pressure, learn at your own pace.
                </p>
                <Link to="/register"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                               px-8 py-3 rounded-xl text-base transition-colors">
                    Start for free →
                </Link>
                <p className="mt-3 text-sm text-gray-400 dark:text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-500 hover:underline">Sign in</Link>
                </p>
            </section>

            {/* ── How it works ── */}
            <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">How it works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {HOW_IT_WORKS.map(item => (
                            <div key={item.step} className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center
                                                justify-center text-2xl">
                                    {item.icon}
                                </div>
                                <div className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">
                                    Step {item.step}
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Levels strip ── */}
            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Five CEFR levels</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                    From absolute beginner to advanced. Take a placement test or choose your level manually.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                    {[
                        { l: "A1", label: "Beginner",          cls: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300" },
                        { l: "A2", label: "Elementary",        cls: "bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300" },
                        { l: "B1", label: "Intermediate",      cls: "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300" },
                        { l: "B2", label: "Upper Intermediate", cls: "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300" },
                        { l: "C1", label: "Advanced",          cls: "bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300" },
                    ].map(({ l, label, cls }) => (
                        <div key={l} className={`px-4 py-2 rounded-xl text-sm font-semibold ${cls}`}>
                            {l} · {label}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="bg-indigo-600 py-16 text-center px-4">
                <h2 className="text-3xl font-bold text-white mb-3">Ready to start?</h2>
                <p className="text-indigo-200 mb-8">It takes under a minute to create an account.</p>
                <Link to="/register"
                    className="inline-block bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl
                               hover:bg-indigo-50 transition-colors">
                    Create free account
                </Link>
            </section>

            <footer className="text-center py-6 text-xs text-gray-400 dark:text-gray-500">
                Language Study — prototype
            </footer>
        </div>
    )
}
