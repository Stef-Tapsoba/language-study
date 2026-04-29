// Korean B1 lesson units — redesign 2026-04-29
// 19 units across 5 blocks, 6 checkpoints
import { LessonUnit } from "../../../types"

export const b1Units: LessonUnit[] = [
    // ─── BLOCK 1: 깊이 있는 과거 표현 ──────────────────────────────────────
    {
        id: "ko-b1-u1",
        level: "B1",
        order: 1,
        title: "도착했을 때 이미 먹었었어요 — 았/었었다",
        description: "Add a third temporal layer to Korean narrative — express what had already happened before a past event, or a past state that is no longer true. The past-before-past that most Korean courses skip.",
        grammarIds: ["ko-g-b1-1"],
        vocabIds: ["ko-v-b1-001", "ko-v-b1-002", "ko-v-b1-003", "ko-v-b1-004", "ko-v-b1-005"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u1-q1", level: "B1",
                prompt: "Which sentence correctly uses 았/었었다 to express a past state that has since changed?",
                options: ["서울에 살아요.", "서울에 살았어요.", "서울에 살았었어요. 지금은 부산에 살아요.", "서울에 살 거예요."],
                answer: "서울에 살았었어요. 지금은 부산에 살아요.",
                hint: "았/었었다 signals a past state that is no longer true — 'I used to live in Seoul, but not anymore.'"
            },
            {
                id: "ko-b1-u1-q2", level: "B1",
                prompt: "Complete: '제가 도착했을 때 그들은 이미 ___ (먹다 → 았/었었다 form)'",
                options: ["먹어요", "먹었어요", "먹었었어요", "먹을 거예요"],
                answer: "먹었었어요",
                hint: "먹었어요 (simple past) + 었 → 먹었었어요 (had already eaten — prior to arrival)."
            },
            {
                id: "ko-b1-u1-q3", level: "B1",
                prompt: "What is the key difference between 살았어요 and 살았었어요?",
                options: [
                    "No difference — both mean I lived there",
                    "살았었어요 means the state has since changed — I no longer live there",
                    "살았었어요 is more formal",
                    "살았어요 is past; 살았었어요 is future"
                ],
                answer: "살았었어요 means the state has since changed — I no longer live there",
                hint: "The double past adds 'and now things are different.' 살았어요 = simple past fact. 살았었어요 = used to (but not anymore)."
            },
            {
                id: "ko-b1-u1-q4", level: "B1",
                prompt: "How do you form 았/었었다 from 하다?",
                options: ["하었었어요", "했었어요", "하겠었어요", "했었었어요"],
                answer: "했었어요",
                hint: "하다 → 했어요 (past) → 했었어요 (remote past). 하다 contracts to 했, then add 었어요."
            },
            {
                id: "ko-b1-u1-q5", level: "B1",
                prompt: "What does '우리 어렸을 때 친했었는데 지금은 연락이 없어요' mean?",
                options: [
                    "We are still close like when we were young",
                    "We used to be close when young, but now we've lost touch",
                    "We want to be close again",
                    "We never got along when we were young"
                ],
                answer: "We used to be close when young, but now we've lost touch",
                hint: "친했었는데 = used to be close (but are no longer). 연락이 없다 = no contact."
            },
        ],
    },

    {
        id: "ko-b1-u2",
        level: "B1",
        order: 2,
        title: "도착했을 때 비가 오고 있었어요 — 복합 과거 내러티브",
        description: "Tell complex layered stories using all three past forms together: 고 있었다 (background scene), 았/었다 (events), 았/었었다 (prior context). The B1 narration toolkit.",
        grammarIds: ["ko-g-b1-2"],
        vocabIds: ["ko-v-b1-006", "ko-v-b1-007", "ko-v-b1-008", "ko-v-b1-009", "ko-v-b1-010"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u2-q1", level: "B1",
                prompt: "Which form sets the background scene in Korean narrative?",
                options: ["았/었었어요", "았/었어요", "고 있었어요", "겠어요"],
                answer: "고 있었어요",
                hint: "-고 있었어요 = past progressive — what was happening when another event occurred."
            },
            {
                id: "ko-b1-u2-q2", level: "B1",
                prompt: "Complete the narrative connector: '공부___ 있었는데 갑자기 전화가 왔어요.'",
                options: ["해서", "하고", "하면서", "하기"],
                answer: "하고",
                hint: "하고 있었는데 = was doing...when. -고 있었는데 is the key pattern for 'I was doing X when Y happened.'"
            },
            {
                id: "ko-b1-u2-q3", level: "B1",
                prompt: "What does '알고 보니' mean as a narrative connector?",
                options: ["suddenly", "in the end", "it turned out that", "at that time"],
                answer: "it turned out that",
                hint: "알고 보니 = it turned out that / after finding out. A key revelation connector in Korean stories."
            },
            {
                id: "ko-b1-u2-q4", level: "B1",
                prompt: "Which tense form advances the plot in Korean narration?",
                options: ["고 있었어요", "았/었었어요", "았/었어요", "겠어요"],
                answer: "았/었어요",
                hint: "았/었어요 = simple past — the completed events that move the story forward. The 'plot' tense."
            },
            {
                id: "ko-b1-u2-q5", level: "B1",
                prompt: "Identify the function of each past form in: '준비하고 있었는데 알람을 잘못 맞춰놨었어요. 결국 늦었어요.'",
                options: [
                    "고 있었는데 = plot, 았었어요 = background, 었어요 = prior",
                    "고 있었는데 = background, 았었어요 = prior, 었어요 = plot event",
                    "All three mean the same thing",
                    "었어요 = future, 았었어요 = present"
                ],
                answer: "고 있었는데 = background, 았었어요 = prior, 었어요 = plot event",
                hint: "준비하고 있었는데 = scene (was preparing). 맞춰놨었어요 = prior error. 늦었어요 = the resulting event."
            },
        ],
    },

    {
        id: "ko-b1-u3",
        level: "B1",
        order: 3,
        title: "이 책은 1950년에 쓰였어요 — 수동태",
        description: "Understand and produce Korean passive constructions. Three systems, clear priorities: -되다 is the primary B1 goal; suffix passives are recognition; -아/어지다 is A2 review.",
        grammarIds: ["ko-g-b1-3"],
        vocabIds: ["ko-v-b1-011", "ko-v-b1-012", "ko-v-b1-013", "ko-v-b1-014", "ko-v-b1-015"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u3-q1", level: "B1",
                prompt: "What is the passive form of 취소하다 using -되다?",
                options: ["취소하이다", "취소됩니다", "취소되이다", "취소히다"],
                answer: "취소됩니다",
                hint: "취소하다 → 취소되다 (-되다 passive). 취소됐어요 / 취소됩니다. Regular and productive."
            },
            {
                id: "ko-b1-u3-q2", level: "B1",
                prompt: "Which sentence uses -되다 passive correctly?",
                options: [
                    "회의가 취소했어요.",
                    "회의가 취소됐어요.",
                    "회의를 취소되었어요.",
                    "회의에서 취소됩니다."
                ],
                answer: "회의가 취소됐어요.",
                hint: "회의가 (subject) + 취소됐어요 (-되다 passive). The meeting was cancelled."
            },
            {
                id: "ko-b1-u3-q3", level: "B1",
                prompt: "What is the suffix passive of 닫다 (to close)?",
                options: ["닫리다", "닫기다", "닫히다", "닫이다"],
                answer: "닫히다",
                hint: "닫다 → 닫히다 (-히 suffix passive). 문이 닫혔어요 = The door was closed."
            },
            {
                id: "ko-b1-u3-q4", level: "B1",
                prompt: "Which passive system is the PRIMARY production goal at B1?",
                options: ["-이/히/리/기 suffix passives", "-되다 passive", "-아/어지다", "All three equally"],
                answer: "-되다 passive",
                hint: "-되다 is regular, productive, and appears constantly in formal Korean. Suffix passives (-이/히/리/기) are recognition only at B1."
            },
            {
                id: "ko-b1-u3-q5", level: "B1",
                prompt: "What does 길이 막혔어요 mean? (막다 → 막히다)",
                options: [
                    "The road was opened",
                    "The road was blocked / traffic is backed up",
                    "I blocked the road",
                    "The road closed itself"
                ],
                answer: "The road was blocked / traffic is backed up",
                hint: "막다 (to block) → 막히다 (-히 suffix passive). 길이 막혔어요 = the road is backed up / jammed."
            },
        ],
    },

    {
        id: "ko-b1-u4",
        level: "B1",
        order: 4,
        title: "비가 올 것 같아요 — 추측과 불확실성",
        description: "Express inference and uncertainty about present, past, and future situations. Master the full ~것 같다 system plus -나 보다 and -는 모양이다 for nuanced, natural Korean.",
        grammarIds: ["ko-g-b1-4"],
        vocabIds: ["ko-v-b1-016", "ko-v-b1-017", "ko-v-b1-018", "ko-v-b1-019", "ko-v-b1-020"],
        verbIds: [],
        checkpointId: "ko-cp-b1-1",
        testQuestions: [
            {
                id: "ko-b1-u4-q1", level: "B1",
                prompt: "Complete with the correct inference form (past): '그들이 이미 ___ 것 같아요.' (가다)",
                options: ["가는", "갈", "간", "가고 있는"],
                answer: "간",
                hint: "Past action verb inference: -(으)ㄴ 것 같다. 가다 → 간 것 같아요 (it seems they went)."
            },
            {
                id: "ko-b1-u4-q2", level: "B1",
                prompt: "Which inference expression implies the speaker is basing it on visible evidence?",
                options: ["-(으)ㄹ 것 같다", "-나 보다", "분명히", "아마"],
                answer: "-나 보다",
                hint: "-나 보다 = I gather / looks like — based on something you observe. More confident than ~것 같다."
            },
            {
                id: "ko-b1-u4-q3", level: "B1",
                prompt: "Which is more formal: -(으)ㄹ/는 것 같다 or -(으)ㄹ/는 모양이다?",
                options: ["-(으)ㄹ/는 것 같다", "-(으)ㄹ/는 모양이다", "They are identical in register", "Depends on the verb"],
                answer: "-(으)ㄹ/는 모양이다",
                hint: "-는 모양이다 is slightly more formal than -나 보다 or -것 같다. Used in slightly elevated or written contexts."
            },
            {
                id: "ko-b1-u4-q4", level: "B1",
                prompt: "What does 힘든가 봐요 mean?",
                options: [
                    "It seems difficult (I think it will be difficult)",
                    "Looks like it's difficult (based on what I observe)",
                    "It's certain it's difficult",
                    "It was difficult"
                ],
                answer: "Looks like it's difficult (based on what I observe)",
                hint: "-나 보다 expresses inference from visible evidence. 힘든가 봐요 = I can see / gather that it's difficult."
            },
            {
                id: "ko-b1-u4-q5", level: "B1",
                prompt: "Complete (adjective, present inference): '이 시험이 ___ 것 같아요.' (어렵다)",
                options: ["어렵는", "어려울", "어려운", "어렵은"],
                answer: "어려운",
                hint: "Present adjective: -(으)ㄴ 것 같다. 어렵다 (irregular) → 어려운 것 같아요."
            },
        ],
    },

    // ─── BLOCK 2: 목적·이유·조건 표현 확장 ────────────────────────────────────
    {
        id: "ko-b1-u5",
        level: "B1",
        order: 5,
        title: "이해하도록 설명해 드릴게요 — -도록 / -(으)려고 하다",
        description: "Express purpose and intention with precision. Deepen -(으)려고 하다 to include 'was going to but...' and master -도록 — a highly versatile connector for purpose, extent, and formal instruction.",
        grammarIds: ["ko-g-b1-5"],
        vocabIds: ["ko-v-b1-021", "ko-v-b1-022", "ko-v-b1-023", "ko-v-b1-024", "ko-v-b1-025"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u5-q1", level: "B1",
                prompt: "Complete: '가___ 했는데 못 갔어요.' (I was going to go, but couldn't.)",
                options: ["가서", "가도록", "가려고", "가기 위해서"],
                answer: "가려고",
                hint: "가려고 했는데 = was going to go (but then...). -(으)려고 하다 in past tense expresses unfulfilled intention."
            },
            {
                id: "ko-b1-u5-q2", level: "B1",
                prompt: "Which purpose expression is more formal and commonly used in written Korean?",
                options: ["-(으)려고", "-도록", "-기 위해서", "-(으)면서"],
                answer: "-기 위해서",
                hint: "-기 위해서 = in order to (more formal). -(으)려고 is more personal/spoken. -기 위해서 is typical in essays, presentations."
            },
            {
                id: "ko-b1-u5-q3", level: "B1",
                prompt: "Complete: '학생들이 이해할 수 있___ 천천히 설명해 주세요.'",
                options: ["기 위해서", "도록", "려고", "면서"],
                answer: "도록",
                hint: "이해할 수 있도록 = so that (students) can understand. -도록 connects two different subjects — different from -(으)려고."
            },
            {
                id: "ko-b1-u5-q4", level: "B1",
                prompt: "What does '지각하지 않도록 주의하세요' mean?",
                options: [
                    "Please notice that you're not late",
                    "Please be careful not to be late",
                    "Being careful so as not to be late",
                    "You were careful not to be late"
                ],
                answer: "Please be careful not to be late",
                hint: "-도록 as formal instruction: '~하도록 하세요/주의하세요' = please make sure to / be careful to."
            },
            {
                id: "ko-b1-u5-q5", level: "B1",
                prompt: "What nuance does -도록 add when expressing extent? '목이 아프도록 노래했어요'",
                options: ["I sang in order to hurt my throat", "I sang until my throat hurt", "I sang so that my throat wouldn't hurt", "I stopped singing because my throat hurt"],
                answer: "I sang until my throat hurt",
                hint: "-도록 as extent: 'to the point of / until'. 목이 아프도록 = until/to the point where my throat hurt."
            },
        ],
    },

    {
        id: "ko-b1-u6",
        level: "B1",
        order: 6,
        title: "덕분에 / 때문에 / 탓에 — 이유와 원인 확장",
        description: "Resolve the -아서 vs -(으)니까 distinction definitively (the most persistent Korean error) and add the positive/neutral/negative cause triad: 덕분에, 때문에, 탓에.",
        grammarIds: ["ko-g-b1-6"],
        vocabIds: ["ko-v-b1-026", "ko-v-b1-027", "ko-v-b1-028", "ko-v-b1-029", "ko-v-b1-030"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u6-q1", level: "B1",
                prompt: "Which is grammatical? 'The weather is nice so let's take a walk.'",
                options: ["날씨가 좋아서 산책하자.", "날씨가 좋으니까 산책하자.", "날씨가 좋기 때문에 산책하자.", "날씨가 좋아도 산책하자."],
                answer: "날씨가 좋으니까 산책하자.",
                hint: "Imperative test: -아서 CANNOT precede commands/suggestions. -(으)니까 is required before 산책하자 (let's walk)."
            },
            {
                id: "ko-b1-u6-q2", level: "B1",
                prompt: "Select 덕분에, 때문에, or 탓에: '좋은 선생님 ___ 한국어를 잘 하게 됐어요.'",
                options: ["때문에", "탓에", "덕분에", "탓으로"],
                answer: "덕분에",
                hint: "덕분에 = thanks to (POSITIVE outcome). The result is good (improved Korean), so 덕분에 is correct."
            },
            {
                id: "ko-b1-u6-q3", level: "B1",
                prompt: "Select the correct expression: 'The event was cancelled due to the bad weather.' (negative outcome)",
                options: ["날씨 덕분에 행사가 취소됐어요.", "날씨 때문에 행사가 취소됐어요.", "날씨 탓에 행사가 취소됐어요.", "날씨로 인해 행사가 덕분에 됐어요."],
                answer: "날씨 탓에 행사가 취소됐어요.",
                hint: "탓에 = due to (NEGATIVE outcome, blame). The result is bad (cancellation), so 탓에 or 때문에 both work, but 탓에 emphasises the negative cause."
            },
            {
                id: "ko-b1-u6-q4", level: "B1",
                prompt: "What is the most formal written/news expression for 'due to'?",
                options: ["때문에", "아서", "탓에", "로 인해서"],
                answer: "로 인해서",
                hint: "-(으)로 인해서 = due to (formal/written). Used in news reports, official documents, formal writing."
            },
            {
                id: "ko-b1-u6-q5", level: "B1",
                prompt: "Which sentence is grammatical? (맛있다 + suggestion)",
                options: ["맛있어서 많이 드세요.", "맛있으니까 많이 드세요.", "맛있기 때문에 많이 드세요.", "맛있도록 많이 드세요."],
                answer: "맛있으니까 많이 드세요.",
                hint: "드세요 is an imperative/request. -아서 cannot precede imperatives/requests. -(으)니까 is required. 맛있으니까 = since it's delicious (subjective reason for request)."
            },
        ],
    },

    {
        id: "ko-b1-u7",
        level: "B1",
        order: 7,
        title: "바쁘더라도 시간을 만들어야 해요 — -더라도 / -아/어도 / -는 한",
        description: "Express concession, strong conditions, and inevitability. Learn the nuance difference between -아/어도 and -더라도, and the essential -(으)ㄹ 수밖에 없다 for expressing 'have no choice'.",
        grammarIds: ["ko-g-b1-7"],
        vocabIds: ["ko-v-b1-031", "ko-v-b1-032", "ko-v-b1-033", "ko-v-b1-034", "ko-v-b1-035"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u7-q1", level: "B1",
                prompt: "Which expresses a stronger / more hypothetical concession?",
                options: ["-아/어도", "-더라도", "-는 한", "수밖에 없다"],
                answer: "-더라도",
                hint: "-더라도 is stronger than -아/어도 — often counterfactual and expresses firm commitment regardless of the condition."
            },
            {
                id: "ko-b1-u7-q2", level: "B1",
                prompt: "Complete: '아무리 피곤___ 포기하면 안 돼요.' (no matter how tired)",
                options: ["해서", "하더라도", "했지만", "하기 때문에"],
                answer: "하더라도",
                hint: "아무리 + -아/어도/더라도 = no matter how. 피곤하더라도 = no matter how tired (strong concessive)."
            },
            {
                id: "ko-b1-u7-q3", level: "B1",
                prompt: "What does '내가 아는 한 그 사람은 한국에 없어요' mean?",
                options: [
                    "As long as I know them, they are in Korea",
                    "As far as I know, that person is not in Korea",
                    "I know that person is not in Korea for sure",
                    "That person was in Korea once, I know"
                ],
                answer: "As far as I know, that person is not in Korea",
                hint: "-는 한 = as long as / as far as. 내가 아는 한 = as far as I know. Common fixed expression."
            },
            {
                id: "ko-b1-u7-q4", level: "B1",
                prompt: "What tone does -(으)ㄹ 수밖에 없다 express?",
                options: ["Enthusiasm and willingness", "Prohibition", "Resigned inevitability — there is no other choice", "Permission"],
                answer: "Resigned inevitability — there is no other choice",
                hint: "수밖에 없다 = have no choice but to. Tone of resignation: 'what can you do / there's nothing else to do.'"
            },
            {
                id: "ko-b1-u7-q5", level: "B1",
                prompt: "Complete: '규칙을 지키___ 문제없어요.' (As long as you follow the rules, there's no problem.)",
                options: ["는 한", "더라도", "아도", "면서도"],
                answer: "는 한",
                hint: "-는 한 = as long as (condition). 규칙을 지키는 한 = as long as you follow the rules."
            },
        ],
    },

    {
        id: "ko-b1-u8",
        level: "B1",
        order: 8,
        title: "열심히 할수록 좋아져요 — -(으)ㄹ수록",
        description: "Express proportional relationships — the more X, the more Y. One of Korean's most elegant and frequently used structures, from everyday speech to proverbs.",
        grammarIds: ["ko-g-b1-8"],
        vocabIds: ["ko-v-b1-036", "ko-v-b1-037", "ko-v-b1-038", "ko-v-b1-039", "ko-v-b1-040"],
        verbIds: [],
        checkpointId: "ko-cp-b1-2",
        testQuestions: [
            {
                id: "ko-b1-u8-q1", level: "B1",
                prompt: "Form -(으)ㄹ수록 from 어렵다:",
                options: ["어렵을수록", "어려울수록", "어렵수록", "어렵는수록"],
                answer: "어려울수록",
                hint: "어렵다 (irregular) → 어려우- + ㄹ수록 = 어려울수록. The more difficult."
            },
            {
                id: "ko-b1-u8-q2", level: "B1",
                prompt: "Complete: '공부___ 실력이 늘어요.' (The more you study, the better you get.)",
                options: ["하면서", "할수록", "해서", "하더라도"],
                answer: "할수록",
                hint: "하다 → 할수록. 공부할수록 실력이 늘어요 = The more you study, the more your skills improve."
            },
            {
                id: "ko-b1-u8-q3", level: "B1",
                prompt: "What does 갈수록 mean?",
                options: ["The more you go, the more", "As time goes on / increasingly", "Even if you go there", "So that you can go"],
                answer: "As time goes on / increasingly",
                hint: "갈수록 is a fixed expression meaning 'as time goes on' or 'more and more over time.' 갈수록 좋아지고 있어요."
            },
            {
                id: "ko-b1-u8-q4", level: "B1",
                prompt: "What does the emphatic pattern -(으)면 -(으)ㄹ수록 add?",
                options: ["It makes the correlation conditional (if...)", "It intensifies the proportional relationship", "It adds a negative meaning", "It expresses past proportionality"],
                answer: "It intensifies the proportional relationship",
                hint: "생각하면 생각할수록 = the more I think about it (emphasised). Adding -(으)면 makes the correlation more emphatic."
            },
            {
                id: "ko-b1-u8-q5", level: "B1",
                prompt: "What does '빠를수록 좋아요' mean?",
                options: [
                    "It's fast but not good",
                    "The faster, the better / The sooner the better",
                    "It's faster and better",
                    "Even if it's fast, it's good"
                ],
                answer: "The faster, the better / The sooner the better",
                hint: "빠를수록 좋아요 = the sooner/faster, the better. A very common fixed expression in Korean."
            },
        ],
    },

    // ─── BLOCK 3: 복잡한 문장 연결 ─────────────────────────────────────────
    {
        id: "ko-b1-u9",
        level: "B1",
        order: 9,
        title: "온다고 했어요 — 간접화법 (선언)",
        description: "Report what someone said with tense-appropriate indirect speech for statements. The social gossip grammar of Korean — essential for relaying messages, summarising news, and reporting conversations.",
        grammarIds: ["ko-g-b1-9"],
        vocabIds: ["ko-v-b1-041", "ko-v-b1-042", "ko-v-b1-043", "ko-v-b1-044", "ko-v-b1-045"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u9-q1", level: "B1",
                prompt: "Transform to indirect speech: '바빠요.' → 바쁘___ 해요.",
                options: ["다고", "라고", "냐고", "자고"],
                answer: "다고",
                hint: "Present adjective/state → -다고 하다. 바쁘다 → 바쁘다고 해요 (says/said they're busy)."
            },
            {
                id: "ko-b1-u9-q2", level: "B1",
                prompt: "Transform: '밥을 먹어요.' → 밥을 먹___ 해요. (action verb, present)",
                options: ["다고", "는다고", "라고", "냐고"],
                answer: "는다고",
                hint: "Present action verb → -는다고 하다. 먹다 → 먹는다고 해요 (says they eat / are eating)."
            },
            {
                id: "ko-b1-u9-q3", level: "B1",
                prompt: "Transform past statement: '갔어요.' → 갔___ 했어요.",
                options: ["다고", "라고", "는다고", "냐고"],
                answer: "다고",
                hint: "Past form → -았/었다고 하다. 갔어요 → 갔다고 했어요 (said they went)."
            },
            {
                id: "ko-b1-u9-q4", level: "B1",
                prompt: "What does '내일 온다고 들었어요' mean?",
                options: [
                    "I heard they told me to come tomorrow",
                    "I heard they're coming tomorrow",
                    "I asked if they're coming tomorrow",
                    "They said I should come tomorrow"
                ],
                answer: "I heard they're coming tomorrow",
                hint: "-다고 들었어요 = I heard that. 온다고 들었어요 = I heard they're coming (온다 = 오다 action verb present)."
            },
            {
                id: "ko-b1-u9-q5", level: "B1",
                prompt: "Transform future: '갈 거예요.' → 갈 ___ 했어요.",
                options: ["다고", "거라고", "라고", "거냐고"],
                answer: "거라고",
                hint: "Future -(으)ㄹ 거예요 → -(으)ㄹ 거라고 하다. 갈 거예요 → 갈 거라고 했어요 (said they were going to go)."
            },
        ],
    },

    {
        id: "ko-b1-u10",
        level: "B1",
        order: 10,
        title: "가라고 했어요 / 어디 가냐고 물었어요 — 간접화법 (명령·제안·의문)",
        description: "Complete the indirect speech system by reporting commands, suggestions, and questions. Now you can relay any type of speech — what your boss told you, what your friend suggested, what someone asked.",
        grammarIds: ["ko-g-b1-10"],
        vocabIds: ["ko-v-b1-046", "ko-v-b1-047", "ko-v-b1-048", "ko-v-b1-049", "ko-v-b1-050"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u10-q1", level: "B1",
                prompt: "Transform: '앉으세요.' → 앉___ 했어요. (reported command)",
                options: ["다고", "으라고", "자고", "냐고"],
                answer: "으라고",
                hint: "Commands → -(으)라고 하다. 앉으세요 → 앉으라고 했어요 (told me to sit down)."
            },
            {
                id: "ko-b1-u10-q2", level: "B1",
                prompt: "Transform suggestion: '같이 가자.' → 같이 ___ 했어요.",
                options: ["가라고", "가냐고", "가자고", "간다고"],
                answer: "가자고",
                hint: "Suggestions (let's ~) → -자고 하다. 가자 → 가자고 했어요 (suggested going together)."
            },
            {
                id: "ko-b1-u10-q3", level: "B1",
                prompt: "Transform question: '어디 가요?' → 어디 ___ 물었어요.",
                options: ["간다고", "가자고", "가냐고", "가라고"],
                answer: "가냐고",
                hint: "Questions → -(으)냐고 묻다. 가요? → 가냐고 물었어요 (asked where I was going)."
            },
            {
                id: "ko-b1-u10-q4", level: "B1",
                prompt: "Transform negative command: '늦지 마세요.' → 늦지 ___ 했어요.",
                options: ["마냐고", "말라고", "마라고", "말자고"],
                answer: "말라고",
                hint: "Negative commands → -지 말라고 하다. 늦지 마세요 → 늦지 말라고 했어요 (told me not to be late)."
            },
            {
                id: "ko-b1-u10-q5", level: "B1",
                prompt: "What is the complete indirect speech system? Match: command / suggestion / question",
                options: [
                    "command = -자고, suggestion = -(으)라고, question = -냐고",
                    "command = -(으)라고, suggestion = -자고, question = -냐고",
                    "command = -다고, suggestion = -자고, question = -(으)라고",
                    "command = -냐고, suggestion = -다고, question = -(으)라고"
                ],
                answer: "command = -(으)라고, suggestion = -자고, question = -냐고",
                hint: "Statement = -다고 / Command = -(으)라고 / Suggestion = -자고 / Question = -냐고. The full four-way system."
            },
        ],
    },

    {
        id: "ko-b1-u11",
        level: "B1",
        order: 11,
        title: "먹을 것 / 갈 사람 — 명사 수식어 B1 심화",
        description: "Expand noun modification to complex B1 contexts: -(으)ㄹ + 것/때/곳/사람, -(으)ㄴ/는 반면에, and -(으)ㄴ/는 편이다. The tools for planning, contrasting, and softening in Korean.",
        grammarIds: ["ko-g-b1-11"],
        vocabIds: ["ko-v-b1-051", "ko-v-b1-052", "ko-v-b1-053", "ko-v-b1-054", "ko-v-b1-055"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u11-q1", level: "B1",
                prompt: "Complete: '___ 것 좀 사야 해요.' (I need to buy something to eat.)",
                options: ["먹는", "먹은", "먹을", "먹어서"],
                answer: "먹을",
                hint: "-(으)ㄹ 것 = something to do / what will be done. 먹을 것 = something to eat."
            },
            {
                id: "ko-b1-u11-q2", level: "B1",
                prompt: "Complete: '도와___ 사람이 필요해요.' (I need someone to help.)",
                options: ["주는", "준", "줄", "주고 있는"],
                answer: "줄",
                hint: "-(으)ㄹ 사람 = person who will / person to. 도와줄 사람 = someone to help (future/uncertain)."
            },
            {
                id: "ko-b1-u11-q3", level: "B1",
                prompt: "Choose the correct translation: '가격이 비싼 반면에 품질이 좋아요.'",
                options: [
                    "The price is expensive because the quality is good",
                    "The price is high, whereas the quality is good",
                    "The price is expensive and so is the quality",
                    "Even though the price is high, the quality is bad"
                ],
                answer: "The price is high, whereas the quality is good",
                hint: "-(으)ㄴ/는 반면에 = on the other hand / whereas — introduces a contrasting quality."
            },
            {
                id: "ko-b1-u11-q4", level: "B1",
                prompt: "What does -(으)ㄴ/는 편이다 express?",
                options: ["An absolute fact", "A tendency or leaning — 'rather / tends to'", "An exception", "A strong obligation"],
                answer: "A tendency or leaning — 'rather / tends to'",
                hint: "편이다 softens statements — 내향적인 편이에요 = I tend to be introverted (not 'I absolutely am'). A key Korean softener."
            },
            {
                id: "ko-b1-u11-q5", level: "B1",
                prompt: "Complete: '공부___ 곳을 찾고 있어요.' (I'm looking for a place to study.)",
                options: ["한", "하는", "할", "했던"],
                answer: "할",
                hint: "-(으)ㄹ 곳 = place to / where (future). 공부할 곳 = a place to study."
            },
        ],
    },

    {
        id: "ko-b1-u12",
        level: "B1",
        order: 12,
        title: "말하자면 / 결국 / 그런데도 — B1 담화 연결어",
        description: "Upgrade your connectors from A2 (그래서/하지만) to B1 precision: 따라서, 오히려, 게다가, 그럼에도 불구하고, 결론적으로. The tools for organised, register-appropriate argument.",
        grammarIds: ["ko-g-b1-12"],
        vocabIds: ["ko-v-b1-056", "ko-v-b1-057", "ko-v-b1-058", "ko-v-b1-059", "ko-v-b1-060"],
        verbIds: [],
        checkpointId: "ko-cp-b1-3",
        testQuestions: [
            {
                id: "ko-b1-u12-q1", level: "B1",
                prompt: "Which consequence connector is most appropriate in formal/written Korean?",
                options: ["그래서", "따라서", "그러다 보니", "결국"],
                answer: "따라서",
                hint: "따라서 = therefore (formal/written). 그래서 is casual. 그러다 보니 is spoken. 결국 is neutral."
            },
            {
                id: "ko-b1-u12-q2", level: "B1",
                prompt: "Select the correct connector: '도움이 되려고 했는데 ___ 방해가 됐어요.'",
                options: ["따라서", "그럼에도", "오히려", "게다가"],
                answer: "오히려",
                hint: "오히려 = on the contrary / rather. I tried to help, but it RATHER became a hindrance."
            },
            {
                id: "ko-b1-u12-q3", level: "B1",
                prompt: "What does 게다가 add to a sentence?",
                options: ["Contrast", "An additional point on top of what was just said (furthermore)", "Conclusion", "Concession"],
                answer: "An additional point on top of what was just said (furthermore)",
                hint: "게다가 = furthermore / on top of that. Adds an additional — often negative — point to what was just stated."
            },
            {
                id: "ko-b1-u12-q4", level: "B1",
                prompt: "Which phrase means 'despite this / nevertheless' (formal)?",
                options: ["하지만", "오히려", "그럼에도 불구하고", "그런데"],
                answer: "그럼에도 불구하고",
                hint: "그럼에도 불구하고 = despite this / nevertheless. Formal connector for concession. 힘들었어요. 그럼에도 불구하고 포기하지 않았어요."
            },
            {
                id: "ko-b1-u12-q5", level: "B1",
                prompt: "What does 말하자면 signal?",
                options: ["A conclusion", "So to speak / in other words — introducing a reformulation or clarification", "A contrast", "A cause"],
                answer: "So to speak / in other words — introducing a reformulation or clarification",
                hint: "말하자면 = so to speak / in other words. Used to reformulate, clarify, or make an abstract point concrete."
            },
        ],
    },

    // ─── BLOCK 4: 격식과 자연스러운 발화 ────────────────────────────────────
    {
        id: "ko-b1-u13",
        level: "B1",
        order: 13,
        title: "합쇼체 완성 — 공식 한국어",
        description: "Command the full formal 합쇼체 register: all tenses, question forms, command forms, and key honorific vocabulary. Essential for job interviews, presentations, and formal Korean life.",
        grammarIds: ["ko-g-b1-13"],
        vocabIds: ["ko-v-b1-061", "ko-v-b1-062", "ko-v-b1-063", "ko-v-b1-064", "ko-v-b1-065"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u13-q1", level: "B1",
                prompt: "Convert to 합쇼체 past: 먹었어요 →",
                options: ["먹었습니까", "먹었습니다", "먹으십시오", "드셨어요"],
                answer: "먹었습니다",
                hint: "합쇼체 past: -았/었습니다. 먹었어요 → 먹었습니다."
            },
            {
                id: "ko-b1-u13-q2", level: "B1",
                prompt: "What is the 합쇼체 question form for 합니다?",
                options: ["합니다?", "합니까?", "하십시오?", "하세요?"],
                answer: "합니까?",
                hint: "합쇼체 questions: -습니까?/-ㅂ니까? 합니다 → 합니까? (do you / are you...?)"
            },
            {
                id: "ko-b1-u13-q3", level: "B1",
                prompt: "Select the humble form of 말하다 (to say) in 합쇼체:",
                options: ["말해 드리다", "말씀드리다", "말씀하시다", "말하십시오"],
                answer: "말씀드리다",
                hint: "말하다 → 말씀드리다 (humble: I say to you). 말씀하시다 is honorific (you speak). 말씀드리다 = humble/first person."
            },
            {
                id: "ko-b1-u13-q4", level: "B1",
                prompt: "Complete the formal presentation opening: '안녕하십니까. 오늘은 환경 문제에 대해 ___습니다.'",
                options: ["발표하겠", "발표해", "발표했", "발표하는"],
                answer: "발표하겠",
                hint: "발표하겠습니다 = I will present (formal 합쇼체 future with 겠). Standard presentation opening formula."
            },
            {
                id: "ko-b1-u13-q5", level: "B1",
                prompt: "What is the honorific equivalent of 있다 (to be / exist)?",
                options: ["드시다", "주무시다", "계시다", "말씀드리다"],
                answer: "계시다",
                hint: "있다 → 계시다 (honorific — for subjects deserving respect). 선생님이 계십니까? (Is the teacher here?)"
            },
        ],
    },

    {
        id: "ko-b1-u14",
        level: "B1",
        order: 14,
        title: "건강할 뿐만 아니라 맛있어요 — -뿐만 아니라 / -밖에 / -조차",
        description: "Express 'not only...but also', 'merely', and emphatic restriction with precision. Essential for interview responses, arguments, and expressive Korean.",
        grammarIds: ["ko-g-b1-14"],
        vocabIds: ["ko-v-b1-066", "ko-v-b1-067", "ko-v-b1-068", "ko-v-b1-069", "ko-v-b1-070"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u14-q1", level: "B1",
                prompt: "Complete: '이 음식은 맛있을 뿐만 아니라 건강에도 ___.' (not only delicious but also good for health)",
                options: ["좋아요", "좋기 때문에요", "좋잖아요", "좋지만요"],
                answer: "좋아요",
                hint: "-뿐만 아니라 A도 B: A뿐만 아니라 B도. 맛있을 뿐만 아니라 건강에도 좋아요."
            },
            {
                id: "ko-b1-u14-q2", level: "B1",
                prompt: "What is the nuance difference between 물만 있어요 and 물밖에 없어요?",
                options: [
                    "물만 = lots of water; 물밖에 = a little water",
                    "물만 = only water (neutral); 물밖에 = nothing but water (implies insufficient)",
                    "They mean exactly the same thing",
                    "물만 = past; 물밖에 = present"
                ],
                answer: "물만 = only water (neutral); 물밖에 = nothing but water (implies insufficient)",
                hint: "-밖에 + negative emphasises that the amount/thing is not enough. 물밖에 없어요 = There's nothing but water (and that's a problem)."
            },
            {
                id: "ko-b1-u14-q3", level: "B1",
                prompt: "Complete: '최선을 다했___ 뿐이에요.' (I only did my best.)",
                options: ["을", "는", "ㄹ", "은"],
                answer: "을",
                hint: "최선을 다했을 뿐이에요 = I only did my best (past form + -(으)ㄹ 뿐이다). Common deflecting/humble expression."
            },
            {
                id: "ko-b1-u14-q4", level: "B1",
                prompt: "What does -조차 express compared to -도?",
                options: [
                    "-조차 is softer than -도",
                    "-조차 is more emphatic/dramatic — 'even this basic thing is lacking'",
                    "-조차 and -도 are identical",
                    "-조차 is only used in formal writing"
                ],
                answer: "-조차 is more emphatic/dramatic — 'even this basic thing is lacking'",
                hint: "-조차 = even (emphatic negative). 이름조차 기억 못 해요 is more dramatic than 이름도 기억 못 해요."
            },
            {
                id: "ko-b1-u14-q5", level: "B1",
                prompt: "Translate: '저는 한국어뿐만 아니라 문화도 좋아해요.'",
                options: [
                    "I like Korean but not the culture",
                    "I like not only Korean but also the culture",
                    "I like Korean only when it relates to culture",
                    "I like Korean culture even more than the language"
                ],
                answer: "I like not only Korean but also the culture",
                hint: "A뿐만 아니라 B도 = not only A but also B. 한국어뿐만 아니라 문화도."
            },
        ],
    },

    {
        id: "ko-b1-u15",
        level: "B1",
        order: 15,
        title: "정부에 의해 발표됐습니다 — -되다 심화 + 공식 의견 표현",
        description: "Complete the passive system with -에 의해(서) to specify the agent, and add B1 formal opinion expressions for presentations, news, and professional communication.",
        grammarIds: ["ko-g-b1-15"],
        vocabIds: ["ko-v-b1-071", "ko-v-b1-072", "ko-v-b1-073", "ko-v-b1-074", "ko-v-b1-075"],
        verbIds: [],
        checkpointId: "ko-cp-b1-4",
        testQuestions: [
            {
                id: "ko-b1-u15-q1", level: "B1",
                prompt: "Complete: '이 법안은 국회___ 통과됐습니다.' (This bill was passed by the National Assembly.)",
                options: ["에서", "에 의해", "에게서", "으로"],
                answer: "에 의해",
                hint: "-에 의해(서) = by (formal passive agent). 국회에 의해 통과됐습니다 = was passed by the National Assembly."
            },
            {
                id: "ko-b1-u15-q2", level: "B1",
                prompt: "Express in Korean: 'According to research, it is said that sleep is important.' (formal)",
                options: [
                    "연구는 잠이 중요해요.",
                    "연구에 의하면 수면이 중요하다고 합니다.",
                    "연구 때문에 잠을 자야 해요.",
                    "연구가 있어서 잠이 중요합니다."
                ],
                answer: "연구에 의하면 수면이 중요하다고 합니다.",
                hint: "-에 의하면 = according to. 연구에 의하면 ~ 다고 합니다 = according to research, it is said that..."
            },
            {
                id: "ko-b1-u15-q3", level: "B1",
                prompt: "Which formal opinion expression means 'it appears that' / 'it seems that'?",
                options: ["-다고 봐요", "-(으)로 보입니다", "-(이)라고 할 수 있습니다", "-(으)ㄹ 것으로 예상됩니다"],
                answer: "-(으)로 보입니다",
                hint: "-(으)로 보입니다 = it appears that / it seems that (formal). 상황이 개선되고 있는 것으로 보입니다."
            },
            {
                id: "ko-b1-u15-q4", level: "B1",
                prompt: "Complete the news sentence: '결과가 내일 공개___ 예정입니다.'",
                options: ["하는", "할", "됩니다", "될"],
                answer: "될",
                hint: "공개될 예정입니다 = is scheduled/expected to be disclosed. 될 = future of 되다. 공개되다 = to be disclosed."
            },
            {
                id: "ko-b1-u15-q5", level: "B1",
                prompt: "What does -다고 봐요 express?",
                options: [
                    "I see something visually",
                    "I view it as / I see it as (neutral opinion)",
                    "I heard that",
                    "It is announced that"
                ],
                answer: "I view it as / I see it as (neutral opinion)",
                hint: "-다고 봐요 = I view it as / I see it as. 이 문제는 심각하다고 봐요 = I view this problem as serious."
            },
        ],
    },

    // ─── BLOCK 5: 자연스러운 한국어 ─────────────────────────────────────────
    {
        id: "ko-b1-u16",
        level: "B1",
        order: 16,
        title: "내 한국어, 내 목소리 — B1 통합",
        description: "Integrate all B1 grammar before the exit checkpoints. Self-audit strengths and gaps with an honest checklist. Identify fossilisation traps. Consolidation converts knowledge into fluency.",
        grammarIds: [],
        vocabIds: ["ko-v-b1-076", "ko-v-b1-077", "ko-v-b1-078", "ko-v-b1-079", "ko-v-b1-080"],
        verbIds: [],
        checkpointId: "ko-cp-b1-5",
        testQuestions: [
            {
                id: "ko-b1-u16-q1", level: "B1",
                prompt: "Which is the most common B1 fossilisation error in Korean?",
                options: [
                    "Using 았/었었어요 too much",
                    "Using -아/어서 where -(으)니까 is required (before commands/suggestions)",
                    "Overusing 합쇼체 in casual contexts",
                    "Using -나 보다 instead of -것 같다"
                ],
                answer: "Using -아/어서 where -(으)니까 is required (before commands/suggestions)",
                hint: "The most common B1 Korean error: 날씨가 좋아서 가자 (wrong) vs 날씨가 좋으니까 가자 (right). The imperative test."
            },
            {
                id: "ko-b1-u16-q2", level: "B1",
                prompt: "Which B1 connector is appropriate in formal/written contexts for 'therefore'?",
                options: ["그래서", "따라서", "그러다 보니", "결국"],
                answer: "따라서",
                hint: "따라서 = therefore (formal). 그래서 sounds A2-level in formal writing. Upgrade to 따라서 for B1 written Korean."
            },
            {
                id: "ko-b1-u16-q3", level: "B1",
                prompt: "What is a B1 Korean speaker able to do that an A2 speaker cannot?",
                options: [
                    "Use 했어요 for past tense",
                    "Tell layered stories with prior context (았/었었어요), report speech, use formal register (합쇼체)",
                    "Use -고 싶어요 and -아/어야 해요",
                    "Ask basic questions in Korean"
                ],
                answer: "Tell layered stories with prior context (았/었었어요), report speech, use formal register (합쇼체)",
                hint: "B1 skills include: three-layer past narration, complete indirect speech system, 합쇼체, B1 discourse connectors, discourse particles."
            },
            {
                id: "ko-b1-u16-q4", level: "B1",
                prompt: "Identify the error: '비가 오더라도 가자. 날씨가 좋아서 즐거울 거야.'",
                options: [
                    "-더라도 is wrong — should be -아/어도",
                    "-아서 is wrong — 가자 is a suggestion, so -(으)니까 is needed before suggestions",
                    "Both sentences are correct",
                    "-더라도 and -아서 are interchangeable"
                ],
                answer: "-아서 is wrong — 가자 is a suggestion, so -(으)니까 is needed before suggestions",
                hint: "날씨가 좋아서 가자 (wrong). 날씨가 좋으니까 가자 (right). -아서 cannot precede suggestions/commands. (Note: the first sentence is fine.)"
            },
            {
                id: "ko-b1-u16-q5", level: "B1",
                prompt: "What does -거든요 signal to the listener?",
                options: [
                    "You already know this information",
                    "I'm giving you new background information you didn't already have",
                    "I'm discovering this right now",
                    "I'm softening a statement"
                ],
                answer: "I'm giving you new background information you didn't already have",
                hint: "-거든요 = new information for the listener — explanation, justification, background. The opposite of -잖아요 (shared info)."
            },
        ],
    },

    {
        id: "ko-b1-u17",
        level: "B1",
        order: 17,
        title: "담화 표지사 B1 — -거든요, -잖아요, -네요, -는데요",
        description: "The particles that make Korean sound alive. -거든요, -잖아요, -네요, and -는데요 are what separate textbook Korean from natural conversation. The single most important is -거든요.",
        grammarIds: ["ko-g-b1-16"],
        vocabIds: ["ko-v-b1-081", "ko-v-b1-082", "ko-v-b1-083", "ko-v-b1-084", "ko-v-b1-085"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u17-q1", level: "B1",
                prompt: "Which particle provides background info the listener doesn't already know?",
                options: ["-잖아요", "-네요", "-거든요", "-는데요"],
                answer: "-거든요",
                hint: "-거든요 = because / let me tell you (new information). 늦었거든요 = I was late, you see (explaining why)."
            },
            {
                id: "ko-b1-u17-q2", level: "B1",
                prompt: "Which particle appeals to SHARED knowledge the listener already has?",
                options: ["-거든요", "-잖아요", "-네요", "-는데요"],
                answer: "-잖아요",
                hint: "-잖아요 = you know / as you know. Appeals to shared information. 한국어가 어렵잖아요 = Korean is hard, YOU KNOW."
            },
            {
                id: "ko-b1-u17-q3", level: "B1",
                prompt: "Which particle expresses a discovery or reaction right now?",
                options: ["-거든요", "-잖아요", "-는데요", "-네요"],
                answer: "-네요",
                hint: "-네요 = I notice / I see / wow (discovery right now). 맛있네요! = It's delicious! (I'm tasting/discovering this now)"
            },
            {
                id: "ko-b1-u17-q4", level: "B1",
                prompt: "Complete: '이건 좀 비싼___.' (implying: can we do something about it?)",
                options: ["거든요", "잖아요", "네요", "데요"],
                answer: "데요",
                hint: "-는데요 / -은데요 sets context and implies something beyond what's said. 비싼데요... implies 'this is expensive [so can we negotiate?]'"
            },
            {
                id: "ko-b1-u17-q5", level: "B1",
                prompt: "왜 안 왔어요? — '갑자기 일이 생겼___.' Which particle fits best?",
                options: ["잖아요", "네요", "거든요", "는데요"],
                answer: "거든요",
                hint: "갑자기 일이 생겼거든요 = Something suddenly came up, you see. -거든요 explains/justifies with new information the listener didn't know."
            },
        ],
    },

    {
        id: "ko-b1-u18",
        level: "B1",
        order: 18,
        title: "속담과 관용어 / 인터넷 한국어 — 관용 표현",
        description: "Use common Korean idioms and proverbs naturally; understand internet and youth Korean. Cultural fluency — from 세 살 버릇 여든까지 간다 to 대박 and 갑분싸.",
        grammarIds: ["ko-g-b1-17"],
        vocabIds: ["ko-v-b1-086", "ko-v-b1-087", "ko-v-b1-088", "ko-v-b1-089", "ko-v-b1-090"],
        verbIds: [],
        testQuestions: [
            {
                id: "ko-b1-u18-q1", level: "B1",
                prompt: "What does 발이 넓다 mean idiomatically?",
                options: ["to have big feet", "to be well-connected / to know many people", "to be generous", "to be easily influenced"],
                answer: "to be well-connected / to know many people",
                hint: "발이 넓다 (literally 'wide feet') = well-connected. 그 사람은 발이 진짜 넓어요 = That person is really well-connected."
            },
            {
                id: "ko-b1-u18-q2", level: "B1",
                prompt: "What is the meaning of the proverb 세 살 버릇 여든까지 간다?",
                options: [
                    "Getting started is the hardest part",
                    "Old habits die hard (habits formed at 3 last until 80)",
                    "Even monkeys fall from trees",
                    "Haste makes waste"
                ],
                answer: "Old habits die hard (habits formed at 3 last until 80)",
                hint: "세 살(3 years old) 버릇(habit) 여든(80)까지 간다(lasts). This proverb is still frequently used in everyday conversation."
            },
            {
                id: "ko-b1-u18-q3", level: "B1",
                prompt: "What does 갑분싸 mean?",
                options: ["amazing / legendary", "mental breakdown", "sudden mood kill / awkward atmosphere", "I totally agree"],
                answer: "sudden mood kill / awkward atmosphere",
                hint: "갑분싸 = 갑자기 분위기 싸해짐 = suddenly the atmosphere turns cold / awkward. A very commonly used portmanteau in Korean internet culture."
            },
            {
                id: "ko-b1-u18-q4", level: "B1",
                prompt: "What does 대박 express?",
                options: ["That's terrible", "Wow / amazing / OMG (strong positive reaction)", "I don't believe it", "That's hard"],
                answer: "Wow / amazing / OMG (strong positive reaction)",
                hint: "대박! = Wow! Amazing! Used for anything impressive, shocking, or great. One of the most versatile Korean exclamations."
            },
            {
                id: "ko-b1-u18-q5", level: "B1",
                prompt: "What does 시작이 반이다 mean?",
                options: [
                    "Start at half speed",
                    "Getting started is half the battle (the hardest part is beginning)",
                    "Only start if you can finish",
                    "Half of starts are failures"
                ],
                answer: "Getting started is half the battle (the hardest part is beginning)",
                hint: "시작(start)이 반(half)이다 = the beginning is half of everything. Used as encouragement when someone is hesitating."
            },
        ],
    },

    {
        id: "ko-b1-u19",
        level: "B1",
        order: 19,
        title: "살아있는 한국어 — 구어, 방언, 지역 차이",
        description: "Understand colloquial Korean contractions, recognise major dialect features, and understand that B1 grammar is intact in all registers — only the surface changes. The bridge between B1 and authentic Korean.",
        grammarIds: ["ko-g-b1-17"],
        vocabIds: ["ko-v-b1-091", "ko-v-b1-092", "ko-v-b1-093", "ko-v-b1-094", "ko-v-b1-095"],
        verbIds: [],
        checkpointId: "ko-cp-b1-6",
        testQuestions: [
            {
                id: "ko-b1-u19-q1", level: "B1",
                prompt: "What is 이것이 reduced to in colloquial/fast speech?",
                options: ["이거", "이건", "이게", "이기"],
                answer: "이게",
                hint: "이것이 → 이게 (subject particle + demonstrative contracted). 이게 뭐예요? = What is this?"
            },
            {
                id: "ko-b1-u19-q2", level: "B1",
                prompt: "What city is associated with 뭐 하노? and 맞제? as dialectal speech?",
                options: ["Seoul", "Jeju", "Busan/Gyeongsang", "Jeolla"],
                answer: "Busan/Gyeongsang",
                hint: "부산/경상도 방언: 뭐 하노? (= 뭐 해요?), 맞제? (= 맞죠?). Distinctive falling intonation and -노/-제 endings."
            },
            {
                id: "ko-b1-u19-q3", level: "B1",
                prompt: "What is 거시기 and which region is it associated with?",
                options: [
                    "A Busan slang word meaning 'really'",
                    "A Jeolla dialect filler meaning 'that thing / you know what' — iconic to Jeolla-do",
                    "A Seoul youth slang word for amazing",
                    "A Jeju word meaning yes"
                ],
                answer: "A Jeolla dialect filler meaning 'that thing / you know what' — iconic to Jeolla-do",
                hint: "거시기 is the most famous Korean dialect word — a Jeolla 전라도 filler. Using it correctly will delight Jeolla speakers."
            },
            {
                id: "ko-b1-u19-q4", level: "B1",
                prompt: "In fast/colloquial Korean, subject particles (이/가) and object particles (을/를) are often:",
                options: ["doubled for emphasis", "replaced with topic particles", "dropped entirely", "moved to the end of the sentence"],
                answer: "dropped entirely",
                hint: "In casual and fast speech, 이/가 and 을/를 are frequently dropped. 뭐 먹어? vs 뭐를 먹어요? The meaning is clear from context."
            },
            {
                id: "ko-b1-u19-q5", level: "B1",
                prompt: "What is the key insight about B1 grammar in colloquial Korean?",
                options: [
                    "B1 grammar doesn't appear in colloquial Korean",
                    "Colloquial Korean uses simpler grammar than B1",
                    "B1 grammar is intact in colloquial Korean — only the surface (speed, particles, contractions) changes",
                    "You need to relearn all B1 grammar for colloquial contexts"
                ],
                answer: "B1 grammar is intact in colloquial Korean — only the surface (speed, particles, contractions) changes",
                hint: "-거든요, -더라도, -뿐만 아니라 all appear in colloquial speech. Colloquial Korean is compressed grammar, not broken grammar."
            },
        ],
    },
]
