// pages/LandingPage.tsx
// Public marketing page. Authenticated users are redirected to /home.
import { Link, Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"

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
        body: "When you feel ready, take the level test. Pass 80% and unlock the next level. No time pressure, no streaks to maintain.",
    },
]

const LANGUAGES = [
    { flag: "🇪🇸", name: "Spanish" },
    { flag: "🇫🇷", name: "French" },
    { flag: "🇮🇹", name: "Italian" },
    { flag: "🇯🇵", name: "Japanese" },
    { flag: "🇰🇷", name: "Korean" },
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
        <div className="min-h-screen bg-white">
            {/* ── Nav ── */}
            <header className="border-b border-gray-100 sticky top-0 bg-white z-10">
                <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
                    <span className="font-bold text-gray-900 text-lg">Language Study</span>
                    <div className="flex items-center gap-3">
                        <Link to="/login"
                            className="text-sm text-gray-600 hover:text-gray-900 font-medium">
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
                <div className="flex justify-center gap-3 text-4xl mb-8">
                    {LANGUAGES.map(l => (
                        <span key={l.name} title={l.name}>{l.flag}</span>
                    ))}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Learn a language,<br className="hidden sm:block" /> your way.
                </h1>
                <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
                    Grammar, vocabulary, and practice — structured by CEFR level, at your own pace.
                    No streaks, no pressure.
                </p>
                <Link to="/register"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                               px-8 py-3 rounded-xl text-base transition-colors">
                    Start for free →
                </Link>
                <p className="mt-3 text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-500 hover:underline">Sign in</Link>
                </p>
            </section>

            {/* ── How it works ── */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">How it works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {HOW_IT_WORKS.map(item => (
                            <div key={item.step} className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center
                                                justify-center text-2xl">
                                    {item.icon}
                                </div>
                                <div className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">
                                    Step {item.step}
                                </div>
                                <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Levels strip ── */}
            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Five CEFR levels</h2>
                <p className="text-gray-500 mb-8">
                    From absolute beginner to advanced. Take a placement test or choose your level manually.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                    {[
                        { l: "A1", label: "Beginner", cls: "bg-green-100 text-green-800" },
                        { l: "A2", label: "Elementary", cls: "bg-teal-100 text-teal-800" },
                        { l: "B1", label: "Intermediate", cls: "bg-blue-100 text-blue-800" },
                        { l: "B2", label: "Upper Intermediate", cls: "bg-purple-100 text-purple-800" },
                        { l: "C1", label: "Advanced", cls: "bg-orange-100 text-orange-800" },
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

            <footer className="text-center py-6 text-xs text-gray-400">
                Language Study — prototype
            </footer>
        </div>
    )
}
