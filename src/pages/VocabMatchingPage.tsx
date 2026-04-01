// pages/VocabMatchingPage.tsx — Vocab Matching exercise
//
// Two columns: target-language words on the left, shuffled English translations
// on the right. The user clicks one from each column to form a pair.
// Correct pairs are highlighted green and removed from play.
// Accepts ExerciseComponentProps<VocabItem>.

import { useState, useMemo, useEffect, useRef } from "react"
import { NavBar } from "../components/NavBar"
import { shuffle } from "../utils/arrayUtils"
import { getUI, fmt } from "../i18n"
import { completeDrillSession } from "../store/actions"
import { useStatsStore } from "../store/useStatsStore"
import type { ExerciseComponentProps } from "../exerciseTypes/registry"
import type { VocabItem } from "../types"

// ── Types ─────────────────────────────────────────────────────────────────────

interface MatchPair {
    id: string       // VocabItem.id
    word: string     // target-language word
    translation: string
}

interface RoundState {
    pairs: MatchPair[]
    leftOrder: string[]    // ids in left-column display order
    rightOrder: string[]   // ids in right-column display order
}

// ── Round builder ─────────────────────────────────────────────────────────────

const ROUND_SIZE = 6
const MAX_ROUNDS = 5   // cap one sitting at 30 items (5 × 6)

function buildRound(pool: VocabItem[], usedIds: Set<string>): RoundState {
    const available = pool.filter(v => !usedIds.has(v.id))
    const selected = shuffle(available).slice(0, ROUND_SIZE)
    const pairs: MatchPair[] = selected.map(v => ({
        id: v.id,
        word: v.word,
        translation: v.translation,
    }))
    return {
        pairs,
        leftOrder: pairs.map(p => p.id),
        rightOrder: shuffle(pairs.map(p => p.id)),
    }
}

// ── Column item button ────────────────────────────────────────────────────────

type ItemState = "idle" | "selected" | "matched" | "wrong"

interface ItemButtonProps {
    label: string
    state: ItemState
    onClick: () => void
}

