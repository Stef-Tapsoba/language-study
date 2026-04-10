import { Checkpoint } from "../../../types"

export const a1Checkpoints: Checkpoint[] = [
    {
        id: "ko-cp-a1-1",
        level: "A1",
        block: 1,
        type: "speaking",
        title: "Introduce yourself",
        scenario: `You've just arrived at a Korean language exchange meetup in your city. You sit down across from a Korean person you've never met. They smile and say 안녕하세요.

Introduce yourself. Tell them:
• Your name
• Where you're from
• Your age
• What you do (job or studies)

Then ask them at least one question back.`,
        speakingPrompts: [
            "Use a greeting (안녕하세요)",
            "Say your name (저는 ___이에요/예요 or ___이라고 해요)",
            "Say where you're from (___에서 왔어요 or ___ 사람이에요)",
            "Say your age (저는 ___살이에요)",
            "Say your job or studies (저는 ___이에요 / ___를 공부해요)",
            "Use a politeness phrase naturally (만나서 반가워요!)",
            "Ask a question back (___씨는요? / 이름이 뭐예요? / 어디에서 왔어요?)",
        ],
    },
    {
        id: "ko-cp-a1-2",
        level: "A1",
        block: 2,
        type: "speaking",
        title: "Talk about your world",
        scenario: `You're on a video call with a Korean language partner you've just been matched with. After your introduction, they want to know more about your life.

Tell them about:
• Your family (who you have, a little about them)
• Something you like doing and something you don't like
• What a typical day looks like for you
• Somewhere you go regularly — describe it

Then ask them at least two questions about their life.`,
        speakingPrompts: [
            "Talk about your family with 있어요/없어요 (저는 남동생이 있어요)",
            "Describe a family member (어머니는 선생님이에요)",
            "Say something you like using 을/를 좋아해요 (저는 음악을 정말 좋아해요)",
            "Say something you don't like (저는 운동을 별로 안 좋아해요)",
            "Use at least two present tense verbs (저는 아침에 커피를 마시고 학교에 가요)",
            "Use 에 correctly for location or destination (카페에 자주 가요)",
            "Use at least one adjective (그 카페가 정말 예뻐요)",
            "Ask two questions back (가족이 어떻게 돼요? / 뭐 좋아해요?)",
        ],
    },
    {
        id: "ko-cp-a1-3",
        level: "A1",
        block: 3,
        type: "speaking",
        title: "Describe your routine",
        scenario: `Part A — Speaking:
You're catching up with a Korean language partner you met online. It's been two weeks since you last spoke. They ask how you've been.

Tell them:
• What your week was like (past tense — at least 3 verbs)
• What you usually do on weekday evenings (frequency + present)
• Something you did recently that you liked or didn't like

Then ask them at least two questions — one about their routine, one about their past week.

Part B — Listening (separate exercise):
Listen to a Korean speaker describing their typical week. Answer comprehension questions.`,
        speakingPrompts: [
            "Use at least three past tense verbs (갔어요, 먹었어요, 봤어요)",
            "Describe your regular routine with a frequency adverb (저는 보통 저녁에 공부해요)",
            "Use 별로, 거의, or 절대로 correctly with a negative verb (운동을 별로 안 했어요)",
            "Use a time expression (어제 / 지난 주말에)",
            "Use a question word naturally in a question (주말에 뭐 했어요?)",
            "Use negation (안 or 못) at least once (못 갔어요 / 별로 안 좋았어요)",
            "Ask two questions back (어떻게 지냈어요? / 보통 몇 시에 자요?)",
        ],
    },
    {
        id: "ko-cp-a1-4",
        level: "A1",
        block: 4,
        type: "speaking",
        title: "Navigate a day in Seoul",
        scenario: `It's Saturday in Seoul. You're spending the day out with a Korean language partner — this is your first time meeting in person.

Walk through the day out loud:

1. Suggest a plan — where you want to go and what you want to do. Use ~고 싶어요 and ~(으)ㄹ까요?

2. Ask for directions — you need to get from the subway station to a café near Gyeongbokgung. Ask someone on the street. Use at least two direction phrases.

3. Order lunch — at a Korean restaurant, order a full meal for two including drinks. Use counters and 주세요.

4. Handle something going wrong — your food is too spicy, or you can't find the right exit, or the shop doesn't have what you want. React naturally.

5. Wrap up the day — say what you enjoyed, suggest doing it again, say goodbye properly.`,
        speakingPrompts: [
            "Suggest an activity using ~(으)ㄹ까요? (같이 경복궁에 갈까요?)",
            "Express what you want with ~고 싶어요 (삼청동에도 가고 싶어요)",
            "Ask for directions using at least two direction phrases (직진하다가 왼쪽으로 도세요)",
            "Order food with correct counter usage (비빔밥 두 개랑 물 두 잔 주세요)",
            "Use ~아/어 주세요 at least once (천천히 말해 주세요)",
            "React to something unexpected (조금 매운데요... 다른 거 있어요?)",
            "Use a hesitation marker naturally (음... 글쎄요...)",
            "Maintain 해요체 throughout (all endings in ~요 form)",
            "Close the conversation naturally (정말 즐거웠어요! 다음에 또 만날까요?)",
        ],
    },
    {
        id: "ko-cp-a1-5",
        level: "A1",
        block: 5,
        type: "speaking",
        title: "Past and future — the A1 exit checkpoint",
        scenario: `You've been chatting online with a Korean language partner for three months. This is your first video call. They ask you to talk about yourself.

Part 1 — Recent past (speak for 2–3 minutes):
Tell them about the last week or two. What did you do? Did anything interesting happen? What was good, what wasn't? Use past tense naturally — not just a list of events, but with reactions, connectors, and at least one reason clause (~아서/어서).

Part 2 — Plans and hopes (1–2 minutes):
Tell them what you're planning to do soon. Include something you're hoping for or a conditional plan (if the weather is good / if I have time / if I can...).

Part 3 — Turn the conversation (1 minute):
Ask your partner at least two questions — about what they've been doing, or what they're planning.`,
        speakingPrompts: [
            "Use at least four past tense verbs correctly (갔어요, 먹었어요, 만났어요, 좋았어요)",
            "Use ~아서/어서 at least once (재미있어서 자주 가요 / 피곤해서 일찍 잤어요)",
            "Use ~(으)ㄹ 거예요 for a plan (다음 달에 제주도에 갈 거예요)",
            "Use a conditional ~(으)면 (시간이 있으면 한라산에 올라갈 거예요)",
            "Use at least two different connectors (~고, ~지만, 그런데, 그래서)",
            "Maintain 해요체 throughout (all verb endings in ~요)",
            "Use a hesitation marker at least once (음... 글쎄요... 그러니까...)",
            "Ask two questions with appropriate question words (어떻게 지내셨어요? / 이번 주에 뭐 할 거예요?)",
            "Produce at least 8 connected sentences without stopping",
        ],
    },
]
