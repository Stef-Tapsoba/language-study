// components/NavBar.tsx — Sticky top navigation bar with back button, level badge, streak chip, and profile link
import React, { useState, useEffect, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import { LevelBadge } from "./LevelBadge"
import { LanguagePicker } from "./LanguagePicker"
import { CEFRLevel } from "../types"
import { useGlobalStreak } from "../hooks/useGlobalStreak"
import { useDarkMode } from "../hooks/useDarkMode"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb"

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
    const [dark, toggleDark] = useDarkMode()
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
        <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
            <div className="max-w-3xl mx-auto px-4 md:px-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] h-14 flex items-center gap-2">
                {backTo && (
                    <button
                        onClick={handleBack}
                        className="p-2 -ml-2 mr-0 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 rounded"
                        aria-label="Go back"
                        data-testid="nav-back"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                <span className="font-semibold text-gray-900 dark:text-gray-100 flex-1 truncate">{title}</span>

                {showLanguagePicker && <LanguagePicker />}

                {level && <LevelBadge level={level} />}

                {streak > 0 && (
                    <span className={`hidden sm:flex text-xs font-semibold text-orange-500 bg-orange-50 rounded-full px-2 py-0.5 shrink-0 ${streakBumped ? "animate-bounce" : ""}`}>
                        🔥 {streak}d
                    </span>
                )}

                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={toggleDark}
                            className="p-2 text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 shrink-0"
                            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {dark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>{dark ? "Light mode" : "Dark mode"}</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            to="/profile"
                            className="p-2 text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 shrink-0"
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
                <div className="max-w-3xl mx-auto px-4 md:px-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-1.5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumb.split(" › ").map((segment, i, arr) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <BreadcrumbSeparator />}
                                    <BreadcrumbItem>
                                        {i === arr.length - 1
                                            ? <BreadcrumbPage>{segment}</BreadcrumbPage>
                                            : <span>{segment}</span>
                                        }
                                    </BreadcrumbItem>
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            )}
        </nav>
    )
}
