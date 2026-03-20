import { GrammarLesson } from "../../../../types"

export const scriptBasicsLessons: GrammarLesson[] = [
    {
        id: "ja-g-a1-0",
        level: "A1",
        title: "How Japanese Works — The Big Picture",
        explanation: "Japanese is built differently from European languages in four key ways. Understanding these upfront will make everything else click faster.\n\n1. THREE SCRIPTS — Japanese uses three writing systems simultaneously. Hiragana (ひらがな) is the phonetic alphabet for Japanese words and grammar. Katakana (カタカナ) is used for foreign loanwords and emphasis. Kanji (漢字) are Chinese-origin characters used for content words. A typical sentence mixes all three: 私はコーヒーを飲みます (I drink coffee) uses kanji 私/飲, hiragana は/を/ます, and katakana コーヒー.\n\n2. WORD ORDER IS SOV — the verb always comes last. 'I coffee drink.' not 'I drink coffee.' This never changes, even in questions.\n\n3. PARTICLES DO THE GRAMMAR — small hiragana characters attach to nouns to show their role. は marks the topic. を marks the object. に marks destination or time. で marks where an action happens. Because particles carry meaning, word order can shift without confusion.\n\n4. POLITENESS LEVELS — Japanese verbs change form based on social context. You will learn ます/です form (polite, formal), which is safe for all everyday situations with people you don't know well. Casual plain form comes later.",
        examples: [
            { native: "わたしはコーヒーをのみます。", romanized: "Watashi wa koohii wo nomimasu.", translation: "I drink coffee. (わたし=I, は=topic, コーヒー=coffee, を=object, のみます=drink)" },
            { native: "Subject は Object を Verb ます。", romanized: "S wa O wo V masu.", translation: "Basic SOV sentence — verb always last", speakText: "" },
            { native: "これは ほん です。", romanized: "Kore wa hon desu.", translation: "This is a book. (polite — です/ます style)" },
            { native: "どこに いきますか？", romanized: "Doko ni ikimasu ka?", translation: "Where are you going? (question word stays in place, か at the end)" },
        ]
    },
    {
        id: "ja-g-a1-1",
        level: "A1",
        title: "Hiragana Part 1: あ-row through な-row",
        explanation: "Hiragana is one of Japan's two phonetic syllabaries, with 46 base characters. Each character represents a syllable. Part 1 covers the first five rows: あ-row (a, i, u, e, o), か-row (ka, ki, ku, ke, ko), さ-row (sa, shi, su, se, so), た-row (ta, chi, tsu, te, to), and な-row (na, ni, nu, ne, no). Mastering these 25 characters gives you the foundation for reading and writing basic Japanese. Note special sounds: し = shi (not si), ち = chi (not ti), つ = tsu (not tu).",
        examples: [
            { native: "あいうえお", romanized: "a i u e o", translation: "The five vowels (あ-row)" },
            { native: "かきくけこ", romanized: "ka ki ku ke ko", translation: "The か-row (k sounds)" },
            { native: "さしすせそ", romanized: "sa shi su se so", translation: "The さ-row (s sounds — note: し = shi)" },
            { native: "たちつてと", romanized: "ta chi tsu te to", translation: "The た-row (t sounds — note: ち = chi, つ = tsu)" },
            { native: "なにぬねの", romanized: "na ni nu ne no", translation: "The な-row (n sounds)" }
        ]
    },
    {
        id: "ja-g-a1-2",
        level: "A1",
        title: "Hiragana Part 2: は-row through わ-row + ん",
        explanation: "Part 2 completes the hiragana syllabary with the remaining rows: は-row (ha, hi, fu, he, ho), ま-row (ma, mi, mu, me, mo), や-row (ya, yu, yo), ら-row (ra, ri, ru, re, ro), わ-row (wa, wo), and the nasal ん (n). Special note: は is pronounced 'wa' when used as a topic particle; を is pronounced 'o' and used only as the object particle. ふ = fu (not hu). After learning all 46 characters, you can read almost any Japanese text written in hiragana.",
        examples: [
            { native: "はひふへほ", romanized: "ha hi fu he ho", translation: "The は-row (h sounds — note: ふ = fu)" },
            { native: "まみむめも", romanized: "ma mi mu me mo", translation: "The ま-row (m sounds)" },
            { native: "やゆよ", romanized: "ya yu yo", translation: "The や-row (y sounds — only 3 characters)" },
            { native: "らりるれろ", romanized: "ra ri ru re ro", translation: "The ら-row (r sounds — a soft r/l sound)" },
            { native: "わをん", romanized: "wa wo n", translation: "わ (wa), を (wo/o — object particle), ん (n — syllabic nasal)" }
        ]
    },
    {
        id: "ja-g-a1-3",
        level: "A1",
        title: "Katakana: ア-row through ン",
        explanation: `Katakana is the second of Japan's two phonetic syllabaries. It has exactly the same 46 sounds as hiragana, but different character shapes. The two scripts are interchangeable in pronunciation — only the use differs.

WHEN KATAKANA IS USED:
  • Foreign loanwords: コーヒー (koohii = coffee), テレビ (terebi = TV)
  • Foreign names and place names: アメリカ (Amerika), マリア (Maria)
  • Scientific and technical terms
  • Emphasis — like italics in English

KATAKANA CHARACTER TABLE (with hiragana equivalent):
Each row shows: katakana → hiragana → sound

ア行 (a-row):
  ア → あ (a)    イ → い (i)    ウ → う (u)    エ → え (e)    オ → お (o)

カ行 (ka-row):
  カ → か (ka)   キ → き (ki)   ク → く (ku)   ケ → け (ke)   コ → こ (ko)

サ行 (sa-row):
  サ → さ (sa)   シ → し (shi)  ス → す (su)   セ → せ (se)   ソ → そ (so)

タ行 (ta-row):
  タ → た (ta)   チ → ち (chi)  ツ → つ (tsu)  テ → て (te)   ト → と (to)

ナ行 (na-row):
  ナ → な (na)   ニ → に (ni)   ヌ → ぬ (nu)   ネ → ね (ne)   ノ → の (no)

ハ行 (ha-row):
  ハ → は (ha)   ヒ → ひ (hi)   フ → ふ (fu)   ヘ → へ (he)   ホ → ほ (ho)

マ行 (ma-row):
  マ → ま (ma)   ミ → み (mi)   ム → む (mu)   メ → め (me)   モ → も (mo)

ヤ行 (ya-row — 3 only):
  ヤ → や (ya)              ユ → ゆ (yu)              ヨ → よ (yo)

ラ行 (ra-row):
  ラ → ら (ra)   リ → り (ri)   ル → る (ru)   レ → れ (re)   ロ → ろ (ro)

ワ行 + ン:
  ワ → わ (wa)   ヲ → を (wo — object particle only)   ン → ん (n)

SPECIAL KATAKANA RULES:
ー (long vowel mark): extends the preceding vowel. Used constantly in loanwords.
  コーヒー → ko-o-hi-i → "coffee"     ビール → bi-i-ru → "beer"

Double consonants: small ッ doubles the next consonant (same as っ in hiragana).
  ベッド (beddo = bed)    サッカー (sakkaa = soccer)

Combinations for sounds not in Japanese: katakana can combine characters for
foreign sounds that don't exist in Japanese.
  ファ (fa)    ティ (ti)    ウィ (wi)    ヴ (v-sound)`,
        examples: [
            { native: "ア・イ・ウ・エ・オ → あ・い・う・え・お", romanized: "a i u e o", translation: "The ア-row — same sounds as あいうえお, different shapes", speakText: "ア、イ、ウ、エ、オ" },
            { native: "カ・キ・ク・ケ・コ → か・き・く・け・こ", romanized: "ka ki ku ke ko", translation: "The カ-row — same sounds as かきくけこ", speakText: "カ、キ、ク、ケ、コ" },
            { native: "コーヒー", romanized: "koohii", translation: "Coffee — note ー extends the vowel" },
            { native: "レストラン", romanized: "resutoran", translation: "Restaurant (from French/English)" },
            { native: "テレビ", romanized: "terebi", translation: "Television (from English 'TV')" },
            { native: "アイスクリーム", romanized: "aisu kuriimu", translation: "Ice cream — notice how English sounds are adapted" },
        ]
    },
    {
        id: "ja-g-a1-14",
        level: "A1",
        title: "Beginner Kanji: 15 Essential Characters",
        explanation: "Japanese uses kanji — characters borrowed from Chinese — alongside hiragana and katakana. You have already seen many kanji in examples. This lesson teaches 15 high-frequency kanji you will recognise from A1 content. Most kanji have two readings: kun'yomi (native Japanese reading) and on'yomi (Chinese-origin reading). Compounds usually use on'yomi; standalone words often use kun'yomi. Group 1 — Nature & objects: 日 (にち/ひ — day/sun), 水 (みず — water), 山 (やま/さん — mountain), 本 (ほん/もと — book/origin), 手 (て — hand). Group 2 — People & study: 人 (ひと/じん — person), 学 (がく — study), 生 (せい/なま — life/birth), 先 (せん — before/ahead), 語 (ご — language). Group 3 — Directions: 上 (うえ/じょう — above/up), 下 (した/か — below/down), 中 (なか/ちゅう — inside/middle). Group 4 — Size: 大 (おお/だい — big), 小 (ちい/しょう — small). Key compounds you already know: 日本 (にほん — Japan), 日本語 (にほんご — Japanese language), 日本人 (にほんじん — Japanese person), 大学 (だいがく — university), 学生 (がくせい — student), 先生 (せんせい — teacher).",
        examples: [
            { native: "日・水・山・本・手", romanized: "nichi/hi ・ mizu ・ yama/san ・ hon/moto ・ te", translation: "Sun/day, water, mountain, book/origin, hand" },
            { native: "人・学・生・先・語", romanized: "hito/jin ・ gaku ・ sei/nama ・ sen ・ go", translation: "Person, study, life/birth, before, language" },
            { native: "上・下・中・大・小", romanized: "ue/jou ・ shita/ka ・ naka/chuu ・ oo/dai ・ chii/shou", translation: "Above, below, middle, big, small" },
            { native: "日本・日本語・日本人", romanized: "Nihon ・ Nihongo ・ Nihonjin", translation: "Japan, Japanese language, Japanese person" },
            { native: "大学・学生・先生", romanized: "daigaku ・ gakusei ・ sensei", translation: "University, student, teacher" }
        ]
    },
]
