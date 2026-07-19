/// <reference types="node" />
/**
 * scripts/generate-tts-audio-it.ts
 *
 * Pre-generates Google Cloud TTS audio for Italian vocab (word + example sentence),
 * verb infinitives, and grammar-lesson inline-vocab words, and writes them as static
 * MP3 files under public/audio/it/. See scripts/lib/ttsGenerator.ts for the shared
 * generation logic used by all per-language scripts.
 *
 * Run with:  npx vite-node scripts/generate-tts-audio-it.ts
 * Requires GOOGLE_TTS_API_KEY in .env.local (see .env.example).
 */

import path from "node:path"
import dotenv from "dotenv"

import { a1Vocab } from "../src/data/italian/vocab/a1"
import { a2Vocab } from "../src/data/italian/vocab/a2"
import { b1Vocab } from "../src/data/italian/vocab/b1"
import { b2Vocab } from "../src/data/italian/vocab/b2"
import { c1Vocab } from "../src/data/italian/vocab/c1"
import { a1Verbs } from "../src/data/italian/verbs/a1"
import { a2Verbs } from "../src/data/italian/verbs/a2"
import { b1Verbs } from "../src/data/italian/verbs/b1"
import { b2Verbs } from "../src/data/italian/verbs/b2"
import { c1Verbs } from "../src/data/italian/verbs/c1"
import { a1Grammar } from "../src/data/italian/grammar/a1/index"
import { a2Grammar } from "../src/data/italian/grammar/a2/index"
import { b1Grammar } from "../src/data/italian/grammar/b1/index"
import { b2Grammar } from "../src/data/italian/grammar/b2"
import { c1Grammar } from "../src/data/italian/grammar/c1"
import { runGeneration } from "./lib/ttsGenerator"

dotenv.config({ path: path.resolve(__dirname, "../.env.local") })

runGeneration({
    langId: "it",
    languageCode: "it-IT",
    voiceName: "it-IT-Neural2-A",
    apiKey: process.env.GOOGLE_TTS_API_KEY,
    outDir: path.resolve(__dirname, "../public/audio/it"),
    items: [...a1Vocab, ...a2Vocab, ...b1Vocab, ...b2Vocab, ...c1Vocab],
    verbs: [...a1Verbs, ...a2Verbs, ...b1Verbs, ...b2Verbs, ...c1Verbs],
    lessons: [...a1Grammar, ...a2Grammar, ...b1Grammar, ...b2Grammar, ...c1Grammar],
})
