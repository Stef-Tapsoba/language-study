// data/japanese/units/a1.ts
import { LessonUnit } from "../../../types"

// 22 ordered A1 units for Japanese.
//
// CHANGES FROM PREVIOUS VERSION:
// U1  — Unchanged: How Japanese Works + Hiragana Part 1
// U2  — Grammar lesson ja-g-a1-5 (Greetings) kept here for context alongside Hiragana 2.
//        Removed from U5 to fix duplication. Title updated.
// U3  — Katakana — grammar lesson ja-g-a1-3 REWRITTEN (full character table, hiragana mapping).
// U4  — Basic Sentences X は Y です — Unchanged.
// U5  — Greetings & Daily Expressions — REMOVED ja-g-a1-17 (が vs は, too early).
//        REMOVED ja-g-a1-5 (duplicate — already in U2). Now: vocab-rich greetings unit only.
//        Added a note about what greetings grammar covers.
// U6  — Numbers 1-100 — REMOVED ja-g-a1-16 (Counters). Numbers grammar only.
//        Added days-of-week kanji note in description.
// U7  — NEW: Counters (ja-g-a1-16) — split from U6, gets its own unit.
// U8  — ます-form (was U7) — renumbered.
// U9  — Past tense ました (was U8) — renumbered.
// U10 — Negation & Questions (was U9) — renumbered.
// U11 — を particle (was U10) — renumbered.
// U12 — に particle (was U11) — renumbered.
// U13 — で particle (was U12) — renumbered.
// U14 — NEW PLACEMENT: が vs は (ja-g-a1-17) moved here from U5.
//        Now follows all three particles — learner has context to understand the distinction.
// U15 — Food & Shopping vocab (was U13) — renumbered.
// U16 — Likes & Dislikes 好き/嫌い (was U16, order bug fixed — was order:16 with id u16).
// U17 — たい Bridge (was U14, order bug fixed — was order:15 with id u14).
// U18 — Beginner Kanji (was U15, order bug fixed — was order:17 with id u15).
//        vocabIds updated to include new kanji entries ja-v-a1-156 through ja-v-a1-160.

