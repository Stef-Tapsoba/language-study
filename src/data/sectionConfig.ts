// data/sectionConfig.ts — Single source of truth for the six study sections.
//
// Use SECTION_CONFIG instead of local color maps in DashboardPage, StatsTab, ProfilePage, etc.

export type StudySection = "grammar" | "vocab" | "verbs" | "reading" | "listening" | "culture"

export interface SectionMeta {
    /** Tailwind bg-* class for progress bars and accents. */
    color: string
    /** Lighter Tailwind bg-* class for icon container backgrounds. */
    iconBg: string
    emoji: string
    label: string
}

export const SECTION_CONFIG: Record<StudySection, SectionMeta> = {
    grammar:   { color: "bg-green-500",  iconBg: "bg-green-100",  emoji: "📖", label: "Grammar"    },
    vocab:     { color: "bg-amber-400",  iconBg: "bg-amber-100",  emoji: "📝", label: "Vocabulary"  },
    verbs:     { color: "bg-red-400",    iconBg: "bg-red-100",    emoji: "⚡", label: "Verbs"       },
    reading:   { color: "bg-blue-500",   iconBg: "bg-blue-100",   emoji: "📗", label: "Reading"     },
    listening: { color: "bg-slate-400",  iconBg: "bg-slate-100",  emoji: "🎧", label: "Listening"   },
    culture:   { color: "bg-teal-500",   iconBg: "bg-teal-100",   emoji: "🌍", label: "Culture"     },
}
