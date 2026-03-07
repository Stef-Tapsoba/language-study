import { QuizQuestion } from "../../../types"

export const placementQuestions: QuizQuestion[] = [
    // --- A1 (2 questions) ---
    {
        id: "ja-p-a1-1",
        level: "A1",
        prompt: "What does 'こんにちは' mean?",
        options: ["Goodbye", "Thank you", "Hello / Good afternoon", "Excuse me"],
        answer: "Hello / Good afternoon"
    },
    {
        id: "ja-p-a1-2",
        level: "A1",
        prompt: "Which sentence correctly means 'I am a student'?",
        options: ["わたしをがくせいです。", "わたしはがくせいです。", "がくせいはわたしです。", "わたしがくせいです。"],
        answer: "わたしはがくせいです。"
    },

    // --- A2 (2 questions) ---
    {
        id: "ja-p-a2-1",
        level: "A2",
        prompt: "How do you say 'I am eating now' (progressive)?",
        options: ["食べます", "食べています", "食べました", "食べません"],
        answer: "食べています"
    },
    {
        id: "ja-p-a2-2",
        level: "A2",
        prompt: "What is the て-form of 食べる (taberu)?",
        options: ["食べて", "食べた", "食べに", "食べで"],
        answer: "食べて"
    },

    // --- B1 (2 questions) ---
    {
        id: "ja-p-b1-1",
        level: "B1",
        prompt: "Which form expresses 'must do'?",
        options: ["〜てもいい", "〜なければならない", "〜てはいけない", "〜ことができる"],
        answer: "〜なければならない"
    },
    {
        id: "ja-p-b1-2",
        level: "B1",
        prompt: "What does 〜ようになる express?",
        options: ["Permission to do something", "Obligation to do something", "A gradual change in state or ability", "A past experience"],
        answer: "A gradual change in state or ability"
    },

    // --- B2 (2 questions) ---
    {
        id: "ja-p-b2-1",
        level: "B2",
        prompt: "Which is the conditional (ば-form) of 食べる?",
        options: ["食べれば", "食べたら", "食べなら", "食べては"],
        answer: "食べれば"
    },
    {
        id: "ja-p-b2-2",
        level: "B2",
        prompt: "What does 〜ようだ / 〜ようです express?",
        options: ["Direct quotation", "Conjecture based on evidence / appearance", "Desire", "Permission"],
        answer: "Conjecture based on evidence / appearance"
    },

    // --- C1 (2 questions) ---
    {
        id: "ja-p-c1-1",
        level: "C1",
        prompt: "Which is the humble (kenjougo) form of 言う (to say)?",
        options: ["おっしゃる", "申す", "いただく", "くださる"],
        answer: "申す"
    },
    {
        id: "ja-p-c1-2",
        level: "C1",
        prompt: "What does 〜にもかかわらず mean?",
        options: ["because of", "in spite of / regardless of", "thanks to", "in order to"],
        answer: "in spite of / regardless of"
    }
]
