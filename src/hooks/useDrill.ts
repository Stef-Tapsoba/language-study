// hooks/useDrill.ts — shared state machine for verb and grammar drill pages
import { useState, useEffect } from "react"

export interface MissedEntry<Q> {
    question: Q
    yourAnswer: string
}

export function useDrill<Q extends { correct: string; options: string[] }>(questions: Q[]) {
    const [index, setIndex] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [revealed, setRevealed] = useState(false)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [missed, setMissed] = useState<MissedEntry<Q>[]>([])

    function handleSelect(opt: string) {
        if (revealed) return
        setSelected(opt)
        setRevealed(true)
    }

    function handleNext() {
        const q = questions[index]
        const isCorrect = selected === q.correct
        const newScore = score + (isCorrect ? 1 : 0)
        if (!isCorrect && selected !== null) {
            setMissed(prev => [...prev, { question: q, yourAnswer: selected }])
        }
        if (index + 1 >= questions.length) {
            setScore(newScore)
            setDone(true)
        } else {
            setScore(newScore)
            setIndex(i => i + 1)
            setSelected(null)
            setRevealed(false)
        }
    }

    function restart() {
        setIndex(0); setSelected(null); setRevealed(false); setScore(0); setDone(false); setMissed([])
    }

    // Keyboard shortcuts: 1–4 to select an option, Enter/Space to advance
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (done) return
            const q = questions[index]
            if (!q) return
            const digit = parseInt(e.key)
            if (digit >= 1 && digit <= 4 && !revealed) {
                const opt = q.options[digit - 1]
                if (opt !== undefined) { setSelected(opt); setRevealed(true) }
            } else if ((e.key === "Enter" || e.key === " ") && revealed) {
                e.preventDefault()
                const isCorrect = selected === q.correct
                const newScore = score + (isCorrect ? 1 : 0)
                if (!isCorrect && selected !== null) {
                    setMissed(prev => [...prev, { question: q, yourAnswer: selected }])
                }
                if (index + 1 >= questions.length) {
                    setScore(newScore); setDone(true)
                } else {
                    setScore(newScore); setIndex(i => i + 1); setSelected(null); setRevealed(false)
                }
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [index, revealed, done, score, selected, questions])

    return { index, selected, revealed, score, done, missed, handleSelect, handleNext, restart }
}
