// ─────────────────────────────────────────────────────────────────────────────
// KOREAN A1 FIXES
// Four things addressed:
//   1. New grammar lesson  ko-g-a1-13 — Adjective Conjugation (크다/작다 + ㅂ-irregular)
//   2. Four unit patches:
//      u1  — replace history trivia question with a Hangul language question
//      u8  — add ko-g-a1-8 to grammarIds (하다 conjugation is the grammar being used)
//      u11 — add ko-g-a1-13 to grammarIds, wire adjective vocab IDs properly
//      u12 — replace A2 preview question with A1 content; add vocabIds
// ─────────────────────────────────────────────────────────────────────────────

import { GrammarLesson, LessonUnit } from "../../../types"


// ─────────────────────────────────────────────────────────────────────────────
// 1.  NEW GRAMMAR LESSON
//     Append to the end of a1Grammar in src/data/korean/grammar/a1.ts
// ─────────────────────────────────────────────────────────────────────────────

export const newGrammarLesson: GrammarLesson = {
    id: "ko-g-a1-13",
    level: "A1",
    title: "Adjective Conjugation: describing things",
    explanation: `Korean adjectives (descriptive verbs) conjugate exactly like action verbs — they take the same ~아요/어요 endings for polite present tense.

REGULAR PATTERN — same vowel harmony rules as verbs:
  크다  (big)     → 커요      (ㅡ drops, add 어요)
  작다  (small)   → 작아요    (ㅏ vowel → add 아요)
  좋다  (good)    → 좋아요    (ㅗ vowel → add 아요)
  많다  (many)    → 많아요
  없다  (no/none) → 없어요

ㅡ-IRREGULAR — verbs/adjectives ending in ㅡ drop the ㅡ before 아/어:
  크다  → 크 + 어요 → 커요    (not 크어요)
  예쁘다 → 예쁘 + 어요 → 예뻐요 (not 예쁘어요)
  나쁘다 → 나쁘 + 어요 → 나빠요

ㅂ-IRREGULAR — adjectives ending in ㅂ change ㅂ → 우 before a vowel:
  춥다  (cold)    → 추 + 워요 → 추워요  (not 춥어요)
  덥다  (hot)     → 더 + 워요 → 더워요
  가볍다 (light)  → 가벼워요

KEY DIFFERENCE from action verbs:
  Action verb:    학교에 가요. (I go to school.) — describes an action
  Descriptive verb: 날씨가 좋아요. (The weather is nice.) — describes a state

In negative form, adjectives also use 안:
  좋아요 → 안 좋아요   (not good)
  커요   → 안 커요     (not big)`,
    examples: [
        { native: "이 가방이 커요.", romanized: "I gabangi keoyo.", translation: "This bag is big. (크다 → 커요, ㅡ-irregular)" },
        { native: "꽃이 예뻐요.", romanized: "Kkochi yeppeoyo.", translation: "The flower is pretty. (예쁘다 → 예뻐요, ㅡ-irregular)" },
        { native: "여름에 더워요.", romanized: "Yeoreume deowoyo.", translation: "It's hot in summer. (덥다 → 더워요, ㅂ-irregular)" },
        { native: "겨울에 추워요.", romanized: "Gyeoure chuwoyo.", translation: "It's cold in winter. (춥다 → 추워요, ㅂ-irregular)" },
        { native: "날씨가 안 좋아요.", romanized: "Nalssiga an joayo.", translation: "The weather is not good. (안 + adjective)" },
        { native: "사람이 많아요.", romanized: "Sarami manayo.", translation: "There are many people. (많다 → 많아요, regular)" },
    ]
}


// ─────────────────────────────────────────────────────────────────────────────
// 2.  UNIT PATCHES
//     Replace matching units in src/data/korean/units/a1.ts
// ─────────────────────────────────────────────────────────────────────────────

