import { GrammarLesson } from "../../../types"

export const b1Grammar: GrammarLesson[] = [
    // ── ko-g-b1-1 — 았/었었다: remote / pluperfect past ──────────────────────
    {
        id: "ko-g-b1-1",
        level: "B1",
        title: "았/었었다: Remote Past / Past-Before-Past",
        explanation: {
            native: `았/었었다 (colloquial: 았/었었어요) adds a second past layer — it signals that something happened or was true BEFORE another past event, or that a past state is NO LONGER current. Formation: simply add 었 to the existing past tense form.

었어요 → 었었어요 (했어요 → 했었어요, 먹었어요 → 먹었었어요, 살았어요 → 살았었어요)

Key uses:
1. Prior state that has since changed: 서울에 살았었어요. 지금은 부산에 살아요. (I used to live in Seoul. Now I live in Busan.)
2. Prior completed action before another past event: 도착했을 때 이미 먹었었어요. (When I arrived, they had already eaten.)
3. Surprise/realisation about past state: 그분이 여기 사셨었군요. (I didn't know, but she had lived here.)

Important: 았/었었어요 is NOT obligatory — 았/었어요 is always acceptable. The double past adds a specific nuance of "and now things are different." Use it when you want to emphasise the change.

💡 Upgrade note: If you've been using 았/었어요 for past states too, this is the upgrade. 살았어요 = simple past fact. 살았었어요 = "used to live there — and now I don't."`,
            target: `았/었었다는 또 다른 과거 층을 추가합니다. 다른 과거 사건보다 먼저 일어난 일이거나, 현재는 더 이상 사실이 아닌 과거 상태를 나타냅니다.

형성: 기존 과거형에 '었'을 한 번 더 붙입니다.
했어요 → 했었어요 / 먹었어요 → 먹었었어요 / 살았어요 → 살았었어요

주요 용법:
1. 이후 변화된 이전 상태: 예전에 서울에 살았었어요. 지금은 부산에 살아요.
2. 다른 과거 사건 이전의 완료 행동: 도착했을 때 이미 먹었었어요.
3. 과거 상태에 대한 깨달음: 그분이 여기 사셨었군요.

중요: 았/었었어요는 의무적이지 않습니다. 았/었어요는 항상 수용됩니다. 이중 과거는 "지금은 달라졌어요"의 뉘앙스를 추가합니다.`,
        },
        examples: [
            { native: "예전에 서울에 살았었는데, 지금은 부산에 살아요.", romanized: "Yejeon-e Seoure saratsseonne, jigeumeun Busane sarayo.", translation: "I used to live in Seoul, but now I live in Busan." },
            { native: "제가 도착했을 때 그들은 이미 먹었었어요.", romanized: "Jega dochakhaesseul ttae geudeureun imi meogeosseoyo.", translation: "When I arrived, they had already eaten." },
            { native: "우리 어렸을 때 친했었는데 지금은 연락이 없어요.", romanized: "Uri eoryeosseul ttae chinhaesseonde jigeumeun yeollagi eopseoyo.", translation: "We used to be close when we were young, but now we've lost touch." },
            { native: "그 회사에 3년 동안 다녔었는데 너무 힘들었어요.", romanized: "Geu hoesae sam nyeon dongan dannyeosseonde neomu himdeureosseoyo.", translation: "I had worked at that company for 3 years, but it was too hard." },
        ],
    },

    // ── ko-g-b1-2 — Complex past narrative ──────────────────────────────────
    {
        id: "ko-g-b1-2",
        level: "B1",
        title: "Complex Past Narrative: Three Past Layers",
        explanation: {
            native: `B1 Korean narration uses three past layers simultaneously. Mastering their interaction is the key to natural Korean storytelling.

| Layer | Grammar | Function |
| Background/ongoing | ~고 있었다 | What was happening — the scene |
| Completed event | ~았/었다 | What happened — the plot |
| Prior state/action | ~았/었었다 | What had been true before |

~고 있었는데 is the signature pattern for "I was doing X when Y happened":
공부하고 있었는데 갑자기 전화가 왔어요. (I was studying when suddenly a call came.)

Key narrative connectors: 그러다가 (then / and then), 갑자기 (suddenly), 결국 (in the end), 알고 보니 (it turned out that), 그때 (at that time), 나중에 (later)

는데 / 았/었는데 as narrative connector: connects events with "and", "but", or "when" — one of Korean's most versatile narrative tools.`,
            target: `B1 한국어 내러티브는 세 가지 과거 층을 동시에 사용합니다. 이 층들의 상호작용을 마스터하는 것이 자연스러운 한국어 스토리텔링의 핵심입니다.

| 층 | 문법 | 기능 |
| 배경/진행 중 | ~고 있었다 | 일어나고 있던 일 — 장면 |
| 완료된 사건 | ~았/었다 | 일어난 일 — 줄거리 |
| 이전 상태/행동 | ~았/었었다 | 이전에 사실이었던 것 |

~고 있었는데: "~하고 있었는데 Y가 일어났어요" 패턴이 핵심입니다.
공부하고 있었는데 갑자기 전화가 왔어요.`,
        },
        examples: [
            { native: "공부하고 있었는데 갑자기 전화가 왔어요.", romanized: "Gongbuhago isseonnde gapjagi jeonhwaga wasseoyo.", translation: "I was studying when suddenly a call came." },
            { native: "알람을 잘못 맞춰놨었어요. 아침에 일어났을 때 이미 늦었었어요.", romanized: "Alameul jalmot majchwonwasseoyo. Achime ireonasseul ttae imi neujeosseoyo.", translation: "I had set the alarm wrong. When I woke up, I was already late." },
            { native: "그러다가 갑자기 일이 생겼어요. 결국 못 갔어요.", romanized: "Geureodaga gapjagi iri saengyeosseoyo. Gyeolguk mot gasseoyo.", translation: "Then suddenly something came up. In the end I couldn't go." },
            { native: "알고 보니 전에 만난 적이 있었던 사람이었어요.", romanized: "Algo boni jeone mannan jeogi isseotteon saramieosseoyo.", translation: "It turned out to be someone I had met before." },
        ],
    },

    // ── ko-g-b1-3 — Passive voice: three systems ─────────────────────────────
    {
        id: "ko-g-b1-3",
        level: "B1",
        title: "Passive Voice: -되다, Suffix Passives, -아/어지다",
        explanation: {
            native: `Korean has three passive systems. They have different priorities for B1 learners:

🔵 -되다 (PRIMARY — full production required)
Sino-Korean noun + 되다 → passive. Regular, highly productive, essential for news and formal Korean.
사용하다 → 사용되다 / 발표하다 → 발표되다 / 취소하다 → 취소되다 / 결정하다 → 결정되다
Pattern sentences: 회의가 취소됐어요. / 새 정책이 발표됐습니다. / 문제가 해결됐어요.

🟡 Suffix passives -이/히/리/기 (RECOGNITION only at B1)
Must be memorised as vocabulary pairs — there is NO rule for which suffix a verb takes.
High-frequency pairs to recognise:
보다 → 보이다 (be seen/visible) / 듣다 → 들리다 (be heard) / 열다 → 열리다 (be opened) / 닫다 → 닫히다 (be closed) / 잡다 → 잡히다 (be caught) / 막다 → 막히다 (be blocked/stuck in traffic)

🟢 -아/어지다 (ALREADY KNOWN from A2 — review only)
Primarily expresses change of state: 따뜻해졌어요 (it got warm) / 좋아졌어요 (it got better)

Recognition note for self-study learners: If you've heard 취소됐습니다, 발표됐습니다, 사용됩니다 in K-dramas or news — that's -되다 passive. You already know it passively; now you know what it is.`,
            target: `한국어에는 세 가지 수동태 시스템이 있습니다. B1 학습자를 위한 우선순위가 다릅니다:

🔵 -되다 (1순위 — 완전한 생산 목표)
한자어 명사 + 되다 → 수동태. 규칙적이고 생산적이며 뉴스와 공식 한국어에서 필수.
사용되다 / 발표되다 / 취소되다 / 결정되다 / 해결되다

🟡 접미사 수동 -이/히/리/기 (B1에서는 인식 목표)
동사별로 외워야 합니다. 어떤 접미사를 붙일지 규칙이 없습니다.
보이다 / 들리다 / 열리다 / 닫히다 / 잡히다 / 막히다

🟢 -아/어지다 (A2에서 이미 학습 — 복습만)
주로 상태 변화 표현: 따뜻해졌어요 / 좋아졌어요`,
        },
        examples: [
            { native: "회의가 취소됐어요.", romanized: "Hoeui ga chwisowaesseoyo.", translation: "The meeting was cancelled. (-되다 passive)" },
            { native: "새로운 정책이 오늘 발표됐습니다.", romanized: "Saeroun jeongchaegi oneul balpyodwaessseumnida.", translation: "A new policy was announced today. (-되다 formal)" },
            { native: "음악이 들려요. 누가 연주하고 있나 봐요.", romanized: "Eumagi deullyeoyo. Nuga yeonjuhago inna bwayo.", translation: "Music can be heard. Someone must be playing. (-리 suffix passive)" },
            { native: "길이 막혀서 늦었어요.", romanized: "Giri makhyeoseo neujeosseoyo.", translation: "I was late because the road was blocked / traffic was backed up. (-히 suffix passive)" },
        ],
    },

    // ── ko-g-b1-4 — Inference and conjecture expressions ────────────────────
    {
        id: "ko-g-b1-4",
        level: "B1",
        title: "Inference & Conjecture: ~것 같다, -나 보다, -는 모양이다",
        explanation: {
            native: `Korean has a rich system of inference expressions — essential for polite, non-assertive communication.

~것 같다 (full system):
| Tense | Form | Example |
| Future/uncertain | -(으)ㄹ 것 같다 | 비가 올 것 같아요 |
| Present ongoing | -는 것 같다 | 비가 오는 것 같아요 |
| Past completed | -(으)ㄴ 것 같다 | 비가 온 것 같아요 |
| Adjective | -(으)ㄴ 것 같다 | 피곤한 것 같아요 |

-나 보다 (I gather / looks like — based on visible evidence):
힘든가 봐요. (Looks like it's difficult.) / 늦게 왔나 봐요. (Looks like they came late.)
More confident than ~것 같다 — based on something you observe.

-(으)ㄹ/는 모양이다 (it seems / appears — slightly more formal):
바쁜 모양이에요. (It seems they're busy.) / 이미 끝난 모양이에요. (It seems it's already over.)

Korean indirect communication: Using these hedging expressions softens statements and shows social intelligence — it's not vagueness, it's politeness.`,
            target: `한국어에는 풍부한 추측 표현 시스템이 있습니다. 정중하고 단정적이지 않은 의사소통에 필수적입니다.

~것 같다 (전체 시스템):
미래/불확실: -(으)ㄹ 것 같다 / 현재 진행: -는 것 같다 / 과거 완료: -(으)ㄴ 것 같다 / 형용사: -(으)ㄴ 것 같다

-나 보다 (보이는 증거 기반 추론):
힘든가 봐요 / 늦게 왔나 봐요 — ~것 같다보다 더 확신에 찬 표현

-(으)ㄹ/는 모양이다 (약간 더 격식체):
바쁜 모양이에요 / 이미 끝난 모양이에요`,
        },
        examples: [
            { native: "오늘 비가 올 것 같아요. 우산 가져가세요.", romanized: "Oneul biga ol geot gatayo. Usan gajyeogaseyo.", translation: "It seems like it will rain today. Take an umbrella." },
            { native: "이미 간 것 같아요. 문이 잠겨 있거든요.", romanized: "Imi gan geot gatayo. Muni jamgyeo itgeodeunyo.", translation: "It seems they've already left. The door is locked, you see." },
            { native: "스트레스를 많이 받는가 봐요. 얼굴이 안 좋아 보여요.", romanized: "Seuteuleseu reul mani banneungga bwayo. Eolguri an joa boyeoyo.", translation: "Looks like they're under a lot of stress. Their face doesn't look good." },
            { native: "회의가 아직 안 끝난 모양이에요. 다들 아직 안에 있어요.", romanized: "Hoeui ga ajik an kkeunnan moyangieyo. Dadeul ajik ane isseoyo.", translation: "It appears the meeting isn't over yet. Everyone is still inside." },
        ],
    },

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

    // ── ko-g-b1-13 — 합쇼체 formal register ─────────────────────────────────
    {
        id: "ko-g-b1-13",
        level: "B1",
        title: "합쇼체 Formal Register: Full System",
        explanation: {
            native: `🌏 Why Korean has 합쇼체: Korean directly encodes social hierarchy in grammar. Unlike European languages, honorifics in Korean are not just a word choice — they are a completely different conjugation system. 합쇼체 is required for: job interviews, formal presentations, meeting elderly strangers, professional settings, watching Korean news.

For self-study learners: If you learned Korean through apps or K-dramas, you probably haven't learned 합쇼체 systematically. This unit fills that gap — it's the Korean you need for formal life.

합쇼체 statement forms (-습니다/-ㅂ니다):
Present: 합니다 / 먹습니다 / 갑니다
Past: 했습니다 / 먹었습니다 / 갔습니다
Future: 하겠습니다 / 먹겠습니다
Progressive: 하고 있습니다
Intended future: 할 것입니다

합쇼체 question forms (-습니까?/-ㅂ니까?):
합니까? / 먹습니까? / 어디 가십니까? / 했습니까?

합쇼체 command forms (-(으)십시오):
앉으십시오. / 이쪽으로 오십시오. / 조용히 해주십시오.

Key honorific vocabulary:
말하다 → 말씀드리다 / 주다 → 드리다 / 먹다/마시다 → 드시다 / 있다 → 계시다 / 자다 → 주무시다

Presentation structure: 안녕하십니까. 오늘은 ~에 대해 발표하겠습니다. / 먼저 ~을/를 말씀드리겠습니다. / 이상으로 발표를 마치겠습니다.`,
            target: `🌏 한국어에 합쇼체가 있는 이유: 한국어는 문법 구조 안에 사회적 위계를 직접 인코딩합니다. 합쇼체는 취업 면접, 공식 발표, 처음 만나는 어른, 격식 있는 자리에서 필요합니다.

앱이나 드라마로만 학습했다면: 합쇼체를 체계적으로 배운 적 없을 가능성이 높습니다. 이 단원이 공백을 채워 줍니다.

평서문: 합니다/먹습니다 / 했습니다 / 하겠습니다
의문문: 합니까?/먹습니까?
명령문: 앉으십시오/오십시오

경어 어휘:
말하다 → 말씀드리다 / 주다 → 드리다 / 먹다 → 드시다 / 있다 → 계시다`,
        },
        examples: [
            { native: "안녕하십니까. 오늘은 환경 문제에 대해 발표하겠습니다.", romanized: "Annyeongashimnikka. Oneul neun hwan'gyeong munje e daehae balpyo hagetseumnida.", translation: "Good day. Today I will present on environmental issues." },
            { native: "먼저 현황을 말씀드리겠습니다.", romanized: "Meeonjeo hyeonhwang eul malsseum deurigetseumnida.", translation: "First, I will explain the current situation (humble)." },
            { native: "질문 있으신 분 계십니까?", romanized: "Jilmun isseushin bun gyeshimnikka?", translation: "Is there anyone with a question? (honorific)" },
            { native: "이상으로 발표를 마치겠습니다. 감사합니다.", romanized: "Isangeuro balpyoreul machigetsseumnida. Gamsahamnida.", translation: "That concludes the presentation. Thank you." },
        ],
    },

    // ── ko-g-b1-14 — -뿐만 아니라 / -밖에 / -조차 ──────────────────────────
    {
        id: "ko-g-b1-14",
        level: "B1",
        title: "-뿐만 아니라 / -(으)ㄹ 뿐이다 / -밖에 / -조차",
        explanation: {
            native: `-뿐만 아니라 (not only...but also):
With nouns: 음식뿐만 아니라 서비스도 좋았어요. (Not only the food but the service was also good.)
With verbs/adj.: 맛있을 뿐만 아니라 건강에도 좋아요. (It's not only delicious but also good for your health.)
Pattern: A뿐만 아니라 B도 — "not only A, but B too."

-(으)ㄹ 뿐이다 (only / merely / that's all):
최선을 다했을 뿐이에요. (I only did my best.)
그냥 물어봤을 뿐이에요. (I only asked.)
운이 좋았을 뿐이에요. (I was just lucky.) — common in self-deprecation and deflection.

-밖에 + negative (only — restricted, "nothing but"):
물밖에 없어요. (There's only water.) / 조금밖에 못 먹었어요. (I could only eat a little.)
Always followed by a negative verb. Implies the amount/thing is not enough.

Contrast: -만 (neutral "only") vs -밖에 (emphatic "only — not enough"):
물만 있어요. = There is only water. (neutral)
물밖에 없어요. = There's nothing but water. (emphasises insufficient amount)

-조차 (even — emphatic, negative/surprising):
이름조차 기억 못 해요. (I can't even remember their name.)
시간조차 없어요. (There isn't even time.)
Stronger than -도: -도 is mild, -조차 is emphatic/dramatic.`,
            target: `-뿐만 아니라 (뿐만 아니라 B도): 음식뿐만 아니라 서비스도 좋아요

-(으)ㄹ 뿐이다 (단지/그냥):
최선을 다했을 뿐이에요 / 그냥 물어봤을 뿐이에요 — 겸손 표현에서 흔함

-밖에 + 부정 (강조적 "only — 부족함 암시"):
물밖에 없어요 / 조금밖에 못 먹었어요
-만 (중립) vs -밖에 (강조): 물만 있어요 vs 물밖에 없어요

-조차 (강조적 부정 — "~조차도"):
이름조차 기억 못 해요 / 시간조차 없어요 — -도보다 강한 표현`,
        },
        examples: [
            { native: "저는 한국어뿐만 아니라 한국 문화도 정말 좋아해요.", romanized: "Jeoneun hangugeoneun ppunman anira hanguk munhwado jeongmal joahaeyo.", translation: "I really like not only Korean but also Korean culture." },
            { native: "운이 좋았을 뿐이에요. 별거 아니에요.", romanized: "Uni joassseul ppunieyo. Byeolgeobeo anieyo.", translation: "I was just lucky. It's nothing special." },
            { native: "시간이 없어서 밥도 조금밖에 못 먹었어요.", romanized: "Sigani eopseoseo babdo jogeumbaakke mot meogeosseoyo.", translation: "I had no time so I could only eat a little rice." },
            { native: "이름조차 기억이 안 나요. 너무 오래됐어요.", romanized: "Ireumjwa gieogi an nayo. Neomu oraedwaesseoyo.", translation: "I can't even remember their name. It was too long ago." },
        ],
    },

    // ── ko-g-b1-15 — -되다 deepening + formal opinion ────────────────────────
    {
        id: "ko-g-b1-15",
        level: "B1",
        title: "-되다 Deepening: -에 의해서 and Formal Opinion",
        explanation: {
            native: `-되다 with -에 의해(서) — specifying the agent (by whom):
-에 의해(서) = by (formal passive agent marker, written/news Korean)
이 법안은 국회에 의해 통과됐습니다. (This bill was passed by the National Assembly.)
그 보고서는 전문가들에 의해 작성됐습니다. (The report was written by experts.)
이 문제는 팀에 의해서 해결됐어요. (This problem was solved by the team.)

Related: -에 의하면 (according to):
연구에 의하면 수면 부족이 건강에 나쁘다고 합니다. (According to research, lack of sleep is bad for health.)

-되다 across tenses (for news contexts):
Past: 발표됐습니다 / Present progressive: 논의되고 있습니다 / Future: 공개될 예정입니다

Formal opinion and evaluation expressions:
-다고 봐요 (I view it as — neutral): 이 문제는 심각하다고 봐요.
-(으)로 보입니다 (it appears that — formal): 상황이 개선되고 있는 것으로 보입니다.
-(이)라고 할 수 있습니다 (it can be said that — formal): 성공이라고 할 수 있습니다.
-(으)ㄹ 것으로 예상됩니다 (it is expected that): 내년에 시행될 것으로 예상됩니다.
제 생각에는 (in my opinion) / 개인적으로는 (personally)`,
            target: `-되다 + -에 의해(서) — 행위자 지정 (격식/문어체):
국회에 의해 통과됐습니다 / 전문가들에 의해 작성됐습니다

-에 의하면 (according to): 연구에 의하면 ~다고 합니다

-되다 시제 활용:
됐습니다(과거) / 되고 있습니다(진행) / 될 예정입니다(미래)

공식 의견 표현:
-다고 봐요 / -으로 보입니다 / -이라고 할 수 있습니다 / -ㄹ 것으로 예상됩니다`,
        },
        examples: [
            { native: "이 결정은 위원회에 의해 내려진 것입니다.", romanized: "I gyeoljeong eun wiwonhoe e uihae naeryeojin geosimnida.", translation: "This decision was made by the committee." },
            { native: "현재 관련 법안이 논의되고 있습니다.", romanized: "Hyeonjae gwanlyeon beopan i nonuidoego issseumnida.", translation: "The relevant bill is currently being discussed." },
            { native: "이 상황은 심각하다고 봐요. 빨리 해결해야 할 것 같아요.", romanized: "I sanghwangeun simgakadago bwayo. Ppalli haegyeolhaeya hal geot gatayo.", translation: "I view this situation as serious. I think it needs to be resolved quickly." },
            { native: "연구에 의하면 하루 8시간 수면이 중요하다고 합니다.", romanized: "Yeongu e uihamyeon haru yeodeol sigan sumyeon i jungyohadago hamnida.", translation: "According to research, eight hours of sleep per day is said to be important." },
        ],
    },

    // ── ko-g-b1-16 — Discourse particles ────────────────────────────────────
    {
        id: "ko-g-b1-16",
        level: "B1",
        title: "Discourse Particles: -거든요, -잖아요, -네요, -는데요",
        explanation: {
            native: `These sentence-final particles are what separate textbook Korean from natural Korean. They encode social stance — not grammar rules.

⭐ If you could only learn one from this unit: -거든요
-거든요 is the single particle most likely to make you sound like a natural speaker. It tells your listener "I'm giving you information you didn't already know."

-거든요 (because / let me tell you — NEW information for listener):
늦어서 죄송해요. 버스가 막혔거든요. (Sorry I'm late. The bus was backed up, you see.)
오늘 못 갈 것 같아요. 할 일이 많거든요. (I don't think I can go today. I have a lot to do, you see.)
Key: "I'm explaining — this is background you didn't know."

-잖아요 (you know / as you know — SHARED information):
한국어가 어렵잖아요. 그래서 시간이 걸려요. (Korean is hard, you know. That's why it takes time.)
어제 얘기했잖아요! (We talked about it yesterday, didn't we!)
Key: "You already know this — I'm reminding you / appealing to shared knowledge."

-네요 (I notice / I see — DISCOVERY / reaction right now):
정말 맛있네요! (This is really delicious!) / 생각보다 어렵네요. (It's harder than I thought.)
한국어 정말 잘 하시네요! (Your Korean is really good, I see!)
Key: "I'm discovering or noticing this for the first time."

-는데요 / -은데요 (framing / background / turn management):
이건 좀 비싼데요... (This is a bit expensive... [implication implied])
지금 바쁜데요. (I'm busy right now... [implication: can we talk later?])
Key: "I'm setting context, softening, or implying something beyond what I said."

Note for systematic learners: These particles encode social/pragmatic stance, not grammatical categories. There is no deducible formation rule. They are best learned through exposure and imitation. A summary table helps reference, but feeling these particles requires listening to authentic Korean.`,
            target: `이 문장 끝 입자들이 교과서 한국어와 자연스러운 한국어를 구분합니다.

⭐ 딱 하나만 선택한다면: -거든요
한국어를 "교과서 한국어"에서 "진짜 한국어"로 바꿔주는 가장 중요한 입자입니다.

-거든요: 리스너가 몰랐던 새 정보 제공, 배경 설명
늦어서 죄송해요. 버스가 막혔거든요.

-잖아요: 리스너가 이미 알고 있는 공유 정보, 상기시키기
한국어가 어렵잖아요. / 어제 얘기했잖아요!

-네요: 지금 막 발견하거나 알아차린 것 (발견/반응)
정말 맛있네요! / 생각보다 어렵네요.

-는데요: 맥락 설정, 부드럽게 하기, 암묵적 내용 (대화 관리)
이건 좀 비싼데요... / 지금 바쁜데요.`,
        },
        examples: [
            { native: "왜 이렇게 늦었어요? — 길이 많이 막혔거든요.", romanized: "Wae ireoke neujeosseoyo? — Giri mani makhyeotgeodeunyo.", translation: "Why are you so late? — The traffic was really backed up, you see." },
            { native: "그 사람 알아요? 제 친구거든요.", romanized: "Geu saram arayo? Je chingugeo deunyo.", translation: "Do you know that person? They're actually my friend, you see." },
            { native: "그거 어렵잖아요. 왜 혼자 하려고 해요?", romanized: "Geugeo eoryeopjanayo. Wae honja haryeogo haeyo?", translation: "That's hard, you know. Why are you trying to do it alone?" },
            { native: "이 커피 진짜 맛있네요! 어디서 샀어요?", romanized: "I keopi jinjja masitneyo! Eodiseo sasseoyo?", translation: "This coffee is really delicious! Where did you buy it?" },
        ],
    },

    // ── ko-g-b1-17 — Idioms, proverbs, internet Korean ──────────────────────
    {
        id: "ko-g-b1-17",
        level: "B1",
        title: "살아있는 한국어: 관용어, 속담, 인터넷 한국어",
        explanation: {
            native: `This unit is a celebration — not a grammar lesson. You've learned the system. Now you learn how real Koreans use it, colour it, and play with it.

Essential idioms (관용어):
발이 넓다 (lit. wide feet) = well-connected / knows many people
손이 크다 (lit. big hands) = generous / spends a lot
배가 아프다 (lit. stomach hurts) = feeling envious
눈에 넣어도 안 아프다 (lit. wouldn't hurt even in the eye) = I love them dearly
닭살 돋다 = goosebumps (cold or cringe)
시작이 반이다 = Getting started is the hard part
발 없는 말이 천 리 간다 = Gossip spreads fast (lit. words with no feet travel 1000 li)

Key proverbs (속담):
세 살 버릇 여든까지 간다 = Old habits die hard (habits at 3 last till 80)
원숭이도 나무에서 떨어진다 = Everyone makes mistakes (even monkeys fall from trees)
급할수록 돌아가라 = Haste makes waste (the more hurried, go around)

Internet / youth Korean (인터넷/청년 한국어):
대박! = Wow / amazing! / OMG
헐 = OMG / what?! (surprise)
ㅋㅋㅋ = haha / lol / 크크크
갑분싸 = 갑자기 분위기 싸해짐 (sudden mood kill)
멘붕 = 멘탈 붕괴 (mental breakdown / losing it)
완전 = totally / completely (intensifier)
핵- = extremely / ultra (prefix: 핵맛있어 = insanely delicious)
레전드 = legendary / epic

Grammar bridge: B1 grammar is intact in colloquial Korean — only the surface changes. -거든요 still appears, -더라도 still appears. Colloquial Korean is not broken grammar — it is compressed grammar.`,
            target: `이 단원은 축하입니다 — 문법 수업이 아닙니다. 시스템을 배웠어요. 이제 진짜 한국인이 어떻게 쓰는지 배웁니다.

관용어: 발이 넓다 / 손이 크다 / 배가 아프다 / 닭살 돋다 / 시작이 반이다

속담: 세 살 버릇 여든까지 간다 / 원숭이도 나무에서 떨어진다 / 급할수록 돌아가라

인터넷/청년 한국어:
대박! / 헐 / ㅋㅋㅋ / 갑분싸 / 멘붕 / 완전 / 핵- / 레전드

문법 연결: 구어체 한국어에서도 B1 문법은 그대로입니다. 바뀌는 것은 속도, 소리, 어휘 선택이지 구조가 아닙니다.`,
        },
        examples: [
            { native: "그 사람은 발이 진짜 넓어요. 아는 사람이 엄청 많아요.", romanized: "Geu sarameun bari jinja neolbeoyo. Aneun sarami eomcheong manayo.", translation: "That person is really well-connected. They know a huge number of people." },
            { native: "대박! 어떻게 그렇게 빨리 할 수 있어요?", romanized: "Daebak! Eotteoke geureoke ppalli hal su isseoyo?", translation: "Wow! How can you do it so quickly?!" },
            { native: "세 살 버릇 여든까지 간다고 하잖아요. 지금부터 좋은 습관을 만드세요.", romanized: "Se sal beoreut yeodeun kkaji gandago hajanayo. Jigeumbuteo joeun seupgwan eul mandeouseyo.", translation: "As they say, habits at 3 last till 80. Start building good habits now." },
            { native: "오늘 발표 완전 멘붕이었어요. 다음엔 더 잘 준비해야겠어요.", romanized: "Oneul balpyo wanjeon menbung ieosseoyo. Daeumene deo jal junbihaeya gesseoyo.", translation: "Today's presentation was a total mental breakdown. Next time I need to prepare better." },
        ],
    },
]
