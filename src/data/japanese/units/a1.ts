// data/japanese/units/a1.ts
import { LessonUnit } from "../../../types"

// 27 ordered A1 units for Japanese.
//
// REORDER (2026-03-19): Demonstratives & の moved from U19 → U7 (used in basic sentences
// from the start; learners need これ/その/の before counters and verbs). Adjective
// Conjugation moved from U20 → U12 (adjectives appear throughout food vocab at U17; learners
// need the forms before meeting おいしい/たかい in context). All other units shifted to fill gaps.
//
// REORDER (2026-03-20): U25 "New Particles: も, と, から, まで" and U26 "て-form, Plain Form &
// Suggestions" moved before the capstone review. New order: U24 ← old U25, U25 ← old U26,
// U26 ← old U24 (capstone stays last).
//
// CURRICULUM FIX (2026-03-25): U5 repurposed from duplicate greetings to へ particle (ja-g-a1-37).
// U8 expanded to include 〜ています (ja-g-a1-34). U22 expanded to include permission/prohibition
// (ja-g-a1-36) and giving/receiving (ja-g-a1-35). U18 updated to N5 Kanji Group 1 (ja-g-a1-14
// expanded). U26 now covers N5 Kanji Group 2 (ja-g-a1-38). U27 is new capstone review.
// 21 new verbs added (ja-vb-a1-21 through ja-vb-a1-41) distributed across thematic units.
// から-as-reason connector added to ja-g-a1-30 explanation.
//
// U1  — How Japanese Works + Hiragana Part 1
// U2  — Hiragana Part 2 & First Greetings
// U3  — Katakana
// U4  — Basic Sentences: X は Y です
// U5  — へ Particle — Direction & Movement  (replaces duplicate greetings)
// U6  — Numbers 1–100
// U7  — Demonstratives & の  ← was U19
// U8  — Counters  ← was U7
// U9  — Polite Verbs: ます-form & 〜ています  (expanded)
// U10 — Past Tense: ました  ← was U9
// U11 — Negation & Questions  ← was U10
// U12 — Adjective Conjugation: い and な  ← was U20
// U13 — を Particle  ← was U11
// U14 — に Particle + あります/います  ← was U12
// U15 — で Particle  ← was U13
// U16 — が vs は  ← was U14
// U17 — Food & Shopping Vocabulary  ← was U15
// U18 — Likes & Dislikes: 好き / 嫌い  ← was U16
// U19 — Wanting To Do: 〜たい  ← was U17
// U20 — N5 Kanji Part 1 — Why Kanji + Numbers, Time, Nature & Position  (ja-g-a1-39 added)
// U21 — Adverbs, Frequency & Connectors
// U22 — Requests, Permission & Giving  (expanded: +permission, +giving/receiving)
// U23 — Ordering Food & Drinks
// U24 — New Particles: も, と, から, まで  ← was U25
// U25 — て-form, Plain Form & Suggestions  ← was U26
// U26 — N5 Kanji Part 2 — People, Actions, Places & Society  (new)
// U27 — A1 Review: Putting It Together (capstone)

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
        title: "へ Particle — Direction & Movement",
        description: "Learn the direction particle へ (e) and how it differs from に. Use it immediately with the movement verbs 行く / 来る / 帰る you met in previous units. Understand when each particle is the natural choice.",
        grammarIds: ["ja-g-a1-37"],
        vocabIds: ["ja-v-a1-104", "ja-v-a1-105", "ja-v-a1-106", "ja-v-a1-110", "ja-v-a1-112", "ja-v-a1-113", "ja-v-a1-147"],
        verbIds: ["ja-vb-a1-3", "ja-vb-a1-5", "ja-vb-a1-14"],
        testQuestions: [
            { id: "ja-uq-a1-5-1", level: "A1", prompt: "What does the particle へ (e) mark in a sentence?", options: ["The topic", "The direction of movement", "The location of existence", "The time of an action"], answer: "The direction of movement" },
            { id: "ja-uq-a1-5-2", level: "A1", prompt: "How do you say 'I am going to Tokyo'?", options: ["とうきょうで いきます。", "とうきょうを いきます。", "とうきょうへ いきます。", "とうきょうが いきます。"], answer: "とうきょうへ いきます。" },
            { id: "ja-uq-a1-5-3", level: "A1", prompt: "Which sentence uses へ correctly?", options: ["さんじへ おきます。", "うちへ かえります。", "テーブルへ りんごが あります。", "えいごへ はなします。"], answer: "うちへ かえります。" },
            { id: "ja-uq-a1-5-4", level: "A1", prompt: "What is the key difference between に and へ for destinations?", options: ["に is casual; へ is formal", "に emphasises arrival; へ emphasises direction of travel", "They are completely different particles with no overlap", "へ is used only for train travel"], answer: "に emphasises arrival; へ emphasises direction of travel" },
            { id: "ja-uq-a1-5-5", level: "A1", prompt: "How do you say 'Let's head home'?", options: ["うちに かえりましょう。", "うちへ かえりましょう。", "うちで かえりましょう。", "うちを かえりましょう。"], answer: "うちへ かえりましょう。" },
            { id: "ja-uq-a1-5-6", level: "A1", prompt: "Can you say 'さんじへ おきます' (wake up at three o'clock)?", options: ["Yes — に and へ are always interchangeable", "No — time expressions use に only, never へ", "Yes — but it is unusual", "No — you need で for times"], answer: "No — time expressions use に only, never へ" },
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
        id: "ja-a1-u19",
        level: "A1",
        order: 7,
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
        id: "ja-a1-u7",
        level: "A1",
        order: 8,
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
        order: 9,
        title: "Polite Verbs: ます-form & 〜ています",
        description: "Learn to conjugate verbs in polite present/future form using ます. Then extend into 〜ています — the essential progressive/resultant-state form covering 'I am doing X' and 'I live in / I am married'.",
        grammarIds: ["ja-g-a1-7", "ja-g-a1-34"],
        vocabIds: ["ja-v-a1-58", "ja-v-a1-60", "ja-v-a1-104", "ja-v-a1-143", "ja-v-a1-144", "ja-v-a1-145", "ja-v-a1-146", "ja-v-a1-147", "ja-v-a1-148"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3", "ja-vb-a1-4", "ja-vb-a1-9", "ja-vb-a1-10", "ja-vb-a1-11", "ja-vb-a1-26", "ja-vb-a1-31"],
        testQuestions: [
            { id: "ja-uq-a1-8-1", level: "A1", prompt: "What is the polite present form of 食べる (taberu)?", options: ["食べた", "食べます", "食べません", "食べて"], answer: "食べます" },
            { id: "ja-uq-a1-8-2", level: "A1", prompt: "What is the polite present form of 行く (iku)?", options: ["行きます", "行く", "行って", "行きた"], answer: "行きます" },
            { id: "ja-uq-a1-8-3", level: "A1", prompt: "The irregular verb する (suru) becomes which ます-form?", options: ["するます", "すります", "します", "しいます"], answer: "します" },
            { id: "ja-uq-a1-8-4", level: "A1", prompt: "How do you say 'I am eating right now' using 〜ています?", options: ["たべます。", "たべました。", "たべています。", "たべてください。"], answer: "たべています。" },
            { id: "ja-uq-a1-8-5", level: "A1", prompt: "What kind of actions does ます-form express?", options: ["Past actions only", "Present habits and future actions (polite)", "Commands only", "Wishes only"], answer: "Present habits and future actions (polite)" },
            { id: "ja-uq-a1-8-6", level: "A1", prompt: "How do you say 'I live in Tokyo' (resultant state)?", options: ["とうきょうに いきます。", "とうきょうに すんでいます。", "とうきょうに いました。", "とうきょうに いてください。"], answer: "とうきょうに すんでいます。" },
            { id: "ja-uq-a1-8-7", level: "A1", prompt: "What does '〜ています' express with a change-of-state verb like 結婚する?", options: ["The action is happening right now", "The ongoing result of a completed action", "A future intention", "A polite request"], answer: "The ongoing result of a completed action" },
        ]
    },
    {
        id: "ja-a1-u9",
        level: "A1",
        order: 10,
        title: "Past Tense: ました",
        description: "Express past actions using ました (affirmative) and ませんでした (negative).",
        grammarIds: ["ja-g-a1-8"],
        vocabIds: ["ja-v-a1-35", "ja-v-a1-36", "ja-v-a1-37", "ja-v-a1-38", "ja-v-a1-70", "ja-v-a1-104"],
        verbIds: ["ja-vb-a1-5", "ja-vb-a1-6", "ja-vb-a1-12", "ja-vb-a1-13", "ja-vb-a1-14", "ja-vb-a1-25", "ja-vb-a1-27"],
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
        order: 11,
        title: "Negation & Questions",
        description: "Form negative sentences with ません and ask questions with か and question words.",
        grammarIds: ["ja-g-a1-9"],
        vocabIds: ["ja-v-a1-35", "ja-v-a1-36", "ja-v-a1-38", "ja-v-a1-104", "ja-v-a1-106", "ja-v-a1-114", "ja-v-a1-147", "ja-v-a1-148", "ja-v-a1-149", "ja-v-a1-150"],
        verbIds: ["ja-vb-a1-7", "ja-vb-a1-8", "ja-vb-a1-21", "ja-vb-a1-33", "ja-vb-a1-34"],
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
        id: "ja-a1-u20",
        level: "A1",
        order: 12,
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
        id: "ja-a1-u11",
        level: "A1",
        order: 13,
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
        order: 14,
        title: "に Particle: Location & Time",
        description: "Use に for destinations with movement verbs, locations of existence, and time expressions.",
        grammarIds: ["ja-g-a1-11", "ja-g-a1-25"],
        vocabIds: ["ja-v-a1-104", "ja-v-a1-105", "ja-v-a1-106", "ja-v-a1-107", "ja-v-a1-108", "ja-v-a1-111", "ja-v-a1-112", "ja-v-a1-113", "ja-v-a1-115", "ja-v-a1-116", "ja-v-a1-28", "ja-v-a1-38"],
        verbIds: ["ja-vb-a1-3", "ja-vb-a1-5", "ja-vb-a1-12", "ja-vb-a1-14", "ja-vb-a1-15", "ja-vb-a1-16", "ja-vb-a1-23", "ja-vb-a1-24", "ja-vb-a1-38"],
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
        order: 15,
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
        order: 16,
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
        order: 17,
        title: "Food & Shopping Vocabulary",
        description: "Build vocabulary for food, drink, shopping, adjectives and describing things.",
        grammarIds: [],
        vocabIds: ["ja-v-a1-58", "ja-v-a1-59", "ja-v-a1-60", "ja-v-a1-61", "ja-v-a1-64", "ja-v-a1-65", "ja-v-a1-66", "ja-v-a1-67", "ja-v-a1-68", "ja-v-a1-70", "ja-v-a1-72", "ja-v-a1-129", "ja-v-a1-130", "ja-v-a1-131", "ja-v-a1-132", "ja-v-a1-133", "ja-v-a1-134", "ja-v-a1-137", "ja-v-a1-138"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-9", "ja-vb-a1-11", "ja-vb-a1-22", "ja-vb-a1-30", "ja-vb-a1-40"],
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
        order: 18,
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
        order: 19,
        title: "Wanting To Do: 〜たい (A1 Bridge)",
        description: "Express desires using たい — the bridge between A1 and A2 grammar.",
        grammarIds: ["ja-g-a1-13"],
        vocabIds: ["ja-v-a1-60", "ja-v-a1-70", "ja-v-a1-71", "ja-v-a1-104", "ja-v-a1-106", "ja-v-a1-110", "ja-v-a1-112", "ja-v-a1-147"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3", "ja-vb-a1-4", "ja-vb-a1-6", "ja-vb-a1-28", "ja-vb-a1-29", "ja-vb-a1-39"],
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
        order: 20,
        title: "N5 Kanji Part 1 — Why Kanji + Numbers, Time, Nature & Position",
        description: "Start with why kanji matters and how meaning compounds (木→林→森, 電車, 学生). Then learn the first group of N5 kanji: numbers 一〜十百千万円, time 年月日時間分, days of the week 火水木金土, position 上下左右中外前後, and nature 山川田空花木林森.",
        grammarIds: ["ja-g-a1-39", "ja-g-a1-14"],
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
        id: "ja-a1-u21",
        level: "A1",
        order: 21,
        title: "Adverbs, Frequency & Connectors",
        description: "Say when, how often, and link your ideas. Learn time adverbs (もう/まだ/はじめに), frequency words (いつも/ときどき/ぜんぜん), and discourse connectors (そして/でも/だから/まず).",
        grammarIds: ["ja-g-a1-22", "ja-g-a1-23", "ja-g-a1-24"],
        vocabIds: [],
        verbIds: ["ja-vb-a1-31"],
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
        title: "Requests, Permission & Giving",
        description: "Make and refuse polite requests with 〜てください. Ask and grant permission with 〜てもいいですか, and express prohibition with 〜てはいけません. Learn how Japanese distinguishes giving TO someone (あげます), giving TO you (くれます), and receiving (もらいます).",
        grammarIds: ["ja-g-a1-26", "ja-g-a1-36", "ja-g-a1-35"],
        vocabIds: ["ja-v-a1-52", "ja-v-a1-53", "ja-v-a1-55", "ja-v-a1-56", "ja-v-a1-57", "ja-v-a1-62", "ja-v-a1-65"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3", "ja-vb-a1-5", "ja-vb-a1-7", "ja-vb-a1-8", "ja-vb-a1-16", "ja-vb-a1-35", "ja-vb-a1-36", "ja-vb-a1-37"],
        testQuestions: [
            { id: "ja-uq-a1-22-1", level: "A1", prompt: "What is the て-form of たべる?", options: ["たべって", "たべいて", "たべて", "たべして"], answer: "たべて" },
            { id: "ja-uq-a1-22-2", level: "A1", prompt: "How do you say 'Please speak slowly'?", options: ["ゆっくり はなさないでください。", "ゆっくり はなしてください。", "ゆっくり はなすてください。", "ゆっくり はなしください。"], answer: "ゆっくり はなしてください。" },
            { id: "ja-uq-a1-22-3", level: "A1", prompt: "How do you ask 'May I sit here?'", options: ["ここに すわっては いけません。", "ここに すわっても いいですか？", "ここに すわってください。", "ここに すわらないでください。"], answer: "ここに すわっても いいですか？" },
            { id: "ja-uq-a1-22-4", level: "A1", prompt: "How do you say 'You must not smoke here'?", options: ["ここで たばこを すっても いいです。", "ここで たばこを すっては いけません。", "ここで たばこを すってください。", "ここで たばこを すわないでください。"], answer: "ここで たばこを すっては いけません。" },
            { id: "ja-uq-a1-22-5", level: "A1", prompt: "Which verb do you use when someone gives something TO YOU?", options: ["あげます", "くれます", "もらいます", "かします"], answer: "くれます" },
            { id: "ja-uq-a1-22-6", level: "A1", prompt: "How do you say 'I gave a present to my friend'?", options: ["ともだちが わたしに プレゼントを くれました。", "わたしは ともだちに プレゼントを あげました。", "わたしは ともだちから プレゼントを もらいました。", "ともだちは わたしから プレゼントを もらいました。"], answer: "わたしは ともだちに プレゼントを あげました。" },
            { id: "ja-uq-a1-22-7", level: "A1", prompt: "How do you say 'You don't have to come early'?", options: ["はやく きてください。", "はやく きてはいけません。", "はやく こなくてもいいです。", "はやく きてもいいです。"], answer: "はやく こなくてもいいです。" },
        ]
    },
    {
        id: "ja-a1-u23",
        level: "A1",
        order: 23,
        title: "Ordering Food & Drinks",
        description: "Put it all together at a restaurant or café. Use [noun]をください and おねがいします to order, ask いくらですか for the price, and use ～はありますか to check availability.",
        grammarIds: ["ja-g-a1-27", "ja-g-a1-25"],
        vocabIds: [
            "ja-v-a1-58", "ja-v-a1-59", "ja-v-a1-60", "ja-v-a1-61", "ja-v-a1-62",
            "ja-v-a1-63", "ja-v-a1-64", "ja-v-a1-65", "ja-v-a1-70", "ja-v-a1-71",
            "ja-v-a1-72", "ja-v-a1-73", "ja-v-a1-110",
        ],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-15", "ja-vb-a1-32", "ja-vb-a1-40"],
        testQuestions: [
            { id: "ja-uq-a1-23-1", level: "A1", prompt: "How do you say 'Water, please' when ordering?", options: ["みずが ください。", "みずを ください。", "みずで ください。", "みずに ください。"], answer: "みずを ください。" },
            { id: "ja-uq-a1-23-2", level: "A1", prompt: "How do you ask 'How much is it?'", options: ["いくらですか？", "なんですか？", "どこですか？", "いつですか？"], answer: "いくらですか？" },
            { id: "ja-uq-a1-23-3", level: "A1", prompt: "How do you ask 'Do you have an English menu?'", options: ["えいごの メニューを ください。", "えいごの メニューは ありますか？", "えいごの メニューが いますか？", "えいごの メニューで ありますか？"], answer: "えいごの メニューは ありますか？" },
            { id: "ja-uq-a1-23-4", level: "A1", prompt: "What is the polite/softer alternative to をください?", options: ["してください", "おねがいします", "ありがとう", "どうぞ"], answer: "おねがいします" },
            { id: "ja-uq-a1-23-5", level: "A1", prompt: "How do you say 'Two coffees, please'?", options: ["コーヒーが ふたつ ください。", "コーヒーを ふたつ ください。", "コーヒーに ふたつ ください。", "コーヒーで ふたつ ください。"], answer: "コーヒーを ふたつ ください。" },
            { id: "ja-uq-a1-23-6", level: "A1", prompt: "How do you say 'How much is everything altogether?'", options: ["ぜんぶで いくらですか？", "ひとつで いくらですか？", "なんこで いくらですか？", "みんなで いくらですか？"], answer: "ぜんぶで いくらですか？" },
        ]
    },
    {
        id: "ja-a1-u24",
        level: "A1",
        order: 24,
        title: "New Particles: も, と, から, まで",
        description: "Expand your particle toolkit. Use も to mean 'also/too/either', と to link nouns as 'and' or mark a companion, and から/まで to express starting and ending points in time or space.",
        grammarIds: ["ja-g-a1-29", "ja-g-a1-30", "ja-g-a1-31"],
        vocabIds: ["ja-v-a1-104", "ja-v-a1-105", "ja-v-a1-106", "ja-v-a1-110", "ja-v-a1-112", "ja-v-a1-113", "ja-v-a1-58", "ja-v-a1-59", "ja-v-a1-61", "ja-v-a1-62", "ja-v-a1-35", "ja-v-a1-36", "ja-v-a1-39", "ja-v-a1-41"],
        verbIds: ["ja-vb-a1-3", "ja-vb-a1-5", "ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-6", "ja-vb-a1-4", "ja-vb-a1-18", "ja-vb-a1-38"],
        testQuestions: [
            { id: "ja-uq-a1-24-1", level: "A1", prompt: "Tanaka-san said 'わたしも がくせいです。' What does も indicate here?", options: ["Tanaka is the only student", "Tanaka is also a student (like someone else)", "Tanaka is not a student", "Tanaka wants to be a student"], answer: "Tanaka is also a student (like someone else)" },
            { id: "ja-uq-a1-24-2", level: "A1", prompt: "How do you say 'I went with Yuki'?", options: ["ゆきが いきました。", "ゆきで いきました。", "ゆきと いきました。", "ゆきに いきました。"], answer: "ゆきと いきました。" },
            { id: "ja-uq-a1-24-3", level: "A1", prompt: "Choose the correct particle: 'くじ___ じゅうじ___ はたらきます。' (I work from 9 to 10.)", options: ["に / まで", "から / まで", "で / に", "は / まで"], answer: "から / まで" },
            { id: "ja-uq-a1-24-4", level: "A1", prompt: "How do you say 'coffee and tea' as a list of nouns?", options: ["コーヒーが おちゃ", "コーヒーも おちゃ", "コーヒーと おちゃ", "コーヒーは おちゃ"], answer: "コーヒーと おちゃ" },
            { id: "ja-uq-a1-24-5", level: "A1", prompt: "What does 'とうきょうから きました' mean?", options: ["I am going to Tokyo", "I came from Tokyo", "I live in Tokyo", "I like Tokyo"], answer: "I came from Tokyo" },
            { id: "ja-uq-a1-24-6", level: "A1", prompt: "Your friend said they don't like sushi. You also dislike it. How do you respond using も?", options: ["わたしも すしが きらいです。", "わたしは すしが きらいです。", "わたしと すしが きらいです。", "わたしから すしが きらいです。"], answer: "わたしも すしが きらいです。" },
        ]
    },
    {
        id: "ja-a1-u25",
        level: "A1",
        order: 25,
        title: "て-form, Plain Form & Suggestions",
        description: "Learn to build the て-form for connecting actions and making requests, introduce the plain (dictionary) form as the base of Japanese grammar, and use 〜ましょう / 〜ませんか to make suggestions.",
        grammarIds: ["ja-g-a1-28", "ja-g-a1-32", "ja-g-a1-33"],
        vocabIds: ["ja-v-a1-1", "ja-v-a1-2", "ja-v-a1-7", "ja-v-a1-8", "ja-v-a1-9", "ja-v-a1-150"],
        verbIds: ["ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3", "ja-vb-a1-4", "ja-vb-a1-5", "ja-vb-a1-6", "ja-vb-a1-7", "ja-vb-a1-8", "ja-vb-a1-9", "ja-vb-a1-10", "ja-vb-a1-11", "ja-vb-a1-12", "ja-vb-a1-13", "ja-vb-a1-14", "ja-vb-a1-17", "ja-vb-a1-18", "ja-vb-a1-19", "ja-vb-a1-20", "ja-vb-a1-26", "ja-vb-a1-28"],
        testQuestions: [
            { id: "ja-uq-a1-25-1", level: "A1", prompt: "What is the て-form of 'たべます' (to eat)?", options: ["たべて", "たべた", "たべます", "たべに"], answer: "たべて" },
            { id: "ja-uq-a1-25-2", level: "A1", prompt: "How do you say 'Let's go!' using 〜ましょう?", options: ["いきますか？", "いきましょう。", "いきません。", "いきませんか？"], answer: "いきましょう。" },
            { id: "ja-uq-a1-25-3", level: "A1", prompt: "How do you say 'Shall we eat?' as a gentle invitation using 〜ませんか?", options: ["たべましょう。", "たべますか？", "たべませんか？", "たべてください。"], answer: "たべませんか？" },
            { id: "ja-uq-a1-25-4", level: "A1", prompt: "What is the plain (dictionary) form of 'たべます'?", options: ["たべた", "たべる", "たべて", "たべない"], answer: "たべる" },
            { id: "ja-uq-a1-25-5", level: "A1", prompt: "The て-form is commonly used to connect two actions. Which sentence correctly links 'eat' and 'sleep'?", options: ["たべます、ねます。", "たべて、ねます。", "たべに、ねます。", "たべる、ねます。"], answer: "たべて、ねます。" },
            { id: "ja-uq-a1-25-6", level: "A1", prompt: "Which form — plain or polite (〜ます) — is typically used in formal and classroom Japanese for beginners?", options: ["Plain form", "Polite (〜ます) form", "て-form", "ない-form"], answer: "Polite (〜ます) form" },
        ]
    },
    {
        id: "ja-a1-u26",
        level: "A1",
        order: 26,
        title: "N5 Kanji Part 2 — People, Actions, Places & Society",
        description: "Complete the N5 kanji set. Learn kanji for people and family 人女男子父母兄姉弟妹, body parts 目耳口手足, common action verbs 行来帰見聞話読書食飲入出, school 学校先生語文字本, places 国店駅道町市社会電車, compass directions 東西南北, time of day 朝昼夜, colours 白黒赤青, and other high-frequency N5 characters 名気力友家族.",
        grammarIds: ["ja-g-a1-38"],
        vocabIds: [
            "ja-v-a1-52",   // ともだち — friend (友達)
            "ja-v-a1-53",   // 先生 (せんせい) — teacher
            "ja-v-a1-83",   // 手 (て) — hand
            "ja-v-a1-104",  // 学校 (がっこう) — school
            "ja-v-a1-113",  // 駅 (えき) — station
            "ja-v-a1-119",  // 学生 (がくせい) — student
            "ja-v-a1-143",  // 本 (ほん) — book
            "ja-v-a1-147",  // 日本 (にほん) — Japan
            "ja-v-a1-148",  // 日本語 (にほんご) — Japanese language
            "ja-v-a1-149",  // 英語 (えいご) — English
            "ja-v-a1-150",  // 名前 (なまえ) — name
        ],
        verbIds: ["ja-vb-a1-3", "ja-vb-a1-5", "ja-vb-a1-6", "ja-vb-a1-7", "ja-vb-a1-8", "ja-vb-a1-9", "ja-vb-a1-23", "ja-vb-a1-24"],
        testQuestions: [
            { id: "ja-uq-a1-26-1", level: "A1", prompt: "What does the kanji 東 mean?", options: ["West", "North", "East", "South"], answer: "East" },
            { id: "ja-uq-a1-26-2", level: "A1", prompt: "Which kanji means 'mouth'?", options: ["目", "耳", "口", "手"], answer: "口" },
            { id: "ja-uq-a1-26-3", level: "A1", prompt: "What is the kun'yomi of 女?", options: ["じょ", "おんな", "こ", "ひと"], answer: "おんな" },
            { id: "ja-uq-a1-26-4", level: "A1", prompt: "Which kanji compound means 'company' (business)?", options: ["学校", "電車", "会社", "駅前"], answer: "会社" },
            { id: "ja-uq-a1-26-5", level: "A1", prompt: "What does 家族 (かぞく) mean?", options: ["House", "Friend", "Family", "Company"], answer: "Family" },
            { id: "ja-uq-a1-26-6", level: "A1", prompt: "Which kanji means 'morning'?", options: ["昼", "夜", "朝", "時"], answer: "朝" },
            { id: "ja-uq-a1-26-7", level: "A1", prompt: "What does 元気 (げんき) mean?", options: ["Weather", "Healthy / Fine / Energetic", "Power", "Friend"], answer: "Healthy / Fine / Energetic" },
            { id: "ja-uq-a1-26-8", level: "A1", prompt: "What does 電車 (でんしゃ) mean?", options: ["Telephone", "Train", "Car", "Station"], answer: "Train" },
        ]
    },
    {
        id: "ja-a1-u27",
        level: "A1",
        order: 27,
        title: "A1 Review: Putting It Together",
        description: "Review all A1 grammar through integrated reading and production. Bring together scripts, particles, verb conjugation, adjectives, demonstratives, connectors, 〜ています, giving/receiving, and permission/prohibition.",
        grammarIds: [],
        vocabIds: [
            "ja-v-a1-1", "ja-v-a1-46", "ja-v-a1-52", "ja-v-a1-53", "ja-v-a1-58",
            "ja-v-a1-60", "ja-v-a1-62", "ja-v-a1-104", "ja-v-a1-119", "ja-v-a1-143",
            "ja-v-a1-147", "ja-v-a1-148", "ja-v-a1-150",
        ],
        verbIds: [
            "ja-vb-a1-1", "ja-vb-a1-2", "ja-vb-a1-3",
            "ja-vb-a1-5", "ja-vb-a1-7", "ja-vb-a1-9",
            "ja-vb-a1-25", "ja-vb-a1-26", "ja-vb-a1-27",
        ],
        testQuestions: [
            { id: "ja-uq-a1-27-1", level: "A1", prompt: "How do you say 'I went to school yesterday'?", options: ["きのう がっこうで いきます。", "きのう がっこうに いきました。", "きのう がっこうを いきました。", "きのう がっこうが いきます。"], answer: "きのう がっこうに いきました。" },
            { id: "ja-uq-a1-27-2", level: "A1", prompt: "How do you say 'I am studying Japanese right now'?", options: ["にほんごを べんきょうします。", "にほんごを べんきょうしました。", "にほんごを べんきょうしています。", "にほんごを べんきょうしたいです。"], answer: "にほんごを べんきょうしています。" },
            { id: "ja-uq-a1-27-3", level: "A1", prompt: "How do you say 'This restaurant is famous'?", options: ["このレストランは ゆうめいじゃないです。", "このレストランは ゆうめいです。", "このレストランが ゆうめいな。", "このレストランに ゆうめいです。"], answer: "このレストランは ゆうめいです。" },
            { id: "ja-uq-a1-27-4", level: "A1", prompt: "My friend gave me a book. Which sentence is correct?", options: ["わたしは ともだちに ほんを あげました。", "ともだちが わたしに ほんを くれました。", "わたしは ともだちから ほんを あげました。", "ともだちは わたしへ ほんを もらいました。"], answer: "ともだちが わたしに ほんを くれました。" },
            { id: "ja-uq-a1-27-5", level: "A1", prompt: "Which particle marks where an action takes place?", options: ["に", "を", "が", "で"], answer: "で" },
            { id: "ja-uq-a1-27-6", level: "A1", prompt: "How do you say 'It was cold but fun'?", options: ["さむかったです。でも、たのしかったです。", "さむいでした。でも、たのしかったです。", "さむかったです。だから、たのしかったです。", "さむくないです。でも、たのしくないです。"], answer: "さむかったです。でも、たのしかったです。" },
        ]
    },
]
