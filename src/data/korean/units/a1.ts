// data/korean/units/a1.ts
import { LessonUnit } from "../../../types"

// 19 ordered A1 units for Korean.
//
// CHANGES FROM PREVIOUS VERSION (was 12 units):
// U1  — Added ko-g-a1-2 (Hangul: Reading Korean) — was missing entirely.
//        Title updated. Now: How Korean Works + Hangul Reading + Greetings.
// U2  — Fixed grammar overload. Removed ko-g-a1-14 (Speech Levels).
//        Now: Basic Sentence (ko-g-a1-3) + Greetings expressions (ko-g-a1-4) only.
// U3  — NEW: Speech Levels (ko-g-a1-14) — standalone unit. Too important to bury.
// U4  — Sino-Korean Numbers (was U3) — renumbered, unchanged.
// U5  — Native Numbers ONLY (split from old U4 which mixed numbers + family).
// U6  — NEW: Family & People — family vocab split from old U4.
// U7  — Particles: Subject & Object (was U5) — renumbered.
// U8  — Present Tense (was U6) — renumbered.
// U9  — Adjective Conjugation (ko-g-a1-13) — MOVED UP from U11.
//        Adjectives conjugate like verbs in Korean; this belongs right after present tense.
// U10 — Negation (ko-g-a1-10) — MOVED UP from U10 (now earlier in sequence).
//        Simple negation with 안/못 belongs right after learners know present tense + adjectives.
// U11 — 하다 Compounds & 좋아하다 (ko-g-a1-15 NEW) — was U8 with duplicate grammar.
//        Fixed: now references new ko-g-a1-15 instead of duplicate ko-g-a1-8.
// U12 — Location Particles 에/에서 (was U7) — renumbered.
// U13 — Past Tense (was U9) — renumbered.
// U14 — Question Words (ko-g-a1-12) — split from old U10 (was combined with negation).
// U15 — A1 Review (was U12) — renumbered.

