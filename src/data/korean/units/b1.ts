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
        vocabIds: ["ko-v-b1-003", "ko-v-b1-008", "ko-v-b1-035", "ko-v-b1-036", "ko-v-b1-037", "ko-v-b1-038"],
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
        vocabIds: ["ko-v-b1-006", "ko-v-b1-007", "ko-v-b1-018", "ko-v-b1-019", "ko-v-b1-020", "ko-v-b1-021"],
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
        vocabIds: ["ko-v-b1-001", "ko-v-b1-002", "ko-v-b1-010", "ko-v-b1-012", "ko-v-b1-013", "ko-v-b1-014"],
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
        vocabIds: ["ko-v-b1-004", "ko-v-b1-005", "ko-v-b1-009", "ko-v-b1-010", "ko-v-b1-045", "ko-v-b1-050", "ko-v-b1-055", "ko-v-b1-060"],
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
    },
    {
        id: "ko-b1-u5",
        level: "B1",
        order: 5,
        title: "Reported Speech: ~다고 하다 / ~라고 하다",
        description: "Report what someone said, asked, or claimed. Master the reported speech endings for statements, questions, and commands — one of the defining structural skills of B1 Korean.",
        grammarIds: ["ko-g-b1-5"],
        vocabIds: ["ko-v-b1-081", "ko-v-b1-082", "ko-v-b1-083", "ko-v-b1-084"],
        verbIds: ["ko-vb-b1-5"],
        testQuestions: [
            { id: "ko-b1-u5-q1", level: "B1", prompt: "Transform: '바빠요.' → 바쁘___ 해요. (He said he's busy.)", options: ["다고", "라고", "냐고", "자고"], answer: "다고", hint: "For statements (action/descriptive verbs in present): verb stem + 다고 하다. 바쁘다 → 바쁘다고 해요." },
            { id: "ko-b1-u5-q2", level: "B1", prompt: "Which ending reports a yes/no question?", options: ["~다고 하다", "~냐고 하다", "~라고 하다", "~자고 하다"], answer: "~냐고 하다", hint: "Questions use ~냐고 하다 (or ~는지 묻다 for content questions). 바빠요? → 바쁘냐고 했어요." },
            { id: "ko-b1-u5-q3", level: "B1", prompt: "Transform the command: '빨리 와요!' → 빨리 오___ 했어요.", options: ["다고", "라고", "냐고", "라고"], answer: "라고", hint: "Commands: verb stem + (으)라고 하다. 오다 → 오라고 했어요 (she told him to come)." },
            { id: "ko-b1-u5-q4", level: "B1", prompt: "Transform: '같이 가요!' (Let's go together!) → 같이 가___ 했어요.", options: ["다고", "라고", "냐고", "자고"], answer: "자고", hint: "Suggestions/proposals: verb stem + 자고 하다. 가다 → 가자고 했어요 (suggested going)." },
            { id: "ko-b1-u5-q5", level: "B1", prompt: "What does '~다고 들었어요' mean?", options: ["I saw that…", "I heard that…", "I think that…", "I know that…"], answer: "I heard that…", hint: "~다고 들었어요 = I heard that… Combining reported speech with 듣다 (to hear)." },
            { id: "ko-b1-u5-q6", level: "B1", prompt: "How do you say 'He said he would come tomorrow'?", options: ["내일 온다고 했어요.", "내일 오라고 했어요.", "내일 오냐고 했어요.", "내일 오자고 했어요."], answer: "내일 온다고 했어요.", hint: "Statement (he will come): 오다 → 온다고 했어요. ~ㄴ/는다고 for present/future facts." },
        ]
    },
    {
        id: "ko-b1-u6",
        level: "B1",
        order: 6,
        title: "Obligation & Attempt: ~아/어야 하다 / ~아/어 보다",
        description: "Express what must be done using ~아/어야 하다/되다, and talk about trying something using ~아/어 보다. These patterns complete the modal system that B1 Korean requires.",
        grammarIds: ["ko-g-b1-6"],
        vocabIds: ["ko-v-b1-085", "ko-v-b1-086", "ko-v-b1-087", "ko-v-b1-088"],
        verbIds: ["ko-vb-b1-6"],
        testQuestions: [
            { id: "ko-b1-u6-q1", level: "B1", prompt: "How do you say 'I have to study today'?", options: ["오늘 공부하고 싶어요.", "오늘 공부해야 해요.", "오늘 공부할 수 있어요.", "오늘 공부하면 돼요."], answer: "오늘 공부해야 해요.", hint: "~아/어야 하다 = must / have to. 공부하다 → 공부해야 해요." },
            { id: "ko-b1-u6-q2", level: "B1", prompt: "What is the difference between ~아/어야 하다 and ~아/어야 되다?", options: ["They have completely different meanings", "야 하다 is stronger; 야 되다 is more neutral — but both mean must/have to", "야 되다 means 'it becomes'; 야 하다 means 'it does'", "야 하다 is only for people; 야 되다 is for situations"], answer: "야 하다 is stronger; 야 되다 is more neutral — but both mean must/have to", hint: "Both mean 'must/have to'. 야 되다 is slightly softer and more common in spoken Korean." },
            { id: "ko-b1-u6-q3", level: "B1", prompt: "How do you say 'Try eating this'?", options: ["이거 먹고 싶어요.", "이거 먹으면 돼요.", "이거 먹어 보세요.", "이거 먹어야 해요."], answer: "이거 먹어 보세요.", hint: "~아/어 보다 = try doing. 먹다 → 먹어 보다 → 먹어 보세요 (please try eating)." },
            { id: "ko-b1-u6-q4", level: "B1", prompt: "How do you say 'I've tried living in Korea'?", options: ["한국에서 살고 싶었어요.", "한국에서 살았어요.", "한국에서 살아 봤어요.", "한국에서 살 수 있었어요."], answer: "한국에서 살아 봤어요.", hint: "살아 봤어요 = I have tried living (= I've experienced living). Past experience with ~아/어 보다." },
            { id: "ko-b1-u6-q5", level: "B1", prompt: "What does '안 해도 돼요' mean?", options: ["You must do it", "You don't have to do it", "You shouldn't do it", "You can't do it"], answer: "You don't have to do it", hint: "~아/어도 되다 = it's okay to / may. 안 + ~아/어도 되다 = you don't have to (it's fine not to)." },
            { id: "ko-b1-u6-q6", level: "B1", prompt: "Complete: '건강을 위해서 운동___.' (You must exercise for your health.)", options: ["해도 돼요", "해야 해요", "해 봐요", "할 수 있어요"], answer: "해야 해요", hint: "~아/어야 하다 for obligation: 운동해야 해요 = you must exercise." },
        ]
    },
    {
        id: "ko-b1-u7",
        level: "B1",
        order: 7,
        title: "Purpose & Nominalisation: ~(으)러 가다 / ~기 / ~는 것",
        description: "Express purpose with ~(으)러 가다/오다, and nominalise verbs using ~기 and ~는 것. Nominalisation is foundational to B1 sentence complexity — it lets verbs function as subjects and objects.",
        grammarIds: ["ko-g-b1-7"],
        vocabIds: ["ko-v-b1-089", "ko-v-b1-090", "ko-v-b1-091"],
        verbIds: [],
        testQuestions: [
            { id: "ko-b1-u7-q1", level: "B1", prompt: "How do you say 'I went to the library to study'?", options: ["도서관에 공부해서 갔어요.", "도서관에 공부하러 갔어요.", "도서관에 공부하고 갔어요.", "도서관에 공부하면 갔어요."], answer: "도서관에 공부하러 갔어요.", hint: "~(으)러 가다 = to go in order to do ~. 공부하다 → 공부하러 갔어요." },
            { id: "ko-b1-u7-q2", level: "B1", prompt: "How do you say 'Exercising is important'?", options: ["운동은 중요해요.", "운동하는 것이 중요해요.", "운동하기 중요해요.", "운동 중요해요."], answer: "운동하는 것이 중요해요.", hint: "~는 것 = the act of / the fact of. 운동하는 것이 중요해요 = Exercising is important." },
            { id: "ko-b1-u7-q3", level: "B1", prompt: "Which nominaliser is used with verbs of liking, being good at, etc.?", options: ["~는 것", "~기", "~(으)러", "~아/어서"], answer: "~기", hint: "~기 is used with verbs like 좋아하다, 싫어하다, 어렵다, 쉽다: 요리하기가 어려워요 = Cooking is difficult." },
            { id: "ko-b1-u7-q4", level: "B1", prompt: "Complete: '친구를 만나___ 카페에 갔어요.' (went to meet a friend)", options: ["서", "러", "고", "면"], answer: "러", hint: "Purpose with movement: ~(으)러 가다/오다. 만나다 → 만나러 (to meet)." },
            { id: "ko-b1-u7-q5", level: "B1", prompt: "What does '한국어를 배우기 시작했어요' mean?", options: ["I want to start learning Korean", "I started learning Korean", "I tried to learn Korean", "I finished learning Korean"], answer: "I started learning Korean", hint: "~기 시작하다 = to start doing. 배우기 시작했어요 = started learning." },
            { id: "ko-b1-u7-q6", level: "B1", prompt: "Which sentence uses nominalisation correctly as a subject?", options: ["한국어가 어려워요.", "한국어를 배우는 것이 재미있어요.", "한국어를 배워요.", "한국어가 어렵게 배워요."], answer: "한국어를 배우는 것이 재미있어요.", hint: "한국어를 배우는 것이 = Learning Korean (nominalised verb phrase as subject)." },
        ]
    },
    {
        id: "ko-b1-u8",
        level: "B1",
        order: 8,
        title: "Connector Register & Opinion — Consolidation",
        description: "Master the register difference between ~아/어서 and ~기 때문에, learn to express opinions and argue positions, and consolidate all B1 connectors in authentic debate contexts. Understand when each connector is socially appropriate.",
        grammarIds: ["ko-g-b1-2", "ko-g-b1-4", "ko-g-b1-8"],
        vocabIds: ["ko-v-b1-092", "ko-v-b1-093", "ko-v-b1-094"],
        verbIds: [],
        testQuestions: [
            { id: "ko-b1-u8-q1", level: "B1", prompt: "Which connector is more appropriate in a formal written argument?", options: ["~아/어서", "~기 때문에", "~고", "~지만"], answer: "~기 때문에", hint: "~기 때문에 is formal/objective — correct in essays, reports, and formal speech. ~아/어서 is casual." },
            { id: "ko-b1-u8-q2", level: "B1", prompt: "How do you express a structured opinion: 'In my opinion, this is the best solution'?", options: ["이게 좋은 것 같아요.", "제 생각에는, 이것이 가장 좋은 방법이라고 생각해요.", "좋아요.", "이게 좋기 때문에요."], answer: "제 생각에는, 이것이 가장 좋은 방법이라고 생각해요.", hint: "제 생각에는 (in my opinion) + ~(이)라고 생각해요 (I think that) = structured B1 opinion expression." },
            { id: "ko-b1-u8-q3", level: "B1", prompt: "How do you politely disagree while acknowledging the other person's view?", options: ["틀렸어요.", "맞아요. 그런데 저는 다르게 생각해요.", "아니에요, 당연히 아니죠.", "그건 사실이 아니에요."], answer: "맞아요. 그런데 저는 다르게 생각해요.", hint: "맞아요 (you're right) + 그런데 (but/however) + 다르게 생각해요 (I think differently) = polite disagreement." },
            { id: "ko-b1-u8-q4", level: "B1", prompt: "What does '어쩔 수 없다' mean?", options: ["it can be helped", "it can't be helped / there's nothing to be done", "it's possible", "it's not allowed"], answer: "it can't be helped / there's nothing to be done", hint: "어쩔 수 없다 is a fixed B1 expression — 'it can't be helped / what can you do'. Can't be assembled from parts." },
            { id: "ko-b1-u8-q5", level: "B1", prompt: "What does '결정을 내리다' mean?", options: ["to make an announcement", "to make a decision", "to lower a decision", "to follow a decision"], answer: "to make a decision", hint: "결정을 내리다 = to make a decision. 내리다 (not 하다) is the correct collocation verb here." },
            { id: "ko-b1-u8-q6", level: "B1", prompt: "Which phrase signals the conclusion of an argument in Korean?", options: ["그런데", "따라서 / 결론적으로", "하지만", "그리고"], answer: "따라서 / 결론적으로", hint: "따라서 = therefore / consequently. 결론적으로 = in conclusion. Both signal the final point of an argument." },
        ]
    },
]