export const a1Units: LessonUnit[] = [
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
    {
        id: "ja-a1-u2",
        level: "A1",
        order: 2,
        title: "Hiragana Part 2 & First Greetings",
        description: "Complete hiragana: は-row through わ-row + ん. Learn your first Japanese greetings and polite expressions alongside the final characters.",
        grammarIds: ["ja-g-a1-2", "ja-g-a1-5"],
        vocabIds: ["ja-v-a1-1", "ja-v-a1-2", "ja-v-a1-3", "ja-v-a1-4", "ja-v-a1-5", "ja-v-a1-9", "ja-v-a1-10", "ja-v-a1-11", "ja-v-a1-12"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-2-1", level: "A1", prompt: "What sound does 'ふ' make?", options: ["hu", "fu", "pu", "bu"], answer: "fu" },
            { id: "ja-uq-a1-2-2", level: "A1", prompt: "Which character represents the nasal 'n' sound at the end of a syllable?", options: ["の", "ぬ", "ん", "な"], answer: "ん" },
            { id: "ja-uq-a1-2-3", level: "A1", prompt: "How do you say 'Good morning' (formal) in Japanese?", options: ["こんにちは", "こんばんは", "おはようございます", "さようなら"], answer: "おはようございます" },
            { id: "ja-uq-a1-2-4", level: "A1", prompt: "When は is used as a particle, how is it pronounced?", options: ["ha", "wa", "ba", "pa"], answer: "wa" },
            { id: "ja-uq-a1-2-5", level: "A1", prompt: "How do you say 'I'm sorry' (apology) in Japanese?", options: ["すみません", "ありがとう", "ごめんなさい", "どうぞ"], answer: "ごめんなさい" },
            { id: "ja-uq-a1-2-6", level: "A1", prompt: "What does 'はじめまして' mean?", options: ["Thank you", "Excuse me", "Nice to meet you", "Goodbye"], answer: "Nice to meet you" },
        ]
    },
    {
        id: "ja-a1-u3",
        level: "A1",
        order: 3,
        title: "Katakana",
        description: "Learn all 46 katakana characters with their hiragana equivalents — each row mapped side by side so you can see the correspondence. Understand when and why katakana is used.",
        grammarIds: ["ja-g-a1-3"],
        vocabIds: ["ja-v-a1-62", "ja-v-a1-63", "ja-v-a1-71", "ja-v-a1-95", "ja-v-a1-97", "ja-v-a1-99", "ja-v-a1-101", "ja-v-a1-102", "ja-v-a1-109", "ja-v-a1-114", "ja-v-a1-117", "ja-v-a1-145"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-3-1", level: "A1", prompt: "What does katakana primarily represent?", options: ["Native Japanese words", "Grammatical elements", "Foreign loanwords and names", "Numbers only"], answer: "Foreign loanwords and names" },
            { id: "ja-uq-a1-3-2", level: "A1", prompt: "What is 'コーヒー' in English?", options: ["Tea", "Juice", "Coffee", "Water"], answer: "Coffee" },
            { id: "ja-uq-a1-3-3", level: "A1", prompt: "The katakana character カ corresponds to which hiragana?", options: ["か", "き", "く", "こ"], answer: "か" },
            { id: "ja-uq-a1-3-4", level: "A1", prompt: "What does the long vowel mark ー (dash) do in katakana?", options: ["Marks the end of a word", "Extends the preceding vowel sound", "Means 'and'", "Separates two words"], answer: "Extends the preceding vowel sound" },
            { id: "ja-uq-a1-3-5", level: "A1", prompt: "What is 'テレビ' in English?", options: ["Telephone", "Television", "Radio", "Computer"], answer: "Television" },
            { id: "ja-uq-a1-3-6", level: "A1", prompt: "The katakana character ス corresponds to which hiragana?", options: ["さ", "し", "す", "そ"], answer: "す" },
        ]
    },
    {
        id: "ja-a1-u4",
        level: "A1",
        order: 4,
        title: "Basic Sentences: X は Y です",
        description: "Form simple 'X is Y' sentences using the topic particle は and copula です.",
        grammarIds: ["ja-g-a1-4"],
        vocabIds: ["ja-v-a1-46", "ja-v-a1-47", "ja-v-a1-48", "ja-v-a1-49", "ja-v-a1-50", "ja-v-a1-51", "ja-v-a1-52", "ja-v-a1-53", "ja-v-a1-54", "ja-v-a1-55", "ja-v-a1-119", "ja-v-a1-150"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-4-1", level: "A1", prompt: "How do you say 'I am a student'?", options: ["わたしをがくせいです。", "わたしはがくせいです。", "わたしがくせいです。", "がくせいはわたしです。"], answer: "わたしはがくせいです。" },
            { id: "ja-uq-a1-4-2", level: "A1", prompt: "What does は (wa) mark in a sentence?", options: ["The direct object", "The topic", "The verb", "The location"], answer: "The topic" },
            { id: "ja-uq-a1-4-3", level: "A1", prompt: "How do you make a yes/no question in Japanese?", options: ["Change the word order", "Add の at the end", "Add か at the end", "Add です at the start"], answer: "Add か at the end" },
            { id: "ja-uq-a1-4-4", level: "A1", prompt: "How do you say 'This is not a book'?", options: ["これはほんです。", "これはほんですか？", "これはほんじゃありません。", "これがほんです。"], answer: "これはほんじゃありません。" },
            { id: "ja-uq-a1-4-5", level: "A1", prompt: "What does です (desu) mean?", options: ["Go / comes", "Is / am / are (polite)", "Have / has", "Want"], answer: "Is / am / are (polite)" },
            { id: "ja-uq-a1-4-6", level: "A1", prompt: "Which is correct for 'Are you a teacher?'", options: ["あなたはせんせいです。", "あなたはせんせいですか？", "せんせいはあなたですか？", "あなたをせんせいですか？"], answer: "あなたはせんせいですか？" },
        ]
    },
    {
        id: "ja-a1-u5",
        level: "A1",
        order: 5,
        title: "Greetings & Daily Expressions",
        description: "Master all common Japanese greetings and essential polite phrases for daily life. You were introduced to these in Unit 2 — now learn the full set and the cultural context behind them.",
        grammarIds: ["ja-g-a1-5"],
        vocabIds: ["ja-v-a1-1", "ja-v-a1-2", "ja-v-a1-3", "ja-v-a1-4", "ja-v-a1-5", "ja-v-a1-6", "ja-v-a1-7", "ja-v-a1-8", "ja-v-a1-9", "ja-v-a1-10", "ja-v-a1-11", "ja-v-a1-12"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-5-1", level: "A1", prompt: "How do you say 'Good evening'?", options: ["おはようございます", "こんにちは", "こんばんは", "おやすみなさい"], answer: "こんばんは" },
            { id: "ja-uq-a1-5-2", level: "A1", prompt: "What does 'すみません' mean?", options: ["Thank you", "Yes", "Excuse me / I'm sorry", "No"], answer: "Excuse me / I'm sorry" },
            { id: "ja-uq-a1-5-3", level: "A1", prompt: "Which greeting is used during the daytime?", options: ["おはようございます", "こんにちは", "こんばんは", "さようなら"], answer: "こんにちは" },
            { id: "ja-uq-a1-5-4", level: "A1", prompt: "What does 'どうぞ' mean?", options: ["Thank you", "Goodbye", "Please / Here you go / Go ahead", "Excuse me"], answer: "Please / Here you go / Go ahead" },
            { id: "ja-uq-a1-5-5", level: "A1", prompt: "What do you say when meeting someone for the first time?", options: ["ありがとうございます", "はじめまして", "こんばんは", "さようなら"], answer: "はじめまして" },
        ]
    },
    {
        id: "ja-a1-u6",
        level: "A1",
        order: 6,
        title: "Numbers 1–100",
        description: "Learn Sino-Japanese numbers from 1 to 100 and how to form compound numbers. Note: days of the week are written in kanji in all real Japanese contexts — you will learn why in the grammar lesson.",
        grammarIds: ["ja-g-a1-6"],
        vocabIds: ["ja-v-a1-13", "ja-v-a1-14", "ja-v-a1-15", "ja-v-a1-16", "ja-v-a1-17", "ja-v-a1-18", "ja-v-a1-19", "ja-v-a1-20", "ja-v-a1-21", "ja-v-a1-22", "ja-v-a1-23", "ja-v-a1-24", "ja-v-a1-25", "ja-v-a1-26", "ja-v-a1-27", "ja-v-a1-28", "ja-v-a1-29", "ja-v-a1-30", "ja-v-a1-31", "ja-v-a1-32", "ja-v-a1-33", "ja-v-a1-34"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-6-1", level: "A1", prompt: "What is 'seven' in Sino-Japanese?", options: ["ろく", "なな / しち", "はち", "きゅう"], answer: "なな / しち" },
            { id: "ja-uq-a1-6-2", level: "A1", prompt: "How do you say '15' in Japanese?", options: ["いちご", "じゅうご", "ごじゅう", "じゅう"], answer: "じゅうご" },
            { id: "ja-uq-a1-6-3", level: "A1", prompt: "What is 百 (ひゃく)?", options: ["Ten", "Fifty", "One hundred", "One thousand"], answer: "One hundred" },
            { id: "ja-uq-a1-6-4", level: "A1", prompt: "How do you say '30' in Japanese?", options: ["さんびゃく", "さんじゅう", "じゅうさん", "さんぜん"], answer: "さんじゅう" },
            { id: "ja-uq-a1-6-5", level: "A1", prompt: "Why are days of the week always written in kanji (月曜日 etc.) in Japanese?", options: ["It is optional — hiragana also works", "They are named after celestial bodies in a system from Chinese astronomy, always written in kanji in daily life", "Kanji is mandatory for all time words", "It is a modern convention"], answer: "They are named after celestial bodies in a system from Chinese astronomy, always written in kanji in daily life" },
            { id: "ja-uq-a1-6-6", level: "A1", prompt: "Which reading of 4 is preferred to avoid bad associations?", options: ["し", "yon / よん", "Both are equally used", "Neither is used"], answer: "yon / よん" },
        ]
    },
    {
        id: "ja-a1-u7",
        level: "A1",
        order: 7,
        title: "Counters: Counting Things",
        description: "In Japanese you can't just say 'three books' — you need a counter word that matches the type of object. Learn the five essential A1 counters: つ (generic), 人 (people), 本 (long things), 枚 (flat things), 杯 (cups).",
        grammarIds: ["ja-g-a1-16"],
        vocabIds: [
            "ja-v-a1-58",  // ごはん — rice (counted with つ or 杯)
            "ja-v-a1-60",  // 水 — water (counted with 杯 or 本)
            "ja-v-a1-62",  // コーヒー — coffee (counted with 杯)
            "ja-v-a1-63",  // ビール — beer (counted with 本/杯)
            "ja-v-a1-68",  // 卵 — egg (counted with つ or 個)
            "ja-v-a1-143", // 本 — book (counted with 冊, but 本 = counter for long things)
            "ja-v-a1-55",  // 子供 — children (counted with 人)
        ],
        verbIds: ["ja-vb-a1-11"],
        testQuestions: [
            { id: "ja-uq-a1-7-1", level: "A1", prompt: "What counter is used for generic objects (1-9)?", options: ["つ", "本", "枚", "人"], answer: "つ" },
            { id: "ja-uq-a1-7-2", level: "A1", prompt: "How do you say 'two people'?", options: ["ににん", "ふたり", "にほん", "ふたつ"], answer: "ふたり" },
            { id: "ja-uq-a1-7-3", level: "A1", prompt: "Which counter is used for bottles, pens, and trees?", options: ["つ", "枚", "本", "杯"], answer: "本" },
            { id: "ja-uq-a1-7-4", level: "A1", prompt: "How do you say 'one cup of coffee'?", options: ["コーヒーをひとつ", "コーヒーを一本", "コーヒーを一杯", "コーヒーを一枚"], answer: "コーヒーを一杯" },
            { id: "ja-uq-a1-7-5", level: "A1", prompt: "Which counter is used for flat thin things like paper, tickets, and shirts?", options: ["本", "杯", "つ", "枚"], answer: "枚" },
            { id: "ja-uq-a1-7-6", level: "A1", prompt: "How do you say 'I ate three apples'?", options: ["りんごを三本食べました。", "りんごを三枚食べました。", "りんごを三つ食べました。", "りんごを三人食べました。"], answer: "りんごを三つ食べました。" },
        ]
    },
    {
        id: "ja-a1-u8",
        level: "A1",
        order: 8,
        title: "Polite Verbs: ます-form",
        description: "Learn to conjugate verbs in polite present/future form using ます.",
        grammarIds: ["ja-g-a1-7"],
        vocabIds: ["ja-v-a1-58", "ja-v-a1-60", "ja-v-a1-104", "ja-v-a1-143", "ja-v-a1-144", "ja-v-a1-145", "ja-v-a1-146", "ja-v-a1-148"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3", "ja-vb-a1-4", "ja-vb-a1-9", "ja-vb-a1-10", "ja-vb-a1-11"],
        testQuestions: [
            { id: "ja-uq-a1-8-1", level: "A1", prompt: "What is the polite present form of 食べる (taberu)?", options: ["食べた", "食べます", "食べません", "食べて"], answer: "食べます" },
            { id: "ja-uq-a1-8-2", level: "A1", prompt: "What is the polite present form of 行く (iku)?", options: ["行きます", "行く", "行って", "行きた"], answer: "行きます" },
            { id: "ja-uq-a1-8-3", level: "A1", prompt: "The irregular verb する (suru) becomes which ます-form?", options: ["するます", "すります", "します", "しいます"], answer: "します" },
            { id: "ja-uq-a1-8-4", level: "A1", prompt: "How do you say 'I drink water' in polite Japanese?", options: ["みずを飲みた。", "みずを飲みます。", "みずを飲む。", "みずを飲んで。"], answer: "みずを飲みます。" },
            { id: "ja-uq-a1-8-5", level: "A1", prompt: "What kind of actions does ます-form express?", options: ["Past actions only", "Present habits and future actions (polite)", "Commands only", "Wishes only"], answer: "Present habits and future actions (polite)" },
            { id: "ja-uq-a1-8-6", level: "A1", prompt: "How do you say 'I go to school' in polite Japanese?", options: ["学校に行く。", "学校に行きます。", "学校に行きた。", "学校に行って。"], answer: "学校に行きます。" },
        ]
    },
    {
        id: "ja-a1-u9",
        level: "A1",
        order: 9,
        title: "Past Tense: ました",
        description: "Express past actions using ました (affirmative) and ませんでした (negative).",
        grammarIds: ["ja-g-a1-8"],
        vocabIds: ["ja-v-a1-35", "ja-v-a1-36", "ja-v-a1-37", "ja-v-a1-38", "ja-v-a1-70", "ja-v-a1-104"],
        verbIds: ["ja-vb-a1-5", "ja-vb-a1-6", "ja-vb-a1-12", "ja-vb-a1-13", "ja-vb-a1-14"],
        testQuestions: [
            { id: "ja-uq-a1-9-1", level: "A1", prompt: "How do you say 'I ate sushi yesterday'?", options: ["昨日、すしを食べます。", "昨日、すしを食べました。", "昨日、すしを食べません。", "昨日、すしを食べた。"], answer: "昨日、すしを食べました。" },
            { id: "ja-uq-a1-9-2", level: "A1", prompt: "How do you form the polite past negative?", options: ["ます → まして", "ます → ませんでした", "ます → ました", "ます → ません"], answer: "ます → ませんでした" },
            { id: "ja-uq-a1-9-3", level: "A1", prompt: "What is the past form of 来ます (kimasu)?", options: ["来ません", "来ました", "来まして", "来ましょう"], answer: "来ました" },
            { id: "ja-uq-a1-9-4", level: "A1", prompt: "How do you say 'She did not come'?", options: ["来ました。", "来ません。", "来ませんでした。", "来て。"], answer: "来ませんでした。" },
            { id: "ja-uq-a1-9-5", level: "A1", prompt: "What is the past copula (was/were) in polite Japanese?", options: ["です", "でした", "でしょう", "ですか"], answer: "でした" },
            { id: "ja-uq-a1-9-6", level: "A1", prompt: "How do you say 'I watched TV last night'?", options: ["昨日の夜、テレビを見ます。", "昨日の夜、テレビを見ました。", "昨日の夜、テレビを見ません。", "昨日の夜、テレビを見て。"], answer: "昨日の夜、テレビを見ました。" },
        ]
    },
    {
        id: "ja-a1-u10",
        level: "A1",
        order: 10,
        title: "Negation & Questions",
        description: "Form negative sentences with ません and ask questions with か and question words.",
        grammarIds: ["ja-g-a1-9"],
        vocabIds: ["ja-v-a1-35", "ja-v-a1-36", "ja-v-a1-38", "ja-v-a1-104", "ja-v-a1-106", "ja-v-a1-114", "ja-v-a1-147", "ja-v-a1-148", "ja-v-a1-149", "ja-v-a1-150"],
        verbIds: ["ja-vb-a1-7", "ja-vb-a1-8"],
        testQuestions: [
            { id: "ja-uq-a1-10-1", level: "A1", prompt: "How do you say 'I don't speak Japanese'?", options: ["日本語を話します。", "日本語を話しません。", "日本語を話しました。", "日本語を話すか？"], answer: "日本語を話しません。" },
            { id: "ja-uq-a1-10-2", level: "A1", prompt: "What question word means 'where'?", options: ["なに", "いつ", "どこ", "だれ"], answer: "どこ" },
            { id: "ja-uq-a1-10-3", level: "A1", prompt: "How do you ask 'What is your name?' in Japanese?", options: ["お名前はどこですか？", "お名前はいつですか？", "お名前は何ですか？", "お名前はだれですか？"], answer: "お名前は何ですか？" },
            { id: "ja-uq-a1-10-4", level: "A1", prompt: "What is the question word for 'when'?", options: ["どれ", "いつ", "なに", "どう"], answer: "いつ" },
            { id: "ja-uq-a1-10-5", level: "A1", prompt: "How do you say 'I do not write letters'?", options: ["手紙を書きます。", "手紙を書きました。", "手紙を書きません。", "手紙を書いて。"], answer: "手紙を書きません。" },
            { id: "ja-uq-a1-10-6", level: "A1", prompt: "Where does the question particle か go in a sentence?", options: ["At the beginning", "Before the verb", "After the subject", "At the end of the sentence"], answer: "At the end of the sentence" },
        ]
    },
    {
        id: "ja-a1-u11",
        level: "A1",
        order: 11,
        title: "を Particle: Direct Objects",
        description: "Use the object particle を to mark what the action is done to.",
        grammarIds: ["ja-g-a1-10"],
        vocabIds: ["ja-v-a1-58", "ja-v-a1-59", "ja-v-a1-60", "ja-v-a1-61", "ja-v-a1-62", "ja-v-a1-64", "ja-v-a1-65", "ja-v-a1-66", "ja-v-a1-143", "ja-v-a1-145", "ja-v-a1-146", "ja-v-a1-148"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-6", "ja-vb-a1-8"],
        testQuestions: [
            { id: "ja-uq-a1-11-1", level: "A1", prompt: "What is the function of the particle を (wo)?", options: ["Marks the topic", "Marks the subject", "Marks the direct object", "Marks the location"], answer: "Marks the direct object" },
            { id: "ja-uq-a1-11-2", level: "A1", prompt: "Which sentence is correct for 'I eat rice'?", options: ["ご飯は食べます。", "ご飯が食べます。", "ご飯に食べます。", "ご飯を食べます。"], answer: "ご飯を食べます。" },
            { id: "ja-uq-a1-11-3", level: "A1", prompt: "How do you say 'I watch TV'?", options: ["テレビが見ます。", "テレビを見ます。", "テレビは見ます。", "テレビに見ます。"], answer: "テレビを見ます。" },
            { id: "ja-uq-a1-11-4", level: "A1", prompt: "What does 'みずを飲みます' mean?", options: ["I go to the water.", "I drink water.", "The water is good.", "Water, please."], answer: "I drink water." },
            { id: "ja-uq-a1-11-5", level: "A1", prompt: "How do you say 'I write a letter'?", options: ["手紙に書きます。", "手紙は書きます。", "手紙を書きます。", "手紙が書きます。"], answer: "手紙を書きます。" },
        ]
    },
    {
        id: "ja-a1-u12",
        level: "A1",
        order: 12,
        title: "に Particle: Location & Time",
        description: "Use に for destinations with movement verbs, locations of existence, and time expressions.",
        grammarIds: ["ja-g-a1-11"],
        vocabIds: ["ja-v-a1-104", "ja-v-a1-105", "ja-v-a1-106", "ja-v-a1-107", "ja-v-a1-108", "ja-v-a1-111", "ja-v-a1-112", "ja-v-a1-113", "ja-v-a1-115", "ja-v-a1-116", "ja-v-a1-28", "ja-v-a1-38"],
        verbIds: ["ja-vb-a1-3", "ja-vb-a1-5", "ja-vb-a1-12", "ja-vb-a1-14"],
        testQuestions: [
            { id: "ja-uq-a1-12-1", level: "A1", prompt: "Which particle marks the destination of movement?", options: ["を", "は", "に", "で"], answer: "に" },
            { id: "ja-uq-a1-12-2", level: "A1", prompt: "How do you say 'I go to school'?", options: ["学校で行きます。", "学校を行きます。", "学校が行きます。", "学校に行きます。"], answer: "学校に行きます。" },
            { id: "ja-uq-a1-12-3", level: "A1", prompt: "How do you say 'I wake up at seven o'clock'?", options: ["七時で起きます。", "七時を起きます。", "七時に起きます。", "七時が起きます。"], answer: "七時に起きます。" },
            { id: "ja-uq-a1-12-4", level: "A1", prompt: "Which sentence correctly uses に for location of existence?", options: ["公園で子供がいます。", "公園に子供がいます。", "公園を子供がいます。", "公園が子供がいます。"], answer: "公園に子供がいます。" },
            { id: "ja-uq-a1-12-5", level: "A1", prompt: "に is NOT used with which type of time word?", options: ["三時 (three o'clock)", "月曜日 (Monday)", "今日 (today)", "六月 (June)"], answer: "今日 (today)" },
            { id: "ja-uq-a1-12-6", level: "A1", prompt: "How do you say 'I came to Japan'?", options: ["日本で来ました。", "日本を来ました。", "日本に来ました。", "日本が来ました。"], answer: "日本に来ました。" },
        ]
    },
    {
        id: "ja-a1-u13",
        level: "A1",
        order: 13,
        title: "で Particle: Place of Action",
        description: "Use で to mark where actions happen and the means or tools used.",
        grammarIds: ["ja-g-a1-12"],
        vocabIds: ["ja-v-a1-104", "ja-v-a1-109", "ja-v-a1-110", "ja-v-a1-111", "ja-v-a1-112", "ja-v-a1-115", "ja-v-a1-119", "ja-v-a1-120", "ja-v-a1-121", "ja-v-a1-122", "ja-v-a1-146"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-3", "ja-vb-a1-7"],
        testQuestions: [
            { id: "ja-uq-a1-13-1", level: "A1", prompt: "Which particle marks where an action takes place?", options: ["に", "が", "で", "の"], answer: "で" },
            { id: "ja-uq-a1-13-2", level: "A1", prompt: "How do you say 'I study at the library'?", options: ["図書館に勉強します。", "図書館で勉強します。", "図書館を勉強します。", "図書館が勉強します。"], answer: "図書館で勉強します。" },
            { id: "ja-uq-a1-13-3", level: "A1", prompt: "How do you say 'I come by bus'?", options: ["バスに来ます。", "バスが来ます。", "バスで来ます。", "バスを来ます。"], answer: "バスで来ます。" },
            { id: "ja-uq-a1-13-4", level: "A1", prompt: "What is the difference between に and で for locations?", options: ["に and で mean the same thing", "に marks where you exist/go to; で marks where you do something", "に marks actions; で marks existence", "There is no difference"], answer: "に marks where you exist/go to; で marks where you do something" },
            { id: "ja-uq-a1-13-5", level: "A1", prompt: "How do you say 'Please speak in Japanese'?", options: ["日本語に話してください。", "日本語が話してください。", "日本語で話してください。", "日本語を話してください。"], answer: "日本語で話してください。" },
            { id: "ja-uq-a1-13-6", level: "A1", prompt: "How do you say 'I eat at the restaurant'?", options: ["レストランに食べます。", "レストランで食べます。", "レストランを食べます。", "レストランが食べます。"], answer: "レストランで食べます。" },
        ]
    },
    {
        id: "ja-a1-u14",
        level: "A1",
        order: 14,
        title: "が vs は — Subject vs Topic",
        description: "Understand the difference between は (topic) and が (subject) — one of Japanese's most important distinctions. Now that you know all three core particles (を, に, で), the contrast between は and が finally makes sense in context.",
        grammarIds: ["ja-g-a1-17"],
        vocabIds: [
            "ja-v-a1-147",  // 日本 — Japan
            "ja-v-a1-148",  // 日本語 — Japanese language
            "ja-v-a1-104",  // 学校 — school
            "ja-v-a1-119",  // 学生 — student
            "ja-v-a1-150",  // 名前 — name
            "ja-v-a1-52",   // ともだち — friend
        ],
        verbIds: ["ja-vb-a1-3", "ja-vb-a1-5"],
        testQuestions: [
            { id: "ja-uq-a1-14-1", level: "A1", prompt: "What does は (wa) signal in a sentence?", options: ["New information or focus", "The topic — what the sentence is about", "The direct object", "A question"], answer: "The topic — what the sentence is about" },
            { id: "ja-uq-a1-14-2", level: "A1", prompt: "How do you say 'Who came?' and answer it?", options: ["だれはきましたか？ — たなかさんはきました。", "だれがきましたか？ — たなかさんがきました。", "だれをきましたか？ — たなかさんをきました。", "だれにきましたか？ — たなかさんにきました。"], answer: "だれがきましたか？ — たなかさんがきました。" },
            { id: "ja-uq-a1-14-3", level: "A1", prompt: "Which particle is ALWAYS used with すき (like) and きらい (dislike)?", options: ["を", "は", "に", "が"], answer: "が" },
            { id: "ja-uq-a1-14-4", level: "A1", prompt: "What does は imply when used with a preference sentence like 'コーヒーはすきです'?", options: ["Strong emphasis on coffee", "A contrast — I like coffee (but maybe not other things)", "That coffee is the subject of the sentence", "Past tense"], answer: "A contrast — I like coffee (but maybe not other things)" },
            { id: "ja-uq-a1-14-5", level: "A1", prompt: "When do you use が instead of は?", options: ["Always, when in doubt", "When stating new information, answering 'who/what', or with すき/きらい/わかる", "For all location sentences", "Only in questions"], answer: "When stating new information, answering 'who/what', or with すき/きらい/わかる" },
        ]
    },
    {
        id: "ja-a1-u15",
        level: "A1",
        order: 15,
        title: "Food & Shopping Vocabulary",
        description: "Build vocabulary for food, drink, shopping, adjectives and describing things.",
        grammarIds: [],
        vocabIds: ["ja-v-a1-58", "ja-v-a1-59", "ja-v-a1-60", "ja-v-a1-61", "ja-v-a1-64", "ja-v-a1-65", "ja-v-a1-66", "ja-v-a1-67", "ja-v-a1-68", "ja-v-a1-70", "ja-v-a1-72", "ja-v-a1-129", "ja-v-a1-130", "ja-v-a1-131", "ja-v-a1-132", "ja-v-a1-133", "ja-v-a1-134", "ja-v-a1-137", "ja-v-a1-138"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-9", "ja-vb-a1-11"],
        testQuestions: [
            { id: "ja-uq-a1-15-1", level: "A1", prompt: "What does 'おいしい' mean?", options: ["Cheap", "Big", "Delicious", "New"], answer: "Delicious" },
            { id: "ja-uq-a1-15-2", level: "A1", prompt: "What is 'meat' in Japanese?", options: ["さかな", "やさい", "にく", "くだもの"], answer: "にく" },
            { id: "ja-uq-a1-15-3", level: "A1", prompt: "What does 'たかい' mean?", options: ["Cheap / Inexpensive", "Expensive / Tall / High", "Small", "Old"], answer: "Expensive / Tall / High" },
            { id: "ja-uq-a1-15-4", level: "A1", prompt: "What is 'fish' in Japanese?", options: ["にく", "さかな", "たまご", "やさい"], answer: "さかな" },
            { id: "ja-uq-a1-15-5", level: "A1", prompt: "What does 'あたらしい' mean?", options: ["Old", "Big", "New", "Good"], answer: "New" },
            { id: "ja-uq-a1-15-6", level: "A1", prompt: "What is 'egg' in Japanese?", options: ["たまご", "さかな", "にく", "ぎゅうにゅう"], answer: "たまご" },
        ]
    },
    {
        id: "ja-a1-u16",
        level: "A1",
        order: 16,
        title: "Likes & Dislikes: 好き / 嫌い",
        description: "Learn to say what you like, love, and dislike — and fully understand the が pattern you've been seeing throughout the course.",
        grammarIds: ["ja-g-a1-15"],
        vocabIds: [
            "ja-v-a1-151", "ja-v-a1-152", "ja-v-a1-153", "ja-v-a1-154", "ja-v-a1-155",
            "ja-v-a1-62", "ja-v-a1-64", "ja-v-a1-65", "ja-v-a1-66", "ja-v-a1-67",
            "ja-v-a1-70", "ja-v-a1-138", "ja-v-a1-148",
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
    {
        id: "ja-a1-u17",
        level: "A1",
        order: 17,
        title: "Wanting To Do: 〜たい (A1 Bridge)",
        description: "Express desires using たい — the bridge between A1 and A2 grammar.",
        grammarIds: ["ja-g-a1-13"],
        vocabIds: ["ja-v-a1-60", "ja-v-a1-70", "ja-v-a1-71", "ja-v-a1-104", "ja-v-a1-106", "ja-v-a1-110", "ja-v-a1-112", "ja-v-a1-147"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3", "ja-vb-a1-4", "ja-vb-a1-6"],
        testQuestions: [
            { id: "ja-uq-a1-17-1", level: "A1", prompt: "How do you say 'I want to eat sushi'?", options: ["すしを食べます。", "すしが食べたいです。", "すしを食べました。", "すしを食べません。"], answer: "すしが食べたいです。" },
            { id: "ja-uq-a1-17-2", level: "A1", prompt: "How is たい formed? Take the ます-form stem and...", options: ["add ない", "add たい", "add て", "add ました"], answer: "add たい" },
            { id: "ja-uq-a1-17-3", level: "A1", prompt: "How do you say 'I want to go to Japan'?", options: ["日本に行きます。", "日本に行きたいです。", "日本に行きました。", "日本に行きません。"], answer: "日本に行きたいです。" },
            { id: "ja-uq-a1-17-4", level: "A1", prompt: "What is the negative form of たいです?", options: ["たくないです", "たいじゃないです", "たいません", "たいでした"], answer: "たくないです" },
            { id: "ja-uq-a1-17-5", level: "A1", prompt: "How do you ask 'What do you want to do?'", options: ["何をしましたか？", "何がしたいですか？", "何をしますか？", "何をしていますか？"], answer: "何がしたいですか？" },
            { id: "ja-uq-a1-17-6", level: "A1", prompt: "たい can be used to express which person's desires directly?", options: ["Any person", "Third person only", "First person (speaker) only", "Second person only"], answer: "First person (speaker) only" },
        ]
    },
    {
        id: "ja-a1-u18",
        level: "A1",
        order: 18,
        title: "Beginner Kanji",
        description: "Learn 15 essential kanji you have already seen throughout A1 — 日, 水, 山, 本, 人, 学, 生, 先, 語, 上, 下, 中, 大, 小, 手. Each now has its own vocab card so you can study the reading and meaning directly.",
        grammarIds: ["ja-g-a1-14"],
        vocabIds: [
            // Kanji already with vocab entries
            "ja-v-a1-60",   // 水 (みず) — water
            "ja-v-a1-83",   // 手 (て) — hand
            "ja-v-a1-143",  // 本 (ほん) — book
            "ja-v-a1-147",  // 日本 (にほん) — Japan — contains 日+本
            "ja-v-a1-148",  // 日本語 (にほんご) — Japanese — contains 日+本+語
            "ja-v-a1-149",  // 英語 (えいご) — English — contains 語
            "ja-v-a1-119",  // 学生 (がくせい) — student — contains 学+生
            "ja-v-a1-53",   // 先生 (せんせい) — teacher — contains 先+生
            "ja-v-a1-116",  // 大学 (だいがく) — university — contains 大+学
            "ja-v-a1-129",  // 大きい (おおきい) — big — contains 大
            "ja-v-a1-130",  // 小さい (ちいさい) — small — contains 小
            // New kanji vocab entries (added in a1-japanese-kanji-vocab-additions.ts)
            "ja-v-a1-156",  // 山 (やま) — mountain
            "ja-v-a1-157",  // 人 (ひと) — person
            "ja-v-a1-158",  // 上 (うえ) — above
            "ja-v-a1-159",  // 下 (した) — below
            "ja-v-a1-160",  // 中 (なか) — inside/middle
        ],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-18-1", level: "A1", prompt: "What does the kanji 日 mean?", options: ["Water", "Mountain", "Sun / Day", "Person"], answer: "Sun / Day" },
            { id: "ja-uq-a1-18-2", level: "A1", prompt: "What does 日本 (にほん) mean?", options: ["Japanese language", "Japanese person", "Japan", "Japanese food"], answer: "Japan" },
            { id: "ja-uq-a1-18-3", level: "A1", prompt: "What does 先生 (せんせい) mean?", options: ["Student", "University", "Teacher", "Language"], answer: "Teacher" },
            { id: "ja-uq-a1-18-4", level: "A1", prompt: "Which kanji means 'study / learning'?", options: ["生", "先", "学", "語"], answer: "学" },
            { id: "ja-uq-a1-18-5", level: "A1", prompt: "What does 大学 (だいがく) mean?", options: ["Big person", "University", "Teacher", "Study group"], answer: "University" },
            { id: "ja-uq-a1-18-6", level: "A1", prompt: "Which kanji means 'above / up'?", options: ["下", "中", "小", "上"], answer: "上" },
            { id: "ja-uq-a1-18-7", level: "A1", prompt: "What does 学生 (がくせい) mean?", options: ["Teacher", "School", "Student", "Language"], answer: "Student" },
            { id: "ja-uq-a1-18-8", level: "A1", prompt: "What is the kun'yomi reading of 水?", options: ["すい", "みず", "みな", "こう"], answer: "みず" },
        ]
    },
    {
        id: "ja-a1-u19",
        level: "A1",
        order: 19,
        title: "Demonstratives & の Particle",
        description: "Point to things near you, near the listener, or far away with これ/それ/あれ and この/その/あの. Use の to show possession and connect nouns.",
        grammarIds: ["ja-g-a1-18", "ja-g-a1-19"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-19-1", level: "A1", prompt: "How do you say 'this book'?", options: ["あの本", "その本", "この本", "どの本"], answer: "この本" },
            { id: "ja-uq-a1-19-2", level: "A1", prompt: "Which demonstrative refers to something far from BOTH speaker and listener?", options: ["これ", "それ", "あれ", "どれ"], answer: "あれ" },
            { id: "ja-uq-a1-19-3", level: "A1", prompt: "How do you ask 'Whose bag is this?'", options: ["これは なんの かばんですか？", "これは だれの かばんですか？", "これは どこの かばんですか？", "これは いくらの かばんですか？"], answer: "これは だれの かばんですか？" },
            { id: "ja-uq-a1-19-4", level: "A1", prompt: "How do you say 'my teacher' using の?", options: ["わたしで せんせい", "わたしに せんせい", "わたしの せんせい", "わたしを せんせい"], answer: "わたしの せんせい" },
            { id: "ja-uq-a1-19-5", level: "A1", prompt: "What does あそこ mean?", options: ["Here", "There (near you)", "Over there (far)", "Where?"], answer: "Over there (far)" },
            { id: "ja-uq-a1-19-6", level: "A1", prompt: "How do you say 'It's mine' (using の alone)?", options: ["わたしです。", "わたしのです。", "わたしにです。", "わたしがです。"], answer: "わたしのです。" },
        ]
    },
    {
        id: "ja-a1-u20",
        level: "A1",
        order: 20,
        title: "Adjective Conjugation: い and な",
        description: "Japanese adjectives conjugate directly. Learn the four forms (present/negative/past/past-negative) for both い-adjectives and な-adjectives, and how each type is used before a noun.",
        grammarIds: ["ja-g-a1-20", "ja-g-a1-21"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-20-1", level: "A1", prompt: "What is the negative form of おいしい (delicious)?", options: ["おいしいじゃないです", "おいしくないです", "おいしかったです", "おいしくなかったです"], answer: "おいしくないです" },
            { id: "ja-uq-a1-20-2", level: "A1", prompt: "What is the past form of さむい (cold)?", options: ["さむいでした", "さむかったです", "さむくないです", "さむじゃなかったです"], answer: "さむかったです" },
            { id: "ja-uq-a1-20-3", level: "A1", prompt: "What is the EXCEPTION to い-adjective conjugation?", options: ["おおきい", "たかい", "いい (good)", "おいしい"], answer: "いい (good)" },
            { id: "ja-uq-a1-20-4", level: "A1", prompt: "How do you say 'a quiet room' (しずか + 部屋)?", options: ["しずかい部屋", "しずかな部屋", "しずかの部屋", "しずかで部屋"], answer: "しずかな部屋" },
            { id: "ja-uq-a1-20-5", level: "A1", prompt: "What is the past negative of いい (good)?", options: ["いくなかったです", "よかったです", "よくなかったです", "いじゃなかったです"], answer: "よくなかったです" },
            { id: "ja-uq-a1-20-6", level: "A1", prompt: "What ending does a な-adjective take BEFORE a noun?", options: ["い", "の", "な", "で"], answer: "な" },
        ]
    },
    {
        id: "ja-a1-u21",
        level: "A1",
        order: 21,
        title: "Adverbs, Frequency & Connectors",
        description: "Say when, how often, and link your ideas. Learn time adverbs (もう/まだ/はじめに), frequency words (いつも/ときどき/ぜんぜん), and discourse connectors (そして/でも/だから/まず).",
        grammarIds: ["ja-g-a1-22", "ja-g-a1-23", "ja-g-a1-24"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a1-21-1", level: "A1", prompt: "What does 'まだ たべていません' mean?", options: ["I already ate", "I haven't eaten yet", "I don't want to eat", "I sometimes eat"], answer: "I haven't eaten yet" },
            { id: "ja-uq-a1-21-2", level: "A1", prompt: "Which frequency adverb REQUIRES a negative verb?", options: ["いつも", "よく", "ときどき", "ぜんぜん"], answer: "ぜんぜん" },
            { id: "ja-uq-a1-21-3", level: "A1", prompt: "Which connector means 'but' in everyday Japanese?", options: ["そして", "だから", "でも", "それから"], answer: "でも" },
            { id: "ja-uq-a1-21-4", level: "A1", prompt: "How do you say 'I always eat breakfast'?", options: ["いつも あさごはんを たべます。", "ときどき あさごはんを たべます。", "あまり あさごはんを たべます。", "ぜんぜん あさごはんを たべます。"], answer: "いつも あさごはんを たべます。" },
            { id: "ja-uq-a1-21-5", level: "A1", prompt: "What does だから mean?", options: ["But / However", "And then", "So / Therefore", "By the way"], answer: "So / Therefore" },
            { id: "ja-uq-a1-21-6", level: "A1", prompt: "'まず、てを あらいます' means:", options: ["I finally wash my hands", "First, I wash my hands", "I quickly wash my hands", "I wash my hands later"], answer: "First, I wash my hands" },
        ]
    },
    {
        id: "ja-a1-u22",
        level: "A1",
        order: 22,
        title: "A1 Review: Putting It Together",
        description: "Review all A1 grammar through integrated reading and production. Bring together scripts, particles, verb conjugation, adjectives, demonstratives, and connectors.",
        grammarIds: [],
        vocabIds: [
            "ja-v-a1-1", "ja-v-a1-46", "ja-v-a1-52", "ja-v-a1-53", "ja-v-a1-58",
            "ja-v-a1-60", "ja-v-a1-62", "ja-v-a1-104", "ja-v-a1-119", "ja-v-a1-143",
            "ja-v-a1-147", "ja-v-a1-148", "ja-v-a1-150",
        ],
        verbIds: [
            "ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3",
            "ja-vb-a1-5", "ja-vb-a1-7", "ja-vb-a1-9",
        ],
        testQuestions: [
            { id: "ja-uq-a1-22-1", level: "A1", prompt: "How do you say 'I went to school yesterday'?", options: ["きのう がっこうで いきます。", "きのう がっこうに いきました。", "きのう がっこうを いきました。", "きのう がっこうが いきます。"], answer: "きのう がっこうに いきました。" },
            { id: "ja-uq-a1-22-2", level: "A1", prompt: "Complete: 'わたし___ ほん。' (My book)", options: ["が", "は", "の", "に"], answer: "の" },
            { id: "ja-uq-a1-22-3", level: "A1", prompt: "How do you say 'This restaurant is famous'?", options: ["このレストランは ゆうめいじゃないです。", "このレストランは ゆうめいです。", "このレストランが ゆうめいな。", "このレストランに ゆうめいです。"], answer: "このレストランは ゆうめいです。" },
            { id: "ja-uq-a1-22-4", level: "A1", prompt: "What does 'もう たべました' mean?", options: ["I haven't eaten yet", "I always eat", "I already ate", "I want to eat"], answer: "I already ate" },
            { id: "ja-uq-a1-22-5", level: "A1", prompt: "Which particle marks where an action takes place?", options: ["に", "を", "が", "で"], answer: "で" },
            { id: "ja-uq-a1-22-6", level: "A1", prompt: "How do you say 'It was cold but fun'?", options: ["さむかったです。でも、たのしかったです。", "さむいでした。でも、たのしかったです。", "さむかったです。だから、たのしかったです。", "さむくないです。でも、たのしくないです。"], answer: "さむかったです。でも、たのしかったです。" },
        ]
    },
]