/// <reference types="node" />
/**
 * scripts/generate-tts-audio-fr.ts
 *
 * Pre-generates Google Cloud TTS audio for French vocab (word + example sentence),
 * verb infinitives, and grammar-lesson inline-vocab words, and writes them as static
 * MP3 files under public/audio/fr/. See scripts/lib/ttsGenerator.ts for the shared
 * generation logic used by all per-language scripts.
 *
 * Run with:  npx vite-node scripts/generate-tts-audio-fr.ts
 * Requires GOOGLE_TTS_API_KEY in .env.local (see .env.example).
 */

import path from "node:path"
import dotenv from "dotenv"

import { a1Vocab } from "../src/data/french/vocab/a1"
import { a2Vocab } from "../src/data/french/vocab/a2"
import { b1Vocab } from "../src/data/french/vocab/b1"
import { b2Vocab } from "../src/data/french/vocab/b2"
import { c1Vocab } from "../src/data/french/vocab/c1"
import { a1Verbs } from "../src/data/french/verbs/a1"
import { a2Verbs } from "../src/data/french/verbs/a2"
import { b1Verbs } from "../src/data/french/verbs/b1"
import { b2Verbs } from "../src/data/french/verbs/b2"
import { c1Verbs } from "../src/data/french/verbs/c1"
import { a1Grammar } from "../src/data/french/grammar/a1"
import { a2Grammar } from "../src/data/french/grammar/a2"
import { b1Grammar } from "../src/data/french/grammar/b1/index"
import { b2Grammar } from "../src/data/french/grammar/b2"
import { c1Grammar } from "../src/data/french/grammar/c1"
import { runGeneration } from "./lib/ttsGenerator"

dotenv.config({ path: path.resolve(__dirname, "../.env.local") })

runGeneration({
    langId: "fr",
    languageCode: "fr-FR",
    voiceName: "fr-FR-Neural2-A",
    apiKey: process.env.GOOGLE_TTS_API_KEY,
    outDir: path.resolve(__dirname, "../public/audio/fr"),
    items: [...a1Vocab, ...a2Vocab, ...b1Vocab, ...b2Vocab, ...c1Vocab],
    verbs: [...a1Verbs, ...a2Verbs, ...b1Verbs, ...b2Verbs, ...c1Verbs],
    lessons: [...a1Grammar, ...a2Grammar, ...b1Grammar, ...b2Grammar, ...c1Grammar],
})
