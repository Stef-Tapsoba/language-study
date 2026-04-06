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
        listeningIds: ["ko-l-b1-1"],
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
        readingIds: ["ko-r-b1-1"],
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
        listeningIds: ["ko-l-b1-2"],
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
        readingIds: ["ko-r-b1-2"],
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
        listeningIds: ["ko-l-b1-3"],
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
        readingIds: ["ko-r-b1-3"],
        testQuestions: [
            { id: "ko-b1-u8-q1", level: "B1", prompt: "Which connector is more appropriate in a formal written argument?", options: ["~아/어서", "~기 때문에", "~고", "~지만"], answer: "~기 때문에", hint: "~기 때문에 is formal/objective — correct in essays, reports, and formal speech. ~아/어서 is casual." },
            { id: "ko-b1-u8-q2", level: "B1", prompt: "How do you express a structured opinion: 'In my opinion, this is the best solution'?", options: ["이게 좋은 것 같아요.", "제 생각에는, 이것이 가장 좋은 방법이라고 생각해요.", "좋아요.", "이게 좋기 때문에요."], answer: "제 생각에는, 이것이 가장 좋은 방법이라고 생각해요.", hint: "제 생각에는 (in my opinion) + ~(이)라고 생각해요 (I think that) = structured B1 opinion expression." },
            { id: "ko-b1-u8-q3", level: "B1", prompt: "How do you politely disagree while acknowledging the other person's view?", options: ["틀렸어요.", "맞아요. 그런데 저는 다르게 생각해요.", "아니에요, 당연히 아니죠.", "그건 사실이 아니에요."], answer: "맞아요. 그런데 저는 다르게 생각해요.", hint: "맞아요 (you're right) + 그런데 (but/however) + 다르게 생각해요 (I think differently) = polite disagreement." },
            { id: "ko-b1-u8-q4", level: "B1", prompt: "What does '어쩔 수 없다' mean?", options: ["it can be helped", "it can't be helped / there's nothing to be done", "it's possible", "it's not allowed"], answer: "it can't be helped / there's nothing to be done", hint: "어쩔 수 없다 is a fixed B1 expression — 'it can't be helped / what can you do'. Can't be assembled from parts." },
            { id: "ko-b1-u8-q5", level: "B1", prompt: "What does '결정을 내리다' mean?", options: ["to make an announcement", "to make a decision", "to lower a decision", "to follow a decision"], answer: "to make a decision", hint: "결정을 내리다 = to make a decision. 내리다 (not 하다) is the correct collocation verb here." },
            { id: "ko-b1-u8-q6", level: "B1", prompt: "Which phrase signals the conclusion of an argument in Korean?", options: ["그런데", "따라서 / 결론적으로", "하지만", "그리고"], answer: "따라서 / 결론적으로", hint: "따라서 = therefore / consequently. 결론적으로 = in conclusion. Both signal the final point of an argument." },
        ]
    },
    {
        id: "ko-b1-u9",
        level: "B1",
        order: 9,
        title: "Conjecture & Appearance — ~(으)ㄴ/는 것 같다",
        description: "Express your impressions, guesses, and suppositions about the present, past, and future using the ~것 같다 pattern. The essential Korean tool for polite, non-assertive communication.",
        grammarIds: ["ko-g-b1-9"],
        vocabIds: ["ko-v-b1-003", "ko-v-b1-095", "ko-v-b1-008", "ko-v-b1-096"],
        verbIds: [],
        testQuestions: [
            { id: "ko-b1-u9-q1", level: "B1", prompt: "Complete with ~는 것 같아요 (present action): '저 사람이 영어를 ___ 것 같아요.'", options: ["말하는", "말한", "말할", "말하"], answer: "말하는", hint: "Present action verb: ~는 것 같다. 말하다 → 말하는 것 같다." },
            { id: "ko-b1-u9-q2", level: "B1", prompt: "Complete with ~(으)ㄴ 것 같아요 (past): '그 영화를 전에 ___ 것 같아요.'", options: ["보는", "본", "볼", "봐서"], answer: "본", hint: "Past tense action verb: ~(으)ㄴ 것 같다. 보다 → 본 것 같다." },
            { id: "ko-b1-u9-q3", level: "B1", prompt: "Complete with ~ㄹ/을 것 같아요 (future/supposition): '내일 비가 ___ 것 같아요.'", options: ["오는", "온", "올", "와서"], answer: "올", hint: "Future/supposition: ~ㄹ/을 것 같다. 오다 → 올 것 같다." },
            { id: "ko-b1-u9-q4", level: "B1", prompt: "Adjective conjecture: '이 문제가 ___ 것 같아요.' (어렵다)", options: ["어려운", "어렵는", "어려울", "어렵을"], answer: "어려운", hint: "Present adjective: ~(으)ㄴ 것 같다. 어렵다 → 어려운 것 같다." },
            { id: "ko-b1-u9-q5", level: "B1", prompt: "Translate: 'It seems like they have left already.'", options: ["이미 떠난 것 같아요.", "이미 떠나는 것 같아요.", "이미 떠날 것 같아요.", "이미 떠나서 것 같아요."], answer: "이미 떠난 것 같아요.", hint: "Past action: ~(으)ㄴ 것 같다. 떠나다 → 떠난 것 같아요." },
            { id: "ko-b1-u9-q6", level: "B1", prompt: "What does '늦을 것 같아서 연락했어요' mean?", options: ["I contacted you because I thought I'd be late.", "I was late so I contacted you.", "I think I was late when I contacted you.", "I contacted you but I was late."], answer: "I contacted you because I thought I'd be late.", hint: "늦을 것 같아서 = because I thought I'd be late (future ~ㄹ/을 것 같다 + ~아/어서 reason)." },
        ]
    },
    {
        id: "ko-b1-u10",
        level: "B1",
        order: 10,
        title: "Change of State & Life Developments — ~아/어지다 / ~게 되다",
        description: "Describe things gradually changing quality or state with ~아/어지다, and explain life developments that happened due to circumstances with ~게 되다. Both patterns are essential for natural Korean narration.",
        grammarIds: ["ko-g-b1-10", "ko-g-b1-11"],
        vocabIds: ["ko-v-b1-097", "ko-v-b1-098", "ko-v-b1-009", "ko-v-b1-069"],
        verbIds: ["ko-vb-b1-3"],
        listeningIds: ["ko-l-b1-4"],
        testQuestions: [
            { id: "ko-b1-u10-q1", level: "B1", prompt: "~아/어지다 conjugation: '요즘 날씨가 ___ (따뜻하다 → 아/어지다)'", options: ["따뜻해졌어요", "따뜻하게 됐어요", "따뜻해요", "따뜻했어요"], answer: "따뜻해졌어요", hint: "따뜻하다 → 따뜻해지다 → 따뜻해졌어요 (has gotten warm)." },
            { id: "ko-b1-u10-q2", level: "B1", prompt: "Choose the correct form to say 'Korean food is getting more and more delicious': '한국 음식이 점점 ___ 것 같아요.'", options: ["맛있어지는", "맛있게 되는", "맛있어지", "맛있는"], answer: "맛있어지는", hint: "Gradual quality change → ~아/어지다. 맛있다 → 맛있어지다 → 맛있어지는 것 같아요." },
            { id: "ko-b1-u10-q3", level: "B1", prompt: "~기로 하다: '결혼식에 드레스를 ___ 했어요.'", options: ["입기로", "입게", "입을로", "입으로"], answer: "입기로", hint: "Decided to wear → ~기로 하다. 입다 → 입기로 했어요." },
            { id: "ko-b1-u10-q4", level: "B1", prompt: "Which sentence uses ~기로 하다 (deliberate decision) for 'I decided to start Korean classes'?", options: ["한국어 수업을 시작하기로 했어요.", "한국어 수업을 시작하게 됐어요.", "한국어 수업을 시작해졌어요.", "한국어 수업을 시작하기로 됐어요."], answer: "한국어 수업을 시작하기로 했어요.", hint: "~기로 하다 = deliberate personal decision. ~게 되다 = came to (due to circumstances)." },
            { id: "ko-b1-u10-q5", level: "B1", prompt: "Translate: '저는 우연히 그 회사에서 일하게 됐어요.'", options: ["I came to work at that company by chance.", "I decided to work at that company by chance.", "I worked at that company by chance.", "I want to work at that company."], answer: "I came to work at that company by chance.", hint: "~게 되다 = came to do (due to circumstances). 우연히 = by chance." },
            { id: "ko-b1-u10-q6", level: "B1", prompt: "What does ~게 되다 imply about the change?", options: ["It happened due to circumstances rather than a deliberate personal choice.", "It was a strong personal decision.", "It is a gradual quality change.", "It is a future plan."], answer: "It happened due to circumstances rather than a deliberate personal choice.", hint: "~게 되다 describes situation-based development, not an active personal decision. Contrast: ~기로 하다 (I decided)." },
        ]
    },
    {
        id: "ko-b1-u11",
        level: "B1",
        order: 11,
        title: "Embedded Questions — ~는지 / ~(으)ㄴ지",
        description: "Embed questions inside a sentence to express uncertainty, curiosity, or indirect questions. Essential for natural Korean communication when you know/don't know whether something is the case.",
        grammarIds: ["ko-g-b1-12"],
        vocabIds: ["ko-v-b1-099", "ko-v-b1-100", "ko-v-b1-033", "ko-v-b1-010"],
        verbIds: [],
        readingIds: ["ko-r-b1-4"],
        testQuestions: [
            { id: "ko-b1-u11-q1", level: "B1", prompt: "Complete: '어디에 ___ 알아요?' (있다)", options: ["있는지", "있는가", "있은지", "있을지"], answer: "있는지", hint: "Action verb present → ~는지. 있다 → 있는지 알아요? (Do you know where it is?)" },
            { id: "ko-b1-u11-q2", level: "B1", prompt: "Complete: '그 사람이 한국 사람___ 몰라요.'", options: ["인지", "는지", "은지", "이는지"], answer: "인지", hint: "Noun/copula → ~(이)ㄴ지. 한국 사람이다 → 한국 사람인지 몰라요." },
            { id: "ko-b1-u11-q3", level: "B1", prompt: "Complete: '왜 늦었___ 설명해 주세요.'", options: ["는지", "은지", "인지", "을지"], answer: "는지", hint: "Past tense action verb + ~는지 for embedded question. 늦었다 → 늦었는지 설명해 주세요." },
            { id: "ko-b1-u11-q4", level: "B1", prompt: "Which is the correct indirect question form for '얼마예요?'", options: ["얼마인지 알아요?", "얼마는지 알아요?", "얼마지 알아요?", "얼마이지 알아요?"], answer: "얼마인지 알아요?", hint: "Noun/copula → ~(이)ㄴ지. 얼마이다 → 얼마인지 알아요?" },
            { id: "ko-b1-u11-q5", level: "B1", prompt: "Translate: 'I wonder how long it takes.'", options: ["얼마나 걸리는지 궁금해요.", "얼마나 걸릴지 알아요.", "얼마나 걸리는지 몰라요.", "얼마나 걸린지 궁금해요."], answer: "얼마나 걸리는지 궁금해요.", hint: "궁금하다 + ~는지 = wonder whether/how. 걸리다 → 걸리는지 궁금해요." },
            { id: "ko-b1-u11-q6", level: "B1", prompt: "What does '뭘 먹을지 모르겠어요' mean?", options: ["I don't know what to eat.", "I know what I want to eat.", "I decided what to eat.", "I wonder if I should eat."], answer: "I don't know what to eat.", hint: "모르겠어요 + 뭘 먹을지 = I don't know what to eat. ~을지 here expresses undecided future/choice." },
        ]
    },
    {
        id: "ko-b1-u12",
        level: "B1",
        order: 12,
        title: "피동 — Passive Voice & B1 Consolidation",
        description: "Learn the most common Korean passive verbs — forms that must be memorised as vocabulary items — and consolidate B1 grammar in context.",
        grammarIds: ["ko-g-b1-13"],
        vocabIds: ["ko-v-b1-071", "ko-v-b1-074", "ko-v-b1-075", "ko-v-b1-076"],
        verbIds: ["ko-vb-b1-4", "ko-vb-b1-5"],
        readingIds: ["ko-r-b1-5"],
        testQuestions: [
            { id: "ko-b1-u12-q1", level: "B1", prompt: "What is the passive form of '닫다' (to close)?", options: ["닫히다", "닫리다", "닫기다", "닫이다"], answer: "닫히다", hint: "닫다 → 닫히다: ~히 passive suffix. 문이 닫혔어요 = The door was closed." },
            { id: "ko-b1-u12-q2", level: "B1", prompt: "What is the passive form of '팔다' (to sell)?", options: ["팔리다", "팔히다", "팔기다", "팔이다"], answer: "팔리다", hint: "팔다 → 팔리다: ~리 passive suffix. 그 책이 팔렸어요 = That book was sold." },
            { id: "ko-b1-u12-q3", level: "B1", prompt: "Transform to passive: '사람들이 그 책을 많이 읽었어요.'", options: ["그 책이 사람들에게 많이 읽혔어요.", "그 책이 사람들에게 많이 읽었어요.", "그 책이 많이 읽리었어요.", "그 책을 사람들이 읽혔어요."], answer: "그 책이 사람들에게 많이 읽혔어요.", hint: "읽다 → 읽히다 (~히 passive). 책이 (subject) + 사람들에게 (agent ~에게) + 읽혔어요." },
            { id: "ko-b1-u12-q4", level: "B1", prompt: "Complete: '문이 바람에 ___.' (열다 → passive)", options: ["열렸어요", "열히었어요", "열기었어요", "열이었어요"], answer: "열렸어요", hint: "열다 → 열리다 (~리 passive). 문이 바람에 열렸어요 = The door was opened by the wind." },
            { id: "ko-b1-u12-q5", level: "B1", prompt: "Which phrase means 'It was announced' in a formal context?", options: ["발표됐어요", "발표했어요", "발표시켰어요", "발표되어지었어요"], answer: "발표됐어요", hint: "Noun + 되다 = formal passive. 발표되다 → 발표됐어요 (it was announced)." },
            { id: "ko-b1-u12-q6", level: "B1", prompt: "What does '그 소식이 퍼졌어요' mean?", options: ["The news spread.", "The news was reported.", "The news was announced.", "The news was hidden."], answer: "The news spread.", hint: "퍼지다 = to spread (intransitive state change). 소식이 퍼졌어요 = The news spread." },
        ]
    },
]
