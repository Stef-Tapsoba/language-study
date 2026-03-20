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

NOTE: ~아서/어서 expresses a natural cause-effect. For "because" with an explanation, ~기 때문에 is stronger but comes later.

PREVIEW — ~고 있다 (coming at A2)
You already know ~고 as a connector between two actions. There is one more important use coming at A2: ~고 있어요, which attaches 있어요 to the ~고 form to express an ongoing action — the Korean equivalent of '-ing'.

  먹고 있어요.       I am eating (right now).
  공부하고 있어요.   I am studying.
  뭐 하고 있어요?    What are you doing?

You do not need to produce this yet. But when you see ~고 있어요 in the wild, you will already understand where it comes from.`,
    examples: [
      { native: "저는 한국어를 공부하고 일본어도 공부해요.", romanized: "Jeoneun hangugeo reul gongbuhago ilboneodo gongbuhaeyo.", translation: "I study Korean and also study Japanese." },
      { native: "피곤하지만 일해요.", romanized: "Pigonhajiman ilhaeyo.", translation: "I'm tired but I work." },
      { native: "배가 고파서 밥을 먹었어요.", romanized: "Baega gopaseo babeul meogeosseoyo.", translation: "I was hungry so I ate rice." },
      { native: "음식이 맛있어서 많이 먹었어요.", romanized: "Eumsigi massisseoseo mani meogeosseoyo.", translation: "The food was delicious so I ate a lot." },
      { native: "비가 와서 집에 있어요.", romanized: "Biga waseo jibe isseoyo.", translation: "It's raining so I'm staying home." },
      { native: "지금 밥을 먹고 있어요.", romanized: "Jigeum babeul meokgo isseoyo.", translation: "I am eating right now. (preview of ~고 있다 — coming at A2)" },
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
  {
    id: "ko-g-a1-23",
    level: "A1",
    title: "있어요 / 없어요 — Existence, Location & Possession",
    explanation: `있어요 and 없어요 are two of the highest-frequency words in Korean. They cover three overlapping uses: existence ('there is'), location ('X is at Y'), and possession ('I have'). One form handles all three.

THE TWO FORMS
  있어요   there is / is at / have       (existence, location, possession)
  없어요   there is not / is not at / don't have  (negative of all three)

EXISTENCE — there is / there are
  화장실이 있어요.          There is a toilet.
  화장실이 없어요.          There is no toilet.
  근처에 카페가 있어요?     Is there a café nearby?

LOCATION — X is at / in Y
The pattern is: [Location]에 [Thing/Person]이/가 있어요
  책상 위에 책이 있어요.    There is a book on the desk.
  집에 있어요.              I am at home. / (Someone) is at home.
  어디에 있어요?            Where is it? / Where are you?
  지하철역이 어디에 있어요? Where is the subway station?

Note: 에 marks the location with 있어요/없어요, exactly as you learned in lesson 7.
사람 and animals are also있어요 — Korean does not distinguish animate from
inanimate the way Japanese does with あります vs います.

POSSESSION — to have
있어요/없어요 also expresses having or not having something.
The thing possessed takes 이/가:
  시간이 있어요?            Do you have time?
  네, 있어요. / 아니요, 없어요.  Yes, I do. / No, I don't.
  돈이 없어요.              I don't have any money.
  질문이 있어요.            I have a question.

ASKING WHERE SOMETHING IS
  [Thing]이/가 어디에 있어요?   Where is [thing]?
  → [Location]에 있어요.        It is at [location].

  가방이 어디에 있어요?     Where is the bag?
  → 의자 아래에 있어요.     It is under the chair.

LOCATION VOCABULARY — useful with 있어요
  위   above / on top    책상 위에   on the desk
  아래  below / under    침대 아래에  under the bed
  앞   in front          학교 앞에   in front of the school
  뒤   behind            건물 뒤에   behind the building
  옆   next to           은행 옆에   next to the bank
  안   inside            가방 안에   inside the bag
  밖   outside           밖에        outside`,
    examples: [
      { native: "근처에 편의점이 있어요?", romanized: "Geuncheo e pyeonuijeomi isseoyo?", translation: "Is there a convenience store nearby?" },
      { native: "네, 저기에 있어요.", romanized: "Ne, jeogie isseoyo.", translation: "Yes, it's over there." },
      { native: "화장실이 어디에 있어요?", romanized: "Hwajangsiri eodie isseoyo?", translation: "Where is the toilet?" },
      { native: "2층에 있어요.", romanized: "Ichunge isseoyo.", translation: "It's on the second floor." },
      { native: "지금 집에 있어요.", romanized: "Jigeum jibe isseoyo.", translation: "I am at home right now." },
      { native: "시간이 있어요?", romanized: "Sigani isseoyo?", translation: "Do you have time?" },
      { native: "아니요, 지금 시간이 없어요.", romanized: "Aniyo, jigeum sigani eopseoyo.", translation: "No, I don't have time right now." },
      { native: "가방이 의자 옆에 있어요.", romanized: "Gabangi uija yeope isseoyo.", translation: "The bag is next to the chair." },
    ]
  },
  {
    id: "ko-g-a1-24",
    level: "A1",
    title: "도 Particle — Also / Too / Either",
    explanation: `도 (do) means 'also', 'too', or 'as well'. It replaces 은/는, 이/가, or 을/를 when you want to say that something additional shares the same predicate. It is one of the highest-frequency particles in Korean.

