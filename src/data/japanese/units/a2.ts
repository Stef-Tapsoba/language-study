import { LessonUnit } from "../../../types"

export const a2Units: LessonUnit[] = [
    {
        id: "ja-a2-u1",
        level: "A2",
        order: 1,
        title: "Can You Do It? — Potential Form",
        description: "Express ability using the potential verb form (〜られる / 〜える) and the formal ことができる. Learn conjugation for all verb groups.",
        grammarIds: ["ja-g-a2-1"],
        vocabIds: ["ja-v-a2-011", "ja-v-a2-012", "ja-v-a2-013"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-1-1", level: "A2", prompt: "How do you say 'I can speak Japanese' using the potential verb form?", options: ["日本語を話します。", "日本語が話せます。", "日本語を話すことができません。", "日本語を話したいです。"], answer: "日本語が話せます。" },
            { id: "ja-uq-a2-1-2", level: "A2", prompt: "What is the potential form of 飲む (nomu — to drink)?", options: ["飲まれる", "飲める", "飲みる", "飲ませる"], answer: "飲める" },
            { id: "ja-uq-a2-1-3", level: "A2", prompt: "What is the potential form of 食べる (taberu — to eat)?", options: ["食べれる", "食べられる", "食べせる", "食べいる"], answer: "食べられる" },
            { id: "ja-uq-a2-1-4", level: "A2", prompt: "What does する (suru) become in the potential form?", options: ["される", "させる", "できる", "しられる"], answer: "できる" },
            { id: "ja-uq-a2-1-5", level: "A2", prompt: "Which is the more formal way to express ability?", options: ["〜られます", "〜ます", "〜ことができます", "〜てもいいです"], answer: "〜ことができます" }
        ]
    },
    {
        id: "ja-a2-u2",
        level: "A2",
        order: 2,
        title: "Intentions: 〜つもりです",
        description: "Express firm plans and intentions using つもりです. Distinguish it from the softer 〜たいです.",
        grammarIds: ["ja-g-a2-2"],
        vocabIds: ["ja-v-a2-014", "ja-v-a2-015", "ja-v-a2-016", "ja-v-a2-017", "ja-v-a2-018"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-2-1", level: "A2", prompt: "How do you say 'I intend to go to Japan next year'?", options: ["来年、日本に行きたいです。", "来年、日本に行くつもりです。", "来年、日本に行きました。", "来年、日本に行けます。"], answer: "来年、日本に行くつもりです。" },
            { id: "ja-uq-a2-2-2", level: "A2", prompt: "Which verb form goes before つもりです?", options: ["ます-form", "て-form", "Dictionary form", "ました-form"], answer: "Dictionary form" },
            { id: "ja-uq-a2-2-3", level: "A2", prompt: "How do you express 'I don't intend to do X'?", options: ["〜するつもりです", "〜しないつもりです", "〜したつもりです", "〜してもいいです"], answer: "〜しないつもりです" },
            { id: "ja-uq-a2-2-4", level: "A2", prompt: "What does つもり mean?", options: ["Desire / want", "Experience", "Intention / plan", "Ability"], answer: "Intention / plan" },
            { id: "ja-uq-a2-2-5", level: "A2", prompt: "How do you ask 'What do you intend to do on the weekend?'", options: ["週末は何をしましたか？", "週末は何をするつもりですか？", "週末は何がしたいですか？", "週末は何をしていますか？"], answer: "週末は何をするつもりですか？" }
        ]
    },
    {
        id: "ja-a2-u3",
        level: "A2",
        order: 3,
        title: "Past Experience: 〜たことがある",
        description: "Talk about life experiences — what you have or have never done — using 〜たことがあります.",
        grammarIds: ["ja-g-a2-3"],
        vocabIds: ["ja-v-a2-009", "ja-v-a2-011", "ja-v-a2-017", "ja-v-a2-018"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-3-1", level: "A2", prompt: "How do you say 'I have eaten sushi before'?", options: ["すしを食べます。", "すしを食べたことがあります。", "すしを食べています。", "すしを食べるつもりです。"], answer: "すしを食べたことがあります。" },
            { id: "ja-uq-a2-3-2", level: "A2", prompt: "How do you say 'I have never been to Japan'?", options: ["日本に行きたいです。", "日本に行ったことがありません。", "日本に行くつもりです。", "日本に行っています。"], answer: "日本に行ったことがありません。" },
            { id: "ja-uq-a2-3-3", level: "A2", prompt: "Which verb form is used before ことがあります (for experience)?", options: ["Dictionary form", "て-form", "た-form (plain past)", "ます-form"], answer: "た-form (plain past)" },
            { id: "ja-uq-a2-3-4", level: "A2", prompt: "How do you ask 'Have you ever eaten ramen?'", options: ["ラーメンを食べますか？", "ラーメンを食べたことがありますか？", "ラーメンを食べていますか？", "ラーメンを食べたいですか？"], answer: "ラーメンを食べたことがありますか？" },
            { id: "ja-uq-a2-3-5", level: "A2", prompt: "What does たことがあります express?", options: ["Ongoing action", "Intention to do something", "Past experience (have done before)", "Ability"], answer: "Past experience (have done before)" }
        ]
    },
    {
        id: "ja-a2-u4",
        level: "A2",
        order: 4,
        title: "Opinions & Preferences",
        description: "Express personal opinions with 〜と思います and preferences with 〜より〜のほうが好きです.",
        grammarIds: ["ja-g-a2-4"],
        vocabIds: ["ja-v-a2-091", "ja-v-a2-092", "ja-v-a2-093", "ja-v-a2-094", "ja-v-a2-095"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-4-1", level: "A2", prompt: "How do you say 'I think this is good'?", options: ["これがいいです。", "これはいいと思います。", "これをいいと言います。", "これがいいでしょう。"], answer: "これはいいと思います。" },
            { id: "ja-uq-a2-4-2", level: "A2", prompt: "How do you express 'I like cats better than dogs'?", options: ["ねこはいぬより好きじゃないです。", "いぬよりねこのほうが好きです。", "ねこのほうがいいと思いません。", "ねこはいぬが好きです。"], answer: "いぬよりねこのほうが好きです。" },
            { id: "ja-uq-a2-4-3", level: "A2", prompt: "What does 〜と思います add to a sentence?", options: ["Ability", "A personal opinion or belief", "A past experience", "Intention"], answer: "A personal opinion or belief" },
            { id: "ja-uq-a2-4-4", level: "A2", prompt: "What form goes before と思います?", options: ["ます-form", "て-form", "Plain (dictionary) form", "ました-form"], answer: "Plain (dictionary) form" },
            { id: "ja-uq-a2-4-5", level: "A2", prompt: "How do you ask 'Which do you prefer?'", options: ["どちらが好きですか？", "どちらのほうが好きですか？", "どちらを好みますか？", "どちらより好きですか？"], answer: "どちらのほうが好きですか？" }
        ]
    },
    {
        id: "ja-a2-u5",
        level: "A2",
        order: 5,
        title: "Passive Form — Being Acted On",
        description: "Describe situations where the subject receives an action using the passive form (〜られる). Understand both direct and adversarial passive.",
        grammarIds: ["ja-g-a2-5"],
        vocabIds: ["ja-v-a2-101", "ja-v-a2-102", "ja-v-a2-103", "ja-v-a2-104"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-5-1", level: "A2", prompt: "What is the passive form of 食べる (taberu)?", options: ["食べさせる", "食べられる", "食べいる", "食べせる"], answer: "食べられる" },
            { id: "ja-uq-a2-5-2", level: "A2", prompt: "How do you say 'I was praised by my teacher'?", options: ["先生を褒めました。", "先生に褒められました。", "先生から褒めました。", "先生が褒めました。"], answer: "先生に褒められました。" },
            { id: "ja-uq-a2-5-3", level: "A2", prompt: "What particle marks the doer of the action in a passive sentence?", options: ["を", "が", "に", "で"], answer: "に" },
            { id: "ja-uq-a2-5-4", level: "A2", prompt: "How do you say 'My wallet was stolen'?", options: ["財布を盗みました。", "財布が盗みました。", "財布を盗まれました。", "財布に盗まれました。"], answer: "財布を盗まれました。" },
            { id: "ja-uq-a2-5-5", level: "A2", prompt: "What is the passive form of 飲む (nomu)?", options: ["飲める", "飲ませる", "飲まれる", "飲まされる"], answer: "飲まれる" }
        ]
    },
    {
        id: "ja-a2-u6",
        level: "A2",
        order: 6,
        title: "Causative Form — Making & Letting",
        description: "Express that someone causes or allows another to do something using 〜させる. Understand both compulsory and permissive meanings.",
        grammarIds: ["ja-g-a2-6"],
        vocabIds: ["ja-v-a2-105", "ja-v-a2-106", "ja-v-a2-107", "ja-v-a2-108"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-6-1", level: "A2", prompt: "What is the causative form of 食べる (taberu)?", options: ["食べられる", "食べさせる", "食べせる", "食べいる"], answer: "食べさせる" },
            { id: "ja-uq-a2-6-2", level: "A2", prompt: "How do you say 'I'll let the child eat what they like'?", options: ["子供に好きなものを食べました。", "子供に好きなものを食べさせてあげます。", "子供が好きなものを食べさせました。", "子供は好きなものを食べます。"], answer: "子供に好きなものを食べさせてあげます。" },
            { id: "ja-uq-a2-6-3", level: "A2", prompt: "How do you say 'Please let me rest a bit'?", options: ["少し休んでください。", "少し休ませてください。", "少し休みたいです。", "少し休まれました。"], answer: "少し休ませてください。" },
            { id: "ja-uq-a2-6-4", level: "A2", prompt: "What is the causative form of 書く (kaku)?", options: ["書かれる", "書かせる", "書けさせる", "書きさせる"], answer: "書かせる" },
            { id: "ja-uq-a2-6-5", level: "A2", prompt: "What does '出張' mean?", options: ["transfer", "business trip", "vacation", "meeting"], answer: "business trip" }
        ]
    },
    {
        id: "ja-a2-u7",
        level: "A2",
        order: 7,
        title: "Causative-Passive — Being Made to Do",
        description: "Express being forced or compelled to do something against one's will using 〜させられる. A key JLPT N4 pattern.",
        grammarIds: ["ja-g-a2-7"],
        vocabIds: ["ja-v-a2-109", "ja-v-a2-110", "ja-v-a2-111", "ja-v-a2-112"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-7-1", level: "A2", prompt: "How do you say 'I was made to eat vegetables I hated' (as a child)?", options: ["嫌いな野菜を食べさせました。", "嫌いな野菜を食べされました。", "嫌いな野菜を食べさせられました。", "嫌いな野菜を食べられました。"], answer: "嫌いな野菜を食べさせられました。" },
            { id: "ja-uq-a2-7-2", level: "A2", prompt: "〜させられる combines which two forms?", options: ["passive + causative", "causative + passive", "causative + potential", "passive + potential"], answer: "causative + passive" },
            { id: "ja-uq-a2-7-3", level: "A2", prompt: "What nuance does 〜させられる almost always carry?", options: ["Joyful completion", "Being forced or compelled (usually negative)", "Permission granted", "A natural result"], answer: "Being forced or compelled (usually negative)" },
            { id: "ja-uq-a2-7-4", level: "A2", prompt: "How do you say 'I am made to work overtime every day'?", options: ["毎日残業しています。", "毎日残業させられています。", "毎日残業させています。", "毎日残業されています。"], answer: "毎日残業させられています。" },
            { id: "ja-uq-a2-7-5", level: "A2", prompt: "What does '上司' mean?", options: ["colleague", "customer", "boss / superior", "subordinate"], answer: "boss / superior" }
        ]
    },
    {
        id: "ja-a2-u8",
        level: "A2",
        order: 8,
        title: "Conditional I: 〜たら",
        description: "Express 'if' and 'when' conditions using 〜たら — the most versatile Japanese conditional. Make suggestions with 〜たらどうですか.",
        grammarIds: ["ja-g-a2-8"],
        vocabIds: ["ja-v-a2-113", "ja-v-a2-114", "ja-v-a2-115", "ja-v-a2-116"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-8-1", level: "A2", prompt: "How do you form 〜たら from 食べる?", options: ["食べて + ら", "食べた + ら", "食べる + たら", "食べてから + ら"], answer: "食べた + ら" },
            { id: "ja-uq-a2-8-2", level: "A2", prompt: "How do you say 'If it rains, I'll stay home'?", options: ["雨が降ったら、家にいます。", "雨が降ると、家にいます。", "雨が降れば、家にいます。", "雨が降りなら、家にいます。"], answer: "雨が降ったら、家にいます。" },
            { id: "ja-uq-a2-8-3", level: "A2", prompt: "Which sentence shows 〜たら used for 'when (after a completed action)'?", options: ["もし安かったら、買います。", "家に帰ったら、電話します。", "先生だったら、どう教えますか？", "疲れたらどうですか？"], answer: "家に帰ったら、電話します。" },
            { id: "ja-uq-a2-8-4", level: "A2", prompt: "How do you form 〜たら from the い-adjective 安い (cheap)?", options: ["安いたら", "安かったら", "安くたら", "安ければ"], answer: "安かったら" },
            { id: "ja-uq-a2-8-5", level: "A2", prompt: "How do you suggest 'Why don't you rest a little?'", options: ["少し休んでください。", "少し休みたいです。", "少し休んだらどうですか？", "少し休まなければなりません。"], answer: "少し休んだらどうですか？" }
        ]
    },
    {
        id: "ja-a2-u9",
        level: "A2",
        order: 9,
        title: "Conditionals II: 〜ば / 〜と / 〜なら",
        description: "Learn the three remaining conditionals and when to use each: 〜ば (natural consequence/advice), 〜と (automatic result), 〜なら (contextual condition).",
        grammarIds: ["ja-g-a2-9"],
        vocabIds: ["ja-v-a2-117", "ja-v-a2-118", "ja-v-a2-119", "ja-v-a2-120"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-9-1", level: "A2", prompt: "How do you form 〜ば from 行く (iku)?", options: ["行きば", "行ければ", "行けば", "行くば"], answer: "行けば" },
            { id: "ja-uq-a2-9-2", level: "A2", prompt: "Which conditional describes an automatic/inevitable result?", options: ["〜たら", "〜ば", "〜と", "〜なら"], answer: "〜と" },
            { id: "ja-uq-a2-9-3", level: "A2", prompt: "Complete: 'このボタンを押す_、切符が出ます。' (automatic result)", options: ["たら", "ば", "と", "なら"], answer: "と" },
            { id: "ja-uq-a2-9-4", level: "A2", prompt: "Which conditional is best for 'If you're going to study Japanese, this app is great'?", options: ["たら", "ば", "と", "なら"], answer: "なら" },
            { id: "ja-uq-a2-9-5", level: "A2", prompt: "What does '咲く' mean?", options: ["to fall", "to bloom (flowers)", "to grow", "to wither"], answer: "to bloom (flowers)" }
        ]
    },
    {
        id: "ja-a2-u10",
        level: "A2",
        order: 10,
        title: "Obligation & Lack of Necessity",
        description: "Say what must be done with 〜なければなりません and what need not be done with 〜なくてもいいです.",
        grammarIds: ["ja-g-a2-10"],
        vocabIds: ["ja-v-a2-121", "ja-v-a2-122", "ja-v-a2-123", "ja-v-a2-124"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-10-1", level: "A2", prompt: "How do you say 'I have to take medicine every day'?", options: ["毎日薬を飲んでもいいです。", "毎日薬を飲まなければなりません。", "毎日薬を飲まなくてもいいです。", "毎日薬を飲んでいます。"], answer: "毎日薬を飲まなければなりません。" },
            { id: "ja-uq-a2-10-2", level: "A2", prompt: "How do you form 〜なければなりません from 行く?", options: ["行かなければなりません", "行きなければなりません", "行くなければなりません", "行けなければなりません"], answer: "行かなければなりません" },
            { id: "ja-uq-a2-10-3", level: "A2", prompt: "How do you say 'You don't have to come today'?", options: ["今日は来てもいいです。", "今日は来なければなりません。", "今日は来なくてもいいです。", "今日は来てはいけません。"], answer: "今日は来なくてもいいです。" },
            { id: "ja-uq-a2-10-4", level: "A2", prompt: "What is the casual spoken shortcut for 〜なければ?", options: ["〜なから", "〜なきゃ / 〜なくちゃ", "〜ないと", "〜なければ is already casual"], answer: "〜なきゃ / 〜なくちゃ" },
            { id: "ja-uq-a2-10-5", level: "A2", prompt: "What does '薬' mean?", options: ["food", "medicine", "supplement", "injection"], answer: "medicine" }
        ]
    },
    {
        id: "ja-a2-u11",
        level: "A2",
        order: 11,
        title: "Nominalization: 〜こと / 〜の",
        description: "Turn verb phrases into noun phrases using こと and の. Use them as subjects and objects in sentences.",
        grammarIds: ["ja-g-a2-11"],
        vocabIds: ["ja-v-a2-125", "ja-v-a2-126", "ja-v-a2-127", "ja-v-a2-128"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-11-1", level: "A2", prompt: "How do you say 'Speaking Japanese is difficult'?", options: ["日本語が難しいです。", "日本語を話すことは難しいです。", "日本語で話しにくいです。", "日本語のことが難しいです。"], answer: "日本語を話すことは難しいです。" },
            { id: "ja-uq-a2-11-2", level: "A2", prompt: "How do you say 'I like listening to music'?", options: ["音楽が聞きます。", "音楽を聞くことが好きです。", "音楽を聞くのが好きです。", "音楽を聞いています。"], answer: "音楽を聞くのが好きです。" },
            { id: "ja-uq-a2-11-3", level: "A2", prompt: "Which nominalizer is more formal and abstract?", options: ["〜の", "〜こと", "〜もの", "〜ところ"], answer: "〜こと" },
            { id: "ja-uq-a2-11-4", level: "A2", prompt: "How do you say 'I stopped exercising'?", options: ["運動することをしました。", "運動するのをやめました。", "運動をやめしました。", "運動のことをやめました。"], answer: "運動するのをやめました。" },
            { id: "ja-uq-a2-11-5", level: "A2", prompt: "What does '大切' mean?", options: ["expensive", "important / precious", "difficult", "beautiful"], answer: "important / precious" }
        ]
    },
    {
        id: "ja-a2-u12",
        level: "A2",
        order: 12,
        title: "Reported Speech & Hearsay",
        description: "Report what someone said with 〜と言っていました and convey second-hand information with 〜そうです and 〜らしい.",
        grammarIds: ["ja-g-a2-12"],
        vocabIds: ["ja-v-a2-129", "ja-v-a2-130", "ja-v-a2-131", "ja-v-a2-132"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-12-1", level: "A2", prompt: "How do you report 'Tanaka-san said they wouldn't come'?", options: ["田中さんは来ないそうです。", "田中さんは来ないと言っていました。", "田中さんは来ないらしいです。", "田中さんは来ないようです。"], answer: "田中さんは来ないと言っていました。" },
            { id: "ja-uq-a2-12-2", level: "A2", prompt: "What form comes before hearsay 〜そうです?", options: ["ます-form", "て-form", "Plain form", "た-form"], answer: "Plain form" },
            { id: "ja-uq-a2-12-3", level: "A2", prompt: "How do you say 'I heard it will snow tomorrow'?", options: ["明日は雪が降りそうです。", "明日は雪が降るそうです。", "明日は雪が降ったそうです。", "明日は雪が降ってそうです。"], answer: "明日は雪が降るそうです。" },
            { id: "ja-uq-a2-12-4", level: "A2", prompt: "What is the key difference between 〜らしい and 〜そうです (hearsay)?", options: ["They are identical in meaning", "らしい implies more evidence or a natural inference; そうです is pure hearsay", "そうです is more formal", "らしい is only used for weather"], answer: "らしい implies more evidence or a natural inference; そうです is pure hearsay" },
            { id: "ja-uq-a2-12-5", level: "A2", prompt: "What does '天気予報' mean?", options: ["weather report", "weather forecast", "climate", "season"], answer: "weather forecast" }
        ]
    },
    {
        id: "ja-a2-u13",
        level: "A2",
        order: 13,
        title: "Appearance & Conjecture",
        description: "Express what something looks like or what you infer from observation using 〜そうです (stem), 〜ようです, and 〜みたいです.",
        grammarIds: ["ja-g-a2-13"],
        vocabIds: ["ja-v-a2-133", "ja-v-a2-134", "ja-v-a2-135", "ja-v-a2-136"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-13-1", level: "A2", prompt: "How do you say 'This cake looks delicious'?", options: ["このケーキはおいしいそうです。", "このケーキはおいしそうです。", "このケーキはおいしいようです。", "このケーキはおいしらしいです。"], answer: "このケーキはおいしそうです。" },
            { id: "ja-uq-a2-13-2", level: "A2", prompt: "How is 'appearance 〜そうです' formed for い-adjectives?", options: ["plain form + そうです", "adj stem (drop い) + そうです", "adj + そうです", "adj + ようです"], answer: "adj stem (drop い) + そうです" },
            { id: "ja-uq-a2-13-3", level: "A2", prompt: "Which is correct for 'It looks like it's going to rain'?", options: ["雨が降るそうです。", "雨が降りそうです。", "雨が降ったそうです。", "雨が降ったらしいです。"], answer: "雨が降りそうです。" },
            { id: "ja-uq-a2-13-4", level: "A2", prompt: "What is the KEY DIFFERENCE between 'appearance 〜そうです' and 'hearsay 〜そうです'?", options: ["They are the same", "Appearance uses adj/verb stem + そう; hearsay uses plain form + そうです", "Appearance is more formal", "Hearsay uses ます-form + そうです"], answer: "Appearance uses adj/verb stem + そう; hearsay uses plain form + そうです" },
            { id: "ja-uq-a2-13-5", level: "A2", prompt: "How do you say 'He seems to be tired' (formal inference)?", options: ["彼は疲れそうです。", "彼は疲れているそうです。", "彼は疲れているようです。", "彼は疲れているらしいです。"], answer: "彼は疲れているようです。" }
        ]
    },
    {
        id: "ja-a2-u14",
        level: "A2",
        order: 14,
        title: "て-form Extensions I: 〜てみる / 〜ておく",
        description: "Add nuance to actions: try something out with 〜てみる and prepare in advance with 〜ておく.",
        grammarIds: ["ja-g-a2-14"],
        vocabIds: ["ja-v-a2-137", "ja-v-a2-138", "ja-v-a2-139", "ja-v-a2-140"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-14-1", level: "A2", prompt: "How do you say 'Please try eating this'?", options: ["これを食べてください。", "これを食べてみてください。", "これを食べておいてください。", "これを食べたことがあります。"], answer: "これを食べてみてください。" },
            { id: "ja-uq-a2-14-2", level: "A2", prompt: "What nuance does 〜てみる add?", options: ["Preparation in advance", "Trying something out (to see what it's like)", "Completion with regret", "Doing something simultaneously"], answer: "Trying something out (to see what it's like)" },
            { id: "ja-uq-a2-14-3", level: "A2", prompt: "How do you say 'I'll book the hotel in advance'?", options: ["ホテルを予約してみます。", "ホテルを予約しておきます。", "ホテルを予約してあります。", "ホテルを予約してしまいます。"], answer: "ホテルを予約しておきます。" },
            { id: "ja-uq-a2-14-4", level: "A2", prompt: "What does 〜ておく imply?", options: ["Trying something new", "Completing an action that was regretted", "Doing something in advance / leaving a result in place", "Doing two things simultaneously"], answer: "Doing something in advance / leaving a result in place" },
            { id: "ja-uq-a2-14-5", level: "A2", prompt: "What does '便利' mean?", options: ["expensive", "convenient / useful", "difficult", "comfortable"], answer: "convenient / useful" }
        ]
    },
    {
        id: "ja-a2-u15",
        level: "A2",
        order: 15,
        title: "て-form Extensions II: 〜てしまう / ことにする / ことになる",
        description: "Express accidental or regretted completions with 〜てしまう. Distinguish your own decisions (ことにする) from external ones (ことになる).",
        grammarIds: ["ja-g-a2-15"],
        vocabIds: ["ja-v-a2-141", "ja-v-a2-142", "ja-v-a2-143", "ja-v-a2-144"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-15-1", level: "A2", prompt: "How do you say 'I accidentally forgot my homework'?", options: ["宿題を忘れておきました。", "宿題を忘れてみました。", "宿題を忘れてしまいました。", "宿題を忘れることにしました。"], answer: "宿題を忘れてしまいました。" },
            { id: "ja-uq-a2-15-2", level: "A2", prompt: "Which expresses the speaker's OWN decision?", options: ["〜ことになる", "〜ことにする", "〜てしまう", "〜ておく"], answer: "〜ことにする" },
            { id: "ja-uq-a2-15-3", level: "A2", prompt: "How do you say 'It has been decided (externally) that I'll be transferred'?", options: ["転勤することにしました。", "転勤することになりました。", "転勤してしまいました。", "転勤しておきました。"], answer: "転勤することになりました。" },
            { id: "ja-uq-a2-15-4", level: "A2", prompt: "What is the casual (spoken) form of 〜てしまった?", options: ["〜ちゃった / 〜じゃった", "〜といた", "〜してた", "〜てしまった is already casual"], answer: "〜ちゃった / 〜じゃった" },
            { id: "ja-uq-a2-15-5", level: "A2", prompt: "What does '転勤' mean?", options: ["business trip", "job transfer / relocation", "resignation", "promotion"], answer: "job transfer / relocation" }
        ]
    },
    {
        id: "ja-a2-u16",
        level: "A2",
        order: 16,
        title: "Relative Clauses & Noun Modification",
        description: "Modify nouns with verb and adjective clauses that come BEFORE the noun. Use 〜という to name and identify things.",
        grammarIds: ["ja-g-a2-16"],
        vocabIds: ["ja-v-a2-145", "ja-v-a2-146", "ja-v-a2-147", "ja-v-a2-148"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-16-1", level: "A2", prompt: "How do you say 'the sushi I ate yesterday'?", options: ["昨日の食べる寿司", "昨日食べた寿司", "昨日食べている寿司", "昨日食べます寿司"], answer: "昨日食べた寿司" },
            { id: "ja-uq-a2-16-2", level: "A2", prompt: "Where does the modifying clause go in Japanese?", options: ["After the noun (like English)", "Before the noun", "At the end of the sentence", "Between は and the noun"], answer: "Before the noun" },
            { id: "ja-uq-a2-16-3", level: "A2", prompt: "Inside a modifying clause, は usually becomes:", options: ["を", "に", "が", "で"], answer: "が" },
            { id: "ja-uq-a2-16-4", level: "A2", prompt: "How do you say 'a café called Sakura'?", options: ["さくらというカフェ", "さくらのカフェ", "さくらかというカフェ", "さくらがカフェ"], answer: "さくらというカフェ" },
            { id: "ja-uq-a2-16-5", level: "A2", prompt: "How do you say 'a person who speaks Japanese'?", options: ["日本語を話す人", "日本語を話した人", "日本語を話している人", "日本語の話す人"], answer: "日本語を話す人" }
        ]
    },
    {
        id: "ja-a2-u17",
        level: "A2",
        order: 17,
        title: "Purpose & Reason: 〜ために / 〜ので",
        description: "Express purpose with 〜ために ('in order to') and give reasons politely with 〜ので ('because'). Compare ので with から.",
        grammarIds: ["ja-g-a2-17"],
        vocabIds: ["ja-v-a2-149", "ja-v-a2-150", "ja-v-a2-151", "ja-v-a2-152"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-17-1", level: "A2", prompt: "How do you say 'I practise every day in order to improve my Japanese'?", options: ["日本語が上手にしたから、毎日練習します。", "日本語を上手にするために、毎日練習します。", "日本語のために、毎日練習します。", "日本語を上手にするので、毎日練習します。"], answer: "日本語を上手にするために、毎日練習します。" },
            { id: "ja-uq-a2-17-2", level: "A2", prompt: "What form comes before 〜ために (for verbs)?", options: ["て-form", "た-form", "Dictionary (plain) form", "ます-form"], answer: "Dictionary (plain) form" },
            { id: "ja-uq-a2-17-3", level: "A2", prompt: "How do you say 'Because I'm not feeling well, I'll take a day off' (politely)?", options: ["体調が悪いから、休みます。", "体調が悪いので、休みます。", "体調が悪くて、休みます。", "体調が悪いために、休みます。"], answer: "体調が悪いので、休みます。" },
            { id: "ja-uq-a2-17-4", level: "A2", prompt: "Compared to から, 〜ので sounds:", options: ["More casual and assertive", "More formal and polite/objective", "More emotional", "Identical — there is no difference"], answer: "More formal and polite/objective" },
            { id: "ja-uq-a2-17-5", level: "A2", prompt: "What does '健康' mean?", options: ["happiness", "exercise", "health", "energy"], answer: "health" }
        ]
    },
    {
        id: "ja-a2-u18",
        level: "A2",
        order: 18,
        title: "Concession & Contrast: 〜のに / 〜ても / 〜けれど",
        description: "Express disappointment with 〜のに ('even though'), concession with 〜ても ('even if'), and mild contrast with 〜けれど ('but').",
        grammarIds: ["ja-g-a2-18"],
        vocabIds: ["ja-v-a2-153", "ja-v-a2-154", "ja-v-a2-155", "ja-v-a2-156"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-18-1", level: "A2", prompt: "How do you say 'Even though I studied hard, I failed'?", options: ["一生懸命勉強して、試験に落ちました。", "一生懸命勉強したのに、試験に落ちました。", "一生懸命勉強しても、試験に落ちました。", "一生懸命勉強したが、試験に落ちました。"], answer: "一生懸命勉強したのに、試験に落ちました。" },
            { id: "ja-uq-a2-18-2", level: "A2", prompt: "〜のに implies:", options: ["A simple factual contrast", "Surprise or disappointment at an unexpected result", "Concession (regardless of condition)", "A suggestion"], answer: "Surprise or disappointment at an unexpected result" },
            { id: "ja-uq-a2-18-3", level: "A2", prompt: "How do you say 'Even if it rains, the match will continue'?", options: ["雨が降ったのに、試合は続きます。", "雨が降ると、試合は続きます。", "雨が降っても、試合は続きます。", "雨が降るけれど、試合は続きます。"], answer: "雨が降っても、試合は続きます。" },
            { id: "ja-uq-a2-18-4", level: "A2", prompt: "How do you say 'It's expensive but I want it' (mild contrast)?", options: ["高いのに、欲しいです。", "高くても、欲しいです。", "高いですけれど、欲しいです。", "高いから、欲しいです。"], answer: "高いですけれど、欲しいです。" },
            { id: "ja-uq-a2-18-5", level: "A2", prompt: "What does '諦める' mean?", options: ["to try again", "to give up", "to keep going", "to decide"], answer: "to give up" }
        ]
    },
    {
        id: "ja-a2-u19",
        level: "A2",
        order: 19,
        title: "Scope & Limits: 〜だけ / 〜しか〜ない / 〜ばかり",
        description: "Express limitations and exclusivity with だけ, しか〜ない, and ばかり. Understand the emotional difference between だけ and しか〜ない.",
        grammarIds: ["ja-g-a2-19"],
        vocabIds: ["ja-v-a2-157", "ja-v-a2-158", "ja-v-a2-159", "ja-v-a2-160"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-19-1", level: "A2", prompt: "How do you say 'Just one, please'?", options: ["一つしかお願いします。", "一つだけお願いします。", "一つばかりお願いします。", "一つのみお願いします。"], answer: "一つだけお願いします。" },
            { id: "ja-uq-a2-19-2", level: "A2", prompt: "〜しか〜ない must be used with:", options: ["a positive verb", "a negative verb", "a て-form verb", "any verb"], answer: "a negative verb" },
            { id: "ja-uq-a2-19-3", level: "A2", prompt: "How do you say 'I only have 500 yen' (implying it's not enough)?", options: ["五百円だけあります。", "五百円しかありません。", "五百円ばかりあります。", "五百円のみあります。"], answer: "五百円しかありません。" },
            { id: "ja-uq-a2-19-4", level: "A2", prompt: "What does 〜ばかり mean after a た-form verb (e.g., 食べたばかり)?", options: ["only eats", "keeps eating", "just ate (very recently)", "eats too much"], answer: "just ate (very recently)" },
            { id: "ja-uq-a2-19-5", level: "A2", prompt: "How do you say 'He does nothing but play games'?", options: ["彼はゲームだけしています。", "彼はゲームしかしていません。", "彼はゲームばかりしています。", "彼はゲームのみしています。"], answer: "彼はゲームばかりしています。" }
        ]
    },
    {
        id: "ja-a2-u20",
        level: "A2",
        order: 20,
        title: "Time Sequencing: Before, After, While",
        description: "Construct multi-clause sentences that sequence events using 〜前に, 〜た後で, 〜ながら, and 〜あいだに.",
        grammarIds: ["ja-g-a2-20"],
        vocabIds: ["ja-v-a2-161", "ja-v-a2-162", "ja-v-a2-163", "ja-v-a2-164"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-a2-20-1", level: "A2", prompt: "How do you say 'Please brush your teeth before sleeping'?", options: ["寝た前に歯を磨いてください。", "寝る前に歯を磨いてください。", "寝てから前に歯を磨いてください。", "寝ながら歯を磨いてください。"], answer: "寝る前に歯を磨いてください。" },
            { id: "ja-uq-a2-20-2", level: "A2", prompt: "What verb form comes before 〜前に?", options: ["た-form (past)", "て-form", "Dictionary form", "ます-form"], answer: "Dictionary form" },
            { id: "ja-uq-a2-20-3", level: "A2", prompt: "How do you say 'I study while listening to music'?", options: ["音楽を聞いてから勉強します。", "音楽を聞きながら勉強します。", "音楽を聞いた後で勉強します。", "音楽を聞いているあいだに勉強します。"], answer: "音楽を聞きながら勉強します。" },
            { id: "ja-uq-a2-20-4", level: "A2", prompt: "〜ながら can be used when:", options: ["Two different people do two things at the same time", "The same person does two things at the same time", "One action happens before another", "Two contradictory actions happen"], answer: "The same person does two things at the same time" },
            { id: "ja-uq-a2-20-5", level: "A2", prompt: "How do you say 'While I was out, a phone call came'?", options: ["外出する前に、電話がありました。", "外出した後で、電話がありました。", "外出しているあいだに、電話がありました。", "外出しながら、電話がありました。"], answer: "外出しているあいだに、電話がありました。" }
        ]
    },
]
