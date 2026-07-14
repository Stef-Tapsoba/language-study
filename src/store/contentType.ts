// store/contentType.ts — Infer a lesson's ContentType from its content ID.
//
// Content IDs follow the documented convention (src/data/CONTENT_CONVENTIONS.md):
//   {langId}-{type}-{level}-{n}     e.g. "fr-g-a1-3", "ja-v-a2-12", "ko-vb-b1-4"
// Quiz sub-ids append a suffix ("fr-r-a1-1-q2") which does not affect the type segment.
//
// Used to backfill completedByType for pre-v5 progress blobs and to type
// legacy flat snapshots at Supabase upload time (lessonRowsFromFlat).

import type { ContentType } from "./IProgressStorage"

const CODE_MAP: Record<string, ContentType> = {
    g:  "grammar",
    v:  "vocab",
    vb: "verb",
    r:  "reading",
    l:  "listening",
    c:  "culture",
    s:  "speaking",
}

/**
 * Infer the ContentType from a content ID's type segment.
 * Falls back to "grammar" for unrecognised IDs — a valid value under the
 * lesson_completions CHECK constraint, matching the previous behaviour.
 */
export function inferContentTypeFromId(id: string): ContentType {
    const segments = id.split("-")
    // Conventional position: segment 1. Scan forward from there so hypothetical
    // hyphenated langIds still resolve (level tokens "a1".."c1", numbers, and
    // "qN" suffixes cannot collide with the type codes).
    for (let i = 1; i < segments.length; i++) {
        const type = CODE_MAP[segments[i]]
        if (type) return type
    }
    return "grammar"
}