REPLACING 은/는 — adding a topic:
  저는 학생이에요.     I am a student.
  저도 학생이에요.     I am also a student. (도 replaces 는)

  민준씨는 한국 사람이에요.  Minjun is Korean.
  수지씨도 한국 사람이에요.  Suji is also Korean.

REPLACING 이/가 — adding a subject:
  커피가 있어요.       There is coffee.
  녹차도 있어요.       There is also green tea.

REPLACING 을/를 — adding an object:
  한국어를 공부해요.   I study Korean.
  일본어도 공부해요.   I also study Japanese.

NEGATIVE + 도 — 'either / not...either'
In negative sentences, 도 extends the negation:
  커피는 안 마셔요.    I don't drink coffee.
  녹차도 안 마셔요.    I don't drink green tea either.

  아무것도 + negative = nothing at all:
  아무것도 몰라요.     I don't know anything.
  아무것도 안 먹었어요. I didn't eat anything.

  아무도 + negative = nobody:
  아무도 없어요.       There is nobody.
  아무도 안 왔어요.    Nobody came.

STACKING 도 — 'both...and / neither...nor':
  커피도 녹차도 좋아해요.    I like both coffee and green tea.
  고기도 생선도 안 먹어요.   I eat neither meat nor fish.

도 NEVER stacks with 은/는, 이/가, or 을/를 — it replaces them.
Other particles (에, 에서, 한테) keep their particle and 도 follows:
  학교에도 갔어요.          I also went to school.
  도서관에서도 공부했어요.   I also studied at the library.

저도요 — a fixed expression:
  저도요. / 나도요.   Me too. (one of the most common expressions in Korean)`,
    examples: [
      { native: "저도 한국어를 공부해요.", romanized: "Jeodo hangugeo reul gongbuhaeyo.", translation: "I also study Korean." },
      { native: "이것도 맛있어요.", romanized: "Igeotdo masisseoyo.", translation: "This is also delicious." },
      { native: "아무것도 안 먹었어요.", romanized: "Amugeotdo an meogeosseoyo.", translation: "I didn't eat anything." },
      { native: "아무도 없어요.", romanized: "Amudo eopseoyo.", translation: "There is nobody." },
      { native: "커피도 녹차도 좋아해요.", romanized: "Keopido nokchado joahaeyo.", translation: "I like both coffee and green tea." },
      { native: "저도요!", romanized: "Jeodoyo!", translation: "Me too!" },
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
    ]
  },
  {
    id: "ko-g-a1-26",
    level: "A1",
    title: "이/가 아니에요 — Noun Negation (Is Not)",
    explanation: `You already know how to negate verbs using 안 and 못 (lesson a1-10). But negating a noun — saying 'X is NOT Y' — uses a completely different structure: 이/가 아니에요.

THE PATTERN
  [Noun]이/가 아니에요.    [Subject] is not [Noun].

  이/가 marks the noun being negated (not the topic):
  저는 학생이 아니에요.      I am not a student.
  이것은 책이 아니에요.      This is not a book.
  그 사람은 선생님이 아니에요. That person is not a teacher.

이 vs 가 — same rule as the subject particle:
  아니에요 after consonant-ending noun → 이 아니에요
  아니에요 after vowel-ending noun → 가 아니에요

  학생이 아니에요.     not a student (학생 ends in consonant → 이)
  의사가 아니에요.     not a doctor (의사 ends in vowel → 가)
  한국 사람이 아니에요. not Korean (사람 ends in consonant → 이)
  미국 사람이 아니에요. not American

POSITIVE vs NEGATIVE — the full pattern:
  Positive: [Topic]은/는 [Noun]이에요/예요.
  저는 학생이에요.     I am a student.

  Negative: [Topic]은/는 [Noun]이/가 아니에요.
  저는 학생이 아니에요.  I am not a student.

