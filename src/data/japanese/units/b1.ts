import { LessonUnit } from "../../../types"

export const b1Units: LessonUnit[] = [
    {
        id: "ja-b1-u1",
        level: "B1",
        order: 1,
        title: "Must and May: なければならない & てもいい",
        description: "Express obligation (must/have to) and permission (may/it's okay to)",
        grammarIds: ["ja-g-b1-1", "ja-g-b1-2"],
        vocabIds: ["ja-v-b1-006", "ja-v-b1-008", "ja-v-b1-038", "ja-v-b1-039", "ja-v-b1-040", "ja-v-b1-041"],
        verbIds: ["ja-vb-b1-1", "ja-vb-b1-2"],
        testQuestions: [
            { id: "ja-uq-b1-1-1", level: "B1", prompt: "Which form expresses 'must do'?", options: ["〜てもいい", "〜なければならない", "〜てはいけない", "〜ようになる"], answer: "〜なければならない" },
            { id: "ja-uq-b1-1-2", level: "B1", prompt: "What does 〜てもいい mean?", options: ["must not", "have to", "it's okay to / may", "come to be"], answer: "it's okay to / may" },
            { id: "ja-uq-b1-1-3", level: "B1", prompt: "How do you say 'May I take a photo here?'", options: ["写真を撮らなければなりません", "写真を撮ってもいいですか", "写真を撮ってはいけない", "写真を撮るようになった"], answer: "写真を撮ってもいいですか" },
            { id: "ja-uq-b1-1-4", level: "B1", prompt: "Which means 'you must not sit here'?", options: ["ここに座ってもいいです", "ここに座りましょう", "ここに座ってはいけません", "ここに座るようになった"], answer: "ここに座ってはいけません" },
            { id: "ja-uq-b1-1-5", level: "B1", prompt: "How do you say 'I must study every day'?", options: ["毎日勉強したいです。", "毎日勉強してもいいです。", "毎日勉強しなければなりません。", "毎日勉強するつもりです。"], answer: "毎日勉強しなければなりません。" }
        ]
    },
    {
        id: "ja-b1-u2",
        level: "B1",
        order: 2,
        title: "Change Over Time: ようになる",
        description: "Express gradual change in ability or habits using ようになる",
        grammarIds: ["ja-g-b1-3"],
        vocabIds: ["ja-v-b1-003", "ja-v-b1-009", "ja-v-b1-011", "ja-v-b1-015", "ja-v-b1-016", "ja-v-b1-017"],
        verbIds: ["ja-vb-b1-1", "ja-vb-b1-3"],
        testQuestions: [
            { id: "ja-uq-b1-2-1", level: "B1", prompt: "Which grammar pattern expresses 'I've come to be able to do X'?", options: ["〜たり〜たりする", "〜てもいい", "〜ようになる", "〜なければならない"], answer: "〜ようになる" },
            { id: "ja-uq-b1-2-2", level: "B1", prompt: "How do you say 'I've come to be able to speak Japanese'?", options: ["日本語を話したいです。", "日本語が話せるようになりました。", "日本語を話したことがあります。", "日本語を話しています。"], answer: "日本語が話せるようになりました。" },
            { id: "ja-uq-b1-2-3", level: "B1", prompt: "What does 〜ようになる express?", options: ["A sudden change", "A gradual change in state or ability over time", "Permission to do something", "Obligation to do something"], answer: "A gradual change in state or ability over time" },
            { id: "ja-uq-b1-2-4", level: "B1", prompt: "How does 〜ようにする differ from 〜ようになる?", options: ["They mean the same thing", "ようにする means to make an effort to; ようになる means a change has occurred", "ようになる is formal; ようにする is casual", "ようにする is past tense"], answer: "ようにする means to make an effort to; ようになる means a change has occurred" },
            { id: "ja-uq-b1-2-5", level: "B1", prompt: "How do you say 'I've started running every day'?", options: ["毎日走りたいです。", "毎日走るつもりです。", "毎日走るようになりました。", "毎日走ってもいいです。"], answer: "毎日走るようになりました。" }
        ]
    },
    {
        id: "ja-b1-u3",
        level: "B1",
        order: 3,
        title: "Listing Actions: 〜たり〜たりする",
        description: "List representative actions from a larger set using the たり pattern",
        grammarIds: ["ja-g-b1-4"],
        vocabIds: ["ja-v-b1-004", "ja-v-b1-007", "ja-v-b1-020", "ja-v-b1-021", "ja-v-b1-022", "ja-v-b1-023"],
        verbIds: ["ja-vb-b1-2", "ja-vb-b1-4"],
        testQuestions: [
            { id: "ja-uq-b1-3-1", level: "B1", prompt: "The 〜たり〜たりする pattern is used to:", options: ["express prohibition", "list representative actions (among others)", "express ability", "express obligation"], answer: "list representative actions (among others)" },
            { id: "ja-uq-b1-3-2", level: "B1", prompt: "How is 〜たり formed?", options: ["て-form + り", "た-form (plain past) + り", "ます-form + り", "dictionary form + り"], answer: "た-form (plain past) + り" },
            { id: "ja-uq-b1-3-3", level: "B1", prompt: "How do you say 'On weekends I do things like watch movies and read books'?", options: ["週末は映画を見て、本を読みます。", "週末は映画を見たり、本を読んだりします。", "週末は映画を見ることができます。", "週末は映画を見たいです。"], answer: "週末は映画を見たり、本を読んだりします。" },
            { id: "ja-uq-b1-3-4", level: "B1", prompt: "What comes at the end of the 〜たり〜たり pattern?", options: ["です", "ます", "する / しました", "て"], answer: "する / しました" },
            { id: "ja-uq-b1-3-5", level: "B1", prompt: "What implication does 〜たり〜たりする carry that 〜て〜て does not?", options: ["The actions are in strict sequence", "The list is not exhaustive — there are other actions too", "The speaker dislikes the actions", "The actions happened only once"], answer: "The list is not exhaustive — there are other actions too" }
        ]
    },
    {
        id: "ja-b1-u4",
        level: "B1",
        order: 4,
        title: "B1 Vocabulary: Society & Abstract Concepts",
        description: "Build vocabulary for discussing society, health, and abstract ideas at B1 level",
        grammarIds: [],
        vocabIds: ["ja-v-b1-001", "ja-v-b1-002", "ja-v-b1-003", "ja-v-b1-004", "ja-v-b1-005", "ja-v-b1-006", "ja-v-b1-007", "ja-v-b1-008", "ja-v-b1-009", "ja-v-b1-010", "ja-v-b1-045", "ja-v-b1-050", "ja-v-b1-055", "ja-v-b1-060"],
        verbIds: ["ja-vb-b1-1", "ja-vb-b1-2", "ja-vb-b1-3", "ja-vb-b1-4"],
        testQuestions: [
            { id: "ja-uq-b1-4-1", level: "B1", prompt: "What does 環境 (かんきょう) mean?", options: ["Society", "Health", "Environment", "Freedom"], answer: "Environment" },
            { id: "ja-uq-b1-4-2", level: "B1", prompt: "What does 問題 (もんだい) mean?", options: ["Opportunity", "Problem / Issue", "Health", "Opinion"], answer: "Problem / Issue" },
            { id: "ja-uq-b1-4-3", level: "B1", prompt: "What does 大切 (たいせつ) mean?", options: ["Difficult", "Important / Precious", "Interesting", "Beautiful"], answer: "Important / Precious" },
            { id: "ja-uq-b1-4-4", level: "B1", prompt: "What does 意見 (いけん) mean?", options: ["Problem", "Freedom", "Opinion / View", "Health"], answer: "Opinion / View" },
            { id: "ja-uq-b1-4-5", level: "B1", prompt: "What does 機会 (きかい) mean?", options: ["Machine", "Opportunity / Chance", "Environment", "Society"], answer: "Opportunity / Chance" }
        ]
    }
]
