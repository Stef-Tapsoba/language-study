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
                examples: [
                    { native: "학생이에요", romanized: "haksaengieyo", translation: "I am a student.", annotation: "학생 ends in consonant ㅇ"},
                    { native: "회사원이에요", romanized: "hoesawonieyo", translation: "I am an office worker.", annotation: "회사원 ends in consonant ㄴ"},
                    { native: "선생님이에요", romanized: "seonsaengnimieyo", translation: "I am a teacher.", annotation: "선생님 ends in consonant ㅁ"},
                ],
            },
            {
                condition: "Word ends in a vowel (no 받침)",
                result: "예요",
                examples: [
                    { native: "의사예요", romanized: "uisayeyo", translation: "I am a doctor.", annotation: "의사 ends in vowel"},
                    { native: "소피예요", romanized: "sopiyeyo", translation: "I am Sophie.", annotation: "소피 ends in vowel"},
                    { native: "디자이너예요", romanized: "dijaineoeyeo", translation: "I am a designer.", annotation: "디자이너 ends in vowel"},
                ],
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
                refId: "ko-g-a1-13",
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
            { word: "이에요", romanized: "ieyo", translation: "am/is/are" },
            { word: "예요", romanized: "yeyo", translation: "am/is/are" },
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
                examples: [
                    { native: "이름이 뭐예요?", romanized: "ireumi mwoyeyo?", translation: "What is your name?" },
                    { native: "이게 뭐예요?", romanized: "ige mwoyeyo?", translation: "What is this?" },
                    { native: "직업이 뭐예요?", romanized: "jigeopi mwoyeyo?", translation: "What is your job?" },
                ],
            },
            {
                condition: "Asking who someone is",
                result: "누구예요?",
                examples: [
                    { native: "누구예요?", romanized: "nuguyeyo?", translation: "Who is it?" },
                    { native: "저 사람 누구예요?", romanized: "jeo saram nuguyeyo?", translation: "Who is that person?" },
                    { native: "선생님이 누구예요?", romanized: "seonsaengnimi nuguyeyo?", translation: "Who is the teacher?" },
                ],
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
                refId: "ko-g-a1-13",
            },
        ],
        fixedPhrases: [
            {
                native: "이 사람은 제 친구예요",
                romanized: "i sarameun je chinguyeyo",
                translation: "This person is my friend",
                note: "이 사람은 = this person (intro chunk); 제 = my (polite)",
            },
            {
                native: "어디에서 왔어요?",
                romanized: "eodieseo wasseoyo?",
                translation: "Where are you from?",
                note: "에서 = from · 왔어요 = came (past of 오다) — both explained later",
            },
        ],
        examples: [
            { type: "dialogue", exchanges: [
                { native: "이름이 뭐예요?", romanized: "Ireumi mwoyeyo?", translation: "What's your name?" },
                { native: "저는 민준이에요.", romanized: "Jeoneun minjunieyo.", translation: "I'm Minjun." },
            ]},
            { type: "dialogue", exchanges: [
                { native: "학생이에요?", romanized: "Haksaengieyo?", translation: "Are you a student?" },
                { native: "아니요, 저는 회사원이에요.", romanized: "Aniyo, jeoneun hoesawonieyo.", translation: "No, I'm an office worker." },
            ]},
            { native: "이 사람은 제 친구예요.", romanized: "I sarameun je chinguyeyo.", translation: "This person is my friend." },
            { type: "dialogue", exchanges: [
                { native: "누구예요?", romanized: "Nuguyeyo?", translation: "Who is it?" },
                { native: "제 동생이에요.", romanized: "Je dongsaengieyo.", translation: "It's my younger sibling." },
            ]},
        ],
        inlineVocab: [
            { word: "예요", romanized: "yeyo", translation: "am/is/are" },
            { word: "이에요", romanized: "ieyo", translation: "am/is/are" },
            { word: "뭐", romanized: "mwo", translation: "what" },
            { word: "누구", romanized: "nugu", translation: "who" },
            { word: "은", romanized: "eun", translation: "topic marker (added to 이 사람 to make 이 사람은)" },
            { word: "뭐예요?", romanized: "mwoyeyo?", translation: "What is it?" },
            { word: "누구예요?", romanized: "nuguyeyo?", translation: "Who is it?" },
            { word: "네 / 아니요", romanized: "ne / aniyo", translation: "yes / no" },
            { word: "제", romanized: "je", translation: "my (polite — short form of 저의)" },
            { word: "이 사람은", romanized: "i saram eun", translation: "this person" },
            { word: "는", romanized: "neun", translation: "topic marker (added to 이 사람 to make 이 사람은)" },
            { word: "친구", romanized: "chingu", translation: "friend" },
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
                examples: [
                    { native: "영국 사람이에요", romanized: "yeongguk saramieyo", translation: "I am British.", annotation: "영국 = UK"},
                    { native: "한국 사람이에요", romanized: "hanguk saramieyo", translation: "I am Korean.", annotation: "한국 = Korea"},
                    { native: "미국 사람이에요", romanized: "miguk saramieyo", translation: "I am American.", annotation: "미국 = USA"},
                ],
            },
            {
                condition: "Stating origin",
                result: "[place] + 에서 왔어요",
                examples: [
                    { native: "런던에서 왔어요", romanized: "reondoneseo wasseoyo", translation: "I came from London" },
                    { native: "서울에서 왔어요", romanized: "seoureseo wasseoyo", translation: "I came from Seoul" },
                    { native: "파리에서 왔어요", romanized: "parieseo wasseoyo", translation: "I came from Paris" },
                ],
            },
        ],
        notes: [
            {
                type: "forward-ref",
                content: "에서 is used here as part of a fixed phrase. Its full use as the 'action location' and 'from' particle is explained in the lesson on 에 vs 에서.",
                refId: "ko-g-a1-30",
            },
            {
                type: "forward-ref",
                content: "왔어요 (came) is past tense of 오다 (to come). Past tense is explained in the lesson on past tense ~았어요/었어요.",
                refId: "ko-g-a1-28",
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
            { word: "사람이에요", romanized: "saramieyo", translation: "person — [country] + 사람 = nationality" },
            { word: "에서 왔어요", romanized: "eseo wasseoyo", translation: "came from — [place] + 에서 왔어요 = origin" },
            { word: "에서", romanized: "eseo", translation: "from (part of the fixed phrase [place] + 에서 왔어요)" },
            { word: "왔어요", romanized: "wasseoyo", translation: "came (past tense of 오다)" },
            { word: "오다", romanized: "oda", translation: "to come (basic verb form)" },
            { word: "씨", romanized: "ssi", translation: "polite name suffix — always use when addressing someone by name" },
            { word: "해요체", romanized: "haeyoche", translation: "polite speech level — use 씨 with names in this level" },
            { word: "소피씨", romanized: "sopissi", translation: "Sophie-ssi (polite way to address Sophie)" },
            { word: "민준씨", romanized: "minjunssi", translation: "Minjun-ssi (polite way to address Minjun)" },
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
                examples: [
                    { native: "삼", romanized: "sam", translation: "3 (Sino-Korean)" },
                    { native: "육", romanized: "yuk", translation: "6 (Sino-Korean)" },
                    { native: "십", romanized: "sip", translation: "10 (Sino-Korean)" },
                ],
            },
            {
                condition: "Sino-Korean 11–20 (십 + digit)",
                result: "십일 십이 십삼 ... 이십",
                examples: [
                    { native: "십일", romanized: "sibil", translation: "11.", annotation: "십(10) + 일(1)"},
                    { native: "십오", romanized: "sibo", translation: "15.", annotation: "십(10) + 오(5)"},
                    { native: "이십", romanized: "isip", translation: "20.", annotation: "이(2) × 십(10)"},
                ],
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
                refId: "ko-g-a1-7b",
            },
        ],
        examples: [
            { native: "일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십,", romanized: "il, i, sam, sa, o, yuk, chil, pal, gu, sip", translation: "1 2 3 4 5 6 7 8 9 10 (Sino-Korean)" },
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
                examples: [
                    { native: "하나", romanized: "hana", translation: "1 (native Korean)" },
                    { native: "다섯", romanized: "daseot", translation: "5 (native Korean)" },
                    { native: "열", romanized: "yeol", translation: "10 (native Korean)" },
                ],
            },
            {
                condition: "Teens: 열 + unit",
                result: "열하나 열둘 열셋 ... 열아홉",
                examples: [
                    { native: "열하나", romanized: "yeolhana", translation: "11.", annotation: "열(10) + 하나(1)"},
                    { native: "열다섯", romanized: "yeoldaseot", translation: "15.", annotation: "열(10) + 다섯(5)"},
                    { native: "열아홉", romanized: "yeolaraheop", translation: "19.", annotation: "열(10) + 아홉(9)"},
                ],
            },
            {
                condition: "Key decades for age",
                result: "스물 (20) · 서른 (30) · 마흔 (40) · 쉰 (50)",
                examples: [
                    { native: "스물다섯", romanized: "seumuldaseot", translation: "25.", annotation: "스물(20) + 다섯(5)"},
                    { native: "서른셋", romanized: "seoreunset", translation: "33.", annotation: "서른(30) + 셋(3)"},
                    { native: "마흔일곱", romanized: "maheunilgop", translation: "47.", annotation: "마흔(40) + 일곱(7)"},
                ],
            },
            {
                condition: "Stating age",
                result: "저는 [native number] 살이에요",
                examples: [
                    { native: "저는 스물여섯 살이에요", romanized: "jeoneun seumulyeoseot sarieyo", translation: "I am 26 years old" },
                    { native: "열아홉 살이에요", romanized: "yeolaraheop sarieyo", translation: "I am 19 years old" },
                    { native: "서른 살이에요", romanized: "seoreun sarieyo", translation: "I am 30 years old" },
                ],
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
                refId: "ko-g-a1-32",
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
            { native: "하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열", romanized: "hana, dul, set, net, daseot, yeoseot, ilgop, yeodeol, ahop, yeol", translation: "1 2 3 4 5 6 7 8 9 10 (native Korean)" },
            { native: "스물, 서른, 마흔, 쉰, 예순, 일흔", romanized: "seumul, seoreun, maheun, swin, yesun, ilheun", translation: "20, 30, 40, 50, 60, 70 (native Korean decades)" },
            { native: "저는 스물여섯 살이에요.", romanized: "Jeoneun seumulyeoseot sarieyo.", translation: "I'm 26 years old.", annotation: "스물(20) + 여섯(6) = 26" },
            { native: "몇 살이에요? — 서른두 살이에요.", romanized: "Myeot sarieyo? — Seoreundu sarieyo.", translation: "How old are you? — I'm 32.", annotation: "서른(30) + 둘(2) = 32" },
            { native: "열아홉 살이에요.", romanized: "Yeolaraheop sarieyo.", translation: "I'm 19 years old.", annotation: "열(10) + 아홉(9) = 19" },
            { native: "저는 마흔 살이에요.", romanized: "Jeoneun maheun sarieyo.", translation: "I'm 40 years old." },
            { native: "한 살이에요.", romanized: "Han sarieyo.", translation: "They're 1 year old.", annotation: "하나 → 한 before 살" },
        ],
        inlineVocab: [
            { word: "살", romanized: "sal", translation: "years of age (counter — always native Korean numbers)" },
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
            { word: "선생님", romanized: "seonsaengnim", translation: "teacher" },
            { word: "의사 선생님", romanized: "uisa seonsaengnim", translation: "doctor (literally 'teacher doctor' — 의사 is doctor, but the respectful form is 의사 선생님)" },
            { word: "님", romanized: "nim", translation: "respectful suffix for professions" },
            { word: "공부해요", romanized: "gongbuhaeyo", translation: "study (chunk for now — verb system in the present tense lesson)" },
            { word: "일해요", romanized: "ilhaeyo", translation: "work (chunk for now)" },
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
                examples: [
                    { native: "시간이 있어요", romanized: "sigani isseoyo", translation: "I have time (possession)" },
                    { native: "돈이 없어요", romanized: "doni eopseoyo", translation: "I don't have money (possession)" },
                    { native: "형이 있어요", romanized: "hyeongi isseoyo", translation: "I have an older brother (possession)" },
                ],
            },
            {
                condition: "Existence / location — is something there?",
                result: "[thing] + 이/가 있어요 / 없어요",
                examples: [
                    { native: "화장실이 있어요?", romanized: "hwajangsiri isseoyo?", translation: "Is there a bathroom? (existence)" },
                    { native: "카페가 있어요", romanized: "kafega isseoyo", translation: "There is a café (existence)" },
                    { native: "지하철역이 없어요", romanized: "jihacheolyeogi eopseoyo", translation: "There is no subway station (existence)" },
                ],
            },
            {
                condition: "Choosing 이 or 가",
                result: "이 after consonant · 가 after vowel",
                examples: [
                    { native: "시간이 있어요", romanized: "sigani isseoyo", translation: "ends in consonant → use", annotation: "시간 / ㄴ / 이"},
                    { native: "카페가 있어요", romanized: "kafega isseoyo", translation: "ends in vowel → use", annotation: "카페 / 가"},
                ],
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
                refId: "ko-g-a1-25",
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
            { word: "시간이 있어요?", romanized: "sigani isseoyo?", translation: "Do you have time?" },
        ],
    },
]
