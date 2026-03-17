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
    },
    {
        id: "ja-a2-u5",
        level: "A2",
        order: 5,
        title: "Permission & Prohibition",
        description: "Ask for and grant permission using 〜てもいいです, and express prohibition with 〜てはいけません. Handle real-world everyday situations with confidence.",
        grammarIds: ["ja-g-a2-5"],
        vocabIds: ["ja-v-a2-080", "ja-v-a2-081", "ja-v-a2-082", "ja-v-a2-083", "ja-v-a2-084", "ja-v-a2-085"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-5-1", level: "A2", prompt: "How do you ask 'May I use this phone?'", options: ["この電話を使ってもいいですか。", "この電話を使わなければなりません。", "この電話を使ってはいけません。", "この電話を使いたいです。"], answer: "この電話を使ってもいいですか。" },
            { id: "ja-uq-a2-5-2", level: "A2", prompt: "What does 〜てはいけません mean?", options: ["You must do ~", "You may do ~", "You must not do ~", "You want to do ~"], answer: "You must not do ~" },
            { id: "ja-uq-a2-5-3", level: "A2", prompt: "Complete: 'ここで食べ___ いいですか。'", options: ["ても", "ては", "ない", "たら"], answer: "ても" },
            { id: "ja-uq-a2-5-4", level: "A2", prompt: "How do you say 'You must not take photos here'?", options: ["ここで写真を撮ってもいいです。", "ここで写真を撮ってください。", "ここで写真を撮ってはいけません。", "ここで写真を撮りたいです。"], answer: "ここで写真を撮ってはいけません。" },
            { id: "ja-uq-a2-5-5", level: "A2", prompt: "What does 'びょういん' (病院) mean?", options: ["pharmacy", "school", "hospital", "office"], answer: "hospital" },
            { id: "ja-uq-a2-5-6", level: "A2", prompt: "Which is the correct て-form of 飲む (to drink)?", options: ["飲みて", "飲んで", "飲いて", "飲んた"], answer: "飲んで" },
        ]
    },
    {
        id: "ja-a2-u6",
        level: "A2",
        order: 6,
        title: "Giving & Receiving — あげる・もらう・くれる",
        description: "Master the perspective-dependent giving and receiving verbs. Use あげる (I give), もらう (I receive), and くれる (someone gives to me) correctly in everyday contexts.",
        grammarIds: ["ja-g-a2-6"],
        vocabIds: ["ja-v-a2-086", "ja-v-a2-087", "ja-v-a2-088", "ja-v-a2-089", "ja-v-a2-090"],
        verbIds: ["ja-vb-a2-5"],
        testQuestions: [
            { id: "ja-uq-a2-6-1", level: "A2", prompt: "Which verb means 'someone gives something TO ME'?", options: ["あげる", "もらう", "くれる", "もつ"], answer: "くれる" },
            { id: "ja-uq-a2-6-2", level: "A2", prompt: "How do you say 'I gave a present to Yuki'?", options: ["ゆきさんにプレゼントをもらいました。", "ゆきさんにプレゼントをあげました。", "ゆきさんはプレゼントをくれました。", "ゆきさんにプレゼントをくれました。"], answer: "ゆきさんにプレゼントをあげました。" },
            { id: "ja-uq-a2-6-3", level: "A2", prompt: "Complete: '田中さんは私に本を___。' (gave me — the speaker receives)", options: ["あげました", "もらいました", "くれました", "もちました"], answer: "くれました" },
            { id: "ja-uq-a2-6-4", level: "A2", prompt: "How do you say 'I received a letter from my mother'?", options: ["お母さんに手紙をあげました。", "お母さんから手紙をもらいました。", "お母さんに手紙をくれました。", "お母さんと手紙をもらいました。"], answer: "お母さんから手紙をもらいました。" },
            { id: "ja-uq-a2-6-5", level: "A2", prompt: "What particle marks the giver in a もらう sentence?", options: ["を", "に/から", "で", "へ"], answer: "に/から" },
            { id: "ja-uq-a2-6-6", level: "A2", prompt: "What does 'プレゼント' mean?", options: ["present / gift", "present tense", "presence", "presentation"], answer: "present / gift" },
        ]
    },
    {
        id: "ja-a2-u7",
        level: "A2",
        order: 7,
        title: "Opinions, Preferences & Simple Messages",
        description: "Express personal opinions and preferences using と思います and 〜のほうが好きです. Write short personal messages using casual and polite forms appropriately.",
        grammarIds: ["ja-g-a2-7"],
        vocabIds: ["ja-v-a2-091", "ja-v-a2-092", "ja-v-a2-093", "ja-v-a2-094", "ja-v-a2-095"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-7-1", level: "A2", prompt: "How do you say 'I think this is good'?", options: ["これがいいです。", "これはいいと思います。", "これをいいと言います。", "これがいいでしょう。"], answer: "これはいいと思います。" },
            { id: "ja-uq-a2-7-2", level: "A2", prompt: "How do you express a preference 'I like cats better than dogs'?", options: ["ねこはいぬより好きじゃないです。", "いぬよりねこのほうが好きです。", "ねこのほうがいいと思いません。", "ねこはいぬが好きです。"], answer: "いぬよりねこのほうが好きです。" },
            { id: "ja-uq-a2-7-3", level: "A2", prompt: "What does 〜と思います add to a sentence?", options: ["It expresses ability", "It expresses a personal opinion or belief", "It expresses a past experience", "It expresses intention"], answer: "It expresses a personal opinion or belief" },
            { id: "ja-uq-a2-7-4", level: "A2", prompt: "What is the casual closing of an informal Japanese message to a close friend?", options: ["敬具", "よろしくお願いします", "ではまた！", "謹啓"], answer: "ではまた！" },
            { id: "ja-uq-a2-7-5", level: "A2", prompt: "How do you say 'Congratulations!'?", options: ["お疲れ様です", "おめでとうございます", "よろしくお願いします", "失礼します"], answer: "おめでとうございます" },
            { id: "ja-uq-a2-7-6", level: "A2", prompt: "What does 'さびしい' mean?", options: ["happy", "tired", "lonely / sad to miss someone", "surprised"], answer: "lonely / sad to miss someone" },
        ]
    },
    {
        id: "ja-a2-u8",
        level: "A2",
        order: 8,
        title: "Making Requests & Handling Everyday Interactions",
        description: "Use graduated request forms (〜てください、〜てくれませんか、〜ていただけませんか) confidently in shops, at the doctor, on transport, and in daily life. Combine with permission and prohibition to handle any everyday situation.",
        grammarIds: ["ja-g-a2-5", "ja-g-a2-8"],
        vocabIds: [
            "ja-v-a2-080", "ja-v-a2-081", "ja-v-a2-082", "ja-v-a2-083", "ja-v-a2-084",
            "ja-v-a2-096", "ja-v-a2-097", "ja-v-a2-098", "ja-v-a2-099", "ja-v-a2-100"
        ],
        verbIds: ["ja-vb-a2-6"],
        testQuestions: [
            {
                id: "ja-uq-a2-8-1", level: "A2",
                prompt: "How do you say 'Please wait a moment' (standard polite)?",
                options: ["少々お待ちします。", "少々お待ちください。", "少々待ってくれませんか？", "少々待ちたいです。"],
                answer: "少々お待ちください。",
                hint: "て-form + ください = please do ~. 待つ → 待って + ください."
            },
            {
                id: "ja-uq-a2-8-2", level: "A2",
                prompt: "Which form is most appropriate when asking a superior to check a document?",
                options: ["見てください。", "見てくれませんか？", "見ていただけませんか？", "見てもいいですか？"],
                answer: "見ていただけませんか？",
                hint: "いただけませんか is the most respectful — correct for superiors and formal contexts."
            },
            {
                id: "ja-uq-a2-8-3", level: "A2",
                prompt: "How do you say 'Please don't speak loudly here'?",
                options: ["ここで大きい声で話してください。", "ここで大きい声で話さないでください。", "ここで大きい声で話してもいいですか？", "ここで大きい声で話してはいけません。"],
                answer: "ここで大きい声で話さないでください。",
                hint: "Negative request: ない-form + でください. 話す → 話さない → 話さないでください."
            },
            {
                id: "ja-uq-a2-8-4", level: "A2",
                prompt: "Complete: 'すみません、駅への道を___。' (could you tell me — polite)",
                options: ["教えてください", "教えてくれませんか", "教えていただけませんか", "All of these are possible"],
                answer: "All of these are possible",
                hint: "All three forms work — they differ in degree of politeness, not correctness."
            },
            {
                id: "ja-uq-a2-8-5", level: "A2",
                prompt: "What does 'もう一度' mean?",
                options: ["one more time / again", "a little more", "once more slowly", "right away"],
                answer: "one more time / again",
                hint: "もう = already / more; 一度 = once. Together: one more time."
            },
            {
                id: "ja-uq-a2-8-6", level: "A2",
                prompt: "How do you ask 'Could you write it down?' (friendly, not formal)?",
                options: ["書いていただけませんか。", "書いてください。", "書いてくれませんか？", "書かないでください。"],
                answer: "書いてくれませんか？",
                hint: "くれませんか is warm and friendly — appropriate for peers, shop assistants, and casual requests."
            },
        ]
    },
]
