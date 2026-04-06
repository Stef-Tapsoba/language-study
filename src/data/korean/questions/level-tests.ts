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
    { id: "ko-lt-b2-15", level: "B2", prompt: "What does '후회' mean?", options: ["Empathy", "Nostalgia", "Resilience", "Regret"], answer: "Regret" },

    // ── C1 (15 questions) ────────────────────────────────────────────────────
    // Formal written structures (3)
    { id: "ko-lt-c1-1", level: "C1", prompt: "Which formal written connector means 'since / therefore' and is used in official documents and academic writing?", options: ["-(으)므로", "-아/어서", "-기 때문에", "-더라도"], answer: "-(으)므로" },
    { id: "ko-lt-c1-2", level: "C1", prompt: "What does '-는바' express in formal written Korean?", options: ["Given that / in that (introduces a premise before a conclusion)", "Even if / although (concessive)", "As soon as", "The more...the more"], answer: "Given that / in that (introduces a premise before a conclusion)" },
    { id: "ko-lt-c1-3", level: "C1", prompt: "In which register is '-(으)ㄹ지언정' primarily found?", options: ["Formal literary and written Korean only", "Casual everyday speech", "Children's educational materials", "Modern internet slang"], answer: "Formal literary and written Korean only" },

    // Advanced modality (2)
    { id: "ko-lt-c1-4", level: "C1", prompt: "What does '-(으)ㄹ 만하다' express?", options: ["Worth doing / deserves to be done", "Far from doing / let alone", "For someone in that category (surprisingly)", "Even if (hypothetical concession)"], answer: "Worth doing / deserves to be done" },
    { id: "ko-lt-c1-5", level: "C1", prompt: "Complete: '쉬___ 더 바빠졌다.' (Far from resting, I became even busier)", options: ["기는커녕", "기는 해도", "기는 하지만", "기 위해서"], answer: "기는커녕" },

    // Discourse cohesion (2)
    { id: "ko-lt-c1-6", level: "C1", prompt: "Which academic discourse connector means 'in other words / that is'?", options: ["즉", "나아가", "이에 따라", "오히려"], answer: "즉" },
    { id: "ko-lt-c1-7", level: "C1", prompt: "Which connector introduces an additional or stronger further point in academic writing?", options: ["나아가", "반면에", "이에 따라", "즉"], answer: "나아가" },

    // Classical forms (2)
    { id: "ko-lt-c1-8", level: "C1", prompt: "What does the literary ending '-노라' convey in classical Korean?", options: ["A literary first-person assertion or strong declaration", "A classical exclamation of admiration", "An archaic connective meaning 'since'", "A formal copula for citation"], answer: "A literary first-person assertion or strong declaration" },
    { id: "ko-lt-c1-9", level: "C1", prompt: "Complete the classical sentence: '아, 아름답___!' (literary exclamatory ending)", options: ["도다", "노라", "이라", "지니"], answer: "도다" },

    // 사자성어 meanings (2)
    { id: "ko-lt-c1-10", level: "C1", prompt: "What does '일석이조 (一石二鳥)' mean?", options: ["Killing two birds with one stone", "Reaping what you sow", "Heart-to-heart understanding without words", "Unfortunate coincidental timing"], answer: "Killing two birds with one stone" },
    { id: "ko-lt-c1-11", level: "C1", prompt: "Which 사자성어 describes 'reaping what one sows' or suffering the consequences of one's own actions?", options: ["자업자득 (自業自得)", "이심전심 (以心傳心)", "오비이락 (烏飛梨落)", "금상첨화 (錦上添花)"], answer: "자업자득 (自業自得)" },

    // C1 vocabulary (2)
    { id: "ko-lt-c1-12", level: "C1", prompt: "What does '인식론' mean?", options: ["Epistemology", "Ontology", "Metaphysics", "Utilitarianism"], answer: "Epistemology" },
    { id: "ko-lt-c1-13", level: "C1", prompt: "What does '인지부조화' mean?", options: ["Cognitive dissonance", "Confirmation bias", "Metacognition", "Self-efficacy"], answer: "Cognitive dissonance" },

    // Honorific verb forms (2)
    { id: "ko-lt-c1-14", level: "C1", prompt: "Which verb is the correct humble form to use when asking a question to a superior?", options: ["여쭙다", "묻다", "물어보다", "질문하다"], answer: "여쭙다" },
    { id: "ko-lt-c1-15", level: "C1", prompt: "What does '처음 뵙겠습니다' mean and which verb does it use?", options: ["Nice to meet you (humble verb 뵙다)", "I will give you something (honorific verb 드리다)", "I will ask you (humble verb 여쭙다)", "Goodbye (farewell expression)"], answer: "Nice to meet you (humble verb 뵙다)" },

    // ── A2 additions ─────────────────────────────────────────────────────────
    {
        id: "ko-lt-a2-16", level: "A2",
        prompt: "Complete: '배가 고파___ 밥을 먹었어요.' (I was hungry so I ate)",
        options: ["지만", "서", "고", "면"],
        answer: "서",
        hint: "고프다 → 고파서 (because/so). -아/어서 expresses cause. Note: tense only on the final verb."
    },
    {
        id: "ko-lt-a2-17", level: "A2",
        prompt: "How do you say 'This bag is more expensive than that bag'?",
        options: ["이 가방은 저 가방보다 더 비싸요.", "이 가방은 저 가방이 더 비싸요.", "이 가방보다 저 가방은 더 비싸요.", "이 가방은 저 가방에서 더 비싸요."],
        answer: "이 가방은 저 가방보다 더 비싸요.",
        hint: "[standard]보다 [subject] 더 [adjective]. 보다 marks the comparison point."
    },
    {
        id: "ko-lt-a2-18", level: "A2",
        prompt: "What does '것 같아요' add to a sentence?",
        options: ["It expresses obligation", "It expresses a soft opinion or inference — I think / it seems", "It expresses ability", "It expresses a past experience"],
        answer: "It expresses a soft opinion or inference — I think / it seems",
        hint: "〜것 같아요 = I think / it seems. A polite, hedged opinion expression."
    },
    {
        id: "ko-lt-a2-19", level: "A2",
        prompt: "How do you say 'I went to the pharmacy to buy medicine'?",
        options: ["약국에 약을 사서 갔어요.", "약국에 약을 사러 갔어요.", "약국에 약이 사고 갔어요.", "약국에서 약을 사러 갔어요."],
        answer: "약국에 약을 사러 갔어요.",
        hint: "Purpose with movement: ~(으)러 가다. 사다 → 사러 갔어요 (went in order to buy)."
    },
    {
        id: "ko-lt-a2-20", level: "A2",
        prompt: "What does '생일 축하해요' mean?",
        options: ["Happy New Year", "Congratulations on your graduation", "Happy birthday", "I miss you"],
        answer: "Happy birthday",
        hint: "생일 = birthday, 축하하다 = to congratulate/celebrate. Together: Happy birthday!"
    },

    // ── B1 additions ─────────────────────────────────────────────────────────
    {
        id: "ko-lt-b1-16", level: "B1",
        prompt: "Transform to reported speech: '바빠요.' → He said he was busy. → 바쁘___ 했어요.",
        options: ["다고", "라고", "냐고", "자고"],
        answer: "다고",
        hint: "Statements use ~(ㄴ/는)다고 하다. 바쁘다 → 바쁘다고 했어요."
    },
    {
        id: "ko-lt-b1-17", level: "B1",
        prompt: "How do you say 'I have to submit this report today'?",
        options: ["이 보고서를 오늘 제출하고 싶어요.", "이 보고서를 오늘 제출할 수 있어요.", "이 보고서를 오늘 제출해야 해요.", "이 보고서를 오늘 제출해 봐요."],
        answer: "이 보고서를 오늘 제출해야 해요.",
        hint: "~아/어야 하다 = must / have to. 제출하다 → 제출해야 해요."
    },
    {
        id: "ko-lt-b1-18", level: "B1",
        prompt: "How do you say 'Learning Korean is interesting'? (nominalisation as subject)",
        options: ["한국어가 재미있어요.", "한국어를 배우는 것이 재미있어요.", "한국어를 배우기 재미있어요.", "한국어 배우는 재미있어요."],
        answer: "한국어를 배우는 것이 재미있어요.",
        hint: "~는 것 = the act of / nominalised verb as subject. 배우는 것이 = learning is."
    },
    {
        id: "ko-lt-b1-19", level: "B1",
        prompt: "Which connector is more appropriate in a formal essay for 'because'?",
        options: ["~아/어서", "-기 때문에", "-고", "-지만"],
        answer: "-기 때문에",
        hint: "-기 때문에 is formal and objective. ~아/어서 is conversational. Using 아/어서 in a formal essay sounds too casual."
    },
    {
        id: "ko-lt-b1-20", level: "B1",
        prompt: "Complete: '운동하___ 시작했어요.' (I started exercising)",
        options: ["기", "는 것을", "아서", "러"],
        answer: "기",
        hint: "~기 시작하다 = to start doing. 운동하기 시작했어요 = started exercising."
    },

    // --- B1 additions (ko-lt-b1-21 through ko-lt-b1-25) — new grammar lessons ---
    {
        id: "ko-lt-b1-21", level: "B1",
        prompt: "Complete: '오늘 비가 ___ 것 같아요.' (future supposition: it will/might rain)",
        options: ["오는", "온", "올", "와서"],
        answer: "올",
        hint: "Future supposition → ~ㄹ/을 것 같다. 오다 → vowel stem → ~ㄹ 것 같다 → 올 것 같아요."
    },
    {
        id: "ko-lt-b1-22", level: "B1",
        prompt: "What does '한국어가 점점 쉬워지고 있어요' mean?",
        options: ["Korean is very easy", "Korean is getting easier gradually", "I want Korean to become easier", "Korean used to be easier"],
        answer: "Korean is getting easier gradually",
        hint: "쉬워지다 = ~아/어지다 attached to 쉽다 (easy) = become/get easier. 점점 = gradually."
    },
    {
        id: "ko-lt-b1-23", level: "B1",
        prompt: "Complete: '내년에 한국에 ___ 했어요.' (decided to go — ~기로 하다)",
        options: ["가기로", "가서", "가려고", "가면"],
        answer: "가기로",
        hint: "~기로 하다 = decided to do. 가다 → 가기로 했어요 = I decided to go."
    },
    {
        id: "ko-lt-b1-24", level: "B1",
        prompt: "Complete: '어디에 ___ 알아요?' (Do you know where it is?)",
        options: ["있는지", "있어서", "있으면", "있지만"],
        answer: "있는지",
        hint: "Embedded question: 어디에 있는지 = where it is (indirect question). Action verb present → ~는지."
    },
    {
        id: "ko-lt-b1-25", level: "B1",
        prompt: "What is the passive (피동) form of '닫다' (to close)?",
        options: ["닫이다", "닫히다", "닫리다", "닫기다"],
        answer: "닫히다",
        hint: "닫다 → 닫히다 (~히 passive). Common passives must be memorised: 닫다→닫히다, 팔다→팔리다, 보다→보이다."
    },

    // ── B2 additions ─────────────────────────────────────────────────────────
    {
        id: "ko-lt-b2-16", level: "B2",
        prompt: "How do you say 'I have no choice but to accept this'?",
        options: ["이것을 받아야 해요.", "이것을 받고 싶어요.", "이것을 받을 수밖에 없어요.", "이것을 받을 수 있어요."],
        answer: "이것을 받을 수밖에 없어요.",
        hint: "수밖에 없다 = there is no choice but to. 받다 → 받을 수밖에 없어요."
    },
    {
        id: "ko-lt-b2-17", level: "B2",
        prompt: "What is the honorific noun for 나이 (age)?",
        options: ["나이님", "연세", "나이어른", "나이분"],
        answer: "연세",
        hint: "연세 is the honorific noun for 나이. 연세가 어떻게 되세요? = How old are you? (respectful)"
    },
    {
        id: "ko-lt-b2-18", level: "B2",
        prompt: "Complete: '결과가 나쁠___ 최선을 다해야 합니다.' (even if the result is bad — formal)",
        options: ["지만", "서", "지라도", "면"],
        answer: "지라도",
        hint: "~(으)ㄹ지라도 = even if (formal/literary concessive). More formal than ~더라도."
    },
    {
        id: "ko-lt-b2-19", level: "B2",
        prompt: "What does '반면에' signal in formal writing?",
        options: ["therefore", "on the other hand / whereas", "furthermore", "in other words"],
        answer: "on the other hand / whereas",
        hint: "반면에 = on the other hand / whereas. Formal written contrast marker used in essays and reports."
    },
    {
        id: "ko-lt-b2-20", level: "B2",
        prompt: "Which particle marks the recipient of a humble verb when giving to a superior?",
        options: ["에게", "한테", "께", "로"],
        answer: "께",
        hint: "께 = to a respected person (honorific dative). 선생님께 드렸어요 = I gave it to the teacher (respectfully)."
    },

    // ── C1 additions ─────────────────────────────────────────────────────────
    {
        id: "ko-lt-c1-16", level: "C1",
        prompt: "What does -(으)ㄹ 만하다 express?",
        options: ["far from doing / let alone", "worth doing / deserves to be done", "inevitable / no choice but", "even if / hypothetical concession"],
        answer: "worth doing / deserves to be done",
        hint: "-(으)ㄹ 만하다 = worth doing. 볼 만해요 = it's worth watching / it deserves to be seen."
    },
    {
        id: "ko-lt-c1-17", level: "C1",
        prompt: "Complete: '쉬___ 더 바빠졌어요.' (Far from resting, I got busier)",
        options: ["기는커녕", "기 때문에", "기 전에", "기 위해서"],
        answer: "기는커녕",
        hint: "-기는커녕 = far from doing ~ / let alone. 쉬기는커녕 = far from resting."
    },
    {
        id: "ko-lt-c1-18", level: "C1",
        prompt: "How do you ask 'What is your name?' using the correct humble verb to ask a superior?",
        options: ["이름이 뭐예요?", "성함이 어떻게 되세요?", "이름을 여쭤봐도 될까요?", "성함을 여쭤봐도 될까요?"],
        answer: "성함을 여쭤봐도 될까요?",
        hint: "Full C1 honorific: 성함 (honorific noun for 이름) + 여쭙다 (humble verb for 묻다). Both required."
    },
    {
        id: "ko-lt-c1-19", level: "C1",
        prompt: "What does '-는바' express in formal written Korean?",
        options: ["sequential action", "given that / in that (introduces a premise before a conclusion)", "even if / concession", "as soon as"],
        answer: "given that / in that (introduces a premise before a conclusion)",
        hint: "-는바 = given that / in that. Used in formal documents and academic writing to introduce a premise."
    },
    {
        id: "ko-lt-c1-20", level: "C1",
        prompt: "What is the C1 benchmark for Korean honorific mastery?",
        options: [
            "Using -요 on all sentence-final verbs",
            "Using -습니다 in all situations",
            "Seamless speech level switching throughout an interaction as social roles shift, without hesitation",
            "Memorising all honorific nouns"
        ],
        answer: "Seamless speech level switching throughout an interaction as social roles shift, without hesitation",
        hint: "C1 Korean: fluid, real-time register adjustment as social dynamics shift within one conversation — the defining C1 milestone."
    },
]
