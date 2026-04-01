// components/MarkCompleteButton.tsx — Reusable green mark-complete / mark-learned button
export function MarkCompleteButton({
    done,
    onClick,
    label = "Mark as complete",
    showDoneState = false,
    className = "",
}: {
    done: boolean
    onClick: () => void
    label?: string
    /** When true, renders a disabled "✓ Completed" button instead of hiding */
    showDoneState?: boolean
    className?: string
}) {
    if (done && !showDoneState) return null
    return (
        <button
            onClick={done ? undefined : onClick}
            disabled={done}
            className={`w-full font-semibold rounded-xl py-2.5 text-sm transition-colors ${
                done
                    ? "border border-green-300 text-green-700 bg-green-50 dark:bg-green-900/20 cursor-default"
                    : "bg-green-600 text-white hover:bg-green-700"
            } ${className}`}
        >
            {done ? "✓ Completed" : label}
        </button>
    )
}
