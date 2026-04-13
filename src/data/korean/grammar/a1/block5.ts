import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-38",
        level: "A1",
        title: "Future ~(으)ㄹ 거예요 — plans and predictions",
        explanation: `~(으)ㄹ 거예요 covers both plans and predictions. The formation follows the same vowel/consonant split as other endings — after a vowel or ㄹ, add ㄹ 거예요; after a consonant, add 을 거예요.`,
        rules: [
            {
                condition: "Verb stem ends in vowel or ㄹ",
                result: "~ㄹ 거예요",
                examples: [{ native: "갈 거예요 (가다)", romanized: "gal geoyeyo", translation: "going to go (가 ends in vowel: 가 + ㄹ 거예요)" }, { native: "볼 거예요 (보다)", romanized: "bol geoyeyo", translation: "going to watch/see (보 ends in vowel: 보 + ㄹ 거예요)" }, { native: "만날 거예요 (만나다)", romanized: "mannal geoyeyo", translation: "going to meet (만나 ends in vowel: 만나 + ㄹ 거예요)" }],
            },
            {
                condition: "Verb stem ends in consonant",
                result: "~을 거예요",
                examples: [{ native: "먹을 거예요 (먹다)", romanized: "meogeul geoyeyo", translation: "going to eat (먹 ends in consonant: 먹 + 을 거예요)" }, { native: "읽을 거예요 (읽다)", romanized: "ilgeul geoyeyo", translation: "going to read (읽 ends in consonant: 읽 + 을 거예요)" }, { native: "앉을 거예요 (앉다)", romanized: "anjeul geoyeyo", translation: "going to sit (앉 ends in consonant: 앉 + 을 거예요)" }],
            },
            {
                condition: "하다 verbs",
                result: "~할 거예요",
                examples: [{ native: "공부할 거예요", romanized: "gongbuhal geoyeyo", translation: "going to study (공부하다 → 할 거예요)" }, { native: "운동할 거예요", romanized: "undonghal geoyeyo", translation: "going to exercise (운동하다 → 할 거예요)" }, { native: "요리할 거예요", romanized: "yorihal geoyeyo", translation: "going to cook (요리하다 → 할 거예요)" }],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Two meanings, same form: definite plan (내일 갈 거예요 = I'm going tomorrow) and prediction (비가 올 거예요 = It's going to rain). Context makes the meaning clear.",
            },
            {
                type: "tip",
                content: "Negating future: same as present — 안 갈 거예요 (not going to go), 못 먹을 거예요 (won't be able to eat).",
            },
        ],
        fixedPhrases: [
            { native: "잘 다녀오세요.", romanized: "jal danyeooseyo.", translation: "Have a good trip! / Take care on your way!", note: "The standard send-off when someone is leaving on a trip" },
        ],
        examples: [
            { native: "내일 부산에 갈 거예요!", romanized: "Naeil busane gal geoyeyo!", translation: "I'm going to Busan tomorrow!" },
            { type: "dialogue" as const, exchanges: [
                { native: "이번 주말에 뭐 할 거예요?", romanized: "Ibeon jumare mwo hal geoyeyo?", translation: "What are you going to do this weekend?" },
                { native: "집에서 쉴 거예요.", romanized: "Jibeseo swil geoyeyo.", translation: "I'm going to rest at home." },
            ]},
            { native: "오늘 저녁에 집에서 요리할 거예요.", romanized: "Oneul jeonyeoge jibeseo yorihal geoyeyo.", translation: "I'm going to cook at home this evening." },
            { native: "비가 올 거예요. 우산 가져가세요.", romanized: "Biga ol geoyeyo. Usan gajyeogaseyo.", translation: "It's going to rain. Take an umbrella." },
            { native: "안 갈 거예요. 너무 피곤해요.", romanized: "An gal geoyeyo. Neomu pigonhaeyo.", translation: "I'm not going to go. I'm too tired." },
            { native: "지난주에는 서울에 갔어요. 이번 주말에는 집에서 쉴 거예요.", romanized: "Jinan juengeun seoure gasseoyo. Ibeon jumarengeun jibeseo swil geoyeyo.", translation: "Last week I went to Seoul. This weekend I'm going to rest at home." },
        ],
        inlineVocab: [
            { word: "~(으)ㄹ 거예요", romanized: "(eu)l geoyeyo", translation: "going to / will (future tense)" },
            { word: "갈 거예요", romanized: "gal geoyeyo", translation: "going to go (vowel stem: 가 + ㄹ 거예요)" },
            { word: "먹을 거예요", romanized: "meogeul geoyeyo", translation: "going to eat (consonant stem: 먹 + 을 거예요)" },
            { word: "내일", romanized: "naeil", translation: "tomorrow" },
            { word: "모레", romanized: "more", translation: "the day after tomorrow" },
            { word: "이따가", romanized: "ittaga", translation: "later today" },
            { word: "곧", romanized: "got", translation: "soon" },
            { word: "잘 다녀오세요", romanized: "Jal danyeooseyo.", translation: "Have a good trip! (lit. come back well — the standard send-off)" },
        ],
    },
    {
        id: "ko-g-a1-39",
        level: "A1",
        title: "Sentence connectors: 그리고, 하지만, 그래서, 그런데",
        explanation: `Sentence connectors link two complete sentences. They stand between sentences independently — not attached to verbs — just like "and," "but," and "so" in English.`,
        rules: [
            {
                condition: "Adding information or narrating sequence",
                result: "그리고 (and / and then)",
                examples: [{ native: "오늘 공부했어요. 그리고 운동도 했어요.", romanized: "Oneul gongbuhaesseoyo. Geurigo undongdo haesseoyo.", translation: "I studied today. And I also exercised." }],
            },
            {
                condition: "Strong contrast",
                result: "하지만 (but / however)",
                examples: [{ native: "한국어가 어려워요. 하지만 재미있어요.", romanized: "Hangugeoga eoryeowoyo. Hajiman jaemiisseoyo.", translation: "Korean is difficult. But it's interesting." }],
            },
            {
                condition: "Result or consequence",
                result: "그래서 (so / therefore)",
                examples: [{ native: "피곤했어요. 그래서 일찍 잤어요.", romanized: "Pigonhaesseoyo. Geuraeseo iljjik jasseoyo.", translation: "I was tired. So I went to bed early." }],
            },
            {
                condition: "Soft contrast or topic shift",
                result: "그런데 (but / by the way)",
                examples: [{ native: "오늘 바빠요. 그런데 내일은 괜찮아요.", romanized: "Oneul bappayo. Geureonde naeirun gwaenchanayo.", translation: "I'm busy today. But tomorrow is fine." }],
            },
            {
                condition: "Drawing a logical next step",
                result: "그러면 / 그럼 (then / in that case)",
                examples: [{ native: "시간 있어요? 그럼 같이 가요!", romanized: "Sigan isseoyo? Geureum gachi gayo!", translation: "Do you have time? Then let's go together!" }],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "When in doubt between 하지만 and 그런데: choose 그런데. It fits more situations and sounds more natural in everyday speech. Native speakers use 그런데 far more often.",
            },
        ],
        examples: [
            { native: "오늘 공부했어요. 그리고 친구도 만났어요.", romanized: "Oneul gongbuhaesseoyo. Geurigo chingudo mannasseoyo.", translation: "I studied today. And I also met a friend." },
            { native: "한국어가 어려워요. 하지만 재미있어요.", romanized: "Hangugeoga eoryeowoyo. Hajiman jaemiisseoyo.", translation: "Korean is difficult. But it's interesting." },
            { native: "비가 왔어요. 그래서 집에 있었어요.", romanized: "Biga wasseoyo. Geuraeseo jibe isseosseoyo.", translation: "It rained. So I stayed at home." },
            { native: "오늘 바빠요. 그런데 내일은 괜찮아요.", romanized: "Oneul bappayo. Geureonde naeirun gwaenchanayo.", translation: "I'm busy today. But tomorrow is fine. (그런데 = softer contrast)" },
            { native: "내일 시간 있어요? 그럼 같이 밥 먹어요!", romanized: "Naeil sigan isseoyo? Geureum gachi bap meogeoyo!", translation: "Are you free tomorrow? Then let's eat together!" },
            { native: "강남에 갔어요. 그런데 사람이 너무 많았어요. 그래서 일찍 왔어요.", romanized: "Gangname gasseoyo. Geureonde sarami neomu manasseoyo. Geuraeseo iljjik wasseoyo.", translation: "I went to Gangnam. But there were too many people. So I came home early." },
        ],
        inlineVocab: [
            { word: "그리고", romanized: "geurigo", translation: "and / and then (sentence connector)" },
            { word: "하지만", romanized: "hajiman", translation: "but / however (stronger contrast)" },
            { word: "그래서", romanized: "geuraeseo", translation: "so / therefore (result)" },
            { word: "그런데", romanized: "geureonde", translation: "but / by the way (softer — most versatile connector)" },
            { word: "그러면 / 그럼", romanized: "geureomyeon / geureum", translation: "then / in that case" },
            { word: "맞아요", romanized: "majayo", translation: "that's right / exactly (agreement)" },
            { word: "아, 그래요?", romanized: "A, geuraeyo?", translation: "Oh really? (light surprise reaction)" },
            { word: "피곤하다", romanized: "pigonhada", translation: "to be tired" },
        ],
    },
    {
        id: "ko-g-a1-40",
        level: "A1",
        title: "Clause connectors: ~고 (and/then), ~지만 (but), ~아서/어서 (because/so)",
        explanation: `Clause connectors attach directly to verb stems and join two clauses into one sentence — unlike sentence connectors which stand between complete sentences.`,
        rules: [
            {
                condition: "~고 (and / and then) — no vowel harmony",
                result: "verb stem + 고",
                examples: [{ native: "먹고 가요", romanized: "meokgo gayo", translation: "eat and then go (먹 + 고)" }, { native: "아침을 먹고 학교에 가요", romanized: "achimeul meokgo hakgyoe gayo", translation: "I eat breakfast and then go to school" }, { native: "커피를 마시고 공부해요", romanized: "keopireul masigo gongbuhaeyo", translation: "I drink coffee and then study" }],
            },
            {
                condition: "~지만 (but) — no vowel harmony",
                result: "verb/adjective stem + 지만",
                examples: [{ native: "어렵지만 재미있어요", romanized: "eoryeopjiman jaemiisseoyo", translation: "difficult but interesting (어렵 + 지만)" }, { native: "한국어를 좋아하지만 어려워요", romanized: "hangugeoreul joahajiman eoryeowoyo", translation: "I like Korean but it's difficult" }, { native: "맛있지만 너무 매워요", romanized: "masissejiman neomu maeweoyo", translation: "It's delicious but too spicy" }],
            },
            {
                condition: "~아서/어서 (because/so) — same vowel harmony as present tense",
                result: "ㅏ/ㅗ stems → 아서, others → 어서, 하다 → 해서",
                examples: [{ native: "바빠서 못 갔어요", romanized: "bappaseo mot gasseoyo", translation: "I was busy so I couldn't go (바쁘 → 바빠서)" }, { native: "맛있어서 많이 먹었어요", romanized: "masisseo manhi meogeosseoyo", translation: "It was delicious so I ate a lot (맛있 → 맛있어서)" }, { native: "피곤해서 일찍 잤어요", romanized: "pigonhaeseo iljjik jasseoyo", translation: "I was tired so I went to bed early (피곤하 → 피곤해서)" }],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "~아서/어서 rule: the cause clause does NOT take past tense. Past tense goes on the result clause only. 바빠서 못 갔어요 ✓ / 바빴어서 못 갔어요 ✗. This is one of the most common A1/A2 errors.",
            },
            {
                type: "tip",
                content: "~고 is the same connector in ~고 싶어요 (want to do): 가고 싶어요 = go + 고 + want. You've been using this clause connector all along.",
            },
        ],
        examples: [
            { native: "아침을 먹고 학교에 가요.", romanized: "Achimeul meokgo hakgyoe gayo.", translation: "I eat breakfast and (then) go to school. (~고 = and/then)" },
            { native: "한국어를 좋아하지만 어려워요.", romanized: "Hangugeoreul joahajiman eoryeowoyo.", translation: "I like Korean but it's difficult. (~지만 = but)" },
            { native: "바빠서 못 갔어요.", romanized: "Bappaseo mot gasseoyo.", translation: "I was busy so I couldn't go. (~아서 = because/so)" },
            { native: "맛있어서 많이 먹었어요!", romanized: "Masisseo manhi meogeosseoyo!", translation: "It was so delicious so I ate a lot!" },
            { native: "비가 오지만 나가고 싶어요.", romanized: "Biga ojiman nagago sipeoyo.", translation: "It's raining but I want to go out." },
            { native: "피곤해서 일찍 잤어요.", romanized: "Pigonhaeseo iljjik jasseoyo.", translation: "I was tired so I went to bed early. (cause in base form — no 았/었 on 피곤해서)" },
        ],
        inlineVocab: [
            { word: "~고", romanized: "~go", translation: "and / and then (clause connector — no vowel harmony)" },
            { word: "~지만", romanized: "~jiman", translation: "but / however (clause connector — no vowel harmony)" },
            { word: "~아서/어서", romanized: "~aseo/eoseo", translation: "so / because (same vowel harmony as present tense)" },
            { word: "~해서", romanized: "~haeseo", translation: "because/so (하다 verbs — always 해서)" },
            { word: "바빠서요", romanized: "bappaseoyo", translation: "because I'm busy (바빠서 + polite 요 — short reason-giving)" },
            { word: "그러니까", romanized: "geureonikka", translation: "so / what I mean is (discourse marker)" },
            { word: "사실", romanized: "sasil", translation: "actually / in fact" },
            { word: "계획", romanized: "gyehoek", translation: "plan / schedule" },
        ],
    },
    {
        id: "ko-g-a1-41",
        level: "A1",
        title: "Conditional ~(으)면 — if/when: vowel/ㄹ → 면, consonant → 으면",
        explanation: `~(으)면 expresses conditions and hypotheticals. It is one of the simpler patterns in Korean — no vowel harmony on the connector itself. After a vowel or ㄹ: 면. After a consonant: 으면.`,
        rules: [
            {
                condition: "Verb stem ends in vowel or ㄹ",
                result: "~면",
                examples: [{ native: "가면 (if you go)", romanized: "gamyeon", translation: "if you go (가 ends in vowel: 가 + 면)" }, { native: "오면 (if you come)", romanized: "omyeon", translation: "if you come (오 ends in vowel: 오 + 면)" }, { native: "하면 (if you do)", romanized: "hamyeon", translation: "if you do (하 ends in vowel: 하 + 면)" }],
            },
            {
                condition: "Verb stem ends in consonant",
                result: "~으면",
                examples: [{ native: "먹으면 (if you eat)", romanized: "meogeumyeon", translation: "if you eat (먹 ends in consonant: 먹 + 으면)" }, { native: "있으면 (if there is)", romanized: "isseuomyeon", translation: "if there is / if you have (있 ends in consonant: 있 + 으면)" }, { native: "없으면 (if there isn't)", romanized: "eopseuomyeon", translation: "if there isn't / if you don't have (없 ends in consonant: 없 + 으면)" }],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "~(으)면 is simpler than ~아요/어요 — no vowel harmony variants to worry about on the first syllable, no major irregulars. After a vowel or ㄹ: just add 면. After a consonant: add 으면.",
            },
            {
                type: "tip",
                content: "~(으)면 좋겠어요 = 'it would be nice if' / 'I hope': 날씨가 맑으면 좋겠어요 (I hope the weather is clear). One of the most natural ways to express a wish in Korean.",
            },
        ],
        fixedPhrases: [
            { native: "시간이 있으면 같이 가요.", romanized: "sigani isseumyeon gachi gayo.", translation: "If you have time, let's go together." },
            { native: "모르면 물어보세요.", romanized: "moreumyeon mureobaseyo.", translation: "If you don't know, please ask." },
        ],
        examples: [
            { native: "시간이 있으면 같이 밥 먹어요.", romanized: "Sigani isseuomyeon gachi bap meogeoyo.", translation: "If you have time, let's eat together." },
            { type: "dialogue" as const, exchanges: [
                { native: "비가 오면 카페에서 공부할까요?", romanized: "Biga omyeon kapeeseo gongbuhalkkayo?", translation: "If it rains, shall we study at a café?" },
                { native: "좋아요! 그러면 카페에서 만나요.", romanized: "Joayo! Geureomyeon kapeeseo mannayo.", translation: "Sure! Then let's meet at the café." },
            ]},
            { native: "피곤하면 쉬세요.", romanized: "Pigonhamyeon swiseyo.", translation: "If you're tired, rest." },
            { native: "날씨가 맑으면 좋겠어요.", romanized: "Nalssiga malgeuomyeon joketsseoyo.", translation: "I hope the weather is clear. (~(으)면 좋겠어요 = hope/wish)" },
            { native: "한국에 가면 흑돼지를 꼭 먹을 거예요!", romanized: "Hanguge gamyeon heukdwaejireul kkok meogeul geoyeyo!", translation: "If I go to Korea, I'll definitely eat black pork!" },
            { native: "모르면 물어보세요. 괜찮아요.", romanized: "Moreumyeon mureobaseyo. Gwaenchanayo.", translation: "If you don't know, please ask. It's okay." },
        ],
        inlineVocab: [
            { word: "~(으)면", romanized: "(eu)myeon", translation: "if / when (conditional: vowel/ㄹ → 면, consonant → 으면)" },
            { word: "~(으)면 좋겠어요", romanized: "(eu)myeon joketsseoyo", translation: "it would be nice if / I hope (wish/hope expression)" },
            { word: "가면", romanized: "gamyeon", translation: "if you go (vowel stem: 가 + 면)" },
            { word: "먹으면", romanized: "meogeumyeon", translation: "if you eat (consonant stem: 먹 + 으면)" },
            { word: "괜찮으면", romanized: "gwaenchaneumyeon", translation: "if that's okay / if you don't mind" },
            { word: "가능하면", romanized: "ganeunghamyeon", translation: "if possible" },
            { word: "맑다", romanized: "makda", translation: "to be clear / sunny (날씨가 맑다 = the weather is clear)" },
            { word: "문자 주세요", romanized: "munja juseyo", translation: "please send a message / text me" },
        ],
    },
    {
        id: "ko-g-a1-42",
        level: "A1",
        title: "Capstone review — consolidating past, present, future, and connectors",
        explanation: `This is not a new grammar lesson. It is a consolidation — a chance to see everything from A1 working together, and to recognise what A1 fluency looks like.`,
        notes: [
            {
                type: "tip",
                content: "A1 fluency checkpoint: can you produce three or four connected sentences about your daily life using past, present, and future tense with connectors? If yes, you are ready for A2.",
            },
            {
                type: "tip",
                content: "Every A2 pattern has already appeared as a chunk in this course: ~는데/은데, ~(으)ㄹ 수 있어요, ~고 있어요, and 반말. A2 is explanation for things already in your ear.",
            },
        ],
        examples: [
            { native: "저는 한국어를 배우고 있어요. 재미있지만 어려워요.", romanized: "Jeoneun hangugeoreul baeugo isseoyo. Jaemiitjiman eoryeowoyo.", translation: "I'm learning Korean. It's interesting but difficult. (~고 있어요 chunk + ~지만)" },
            { native: "지난주에는 바빠서 공부 못 했어요. 이번 주에는 열심히 할 거예요.", romanized: "Jinan juengeun bappaseo gongbu mot haesseoyo. Ibeon juengeun yeolsimhi hal geoyeyo.", translation: "Last week I was busy so I couldn't study. This week I'm going to work hard. (past + ~아서 + future)" },
            { native: "시간이 있으면 같이 공부해요. 저도 배우고 싶어요!", romanized: "Sigani isseumyeon gachi gongbuhaeyo. Jeodo baeugo sipeoyo!", translation: "If you have time, let's study together. I want to learn too! (~(으)면 + ~고 싶어요)" },
            { native: "한국에 가면 경복궁에도 가고 제주도에도 갈 거예요.", romanized: "Hanguge gamyeon Gyeongbokgunge gago jejudoedo gal geoyeyo.", translation: "If I go to Korea, I'll go to Gyeongbokgung and also Jeju Island. (~(으)면 + ~고 + future)" },
            { native: "날씨가 좋았어요. 그래서 한강에 걸어서 갔어요. 정말 좋았어요!", romanized: "Nalssiga joasseoyo. Geuraeseo hangange georeoseo gasseoyo. Jeongmal joasseoyo!", translation: "The weather was nice. So I walked to the Han River. It was really great! (past + 그래서 + past)" },
            { native: "모르면 물어보세요. 항상 도와 드릴게요.", romanized: "Moreumyeon mureobaseyo. Hangsang dowa deullilgeyo.", translation: "If you don't know, please ask. I'll always help. (~(으)면 + ~아/어 주다)" },
        ],
        inlineVocab: [
            { word: "~았어요/었어요", romanized: "~asseoyo/eosseoyo", translation: "past tense (vowel harmony — same rule as present)" },
            { word: "~(으)ㄹ 거예요", romanized: "(eu)l geoyeyo", translation: "future tense (plans and predictions)" },
            { word: "~고 / ~지만 / ~아서/어서", romanized: "~go / ~jiman / ~aseo/eoseo", translation: "clause connectors (and/then, but, because/so)" },
            { word: "~(으)면", romanized: "(eu)myeon", translation: "conditional (if/when)" },
            { word: "~고 싶어요", romanized: "~go sipeoyo", translation: "want to (first person)" },
            { word: "~(으)ㄹ까요?", romanized: "(eu)lkkayo?", translation: "shall we? / I wonder (suggestion)" },
            { word: "~아/어 주세요", romanized: "~a/eo juseyo", translation: "please do (for me) — request" },
            { word: "해요체", romanized: "haeyoche", translation: "your speech level — polite, warm, and correct for everything at A1" },
        ],
    },
]
