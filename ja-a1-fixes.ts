// ─────────────────────────────────────────────────────────────────────────────
// JAPANESE A1 FIXES
// Three things addressed:
//   1. Wire ja-g-a1-0 (orientation lesson — already in a1-japanese-orientation.ts)
//      into unit 1 alongside the existing Hiragana Part 1 lesson
//   2. New grammar lesson  ja-g-a1-15  — Likes & Dislikes (好き/嫌い/好きじゃない)
//   3. New vocab items     ja-v-a1-151 through ja-v-a1-155 — 好き/嫌い and companions
//   4. Three unit patches:
//      u1  — add ja-g-a1-0 to grammarIds (orientation before hiragana)
//      u2  — remove stray を question (taught in u10, not u2)
//      u16 — NEW unit for likes & dislikes (order 16)
//      u14 — bump order 14 → 15
//      u15 — bump order 15 → 16 (kanji stays last)
//
// NOTE: ja-g-a1-0 (How Japanese Works) already exists in
//       a1-japanese-orientation.ts from a previous session.
//       Add it to the grammar array BEFORE ja-g-a1-1 so it is
//       lesson 0 — no existing IDs need renumbering.
// ─────────────────────────────────────────────────────────────────────────────

import { GrammarLesson, LessonUnit, VocabItem } from "../../../types"


// ─────────────────────────────────────────────────────────────────────────────
// 1.  NEW GRAMMAR LESSON — Likes & Dislikes
//     Append to the end of a1Grammar in src/data/japanese/grammar/a1.ts
//     (after ja-g-a1-14, making it ja-g-a1-15)
// ─────────────────────────────────────────────────────────────────────────────

export const newGrammarLesson: GrammarLesson = {
    id: "ja-g-a1-15",
    level: "A1",
    title: "Likes & Dislikes: 好き / 嫌い",
    explanation: `好き (suki) and 嫌い (kirai) express liking and disliking in Japanese. They are na-adjectives — they use な when placed before a noun, and they follow the XはYが好きです pattern.

STRUCTURE:
  [Person] は [Thing] が 好き です。= [Person] likes [Thing].
  [Person] は [Thing] が 嫌い です。= [Person] dislikes [Thing].

KEY POINT — が not を:
Japanese uses が (not を) to mark the thing you like. This is different from English where "like" takes a direct object. Don't say ×コーヒーを好きです — say ○コーヒーが好きです.

DEGREES:
  大好き (daisuki) = love / really like
  好き (suki) = like
  あまり好きじゃない (amari suki ja nai) = don't really like
  嫌い (kirai) = dislike
  大嫌い (daikirai) = really dislike / hate

QUESTIONS:
  〜が好きですか？ = Do you like ~?
  どんな〜が好きですか？ = What kind of ~ do you like?

NOTE: 好き and 嫌い can also describe activities when followed by の or combined with verb nominalisation — but at A1, just use them with nouns.`,
    examples: [
        { native: "コーヒーが好きです。", romanized: "Koohii ga suki desu.", translation: "I like coffee. (が marks the thing liked)" },
        { native: "さかなが嫌いです。", romanized: "Sakana ga kirai desu.", translation: "I dislike fish." },
        { native: "すしが大好きです！", romanized: "Sushi ga daisuki desu!", translation: "I love sushi!" },
        { native: "やさいはあまり好きじゃないです。", romanized: "Yasai wa amari suki ja nai desu.", translation: "I don't really like vegetables." },
        { native: "どんな音楽が好きですか？", romanized: "Donna ongaku ga suki desu ka?", translation: "What kind of music do you like?" },
        { native: "スポーツが好きですか？", romanized: "Supootsu ga suki desu ka?", translation: "Do you like sport?" },
        { native: "日本語の勉強が好きです。", romanized: "Nihongo no benkyou ga suki desu.", translation: "I like studying Japanese." },
    ]
}


// ─────────────────────────────────────────────────────────────────────────────
// 2.  NEW VOCAB — 好き/嫌い and common like/dislike targets not yet in vocab
//     Append after ja-v-a1-150 in src/data/japanese/vocab/a1.ts
// ─────────────────────────────────────────────────────────────────────────────

