// components/VocabAccordionRow.tsx — Shared collapsible row for a single vocab
// item: word + romanization + translation + category badge, expanding to show
// the example sentence, dictionary form, and a mark-complete action.
//
// Used by both the Vocab browse tab and a Unit page's vocab list — these were
// previously two near-identical, independently-drifting local components.
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { MarkCompleteButton } from "./MarkCompleteButton"
import { SpeakButton } from "./SpeakButton"
import { VocabDetail } from "./VocabDetail"
import type { VocabItem } from "../types"

export function VocabAccordionRow({
    item,
    done,
    langId,
    onComplete,
    markLabel = "Mark as learned",
}: Readonly<{
    item: VocabItem
    done: boolean
    langId: string
    onComplete: () => void
    markLabel?: string
}>) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={item.id} className={`border rounded-2xl px-4 bg-surface-card ${done ? "border-grammar-border" : "border-border-default hover:border-grammar"}`}>
                <AccordionTrigger className="py-3 hover:no-underline">
                    <div className="flex items-center gap-3 w-full pr-2">
                        <span className={`text-base ${done ? "text-grammar" : "text-text-ter"}`} aria-hidden="true">
                            {done ? "✓" : "○"}
                        </span>
                        <span className="sr-only">{done ? "Learned" : "Not yet learned"}</span>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-text-pri whitespace-nowrap">{item.word}</span>
                                <SpeakButton text={item.word} langId={langId} id={item.id} variant="word" />
                            </div>
                            {item.romanized && (
                                <span className="text-xs text-indigo-500">{item.romanized}</span>
                            )}
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-0.5">
                            <span className="text-sm text-text-sec text-right">{item.translation}</span>
                            <span className="text-xs bg-surface-elevated text-text-sec rounded-full px-2 py-0.5">
                                {item.category}
                            </span>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="pb-1">
                        <VocabDetail item={item} langId={langId} variant="row" />
                        <MarkCompleteButton done={done} onClick={onComplete} label={markLabel} />
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
