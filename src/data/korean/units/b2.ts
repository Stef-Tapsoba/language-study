// Korean B2 lesson units
// data/korean/units/b2.ts
import { LessonUnit } from "../../../types"

export const b2Units: LessonUnit[] = [
    {
        id: "ko-b2-u1",
        level: "B2",
        order: 1,
        title: "Passive & Causative Verbs",
        description: "Learn how to express passives and causatives in Korean",
        grammarIds: ["ko-g-b2-1"],
        vocabIds: ["ko-v-b2-029", "ko-v-b2-031", "ko-v-b2-045", "ko-v-b2-046", "ko-v-b2-061"],
        verbIds: ["ko-vb-b2-1"],
        testQuestions: [
            {
                id: "ko-b2-u1-q1", level: "B2",
                prompt: "Which suffix forms a passive verb in Korean?",
                options: ["-이/-히/-리/-기", "-면/-으면", "-다고/-라고", "-겠-"],
                answer: "-이/-히/-리/-기"
            },
            {
                id: "ko-b2-u1-q2", level: "B2",
                prompt: "Which sentence uses the passive correctly?",
                options: ["문이 바람에 닫혔어요.", "문이 바람에 닫았어요.", "문이 바람에 닫게 해요.", "문이 바람에 닫혀요 할 거예요."],
                answer: "문이 바람에 닫혔어요."
            },
            {
                id: "ko-b2-u1-q3", level: "B2",
                prompt: "The causative of 먹다 (to eat) is:",
                options: ["먹이다", "먹히다", "먹어지다", "먹리다"],
                answer: "먹이다"
            },
            {
                id: "ko-b2-u1-q4", level: "B2",
                prompt: "What does '시키다' express when combined with a Sino-Korean verb?",
                options: ["Causative (make someone do)", "Passive (be done)", "Conditional", "Contrast"],
                answer: "Causative (make someone do)"
            },
            {
                id: "ko-b2-u1-q5", level: "B2",
                prompt: "What does '인공지능' mean?",
                options: ["Nanotechnology", "Artificial intelligence", "Algorithm", "Innovation"],
                answer: "Artificial intelligence"
            },
            {
                id: "ko-b2-u1-q6", level: "B2",
                prompt: "The formal present of 하다 is:",
                options: ["해요", "했어요", "합니다", "하겠어요"],
                answer: "합니다"
            }
        ]
    },
    {
        id: "ko-b2-u2",
        level: "B2",
        order: 2,
        title: "Indirect Speech",
        description: "Report what others said, asked, or commanded",
        grammarIds: ["ko-g-b2-2"],
        vocabIds: ["ko-v-b2-001", "ko-v-b2-005", "ko-v-b2-008", "ko-v-b2-053", "ko-v-b2-066"],
        verbIds: ["ko-vb-b2-2"],
        testQuestions: [
            {
                id: "ko-b2-u2-q1", level: "B2",
                prompt: "Which ending reports a declarative statement?",
                options: ["-다고 하다", "-냐고 하다", "-(으)라고 하다", "-자고 하다"],
                answer: "-다고 하다"
            },
            {
                id: "ko-b2-u2-q2", level: "B2",
                prompt: "How do you report 'She asked when the meeting was'?",
                options: ["회의가 언제냐고 물었어요.", "회의가 언제라고 했어요.", "회의가 언제다고 했어요.", "회의가 언제라고 물었어요."],
                answer: "회의가 언제냐고 물었어요."
            },
            {
                id: "ko-b2-u2-q3", level: "B2",
                prompt: "To report a command 'Go home', you say:",
                options: ["집에 가라고 했어요.", "집에 간다고 했어요.", "집에 가냐고 했어요.", "집에 가자고 했어요."],
                answer: "집에 가라고 했어요."
            },
            {
                id: "ko-b2-u2-q4", level: "B2",
                prompt: "What does '민주주의' mean?",
                options: ["Sovereignty", "Democracy", "Civil rights", "Corruption"],
                answer: "Democracy"
            },
            {
                id: "ko-b2-u2-q5", level: "B2",
                prompt: "The -게 되다 construction with 되다 expresses:",
                options: ["A natural outcome or change", "A direct command", "A passive action by force", "A future plan"],
                answer: "A natural outcome or change"
            },
            {
                id: "ko-b2-u2-q6", level: "B2",
                prompt: "What does '법률' mean?",
                options: ["Election campaign", "Law / legislation", "Suffrage", "National Assembly member"],
                answer: "Law / legislation"
            }
        ]
    },
    {
        id: "ko-b2-u3",
        level: "B2",
        order: 3,
        title: "Advanced Connectors",
        description: "Use advanced logical connectors for nuanced Korean",
        grammarIds: ["ko-g-b2-3"],
        vocabIds: ["ko-v-b2-069", "ko-v-b2-070", "ko-v-b2-071", "ko-v-b2-073", "ko-v-b2-074"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b2-u3-q1", level: "B2",
                prompt: "Which connector means 'the more...the more'?",
                options: ["-ㄹ/을수록", "-자마자", "-는데도", "-더라도"],
                answer: "-ㄹ/을수록"
            },
            {
                id: "ko-b2-u3-q2", level: "B2",
                prompt: "Complete: '수업이 끝나___ 바로 집에 갔어요.' (as soon as)",
                options: ["자마자", "수록", "는데도", "더라도"],
                answer: "자마자"
            },
            {
                id: "ko-b2-u3-q3", level: "B2",
                prompt: "-더라도 expresses:",
                options: ["Hypothetical concession (even if)", "Definite contrast (but)", "As soon as", "The more...the more"],
                answer: "Hypothetical concession (even if)"
            },
            {
                id: "ko-b2-u3-q4", level: "B2",
                prompt: "What does '따라서' mean?",
                options: ["Nevertheless", "Therefore / consequently", "Regarding", "Similarly"],
                answer: "Therefore / consequently"
            },
            {
                id: "ko-b2-u3-q5", level: "B2",
                prompt: "Complete: '피곤한___ 계속 공부했어요.' (even though)",
                options: ["는데도", "자마자", "수록", "더라도"],
                answer: "는데도"
            },
            {
                id: "ko-b2-u3-q6", level: "B2",
                prompt: "What does '마찬가지로' mean?",
                options: ["Therefore", "In spite of that", "Likewise / similarly", "Notably"],
                answer: "Likewise / similarly"
            }
        ]
    },
    {
        id: "ko-b2-u4",
        level: "B2",
        order: 4,
        title: "Formal Register",
        description: "Use -ㅂ니다/-습니다 in professional and official contexts",
        grammarIds: ["ko-g-b2-4"],
        vocabIds: ["ko-v-b2-010", "ko-v-b2-012", "ko-v-b2-015", "ko-v-b2-019", "ko-v-b2-020"],
        verbIds: ["ko-vb-b2-3"],
        testQuestions: [
            {
                id: "ko-b2-u4-q1", level: "B2",
                prompt: "Which ending is used for formal statements after a vowel stem?",
                options: ["-ㅂ니다", "-습니다", "-아/어요", "-겠어요"],
                answer: "-ㅂ니다"
            },
            {
                id: "ko-b2-u4-q2", level: "B2",
                prompt: "What is the formal present of 받다 (to receive)?",
                options: ["받아요", "받습니다", "받겠어요", "받았어요"],
                answer: "받습니다"
            },
            {
                id: "ko-b2-u4-q3", level: "B2",
                prompt: "The formal register -ㅂ니다/-습니다 is used in:",
                options: ["Business meetings and official announcements", "Casual conversation with friends", "Text messages", "Family conversations only"],
                answer: "Business meetings and official announcements"
            },
            {
                id: "ko-b2-u4-q4", level: "B2",
                prompt: "What does '부패' mean?",
                options: ["Budget", "Debt", "Corruption", "Privatization"],
                answer: "Corruption"
            },
            {
                id: "ko-b2-u4-q5", level: "B2",
                prompt: "The formal past of 받다 (to receive) is:",
                options: ["받았어요", "받았습니다", "받겠습니다", "받습니다"],
                answer: "받았습니다"
            },
            {
                id: "ko-b2-u4-q6", level: "B2",
                prompt: "What does '경기침체' mean?",
                options: ["Budget deficit", "Privatization", "Economic recession", "Labor union"],
                answer: "Economic recession"
            }
        ]
    },
    {
        id: "ko-b2-u5",
        level: "B2",
        order: 5,
        title: "Regret & Wishes",
        description: "Express wishes, hopes, and regrets about past situations",
        grammarIds: ["ko-g-b2-5"],
        vocabIds: ["ko-v-b2-075", "ko-v-b2-076", "ko-v-b2-077", "ko-v-b2-079", "ko-v-b2-080"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b2-u5-q1", level: "B2",
                prompt: "Which structure expresses 'I wish the weather were better'?",
                options: ["날씨가 더 좋았으면 좋겠어요.", "날씨가 더 좋을걸 그랬어요.", "날씨가 더 좋지 않았더라면.", "날씨가 더 좋더라도 좋겠어요."],
                answer: "날씨가 더 좋았으면 좋겠어요."
            },
            {
                id: "ko-b2-u5-q2", level: "B2",
                prompt: "-(으)ㄹ걸 그랬다 expresses:",
                options: ["Regret for not doing something", "A hypothetical condition", "A future hope", "A wish for others"],
                answer: "Regret for not doing something"
            },
            {
                id: "ko-b2-u5-q3", level: "B2",
                prompt: "Complete: '더 열심히 공부___ 그랬어요.' (I should have studied harder)",
                options: ["할걸", "하면", "했더라면", "하는데도"],
                answer: "할걸"
            },
            {
                id: "ko-b2-u5-q4", level: "B2",
                prompt: "What does '후회' mean?",
                options: ["Nostalgia", "Resilience", "Regret", "Frustration"],
                answer: "Regret"
            },
            {
                id: "ko-b2-u5-q5", level: "B2",
                prompt: "-지 않았더라면 is used to express:",
                options: ["A past counterfactual (if only I hadn't)", "A current wish", "A future regret", "A conditional action"],
                answer: "A past counterfactual (if only I hadn't)"
            },
            {
                id: "ko-b2-u5-q6", level: "B2",
                prompt: "What does '공감' mean?",
                options: ["Nostalgia", "Empathy", "Frustration", "Resilience"],
                answer: "Empathy"
            }
        ]
    },
    {
        id: "ko-b2-u6",
        level: "B2",
        order: 6,
        title: "Inevitability & Concession: ~ㄹ 수밖에 없다 / ~(으)ㄹ지라도",
        description: "Express that something cannot be avoided using ~ㄹ 수밖에 없다, and learn the formal concessive structure ~(으)ㄹ지라도 (even if). These patterns are essential for formal argumentation and the B2 essay register.",
        grammarIds: ["ko-g-b2-6"],
        vocabIds: ["ko-v-b2-081", "ko-v-b2-082", "ko-v-b2-083", "ko-v-b2-084", "ko-v-b2-085"],
        verbIds: ["ko-vb-b2-4"],
        testQuestions: [
            { id: "ko-b2-u6-q1", level: "B2", prompt: "What does ~ㄹ 수밖에 없다 express?", options: ["possibility", "desire", "inevitability — have no choice but to", "regret"], answer: "inevitability — have no choice but to", hint: "수밖에 없다 = literally 'there is no way other than'. Expresses inevitability or the only option available." },
            { id: "ko-b2-u6-q2", level: "B2", prompt: "Complete: '다른 방법이 없으니까 이 방법을 사용할 ___.'", options: ["수 있어요", "수밖에 없어요", "수 없어요", "필요가 있어요"], answer: "수밖에 없어요", hint: "다른 방법이 없다 → 이 방법을 쓸 수밖에 없다 = there's no other way, so we have no choice but to use this." },
            { id: "ko-b2-u6-q3", level: "B2", prompt: "What does ~(으)ㄹ지라도 express?", options: ["cause and result", "even if / even though (formal concessive)", "as soon as", "the more…the more"], answer: "even if / even though (formal concessive)", hint: "~(으)ㄹ지라도 = even if (formal/written). More literary than ~더라도. 어렵더라도 vs 어려울지라도." },
            { id: "ko-b2-u6-q4", level: "B2", prompt: "Complete: '결과가 나쁠___ 최선을 다해야 합니다.'", options: ["지라도", "서", "기 때문에", "으면"], answer: "지라도", hint: "~(으)ㄹ지라도 = even if the result is bad (formal concession)." },
            { id: "ko-b2-u6-q5", level: "B2", prompt: "What does '-(으)므로' signal and what makes it different from -아/어서?", options: ["Identical to -아/어서", "Formal written 'therefore' — used in essays and reports, not conversation", "Informal cause only", "Sequential action only"], answer: "Formal written 'therefore' — used in essays and reports, not conversation", hint: "-(으)므로 is formal written Korean. Using it in casual conversation sounds stiff — use -아/어서 or -니까 instead." },
            { id: "ko-b2-u6-q6", level: "B2", prompt: "How do you say 'I have no choice but to accept this offer'?", options: ["이 제안을 받아야 해요.", "이 제안을 받고 싶어요.", "이 제안을 받을 수밖에 없어요.", "이 제안을 받기로 해요."], answer: "이 제안을 받을 수밖에 없어요.", hint: "수밖에 없다 = no choice but to. 받다 → 받을 수밖에 없다." },
        ]
    },
    {
        id: "ko-b2-u7",
        level: "B2",
        order: 7,
        title: "Honorific Nouns & Full Honorific System",
        description: "Complete the honorific system by mastering honorific nouns and object-level honorifics — not just sentence-final endings. Authentic B2 Korean requires consistent honorification throughout a sentence, not just at the verb.",
        grammarIds: ["ko-g-b2-7"],
        vocabIds: ["ko-v-b2-086", "ko-v-b2-087", "ko-v-b2-088", "ko-v-b2-089"],
        verbIds: [],
        testQuestions: [
            { id: "ko-b2-u7-q1", level: "B2", prompt: "What is the honorific form of 이름 (name)?", options: ["이름님", "성함", "이름씨", "이름요"], answer: "성함", hint: "성함 is the honorific noun for 이름 (name). You ask for someone's 성함, not 이름, in polite contexts." },
            { id: "ko-b2-u7-q2", level: "B2", prompt: "What is the honorific form of 집 (house/home)?", options: ["집님", "댁", "집요", "집선생"], answer: "댁", hint: "댁 is the honorific noun for 집. 어느 댁에서 오셨어요? = Where do you live? (formal)" },
            { id: "ko-b2-u7-q3", level: "B2", prompt: "What is the honorific form of 나이 (age)?", options: ["나이님", "연세", "나이요", "나이분"], answer: "연세", hint: "연세 is the honorific noun for 나이 (age). 연세가 어떻게 되세요? = How old are you? (respectful)" },
            { id: "ko-b2-u7-q4", level: "B2", prompt: "Complete correctly: '선생님, ___ 드세요.' (eat — honorific verb)", options: ["먹어요", "드시다 → 드세요", "잡수시다 → 잡수세요", "Both 드세요 and 잡수세요 are correct"], answer: "Both 드세요 and 잡수세요 are correct", hint: "Both 드시다 and 잡수시다 are honorific forms of 먹다/마시다. 드세요 is more common; 잡수세요 is slightly more formal." },
            { id: "ko-b2-u7-q5", level: "B2", prompt: "What is the honorific form of 말 (words / speech)?", options: ["말씀", "말님", "말요", "말어"], answer: "말씀", hint: "말씀 is the honorific noun for 말. It can also be used humbly for one's own speech: 말씀 드리겠습니다 = I will speak / tell you." },
            { id: "ko-b2-u7-q6", level: "B2", prompt: "What mistake do B2 learners commonly make with honorifics?", options: ["Using -요 endings", "Using -습니다 instead of -아요", "Correctly using the sentence-final honorific verb but forgetting to use honorific nouns and object-level forms", "Overusing 반말"], answer: "Correctly using the sentence-final honorific verb but forgetting to use honorific nouns and object-level forms", hint: "The B2 guide explicitly flags this: full honorific production requires consistency throughout the sentence — nouns, verbs, and speech level all together." },
        ]
    },
    {
        id: "ko-b2-u8",
        level: "B2",
        order: 8,
        title: "Formal Written Register & Academic Discourse",
        description: "Build the formal written Korean register needed for academic essays, business documents, and formal presentations. Master the Sino-Korean connector system, discourse markers, and the written style that diverges significantly from spoken Korean.",
        grammarIds: ["ko-g-b2-8"],
        vocabIds: ["ko-v-b2-090", "ko-v-b2-091", "ko-v-b2-092"],
        verbIds: [],
        testQuestions: [
            { id: "ko-b2-u8-q1", level: "B2", prompt: "What does '따라서' signal in formal writing?", options: ["however / contrast", "therefore / consequently", "in addition", "for example"], answer: "therefore / consequently", hint: "따라서 = therefore / accordingly. Core formal discourse marker in essays and reports." },
            { id: "ko-b2-u8-q2", level: "B2", prompt: "What is the formal written register called that uses -ㅂ니다/-습니다 throughout?", options: ["반말", "해요체", "합쇼체", "해체"], answer: "합쇼체", hint: "합쇼체 (-ㅂ니다/-습니다) is the formal polite register for presentations, job interviews, official settings." },
            { id: "ko-b2-u8-q3", level: "B2", prompt: "Which is the formal Sino-Korean academic connector for 'on the other hand'?", options: ["그런데", "반면에", "그리고", "그래서"], answer: "반면에", hint: "반면에 = on the other hand / whereas. Used in formal written argumentation and academic essays." },
            { id: "ko-b2-u8-q4", level: "B2", prompt: "What does '즉' mean in formal discourse?", options: ["therefore", "however", "in other words / that is", "in addition"], answer: "in other words / that is", hint: "즉 = namely / in other words / that is. Used to reformulate or clarify a previous statement in formal writing." },
            { id: "ko-b2-u8-q5", level: "B2", prompt: "Which construction is the formal written equivalent of the spoken 해서 (because)?", options: ["-기 때문에 / -(으)므로", "-고", "-지만", "-아/어요"], answer: "-기 때문에 / -(으)므로", hint: "-기 때문에 and -(으)므로 are the formal written causal connectors. -(으)므로 is more formal, used in official documents and academic writing." },
            { id: "ko-b2-u8-q6", level: "B2", prompt: "What does '나아가' mean in formal writing?", options: ["looking back / retrospectively", "furthermore / going further", "as a result", "despite this"], answer: "furthermore / going further", hint: "나아가 = furthermore / going one step further. Used to add a stronger or additional point in formal argumentation." },
        ]
    }
]
