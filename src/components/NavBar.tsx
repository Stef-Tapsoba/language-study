// components/NavBar.tsx — Sticky top navigation bar with back button, level badge, streak chip, and profile link
import React, { useEffect, useRef, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { LevelBadge } from "./LevelBadge"
import { LanguagePicker } from "./LanguagePicker"
import { CEFRLevel } from "../types"
import { useGlobalStreak } from "../hooks/useGlobalStreak"
import { useDarkMode } from "../hooks/useDarkMode"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

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

// ── Icon helpers ──────────────────────────────────────────────────────────────

function BackIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
    )
}

function SunIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    )
}

function MoonIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    )
}

function ProfileIcon({ size = 20 }: Readonly<{ size?: number }>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z" />
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    )
}

function MenuIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}

// ── NavBar ────────────────────────────────────────────────────────────────────

export function NavBar({ title = "Language Study", level, backTo, fallbackRoute, onBack, showLanguagePicker, breadcrumb }: Readonly<NavBarProps>) {
    const navigate = useNavigate()
    const [dark, toggleDark] = useDarkMode()
    const streak = useGlobalStreak()

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
            if (globalThis.history.length > 1) navigate(-1)
            else if (fallbackRoute) navigate(fallbackRoute)
        } else if (backTo) {
            navigate(backTo)
        }
    }

    return (
        <nav className="bg-surface-card border-b border-border-subtle sticky top-0 z-10">
            <div className="max-w-3xl mx-auto px-4 md:px-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] h-14 flex items-center gap-2">

                {/* Back button */}
                {backTo && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleBack}
                        aria-label="Go back"
                        data-testid="nav-back"
                        className="-ml-2 mr-0 text-text-sec hover:text-text-pri"
                    >
                        <BackIcon />
                    </Button>
                )}

                {/* Title */}
                <span className="font-semibold text-text-pri flex-1 truncate">{title}</span>

                {showLanguagePicker && <LanguagePicker />}
                {level && <LevelBadge level={level} />}

                {/* Streak chip */}
                {streak > 0 && (
                    <span className={`flex text-xs font-semibold text-streak bg-streak-surface border border-streak-border rounded-full px-2 py-0.5 shrink-0 ${streakBumped ? "animate-bounce" : ""}`}>
                        🔥 {streak}d
                    </span>
                )}

                {/* Desktop: dark-mode toggle + profile */}
                <div className="hidden sm:flex items-center gap-0.5">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleDark}
                                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                                className="text-text-ter hover:text-text-pri"
                            >
                                {dark ? <SunIcon /> : <MoonIcon />}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>{dark ? "Light mode" : "Dark mode"}</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                                className="text-text-ter hover:text-text-pri"
                            >
                                <Link to="/profile" aria-label="View profile">
                                    <ProfileIcon />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>View profile</TooltipContent>
                    </Tooltip>
                </div>

                {/* Mobile: sheet drawer */}
                <div className="sm:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Open menu"
                                className="text-text-ter hover:text-text-pri"
                            >
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64 p-0">
                            <div className="flex flex-col py-4">
                                <button
                                    onClick={toggleDark}
                                    className="flex items-center gap-3 px-5 py-3 text-sm text-text-sec hover:bg-surface-inset transition-colors text-left"
                                >
                                    {dark ? <SunIcon /> : <MoonIcon />}
                                    {dark ? "Light mode" : "Dark mode"}
                                </button>
                                <Link
                                    to="/profile"
                                    className="flex items-center gap-3 px-5 py-3 text-sm text-text-sec hover:bg-surface-inset transition-colors"
                                >
                                    <ProfileIcon size={16} />
                                    Profile
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
            {breadcrumb && (
                <div className="max-w-3xl mx-auto px-4 md:px-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-1.5 overflow-hidden">
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
