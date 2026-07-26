import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-4",
        level: "A1",
        title: "저는 ___이에요/예요 — your first Korean sentence",
        explanation: `Korean self-introduction runs on a single sentence frame: 저는 ___ 이에요/예요, meaning "I am ___." 저는 means "I" or "as for me" in polite speech, and 이에요/예요 is the copula, the verb that links a noun to its identity (like "am/is/are" in English). Which form you use depends purely on sound: 이에요 follows a noun ending in a consonant, and 예요 follows a noun ending in a vowel, because Korean avoids awkward vowel collisions between words. At this stage, treat the whole frame as a fixed pattern you can fill in with a name or job; the grammar behind 저는 and the copula will be unpacked piece by piece in later lessons.`,
        ruleIds: ["ko-r-a1-4-1", "ko-r-a1-4-2"],
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
        explanation: `Now that you can state your own identity, the same 이에요/예요 frame lets you ask about someone else's. Korean does not reorder words to form a question the way English does (compare "You are a student" versus "Are you a student?"); instead, a statement becomes a question simply by adding rising intonation, so 학생이에요 (statement) and 학생이에요? (question) are word-for-word identical. Two new question words extend the pattern to identity questions: 뭐 (what) asks about a thing, as in 뭐예요? ("What is it?"), and 누구 (who) asks about a person, as in 누구예요? ("Who is it?"). Both question words end in vowels, so they always combine with 예요, never 이에요.`,
        ruleIds: ["ko-r-a1-5-1", "ko-r-a1-5-2"],
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
        explanation: `Nationality and origin are expressed with two distinct patterns that build on what you already know. [country] + 사람이에요 states your nationality, since 사람 means "person" and the phrase literally reads "[country] person am/is/are" (e.g. 영국 사람이에요, "I'm British"). [place] + 에서 왔어요 states where you traveled from, using 에서 ("from") plus 왔어요, the past tense of 오다 ("to come"); this is a fixed phrase for now, and both 에서 and past tense get their own full explanations later. Note that 사람이에요 is just another instance of the 이에요/예요 frame from the first lesson in this block, so nothing new is happening structurally, only new vocabulary slotting into a familiar shape.`,
        ruleIds: ["ko-r-a1-6-1", "ko-r-a1-6-2"],
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
            { type: "dialogue", exchanges: [
                { native: "어디에서 왔어요?", romanized: "Eodieseo wasseoyo?", translation: "Where are you from?" },
                {native: "한국에서 왔어요.", romanized: "Hangugeso wasseoyo.", translation: "I'm from Korea." },
            ]},
            { native: "저는 서울에서 왔어요.", romanized: "Jeoneun seoureseo wasseoyo.", translation: "I'm from Seoul." },
            { native: "민준씨는 어디에서 왔어요?", romanized: "Minjunssineun eodieseo wasseoyo?", translation: "Minjun-ssi, where are you from?" },
            { type: "dialogue", exchanges: [
                { native: "한국 사람이에요?", romanized: "Hanguk saramieyo?", translation: "Are you Korean?" },
                { native: "아니요, 저는 일본 사람이에요.", romanized: "Aniyo, jeoneun ilbon saramieyo.", translation: "No, I'm Japanese." },
            ]},
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
        explanation: `Korean uniquely maintains two complete, parallel number systems side by side: Sino-Korean numbers, borrowed from Chinese centuries ago, and native Korean numbers, which are original to the language. This lesson covers Sino-Korean, which you will use constantly for prices, phone numbers, floor numbers, dates, and months. The system is fully regular and place-value based, much like Arabic numerals: once you learn 일 through 십 (1 through 10), the numbers 11 through 19 are formed by simply saying 십 (ten) followed by the units digit, so 11 is 십일 (ten-one) and 15 is 십오 (ten-five), with no irregular forms to memorize the way English has "eleven" and "twelve."`,
        ruleIds: ["ko-r-a1-7-1", "ko-r-a1-7-2"],
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
            { type: "dialogue", exchanges: [
                { native: "전화번호가 뭐예요?", romanized: "Jeonhwabeonhoga mwoyeyo?", translation: "What's your phone number?" },
                { native: "010-오-삼이-칠육이에요.", romanized: "010-5-32-76", translation: "010-5-32-76" },
            ]},
            { type: "dialogue", exchanges: [
                { native: "몇 층이에요?", romanized: "Myeot cheungieyo?", translation: "Which floor is it?" },
                { native: "삼 층이에요.", romanized: "Sam cheungieyo.", translation: "Third floor." },
            ]},
            { type: "dialogue", exchanges: [
                { native: "얼마예요?", romanized: "Eolmayeyo?", translation: "How much is it?" },
                { native: "이천오백 원이에요.", romanized: "Icheonobaek wonieyo.", translation: "2,500 won." },
            ]},
            { type: "dialogue", exchanges: [
                { native: "지금 몇 월이에요?", romanized: "Jigeum myeot worieyo?", translation: "What month is it?" },
                { native: "십이 월이에요.", romanized: "Sibi worieyo.", translation: "December." },
            ]},
            { type: "dialogue", exchanges: [
                { native: "이십이에요?", romanized: "Isibieyo?", translation: "Is it 20?" },
                { native: "아니요, 십팔이에요.", romanized: "Aniyo, sipparieyo.", translation: "No, it's 18." },
            ]},
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
        explanation: `Native Korean numbers form the second half of Korean's dual number system, and they are used for stating age, counting most everyday objects, and general quantities from 1 to 99 (Sino-Korean takes over for 100 and above). These numbers share no roots at all with Sino-Korean, so 하나 (1) and 일 (1) must simply be memorized as separate vocabulary rather than derived from one another. As with Sino-Korean, learn 1 through 10 first, then the ten decade words (스물 20, 서른 30, and so on), which combine with the units the same way Sino-Korean teens do; the choice of system is not optional or stylistic, it is grammatically fixed by context, and age is one of the clearest cases where only native Korean numbers are correct.`,
        ruleIds: ["ko-r-a1-7b-1", "ko-r-a1-7b-2", "ko-r-a1-7b-3", "ko-r-a1-7b-4"],
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
            { type: "dialogue", exchanges: [
                { native: "몇 살이에요?", romanized: "Myeot sarieyo?", translation: "How old are you?" },
                { native: "서른두 살이에요.", romanized: "Seoreundu sarieyo.", translation: "I'm 32." },
            ]},
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
        explanation: `Professions are introduced exactly as naturally as your name, because they slot directly into the same 저는 ___ 이에요/예요 frame you already use for identity, and the choice between 이에요 and 예요 still depends only on whether the profession noun ends in a consonant or vowel. This lesson also gives you your first two verb phrases, 공부해요 (I study) and 일해요 (I work), which you can use now as memorized chunks even though the full verb conjugation system is not explained until the present tense lesson. Finally, three small conversational fillers, ___씨는요? ("What about you?"), 저도요 ("Me too"), and 아, 그래요? ("Oh, really?"), are the kind of glue phrases that make an exchange feel like a real conversation rather than a scripted drill.`,
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
            { type: "dialogue", exchanges: [
                { native: "무슨 일 해요?", romanized: "Museun il haeyo?", translation: "What kind of work do you do?" },
                { native: "저는 디자이너예요.", romanized: "Jeoneun dijaineoeyeo.", translation: "I'm a designer." }
            ]},
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
        explanation: `있어요 and 없어요 are among the most frequently used words in Korean, and each does double duty as two different English verbs at once. 있어요 covers both possession ("I have") and existence or location ("there is" / "it's located"), while 없어요 covers the negative of both ("I don't have" and "there isn't"). English speakers often expect separate verbs for "have" and "there is," so it is worth noticing early that Korean treats having something and something existing as the same underlying idea. The noun that is possessed or that exists is marked with the subject particle 이/가 (introduced properly in a later lesson), not the object particle, which reflects that 있어요 behaves grammatically more like "exists" than like a transitive "to have."`,
        ruleIds: ["ko-r-a1-9-1", "ko-r-a1-9-2", "ko-r-a1-9-3"],
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
            { type: "dialogue", exchanges: [
                { native: "시간이 있어요?", romanized: "Sigani isseoyo?", translation: "Do you have time?" },
                { native: "네, 있어요!", romanized: "Ne, isseoyo!", translation: "Yes, I do!" }
            ]},
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
