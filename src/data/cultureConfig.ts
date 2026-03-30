// data/cultureConfig.ts — Shared category metadata for culture episodes.
// Single source of truth used by CulturePage and any other page rendering category pills.

export interface CategoryMeta {
    emoji: string
    label: string
    color: string
}

export const CATEGORY_META: Record<string, CategoryMeta> = {
    food: { emoji: "🍽️", label: "Food & Drink", color: "bg-orange-100 text-orange-700" },
    customs: { emoji: "🤝", label: "Customs", color: "bg-purple-100 text-purple-700" },
    history: { emoji: "📜", label: "History", color: "bg-stone-100 text-stone-700" },
    geography: { emoji: "🗺️", label: "Geography", color: "bg-teal-100 text-teal-700" },
    arts: { emoji: "🎭", label: "Arts & Culture", color: "bg-pink-100 text-pink-700" },
    "daily-life": { emoji: "☀️", label: "Daily Life", color: "bg-yellow-100 text-yellow-700" },
    festivals: { emoji: "🎉", label: "Festivals", color: "bg-red-100 text-red-700" },
    "language-note": { emoji: "✍️", label: "Language", color: "bg-indigo-100 text-indigo-700" },
}

export const CATEGORY_META_FALLBACK: CategoryMeta = {
    emoji: "🌍",
    label: "Culture",
    color: "bg-amber-100 text-amber-700",
}
