import { GrammarLesson } from "../../../../types"

export const scriptAndFoundationsLessons: GrammarLesson[] = [
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
        ],
        inlineVocab: [
            { word: "저", translation: "I / me (polite)" },
            { word: "밥", translation: "rice / meal" },
            { word: "먹어요", translation: "eat (polite present)" },
            { word: "학생", translation: "student" },
            { word: "해요체", translation: "polite informal speech level" },
            { word: "반말", translation: "casual speech (informal, no 요)" },
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
        ],
        inlineVocab: [
            { word: "한글", translation: "the Korean alphabet / writing system" },
            { word: "자음", translation: "consonant" },
            { word: "모음", translation: "vowel" },
            { word: "음절", translation: "syllable" },
            { word: "사람", translation: "person, people" },
            { word: "가", translation: "go (also: syllable block ㄱ+ㅏ)" },
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
        ],
        inlineVocab: [
            { word: "은/는", translation: "topic particle (은 after consonant, 는 after vowel)" },
            { word: "이에요/예요", translation: "is / am / are (polite copula)" },
            { word: "학생", translation: "student" },
            { word: "선생님", translation: "teacher" },
            { word: "책", translation: "book" },
            { word: "이름", translation: "name" },
            { word: "사람", translation: "person" },
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
        ],
        inlineVocab: [
            { word: "안녕하세요", translation: "hello (polite)" },
            { word: "감사합니다", translation: "thank you (formal)" },
            { word: "고마워요", translation: "thank you (polite informal)" },
            { word: "괜찮아요", translation: "it's okay / I'm fine" },
            { word: "죄송합니다", translation: "I'm sorry (formal)" },
            { word: "미안해요", translation: "I'm sorry (polite informal)" },
            { word: "안녕히 가세요", translation: "goodbye (to person leaving)" },
            { word: "안녕히 계세요", translation: "goodbye (to person staying)" },
        ]
    },
]
