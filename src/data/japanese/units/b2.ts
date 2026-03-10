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
    }
]
