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
            { native: "감사합니다. / 고마워요.", romanized: "Gamsahamnida. / Gomawoyo.", translation: "Thank you. (formal) / Thank you. (polite informal)", speakText: "감사합니다. 고마워요." },
            { native: "괜찮아요.", romanized: "Gwaenchanayo.", translation: "It's okay. / I'm fine. / No problem." },
            { native: "죄송합니다. / 미안해요.", romanized: "Joesonghamnida. / Mianhaeyo.", translation: "I'm sorry. (formal) / I'm sorry. (polite informal)", speakText: "죄송합니다. 미안해요." },
        ]
    },
    {
        id: "ko-g-a1-5",
        level: "A1",
        title: "Topic Particle 은/는 vs Subject Particle 이/가",
        explanation: "This is one of the trickiest distinctions in Korean for English speakers.\n\n은/는 (topic) marks what the sentence is *about* — often something already known or being contrasted. Think of it as 'as for X...' or 'speaking of X...'\n\n이/가 (subject) marks the grammatical subject — often new information, a specific focus, or the answer to 'who/what?'\n\nIn practice: 저는 (I, as for me) is used for general statements about yourself. 제가 (I, specifically me) is used when you are the answer to a question or the focus.",
        examples: [
            { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "I am a student. (general statement about myself)" },
            { native: "누가 학생이에요? — 제가 학생이에요.", romanized: "Nuga haksaengieyo? — Jega haksaengieyo.", translation: "Who is a student? — I am (the student). (focus → 이/가)", speakText: "누가 학생이에요? 제가 학생이에요." },
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
            { native: "먹다 → 먹어요", romanized: "meokda → meogeoyo", translation: "eat (stem 먹, last vowel ㅓ → 어요)", speakText: "먹다, 먹어요" },
            { native: "가다 → 가요", romanized: "gada → gayo", translation: "go (stem 가, last vowel ㅏ → 아요, contracts to 가요)", speakText: "가다, 가요" },
            { native: "오다 → 와요", romanized: "oda → wayo", translation: "come (stem 오, last vowel ㅗ → 아요, contracts to 와요)", speakText: "오다, 와요" },
            { native: "공부하다 → 공부해요", romanized: "gongbuhada → gongbuhaeyo", translation: "study (하다 → 해요)", speakText: "공부하다, 공부해요" },
            { native: "마시다 → 마셔요", romanized: "masida → masyeoyo", translation: "drink (stem 마시, 이+어요 contracts to 여요)", speakText: "마시다, 마셔요" },
        ]
    },
    {
        id: "ko-g-a1-9",
        level: "A1",
        title: "Past Tense: ~았어요/었어요",
        explanation: "Past tense in polite speech follows the same vowel harmony rule as present tense, but you add 았어요 or 었어요 to the stem.\n\n• Last vowel ㅏ or ㅗ → 았어요\n• All other vowels → 었어요\n• 하다 verbs → 했어요\n\nMany forms contract just as they do in present tense.",
        examples: [
            { native: "먹다 → 먹었어요", romanized: "meokda → meogeosseoyo", translation: "ate (먹 + 었어요)", speakText: "먹다, 먹었어요" },
            { native: "가다 → 갔어요", romanized: "gada → gasseoyo", translation: "went (가 + 았어요 → 갔어요, contracted)", speakText: "가다, 갔어요" },
            { native: "오다 → 왔어요", romanized: "oda → wasseoyo", translation: "came (오 + 았어요 → 왔어요, contracted)", speakText: "오다, 왔어요" },
            { native: "공부하다 → 공부했어요", romanized: "gongbuhada → gongbuhaesseoyo", translation: "studied", speakText: "공부하다, 공부했어요" },
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
            { native: "Sino: 일 이 삼 사 오 육 칠 팔 구 십", romanized: "il i sam sa o yuk chil pal gu sip", translation: "1 2 3 4 5 6 7 8 9 10 (use for money, dates, minutes)", speakText: "일 이 삼 사 오 육 칠 팔 구 십" },
            { native: "Native: 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열", romanized: "hana dul set net daseot yeoseot ilgop yeodeol ahop yeol", translation: "1 2 3 4 5 6 7 8 9 10 (use for objects, hours, age)", speakText: "하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열" },
            { native: "사과 두 개 / 커피 세 잔", romanized: "sagwa du gae / keopi se jan", translation: "two apples / three coffees (native numbers, shortened before counters)", speakText: "사과 두 개, 커피 세 잔" },
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
        ]
    },
    {
        id: "ko-g-a1-19",
        level: "A1",
        title: "Adverbs of Time",
        explanation: `Korean time adverbs come BEFORE the verb (usually at the start of the sentence or just before the verb).

TIME ANCHORS:
  오늘    today
  어제    yesterday
  내일    tomorrow
  이번 주  this week
  지난주  last week
  다음 주  next week

NOW / RELATIVE:
  지금    now
  아직    still / not yet (+ negative: 아직 안 갔어요 — haven't gone yet)
  이미    already (action completed: 이미 먹었어요 — already ate)
  벌써    already (surprising timing: 벌써 왔어요? — already here?)

SPEED / ORDER:
  빨리    quickly / hurry up
  천천히  slowly
  먼저    first (before others)
  나중에  later

POSITION: Time expressions typically go at the START of the sentence or directly before the verb. They can move freely without changing meaning — just emphasis shifts.`,
        examples: [
            { native: "오늘 바빠요.", romanized: "Oneul bappayo.", translation: "I'm busy today." },
            { native: "어제 친구를 만났어요.", romanized: "Eoje chingureul mannasseoyo.", translation: "I met a friend yesterday." },
            { native: "내일 갈 거예요.", romanized: "Naeil gal geoyeyo.", translation: "I will go tomorrow." },
            { native: "아직 안 먹었어요.", romanized: "Ajik an meogeosseoyo.", translation: "I haven't eaten yet." },
            { native: "이미 했어요.", romanized: "Imi haesseoyo.", translation: "I already did it." },
            { native: "빨리 오세요!", romanized: "Ppalli oseyo!", translation: "Come quickly! / Hurry up!" },
        ]
    },
    {
        id: "ko-g-a1-20",
        level: "A1",
        title: "Frequency Adverbs",
        explanation: `Use frequency adverbs to say how often something happens.

FREQUENCY SCALE (high → low):
  항상 / 늘    always
  보통         usually / normally
  자주         often
  가끔         sometimes
  별로 (+ neg) not really / not much
  거의 (+ neg) hardly ever
  절대로 (+ neg) never (strong)

IMPORTANT: 별로, 거의, and 절대로 require a NEGATIVE verb:
  별로 안 좋아해요.   I don't really like it.    ✓
  별로 좋아해요.      ✗  (grammatically wrong)
  절대로 안 먹어요.   I never eat it.            ✓

POSITION: Frequency adverbs typically go before the verb or at the start of the sentence.
  저는 항상 아침을 먹어요.   I always eat breakfast.
  가끔 영화를 봐요.          I sometimes watch movies.`,
        examples: [
            { native: "저는 항상 커피를 마셔요.", romanized: "Jeoneun hangsang keopireul masyeoyo.", translation: "I always drink coffee." },
            { native: "가끔 운동해요.", romanized: "Gakkeum undongha eyo.", translation: "I sometimes exercise." },
            { native: "별로 안 좋아해요.", romanized: "Byeollo an joahaeyo.", translation: "I don't really like it." },
            { native: "절대로 안 먹어요.", romanized: "Jeoldaero an meogeoy o.", translation: "I never eat it." },
            { native: "자주 한국 음식을 먹어요.", romanized: "Jaju hanguk eumsige ul meogeoy o.", translation: "I often eat Korean food." },
        ]
    },
    {
        id: "ko-g-a1-21",
        level: "A1",
        title: "Sentence Connectors: ~고, ~지만, ~아서/어서",
        explanation: `These endings attach directly to verb stems to connect two clauses in a single sentence.

~고  —  AND / and then (neutral connection or sequence)
  Verb stem + 고 (no consonant/vowel rule)
  밥을 먹고 커피를 마셔요.   I eat rice and drink coffee.
  집에 가고 자요.             I go home and sleep.

~지만  —  BUT (contrast)
  Verb stem + 지만
  비싸지만 맛있어요.          It's expensive but delicious.
  한국어는 어렵지만 재미있어요.  Korean is hard but fun.

~아서/어서  —  SO / BECAUSE (reason → result; reason comes first)
  Vowel-final stem → 아서   가다 → 가서
  Other stems     → 어서   먹다 → 먹어서
  하다            → 해서
  배가 고파서 밥을 먹었어요.  I was hungry so I ate.
  피곤해서 집에 있어요.       I'm tired so I'm staying home.

NOTE: ~아서/어서 expresses a natural cause-effect. For "because" with an explanation, ~기 때문에 is stronger but comes later.`,
        examples: [
            { native: "저는 한국어를 공부하고 일본어도 공부해요.", romanized: "Jeoneun hangugeo reul gongbuhago ilboneodo gongbuhaeyo.", translation: "I study Korean and also study Japanese." },
            { native: "피곤하지만 일해요.", romanized: "Pigonhajiman ilhaeyo.", translation: "I'm tired but I work." },
            { native: "배가 고파서 밥을 먹었어요.", romanized: "Baega gopaseo babeul meogeosseoyo.", translation: "I was hungry so I ate rice." },
            { native: "음식이 맛있어서 많이 먹었어요.", romanized: "Eumsigi massisseoseo mani meogeosseoyo.", translation: "The food was delicious so I ate a lot." },
            { native: "비가 와서 집에 있어요.", romanized: "Biga waseo jibe isseoyo.", translation: "It's raining so I'm staying home." },
        ]
    },
    {
        id: "ko-g-a1-22",
        level: "A1",
        title: "Discourse Connectors",
        explanation: `These words connect separate sentences (not clauses). They go at the START of a new sentence.

ADDING / CONTRASTING:
  그리고    and / and then (connects sentences)
  하지만    but / however
  그런데    but / by the way (softer contrast or topic shift)
  또는 / 아니면  or (either...or)

CAUSE / RESULT:
  그래서    so / therefore (consequence)
  그러면    then / if so (condition → result)
  그러니까  so / that's why (explains reason)

SEQUENCE / ADDITION:
  먼저      first (in a list or order)
  그다음    next / then
  마지막으로  finally / lastly
  그리고    also / additionally (in lists)
  또        also / again

EXAMPLE SEQUENCE:
  먼저 손을 씻어요.        First, I wash my hands.
  그다음 밥을 먹어요.      Then I eat.
  마지막으로 양치해요.     Finally I brush my teeth.`,
        examples: [
            { native: "저는 학생이에요. 그리고 아르바이트도 해요.", romanized: "Jeoneun haksaengieyo. Geurigo areubaiteu do haeyo.", translation: "I am a student. And I also work part-time." },
            { native: "비가 왔어요. 하지만 우산이 없었어요.", romanized: "Biga wasseoyo. Hajiman usani eopseosseoyo.", translation: "It rained. But I didn't have an umbrella." },
            { native: "배가 고팠어요. 그래서 밥을 먹었어요.", romanized: "Baega gopasseoy o. Geuraeseo babeul meogeosseoyo.", translation: "I was hungry. So I ate rice." },
            { native: "먼저 공부해요. 그다음 운동해요.", romanized: "Meonjeo gongbuhaeyo. Geudaeum undongha eyo.", translation: "First I study. Then I exercise." },
            { native: "한국어는 어려워요. 그런데 재미있어요.", romanized: "Hangugeo neun eoryeowoyo. Geureonde jaemiisseoyo.", translation: "Korean is difficult. But it's fun." },
        ]
    },
]