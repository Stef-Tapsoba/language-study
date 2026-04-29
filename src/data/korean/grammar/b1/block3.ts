import { GrammarLesson } from "../../../../types"

export const block3Lessons: GrammarLesson[] = [
    // ── ko-g-b1-9 — Indirect speech: statements ─────────────────────────────
    {
        id: "ko-g-b1-9",
        level: "B1",
        title: "Indirect Speech (Statements): -다고 하다",
        explanation: {
            native: `The -다고 하다 system for reporting statements — the "social gossip grammar" of Korean.

💬 Why you need this: Without indirect speech, you can't relay what your Korean friends said, summarise news, or report messages. This is the core grammar of Korean social communication.

Statement endings by tense:
| Original | Indirect form | Example |
| Present (action verb) | -는다고 하다 | 먹어요 → 먹는다고 해요 |
| Present (adj/state) | -다고 하다 | 바빠요 → 바쁘다고 해요 |
| Past | -았/었다고 하다 | 갔어요 → 갔다고 해요 |
| Future -(으)ㄹ 거예요 | -(으)ㄹ 거라고 하다 | 갈 거예요 → 갈 거라고 해요 |
| Noun + 이다 | -(이)라고 하다 | 학생이에요 → 학생이라고 해요 |

Verb present → -(ㄴ/는)다고: action verbs use -는다고 (consonant final) or -ㄴ다고 (vowel final):
먹다 → 먹는다고 / 가다 → 간다고 / 자다 → 잔다고

High-frequency reporting patterns:
-다고 했어요 (said that) / -다고 들었어요 (I heard that) / -다고 했잖아요 (you said..., didn't you?) / -다고 생각해요 (I think that)

Korean tense backshift is less strict than European languages — the original time reference is often kept if context is clear.`,
            target: `-다고 하다 시스템으로 진술 간접화법 — 한국어 사교의 핵심 문법

시제별 어미:
현재 동작동사: -는다고 하다 (먹는다고 해요)
현재 상태동사/형용사: -다고 하다 (바쁘다고 해요)
과거: -았/었다고 하다 (갔다고 해요)
미래: -(으)ㄹ 거라고 하다 (갈 거라고 해요)
명사 + 이다: -(이)라고 하다 (학생이라고 해요)

고빈도 패턴:
-다고 들었어요 / -다고 했잖아요 / -다고 생각해요`,
        },
        examples: [
            { native: "민호 씨가 오늘 바쁘다고 했어요.", romanized: "Minho ssi ga oneul bappeudago haesseoyo.", translation: "Minho said he's busy today." },
            { native: "다음 주에 결혼할 거라고 들었어요!", romanized: "Daeum jue gyeolhonhal georago deureosseoyo!", translation: "I heard they're getting married next week!" },
            { native: "프로젝트가 거의 끝났다고 했던 것 같아요.", romanized: "Peurojekteu ga georui kkeunnatdago haetteon geot gatayo.", translation: "I think they said the project is almost done." },
            { native: "내일 온다고 했잖아요! 왜 안 와요?", romanized: "Naeil ondago haetjanayo! Wae an wayo?", translation: "You said you'd come tomorrow! Why aren't you coming?" },
        ],
    },

    // ── ko-g-b1-10 — Indirect speech: commands, suggestions, questions ───────
    {
        id: "ko-g-b1-10",
        level: "B1",
        title: "Indirect Speech: Commands, Suggestions, Questions",
        explanation: {
            native: `Completing the indirect speech system — commands, suggestions, and questions.

-(으)라고 하다 (reported commands and requests):
"앉으세요." → 앉으라고 했어요. (They told me to sit down.)
"문을 닫아 주세요." → 문을 닫아달라고 했어요. (They asked me to close the door.)
"늦지 마세요." → 늦지 말라고 했어요. (They told me not to be late.)
Formation: command/request base → -(으)라고 하다. Negative: -지 말라고 하다.

-자고 하다 (reported suggestions — "let's"):
"같이 가자." → 같이 가자고 했어요. (They suggested going together.)
"빨리 시작하자." → 빨리 시작하자고 했어요. (They suggested starting quickly.)

-(으)냐고 하다 / 묻다 (reported questions):
Yes/no: 배 고파요? → 배 고프냐고 물었어요. (They asked if I was hungry.)
Wh-questions (keep the question word): 어디 가요? → 어디 가냐고 물었어요. (They asked where I was going.) / 왜 늦었어요? → 왜 늦었냐고 물었어요.
Simplified: -냐고 works for most question types in everyday speech.

Complete system summary:
Statement → -다고 하다 / Command → -(으)라고 하다 / Suggestion → -자고 하다 / Question → -냐고 묻다`,
            target: `간접화법 시스템 완성 — 명령, 제안, 의문

-(으)라고 하다 (보고된 명령/요청):
오라고 했어요 / 닫아달라고 했어요 / 늦지 말라고 했어요

-자고 하다 (보고된 제안 — 청유형):
가자고 했어요 / 시작하자고 했어요

-냐고 묻다 (보고된 질문):
예/아니오: 배 고프냐고 물었어요
의문사 질문: 어디 가냐고 물었어요 / 왜 늦었냐고 물었어요

전체 시스템: 진술 → 다고 / 명령 → 라고 / 제안 → 자고 / 질문 → 냐고`,
        },
        examples: [
            { native: "팀장님이 내일까지 보고서를 제출하라고 했어요.", romanized: "Timjangnimge naeilkkaji bogoseoreul jechulharagohaesseoyo.", translation: "The team leader told us to submit the report by tomorrow." },
            { native: "친구가 같이 점심 먹자고 했는데 바쁠 것 같아요.", romanized: "Chinguga gachi jeomsim meokjago haennde bappeul geot gatayo.", translation: "My friend suggested eating lunch together, but I think I'll be busy." },
            { native: "왜 늦었냐고 물어봤어요. 뭐라고 했어요?", romanized: "Wae neujeotnyago mureobwasseoyo. Mworago haesseoyo?", translation: "I asked why they were late. What did they say?" },
            { native: "어디 가냐고 물어봐도 돼요?", romanized: "Eodi ganyago mureobwado dwaeyo?", translation: "May I ask where you're going?" },
        ],
    },

    // ── ko-g-b1-11 — Noun modifiers B1 level ────────────────────────────────
    {
        id: "ko-g-b1-11",
        level: "B1",
        title: "Noun Modifiers B1: -(으)ㄹ + 명사, 반면에, 편이다",
        explanation: {
            native: `B1 expands noun modification to complex contexts and new constructions.

Review: the modifier system
Present action: -는 (가는 사람) / Past/completed: -(으)ㄴ (간 사람 / 예쁜 꽃) / Future/uncertain: -(으)ㄹ (갈 사람)

Future modifier -(으)ㄹ in B1 — used with 것/때/곳/사람:
-(으)ㄹ 것: 내일 할 것들이 너무 많아요. / 먹을 것 좀 사야 해요.
-(으)ㄹ 때: 필요할 때 연락하세요. / 졸업할 때 파티를 할 거예요.
-(으)ㄹ 곳: 공부할 곳을 찾고 있어요. / 여행할 곳을 정했어요?
-(으)ㄹ 사람: 이걸 도와줄 사람이 필요해요. / 같이 갈 사람 있어요?

-(으)ㄴ/는 반면에 (whereas / on the other hand):
가격이 비싼 반면에 품질이 좋아요. (The price is high, whereas the quality is good.)
한국어는 어려운 반면에 보람이 있어요. (Korean is difficult, whereas it's rewarding.)

-(으)ㄴ/는 편이다 (tend to / rather — softened statement):
저는 내향적인 편이에요. (I tend to be introverted.)
이 식당은 좀 비싼 편이에요. (This restaurant is rather expensive.)
This is a key Korean softener — expresses a tendency rather than an absolute assertion.`,
            target: `B1은 명사 수식을 복잡한 맥락과 새로운 구조로 확장합니다.

복습: -(으)ㄴ(과거/상태) / -는(현재 동작) / -(으)ㄹ(미래/불확실)

-(으)ㄹ + 것/때/곳/사람:
먹을 것 / 필요할 때 / 공부할 곳 / 도와줄 사람

-(으)ㄴ/는 반면에 (반면):
가격이 비싼 반면에 품질이 좋아요 — 대조 표현

-(으)ㄴ/는 편이다 (경향):
내향적인 편이에요 / 비싼 편이에요 — 절대적 주장이 아닌 경향을 나타내는 완화 표현`,
        },
        examples: [
            { native: "내일 할 것들이 너무 많아서 오늘 좀 준비해야 해요.", romanized: "Naeil hal geotdeuri neomu manhaseo oneul jom junbihaeya haeyo.", translation: "There are too many things to do tomorrow, so I need to prepare a bit today." },
            { native: "이 일은 어려운 반면에 배우는 게 많아요.", romanized: "I ireun eoryeoun banmyeone baeuneun ge manayo.", translation: "This work is difficult, whereas there's a lot to learn." },
            { native: "저는 아침에 좀 느린 편이에요.", romanized: "Jeoneun achime jom neurin pyeonieyo.", translation: "I tend to be a bit slow in the mornings." },
            { native: "같이 여행할 사람을 찾고 있어요!", romanized: "Gachi yeohaenghal sarameul chatgo isseoyo!", translation: "I'm looking for someone to travel with!" },
        ],
    },

    // ── ko-g-b1-12 — B1 discourse connectors ────────────────────────────────
    {
        id: "ko-g-b1-12",
        level: "B1",
        title: "B1 Discourse Connectors: 따라서, 반면에, 오히려, 게다가, 그럼에도",
        explanation: {
            native: `The difference between A2 and B1 Korean is partly connector precision. These markers allow organised, register-appropriate argumentation.

Consequence (result/conclusion):
따라서 (therefore — formal/written): 증거가 없어요. 따라서 결론을 내릴 수 없어요.
결국 (in the end — neutral): 매일 연습했어요. 결국 실력이 늘었어요.
그러다 보니 (as a result of that — spoken): 자꾸 미루다 보니 그러다 보니 쌓였어요.

Contrast and concession:
반면에 (on the other hand — neutral): 가격이 비싸요. 반면에 품질은 좋아요.
오히려 (on the contrary / rather): 도움이 되려고 했는데 오히려 방해가 됐어요.
그럼에도 불구하고 (despite this — formal): 힘들었어요. 그럼에도 불구하고 포기하지 않았어요.

Elaboration:
게다가 (furthermore / on top of that): 비싸요. 게다가 품질도 나빠요.
뿐만 아니라 (not only...but also): 한국어 실력이 늘었어요. 뿐만 아니라 문화도 이해하게 됐어요.
말하자면 (so to speak / in other words): 말하자면, 더 나은 방법이 필요하다는 거죠.
다시 말해서 (in other words): 다시 말해서, 지금은 어렵다는 의미예요.

Structuring: 우선/먼저 (first of all) / 또한 (also) / 마지막으로 (finally) / 결론적으로 (in conclusion)`,
            target: `A2와 B1 한국어의 차이는 부분적으로 연결사의 정확성에 있습니다.

결과: 따라서(격식)/결국(중립)/그러다 보니(구어)
대조/양보: 반면에 / 오히려 / 그럼에도 불구하고
상술: 게다가 / 뿐만 아니라 / 말하자면 / 다시 말해서
구조화: 우선 / 또한 / 마지막으로 / 결론적으로`,
        },
        examples: [
            { native: "열심히 준비했어요. 따라서 좋은 결과를 기대해요.", romanized: "Yeolsimhi junbihaesseoyo. Ttaraseo joeun gyeolgwareul gidaehaeyo.", translation: "I prepared hard. Therefore, I expect good results." },
            { native: "도움이 되려고 했는데 오히려 방해가 됐어요.", romanized: "Doumi deoeryogo haennde ohiryeo banghae ga dwaesseoyo.", translation: "I tried to help, but it was rather a hindrance." },
            { native: "한국어가 늘었어요. 게다가 친구도 많이 생겼어요.", romanized: "Hangugeoga neureosseoyo. Gedaga chingudo mani saenggyeosseoyo.", translation: "My Korean improved. Furthermore, I made many friends too." },
            { native: "힘들었지만 그럼에도 불구하고 포기하지 않았어요.", romanized: "Himdeureotjiman geureomedo bulguhago pogihaji anasseoyo.", translation: "It was hard, but despite that I didn't give up." },
        ],
    },
]
