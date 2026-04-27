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
    Sun, Moon, Map, BarChart2,
} from "lucide-react"
import { useProgress } from "../../hooks/useProgress"
import { useGlobalStreak } from "../../hooks/useGlobalStreak"
import { useDarkMode } from "../../hooks/useDarkMode"
import { useCurrentUser } from "../../hooks/useCurrentUser"
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
    /** Only show in desktop sidebar, not mobile bottom nav */
    desktopOnly?: boolean
}

// Desktop sidebar: Home / Study / Practice / Review / Path / Stats (6)
// Mobile bottom nav: Home / Study / Practice / Review / Path / Profile (6)
const NAV_ITEMS: NavItem[] = [
    {
        id: "home",
        label: "Home",
        icon: Home,
        href: () => "/home",
        isActive: (p) => p === "/home",
    },
    {
        id: "path",
        label: "Path",
        icon: Map,
        href: (l) => l ? `/learn/${l}/path` : "/home",
        // Active on path page AND unit detail pages
        // Active on the explicit /path route, the index /learn/:langId, and unit detail pages
        isActive: (p) => p.endsWith("/path") || /^\/learn\/[^/]+$/.test(p) || /^\/learn\/[^/]+\/units\//.test(p),
    },
    {
        id: "study",
        label: "Study",
        icon: BookOpen,
        href: (l) => l ? `/learn/${l}/study` : "/home",
        isActive: (p) => p.endsWith("/study"),
    },
    {
        id: "practice",
        label: "Practice",
        icon: Zap,
        href: (l) => l ? `/learn/${l}/practice` : "/home",
        isActive: (p) => p.endsWith("/practice"),
    },
    {
        id: "review",
        label: "Review",
        icon: RotateCcw,
        href: (l) => l ? `/learn/${l}/review` : "/home",
        isActive: (p) => p.endsWith("/review") || p.endsWith("/review/session"),
    },
    {
        id: "stats",
        label: "Stats",
        icon: BarChart2,
        href: (l) => l ? `/learn/${l}/stats` : "/home",
        isActive: (p) => p.endsWith("/stats"),
        desktopOnly: true,
    },
]

// Mobile bottom nav gets Profile instead of the desktop-only items
const MOBILE_PROFILE_ITEM: NavItem = {
    id: "profile",
    label: "Profile",
    icon: User,
    href: () => "/profile",
    isActive: (p) => p === "/profile",
}

// ── Language picker trigger components (extracted to avoid inline-component warnings) ──

function SidebarLangTrigger({ open, onClick, collapsed, langId, currentLangName, currentLevel }: Readonly<{
    open: boolean; onClick: () => void
    collapsed: boolean; langId: string | null; currentLangName: string | null; currentLevel: string
}>) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    onClick={onClick}
                    className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-surface-inset transition-colors ${collapsed ? "justify-center" : ""} ${open ? "bg-surface-inset" : ""}`}
                    aria-label={collapsed ? (currentLangName ?? "Select language") : undefined}
                    aria-expanded={open}
                >
                    {currentLangName && langId
                        ? (
                            <div className="w-8 h-8 rounded-full bg-surface-inset flex items-center justify-center shrink-0 overflow-hidden">
                                <Flag langId={langId} size="sm" />
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
    )
}

function MobileLangTrigger({ open, onClick, selectedLanguage, currentLangName, currentLevel }: Readonly<{
    open: boolean; onClick: () => void
    selectedLanguage: string | null; currentLangName: string | null; currentLevel: string
}>) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2"
            aria-label="Switch language"
            aria-expanded={open}
        >
            <div className="w-7 h-7 rounded-full bg-surface-inset flex items-center justify-center overflow-hidden">
                {currentLangName && selectedLanguage
                    ? <Flag langId={selectedLanguage} size="sm" />
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
    )
}

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
    firstName: string
}

function SidebarContent({
    collapsed, onToggle,
    selectedLanguage, currentLangName, currentLevel,
    streak, dark, onToggleDark,
    activePath, activeSearch, firstName,
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
                    <SidebarLangTrigger
                        open={open} onClick={onClick}
                        collapsed={collapsed} langId={langId}
                        currentLangName={currentLangName} currentLevel={currentLevel}
                    />
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
                            <span aria-hidden={collapsed} className={`transition-opacity duration-150 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
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

            {/* Bottom: streak + dark toggle (above profile, matching mockup) */}
            <div className={`border-t border-hairline border-border-subtle px-3 pt-3 pb-4 flex flex-col gap-2`}>
                {/* Streak + dark toggle row */}
                <div className={`flex items-center ${collapsed ? "flex-col gap-2 justify-center" : "justify-between px-1"}`}>
                    {streak > 0 && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div><StreakChip streak={streak} compact={collapsed} /></div>
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

                {/* Profile row — below streak, matching desktop mockup */}
                <Link
                    to="/profile"
                    className={`flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-surface-inset transition-colors ${collapsed ? "justify-center" : ""}`}
                >
                    <div className="w-7 h-7 rounded-full bg-grammar-surface border-hairline border border-grammar-border flex items-center justify-center text-xs font-semibold text-grammar shrink-0">
                        {firstName ? firstName[0].toUpperCase() : <User size={12} />}
                    </div>
                    {collapsed ? null : (
                        <span className="text-xs font-medium text-text-sec truncate">{firstName || "Profile"}</span>
                    )}
                </Link>
            </div>
        </>
    )
}

