// components/layout/AppLayout.tsx
//
// Authenticated app shell — sidebar on desktop/tablet, bottom nav on mobile.
//
// Wraps all main navigation pages (Home, Dashboard, Profile, Languages).
// Full-screen overlay pages (exercises, lesson detail, placement test) render
// outside this layout with their own NavBar.

import { useState, useCallback } from "react"
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom"
import {
    Home, BookOpen, Zap, RotateCcw, User,
    ChevronLeft, ChevronRight, Globe, Flame,
    Sun, Moon,
} from "lucide-react"
import { useProgress } from "../../context/ProgressContext"
import { useGlobalStreak } from "../../hooks/useGlobalStreak"
import { useDarkMode } from "../../hooks/useDarkMode"
import { getLanguage } from "../../data/languages"
import { Flag } from "../Flag"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

const SIDEBAR_KEY = "ls:sidebar-collapsed"

function readCollapsed(): boolean {
    return localStorage.getItem(SIDEBAR_KEY) === "true"
}

// ── Nav item definitions ──────────────────────────────────────────────────────

interface NavItem {
    id: string
    label: string
    icon: React.ElementType
    href: (langId: string | null) => string
    /** Returns true when the current pathname matches this item */
    isActive: (pathname: string) => boolean
}

const NAV_ITEMS: NavItem[] = [
    {
        id: "home",
        label: "Home",
        icon: Home,
        href: () => "/home",
        isActive: (p) => p === "/home",
    },
    {
        id: "study",
        label: "Study",
        icon: BookOpen,
        href: (l) => l ? `/learn/${l}` : "/home",
        isActive: (p) => /^\/learn\/[^/]+$/.test(p),
    },
    {
        id: "practice",
        label: "Practice",
        icon: Zap,
        href: (l) => l ? `/learn/${l}?tab=practice` : "/home",
        isActive: (p) => {
            const [path, search] = p.split("?")
            return /^\/learn\/[^/]+$/.test(path) && new URLSearchParams(search).get("tab") === "practice"
        },
    },
    {
        id: "review",
        label: "Review",
        icon: RotateCcw,
        href: (l) => l ? `/learn/${l}/review` : "/home",
        isActive: (p) => p.endsWith("/review"),
    },
    {
        id: "profile",
        label: "Profile",
        icon: User,
        href: () => "/profile",
        isActive: (p) => p === "/profile",
    },
]

// ── Main layout ───────────────────────────────────────────────────────────────

