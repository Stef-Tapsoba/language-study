// components/VocabDetail.tsx — Shared "example sentence + dictionary form" block
// for a single VocabItem. Used by every surface that expands a vocab item's
// detail: the Vocab browse tab, a Unit page's vocab list (via
// VocabAccordionRow), Flashcards, and the break-return Review page.
//
// Previously each of those four surfaces re-implemented this block
// independently, so a change (e.g. adding dictionaryForm support) had to be
// applied in four places by hand — and it wasn't. Now it only lives here.
import { SpeakButton } from "./SpeakButton"
import type { VocabItem } from "../types"

export function VocabDetail({
    item,
    langId,
    variant = "row",
    hideExampleTranslation = false,
}: Readonly<{
    item: VocabItem
    langId: string
    /** "row" = left-aligned box (Vocab browse tab / Unit page accordions). "card" = centered, for flip-card backs (Flashcards / Review). */
    variant?: "row" | "card"
    /** Hide the example's English gloss — used at B2+ where translations progressively disappear. */
    hideExampleTranslation?: boolean
}>) {
    const isCard = variant === "card"

    return (
        <>
            <div className={`rounded-xl p-3 relative ${isCard ? "bg-surface-card/80 text-center px-4 py-2" : "bg-surface-elevated mb-3"}`}>
                <p className={isCard ? "text-sm text-text-sec" : "text-sm font-medium text-text-pri"}>{item.example.native}</p>
                {item.example.romanized && (
                    <p className={`text-xs mt-0.5 ${isCard ? "text-indigo-400" : "text-indigo-500"}`}>{item.example.romanized}</p>
                )}
                {!hideExampleTranslation && (
                    <p className={`text-xs mt-0.5 ${isCard ? "text-text-ter" : "text-text-sec"}`}>{item.example.translation}</p>
                )}
                <SpeakButton
                    text={item.example.native}
                    langId={langId}
                    id={item.id}
                    variant="example"
                    className={`absolute ${isCard ? "top-1 right-1" : "top-1.5 right-1.5"}`}
                />
            </div>
            {item.dictionaryForm && (
                <p className={`text-xs ${isCard ? "text-indigo-400 text-center" : "text-text-ter mb-3"}`}>
                    Dictionary form: {isCard ? item.dictionaryForm : <span className="font-medium text-text-sec">{item.dictionaryForm}</span>}
                </p>
            )}
        </>
    )
}
