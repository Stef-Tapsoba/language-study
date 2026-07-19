/// <reference types="node" />
/**
 * scripts/lib/ttsGenerator.ts
 *
 * Shared core for the per-language TTS batch-generation scripts
 * (scripts/generate-tts-audio-{fr,es,it,ko,ja}.ts). Builds jobs from vocab
 * (word + example), verb infinitives, and deduplicated grammar-lesson inline
 * vocab, then synthesizes and writes each as a static MP3 via Google Cloud TTS.
 *
 * Idempotent: skips any file that already exists. Known limitation: if an
 * existing item's text changes but its id (or, for inline vocab, its exact
 * word text) doesn't, the stale .mp3 won't auto-regenerate — delete the file
 * manually to force a redo.
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs"
import path from "node:path"
import { hashText } from "../../src/utils/hash"
import type { VocabItem, Verb, GrammarLesson } from "../../src/types"

export interface Job {
    id: string
    variant: "word" | "example" | "verb" | "inline"
    text: string
}

export function buildVocabJobs(items: VocabItem[]): Job[] {
    return items.flatMap((item) => [
        { id: item.id, variant: "word" as const, text: item.word },
        { id: item.id, variant: "example" as const, text: item.example.speakText ?? item.example.native },
    ])
}

export function buildVerbJobs(verbs: Verb[]): Job[] {
    return verbs.map((verb) => ({ id: verb.id, variant: "verb" as const, text: verb.infinitive }))
}

export function buildInlineVocabJobs(lessons: GrammarLesson[]): Job[] {
    const uniqueWords = new Map<string, string>() // word text -> hash id, deduped
    for (const lesson of lessons) {
        for (const entry of lesson.inlineVocab ?? []) {
            if (!uniqueWords.has(entry.word)) uniqueWords.set(entry.word, hashText(entry.word))
        }
    }
    return [...uniqueWords.entries()].map(([word, id]) => ({ id, variant: "inline" as const, text: word }))
}

export interface GenerateConfig {
    /** App langId, e.g. "fr" — used only for log messages. */
    langId: string
    /** BCP-47 language tag Google TTS should read the text as, e.g. "fr-FR". */
    languageCode: string
    /** Google Cloud TTS voice name, e.g. "fr-FR-Neural2-A". */
    voiceName: string
    apiKey: string | undefined
    outDir: string
    items: VocabItem[]
    verbs: Verb[]
    lessons: GrammarLesson[]
}

async function synthesize(text: string, languageCode: string, voiceName: string, apiKey: string): Promise<string> {
    const res = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                input: { text },
                voice: { languageCode, name: voiceName },
                audioConfig: { audioEncoding: "MP3" },
            }),
        }
    )
    if (!res.ok) {
        const body = await res.text()
        throw new Error(`HTTP ${res.status}: ${body}`)
    }
    const data = (await res.json()) as { audioContent: string }
    return data.audioContent
}

export async function runGeneration(config: GenerateConfig): Promise<void> {
    const { langId, languageCode, voiceName, apiKey, outDir, items, verbs, lessons } = config

    if (!apiKey) {
        console.error(`[${langId}] Missing GOOGLE_TTS_API_KEY in .env.local — see .env.example.`)
        process.exitCode = 1
        return
    }

    mkdirSync(outDir, { recursive: true })

    const jobs = [...buildVocabJobs(items), ...buildVerbJobs(verbs), ...buildInlineVocabJobs(lessons)]

    let generated = 0
    let skipped = 0
    let failed = 0
    let totalChars = 0

    for (const job of jobs) {
        const outPath = path.join(outDir, `${job.id}-${job.variant}.mp3`)
        if (existsSync(outPath)) {
            skipped++
            continue
        }
        try {
            const audioContent = await synthesize(job.text, languageCode, voiceName, apiKey)
            writeFileSync(outPath, Buffer.from(audioContent, "base64"))
            generated++
            totalChars += job.text.length
        } catch (err) {
            failed++
            console.error(`[${langId}] FAILED [${job.id}-${job.variant}]: ${err instanceof Error ? err.message : err}`)
        }
    }

    console.log(
        `[${langId}] Done. vocabItems=${items.length} verbs=${verbs.length} lessons=${lessons.length} ` +
        `jobs=${jobs.length} generated=${generated} skipped=${skipped} failed=${failed} totalChars=${totalChars}`
    )
    if (failed > 0) process.exitCode = 1
}
