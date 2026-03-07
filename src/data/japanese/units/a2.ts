import { LessonUnit } from "../../../types"

export const a2Units: LessonUnit[] = [
    {
        id: "ja-a2-u1",
        level: "A2",
        order: 1,
        title: "て-form & Progressive",
        description: "Learn the て-form conjugation rules and use ている for ongoing actions",
        grammarIds: ["ja-g-a2-1"],
        vocabIds: ["ja-v-a2-009", "ja-v-a2-010"],
        verbIds: ["ja-vb-a2-1", "ja-vb-a2-2", "ja-vb-a2-3", "ja-vb-a2-4"],
        testQuestions: [
            { id: "ja-uq-a2-1-1", level: "A2", prompt: "What is the て-form of 食べる (taberu)?", options: ["食べた", "食べに", "食べて", "食べで"], answer: "食べて" },
            { id: "ja-uq-a2-1-2", level: "A2", prompt: "How do you say 'I am eating now'?", options: ["食べます", "食べています", "食べました", "食べません"], answer: "食べています" },
            { id: "ja-uq-a2-1-3", level: "A2", prompt: "What is the て-form of 飲む (nomu)?", options: ["飲んで", "飲んた", "飲みて", "飲んに"], answer: "飲んで" },
            { id: "ja-uq-a2-1-4", level: "A2", prompt: "How do you say 'I am watching TV'?", options: ["テレビを見ます。", "テレビを見ました。", "テレビを見ています。", "テレビを見ません。"], answer: "テレビを見ています。" },
            { id: "ja-uq-a2-1-5", level: "A2", prompt: "The て-form of 行く (iku) is irregular. What is it?", options: ["行いて", "行きて", "行って", "行いで"], answer: "行って" }
        ]
    },
    {
        id: "ja-a2-u2",
        level: "A2",
        order: 2,
        title: "Ability: ことができる",
        description: "Express ability and inability using the ことができる / ことができない pattern",
        grammarIds: ["ja-g-a2-2"],
        vocabIds: ["ja-v-a2-011", "ja-v-a2-012", "ja-v-a2-013"],
        verbIds: ["ja-vb-a2-1", "ja-vb-a2-2"],
        testQuestions: [
            { id: "ja-uq-a2-2-1", level: "A2", prompt: "How do you say 'I can speak Japanese'?", options: ["日本語を話します。", "日本語を話したいです。", "日本語を話すことができます。", "日本語を話しています。"], answer: "日本語を話すことができます。" },
            { id: "ja-uq-a2-2-2", level: "A2", prompt: "How do you express inability using ことができる?", options: ["ことができます", "ことができません", "ことができました", "ことがしたい"], answer: "ことができません" },
            { id: "ja-uq-a2-2-3", level: "A2", prompt: "Which verb form is used before ことができる?", options: ["ます-form", "て-form", "Dictionary form", "た-form"], answer: "Dictionary form" },
            { id: "ja-uq-a2-2-4", level: "A2", prompt: "How do you say 'Can you swim?'", options: ["泳ぐことができますか？", "泳いでいますか？", "泳ぎたいですか？", "泳ぎましたか？"], answer: "泳ぐことができますか？" },
            { id: "ja-uq-a2-2-5", level: "A2", prompt: "What does ことができません mean?", options: ["I want to do", "I did not do", "I cannot do", "I am doing"], answer: "I cannot do" }
        ]
    },
    {
        id: "ja-a2-u3",
        level: "A2",
        order: 3,
        title: "Intentions: つもりです",
        description: "Express firm plans and intentions using つもりです",
        grammarIds: ["ja-g-a2-3"],
        vocabIds: ["ja-v-a2-014", "ja-v-a2-015", "ja-v-a2-016", "ja-v-a2-017", "ja-v-a2-018"],
        verbIds: ["ja-vb-a2-3", "ja-vb-a2-4"],
        testQuestions: [
            { id: "ja-uq-a2-3-1", level: "A2", prompt: "How do you say 'I intend to go to Japan next year'?", options: ["来年、日本に行きたいです。", "来年、日本に行くつもりです。", "来年、日本に行きました。", "来年、日本に行けます。"], answer: "来年、日本に行くつもりです。" },
            { id: "ja-uq-a2-3-2", level: "A2", prompt: "Which verb form goes before つもりです?", options: ["ます-form", "て-form", "Dictionary form", "ました-form"], answer: "Dictionary form" },
            { id: "ja-uq-a2-3-3", level: "A2", prompt: "How do you express 'I don't intend to do X'?", options: ["〜するつもりです", "〜しないつもりです", "〜したつもりです", "〜してもいいです"], answer: "〜しないつもりです" },
            { id: "ja-uq-a2-3-4", level: "A2", prompt: "What does つもり mean?", options: ["Desire / want", "Experience", "Intention / plan", "Ability"], answer: "Intention / plan" },
            { id: "ja-uq-a2-3-5", level: "A2", prompt: "How do you ask 'What do you intend to do on the weekend?'", options: ["週末は何をしましたか？", "週末は何をするつもりですか？", "週末は何がしたいですか？", "週末は何をしていますか？"], answer: "週末は何をするつもりですか？" }
        ]
    },
    {
        id: "ja-a2-u4",
        level: "A2",
        order: 4,
        title: "Past Experience: たことがある",
        description: "Talk about life experiences — what you have or have never done — using たことがある",
        grammarIds: ["ja-g-a2-4"],
        vocabIds: ["ja-v-a2-009", "ja-v-a2-011", "ja-v-a2-017", "ja-v-a2-018"],
        verbIds: ["ja-vb-a2-1", "ja-vb-a2-2"],
        testQuestions: [
            { id: "ja-uq-a2-4-1", level: "A2", prompt: "How do you say 'I have eaten sushi before'?", options: ["すしを食べます。", "すしを食べたことがあります。", "すしを食べています。", "すしを食べるつもりです。"], answer: "すしを食べたことがあります。" },
            { id: "ja-uq-a2-4-2", level: "A2", prompt: "How do you say 'I have never been to Japan'?", options: ["日本に行きたいです。", "日本に行ったことがありません。", "日本に行くつもりです。", "日本に行っています。"], answer: "日本に行ったことがありません。" },
            { id: "ja-uq-a2-4-3", level: "A2", prompt: "Which verb form is used before ことがあります (for experience)?", options: ["Dictionary form", "て-form", "た-form (plain past)", "ます-form"], answer: "た-form (plain past)" },
            { id: "ja-uq-a2-4-4", level: "A2", prompt: "How do you ask 'Have you ever eaten ramen?'", options: ["ラーメンを食べますか？", "ラーメンを食べたことがありますか？", "ラーメンを食べていますか？", "ラーメンを食べたいですか？"], answer: "ラーメンを食べたことがありますか？" },
            { id: "ja-uq-a2-4-5", level: "A2", prompt: "What does たことがあります express?", options: ["Ongoing action in the present", "Intention to do something", "Past experience (have done before)", "Ability to do something"], answer: "Past experience (have done before)" }
        ]
    }
]