export const unitPatches: LessonUnit[] = [

    // ── PATCH u1: replace history trivia question with Hangul language question ──
    // Change: ko-u1-q5 "Which year was Hangul created?" → tests history not language
    //         replaced with a question about how Hangul syllable blocks work
    {
        id: "ko-a1-u1",
        level: "A1",
        order: 1,
        title: "Hangul & First Greetings",
        description: "Learn the Korean alphabet and say hello.",
        grammarIds: ["ko-g-a1-1"],
        vocabIds: [
            "ko-v-a1-1", "ko-v-a1-2", "ko-v-a1-3", "ko-v-a1-4", "ko-v-a1-5",
            "ko-v-a1-6", "ko-v-a1-7", "ko-v-a1-8", "ko-v-a1-9", "ko-v-a1-10",
            "ko-v-a1-11", "ko-v-a1-12", "ko-v-a1-13", "ko-v-a1-14", "ko-v-a1-15"
        ],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-u1-q1", level: "A1",
                prompt: "How many basic vowels does Hangul have?",
                options: ["8", "10", "12", "14"],
                answer: "10"
            },
            {
                id: "ko-u1-q2", level: "A1",
                prompt: "What does '안녕하세요' mean?",
                options: ["Thank you", "Goodbye", "Hello", "I'm sorry"],
                answer: "Hello"
            },
            {
                id: "ko-u1-q3", level: "A1",
                prompt: "Which is the correct polite way to say 'I'm sorry'?",
                options: ["감사합니다", "죄송합니다", "괜찮아요", "네"],
                answer: "죄송합니다"
            },
            {
                id: "ko-u1-q4", level: "A1",
                prompt: "What does '네' mean?",
                options: ["No", "Maybe", "Yes", "Please"],
                answer: "Yes"
            },
            // ← REPLACED: was "Which year was Hangul created?" (history, not language)
            {
                id: "ko-u1-q5", level: "A1",
                prompt: "How does Hangul work? Each character represents...",
                options: [
                    "A single letter like the Roman alphabet",
                    "A whole word",
                    "A syllable block made of consonants and vowels",
                    "A meaning like Chinese characters"
                ],
                answer: "A syllable block made of consonants and vowels"
            },
            {
                id: "ko-u1-q6", level: "A1",
                prompt: "What does '감사합니다' mean?",
                options: ["Hello", "Goodbye", "I'm sorry", "Thank you"],
                answer: "Thank you"
            }
        ]
    },

    // ── PATCH u8: add ko-g-a1-8 to grammarIds ──
    // Reason: unit teaches 하다 compounds and 좋아하다 using ~아/어요 conjugation,
    // but grammarIds was empty. ko-g-a1-8 (present tense ~아/어요) is the grammar
    // being applied throughout this unit.
    // Also: add clothing vocab IDs that were in the unit but grammar was missing context
    {
        id: "ko-a1-u8",
        level: "A1",
        order: 8,
        title: "Doing Things: 하다 & 좋아하다",
        description: "Use 하다 compounds and express what you like using 좋아하다.",
        grammarIds: ["ko-g-a1-8"],
        vocabIds: [
            "ko-v-a1-96", "ko-v-a1-97", "ko-v-a1-98", "ko-v-a1-99", "ko-v-a1-100",
            "ko-v-a1-101", "ko-v-a1-102", "ko-v-a1-103", "ko-v-a1-104", "ko-v-a1-105"
        ],
        verbIds: ["ko-vb-a1-4", "ko-vb-a1-8"],
        testQuestions: [
            {
                id: "ko-u8-q1", level: "A1",
                prompt: "How do you say 'I like Korean food'?",
                options: ["한국 음식이 좋아요.", "한국 음식을 좋아해요.", "한국 음식이 있어요.", "한국 음식을 먹어요."],
                answer: "한국 음식을 좋아해요."
            },
            {
                id: "ko-u8-q2", level: "A1",
                prompt: "What does '가방' mean?",
                options: ["Shoes", "Hat", "Bag", "Coat"],
                answer: "Bag"
            },
            {
                id: "ko-u8-q3", level: "A1",
                prompt: "How do you say 'I exercise'?",
                options: ["운동이에요.", "운동을 좋아해요.", "운동해요.", "운동 있어요."],
                answer: "운동해요."
            },
            {
                id: "ko-u8-q4", level: "A1",
                prompt: "What does '신발' mean?",
                options: ["Hat", "Socks", "Coat", "Shoes"],
                answer: "Shoes"
            },
            {
                id: "ko-u8-q5", level: "A1",
                prompt: "'공부 안 해요' means:",
                options: ["I study", "I don't study", "I can't study", "I want to study"],
                answer: "I don't study"
            },
            {
                id: "ko-u8-q6", level: "A1",
                prompt: "What particle does 좋아하다 take to mark the thing you like?",
                options: ["이/가", "은/는", "에서", "을/를"],
                answer: "을/를"
            }
        ]
    },

    // ── PATCH u11: add ko-g-a1-13 (adjective conjugation) to grammarIds ──
    // Also: add weather adjectives (ko-v-a1-145, 146) since the ㅂ-irregular
    // (춥다/덥다) is now formally explained in the grammar lesson
    {
        id: "ko-a1-u11",
        level: "A1",
        order: 11,
        title: "Descriptions: Colors & Adjectives",
        description: "Describe things with colors and common adjectives — and learn how adjective conjugation works, including the ㅂ-irregular.",
        grammarIds: ["ko-g-a1-13"],
        vocabIds: [
            "ko-v-a1-106", "ko-v-a1-107", "ko-v-a1-108", "ko-v-a1-109",
            "ko-v-a1-110", "ko-v-a1-111", "ko-v-a1-112", "ko-v-a1-113",
            "ko-v-a1-121", "ko-v-a1-122", "ko-v-a1-123", "ko-v-a1-124",
            "ko-v-a1-125", "ko-v-a1-126", "ko-v-a1-127", "ko-v-a1-128",
            "ko-v-a1-129", "ko-v-a1-130",
            "ko-v-a1-145", "ko-v-a1-146",  // 덥다/춥다 — ㅂ-irregular examples
        ],
        verbIds: ["ko-vb-a1-5", "ko-vb-a1-6"],
        testQuestions: [
            {
                id: "ko-u11-q1", level: "A1",
                prompt: "How do you say 'There are many people'?",
                options: ["사람이 있어요.", "사람이 많아요.", "사람이 커요.", "사람이 좋아요."],
                answer: "사람이 많아요."
            },
            {
                id: "ko-u11-q2", level: "A1",
                prompt: "What does '빨간색' mean?",
                options: ["Blue", "Green", "Yellow", "Red"],
                answer: "Red"
            },
            {
                id: "ko-u11-q3", level: "A1",
                prompt: "How does 춥다 (cold) conjugate in polite present?",
                options: ["춥어요", "추어요", "추워요", "춥아요"],
                answer: "추워요"
            },
            {
                id: "ko-u11-q4", level: "A1",
                prompt: "How does 예쁘다 (pretty) conjugate in polite present?",
                options: ["예쁘어요", "예뻐요", "예쁘아요", "예쁘요"],
                answer: "예뻐요"
            },
            {
                id: "ko-u11-q5", level: "A1",
                prompt: "What does '파란색' mean?",
                options: ["White", "Black", "Purple", "Blue"],
                answer: "Blue"
            },
            {
                id: "ko-u11-q6", level: "A1",
                prompt: "How do you say 'The weather is not good'?",
                options: ["날씨가 좋아요.", "날씨가 없어요.", "날씨가 안 좋아요.", "날씨가 못 좋아요."],
                answer: "날씨가 안 좋아요."
            }
        ]
    },

    // ── PATCH u12: populate vocabIds; replace A2 preview question ──
    // Was: grammarIds: [], vocabIds: [], verbIds: [] — a completely empty shell
    // Fix: add review vocab spanning all major categories; replace ko-u12-q6
    //      which tested 고 싶다 (A2 grammar) with an A1 particle review question
    {
        id: "ko-a1-u12",
        level: "A1",
        order: 12,
        title: "A1 Review: Putting It Together",
        description: "Review all A1 grammar, vocabulary, and verbs through integrated sentences.",
        grammarIds: [],
        vocabIds: [
            // A representative sample across all A1 vocab categories
            "ko-v-a1-1",   // 안녕하세요
            "ko-v-a1-16",  // 저
            "ko-v-a1-26",  // 가족
            "ko-v-a1-46",  // 오늘
            "ko-v-a1-47",  // 내일
            "ko-v-a1-48",  // 어제
            "ko-v-a1-62",  // 밥
            "ko-v-a1-68",  // 커피
            "ko-v-a1-76",  // 집
            "ko-v-a1-77",  // 학교
            "ko-v-a1-83",  // 카페
            "ko-v-a1-123", // 좋다
            "ko-v-a1-128", // 맛있다
            "ko-v-a1-131", // 공부
            "ko-v-a1-139", // 친구
            "ko-v-a1-141", // 날씨
        ],
        verbIds: [
            "ko-vb-a1-1",  // 먹다
            "ko-vb-a1-2",  // 가다
            "ko-vb-a1-3",  // 마시다
            "ko-vb-a1-4",  // 하다
            "ko-vb-a1-7",  // 오다
            "ko-vb-a1-8",  // 좋아하다
        ],
        testQuestions: [
            {
                id: "ko-u12-q1", level: "A1",
                prompt: "How do you say 'I went to school yesterday'?",
                options: ["어제 학교에 가요.", "어제 학교에서 갔어요.", "어제 학교에 갔어요.", "어제 학교를 갔어요."],
                answer: "어제 학교에 갔어요."
            },
            {
                id: "ko-u12-q2", level: "A1",
                prompt: "Complete: '저는 한국 음식___ 좋아해요.' (I like Korean food)",
                options: ["이", "가", "을", "는"],
                answer: "을"
            },
            {
                id: "ko-u12-q3", level: "A1",
                prompt: "What does '어제' mean?",
                options: ["Today", "Tomorrow", "Yesterday", "Now"],
                answer: "Yesterday"
            },
            {
                id: "ko-u12-q4", level: "A1",
                prompt: "How do you say 'It is snowing'? (눈 = snow)",
                options: ["눈이 와요.", "눈이 있어요.", "눈이 가요.", "눈이 많아요."],
                answer: "눈이 와요."
            },
            {
                id: "ko-u12-q5", level: "A1",
                prompt: "Which particle is used to mark where an action takes place?",
                options: ["에", "에서", "을/를", "은/는"],
                answer: "에서"
            },
            // ← REPLACED: was 고 싶다 (A2 grammar — not taught at A1)
            {
                id: "ko-u12-q6", level: "A1",
                prompt: "How do you say 'I study at the café'?",
                options: ["카페에 공부해요.", "카페에서 공부해요.", "카페를 공부해요.", "카페가 공부해요."],
                answer: "카페에서 공부해요."
            }
        ]
    },
]


// ─────────────────────────────────────────────────────────────────────────────
// SUMMARY — what to do with this file
//
// src/data/korean/grammar/a1.ts
//   → APPEND newGrammarLesson (ko-g-a1-13) as the last item in a1Grammar
//
// src/data/korean/units/a1.ts
//   → REPLACE ko-a1-u1  — swaps history trivia q5 for Hangul syllable-block question
//   → REPLACE ko-a1-u8  — adds ko-g-a1-8 to grammarIds; adds q6 about 을/를 with 좋아하다
//   → REPLACE ko-a1-u11 — adds ko-g-a1-13 to grammarIds; adds 덥다/춥다 vocab;
//                          replaces 2 test questions to test the new grammar
//   → REPLACE ko-a1-u12 — adds vocabIds + verbIds for review content;
//                          replaces A2 preview question with A1 particle question
// ─────────────────────────────────────────────────────────────────────────────
