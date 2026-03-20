// utils/renderExplanation.tsx — Shared renderer for grammar explanation strings.
// Handles **bold** markers and space-aligned two-column tables.

/** Renders **bold** markers as <strong> elements. */
export function renderBold(text: string, keyPrefix = "b"): React.ReactNode[] {
    return text.split("**").map((part, i) =>
        i % 2 === 1
            ? <strong key={`${keyPrefix}${i}`} className="font-semibold text-gray-900">{part}</strong>
            : part
    )
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
function renderTableBlock(block: string, blockKey: string): React.ReactNode {
    const lines = block.split("\n")
    return (
        <div key={blockKey} className="bg-gray-50 rounded-lg px-3 py-2.5 flex flex-col gap-1">
            {lines.map((line, i) => {
                const key = `${blockKey}-${i}`
                const cols = splitAtWidestGap(line)
                if (!cols) {
                    const trimmed = line.trim()
                    if (!trimmed) return null
                    return (
                        <p key={key} className="text-sm font-medium text-gray-700 mt-1 first:mt-0">
                            {renderBold(trimmed, key)}
                        </p>
                    )
                }
                return (
                    <div key={key} className="grid grid-cols-2 gap-x-3">
                        <span className="text-sm text-gray-800">{renderBold(cols[0], key + "l")}</span>
                        <span className="text-sm text-gray-800">{renderBold(cols[1], key + "r")}</span>
                    </div>
                )
            })}
        </div>
    )
}

/**
 * Renders explanation text. Blank-line-separated blocks that contain
 * space-aligned columns are parsed into a responsive CSS grid.
 * Prose blocks render as normal paragraphs.
 */
export function renderExplanation(text: string, className = ""): React.ReactNode {
    const blocks = text.split(/\n\n+/)
    return (
        <div className={`flex flex-col gap-3 ${className}`.trim()}>
            {blocks.map((block) => {
                const key = block.slice(0, 40)
                const isTable = block.split("\n").some(l => / {3,}/.test(l))
                if (isTable) return renderTableBlock(block, key)
                return (
                    <p key={key} className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {renderBold(block, `${key}-`)}
                    </p>
                )
            })}
        </div>
    )
}
