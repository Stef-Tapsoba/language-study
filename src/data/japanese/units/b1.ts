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
    },
    {
        id: "ja-b1-u5",
        level: "B1",
        order: 5,
        title: "Conditionals: ば・たら・と",
        description: "Master Japanese's three conditional forms. 〜ば for general/formal if-conditions, 〜たら for if/when at a specific moment, 〜と for natural consequence and habitual result. Choosing the right conditional is one of the defining B1 challenges.",
        grammarIds: ["ja-g-b1-5"],
        vocabIds: ["ja-v-b1-081", "ja-v-b1-082", "ja-v-b1-083", "ja-v-b1-084", "ja-v-b1-085"],
        verbIds: ["ja-vb-b1-5"],
        testQuestions: [
            { id: "ja-uq-b1-5-1", level: "B1", prompt: "Which conditional describes a natural, automatic consequence? 'Spring comes → the flowers bloom.'", options: ["〜ば", "〜たら", "〜と", "〜なら"], answer: "〜と", hint: "〜と expresses automatic/natural consequence: 春になると、花が咲きます。" },
            { id: "ja-uq-b1-5-2", level: "B1", prompt: "Complete: 'もっと早く来れば___。' What does 〜ば signal here?", options: ["A natural consequence", "A hypothetical or condition not yet met", "A specific past moment", "A habitual action"], answer: "A hypothetical or condition not yet met", hint: "〜ば often carries a nuance of hypothesis or unfulfilled condition, especially in the past." },
            { id: "ja-uq-b1-5-3", level: "B1", prompt: "Complete with the best conditional: '駅に着い_____、電話してください。'", options: ["ば", "たら", "と", "なら"], answer: "たら", hint: "〜たら is ideal for 'when/if a specific moment occurs' — arriving at the station is a specific event." },
            { id: "ja-uq-b1-5-4", level: "B1", prompt: "How is the ば-form of 食べる (Group 2) formed?", options: ["食べれば", "食べるば", "食べたら", "食べれ"], answer: "食べれば", hint: "Group 2 (ru-verbs): replace る with れば. 食べる → 食べれば." },
            { id: "ja-uq-b1-5-5", level: "B1", prompt: "Which conditional cannot be followed by a request or command?", options: ["〜たら", "〜なら", "〜と", "〜ば"], answer: "〜と", hint: "〜と cannot be followed by imperative, request, or volitional forms — it expresses automatic consequence only." },
            { id: "ja-uq-b1-5-6", level: "B1", prompt: "What does '右に曲がると、駅が見えます' mean?", options: ["If you turn right, you might see the station.", "When you turn right, you will see the station.", "After turning right, the station appeared.", "Turn right to reach the station."], answer: "When you turn right, you will see the station.", hint: "〜と for automatic, reliable consequence — used for directions and natural laws." },
        ]
    },
    {
        id: "ja-b1-u6",
        level: "B1",
        order: 6,
        title: "Explanatory Tone: 〜んです / 〜のです",
        description: "Use 〜んです and 〜のです to give explanations, seek clarification, and add nuance to statements. This pattern is central to natural conversational Japanese and appears in every register.",
        grammarIds: ["ja-g-b1-6"],
        vocabIds: ["ja-v-b1-086", "ja-v-b1-087", "ja-v-b1-088", "ja-v-b1-089"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-b1-6-1", level: "B1", prompt: "What nuance does 〜んです add to a statement?", options: ["It makes the statement more polite", "It signals an explanation, background reason, or request for explanation", "It expresses a past action", "It expresses ability"], answer: "It signals an explanation, background reason, or request for explanation", hint: "〜んです frames a statement as explanatory context — 'the thing is…' or 'it's that…'" },
            { id: "ja-uq-b1-6-2", level: "B1", prompt: "How do you say 'Actually, I'm tired' (providing context for why you look unwell)?", options: ["疲れています。", "疲れているんです。", "疲れていました。", "疲れているでしょう。"], answer: "疲れているんです。", hint: "〜んです adds the nuance 'the fact is…' / 'the reason is…' — explaining your state." },
            { id: "ja-uq-b1-6-3", level: "B1", prompt: "How do you use 〜んですか to gently ask for an explanation?", options: ["It can't be used in questions", "〜んですか at end of question = 'Is it that…? / What's going on?'", "〜んですか = command form", "It's only used in formal writing"], answer: "〜んですか at end of question = 'Is it that…? / What's going on?'", hint: "どうしたんですか？ = What's the matter? / What happened? — a gentle probe for explanation." },
            { id: "ja-uq-b1-6-4", level: "B1", prompt: "Which sentence uses 〜んです naturally to explain being late?", options: ["電車に乗りました。", "電車が遅れたんです。", "電車が遅れました。", "電車に乗るんです。"], answer: "電車が遅れたんです。", hint: "電車が遅れたんです。= The train was delayed (that's why I'm late) — explanation nuance." },
            { id: "ja-uq-b1-6-5", level: "B1", prompt: "What does 'どうしたんですか？' mean?", options: ["What do you want?", "What happened? / What's the matter?", "What should I do?", "What did you do?"], answer: "What happened? / What's the matter?", hint: "どうしたんですか？ is one of the most frequent uses of 〜んですか — asking for an explanation of a situation." },
            { id: "ja-uq-b1-6-6", level: "B1", prompt: "Complete: '実は、明日の会議に出られない___。'", options: ["です", "んです", "ました", "でしょう"], answer: "んです", hint: "実は (actually/the truth is) + 〜んです = natural pairing for explaining a situation." },
        ]
    },
    {
        id: "ja-b1-u7",
        level: "B1",
        order: 7,
        title: "Passive Voice: 〜られる",
        description: "Form and use the Japanese passive. Understand both the neutral passive (a thing is done) and the suffering passive (an action affects the speaker negatively). The passive unlocks a whole new dimension of Japanese narrative and formal writing.",
        grammarIds: ["ja-g-b1-7"],
        vocabIds: ["ja-v-b1-090", "ja-v-b1-091", "ja-v-b1-092"],
        verbIds: ["ja-vb-b1-6"],
        testQuestions: [
            { id: "ja-uq-b1-7-1", level: "B1", prompt: "How is the passive of Group 1 verb 書く (kaku) formed?", options: ["書かれる", "書きれる", "書くれる", "書いられる"], answer: "書かれる", hint: "Group 1: change the final u-sound to a-sound + れる. 書く → 書か → 書かれる." },
            { id: "ja-uq-b1-7-2", level: "B1", prompt: "How is the passive of Group 2 verb 食べる formed?", options: ["食べられる", "食べれる", "食べられます", "食べるれる"], answer: "食べられる", hint: "Group 2 (ru-verbs): remove る + られる. 食べる → 食べられる. Note: this is also the potential form." },
            { id: "ja-uq-b1-7-3", level: "B1", prompt: "What is the 'suffering passive' (迷惑の受身)?", options: ["A passive used only in formal writing", "A passive expressing that an action negatively affected the speaker", "A passive used for inanimate objects only", "A passive meaning the speaker did something intentionally"], answer: "A passive expressing that an action negatively affected the speaker", hint: "雨に降られた = I was rained on (= inconvenienced by rain). The speaker suffers the consequence." },
            { id: "ja-uq-b1-7-4", level: "B1", prompt: "Translate: 'This novel was written by Murakami.'", options: ["村上がこの小説を書いた。", "この小説は村上に書かれた。", "この小説を村上が書かれた。", "村上はこの小説を書かれた。"], answer: "この小説は村上に書かれた。", hint: "Passive: object wa + agent ni + passive verb. に marks the agent in Japanese passive." },
            { id: "ja-uq-b1-7-5", level: "B1", prompt: "Complete (suffering passive): '財布を___。' (My wallet was stolen — I'm the victim.)", options: ["盗んだ", "盗まれた", "盗まれた私が", "盗むられた"], answer: "盗まれた", hint: "財布を盗まれた = My wallet was stolen (from me — suffering passive)." },
            { id: "ja-uq-b1-7-6", level: "B1", prompt: "What does 注目される mean?", options: ["to be noticed / to attract attention", "to pay attention to", "to need attention", "to warn someone"], answer: "to be noticed / to attract attention", hint: "注目する (to pay attention to) → passive 注目される = to be noticed / to attract attention." },
        ]
    },
    {
        id: "ja-b1-u8",
        level: "B1",
        order: 8,
        title: "Clause Linking: 〜ので・〜のに・〜けど",
        description: "Connect clauses with nuanced conjunctions. 〜ので for objective cause (formal), 〜のに for unexpected contrast (despite), 〜けど for soft contrast and conversational hedging. These connectors define B1-level sentence complexity.",
        grammarIds: ["ja-g-b1-8"],
        vocabIds: ["ja-v-b1-093", "ja-v-b1-094"],
        verbIds: [],
        testQuestions: [
            { id: "ja-uq-b1-8-1", level: "B1", prompt: "Which connector is the most formal/objective way to say 'because'?", options: ["から", "のに", "ので", "けど"], answer: "ので", hint: "〜ので is more formal and objective than 〜から. Preferred in written Japanese and polite speech." },
            { id: "ja-uq-b1-8-2", level: "B1", prompt: "What nuance does 〜のに add?", options: ["cause and effect", "unexpected result or disappointment despite a condition", "soft contrast", "formal reason"], answer: "unexpected result or disappointment despite a condition", hint: "〜のに = despite / even though — carries a nuance of surprise, regret, or frustration." },
            { id: "ja-uq-b1-8-3", level: "B1", prompt: "Complete: 'あんなに練習した___, 試合に負けた。' (despite practicing so much)", options: ["から", "ので", "のに", "けど"], answer: "のに", hint: "あんなに練習したのに, 負けた = Despite practicing so much, we lost — unexpected, frustrating contrast." },
            { id: "ja-uq-b1-8-4", level: "B1", prompt: "How does 〜けど function in 'このレストランは高いけど、おいしいです'?", options: ["It means 'because'", "It softens or hedges a contrast — 'but / though'", "It expresses regret", "It expresses formal cause"], answer: "It softens or hedges a contrast — 'but / though'", hint: "〜けど = soft but / though — less blunt than でも, very common in conversational Japanese." },
            { id: "ja-uq-b1-8-5", level: "B1", prompt: "Which sentence uses 〜ので correctly?", options: ["雨なので、出かけたい。", "雨なので、出かけません。", "雨なのに、出かけません。", "雨のでから、出かけます。"], answer: "雨なので、出かけません。", hint: "〜ので for logical cause: because it's raining, I won't go out. ので + logical result." },
            { id: "ja-uq-b1-8-6", level: "B1", prompt: "What does 〜けど often do at the end of a sentence in Japanese conversation?", options: ["It ends a sentence abruptly", "It trails off to soften a statement or imply 'but…' without completing the thought", "It signals a question", "It indicates past tense"], answer: "It trails off to soften a statement or imply 'but…' without completing the thought", hint: "Trailing 〜けど is a softening device: 'It's a bit difficult, but…' (implying a request or hesitation)." },
        ]
    },
    {
        id: "ja-b1-u9",
        level: "B1",
        order: 9,
        title: "Opinion, Debate & Natural Conversation",
        description: "Express and justify opinions using 〜と思います, 〜と考えます, and 〜んじゃないかと思います. Handle debate-like exchanges, agree and disagree with nuance, and use the conversational tools that make Japanese sound natural at B1.",
        grammarIds: ["ja-g-b1-5", "ja-g-b1-6", "ja-g-b1-8"],
        vocabIds: ["ja-v-b1-081", "ja-v-b1-082", "ja-v-b1-086", "ja-v-b1-087", "ja-v-b1-093", "ja-v-b1-094"],
        verbIds: ["ja-vb-b1-5"],
        testQuestions: [
            { id: "ja-uq-b1-9-1", level: "B1", prompt: "Which expression is the most tentative/hedged way to express an opinion?", options: ["〜と思います", "〜と考えます", "〜んじゃないかと思います", "〜です"], answer: "〜んじゃないかと思います", hint: "〜んじゃないかと思います = 'I think it might be that…' — the softest opinion form, shows consideration of other views." },
            { id: "ja-uq-b1-9-2", level: "B1", prompt: "How do you politely disagree in Japanese without bluntly saying 'you're wrong'?", options: ["それは違います。", "そうですね。でも、〜と思いますが。", "いいえ、違います。", "それは無理です。"], answer: "そうですね。でも、〜と思いますが。", hint: "そうですね (acknowledging) + でも (but) + 〜と思いますが (I think, though) = polite, face-saving disagreement." },
            { id: "ja-uq-b1-9-3", level: "B1", prompt: "What does お世話になっております mean?", options: ["Thank you for your hard work", "Thank you for your ongoing support / care", "I'm sorry to bother you", "Please look after me"], answer: "Thank you for your ongoing support / care", hint: "お世話になっております is a fixed B1 collocation — standard formal opening in business emails and contexts." },
            { id: "ja-uq-b1-9-4", level: "B1", prompt: "What does 気になる mean?", options: ["to be careful", "to feel uncomfortable", "to be on one's mind / to be curious about", "to mind someone"], answer: "to be on one's mind / to be curious about", hint: "気になる is a key B1 fixed expression — it can't be assembled from its parts: ki (spirit) + naru (become)." },
            { id: "ja-uq-b1-9-5", level: "B1", prompt: "Complete: '環境問題は大切な___、みんなで考えなければなりません。'", options: ["のに", "のので", "ので", "けど"], answer: "ので", hint: "〜ので for formal cause in a multi-clause B1 sentence. 'Because environmental issues are important, we must all think about them.'" },
            { id: "ja-uq-b1-9-6", level: "B1", prompt: "What does 一石二鳥 mean?", options: ["one stone, two birds (kill two birds with one stone)", "a bird in the hand", "a difficult situation", "a gradual improvement"], answer: "one stone, two birds (kill two birds with one stone)", hint: "一石二鳥 (いっせきにちょう) = kill two birds with one stone. A B1 yojijukugo (four-character idiom) for recognition." },
        ]
    },
]
