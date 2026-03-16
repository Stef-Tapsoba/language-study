// Korean A1 lesson units
// data/korean/units/a1.ts
import { LessonUnit } from "../../../types"

export const a1Units: LessonUnit[] = [
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
    {
        id: "ko-a1-u2",
        level: "A1",
        order: 2,
        title: "Introductions: X은/는 Y이에요",
        description: "Introduce yourself and say what things are",
        grammarIds: ["ko-g-a1-3", "ko-g-a1-4", "ko-g-a1-14"],
        vocabIds: [
            "ko-v-a1-16", "ko-v-a1-17", "ko-v-a1-18", "ko-v-a1-19", "ko-v-a1-20",
            "ko-v-a1-21", "ko-v-a1-22", "ko-v-a1-23", "ko-v-a1-24", "ko-v-a1-25"
        ],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-u2-q1", level: "A1",
                prompt: "How do you say 'I am a student'?",
                options: ["학생는 저이에요.", "저를 학생이에요.", "저는 학생이에요.", "학생이에요 저."],
                answer: "저는 학생이에요."
            },
            {
                id: "ko-u2-q2", level: "A1",
                prompt: "Which particle marks the topic of a sentence?",
                options: ["이/가", "을/를", "에서", "은/는"],
                answer: "은/는"
            },
            {
                id: "ko-u2-q3", level: "A1",
                prompt: "What does '저' mean?",
                options: ["You", "He/She", "I (polite)", "We"],
                answer: "I (polite)"
            },
            {
                id: "ko-u2-q4", level: "A1",
                prompt: "Which ending do you use after a consonant to mean 'is'?",
                options: ["예요", "이에요", "이요", "에요"],
                answer: "이에요"
            },
            {
                id: "ko-u2-q5", level: "A1",
                prompt: "How do you ask 'What is your name?'",
                options: ["이름이 어때요?", "이름이 뭐예요?", "이름이 어디예요?", "이름이 있어요?"],
                answer: "이름이 뭐예요?"
            },
            {
                id: "ko-u2-q6", level: "A1",
                prompt: "What does '선생님' mean?",
                options: ["Student", "Friend", "Teacher", "Doctor"],
                answer: "Teacher"
            }
        ]
    },
    {
        id: "ko-a1-u3",
        level: "A1",
        order: 3,
        title: "Sino-Korean Numbers",
        description: "Count with Sino-Korean numbers for dates and times",
        grammarIds: ["ko-g-a1-11"],
        vocabIds: [
            "ko-v-a1-46", "ko-v-a1-47", "ko-v-a1-48", "ko-v-a1-49", "ko-v-a1-50",
            "ko-v-a1-51", "ko-v-a1-52", "ko-v-a1-53", "ko-v-a1-54", "ko-v-a1-55",
            "ko-v-a1-56", "ko-v-a1-57", "ko-v-a1-58", "ko-v-a1-59", "ko-v-a1-60"
        ],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-u3-q1", level: "A1",
                prompt: "What is 3 in Sino-Korean?",
                options: ["셋", "삼", "三", "사"],
                answer: "삼"
            },
            {
                id: "ko-u3-q2", level: "A1",
                prompt: "Sino-Korean numbers are used for which of these?",
                options: ["Counting objects", "Telling the hour", "People's ages", "Dates and money"],
                answer: "Dates and money"
            },
            {
                id: "ko-u3-q3", level: "A1",
                prompt: "What does '오늘' mean?",
                options: ["Yesterday", "Tomorrow", "Today", "Now"],
                answer: "Today"
            },
            {
                id: "ko-u3-q4", level: "A1",
                prompt: "What is '월요일'?",
                options: ["Tuesday", "Wednesday", "Monday", "Thursday"],
                answer: "Monday"
            },
            {
                id: "ko-u3-q5", level: "A1",
                prompt: "What does '주말' mean?",
                options: ["Weekday", "Weekend", "Holiday", "Morning"],
                answer: "Weekend"
            }
        ]
    },
    {
        id: "ko-a1-u4",
        level: "A1",
        order: 4,
        title: "Native Numbers & Family",
        description: "Count objects and talk about your family",
        grammarIds: ["ko-g-a1-11"],
        vocabIds: [
            "ko-v-a1-26", "ko-v-a1-27", "ko-v-a1-28", "ko-v-a1-29", "ko-v-a1-30",
            "ko-v-a1-31", "ko-v-a1-32", "ko-v-a1-33", "ko-v-a1-34", "ko-v-a1-35",
            "ko-v-a1-36", "ko-v-a1-37", "ko-v-a1-38", "ko-v-a1-39", "ko-v-a1-40",
            "ko-v-a1-41", "ko-v-a1-42", "ko-v-a1-43", "ko-v-a1-44", "ko-v-a1-45"
        ],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-u4-q1", level: "A1",
                prompt: "What is 'five' in native Korean?",
                options: ["오", "넷", "다섯", "여섯"],
                answer: "다섯"
            },
            {
                id: "ko-u4-q2", level: "A1",
                prompt: "How does 둘 (two) change before a counter?",
                options: ["이", "둘", "두", "둘이"],
                answer: "두"
            },
            {
                id: "ko-u4-q3", level: "A1",
                prompt: "What does '가족' mean?",
                options: ["Friend", "Family", "Teacher", "Person"],
                answer: "Family"
            },
            {
                id: "ko-u4-q4", level: "A1",
                prompt: "What does '동생' mean?",
                options: ["Older brother", "Older sister", "Younger sibling", "Husband"],
                answer: "Younger sibling"
            },
            {
                id: "ko-u4-q5", level: "A1",
                prompt: "Native Korean numbers are used for:",
                options: ["Dates", "Money", "Phone numbers", "Counting objects and hours"],
                answer: "Counting objects and hours"
            },
            {
                id: "ko-u4-q6", level: "A1",
                prompt: "What is '열'?",
                options: ["Eight", "Nine", "Ten", "Seven"],
                answer: "Ten"
            }
        ]
    },
    {
        id: "ko-a1-u5",
        level: "A1",
        order: 5,
        title: "Particles: Subject & Object",
        description: "Mark subjects with 이/가 and objects with 을/를",
        grammarIds: ["ko-g-a1-5", "ko-g-a1-6"],
        vocabIds: [
            "ko-v-a1-131", "ko-v-a1-132", "ko-v-a1-133", "ko-v-a1-134", "ko-v-a1-135",
            "ko-v-a1-136", "ko-v-a1-137", "ko-v-a1-138", "ko-v-a1-139", "ko-v-a1-140"
        ],
        verbIds: ["ko-vb-a1-10", "ko-vb-a1-11"],
        testQuestions: [
            {
                id: "ko-u5-q1", level: "A1",
                prompt: "Which particle marks the direct object?",
                options: ["은/는", "이/가", "을/를", "에서"],
                answer: "을/를"
            },
            {
                id: "ko-u5-q2", level: "A1",
                prompt: "Complete: '한국어___ 공부해요.' (I study Korean — 한국어 ends in vowel)",
                options: ["를", "을", "가", "는"],
                answer: "를"
            },
            {
                id: "ko-u5-q3", level: "A1",
                prompt: "Complete: '친구___ 왔어요.' (A friend came — 친구 ends in vowel)",
                options: ["이", "가", "를", "은"],
                answer: "가"
            },
            {
                id: "ko-u5-q4", level: "A1",
                prompt: "What does '공부' mean?",
                options: ["Work", "Music", "Studying", "Exercise"],
                answer: "Studying"
            },
            {
                id: "ko-u5-q5", level: "A1",
                prompt: "Complete: '밥___ 먹어요.' (I eat rice — 밥 ends in consonant)",
                options: ["를", "을", "이", "은"],
                answer: "을"
            },
            {
                id: "ko-u5-q6", level: "A1",
                prompt: "What does '친구' mean?",
                options: ["Family", "Teacher", "Friend", "Colleague"],
                answer: "Friend"
            }
        ]
    },
    {
        id: "ko-a1-u6",
        level: "A1",
        order: 6,
        title: "Present Tense: Eating & Drinking",
        description: "Learn how to conjugate verbs in the present tense",
        grammarIds: ["ko-g-a1-8"],
        vocabIds: [
            "ko-v-a1-61", "ko-v-a1-62", "ko-v-a1-63", "ko-v-a1-64", "ko-v-a1-65",
            "ko-v-a1-66", "ko-v-a1-67", "ko-v-a1-68", "ko-v-a1-69", "ko-v-a1-70",
            "ko-v-a1-71", "ko-v-a1-72", "ko-v-a1-73", "ko-v-a1-74", "ko-v-a1-75"
        ],
        verbIds: ["ko-vb-a1-1", "ko-vb-a1-3"],
        testQuestions: [
            {
                id: "ko-u6-q1", level: "A1",
                prompt: "How do you say 'I eat' (polite informal)?",
                options: ["먹습니다", "먹었어요", "먹어요", "먹다"],
                answer: "먹어요"
            },
            {
                id: "ko-u6-q2", level: "A1",
                prompt: "How do you conjugate 가다 (to go) in polite present?",
                options: ["가어요", "가아요", "가요", "갑니다 only"],
                answer: "가요"
            },
            {
                id: "ko-u6-q3", level: "A1",
                prompt: "What does '물' mean?",
                options: ["Juice", "Milk", "Tea", "Water"],
                answer: "Water"
            },
            {
                id: "ko-u6-q4", level: "A1",
                prompt: "How do you say 'I drink' (polite)?",
                options: ["마시요", "마셔요", "마시어요", "마십니다 only"],
                answer: "마셔요"
            },
            {
                id: "ko-u6-q5", level: "A1",
                prompt: "하다 verbs in present polite become:",
                options: ["하여요", "하아요", "해요", "합니다 only"],
                answer: "해요"
            },
            {
                id: "ko-u6-q6", level: "A1",
                prompt: "What does '음식' mean?",
                options: ["Drink", "Food", "Water", "Tea"],
                answer: "Food"
            }
        ]
    },
    {
        id: "ko-a1-u7",
        level: "A1",
        order: 7,
        title: "Going Places: Location Particles",
        description: "Use 에 and 에서 to talk about destinations and locations",
        grammarIds: ["ko-g-a1-7"],
        vocabIds: [
            "ko-v-a1-76", "ko-v-a1-77", "ko-v-a1-78", "ko-v-a1-79", "ko-v-a1-80",
            "ko-v-a1-81", "ko-v-a1-82", "ko-v-a1-83", "ko-v-a1-84", "ko-v-a1-85",
            "ko-v-a1-86", "ko-v-a1-87", "ko-v-a1-88", "ko-v-a1-89", "ko-v-a1-90",
            "ko-v-a1-91", "ko-v-a1-92", "ko-v-a1-93", "ko-v-a1-94", "ko-v-a1-95"
        ],
        verbIds: ["ko-vb-a1-2", "ko-vb-a1-7", "ko-vb-a1-9"],
        testQuestions: [
            {
                id: "ko-u7-q1", level: "A1",
                prompt: "Complete: '학교___ 가요.' (I go to school — destination)",
                options: ["에서", "에", "이", "을"],
                answer: "에"
            },
            {
                id: "ko-u7-q2", level: "A1",
                prompt: "Complete: '카페___ 공부해요.' (I study at the café — action location)",
                options: ["에", "에서", "이", "을"],
                answer: "에서"
            },
            {
                id: "ko-u7-q3", level: "A1",
                prompt: "What does '집' mean?",
                options: ["School", "Restaurant", "Café", "Home / House"],
                answer: "Home / House"
            },
            {
                id: "ko-u7-q4", level: "A1",
                prompt: "How do you say 'I came' (past tense of 오다)?",
                options: ["와요", "오았어요", "왔어요", "올 거예요"],
                answer: "왔어요"
            },
            {
                id: "ko-u7-q5", level: "A1",
                prompt: "What does '지하철' mean?",
                options: ["Bus", "Taxi", "Subway", "Car"],
                answer: "Subway"
            },
            {
                id: "ko-u7-q6", level: "A1",
                prompt: "Which particle do you use with 있다 to mean 'be at a place'?",
                options: ["에서", "에", "을", "이"],
                answer: "에"
            }
        ]
    },
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
    {
        id: "ko-a1-u9",
        level: "A1",
        order: 9,
        title: "Past Tense: ~았/었어요",
        description: "Talk about things that already happened",
        grammarIds: ["ko-g-a1-9"],
        vocabIds: [
            "ko-v-a1-141", "ko-v-a1-142", "ko-v-a1-143", "ko-v-a1-144",
            "ko-v-a1-145", "ko-v-a1-146"
        ],
        verbIds: ["ko-vb-a1-1", "ko-vb-a1-2", "ko-vb-a1-3", "ko-vb-a1-4", "ko-vb-a1-7", "ko-vb-a1-12", "ko-vb-a1-13", "ko-vb-a1-14"],
        testQuestions: [
            {
                id: "ko-u9-q1", level: "A1",
                prompt: "What is the past tense of 가다 (to go)?",
                options: ["가아요", "가었어요", "갔어요", "가요"],
                answer: "갔어요"
            },
            {
                id: "ko-u9-q2", level: "A1",
                prompt: "What is the past tense of 하다 (to do)?",
                options: ["해요", "하었어요", "했어요", "하겠어요"],
                answer: "했어요"
            },
            {
                id: "ko-u9-q3", level: "A1",
                prompt: "What does '비가 와요' mean?",
                options: ["It rained", "It is raining", "It will rain", "It doesn't rain"],
                answer: "It is raining"
            },
            {
                id: "ko-u9-q4", level: "A1",
                prompt: "What is the past tense of 먹다 (to eat)?",
                options: ["먹어요", "먹을 거예요", "먹었어요", "먹겠어요"],
                answer: "먹었어요"
            },
            {
                id: "ko-u9-q5", level: "A1",
                prompt: "What does '날씨' mean?",
                options: ["Rain", "Wind", "Weather", "Snow"],
                answer: "Weather"
            },
            {
                id: "ko-u9-q6", level: "A1",
                prompt: "How do you say 'It was cold'?",
                options: ["추워요", "추울 거예요", "추웠어요", "춥다"],
                answer: "추웠어요"
            }
        ]
    },
    {
        id: "ko-a1-u10",
        level: "A1",
        order: 10,
        title: "Negation & Question Words",
        description: "Say 'not' and ask who, what, where, when, why, how",
        grammarIds: ["ko-g-a1-10", "ko-g-a1-12"],
        vocabIds: [
            "ko-v-a1-114", "ko-v-a1-115", "ko-v-a1-116", "ko-v-a1-117",
            "ko-v-a1-118", "ko-v-a1-119", "ko-v-a1-120",
            "ko-v-a1-147", "ko-v-a1-148", "ko-v-a1-149", "ko-v-a1-150"
        ],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-u10-q1", level: "A1",
                prompt: "How do you say 'I don't eat it'?",
                options: ["못 먹어요.", "안 먹어요.", "먹지 않아요. only", "안 먹습니다. only"],
                answer: "안 먹어요."
            },
            {
                id: "ko-u10-q2", level: "A1",
                prompt: "What does '어디' mean?",
                options: ["When", "What", "Where", "Why"],
                answer: "Where"
            },
            {
                id: "ko-u10-q3", level: "A1",
                prompt: "How do you say 'I can't do it' (inability)?",
                options: ["안 해요.", "못 해요.", "하지 않아요.", "안 할 거예요."],
                answer: "못 해요."
            },
            {
                id: "ko-u10-q4", level: "A1",
                prompt: "What does '뭐' mean?",
                options: ["Where", "When", "Who", "What"],
                answer: "What"
            },
            {
                id: "ko-u10-q5", level: "A1",
                prompt: "What does '손' mean?",
                options: ["Foot", "Head", "Eye", "Hand"],
                answer: "Hand"
            },
            {
                id: "ko-u10-q6", level: "A1",
                prompt: "For 하다 compound verbs, where does 안 go?",
                options: ["Before the whole verb", "Between noun and 하다", "After 해요", "After 하다"],
                answer: "Between noun and 하다"
            }
        ]
    },
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
    }
]
