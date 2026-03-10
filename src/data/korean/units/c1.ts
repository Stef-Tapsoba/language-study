// Korean C1 lesson units
// data/korean/units/c1.ts
import { LessonUnit } from "../../../types"

export const c1Units: LessonUnit[] = [
    {
        id: "ko-c1-u1",
        level: "C1",
        order: 1,
        title: "Formal Written Structures",
        description: "Master -(으)므로, -는바, and -(으)ㄹ지언정 in formal written Korean",
        grammarIds: ["ko-g-c1-1"],
        vocabIds: ["ko-v-c1-014", "ko-v-c1-015", "ko-v-c1-045", "ko-v-c1-047", "ko-v-c1-048"],
        verbIds: ["ko-vb-c1-1"],
        testQuestions: [
            {
                id: "ko-c1-u1-q1", level: "C1",
                prompt: "Which formal written connector means 'since / therefore' and is used in official documents?",
                options: ["-(으)므로", "-아/어서", "-기 때문에", "-더라도"],
                answer: "-(으)므로"
            },
            {
                id: "ko-c1-u1-q2", level: "C1",
                prompt: "Complete the formal written sentence: '시간이 부족___ 핵심만 말씀드리겠습니다.'",
                options: ["하므로", "해서", "하지만", "하더라도"],
                answer: "하므로"
            },
            {
                id: "ko-c1-u1-q3", level: "C1",
                prompt: "What does '-는바' express in formal written Korean?",
                options: ["Given that / in that (states a premise)", "Even if (concessive)", "As soon as", "Despite the fact that"],
                answer: "Given that / in that (states a premise)"
            },
            {
                id: "ko-c1-u1-q4", level: "C1",
                prompt: "What does '드립니다' express?",
                options: ["Giving honorifically to a superior (formal present)", "Asking humbly", "Seeing humbly", "Receiving formally"],
                answer: "Giving honorifically to a superior (formal present)"
            },
            {
                id: "ko-c1-u1-q5", level: "C1",
                prompt: "What does '법치주의' mean?",
                options: ["Rule of law", "Constitutional law", "Separation of powers", "Judicial review"],
                answer: "Rule of law"
            },
            {
                id: "ko-c1-u1-q6", level: "C1",
                prompt: "Which sentence uses a compound 드리다 form to mean 'I will inform you respectfully'?",
                options: ["알려드리겠습니다.", "알겠습니다.", "알려주겠습니다.", "말씀드렸습니다."],
                answer: "알려드리겠습니다."
            }
        ]
    },
    {
        id: "ko-c1-u2",
        level: "C1",
        order: 2,
        title: "Advanced Modality",
        description: "Use -(으)ㄹ 만하다, -기는커녕, and -치고 to express nuanced evaluations",
        grammarIds: ["ko-g-c1-2"],
        vocabIds: ["ko-v-c1-025", "ko-v-c1-026", "ko-v-c1-027", "ko-v-c1-053", "ko-v-c1-054"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-c1-u2-q1", level: "C1",
                prompt: "What does '-(으)ㄹ 만하다' express?",
                options: ["Worth doing / deserves to be done", "Far from doing", "For someone who is X", "Even if"],
                answer: "Worth doing / deserves to be done"
            },
            {
                id: "ko-c1-u2-q2", level: "C1",
                prompt: "Complete: '쉬___ 더 바빠졌다.' (Far from resting, I became busier)",
                options: ["기는커녕", "기는 해도", "기는 했지만", "기는 위해"],
                answer: "기는커녕"
            },
            {
                id: "ko-c1-u2-q3", level: "C1",
                prompt: "What does '-치고' imply in '학생치고 매우 성숙하다'?",
                options: ["Surprising deviation from what is expected of a student", "Typical behaviour for a student", "Because they are a student", "Even if they are a student"],
                answer: "Surprising deviation from what is expected of a student"
            },
            {
                id: "ko-c1-u2-q4", level: "C1",
                prompt: "What is '인지부조화' in English?",
                options: ["Cognitive dissonance", "Confirmation bias", "Projection", "Self-efficacy"],
                answer: "Cognitive dissonance"
            },
            {
                id: "ko-c1-u2-q5", level: "C1",
                prompt: "What does '눈치' refer to in Korean culture?",
                options: ["Social awareness / ability to read unspoken cues", "Speed and urgency", "Emotional attachment", "Deep grief and longing"],
                answer: "Social awareness / ability to read unspoken cues"
            },
            {
                id: "ko-c1-u2-q6", level: "C1",
                prompt: "Which sentence correctly uses -(으)ㄹ 만하다?",
                options: ["이 책은 읽을 만하다.", "이 책은 읽기는커녕.", "이 책은 읽치고 좋다.", "이 책은 읽므로 좋다."],
                answer: "이 책은 읽을 만하다."
            }
        ]
    },
    {
        id: "ko-c1-u3",
        level: "C1",
        order: 3,
        title: "Academic Discourse Cohesion",
        description: "Use 즉, 나아가, 이에 따라, 오히려, 반면에 to build cohesive academic arguments",
        grammarIds: ["ko-g-c1-3"],
        vocabIds: ["ko-v-c1-029", "ko-v-c1-030", "ko-v-c1-031", "ko-v-c1-032", "ko-v-c1-049"],
        verbIds: ["ko-vb-c1-2"],
        testQuestions: [
            {
                id: "ko-c1-u3-q1", level: "C1",
                prompt: "Which discourse connector means 'in other words / that is'?",
                options: ["즉", "나아가", "이에 따라", "오히려"],
                answer: "즉"
            },
            {
                id: "ko-c1-u3-q2", level: "C1",
                prompt: "Which connector introduces a further or stronger additional point?",
                options: ["나아가", "반면에", "즉", "이에 따라"],
                answer: "나아가"
            },
            {
                id: "ko-c1-u3-q3", level: "C1",
                prompt: "'이에 따라' is used to introduce:",
                options: ["A consequence or response to what was just stated", "A contrast with the previous statement", "A clarification of a term", "A further elaboration going beyond the previous point"],
                answer: "A consequence or response to what was just stated"
            },
            {
                id: "ko-c1-u3-q4", level: "C1",
                prompt: "What does '여쭤봐도 될까요?' mean?",
                options: ["May I ask (humbly)?", "I already asked (humbly).", "I will ask (formally).", "Please ask me."],
                answer: "May I ask (humbly)?"
            },
            {
                id: "ko-c1-u3-q5", level: "C1",
                prompt: "What does '재현성' mean in a research context?",
                options: ["Reproducibility / replicability", "Null hypothesis", "Independent variable", "Peer review"],
                answer: "Reproducibility / replicability"
            },
            {
                id: "ko-c1-u3-q6", level: "C1",
                prompt: "Complete: '규제를 강화했지만, ___ 혁신이 촉진되었다.' (on the contrary)",
                options: ["오히려", "나아가", "반면에", "이에 따라"],
                answer: "오히려"
            }
        ]
    },
    {
        id: "ko-c1-u4",
        level: "C1",
        order: 4,
        title: "Classical and Literary Forms",
        description: "Recognise and understand classical Korean literary endings -노라, -(으)ㄹ지니, -이라, -도다",
        grammarIds: ["ko-g-c1-4"],
        vocabIds: ["ko-v-c1-069", "ko-v-c1-070", "ko-v-c1-071", "ko-v-c1-072", "ko-v-c1-073"],
        verbIds: ["ko-vb-c1-3"],
        testQuestions: [
            {
                id: "ko-c1-u4-q1", level: "C1",
                prompt: "What does the literary ending '-노라' express?",
                options: ["A literary first-person assertion or declaration", "A classical conditional", "A literary exclamation of admiration", "A formal copula"],
                answer: "A literary first-person assertion or declaration"
            },
            {
                id: "ko-c1-u4-q2", level: "C1",
                prompt: "Complete the classical sentence: '길이 멀___, 일찍 출발하라.' (archaic connective 'since')",
                options: ["지니", "도다", "노라", "이라"],
                answer: "지니"
            },
            {
                id: "ko-c1-u4-q3", level: "C1",
                prompt: "What is the function of '-도다' in classical Korean?",
                options: ["A literary exclamatory ending expressing admiration or strong emotion", "A first-person literary assertion", "An archaic connective meaning 'since'", "A formal copula for citation"],
                answer: "A literary exclamatory ending expressing admiration or strong emotion"
            },
            {
                id: "ko-c1-u4-q4", level: "C1",
                prompt: "What does '처음 뵙겠습니다' mean?",
                options: ["Nice to meet you (formal / humble)", "I have met you before (humble)", "I hope to meet you again (formal)", "I will not meet you (formal)"],
                answer: "Nice to meet you (formal / humble)"
            },
            {
                id: "ko-c1-u4-q5", level: "C1",
                prompt: "What does '광복' refer to historically?",
                options: ["Liberation from Japanese colonial rule in 1945", "The founding of the Joseon Dynasty", "The March First Movement of 1919", "The Saemaul rural development movement"],
                answer: "Liberation from Japanese colonial rule in 1945"
            },
            {
                id: "ko-c1-u4-q6", level: "C1",
                prompt: "In which contexts do classical Korean literary forms like -노라 and -도다 appear?",
                options: ["Classical literature, poetry, hymns, and ceremonial oratory", "Modern casual conversation", "Business emails and reports", "Modern news broadcasting"],
                answer: "Classical literature, poetry, hymns, and ceremonial oratory"
            }
        ]
    },
    {
        id: "ko-c1-u5",
        level: "C1",
        order: 5,
        title: "사자성어 & 속담",
        description: "Learn four-character Sino-Korean idioms and native proverbs for rhetorical effect",
        grammarIds: ["ko-g-c1-5"],
        vocabIds: ["ko-v-c1-037", "ko-v-c1-038", "ko-v-c1-039", "ko-v-c1-040", "ko-v-c1-044"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-c1-u5-q1", level: "C1",
                prompt: "What does '일석이조 (一石二鳥)' mean?",
                options: ["Killing two birds with one stone", "Reaping what you sow", "Heart-to-heart understanding", "Unfortunate coincidental timing"],
                answer: "Killing two birds with one stone"
            },
            {
                id: "ko-c1-u5-q2", level: "C1",
                prompt: "Which 사자성어 means 'reaping what one sows'?",
                options: ["자업자득 (自業自得)", "이심전심 (以心傳心)", "오비이락 (烏飛梨落)", "일석이조 (一石二鳥)"],
                answer: "자업자득 (自業自得)"
            },
            {
                id: "ko-c1-u5-q3", level: "C1",
                prompt: "What does the proverb '세 살 버릇 여든까지 간다' mean?",
                options: ["Habits formed in early childhood last a lifetime", "Kind words bring kind words in return", "A student who surpasses the master", "Fortune and misfortune are unpredictable"],
                answer: "Habits formed in early childhood last a lifetime"
            },
            {
                id: "ko-c1-u5-q4", level: "C1",
                prompt: "What does '이심전심 (以心傳心)' describe?",
                options: ["Mutual understanding without words", "Unfortunate coincidental timing", "Surrounding on all sides", "Blue exceeding indigo"],
                answer: "Mutual understanding without words"
            },
            {
                id: "ko-c1-u5-q5", level: "C1",
                prompt: "What does '새옹지마 (塞翁之馬)' express?",
                options: ["A blessing in disguise / fortune and misfortune are unpredictable", "Desperate straits / surrounded on all sides", "Making something good even better", "Killing two birds with one stone"],
                answer: "A blessing in disguise / fortune and misfortune are unpredictable"
            },
            {
                id: "ko-c1-u5-q6", level: "C1",
                prompt: "Which proverb means 'kind words bring kind words in return'?",
                options: ["가는 말이 고와야 오는 말이 곱다", "세 살 버릇 여든까지 간다", "호랑이도 제 말 하면 온다", "콩 심은 데 콩 나고 팥 심은 데 팥 난다"],
                answer: "가는 말이 고와야 오는 말이 곱다"
            }
        ]
    }
]
