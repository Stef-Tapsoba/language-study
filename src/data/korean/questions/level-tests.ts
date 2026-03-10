// Korean level advancement test questions
// data/korean/questions/level-tests.ts
import { QuizQuestion } from "../../../types"

// 15 questions per level for the level advancement test.
// Pass threshold: 12/15 (80%).

export const levelTestQuestions: QuizQuestion[] = [
    // ── A1 (15 questions) ────────────────────────────────────────────────────
    { id: "ko-lt-a1-1", level: "A1", prompt: "What does '감사합니다' mean?", options: ["Hello", "Goodbye", "Thank you", "Excuse me"], answer: "Thank you" },
    { id: "ko-lt-a1-2", level: "A1", prompt: "Which particle marks the direct object?", options: ["은/는", "이/가", "을/를", "에서"], answer: "을/를" },
    { id: "ko-lt-a1-3", level: "A1", prompt: "How do you say 'I am a student'?", options: ["저는 학생이에요.", "학생는 저이에요.", "저를 학생이에요.", "저이에요 학생."], answer: "저는 학생이에요." },
    { id: "ko-lt-a1-4", level: "A1", prompt: "What is '물' in English?", options: ["Rice", "Tea", "Juice", "Water"], answer: "Water" },
    { id: "ko-lt-a1-5", level: "A1", prompt: "How do you conjugate 가다 (to go) in polite present?", options: ["가다요", "갑니다 only", "가요", "갔어요"], answer: "가요" },
    { id: "ko-lt-a1-6", level: "A1", prompt: "How do you say 'I'm sorry' (formal)?", options: ["감사합니다", "안녕하세요", "죄송합니다", "괜찮아요"], answer: "죄송합니다" },
    { id: "ko-lt-a1-7", level: "A1", prompt: "Which particle marks the destination or static location?", options: ["에서", "에", "을/를", "이/가"], answer: "에" },
    { id: "ko-lt-a1-8", level: "A1", prompt: "How do you say 'I eat' (polite informal)?", options: ["먹습니다", "먹었어요", "먹어요", "먹다"], answer: "먹어요" },
    { id: "ko-lt-a1-9", level: "A1", prompt: "What is the past tense of 가다 (to go)?", options: ["가요", "가겠어요", "갔어요", "갈 거예요"], answer: "갔어요" },
    { id: "ko-lt-a1-10", level: "A1", prompt: "What does '학교' mean?", options: ["Hospital", "Restaurant", "School", "Market"], answer: "School" },
    { id: "ko-lt-a1-11", level: "A1", prompt: "How do you negate a 하다 compound verb?", options: ["안 공부해요", "공부 안 해요", "공부해 안요", "공부 못 해요 only"], answer: "공부 안 해요" },
    { id: "ko-lt-a1-12", level: "A1", prompt: "What does '아니요' mean?", options: ["Yes", "No", "Please", "Sorry"], answer: "No" },
    { id: "ko-lt-a1-13", level: "A1", prompt: "What is 'ten' in native Korean?", options: ["십", "열", "열 개", "십 명"], answer: "열" },
    { id: "ko-lt-a1-14", level: "A1", prompt: "Complete: '카페___ 공부해요.' (I study at the café)", options: ["에", "에서", "이", "을"], answer: "에서" },
    { id: "ko-lt-a1-15", level: "A1", prompt: "How do you say 'It is snowing'?", options: ["눈이 있어요.", "눈이 와요.", "눈이 가요.", "눈이 와요 거예요."], answer: "눈이 와요." },

    // ── A2 (15 questions) ────────────────────────────────────────────────────
    { id: "ko-lt-a2-1", level: "A2", prompt: "How do you say 'I want to drink water'?", options: ["물을 마셔요.", "물을 마셨어요.", "물을 마시고 싶어요.", "물을 마실 거예요."], answer: "물을 마시고 싶어요." },
    { id: "ko-lt-a2-2", level: "A2", prompt: "Which ending expresses 'want to do'?", options: ["~았/었어요", "~고 싶어요", "~(으)ㄹ 수 있어요", "~아/어요"], answer: "~고 싶어요" },
    { id: "ko-lt-a2-3", level: "A2", prompt: "How do you say 'I can speak Korean'?", options: ["한국어를 말해요.", "한국어를 말했어요.", "한국어를 말할 수 있어요.", "한국어를 말하고 싶어요."], answer: "한국어를 말할 수 있어요." },
    { id: "ko-lt-a2-4", level: "A2", prompt: "What does '취미' mean?", options: ["Trip", "Hobby", "Weekend", "Promise"], answer: "Hobby" },
    { id: "ko-lt-a2-5", level: "A2", prompt: "How do you say 'I will go to school tomorrow'?", options: ["내일 학교에 가요.", "내일 학교에 갔어요.", "내일 학교에 갈 거예요.", "내일 학교에 가고 싶어요."], answer: "내일 학교에 갈 거예요." },
    { id: "ko-lt-a2-6", level: "A2", prompt: "What does '약속' mean?", options: ["Plan", "Appointment / Promise", "Hobby", "Trip"], answer: "Appointment / Promise" },
    { id: "ko-lt-a2-7", level: "A2", prompt: "How do you say 'I am eating right now'?", options: ["지금 밥을 먹어요.", "지금 밥을 먹었어요.", "지금 밥을 먹고 있어요.", "지금 밥을 먹을 거예요."], answer: "지금 밥을 먹고 있어요." },
    { id: "ko-lt-a2-8", level: "A2", prompt: "What does '여행' mean?", options: ["Station", "Train", "Week", "Travel / Trip"], answer: "Travel / Trip" },
    { id: "ko-lt-a2-9", level: "A2", prompt: "How do you say 'I watched a movie' (봐요 → past)?", options: ["영화를 봐요.", "영화를 봤어요.", "영화를 볼 거예요.", "영화를 보고 싶어요."], answer: "영화를 봤어요." },
    { id: "ko-lt-a2-10", level: "A2", prompt: "~(으)ㄹ 수 없어요 means:", options: ["I don't want to", "I can't / I'm unable to", "I didn't do it", "I won't"], answer: "I can't / I'm unable to" },
    { id: "ko-lt-a2-11", level: "A2", prompt: "What does '오른쪽' mean?", options: ["Left", "Right", "Straight", "Back"], answer: "Right" },
    { id: "ko-lt-a2-12", level: "A2", prompt: "How do you say 'I wrote a letter' (쓰다 → past)?", options: ["편지를 써요.", "편지를 쓸 거예요.", "편지를 썼어요.", "편지를 쓰고 있어요."], answer: "편지를 썼어요." },
    { id: "ko-lt-a2-13", level: "A2", prompt: "What does '기차' mean?", options: ["Bus", "Subway", "Train", "Taxi"], answer: "Train" },
    { id: "ko-lt-a2-14", level: "A2", prompt: "How do you say 'What are you doing?'", options: ["뭐 해요?", "뭐 했어요?", "뭐 하고 있어요?", "뭐 할 거예요?"], answer: "뭐 하고 있어요?" },
    { id: "ko-lt-a2-15", level: "A2", prompt: "For third-person desires, the correct form is:", options: ["~고 싶어요", "~고 싶다", "~고 싶어하다", "~고 싶겠다"], answer: "~고 싶어하다" },

    // ── B1 (15 questions) ────────────────────────────────────────────────────
    { id: "ko-lt-b1-1", level: "B1", prompt: "What does ~(으)면 express?", options: ["Obligation", "Conditional (if/when)", "Permission", "Contrast"], answer: "Conditional (if/when)" },
    { id: "ko-lt-b1-2", level: "B1", prompt: "Complete: '시간이 ___ 같이 갈게요.' (~(으)면 with 있다)", options: ["있어서", "있으면", "있지만", "있기 때문에"], answer: "있으면" },
    { id: "ko-lt-b1-3", level: "B1", prompt: "What does '환경' mean?", options: ["Society", "Health", "Environment", "Freedom"], answer: "Environment" },
    { id: "ko-lt-b1-4", level: "B1", prompt: "~아/어서 is used to express:", options: ["Contrast only", "Cause/reason or sequential action", "Permission", "Prohibition"], answer: "Cause/reason or sequential action" },
    { id: "ko-lt-b1-5", level: "B1", prompt: "What does '문제' mean?", options: ["Opportunity", "Problem", "Health", "Opinion"], answer: "Problem" },
    { id: "ko-lt-b1-6", level: "B1", prompt: "Complete: '한국어는 어렵___ 재미있어요.' (~지만)", options: ["어서", "지만", "기 때문에", "으면"], answer: "지만" },
    { id: "ko-lt-b1-7", level: "B1", prompt: "What does '생활' mean?", options: ["Freedom", "Society", "Daily life", "Challenge"], answer: "Daily life" },
    { id: "ko-lt-b1-8", level: "B1", prompt: "~기 때문에 compared to ~아/어서 is:", options: ["More casual", "More formal", "Identical in meaning", "Only with nouns"], answer: "More formal" },
    { id: "ko-lt-b1-9", level: "B1", prompt: "What does '어렵다' mean?", options: ["Important", "Interesting", "Difficult", "Easy"], answer: "Difficult" },
    { id: "ko-lt-b1-10", level: "B1", prompt: "Past polite of 생각하다:", options: ["생각해요", "생각했어요", "생각하면", "생각하겠어요"], answer: "생각했어요" },
    { id: "ko-lt-b1-11", level: "B1", prompt: "What does '중요하다' mean?", options: ["Difficult", "Important", "Interesting", "Beautiful"], answer: "Important" },
    { id: "ko-lt-b1-12", level: "B1", prompt: "Complete: '비가 오___ 집에 있어요.' (~기 때문에)", options: ["기 때문에", "아서", "지만", "으면"], answer: "기 때문에" },
    { id: "ko-lt-b1-13", level: "B1", prompt: "What does '의견' mean?", options: ["Problem", "Freedom", "Opinion", "Health"], answer: "Opinion" },
    { id: "ko-lt-b1-14", level: "B1", prompt: "Present polite of 읽다:", options: ["읽어요", "읽었어요", "읽으면", "읽습니다 only"], answer: "읽어요" },
    { id: "ko-lt-b1-15", level: "B1", prompt: "What does '기회' mean?", options: ["Machine", "Opportunity", "Environment", "Society"], answer: "Opportunity" },

    // ── B2 (15 questions) ────────────────────────────────────────────────────
    // Passive / causative (3)
    { id: "ko-lt-b2-1", level: "B2", prompt: "Which suffix forms the passive of 닫다 (to close)?", options: ["-히", "-우", "-추", "-시키"], answer: "-히" },
    { id: "ko-lt-b2-2", level: "B2", prompt: "Choose the correct passive sentence:", options: ["문이 바람에 닫혔어요.", "문이 바람에 닫았어요.", "문이 바람에 닫게 해요.", "문이 바람에 닫혔게 됐어요."], answer: "문이 바람에 닫혔어요." },
    { id: "ko-lt-b2-3", level: "B2", prompt: "Which is the causative form of 먹다?", options: ["먹이다", "먹히다", "먹어지다", "먹게 되다"], answer: "먹이다" },

    // Indirect speech (3)
    { id: "ko-lt-b2-4", level: "B2", prompt: "Which ending reports a declarative statement (indirect speech)?", options: ["-다고 하다", "-냐고 하다", "-(으)라고 하다", "-자고 하다"], answer: "-다고 하다" },
    { id: "ko-lt-b2-5", level: "B2", prompt: "How do you report a command 'Eat' (먹어라)?", options: ["먹으라고 했어요.", "먹는다고 했어요.", "먹냐고 했어요.", "먹자고 했어요."], answer: "먹으라고 했어요." },
    { id: "ko-lt-b2-6", level: "B2", prompt: "How do you report 'She asked where he was going'?", options: ["어디에 가냐고 물었어요.", "어디에 간다고 말했어요.", "어디에 가라고 했어요.", "어디에 갔다고 했어요."], answer: "어디에 가냐고 물었어요." },

    // Advanced connectors (2)
    { id: "ko-lt-b2-7", level: "B2", prompt: "Which connector means 'the more...the more'?", options: ["-ㄹ/을수록", "-자마자", "-는데도", "-더라도"], answer: "-ㄹ/을수록" },
    { id: "ko-lt-b2-8", level: "B2", prompt: "-더라도 expresses:", options: ["Hypothetical concession (even if)", "Definite contrast (but)", "Sequential action (as soon as)", "Cause and result"], answer: "Hypothetical concession (even if)" },

    // Formal register (2)
    { id: "ko-lt-b2-9", level: "B2", prompt: "Which is the formal polite present of 있다?", options: ["있습니다", "있어요", "있겠어요", "있었어요"], answer: "있습니다" },
    { id: "ko-lt-b2-10", level: "B2", prompt: "In which context is -ㅂ니다/-습니다 most appropriate?", options: ["A business presentation", "A text to a close friend", "A diary entry", "A casual café conversation"], answer: "A business presentation" },

    // Regret / wishes (2)
    { id: "ko-lt-b2-11", level: "B2", prompt: "Which structure expresses a wish?", options: ["-았/었으면 좋겠다", "-(으)ㄹ걸 그랬다", "-지 않았더라면", "-더라도"], answer: "-았/었으면 좋겠다" },
    { id: "ko-lt-b2-12", level: "B2", prompt: "Complete: '더 열심히 공부___ 그랬어요.' (I should have studied harder)", options: ["할걸", "하면", "했더라면", "하는데도"], answer: "할걸" },

    // B2 vocabulary (3)
    { id: "ko-lt-b2-13", level: "B2", prompt: "What does '불평등' mean?", options: ["Corruption", "Inequality", "Democracy", "Sovereignty"], answer: "Inequality" },
    { id: "ko-lt-b2-14", level: "B2", prompt: "What does '생태계' mean?", options: ["Biodiversity", "Renewable energy", "Ecosystem", "Deforestation"], answer: "Ecosystem" },
    { id: "ko-lt-b2-15", level: "B2", prompt: "What does '후회' mean?", options: ["Empathy", "Nostalgia", "Resilience", "Regret"], answer: "Regret" }
]