export const newVocab: VocabItem[] = [
    {
        id: "ja-v-a1-151", level: "A1",
        word: "好き", romanized: "suki",
        translation: "like / fond of (na-adjective)",
        category: "Adjectives",
        example: { native: "ねこが好きです。", romanized: "Neko ga suki desu.", translation: "I like cats." }
    },
    {
        id: "ja-v-a1-152", level: "A1",
        word: "嫌い", romanized: "kirai",
        translation: "dislike / hate (na-adjective)",
        category: "Adjectives",
        example: { native: "からい食べ物が嫌いです。", romanized: "Karai tabemono ga kirai desu.", translation: "I dislike spicy food." }
    },
    {
        id: "ja-v-a1-153", level: "A1",
        word: "大好き", romanized: "daisuki",
        translation: "love / really like",
        category: "Adjectives",
        example: { native: "日本語が大好きです！", romanized: "Nihongo ga daisuki desu!", translation: "I love Japanese!" }
    },
    {
        id: "ja-v-a1-154", level: "A1",
        word: "音楽", romanized: "ongaku",
        translation: "music",
        category: "Hobbies",
        example: { native: "音楽を聴くのが好きです。", romanized: "Ongaku wo kiku no ga suki desu.", translation: "I like listening to music." }
    },
    {
        id: "ja-v-a1-155", level: "A1",
        word: "スポーツ", romanized: "supootsu",
        translation: "sport(s)",
        category: "Hobbies",
        example: { native: "スポーツが好きですか？", romanized: "Supootsu ga suki desu ka?", translation: "Do you like sport?" }
    },
]


// ─────────────────────────────────────────────────────────────────────────────
// 3.  UNIT PATCHES
//     Replace matching units in src/data/japanese/units/a1.ts
// ─────────────────────────────────────────────────────────────────────────────

