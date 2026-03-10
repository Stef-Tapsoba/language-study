import { LessonUnit } from "../../../types"

export const c1Units: LessonUnit[] = [
    {
        id: "ja-c1-u1",
        level: "C1",
        order: 1,
        title: "Formal/Literary Connectors",
        description: "Master formal connectors used in official documents, business letters, and academic writing",
        grammarIds: ["ja-g-c1-1"],
        vocabIds: ["ja-v-c1-045", "ja-v-c1-046", "ja-v-c1-047", "ja-v-c1-048", "ja-v-c1-049"],
        verbIds: ["ja-vb-c1-3"],
        testQuestions: [
            {
                id: "ja-c1-u1-q1",
                level: "C1",
                prompt: "Which formal connector means 'due to / because of' and is used in official notices?",
                options: ["に際して", "につき", "をもって", "に伴い"],
                answer: "につき",
                hint: "につき (ni tsuki) is commonly seen in formal notices: 「工事につき、ご不便をおかけします」."
            },
            {
                id: "ja-c1-u1-q2",
                level: "C1",
                prompt: "Which connector means 'on the occasion of' and is used to mark significant events?",
                options: ["に伴い", "をもって", "に際して", "に基づき"],
                answer: "に際して",
                hint: "に際して (ni saishite) marks a significant occasion: 「入社に際して、研修を行います」."
            },
            {
                id: "ja-c1-u1-q3",
                level: "C1",
                prompt: "Complete the formal announcement: 「本日___、当店は閉店いたします。」",
                options: ["につき", "に際して", "をもちまして", "に基づき"],
                answer: "をもちまして",
                hint: "をもって / をもちまして marks a point in time: 'As of today, we will be closing'."
            },
            {
                id: "ja-c1-u1-q4",
                level: "C1",
                prompt: "Which connector means 'based on / in accordance with' regulations or rules?",
                options: ["に伴い", "に基づき", "につき", "に際して"],
                answer: "に基づき",
                hint: "に基づき (ni motozuki) = based on: 「規則に基づき、処分いたします」."
            },
            {
                id: "ja-c1-u1-q5",
                level: "C1",
                prompt: "「少子化___、学校の数が減少している」— which connector fits?",
                options: ["につき", "に際して", "に伴い", "をもって"],
                answer: "に伴い",
                hint: "に伴い (ni tomonai) = along with / accompanying: 'Along with the declining birthrate...'."
            },
            {
                id: "ja-c1-u1-q6",
                level: "C1",
                prompt: "The humble form of 行く / 来る used in formal keigo is:",
                options: ["いらっしゃる", "まいる", "おいでになる", "なさる"],
                answer: "まいる",
                hint: "まいる (mairu) is the humble (kenjōgo) form of 行く / 来る, lowering one's own action."
            }
        ]
    },
    {
        id: "ja-c1-u2",
        level: "C1",
        order: 2,
        title: "四字熟語 — Four-Character Idioms",
        description: "Learn essential four-character compounds and their cultural and contextual usage in advanced Japanese",
        grammarIds: ["ja-g-c1-2"],
        vocabIds: ["ja-v-c1-037", "ja-v-c1-038", "ja-v-c1-039", "ja-v-c1-040", "ja-v-c1-041"],
        verbIds: [],
        testQuestions: [
            {
                id: "ja-c1-u2-q1",
                level: "C1",
                prompt: "What does 一石二鳥 (issekinichō) mean?",
                options: [
                    "Fall seven times, rise eight",
                    "Killing two birds with one stone",
                    "Once-in-a-lifetime encounter",
                    "Telepathic understanding"
                ],
                answer: "Killing two birds with one stone",
                hint: "一石 = one stone, 二鳥 = two birds — accomplishing two goals with one action."
            },
            {
                id: "ja-c1-u2-q2",
                level: "C1",
                prompt: "Which 四字熟語 expresses the spirit of getting up after every failure — perseverance?",
                options: ["一期一会", "自業自得", "七転八起", "以心伝心"],
                answer: "七転八起",
                hint: "七転八起 (shichiten-hakki): fall seven times, get up eight — the spirit of perseverance."
            },
            {
                id: "ja-c1-u2-q3",
                level: "C1",
                prompt: "以心伝心 (ishin-denshin) refers to:",
                options: [
                    "Reaping what you sow",
                    "Adapting to circumstances",
                    "Understanding without words / heart-to-heart communication",
                    "Once-in-a-lifetime encounter"
                ],
                answer: "Understanding without words / heart-to-heart communication",
                hint: "以心伝心: transmitting heart to heart — mutual understanding without explicit words."
            },
            {
                id: "ja-c1-u2-q4",
                level: "C1",
                prompt: "「準備を怠って失敗したのは___だ。」Which 四字熟語 fits?",
                options: ["一期一会", "七転八起", "自業自得", "臨機応変"],
                answer: "自業自得",
                hint: "自業自得 (jigō-jitoku): one's own deed brings one's own result — you reap what you sow."
            },
            {
                id: "ja-c1-u2-q5",
                level: "C1",
                prompt: "一期一会 is rooted in which Japanese tradition?",
                options: ["武士道 (bushidō)", "茶道 (sadō — tea ceremony)", "能楽 (nōgaku — Noh theatre)", "書道 (shodō — calligraphy)"],
                answer: "茶道 (sadō — tea ceremony)",
                hint: "一期一会 originates in tea ceremony philosophy: treasure each meeting as a once-in-a-lifetime event."
            },
            {
                id: "ja-c1-u2-q6",
                level: "C1",
                prompt: "What does 臨機応変 (rinki-ōhen) mean?",
                options: [
                    "Speaking with one voice / unanimously",
                    "Being at a complete loss",
                    "Adapting flexibly to the situation",
                    "Heart-to-heart communication"
                ],
                answer: "Adapting flexibly to the situation",
                hint: "臨機応変: responding to the situation at hand with flexibility and good judgment."
            }
        ]
    },
    {
        id: "ja-c1-u3",
        level: "C1",
        order: 3,
        title: "Indirect and Hedged Expressions",
        description: "Use academic and journalistic hedging patterns to make qualified claims and avoid direct assertions",
        grammarIds: ["ja-g-c1-3"],
        vocabIds: ["ja-v-c1-001", "ja-v-c1-003", "ja-v-c1-006", "ja-v-c1-007", "ja-v-c1-009"],
        verbIds: [],
        testQuestions: [
            {
                id: "ja-c1-u3-q1",
                level: "C1",
                prompt: "Which expression means 'it appears that / it seems that' and is used in academic writing?",
                options: ["～と言わざるを得ない", "～かと思われます", "～ではないでしょうか", "～とも言えます"],
                answer: "～かと思われます",
                hint: "～かと思われます hedges a conclusion as 'it appears that' — softer than a direct statement."
            },
            {
                id: "ja-c1-u3-q2",
                level: "C1",
                prompt: "「この政策は失敗だった___。」Which hedged expression conveys a strong but indirect assertion?",
                options: ["と思われます", "と言わざるを得ない", "ではないでしょうか", "とも言えます"],
                answer: "と言わざるを得ない",
                hint: "～と言わざるを得ない = 'one cannot help but say' — a strong but still indirect assertion."
            },
            {
                id: "ja-c1-u3-q3",
                level: "C1",
                prompt: "「この結果は成功とは言えないのではないでしょうか」— how does this sentence function?",
                options: [
                    "Direct assertion that it is not a success",
                    "A polite indirect suggestion that it cannot be called a success",
                    "A question asking whether it is a success",
                    "A command to re-evaluate the result"
                ],
                answer: "A polite indirect suggestion that it cannot be called a success",
                hint: "～ではないでしょうか softens an assertion into a rhetorical question, inviting agreement politely."
            },
            {
                id: "ja-c1-u3-q4",
                level: "C1",
                prompt: "～とも言えます (to mo iemasu) is used to:",
                options: [
                    "Make a strong direct claim",
                    "Present an alternative interpretation or nuance",
                    "Express strong disagreement",
                    "Conclude a formal document"
                ],
                answer: "Present an alternative interpretation or nuance",
                hint: "～とも言えます = 'one could also say that' — offers an additional perspective."
            },
            {
                id: "ja-c1-u3-q5",
                level: "C1",
                prompt: "What does 弁証法 (benshōhō) mean?",
                options: ["Empiricism", "Pragmatism", "Dialectic / dialectics", "Utilitarianism"],
                answer: "Dialectic / dialectics",
                hint: "弁証法 (benshōhō) refers to dialectics — the method of reasoning through opposing arguments."
            },
            {
                id: "ja-c1-u3-q6",
                level: "C1",
                prompt: "What does 相対主義 (sōtai-shugi) mean?",
                options: ["Utilitarianism", "Relativism", "Pragmatism", "Deontology"],
                answer: "Relativism",
                hint: "相対主義 (sōtai-shugi): the view that truth, morality, or knowledge is relative to context or culture."
            }
        ]
    },
    {
        id: "ja-c1-u4",
        level: "C1",
        order: 4,
        title: "Advanced Conditionals",
        description: "Master nuanced conditional expressions unique to advanced Japanese including ともなると, ならではの, and とあれば",
        grammarIds: ["ja-g-c1-4"],
        vocabIds: ["ja-v-c1-013", "ja-v-c1-014", "ja-v-c1-015", "ja-v-c1-069", "ja-v-c1-071"],
        verbIds: [],
        testQuestions: [
            {
                id: "ja-c1-u4-q1",
                level: "C1",
                prompt: "「社長___、プライベートの時間はほとんどなくなる」— which advanced conditional fits?",
                options: ["ならではの", "ともなると", "とあれば", "にしたら"],
                answer: "ともなると",
                hint: "～ともなると: 'when you reach the level of / when it comes to being' — implying that status brings certain expectations."
            },
            {
                id: "ja-c1-u4-q2",
                level: "C1",
                prompt: "「日本___の、細部へのこだわり」— which expression means 'unique to / characteristic of'?",
                options: ["ともなると", "とあれば", "ならではの", "にしてみれば"],
                answer: "ならではの",
                hint: "～ならではの: 'unique to / that can only exist with' — the attention to detail unique to Japan."
            },
            {
                id: "ja-c1-u4-q3",
                level: "C1",
                prompt: "「必要___、協力します」— which conditional means 'if it is the case / if the situation requires'?",
                options: ["ともなると", "ならではの", "にしたら", "とあれば"],
                answer: "とあれば",
                hint: "～とあれば: 'if it means that / if the situation calls for it' — showing willingness in that condition."
            },
            {
                id: "ja-c1-u4-q4",
                level: "C1",
                prompt: "「子ども___、その経験はさぞ辛かっただろう」— which expression is used?",
                options: ["ともなると", "ならではの", "とあれば", "にしてみれば"],
                answer: "にしてみれば",
                hint: "～にしてみれば / にしたら: 'from the perspective of' — empathetically imagining someone else's viewpoint."
            },
            {
                id: "ja-c1-u4-q5",
                level: "C1",
                prompt: "What does 三権分立 (sankenbunritsu) mean?",
                options: ["Popular sovereignty", "Rule of law", "Separation of powers", "Judicial review"],
                answer: "Separation of powers",
                hint: "三権分立: 三権 (three powers — legislative, executive, judicial) + 分立 (separation)."
            },
            {
                id: "ja-c1-u4-q6",
                level: "C1",
                prompt: "What does 明治維新 (meiji-ishin) refer to?",
                options: [
                    "The return of power from shogun to emperor in 1867",
                    "The Meiji Restoration of 1868 modernising Japan",
                    "The abolition of feudal domains in 1871",
                    "The unequal treaties with Western powers"
                ],
                answer: "The Meiji Restoration of 1868 modernising Japan",
                hint: "明治維新 (Meiji Restoration, 1868): the political revolution that transformed Japan into a modern state."
            }
        ]
    },
    {
        id: "ja-c1-u5",
        level: "C1",
        order: 5,
        title: "Formal Copula: である and ものだ",
        description: "Command the literary copula である, the expressive ものだ, and the explanatory のだ for formal and written Japanese",
        grammarIds: ["ja-g-c1-5"],
        vocabIds: ["ja-v-c1-025", "ja-v-c1-026", "ja-v-c1-027", "ja-v-c1-028", "ja-v-c1-051"],
        verbIds: ["ja-vb-c1-1", "ja-vb-c1-2"],
        testQuestions: [
            {
                id: "ja-c1-u5-q1",
                level: "C1",
                prompt: "In which context is the copula である most appropriate?",
                options: [
                    "Casual spoken conversation with friends",
                    "Academic essays, formal writing, and official documents",
                    "Children's picture books",
                    "Text messages and social media"
                ],
                answer: "Academic essays, formal writing, and official documents",
                hint: "である is the literary/formal copula used in academic papers, essays, news articles, and official documents."
            },
            {
                id: "ja-c1-u5-q2",
                level: "C1",
                prompt: "「昔はよく川で泳いだ___。」Which copula expresses nostalgic recollection of a past habit?",
                options: ["のだ", "である", "ものだ", "たる"],
                answer: "ものだ",
                hint: "〜たものだ expresses nostalgia for a past habit: 'we used to swim in the river in the old days'."
            },
            {
                id: "ja-c1-u5-q3",
                level: "C1",
                prompt: "「だから彼は昨日来なかった___。」What does the ending のだ convey?",
                options: [
                    "A literary assertion of fact",
                    "An explanatory conclusion: 'So that is why...'",
                    "A nostalgic memory",
                    "The natural/expected state of affairs"
                ],
                answer: "An explanatory conclusion: 'So that is why...'",
                hint: "のだ/のです is the explanatory copula — providing a reason or conclusion: 'That is why / the thing is...'."
            },
            {
                id: "ja-c1-u5-q4",
                level: "C1",
                prompt: "「教師___者、生徒の手本となるべきだ。」Which literary copula expresses 'one who is / being'?",
                options: ["である", "ものだ", "のだ", "たる"],
                answer: "たる",
                hint: "たる is a highly literary copula expressing the qualities expected of a role: 教師たる者 = one who is a teacher."
            },
            {
                id: "ja-c1-u5-q5",
                level: "C1",
                prompt: "The humble form for asking someone to do something ('could you please do X for me') using いただく is:",
                options: ["～ていただきたい", "～ていただけますか", "～させていただく", "～ていただきます"],
                answer: "～ていただけますか",
                hint: "～ていただけますか: 'Could you please do X for me?' — a polite humble request."
            },
            {
                id: "ja-c1-u5-q6",
                level: "C1",
                prompt: "「報告させ___」— which completion shows the humble permission form used in business?",
                options: ["ていただきます", "てもらいます", "ていただく", "てください"],
                answer: "ていただきます",
                hint: "～させていただきます: 'Allow me to / I will humbly do X' — the humble permission form common in business."
            }
        ]
    }
]