function ItemButton({ label, state, onClick }: Readonly<ItemButtonProps>) {
    const cls: Record<ItemState, string> = {
        idle: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 cursor-pointer",
        selected: "bg-indigo-100 dark:bg-indigo-900/40 border-2 border-indigo-500 text-indigo-900 dark:text-indigo-100 cursor-pointer",
        matched: "bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 cursor-default opacity-60",
        wrong: "bg-red-50 dark:bg-red-900/20 border-2 border-red-400 text-red-700 dark:text-red-300 cursor-pointer animate-shake",
    }
    return (
        <button
            onClick={onClick}
            disabled={state === "matched"}
            className={`w-full rounded-xl px-3 py-2.5 text-sm font-medium text-left transition-all ${cls[state]}`}
        >
            {state === "matched" && <span className="mr-1 text-green-500">✓</span>}
            {label}
        </button>
    )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function VocabMatchingPage({ items, langId, level, onComplete }: Readonly<ExerciseComponentProps<VocabItem>>) {
    const ui = getUI(langId, level)

    const pool = useMemo(() => shuffle(items).slice(0, ROUND_SIZE * MAX_ROUNDS), [items])

    const [usedIds, setUsedIds] = useState<Set<string>>(new Set())
    const [round, setRound] = useState<RoundState>(() => buildRound(pool, new Set()))
    const [roundNum, setRoundNum] = useState(1)
    const [totalScore, setTotalScore] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [done, setDone] = useState(false)

    // Selection state per round
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null)   // id
    const [selectedRight, setSelectedRight] = useState<string | null>(null) // id
    const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set())
    const [wrongPair, setWrongPair] = useState<[string, string] | null>(null)

    // C-6: clear pending wrong-pair timeout on unmount to avoid setState on unmounted component
    const wrongPairTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    useEffect(() => () => { if (wrongPairTimer.current) clearTimeout(wrongPairTimer.current) }, [])

    function handleRestart() {
        // C-5: use the original pool consistently (not a re-shuffle that only affects round 1)
        setUsedIds(new Set())
        setRound(buildRound(pool, new Set()))
        setRoundNum(1)
        setTotalScore(0)
        setTotalItems(0)
        setDone(false)
        setSelectedLeft(null)
        setSelectedRight(null)
        setMatchedIds(new Set())
        setWrongPair(null)
    }

    function tryMatch(leftId: string, rightId: string) {
        const isCorrect = leftId === rightId
        useStatsStore.getState().recordQuizAnswer(langId, isCorrect)
        setTotalItems(n => n + 1)
        if (isCorrect) {
            setTotalScore(s => s + 1)
            onComplete(leftId)
            const newMatched = new Set(matchedIds).add(leftId)
            setMatchedIds(newMatched)
            setSelectedLeft(null)
            setSelectedRight(null)

            // If round is complete, advance
            if (newMatched.size === round.pairs.length) {
                const newUsed = new Set(usedIds)
                round.pairs.forEach(p => newUsed.add(p.id))
                const remaining = pool.filter(v => !newUsed.has(v.id))

                if (remaining.length === 0) {
                    // All items done
                    completeDrillSession(langId, "vocab").catch(console.error)
                    setDone(true)
                } else {
                    setUsedIds(newUsed)
                    setRound(buildRound(pool, newUsed))
                    setRoundNum(r => r + 1)
                    setMatchedIds(new Set())
                    setSelectedLeft(null)
                    setSelectedRight(null)
                }
            }
        } else {
            // Flash wrong feedback then clear selection
            setWrongPair([leftId, rightId])
            if (wrongPairTimer.current) clearTimeout(wrongPairTimer.current)
            wrongPairTimer.current = setTimeout(() => {
                setWrongPair(null)
                setSelectedLeft(null)
                setSelectedRight(null)
            }, 700)
        }
    }

    function handleLeftClick(id: string) {
        if (matchedIds.has(id)) return
        if (wrongPair) return
        const newLeft = selectedLeft === id ? null : id
        setSelectedLeft(newLeft)
        if (newLeft && selectedRight) tryMatch(newLeft, selectedRight)
    }

    function handleRightClick(id: string) {
        if (matchedIds.has(id)) return
        if (wrongPair) return
        const newRight = selectedRight === id ? null : id
        setSelectedRight(newRight)
        if (selectedLeft && newRight) tryMatch(selectedLeft, newRight)
    }

    function leftState(id: string): ItemState {
        if (matchedIds.has(id)) return "matched"
        if (wrongPair?.[0] === id) return "wrong"
        if (selectedLeft === id) return "selected"
        return "idle"
    }

    function rightState(id: string): ItemState {
        if (matchedIds.has(id)) return "matched"
        if (wrongPair?.[1] === id) return "wrong"
        if (selectedRight === id) return "selected"
        return "idle"
    }

    // S-3: memoised to avoid rebuilding a Set on every render
    const remainingAfterRound = useMemo(() => {
        const usedAfterThis = new Set(usedIds)
        round.pairs.forEach(p => usedAfterThis.add(p.id))
        return pool.filter(v => !usedAfterThis.has(v.id)).length
    }, [pool, usedIds, round.pairs])

    if (done) {
        const pct = totalItems > 0 ? Math.round((totalScore / totalItems) * 100) : 0
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title="Vocab Matching" level={level} backTo={`/learn/${langId}`} />
                <main className="max-w-sm mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
                    <div className="text-5xl">{pct >= 70 ? "🏆" : "💪"}</div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{ui.drillComplete}</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 w-full flex justify-around">
                        <div>
                            <p className="text-3xl font-bold text-green-600">{totalScore}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ui.scoreCorrect}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-red-500">{totalItems - totalScore}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ui.scoreWrong}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-indigo-600">{pct}%</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ui.scoreLabel}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleRestart}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors"
                    >
                        {ui.tryAgain}
                    </button>
                </main>
            </div>
        )
    }

    const pairMap = Object.fromEntries(round.pairs.map(p => [p.id, p]))

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title="Vocab Matching" level={level} backTo={`/learn/${langId}`} />
            <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Round {roundNum}</span>
                    <span>{matchedIds.size}/{round.pairs.length} matched</span>
                </div>

                {/* Instruction banner */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl px-5 py-3 text-center">
                    <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">
                        Match each word with its English translation
                    </p>
                    {remainingAfterRound > 0 && (
                        <p className="text-xs text-amber-500 dark:text-amber-500 mt-0.5">
                            {remainingAfterRound} more words after this round
                        </p>
                    )}
                </div>

                {/* Two-column grid */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Left column: target-language words */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide text-center mb-1">
                            Word
                        </p>
                        {round.leftOrder.map(id => (
                            <ItemButton
                                key={id}
                                label={pairMap[id].word}
                                state={leftState(id)}
                                onClick={() => handleLeftClick(id)}
                            />
                        ))}
                    </div>

                    {/* Right column: English translations (shuffled) */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide text-center mb-1">
                            Meaning
                        </p>
                        {round.rightOrder.map(id => (
                            <ItemButton
                                key={id}
                                label={pairMap[id].translation}
                                state={rightState(id)}
                                onClick={() => handleRightClick(id)}
                            />
                        ))}
                    </div>
                </div>

                {/* Score strip */}
                <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                    {fmt(ui.youAnswered, { score: totalScore, total: totalItems })}
                </p>

                {/* S-5: sr-only live region announces match results to screen readers */}
                <div aria-live="polite" aria-atomic="true" className="sr-only">
                    {(() => {
                        if (wrongPair) return "Incorrect — try again"
                        if (matchedIds.size > 0) return `Matched ${matchedIds.size} of ${round.pairs.length}`
                        return ""
                    })()}
                </div>
            </main>
        </div>
    )
}
