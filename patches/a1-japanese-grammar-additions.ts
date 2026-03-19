// a1-japanese-grammar-additions.ts
// INSTRUCTIONS:
// 1. REPLACE ja-g-a1-3 (Katakana) with jaGrammarKatakana below
// 2. REPLACE ja-g-a1-17 (が vs は) with jaGrammarGaVsWa below (content unchanged, just note where it moves in units)
// 3. ADD jaGrammarDaysNote as a new grammar entry or folded into the Numbers unit explanation
//    (it's a short explanation about why days use kanji — not a full lesson, more a note)
// Note: ja-g-a1-16 (Counters) already exists and is fine as a standalone — just needs its own unit

import { GrammarLesson } from "../../../types"

// ── REPLACEMENT: ja-g-a1-3 — Katakana ───────────────────────────────────────
// Rewrites the explanation to show an explicit character table mapping each
// katakana character to its hiragana equivalent, mirroring the hiragana lessons.

export const jaGrammarKatakana: GrammarLesson = {
    id: "ja-g-a1-3",
    level: "A1",
    title: "Katakana: ア-row through ン",
    explanation: `Katakana is the second of Japan's two phonetic syllabaries. It has exactly the same 46 sounds as hiragana, but different character shapes. The two scripts are interchangeable in pronunciation — only the use differs.

WHEN KATAKANA IS USED:
  • Foreign loanwords: コーヒー (koohii = coffee), テレビ (terebi = TV)
  • Foreign names and place names: アメリカ (Amerika), マリア (Maria)
  • Scientific and technical terms
  • Emphasis — like italics in English

KATAKANA CHARACTER TABLE (with hiragana equivalent):
Each row shows: katakana → hiragana → sound

ア行 (a-row):
  ア → あ (a)    イ → い (i)    ウ → う (u)    エ → え (e)    オ → お (o)

カ行 (ka-row):
  カ → か (ka)   キ → き (ki)   ク → く (ku)   ケ → け (ke)   コ → こ (ko)

サ行 (sa-row):
  サ → さ (sa)   シ → し (shi)  ス → す (su)   セ → せ (se)   ソ → そ (so)

タ行 (ta-row):
  タ → た (ta)   チ → ち (chi)  ツ → つ (tsu)  テ → て (te)   ト → と (to)

ナ行 (na-row):
  ナ → な (na)   ニ → に (ni)   ヌ → ぬ (nu)   ネ → ね (ne)   ノ → の (no)

ハ行 (ha-row):
  ハ → は (ha)   ヒ → ひ (hi)   フ → ふ (fu)   ヘ → へ (he)   ホ → ほ (ho)

マ行 (ma-row):
  マ → ま (ma)   ミ → み (mi)   ム → む (mu)   メ → め (me)   モ → も (mo)

ヤ行 (ya-row — 3 only):
  ヤ → や (ya)              ユ → ゆ (yu)              ヨ → よ (yo)

ラ行 (ra-row):
  ラ → ら (ra)   リ → り (ri)   ル → る (ru)   レ → れ (re)   ロ → ろ (ro)

ワ行 + ン:
  ワ → わ (wa)   ヲ → を (wo — object particle only)   ン → ん (n)

SPECIAL KATAKANA RULES:
ー (long vowel mark): extends the preceding vowel. Used constantly in loanwords.
  コーヒー → ko-o-hi-i → "coffee"     ビール → bi-i-ru → "beer"

Double consonants: small ッ doubles the next consonant (same as っ in hiragana).
  ベッド (beddo = bed)    サッカー (sakkaa = soccer)

Combinations for sounds not in Japanese: katakana can combine characters for
foreign sounds that don't exist in Japanese.
  ファ (fa)    ティ (ti)    ウィ (wi)    ヴ (v-sound)`,
    examples: [
        { native: "ア・イ・ウ・エ・オ → あ・い・う・え・お", romanized: "a i u e o", translation: "The ア-row — same sounds as あいうえお, different shapes" },
        { native: "カ・キ・ク・ケ・コ → か・き・く・け・こ", romanized: "ka ki ku ke ko", translation: "The カ-row — same sounds as かきくけこ" },
        { native: "コーヒー", romanized: "koohii", translation: "Coffee — note ー extends the vowel" },
        { native: "レストラン", romanized: "resutoran", translation: "Restaurant (from French/English)" },
        { native: "テレビ", romanized: "terebi", translation: "Television (from English 'TV')" },
        { native: "アイスクリーム", romanized: "aisu kuriimu", translation: "Ice cream — notice how English sounds are adapted" },
    ]
}

// ── NOTE: Days of the week use kanji — explanation to embed in Numbers unit ──
// This is not a standalone grammar lesson but explanatory text to include
// in the grammar lesson for Numbers (ja-g-a1-6) or as a note in the Days
// vocab entries' examples. The text below can be added to ja-g-a1-6's
// explanation, or surfaced as a callout in the unit description.

export const jaDaysKanjiNote = `
NOTE — WHY DAYS OF THE WEEK USE KANJI:
The days of the week in Japanese (月曜日, 火曜日, 水曜日...) are always written in
kanji in real Japanese — on calendars, phones, schedules, signs, and all written
communication. Unlike many everyday words that have hiragana alternatives, days
of the week are never written in hiragana in practice.

Each day is named after a celestial body or element — a system inherited from
Chinese astronomy:
  月曜日 (げつようび) — 月 moon/Monday
  火曜日 (かようび)  — 火 fire/Tuesday
  水曜日 (すいようび) — 水 water/Wednesday
  木曜日 (もくようび) — 木 wood/Thursday
  金曜日 (きんようび) — 金 gold/Friday
  土曜日 (どようび)  — 土 earth/Saturday
  日曜日 (にちようび) — 日 sun/Sunday

You are learning these now in kanji because that is the only form you will
encounter in real Japanese life. The readings (romanized column) tell you
exactly how to say them.`