export function AppLayout() {
    const [collapsed, setCollapsed] = useState(readCollapsed)
    const { selectedLanguage, level: getLevel } = useProgress()
    const streak = useGlobalStreak()
    const [dark, toggleDark] = useDarkMode()
    const location = useLocation()
    const navigate = useNavigate()

    const currentLang = selectedLanguage ? getLanguage(selectedLanguage) : null
    const currentLevel = getLevel(selectedLanguage ?? "")

    const toggleCollapsed = useCallback(() => {
        setCollapsed(c => {
            const next = !c
            localStorage.setItem(SIDEBAR_KEY, String(next))
            return next
        })
    }, [])

    return (
        <div className="flex h-screen overflow-hidden bg-surface-app">

            {/* ── Sidebar — desktop/tablet ──────────────────────────────────── */}
            <aside
                className={`
                    hidden lg:flex flex-col shrink-0 h-full
                    border-r border-border-subtle bg-surface-card
                    transition-[width] duration-200 ease-in-out overflow-hidden
                    ${collapsed ? "w-16" : "w-56"}
                `}
            >
                {/* Logo row */}
                <div className={`flex items-center h-14 px-4 border-b border-border-subtle shrink-0 ${collapsed ? "justify-center" : "justify-between"}`}>
                    {!collapsed && (
                        <span className="text-sm font-semibold text-text-pri tracking-tight">language·study</span>
                    )}
                    <button
                        onClick={toggleCollapsed}
                        className="w-7 h-7 rounded-md flex items-center justify-center text-text-sec hover:bg-surface-inset transition-colors"
                        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                    </button>
                </div>

                {/* Language picker */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => navigate("/languages")}
                            className={`flex items-center gap-3 mx-2 mt-3 mb-1 px-2 py-2 rounded-lg hover:bg-surface-inset transition-colors ${collapsed ? "justify-center" : ""}`}
                            aria-label={collapsed ? (currentLang?.name ?? "Select language") : undefined}
                        >
                            {currentLang
                                ? <Flag langId={currentLang.id} size="sm" className="shrink-0" />
                                : <Globe size={16} className="text-text-sec shrink-0" />
                            }
                            {!collapsed && (
                                <div className="text-left min-w-0">
                                    <p className="text-xs font-medium text-text-pri truncate leading-tight">
                                        {currentLang?.name ?? "Select language"}
                                    </p>
                                    {currentLang && (
                                        <p className="text-[10px] text-text-sec leading-tight">{currentLevel}</p>
                                    )}
                                </div>
                            )}
                        </button>
                    </TooltipTrigger>
                    {collapsed && (
                        <TooltipContent side="right">
                            {currentLang ? `${currentLang.name} · ${currentLevel}` : "Select language"}
                        </TooltipContent>
                    )}
                </Tooltip>

                {/* Divider */}
                <div className="mx-3 border-t border-border-subtle my-1" />

                {/* Nav items */}
                <nav className="flex-1 px-2 py-1 flex flex-col gap-0.5 overflow-y-auto">
                    {NAV_ITEMS.map(item => {
                        const active = item.isActive(location.pathname + location.search)
                        const Icon = item.icon
                        const link = (
                            <Link
                                to={item.href(selectedLanguage)}
                                className={`
                                    flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium
                                    transition-colors
                                    ${collapsed ? "justify-center" : ""}
                                    ${active
                                        ? "bg-grammar-surface text-grammar"
                                        : "text-text-sec hover:bg-surface-inset hover:text-text-pri"
                                    }
                                `}
                                aria-current={active ? "page" : undefined}
                                aria-label={collapsed ? item.label : undefined}
                            >
                                <Icon size={16} className="shrink-0" />
                                {!collapsed && <span>{item.label}</span>}
                            </Link>
                        )
                        return collapsed ? (
                            <Tooltip key={item.id}>
                                <TooltipTrigger asChild>{link}</TooltipTrigger>
                                <TooltipContent side="right">{item.label}</TooltipContent>
                            </Tooltip>
                        ) : (
                            <span key={item.id}>{link}</span>
                        )
                    })}
                </nav>

                {/* Bottom section: streak + dark mode */}
                <div className={`px-3 py-3 border-t border-border-subtle flex items-center ${collapsed ? "justify-center flex-col gap-2" : "justify-between"}`}>
                    {streak > 0 && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className={`flex items-center gap-1.5 ${collapsed ? "" : "flex-1"}`}>
                                    <Flame size={14} className="text-streak shrink-0" />
                                    {!collapsed && (
                                        <span className="text-xs font-medium text-streak">{streak} day{streak !== 1 ? "s" : ""}</span>
                                    )}
                                </div>
                            </TooltipTrigger>
                            {collapsed && (
                                <TooltipContent side="right">{streak} day streak</TooltipContent>
                            )}
                        </Tooltip>
                    )}
                    <button
                        onClick={toggleDark}
                        className="w-7 h-7 rounded-md flex items-center justify-center text-text-sec hover:bg-surface-inset transition-colors"
                        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {dark ? <Sun size={14} /> : <Moon size={14} />}
                    </button>
                </div>
            </aside>

            {/* ── Main content area ─────────────────────────────────────────── */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                {/* Mobile top bar */}
                <header className="lg:hidden flex items-center justify-between h-12 px-4 bg-surface-card border-b border-border-subtle shrink-0">
                    <button
                        onClick={() => navigate("/languages")}
                        className="flex items-center gap-2"
                        aria-label="Switch language"
                    >
                        {currentLang
                            ? <Flag langId={currentLang.id} size="sm" />
                            : <Globe size={16} className="text-text-sec" />
                        }
                        <div className="text-left">
                            <p className="text-xs font-medium text-text-pri leading-tight">{currentLang?.name ?? "Select"}</p>
                            {currentLang && (
                                <p className="text-[10px] text-text-sec leading-tight">{currentLevel}</p>
                            )}
                        </div>
                    </button>

                    <div className="flex items-center gap-3">
                        {streak > 0 && (
                            <div className="flex items-center gap-1">
                                <Flame size={13} className="text-streak" />
                                <span className="text-xs font-medium text-streak">{streak}</span>
                            </div>
                        )}
                        <button
                            onClick={toggleDark}
                            className="w-7 h-7 rounded-md flex items-center justify-center text-text-sec hover:bg-surface-inset transition-colors"
                            aria-label={dark ? "Light mode" : "Dark mode"}
                        >
                            {dark ? <Sun size={14} /> : <Moon size={14} />}
                        </button>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>

                {/* Mobile bottom nav */}
                <nav className="lg:hidden bg-surface-card border-t border-border-subtle pb-safe shrink-0">
                    <div className="flex">
                        {NAV_ITEMS.map(item => {
                            const active = item.isActive(location.pathname + location.search)
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.id}
                                    to={item.href(selectedLanguage)}
                                    className={`flex-1 flex flex-col items-center gap-1 pt-2 pb-1 transition-colors ${active ? "text-grammar" : "text-text-ter"}`}
                                    aria-current={active ? "page" : undefined}
                                >
                                    <Icon size={18} />
                                    <span className="text-[9px] font-medium tracking-wide uppercase leading-none">{item.label}</span>
                                    {active && <div className="w-1 h-1 rounded-full bg-grammar" />}
                                </Link>
                            )
                        })}
                    </div>
                </nav>

            </div>
        </div>
    )
}
