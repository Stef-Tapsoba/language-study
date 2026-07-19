// utils/hash.ts — deterministic string hash, identical in Node (batch scripts) and the browser.
// Used to derive a stable filename for content that has no id of its own (e.g. inline vocab
// words in grammar lessons) — same input text always produces the same hash, so the batch
// generation script and the runtime playback code independently agree on the same filename.

/** djb2 hash, returned as a hex string. Pure JS, no crypto dependency, synchronous. */
export function hashText(text: string): string {
    let hash = 5381
    for (let i = 0; i < text.length; i++) {
        hash = ((hash << 5) + hash + text.charCodeAt(i)) >>> 0
    }
    return hash.toString(16)
}
