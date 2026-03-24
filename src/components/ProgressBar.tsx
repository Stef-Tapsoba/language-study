// components/ProgressBar.tsx — Labelled horizontal progress bar
interface ProgressBarProps {
    value: number      // 0–100
    className?: string
    label?: string
}

export function ProgressBar({ value, className = "", label }: Readonly<ProgressBarProps>) {
    const pct = Math.max(0, Math.min(100, value))
    return (
        <div className={className}>
            {label && (
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{label}</span>
                    <span>{Math.round(pct)}%</span>
                </div>
            )}
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                    className="bg-indigo-600 h-2.5 rounded-full transition-transform duration-500 origin-left"
                    style={{ transform: `scaleX(${pct / 100})` }}
                />
            </div>
        </div>
    )
}
