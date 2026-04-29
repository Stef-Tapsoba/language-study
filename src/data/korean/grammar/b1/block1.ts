import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
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
]
