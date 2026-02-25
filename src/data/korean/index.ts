// data/korean/index.ts
import { LanguageModule } from "../../types"

const module: LanguageModule = {
    grammar: [
        {
            id: "ko-g-a1-1",
            level: "A1",
            title: "Hangul: The Korean Alphabet",
            explanation: "Hangul is the Korean writing system, created in 1443. It consists of 14 consonants (자음) and 10 vowels (모음) that combine into syllable blocks. It is considered one of the most logical writing systems in the world and can be learned in a few hours.",
            examples: [
                { native: "ㅏ ㅑ ㅓ ㅕ ㅗ", romanized: "a ya eo yeo o", translation: "First 5 vowels" },
                { native: "가나다라마바사", romanized: "ga na da ra ma ba sa", translation: "First 7 syllables with vowel ㅏ" },
                { native: "한국어", romanized: "Hangugeo", translation: "Korean language" }
            ]
        },
        {
            id: "ko-g-a1-2",
            level: "A1",
            title: "Basic Sentence Structure: X은/는 Y이에요/예요",
            explanation: "Korean follows Subject-Object-Verb order. 은/는 marks the topic. 이에요 (after consonant) / 예요 (after vowel) mean 'is/am/are' in polite informal speech.",
            examples: [
                { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "I am a student." },
                { native: "이것은 책이에요.", romanized: "Igeoseun chaegieyo.", translation: "This is a book." },
                { native: "그는 한국 사람이에요.", romanized: "Geuneun hanguk saramieyo.", translation: "He is Korean." }
            ]
        },
        {
            id: "ko-g-a1-3",
            level: "A1",
            title: "Greetings and Basic Expressions",
            explanation: "Korean has formal (합쇼체) and polite informal (해요체) speech levels. 해요체 is the most common for everyday use with strangers and acquaintances.",
            examples: [
                { native: "안녕하세요.", romanized: "Annyeonghaseyo.", translation: "Hello. (polite)" },
                { native: "감사합니다.", romanized: "Gamsahamnida.", translation: "Thank you. (formal)" },
                { native: "괜찮아요.", romanized: "Gwaenchanayo.", translation: "It's okay / I'm fine." },
                { native: "죄송합니다.", romanized: "Joesonghamnida.", translation: "I'm sorry. (formal)" }
            ]
        },
        {
            id: "ko-g-a1-4",
            level: "A1",
            title: "Numbers: Sino-Korean (일, 이, 삼...)",
            explanation: "Korean has two number systems. Sino-Korean numbers are used for dates, money, phone numbers, and minutes.",
            examples: [
                { native: "일 (1)", romanized: "il", translation: "1" },
                { native: "이 (2)", romanized: "i", translation: "2" },
                { native: "삼 (3)", romanized: "sam", translation: "3" },
                { native: "십 (10)", romanized: "sip", translation: "10" },
                { native: "백 (100)", romanized: "baek", translation: "100" }
            ]
        },
        {
            id: "ko-g-a2-1",
            level: "A2",
            title: "Verb Conjugation: Present Tense",
            explanation: "Korean verbs end in 다 in dictionary form. For polite present tense, remove 다 and add 아요/어요 based on the vowel harmony of the last syllable.",
            examples: [
                { native: "먹다 → 먹어요", romanized: "meokda → meogeoyo", translation: "to eat → I eat (polite)" },
                { native: "가다 → 가요", romanized: "gada → gayo", translation: "to go → I go (polite)" },
                { native: "마시다 → 마셔요", romanized: "masida → masyeoyo", translation: "to drink → I drink (polite)" }
            ]
        }
    ],

    vocab: [
        { id: "ko-v-a1-1",  level: "A1", word: "안녕하세요",  romanized: "Annyeonghaseyo",  translation: "Hello",         category: "Greetings", example: { native: "안녕하세요! 잘 지내요?", romanized: "Annyeonghaseyo! Jal jinaeyo?", translation: "Hello! Are you doing well?" } },
        { id: "ko-v-a1-2",  level: "A1", word: "감사합니다",  romanized: "Gamsahamnida",    translation: "Thank you",     category: "Greetings", example: { native: "정말 감사합니다.", romanized: "Jeongmal gamsahamnida.", translation: "Thank you very much." } },
        { id: "ko-v-a1-3",  level: "A1", word: "네",          romanized: "Ne",              translation: "Yes",           category: "Basics",    example: { native: "네, 맞아요.", romanized: "Ne, majayo.", translation: "Yes, that's right." } },
        { id: "ko-v-a1-4",  level: "A1", word: "아니요",      romanized: "Aniyo",           translation: "No",            category: "Basics",    example: { native: "아니요, 괜찮아요.", romanized: "Aniyo, gwaenchanayo.", translation: "No, it's okay." } },
        { id: "ko-v-a1-5",  level: "A1", word: "죄송합니다",  romanized: "Joesonghamnida",  translation: "I'm sorry",     category: "Greetings", example: { native: "죄송합니다, 늦었어요.", romanized: "Joesonghamnida, neujeosseoyo.", translation: "I'm sorry, I'm late." } },
        { id: "ko-v-a1-6",  level: "A1", word: "물",          romanized: "Mul",             translation: "Water",         category: "Food",      example: { native: "물 주세요.", romanized: "Mul juseyo.", translation: "Water, please." } },
        { id: "ko-v-a1-7",  level: "A1", word: "밥",          romanized: "Bap",             translation: "Rice / Meal",   category: "Food",      example: { native: "밥을 먹어요.", romanized: "Babeul meogeoyo.", translation: "I eat rice." } },
        { id: "ko-v-a1-8",  level: "A1", word: "친구",        romanized: "Chingu",          translation: "Friend",        category: "People",    example: { native: "그는 내 친구예요.", romanized: "Geuneun nae chinguye yo.", translation: "He is my friend." } },
        { id: "ko-v-a1-9",  level: "A1", word: "학교",        romanized: "Hakgyo",          translation: "School",        category: "Places",    example: { native: "학교에 가요.", romanized: "Hakgyoe gayo.", translation: "I go to school." } },
        { id: "ko-v-a1-10", level: "A1", word: "한국",        romanized: "Hanguk",          translation: "Korea",         category: "Places",    example: { native: "한국에 살아요.", romanized: "Hanguke sarayo.", translation: "I live in Korea." } }
    ],

    verbs: [
        {
            id: "ko-vb-a1-1",
            level: "A1",
            infinitive: "먹다",
            romanized: "meokda",
            meaning: "to eat",
            conjugations: [
                {
                    tense: "Present (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "먹어요", romanized: "meogeoyo" },
                        { pronoun: "Negative",    form: "안 먹어요", romanized: "an meogeoyo" }
                    ]
                },
                {
                    tense: "Past (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "먹었어요", romanized: "meogeosseoyo" },
                        { pronoun: "Negative",    form: "안 먹었어요", romanized: "an meogeosseoyo" }
                    ]
                }
            ]
        },
        {
            id: "ko-vb-a1-2",
            level: "A1",
            infinitive: "가다",
            romanized: "gada",
            meaning: "to go",
            conjugations: [{
                tense: "Present (Polite Informal)",
                forms: [
                    { pronoun: "Affirmative", form: "가요", romanized: "gayo" },
                    { pronoun: "Negative",    form: "안 가요", romanized: "an gayo" }
                ]
            }]
        },
        {
            id: "ko-vb-a1-3",
            level: "A1",
            infinitive: "마시다",
            romanized: "masida",
            meaning: "to drink",
            conjugations: [{
                tense: "Present (Polite Informal)",
                forms: [
                    { pronoun: "Affirmative", form: "마셔요", romanized: "masyeoyo" },
                    { pronoun: "Negative",    form: "안 마셔요", romanized: "an masyeoyo" }
                ]
            }]
        },
        {
            id: "ko-vb-a1-4",
            level: "A1",
            infinitive: "하다",
            romanized: "hada",
            meaning: "to do",
            conjugations: [{
                tense: "Present (Polite Informal)",
                forms: [
                    { pronoun: "Affirmative", form: "해요", romanized: "haeyo" },
                    { pronoun: "Negative",    form: "안 해요", romanized: "an haeyo" }
                ]
            }]
        }
    ],

    placementQuestions: [
        { id: "ko-p-a1-1", level: "A1", prompt: "What does '안녕하세요' mean?", options: ["Goodbye", "Thank you", "Hello", "Excuse me"], answer: "Hello" },
        { id: "ko-p-a1-2", level: "A1", prompt: "What particle marks the topic in Korean?", options: ["을/를", "이/가", "은/는", "에서"], answer: "은/는" },
        { id: "ko-p-a2-1", level: "A2", prompt: "How do you conjugate 가다 (to go) in polite present?", options: ["가다요", "갑니다", "가요", "갔어요"], answer: "가요" },
        { id: "ko-p-a2-2", level: "A2", prompt: "What is the past tense of 먹다 (to eat)?", options: ["먹어요", "먹었어요", "먹겠어요", "먹을 거예요"], answer: "먹었어요" },
        { id: "ko-p-b1-1", level: "B1", prompt: "What does ~(으)면 express?", options: ["Desire", "Conditional (if/when)", "Permission", "Prohibition"], answer: "Conditional (if/when)" },
        { id: "ko-p-b1-2", level: "B1", prompt: "What does ~고 싶다 mean?", options: ["I must do", "I can do", "I want to do", "I should do"], answer: "I want to do" },
        { id: "ko-p-b2-1", level: "B2", prompt: "Which ending expresses indirect speech?", options: ["~다고 하다", "~아/어서", "~지만", "~도록"], answer: "~다고 하다" },
        { id: "ko-p-b2-2", level: "B2", prompt: "What does ~ㄹ/을 수 있다 mean?", options: ["Must do", "Cannot", "Can / be able to", "Should"], answer: "Can / be able to" },
        { id: "ko-p-c1-1", level: "C1", prompt: "Which is the honorific form of 먹다?", options: ["드시다", "잡수시다", "both are correct", "neither"], answer: "both are correct" },
        { id: "ko-p-c1-2", level: "C1", prompt: "What does ~에도 불구하고 mean?", options: ["because of", "in spite of", "thanks to", "instead of"], answer: "in spite of" }
    ],

    levelQuestions: [
        { id: "ko-lt-a1-1",  level: "A1", prompt: "What does '감사합니다' mean?", options: ["Hello", "Goodbye", "Thank you", "Excuse me"], answer: "Thank you" },
        { id: "ko-lt-a1-2",  level: "A1", prompt: "What does '네' mean?", options: ["No", "Yes", "Maybe", "Please"], answer: "Yes" },
        { id: "ko-lt-a1-3",  level: "A1", prompt: "How do you say 'I am a student'?", options: ["저는 학생이에요.", "학생는 저이에요.", "저를 학생이에요.", "저이에요 학생."], answer: "저는 학생이에요." },
        { id: "ko-lt-a1-4",  level: "A1", prompt: "What is 'water' in Korean?", options: ["밥", "물", "차", "주스"], answer: "물" },
        { id: "ko-lt-a1-5",  level: "A1", prompt: "What does '친구' mean?", options: ["Teacher", "Family", "Friend", "Enemy"], answer: "Friend" },
        { id: "ko-lt-a1-6",  level: "A1", prompt: "How do you say 'I'm sorry' (formal)?", options: ["감사합니다", "안녕하세요", "죄송합니다", "괜찮아요"], answer: "죄송합니다" },
        { id: "ko-lt-a1-7",  level: "A1", prompt: "What is 3 in Sino-Korean?", options: ["하나", "둘", "삼", "넷"], answer: "삼" },
        { id: "ko-lt-a1-8",  level: "A1", prompt: "How do you say 'I eat' (polite informal)?", options: ["먹습니다", "먹었어요", "먹어요", "먹다"], answer: "먹어요" },
        { id: "ko-lt-a1-9",  level: "A1", prompt: "Which particle marks the direct object?", options: ["은/는", "이/가", "을/를", "에서"], answer: "을/를" },
        { id: "ko-lt-a1-10", level: "A1", prompt: "What does '학교' mean?", options: ["Hospital", "Restaurant", "School", "Market"], answer: "School" },
        { id: "ko-lt-a1-11", level: "A1", prompt: "How do you say 'to go' in polite present?", options: ["가다", "갑니다", "가요", "갔어요"], answer: "가요" },
        { id: "ko-lt-a1-12", level: "A1", prompt: "What does 'ㄹ' romanize to?", options: ["r or l", "only r", "only l", "n"], answer: "r or l" },
        { id: "ko-lt-a1-13", level: "A1", prompt: "What does '아니요' mean?", options: ["Yes", "No", "Please", "Sorry"], answer: "No" },
        { id: "ko-lt-a1-14", level: "A1", prompt: "What is 'rice/meal' in Korean?", options: ["물", "빵", "밥", "국"], answer: "밥" },
        { id: "ko-lt-a1-15", level: "A1", prompt: "How do you say 'to drink' (polite)?", options: ["마시다", "마셔요", "마셨어요", "안 마셔요"], answer: "마셔요" }
    ]
}

export default module