export const unitPatches: LessonUnit[] = [

    // ── PATCH u1: add ja-g-a1-0 (orientation) to grammarIds ──
    // Change: grammarIds ["ja-g-a1-1"] → ["ja-g-a1-0", "ja-g-a1-1"]
    // Change: title and description updated to reflect orientation content
    // Change: two test questions added to cover the orientation lesson
    {
        id: "ja-a1-u1",
        level: "A1",
        order: 1,
        title: "How Japanese Works & Hiragana Part 1",
        description: "Get the big picture of how Japanese is built — scripts, word order, particles, politeness — then start hiragana: あ-row through な-row.",
        grammarIds: ["ja-g-a1-0", "ja-g-a1-1"],
        vocabIds: ["ja-v-a1-1", "ja-v-a1-2", "ja-v-a1-7", "ja-v-a1-8"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-1-1", level: "A1", prompt: "What is the basic word order in Japanese?", options: ["SVO (Subject-Verb-Object)", "VSO (Verb-Subject-Object)", "SOV (Subject-Object-Verb)", "OVS (Object-Verb-Subject)"], answer: "SOV (Subject-Object-Verb)" },
            { id: "ja-uq-a1-1-2", level: "A1", prompt: "Which writing system is used for foreign loanwords?", options: ["Hiragana", "Kanji", "Romaji", "Katakana"], answer: "Katakana" },
            { id: "ja-uq-a1-1-3", level: "A1", prompt: "Which hiragana represents the sound 'ka'?", options: ["か", "き", "く", "こ"], answer: "か" },
            { id: "ja-uq-a1-1-4", level: "A1", prompt: "What sound does 'し' make?", options: ["si", "shi", "chi", "su"], answer: "shi" },
            { id: "ja-uq-a1-1-5", level: "A1", prompt: "What sound does 'つ' make?", options: ["tu", "ti", "tsu", "chi"], answer: "tsu" },
            { id: "ja-uq-a1-1-6", level: "A1", prompt: "In Japanese, what do particles like は, を, and に do?", options: ["They are verb endings", "They mark the role of nouns in a sentence", "They are question words", "They show tense"], answer: "They mark the role of nouns in a sentence" },
        ]
    },

    // ── PATCH u2: remove stray を question (particle not taught until u10) ──
    // Change: remove ja-uq-a1-2-4 ("What is を primarily used for?")
    //         replace with a question actually about u2 content (hiragana + greetings)
    {
        id: "ja-a1-u2",
        level: "A1",
        order: 2,
        title: "Hiragana Part 2 & Basic Phrases",
        description: "Complete hiragana: は-row through わ-row + ん; learn basic expressions.",
        grammarIds: ["ja-g-a1-2", "ja-g-a1-5"],
        vocabIds: ["ja-v-a1-1", "ja-v-a1-2", "ja-v-a1-3", "ja-v-a1-4", "ja-v-a1-5", "ja-v-a1-9", "ja-v-a1-10", "ja-v-a1-11", "ja-v-a1-12"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-2-1", level: "A1", prompt: "What sound does 'ふ' make?", options: ["hu", "fu", "pu", "bu"], answer: "fu" },
            { id: "ja-uq-a1-2-2", level: "A1", prompt: "Which character represents the nasal 'n' sound at the end of a syllable?", options: ["の", "ぬ", "ん", "な"], answer: "ん" },
            { id: "ja-uq-a1-2-3", level: "A1", prompt: "How do you say 'Good morning' (formal) in Japanese?", options: ["こんにちは", "こんばんは", "おはようございます", "さようなら"], answer: "おはようございます" },
            // ← REPLACED: was a を particle question (not taught until u10)
            { id: "ja-uq-a1-2-4", level: "A1", prompt: "When は is used as a particle, how is it pronounced?", options: ["ha", "wa", "ba", "pa"], answer: "wa" },
            { id: "ja-uq-a1-2-5", level: "A1", prompt: "How do you say 'I'm sorry' (apology) in Japanese?", options: ["すみません", "ありがとう", "ごめんなさい", "どうぞ"], answer: "ごめんなさい" },
            { id: "ja-uq-a1-2-6", level: "A1", prompt: "What does 'はじめまして' mean?", options: ["Thank you", "Excuse me", "Nice to meet you", "Goodbye"], answer: "Nice to meet you" },
        ]
    },

    // ── PATCH u14: bump order 14 → 15 ──
    // Only order changes — all other content identical to existing unit
    {
        id: "ja-a1-u14",
        level: "A1",
        order: 15,  // <-- was 14
        title: "Wanting To Do: 〜たい (A1 Bridge)",
        description: "Express desires using たい — the bridge between A1 and A2 grammar.",
        grammarIds: ["ja-g-a1-13"],
        vocabIds: ["ja-v-a1-60", "ja-v-a1-70", "ja-v-a1-71", "ja-v-a1-104", "ja-v-a1-106", "ja-v-a1-110", "ja-v-a1-112", "ja-v-a1-147"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3", "ja-vb-a1-4", "ja-vb-a1-6"],
        testQuestions: [
            { id: "ja-uq-a1-14-1", level: "A1", prompt: "How do you say 'I want to eat sushi'?", options: ["すしを食べます。", "すしが食べたいです。", "すしを食べました。", "すしを食べません。"], answer: "すしが食べたいです。" },
            { id: "ja-uq-a1-14-2", level: "A1", prompt: "How is たい formed? Take the ます-form stem and...", options: ["add ない", "add たい", "add て", "add ました"], answer: "add たい" },
            { id: "ja-uq-a1-14-3", level: "A1", prompt: "How do you say 'I want to go to Japan'?", options: ["日本に行きます。", "日本に行きたいです。", "日本に行きました。", "日本に行きません。"], answer: "日本に行きたいです。" },
            { id: "ja-uq-a1-14-4", level: "A1", prompt: "What is the negative form of たいです?", options: ["たくないです", "たいじゃないです", "たいません", "たいでした"], answer: "たくないです" },
            { id: "ja-uq-a1-14-5", level: "A1", prompt: "How do you ask 'What do you want to do?'", options: ["何をしましたか？", "何がしたいですか？", "何をしますか？", "何をしていますか？"], answer: "何がしたいですか？" },
            { id: "ja-uq-a1-14-6", level: "A1", prompt: "たい can be used to express which person's desires directly?", options: ["Any person", "Third person only", "First person (speaker) only", "Second person only"], answer: "First person (speaker) only" },
        ]
    },

    // ── NEW u16: Likes & Dislikes ──
    // Sits between たい (u15) and Kanji (u17)
    // Order 16 — after the bridge, before the final kanji unit
    {
        id: "ja-a1-u16",
        level: "A1",
        order: 16,
        title: "Likes & Dislikes: 好き / 嫌い",
        description: "Learn to say what you like, love, and dislike — and finally understand the が pattern you've been seeing in examples throughout the course.",
        grammarIds: ["ja-g-a1-15"],
        vocabIds: [
            // The suki/kirai words themselves
            "ja-v-a1-151", // 好き
            "ja-v-a1-152", // 嫌い
            "ja-v-a1-153", // 大好き
            "ja-v-a1-154", // 音楽
            "ja-v-a1-155", // スポーツ
            // Things to like/dislike — draw from existing vocab
            "ja-v-a1-62",  // コーヒー
            "ja-v-a1-64",  // 肉
            "ja-v-a1-65",  // 魚
            "ja-v-a1-66",  // 野菜
            "ja-v-a1-67",  // 果物
            "ja-v-a1-70",  // 寿司
            "ja-v-a1-138", // おいしい
            "ja-v-a1-148", // 日本語
        ],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-16-1", level: "A1", prompt: "How do you say 'I like coffee'?", options: ["コーヒーを好きです。", "コーヒーが好きです。", "コーヒーは好きです。", "コーヒーに好きです。"], answer: "コーヒーが好きです。" },
            { id: "ja-uq-a1-16-2", level: "A1", prompt: "How do you say 'I dislike fish'?", options: ["さかなが好きです。", "さかなを嫌いです。", "さかなが嫌いです。", "さかなは嫌いです。"], answer: "さかなが嫌いです。" },
            { id: "ja-uq-a1-16-3", level: "A1", prompt: "What particle marks the thing you like in Japanese?", options: ["を", "は", "に", "が"], answer: "が" },
            { id: "ja-uq-a1-16-4", level: "A1", prompt: "How do you say 'I love sushi'?", options: ["すしが好きです。", "すしが大好きです。", "すしが嫌いです。", "すしをとても好きです。"], answer: "すしが大好きです。" },
            { id: "ja-uq-a1-16-5", level: "A1", prompt: "How do you ask 'Do you like sport?'", options: ["スポーツをしますか？", "スポーツが好きですか？", "スポーツは好きですか？", "スポーツが嫌いですか？"], answer: "スポーツが好きですか？" },
            { id: "ja-uq-a1-16-6", level: "A1", prompt: "What does 大好き (daisuki) express?", options: ["Slight liking", "Dislike", "Neutral feeling", "Strong liking / love"], answer: "Strong liking / love" },
        ]
    },

    // ── PATCH u15: bump order 15 → 17 (kanji stays the final unit) ──
    // Only order changes — all content identical to existing unit
    {
        id: "ja-a1-u15",
        level: "A1",
        order: 17,  // <-- was 15
        title: "Beginner Kanji",
        description: "Learn 15 essential kanji you've already seen in A1 — 日, 水, 山, 本, 人, 学, 生, 先, 語, 上, 下, 中, 大, 小, 手.",
        grammarIds: ["ja-g-a1-14"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-15-1", level: "A1", prompt: "What does the kanji 日 mean?", options: ["Water", "Mountain", "Sun / Day", "Person"], answer: "Sun / Day" },
            { id: "ja-uq-a1-15-2", level: "A1", prompt: "What does 日本 (にほん) mean?", options: ["Japanese language", "Japanese person", "Japan", "Japanese food"], answer: "Japan" },
            { id: "ja-uq-a1-15-3", level: "A1", prompt: "What does 先生 (せんせい) mean?", options: ["Student", "University", "Teacher", "Language"], answer: "Teacher" },
            { id: "ja-uq-a1-15-4", level: "A1", prompt: "Which kanji means 'study / learning'?", options: ["生", "先", "学", "語"], answer: "学" },
            { id: "ja-uq-a1-15-5", level: "A1", prompt: "What does 大学 (だいがく) mean?", options: ["Big person", "University", "Teacher", "Study group"], answer: "University" },
            { id: "ja-uq-a1-15-6", level: "A1", prompt: "Which kanji means 'above / up'?", options: ["下", "中", "小", "上"], answer: "上" },
            { id: "ja-uq-a1-15-7", level: "A1", prompt: "What does 学生 (がくせい) mean?", options: ["Teacher", "School", "Student", "Language"], answer: "Student" },
            { id: "ja-uq-a1-15-8", level: "A1", prompt: "What is the kun'yomi reading of 水?", options: ["すい", "みず", "みな", "こう"], answer: "みず" },
        ]
    },
]


