import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
    // ── ko-g-b1-5 — -도록 / -(으)려고 하다 / -기 위해서 ──────────────────────
    {
        id: "ko-g-b1-5",
        level: "B1",
        title: "-도록 / -(으)려고 하다 / -기 위해서: Purpose and Intention",
        explanation: {
            native: `Three ways to express purpose and intention — each with different nuance and register:

-(으)려고 하다 (intend to / be about to — already known from A2):
내일 서울에 가려고 해요. (I intend to go to Seoul tomorrow.)
B1 upgrade — past: 가려고 했는데 못 갔어요. (I was going to go, but couldn't.)

-기 위해서 (in order to — formal/written):
건강을 지키기 위해서 운동해요. (I exercise in order to maintain health.)
More formal than -(으)려고. Used in essays, presentations, instructions.

-도록 (so that / until / make sure — versatile connector):
Three uses:
1. Purpose with different subjects: 모두가 들을 수 있도록 크게 말씀해 주세요. (Speak loudly so everyone can hear.)
2. Extent / until: 목이 아프도록 노래했어요. (I sang until my throat hurt.)
3. Formal instruction: 내일까지 제출하도록 하세요. (Please make sure to submit by tomorrow.)

Key distinction: -도록 focuses on the result/condition; -(으)려고/-기 위해서 focus on the actor's intention.`,
            target: `목적과 의도를 표현하는 세 가지 방법 — 각각 다른 뉘앙스와 격식 수준이 있습니다:

-(으)려고 하다 (A2에서 이미 학습):
의도 표현. B1 심화: 가려고 했는데 못 갔어요 (가려고 했는데 = was going to but couldn't)

-기 위해서 (격식체/문어체에서 '~하기 위해'):
공식 글쓰기, 발표, 지시문에서 더 일반적.

-도록 (다목적 연결어):
1. 다른 주어와 목적: 이해할 수 있도록 설명했어요.
2. 정도/~까지: 목이 아프도록 노래했어요.
3. 격식 지시: 제출하도록 하세요.`,
        },
        examples: [
            { native: "가려고 했는데 갑자기 일이 생겨서 못 갔어요.", romanized: "Garyeogo haennde gapjagi iri saenggyeoseo mot gasseoyo.", translation: "I was going to go, but something suddenly came up so I couldn't." },
            { native: "건강을 위해서 매일 운동하기로 했어요.", romanized: "Geongangeul wihae seo maeil undonghagiro haesseoyo.", translation: "I decided to exercise every day in order to maintain my health." },
            { native: "학생들이 이해할 수 있도록 천천히 설명해 주세요.", romanized: "Haksaengdeuri ihahal su itdorok cheoncheonhi seolmyeonghae juseyo.", translation: "Please explain slowly so that the students can understand." },
            { native: "지각하지 않도록 일찍 출발하세요.", romanized: "Jigakaji andorok iljjik chulbalaseyo.", translation: "Please leave early so as not to be late." },
        ],
    },

    // ── ko-g-b1-6 — 덕분에/때문에/탓에 + -아서 vs 니까 resolution ───────────
    {
        id: "ko-g-b1-6",
        level: "B1",
        title: "Cause & Reason: 덕분에 / 때문에 / 탓에 + -아서 vs -(으)니까",
        explanation: {
            native: `⚠️ Fossilisation alert: If you've been studying Korean for a while, you may have been using -아/어서 in places where -(으)니까 is required. The imperative test below will show you where.

-아/어서 vs -(으)니까 — THE DEFINITIVE RULE:
The imperative test: if the clause is followed by an imperative (command) or suggestion, use -(으)니까.
❌ 날씨가 좋아서 산책하자. ← ungrammatical with suggestion
✅ 날씨가 좋으니까 산책하자. (The weather is nice, so let's take a walk.)
✅ 맛있으니까 많이 드세요. (It's delicious, so please eat a lot.)
-아/어서 = objective cause/sequence ("and then") — cannot precede imperatives/suggestions.
-(으)니까 = subjective reason to justify action/request — used WITH imperatives/suggestions.

덕분에 / 때문에 / 탓에 — the positive/neutral/negative triad:
덕분에 (POSITIVE — thanks to): 선생님 덕분에 한국어를 잘 하게 됐어요.
때문에 (NEUTRAL — because of): 시험 때문에 스트레스 받아요. / 바쁘기 때문에 못 가요.
탓에 (NEGATIVE — due to, blame): 날씨 탓에 행사가 취소됐어요. / 제 실수 탓에 문제가 생겼어요.

-(으)로 인해서 (formal/written — due to): 교통사고로 인해 도로가 막혔어요.`,
            target: `⚠️ 화석화 경고: 한국어를 한동안 공부했다면, -(으)니까가 필요한 곳에서 -아/어서를 쓰고 있을 수 있습니다.

명령 테스트: 절 뒤에 명령이나 제안이 오면 -(으)니까를 써야 합니다.
❌ 날씨가 좋아서 산책하자. (비문)
✅ 날씨가 좋으니까 산책하자.

덕분에/때문에/탓에 — 긍정/중립/부정 3각:
덕분에: 선생님 덕분에 잘 됐어요 (긍정적 결과)
때문에: 비 때문에 못 갔어요 (중립)
탓에: 제 실수 탓에 실패했어요 (부정적 결과/책임)`,
        },
        examples: [
            { native: "날씨가 좋으니까 공원에 가요!", romanized: "Nalssiga joeuni gongwone gayo!", translation: "The weather is nice, so let's go to the park! (-(으)니까 before suggestion)" },
            { native: "좋은 선생님 덕분에 한국어 실력이 많이 늘었어요.", romanized: "Joeun seonsaengnim deokbune hangugeo sillyeogi mani neureosseoyo.", translation: "Thanks to a good teacher, my Korean has improved a lot." },
            { native: "비 때문에 행사가 취소됐어요.", romanized: "Bi ttaemune haengsaga chwisowaesseoyo.", translation: "The event was cancelled because of the rain." },
            { native: "제 실수 탓에 팀 전체가 피해를 봤어요.", romanized: "Je silsu tate tim jeonchega pihaereul bwasseoyo.", translation: "Because of my mistake, the whole team suffered." },
        ],
    },

    // ── ko-g-b1-7 — -더라도 / -아/어도 / -는 한 / -(으)ㄹ 수밖에 없다 ─────────
    {
        id: "ko-g-b1-7",
        level: "B1",
        title: "Concession & Inevitability: -더라도, 아무리 -아도, -는 한, 수밖에 없다",
        explanation: {
            native: `-아/어도 (even if / even though — already known):
바빠도 운동은 해야 해요. (Even if I'm busy, I need to exercise.)

아무리 + -아/어도 (no matter how — strong concession):
아무리 어려워도 할 수 있어요. (No matter how hard it is, you can do it.)
아무리 열심히 해도 한계가 있어요. (No matter how hard you try, there are limits.)

-더라도 (even if — stronger/hypothetical):
Stronger than -아/어도; often counterfactual or expressing firm commitment despite the condition.
비가 오더라도 갈 거예요. (Even if it rains — I'm going regardless. Stronger commitment than 비가 와도.)
아무리 힘들더라도 포기하면 안 돼요. (No matter how hard it gets, you mustn't give up.)

-는 한 / -(으)ㄴ 한 (as long as / as far as):
살아있는 한 포기하지 않을 거예요. (As long as I'm alive, I won't give up.)
내가 아는 한 (as far as I know) / 가능한 한 (as far as possible)

-(으)ㄹ 수밖에 없다 (have no choice but to — resigned pragmatism):
이해가 안 되면 다시 설명할 수밖에 없어요. (If not understood, there's no choice but to explain again.)
Very common in everyday Korean — "what can you do" tone.`,
            target: `-아/어도: 이미 학습 (A2)
아무리 + -아/어도: 아무리 바빠도, 아무리 어려워도 — "아무리"는 강조어

-더라도 (강한 가정적 양보):
비가 와도 갈 거예요 vs 비가 오더라도 갈 거예요 — 더라도가 더 강한 결심을 나타냄

-는 한 (한) (조건): 살아있는 한 / 내가 아는 한 / 가능한 한

-(으)ㄹ 수밖에 없다 (체념/어쩔 수 없음):
이렇게 되면 포기할 수밖에 없어요. — 매우 자연스러운 구어 표현`,
        },
        examples: [
            { native: "아무리 바쁘더라도 가족은 먼저예요.", romanized: "Amuri bappeudeorado gajogeum meonjeyeyo.", translation: "No matter how busy you are, family comes first." },
            { native: "가능한 한 빨리 연락해 드릴게요.", romanized: "Ganeunghan han ppalli yeollakhae deurilgeyo.", translation: "I'll contact you as soon as possible." },
            { native: "내가 아는 한 그 사람은 한국에 없어요.", romanized: "Naega aneun han geu sarameun Hanguge eopseoyo.", translation: "As far as I know, that person isn't in Korea." },
            { native: "이렇게 됐으니 어쩔 수밖에 없어요.", romanized: "Ireoke dwaesseo ni eojjeol subakke eopseoyo.", translation: "Now that things have turned out this way, there's nothing we can do." },
        ],
    },

    // ── ko-g-b1-8 — -(으)ㄹ수록 / 갈수록 ────────────────────────────────────
    {
        id: "ko-g-b1-8",
        level: "B1",
        title: "-(으)ㄹ수록 / 갈수록: The More...The More",
        explanation: {
            native: `-(으)ㄹ수록 = the more [condition], the more [result] — one of Korean's most elegant structures.

Formation: verb/adjective stem + -(으)ㄹ수록
할수록 / 클수록 / 먹을수록 / 어려울수록 / 많을수록 / 좋을수록

Pattern: [condition] -(으)ㄹ수록 + [proportional result]
공부할수록 실력이 늘어요. (The more you study, the better you get.)
알수록 더 궁금해져요. (The more I know, the more curious I become.)
비쌀수록 꼭 좋은 건 아니에요. (The more expensive, the better is not always true.)

Emphatic form — -(으)면 -(으)ㄹ수록:
생각하면 생각할수록 복잡해요. (The more I think about it, the more complicated it gets.)
먹으면 먹을수록 더 먹고 싶어요. (The more I eat, the more I want to eat.)

갈수록 (fixed — as time goes on / increasingly):
갈수록 좋아지고 있어요. (It's getting better and better.)
물가가 갈수록 높아지고 있어요. (Prices are going up more and more.)

Fixed expressions: 빠를수록 좋아요 (the sooner the better) / 많을수록 좋아요 (the more the better)`,
            target: `-(으)ㄹ수록 = "~할수록 더 ~해요" — 한국어에서 가장 우아한 구조 중 하나

형성: 동사/형용사 어간 + -(으)ㄹ수록
할수록 / 클수록 / 먹을수록 / 어려울수록

강조형: -(으)면 -(으)ㄹ수록
생각하면 생각할수록 복잡해요 / 하면 할수록 늘어요

갈수록 (고정 표현): 갈수록 좋아지고 있어요 / 물가가 갈수록 올라요

고정 표현: 빠를수록 좋아요 / 많을수록 좋아요 / 하면 할수록 늘어요`,
        },
        examples: [
            { native: "한국어는 할수록 재미있어요.", romanized: "Hangugeoneun halsurok jaemiisseoyo.", translation: "Korean is more fun the more you do it." },
            { native: "생각하면 생각할수록 잘 모르겠어요.", romanized: "Saenggakamyeon saenggakalsurok jal moreugessseoyo.", translation: "The more I think about it, the less I know." },
            { native: "갈수록 한국어가 자연스러워지는 것 같아요.", romanized: "Galsurok hangugeoga jayeonseureowojineun geot gatayo.", translation: "It seems like my Korean is getting more natural as time goes on." },
            { native: "빠를수록 좋으니까 지금 시작합시다!", romanized: "Ppareulsurok joeuniga jigeum sijakapsida!", translation: "The sooner the better, so let's start now!" },
        ],
    },
]
