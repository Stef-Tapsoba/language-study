// data/korean/index.ts
import { LanguageModule } from "../../types"

const module: LanguageModule = {
    grammar: [
        {
            id: "ko-g-a1-1",
            level: "A1",
            title: "Hangul: The Korean Alphabet",
            explanation: "Hangul is the Korean writing system, created in 1443. It consists of 14 consonants (자음) and 10 vowels (모음) that combine into syllable blocks. It is considered one of the most logical writing systems in the world and can be learned in a few hours.",
            examples: [
                { native: "ㅏ ㅑ ㅓ ㅕ ㅗ", romanized: "a ya eo yeo o", translation: "First 5 vowels" },
                { native: "가나다라마바사", romanized: "ga na da ra ma ba sa", translation: "First 7 syllables with vowel ㅏ" },
                { native: "한국어", romanized: "Hangugeo", translation: "Korean language" }
            ]
        },
        {
            id: "ko-g-a1-2",
            level: "A1",
            title: "Basic Sentence Structure: X은/는 Y이에요/예요",
            explanation: "Korean follows Subject-Object-Verb order. 은/는 marks the topic. 이에요 (after consonant) / 예요 (after vowel) mean 'is/am/are' in polite informal speech.",
            examples: [
                { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "I am a student." },
                { native: "이것은 책이에요.", romanized: "Igeoseun chaegieyo.", translation: "This is a book." },
                { native: "그는 한국 사람이에요.", romanized: "Geuneun hanguk saramieyo.", translation: "He is Korean." }
            ]
        },
        {
            id: "ko-g-a1-3",
            level: "A1",
            title: "Greetings and Basic Expressions",
            explanation: "Korean has formal (합쇼체) and polite informal (해요체) speech levels. 해요체 is the most common for everyday use with strangers and acquaintances.",
            examples: [
                { native: "안녕하세요.", romanized: "Annyeonghaseyo.", translation: "Hello. (polite)" },
                { native: "감사합니다.", romanized: "Gamsahamnida.", translation: "Thank you. (formal)" },
                { native: "괜찮아요.", romanized: "Gwaenchanayo.", translation: "It's okay / I'm fine." },
                { native: "죄송합니다.", romanized: "Joesonghamnida.", translation: "I'm sorry. (formal)" }
            ]
        },
        {
            id: "ko-g-a1-4",
            level: "A1",
            title: "Numbers: Sino-Korean (일, 이, 삼...)",
            explanation: "Korean has two number systems. Sino-Korean numbers are used for dates, money, phone numbers, and minutes.",
            examples: [
                { native: "일 (1)", romanized: "il", translation: "1" },
                { native: "이 (2)", romanized: "i", translation: "2" },
                { native: "삼 (3)", romanized: "sam", translation: "3" },
                { native: "십 (10)", romanized: "sip", translation: "10" },
                { native: "백 (100)", romanized: "baek", translation: "100" }
            ]
        },
        {
            id: "ko-g-a2-1",
            level: "A2",
            title: "Verb Conjugation: Present Tense",
            explanation: "Korean verbs end in 다 in dictionary form. For polite present tense, remove 다 and add 아요/어요 based on the vowel harmony of the last syllable. If the last vowel is ㅏ or ㅗ, use 아요; otherwise use 어요. 하다 verbs become 해요.",
            examples: [
                { native: "먹다 → 먹어요", romanized: "meokda → meogeoyo", translation: "to eat → I eat (polite)" },
                { native: "가다 → 가요", romanized: "gada → gayo", translation: "to go → I go (polite)" },
                { native: "마시다 → 마셔요", romanized: "masida → masyeoyo", translation: "to drink → I drink (polite)" }
            ]
        },
        {
            id: "ko-g-a2-2",
            level: "A2",
            title: "Past Tense: ~았/었어요",
            explanation: "To form the past tense in polite informal speech, add 았어요 (after ㅏ/ㅗ vowel) or 었어요 (after other vowels) to the verb stem. 하다 verbs become 했어요.",
            examples: [
                { native: "먹다 → 먹었어요", romanized: "meokda → meogeosseoyo", translation: "ate" },
                { native: "가다 → 갔어요", romanized: "gada → gasseoyo", translation: "went" },
                { native: "공부하다 → 공부했어요", romanized: "gongbuhada → gongbuhaesseoyo", translation: "studied" },
                { native: "어제 친구를 만났어요.", romanized: "Eoje chingureul mannasseoyo.", translation: "I met a friend yesterday." }
            ]
        },
        {
            id: "ko-g-a2-3",
            level: "A2",
            title: "~고 싶다: Expressing Desires",
            explanation: "To say you want to do something, attach 고 싶어요 to the verb stem. This only applies to first-person desires in direct speech. For third person, use 고 싶어하다.",
            examples: [
                { native: "물을 마시고 싶어요.", romanized: "Mureul masigo sipeoyo.", translation: "I want to drink water." },
                { native: "한국에 가고 싶어요.", romanized: "Hanguge gago sipeoyo.", translation: "I want to go to Korea." },
                { native: "뭘 먹고 싶어요?", romanized: "Mwol meokgo sipeoyo?", translation: "What do you want to eat?" }
            ]
        },
        {
            id: "ko-g-a2-4",
            level: "A2",
            title: "~(으)ㄹ 수 있다/없다: Ability",
            explanation: "To express ability ('can') use the verb stem + (으)ㄹ 수 있어요. For inability ('cannot') use 없어요. If the stem ends in a consonant, add 을 수; if it ends in a vowel, add ㄹ 수.",
            examples: [
                { native: "한국어를 할 수 있어요.", romanized: "Hangugeoреул hal su isseoyo.", translation: "I can speak Korean." },
                { native: "수영을 할 수 없어요.", romanized: "Suyeongeul hal su eopseoyo.", translation: "I cannot swim." },
                { native: "지금 올 수 있어요?", romanized: "Jigeum ol su isseoyo?", translation: "Can you come now?" }
            ]
        },
        {
            id: "ko-g-b1-1",
            level: "B1",
            title: "~(으)면 (If / When — Conditional)",
            explanation: "Expresses a conditional 'if/when'. Attach ~으면 after consonant-ending stems, ~면 after vowel-ending stems. Used for real conditionals, habits, and general truths.",
            examples: [
                { native: "시간이 있으면 같이 갈게요.", romanized: "Sigani isseumyeon gachi galgeyo.", translation: "If I have time, I'll go with you." },
                { native: "비가 오면 집에 있을 거예요.", romanized: "Biga omyeon jibe isseul geoyeyo.", translation: "If it rains, I'll stay home." },
                { native: "열심히 공부하면 성공할 거예요.", romanized: "Yeolsimhi gongbuhameyon seonggonghal geoyeyo.", translation: "If you study hard, you will succeed." },
                { native: "봄이 오면 꽃이 피어요.", romanized: "Bomi omyeon kkochi pieoyo.", translation: "When spring comes, flowers bloom." }
            ]
        },
        {
            id: "ko-g-b1-2",
            level: "B1",
            title: "~아/어서 (Because / So — Sequential/Causal)",
            explanation: "Has two main uses: (1) because/so — stating a cause followed by a result, and (2) sequentially — doing one action then another. Cannot be used with tense markers; tense is shown on the final verb.",
            examples: [
                { native: "배가 고파서 밥을 먹었어요.", romanized: "Baega gopaseo bapeul meogeosseoyo.", translation: "I was hungry, so I ate." },
                { native: "비가 와서 우산을 가져왔어요.", romanized: "Biga waseo usaneul gajyeowasseoyo.", translation: "It was raining, so I brought an umbrella." },
                { native: "도서관에 가서 공부했어요.", romanized: "Doseogwane gaseo gongbuhaesseoyo.", translation: "I went to the library and studied." },
                { native: "피곤해서 일찍 잤어요.", romanized: "Pigonhaeseo iljjik jasseoyo.", translation: "I was tired, so I went to bed early." }
            ]
        },
        {
            id: "ko-g-b1-3",
            level: "B1",
            title: "~지만 (But / However — Contrast)",
            explanation: "Connects two contrasting clauses, similar to 'but' or 'however'. Attach ~지만 directly to the verb/adjective stem (present tense form without 요). Both clauses share the same subject or different subjects.",
            examples: [
                { native: "한국어는 어렵지만 재미있어요.", romanized: "Hangugeoneun eoryeopjiman jaemiisseoyo.", translation: "Korean is difficult but interesting." },
                { native: "비쌌지만 샀어요.", romanized: "Bissatjiman sasseoyo.", translation: "It was expensive, but I bought it." },
                { native: "피곤하지만 일을 해야 해요.", romanized: "Pigonhajiman ireul haeya haeyo.", translation: "I'm tired, but I have to work." },
                { native: "작지만 편해요.", romanized: "Jakjiman pyeonhaeyo.", translation: "It's small but comfortable." }
            ]
        },
        {
            id: "ko-g-b1-4",
            level: "B1",
            title: "~기 때문에 (Because of / Due to)",
            explanation: "A formal way to express cause and reason, more formal than ~아/어서. Attach ~기 때문에 to the verb/adjective stem. Can also be used with nouns: noun + 때문에.",
            examples: [
                { native: "비가 오기 때문에 집에 있어요.", romanized: "Biga ogi ttaemune jibe isseoyo.", translation: "Because it's raining, I'm staying home." },
                { native: "공부를 안 했기 때문에 시험에 떨어졌어요.", romanized: "Gongbureul an haetgi ttaemune siheome tteoreojyeosseoyo.", translation: "Because I didn't study, I failed the exam." },
                { native: "일 때문에 바빠요.", romanized: "Il ttaemune bappayo.", translation: "I'm busy because of work." },
                { native: "건강 때문에 운동해요.", romanized: "Geongang ttaemune undonghaeyo.", translation: "I exercise because of my health." }
            ]
        }
    ],

    vocab: [
        { id: "ko-v-a1-1",  level: "A1", word: "안녕하세요",  romanized: "Annyeonghaseyo",  translation: "Hello",         category: "Greetings", example: { native: "안녕하세요! 잘 지내요?", romanized: "Annyeonghaseyo! Jal jinaeyo?", translation: "Hello! Are you doing well?" } },
        { id: "ko-v-a1-2",  level: "A1", word: "감사합니다",  romanized: "Gamsahamnida",    translation: "Thank you",     category: "Greetings", example: { native: "정말 감사합니다.", romanized: "Jeongmal gamsahamnida.", translation: "Thank you very much." } },
        { id: "ko-v-a1-3",  level: "A1", word: "네",          romanized: "Ne",              translation: "Yes",           category: "Basics",    example: { native: "네, 맞아요.", romanized: "Ne, majayo.", translation: "Yes, that's right." } },
        { id: "ko-v-a1-4",  level: "A1", word: "아니요",      romanized: "Aniyo",           translation: "No",            category: "Basics",    example: { native: "아니요, 괜찮아요.", romanized: "Aniyo, gwaenchanayo.", translation: "No, it's okay." } },
        { id: "ko-v-a1-5",  level: "A1", word: "죄송합니다",  romanized: "Joesonghamnida",  translation: "I'm sorry",     category: "Greetings", example: { native: "죄송합니다, 늦었어요.", romanized: "Joesonghamnida, neujeosseoyo.", translation: "I'm sorry, I'm late." } },
        { id: "ko-v-a1-6",  level: "A1", word: "물",          romanized: "Mul",             translation: "Water",         category: "Food",      example: { native: "물 주세요.", romanized: "Mul juseyo.", translation: "Water, please." } },
        { id: "ko-v-a1-7",  level: "A1", word: "밥",          romanized: "Bap",             translation: "Rice / Meal",   category: "Food",      example: { native: "밥을 먹어요.", romanized: "Babeul meogeoyo.", translation: "I eat rice." } },
        { id: "ko-v-a1-8",  level: "A1", word: "친구",        romanized: "Chingu",          translation: "Friend",        category: "People",    example: { native: "그는 내 친구예요.", romanized: "Geuneun nae chinguye yo.", translation: "He is my friend." } },
        { id: "ko-v-a1-9",  level: "A1", word: "학교",        romanized: "Hakgyo",          translation: "School",        category: "Places",    example: { native: "학교에 가요.", romanized: "Hakgyoe gayo.", translation: "I go to school." } },
        { id: "ko-v-a1-10", level: "A1", word: "한국",        romanized: "Hanguk",          translation: "Korea",         category: "Places",    example: { native: "한국에 살아요.", romanized: "Hanguke sarayo.", translation: "I live in Korea." } },
        { id: "ko-v-a2-1",  level: "A2", word: "슈퍼마켓",    romanized: "Syupeomaket",     translation: "Supermarket",   category: "Places",    example: { native: "슈퍼마켓에 갔어요.", romanized: "Syupeomaege gasseoyo.", translation: "I went to the supermarket." } },
        { id: "ko-v-a2-2",  level: "A2", word: "주",          romanized: "Ju",              translation: "Week",          category: "Time",      example: { native: "지난주에 많이 일했어요.", romanized: "Jinanjue mani ilhaesseoyo.", translation: "I worked a lot last week." } },
        { id: "ko-v-a2-3",  level: "A2", word: "돈",          romanized: "Don",             translation: "Money",         category: "Daily life", example: { native: "돈이 없어요.", romanized: "Doni eopseoyo.", translation: "I don't have money." } },
        { id: "ko-v-a2-4",  level: "A2", word: "식당",        romanized: "Sikdang",         translation: "Restaurant",    category: "Places",    example: { native: "식당에서 밥을 먹어요.", romanized: "Sikdangeseo babeul meogeoyo.", translation: "I eat at the restaurant." } },
        { id: "ko-v-a2-5",  level: "A2", word: "오른쪽",      romanized: "Oreunjjok",       translation: "Right side",    category: "Directions", example: { native: "오른쪽으로 가세요.", romanized: "Oreunjjogeuro gaseyo.", translation: "Go to the right." } },
        { id: "ko-v-a2-6",  level: "A2", word: "왼쪽",        romanized: "Oenjjok",         translation: "Left side",     category: "Directions", example: { native: "왼쪽으로 도세요.", romanized: "Oenjjogeuro doseyo.", translation: "Turn to the left." } },
        { id: "ko-v-a2-7",  level: "A2", word: "시간",        romanized: "Sigan",           translation: "Time / Hour",   category: "Daily life", example: { native: "시간이 없어요.", romanized: "Sigani eopseoyo.", translation: "I don't have time." } },
        { id: "ko-v-a2-8",  level: "A2", word: "기차",        romanized: "Gicha",           translation: "Train",         category: "Travel",    example: { native: "기차를 타요.", romanized: "Gichareul tayo.", translation: "I take the train." } },
        { id: "ko-v-a2-9",  level: "A2", word: "역",          romanized: "Yeok",            translation: "Station",       category: "Places",    example: { native: "역이 어디예요?", romanized: "Yeogi eodiyeyo?", translation: "Where is the station?" } },
        { id: "ko-v-a2-10", level: "A2", word: "여행",        romanized: "Yeohaeng",        translation: "Travel / Trip", category: "Travel",    example: { native: "여행을 좋아해요.", romanized: "Yeohaengeul joahaeyo.", translation: "I like travelling." } },
        { id: "ko-v-b1-1",  level: "B1", word: "환경 (環境)",    romanized: "hwangyeong",   translation: "Environment",          category: "Society",    example: { native: "환경을 보호해야 합니다.",         romanized: "Hwangyeongeul bohohaeya hamnida.", translation: "We must protect the environment." } },
        { id: "ko-v-b1-2",  level: "B1", word: "사회 (社會)",    romanized: "sahoe",        translation: "Society",              category: "Society",    example: { native: "사회가 빠르게 변하고 있어요.",    romanized: "Sahoega ppareuge byeonhago isseoyo.", translation: "Society is changing rapidly." } },
        { id: "ko-v-b1-3",  level: "B1", word: "건강 (健康)",    romanized: "geongang",     translation: "Health",               category: "Health",     example: { native: "건강이 가장 중요해요.",           romanized: "Geongangi gajang jungyohaeyo.", translation: "Health is the most important thing." } },
        { id: "ko-v-b1-4",  level: "B1", word: "자유 (自由)",    romanized: "jayu",         translation: "Freedom",              category: "Society",    example: { native: "자유는 소중한 가치예요.",         romanized: "Jayuneun sojunghan gachieyeyo.", translation: "Freedom is a precious value." } },
        { id: "ko-v-b1-5",  level: "B1", word: "기회 (機會)",    romanized: "gihoe",        translation: "Opportunity / Chance", category: "Society",    example: { native: "좋은 기회를 잡으세요.",          romanized: "Joeun gihoereul jabeuseyo.", translation: "Take the good opportunity." } },
        { id: "ko-v-b1-6",  level: "B1", word: "문제 (問題)",    romanized: "munje",        translation: "Problem / Issue",      category: "Basics",     example: { native: "무슨 문제가 있어요?",             romanized: "Museun munjega isseoyo?", translation: "What problem is there?" } },
        { id: "ko-v-b1-7",  level: "B1", word: "어렵다",         romanized: "eoryeopda",    translation: "Difficult",            category: "Basics",     example: { native: "한국어가 어렵지만 재미있어요.",   romanized: "Hangugeoga eoryeopjiman jaemiisseoyo.", translation: "Korean is difficult but interesting." } },
        { id: "ko-v-b1-8",  level: "B1", word: "중요하다",       romanized: "jungyohada",   translation: "Important",            category: "Basics",     example: { native: "건강이 중요해요.",                romanized: "Geongangi jungyohaeyo.", translation: "Health is important." } },
        { id: "ko-v-b1-9",  level: "B1", word: "생활 (生活)",    romanized: "saenghwal",    translation: "Life / Daily life",    category: "Daily life", example: { native: "한국 생활에 익숙해졌어요.",       romanized: "Hanguk saenghware iksukhaejyeosseoyo.", translation: "I got used to life in Korea." } },
        { id: "ko-v-b1-10", level: "B1", word: "의견 (意見)",    romanized: "uigyeon",      translation: "Opinion / View",       category: "Discussion", example: { native: "의견을 말씀해 주세요.",           romanized: "Uigyeoneul malsseum hae juseyo.", translation: "Please tell me your opinion." } }
    ],

    verbs: [
        {
            id: "ko-vb-a1-1",
            level: "A1",
            infinitive: "먹다",
            romanized: "meokda",
            meaning: "to eat",
            conjugations: [
                {
                    tense: "Present (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "먹어요", romanized: "meogeoyo" },
                        { pronoun: "Negative",    form: "안 먹어요", romanized: "an meogeoyo" }
                    ]
                },
                {
                    tense: "Past (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "먹었어요", romanized: "meogeosseoyo" },
                        { pronoun: "Negative",    form: "안 먹었어요", romanized: "an meogeosseoyo" }
                    ]
                }
            ]
        },
        {
            id: "ko-vb-a1-2",
            level: "A1",
            infinitive: "가다",
            romanized: "gada",
            meaning: "to go",
            conjugations: [{
                tense: "Present (Polite Informal)",
                forms: [
                    { pronoun: "Affirmative", form: "가요", romanized: "gayo" },
                    { pronoun: "Negative",    form: "안 가요", romanized: "an gayo" }
                ]
            }]
        },
        {
            id: "ko-vb-a1-3",
            level: "A1",
            infinitive: "마시다",
            romanized: "masida",
            meaning: "to drink",
            conjugations: [{
                tense: "Present (Polite Informal)",
                forms: [
                    { pronoun: "Affirmative", form: "마셔요", romanized: "masyeoyo" },
                    { pronoun: "Negative",    form: "안 마셔요", romanized: "an masyeoyo" }
                ]
            }]
        },
        {
            id: "ko-vb-a1-4",
            level: "A1",
            infinitive: "하다",
            romanized: "hada",
            meaning: "to do",
            conjugations: [{
                tense: "Present (Polite Informal)",
                forms: [
                    { pronoun: "Affirmative", form: "해요", romanized: "haeyo" },
                    { pronoun: "Negative",    form: "안 해요", romanized: "an haeyo" }
                ]
            }]
        },
        {
            id: "ko-vb-a2-1",
            level: "A2",
            infinitive: "보다",
            romanized: "boda",
            meaning: "to see / to watch",
            conjugations: [
                {
                    tense: "Present (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "봐요", romanized: "bwayo" },
                        { pronoun: "Negative",    form: "안 봐요", romanized: "an bwayo" }
                    ]
                },
                {
                    tense: "Past (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "봤어요", romanized: "bwasseoyo" },
                        { pronoun: "Negative",    form: "안 봤어요", romanized: "an bwasseoyo" }
                    ]
                }
            ]
        },
        {
            id: "ko-vb-a2-2",
            level: "A2",
            infinitive: "오다",
            romanized: "oda",
            meaning: "to come",
            conjugations: [
                {
                    tense: "Present (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "와요", romanized: "wayo" },
                        { pronoun: "Negative",    form: "안 와요", romanized: "an wayo" }
                    ]
                },
                {
                    tense: "Past (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "왔어요", romanized: "wasseoyo" },
                        { pronoun: "Negative",    form: "안 왔어요", romanized: "an wasseoyo" }
                    ]
                }
            ]
        },
        {
            id: "ko-vb-a2-3",
            level: "A2",
            infinitive: "말하다",
            romanized: "malhada",
            meaning: "to speak / to say",
            conjugations: [
                {
                    tense: "Present (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "말해요", romanized: "malhaeyo" },
                        { pronoun: "Negative",    form: "안 말해요", romanized: "an malhaeyo" }
                    ]
                },
                {
                    tense: "Past (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "말했어요", romanized: "malhaesseoyo" },
                        { pronoun: "Negative",    form: "안 말했어요", romanized: "an malhaesseoyo" }
                    ]
                }
            ]
        },
        {
            id: "ko-vb-a2-4",
            level: "A2",
            infinitive: "쓰다",
            romanized: "sseuda",
            meaning: "to write / to use",
            conjugations: [
                {
                    tense: "Present (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "써요", romanized: "sseoyo" },
                        { pronoun: "Negative",    form: "안 써요", romanized: "an sseoyo" }
                    ]
                },
                {
                    tense: "Past (Polite Informal)",
                    forms: [
                        { pronoun: "Affirmative", form: "썼어요", romanized: "ssseosseoyo" },
                        { pronoun: "Negative",    form: "안 썼어요", romanized: "an sseosseoyo" }
                    ]
                }
            ]
        },
        {
            id: "ko-vb-b1-1",
            level: "B1",
            infinitive: "알다",
            romanized: "alda",
            meaning: "to know",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "positive", form: "알아요",     romanized: "arayo" },
                        { pronoun: "negative", form: "몰라요",     romanized: "mollayo" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "positive", form: "알았어요",   romanized: "arasseoyo" },
                        { pronoun: "negative", form: "몰랐어요",   romanized: "mollasseoyo" }
                    ]
                },
                {
                    tense: "Conditional (~으면)",
                    forms: [
                        { pronoun: "if/when", form: "알면", romanized: "almyeon" }
                    ]
                }
            ]
        },
        {
            id: "ko-vb-b1-2",
            level: "B1",
            infinitive: "생각하다",
            romanized: "saenggakhada",
            meaning: "to think",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "positive", form: "생각해요",   romanized: "saenggakhaeyo" },
                        { pronoun: "negative", form: "생각 안 해요", romanized: "saenggak an haeyo" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "positive", form: "생각했어요", romanized: "saenggakhaesseoyo" },
                        { pronoun: "negative", form: "생각 안 했어요", romanized: "saenggak an haesseoyo" }
                    ]
                },
                {
                    tense: "Conditional (~으면)",
                    forms: [
                        { pronoun: "if/when", form: "생각하면", romanized: "saenggakhamyeon" }
                    ]
                }
            ]
        },
        {
            id: "ko-vb-b1-3",
            level: "B1",
            infinitive: "사용하다",
            romanized: "sayonghada",
            meaning: "to use",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "positive", form: "사용해요",   romanized: "sayonghaeyo" },
                        { pronoun: "negative", form: "사용 안 해요", romanized: "sayong an haeyo" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "positive", form: "사용했어요", romanized: "sayonghaesseoyo" },
                        { pronoun: "negative", form: "사용 안 했어요", romanized: "sayong an haesseoyo" }
                    ]
                },
                {
                    tense: "Conditional (~으면)",
                    forms: [
                        { pronoun: "if/when", form: "사용하면", romanized: "sayonghamyeon" }
                    ]
                }
            ]
        },
        {
            id: "ko-vb-b1-4",
            level: "B1",
            infinitive: "읽다",
            romanized: "ikda",
            meaning: "to read",
            conjugations: [
                {
                    tense: "Present (Polite)",
                    forms: [
                        { pronoun: "positive", form: "읽어요",     romanized: "ilgeoyo" },
                        { pronoun: "negative", form: "안 읽어요",  romanized: "an ilgeoyo" }
                    ]
                },
                {
                    tense: "Past (Polite)",
                    forms: [
                        { pronoun: "positive", form: "읽었어요",   romanized: "ilgeosseoyo" },
                        { pronoun: "negative", form: "안 읽었어요", romanized: "an ilgeosseoyo" }
                    ]
                },
                {
                    tense: "Conditional (~으면)",
                    forms: [
                        { pronoun: "if/when", form: "읽으면", romanized: "ilgeumyeon" }
                    ]
                }
            ]
        }
    ],

    placementQuestions: [
        { id: "ko-p-a1-1", level: "A1", prompt: "What does '안녕하세요' mean?", options: ["Goodbye", "Thank you", "Hello", "Excuse me"], answer: "Hello" },
        { id: "ko-p-a1-2", level: "A1", prompt: "What particle marks the topic in Korean?", options: ["을/를", "이/가", "은/는", "에서"], answer: "은/는" },
        { id: "ko-p-a2-1", level: "A2", prompt: "How do you conjugate 가다 (to go) in polite present?", options: ["가다요", "갑니다", "가요", "갔어요"], answer: "가요" },
        { id: "ko-p-a2-2", level: "A2", prompt: "What is the past tense of 먹다 (to eat)?", options: ["먹어요", "먹었어요", "먹겠어요", "먹을 거예요"], answer: "먹었어요" },
        { id: "ko-p-b1-1", level: "B1", prompt: "What does ~(으)면 express?", options: ["Desire", "Conditional (if/when)", "Permission", "Prohibition"], answer: "Conditional (if/when)" },
        { id: "ko-p-b1-2", level: "B1", prompt: "What does ~고 싶다 mean?", options: ["I must do", "I can do", "I want to do", "I should do"], answer: "I want to do" },
        { id: "ko-p-b2-1", level: "B2", prompt: "Which ending expresses indirect speech?", options: ["~다고 하다", "~아/어서", "~지만", "~도록"], answer: "~다고 하다" },
        { id: "ko-p-b2-2", level: "B2", prompt: "What does ~ㄹ/을 수 있다 mean?", options: ["Must do", "Cannot", "Can / be able to", "Should"], answer: "Can / be able to" },
        { id: "ko-p-c1-1", level: "C1", prompt: "Which is the honorific form of 먹다?", options: ["드시다", "잡수시다", "both are correct", "neither"], answer: "both are correct" },
        { id: "ko-p-c1-2", level: "C1", prompt: "What does ~에도 불구하고 mean?", options: ["because of", "in spite of", "thanks to", "instead of"], answer: "in spite of" }
    ],

    levelQuestions: [
        { id: "ko-lt-a1-1",  level: "A1", prompt: "What does '감사합니다' mean?", options: ["Hello", "Goodbye", "Thank you", "Excuse me"], answer: "Thank you" },
        { id: "ko-lt-a1-2",  level: "A1", prompt: "What does '네' mean?", options: ["No", "Yes", "Maybe", "Please"], answer: "Yes" },
        { id: "ko-lt-a1-3",  level: "A1", prompt: "How do you say 'I am a student'?", options: ["저는 학생이에요.", "학생는 저이에요.", "저를 학생이에요.", "저이에요 학생."], answer: "저는 학생이에요." },
        { id: "ko-lt-a1-4",  level: "A1", prompt: "What is 'water' in Korean?", options: ["밥", "물", "차", "주스"], answer: "물" },
        { id: "ko-lt-a1-5",  level: "A1", prompt: "What does '친구' mean?", options: ["Teacher", "Family", "Friend", "Enemy"], answer: "Friend" },
        { id: "ko-lt-a1-6",  level: "A1", prompt: "How do you say 'I'm sorry' (formal)?", options: ["감사합니다", "안녕하세요", "죄송합니다", "괜찮아요"], answer: "죄송합니다" },
        { id: "ko-lt-a1-7",  level: "A1", prompt: "What is 3 in Sino-Korean?", options: ["하나", "둘", "삼", "넷"], answer: "삼" },
        { id: "ko-lt-a1-8",  level: "A1", prompt: "How do you say 'I eat' (polite informal)?", options: ["먹습니다", "먹었어요", "먹어요", "먹다"], answer: "먹어요" },
        { id: "ko-lt-a1-9",  level: "A1", prompt: "Which particle marks the direct object?", options: ["은/는", "이/가", "을/를", "에서"], answer: "을/를" },
        { id: "ko-lt-a1-10", level: "A1", prompt: "What does '학교' mean?", options: ["Hospital", "Restaurant", "School", "Market"], answer: "School" },
        { id: "ko-lt-a1-11", level: "A1", prompt: "How do you say 'to go' in polite present?", options: ["가다", "갑니다", "가요", "갔어요"], answer: "가요" },
        { id: "ko-lt-a1-12", level: "A1", prompt: "What does 'ㄹ' romanize to?", options: ["r or l", "only r", "only l", "n"], answer: "r or l" },
        { id: "ko-lt-a1-13", level: "A1", prompt: "What does '아니요' mean?", options: ["Yes", "No", "Please", "Sorry"], answer: "No" },
        { id: "ko-lt-a1-14", level: "A1", prompt: "What is 'rice/meal' in Korean?", options: ["물", "빵", "밥", "국"], answer: "밥" },
        { id: "ko-lt-a1-15", level: "A1", prompt: "How do you say 'to drink' (polite)?", options: ["마시다", "마셔요", "마셨어요", "안 마셔요"], answer: "마셔요" },
        { id: "ko-lt-a2-1",  level: "A2", prompt: "What is the past tense of 가다 (to go)?", options: ["가요", "가겠어요", "갔어요", "갈 거예요"], answer: "갔어요" },
        { id: "ko-lt-a2-2",  level: "A2", prompt: "How do you say 'I want to go to Korea'?", options: ["한국에 가요.", "한국에 갔어요.", "한국에 가고 싶어요.", "한국에 갈 거예요."], answer: "한국에 가고 싶어요." },
        { id: "ko-lt-a2-3",  level: "A2", prompt: "What does '돈' mean?", options: ["Food", "Time", "Money", "Friend"], answer: "Money" },
        { id: "ko-lt-a2-4",  level: "A2", prompt: "How do you say 'I can speak Korean'?", options: ["한국어를 말해요.", "한국어를 말했어요.", "한국어를 말하고 싶어요.", "한국어를 말할 수 있어요."], answer: "한국어를 말할 수 있어요." },
        { id: "ko-lt-a2-5",  level: "A2", prompt: "Complete: '어제 영화를 ___.' (to watch, past)", options: ["봐요", "보고 싶어요", "봤어요", "볼 수 있어요"], answer: "봤어요" },
        { id: "ko-lt-a2-6",  level: "A2", prompt: "What does '식당' mean?", options: ["Supermarket", "School", "Restaurant", "Station"], answer: "Restaurant" },
        { id: "ko-lt-a2-7",  level: "A2", prompt: "Which ending expresses 'want to do'?", options: ["~았/었어요", "~고 싶어요", "~(으)ㄹ 수 있어요", "~아/어요"], answer: "~고 싶어요" },
        { id: "ko-lt-a2-8",  level: "A2", prompt: "What is '여행' in English?", options: ["Station", "Train", "Week", "Travel / Trip"], answer: "Travel / Trip" },
        { id: "ko-lt-a2-9",  level: "A2", prompt: "How do you say 'to come' (polite present)?", options: ["왔어요", "와요", "올 거예요", "오고 싶어요"], answer: "와요" },
        { id: "ko-lt-a2-10", level: "A2", prompt: "Complete: '저는 수영을 ___ 수 없어요.' (cannot)", options: ["할", "하는", "하고", "했을"], answer: "할" },
        { id: "ko-lt-a2-11", level: "A2", prompt: "What does '오른쪽' mean?", options: ["Left", "Right", "Straight", "Back"], answer: "Right" },
        { id: "ko-lt-a2-12", level: "A2", prompt: "What is the past tense of 하다 (to do)?", options: ["해요", "하겠어요", "했어요", "할 거예요"], answer: "했어요" },
        { id: "ko-lt-a2-13", level: "A2", prompt: "What does '기차' mean?", options: ["Bus", "Subway", "Train", "Taxi"], answer: "Train" },
        { id: "ko-lt-a2-14", level: "A2", prompt: "How do you say 'I wrote a letter'?", options: ["편지를 써요.", "편지를 쓰고 싶어요.", "편지를 썼어요.", "편지를 쓸 수 있어요."], answer: "편지를 썼어요." },
        { id: "ko-lt-a2-15", level: "A2", prompt: "What does '역' mean?", options: ["School", "Market", "Station", "Hospital"], answer: "Station" },
        { id: "ko-lt-b1-1",  level: "B1", prompt: "What does ~(으)면 express?", options: ["Obligation", "Conditional (if/when)", "Permission", "Contrast"], answer: "Conditional (if/when)" },
        { id: "ko-lt-b1-2",  level: "B1", prompt: "Complete: '시간이 ___ 같이 갈게요.' (~(으)면 with 있다)", options: ["있어서", "있으면", "있지만", "있기 때문에"], answer: "있으면" },
        { id: "ko-lt-b1-3",  level: "B1", prompt: "What does 환경 mean?", options: ["Society", "Health", "Environment", "Freedom"], answer: "Environment" },
        { id: "ko-lt-b1-4",  level: "B1", prompt: "~아/어서 is used to express:", options: ["contrast only", "cause/reason or sequential action", "permission", "prohibition"], answer: "cause/reason or sequential action" },
        { id: "ko-lt-b1-5",  level: "B1", prompt: "What does 문제 mean?", options: ["Opportunity", "Problem", "Health", "Opinion"], answer: "Problem" },
        { id: "ko-lt-b1-6",  level: "B1", prompt: "Complete: '한국어는 어렵___ 재미있어요.' (~지만)", options: ["어서", "지만", "기 때문에", "으면"], answer: "지만" },
        { id: "ko-lt-b1-7",  level: "B1", prompt: "What does 생활 mean?", options: ["Freedom", "Society", "Daily life", "Challenge"], answer: "Daily life" },
        { id: "ko-lt-b1-8",  level: "B1", prompt: "~기 때문에 is:", options: ["more casual than ~아/어서", "more formal than ~아/어서", "identical to ~아/어서", "only used with nouns"], answer: "more formal than ~아/어서" },
        { id: "ko-lt-b1-9",  level: "B1", prompt: "What does 어렵다 mean?", options: ["Important", "Interesting", "Difficult", "Easy"], answer: "Difficult" },
        { id: "ko-lt-b1-10", level: "B1", prompt: "Past polite of 알다: '저는 그것을 ___.'", options: ["알아요", "알았어요", "알면", "알겠어요"], answer: "알았어요" },
        { id: "ko-lt-b1-11", level: "B1", prompt: "What does 중요하다 mean?", options: ["Difficult", "Important", "Interesting", "Beautiful"], answer: "Important" },
        { id: "ko-lt-b1-12", level: "B1", prompt: "Complete: '비가 오___ 집에 있어요.' (~기 때문에)", options: ["기 때문에", "아서", "지만", "으면"], answer: "기 때문에" },
        { id: "ko-lt-b1-13", level: "B1", prompt: "What does 의견 mean?", options: ["Problem", "Freedom", "Opinion", "Health"], answer: "Opinion" },
        { id: "ko-lt-b1-14", level: "B1", prompt: "Present polite of 읽다: '책을 ___.'", options: ["읽어요", "읽었어요", "읽으면", "읽습니다 only"], answer: "읽어요" },
        { id: "ko-lt-b1-15", level: "B1", prompt: "What does 기회 mean?", options: ["Machine", "Opportunity", "Environment", "Society"], answer: "Opportunity" }
    ]
}

export default module
