import { Checkpoint } from "../../../types"

export const a2Checkpoints: Checkpoint[] = [
    {
        id: "ko-cp-a2-1",
        level: "A2",
        block: 1,
        type: "speaking",
        title: "지금 뭐 해요? 해도 돼요?",
        scenario: `You receive an unexpected call from a Korean friend who wants to meet up. You're currently busy.

Describe what you're doing right now (-고 있어요), explain what you have to do today (-아/어야 해요), say what you can and can't do (-(으)ㄹ 수 있어요/없어요), make a promise for later (-(으)ㄹ 게요), and offer to help them with something (-아/어 드릴게요).

Begin with 여보세요! and include at least 6 sentences.`,
        speakingPrompts: [
            "Describe what you're doing right now using -고 있어요",
            "Say what you're wearing using -고 있어요 (the stative wearing use)",
            "Say what you have to do today using -아/어야 해요 or -아/어야 돼요",
            "Say what you can't do right now using -(으)ㄹ 수 없어요 or 못",
            "Make a spontaneous promise using -(으)ㄹ 게요 (1st person only)",
            "Offer to help using -아/어 드릴게요 (honorific) or -아/어 줄게요 (peer)",
            "Use at least one direction particle: 한테, 한테서, or 께",
        ],
    },
    {
        id: "ko-cp-a2-2",
        level: "A2",
        block: 2,
        type: "both",
        title: "경험과 변화",
        scenario: `Talk about three experiences from your life — things you have tried and things you have never tried.

Then describe how something in your life has changed recently. Use -아/어 본 적이 있어요/없어요 for life experiences, -아/어지다 or -게 됐어요 for changes, and comparison words (보다, 가장/제일, 훨씬). Use at least one 것 같아요 for a hedged observation.

You may speak about: food, travel, activities, hobbies, language learning.`,
        speakingPrompts: [
            "Describe at least two experiences using -아/어 본 적이 있어요",
            "Describe one thing you've never done using -아/어 본 적이 없어요",
            "Use a life-stage time expression (어렸을 때, 대학교 때, etc.)",
            "Describe a change using -아/어졌어요 or -게 됐어요",
            "Use a comparison: 보다 더, 가장/제일, 덜, or 훨씬",
            "Use 처럼 or 같이 to compare something to something else",
            "Express a hedged opinion using 것 같아요",
            "Use at least one of: 마다, 부터...까지, or (이)랑",
        ],
        listeningId: "ko-l-a2-2",
    },
    {
        id: "ko-cp-a2-3",
        level: "A2",
        block: 3,
        type: "both",
        title: "이유를 말하고 이야기를 연결하세요",
        scenario: `Tell a short story about a recent time when your plan changed or something unexpected happened. Maybe you missed something, arrived late, or had a day that didn't go as expected.

Use -아/어서 for natural cause/result sequences, -(으)니까 for reasons that led to decisions or suggestions, -는데 for background context and contrast, -(으)면서 or -고 나서 for what you did during or after, and noun modifiers (-는, -(으)ㄴ, -(으)ㄹ) to describe people and things.

Critical: Do NOT put -았/었 before -아/어서. Do NOT use -(으)세요 or a suggestion after -아/어서.`,
        speakingPrompts: [
            "Use -아/어서 at least once for a natural cause or sequence (no imperative or suggestion after)",
            "Use -(으)니까 at least once for a reason justifying a decision or suggestion",
            "Do NOT put -았/었 before -아/어서 (critical tense rule)",
            "Use -는데 at least once for background context or contrast",
            "Use -(으)면서 with the same subject for simultaneous actions",
            "Use -고 나서 for a clear sequential action (A fully done before B)",
            "Use at least one -는 noun modifier (present action: 아는 사람, 좋아하는 것)",
            "Use at least one -(으)ㄴ or -(으)ㄹ noun modifier (past action or future/potential)",
        ],
        listeningId: "ko-l-a2-4",
    },
    {
        id: "ko-cp-a2-4",
        level: "A2",
        block: 4,
        type: "speaking",
        title: "공손하게 말하고 전달하세요",
        scenario: `Two-part challenge:

Part A: You are a university student. Call a professor's office. Ask if the professor is in (correct honorific for location), ask when they'll return, leave a message using -는데요 as a soft request, and ask about their availability. Use -(으)시- throughout and avoid 먹어요/자요/있어요 (location) for respected persons.

Part B: Relay a friend's weekend messages to another friend using all four indirect speech patterns: -다고 하다 (statement), -(으)라고 하다 (imperative/instruction), -냐고 하다 (question), and -(이)라고 하다 (noun statement).`,
        speakingPrompts: [
            "Use 계세요 (not 있어요) for the professor's location",
            "Use at least one irregular honorific verb (드시다, 계시다, 주무시다, or 말씀하시다)",
            "Do NOT use 먹어요, 자요, or 있어요 (location) about a respected person",
            "Use -는데요 at least once as a soft request or trailing statement",
            "Use 은/는 and 이/가 appropriately (topic/contrast vs new information/identification)",
            "Report a statement using -다고 or -(이)라고 하다",
            "Report an instruction using -(으)라고 하다",
            "Report a question using -냐고 하다 or -냐고 묻다",
        ],
    },
    {
        id: "ko-cp-a2-5",
        level: "A2",
        block: 5,
        type: "listening",
        title: "수진 씨의 이야기",
        scenario: `Listen to Sujin's story about her difficult week. She describes being called in for an unexpected presentation, preparing under pressure, and finding unexpected confidence.

Listen for: -고 있었는데 (was doing when...), -아/어서 vs -(으)니까 (pay attention to which is used and why), -는데 for background, noun modifiers (아는 사람, 먹을 것), honorifics for her boss (-(으)셨어요), indirect speech (-라고 하다), and -게 됐어요 for natural development.

Question 6 asks you to explain WHY -(으)니까 was used in a specific sentence — not just recognise it.`,
        speakingPrompts: [
            "Identify why the flight was delayed / what happened at the start",
            "Report what Sujin was doing when her boss called",
            "Identify what the boss told Sujin to do (indirect speech: -(으)라고)",
            "Explain why Sujin couldn't eat lunch properly",
            "Describe how the presentation actually went",
            "Explain WHY -(으)니까 was used: '상사가 오늘 발표하라고 하니까 어쩔 수 없었어요'",
            "Report what the boss said to Sujin after the presentation (-다고 하다)",
        ],
        listeningId: "ko-l-a2-4",
    },
    {
        id: "ko-cp-a2-6",
        level: "A2",
        block: 6,
        type: "speaking",
        title: "A2 Exit Capstone: 한국어로 나를 소개해요",
        scenario: `Your A2 exit demonstration. Speak for 3–4 minutes continuously about yourself. Cover at least 4 of these 5 topics in any order:

1. 나는 누구인가요? — Who are you? (background, how long you've studied, what you do)
2. 기억에 남는 경험 — A memorable experience (use the storytelling framework)
3. 비교하고 의견을 말해요 — Compare two things and give a hedged opinion
4. 요즘 어떻게 지내요? — Your current life (ongoing actions, changes, obligations)
5. 앞으로의 계획과 꿈 — Your plans and dreams (all three future intention levels)

Read the full 12-item checklist before you begin and try to meet all items.`,
        speakingPrompts: [
            "Use all three tenses: past (-았/었어요), present (-아요/-어요, -고 있어요), future (-(으)ㄹ 거예요, -(으)ㄹ 예정이에요, -기로 했어요)",
            "Use -고 있다 for at least one ongoing action or state",
            "Use at least THREE different connectors (-아/어서, -(으)니까, -는데, -(으)면서, -고 나서, -지만, 그래도)",
            "Do NOT rely only on -고 as your connector",
            "Use at least one noun modifier (-는, -(으)ㄴ, or -(으)ㄹ before a noun)",
            "Express at least one hedged opinion or observation using 것 같아요",
            "If you mention a parent, teacher, or elder — use -(으)시- correctly; avoid 먹어요/자요/있어요(location) for them",
            "If you report something someone said — use -다고/-(으)라고/-냐고, not direct quotes",
            "Describe at least one natural life change using -게 됐어요 or -아/어지다",
            "Mention at least one plan using -(으)ㄹ 예정이에요, -기로 했어요, or -(으)ㄹ 생각이에요",
            "Use at least TWO discourse markers (그런데, 그러니까, 사실은, 아무튼, 결국, 뭐랄까, 그래도)",
            "End naturally — don't just stop. Finish with a summary, reflection, or forward-looking statement",
        ],
    },
]
