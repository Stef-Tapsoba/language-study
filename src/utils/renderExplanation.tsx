// utils/renderExplanation.tsx — Shared renderer for grammar explanation strings.
// Handles **bold** markers, space-aligned two-column tables, and inline vocab highlights.

import type { InlineVocabEntry } from "../types"

export type VocabClickHandler = (word: string, translation: string, rect: DOMRect) => void

/**
 * Renders a plain text segment with **bold** markers and optional vocab highlights.
 * Vocab words are wrapped in a tappable <button> that calls onVocabClick.
 */
function renderRichText(
    text: string,
    keyPrefix: string,
    vocabMap?: Map<string, string>,
    onVocabClick?: VocabClickHandler
): React.ReactNode[] {
    const boldParts = text.split("**")
    const result: React.ReactNode[] = []

    boldParts.forEach((part, i) => {
        const isBold = i % 2 === 1
        const segments = vocabMap && onVocabClick
            ? highlightVocab(part, `${keyPrefix}${i}`, vocabMap, onVocabClick)
            : [part]

        if (isBold) {
            result.push(
                <strong key={`${keyPrefix}b${i}`} className="font-semibold text-gray-900 dark:text-gray-300">
                    {segments}
                </strong>
            )
        } else {
            result.push(...segments)
        }
    })

    return result
}

/**
 * Splits a text segment around vocab word occurrences and wraps matches
 * in tappable buttons. Uses Unicode-aware word boundaries so accented
 * French characters (é, œ, etc.) are handled correctly.
 */
