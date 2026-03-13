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
]