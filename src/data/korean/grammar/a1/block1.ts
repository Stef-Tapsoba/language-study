import { GrammarLesson } from "../../../../types"

export const block1Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-4",
        level: "A1",
        title: "저는 ___이에요/예요 — your first Korean sentence",
        explanation: `Korean self-introduction runs on one core sentence frame:

저는 ___ 이에요 / 예요.
I am ___.

Use it now, before analysing it. Fill in the blank:
저는 학생이에요. — I am a student.
저는 선생님이에요. — I am a teacher.
저는 의사예요. — I am a doctor.

The ending changes based on the final sound of the word:
- 이에요 — after a word ending in a consonant (받침): 학생**이에요**, 회사원**이에요**
- 예요 — after a word ending in a vowel: 의사**예요**, 소피**예요**

Simple check: look at the last syllable of the word. If it has a 받침 at the bottom → 이에요. If it ends with just a vowel → 예요.

**Questions are easy:** Say the same sentence with a rising tone. No word order change.
학생이에요? (rising) = Are you a student?

**저는** is presented here as the polite way to say "I" — a fixed chunk. The 는 part will be explained in Block 2. For now: 저는 = I (polite).

**Essential meeting phrases:**
만나서 반가워요! — Nice to meet you!
저도 반가워요! — Nice to meet you too! (저도 = me too)`,
        examples: [
            { native: "저는 학생이에요.", romanized: "Jeoneun haeksaengieyo.", translation: "I am a student. (학생 ends in ㅇ받침 → 이에요)" },
            { native: "저는 소피예요.", romanized: "Jeoneun sopiyeyo.", translation: "I'm Sophie. (소피 ends in vowel → 예요)" },
            { native: "저는 회사원이에요.", romanized: "Jeoneun hoesawonieyo.", translation: "I'm an office worker." },
            { native: "한국 사람이에요?", romanized: "Hanguk saramieyo?", translation: "Are you Korean? (same frame, rising tone = question)" },
            { native: "아니요, 저는 영국 사람이에요.", romanized: "Aniyo, jeoneun yeongguk saramieyo.", translation: "No, I'm British." },
            { native: "만나서 반가워요!", romanized: "Mannaseo bangawoyo!", translation: "Nice to meet you! (fixed phrase — the grammar inside it comes at Block 5)" },
        ],
        inlineVocab: [
            { word: "저는", romanized: "jeoneun", translation: "I (polite) — fixed chunk for now; 는 explained in Block 2" },
            { word: "이에요 / 예요", romanized: "ieyo / yeyo", translation: "am/is/are — 이에요 after consonant, 예요 after vowel" },
            { word: "학생", romanized: "haeksaeng", translation: "student" },
            { word: "선생님", romanized: "seonsaengnim", translation: "teacher" },
            { word: "의사", romanized: "uisa", translation: "doctor" },
            { word: "회사원", romanized: "hoesawon", translation: "office worker" },
            { word: "만나서 반가워요", romanized: "mannaseo bangawoyo", translation: "Nice to meet you (essential social phrase — learn as a chunk)" },
            { word: "저도", romanized: "jeodo", translation: "me too / I also" },
        ],
    },
    {
        id: "ko-g-a1-5",
        level: "A1",
        title: "Asking who someone is + 뭐예요 / 누구예요",
        explanation: `You can say who you are. Now learn how to ask — and how to use the first question words.

The same 이에요/예요 frame works for questions with rising intonation:
선생님이에요? — Are you a teacher?
한국 사람이에요? — Are you Korean?

Two essential question words for identity:
뭐예요? — What is it? / What are you?
누구예요? — Who is it? / Who are you?

These are your first question words in Korean. Both use 예요 because 뭐 and 누구 end in vowel sounds.

Answering correctly:
네, 저는 ___이에요/예요. — Yes, I am ___.
아니요, 저는 ___이에요/예요. — No, I am ___.

Introducing another person (chunk to memorise):
이 사람은 제 친구예요. — This person is my friend.
이 사람은 = this person (chunk)
제 = my (polite form of 나의)
친구 = friend

Notice 이 사람은 uses 은 after 이 사람. You'll see 은/는 constantly. Don't analyse it yet — it will become clear in Block 2. For now, treat 저는 and 이 사람은 as fixed opening phrases.`,
        examples: [
            { native: "이름이 뭐예요? — 저는 민준이에요.", romanized: "Ireumi mwoyeyo? — Jeoneun minjunieyo.", translation: "What's your name? — I'm Minjun." },
            { native: "어디에서 왔어요? — 영국에서 왔어요.", romanized: "Eodieseo wasseoyo? — Yeonggugeso wasseoyo.", translation: "Where are you from? — I'm from the UK." },
            { native: "학생이에요? — 아니요, 저는 회사원이에요.", romanized: "Haeksaengieyo? — Aniyo, jeoneun hoesawonieyo.", translation: "Are you a student? — No, I'm an office worker." },
            { native: "이 사람은 제 친구예요.", romanized: "I sarameun je chinguyeyo.", translation: "This person is my friend." },
            { native: "누구예요? — 제 동생이에요.", romanized: "Nuguyeyo? — Je dongsaengieyo.", translation: "Who is it? — It's my younger sibling." },
            { native: "만나서 반가워요! — 저도 반가워요!", romanized: "Mannaseo bangawoyo! — Jeodo bangawoyo!", translation: "Nice to meet you! — Nice to meet you too!" },
        ],
        inlineVocab: [
            { word: "뭐예요?", romanized: "mwoyeyo?", translation: "What is it? (뭐 = what, 예요 = is)" },
            { word: "누구예요?", romanized: "nuguyeyo?", translation: "Who is it?" },
            { word: "네 / 아니요", romanized: "ne / aniyo", translation: "yes / no" },
            { word: "제", romanized: "je", translation: "my (polite — short form of 저의)" },
            { word: "이 사람", romanized: "i saram", translation: "this person (chunk for introductions)" },
            { word: "친구", romanized: "chingu", translation: "friend" },
            { word: "어디에서 왔어요?", romanized: "Eodieseo wasseoyo?", translation: "Where did you come from? / Where are you from?" },
        ],
    },
    {
        id: "ko-g-a1-6",
        level: "A1",
        title: "Nationality, origin, and the ___ 사람이에요 pattern",
        explanation: `You can introduce yourself fully: name, nationality, and origin. These follow directly from 이에요/예요.

Nationality: ___ 사람이에요
사람 = person. Country + 사람 = nationality.

영국 사람이에요. — I'm British.
한국 사람이에요. — I'm Korean.
미국 사람이에요. — I'm American.
프랑스 사람이에요. — I'm French.
일본 사람이에요. — I'm Japanese.

Where you're from: ___에서 왔어요
에서 = from (you'll learn this particle fully in Block 4)
왔어요 = came (past tense — fully explained in Block 3)
For now, use 어디에서 왔어요? and ___에서 왔어요 as fixed phrases.

영국에서 왔어요. — I'm from the UK. (lit. I came from the UK)
런던에서 왔어요. — I'm from London.

The full introduction so far:
저는 소피예요. 영국 사람이에요. 런던에서 왔어요.
(I'm Sophie. I'm British. I'm from London.)

___씨 is the polite suffix for names — like Mr/Ms but for everyone:
소피씨 = Sophie (addressing Sophie politely)
민준씨 = Minjun (addressing Minjun)
Always add 씨 when addressing someone by name in 해요체 — saying a name alone without 씨 is too blunt.`,
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
            { word: "___에서 왔어요", romanized: "eseo wasseoyo", translation: "I came from / I'm from ___ (fixed phrase for origin)" },
            { word: "___씨", romanized: "ssi", translation: "polite name suffix — always use when addressing someone by name in 해요체" },
            { word: "어디", romanized: "eodi", translation: "where (first question word — more in Block 3)" },
        ],
    },
    {
        id: "ko-g-a1-7",
        level: "A1",
        title: "Numbers 1–20 (Sino-Korean) + age with 살",
        explanation: `Korean has two number systems. The Sino-Korean system (borrowed from Chinese) is used for age, minutes, phone numbers, floors, months, and prices. Learn these 20 numbers now — they appear constantly.

1–10: 일 이 삼 사 오 육 칠 팔 구 십
11–20: 십일 십이 십삼 십사 십오 십육 십칠 십팔 십구 이십

The pattern is completely regular: 십일 = 10+1, 십이 = 10+2, 이십 = 2×10.

Age uses 살 (the counter for years of life):
저는 ___살이에요. — I am ___ years old.

저는 스물여덟 살이에요. — I am 28 years old.

Wait — 스물여덟? That's not Sino-Korean. Age uses NATIVE Korean numbers (from a second system you'll learn in Block 4). But the pattern is introduced here because age is the most urgent context. The native numbers for age:
하나(1) 둘(2) 셋(3) 넷(4) 다섯(5) 여섯(6) 일곱(7) 여덟(8) 아홉(9) 열(10)
열하나(11) 열둘(12)... 스물(20) 스물하나(21)...

Before a counter, 하나→한, 둘→두, 셋→세, 넷→네.
스물한 살 (21 years old) · 스물두 살 (22) · 서른 살 (30) · 마흔 살 (40)

For now: memorise the Sino-Korean 1-20. For age, use the native Korean numbers with 살. Both number systems will be explained fully in Block 4.`,
        examples: [
            { native: "저는 스물여섯 살이에요.", romanized: "Jeoneun seumulyeoseot sarieyo.", translation: "I'm 26 years old. (native Korean: 스물=20, 여섯=6)" },
            { native: "몇 살이에요? — 서른두 살이에요.", romanized: "Myeot sarieyo? — Seorendeu sarieyo.", translation: "How old are you? — I'm 32." },
            { native: "삼십이에요? — 아니요, 이십팔이에요.", romanized: "Samsibieyo? — Aniyo, isipparie yo.", translation: "Is it 32? — No, it's 28. (Sino-Korean for non-age counts)" },
            { native: "전화번호가 뭐예요? — 010-사-오삼-이칠이에요.", romanized: "Jeonhwabeonhoga mwoyeyo? — Phone number: 010-4-53-27", translation: "What's your phone number? (Sino-Korean for phone numbers)" },
            { native: "지금 몇 시예요? — 열두 시예요.", romanized: "Jigeum myeot siyeyo? — Yoldu siyeyo.", translation: "What time is it? — It's 12 o'clock. (Sino-Korean for time too)" },
        ],
        inlineVocab: [
            { word: "일 이 삼 사 오 육 칠 팔 구 십", romanized: "il i sam sa o yuk chil pal gu sip", translation: "1 2 3 4 5 6 7 8 9 10 (Sino-Korean)" },
            { word: "살", romanized: "sal", translation: "counter for years of age (uses native Korean numbers)" },
            { word: "스물 / 서른 / 마흔", romanized: "seumul / seoreun / maheun", translation: "20 / 30 / 40 (native Korean decades)" },
            { word: "몇 살이에요?", romanized: "Myeot sarieyo?", translation: "How old are you?" },
            { word: "한 / 두 / 세 / 네", romanized: "han / du / se / ne", translation: "1 / 2 / 3 / 4 (native Korean numbers before a counter)" },
        ],
    },
    {
        id: "ko-g-a1-8",
        level: "A1",
        title: "Professions and jobs: the 이에요/예요 pattern extended",
        explanation: `You can now introduce your job as naturally as your name. Professions follow the same 저는 ___이에요/예요 frame.

Core professions:
학생 — student
대학생 — university student
선생님 — teacher
회사원 — office worker
의사 — doctor
간호사 — nurse
엔지니어 — engineer
디자이너 — designer
요리사 — cook / chef
작가 — writer

The 님 suffix adds respect. 선생님 (teacher-님), 의사 선생님 (Doctor). You'll see 님 used with many job titles as a marker of professional respect.

Talking about what you study / do:
저는 한국어를 공부해요. — I study Korean. (공부해요 = 공부하다 = study)
저는 회사에서 일해요. — I work at a company. (일해요 = 일하다 = work)

These are your first action verb phrases. Don't worry about the grammar inside them yet — learn them as useful chunks. 공부해요 and 일해요 will be fully explained when verbs arrive in Block 2.

Keeping the conversation going — essential:
___씨는요? — What about you? / And you?
저도요. — Me too.
아, 그래요? — Oh, really? (light reaction — very common)`,
        examples: [
            { native: "저는 회사원이에요. ___씨는요?", romanized: "Jeoneun hoesawonieyo. Ssineun yo?", translation: "I'm an office worker. What about you?" },
            { native: "저는 대학생이에요. 한국어를 공부해요.", romanized: "Jeoneun daehaksaengieyo. Hangugeoreul gongbuhaeyo.", translation: "I'm a university student. I study Korean." },
            { native: "저도 학생이에요!", romanized: "Jeodo haeksaengieyo!", translation: "I'm a student too!" },
            { native: "무슨 일 해요? — 저는 디자이너예요.", romanized: "Museun il haeyo? — Jeoneun dijaineoeyeo.", translation: "What kind of work do you do? — I'm a designer." },
            { native: "아, 그래요? 어디에서 일해요?", romanized: "A, geuraeyo? Eodieseo ilhaeyo?", translation: "Oh really? Where do you work?" },
        ],
        inlineVocab: [
            { word: "학생 / 대학생", romanized: "haeksaeng / daehaksaeng", translation: "student / university student" },
            { word: "선생님 / 의사", romanized: "seonsaengnim / uisa", translation: "teacher / doctor" },
            { word: "님", romanized: "nim", translation: "respectful suffix for professions and names" },
            { word: "공부해요", romanized: "gongbuhaeyo", translation: "study (공부하다 → 공부해요 — full verb system in Block 2)" },
            { word: "일해요", romanized: "ilhaeyo", translation: "work (일하다 → 일해요 — chunk for now)" },
            { word: "___씨는요?", romanized: "ssineunyo?", translation: "What about you? / And you?" },
            { word: "아, 그래요?", romanized: "a, geuraeyo?", translation: "Oh really? (standard light-reaction phrase in Korean conversation)" },
        ],
    },
    {
        id: "ko-g-a1-9",
        level: "A1",
        title: "있어요 / 없어요 — existence, possession, and what you have",
        explanation: `있어요 and 없어요 are two of the most important verbs in Korean. They do double duty.

있어요 — exists / is there / I have
없어요 — doesn't exist / isn't there / I don't have

Usage 1 — Possession (does someone have something?):
저는 형이 있어요. — I have an older brother (male speaker).
저는 시간이 없어요. — I don't have time.
돈이 있어요? — Do you have money?

Usage 2 — Location (is something there?):
화장실이 있어요? — Is there a bathroom?
카페가 있어요. — There's a café.
지하철역이 없어요. — There's no subway station.

The question form is just rising intonation — same as everything else:
시간이 있어요? — Do you have time? / Is there time?

After the thing you have or that exists, you'll see 이 or 가. These are subject markers — you'll see them constantly from now on. For now, notice they're there. Block 2 will name them.

이 vs 가:
- 이 after a consonant: 시간**이** 있어요, 화장실**이** 있어요
- 가 after a vowel: 친구**가** 있어요, 카페**가** 있어요

The pattern — noun + 이/가 있어요/없어요 — is one of the most productive structures in Korean.`,
        examples: [
            { native: "저는 여동생이 있어요.", romanized: "Jeoneun yeodongsaengi isseoyo.", translation: "I have a younger sister." },
            { native: "저는 형이 없어요.", romanized: "Jeoneun hyeongi eopseoyo.", translation: "I don't have an older brother." },
            { native: "시간이 있어요? — 네, 있어요!", romanized: "Sigani isseoyo? — Ne, isseoyo!", translation: "Do you have time? — Yes, I do!" },
            { native: "화장실이 어디에 있어요?", romanized: "Hwajangsiri eodie isseoyo?", translation: "Where is the bathroom? (있어요 = is located)" },
            { native: "근처에 카페가 있어요.", romanized: "Geuncheoe kapega isseoyo.", translation: "There's a café nearby." },
            { native: "오늘 약속이 없어요.", romanized: "Oneul yaksogi eopseoyo.", translation: "I have no plans today." },
        ],
        inlineVocab: [
            { word: "있어요", romanized: "isseoyo", translation: "there is / I have / exists" },
            { word: "없어요", romanized: "eopseoyo", translation: "there isn't / I don't have / doesn't exist" },
            { word: "이 / 가", romanized: "i / ga", translation: "subject marker: 이 after consonant, 가 after vowel — named in Block 2" },
            { word: "시간", romanized: "sigan", translation: "time" },
            { word: "약속", romanized: "yaksok", translation: "appointment / plans / promise" },
            { word: "근처에", romanized: "geuncheoe", translation: "nearby / in the vicinity (에 for location — more in Block 2)" },
        ],
    },
]