// ─────────────────────────────────────────────────────────────────────────────
// SUMMARY — what to do with this file
//
// src/data/japanese/grammar/a1.ts
//   → PREPEND ja-g-a1-0 (from a1-japanese-orientation.ts) as the first item
//     in the a1Grammar array. No existing IDs change.
//   → APPEND newGrammarLesson (ja-g-a1-15) as the last item.
//
// src/data/japanese/vocab/a1.ts
//   → APPEND all 5 items in newVocab after the last existing item (ja-v-a1-150).
//
// src/data/japanese/units/a1.ts
//   → REPLACE ja-a1-u1  — adds ja-g-a1-0 to grammarIds, 2 new test questions
//   → REPLACE ja-a1-u2  — swaps the stray を question for a は-particle question
//   → REPLACE ja-a1-u14 — order 14 → 15 only
//   → ADD     ja-a1-u16 — new likes/dislikes unit at order 16
//   → REPLACE ja-a1-u15 — order 15 → 17 only (kanji stays last)
//
// Final unit order:
//   1  Orientation + Hiragana Part 1
//   2  Hiragana Part 2 + Basic Phrases
//   3  Katakana
//   4  Basic Sentences: X は Y です
//   5  Greetings & Daily Expressions
//   6  Numbers 1–100
//   7  Polite Verbs: ます-form
//   8  Past Tense: ました
//   9  Negation & Questions
//   10 を Particle
//   11 に Particle
//   12 で Particle
//   13 Food & Shopping Vocabulary
//   15 Wanting To Do: 〜たい   ← was 14, now 15
//   16 Likes & Dislikes: 好き/嫌い  ← NEW
//   17 Beginner Kanji           ← was 15, now 17
// ─────────────────────────────────────────────────────────────────────────────
