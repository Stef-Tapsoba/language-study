import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
    // ── Unit 13: -(으)시- honorifics ──────────────────────────────────────────
    {
        id: "ko-g-a2-13",
        level: "A2",
        title: "선생님께서 오셨어요 — Subject honorifics with -(으)시-",
        explanation: "-(으)시- is an infix inserted between the verb stem and the ending. It signals that the SUBJECT of the sentence is a respected person (elder, teacher, boss, customer). It does not change the verb's meaning — it elevates the social register. Several verbs have completely irregular honorific forms that must be memorised: 드시다 (eat/drink), 계시다 (be/location), 주무시다 (sleep), 말씀하시다 (speak).",
        rules: [
            {
                condition: "Regular -(으)시- formation",
                result: "Vowel/ㄹ stem + -시 | Consonant stem + -으시 | Then add normal ending: 세요 (present), 셨어요 (past), 실 거예요 (future)",
                examples: [
                    { native: "선생님이 오셨어요.", romanized: "Seonsaengnimi osyeosseoyo.", translation: "The teacher came." },
                    { native: "어디 가세요?", romanized: "Eodi gaseyo?", translation: "Where are you going? (to an elder)" },
                    { native: "교수님이 읽으세요.", romanized: "Gyosunimi ilgeuseyo.", translation: "The professor is reading." },
                ]
            },
            {
                condition: "Irregular honorific verbs — MUST BE MEMORISED",
                result: "These cannot be derived from regular -(으)시- rules",
                examples: [
                    { native: "아버지, 식사 드셨어요?", romanized: "Abeoji, siksa deuasyeosseoyo?", translation: "Dad, have you eaten?", annotation: "NOT 먹었어요"},
                    { native: "어머니께서 거실에 계세요.", romanized: "Eomeoni-kke geosire gyeseyo.", translation: "Mother is in the living room.", annotation: "NOT 있어요"},
                    { native: "잘 주무셨어요?", romanized: "Jal jumusyeosseoyo?", translation: "Did you sleep well?", annotation: "NOT 잤어요"},
                    { native: "선생님, 다시 말씀해 주세요.", romanized: "Seonsaengnim, dasi malsseum-hae juseyo.", translation: "Teacher, please say it again.", annotation: "NOT 말해"},
                ]
            },
        ],
        notes: [
            {
                type: "warning",
                content: "있다 splits into two honorifics: 있다 for LOCATION → 계시다 (Teacher, are you in your office? → 계세요?). 있다 for POSSESSION → 있으세요 (Teacher, do you have time? → 있으세요?). This is the #1 source of confusion."
            },
            {
                type: "warning",
                content: "NEVER use 죽었어요 about a respected person. Always use 돌아가셨어요 (passed away). Using 죽다 about an elder is genuinely hurtful. This is the highest-stakes single item in this unit."
            },
            {
                type: "tip",
                content: "Irregular honorific verb table: 먹다/마시다 → 드시다, 있다(location) → 계시다, 없다(location) → 안 계시다, 자다 → 주무시다, 말하다 → 말씀하시다, 아프다 → 편찮으시다, 죽다 → 돌아가시다."
            },
            {
                type: "tip",
                content: "Honorific nouns: 이름 → 성함, 나이 → 연세, 집 → 댁, 밥/식사 → 진지(very formal). Also: 여쭤보다 = honorific of 물어보다 (to ask)."
            },
        ],
        examples: [
            { native: "할머니께서 요즘 편찮으세요.", romanized: "Halmeoni-kkeseo yojeum pyeonchaneuseoyo.", translation: "Grandmother has been unwell lately." },
            { native: "교수님, 지금 연구실에 계세요?", romanized: "Gyosunim, jigeum yeon-gusire gyeseyo?", translation: "Professor, are you in your office now?" },
            { native: "선생님께서 뭐라고 말씀하셨어요?", romanized: "Seonsaengnim-kkeseo mworagо malsseum-hasyeosseoyo?", translation: "What did the teacher say?" },
            { native: "할머니께서 작년에 돌아가셨어요.", romanized: "Halmeoni-kkeseo jaknyeone doragasyeosseoyo.", translation: "Grandmother passed away last year." },
            { native: "연세가 어떻게 되세요?", romanized: "Yeonsega eotteoke doeseyo?", translation: "How old are you? (to an elder)" },
        ],
    },

    // ── Unit 14: 은/는 vs 이/가 ──────────────────────────────────────────────
    {
        id: "ko-g-a2-14",
        level: "A2",
        title: "이건 제 거예요 — 은/는 vs 이/가: topic vs subject",
        explanation: "You have been using both particles in chunks since A1 — and you've been right most of the time. This lesson explains the underlying logic. 은/는 marks what the sentence IS ABOUT (topic) or signals CONTRAST. 이/가 marks the grammatical subject when introducing NEW information or IDENTIFYING specifically who/what. After 있다/없다/좋다/싫다: use 이/가 for simple statements. In answer to 누가/뭐가 questions: use 이/가.",
        rules: [
            {
                condition: "은/는: topic (what the sentence is about) and contrast",
                result: "After consonant: 은 | After vowel: 는",
                examples: [
                    { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "As for me, I am a student." },
                    { native: "오늘은 갈 수 있어요.", romanized: "Oneureun gal su isseoyo.", translation: "Today (at least) I can go. (contrast with other days implied)" },
                    { native: "이건 알아요. 저건 몰라요.", romanized: "Igeon arayo. Jeogeon mollayo.", translation: "This I know. That I don't. (explicit contrast)" },
                ]
            },
            {
                condition: "이/가: new information introduced and subject identification (who specifically?)",
                result: "After consonant: 이 | After vowel: 가",
                examples: [
                    { native: "어제 친구가 왔어요.", romanized: "Eoje chinguga wasseoyo.", translation: "A friend came yesterday. (friend = new info)" },
                    { native: "제가 했어요.", romanized: "Jega haesseoyo.", translation: "I did it. (specifically me, identifying who)" },
                    { native: "뭐가 맛있어요?", romanized: "Mwoga massisseoyo?", translation: "What is delicious?" },
                ]
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The 'famous pair': 제가 할게요 (I'll do it — me specifically, decisive) vs 저는 할게요 (I'll do it — I, as for me, possibly with contrast). Both are natural; 이/가 is more emphatic identification."
            },
            {
                type: "tip",
                content: "Reliable rule: After 있다/없다, 좋다/싫다, 필요하다 in simple statements → use 이/가 on the thing. 고양이가 있어요. 시간이 없어요. 물이 필요해요."
            },
            {
                type: "tip",
                content: "Native Korean speakers operate on feel for this distinction — even they can't always explain it analytically. Focus on the two clear rules (topic/contrast vs new info/identification) and develop feel through listening practice."
            },
        ],
        examples: [
            { native: "한국어는 어려워요.", romanized: "Hangugeo-neun eoryeowoyo.", translation: "Korean — it's difficult. (Korean is the topic)" },
            { native: "갑자기 비가 왔어요.", romanized: "Gapjagi bi-ga wasseoyo.", translation: "It suddenly started raining. (rain is new info)" },
            { native: "누가 했어요? — 제가 했어요.", romanized: "Nuga haesseoyo? — Jega haesseoyo.", translation: "Who did it? — I did.", annotation: "이/가 in question and answer"},
            { native: "저는 커피를 마셔요.", romanized: "Jeoneun keopi-reul masyeoyo.", translation: "I drink coffee. (implied: but maybe not others)" },
            { native: "고양이가 있어요.", romanized: "Goyangi isseoyo.", translation: "There is a cat.", annotation: "pure existence — 이/가"},
        ],
    },

    // ── Unit 15: Indirect speech ──────────────────────────────────────────────
    {
        id: "ko-g-a2-15",
        level: "A2",
        title: "뭐라고 했어요? — Indirect speech (reporting what others said)",
        explanation: "Korean has four indirect speech patterns depending on the type of original utterance. (1) -다고 하다: reporting a statement (verb/adjective). (2) -(이)라고 하다: reporting a noun/copula statement. (3) -(으)라고 하다: reporting an imperative (told to do). (4) -냐고 하다/-냐고 묻다: reporting a question (asked). In spoken Korean, these contract: -다고 해요 → -대요, -(이)라고 해요 → -(이)래요.",
        rules: [
            {
                condition: "Statement — saying/claiming something (action verb in present)",
                result: "Verb base (plain form) + -다고 했어요 / -(이)라고 했어요 for nouns",
                examples: [
                    { native: "친구가 내일 온다고 했어요.", romanized: "Chinguga naeil ondago haesseoyo.", translation: "My friend said they're coming tomorrow." },
                    { native: "이 식당이 유명하다고 해요.", romanized: "I sikdangi yumyeonghada-go haeyo.", translation: "They say this restaurant is famous." },
                    { native: "학생이라고 했어요.", romanized: "Haksaengirago haesseoyo.", translation: "They said they're a student." },
                ]
            },
            {
                condition: "Imperative — telling someone to do something",
                result: "Vowel stem + -라고 했어요 / Consonant stem + -으라고 했어요",
                examples: [
                    { native: "선생님이 빨리 오라고 했어요.", romanized: "Seonsaengnimi ppalli orago haesseoyo.", translation: "The teacher told me to come quickly." },
                    { native: "의사가 쉬라고 했어요.", romanized: "Uisaga swirago haesseoyo.", translation: "The doctor told me to rest." },
                    { native: "어머니가 밥을 먹으라고 했어요.", romanized: "Eomeoni-ga bab-eul meogeurago haesseoyo.", translation: "My mother told me to eat." },
                ]
            },
            {
                condition: "Question — reporting what someone asked",
                result: "Verb base + -냐고 했어요 / -냐고 물었어요",
                examples: [
                    { native: "어디 가냐고 물었어요.", romanized: "Eodi ganyago mureosseoyo.", translation: "They asked where I was going." },
                    { native: "학생이냐고 했어요.", romanized: "Haksaenginyago haesseoyo.", translation: "They asked if I was a student." },
                    { native: "밥 먹었냐고 했어요.", romanized: "Bap meogeonnnyago haesseoyo.", translation: "They asked if I had eaten." },
                ]
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Contracted spoken forms (recognition level at A2, production at B1): -다고 해요 → -대요 (내일 비가 온대요 = They say it'll rain tomorrow). -(으)라고 해요 → -(으)래요 (빨리 오래요 = They say to come quickly). -냐고 해요 → -냬요."
            },
            {
                type: "tip",
                content: "Echo questions with -고요?: 온다고요? = 'They said they're coming? (confirming)'. 내일이라고요? = 'Tomorrow? (mild surprise)'. These are used constantly for clarification and active listening."
            },
            {
                type: "warning",
                content: "In reported statements, present action verbs use the plain declarative base before -다고: 가요 → 간다고 (NOT 가다고). 먹어요 → 먹는다고. Past: 갔어요 → 갔다고. Future: 갈 거예요 → 갈 거라고."
            },
            {
                type: "tip",
                content: "뭐라고요? (mworagyo?) = 'Pardon? / What did you say?' — extremely high frequency clarification phrase. Always useful."
            },
        ],
        examples: [
            { native: "비가 온다고 해요.", romanized: "Bi-ga ondago haeyo.", translation: "They say it's going to rain." },
            { native: "친구가 기다리라고 했어요.", romanized: "Chinguga gidarirago haesseoyo.", translation: "My friend told me to wait." },
            { native: "뭐가 좋냐고 물어봤어요.", romanized: "Mwoga jotnnyago mureobwasseoyo.", translation: "They asked what I liked." },
            { native: "8시쯤이라고 했어요.", romanized: "Yeodeolsijeumirago haesseoyo.", translation: "They said around 8 o'clock." },
            { native: "일이 늦게 끝난다고 했어요.", romanized: "Iri neutge kkeunnaandago haesseoyo.", translation: "They said work is finishing late." },
        ],
    },
]