interface MobileTopBarProps {
    selectedLanguage: string | null
    currentLangName: string | null
    currentLevel: string
    streak: number
    dark: boolean
    onToggleDark: () => void
}

function MobileTopBar({ selectedLanguage, currentLangName, currentLevel, streak, dark, onToggleDark }: Readonly<MobileTopBarProps>) {
    return (
        <header className="lg:hidden flex items-center justify-between h-12 px-4 bg-surface-card border-b border-hairline border-border-subtle shrink-0">
            <LanguagePickerDropdown
                side="bottom"
                trigger={({ open, onClick }) => (
                    <MobileLangTrigger
                        open={open} onClick={onClick}
                        selectedLanguage={selectedLanguage}
                        currentLangName={currentLangName} currentLevel={currentLevel}
                    />
                )}
            />
            <div className="flex items-center gap-1">
                {streak > 0 && <StreakChip streak={streak} compact />}
                <button
                    onClick={onToggleDark}
                    className="w-8 h-8 rounded-md flex items-center justify-center text-text-sec hover:bg-surface-inset transition-colors"
                    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
            </div>
        </header>
    )
}

// ── Main layout ───────────────────────────────────────────────────────────────

export function AppLayout() {
    const [collapsed, setCollapsed] = useState(readCollapsed)
    const { selectedLanguage, level: getLevel } = useProgress()
    const streak = useGlobalStreak()
    const [dark, toggleDark] = useDarkMode()
    const { firstName } = useCurrentUser()
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
                    firstName={firstName}
                />
            </aside>

            {/* ── Main content area ─────────────────────────────────────────── */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                <MobileTopBar
                    selectedLanguage={selectedLanguage}
                    currentLangName={currentLangName}
                    currentLevel={currentLevel}
                    streak={streak}
                    dark={dark}
                    onToggleDark={toggleDark}
                />

                {/* Page content — pb-14 clears the fixed mobile nav; reset to 0 on desktop */}
                <main className="flex-1 overflow-y-auto pb-14 lg:pb-0">
                    <Outlet />
                </main>

                {/* Mobile bottom nav — fixed so it stays above the virtual keyboard */}
                <nav aria-label="Bottom navigation" className="lg:hidden fixed bottom-0 inset-x-0 z-10 bg-surface-card border-t border-hairline border-border-subtle pb-safe">
                    <div className="flex">
                        {[...NAV_ITEMS.filter(i => !i.desktopOnly), MOBILE_PROFILE_ITEM].map(item => {
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
                                    <span className="text-[11px] font-medium tracking-wide uppercase leading-none">{item.label}</span>
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
