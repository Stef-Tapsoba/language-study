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
        <div className="bg-surface-card rounded-2xl shadow-md p-6 w-full max-w-xl">
            <p className="text-lg font-medium text-text-pri mb-6">{question}</p>
            <RadioGroup value={selected ?? ""} onValueChange={val => !revealed && onSelect(val)}>
                {options.map((opt, i) => {
                    const letter = ["A", "B", "C", "D"][i]
                    const isCorrect = opt === correct
                    const isSelected = opt === selected

                    return (
                        <label
                            key={opt}
                            className={cn(
                                "flex items-center gap-3 w-full px-3 sm:px-4 py-3 rounded-xl border-2 cursor-pointer transition-all text-sm text-text-pri",
                                !revealed && "border-border-default hover:border-grammar hover:bg-grammar-surface",
                                revealed && isCorrect && "border-grammar bg-grammar-surface text-grammar",
                                revealed && isSelected && !isCorrect && "border-verbs bg-verbs-surface text-verbs",
                                revealed && !isSelected && !isCorrect && "border-border-subtle text-text-ter",
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
