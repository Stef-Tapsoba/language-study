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
    }
]
