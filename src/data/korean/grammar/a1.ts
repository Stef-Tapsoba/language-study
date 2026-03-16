// Korean A1 grammar lessons — revised
// data/korean/grammar/a1.ts
import { GrammarLesson } from "../../../types"

export const a1Grammar: GrammarLesson[] = [
    {
        id: "ko-g-a1-1",
        level: "A1",
        title: "How Korean Works — The Big Picture",
        explanation: "Before anything else, three things set Korean apart from English.\n\n1. WORD ORDER IS SOV — the verb always comes last. 'I rice eat.' not 'I eat rice.' This never changes.\n\n2. PARTICLES DO THE GRAMMAR — small syllables attach to nouns to show their role (subject, object, location). Because particles carry meaning, word order can shift for emphasis without confusion.\n\n3. SPEECH LEVELS MATTER — Korean verbs change form depending on how polite you need to be. At A1, you will learn 해요체 (haeyoche), the polite informal level. It is appropriate with strangers, shopkeepers, and most everyday situations. Formal and casual speech come later.",
        examples: [
            { native: "저는 밥을 먹어요.", romanized: "Jeoneun babeul meogeoyo.", translation: "I eat rice. (저=I, 는=topic particle, 밥=rice, 을=object particle, 먹어요=eat)" },
            { native: "Subject + Object + Verb", romanized: "S + O + V", translation: "Korean sentence order — the verb always comes last" },
            { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "I am a student. (polite informal — 해요체)" },
            { native: "저는 학생이야.", romanized: "Jeoneun haksaengiya.", translation: "I am a student. (casual — 반말, for close friends only)" },
        ]
    },
    {
        id: "ko-g-a1-2",
        level: "A1",
        title: "Hangul: Reading Korean",
        explanation: "Hangul (한글) is the Korean alphabet, created in 1443. It has 14 basic consonants and 10 basic vowels that combine into syllable blocks — each block represents one syllable. The key insight: you don't write letters in a row (like English), you stack them into square blocks. Every syllable block has at least one consonant and one vowel. If a syllable starts with a vowel sound, use the silent placeholder consonant ㅇ.\n\nBasic vowels: ㅏ(a) ㅓ(eo) ㅗ(o) ㅜ(u) ㅡ(eu) ㅣ(i)\nKey consonants: ㄱ(g/k) ㄴ(n) ㄷ(d/t) ㄹ(r/l) ㅁ(m) ㅂ(b/p) ㅅ(s) ㅇ(silent/ng) ㅈ(j) ㅎ(h)",
        examples: [
            { native: "가 = ㄱ + ㅏ", romanized: "ga", translation: "Consonant ㄱ + vowel ㅏ = syllable block 가" },
            { native: "나 = ㄴ + ㅏ", romanized: "na", translation: "Consonant ㄴ + vowel ㅏ = syllable block 나" },
            { native: "안 = ㅇ + ㅏ + ㄴ", romanized: "an", translation: "Silent ㅇ + ㅏ + final consonant ㄴ = 안" },
            { native: "한글", romanized: "Hangeul", translation: "한(han) + 글(geul) — two syllable blocks" },
            { native: "사람", romanized: "saram", translation: "사(sa) + 람(ram) — person" },
        ]
    },
    {
        id: "ko-g-a1-3",
        level: "A1",
        title: "Basic Sentence: X은/는 Y이에요/예요",
        explanation: "The simplest Korean sentence: [Topic]은/는 [Noun]이에요/예요 — '[Topic] is [Noun].'\n\nThe topic particle 은/는 marks what the sentence is about:\n• 은 after a consonant-ending syllable\n• 는 after a vowel-ending syllable\n\n이에요/예요 means 'is/am/are' in polite speech:\n• 이에요 after a consonant-ending noun\n• 예요 after a vowel-ending noun",
        examples: [
            { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "I am a student. (학생 ends in consonant → 이에요)" },
            { native: "저는 선생님이에요.", romanized: "Jeoneun seonsaengnimieeyo.", translation: "I am a teacher." },
            { native: "이것은 책이에요.", romanized: "Igeoseun chaegieyo.", translation: "This is a book." },
            { native: "저는 영국 사람이에요.", romanized: "Jeoneun yeongguk saramieyo.", translation: "I am British." },
            { native: "이름은 민준이에요.", romanized: "Ireumeun minjunieyo.", translation: "My name is Minjun." },
        ]
    },
    {
        id: "ko-g-a1-4",
        level: "A1",
        title: "Greetings & Everyday Expressions",
        explanation: "These are the expressions you'll use from day one. They are all in 해요체 (polite informal) — the right register for strangers, shopkeepers, and most daily situations. Notice that Korean has separate greetings depending on whether you are arriving or leaving, and whether you or the other person is the one leaving.",
        examples: [
            { native: "안녕하세요.", romanized: "Annyeonghaseyo.", translation: "Hello. / Good morning/afternoon/evening." },
            { native: "안녕히 계세요.", romanized: "Annyeonghi gyeseyo.", translation: "Goodbye. (said by the person leaving — 'stay well')" },
            { native: "안녕히 가세요.", romanized: "Annyeonghi gaseyo.", translation: "Goodbye. (said by the person staying — 'go well')" },
            { native: "감사합니다. / 고마워요.", romanized: "Gamsahamnida. / Gomawoyo.", translation: "Thank you. (formal) / Thank you. (polite informal)" },
            { native: "괜찮아요.", romanized: "Gwaenchanayo.", translation: "It's okay. / I'm fine. / No problem." },
            { native: "죄송합니다. / 미안해요.", romanized: "Joesonghamnida. / Mianhaeyo.", translation: "I'm sorry. (formal) / I'm sorry. (polite informal)" },
        ]
    },
    {
        id: "ko-g-a1-5",
        level: "A1",
        title: "Topic Particle 은/는 vs Subject Particle 이/가",
        explanation: "This is one of the trickiest distinctions in Korean for English speakers.\n\n은/는 (topic) marks what the sentence is *about* — often something already known or being contrasted. Think of it as 'as for X...' or 'speaking of X...'\n\n이/가 (subject) marks the grammatical subject — often new information, a specific focus, or the answer to 'who/what?'\n\nIn practice: 저는 (I, as for me) is used for general statements about yourself. 제가 (I, specifically me) is used when you are the answer to a question or the focus.",
        examples: [
            { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "I am a student. (general statement about myself)" },
            { native: "누가 학생이에요? — 제가 학생이에요.", romanized: "Nuga haksaengieyo? — Jega haksaengieyo.", translation: "Who is a student? — I am (the student). (focus → 이/가)" },
            { native: "친구가 왔어요.", romanized: "Chinguga wasseoyo.", translation: "A friend came. (new information — 이/가)" },
            { native: "친구는 왔어요.", romanized: "Chinguneun wasseoyo.", translation: "The friend (we were talking about) came. (known topic — 은/는)" },
        ]
    },
    {
        id: "ko-g-a1-6",
        level: "A1",
        title: "Object Particle 을/를",
        explanation: "The object particle marks the direct object of an action verb — the thing being acted on.\n• 을 after a consonant-ending syllable\n• 를 after a vowel-ending syllable\n\nIn spoken Korean, object particles are frequently dropped. But understanding them helps you read, and producing them makes your speech sound more natural and precise.",
        examples: [
            { native: "밥을 먹어요.", romanized: "Babeul meogeoyo.", translation: "I eat rice. (밥 ends in consonant → 을)" },
            { native: "물을 마셔요.", romanized: "Mureul masyeoyo.", translation: "I drink water. (물 ends in consonant → 을)" },
            { native: "한국어를 공부해요.", romanized: "Hangugeoreul gongbuhaeyo.", translation: "I study Korean. (한국어 ends in vowel → 를)" },
            { native: "음악을 들어요.", romanized: "Eumaguel deureoyo.", translation: "I listen to music." },
            { native: "친구를 만나요.", romanized: "Chingureul mannayo.", translation: "I meet a friend." },
        ]
    },
    {
        id: "ko-g-a1-7",
        level: "A1",
        title: "Location Particles 에 and 에서",
        explanation: "Both particles relate to place, but they work differently:\n\n에 — destination or static existence. Use with 가다 (go), 오다 (come), 있다 (exist/be at).\n에서 — where an action happens. Use with action verbs like 먹다 (eat), 공부하다 (study), 일하다 (work).\n\nMemory tip: 에서 has 서 (서다 = to stand) — you are standing somewhere doing something.",
        examples: [
            { native: "학교에 가요.", romanized: "Hakgyoe gayo.", translation: "I go to school. (에 = destination)" },
            { native: "집에 있어요.", romanized: "Jibe isseoyo.", translation: "I am at home. (에 = static location)" },
            { native: "카페에서 공부해요.", romanized: "Kapeeseo gongbuhaeyo.", translation: "I study at the café. (에서 = where action happens)" },
            { native: "어디에서 일해요?", romanized: "Eodieseo ilhaeyo?", translation: "Where do you work?" },
            { native: "한국에서 왔어요.", romanized: "Hangugeso wasseoyo.", translation: "I came from Korea. (에서 = from)" },
        ]
    },
    {
        id: "ko-g-a1-8",
        level: "A1",
        title: "Present Tense: ~아요/어요",
        explanation: "To conjugate a verb in polite present tense (해요체), take the dictionary form (ends in 다), remove 다, and add 아요 or 어요.\n\nThe rule — vowel harmony:\n• If the last vowel in the stem is ㅏ or ㅗ → add 아요\n• All other vowels → add 어요\n• 하다 verbs → always become 해요\n\nMany forms contract naturally in speech. 가 + 아요 → 가요 (not 가아요). This is normal — Korean prefers smooth pronunciation.",
        examples: [
            { native: "먹다 → 먹어요", romanized: "meokda → meogeoyo", translation: "eat (stem 먹, last vowel ㅓ → 어요)" },
            { native: "가다 → 가요", romanized: "gada → gayo", translation: "go (stem 가, last vowel ㅏ → 아요, contracts to 가요)" },
            { native: "오다 → 와요", romanized: "oda → wayo", translation: "come (stem 오, last vowel ㅗ → 아요, contracts to 와요)" },
            { native: "공부하다 → 공부해요", romanized: "gongbuhada → gongbuhaeyo", translation: "study (하다 → 해요)" },
            { native: "마시다 → 마셔요", romanized: "masida → masyeoyo", translation: "drink (stem 마시, 이+어요 contracts to 여요)" },
        ]
    },
    {
        id: "ko-g-a1-9",
        level: "A1",
        title: "Past Tense: ~았어요/었어요",
        explanation: "Past tense in polite speech follows the same vowel harmony rule as present tense, but you add 았어요 or 었어요 to the stem.\n\n• Last vowel ㅏ or ㅗ → 았어요\n• All other vowels → 었어요\n• 하다 verbs → 했어요\n\nMany forms contract just as they do in present tense.",
        examples: [
            { native: "먹다 → 먹었어요", romanized: "meokda → meogeosseoyo", translation: "ate (먹 + 었어요)" },
            { native: "가다 → 갔어요", romanized: "gada → gasseoyo", translation: "went (가 + 았어요 → 갔어요, contracted)" },
            { native: "오다 → 왔어요", romanized: "oda → wasseoyo", translation: "came (오 + 았어요 → 왔어요, contracted)" },
            { native: "공부하다 → 공부했어요", romanized: "gongbuhada → gongbuhaesseoyo", translation: "studied" },
            { native: "어제 친구를 만났어요.", romanized: "Eoje chingureul mannasseoyo.", translation: "I met a friend yesterday." },
        ]
    },
    {
        id: "ko-g-a1-10",
        level: "A1",
        title: "Negation: 안 and 못",
        explanation: "Korean has two main negation words, placed directly before the verb:\n\n안 (an) — 'don't' / 'not'. General negation for any verb or adjective.\n못 (mot) — 'can't'. Inability only — use with action verbs.\n\nFor 하다 compound verbs, insert 안 or 못 between the noun and 하다:\n공부하다 → 공부 안 해요 (don't study) / 공부 못 해요 (can't study)",
        examples: [
            { native: "안 가요.", romanized: "An gayo.", translation: "I don't go. / I'm not going." },
            { native: "안 먹어요.", romanized: "An meogeoyo.", translation: "I don't eat it." },
            { native: "못 해요.", romanized: "Mot haeyo.", translation: "I can't do it." },
            { native: "한국어를 못 해요.", romanized: "Hangugeoreul mot haeyo.", translation: "I can't speak Korean." },
            { native: "공부 안 해요.", romanized: "Gongbu an haeyo.", translation: "I don't study." },
        ]
    },
    {
        id: "ko-g-a1-11",
        level: "A1",
        title: "Korean Numbers — Two Systems",
        explanation: "Korean has two completely separate counting systems and you need both. They are used in different contexts — mixing them is a common beginner mistake.\n\nSino-Korean (from Chinese): used for dates, money, phone numbers, minutes, floor numbers, and any number over 99.\n\nNative Korean: used for counting objects (with counters), telling hours, and ages up to 99. The numbers 하나(1), 둘(2), 셋(3), 넷(4) shorten to 한, 두, 세, 네 when followed by a counter word.",
        examples: [
            { native: "Sino: 일 이 삼 사 오 육 칠 팔 구 십", romanized: "il i sam sa o yuk chil pal gu sip", translation: "1 2 3 4 5 6 7 8 9 10 (use for money, dates, minutes)" },
            { native: "Native: 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열", romanized: "hana dul set net daseot yeoseot ilgop yeodeol ahop yeol", translation: "1 2 3 4 5 6 7 8 9 10 (use for objects, hours, age)" },
            { native: "사과 두 개 / 커피 세 잔", romanized: "sagwa du gae / keopi se jan", translation: "two apples / three coffees (native numbers, shortened before counters)" },
            { native: "지금 세 시 삼십 분이에요.", romanized: "Jigeum se si samsip bunieyo.", translation: "It's 3:30 now. (hours = native 세, minutes = Sino 삼십)" },
            { native: "저는 스물두 살이에요.", romanized: "Jeoneun seumuldu sarieyo.", translation: "I am 22 years old. (age = native Korean)" },
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

ㅡ-IRREGULAR — verbs/adjectives ending in ㅡ drop the ㅡ before 아/어:
  크다  → 크 + 어요 → 커요    (not 크어요)
  예쁘다 → 예쁘 + 어요 → 예뻐요 (not 예쁘어요)
  나쁘다 → 나쁘 + 어요 → 나빠요

ㅂ-IRREGULAR — adjectives ending in ㅂ change ㅂ → 우 before a vowel:
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
            { native: "먹어요 / 먹습니다 / 먹어", romanized: "meogeoyo / meogseumnida / meogeo", translation: "I eat — polite informal / formal polite / casual (반말)" },
            { native: "안녕하세요. (formal) / 안녕! (casual)", romanized: "Annyeonghaseyo / Annyeong!", translation: "Hello — level difference visible even in greetings" },
            { native: "감사합니다. (formal) / 고마워요. (polite) / 고마워. (casual)", romanized: "Gamsahamnida / Gomawoyo / Gomawo", translation: "Thank you across three levels" },
            { native: "말을 놓아도 돼요.", romanized: "Mareul noaado dwaeyo.", translation: "You can speak casually with me. (invitation to switch levels)" },
            { native: "저는 학생이에요. (해요체)", romanized: "Jeoneun haksaengieyo.", translation: "I am a student. — 해요체 is always the safe choice" },
        ]
    },
]