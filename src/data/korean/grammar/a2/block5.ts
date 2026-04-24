import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
    // ── Unit 16: -기 nominalizer ──────────────────────────────────────────────
    {
        id: "ko-g-a2-16",
        level: "A2",
        title: "한국어 공부하기가 어렵지 않아요 — The -기 nominalizer",
        explanation: "-기 turns any verb into a verbal noun ('eating', 'going', 'deciding'). Formation: verb stem + -기 (no vowel harmony — always just -기). This unlocks six essential fixed expressions that appear constantly in Korean: -기 전에 (before doing), -기 위해서 (in order to), -기로 하다 (decide to), -기 때문에 (because — formal), -기 어렵다/쉽다 (difficult/easy to), -기 좋다/싫다 (good/unpleasant for).",
        rules: [
            {
                condition: "-기 전에 — before doing",
                result: "Verb stem + -기 전에",
                examples: [
                    { native: "자기 전에 이를 닦아요.", romanized: "Jagi jeone ireul dakkayo.", translation: "I brush my teeth before sleeping." },
                    { native: "밥 먹기 전에 손을 씻어요.", romanized: "Bap meokgi jeone soneul ssiseoyo.", translation: "I wash my hands before eating." },
                    { native: "출발하기 전에 연락 주세요.", romanized: "Chulbalhagi jeone yeollak juseyo.", translation: "Please contact me before departing." },
                ]
            },
            {
                condition: "-기 위해서 — in order to do (purposive, slightly formal)",
                result: "Verb stem + -기 위해서",
                examples: [
                    { native: "한국에 가기 위해서 열심히 공부해요.", romanized: "Hanguge gagi wihaeseo yeolsimhi gongbuhaeyo.", translation: "I study hard in order to go to Korea." },
                    { native: "건강하기 위해서 운동해요.", romanized: "Geonganghagi wihaeseo undonghaeyo.", translation: "I exercise in order to be healthy." },
                ]
            },
            {
                condition: "-기로 하다 — decide to do (explicit resolution)",
                result: "Verb stem + -기로 했어요",
                examples: [
                    { native: "매일 운동하기로 했어요.", romanized: "Maeil undonghagiro haesseoyo.", translation: "I've decided to exercise every day." },
                    { native: "내년에 한국에 가기로 했어요.", romanized: "Naenyeone hangue gagiro haesseoyo.", translation: "I decided to go to Korea next year." },
                    { native: "오늘은 공부하지 않기로 했어요.", romanized: "Oneureun gongbuhaji ankiro haesseoyo.", translation: "I decided not to study today." },
                ]
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Full -기 family: -기 전에 (before), -기 위해서 (in order to), -기로 하다 (decide), -기 때문에 (because — formal/written), -기 어렵다/쉽다 (hard/easy to), -기 좋다/나쁘다 (good/bad for). All share the same base transformation."
            },
            {
                type: "tip",
                content: "-기로 하다 vs -(으)ㄹ 거예요 vs -(으)ㄹ 게요: 기로 하다 = explicit decision after deliberation ('I have decided to'). 게요 = spontaneous 1st-person commitment right now. 거예요 = neutral general future."
            },
            {
                type: "tip",
                content: "-기 때문에 is formal/written. In everyday speech, use -아/어서 or -(으)니까 instead. -기 때문에 sounds natural in presentations, news, and formal explanations."
            },
        ],
        examples: [
            { native: "발음하기 어려워요.", romanized: "Bareum-hagi eoryeowoyo.", translation: "It's hard to pronounce." },
            { native: "걷기 좋은 날씨예요.", romanized: "Geodgi joheun nalssiyeyo.", translation: "It's good weather for walking." },
            { native: "담배를 끊기로 했어요.", romanized: "Dambaereul ggeunhgiro haesseoyo.", translation: "I've decided to quit smoking." },
            { native: "한국어를 모르기 때문에 어려워요.", romanized: "Hangugeoreul moreugi ttaemune eoryeowoyo.", translation: "Because I don't know Korean, it's difficult." },
            { native: "빨리 말하기가 어려워요.", romanized: "Ppalli malhagi-ga eoryeowoyo.", translation: "Speaking quickly is hard." },
        ],
    },

    // ── Unit 17: -(으)ㄹ 예정이다 + -(으)ㄹ 생각이다 + -(으)ㄹ 것 같다 ──────────
    {
        id: "ko-g-a2-17",
        level: "A2",
        title: "언제 할 예정이에요? — Future plans at three levels of certainty",
        explanation: "Korean distinguishes three levels of future intention. -(으)ㄹ 예정이다 = scheduled/fixed (on the calendar, almost certain). -(으)ㄹ 생각이다 = thinking of doing (tentative, considering). -(으)ㄹ 것 같다 = soft prediction or hedged opinion (it seems like it will...). The full certainty scale from softest to firmest: 것 같아요 → 생각이에요 → 거예요 → 게요 → 기로 했어요 → 예정이에요.",
        rules: [
            {
                condition: "-(으)ㄹ 예정이다 — scheduled/fixed plan",
                result: "Vowel/ㄹ stem + -ㄹ 예정이에요 | Consonant stem + -을 예정이에요",
                examples: [
                    { native: "다음 주에 출장을 갈 예정이에요.", romanized: "Daeum jue chuljjangeul gal yejeongieyeo.", translation: "I'm scheduled to go on a business trip next week." },
                    { native: "비행기가 3시에 도착할 예정이에요.", romanized: "Bihaenggi-ga sesie dochakhal yejeongieyeo.", translation: "The plane is scheduled to arrive at 3." },
                ]
            },
            {
                condition: "-(으)ㄹ 생각이다 — thinking of doing (tentative intention)",
                result: "Vowel/ㄹ stem + -ㄹ 생각이에요 | Consonant stem + -을 생각이에요",
                examples: [
                    { native: "내년에 한국에 갈 생각이에요.", romanized: "Naenyeone hangue gal saenggagieyo.", translation: "I'm thinking of going to Korea next year." },
                    { native: "이직할 생각이 없어요.", romanized: "Ijikhol saenggagi eoopseoyo.", translation: "I'm not thinking of changing jobs." },
                ]
            },
            {
                condition: "-(으)ㄹ 것 같다 — soft prediction or hedged observation",
                result: "Future: -(으)ㄹ 것 같아요 | Present state/past: -(으)ㄴ 것 같아요 | Ongoing: -는 것 같아요",
                examples: [
                    { native: "비가 올 것 같아요.", romanized: "Bi-ga ol geot gatayo.", translation: "It looks like it's going to rain." },
                    { native: "피곤한 것 같아요.", romanized: "Pigonhan geot gatayo.", translation: "You seem tired." },
                    { native: "공부하는 것 같아요.", romanized: "Gongbuhaneun geot gatayo.", translation: "It seems like they're studying." },
                ]
            },
        ],
        notes: [
            {
                type: "tip",
                content: "예정 (豫定) = pre-determined / scheduled. You'll hear it in announcements (5분 후에 출발할 예정입니다) and news (대통령이 내일 방문할 예정입니다). Also: 도착 예정 시간 (ETA)."
            },
            {
                type: "tip",
                content: "것 같다 is a cultural politeness tool, not just grammar. Korean communication often softens direct opinions: 이게 더 좋은 것 같아요 sounds more natural than 이게 더 좋아요 in many situations. It preserves face and signals thoughtfulness."
            },
            {
                type: "warning",
                content: "것 같다 uses the SAME modifier forms as noun modifiers (Unit 12): -(으)ㄹ for future (비가 올 것 같아요), -(으)ㄴ for state/past (피곤한 것 같아요), -는 for ongoing (오는 것 같아요)."
            },
        ],
        examples: [
            { native: "아직 준비가 덜 된 것 같아서 걱정이에요.", romanized: "Ajik junbiga deol doen geot gataseo geokjongieyo.", translation: "It seems like the preparation isn't done enough yet, which I'm worried about." },
            { native: "토요일 오후는 괜찮을 것 같아요.", romanized: "Toyoil ohoneun gwaenchaneul geot gatayo.", translation: "Saturday afternoon seems like it'll be fine." },
            { native: "6월에 결혼할 예정이에요.", romanized: "Yuweore gyeolhonhal yejeongieyeo.", translation: "The wedding is scheduled for June." },
            { native: "요즘 고향에 돌아갈 생각을 하고 있어요.", romanized: "Yojeum gohyange doragal saenggageul hago isseoyo.", translation: "I've been thinking about going back to my hometown lately." },
            { native: "내일은 바쁠 것 같아요.", romanized: "Naeireum bappeul geot gatayo.", translation: "I think I'll be busy tomorrow." },
        ],
    },

    // ── Unit 18: Discourse markers + advanced connectors ─────────────────────
    {
        id: "ko-g-a2-18",
        level: "A2",
        title: "자연스럽게 말해요 — Discourse markers and fluency connectors",
        explanation: "Natural Korean speech uses discourse markers — words that fill structural gaps and signal what kind of information is coming. These are not decorations; they are social signals. Key discourse markers: 그러니까 (so/I mean/to clarify), 그런데 (but/by the way), 그래서 (so/therefore), 그래도 (even so/still), 사실은 (actually), 뭐랄까 (how shall I put it), 아무튼 (anyway), 결국 (in the end). Back-channeling (네, 그렇군요, 정말요?, 맞아요) is also essential for natural conversation.",
        rules: [
            {
                condition: "Contrast and concession connectors",
                result: "-지만 (but — emphatic), -는데 (but — soft/background), 그래도 (even so), 아무튼/어쨌든 (anyway)",
                examples: [
                    { native: "어렵지만 재미있어요.", romanized: "Eoryeopjiman jaemiisseoyo.", translation: "It's hard but fun." },
                    { native: "힘들어요. 그래도 해야 해요.", romanized: "Himdeuroyo. Geuraedo haeya haeyo.", translation: "It's hard. Even so, I have to do it." },
                    { native: "아무튼 잘 됐어요.", romanized: "Amutun jal dwaesseoyo.", translation: "Anyway, it worked out well." },
                ]
            },
            {
                condition: "Core discourse markers for natural flow",
                result: "그러니까 (clarifying), 사실은 (reframing/honest intro), 뭐랄까 (searching for words), 결국 (concluding)",
                examples: [
                    { native: "사실은요, 좀 무서웠어요.", romanized: "Sasireunyo, jom museowoasseoyo.", translation: "Actually, I was a bit scared." },
                    { native: "뭐랄까, 좀 복잡해요.", romanized: "Mworalkka, jom bokjapaeyo.", translation: "How shall I put it — it's a bit complicated." },
                    { native: "결국 혼자도 충분히 좋은 하루를 보낼 수 있다는 걸 알게 됐어요.", romanized: "Gyeolguk honjado chungbunhi joheun harureul bonael su itdaneun geol alge dwaesseoyo.", translation: "In the end, I came to realise I can have a good day alone." },
                ]
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Back-channeling vocabulary: 네/응 (I hear you), 맞아요 (that's right), 그렇군요/그렇구나 (I see — formal/casual), 정말요?/진짜요? (really?), 어머 (oh!), 대박이다 (amazing!). Korean conversation requires constant listener response — silence sounds disengaged."
            },
            {
                type: "tip",
                content: "Korean storytelling structure: (1) 배경 설정 (background with -는데), (2) 계기/사건 (trigger — -아/어서 or -니까), (3) 전개 (development — -고 나서, -(으)면서), (4) 반응/감정 (-아/어지다, 것 같다), (5) 마무리 (conclusion — 결국, -기로 하다)."
            },
            {
                type: "warning",
                content: "Three fluency errors to avoid: (1) Putting the verb in wrong place — Korean is strictly verb-final. (2) Using -고 for everything — use the full connector toolkit. (3) Ignoring -는데 — without it, your speech sounds choppy and robotic."
            },
        ],
        examples: [
            { native: "음... 오늘은 좀 힘들었어요. 사실은 아침부터 회의가 계속 있었는데...", romanized: "Eum... oneureun jom himdeureosseoyo. Sasireum achimbuteo hoeiga gyesok isseonnneunde...", translation: "Um... today was a bit hard. Actually, there were meetings all morning, and..." },
            { native: "그런데 막상 시작하고 나서 생각보다 괜찮았어요.", romanized: "Geureonde maksang sijakago naseo saenggakboda gwaenchanasseoyo.", translation: "But once I actually started, it was better than I thought." },
            { native: "결국 포기했어요.", romanized: "Gyeolguk pogihaesseoyo.", translation: "In the end, I gave up." },
            { native: "그러니까 제 말은...", romanized: "Geuronikka je mareun...", translation: "So what I mean is..." },
            { native: "어쨌든 지금은 괜찮아요.", romanized: "Eojjaetdeun jigeumeun gwaenchanayo.", translation: "Regardless, I'm okay now." },
        ],
    },
]
