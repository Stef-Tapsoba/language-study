import type { Checkpoint } from "../../../types"

export const b1Checkpoints: Checkpoint[] = [
    // ── ko-cp-b1-1 : Block 1 — 있었던 일 이야기하기 (after U4) ───────────────
    {
        id: "ko-cp-b1-1",
        level: "B1",
        block: 1,
        type: "speaking",
        title: "있었던 일 이야기하기",
        scenario:
            "Tell me about something that happened — a real experience or one you invent. The story must have a 'before' (something that had already happened — 았/었었어요), a 'scene' (what was going on — 고 있었어요), and 'events' (what happened — 았/었어요). Take 30 seconds to prepare, then speak for 90 seconds to 2 minutes.\n\n이야기를 하나 해 주세요 — 실제 경험이나 만들어낸 이야기도 괜찮아요. '이전', '상황', '사건'이 있어야 해요.",
        speakingPrompts: [
            "Used past progressive (-고 있었어요) at least once to set the background scene",
            "Used simple past (았/었어요) at least 4 times for the plot events",
            "Used remote past (았/었었어요) at least once for what had already happened before",
            "Used at least one inference expression (-(으)ㄹ/ㄴ 것 같다, -나 보다, etc.)",
            "Used at least one narrative connector (그러다가, 결국, 알고 보니, 갑자기, 그때...)",
            "Your story has a clear 'before', 'background/scene', and 'events' layer",
            "A Korean speaker could follow the story without prior context",
        ],
    },

    // ── ko-cp-b1-2 : Block 2 — 중요한 주제에 대한 나의 생각 (after U8) ────────
    {
        id: "ko-cp-b1-2",
        level: "B1",
        block: 2,
        type: "speaking",
        title: "중요한 주제에 대한 나의 생각",
        scenario:
            "Choose one topic and give your opinion for 2 minutes. State a position, give reasons, acknowledge the other side, and express what you want or worry about. Take 30 seconds to prepare.\n\n주제 선택 (choose one):\n1. 재택근무 — 장점과 단점\n2. SNS와 현대 인간관계\n3. 한국어를 배우는 것의 중요성",
        speakingPrompts: [
            "Expressed a clear opinion (저는 ~라고 생각해요, 제 생각에는...)",
            "Used at least one purpose expression (-도록, -기 위해서, -(으)려고) correctly",
            "Used at least 2 cause/reason expressions — including -(으)니까 correctly (before command or suggestion)",
            "Used 덕분에, 때문에, or 탓에 at least once with correct positive/neutral/negative nuance",
            "Used at least one concessive expression (-아/어도, -더라도, 아무리 ~아도)",
            "Used -(으)ㄹ수록 or 갈수록 at least once",
            "Acknowledged the other side or a complexity",
            "Argument is logical and a Korean speaker could follow the reasoning",
        ],
    },

    // ── ko-cp-b1-3 : Block 3 — 복잡한 상황 설명하기 (after U12) ────────────────
    {
        id: "ko-cp-b1-3",
        level: "B1",
        block: 3,
        type: "speaking",
        title: "복잡한 상황 설명하기",
        scenario:
            "Explain a complex situation you know well — personal (a misunderstanding, a difficult decision) or general (a topic you've read about). Describe what happened, why it happened, what the people involved said, and how you feel. Speak for 2 minutes.\n\n복잡한 상황을 설명해 주세요 — 경험한 일이나 잘 알고 있는 것이면 됩니다.",
        speakingPrompts: [
            "Reported what someone said or asked using indirect speech (including tense)",
            "Used the correct indirect speech form: -다고 했어요 (statement), -(으)라고 했어요 (command), -냐고 물었어요 (question)",
            "Used -(으)ㄹ + noun (것/때/곳/사람) at least once naturally",
            "Used -(으)ㄴ/는 반면에 or -(으)ㄴ/는 편이다 at least once",
            "Used at least one B1 consequence or contrast connector (따라서, 결국, 게다가, 그럼에도 불구하고, 오히려...)",
            "Explanation is logical and a listener could follow it without prior knowledge",
        ],
    },

    // ── ko-cp-b1-4 : Block 4 — 공식적으로 설명하기 (after U15) ──────────────────
    {
        id: "ko-cp-b1-4",
        level: "B1",
        block: 4,
        type: "speaking",
        title: "공식적으로 설명하기",
        scenario:
            "Give a short formal presentation on one topic in 합쇼체 for 2–3 minutes. Use the standard presentation structure.\n\nTopics (choose one):\n1. 재택근무의 장단점\n2. 환경 보호의 중요성\n3. 한국어 학습의 어려움과 보람\n\n이 주제에 대해 짧은 발표를 해 주세요. 합쇼체를 사용하고 발표 형식을 갖춰 주세요.\n\nNote: Slipping back into 해요체 is normal in early attempts — aim for 합쇼체 most of the time. Unlimited retries.",
        speakingPrompts: [
            "Delivered the presentation consistently in 합쇼체 (slips are okay — mostly 합쇼체)",
            "Used the opening formula (안녕하십니까, 오늘은 ~에 대해 말씀드리겠습니다)",
            "Used -되다 passive at least twice (발표됐습니다, 필요합니다, 됩니다...)",
            "Used at least one formal opinion expression (-다고 봐요, -으로 보입니다, etc.)",
            "Used at least 2 B1 connectors (반면에, 따라서, 게다가, 뿐만 아니라...)",
            "Used -뿐만 아니라 or a related additive structure at least once",
            "Used a closing formula (이상으로 발표를 마치겠습니다)",
            "Presentation is logical and easy to follow",
        ],
    },

    // ── ko-cp-b1-5 : Block 5 — 토론 미니 (after U16) ────────────────────────────
    {
        id: "ko-cp-b1-5",
        level: "B1",
        block: 5,
        type: "speaking",
        title: "토론 미니",
        scenario:
            "Two-phase debate checkpoint — 3 to 4 minutes total.\n\nPhase 1 (90 seconds): Present your position on one topic.\nPhase 2 (60–90 seconds): Respond to the counter-argument shown after Phase 1.\n\nTopics (choose one):\n1. '요즘 젊은이들은 예전 세대보다 일을 덜 한다.' — 찬성 또는 반대?\n2. '도시 생활이 시골 생활보다 낫다.' — 찬성 또는 반대?\n3. 'SNS가 진정한 소통을 파괴했다.' — 찬성 또는 반대?\n\nAfter Phase 1: '어떤 사람들은 동의하지만, 다른 사람들은 [반대 입장]이라고 말할 수 있어요. 어떻게 생각하세요?'",
        speakingPrompts: [
            "Phase 1: Expressed a clear qualified position (저는 ~라고 봐요, 제 생각에는...)",
            "Phase 1: Used at least one cause connector (때문에, 탓에, 덕분에, 거든요)",
            "Phase 1: Used at least one consequence connector (따라서, 결국, 그러다 보니)",
            "Phase 1: Structured argument with 반면에 or 한편으로 contrast",
            "Phase 2: Acknowledged the counter-argument (맞아요, 그건 이해해요, 그럴 수도 있는데요...)",
            "Phase 2: Maintained or modified position with reasoning",
            "Phase 2: Used 그럼에도 불구하고 or 그런데도 at least once",
            "Phase 2: Used at least 1 B1 grammatical structure (indirect speech, -(으)ㄹ수록, -더라도, etc.)",
        ],
    },

    // ── ko-cp-b1-6 : B1 exit capstone (after U19) ────────────────────────────────
    {
        id: "ko-cp-b1-6",
        level: "B1",
        block: 6,
        type: "speaking",
        title: "나의 이야기, 나의 시각 — B1 출구 캡스톤",
        scenario:
            "Two-part capstone — 5 to 7 minutes total.\n\nPart A — Extended personal narrative (3 minutes): Tell me something that really marked you — an experience, an encounter, a decision. Explain the context, what happened, how you felt, and what you think now. Your story should have a clear timeline with prior context (았/었었어요), at least one hypothetical reflection, and at least one indirect speech element. Take 1 minute to prepare.\n\nPrompt: '진짜 와 닿았던 경험, 만남, 또는 결정을 이야기해 주세요.'\n\nPart B — Personal reflection (2–3 minutes): After Part A, reflect on your experience with Korean.\n\nPrompt: '이 언어에서 뭐가 제일 좋아요? 뭐가 제일 어려웠어요? 앞으로 한국어로 뭘 하고 싶어요?'",
        speakingPrompts: [
            "Part A: Used 았/었었어요 for backstory — what had already happened before the main events",
            "Part A: Used 았/었어요 for events and -고 있었어요 for the background scene",
            "Part A: Used at least one B1 concessive or conditional (-더라도, -는 한, 아무리 -아도)",
            "Part A: Used indirect speech naturally at least once (다고 했어요, 냐고 물었어요, 라고 했어요...)",
            "Part A: Used at least one B1 discourse connector (따라서, 게다가, 결국, 오히려...)",
            "Part A: Used at least one colloquial/discourse particle naturally (-거든요, -잖아요, -네요, -는데요)",
            "Part B: Expressed wishes or future plans with appropriate patterns (-(으)ㄹ수록, -뿐만 아니라...)",
            "Part B: Used -(으)ㄹ + 것/때/사람 at least once to frame a reflection",
            "Both parts are organised, flowing, and coherent — not a list of sentences",
            "A Korean speaker could follow both parts easily",
        ],
    },
]
