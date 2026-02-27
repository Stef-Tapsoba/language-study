// components/QuizCard.tsx
interface QuizCardProps {
    question: string
    options: string[]
    selected: string | null
    /** Set to the correct answer string to reveal results; null while still answering */
    correct: string | null
    onSelect: (option: string) => void
}

export function QuizCard({ question, options, selected, correct, onSelect }: QuizCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl">
            <p className="text-lg font-medium text-gray-900 mb-6">{question}</p>
            <div className="flex flex-col gap-3">
                {options.map(opt => {
                    let cls =
                        "border-2 rounded-xl px-4 py-3 text-left font-medium transition-colors text-sm "
                    if (correct !== null) {
                        if (opt === correct)
                            cls += "border-green-500 bg-green-50 text-green-800"
                        else if (opt === selected)
                            cls += "border-red-400 bg-red-50 text-red-700"
                        else
                            cls += "border-gray-200 text-gray-400 cursor-default"
                    } else if (opt === selected) {
                        cls += "border-indigo-500 bg-indigo-50 text-indigo-700"
                    } else {
                        cls +=
                            "border-gray-200 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer"
                    }
                    return (
                        <button
                            key={opt}
                            className={cls}
                            onClick={() => correct === null && onSelect(opt)}
                            disabled={correct !== null && opt !== correct && opt !== selected}
                        >
                            {opt}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
