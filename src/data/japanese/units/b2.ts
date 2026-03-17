import { LessonUnit } from "../../../types"

export const b2Units: LessonUnit[] = [
    {
        id: "ja-b2-u1",
        level: "B2",
        order: 1,
        title: "Passive & Causative-Passive",
        description: "Master the passive voice and causative-passive constructions for expressing suffering and compulsion",
        grammarIds: ["ja-g-b2-1"],
        vocabIds: ["ja-v-b2-001", "ja-v-b2-005", "ja-v-b2-053", "ja-v-b2-055", "ja-v-b2-057"],
        verbIds: ["ja-vb-b2-3"],
        testQuestions: [
            {
                id: "ja-b2-u1-q1",
                level: "B2",
                prompt: "Which sentence correctly uses the passive voice (受身形)?",
                options: [
                    "先生は生徒を褒めた。",
                    "生徒は先生に褒められた。",
                    "生徒は先生を褒めさせた。",
                    "先生に生徒が褒めた。"
                ],
                answer: "生徒は先生に褒められた。",
                hint: "The passive uses に to mark the agent and られる/れる on the verb."
            },
            {
                id: "ja-b2-u1-q2",
                level: "B2",
                prompt: "What is the causative-passive form of 書く (kaku — to write)?",
                options: ["書かれる", "書かせる", "書かされる", "書かせられた"],
                answer: "書かされる",
                hint: "Causative-passive for Group 1 verbs: stem + かされる (or かせられる)."
            },
            {
                id: "ja-b2-u1-q3",
                level: "B2",
                prompt: "Which sentence expresses the 'suffering passive' (迷惑の受身)?",
                options: [
                    "雨が降った。",
                    "雨に降られて、服が濡れた。",
                    "雨を降らせた。",
                    "雨が私に降った。"
                ],
                answer: "雨に降られて、服が濡れた。",
                hint: "The suffering passive shows negative impact on the subject from someone/something's action."
            },
            {
                id: "ja-b2-u1-q4",
                level: "B2",
                prompt: "What does 「上司に残業させられた」 mean?",
                options: [
                    "I made my boss work overtime.",
                    "I was made to work overtime by my boss.",
                    "My boss was made to work overtime.",
                    "I let my boss work overtime."
                ],
                answer: "I was made to work overtime by my boss.",
                hint: "Causative-passive = verb + させられる = to be made to do something."
            },
            {
                id: "ja-b2-u1-q5",
                level: "B2",
                prompt: "The passive form of する (suru) is:",
                options: ["させる", "させられる", "される", "しられる"],
                answer: "される",
                hint: "する → される (passive); させる (causative); させられる (causative-passive)."
            },
            {
                id: "ja-b2-u1-q6",
                level: "B2",
                prompt: "What does 汚職 (おしょく) mean?",
                options: ["Pollution", "Corruption (official)", "Protest", "Discrimination"],
                answer: "Corruption (official)",
                hint: "汚職 refers to corrupt conduct by officials or public figures."
            }
        ]
    },
    {
        id: "ja-b2-u2",
        level: "B2",
        order: 2,
        title: "Keigo: Formal Japanese",
        description: "Learn respectful (尊敬語) and humble (謙譲語) speech for professional and formal contexts",
        grammarIds: ["ja-g-b2-2"],
        vocabIds: ["ja-v-b2-008", "ja-v-b2-009", "ja-v-b2-054", "ja-v-b2-062", "ja-v-b2-066"],
        verbIds: ["ja-vb-b2-1"],
        testQuestions: [
            {
                id: "ja-b2-u2-q1",
                level: "B2",
                prompt: "Which is the respectful (尊敬語) form of いる / 行く / 来る?",
                options: ["まいる", "おります", "いらっしゃる", "いただく"],
                answer: "いらっしゃる",
                hint: "いらっしゃる elevates the other person's action of being/going/coming."
            },
            {
                id: "ja-b2-u2-q2",
                level: "B2",
                prompt: "Which is the humble (謙譲語) form of 行く / 来る?",
                options: ["いらっしゃる", "まいる", "くださる", "おっしゃる"],
                answer: "まいる",
                hint: "まいる is the humble form, lowering your own action of going or coming."
            },
            {
                id: "ja-b2-u2-q3",
                level: "B2",
                prompt: "「部長がそのようにおっしゃいました」 — what is おっしゃる the respectful form of?",
                options: ["聞く (to listen)", "言う (to say)", "する (to do)", "来る (to come)"],
                answer: "言う (to say)",
                hint: "おっしゃる is the sonkeigo (respectful) form of 言う."
            },
            {
                id: "ja-b2-u2-q4",
                level: "B2",
                prompt: "How do you humbly say 'I will explain' (using humble form of する)?",
                options: [
                    "説明なさいます。",
                    "説明いたします。",
                    "説明くださいます。",
                    "説明おっしゃいます。"
                ],
                answer: "説明いたします。",
                hint: "いたす is the humble (kenjōgo) form of する."
            },
            {
                id: "ja-b2-u2-q5",
                level: "B2",
                prompt: "In keigo, which form lowers the speaker's own actions to show respect?",
                options: ["尊敬語 (sonkeigo)", "丁寧語 (teineigo)", "謙譲語 (kenjōgo)", "普通語 (futsūgo)"],
                answer: "謙譲語 (kenjōgo)",
                hint: "謙譲語 (humble language) is used to lower one's own actions and indirectly elevate the listener."
            },
            {
                id: "ja-b2-u2-q6",
                level: "B2",
                prompt: "What does おできになる mean in keigo?",
                options: [
                    "To humbly be able to do",
                    "To respectfully be able to do (someone else)",
                    "To make someone do",
                    "To be made to do"
                ],
                answer: "To respectfully be able to do (someone else)",
                hint: "おできになる is the respectful (sonkeigo) form of できる."
            }
        ]
    },
    {
        id: "ja-b2-u3",
        level: "B2",
        order: 3,
        title: "Complex Conditionals",
        description: "Master the nuances of たら, ば, なら, and と for expressing conditions in natural Japanese",
        grammarIds: ["ja-g-b2-3"],
        vocabIds: ["ja-v-b2-063", "ja-v-b2-064", "ja-v-b2-065", "ja-v-b2-069", "ja-v-b2-070"],
        verbIds: ["ja-vb-b2-2"],
        testQuestions: [
            {
                id: "ja-b2-u3-q1",
                level: "B2",
                prompt: "Which conditional is used for automatic/inevitable results (like natural laws or directions)?",
                options: ["〜たら", "〜ば", "〜なら", "〜と"],
                answer: "〜と",
                hint: "〜と is used when the result is inevitable or automatic, e.g. 春になると桜が咲く."
            },
            {
                id: "ja-b2-u3-q2",
                level: "B2",
                prompt: "Which conditional is based on information received from the listener?",
                options: ["〜たら", "〜ば", "〜なら", "〜と"],
                answer: "〜なら",
                hint: "〜なら (given that / if it is the case that) builds on what the listener has told you."
            },
            {
                id: "ja-b2-u3-q3",
                level: "B2",
                prompt: "「駅に着いたら、電話してください」— why is たら used here?",
                options: [
                    "To express a general truth",
                    "To express a sequential condition (once X, then Y)",
                    "To express an automatic result",
                    "To express a hypothetical wish"
                ],
                answer: "To express a sequential condition (once X, then Y)",
                hint: "たら is most versatile and expresses 'once/when X happens, do Y'."
            },
            {
                id: "ja-b2-u3-q4",
                level: "B2",
                prompt: "Which conditional CANNOT be followed by a command or request directed at the listener?",
                options: ["〜たら", "〜ば", "〜なら", "〜たら and 〜なら"],
                answer: "〜ば",
                hint: "〜ば cannot precede commands or requests; the result clause is usually hoped-for by the speaker."
            },
            {
                id: "ja-b2-u3-q5",
                level: "B2",
                prompt: "What is the conditional (ば-form) of なる (to become)?",
                options: ["なったら", "なれば", "なるなら", "なると"],
                answer: "なれば",
                hint: "なる → なれば (ば-conditional form)."
            },
            {
                id: "ja-b2-u3-q6",
                level: "B2",
                prompt: "What does パラダイム mean?",
                options: ["Algorithm", "Paradigm", "Ideology", "Principle"],
                answer: "Paradigm",
                hint: "パラダイム is borrowed from English 'paradigm' — a framework or model of thinking."
            }
        ]
    },
    {
        id: "ja-b2-u4",
        level: "B2",
        order: 4,
        title: "Regret & Wishes",
        description: "Express regret about past actions and wishes using ばよかった and ておけばよかった",
        grammarIds: ["ja-g-b2-4"],
        vocabIds: ["ja-v-b2-075", "ja-v-b2-076", "ja-v-b2-077", "ja-v-b2-079", "ja-v-b2-080"],
        verbIds: [],
        testQuestions: [
            {
                id: "ja-b2-u4-q1",
                level: "B2",
                prompt: "Which sentence expresses 'I should have studied more'?",
                options: [
                    "もっと勉強したかった。",
                    "もっと勉強したことがある。",
                    "もっと勉強すればよかった。",
                    "もっと勉強するべきだ。"
                ],
                answer: "もっと勉強すればよかった。",
                hint: "〜ばよかった = I should have done X (but didn't) — regret about a past omission."
            },
            {
                id: "ja-b2-u4-q2",
                level: "B2",
                prompt: "「事前に予約しておけばよかった」— what nuance does ておけば add?",
                options: [
                    "The action should have been done continuously",
                    "The action should have been done in advance / as preparation",
                    "The action was done too quickly",
                    "The action was done for someone else"
                ],
                answer: "The action should have been done in advance / as preparation",
                hint: "〜ておく means to do something in advance; 〜ておけばよかった = should have done X ahead of time."
            },
            {
                id: "ja-b2-u4-q3",
                level: "B2",
                prompt: "How do you express 'I wish I hadn't said that'?",
                options: [
                    "そんなことを言えばよかった。",
                    "そんなことを言わなければよかった。",
                    "そんなことを言っておけばよかった。",
                    "そんなことを言うべきだった。"
                ],
                answer: "そんなことを言わなければよかった。",
                hint: "Negative regret: 〜なければよかった = I wish I hadn't done X."
            },
            {
                id: "ja-b2-u4-q4",
                level: "B2",
                prompt: "What does 後悔 (こうかい) mean?",
                options: ["Resilience", "Regret / Remorse", "Nostalgia", "Frustration"],
                answer: "Regret / Remorse",
                hint: "後悔 (kōkai) means regret or remorse about something done or not done."
            },
            {
                id: "ja-b2-u4-q5",
                level: "B2",
                prompt: "「もっと早く起きればよかった」 — what verb does this come from?",
                options: ["起こす (to wake someone up)", "起きる (to wake up / get up)", "起こる (to occur)", "起く (incorrect)"],
                answer: "起きる (to wake up / get up)",
                hint: "起きる (Group 2 verb): ば-form → 起きれば, + よかった = should have gotten up."
            },
            {
                id: "ja-b2-u4-q6",
                level: "B2",
                prompt: "What does 欲求不満 (よっきゅうふまん) mean?",
                options: ["Nostalgia", "Empathy", "Frustration / Unfulfilled desire", "Mixed emotions"],
                answer: "Frustration / Unfulfilled desire",
                hint: "欲求不満 means frustration — from 欲求 (desire/need) + 不満 (dissatisfaction)."
            }
        ]
    },
    {
        id: "ja-b2-u5",
        level: "B2",
        order: 5,
        title: "Nominalisation & Abstract Constructions",
        description: "Use こと vs の to nominalise clauses and master the ～という construction for labels and definitions",
        grammarIds: ["ja-g-b2-5"],
        vocabIds: ["ja-v-b2-061", "ja-v-b2-062", "ja-v-b2-063", "ja-v-b2-067", "ja-v-b2-068"],
        verbIds: [],
        testQuestions: [
            {
                id: "ja-b2-u5-q1",
                level: "B2",
                prompt: "Which nominaliser is preferred for directly perceived events (seen/heard)?",
                options: ["こと", "の", "という", "こと and の equally"],
                answer: "の",
                hint: "の is used for things that can be directly perceived: 「彼女が歌うのを聞いた」."
            },
            {
                id: "ja-b2-u5-q2",
                level: "B2",
                prompt: "Which sentence uses こと correctly?",
                options: [
                    "彼女が歌うことを聞いた。(I heard her singing)",
                    "毎日運動することは健康に良い。(Exercising every day is good for health)",
                    "雨が降ることが見えた。(I saw it raining)",
                    "彼が来ることを感じた。(I felt him coming)"
                ],
                answer: "毎日運動することは健康に良い。(Exercising every day is good for health)",
                hint: "こと is used for abstract facts/ideas, general truths, and set expressions like ことができる."
            },
            {
                id: "ja-b2-u5-q3",
                level: "B2",
                prompt: "What does 「「持続可能性」という概念」 mean?",
                options: [
                    "The concept that sustainability exists",
                    "The concept called 'sustainability'",
                    "The sustainability concept is wrong",
                    "They said sustainability"
                ],
                answer: "The concept called 'sustainability'",
                hint: "〜という is used to label or define: X という Y = Y called X."
            },
            {
                id: "ja-b2-u5-q4",
                level: "B2",
                prompt: "Which use of という is demonstrated in: 「明日来るという連絡があった」?",
                options: [
                    "Labelling / naming something",
                    "Quoting or reporting information",
                    "Expressing surprise",
                    "Listing examples"
                ],
                answer: "Quoting or reporting information",
                hint: "〜という here reports received information: 'there was a message saying (that) he's coming tomorrow'."
            },
            {
                id: "ja-b2-u5-q5",
                level: "B2",
                prompt: "What does 倫理 (りんり) mean?",
                options: ["Ideology", "Paradigm", "Ethics / Morality", "Abstraction"],
                answer: "Ethics / Morality",
                hint: "倫理 (rinri) refers to ethics or moral principles, often used in academic contexts."
            },
            {
                id: "ja-b2-u5-q6",
                level: "B2",
                prompt: "What does ジレンマ mean?",
                options: ["Ideology", "Dilemma", "Paradigm", "Algorithm"],
                answer: "Dilemma",
                hint: "ジレンマ is the katakana borrowing of English 'dilemma' — a difficult choice between two options."
            }
        ]
    },
    {
        id: "ja-b2-u6",
        level: "B2",
        order: 6,
        title: "Formal Written Japanese: ~において・~によって・~に関して",
        description: "Master the formal written structures that define academic and professional Japanese. These patterns appear in newspapers, reports, and business communication — and sound unnatural in casual speech.",
        grammarIds: ["ja-g-b2-6"],
        vocabIds: ["ja-v-b2-081", "ja-v-b2-082", "ja-v-b2-083", "ja-v-b2-084", "ja-v-b2-085"],
        verbIds: ["ja-vb-b2-4"],
        testQuestions: [
            { id: "ja-b2-u6-q1", level: "B2", prompt: "Which formal structure means 'in the context of / at (a place or situation)'?", options: ["〜によって", "〜において", "〜に関して", "〜をめぐって"], answer: "〜において", hint: "〜において = in / at / in the context of. 会議において = at the meeting. Written and formal." },
            { id: "ja-b2-u6-q2", level: "B2", prompt: "Complete: 'この問題_____、さらなる議論が必要だ。' (regarding this issue)", options: ["において", "によって", "に関して", "をめぐって"], answer: "に関して", hint: "〜に関して = regarding / concerning. More specific than について — used in formal discourse." },
            { id: "ja-b2-u6-q3", level: "B2", prompt: "Complete: '被害は台風_____もたらされた。' (caused by the typhoon)", options: ["において", "によって", "に関して", "にとって"], answer: "によって", hint: "〜によって = by / due to / through (agent or means). Passive agent marker in formal writing." },
            { id: "ja-b2-u6-q4", level: "B2", prompt: "What does '〜をめぐって' mean?", options: ["regarding / surrounding (a contested issue)", "by means of", "at the location of", "concerning the topic"], answer: "regarding / surrounding (a contested issue)", hint: "〜をめぐって implies debate or controversy around an issue: 領土問題をめぐって = concerning the territorial dispute." },
            { id: "ja-b2-u6-q5", level: "B2", prompt: "Which sentence uses the most natural formal written register?", options: ["この研究は大切です。", "この研究において重要な知見が得られた。", "この研究はすごく大事だと思います。", "この研究、けっこう大事じゃないですか。"], answer: "この研究において重要な知見が得られた。", hint: "Formal written: において + passive + written-register vocabulary (知見 = findings). No ます ending needed in formal prose." },
            { id: "ja-b2-u6-q6", level: "B2", prompt: "What does '〜に際して' mean?", options: ["despite / in spite of", "on the occasion of / upon (doing)", "in comparison with", "prior to"], answer: "on the occasion of / upon (doing)", hint: "〜に際して = on the occasion of / when (formal). 卒業に際して = upon graduation." },
        ]
    },
    {
        id: "ja-b2-u7",
        level: "B2",
        order: 7,
        title: "Tendency & Uncertainty: 〜がちだ・〜っぽい・〜かねない・〜かねる",
        description: "Express habitual tendencies, impressionistic qualities, and formal doubt or inability. These patterns appear throughout authentic Japanese speech and writing at B2 level.",
        grammarIds: ["ja-g-b2-7"],
        vocabIds: ["ja-v-b2-086", "ja-v-b2-087", "ja-v-b2-088", "ja-v-b2-089"],
        verbIds: [],
        testQuestions: [
            { id: "ja-b2-u7-q1", level: "B2", prompt: "What does 〜がちだ express?", options: ["an unexpected result", "a habitual tendency (often negative)", "an ability", "a desire"], answer: "a habitual tendency (often negative)", hint: "〜がちだ = tend to / prone to. 忘れがちだ = tend to forget. Usually describes an undesirable pattern." },
            { id: "ja-b2-u7-q2", level: "B2", prompt: "Complete: '彼女は子どもっぽい_____。' What does 〜っぽい add?", options: ["it expresses ability", "it means 'somewhat like / rather / having the quality of'", "it expresses regret", "it means 'used to'"], answer: "it means 'somewhat like / rather / having the quality of'", hint: "〜っぽい = -ish / rather / somewhat like. 子どもっぽい = childish/childlike." },
            { id: "ja-b2-u7-q3", level: "B2", prompt: "What does 〜かねない mean?", options: ["cannot bring oneself to do", "might well (negative possibility — could lead to a bad result)", "has never done", "is unlikely to"], answer: "might well (negative possibility — could lead to a bad result)", hint: "〜かねない = might well (do something undesirable). 事故になりかねない = it might well lead to an accident." },
            { id: "ja-b2-u7-q4", level: "B2", prompt: "What does 〜かねる mean?", options: ["might well happen", "cannot bring oneself to do / find it difficult to do (polite refusal)", "tend to do habitually", "seems like"], answer: "cannot bring oneself to do / find it difficult to do (polite refusal)", hint: "〜かねます (polite) = I'm afraid I cannot. Formal polite refusal. お引き受けしかねます = I'm afraid I cannot take this on." },
            { id: "ja-b2-u7-q5", level: "B2", prompt: "Complete: 'このままでは、事態が悪化し___。'", options: ["がちだ", "かねない", "っぽい", "かねる"], answer: "かねない", hint: "〜かねない for negative possibility that could happen: the situation might well worsen." },
            { id: "ja-b2-u7-q6", level: "B2", prompt: "What does 〜気味だ mean?", options: ["tend to habitually", "slightly / a little (often with mild negative nuance)", "seems like", "might well"], answer: "slightly / a little (often with mild negative nuance)", hint: "〜気味 = slightly / a touch of. 疲れ気味 = feeling a bit tired. Softer than がち." },
        ]
    },
    {
        id: "ja-b2-u8",
        level: "B2",
        order: 8,
        title: "Register Mastery: Formal Written vs Casual Spoken",
        description: "Distinguish formal written Japanese from casual speech. Recognise register mismatch, use formal-only structures appropriately, and build awareness of the written/spoken divergence that defines B2 Japanese.",
        grammarIds: ["ja-g-b2-8"],
        vocabIds: ["ja-v-b2-090", "ja-v-b2-091", "ja-v-b2-092"],
        verbIds: [],
        testQuestions: [
            { id: "ja-b2-u8-q1", level: "B2", prompt: "Which sentence belongs to the formal written register?", options: ["ちょっと難しいですよ。", "難しいと思います。", "困難であると言える。", "難しいじゃないですか。"], answer: "困難であると言える。", hint: "Formal written: 困難 (difficulty — formal noun), である (literary copula), と言える (it can be said that)." },
            { id: "ja-b2-u8-q2", level: "B2", prompt: "What does 〜ている contract to in casual fast speech?", options: ["〜てる", "〜てん", "〜てい", "〜てき"], answer: "〜てる", hint: "食べている → 食べてる in casual speech. Particle dropping and contraction are features of natural casual Japanese." },
            { id: "ja-b2-u8-q3", level: "B2", prompt: "Which is a formal written equivalent of 〜だから?", options: ["〜ので", "〜だって", "〜し", "〜から (spoken)"], answer: "〜ので", hint: "〜ので is more formal and objective than 〜から. Used in written Japanese and polite formal speech." },
            { id: "ja-b2-u8-q4", level: "B2", prompt: "What register mismatch would occur if someone used において in casual conversation?", options: ["No mismatch — it's neutral", "It would sound overly stiff and unnatural — used in formal writing only", "It's slang", "It's only for negative sentences"], answer: "It would sound overly stiff and unnatural — used in formal writing only", hint: "Formal written structures (において, によって, に際して) sound unnatural in casual speech — a key B2 register awareness point." },
            { id: "ja-b2-u8-q5", level: "B2", prompt: "What does お世話になっております mean and when is it used?", options: ["I'm always in your debt — casual opening", "Thank you for your ongoing support — standard formal email/business opening", "Nice to meet you — first meeting only", "I appreciate your help — only after receiving a favour"], answer: "Thank you for your ongoing support — standard formal email/business opening", hint: "お世話になっております is a fixed formal phrase — the standard opening of virtually any Japanese business email." },
            { id: "ja-b2-u8-q6", level: "B2", prompt: "What does 一石二鳥 mean and what is its register?", options: ["kill two birds with one stone — can be used casually or formally", "a very difficult situation — formal only", "a sudden improvement — informal", "an unexpected coincidence — neutral"], answer: "kill two birds with one stone — can be used casually or formally", hint: "一石二鳥 (いっせきにちょう) = kill two birds with one stone. Four-character idiom used in both speech and writing at B2." },
        ]
    },
]
