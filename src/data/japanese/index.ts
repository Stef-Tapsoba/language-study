// data/japanese/index.ts
import { LanguageModule } from "../../types"

const module: LanguageModule = {
    grammar: [
        {
            id: "ja-g-a1-1",
            level: "A1",
            title: "Hiragana: The Basic Script",
            explanation: "Hiragana is a syllabic script with 46 characters. Each character represents a syllable (e.g. か = ka, き = ki). It is used for native Japanese words and grammatical elements. Learning hiragana is the essential first step.",
            examples: [
                { native: "あいうえお", romanized: "a i u e o", translation: "The five vowels" },
                { native: "かきくけこ", romanized: "ka ki ku ke ko", translation: "The 'k' row" },
                { native: "さしすせそ", romanized: "sa shi su se so", translation: "The 's' row" }
            ]
        },
        {
            id: "ja-g-a1-2",
            level: "A1",
            title: "Basic Sentence Structure: X は Y です",
            explanation: "Japanese sentences follow Subject-Object-Verb order. The particle は (wa) marks the topic. です (desu) means 'is/am/are' in polite speech.",
            examples: [
                { native: "わたしは がくせい です。", romanized: "Watashi wa gakusei desu.", translation: "I am a student." },
                { native: "これは ほん です。", romanized: "Kore wa hon desu.", translation: "This is a book." },
                { native: "かれは にほんじん です。", romanized: "Kare wa nihonjin desu.", translation: "He is Japanese." }
            ]
        },
        {
            id: "ja-g-a1-3",
            level: "A1",
            title: "Greetings and Polite Phrases",
            explanation: "Japanese has different levels of politeness. These are the standard (polite) greetings used in most everyday situations.",
            examples: [
                { native: "おはようございます。", romanized: "Ohayou gozaimasu.", translation: "Good morning. (formal)" },
                { native: "こんにちは。", romanized: "Konnichiwa.", translation: "Hello / Good afternoon." },
                { native: "こんばんは。", romanized: "Konbanwa.", translation: "Good evening." },
                { native: "ありがとうございます。", romanized: "Arigatou gozaimasu.", translation: "Thank you very much." },
                { native: "すみません。", romanized: "Sumimasen.", translation: "Excuse me / I'm sorry." }
            ]
        },
        {
            id: "ja-g-a1-4",
            level: "A1",
            title: "Numbers 1–10",
            explanation: "Japanese has two counting systems: native Japanese (hitotsu, futatsu…) and Sino-Japanese (ichi, ni, san…). The Sino-Japanese numbers are used for most counting.",
            examples: [
                { native: "一 (いち)", romanized: "ichi", translation: "1" },
                { native: "二 (に)", romanized: "ni", translation: "2" },
                { native: "三 (さん)", romanized: "san", translation: "3" },
                { native: "五 (ご)", romanized: "go", translation: "5" },
                { native: "十 (じゅう)", romanized: "juu", translation: "10" }
            ]
        },
        {
            id: "ja-g-a2-1",
            level: "A2",
            title: "て-Form and Connecting Actions",
            explanation: "The て-form (te-form) connects actions ('and then') and forms progressive expressions with います (imasu).",
            examples: [
                { native: "食べて、寝ます。", romanized: "Tabete, nemasu.", translation: "I eat and then sleep." },
                { native: "今、食べています。", romanized: "Ima, tabete imasu.", translation: "I am eating now." }
            ]
        }
    ],

    vocab: [
        { id: "ja-v-a1-1",  level: "A1", word: "こんにちは",   romanized: "Konnichiwa",  translation: "Hello",           category: "Greetings", example: { native: "こんにちは！げんきですか？", romanized: "Konnichiwa! Genki desu ka?", translation: "Hello! Are you well?" } },
        { id: "ja-v-a1-2",  level: "A1", word: "ありがとう",   romanized: "Arigatou",    translation: "Thank you",        category: "Greetings", example: { native: "ありがとうございます。", romanized: "Arigatou gozaimasu.", translation: "Thank you very much." } },
        { id: "ja-v-a1-3",  level: "A1", word: "はい",         romanized: "Hai",         translation: "Yes",              category: "Basics",    example: { native: "はい、そうです。", romanized: "Hai, sou desu.", translation: "Yes, that's right." } },
        { id: "ja-v-a1-4",  level: "A1", word: "いいえ",       romanized: "Iie",         translation: "No",               category: "Basics",    example: { native: "いいえ、ちがいます。", romanized: "Iie, chigaimasu.", translation: "No, that's different." } },
        { id: "ja-v-a1-5",  level: "A1", word: "すみません",   romanized: "Sumimasen",   translation: "Excuse me / Sorry", category: "Greetings", example: { native: "すみません、えきはどこですか？", romanized: "Sumimasen, eki wa doko desu ka?", translation: "Excuse me, where is the station?" } },
        { id: "ja-v-a1-6",  level: "A1", word: "みず",         romanized: "Mizu",        translation: "Water",            category: "Food",      example: { native: "みずをください。", romanized: "Mizu wo kudasai.", translation: "Water, please." } },
        { id: "ja-v-a1-7",  level: "A1", word: "ごはん",       romanized: "Gohan",       translation: "Rice / Meal",      category: "Food",      example: { native: "ごはんをたべます。", romanized: "Gohan wo tabemasu.", translation: "I eat rice / a meal." } },
        { id: "ja-v-a1-8",  level: "A1", word: "ともだち",     romanized: "Tomodachi",   translation: "Friend",           category: "People",    example: { native: "かれはわたしのともだちです。", romanized: "Kare wa watashi no tomodachi desu.", translation: "He is my friend." } },
        { id: "ja-v-a1-9",  level: "A1", word: "がっこう",     romanized: "Gakkou",      translation: "School",           category: "Places",    example: { native: "がっこうにいきます。", romanized: "Gakkou ni ikimasu.", translation: "I go to school." } },
        { id: "ja-v-a1-10", level: "A1", word: "にほん",       romanized: "Nihon",       translation: "Japan",            category: "Places",    example: { native: "にほんにすんでいます。", romanized: "Nihon ni sunde imasu.", translation: "I live in Japan." } }
    ],

    verbs: [
        {
            id: "ja-vb-a1-1",
            level: "A1",
            infinitive: "食べる",
            romanized: "taberu",
            meaning: "to eat",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "Affirmative", form: "食べます", romanized: "tabemasu" },
                        { pronoun: "Negative",    form: "食べません", romanized: "tabemasen" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "Affirmative", form: "食べました", romanized: "tabemashita" },
                        { pronoun: "Negative",    form: "食べませんでした", romanized: "tabemasen deshita" }
                    ]
                }
            ]
        },
        {
            id: "ja-vb-a1-2",
            level: "A1",
            infinitive: "飲む",
            romanized: "nomu",
            meaning: "to drink",
            conjugations: [{
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "飲みます", romanized: "nomimasu" },
                    { pronoun: "Negative",    form: "飲みません", romanized: "nomimasen" }
                ]
            }]
        },
        {
            id: "ja-vb-a1-3",
            level: "A1",
            infinitive: "行く",
            romanized: "iku",
            meaning: "to go",
            conjugations: [{
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "行きます", romanized: "ikimasu" },
                    { pronoun: "Negative",    form: "行きません", romanized: "ikimasen" }
                ]
            }]
        },
        {
            id: "ja-vb-a1-4",
            level: "A1",
            infinitive: "する",
            romanized: "suru",
            meaning: "to do",
            conjugations: [{
                tense: "Present (Polite)",
                forms: [
                    { pronoun: "Affirmative", form: "します", romanized: "shimasu" },
                    { pronoun: "Negative",    form: "しません", romanized: "shimasen" }
                ]
            }]
        }
    ],

    placementQuestions: [
        { id: "ja-p-a1-1", level: "A1", prompt: "What does 'こんにちは' mean?", options: ["Goodbye", "Thank you", "Hello", "Excuse me"], answer: "Hello" },
        { id: "ja-p-a1-2", level: "A1", prompt: "What particle marks the topic of a sentence?", options: ["を", "が", "は", "に"], answer: "は" },
        { id: "ja-p-a2-1", level: "A2", prompt: "How do you say 'I am eating now' (progressive)?", options: ["食べます", "食べています", "食べました", "食べません"], answer: "食べています" },
        { id: "ja-p-a2-2", level: "A2", prompt: "What is the te-form of 食べる?", options: ["食べて", "食べた", "食べに", "食べで"], answer: "食べて" },
        { id: "ja-p-b1-1", level: "B1", prompt: "Which form expresses 'must do'?", options: ["〜てもいい", "〜なければならない", "〜てはいけない", "〜ことができる"], answer: "〜なければならない" },
        { id: "ja-p-b1-2", level: "B1", prompt: "What does 〜ことができる express?", options: ["Must do", "Cannot do", "Able to do", "Should do"], answer: "Able to do" },
        { id: "ja-p-b2-1", level: "B2", prompt: "Which is the conditional form of 食べる?", options: ["食べれば", "食べたら", "食べなら", "食べては"], answer: "食べれば" },
        { id: "ja-p-b2-2", level: "B2", prompt: "What does 〜ようだ express?", options: ["Direct quotation", "Conjecture based on evidence", "Desire", "Permission"], answer: "Conjecture based on evidence" },
        { id: "ja-p-c1-1", level: "C1", prompt: "Which is the humble form of 言う?", options: ["おっしゃる", "申す", "いただく", "くださる"], answer: "申す" },
        { id: "ja-p-c1-2", level: "C1", prompt: "What does 〜にもかかわらず mean?", options: ["because of", "in spite of", "thanks to", "in order to"], answer: "in spite of" }
    ],

    levelQuestions: [
        { id: "ja-lt-a1-1",  level: "A1", prompt: "What does 'ありがとう' mean?", options: ["Hello", "Goodbye", "Thank you", "Excuse me"], answer: "Thank you" },
        { id: "ja-lt-a1-2",  level: "A1", prompt: "What does 'はい' mean?", options: ["No", "Yes", "Maybe", "Please"], answer: "Yes" },
        { id: "ja-lt-a1-3",  level: "A1", prompt: "How do you say 'I am a student'?", options: ["わたしはがくせいです。", "がくせいはわたしです。", "わたしをがくせいです。", "わたしがくせいです。"], answer: "わたしはがくせいです。" },
        { id: "ja-lt-a1-4",  level: "A1", prompt: "What is 'water' in Japanese?", options: ["ごはん", "みず", "おちゃ", "ジュース"], answer: "みず" },
        { id: "ja-lt-a1-5",  level: "A1", prompt: "What does 'ともだち' mean?", options: ["Teacher", "Family", "Friend", "Enemy"], answer: "Friend" },
        { id: "ja-lt-a1-6",  level: "A1", prompt: "How do you say 'Good evening'?", options: ["おはようございます", "こんにちは", "こんばんは", "おやすみなさい"], answer: "こんばんは" },
        { id: "ja-lt-a1-7",  level: "A1", prompt: "What is 3 in Japanese (Sino-Japanese)?", options: ["ひとつ", "に", "さん", "よん"], answer: "さん" },
        { id: "ja-lt-a1-8",  level: "A1", prompt: "How do you say 'I eat' (polite)?", options: ["食べません", "食べる", "食べます", "食べました"], answer: "食べます" },
        { id: "ja-lt-a1-9",  level: "A1", prompt: "What particle marks the direct object?", options: ["は", "が", "に", "を"], answer: "を" },
        { id: "ja-lt-a1-10", level: "A1", prompt: "What does 'すみません' mean?", options: ["Thank you", "Goodbye", "Excuse me", "Yes"], answer: "Excuse me" },
        { id: "ja-lt-a1-11", level: "A1", prompt: "What is 'school' in Japanese?", options: ["にほん", "がっこう", "みず", "ごはん"], answer: "がっこう" },
        { id: "ja-lt-a1-12", level: "A1", prompt: "How do you say 'to go' (polite present)?", options: ["行きます", "行きません", "行きました", "行って"], answer: "行きます" },
        { id: "ja-lt-a1-13", level: "A1", prompt: "What does です mean at the end of a sentence?", options: ["Question marker", "Polite copula (is/am/are)", "Past tense marker", "Plural marker"], answer: "Polite copula (is/am/are)" },
        { id: "ja-lt-a1-14", level: "A1", prompt: "What does 'いいえ' mean?", options: ["Yes", "No", "Please", "Hello"], answer: "No" },
        { id: "ja-lt-a1-15", level: "A1", prompt: "How do you say 'I drink' (polite)?", options: ["飲みません", "飲みます", "飲みました", "飲む"], answer: "飲みます" }
    ]
}

export default module
