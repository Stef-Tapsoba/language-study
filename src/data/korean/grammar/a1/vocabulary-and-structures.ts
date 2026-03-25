import { GrammarLesson } from "../../../../types"

export const vocabularyAndStructuresLessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-11",
        level: "A1",
        title: "Korean Numbers — Two Systems",
        explanation: "Korean has two completely separate counting systems and you need both. They are used in different contexts — mixing them is a common beginner mistake.\n\nSino-Korean (from Chinese): used for dates, money, phone numbers, minutes, floor numbers, and any number over 99.\n\nNative Korean: used for counting objects (with counters), telling hours, and ages up to 99. The numbers 하나(1), 둘(2), 셋(3), 넷(4) shorten to 한, 두, 세, 네 when followed by a counter word.",
        examples: [
            { native: "Sino: 일 이 삼 사 오 육 칠 팔 구 십", romanized: "il i sam sa o yuk chil pal gu sip", translation: "1 2 3 4 5 6 7 8 9 10 (use for money, dates, minutes)", speakText: "일 이 삼 사 오 육 칠 팔 구 십" },
            { native: "Native: 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열", romanized: "hana dul set net daseot yeoseot ilgop yeodeol ahop yeol", translation: "1 2 3 4 5 6 7 8 9 10 (use for objects, hours, age)", speakText: "하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열" },
            { native: "사과 두 개 / 커피 세 잔", romanized: "sagwa du gae / keopi se jan", translation: "two apples / three coffees (native numbers, shortened before counters)", speakText: "사과 두 개, 커피 세 잔" },
            { native: "지금 세 시 삼십 분이에요.", romanized: "Jigeum se si samsip bunieyo.", translation: "It's 3:30 now. (hours = native 세, minutes = Sino 삼십)" },
            { native: "저는 스물두 살이에요.", romanized: "Jeoneun seumuldu sarieyo.", translation: "I am 22 years old. (age = native Korean)" },
        ],
        inlineVocab: [
            { word: "일 이 삼 사 오", translation: "1 2 3 4 5 (Sino-Korean)" },
            { word: "하나 둘 셋 넷 다섯", translation: "1 2 3 4 5 (native Korean)" },
            { word: "살", translation: "years old (age counter)" },
            { word: "개", translation: "general object counter (things)" },
            { word: "잔", translation: "cup / glass (liquid counter)" },
            { word: "분", translation: "minute (Sino-Korean) / polite counter for people" },
        ]
    },
    {
        id: "ko-g-a1-12",
        level: "A1",
        title: "Question Words: 뭐, 어디, 언제, 왜, 어떻게, 누구",
        explanation: "Korean question words stay in their natural sentence position — they do not move to the front like in English. The sentence structure stays the same (SOV); only the intonation or verb ending signals a question.\n\n뭐/무엇 = what | 어디 = where | 언제 = when | 왜 = why | 어떻게 = how | 누구 = who\n\nNote: 누구 (who) becomes 누가 when followed by the subject particle 가.",
        examples: [
            { native: "이게 뭐예요?", romanized: "Ige mwoyeyo?", translation: "What is this? (뭐 in subject position)" },
            { native: "어디에 가요?", romanized: "Eodie gayo?", translation: "Where are you going?" },
            { native: "언제 왔어요?", romanized: "Eonje wasseoyo?", translation: "When did you come?" },
            { native: "왜 안 먹어요?", romanized: "Wae an meogeoyo?", translation: "Why aren't you eating?" },
            { native: "어떻게 가요?", romanized: "Eotteoke gayo?", translation: "How do you get there?" },
            { native: "누가 왔어요?", romanized: "Nuga wasseoyo?", translation: "Who came? (누구 + 가 subject particle → 누가)" },
        ],
        inlineVocab: [
            { word: "뭐", translation: "what (spoken form of 무엇)" },
            { word: "어디", translation: "where" },
            { word: "언제", translation: "when" },
            { word: "왜", translation: "why" },
            { word: "어떻게", translation: "how" },
            { word: "누구", translation: "who (누가 = subject form)" },
        ]
    },
    {
        id: "ko-g-a1-13",
        level: "A1",
        title: "Adjective Conjugation: describing things",
        explanation: `Korean adjectives (descriptive verbs) conjugate exactly like action verbs — they take the same ~아요/어요 endings for polite present tense.

REGULAR PATTERN — same vowel harmony rules as verbs:
  크다  (big)     → 커요      (ㅡ drops, add 어요)
  작다  (small)   → 작아요    (ㅏ vowel → add 아요)
  좋다  (good)    → 좋아요    (ㅗ vowel → add 아요)
  많다  (many)    → 많아요
  없다  (no/none) → 없어요

**ㅡ-IRREGULAR** — verbs/adjectives ending in ㅡ drop the ㅡ before 아/어:
  크다  → 크 + 어요 → 커요    (not 크어요)
  예쁘다 → 예쁘 + 어요 → 예뻐요 (not 예쁘어요)
  나쁘다 → 나쁘 + 어요 → 나빠요

**ㅂ-IRREGULAR** — adjectives ending in ㅂ change ㅂ → 우 before a vowel:
  춥다  (cold)    → 추 + 워요 → 추워요  (not 춥어요)
  덥다  (hot)     → 더 + 워요 → 더워요
  가볍다 (light)  → 가벼워요

KEY DIFFERENCE from action verbs:
  Action verb:    학교에 가요. (I go to school.) — describes an action
  Descriptive verb: 날씨가 좋아요. (The weather is nice.) — describes a state

In negative form, adjectives also use 안:
  좋아요 → 안 좋아요   (not good)
  커요   → 안 커요     (not big)`,
        examples: [
            { native: "이 가방이 커요.", romanized: "I gabangi keoyo.", translation: "This bag is big. (크다 → 커요, ㅡ-irregular)" },
            { native: "꽃이 예뻐요.", romanized: "Kkochi yeppeoyo.", translation: "The flower is pretty. (예쁘다 → 예뻐요, ㅡ-irregular)" },
            { native: "여름에 더워요.", romanized: "Yeoreume deowoyo.", translation: "It's hot in summer. (덥다 → 더워요, ㅂ-irregular)" },
            { native: "겨울에 추워요.", romanized: "Gyeoure chuwoyo.", translation: "It's cold in winter. (춥다 → 추워요, ㅂ-irregular)" },
            { native: "날씨가 안 좋아요.", romanized: "Nalssiga an joayo.", translation: "The weather is not good. (안 + adjective)" },
            { native: "사람이 많아요.", romanized: "Sarami manayo.", translation: "There are many people. (많다 → 많아요, regular)" },
        ],
        inlineVocab: [
            { word: "크다", translation: "big / large (크다 → 커요, ㅡ-irregular)" },
            { word: "예쁘다", translation: "pretty (예쁘다 → 예뻐요, ㅡ-irregular)" },
            { word: "춥다", translation: "cold weather (춥다 → 추워요, ㅂ-irregular)" },
            { word: "덥다", translation: "hot weather (덥다 → 더워요, ㅂ-irregular)" },
            { word: "많다", translation: "many / much (많다 → 많아요, regular)" },
            { word: "날씨", translation: "weather" },
        ]
    },
    {
        id: "ko-g-a1-14",
        level: "A1",
        title: "Korean Speech Levels — Why Korean Changes",
        explanation: `Korean has multiple speech levels — different verb endings used depending on your relationship with the person you're speaking to. This is not optional politeness like 'please' in English. It is a grammatical requirement, and using the wrong level is a social error.

WHY SPEECH LEVELS EXIST
Korean society has traditionally placed strong emphasis on social hierarchy based on age, status, and relationship. The language reflects this: how you speak to your boss is grammatically different from how you speak to a friend, and different again from how you speak to a child.

THE THREE LEVELS YOU NEED TO KNOW AT A1:

1. 해요체 (haeyoche) — POLITE INFORMAL → verbs end in ~아요/어요/해요
   This is your default. Use it with:
   • Anyone you've just met
   • Shopkeepers, service staff, strangers
   • People older or more senior than you
   • Teachers, colleagues you don't know well
   This level is safe in almost all everyday situations.
   먹어요 (I eat) / 가요 (I go) / 해요 (I do)

2. 합쇼체 (hapssyoche) — FORMAL POLITE → verbs end in ~습니다/ㅂ니다
   Used in formal situations: presentations, announcements, job interviews, news broadcasts, first meetings in professional contexts. You will hear this in shops and restaurants as well. You should recognise it, but 해요체 is always acceptable as a reply.
   먹습니다 (I eat) / 갑니다 (I go) / 합니다 (I do)

3. 반말 (banmal) — INFORMAL (NO ~요) → bare verb stems
   Used only with close friends of the same age, younger people, or children. Using 반말 with someone you don't know well or someone older than you is rude. Do NOT use 반말 at A1. Learn to recognise it, but stick to 해요체.
   먹어 / 가 / 해

THE RULE AT A1: Always use 해요체. It is polite without being stiff, and it will never offend anyone.

HOW TO SWITCH REGISTERS
You do not switch levels on your own initiative. The more senior or older person invites the change. Common phrases:
  말을 놓아도 돼요. (You can speak informally with me.)
  편하게 말해요. (Speak comfortably.)
Until someone says something like this, stay with 해요체.`,
        examples: [
            { native: "먹어요 / 먹습니다 / 먹어", romanized: "meogeoyo / meogseumnida / meogeo", translation: "I eat — polite informal / formal polite / casual (반말)", speakText: "먹어요, 먹습니다, 먹어" },
            { native: "안녕하세요. (formal) / 안녕! (casual)", romanized: "Annyeonghaseyo / Annyeong!", translation: "Hello — level difference visible even in greetings", speakText: "안녕하세요. 안녕!" },
            { native: "감사합니다. (formal) / 고마워요. (polite) / 고마워. (casual)", romanized: "Gamsahamnida / Gomawoyo / Gomawo", translation: "Thank you across three levels", speakText: "감사합니다. 고마워요. 고마워." },
            { native: "말을 놓아도 돼요.", romanized: "Mareul noaado dwaeyo.", translation: "You can speak casually with me. (invitation to switch levels)" },
            { native: "저는 학생이에요. (해요체)", romanized: "Jeoneun haksaengieyo.", translation: "I am a student. — 해요체 is always the safe choice", speakText: "저는 학생이에요." },
        ],
        inlineVocab: [
            { word: "해요체", translation: "polite informal speech level (default for A1 learners)" },
            { word: "합쇼체", translation: "formal polite speech level (~습니다/ㅂ니다)" },
            { word: "반말", translation: "casual / informal speech (no 요 — close friends only)" },
            { word: "먹어요", translation: "eat (해요체)" },
            { word: "먹습니다", translation: "eat (합쇼체 — formal)" },
            { word: "말을 놓다", translation: "to speak casually with someone (drop formal speech)" },
        ]
    },
    {
        id: "ko-g-a1-15",
        level: "A1",
        title: "하다 Compound Verbs & 좋아하다",
        explanation: `하다 (hada) means "to do". In Korean, a huge number of verbs are formed by
taking a noun and adding 하다 to it. This is one of the most productive patterns
in the language — once you know it, you can form hundreds of verbs.

STRUCTURE: Noun + 하다
  공부하다   = 공부 (study) + 하다 → to study
  운동하다   = 운동 (exercise) + 하다 → to exercise
  요리하다   = 요리 (cooking) + 하다 → to cook
  전화하다   = 전화 (telephone) + 하다 → to telephone / call
  쇼핑하다   = 쇼핑 (shopping) + 하다 → to shop

CONJUGATION: 하다 follows the same rules as any verb, but always produces 해요:
  공부하다 → 공부해요 (studies / am studying)
  운동하다 → 운동해요 (exercises)
  요리하다 → 요리해요 (cooks)

NEGATION with 하다 compounds — special rule:
안 (don't) and 못 (can't) go BETWEEN the noun and 하다, not before the whole verb:
  공부 안 해요.    (I don't study.)       NOT: 안 공부해요. ✗
  운동 못 해요.    (I can't exercise.)    NOT: 못 운동해요. ✗

GOOD NEWS: Sino-Korean words you already know as nouns often become verbs with 하다.
If you know the noun, you know the verb.

좋아하다 — TO LIKE
좋아하다 is a special 하다 verb meaning "to like". Unlike 좋다 (to be good/nice),
좋아하다 takes an object with 을/를:
  한국 음식을 좋아해요.   I like Korean food.
  커피를 좋아해요.        I like coffee.
  음악을 좋아해요?        Do you like music?

싫어하다 (to dislike) follows the same pattern:
  매운 음식을 싫어해요.   I dislike spicy food.`,
        examples: [
            { native: "저는 공부해요.", romanized: "Jeoneun gongbuhaeyo.", translation: "I study." },
            { native: "운동 안 해요.", romanized: "Undong an haeyo.", translation: "I don't exercise." },
            { native: "한국 음식을 좋아해요.", romanized: "Hanguk eumsige ul joahaeyo.", translation: "I like Korean food. (을 marks the object)" },
            { native: "커피를 좋아해요?", romanized: "Keopireul joahaeyo?", translation: "Do you like coffee?" },
            { native: "요리 못 해요.", romanized: "Yori mot haeyo.", translation: "I can't cook." },
        ],
        inlineVocab: [
            { word: "하다", translation: "to do (base of 하다 compound verbs)" },
            { word: "공부하다", translation: "to study (공부 + 하다)" },
            { word: "운동하다", translation: "to exercise (운동 + 하다)" },
            { word: "좋아하다", translation: "to like (takes object particle 을/를)" },
            { word: "싫어하다", translation: "to dislike" },
            { word: "요리하다", translation: "to cook (요리 + 하다)" },
        ]
    },
    {
        id: "ko-g-a1-16",
        level: "A1",
        title: "Demonstratives: 이/그/저",
        explanation: `Korean has THREE demonstrative series — not two like English (this/that).

이- (near the speaker)    →  이것  this thing / this one
그- (near the listener)   →  그것  that thing (near you)
저- (far from both)       →  저것  that thing over there

These combine with nouns:
  이 + 책 = 이 책    this book
  그 + 사람 = 그 사람  that person (near you)
  저 + 집 = 저 집    that house over there

Standalone pronouns (add 것 = thing):
  이것   this (thing)    →  informal: 이거
  그것   that (thing)    →  informal: 그거
  저것   that (far)      →  informal: 저거

With particles:
  이것이 뭐예요?    What is this?
  그것은 제 가방이에요.  That is my bag.
  저거 주세요.      Give me that (over there), please.

SHORTCUT: In casual speech 이것/그것/저것 → 이거/그거/저거`,
        examples: [
            { native: "이 책이 재미있어요.", romanized: "I chaegi jaemiisseoyo.", translation: "This book is interesting." },
            { native: "그 사람이 누구예요?", romanized: "Geu sarami nuguye yo?", translation: "Who is that person?" },
            { native: "저것이 뭐예요?", romanized: "Jeogeosi mwoyeyo?", translation: "What is that (over there)?" },
            { native: "이거 주세요.", romanized: "Igeo juseyo.", translation: "Give me this, please." },
            { native: "그거 얼마예요?", romanized: "Geugeo eolmayeyo?", translation: "How much is that?" },
        ],
        inlineVocab: [
            { word: "이", translation: "this- (near speaker: 이 책, 이것)" },
            { word: "그", translation: "that- (near listener: 그 사람, 그것)" },
            { word: "저", translation: "that over there- (far from both: 저 집, 저것)" },
            { word: "이것", translation: "this (thing) — informal: 이거" },
            { word: "그것", translation: "that (thing near you) — informal: 그거" },
            { word: "얼마", translation: "how much" },
        ]
    },
    {
        id: "ko-g-a1-17",
        level: "A1",
        title: "Future Tense: ~(으)ㄹ 거예요",
        explanation: `To talk about future plans or intentions, attach ~(으)ㄹ 거예요 to the verb stem.

FORMATION:
  Stem ends in vowel  → ㄹ 거예요    (drop 다, add ㄹ 거예요)
  Stem ends in consonant → 을 거예요  (drop 다, add 을 거예요)
  Stem ends in ㄹ     → ㄹ 거예요    (ㄹ stem — no change needed)

Examples:
  가다   → 가 + ㄹ 거예요   = 갈 거예요    (will go)
  먹다   → 먹 + 을 거예요  = 먹을 거예요  (will eat)
  공부하다 → 공부하 + ㄹ 거예요 = 공부할 거예요 (will study)
  살다   → 살 + ㄹ 거예요  = 살 거예요    (will live)

거예요 literally means "it is the case that" — so the structure is "it is the case that [I] will [verb]".

NEGATION: 안 before the stem, or 못 for inability:
  안 갈 거예요.    I won't go.
  못 먹을 거예요.  I won't be able to eat.

QUESTION: rising intonation → 갈 거예요?  (Are you going to go?)`,
        examples: [
            { native: "내일 학교에 갈 거예요.", romanized: "Naeil hakgyoe gal geoyeyo.", translation: "I will go to school tomorrow." },
            { native: "뭐 먹을 거예요?", romanized: "Mwo meogeul geoyeyo?", translation: "What are you going to eat?" },
            { native: "주말에 공부할 거예요.", romanized: "Jumare gongbuhal geoyeyo.", translation: "I will study on the weekend." },
            { native: "오늘 안 갈 거예요.", romanized: "Oneul an gal geoyeyo.", translation: "I won't go today." },
            { native: "어디에 살 거예요?", romanized: "Eodie sal geoyeyo?", translation: "Where are you going to live?" },
        ],
        inlineVocab: [
            { word: "(으)ㄹ 거예요", translation: "will / going to (future tense ending)" },
            { word: "갈 거예요", translation: "will go" },
            { word: "먹을 거예요", translation: "will eat" },
            { word: "내일", translation: "tomorrow" },
            { word: "주말", translation: "weekend" },
            { word: "살다", translation: "to live (in a place)" },
        ]
    },
    {
        id: "ko-g-a1-18",
        level: "A1",
        title: "Expressing Desire: ~고 싶어요",
        explanation: `To say what you want to do, attach ~고 싶어요 to the verb stem.

FORMATION:
  Verb stem + 고 싶어요   (works for ALL verbs — no consonant/vowel rule)

  가다   → 가고 싶어요    (I want to go)
  먹다   → 먹고 싶어요    (I want to eat)
  공부하다 → 공부하고 싶어요 (I want to study)

NEGATION:
  고 싶지 않아요   I don't want to (do)
  고 싶어요 + 안  ✗  (don't put 안 before 싶어요)

  먹고 싶지 않아요.  I don't want to eat.

PAST (wanted to):
  고 싶었어요   I wanted to
  가고 싶었어요. I wanted to go.

WHAT you want (a noun, not an action) uses 원하다:
  커피를 원해요.   I want coffee.
  But: 커피를 마시고 싶어요.  I want to drink coffee. (action)`,
        examples: [
            { native: "한국에 가고 싶어요.", romanized: "Hanguge gago sipeoyo.", translation: "I want to go to Korea." },
            { native: "뭐 먹고 싶어요?", romanized: "Mwo meokgo sipeoyo?", translation: "What do you want to eat?" },
            { native: "한국어를 배우고 싶어요.", romanized: "Hangugeo reul baeuge sipeoyo.", translation: "I want to learn Korean." },
            { native: "오늘은 집에 있고 싶어요.", romanized: "Oneureun jibe itgo sipeoyo.", translation: "Today I want to stay home." },
            { native: "가고 싶지 않아요.", romanized: "Gago sipji anayo.", translation: "I don't want to go." },
        ],
        inlineVocab: [
            { word: "고 싶어요", translation: "want to (do something)" },
            { word: "한국", translation: "Korea" },
            { word: "배우다", translation: "to learn" },
            { word: "고 싶지 않아요", translation: "don't want to (negation of ~고 싶어요)" },
            { word: "집", translation: "home / house" },
            { word: "있고 싶어요", translation: "want to stay / be (somewhere)" },
        ]
    },
    {
        id: "ko-g-a1-25",
        level: "A1",
        title: "Counters — Counting Things in Korean",
        explanation: `In Korean, you cannot simply say 'two apples' or 'three cups'. You must use a counter word that matches the type of object. This works the same way as Japanese counters — if you are studying both languages, you will find the concept familiar.

STRUCTURE: Native number + Counter (+ noun, or before a verb)
  사과 두 개      two apples      (noun + number + counter)
  커피 세 잔 주세요.  Three coffees please.

NATIVE NUMBERS BEFORE COUNTERS
Always use native Korean numbers (하나/둘/셋...) with counters — not Sino-Korean.
The numbers 하나(1), 둘(2), 셋(3), 넷(4), 스물(20) shorten before a counter:
  하나 → 한    둘 → 두    셋 → 세    넷 → 네    스물 → 스무

See lesson a1-11 for the two number systems.

THE SIX ESSENTIAL A1 COUNTERS

개 — general objects (the safe default for most things):
  한 개 (1)   두 개 (2)   세 개 (3)   네 개 (4)   다섯 개 (5)
  사과 두 개   two apples
  물건 세 개   three items
  When in doubt, use 개 — it works for most physical objects.

명 / 분 — people:
  한 명 / 두 명 / 세 명...
  분 is more polite: 두 분 (two people — respectful, e.g. to a waiter)
  학생 다섯 명    five students
  두 분이세요?    Is it two people? (restaurant, polite)

잔 — cups and glasses of liquid:
  한 잔 / 두 잔 / 세 잔...
  커피 한 잔    one cup of coffee
  물 두 잔     two glasses of water

병 — bottles:
  한 병 / 두 병 / 세 병...
  맥주 두 병    two bottles of beer
  물 한 병     one bottle of water

권 — bound books and notebooks:
  한 권 / 두 권 / 세 권...
  책 세 권     three books
  공책 두 권   two notebooks

장 — flat thin things (paper, tickets, photos, slices):
  한 장 / 두 장 / 세 장...
  티켓 두 장   two tickets
  종이 한 장   one sheet of paper
  피자 한 장   one slice of pizza

ORDERING WITH COUNTERS
  커피 두 잔 주세요.          Two coffees, please.
  어른 두 명, 어린이 한 명.   Two adults, one child.
  사과 세 개 얼마예요?        How much are three apples?

ASKING HOW MANY
  몇 + counter + 이에요/예요?   How many ~?
  몇 명이에요?    How many people?
  몇 잔이에요?    How many cups?
  몇 개예요?      How many (items)?`,
        examples: [
            { native: "사과 두 개 주세요.", romanized: "Sagwa du gae juseyo.", translation: "Two apples, please. (개 = general objects)" },
            { native: "커피 한 잔 주세요.", romanized: "Keopi han jan juseyo.", translation: "One coffee, please. (잔 = cups)" },
            { native: "두 분이세요?", romanized: "Du buniseyo?", translation: "Is it two people? (분 = polite counter for people)" },
            { native: "책 세 권 있어요.", romanized: "Chaek se gwon isseoyo.", translation: "I have three books. (권 = bound books)" },
            { native: "티켓 두 장 주세요.", romanized: "Tiket du jang juseyo.", translation: "Two tickets, please. (장 = flat things)" },
            { native: "몇 명이에요?", romanized: "Myeong myeongieyo?", translation: "How many people?" },
        ],
        inlineVocab: [
            { word: "개", translation: "general object counter (default when unsure)" },
            { word: "명", translation: "people counter (neutral)" },
            { word: "분", translation: "polite people counter (e.g. restaurant)" },
            { word: "잔", translation: "cup / glass counter" },
            { word: "권", translation: "counter for bound books / notebooks" },
            { word: "몇", translation: "how many / what number" },
        ]
    },
    {
        id: "ko-g-a1-27",
        level: "A1",
        title: "~(으)세요 — Polite Requests & Honorific Commands",
        explanation: `~(으)세요 is the standard polite form for requests, instructions, and commands in Korean. It is what you hear constantly in shops, announcements, classrooms, and everyday interactions. It is more natural and common in real life than the ~아/어 주세요 form.

FORMATION
  Verb stem ends in vowel or ㄹ → 세요
  Verb stem ends in consonant   → 으세요

  가다   → 가 + 세요    = 가세요       Please go. / Go.
  오다   → 오 + 세요    = 오세요       Please come. / Welcome.
  앉다   → 앉 + 으세요  = 앉으세요     Please sit down.
  읽다   → 읽 + 으세요  = 읽으세요     Please read.
  기다리다 → 기다리 + 세요 = 기다리세요 Please wait.

SPECIAL CASE — ㄹ stems drop ㄹ before 세요:
  살다   → 살 → 사 + 세요   = 사세요    Please live. / (as greeting: long live~)
  알다   → 알 → 아 + 세요   = 아세요    Do you know? (honorific question)
  만들다 → 만들 → 만드 + 세요 = 만드세요 Please make.

TWO USES

1. POLITE REQUESTS / INSTRUCTIONS — asking someone to do something:
  여기 앉으세요.          Please sit here.
  잠깐 기다리세요.        Please wait a moment.
  천천히 말씀해 주세요.   Please speak slowly.
  이쪽으로 오세요.        Please come this way.

2. HONORIFIC STATEMENTS — used to describe what a respected person does:
  선생님이 오세요.        The teacher is coming.
  어머니가 드세요.        My mother is eating. (드시다 = honorific eat)
  This use is more A2 — just recognise it for now.

NEGATIVE REQUEST — ~지 마세요 (please don't):
  하다  → 하지 마세요.     Please don't do that.
  가다  → 가지 마세요.     Please don't go.
  찍다  → 찍지 마세요.     Please don't take photos.

COMMON ~(으)세요 EXPRESSIONS YOU ALREADY KNOW
  어서 오세요.             Welcome! (lit. please come quickly — heard in every shop)
  안녕히 계세요.           Goodbye. (please stay well — said to person staying)
  안녕히 가세요.           Goodbye. (please go well — said to person leaving)
  See lesson a1-4 for greetings.

~(으)세요 vs ~아/어 주세요
  두 가지 다 공손하지만 (both are polite):
  ~(으)세요         direct polite request, everyday instructions
  ~아/어 주세요     requesting a favour, slightly softer (please do ~ for me)
  앉으세요.         Please sit. (standard instruction)
  앉아 주세요.      Could you please sit? (softer, asking a favour)`,
        examples: [
            { native: "여기 앉으세요.", romanized: "Yeogi anjeuseyo.", translation: "Please sit here." },
            { native: "잠깐 기다리세요.", romanized: "Jamkkan gidariseyo.", translation: "Please wait a moment." },
            { native: "이쪽으로 오세요.", romanized: "Ijjogeuro oseyo.", translation: "Please come this way." },
            { native: "천천히 말씀해 주세요.", romanized: "Cheoncheonhi malsseum hae juseyo.", translation: "Please speak slowly." },
            { native: "사진 찍지 마세요.", romanized: "Sajin jjikji maseyo.", translation: "Please don't take photos." },
            { native: "어서 오세요!", romanized: "Eoseo oseyo!", translation: "Welcome! (heard in every shop and restaurant)" },
        ],
        inlineVocab: [
            { word: "(으)세요", translation: "please (do something) — polite request/command" },
            { word: "앉으세요", translation: "please sit down" },
            { word: "기다리세요", translation: "please wait" },
            { word: "오세요", translation: "please come / welcome" },
            { word: "어서 오세요", translation: "welcome (heard in every shop)" },
            { word: "지 마세요", translation: "please don't (negative request)" },
        ]
    },
    {
        id: "ko-g-a1-29",
        level: "A1",
        title: "~(으)ㄹ까요? — Shall We? / I Wonder / What Do You Think?",
        explanation: `~(으)ㄹ까요? is a versatile sentence-ending that expresses suggestions, polite proposals, and wondering. It is one of the softest and most natural ways to make suggestions in Korean.

FORMATION
  Verb stem ends in vowel or ㄹ → ㄹ까요?
  Verb stem ends in consonant   → 을까요?

  가다   → 갈까요?      Shall we go?
  먹다   → 먹을까요?    Shall we eat?
  하다   → 할까요?      Shall we do it?
  앉다   → 앉을까요?    Shall we sit?

THREE USES

1. SUGGESTION — shall we? (first person plural, speaker included)
  같이 갈까요?          Shall we go together?
  뭐 먹을까요?          What shall we eat?
  여기 앉을까요?        Shall we sit here?
  커피 마실까요?        Shall we have coffee?

This is the most common use at A1. It is softer than 가요! (let's go) and
more collaborative — it genuinely asks for input.

2. OFFERING / ASKING PERMISSION — shall I? (first person singular)
  제가 할까요?          Shall I do it? / Would you like me to do it?
  창문 열까요?          Shall I open the window?
  도와드릴까요?         Shall I help you?

3. WONDERING / RHETORICAL — I wonder... (to oneself or others)
  오늘 날씨가 어떨까요?  I wonder what the weather will be like today.
  얼마나 걸릴까요?       I wonder how long it will take.
  This use is more A2 — just recognise it for now.

RESPONDING TO ~(으)ㄹ까요?
  Agreeing:    네, 좋아요!           Yes, sounds good!
               그래요, 그렇게 해요.  Sure, let's do that.
  Suggesting alternative: 저는 ~이/가 좋아요.  I'd prefer ~.
  Declining:   저는 괜찮아요.        I'm okay (no thank you).

~(으)ㄹ까요? vs ~(으)ㅂ시다
Both suggest doing something together:
  갈까요?    Shall we go? (soft suggestion, asking)
  갑시다.    Let's go. (more direct, decided — formal speech level)
  갈까요? is more common in 해요체 and sounds more natural in everyday conversation.`,
        examples: [
            { native: "같이 갈까요?", romanized: "Gachi galkkayo?", translation: "Shall we go together?" },
            { native: "뭐 먹을까요?", romanized: "Mwo meogeulkkayo?", translation: "What shall we eat?" },
            { native: "여기 앉을까요?", romanized: "Yeogi anjeulkkayo?", translation: "Shall we sit here?" },
            { native: "제가 할까요?", romanized: "Jega halkkayo?", translation: "Shall I do it?" },
            { native: "창문 열까요?", romanized: "Changmun yeolkkayo?", translation: "Shall I open the window?" },
            { native: "네, 좋아요!", romanized: "Ne, joayo!", translation: "Yes, sounds good! (response to a suggestion)" },
        ],
        inlineVocab: [
            { word: "(으)ㄹ까요", translation: "shall we / shall I / I wonder (soft suggestion ending)" },
            { word: "갈까요", translation: "shall we go?" },
            { word: "먹을까요", translation: "shall we eat?" },
            { word: "같이", translation: "together" },
            { word: "창문", translation: "window" },
            { word: "좋아요", translation: "sounds good / it's good (agreeing to a suggestion)" },
        ]
    },
    {
        id: "ko-g-a1-35",
        level: "A1",
        title: "~고 있다 — Progressive: Currently Doing",
        explanation: `~고 있다 is the Korean progressive construction. It expresses an action that is happening right now, equivalent to English 'am/is/are + -ing'. It is one of the most important structures at A1 for describing what someone is doing at this moment.

FORMATION
  Verb stem + 고 있어요   (polite present)
  Verb stem + 고 있었어요  (polite past progressive — was doing)

  먹다   →  먹고 있어요     I am eating (right now)
  공부하다 → 공부하고 있어요  I am studying
  자다   →  자고 있어요     I am sleeping
  보다   →  보고 있어요     I am watching / looking at
  기다리다 → 기다리고 있어요  I am waiting

The formation is completely regular — just attach 고 있어요 directly to the verb stem, regardless of the final sound.

SIMPLE PRESENT vs PROGRESSIVE — the key contrast
Korean simple present (~아요/어요) is used for habits, routines, and general truths:
  저는 아침에 커피를 마셔요.    I drink coffee in the morning. (habit)

~고 있어요 is used for what is happening at this exact moment:
  지금 커피를 마시고 있어요.    I am drinking coffee right now. (right now)

KEY VOCABULARY WITH ~고 있어요
  뭐 하고 있어요?              What are you doing (right now)?
  → 지금 밥을 먹고 있어요.     I am eating right now.
  → 숙제하고 있어요.           I am doing homework.

PAST PROGRESSIVE — was doing
Add 었 before 어요 to form the past:
  공부하고 있었어요.   I was studying.
  자고 있었어요.       I was sleeping.

NOTE — STATE VERBS do not use ~고 있어요
Stative verbs (있다, 없다, 알다, 모르다, 좋아하다) describe states, not ongoing actions. Use simple present with these.
  ✗ 알고 있어요  →  ✓ 알아요   I know. (state, not an action in progress)
  Exception: 알고 있어요 is sometimes used to mean 'I am aware of it / I already know', so you may hear it — but 알아요 is safer at A1.`,
        examples: [
            { native: "지금 뭐 하고 있어요?", romanized: "Jigeum mwo hago isseoyo?", translation: "What are you doing right now? (most natural way to ask)" },
            { native: "밥을 먹고 있어요.", romanized: "Babeul meokgo isseoyo.", translation: "I am eating (a meal) right now." },
            { native: "한국어를 공부하고 있어요.", romanized: "Hangugeoreul gongbuhago isseoyo.", translation: "I am studying Korean (right now / these days)." },
            { native: "친구를 기다리고 있어요.", romanized: "Chingureul gidarigo isseoyo.", translation: "I am waiting for a friend." },
            { native: "드라마를 보고 있었어요.", romanized: "Deuramareul bogo isseosseoyo.", translation: "I was watching a drama. (past progressive)" },
            { native: "아이가 자고 있어요.", romanized: "Aiga jago isseoyo.", translation: "The child is sleeping." },
        ],
        inlineVocab: [
            { word: "고 있어요", translation: "am/is/are -ing (progressive — happening right now)" },
            { word: "고 있었어요", translation: "was/were -ing (past progressive)" },
            { word: "기다리다", translation: "to wait" },
            { word: "자다", translation: "to sleep" },
            { word: "보다", translation: "to see / watch / look at" },
            { word: "숙제", translation: "homework" },
            { word: "지금", translation: "now / right now" },
        ]
    },
    {
        id: "ko-g-a1-36",
        level: "A1",
        title: "~아/어 주다 — Doing Something for Someone",
        explanation: `~아/어 주다 means to do an action FOR someone else. It is used both to make polite requests ('Please do X for me') and to describe doing a favour for someone else. It is one of the most important and most-used structures in everyday Korean.

FORMATION
  Verb stem + 아/어 주세요     Please [verb] for me  (polite request)
  Verb stem + 아/어 줘요       [Someone] does [verb] for [someone]  (statement)
  Verb stem + 아/어 줬어요      [Someone] did [verb] for [someone]  (past)

The 아/어 vowel harmony follows the same rule as ~아요/어요 (lesson a1-8):
  • Last vowel ㅏ or ㅗ → 아 주세요
  • All other vowels → 어 주세요
  • 하다 verbs → 해 주세요

COMMON REQUESTS — learn these as fixed phrases
  도와주세요.           Please help me.  (돕다 → 도와 is an irregular form)
  가르쳐 주세요.        Please teach me.  (가르치다 → 가르쳐)
  써 주세요.            Please write it (for me).  (쓰다 → 써)
  보여 주세요.          Please show me.  (보이다 → 보여)
  기다려 주세요.        Please wait (for me).  (기다리다 → 기다려)
  한국어로 말해 주세요.  Please speak in Korean. (말하다 → 말해)
  천천히 말해 주세요.   Please speak slowly.

THE VERB 주다 vs 드리다 — formality with the recipient
주다 means 'to give' and is used when the recipient is of equal or lower social status:
  친구한테 가르쳐 줬어요.   I taught (= gave teaching to) a friend.

드리다 replaces 주다 when the person you are doing the favour FOR is of higher status (teachers, parents, seniors, customers):
  선생님께 보여 드렸어요.   I showed it to the teacher.
  도와 드릴까요?            Shall I help you? (to a customer or elder)

At A1, focus on 아/어 주세요 for requests and begin to notice 드리다 in contexts involving elders or service situations.

NOTE — ~아/어 주다 vs ~아/어 줄게요
  주세요     Please give/do (request — asking the listener)
  줄게요     I will do it (for you) — a promise or offer (lesson a1-27 future tense context)`,
        examples: [
            { native: "도와주세요!", romanized: "Dowajuseyo!", translation: "Please help me! (fixed expression — 돕다 irregular)" },
            { native: "천천히 말해 주세요.", romanized: "Cheoncheonhi malhae juseyo.", translation: "Please speak slowly. (말하다 → 말해 + 주세요)" },
            { native: "이름을 써 주세요.", romanized: "Ireumeul sseo juseyo.", translation: "Please write your name (for me). (쓰다 → 써)" },
            { native: "가르쳐 주세요.", romanized: "Gareuchyeo juseyo.", translation: "Please teach me. (가르치다 → 가르쳐)" },
            { native: "보여 주세요.", romanized: "Boyeo juseyo.", translation: "Please show me. (보이다 → 보여)" },
            { native: "도와 드릴까요?", romanized: "Dowa deurilkkayo?", translation: "Shall I help you? (드리다 = polite form for helping someone of higher status)" },
        ],
        inlineVocab: [
            { word: "아/어 주세요", translation: "please do [verb] for me (polite request)" },
            { word: "주다", translation: "to give / to do for someone (equal or lower status)" },
            { word: "드리다", translation: "to give / to do for someone (higher status — honorific)" },
            { word: "도와주세요", translation: "please help me (fixed expression)" },
            { word: "가르치다", translation: "to teach" },
            { word: "쓰다", translation: "to write / to use" },
            { word: "천천히", translation: "slowly" },
        ]
    },
]