function highlightVocab(
    text: string,
    keyPrefix: string,
    vocabMap: Map<string, string>,
    onVocabClick: VocabClickHandler
): React.ReactNode[] {
    if (!vocabMap.size) return [text]

    const escaped = Array.from(vocabMap.keys()).map(w =>
        w.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`)
    )
    const pattern = escaped.join("|")
    // Unicode-aware word boundaries: not preceded/followed by any Latin letter (incl. accented).
    // Lookahead also blocks CJK/kana so single-kanji entries (e.g. 木) don't match inside
    // larger compounds (e.g. 木曜日). Lookbehind stays Latin-only — Japanese text commonly
    // places kanji after hiragana particles and we still want those to match.
    const regex = new RegExp(`(?<![a-zA-ZÀ-ÿœŒ])(${pattern})(?![a-zA-ZÀ-ÿœŒ\u3040-\u30ff\u4e00-\u9fff])`, "gu")

    const parts: React.ReactNode[] = []
    let lastIndex = 0
    let match: RegExpExecArray | null
    let n = 0

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index))
        }
        const matched = match[0]
        const translation = vocabMap.get(matched.toLowerCase()) ?? ""
        parts.push(
            <button
                key={`${keyPrefix}v${n++}`}
                onClick={e => onVocabClick(matched, translation, e.currentTarget.getBoundingClientRect())}
                className="text-indigo-600 underline decoration-dotted underline-offset-2 cursor-pointer"
            >
                {matched}
            </button>
        )
        lastIndex = match.index + matched.length
    }
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex))
    }
    return parts
}

/** Kept for backward compatibility — renders **bold** only, no vocab. */
export function renderBold(text: string, keyPrefix = "b"): React.ReactNode[] {
    return renderRichText(text, keyPrefix)
}

/**
 * Renders a single line of text with **bold** markers and optional inline vocab highlights.
 * Returns inline nodes (no wrapping element) — suitable for <p> or <span> content.
 */
export function renderInline(
    text: string,
    opts: { inlineVocab?: InlineVocabEntry[]; onVocabClick?: VocabClickHandler } = {}
): React.ReactNode[] {
    const vocabMap = opts.inlineVocab && opts.onVocabClick
        ? new Map(opts.inlineVocab.map(e => [e.word.toLowerCase(), e.translation]))
        : undefined
    return renderRichText(text, "il-", vocabMap, opts.onVocabClick)
}

/**
 * Splits a trimmed line at its widest whitespace gap (≥4 spaces).
 * Returns null if no significant column gap is found.
 * Normalises remaining internal whitespace (multi-spaces → single space).
 */
function splitAtWidestGap(line: string): [string, string] | null {
    const trimmed = line.trim()
    if (!trimmed) return null
    let bestLen = 0, bestStart = -1, i = 0
    while (i < trimmed.length) {
        if (trimmed[i] === " ") {
            const start = i
            while (i < trimmed.length && trimmed[i] === " ") i++
            const len = i - start
            if (len > bestLen) { bestLen = len; bestStart = start }
        } else i++
    }
    if (bestLen < 4 || bestStart === 0) return null
    const left = trimmed.slice(0, bestStart).replaceAll(/ {2,}/g, " ")
    const right = trimmed.slice(bestStart + bestLen).replaceAll(/ {2,}/g, " ")
    if (!right) return null
    return [left, right]
}

/** Renders a space-aligned table block as a responsive two-column grid. */
function renderTableBlock(
    block: string,
    blockKey: string,
    vocabMap?: Map<string, string>,
    onVocabClick?: VocabClickHandler
): React.ReactNode {
    const lines = block.split("\n")
    return (
        <div key={blockKey} className="bg-gray-50 rounded-lg px-3 py-2.5 flex flex-col gap-1 dark:bg-gray-700/50">
            {lines.map((line, i) => {
                const key = `${blockKey}-${i}`
                const cols = splitAtWidestGap(line)
                if (!cols) {
                    const trimmed = line.trim()
                    if (!trimmed) return null
                    return (
                        <p key={key} className="text-sm font-medium text-gray-700 mt-1 first:mt-0 dark:text-gray-300 whitespace-pre-wrap">
                            {renderRichText(trimmed, key, vocabMap, onVocabClick)}
                        </p>
                    )
                }
                return (
                    <div key={key} className="grid grid-cols-2 gap-x-3">
                        <span className="text-sm text-gray-800 dark:text-white">{renderRichText(cols[0], key + "l", vocabMap, onVocabClick)}</span>
                        <span className="text-sm text-gray-800 dark:text-white">{renderRichText(cols[1], key + "r", vocabMap, onVocabClick)}</span>
                    </div>
                )
            })}
        </div>
    )
}

export interface RenderExplanationOptions {
    className?: string
    inlineVocab?: InlineVocabEntry[]
    onVocabClick?: VocabClickHandler
}

/**
 * Renders explanation text. Blank-line-separated blocks that contain
 * space-aligned columns are parsed into a responsive CSS grid.
 * Prose blocks render as normal paragraphs.
 * If inlineVocab + onVocabClick are provided, matching words are highlighted.
 */
export function renderExplanation(text: string, options: RenderExplanationOptions | string = {}): React.ReactNode {
    // Accept legacy string signature for className-only callers
    const opts: RenderExplanationOptions = typeof options === "string" ? { className: options } : options
    const { className = "", inlineVocab, onVocabClick } = opts

    const vocabMap = inlineVocab && onVocabClick
        ? new Map(inlineVocab.map(e => [e.word.toLowerCase(), e.translation]))
        : undefined

    const blocks = text.split(/\n\n+/)
    return (
        <div className={`flex flex-col gap-3 ${className}`.trim()}>
            {blocks.map((block) => {
                const key = block.slice(0, 40)
                const isTable = block.split("\n").some(l => / {3,}/.test(l))
                if (isTable) return renderTableBlock(block, key, vocabMap, onVocabClick)
                return (
                    <p key={key} className="text-sm text-gray-700 dark:text-white leading-relaxed whitespace-pre-wrap">
                        {renderRichText(block, `${key}-`, vocabMap, onVocabClick)}
                    </p>
                )
            })}
        </div>
    )
}
