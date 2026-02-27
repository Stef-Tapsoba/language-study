// components/ProgressBar.tsx
interface ProgressBarProps {
    value: number      // 0–100
    className?: string
    label?: string
}

export function ProgressBar({ value, className = "", label }: ProgressBarProps) {
    const pct = Math.max(0, Math.min(100, value))
    return (
        <div className={className}>
            {label && (
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{label}</span>
                    <span>{Math.round(pct)}%</span>
                </div>
            )}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    )
}