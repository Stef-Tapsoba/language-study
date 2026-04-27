// components/LanguagePickerDropdown.tsx — Inline language switcher for the AppLayout shell.
//
// Renders a custom trigger (passed as a render prop) that opens a dropdown listing
// the user's enrolled languages. Selecting one switches the active language and
// navigates to its dashboard. "Add language" navigates to /languages.
//
// side="right"  — dropdown opens to the right of the trigger (sidebar use).
//                 Rendered via createPortal so the sidebar's overflow:hidden
//                 doesn't clip it.
// side="bottom" — dropdown opens below the trigger (mobile top bar use).

import { useState, useRef, useEffect, useLayoutEffect, useMemo } from "react"
import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"
import { Plus } from "lucide-react"
import { LANGUAGES } from "../data/languages"
import { Flag } from "./Flag"
import { useProgress } from "../hooks/useProgress"
import { computeProgressStats } from "../hooks/useProgressStats"

interface DropdownContentProps {
    dropdownRef: React.RefObject<HTMLDivElement>
    langStats: { id: string; lang: (typeof LANGUAGES)[number]; level: string; pct: number }[]
    selectedLanguage: string | null
    style?: React.CSSProperties
    onSwitch: (langId: string) => void
    onAdd: () => void
}

function DropdownContent({ dropdownRef, langStats, selectedLanguage, style, onSwitch, onAdd }: Readonly<DropdownContentProps>) {
    return (
        <div
            ref={dropdownRef}
            role="menu"
            style={style}
            className="min-w-[200px] bg-surface-card border-hairline border border-border-default rounded-2xl shadow-lg overflow-hidden"
        >
            <p className="text-[10px] font-semibold text-text-ter uppercase tracking-widest px-3 pt-3 pb-1">
                Your courses
            </p>
            <div className="flex flex-col p-1">
                {langStats.map(({ id: langId, lang, level, pct }) => {
                    const active = langId === selectedLanguage
                    return (
                        <button
                            key={langId}
                            onClick={() => onSwitch(langId)}
                            role="menuitem"
                            className={`flex items-center gap-3 px-2 py-2 rounded-xl text-left transition-colors ${active ? "bg-grammar-surface" : "hover:bg-surface-inset"}`}
                        >
                            <div className="w-8 h-8 rounded-full bg-surface-inset flex items-center justify-center shrink-0 overflow-hidden">
                                <Flag langId={langId} size="sm" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className={`text-xs font-medium leading-tight truncate ${active ? "text-grammar" : "text-text-pri"}`}>
                                    {lang.name}
                                </p>
                                <p className="text-[10px] text-text-sec leading-tight mt-0.5">
                                    {level} · {pct}%
                                </p>
                                <div className="w-full bg-border-subtle rounded-full h-[2px] mt-1.5">
                                    <div className="bg-grammar h-[2px] rounded-full transition-all" style={{ width: `${pct}%` }} />
                                </div>
                            </div>
                            {active && <div className="w-1.5 h-1.5 rounded-full bg-grammar shrink-0" />}
                        </button>
                    )
                })}
                <button
                    onClick={onAdd}
                    role="menuitem"
                    className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-surface-inset transition-colors mt-0.5"
                >
                    <div className="w-8 h-8 rounded-full border-hairline border border-border-subtle flex items-center justify-center shrink-0">
                        <Plus size={13} className="text-text-ter" />
                    </div>
                    <span className="text-xs text-text-sec">Add a language</span>
                </button>
            </div>
        </div>
    )
}

interface LanguagePickerDropdownProps {
    /** Render prop for the trigger — receives open state so it can style accordingly. */
    trigger: (props: { open: boolean; onClick: () => void }) => React.ReactNode
    side?: "right" | "bottom"
    className?: string
}

export function LanguagePickerDropdown({
    trigger,
    side = "bottom",
    className = "",
}: Readonly<LanguagePickerDropdownProps>) {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [portalPos, setPortalPos] = useState<{ top: number; left: number } | null>(null)

    const {
        startedLanguages: started,
        selectedLanguage,
        level: getLevel,
        completed: getCompleted,
        mastered: getMastered,
        setSelectedLanguage,
    } = useProgress()

    // Memoised so computeProgressStats (O(n) per language) only reruns when
    // the enrolled-language list or progress data changes, not on every open/close.
    const langStats = useMemo(() =>
        started.map(id => ({
            id,
            lang: LANGUAGES.find(l => l.id === id),
            level: getLevel(id),
            pct: computeProgressStats(id, getLevel(id), getCompleted(id), getMastered(id)).overallPct,
        })).filter(s => s.lang !== undefined),
    [started, getLevel, getCompleted, getMastered] // eslint-disable-line react-hooks/exhaustive-deps
    )

    // When side="right", measure the trigger to position the portaled dropdown.
    useLayoutEffect(() => {
        if (!open || side !== "right" || !wrapperRef.current) return
        const rect = wrapperRef.current.getBoundingClientRect()
        setPortalPos({ top: rect.top, left: rect.right + 8 })
    }, [open, side])

    // Close on outside click — must check both wrapper and portaled dropdown.
    useEffect(() => {
        if (!open) return
        function handle(e: MouseEvent) {
            const inWrapper  = wrapperRef.current?.contains(e.target as Node)
            const inDropdown = dropdownRef.current?.contains(e.target as Node)
            if (!inWrapper && !inDropdown) setOpen(false)
        }
        document.addEventListener("mousedown", handle)
        return () => document.removeEventListener("mousedown", handle)
    }, [open])

    // Close on Escape
    useEffect(() => {
        if (!open) return
        function handle(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false)
        }
        document.addEventListener("keydown", handle)
        return () => document.removeEventListener("keydown", handle)
    }, [open])

    function switchTo(langId: string) {
        setSelectedLanguage(langId)
        setOpen(false)
        navigate(`/learn/${langId}`)
    }

    function addLanguage() {
        setOpen(false)
        navigate("/languages")
    }

    const sharedProps = { dropdownRef, langStats: langStats as DropdownContentProps["langStats"], selectedLanguage, onSwitch: switchTo, onAdd: addLanguage }

    return (
        <div ref={wrapperRef} className={`relative ${className}`}>
            {trigger({ open, onClick: () => setOpen(v => !v) })}

            {/* side="right" (sidebar): portal to document.body so <aside> overflow:hidden doesn't clip */}
            {open && side === "right" && portalPos && createPortal(
                <DropdownContent {...sharedProps} style={{ position: "fixed", top: portalPos.top, left: portalPos.left, zIndex: 50 }} />,
                document.body
            )}

            {/* side="bottom" (mobile top bar): inline absolute, no clipping issue here */}
            {open && side === "bottom" && (
                <div className="absolute top-full left-0 mt-1 z-50">
                    <DropdownContent {...sharedProps} />
                </div>
            )}
        </div>
    )
}
