// components/QuizCard.tsx — Multiple-choice question card with per-option correct/incorrect feedback
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { cn } from "../lib/utils"

interface QuizCardProps {
    question: string
    options: string[]
    selected: string | null
    /** Set to the correct answer string to reveal results; null while still answering */
    correct: string | null
    onSelect: (option: string) => void
}

export function QuizCard({ question, options, selected, correct, onSelect }: Readonly<QuizCardProps>) {
    const revealed = correct !== null
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-full max-w-xl">
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6">{question}</p>
            <RadioGroup value={selected ?? ""} onValueChange={val => !revealed && onSelect(val)}>
                {options.map((opt, i) => {
                    const letter = ["A", "B", "C", "D"][i]
                    const isCorrect = opt === correct
                    const isSelected = opt === selected

                    return (
                        <label
                            key={opt}
                            className={cn(
                                "flex items-center gap-3 w-full px-3 sm:px-4 py-3 rounded-xl border-2 cursor-pointer transition-all text-sm text-gray-800 dark:text-gray-200",
                                !revealed && "border-gray-200 dark:border-gray-600 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30",
                                revealed && isCorrect && "border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300",
                                revealed && isSelected && !isCorrect && "border-red-400 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300",
                                revealed && !isSelected && !isCorrect && "border-gray-100 dark:border-gray-700 text-gray-400 dark:text-gray-500",
                            )}
                        >
                            <RadioGroupItem
                                value={opt}
                                id={`opt-${i}`}
                                className="sr-only"
                                disabled={revealed}
                            />
                            <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">
                                {letter}
                            </span>
                            <span className="flex-1 text-left break-words">{opt}</span>
                            {revealed && isCorrect && <span className="shrink-0">✓</span>}
                            {revealed && isSelected && !isCorrect && <span className="shrink-0">✗</span>}
                        </label>
                    )
                })}
            </RadioGroup>
        </div>
    )
}
