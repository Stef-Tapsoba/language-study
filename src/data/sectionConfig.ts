// data/sectionConfig.ts — Single source of truth for the six study sections.
//
// Use SECTION_CONFIG instead of local color maps in DashboardPage, StatsTab, ProfilePage, etc.

export type StudySection = "grammar" | "vocab" | "verbs" | "reading" | "listening" | "culture"

export interface SectionMeta {
    /** Tailwind bg-* class for flat fills and accent strips. */
    color: string
    /** Tailwind gradient classes for progress bar fills. */
    gradient: string
    /** Tailwind text-* class matching the bar color — for percentage labels etc. */
    textColor: string
    /** Lighter Tailwind bg-* class for icon container backgrounds. */
    iconBg: string
    /** Tailwind text-* class for icon tint inside iconBg containers. */
    iconText: string
    emoji: string
    label: string
}

export const SECTION_CONFIG: Record<StudySection, SectionMeta> = {
    grammar:   { color: "bg-green-500",  gradient: "bg-gradient-to-r from-green-400 to-green-600",   textColor: "text-green-600",  iconBg: "bg-green-100",  iconText: "text-green-700",  emoji: "📖", label: "Grammar"    },
    vocab:     { color: "bg-amber-400",  gradient: "bg-gradient-to-r from-amber-300 to-amber-500",   textColor: "text-amber-600",  iconBg: "bg-amber-100",  iconText: "text-amber-700",  emoji: "📝", label: "Vocabulary"  },
    verbs:     { color: "bg-red-400",    gradient: "bg-gradient-to-r from-red-400 to-red-600",       textColor: "text-red-600",    iconBg: "bg-red-100",    iconText: "text-red-700",    emoji: "⚡", label: "Verbs"       },
    reading:   { color: "bg-blue-500",   gradient: "bg-gradient-to-r from-blue-400 to-blue-600",     textColor: "text-blue-600",   iconBg: "bg-blue-100",   iconText: "text-blue-700",   emoji: "📗", label: "Reading"     },
    listening: { color: "bg-slate-400",  gradient: "bg-gradient-to-r from-slate-400 to-slate-600",   textColor: "text-slate-600",  iconBg: "bg-slate-100",  iconText: "text-slate-700",  emoji: "🎧", label: "Listening"   },
    culture:   { color: "bg-teal-500",   gradient: "bg-gradient-to-r from-teal-400 to-teal-600",     textColor: "text-teal-600",   iconBg: "bg-teal-100",   iconText: "text-teal-700",   emoji: "🌍", label: "Culture"     },
}
