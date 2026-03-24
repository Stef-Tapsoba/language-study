// components/NavBar.tsx — Sticky top navigation bar with back button, level badge, streak chip, and profile link
import { useState, useEffect, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import { LevelBadge } from "./LevelBadge"
import { LanguagePicker } from "./LanguagePicker"
import { CEFRLevel } from "../types"
import { useGlobalStreak } from "../hooks/useGlobalStreak"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface NavBarProps {
    title?: string
    level?: CEFRLevel
    /**
     * If provided, renders a back button.
     * Prefer explicit route strings (e.g. "/home", `/learn/${langId}`) over the
     * special value "back" — explicit paths work correctly regardless of how the
     * user arrived at the page (direct URL, deep link, etc.).
     * Use "back" only when browser-history semantics are intentional (e.g. ProfilePage).
     */
    backTo?: string
    /**
     * Used only when backTo is "back". If the browser history stack is empty or
     * shallow, navigate here instead of calling navigate(-1).
     */
    fallbackRoute?: string
    /** If provided, overrides backTo — calls this function instead of navigating. */
    onBack?: () => void
    /** Renders the language switcher pill between title and profile icon. */
    showLanguagePicker?: boolean
    /** Optional breadcrumb text rendered below the title bar. */
    breadcrumb?: string
}

export function NavBar({ title = "Language Study", level, backTo, fallbackRoute, onBack, showLanguagePicker, breadcrumb }: Readonly<NavBarProps>) {
    const navigate = useNavigate()
    // Reactive: re-reads from the Zustand store so streak updates live during a session.
    const streak = useGlobalStreak()

    // Issue 22: animate streak badge when it increases
    const [streakBumped, setStreakBumped] = useState(false)
    const prevStreakRef = useRef(streak)

    useEffect(() => {
        if (streak > prevStreakRef.current) {
            setStreakBumped(true)
            const t = setTimeout(() => setStreakBumped(false), 1000)
            prevStreakRef.current = streak
            return () => clearTimeout(t)
        }
        prevStreakRef.current = streak
    }, [streak])

    function handleBack() {
        if (onBack) { onBack(); return }
        if (backTo === "back") {
            // Safety net: if there is no history to go back to (e.g. direct URL open),
            // fall back to the explicit route rather than leaving the app.
            if (globalThis.history.length > 1) navigate(-1)
            else if (fallbackRoute) navigate(fallbackRoute)
        } else if (backTo) {
            navigate(backTo)
        }
    }

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-3xl mx-auto px-4 md:px-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] h-14 flex items-center gap-2">
                {backTo && (
                    <button
                        onClick={handleBack}
                        className="p-2 -ml-2 mr-0 text-gray-500 hover:text-gray-800 rounded"
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
                    <span className={`hidden sm:flex text-xs font-semibold text-orange-500 bg-orange-50 rounded-full px-2 py-0.5 shrink-0 ${streakBumped ? "animate-bounce" : ""}`}>
                        🔥 {streak}d
                    </span>
                )}

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            to="/profile"
                            className="p-2 text-gray-400 hover:text-gray-700 shrink-0"
                            aria-label="View profile"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z" />
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>View profile</TooltipContent>
                </Tooltip>

            </div>
            {breadcrumb && (
                <p className="text-xs text-gray-400 px-4 pb-1 truncate">{breadcrumb}</p>
            )}
        </nav>
    )
}
