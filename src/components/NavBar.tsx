// components/NavBar.tsx
import { useNavigate, Link } from "react-router-dom"
import { LevelBadge } from "./LevelBadge"
import { LanguagePicker } from "./LanguagePicker"
import { CEFRLevel } from "../types"
import { getGlobalStreak } from "../store/stats"

interface NavBarProps {
    title?: string
    level?: CEFRLevel
    /**
     * If provided, renders a back button.
     * Pass a path string to navigate to that route, or "back" to go to the previous page.
     */
    backTo?: string
    /** If provided, overrides backTo — calls this function instead of navigating. */
    onBack?: () => void
    /** Renders the language switcher pill between title and profile icon. */
    showLanguagePicker?: boolean
}

export function NavBar({ title = "Language Study", level, backTo, onBack, showLanguagePicker }: Readonly<NavBarProps>) {
    const navigate = useNavigate()
    const streak = getGlobalStreak()

    function handleBack() {
        if (onBack) { onBack(); return }
        if (backTo === "back") navigate(-1)
        else if (backTo) navigate(backTo)
    }

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-3xl mx-auto px-4 h-14 flex items-center gap-3">
                {backTo && (
                    <button
                        onClick={handleBack}
                        className="p-1 -ml-1 mr-1 text-gray-500 hover:text-gray-800 rounded"
                        aria-label="Go back"
                        data-testid="nav-back"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                <span className="font-semibold text-gray-900 flex-1 truncate">{title}</span>

                {showLanguagePicker && <LanguagePicker />}

                {level && <LevelBadge level={level} />}

                {streak > 0 && (
                    <span className="text-xs font-semibold text-orange-500 bg-orange-50 rounded-full px-2 py-0.5 shrink-0">
                        🔥 {streak}d
                    </span>
                )}

                <Link
                    to="/profile"
                    className="p-1 text-gray-400 hover:text-gray-700 shrink-0"
                    aria-label="Profile"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z" />
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>

            </div>
        </nav>
    )
}
