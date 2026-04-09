// components/layout/AppLayout.tsx
//
// Authenticated app shell — sidebar on desktop/tablet, bottom nav on mobile.
//
// Wraps main navigation pages (Home, Dashboard, Profile, Languages).
// Full-screen overlay pages (exercises, lesson detail, placement test) render
// outside this layout with their own NavBar.

import { useState, useCallback } from "react"
import { Outlet, useLocation, Link } from "react-router-dom"
import {
    Home, BookOpen, Zap, RotateCcw, User,
    ChevronLeft, ChevronRight, Globe,
    Sun, Moon,
} from "lucide-react"
import { useProgress } from "../../context/ProgressContext"
import { useGlobalStreak } from "../../hooks/useGlobalStreak"
import { useDarkMode } from "../../hooks/useDarkMode"
import { getLanguage } from "../../data/languages"
import { Flag } from "../Flag"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { StreakChip } from "../StreakChip"
import { LanguagePickerDropdown } from "../LanguagePickerDropdown"

// ── Config ────────────────────────────────────────────────────────────────────

const SIDEBAR_KEY = "ls:sidebar-collapsed"

function readCollapsed(): boolean {
    return localStorage.getItem(SIDEBAR_KEY) === "true"
}

interface NavItem {
    id: string
    label: string
    icon: React.ElementType
    href: (langId: string | null) => string
    isActive: (pathname: string, search: string) => boolean
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
        isActive: (p, s) => /^\/learn\/[^/]+$/.test(p) && new URLSearchParams(s).get("tab") === "practice",
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

// ── Sub-components ────────────────────────────────────────────────────────────

interface SidebarProps {
    collapsed: boolean
    onToggle: () => void
    selectedLanguage: string | null
    currentLangName: string | null
    currentLevel: string
    streak: number
    dark: boolean
    onToggleDark: () => void
    activePath: string
    activeSearch: string
}

function SidebarContent({
    collapsed, onToggle,
    selectedLanguage, currentLangName, currentLevel,
    streak, dark, onToggleDark,
    activePath, activeSearch,
}: Readonly<SidebarProps>) {
    const langId = selectedLanguage

    return (
        <>
            {/* Logo row */}
            <div className={`flex items-center h-14 px-4 border-b border-hairline border-border-subtle shrink-0 ${collapsed ? "justify-center" : "justify-between"}`}>
                {collapsed ? null : (
                    <span className="text-sm font-semibold text-text-pri tracking-tight">language·study</span>
                )}
                <button
                    onClick={onToggle}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-text-sec hover:bg-surface-inset transition-colors"
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>
            </div>

            {/* Language picker */}
            <LanguagePickerDropdown
                side="right"
                className="mx-2 mt-3 mb-1"
                trigger={({ open, onClick }) => (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                onClick={onClick}
                                className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-surface-inset transition-colors ${collapsed ? "justify-center" : ""} ${open ? "bg-surface-inset" : ""}`}
                                aria-label={collapsed ? (currentLangName ?? "Select language") : undefined}
                                aria-expanded={open}
                            >
                                {currentLangName
                                    ? (
                                        <div className="w-8 h-8 rounded-full bg-surface-inset flex items-center justify-center shrink-0 overflow-hidden">
                                            <Flag langId={langId!} size="sm" />
                                        </div>
                                    )
                                    : <Globe size={16} className="text-text-sec shrink-0" />
                                }
                                {collapsed ? null : (
                                    <div className="text-left min-w-0">
                                        <p className="text-xs font-medium text-text-pri truncate leading-tight">
                                            {currentLangName ?? "Select language"}
                                        </p>
                                        {currentLangName && (
                                            <p className="text-[10px] text-text-sec leading-tight">{currentLevel}</p>
                                        )}
                                    </div>
                                )}
                            </button>
                        </TooltipTrigger>
                        {collapsed && (
                            <TooltipContent side="right">
                                {currentLangName ? `${currentLangName} · ${currentLevel}` : "Select language"}
                            </TooltipContent>
                        )}
                    </Tooltip>
                )}
            />

            {/* Divider */}
            <div className="mx-3 border-t border-hairline border-border-subtle my-1" />

            {/* Nav items */}
            <nav aria-label="Main navigation" className="flex-1 px-2 py-1 flex flex-col gap-0.5 overflow-y-auto">
                {NAV_ITEMS.map(item => {
                    const active = item.isActive(activePath, activeSearch)
                    const Icon = item.icon
                    const link = (
                        <Link
                            to={item.href(langId)}
                            className={[
                                "flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium transition-colors",
                                collapsed ? "justify-center" : "",
                                active
                                    ? "bg-surface-inset text-text-pri"
                                    : "text-text-sec hover:bg-surface-inset hover:text-text-pri",
                            ].join(" ")}
                            aria-current={active ? "page" : undefined}
                            aria-label={collapsed ? item.label : undefined}
                        >
                            <Icon size={16} className={`shrink-0 ${active ? "text-grammar" : ""}`} />
                            <span className={`transition-opacity duration-150 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
                                {item.label}
                            </span>
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

            {/* Bottom: streak + dark toggle */}
            <div className={`px-3 py-3 border-t border-hairline border-border-subtle flex items-center ${collapsed ? "flex-col justify-center gap-2" : "justify-between"}`}>
                {streak > 0 && (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div>
                                <StreakChip streak={streak} compact={collapsed} />
                            </div>
                        </TooltipTrigger>
                        {collapsed && (
                            <TooltipContent side="right">{streak} day streak</TooltipContent>
                        )}
                    </Tooltip>
                )}
                <button
                    onClick={onToggleDark}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-text-sec hover:bg-surface-inset transition-colors"
                    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {dark ? <Sun size={14} /> : <Moon size={14} />}
                </button>
            </div>
        </>
    )
}

interface MobileTopBarProps {
    selectedLanguage: string | null
    currentLangName: string | null
    currentLevel: string
    streak: number
}

function MobileTopBar({ selectedLanguage, currentLangName, currentLevel, streak }: Readonly<MobileTopBarProps>) {
    return (
        <header className="lg:hidden flex items-center justify-between h-12 px-4 bg-surface-card border-b border-hairline border-border-subtle shrink-0">
            <LanguagePickerDropdown
                side="bottom"
                trigger={({ open, onClick }) => (
                    <button
                        onClick={onClick}
                        className="flex items-center gap-2"
                        aria-label="Switch language"
                        aria-expanded={open}
                    >
                        <div className="w-7 h-7 rounded-full bg-surface-inset flex items-center justify-center overflow-hidden">
                            {currentLangName
                                ? <Flag langId={selectedLanguage!} size="sm" />
                                : <Globe size={14} className="text-text-sec" />
                            }
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-medium text-text-pri leading-tight">{currentLangName ?? "Select"}</p>
                            {currentLangName && (
                                <p className="text-[10px] text-text-sec leading-tight">{currentLevel}</p>
                            )}
                        </div>
                    </button>
                )}
            />
            {streak > 0 && <StreakChip streak={streak} compact />}
        </header>
    )
}

// ── Main layout ───────────────────────────────────────────────────────────────

export function AppLayout() {
    const [collapsed, setCollapsed] = useState(readCollapsed)
    const { selectedLanguage, level: getLevel } = useProgress()
    const streak = useGlobalStreak()
    const [dark, toggleDark] = useDarkMode()
    const location = useLocation()

    const currentLang = selectedLanguage ? getLanguage(selectedLanguage) : null
    const currentLangName = currentLang?.name ?? null
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
                aria-label="Sidebar navigation"
                className={[
                    "hidden lg:flex flex-col shrink-0 h-full",
                    "border-r border-hairline border-border-subtle bg-surface-card",
                    "transition-[width] duration-200 ease-in-out overflow-hidden",
                    collapsed ? "w-16" : "w-56",
                ].join(" ")}
            >
                <SidebarContent
                    collapsed={collapsed}
                    onToggle={toggleCollapsed}
                    selectedLanguage={selectedLanguage}
                    currentLangName={currentLangName}
                    currentLevel={currentLevel}
                    streak={streak}
                    dark={dark}
                    onToggleDark={toggleDark}
                    activePath={location.pathname}
                    activeSearch={location.search}
                />
            </aside>

            {/* ── Main content area ─────────────────────────────────────────── */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                <MobileTopBar
                    selectedLanguage={selectedLanguage}
                    currentLangName={currentLangName}
                    currentLevel={currentLevel}
                    streak={streak}
                />

                {/* Page content */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>

                {/* Mobile bottom nav */}
                <nav aria-label="Bottom navigation" className="lg:hidden bg-surface-card border-t border-hairline border-border-subtle pb-safe shrink-0">
                    <div className="flex">
                        {NAV_ITEMS.map(item => {
                            const active = item.isActive(location.pathname, location.search)
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
