// components/LevelBadge.tsx — Coloured CEFR level pill badge (A1–C1) with tooltip
import { CEFRLevel } from "../types"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const colours: Record<CEFRLevel, string> = {
    A1: "bg-green-100 text-green-800",
    A2: "bg-teal-100 text-teal-800",
    B1: "bg-blue-100 text-blue-800",
    B2: "bg-purple-100 text-purple-800",
    C1: "bg-orange-100 text-orange-800",
}

export const levelNames: Record<CEFRLevel, string> = {
    A1: "Beginner",
    A2: "Elementary",
    B1: "Intermediate",
    B2: "Upper Intermediate",
    C1: "Advanced",
}

export function LevelBadge({ level }: Readonly<{ level: CEFRLevel }>) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold cursor-default ${colours[level]}`}>
                    {level}
                </span>
            </TooltipTrigger>
            <TooltipContent>{levelNames[level]}</TooltipContent>
        </Tooltip>
    )
}
