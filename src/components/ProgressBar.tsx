// components/ProgressBar.tsx — Labelled horizontal progress bar with per-section colour + mount animation.
import { useEffect, useState } from "react"
import { SECTION_CONFIG, StudySection } from "../data/sectionConfig"

interface ProgressBarProps {
    value: number                         // 0–100
    className?: string
    label?: string
    color?: StudySection | "default"      // drives gradient + text color
    animate?: boolean                     // animate fill on mount (default: true)
}

const DEFAULT_GRADIENT = "bg-gradient-to-r from-indigo-400 to-indigo-600"
const DEFAULT_TEXT     = "text-indigo-600"

export function ProgressBar({ value, className = "", label, color, animate = true }: Readonly<ProgressBarProps>) {
    const pct = Math.max(0, Math.min(100, value))

    // Animate width from 0 → pct on mount
    const [displayed, setDisplayed] = useState(animate ? 0 : pct)
    useEffect(() => {
        if (!animate) { setDisplayed(pct); return }
        const t = setTimeout(() => setDisplayed(pct), 60)
        return () => clearTimeout(t)
    }, [pct, animate])

    const gradient  = color && color !== "default" ? SECTION_CONFIG[color].gradient : DEFAULT_GRADIENT
    const textCls   = color && color !== "default" ? SECTION_CONFIG[color].textColor : DEFAULT_TEXT
    const isComplete = pct >= 100

    return (
        <div className={className}>
            {label && (
                <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-500 dark:text-gray-400">{label}</span>
                    <span className={`font-semibold ${textCls}`}>{Math.round(pct)}%</span>
                </div>
            )}
            <div className="w-full bg-gray-200/70 dark:bg-gray-600/70 rounded-full h-2 overflow-hidden">
                <div
                    className={`${gradient} h-2 rounded-full transition-[width] duration-700 ease-out${isComplete ? " brightness-110" : ""}`}
                    style={{ width: `${displayed}%` }}
                />
            </div>
        </div>
    )
}
