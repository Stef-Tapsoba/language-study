import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-4",
        level: "A1",
        title: "저는 ___이에요/예요 — your first Korean sentence",
        explanation: `Korean self-introduction runs on one sentence frame: 저는 ___ 이에요/예요 (I am ___). Use it now, before analysing it — just fill in the blank with a name or job.`,
        rules: [
            {
                condition: "Word ends in a consonant (has 받침)",
                result: "이에요",
                examples: ["학생이에요", "회사원이에요", "선생님이에요"],
            },
            {
                condition: "Word ends in a vowel (no 받침)",
                result: "예요",
                examples: ["의사예요", "소피예요", "디자이너예요"],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Questions need no word order change — say the same sentence with rising intonation. 학생이에요? (rising) = Are you a student?",
            },
            {
                type: "forward-ref",
                content: "저는 is treated here as a fixed chunk meaning 'I (polite)'. The particle 는 is explained in the lesson on topic markers.",
            },
        ],
        fixedPhrases: [
            {
                native: "만나서 반가워요",
                romanized: "mannaseo bangawoyo",
                translation: "Nice to meet you",
                note: "Learn as a chunk — internal grammar explained later",
            },
            {
                native: "저도 반가워요",
                romanized: "jeodo bangawoyo",
                translation: "Nice to meet you too",
                note: "저도 = me too / I also",
            },
        ],
        examples: [
            { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "I am a student.", annotation: "학생 ends in consonant ㅇ → 이에요" },
            { native: "저는 소피예요.", romanized: "Jeoneun sopiyeyo.", translation: "I'm Sophie.", annotation: "소피 ends in vowel → 예요" },
            { native: "저는 회사원이에요.", romanized: "Jeoneun hoesawonieyo.", translation: "I'm an office worker." },
            { native: "한국 사람이에요?", romanized: "Hanguk saramieyo?", translation: "Are you Korean?", annotation: "Rising intonation turns any statement into a question" },
            { native: "아니요, 저는 영국 사람이에요.", romanized: "Aniyo, jeoneun yeongguk saramieyo.", translation: "No, I'm British." },
            { native: "만나서 반가워요!", romanized: "Mannaseo bangawoyo!", translation: "Nice to meet you!" },
        ],
        inlineVocab: [
            { word: "저는", romanized: "jeoneun", translation: "I (polite) — fixed chunk for now" },
            { word: "이에요 / 예요", romanized: "ieyo / yeyo", translation: "am/is/are" },
            { word: "학생", romanized: "haksaeng", translation: "student" },
            { word: "선생님", romanized: "seonsaengnim", translation: "teacher" },
            { word: "의사", romanized: "uisa", translation: "doctor" },
            { word: "회사원", romanized: "hoesawon", translation: "office worker" },
            { word: "저도", romanized: "jeodo", translation: "me too / I also" },
        ],
    },
    {
        id: "ko-g-a1-5",
        level: "A1",
        title: "Asking who someone is + 뭐예요 / 누구예요",
        explanation: `You can say who you are — now learn to ask. The same 이에요/예요 frame works as a question with rising intonation, and two question words let you ask about identity.`,
        rules: [
            {
                condition: "Asking what something is",
                result: "뭐예요?",
                examples: ["이름이 뭐예요?", "이게 뭐예요?", "직업이 뭐예요?"],
            },
            {
                condition: "Asking who someone is",
                result: "누구예요?",
                examples: ["누구예요?", "저 사람 누구예요?", "선생님이 누구예요?"],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Both 뭐 and 누구 end in vowels, so they always take 예요 — no need to check 받침.",
            },
            {
                type: "forward-ref",
                content: "이 사람은 has 은 after 이 사람. You'll see 은/는 constantly from here on — it's the topic marker, explained in the topic markers lesson.",
            },
        ],
        fixedPhrases: [
            {
                native: "이 사람은 제 친구예요",
                romanized: "i sarameun je chinguyeyo",
                translation: "This person is my friend",
                note: "이 사람은 = this person (intro chunk); 제 = my (polite)",
            },
        ],
        examples: [
            { native: "이름이 뭐예요? — 저는 민준이에요.", romanized: "Ireumi mwoyeyo? — Jeoneun minjunieyo.", translation: "What's your name? — I'm Minjun." },
            { native: "어디에서 왔어요? — 영국에서 왔어요.", romanized: "Eodieseo wasseoyo? — Yeonggugeso wasseoyo.", translation: "Where are you from? — I'm from the UK." },
            { native: "학생이에요? — 아니요, 저는 회사원이에요.", romanized: "Haksaengieyo? — Aniyo, jeoneun hoesawonieyo.", translation: "Are you a student? — No, I'm an office worker." },
            { native: "이 사람은 제 친구예요.", romanized: "I sarameun je chinguyeyo.", translation: "This person is my friend." },
            { native: "누구예요? — 제 동생이에요.", romanized: "Nuguyeyo? — Je dongsaengieyo.", translation: "Who is it? — It's my younger sibling." },
            { native: "만나서 반가워요! — 저도 반가워요!", romanized: "Mannaseo bangawoyo! — Jeodo bangawoyo!", translation: "Nice to meet you! — Nice to meet you too!" },
        ],
        inlineVocab: [
            { word: "뭐예요?", romanized: "mwoyeyo?", translation: "What is it?" },
            { word: "누구예요?", romanized: "nuguyeyo?", translation: "Who is it?" },
            { word: "네 / 아니요", romanized: "ne / aniyo", translation: "yes / no" },
            { word: "제", romanized: "je", translation: "my (polite — short form of 저의)" },
            { word: "이 사람", romanized: "i saram", translation: "this person" },
            { word: "친구", romanized: "chingu", translation: "friend" },
            { word: "어디에서 왔어요?", romanized: "Eodieseo wasseoyo?", translation: "Where are you from?" },
        ],
    },
    {
        id: "ko-g-a1-6",
        level: "A1",
        title: "Nationality, origin, and the ___ 사람이에요 pattern",
        explanation: `Two fixed patterns give you nationality and origin: [country] + 사람이에요 says what you are; [place] + 에서 왔어요 says where you're from. Both slot directly into the 이에요/예요 frame you already know.`,
        rules: [
            {
                condition: "Stating nationality",
                result: "[country] + 사람이에요",
                examples: ["영국 사람이에요", "한국 사람이에요", "미국 사람이에요"],
            },
            {
                condition: "Stating origin",
                result: "[place] + 에서 왔어요",
                examples: ["런던에서 왔어요", "서울에서 왔어요", "파리에서 왔어요"],
            },
        ],
        notes: [
            {
                type: "forward-ref",
                content: "에서 is used here as part of a fixed phrase. Its full use as the 'action location' and 'from' particle is explained in the lesson on 에 vs 에서.",
            },
            {
                type: "forward-ref",
                content: "왔어요 (came) is past tense of 오다 (to come). Past tense is explained in the lesson on past tense ~았어요/었어요.",
            },
            {
                type: "culture",
                content: "씨 is the polite name suffix — like Mr/Ms but used for everyone in 해요체. Always add it when addressing someone directly by name: 소피씨, 민준씨.",
            },
        ],
        examples: [
            { native: "저는 영국 사람이에요.", romanized: "Jeoneun yeongguk saramieyo.", translation: "I'm British." },
            { native: "어디에서 왔어요? — 한국에서 왔어요.", romanized: "Eodieseo wasseoyo? — Hangugeso wasseoyo.", translation: "Where are you from? — I'm from Korea." },
            { native: "저는 서울에서 왔어요.", romanized: "Jeoneun seoureseo wasseoyo.", translation: "I'm from Seoul." },
            { native: "민준씨는 어디에서 왔어요?", romanized: "Minjunssineun eodieseo wasseoyo?", translation: "Minjun-ssi, where are you from?" },
            { native: "한국 사람이에요? 아니요, 저는 일본 사람이에요.", romanized: "Hanguk saramieyo? Aniyo, jeoneun ilbon saramieyo.", translation: "Are you Korean? No, I'm Japanese." },
            { native: "저는 소피예요. 영국 사람이에요. 런던에서 왔어요.", romanized: "Jeoneun sopiyeyo. Yeongguk saramieyo. Reondoeseo wasseoyo.", translation: "I'm Sophie. I'm British. I'm from London." },
        ],
        inlineVocab: [
            { word: "사람", romanized: "saram", translation: "person — [country] + 사람 = nationality" },
            { word: "영국 / 미국 / 한국", romanized: "yeongguk / miguk / hanguk", translation: "UK / USA / Korea" },
            { word: "___에서 왔어요", romanized: "eseo wasseoyo", translation: "I'm from ___ (fixed phrase for origin)" },
            { word: "___씨", romanized: "ssi", translation: "polite name suffix — always use when addressing someone by name" },
            { word: "어디", romanized: "eodi", translation: "where" },
        ],
    },
    {
        id: "ko-g-a1-7",
        level: "A1",
        title: "Sino-Korean numbers 1–20",
        explanation: `Korean has two separate number systems — Sino-Korean (borrowed from Chinese) and native Korean. This lesson covers Sino-Korean. Use these numbers for prices, phone numbers, floor numbers, and months. The pattern is simple: learn 1–10, then 11–20 follows automatically.`,
        rules: [
            {
                condition: "Sino-Korean 1–10",
                result: "일 이 삼 사 오 육 칠 팔 구 십",
                examples: ["삼 (3)", "육 (6)", "십 (10)"],
            },
            {
                condition: "Sino-Korean 11–20 (십 + digit)",
                result: "십일 십이 십삼 ... 이십",
                examples: ["십일 (11)", "십오 (15)", "이십 (20)"],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "The pattern is fully regular: 십오 = 10+5, 이십 = 2×10. No irregulars up to 99 — just combine tens and units.",
            },
            {
                type: "tip",
                content: "Sino-Korean is used for: prices (오천 원 = 5,000 won), phone numbers (010-...), floor numbers (삼 층 = 3rd floor), and months (삼월 = March).",
            },
            {
                type: "forward-ref",
                content: "Age in Korean uses a completely different system — native Korean numbers. That system is covered in the next lesson.",
            },
        ],
        examples: [
            { native: "전화번호가 뭐예요? — 010-오-삼이-칠육이에요.", romanized: "Jeonhwabeonhoga mwoyeyo?", translation: "What's your phone number? — 010-5-32-76", annotation: "Sino-Korean for all phone digits" },
            { native: "몇 층이에요? — 삼 층이에요.", romanized: "Myeot cheungieyo? — Sam cheungieyo.", translation: "Which floor? — Third floor." },
            { native: "얼마예요? — 이천오백 원이에요.", romanized: "Eolmayeyo? — Icheonobaekg wonieyo.", translation: "How much? — 2,500 won." },
            { native: "지금 몇 월이에요? — 십이 월이에요.", romanized: "Jigeum myeot worieyo? — Sibi worieyo.", translation: "What month is it? — December.", annotation: "십이 = 12 (Sino-Korean)" },
            { native: "이십이에요? — 아니요, 십팔이에요.", romanized: "Isibieyo? — Aniyo, sipparieyo.", translation: "Is it 20? — No, it's 18." },
        ],
        inlineVocab: [
            { word: "일 이 삼 사 오 육 칠 팔 구 십", romanized: "il i sam sa o yuk chil pal gu sip", translation: "1 2 3 4 5 6 7 8 9 10 (Sino-Korean)" },
            { word: "층", romanized: "cheung", translation: "floor / storey" },
            { word: "원", romanized: "won", translation: "Korean currency unit" },
            { word: "월", romanized: "wol", translation: "month (Sino-Korean number + 월)" },
            { word: "얼마예요?", romanized: "eolmayeyo?", translation: "How much is it?" },
        ],
    },
    {
        id: "ko-g-a1-7b",
        level: "A1",
        title: "Native Korean numbers + age with 살",
        explanation: `Native Korean numbers are the other counting system — used for stating age, counting objects with most counters, and everyday quantities up to 99. They are completely different words from Sino-Korean. Learn 1–10 first, then the tens pattern for the ages you'll actually say.`,
        rules: [
            {
                condition: "Native Korean 1–10",
                result: "하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열",
                examples: ["하나 (1)", "다섯 (5)", "열 (10)"],
            },
            {
                condition: "Teens: 열 + unit",
                result: "열하나 열둘 열셋 ... 열아홉",
                examples: ["열하나 (11)", "열다섯 (15)", "열아홉 (19)"],
            },
            {
                condition: "Key decades for age",
                result: "스물 (20) · 서른 (30) · 마흔 (40) · 쉰 (50)",
                examples: ["스물다섯 (25)", "서른셋 (33)", "마흔일곱 (47)"],
            },
            {
                condition: "Stating age",
                result: "저는 [native number] 살이에요",
                examples: ["저는 스물여섯 살이에요", "열아홉 살이에요", "서른 살이에요"],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "Age always uses native Korean numbers — never Sino-Korean. 저는 이십육 살이에요 is wrong. 저는 스물여섯 살이에요 is correct.",
            },
            {
                type: "tip",
                content: "Before a counter, 하나/둘/셋/넷 shorten: 하나 → 한, 둘 → 두, 셋 → 세, 넷 → 네. So '1 year old' is 한 살, not 하나 살.",
            },
            {
                type: "forward-ref",
                content: "Native Korean numbers are also used with counters for people (명), objects (개), bottles (병), and more — covered in the counters lesson.",
            },
        ],
        fixedPhrases: [
            {
                native: "몇 살이에요?",
                romanized: "myeot sarieyo?",
                translation: "How old are you?",
                note: "몇 = how many — works with both number systems depending on context",
            },
            {
                native: "저는 ___살이에요.",
                romanized: "jeoneun ___sarieyo.",
                translation: "I am ___ years old.",
            },
        ],
        examples: [
            { native: "저는 스물여섯 살이에요.", romanized: "Jeoneun seumulyeoseot sarieyo.", translation: "I'm 26 years old.", annotation: "스물(20) + 여섯(6) = 26" },
            { native: "몇 살이에요? — 서른두 살이에요.", romanized: "Myeot sarieyo? — Seoreundu sarieyo.", translation: "How old are you? — I'm 32.", annotation: "서른(30) + 둘(2) = 32" },
            { native: "열아홉 살이에요.", romanized: "Yeolaraheop sarieyo.", translation: "I'm 19 years old.", annotation: "열(10) + 아홉(9) = 19" },
            { native: "저는 마흔 살이에요.", romanized: "Jeoneun maheun sarieyo.", translation: "I'm 40 years old." },
            { native: "한 살이에요.", romanized: "Han sarieyo.", translation: "They're 1 year old.", annotation: "하나 → 한 before 살" },
        ],
        inlineVocab: [
            { word: "하나 둘 셋 넷 다섯", romanized: "hana dul set net daseot", translation: "1 2 3 4 5 (native Korean)" },
            { word: "여섯 일곱 여덟 아홉 열", romanized: "yeoseot ilgop yeodeol ahop yeol", translation: "6 7 8 9 10 (native Korean)" },
            { word: "스물 / 서른 / 마흔 / 쉰", romanized: "seumul / seoreun / maheun / swin", translation: "20 / 30 / 40 / 50 (native Korean decades)" },
            { word: "살", romanized: "sal", translation: "years of age (counter — always native Korean numbers)" },
            { word: "한 / 두 / 세 / 네", romanized: "han / du / se / ne", translation: "1 / 2 / 3 / 4 — shortened forms used before counters" },
        ],
    },
    {
        id: "ko-g-a1-8",
        level: "A1",
        title: "Professions and jobs: the 이에요/예요 pattern extended",
        explanation: `Introduce your job as naturally as your name — professions slot straight into the 저는 ___이에요/예요 frame. You also get your first verb phrases as useful chunks, and three conversation fillers that make interactions feel natural.`,
        notes: [
            {
                type: "culture",
                content: "님 is a respectful suffix for professions. 선생님 (teacher) and 의사 선생님 (doctor) are the most common. You'll see 님 on many job titles as a marker of professional respect.",
            },
            {
                type: "tip",
                content: "공부해요 (I study) and 일해요 (I work) are your first verb phrases. Use them as chunks now — the full verb system is explained in the present tense lesson.",
            },
        ],
        fixedPhrases: [
            {
                native: "___씨는요?",
                romanized: "ssineunyo?",
                translation: "What about you? / And you?",
                note: "Essential for keeping a conversation going",
            },
            {
                native: "저도요",
                romanized: "jeodoyo",
                translation: "Me too",
            },
            {
                native: "아, 그래요?",
                romanized: "a, geuraeyo?",
                translation: "Oh, really?",
                note: "Standard light-reaction phrase in Korean conversation",
            },
        ],
        examples: [
            { native: "저는 회사원이에요. ___씨는요?", romanized: "Jeoneun hoesawonieyo. Ssineunyo?", translation: "I'm an office worker. What about you?" },
            { native: "저는 대학생이에요. 한국어를 공부해요.", romanized: "Jeoneun daehaksaengieyo. Hangugeoreul gongbuhaeyo.", translation: "I'm a university student. I study Korean." },
            { native: "저도 학생이에요!", romanized: "Jeodo haksaengieyo!", translation: "I'm a student too!" },
            { native: "무슨 일 해요? — 저는 디자이너예요.", romanized: "Museun il haeyo? — Jeoneun dijaineoeyeo.", translation: "What kind of work do you do? — I'm a designer." },
            { native: "아, 그래요? 어디에서 일해요?", romanized: "A, geuraeyo? Eodieseo ilhaeyo?", translation: "Oh really? Where do you work?" },
        ],
        inlineVocab: [
            { word: "학생 / 대학생", romanized: "haksaeng / daehaksaeng", translation: "student / university student" },
            { word: "선생님 / 의사", romanized: "seonsaengnim / uisa", translation: "teacher / doctor" },
            { word: "님", romanized: "nim", translation: "respectful suffix for professions" },
            { word: "공부해요", romanized: "gongbuhaeyo", translation: "study (chunk for now — verb system in the present tense lesson)" },
            { word: "일해요", romanized: "ilhaeyo", translation: "work (chunk for now)" },
            { word: "무슨", romanized: "museun", translation: "what kind of" },
        ],
    },
    {
        id: "ko-g-a1-9",
        level: "A1",
        title: "있어요 / 없어요 — existence, possession, and what you have",
        explanation: `있어요 and 없어요 are two of the most important verbs in Korean. They do double duty: expressing possession (I have / I don't have) and existence or location (there is / there isn't).`,
        rules: [
            {
                condition: "Possession — do you have something?",
                result: "[thing] + 이/가 있어요 / 없어요",
                examples: ["시간이 있어요", "돈이 없어요", "형이 있어요"],
            },
            {
                condition: "Existence / location — is something there?",
                result: "[thing] + 이/가 있어요 / 없어요",
                examples: ["화장실이 있어요?", "카페가 있어요", "지하철역이 없어요"],
            },
            {
                condition: "Choosing 이 or 가",
                result: "이 after consonant · 가 after vowel",
                examples: ["시간이 있어요 (시간 ends in ㄴ)", "카페가 있어요 (카페 ends in vowel)"],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Questions are rising intonation as always: 시간이 있어요? = Do you have time? / Is there time?",
            },
            {
                type: "forward-ref",
                content: "이/가 are subject markers — you'll see them constantly from here on. They're fully explained in the lesson on subject markers 이/가.",
            },
        ],
        examples: [
            { native: "저는 여동생이 있어요.", romanized: "Jeoneun yeodongsaengi isseoyo.", translation: "I have a younger sister." },
            { native: "저는 형이 없어요.", romanized: "Jeoneun hyeongi eopseoyo.", translation: "I don't have an older brother." },
            { native: "시간이 있어요? — 네, 있어요!", romanized: "Sigani isseoyo? — Ne, isseoyo!", translation: "Do you have time? — Yes, I do!" },
            { native: "화장실이 어디에 있어요?", romanized: "Hwajangsiri eodie isseoyo?", translation: "Where is the bathroom?", annotation: "있어요 = is located (existence use)" },
            { native: "근처에 카페가 있어요.", romanized: "Geuncheoe kafega isseoyo.", translation: "There's a café nearby." },
            { native: "오늘 약속이 없어요.", romanized: "Oneul yaksogi eopseoyo.", translation: "I have no plans today." },
        ],
        inlineVocab: [
            { word: "있어요", romanized: "isseoyo", translation: "there is / I have / exists" },
            { word: "없어요", romanized: "eopseoyo", translation: "there isn't / I don't have" },
            { word: "이 / 가", romanized: "i / ga", translation: "subject marker: 이 after consonant, 가 after vowel" },
            { word: "시간", romanized: "sigan", translation: "time" },
            { word: "약속", romanized: "yaksok", translation: "appointment / plans / promise" },
            { word: "근처에", romanized: "geuncheoe", translation: "nearby" },
        ],
    },
]
