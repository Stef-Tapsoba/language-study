import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
    // ── Unit 5: -아/어 보다 ────────────────────────────────────────────────
    {
        id: "ko-g-a2-5",
        level: "A2",
        title: "한번 해봤어요? — Trying and experiencing with -아/어 보다",
        explanation: "-아/어 보다 literally means 'see (by) doing' — it expresses trying or attempting an action. It has three main uses: (1) suggestion 'just try it!' with 한번, (2) past attempt 'I tried but...', and (3) asking about experience 'have you ever tried...'. The base form follows the same vowel harmony as the present tense (-아요/-어요).",
        rules: [
            {
                condition: "Suggestion — just try it! (present)",
                result: "Present stem + -봐요 (often with 한번 as a softener)",
                examples: [
                    { native: "한번 먹어 봐요!", romanized: "Hanbeon meogeobwayo!", translation: "Just try eating it!" },
                    { native: "한번 입어 봐요.", romanized: "Hanbeon ibeobwayo.", translation: "Why don't you try it on?" },
                    { native: "한번 물어봐요.", romanized: "Hanbeon mureobwayo.", translation: "Just ask and find out." },
                ]
            },
            {
                condition: "Past attempt — tried but...",
                result: "Present stem + -봤어요",
                examples: [
                    { native: "해봤는데 잘 안 됐어요.", romanized: "Haebwanneunde jal an dwaesseoyo.", translation: "I tried doing it but it didn't work out." },
                    { native: "전화해 봤는데 안 받아요.", romanized: "Jeonhwahae bwanneunde an badayo.", translation: "I tried calling but they're not answering." },
                ]
            },
            {
                condition: "Experience — have you ever tried?",
                result: "Present stem + -봤어요? (past question)",
                examples: [
                    { native: "부산에 가 봤어요?", romanized: "Busane gabwasseoyo?", translation: "Have you been to Busan?" },
                    { native: "김치찌개를 먹어 봤어요?", romanized: "Kimchijjigae-reul meogeobwasseoyo?", translation: "Have you tried kimchi jjigae?" },
                ]
            },
        ],
        notes: [
            {
                type: "tip",
                content: "한번 (hanbeon) literally means 'one time' but functions as a warm encourager: 한번 해봐요 = 'just give it a try'. It doesn't mean you can only try once."
            },
            {
                type: "tip",
                content: "-아/어 보고 싶어요 = 'want to try doing'. 한국에 가 보고 싶어요 = 'I'd love to go to Korea'. One of the most natural wish expressions in Korean."
            },
            {
                type: "warning",
                content: "When the main verb is 보다 (to watch/see), stacking 봐 봐요 is awkward. Say: 이 영화 본 적이 있어요? (Have you seen this film?) or simply 봤어요? instead."
            },
        ],
        examples: [
            { native: "비빔밥 먹어 봤어요? 정말 맛있었어요!", romanized: "Bibimbap meogeobwasseoyo? Jeongmal massisseoyo!", translation: "Have you tried bibimbap? It was really delicious!" },
            { native: "한복을 입어 보고 싶어요.", romanized: "Hanbogul ibeobogo sipeoyo.", translation: "I'd like to try wearing hanbok." },
            { native: "만들어 봤는데 어려웠어요.", romanized: "Mandeureo bwanneunde eoryeowosseoyo.", translation: "I tried making it but it was difficult." },
            { native: "한번 더 해볼게요.", romanized: "Hanbeon deo haebolgeyo.", translation: "I'll give it another try." },
            { native: "아직 못 먹어 봤어요. 한번 먹어 보고 싶어요.", romanized: "Ajik mot meogeobwasseoyo. Hanbeon meogeo bogo sipeoyo.", translation: "I haven't tried it yet. I'd like to try it once." },
        ],
    },

    // ── Unit 6: -아/어 본 적이 있다/없다 ─────────────────────────────────────
    {
        id: "ko-g-a2-6",
        level: "A2",
        title: "해본 적 있어요? — The experiential perfect",
        explanation: "-아/어 본 적이 있다/없다 is the formal 'have/haven't ever done' construction. It means 'there exists/doesn't exist an occasion of having tried [verb]'. The structure: present tense stem + 본 적이 있어요/없어요. This is more explicit about life-scope meaning than simple -아/어 봤어요.",
        rules: [
            {
                condition: "Have ever done (life experience)",
                result: "Present stem + 본 적이 있어요",
                examples: [
                    { native: "먹어 본 적이 있어요.", romanized: "Meogeobeon jeogi isseoyo.", translation: "I have tried eating it before." },
                    { native: "한국에 가 본 적이 있어요.", romanized: "Hanguge gabeon jeogi isseoyo.", translation: "I have been to Korea before." },
                    { native: "대학교 때 아르바이트를 해 본 적이 있어요.", romanized: "Daehakgyo ttae areubaiteu-reul hae beon jeogi isseoyo.", translation: "I had a part-time job during university." },
                ]
            },
            {
                condition: "Have never done",
                result: "Present stem + 본 적이 없어요",
                examples: [
                    { native: "번지점프를 해 본 적이 없어요.", romanized: "Beonjijeopeu-reul hae beon jeogi eoopseoyo.", translation: "I have never tried bungee jumping." },
                    { native: "한번도 해 본 적이 없어요.", romanized: "Hanbondo hae beon jeogi eoopseoyo.", translation: "I've never tried it even once." },
                ]
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Anatomy: 먹어 (eating, vowel harmony stem) + 본 (past modifier of 보다) + 적이 (occasion/time + subject marker) + 있어요 (exists). Together: 'An occasion of having tried eating exists.'"
            },
            {
                type: "tip",
                content: "Life-stage time expressions pair naturally: 어렸을 때 (when young), 고등학교 때 (during high school), 대학교 때 (during university), 전에 (before/previously), 처음으로 (for the first time)."
            },
            {
                type: "tip",
                content: "한번도 + 없어요 = stronger 'never' meaning 'not even once'. Use for emphasis."
            },
        ],
        examples: [
            { native: "이 영화 본 적이 있어요?", romanized: "I yeonghwa beon jeogi isseoyo?", translation: "Have you seen this film before?" },
            { native: "어렸을 때 피아노를 배워 본 적이 있어요.", romanized: "Eoryeossul ttae piano-reul baewo beon jeogi isseoyo.", translation: "When I was young, I tried learning piano." },
            { native: "처음으로 홍어를 먹어 본 적이 있어요.", romanized: "Cheoeumeuro hongeoreul meogeobeon jeogi isseoyo.", translation: "I've tried hongeo (fermented skate) for the first time." },
            { native: "다시는 먹어 본 적이 없어요.", romanized: "Dasineun meogeobeon jeogi eoopseoyo.", translation: "I've never tried it again since." },
            { native: "꼭 가 보고 싶어요. 아직 가 본 적이 없어요.", romanized: "Kkok gabogo sipeoyo. Ajik gabeon jeogi eoopseoyo.", translation: "I really want to go. I've never been there yet." },
        ],
    },

    // ── Unit 7: -아/어지다 + -게 되다 + Comparisons ───────────────────────────
    {
        id: "ko-g-a2-7",
        level: "A2",
        title: "더 좋아졌어요 — Change of state and comparisons",
        explanation: "-아/어지다 attaches to descriptive verbs (adjectives) to express change of state: 'become/get [adjective]'. For action verbs, -게 되다 expresses a gradual or unintentional change: 'come to do / end up doing'. Comparison grammar: A보다 B가 더 (B is more than A — Korean comparison order is REVERSED from English), 가장/제일 (the most), 덜 (less), 훨씬 (much more).",
        rules: [
            {
                condition: "Change of state from descriptive verb",
                result: "Descriptive verb stem + -아/어지다 (vowel harmony applies)",
                examples: [
                    { native: "한국어 실력이 좋아졌어요.", romanized: "Hangugeo sillyeogi joajyeosseoyo.", translation: "My Korean skills have improved." },
                    { native: "날씨가 따뜻해지고 있어요.", romanized: "Nalssiga ttatteuthae jigo isseoyo.", translation: "The weather is getting warmer." },
                    { native: "어려워질 거예요.", romanized: "Eoryeowojil geoyeyo.", translation: "It will get harder." },
                ]
            },
            {
                condition: "Gradual / unintentional life change (action verbs)",
                result: "Verb stem + -게 되다",
                examples: [
                    { native: "한국어를 공부하게 됐어요.", romanized: "Hangugeo-reul gongbuhage dwaesseoyo.", translation: "I ended up studying Korean." },
                    { native: "한국 음식을 좋아하게 됐어요.", romanized: "Hanguk eumsig-eul joahage dwaesseoyo.", translation: "I came to like Korean food." },
                    { native: "알게 됐어요.", romanized: "Alge dwaesseoyo.", translation: "I came to know / I found out." },
                ]
            },
            {
                condition: "Comparison — more than (REVERSED order: compare against A, then B is more)",
                result: "A보다 B가 더 + adjective",
                examples: [
                    { native: "커피보다 차가 더 맛있어요.", romanized: "Keopi-boda cha-ga deo massisseoyo.", translation: "Tea is more delicious than coffee." },
                    { native: "어제보다 오늘이 더 추워요.", romanized: "Eoje-boda oneuri deo chuwoyo.", translation: "Today is colder than yesterday." },
                ]
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Korean comparison order is the REVERSE of English: 커피보다 차가 더 맛있어요 = 'Tea is more delicious than coffee'. A보다 = 'compared to A'. The thing being praised comes SECOND."
            },
            {
                type: "tip",
                content: "ㅂ-irregular in -지다: 춥다 → 추워지다, 쉽다 → 쉬워지다, 어렵다 → 어려워지다. Same rule as the regular -아/어요 conjugation."
            },
            {
                type: "tip",
                content: "훨씬 (hwolssin = much more/by far) intensifies comparisons powerfully: 훨씬 더 좋아요 = 'way better'. 가장/제일 are both fine for superlatives — 제일 is slightly more spoken."
            },
        ],
        examples: [
            { native: "요즘 물가가 너무 비싸졌어요.", romanized: "Yojeum mulgaga neomu bissajyeosseoyo.", translation: "These days prices have gotten way too expensive." },
            { native: "우리가 점점 친해지고 있어요.", romanized: "Uriga jeomjeom chinhae jigo isseoyo.", translation: "We are getting closer and closer." },
            { native: "가장 좋아하는 계절이 뭐예요?", romanized: "Gajang joahaneun gyejeori mwoyeyo?", translation: "What is your favourite season?" },
            { native: "이게 덜 매워요.", romanized: "Ige deol maewoyo.", translation: "This is less spicy." },
            { native: "예전보다 훨씬 바빠졌어요.", romanized: "Yejeonboda hwolssin bappajyeosseoyo.", translation: "I've gotten much busier than before." },
        ],
    },

    // ── Unit 8: 처럼/같이 + 것 같다 + particles 마다/부터/까지/(이)랑 ──────────
    {
        id: "ko-g-a2-8",
        level: "A2",
        title: "마치 한국 사람 같아요 — Similarity, appearance, and key particles",
        explanation: "처럼 and 같이 both mean 'like/as' and attach to nouns. 마치 before them intensifies ('just like / exactly as if'). 것 같다 (it seems like / I think) is a versatile hedging tool — the modifier form before 것 encodes tense. Four important particles: 마다 (every), 부터 (from — starting point), 까지 (until/to — end point), (이)랑 (and/with — spoken, casual). For listed items in speech, (이)랑 replaces the formal 와/과.",
        rules: [
            {
                condition: "Similarity — like / as (both nearly synonymous)",
                result: "Noun + 처럼 (slightly more descriptive) / Noun + 같이 (slightly more spoken)",
                examples: [
                    { native: "한국 사람처럼 말해요.", romanized: "Hanguk saram-cheoreom malhaeyo.", translation: "She speaks like a Korean person." },
                    { native: "마치 꿈 같아요.", romanized: "Machi kkum gatayo.", translation: "It's just like a dream." },
                    { native: "친구같이 대해 주세요.", romanized: "Chingugachi daehae juseyo.", translation: "Please treat me like a friend." },
                ]
            },
            {
                condition: "It seems like / I think (hedged opinion — -(으)ㄹ 것 같다)",
                result: "-(으)ㄹ 것 같아요 (future), -(으)ㄴ 것 같아요 (descriptive/past state), -는 것 같아요 (ongoing action)",
                examples: [
                    { native: "피곤한 것 같아요.", romanized: "Pigonhan geot gatayo.", translation: "You seem tired." },
                    { native: "맛있는 것 같아요.", romanized: "Massinneun geot gatayo.", translation: "It seems delicious." },
                    { native: "늦을 것 같아요.", romanized: "Neujeul geot gatayo.", translation: "It seems like we'll be late." },
                ]
            },
            {
                condition: "Particles: every (마다), from (부터), until/to (까지), and/with spoken (이)랑",
                result: "Noun + particle",
                examples: [
                    { native: "사람마다 생각이 달라요.", romanized: "Sarammada saenggagi dallayo.", translation: "Every person thinks differently." },
                    { native: "9시부터 6시까지 일해요.", romanized: "Ahopsibuteo yeoseotsiggaji ilhaeyo.", translation: "I work from 9 to 6." },
                    { native: "드라마랑 팟캐스트도 많이 들어요.", romanized: "Deurama-rang patkaeseuteu-do mani deureyo.", translation: "I also listen to a lot of dramas and podcasts." },
                ]
            },
        ],
        notes: [
            {
                type: "tip",
                content: "마치 is an intensifier: 마치 한국 사람 같아요! = 'You're exactly like a Korean person!' It elevates 처럼/같이/같다 from simple similarity to vivid comparison."
            },
            {
                type: "tip",
                content: "것 같아요 is a powerful politeness tool for softening opinions: 이게 더 좋은 것 같아요 (I think this is better) is more natural than 이게 더 좋아요 in many situations."
            },
            {
                type: "tip",
                content: "(이)랑 (spoken) vs 와/과 (written/formal): After consonant = 이랑, after vowel = 랑. Using 와/과 in casual speech sounds too formal; using (이)랑 in formal writing sounds too casual."
            },
        ],
        examples: [
            { native: "2년 됐어요. 처음부터 지금까지 거의 매일 공부하고 있어요.", romanized: "Iryeon dwaesseoyo. Cheoeum-buteo jigeum-kkaji geoui maeil gongbuhago isseoyo.", translation: "It's been two years. From the beginning until now, I've been studying almost every day." },
            { native: "주마다 얼마나 공부해요?", romanized: "Jumada eolmana gongbuhaeyo?", translation: "How much do you study every week?" },
            { native: "나라마다 문화가 달라요.", romanized: "Naramada munhwaga dallayo.", translation: "Every country has a different culture." },
            { native: "아직 멀었어요. 아직 이상한 것 같아요.", romanized: "Ajik meoreosseoyo. Ajik isanghan geot gatayo.", translation: "I still have a long way to go. It still seems strange." },
            { native: "사과랑 배를 샀어요.", romanized: "Sagwang bae-reul sasseoyo.", translation: "I bought apples and pears." },
        ],
    },
]
