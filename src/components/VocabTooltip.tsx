// components/VocabTooltip.tsx — Floating word-definition tooltip for grammar explanations

export interface ActiveVocabWord {
    word: string
    translation: string
    x: number       // left edge (viewport px)
    y: number       // anchor y (viewport px) — top of tooltip when below, bottom of word when above
    above: boolean  // true → position below the anchor; false → above
}

export const TOOLTIP_W = 200

interface Props {
    activeWord: ActiveVocabWord | null
    onDismiss: () => void
}

export function VocabTooltip({ activeWord, onDismiss }: Readonly<Props>) {
    if (!activeWord) return null
    return (
        <>
            <button
                className="fixed inset-0 z-50 w-full h-full cursor-default bg-transparent"
                aria-label="Close word definition"
                onClick={onDismiss}
            />
            <div
                role="tooltip"
                style={{
                    position: "fixed",
                    left: activeWord.x,
                    top: activeWord.above ? undefined : activeWord.y,
                    bottom: activeWord.above ? window.innerHeight - activeWord.y : undefined,
                    width: TOOLTIP_W,
                    zIndex: 51,
                }}
                className="rounded-xl bg-white shadow-xl border border-gray-200 px-3 py-2.5"
            >
                <p className="font-bold text-gray-900 text-sm">{activeWord.word}</p>
                <p className="text-xs text-gray-500 mt-0.5">{activeWord.translation}</p>
            </div>
        </>
    )
}
