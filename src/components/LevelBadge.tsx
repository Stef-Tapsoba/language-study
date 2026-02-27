// components/LevelBadge.tsx
import { CEFRLevel } from "../types"

const colours: Record<CEFRLevel, string> = {
    A1: "bg-green-100 text-green-800",
    A2: "bg-teal-100 text-teal-800",
    B1: "bg-blue-100 text-blue-800",
    B2: "bg-purple-100 text-purple-800",
    C1: "bg-orange-100 text-orange-800",
}

export function LevelBadge({ level }: { level: CEFRLevel }) {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colours[level]}`}>
            {level}
        </span>
    )
}