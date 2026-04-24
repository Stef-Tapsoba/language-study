import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-30",
        level: "A1",
        title: "에 vs 에서 fully explained — destination/existence vs action location",
        explanation: `에 and 에서 have been in your sentences since Block 2. Here is the complete rule: 에 marks destinations and static locations; 에서 marks where actions take place. A third use of 에서 — meaning "from" — covers the direction away from a place.`,
        rules: [
            {
                condition: "Destination (moving toward) or static existence (있다/없다)",
                result: "에",
                examples: [{ native: "학교에 가요", romanized: "hakgyoe gayo", translation: "I go to school.", annotation: "destination — 에"}, { native: "집에 있어요", romanized: "jibe isseoyo", translation: "I'm at home.", annotation: "static existence — 에"}, { native: "서울에 살아요", romanized: "seoure sarayo", translation: "I live in Seoul.", annotation: "static location with 살다 — 에"}],
            },
            {
                condition: "Location where an action takes place",
                result: "에서",
                examples: [{ native: "학교에서 공부해요", romanized: "hakgyoeseo gongbuhaeyo", translation: "I study at school.", annotation: "action location — 에서"}, { native: "집에서 요리해요", romanized: "jibeseo yorihaeyo", translation: "I cook at home.", annotation: "action location — 에서"}, { native: "카페에서 친구를 만나요", romanized: "kapeeseo chingureul mannayo", translation: "I meet a friend at the café.", annotation: "action location — 에서"}],
            },
            {
                condition: "Origin — coming FROM a place",
                result: "에서 (with movement verb pointing away)",
                examples: [{ native: "어디에서 왔어요?", romanized: "eodieseo wasseoyo?", translation: "Where did you come from?", annotation: "에서 = origin"}, { native: "집에서 나왔어요", romanized: "jibeseo nawasseoyo", translation: "I came out from home.", annotation: "에서 = origin/from"}, { native: "영국에서 왔어요", romanized: "yeonggugeso wasseoyo", translation: "I came from the UK.", annotation: "에서 = from"}],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Quick test: is the place a destination or where something IS? → 에. Is the place where an action is HAPPENING? → 에서.",
            },
        ],
        examples: [
            { native: "도서관에 가요. 도서관에서 책을 읽어요.", romanized: "Doseogwane gayo. Doseogwaneseo chaegeul ilgeoyo.", translation: "I go to the library. I read books at the library.", annotation: "에 = destination; 에서 = action location"},
            { native: "집에 있어요. 집에서 요리해요.", romanized: "Jibe isseoyo. Jibeseo yorihaeyo.", translation: "I'm at home. I cook at home.", annotation: "에 = existence; 에서 = action location"},
            { native: "카페에 가요. 카페에서 친구를 만나요.", romanized: "Kapee gayo. Kapeeseo chingureul mannayo.", translation: "I go to the café. I meet a friend at the café." },
            { native: "어디에서 왔어요? — 영국에서 왔어요.", romanized: "Eodieseo wasseoyo? — Yeonggugeso wasseoyo.", translation: "Where did you come from? — I came from the UK.", annotation: "에서 = from"},
            { native: "회사에서 점심을 먹어요.", romanized: "Hwisaeseo jeomsimeul meogeoyo.", translation: "I eat lunch at the office.", annotation: "에서 = where the eating happens"},
            { native: "저는 서울에 살아요. 홍대에서 일해요.", romanized: "Jeoneun seoure sarayo. Hongdaeseo ilhaeyo.", translation: "I live in Seoul. I work in Hongdae." },
        ],
        inlineVocab: [
            { word: "에", romanized: "e", translation: "particle — destination (going TO) or static location (being AT with 있다)" },
            { word: "에서", romanized: "eseo", translation: "particle — where an action takes place; also means 'from'" },
            { word: "가다 / 오다", romanized: "gada / oda", translation: "to go / to come (movement verbs — use 에)" },
            { word: "있다 / 없다", romanized: "itda / eopda", translation: "to exist/be at / to not exist (use 에)" },
            { word: "공부하다", romanized: "gongbuhada", translation: "to study (action verb — use 에서)" },
            { word: "일하다", romanized: "ilhada", translation: "to work (action verb — use 에서)" },
            { word: "요리하다", romanized: "yorihada", translation: "to cook (action verb — use 에서)" },
            { word: "~(으)로", romanized: "(eu)ro", translation: "particle — direction (towards) or means (by): 왼쪽으로, 지하철로" },
        ],
    },
    {
        id: "ko-g-a1-31",
        level: "A1",
        title: "Transport vocabulary: 타다/걷다/가다 with particles",
        explanation: `Korean transport uses three core verbs: 타다 (board), 내리다 (get off), 걷다 (walk). The particle (으)로 marks the means of transport — the "by" of how you travel.`,
        rules: [
            {
                condition: "Means of transport (by/via)",
                result: "(으)로 — 로 after vowel or ㄹ, 으로 after consonant",
                examples: [{ native: "지하철로 가요", romanized: "jihacheolro gayo", translation: "I go by subway.", annotation: "지하철 ends in ㄹ → 로"}, { native: "버스로 가요", romanized: "beoseuro gayo", translation: "I go by bus.", annotation: "버스 ends in vowel → 로"}, { native: "택시로 가요", romanized: "taeksiro gayo", translation: "I go by taxi.", annotation: "택시 ends in vowel → 로"}],
            },
            {
                condition: "Boarding a vehicle",
                result: "[vehicle]을/를 타요",
                examples: [{ native: "지하철을 타요", romanized: "jihacheoleul tayo", translation: "I ride the subway.", annotation: "을/를 + 타다 = board a vehicle"}, { native: "버스를 타요", romanized: "beoseureul tayo", translation: "I ride the bus" }, { native: "택시를 타요", romanized: "taeksireul tayo", translation: "I take a taxi" }],
            },
            {
                condition: "Going on foot",
                result: "걸어서 가요",
                examples: [{ native: "걸어서 가요", romanized: "georeoseo gayo", translation: "I go on foot / I walk there" }, { native: "걸어서 10분이에요", romanized: "georeoseo sip bunieyo", translation: "It's 10 minutes on foot" }, { native: "가까워서 걸어서 가요", romanized: "gakkaweoseo georeoseo gayo", translation: "It's close so I walk there" }],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "(으)로 expresses method in three contexts: direction (왼쪽으로 = toward the left), transport (지하철로 = by subway), payment (카드로 = by card). Same particle, same job.",
            },
        ],
        fixedPhrases: [
            { native: "___ 역에서 내리세요.", romanized: "___ yeokeseo naeriseyo.", translation: "Get off at ___ station." },
            { native: "얼마나 걸려요?", romanized: "eolmana geollyeoyo?", translation: "How long does it take?" },
            { native: "여기에서 세워 주세요.", romanized: "yeogieseo sewo juseyo.", translation: "Please stop here. (to taxi driver)" },
        ],
        examples: [
            { native: "지하철로 가요. 빠르고 편해요.", romanized: "Jihacheolro gayo. Ppareukko pyeonhaeyo.", translation: "I go by subway. It's fast and convenient." },
            { native: "버스 타면 얼마나 걸려요?", romanized: "Beosu tamyeon eolmana geollyeoyo?", translation: "How long does it take by bus?" },
            { native: "걸어서 갈 수 있어요? 가까워요?", romanized: "Georeoseo gal su isseoyo? Gakkawoyo?", translation: "Can I walk there? Is it close?" },
            { native: "이 역에서 갈아타세요. 2호선이에요.", romanized: "I yeokeseo garataseyo. Ihosenieyeo.", translation: "Transfer at this station. It's Line 2." },
            { native: "택시로 가면 한 이십 분쯤 걸릴 거예요.", romanized: "Taeksiro gamyeon han isip munjjeum geollil geoyeyo.", translation: "If you go by taxi, it'll take about 20 minutes." },
            { type: "dialogue" as const, exchanges: [
                { native: "어디로 가세요?", romanized: "Eodiro gaseyo?", translation: "Where are you going?" },
                { native: "경복궁으로 가 주세요.", romanized: "Gyeongbokgungeuro ga juseyo.", translation: "Please take me to Gyeongbokgung." },
            ]},
        ],
        inlineVocab: [
            { word: "타다", romanized: "tada", translation: "to ride / to board (지하철을 타요 = ride the subway)" },
            { word: "내리다", romanized: "naerida", translation: "to get off (버스에서 내려요 = get off the bus)" },
            { word: "갈아타다", romanized: "gallatada", translation: "to transfer (transport)" },
            { word: "걷다", romanized: "geotda", translation: "to walk" },
            { word: "걸어서", romanized: "georeoseo", translation: "on foot / by walking" },
            { word: "지하철", romanized: "jihacheol", translation: "subway / metro" },
            { word: "편해요", romanized: "pyeonhaeyo", translation: "convenient / comfortable" },
            { word: "혹시", romanized: "hoksi", translation: "by any chance / perhaps" },
        ],
    },
    {
        id: "ko-g-a1-32",
        level: "A1",
        title: "Native Korean numbers in context: counters 개/명/잔/그릇",
        explanation: `Native Korean numbers pair with most everyday counters for people, objects, and drinks. Before a counter, the first four numbers change form: 하나/둘/셋/넷 → 한/두/세/네.`,
        rules: [
            {
                condition: "하나/둘/셋/넷 before a counter",
                result: "Shorten to 한/두/세/네",
                examples: [{ native: "한 잔", romanized: "han jan", translation: "one cup/glass.", annotation: "하나 → 한 before counter"}, { native: "두 명", romanized: "du myeong", translation: "two people.", annotation: "둘 → 두 before counter"}, { native: "세 개", romanized: "se gae", translation: "three items.", annotation: "셋 → 세 before counter"}, { native: "네 그릇", romanized: "ne geureut", translation: "four bowls.", annotation: "넷 → 네 before counter"}],
            },
            {
                condition: "다섯 and above before a counter",
                result: "No change",
                examples: [{ native: "다섯 잔", romanized: "daseot jan", translation: "five cups.", annotation: "다섯 — no change before counter"}, { native: "여섯 개", romanized: "yeoseot gae", translation: "six items.", annotation: "여섯 — no change before counter"}, { native: "일곱 명", romanized: "ilgop myeong", translation: "seven people.", annotation: "일곱 — no change before counter"}],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Counter pattern: noun + number + counter (comes AFTER the noun). 커피 두 잔 주세요 = Two coffees, please. Not 두 잔 커피 주세요.",
            },
            {
                type: "tip",
                content: "인분 (portions) uses SINO-Korean numbers, not native: 이 인분 (two portions), 삼 인분 (three portions).",
            },
        ],
        examples: [
            { native: "만두 세 개 주세요.", romanized: "Mandu se gae juseyo.", translation: "Three dumplings, please.", annotation: "개 = general objects"},
            { native: "커피 두 잔이랑 물 한 잔 주세요.", romanized: "Keopi du jamirang mul han jan juseyo.", translation: "Two coffees and one water, please.", annotation: "잔 = cups/glasses"},
            { type: "dialogue" as const, exchanges: [
                { native: "몇 명이세요?", romanized: "Myeot myeongsiseyo?", translation: "How many people?" },
                { native: "네 명이요.", romanized: "Ne myeongiyeo.", translation: "Four people." },
            ]},
            { native: "라면 두 그릇이랑 소주 한 병 주세요.", romanized: "Ramen du geuteusirang soju han byeong juseyo.", translation: "Two bowls of ramen and one bottle of soju, please." },
            { native: "사과 다섯 개 살게요.", romanized: "Sagwa daseos gae salgeyo.", translation: "I'll buy five apples.", annotation: "다섯 — no change before counter"},
            { native: "삼겹살 이 인분 주세요.", romanized: "Samgyeopsal i inbun juseyo.", translation: "Two portions of samgyeopsal, please.", annotation: "인분 uses Sino-Korean: 이 인분"},
        ],
        inlineVocab: [
            { word: "개", romanized: "gae", translation: "counter — general objects" },
            { word: "명", romanized: "myeong", translation: "counter — people" },
            { word: "잔", romanized: "jan", translation: "counter — glasses/cups of liquid" },
            { word: "그릇", romanized: "geureut", translation: "counter — bowls" },
            { word: "병", romanized: "byeong", translation: "counter — bottles" },
            { word: "인분", romanized: "inbun", translation: "counter — portions/servings (uses Sino-Korean numbers)" },
            { word: "한/두/세/네", romanized: "han/du/se/ne", translation: "1/2/3/4 before a counter (same as age counting)" },
            { word: "몇 명", romanized: "myeot myeong", translation: "how many people" },
        ],
    },
    {
        id: "ko-g-a1-33",
        level: "A1",
        title: "Sino-Korean numbers for money + 원; reading prices",
        explanation: `Sino-Korean numbers handle all prices in Korean. The system is fully regular — you already know 일 through 십. Now add 백 (100), 천 (1,000), and 만 (10,000).`,
        rules: [
            {
                condition: "Hundreds, thousands, ten-thousands",
                result: "백(100) · 천(1,000) · 만(10,000)",
                examples: [{ native: "오백 원 (₩500)", romanized: "obaek won", translation: "500 won.", annotation: "오 × 백"}, { native: "삼천 원 (₩3,000)", romanized: "samcheon won", translation: "3,000 won.", annotation: "삼 × 천"}, { native: "만 원 (₩10,000)", romanized: "man won", translation: "10,000 won.", annotation: "만 = ten thousand — Korean base unit"}],
            },
            {
                condition: "Numbers above 10,000 (Korean units of 만)",
                result: "Stack: [만단위] + 만 + [천/백/십/일]",
                examples: [{ native: "만 오천 (15,000)", romanized: "man ocheon", translation: "15,000.", annotation: "만 + 오천"}, { native: "이만 삼천 (23,000)", romanized: "iman samcheon", translation: "23,000.", annotation: "이만 + 삼천 — two units of 만"}, { native: "오십만 (500,000)", romanized: "osiman", translation: "500,000.", annotation: "오십 × 만"}],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Korean counts in units of 만 (10,000), not 1,000. 10,000 = 만 (not 십천). 20,000 = 이만. 50,000 = 오만. This is the main mental shift from English.",
            },
            {
                type: "culture",
                content: "재래시장 (traditional markets) often accept friendly bargaining (흥정). 조금 싸게 해 주세요 (please make it a little cheaper) is natural there. Ordinary shops have fixed prices.",
            },
        ],
        fixedPhrases: [
            { native: "이거 얼마예요?", romanized: "igeo eolmayeyo?", translation: "How much is this?", note: "The most useful question in any Korean shop" },
            { native: "너무 비싸요.", romanized: "neomu bissayo.", translation: "It's too expensive." },
            { native: "조금 싸게 해 주세요.", romanized: "jogeum ssage hae juseyo.", translation: "Please make it a little cheaper." },
        ],
        examples: [
            { type: "dialogue" as const, exchanges: [
                { native: "이거 얼마예요?", romanized: "Igeo eolmayeyo?", translation: "How much is this?" },
                { native: "만 이천 원이에요.", romanized: "Man icheon wonieyeo.", translation: "It's 12,000 won." },
            ]},
            { native: "저거는 삼만 오천 원이에요.", romanized: "Jeogeoneun samman ocheon wonieyeo.", translation: "That one over there is 35,000 won." },
            { native: "너무 비싸요. 조금 싸게 해 주세요.", romanized: "Neomu bissayo. Jogeum ssage hae juseyo.", translation: "It's too expensive. Please make it a little cheaper." },
            { native: "모두 팔천오백 원이에요.", romanized: "Modu palcheon obaek wonieyeo.", translation: "It's 8,500 won in total." },
            { native: "이만 칠천 원 있어요?", romanized: "Iman chilcheon won isseoyo?", translation: "Do you have 27,000 won?" },
            { native: "카드 돼요? 아니면 현금으로 낼게요.", romanized: "Kadeu dwaeyo? Animyeon hyeongeumeuro naelgeyo.", translation: "Do you take card? Otherwise I'll pay in cash." },
        ],
        inlineVocab: [
            { word: "원", romanized: "won", translation: "Korean won (₩)" },
            { word: "백 / 천 / 만", romanized: "baek / cheon / man", translation: "100 / 1,000 / 10,000" },
            { word: "이거 / 그거 / 저거", romanized: "igeo / geugeo / jeogeo", translation: "this / that (near you) / that over there" },
            { word: "얼마예요?", romanized: "Eolmayeyo?", translation: "How much is it?" },
            { word: "비싸요", romanized: "bissayo", translation: "expensive" },
            { word: "싸요", romanized: "ssayo", translation: "cheap / inexpensive" },
            { word: "살게요", romanized: "salgeyo", translation: "I'll buy it" },
            { word: "현금", romanized: "hyeongeum", translation: "cash" },
        ],
    },
    {
        id: "ko-g-a1-34",
        level: "A1",
        title: "Polite instruction ~(으)세요 (please do / do this)",
        explanation: `~(으)세요 is the polite instruction/invitation form. You have been hearing it throughout the course — in directions (직진하세요), at restaurants (앉으세요), and requests (기다리세요).`,
        rules: [
            {
                condition: "Verb stem ends in vowel or ㄹ",
                result: "~세요",
                examples: [{ native: "가세요", romanized: "gaseyo", translation: "please go.", annotation: "가 ends in vowel → 세요"}, { native: "오세요", romanized: "oseyo", translation: "please come.", annotation: "오 ends in vowel → 세요"}, { native: "보세요", romanized: "boseyo", translation: "please look / please watch.", annotation: "보 ends in vowel → 세요"}, { native: "주세요", romanized: "juseyo", translation: "please give me.", annotation: "주다 → 주세요 — the most-used 세요 form"}],
            },
            {
                condition: "Verb stem ends in consonant",
                result: "~으세요",
                examples: [{ native: "앉으세요", romanized: "anjeuseyo", translation: "please sit down.", annotation: "앉 ends in consonant → 으세요"}, { native: "읽으세요", romanized: "ilgeuseyo", translation: "please read.", annotation: "읽 ends in consonant → 으세요"}, { native: "기다리세요", romanized: "gidarieseyo", translation: "please wait.", annotation: "기다리 ends in vowel → 세요"}],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "~(으)세요 is a warm invitation, not a command. When a shopkeeper says 앉으세요, they're inviting you to sit, not ordering you.",
            },
            {
                type: "tip",
                content: "주세요 (please give me) is ~어 주세요 from 주다 (give). The next lesson explains the full ~아/어 주세요 request pattern.",
            },
        ],
        fixedPhrases: [
            { native: "이쪽으로 오세요.", romanized: "ijjogeuro oseyo.", translation: "Please come this way." },
            { native: "잠깐만 기다리세요.", romanized: "jamkkanman gidarieseyo.", translation: "Please wait just a moment." },
        ],
        examples: [
            { native: "이쪽으로 오세요. 여기 앉으세요.", romanized: "Ijjogeuro oseyo. Yeogi anjeuseyo.", translation: "Please come this way. Please sit here." },
            { native: "직진하세요. 그다음에 왼쪽으로 도세요.", romanized: "Jikjinhaseyo. Geudeaeume oenjjogeuro doseyo.", translation: "Go straight. Then turn left." },
            { native: "천천히 말씀해 주세요. 잘 못 들었어요.", romanized: "Cheoncheonhi malsseum hae juseyo. Jal mot deureosseoyo.", translation: "Please speak slowly. I didn't hear well." },
            { native: "잠깐만 기다리세요.", romanized: "Jamkkanman gidarieseyo.", translation: "Please wait just a moment." },
            { native: "여기 서명해 주세요.", romanized: "Yeogi seomyeonghae juseyo.", translation: "Please sign here." },
            { native: "모르면 물어보세요!", romanized: "Moreumyeon mureobaseyo!", translation: "If you don't know, please ask!" },
        ],
        inlineVocab: [
            { word: "~(으)세요", romanized: "(eu)seyo", translation: "please do / do this (polite instruction or invitation)" },
            { word: "가세요", romanized: "gaseyo", translation: "please go (vowel stem → 세요)" },
            { word: "앉으세요", romanized: "anjeseyo", translation: "please sit (consonant stem → 으세요)" },
            { word: "기다리세요", romanized: "gidarieseyo", translation: "please wait" },
            { word: "천천히", romanized: "cheoncheonhi", translation: "slowly" },
            { word: "잠깐만요", romanized: "jamkkanmanyo", translation: "just a moment" },
            { word: "이쪽으로", romanized: "ijjogeuro", translation: "this way (이쪽 = this side + 으로)" },
            { word: "서명하다", romanized: "seomyeonghada", translation: "to sign" },
        ],
    },
    {
        id: "ko-g-a1-35",
        level: "A1",
        title: "~아/어 주세요 (please do this for me) + the 해요체 register payoff",
        explanation: `~아/어 주세요 asks someone to do something for you. You have been using it since the restaurant unit (주세요, 기다려 주세요) — here is the full pattern.`,
        rules: [
            {
                condition: "Forming ~아/어 주세요",
                result: "Present tense form (without 요) + 주세요",
                examples: [{ native: "말해 주세요 (from 말해요)", romanized: "malhae juseyo", translation: "please say / please speak.", annotation: "말해요 → 말해 + 주세요"}, { native: "기다려 주세요 (from 기다려요)", romanized: "gidaryeo juseyo", translation: "please wait for me.", annotation: "기다려요 → 기다려 + 주세요"}, { native: "열어 주세요 (from 열어요)", romanized: "yeoreo juseyo", translation: "please open.", annotation: "열어요 → 열어 + 주세요"}],
            },
        ],
        notes: [
            {
                type: "culture",
                content: "해요체 (the ~요 ending you've been using since Unit 4) is appropriate for 95% of real-life conversations — strangers, shops, restaurants, workplaces. Never rude. When in doubt, use it.",
            },
            {
                type: "tip",
                content: "The form before 주세요 is the same ~아/어 form from the present tense without 요. 기다려요 → 기다려 주세요. You already know the building block.",
            },
        ],
        fixedPhrases: [
            { native: "한 번 더 말해 주세요.", romanized: "han beon deo malhae juseyo.", translation: "Please say it one more time.", note: "Essential survival phrase for learners" },
            { native: "천천히 말해 주세요.", romanized: "cheoncheonhi malhae juseyo.", translation: "Please speak slowly.", note: "Essential survival phrase for learners" },
            { native: "도와 주세요!", romanized: "dowa juseyo!", translation: "Please help me!" },
        ],
        examples: [
            { native: "한 번 더 말해 주세요.", romanized: "Han beon deo malhae juseyo.", translation: "Please say it one more time." },
            { native: "천천히 말해 주세요. 빨라요.", romanized: "Cheoncheonhi malhae juseyo. Ppallayo.", translation: "Please speak slowly. It's too fast." },
            { native: "사진 찍어 주세요!", romanized: "Sajin jjigeo juseyo!", translation: "Please take a photo!" },
            { native: "창문 열어 주세요.", romanized: "Changmun yeoreo juseyo.", translation: "Please open the window." },
            { native: "한국어로 써 주세요.", romanized: "Hangugeoro sseo juseyo.", translation: "Please write it in Korean." },
            { native: "도와 주세요! 길을 잃었어요.", romanized: "Dowa juseyo! Gireul ireoosseoyo.", translation: "Please help me! I'm lost." },
        ],
        inlineVocab: [
            { word: "~아/어 주세요", romanized: "~a/eo juseyo", translation: "please do ___ (for me) — request form" },
            { word: "해요체", romanized: "haeyoche", translation: "polite informal speech level — your default throughout this course" },
            { word: "합쇼체", romanized: "hapsyoche", translation: "formal polite speech level (TV, announcements)" },
            { word: "반말", romanized: "banmal", translation: "casual informal speech (close friends — taught at B1)" },
            { word: "한 번 더", romanized: "han beon deo", translation: "one more time" },
            { word: "말하다", romanized: "malhada", translation: "to speak / to say" },
            { word: "도와주다", romanized: "dowajuda", translation: "to help" },
            { word: "창문", romanized: "changmun", translation: "window" },
        ],
    },
    {
        id: "ko-g-a1-36",
        level: "A1",
        title: "~(으)ㄹ까요? — suggestion/question form (Shall we? What do you think?)",
        explanation: `~(으)ㄹ까요? suggests doing something together or wonders aloud. It was already in your ear — in dialogues: 뭐 먹을까요?, 갈까요?`,
        rules: [
            {
                condition: "Verb stem ends in vowel or ㄹ",
                result: "~ㄹ까요?",
                examples: [{ native: "갈까요?", romanized: "galkkayo?", translation: "Shall we go?", annotation: "가 ends in vowel: 가 + ㄹ까요"}, { native: "볼까요?", romanized: "bolkkayo?", translation: "Shall we watch?", annotation: "보 ends in vowel: 보 + ㄹ까요"}, { native: "만날까요?", romanized: "mannalkkayo?", translation: "Shall we meet?", annotation: "만나 ends in vowel: 만나 + ㄹ까요"}],
            },
            {
                condition: "Verb stem ends in consonant",
                result: "~을까요?",
                examples: [{ native: "먹을까요?", romanized: "meogeulkkayo?", translation: "Shall we eat?", annotation: "먹 ends in consonant: 먹 + 을까요"}, { native: "앉을까요?", romanized: "anjeulkkayo?", translation: "Shall we sit?", annotation: "앉 ends in consonant: 앉 + 을까요"}, { native: "읽을까요?", romanized: "ilgeulkkayo?", translation: "Shall we read?", annotation: "읽 ends in consonant: 읽 + 을까요"}],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Two uses: directed at someone = suggestion (갈까요? = Shall we go?); said to yourself = wondering aloud (뭐 먹을까요... = hmm, what should I eat?). Same form, different intonation.",
            },
            {
                type: "tip",
                content: "Natural responses to suggestions: 좋아요! (Great!), 그래요 (Yes, let's), 저도요! (Me too!), or trail off with 좀... to decline politely.",
            },
        ],
        fixedPhrases: [
            { native: "같이 갈까요?", romanized: "gachi galkkayo?", translation: "Shall we go together?" },
            { native: "뭐 먹을까요?", romanized: "mwo meogeulkkayo?", translation: "What shall we eat?" },
        ],
        examples: [
            { native: "같이 갈까요?", romanized: "Gachi galkkayo?", translation: "Shall we go together?" },
            { type: "dialogue" as const, exchanges: [
                { native: "뭐 먹을까요?", romanized: "Mwo meogeulkkayo?", translation: "What shall we eat?" },
                { native: "비빔밥 어때요?", romanized: "Bibimbap eottaeyo?", translation: "How about bibimbap?" },
            ]},
            { type: "dialogue" as const, exchanges: [
                { native: "언제 만날까요?", romanized: "Eonje mannalkkayo?", translation: "When shall we meet?" },
                { native: "토요일 오후 어때요?", romanized: "Toyoil ohu eottaeyo?", translation: "How about Saturday afternoon?" },
            ]},
            { native: "이번 주말에 한강에 갈까요?", romanized: "Ibeon jumare hangange galkkayo?", translation: "Shall we go to the Han River this weekend?" },
            { type: "dialogue" as const, exchanges: [
                { native: "어디서 만날까요?", romanized: "Eodiseo mannalkkayo?", translation: "Where shall we meet?" },
                { native: "합정역 앞에서요.", romanized: "Habjeongyeok apeseoyo.", translation: "In front of Hapjeong Station." },
            ]},
            { native: "음... 뭐 먹을까요? (thinking to self)", romanized: "Eum... mwo meogeulkkayo?", translation: "Hmm... what should I eat? (wondering aloud — same form, different use)" },
        ],
        inlineVocab: [
            { word: "~(으)ㄹ까요?", romanized: "(eu)lkkayo?", translation: "shall we / I wonder (suggestion or wondering aloud)" },
            { word: "갈까요?", romanized: "galkkayo?", translation: "shall we go? (vowel stem: 가 + ㄹ까요)" },
            { word: "먹을까요?", romanized: "meogeulkkayo?", translation: "shall we eat? (consonant stem: 먹 + 을까요)" },
            { word: "같이", romanized: "gachi", translation: "together" },
            { word: "좋은데요", romanized: "joeundeyo", translation: "that sounds good (warm, slightly tentative)" },
            { word: "저도요", romanized: "jeodoyeo", translation: "me too / I agree too" },
            { word: "특별한", romanized: "teukbyeolhan", translation: "special" },
            { word: "기대돼요", romanized: "gidaedwaeyo", translation: "I'm looking forward to it" },
        ],
    },
    {
        id: "ko-g-a1-37",
        level: "A1",
        title: "~고 싶어요 (I want to...) + ~고 싶어해요 (he/she wants to...)",
        explanation: `~고 싶어요 expresses what you want to do. The stem + 고 is the same clause connector as in Block 5; 싶어요 means "want/feel like." For someone else's desire, use ~고 싶어해요.`,
        rules: [
            {
                condition: "First person desire (I want to)",
                result: "verb stem + 고 싶어요",
                examples: [{ native: "가고 싶어요", romanized: "gago sipeoyo", translation: "I want to go.", annotation: "가 + 고 싶어요"}, { native: "먹고 싶어요", romanized: "meokgo sipeoyo", translation: "I want to eat.", annotation: "먹 + 고 싶어요"}, { native: "배우고 싶어요", romanized: "baeugo sipeoyo", translation: "I want to learn.", annotation: "배우 + 고 싶어요"}, { native: "쉬고 싶어요", romanized: "swigo sipeoyo", translation: "I want to rest.", annotation: "쉬 + 고 싶어요"}],
            },
            {
                condition: "Third person desire (he/she wants to)",
                result: "verb stem + 고 싶어해요",
                examples: [{ native: "친구가 가고 싶어해요", romanized: "chinguga gago sipeohaeyeo", translation: "My friend wants to go.", annotation: "third person: 싶어해요"}, { native: "동생이 사고 싶어해요", romanized: "dongsaengi sago sipeohaeyeo", translation: "My younger sibling wants to buy it.", annotation: "third person: 싶어해요"}],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "보고 싶어요 directed at a person = 'I miss you' (literally 'I want to see you'). This is one of the most emotionally important phrases in Korean. 영화를 보고 싶어요 = I want to watch a movie. 엄마가 보고 싶어요 = I miss my mum.",
            },
        ],
        examples: [
            { native: "언젠가 한국에 가고 싶어요.", romanized: "Eonjenga hanguge gago sipeoyo.", translation: "I want to go to Korea someday." },
            { native: "오늘은 삼겹살을 먹고 싶어요!", romanized: "Oneureun samgyeopsareul meokgo sipeoyo!", translation: "I want to eat samgyeopsal today!" },
            { native: "엄마가 보고 싶어요.", romanized: "Eommaga bogo sipeoyo.", translation: "I miss my mum.", annotation: "보고 싶어요 = miss someone"},
            { native: "오늘은 그냥 집에서 쉬고 싶어요.", romanized: "Oneureun geunyang jibeseo swigo sipeoyo.", translation: "Today I just want to rest at home." },
            { native: "친구가 제주도에 가고 싶어해요.", romanized: "Chinguga jejudoe gago sipeohaeyeo.", translation: "My friend wants to go to Jeju.", annotation: "싶어해요 = third person"},
            { type: "dialogue" as const, exchanges: [
                { native: "뭐 하고 싶어요?", romanized: "Mwo hago sipeoyo?", translation: "What do you want to do?" },
                { native: "글쎄요, 영화 보고 싶어요.", romanized: "Geulsseoyo, yeonghwa bogo sipeoyo.", translation: "Hmm, I want to watch a movie." },
            ]},
        ],
        inlineVocab: [
            { word: "~고 싶어요", romanized: "~go sipeoyo", translation: "I want to (first person desire)" },
            { word: "~고 싶어해요", romanized: "~go sipeohaeyeo", translation: "he/she/they want to (third person desire)" },
            { word: "보고 싶어요", romanized: "bogo sipeoyo", translation: "I want to see / I miss (someone)" },
            { word: "배우다", romanized: "baeuda", translation: "to learn" },
            { word: "쉬다", romanized: "swida", translation: "to rest" },
            { word: "글쎄요", romanized: "geulsseoyo", translation: "well / hmm (uncertainty or non-commitment)" },
            { word: "있잖아요", romanized: "itjanayo", translation: "you know... (warm soft conversation opener)" },
            { word: "기대돼요", romanized: "gidaedwaeyo", translation: "I'm looking forward to it" },
        ],
    },
]
