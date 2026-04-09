// components/CheckpointStrip.tsx — Compact checkpoint status card.
// Shows on the home screen when the next checkpoint is 1-2 units away.

import { Link } from "react-router-dom"

interface CheckpointStripProps {
    title: string
    subtitle: string
    href: string
    /** "upcoming" = user hasn't unlocked it yet. "ready" = unlocked, tap to attempt. */
    state: "upcoming" | "ready"
}

const sharedCls = "flex items-center gap-3 px-3 py-3 rounded-2xl border-hairline border border-grammar-border bg-grammar-surface transition-colors"

export function CheckpointStrip({ title, subtitle, href, state }: Readonly<CheckpointStripProps>) {
    const inner = (
        <>
            {/* Orb */}
            <div className="w-8 h-8 rounded-full bg-surface-card border-hairline border border-grammar-border flex items-center justify-center shrink-0">
                {state === "ready" ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-grammar" />
                    </svg>
                ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.3" className="text-grammar opacity-60" />
                    </svg>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-text-pri leading-tight truncate">{title}</p>
                <p className="text-[10px] text-text-sec leading-tight mt-0.5">{subtitle}</p>
            </div>
            <span className="text-grammar text-sm shrink-0">→</span>
        </>
    )

    // upcoming = informational only, not yet actionable
    if (state === "upcoming") {
        return <div className={`${sharedCls} opacity-80 cursor-default`}>{inner}</div>
    }

    return (
        <Link to={href} className={`${sharedCls} hover:bg-grammar-surface/80`}>
            {inner}
        </Link>
    )
}