export const a1Units: LessonUnit[] = [
    {
        id: "ko-a1-u1",
        level: "A1",
        order: 1,
        title: "How Korean Works, Hangul & First Greetings",
        description: "Get the big picture of how Korean is structured — SOV word order, particles, speech levels, and the alphabet. Learn to read Hangul: how syllable blocks are built from consonants and vowels. Practise with your first greetings.",
        grammarIds: ["ko-g-a1-1", "ko-g-a1-2"],
        vocabIds: [
            "ko-v-a1-1", "ko-v-a1-2", "ko-v-a1-3", "ko-v-a1-4", "ko-v-a1-5",
            "ko-v-a1-6", "ko-v-a1-7", "ko-v-a1-8", "ko-v-a1-9", "ko-v-a1-10",
            "ko-v-a1-11", "ko-v-a1-12", "ko-v-a1-13", "ko-v-a1-14", "ko-v-a1-15"
        ],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-1-1", level: "A1", prompt: "How does Hangul work? Each character represents...", options: ["A single letter like the Roman alphabet", "A whole word", "A syllable block made of consonants and vowels", "A meaning like Chinese characters"], answer: "A syllable block made of consonants and vowels" },
            { id: "ko-uq-a1-1-2", level: "A1", prompt: "What does '안녕하세요' mean?", options: ["Thank you", "Goodbye", "Hello", "I'm sorry"], answer: "Hello" },
            { id: "ko-uq-a1-1-3", level: "A1", prompt: "What is the basic word order in Korean?", options: ["SVO (Subject-Verb-Object)", "VSO (Verb-Subject-Object)", "SOV (Subject-Object-Verb)", "OVS (Object-Verb-Subject)"], answer: "SOV (Subject-Object-Verb)" },
            { id: "ko-uq-a1-1-4", level: "A1", prompt: "What does '감사합니다' mean?", options: ["Hello", "Goodbye", "I'm sorry", "Thank you"], answer: "Thank you" },
            { id: "ko-uq-a1-1-5", level: "A1", prompt: "How many basic vowels does Hangul have?", options: ["8", "10", "12", "14"], answer: "10" },
            { id: "ko-uq-a1-1-6", level: "A1", prompt: "Which is the correct polite way to say 'I'm sorry'?", options: ["감사합니다", "죄송합니다", "괜찮아요", "네"], answer: "죄송합니다" },
        ]
    },
    {
        id: "ko-a1-u2",
        level: "A1",
        order: 2,
        title: "Introductions: X은/는 Y이에요",
        description: "Introduce yourself and say what things are using the topic particle 은/는 and the copula 이에요/예요. Learn key personal vocabulary.",
        grammarIds: ["ko-g-a1-3", "ko-g-a1-4"],
        vocabIds: [
            "ko-v-a1-16", "ko-v-a1-17", "ko-v-a1-18", "ko-v-a1-19", "ko-v-a1-20",
            "ko-v-a1-21", "ko-v-a1-22", "ko-v-a1-23", "ko-v-a1-24", "ko-v-a1-25"
        ],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-2-1", level: "A1", prompt: "How do you say 'I am a student'?", options: ["학생는 저이에요.", "저를 학생이에요.", "저는 학생이에요.", "학생이에요 저."], answer: "저는 학생이에요." },
            { id: "ko-uq-a1-2-2", level: "A1", prompt: "Which particle marks the topic of a sentence?", options: ["이/가", "을/를", "에서", "은/는"], answer: "은/는" },
            { id: "ko-uq-a1-2-3", level: "A1", prompt: "What does '저' mean?", options: ["You", "He/She", "I (polite)", "We"], answer: "I (polite)" },
            { id: "ko-uq-a1-2-4", level: "A1", prompt: "Which ending do you use after a consonant to mean 'is'?", options: ["예요", "이에요", "이요", "에요"], answer: "이에요" },
            { id: "ko-uq-a1-2-5", level: "A1", prompt: "How do you ask 'What is your name?'", options: ["이름이 어때요?", "이름이 뭐예요?", "이름이 어디예요?", "이름이 있어요?"], answer: "이름이 뭐예요?" },
            { id: "ko-uq-a1-2-6", level: "A1", prompt: "What does '선생님' mean?", options: ["Student", "Friend", "Teacher", "Doctor"], answer: "Teacher" },
        ]
    },
    {
        id: "ko-a1-u3",
        level: "A1",
        order: 3,
        title: "Speech Levels — Why Korean Changes",
        description: "Understand why Korean verbs change depending on who you're speaking to. This is not optional — it is fundamental to Korean grammar. Learn the three levels and when each is used.",
        grammarIds: ["ko-g-a1-14"],
        vocabIds: [
            "ko-v-a1-16",  // 저
            "ko-v-a1-17",  // 나
            "ko-v-a1-24",  // 학생
            "ko-v-a1-25",  // 선생님
            "ko-v-a1-1",   // 안녕하세요
            "ko-v-a1-2",   // 안녕히 가세요
        ],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-3-1", level: "A1", prompt: "Which speech level should you use as a default with strangers and service staff?", options: ["반말 (informal) — no 요", "합쇼체 — ~습니다/ㅂ니다", "해요체 — ~아요/어요/해요", "They are all equally acceptable"], answer: "해요체 — ~아요/어요/해요" },
            { id: "ko-uq-a1-3-2", level: "A1", prompt: "When is it appropriate to use 반말 (informal speech)?", options: ["With anyone older than you", "With close friends of the same age or younger people", "In professional settings", "With teachers and bosses"], answer: "With close friends of the same age or younger people" },
            { id: "ko-uq-a1-3-3", level: "A1", prompt: "What does the 요 at the end of 해요체 words signal?", options: ["Past tense", "Politeness — it marks the sentence as appropriately formal", "A question", "Future tense"], answer: "Politeness — it marks the sentence as appropriately formal" },
            { id: "ko-uq-a1-3-4", level: "A1", prompt: "You hear '갑니다' (gamnida). Which speech level is this?", options: ["반말 (casual)", "해요체 (polite informal)", "합쇼체 (formal polite)", "Children's speech"], answer: "합쇼체 (formal polite)" },
            { id: "ko-uq-a1-3-5", level: "A1", prompt: "Why does Korean have speech levels?", options: ["It's a recent invention", "Korean society traditionally emphasises social relationships based on age and status, reflected in the language", "It makes Korean easier to learn", "Only formal Korean has speech levels"], answer: "Korean society traditionally emphasises social relationships based on age and status, reflected in the language" },
        ]
    },
    {
        id: "ko-a1-u4",
        level: "A1",
        order: 4,
        title: "Sino-Korean Numbers",
        description: "Count with Sino-Korean numbers — used for dates, money, phone numbers, and minutes.",
        grammarIds: ["ko-g-a1-11"],
        vocabIds: [
            "ko-v-a1-46", "ko-v-a1-47", "ko-v-a1-48", "ko-v-a1-49", "ko-v-a1-50",
            "ko-v-a1-51", "ko-v-a1-52", "ko-v-a1-53", "ko-v-a1-54", "ko-v-a1-55",
            "ko-v-a1-56", "ko-v-a1-57", "ko-v-a1-58", "ko-v-a1-59", "ko-v-a1-60"
        ],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-4-1", level: "A1", prompt: "What is 3 in Sino-Korean?", options: ["셋", "삼", "三", "사"], answer: "삼" },
            { id: "ko-uq-a1-4-2", level: "A1", prompt: "Sino-Korean numbers are used for which of these?", options: ["Counting objects", "Telling the hour", "People's ages", "Dates and money"], answer: "Dates and money" },
            { id: "ko-uq-a1-4-3", level: "A1", prompt: "What does '오늘' mean?", options: ["Yesterday", "Tomorrow", "Today", "Now"], answer: "Today" },
            { id: "ko-uq-a1-4-4", level: "A1", prompt: "What is '월요일'?", options: ["Tuesday", "Wednesday", "Monday", "Thursday"], answer: "Monday" },
            { id: "ko-uq-a1-4-5", level: "A1", prompt: "What does '주말' mean?", options: ["Weekday", "Weekend", "Holiday", "Morning"], answer: "Weekend" },
        ]
    },
    {
        id: "ko-a1-u5",
        level: "A1",
        order: 5,
        title: "Native Korean Numbers",
        description: "Learn the native Korean number system — used for counting objects, telling the hour, and ages. Understand how native numbers change before counters.",
        grammarIds: ["ko-g-a1-11"],
        vocabIds: [
            "ko-v-a1-36", "ko-v-a1-37", "ko-v-a1-38", "ko-v-a1-39", "ko-v-a1-40",
            "ko-v-a1-41", "ko-v-a1-42", "ko-v-a1-43", "ko-v-a1-44", "ko-v-a1-45"
        ],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-5-1", level: "A1", prompt: "What is 'five' in native Korean?", options: ["오", "넷", "다섯", "여섯"], answer: "다섯" },
            { id: "ko-uq-a1-5-2", level: "A1", prompt: "How does 둘 (two) change before a counter?", options: ["이", "둘", "두", "둘이"], answer: "두" },
            { id: "ko-uq-a1-5-3", level: "A1", prompt: "Native Korean numbers are used for:", options: ["Dates", "Money", "Phone numbers", "Counting objects and hours"], answer: "Counting objects and hours" },
            { id: "ko-uq-a1-5-4", level: "A1", prompt: "What is '열'?", options: ["Eight", "Nine", "Ten", "Seven"], answer: "Ten" },
            { id: "ko-uq-a1-5-5", level: "A1", prompt: "How do you say 'two cups of coffee' (두 잔)?", options: ["이 잔 커피", "둘 잔 커피", "두 잔 커피", "둘잔 커피"], answer: "두 잔 커피" },
        ]
    },
    {
        id: "ko-a1-u6",
        level: "A1",
        order: 6,
        title: "Family & People",
        description: "Talk about your family members. Korean family terms differ depending on whether the speaker is male or female — learn the key distinctions.",
        grammarIds: ["ko-g-a1-3"],
        vocabIds: [
            "ko-v-a1-26", "ko-v-a1-27", "ko-v-a1-28", "ko-v-a1-29", "ko-v-a1-30",
            "ko-v-a1-31", "ko-v-a1-32", "ko-v-a1-33", "ko-v-a1-34", "ko-v-a1-35"
        ],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-6-1", level: "A1", prompt: "What does '가족' mean?", options: ["Friend", "Family", "Teacher", "Person"], answer: "Family" },
            { id: "ko-uq-a1-6-2", level: "A1", prompt: "What does '동생' mean?", options: ["Older brother", "Older sister", "Younger sibling", "Husband"], answer: "Younger sibling" },
            { id: "ko-uq-a1-6-3", level: "A1", prompt: "A woman says '오빠'. Who is she referring to?", options: ["Her younger brother", "Her older brother", "Her older sister", "Her husband"], answer: "Her older brother" },
            { id: "ko-uq-a1-6-4", level: "A1", prompt: "A man says '누나'. Who is he referring to?", options: ["His younger sister", "His older brother", "His older sister", "His wife"], answer: "His older sister" },
            { id: "ko-uq-a1-6-5", level: "A1", prompt: "How do you say 'My father is a teacher'?", options: ["아버지는 학생이에요.", "아버지는 선생님이에요.", "어머니는 선생님이에요.", "아버지가 선생님이에요?"], answer: "아버지는 선생님이에요." },
        ]
    },
    {
        id: "ko-a1-u7",
        level: "A1",
        order: 7,
        title: "Particles: Subject & Object",
        description: "Mark subjects with 이/가 and objects with 을/를. Understand when to use 이/가 vs 은/는.",
        grammarIds: ["ko-g-a1-5", "ko-g-a1-6"],
        vocabIds: [
            "ko-v-a1-131", "ko-v-a1-132", "ko-v-a1-133", "ko-v-a1-134", "ko-v-a1-135",
            "ko-v-a1-136", "ko-v-a1-137", "ko-v-a1-138", "ko-v-a1-139", "ko-v-a1-140"
        ],
        verbIds: ["ko-vb-a1-10", "ko-vb-a1-11"],
        testQuestions: [
            { id: "ko-uq-a1-7-1", level: "A1", prompt: "Which particle marks the direct object?", options: ["은/는", "이/가", "을/를", "에서"], answer: "을/를" },
            { id: "ko-uq-a1-7-2", level: "A1", prompt: "Complete: '한국어___ 공부해요.' (I study Korean — 한국어 ends in vowel)", options: ["를", "을", "가", "는"], answer: "를" },
            { id: "ko-uq-a1-7-3", level: "A1", prompt: "Complete: '친구___ 왔어요.' (A friend came — 친구 ends in vowel)", options: ["이", "가", "를", "은"], answer: "가" },
            { id: "ko-uq-a1-7-4", level: "A1", prompt: "What does '공부' mean?", options: ["Work", "Music", "Studying", "Exercise"], answer: "Studying" },
            { id: "ko-uq-a1-7-5", level: "A1", prompt: "Complete: '밥___ 먹어요.' (I eat rice — 밥 ends in consonant)", options: ["를", "을", "이", "은"], answer: "을" },
            { id: "ko-uq-a1-7-6", level: "A1", prompt: "What does '친구' mean?", options: ["Family", "Teacher", "Friend", "Colleague"], answer: "Friend" },
        ]
    },
    {
        id: "ko-a1-u8",
        level: "A1",
        order: 8,
        title: "Present Tense: ~아요/어요",
        description: "Learn how to conjugate verbs in polite present tense (해요체) using the ~아요/어요 endings and vowel harmony.",
        grammarIds: ["ko-g-a1-8"],
        vocabIds: [
            "ko-v-a1-61", "ko-v-a1-62", "ko-v-a1-63", "ko-v-a1-64", "ko-v-a1-65",
            "ko-v-a1-66", "ko-v-a1-67", "ko-v-a1-68", "ko-v-a1-69", "ko-v-a1-70",
            "ko-v-a1-71", "ko-v-a1-72", "ko-v-a1-73", "ko-v-a1-74", "ko-v-a1-75"
        ],
        verbIds: ["ko-vb-a1-1", "ko-vb-a1-3"],
        testQuestions: [
            { id: "ko-uq-a1-8-1", level: "A1", prompt: "How do you say 'I eat' (polite informal)?", options: ["먹습니다", "먹었어요", "먹어요", "먹다"], answer: "먹어요" },
            { id: "ko-uq-a1-8-2", level: "A1", prompt: "How do you conjugate 가다 (to go) in polite present?", options: ["가어요", "가아요", "가요", "갑니다 only"], answer: "가요" },
            { id: "ko-uq-a1-8-3", level: "A1", prompt: "What does '물' mean?", options: ["Juice", "Milk", "Tea", "Water"], answer: "Water" },
            { id: "ko-uq-a1-8-4", level: "A1", prompt: "How do you say 'I drink' (polite)?", options: ["마시요", "마셔요", "마시어요", "마십니다 only"], answer: "마셔요" },
            { id: "ko-uq-a1-8-5", level: "A1", prompt: "하다 verbs in present polite become:", options: ["하여요", "하아요", "해요", "합니다 only"], answer: "해요" },
            { id: "ko-uq-a1-8-6", level: "A1", prompt: "What does '음식' mean?", options: ["Drink", "Food", "Water", "Tea"], answer: "Food" },
        ]
    },
    {
        id: "ko-a1-u9",
        level: "A1",
        order: 9,
        title: "Adjective Conjugation",
        description: "In Korean, adjectives work like verbs — they conjugate directly. Learn how to use descriptive adjectives in sentences, including the important ㅂ-irregular pattern.",
        grammarIds: ["ko-g-a1-13"],
        vocabIds: [
            "ko-v-a1-106", "ko-v-a1-107", "ko-v-a1-108", "ko-v-a1-109",
            "ko-v-a1-110", "ko-v-a1-111", "ko-v-a1-112", "ko-v-a1-113",
            "ko-v-a1-121", "ko-v-a1-122", "ko-v-a1-123", "ko-v-a1-124",
            "ko-v-a1-125", "ko-v-a1-126", "ko-v-a1-127", "ko-v-a1-128",
            "ko-v-a1-129", "ko-v-a1-130",
            "ko-v-a1-145", "ko-v-a1-146",
        ],
        verbIds: ["ko-vb-a1-5", "ko-vb-a1-6"],
        testQuestions: [
            { id: "ko-uq-a1-9-1", level: "A1", prompt: "How do you say 'There are many people'?", options: ["사람이 있어요.", "사람이 많아요.", "사람이 커요.", "사람이 좋아요."], answer: "사람이 많아요." },
            { id: "ko-uq-a1-9-2", level: "A1", prompt: "What does '빨간색' mean?", options: ["Blue", "Green", "Yellow", "Red"], answer: "Red" },
            { id: "ko-uq-a1-9-3", level: "A1", prompt: "How does 춥다 (cold) conjugate in polite present?", options: ["춥어요", "추어요", "추워요", "춥아요"], answer: "추워요" },
            { id: "ko-uq-a1-9-4", level: "A1", prompt: "How does 예쁘다 (pretty) conjugate in polite present?", options: ["예쁘어요", "예뻐요", "예쁘아요", "예쁘요"], answer: "예뻐요" },
            { id: "ko-uq-a1-9-5", level: "A1", prompt: "What does '파란색' mean?", options: ["White", "Black", "Purple", "Blue"], answer: "Blue" },
            { id: "ko-uq-a1-9-6", level: "A1", prompt: "How do you say 'The weather is not good'?", options: ["날씨가 좋아요.", "날씨가 없어요.", "날씨가 안 좋아요.", "날씨가 못 좋아요."], answer: "날씨가 안 좋아요." },
        ]
    },
    {
        id: "ko-a1-u10",
        level: "A1",
        order: 10,
        title: "Negation: 안 and 못",
        description: "Say 'don't' with 안 and 'can't' with 못. Learn the special placement rule for 하다 compound verbs.",
        grammarIds: ["ko-g-a1-10"],
        vocabIds: [
            "ko-v-a1-147", "ko-v-a1-148", "ko-v-a1-149", "ko-v-a1-150",
            "ko-v-a1-131", "ko-v-a1-133", "ko-v-a1-135", "ko-v-a1-139"
        ],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-10-1", level: "A1", prompt: "How do you say 'I don't eat it'?", options: ["못 먹어요.", "안 먹어요.", "먹지 않아요. only", "안 먹습니다. only"], answer: "안 먹어요." },
            { id: "ko-uq-a1-10-2", level: "A1", prompt: "How do you say 'I can't do it' (inability)?", options: ["안 해요.", "못 해요.", "하지 않아요.", "안 할 거예요."], answer: "못 해요." },
            { id: "ko-uq-a1-10-3", level: "A1", prompt: "For 하다 compound verbs, where does 안 go?", options: ["Before the whole verb", "Between noun and 하다", "After 해요", "After 하다"], answer: "Between noun and 하다" },
            { id: "ko-uq-a1-10-4", level: "A1", prompt: "How do you say 'I can't study'?", options: ["안 공부해요.", "공부 못 해요.", "못 공부해요.", "공부 안 할 수 있어요."], answer: "공부 못 해요." },
            { id: "ko-uq-a1-10-5", level: "A1", prompt: "What is the difference between 안 and 못?", options: ["They mean the same thing", "안 = won't/don't (choice); 못 = can't (inability)", "못 = won't; 안 = can't", "안 is formal, 못 is casual"], answer: "안 = won't/don't (choice); 못 = can't (inability)" },
        ]
    },
    {
        id: "ko-a1-u11",
        level: "A1",
        order: 11,
        title: "하다 Compounds & 좋아하다",
        description: "Use 하다 compound verbs — one of Korean's most productive patterns. Express likes with 좋아하다 and understand the special negation rule for 하다 verbs.",
        grammarIds: ["ko-g-a1-15"],
        vocabIds: [
            "ko-v-a1-96", "ko-v-a1-97", "ko-v-a1-98", "ko-v-a1-99", "ko-v-a1-100",
            "ko-v-a1-101", "ko-v-a1-102", "ko-v-a1-103", "ko-v-a1-104", "ko-v-a1-105"
        ],
        verbIds: ["ko-vb-a1-4", "ko-vb-a1-8"],
        testQuestions: [
            { id: "ko-uq-a1-11-1", level: "A1", prompt: "How do you say 'I like Korean food'?", options: ["한국 음식이 좋아요.", "한국 음식을 좋아해요.", "한국 음식이 있어요.", "한국 음식을 먹어요."], answer: "한국 음식을 좋아해요." },
            { id: "ko-uq-a1-11-2", level: "A1", prompt: "How do you say 'I exercise'?", options: ["운동이에요.", "운동을 좋아해요.", "운동해요.", "운동 있어요."], answer: "운동해요." },
            { id: "ko-uq-a1-11-3", level: "A1", prompt: "'공부 안 해요' means:", options: ["I study", "I don't study", "I can't study", "I want to study"], answer: "I don't study" },
            { id: "ko-uq-a1-11-4", level: "A1", prompt: "What particle does 좋아하다 take to mark the thing you like?", options: ["이/가", "은/는", "에서", "을/를"], answer: "을/를" },
            { id: "ko-uq-a1-11-5", level: "A1", prompt: "What does '가방' mean?", options: ["Shoes", "Hat", "Bag", "Coat"], answer: "Bag" },
            { id: "ko-uq-a1-11-6", level: "A1", prompt: "How do you form a 하다 compound verb?", options: ["Add 해요 to any verb", "Take a noun + add 하다", "Add 하다 only to action verbs", "Only sino-Korean words can take 하다"], answer: "Take a noun + add 하다" },
        ]
    },
    {
        id: "ko-a1-u12",
        level: "A1",
        order: 12,
        title: "Going Places: Location Particles 에 & 에서",
        description: "Use 에 for destinations and the location of existence. Use 에서 for where actions happen. Master the key difference between these two particles.",
        grammarIds: ["ko-g-a1-7"],
        vocabIds: [
            "ko-v-a1-76", "ko-v-a1-77", "ko-v-a1-78", "ko-v-a1-79", "ko-v-a1-80",
            "ko-v-a1-81", "ko-v-a1-82", "ko-v-a1-83", "ko-v-a1-84", "ko-v-a1-85",
            "ko-v-a1-86", "ko-v-a1-87", "ko-v-a1-88", "ko-v-a1-89", "ko-v-a1-90",
            "ko-v-a1-91", "ko-v-a1-92", "ko-v-a1-93", "ko-v-a1-94", "ko-v-a1-95"
        ],
        verbIds: ["ko-vb-a1-2", "ko-vb-a1-7", "ko-vb-a1-9"],
        testQuestions: [
            { id: "ko-uq-a1-12-1", level: "A1", prompt: "Complete: '학교___ 가요.' (I go to school — destination)", options: ["에서", "에", "이", "을"], answer: "에" },
            { id: "ko-uq-a1-12-2", level: "A1", prompt: "Complete: '카페___ 공부해요.' (I study at the café — action location)", options: ["에", "에서", "이", "을"], answer: "에서" },
            { id: "ko-uq-a1-12-3", level: "A1", prompt: "What does '집' mean?", options: ["School", "Restaurant", "Café", "Home / House"], answer: "Home / House" },
            { id: "ko-uq-a1-12-4", level: "A1", prompt: "How do you say 'I came' (past tense of 오다)?", options: ["와요", "오았어요", "왔어요", "올 거예요"], answer: "왔어요" },
            { id: "ko-uq-a1-12-5", level: "A1", prompt: "What does '지하철' mean?", options: ["Bus", "Taxi", "Subway", "Car"], answer: "Subway" },
            { id: "ko-uq-a1-12-6", level: "A1", prompt: "Which particle do you use with 있다 to mean 'be at a place'?", options: ["에서", "에", "을", "이"], answer: "에" },
        ]
    },
    {
        id: "ko-a1-u13",
        level: "A1",
        order: 13,
        title: "Past Tense: ~았/었어요",
        description: "Talk about things that already happened using the ~았어요/었어요 endings.",
        grammarIds: ["ko-g-a1-9"],
        vocabIds: [
            "ko-v-a1-141", "ko-v-a1-142", "ko-v-a1-143", "ko-v-a1-144",
            "ko-v-a1-145", "ko-v-a1-146"
        ],
        verbIds: ["ko-vb-a1-1", "ko-vb-a1-2", "ko-vb-a1-3", "ko-vb-a1-4", "ko-vb-a1-7", "ko-vb-a1-12", "ko-vb-a1-13", "ko-vb-a1-14"],
        testQuestions: [
            { id: "ko-uq-a1-13-1", level: "A1", prompt: "What is the past tense of 가다 (to go)?", options: ["가아요", "가었어요", "갔어요", "가요"], answer: "갔어요" },
            { id: "ko-uq-a1-13-2", level: "A1", prompt: "What is the past tense of 하다 (to do)?", options: ["해요", "하었어요", "했어요", "하겠어요"], answer: "했어요" },
            { id: "ko-uq-a1-13-3", level: "A1", prompt: "What does '비가 와요' mean?", options: ["It rained", "It is raining", "It will rain", "It doesn't rain"], answer: "It is raining" },
            { id: "ko-uq-a1-13-4", level: "A1", prompt: "What is the past tense of 먹다 (to eat)?", options: ["먹어요", "먹을 거예요", "먹었어요", "먹겠어요"], answer: "먹었어요" },
            { id: "ko-uq-a1-13-5", level: "A1", prompt: "What does '날씨' mean?", options: ["Rain", "Wind", "Weather", "Snow"], answer: "Weather" },
            { id: "ko-uq-a1-13-6", level: "A1", prompt: "How do you say 'It was cold'?", options: ["추워요", "추울 거예요", "추웠어요", "춥다"], answer: "추웠어요" },
        ]
    },
    {
        id: "ko-a1-u14",
        level: "A1",
        order: 14,
        title: "Question Words",
        description: "Ask who, what, where, when, why, and how in Korean. Master the six essential question words and how they work in sentences.",
        grammarIds: ["ko-g-a1-12"],
        vocabIds: [
            "ko-v-a1-114", "ko-v-a1-115", "ko-v-a1-116", "ko-v-a1-117",
            "ko-v-a1-118", "ko-v-a1-119", "ko-v-a1-120"
        ],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-14-1", level: "A1", prompt: "What does '어디' mean?", options: ["When", "What", "Where", "Why"], answer: "Where" },
            { id: "ko-uq-a1-14-2", level: "A1", prompt: "What does '뭐' mean?", options: ["Where", "When", "Who", "What"], answer: "What" },
            { id: "ko-uq-a1-14-3", level: "A1", prompt: "How do you ask 'Where do you live?'", options: ["어디에서 살아요?", "뭐 살아요?", "언제 살아요?", "어떻게 살아요?"], answer: "어디에서 살아요?" },
            { id: "ko-uq-a1-14-4", level: "A1", prompt: "What question word means 'why'?", options: ["어디", "언제", "누구", "왜"], answer: "왜" },
            { id: "ko-uq-a1-14-5", level: "A1", prompt: "What does '손' mean?", options: ["Foot", "Head", "Eye", "Hand"], answer: "Hand" },
            { id: "ko-uq-a1-14-6", level: "A1", prompt: "How do you ask 'How are you?'", options: ["어떻게 있어요?", "어떻게 가요?", "어떻게 지내요?", "어디에요?"], answer: "어떻게 지내요?" },
        ]
    },
    {
        id: "ko-a1-u16",
        level: "A1",
        order: 16,
        title: "Demonstratives: 이/그/저",
        description: "Point to things near you, near the listener, or far away using Korean's three demonstrative series. Master 이/그/저 with nouns and the standalone forms 이것/그것/저것.",
        grammarIds: ["ko-g-a1-16"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-16-1", level: "A1", prompt: "How do you say 'this book'?", options: ["그 책", "저 책", "이 책", "것 책"], answer: "이 책" },
            { id: "ko-uq-a1-16-2", level: "A1", prompt: "Which demonstrative refers to something far from BOTH speaker and listener?", options: ["이-", "그-", "저-", "여기-"], answer: "저-" },
            { id: "ko-uq-a1-16-3", level: "A1", prompt: "What does '그것' refer to?", options: ["Something near the speaker", "Something near the listener", "Something far from both", "An unknown thing"], answer: "Something near the listener" },
            { id: "ko-uq-a1-16-4", level: "A1", prompt: "What is the casual form of 이것?", options: ["이거", "이것이", "이게", "이걸"], answer: "이거" },
            { id: "ko-uq-a1-16-5", level: "A1", prompt: "How do you say 'What is that (far away)?'", options: ["이것이 뭐예요?", "그것이 뭐예요?", "저것이 뭐예요?", "여기가 뭐예요?"], answer: "저것이 뭐예요?" },
            { id: "ko-uq-a1-16-6", level: "A1", prompt: "'그거 얼마예요?' means:", options: ["How much is this?", "How much is that (near you)?", "How much is that (far away)?", "What is that?"], answer: "How much is that (near you)?" },
        ]
    },
    {
        id: "ko-a1-u17",
        level: "A1",
        order: 17,
        title: "Future & Desire: ~(으)ㄹ 거예요 & ~고 싶어요",
        description: "Talk about future plans with ~(으)ㄹ 거예요 and express what you want to do with ~고 싶어요. Two essential patterns for everyday communication.",
        grammarIds: ["ko-g-a1-17", "ko-g-a1-18"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-17-1", level: "A1", prompt: "How do you say 'I will eat'?", options: ["먹어요", "먹었어요", "먹을 거예요", "먹고 싶어요"], answer: "먹을 거예요" },
            { id: "ko-uq-a1-17-2", level: "A1", prompt: "How do you form the future of 가다 (to go)?", options: ["가을 거예요", "갈 거예요", "가을 것이에요", "갔어요"], answer: "갈 거예요" },
            { id: "ko-uq-a1-17-3", level: "A1", prompt: "How do you say 'I want to go to Korea'?", options: ["한국에 갈 거예요.", "한국에 가고 싶어요.", "한국에 가고 싶었어요.", "한국에 가요."], answer: "한국에 가고 싶어요." },
            { id: "ko-uq-a1-17-4", level: "A1", prompt: "How do you say 'I don't want to go'?", options: ["안 가고 싶어요.", "가고 싶지 않아요.", "가고 안 싶어요.", "가기 싫어요."], answer: "가고 싶지 않아요." },
            { id: "ko-uq-a1-17-5", level: "A1", prompt: "How do you say 'I won't go today'?", options: ["오늘 안 갈 거예요.", "오늘 못 갔어요.", "오늘 가고 싶지 않아요.", "오늘 가지 않아요."], answer: "오늘 안 갈 거예요." },
            { id: "ko-uq-a1-17-6", level: "A1", prompt: "'뭐 먹고 싶어요?' means:", options: ["What did you eat?", "What do you want to eat?", "What are you eating?", "What will you eat?"], answer: "What do you want to eat?" },
        ]
    },
    {
        id: "ko-a1-u18",
        level: "A1",
        order: 18,
        title: "Adverbs, Frequency & Connectors",
        description: "Say when, how often, and link your ideas. Learn time adverbs (오늘/아직/이미), frequency words (항상/가끔/절대로), sentence connectors (~고/~지만/~아서), and discourse connectors (그리고/하지만/그래서).",
        grammarIds: ["ko-g-a1-19", "ko-g-a1-20", "ko-g-a1-21", "ko-g-a1-22"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "ko-uq-a1-18-1", level: "A1", prompt: "What does '아직 안 먹었어요' mean?", options: ["I already ate", "I haven't eaten yet", "I don't want to eat", "I always eat"], answer: "I haven't eaten yet" },
            { id: "ko-uq-a1-18-2", level: "A1", prompt: "Which word requires a negative verb?", options: ["항상", "자주", "가끔", "별로"], answer: "별로" },
            { id: "ko-uq-a1-18-3", level: "A1", prompt: "What does ~지만 express?", options: ["Cause and result", "Neutral addition", "Contrast (but)", "Sequence (then)"], answer: "Contrast (but)" },
            { id: "ko-uq-a1-18-4", level: "A1", prompt: "How do you say 'I was tired so I slept'? (피곤하다 = tired, 자다 = sleep)", options: ["피곤하지만 잤어요.", "피곤하고 잤어요.", "피곤해서 잤어요.", "피곤하면 잤어요."], answer: "피곤해서 잤어요." },
            { id: "ko-uq-a1-18-5", level: "A1", prompt: "Which connector means 'therefore / so' at the start of a new sentence?", options: ["하지만", "그리고", "그래서", "그런데"], answer: "그래서" },
            { id: "ko-uq-a1-18-6", level: "A1", prompt: "'먼저 손을 씻어요' means:", options: ["I finally wash my hands", "First I wash my hands", "I quickly wash my hands", "I wash my hands slowly"], answer: "First I wash my hands" },
        ]
    },
    {
        id: "ko-a1-u19",
        level: "A1",
        order: 19,
        title: "A1 Review: Putting It Together",
        description: "Review all A1 grammar, vocabulary, and verbs through integrated sentences.",
        grammarIds: [],
        vocabIds: [
            "ko-v-a1-1", "ko-v-a1-16", "ko-v-a1-26", "ko-v-a1-46", "ko-v-a1-47",
            "ko-v-a1-48", "ko-v-a1-62", "ko-v-a1-68", "ko-v-a1-76", "ko-v-a1-77",
            "ko-v-a1-83", "ko-v-a1-123", "ko-v-a1-128", "ko-v-a1-131", "ko-v-a1-139",
            "ko-v-a1-141",
        ],
        verbIds: [
            "ko-vb-a1-1", "ko-vb-a1-2", "ko-vb-a1-3",
            "ko-vb-a1-4", "ko-vb-a1-7", "ko-vb-a1-8",
        ],
        testQuestions: [
            { id: "ko-uq-a1-19-1", level: "A1", prompt: "How do you say 'I went to school yesterday'?", options: ["어제 학교에 가요.", "어제 학교에서 갔어요.", "어제 학교에 갔어요.", "어제 학교를 갔어요."], answer: "어제 학교에 갔어요." },
            { id: "ko-uq-a1-19-2", level: "A1", prompt: "Complete: '저는 한국 음식___ 좋아해요.' (I like Korean food)", options: ["이", "가", "을", "는"], answer: "을" },
            { id: "ko-uq-a1-19-3", level: "A1", prompt: "What does '어제' mean?", options: ["Today", "Tomorrow", "Yesterday", "Now"], answer: "Yesterday" },
            { id: "ko-uq-a1-19-4", level: "A1", prompt: "How do you say 'It is snowing'? (눈 = snow)", options: ["눈이 와요.", "눈이 있어요.", "눈이 가요.", "눈이 많아요."], answer: "눈이 와요." },
            { id: "ko-uq-a1-19-5", level: "A1", prompt: "Which particle is used to mark where an action takes place?", options: ["에", "에서", "을/를", "은/는"], answer: "에서" },
            { id: "ko-uq-a1-19-6", level: "A1", prompt: "How do you say 'I study at the café'?", options: ["카페에 공부해요.", "카페에서 공부해요.", "카페를 공부해요.", "카페가 공부해요."], answer: "카페에서 공부해요." },
        ]
    },
]