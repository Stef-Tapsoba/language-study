// components/QuickPracticeCard.tsx — Small practice shortcut card.
// 3-column row on home screen: Flashcards / Verb Drill / Grammar Drill.

import { Link } from "react-router-dom"

interface QuickPracticeCardProps {
    label: string
    /** Tailwind class for the icon orb background, e.g. "bg-verbs-surface" */
    iconBg: string
    icon: React.ReactNode
    href: string
    /** Optional badge text, e.g. "12 due" */
    badge?: string
    /** Tailwind class for badge text colour */
    badgeColor?: string
}

export function QuickPracticeCard({
    label, iconBg, icon, href, badge, badgeColor = "text-text-sec",
}: Readonly<QuickPracticeCardProps>) {
    return (
        <Link
            to={href}
            className="flex-1 flex flex-col items-center gap-1.5 py-3 px-2 bg-surface-card border-hairline border border-border-subtle rounded-2xl hover:bg-surface-elevated transition-colors text-center"
        >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${iconBg}`}>
                {icon}
            </div>
            <span className="text-[11px] font-medium text-text-sec leading-tight">{label}</span>
            {badge && (
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-surface-inset ${badgeColor}`}>
                    {badge}
                </span>
            )}
        </Link>
    )
}
