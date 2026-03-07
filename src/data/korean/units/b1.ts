// Korean B1 lesson units
// data/korean/units/b1.ts
import { LessonUnit } from "../../../types"

export const b1Units: LessonUnit[] = [
    {
        id: "ko-b1-u1",
        level: "B1",
        order: 1,
        title: "Conditionals: ~(으)면",
        description: "Express 'if' and 'when' conditions",
        grammarIds: ["ko-g-b1-1"],
        vocabIds: ["ko-v-b1-3", "ko-v-b1-8"],
        verbIds: ["ko-vb-b1-1"],
        testQuestions: [
            {
                id: "ko-b1-u1-q1", level: "B1",
                prompt: "Complete: '시간이 ___ 같이 갈게요.' (If I have time...)",
                options: ["있어서", "있으면", "있지만", "있기 때문에"],
                answer: "있으면"
            },
            {
                id: "ko-b1-u1-q2", level: "B1",
                prompt: "~(으)면 expresses:",
                options: ["Contrast", "Conditional (if/when)", "Cause and reason", "Ongoing action"],
                answer: "Conditional (if/when)"
            },
            {
                id: "ko-b1-u1-q3", level: "B1",
                prompt: "What does '건강' mean?",
                options: ["Society", "Freedom", "Health", "Opinion"],
                answer: "Health"
            },
            {
                id: "ko-b1-u1-q4", level: "B1",
                prompt: "What does '중요하다' mean?",
                options: ["Difficult", "Interesting", "Important", "Beautiful"],
                answer: "Important"
            },
            {
                id: "ko-b1-u1-q5", level: "B1",
                prompt: "Can ~(으)면 be combined with past tense on the if-clause?",
                options: ["Yes, always", "Yes, sometimes", "No, tense goes on the main clause", "Only with 하다 verbs"],
                answer: "No, tense goes on the main clause"
            }
        ]
    },
    {
        id: "ko-b1-u2",
        level: "B1",
        order: 2,
        title: "Because & So: ~아/어서",
        description: "Link cause and effect or sequential actions",
        grammarIds: ["ko-g-b1-2"],
        vocabIds: ["ko-v-b1-6", "ko-v-b1-7"],
        verbIds: ["ko-vb-b1-3"],
        testQuestions: [
            {
                id: "ko-b1-u2-q1", level: "B1",
                prompt: "Complete: '배가 고파___ 밥을 먹었어요.' (so/because)",
                options: ["지만", "서", "으면", "기 때문에"],
                answer: "서"
            },
            {
                id: "ko-b1-u2-q2", level: "B1",
                prompt: "~아/어서 can express:",
                options: ["Contrast only", "Cause/reason or sequential action", "Permission", "Future intention"],
                answer: "Cause/reason or sequential action"
            },
            {
                id: "ko-b1-u2-q3", level: "B1",
                prompt: "What does '어렵다' mean?",
                options: ["Important", "Interesting", "Difficult", "Easy"],
                answer: "Difficult"
            },
            {
                id: "ko-b1-u2-q4", level: "B1",
                prompt: "What does '문제' mean?",
                options: ["Opportunity", "Problem", "Health", "Opinion"],
                answer: "Problem"
            },
            {
                id: "ko-b1-u2-q5", level: "B1",
                prompt: "Past tense in a ~아/어서 sentence goes:",
                options: ["On the if-clause", "On both clauses", "On the final verb only", "On neither clause"],
                answer: "On the final verb only"
            }
        ]
    },
    {
        id: "ko-b1-u3",
        level: "B1",
        order: 3,
        title: "Contrast: ~지만",
        description: "Connect two contrasting ideas with 'but'",
        grammarIds: ["ko-g-b1-3"],
        vocabIds: ["ko-v-b1-1", "ko-v-b1-2"],
        verbIds: ["ko-vb-b1-2"],
        testQuestions: [
            {
                id: "ko-b1-u3-q1", level: "B1",
                prompt: "Complete: '한국어는 어렵___ 재미있어요.' (~지만)",
                options: ["어서", "지만", "기 때문에", "으면"],
                answer: "지만"
            },
            {
                id: "ko-b1-u3-q2", level: "B1",
                prompt: "What does '환경' mean?",
                options: ["Society", "Health", "Environment", "Freedom"],
                answer: "Environment"
            },
            {
                id: "ko-b1-u3-q3", level: "B1",
                prompt: "~지만 connects:",
                options: ["Cause and result", "Two contrasting clauses", "Sequential actions", "Conditional clauses"],
                answer: "Two contrasting clauses"
            },
            {
                id: "ko-b1-u3-q4", level: "B1",
                prompt: "What does '사회' mean?",
                options: ["Health", "Freedom", "Society", "Environment"],
                answer: "Society"
            },
            {
                id: "ko-b1-u3-q5", level: "B1",
                prompt: "Present polite of 사용하다:",
                options: ["사용이에요", "사용했어요", "사용해요", "사용할 거예요"],
                answer: "사용해요"
            }
        ]
    },
    {
        id: "ko-b1-u4",
        level: "B1",
        order: 4,
        title: "Formal Reason: ~기 때문에",
        description: "Give formal explanations and reasons",
        grammarIds: ["ko-g-b1-4"],
        vocabIds: ["ko-v-b1-4", "ko-v-b1-5", "ko-v-b1-9", "ko-v-b1-10"],
        verbIds: ["ko-vb-b1-4"],
        testQuestions: [
            {
                id: "ko-b1-u4-q1", level: "B1",
                prompt: "Complete: '비가 오___ 집에 있어요.' (~기 때문에)",
                options: ["기 때문에", "아서", "지만", "으면"],
                answer: "기 때문에"
            },
            {
                id: "ko-b1-u4-q2", level: "B1",
                prompt: "~기 때문에 compared to ~아/어서 is:",
                options: ["More casual", "More formal", "Identical in use", "Only for written Korean"],
                answer: "More formal"
            },
            {
                id: "ko-b1-u4-q3", level: "B1",
                prompt: "What does '생활' mean?",
                options: ["Freedom", "Society", "Daily life", "Challenge"],
                answer: "Daily life"
            },
            {
                id: "ko-b1-u4-q4", level: "B1",
                prompt: "What does '의견' mean?",
                options: ["Problem", "Freedom", "Opinion", "Health"],
                answer: "Opinion"
            },
            {
                id: "ko-b1-u4-q5", level: "B1",
                prompt: "How do you say 'I started studying Korean'?",
                options: ["한국어를 공부해요.", "한국어 공부를 시작했어요.", "한국어를 공부하고 싶어요.", "한국어를 공부할 거예요."],
                answer: "한국어 공부를 시작했어요."
            }
        ]
    }
]