Note: 이에요/예요 is the positive copula (lesson a1-3).
아니에요 is its negative — a completely separate word, not formed by adding 안.

COMMON MISTAKES
  ✗ 저는 안 학생이에요.   (WRONG — 안 cannot negate nouns)
  ✓ 저는 학생이 아니에요. (CORRECT)

  ✗ 이것은 책 아니에요.   (WRONG — 이/가 is required)
  ✓ 이것은 책이 아니에요. (CORRECT)

QUESTION FORM
  학생이 아니에요?    Are you not a student? / Aren't you a student?
  한국 사람이 아니에요? Are you not Korean?

SHORT ANSWER
  네, 아니에요.    Yes, that's right, I'm not. (confirming the negative)
  아니요, 맞아요.  No, I am. (correcting — I actually am)

아니에요 alone as a response means 'No' or 'That's not right' in casual conversation.`,
    examples: [
      { native: "저는 선생님이 아니에요.", romanized: "Jeoneun seonsaengnimee anieeyo.", translation: "I am not a teacher. (이 after consonant)" },
      { native: "이것은 커피가 아니에요.", romanized: "Igeoseun keopiga anieeyo.", translation: "This is not coffee. (가 after vowel)" },
      { native: "그 사람은 한국 사람이 아니에요.", romanized: "Geu sarameun hanguk saramee anieeyo.", translation: "That person is not Korean." },
      { native: "여기는 화장실이 아니에요.", romanized: "Yeogineun hwajangsilee anieeyo.", translation: "This is not the toilet." },
      { native: "저는 학생이 아니에요. 회사원이에요.", romanized: "Jeoneun haksaengee anieeyo. Hoesawoneeyo.", translation: "I'm not a student. I'm an office worker." },
      { native: "아니에요!", romanized: "Anieeyo!", translation: "No! / That's not right!" },
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
    ]
  },
  {
    id: "ko-g-a1-28",
    level: "A1",
    title: "~(으)로 Particle — Direction, Means & Method",
    explanation: `The particle ~(으)로 has three closely related uses: direction ('towards'), means of transport ('by'), and method or tool ('with / using'). All three express HOW or WHICH WAY something happens.

FORMATION
  Stem ends in vowel or ㄹ → 로
  Stem ends in consonant   → 으로

  서울 → 서울로       towards Seoul
  왼쪽 → 왼쪽으로     towards the left
  버스 → 버스로       by bus
  한국어 → 한국어로   in Korean / using Korean

1. DIRECTION — towards / in the direction of
  이쪽으로 오세요.         Please come this way.
  왼쪽으로 가세요.         Go to the left.
  오른쪽으로 도세요.       Turn to the right.
  서울로 가는 기차         the train going to Seoul

  ~로 vs ~에 for direction:
  에 marks a destination (arrival point): 서울에 가요. I'm going to Seoul.
  로 marks a direction (the way you're heading): 서울로 가요. I'm heading towards Seoul.
  In practice these often overlap — 에 is more common for destinations, 로 for directions.

2. MEANS OF TRANSPORT — by
  버스로 가요.          I go by bus.
  지하철로 왔어요.      I came by subway.
  택시로 갈 거예요.     I will go by taxi.
  비행기로 얼마나 걸려요?  How long does it take by plane?

3. METHOD / TOOL / LANGUAGE — with / using / in
  한국어로 말해 주세요.   Please speak in Korean.
  젓가락으로 먹어요.      I eat with chopsticks.
  카드로 계산할게요.      I'll pay by card.
  이메일로 보내세요.      Please send it by email.

COMMON DIRECTIONS WITH ~(으)로
  이쪽으로   this way
  저쪽으로   that way
  왼쪽으로   to the left
  오른쪽으로 to the right
  앞으로     forward
  뒤로       backward`,
    examples: [
      { native: "왼쪽으로 가세요.", romanized: "Oenjjogeuro gaseyo.", translation: "Go to the left. (direction)" },
      { native: "버스로 학교에 가요.", romanized: "Beoseuro hakgyoe gayo.", translation: "I go to school by bus. (means)" },
      { native: "한국어로 말해 주세요.", romanized: "Hangugeo ro malhae juseyo.", translation: "Please speak in Korean. (language/method)" },
      { native: "카드로 계산할게요.", romanized: "Kadeuro gyesan halgeyo.", translation: "I'll pay by card. (means/method)" },
      { native: "이쪽으로 오세요.", romanized: "Ijjogeuro oseyo.", translation: "Please come this way. (direction)" },
      { native: "지하철로 얼마나 걸려요?", romanized: "Jihacheol ro eolmana geollyeoyo?", translation: "How long does it take by subway?" },
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
    ]
  },
]