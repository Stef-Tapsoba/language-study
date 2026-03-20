import { GrammarLesson } from "../../../../types"

export const coreGrammarLessons: GrammarLesson[] = [
    {
        id: "ja-g-a1-4",
        level: "A1",
        title: "Basic Sentence Structure: X は Y です",
        explanation: "Japanese sentences generally follow Subject-Object-Verb order, but the most basic pattern uses the topic particle は (wa) and the polite copula です (desu). The pattern 'X は Y です' means 'X is Y'. は marks the topic of the sentence — what you are talking about. です is the polite form of 'to be' and comes at the end. To make it negative, use じゃありません or ではありません (is not). To make a question, add the question particle か at the end.",
        examples: [
            { native: "わたしは がくせい です。", romanized: "Watashi wa gakusei desu.", translation: "I am a student." },
            { native: "これは ほん です。", romanized: "Kore wa hon desu.", translation: "This is a book." },
            { native: "かれは にほんじん です。", romanized: "Kare wa nihonjin desu.", translation: "He is Japanese." },
            { native: "あなたは せんせい ですか？", romanized: "Anata wa sensei desu ka?", translation: "Are you a teacher?" },
            { native: "これは ほん じゃありません。", romanized: "Kore wa hon ja arimasen.", translation: "This is not a book." }
        ]
    },
    {
        id: "ja-g-a1-5",
        level: "A1",
        title: "Greetings and Basic Expressions",
        explanation: "Japanese has different levels of politeness. These are the standard polite greetings used in everyday situations. おはようございます (ohayou gozaimasu) is the formal 'good morning'; the casual version is just おはよう. こんにちは (konnichiwa) is used during the daytime. こんばんは (konbanwa) is for evening. ありがとうございます (arigatou gozaimasu) is the formal 'thank you'; the casual is ありがとう. すみません (sumimasen) means both 'excuse me' and 'I'm sorry'. はじめまして (hajimemashite) is said when meeting someone for the first time, followed by よろしくおねがいします (yoroshiku onegaishimasu), roughly 'please treat me well'.",
        examples: [
            { native: "おはようございます。", romanized: "Ohayou gozaimasu.", translation: "Good morning. (formal)" },
            { native: "こんにちは。", romanized: "Konnichiwa.", translation: "Hello / Good afternoon." },
            { native: "こんばんは。", romanized: "Konbanwa.", translation: "Good evening." },
            { native: "ありがとうございます。", romanized: "Arigatou gozaimasu.", translation: "Thank you very much." },
            { native: "はじめまして。よろしくおねがいします。", romanized: "Hajimemashite. Yoroshiku onegaishimasu.", translation: "Nice to meet you. Please be kind to me." }
        ]
    },
    {
        id: "ja-g-a1-6",
        level: "A1",
        title: "Numbers 1–100",
        explanation: "Japanese uses Sino-Japanese (Chinese-origin) numbers for most counting. The basic numbers are: 一(ichi/1), 二(ni/2), 三(san/3), 四(shi or yon/4), 五(go/5), 六(roku/6), 七(nana or shichi/7), 八(hachi/8), 九(ku or kyuu/9), 十(juu/10). Compound numbers are formed by combining: 十一(juuichi/11), 二十(nijuu/20), 三十(sanjuu/30), and so on. 百(hyaku) = 100. Note: 四 is often read as 'yon' and 七 as 'nana' to avoid confusion with 死(death) and other words.",
        examples: [
            { native: "いち、に、さん、し・よん、ご", romanized: "ichi, ni, san, shi/yon, go", translation: "One, two, three, four, five" },
            { native: "ろく、なな・しち、はち、く・きゅう、じゅう", romanized: "roku, nana/shichi, hachi, ku/kyuu, juu", translation: "Six, seven, eight, nine, ten" },
            { native: "じゅういち、じゅうに、にじゅう、さんじゅう", romanized: "juuichi, juuni, nijuu, sanjuu", translation: "Eleven, twelve, twenty, thirty" },
            { native: "ごじゅう、ろくじゅう、ななじゅう、はちじゅう、きゅうじゅう", romanized: "gojuu, rokujuu, nanajuu, hachijuu, kyuujuu", translation: "Fifty, sixty, seventy, eighty, ninety" },
            { native: "ひゃく", romanized: "hyaku", translation: "One hundred" }
        ]
    },
    {
        id: "ja-g-a1-7",
        level: "A1",
        title: "Polite Verbs: ます-form (Present / Future)",
        explanation: "Japanese verbs in polite speech use the ます (masu) form. There are three verb groups. Group 2 (ichidan/ru-verbs): verbs ending in -eru or -iru — remove る and add ます (e.g., 食べる → 食べます). Group 1 (godan/u-verbs): verbs ending in other sounds — change the final sound to its い-row equivalent and add ます (e.g., 飲む → 飲み + ます = 飲みます; 書く → 書き + ます = 書きます). Group 3 (irregular): **する → します**, **来る(くる) → 来ます(きます)**. The ます-form is used for present facts and future actions.",
        examples: [
            { native: "たべます。", romanized: "Tabemasu.", translation: "I eat. / I will eat. (たべる → たべます)" },
            { native: "のみます。", romanized: "Nomimasu.", translation: "I drink. / I will drink. (のむ → のみます)" },
            { native: "いきます。", romanized: "Ikimasu.", translation: "I go. / I will go. (いく → いきます)" },
            { native: "します。", romanized: "Shimasu.", translation: "I do. / I will do. (する → します, irregular)" },
            { native: "きます。", romanized: "Kimasu.", translation: "I come. / I will come. (くる → きます, irregular)" }
        ]
    },
    {
        id: "ja-g-a1-8",
        level: "A1",
        title: "Past Tense: ました (Polite Past)",
        explanation: "To express past actions in polite Japanese, replace ます with ました (mashita) for affirmative past, and replace ません with ませんでした (masen deshita) for negative past. This applies to all verb groups once they are in ます-form. For example: 食べます → 食べました (ate), 食べません → 食べませんでした (did not eat). The copula past is でした (deshita): 〜でした = was/were, 〜じゃありませんでした = was not.",
        examples: [
            { native: "きのう、すしをたべました。", romanized: "Kinou, sushi wo tabemashita.", translation: "Yesterday, I ate sushi." },
            { native: "がっこうにいきました。", romanized: "Gakkou ni ikimashita.", translation: "I went to school." },
            { native: "みずをのみませんでした。", romanized: "Mizu wo nomimasen deshita.", translation: "I did not drink water." },
            { native: "かれはがくせいでした。", romanized: "Kare wa gakusei deshita.", translation: "He was a student." },
            { native: "きませんでした。", romanized: "Kimasen deshita.", translation: "I did not come. / He/She did not come." }
        ]
    },
    {
        id: "ja-g-a1-9",
        level: "A1",
        title: "Negation and Questions",
        explanation: "To negate a polite verb, replace ます with ません (masen): 食べます → 食べません (don't eat). To form a question, add the particle か to the end of a sentence: 食べますか？(Do you eat?). Essential question words: 何(なに/nani) = what, どこ(doko) = where, いつ(itsu) = when, 誰(だれ/dare) = who, どれ(dore) = which one, どう(dou) = how, なぜ/どうして = why, いくら(ikura) = how much, いくつ(ikutsu) = how many. Question words typically come where the unknown information would be in the sentence.",
        examples: [
            { native: "きょうはがっこうにいきません。", romanized: "Kyou wa gakkou ni ikimasen.", translation: "Today I am not going to school." },
            { native: "おなまえはなんですか？", romanized: "Onamae wa nan desu ka?", translation: "What is your name?" },
            { native: "トイレはどこですか？", romanized: "Toire wa doko desu ka?", translation: "Where is the toilet?" },
            { native: "きょう、なにをたべましたか？", romanized: "Kyou, nani wo tabemashita ka?", translation: "What did you eat today?" },
            { native: "いつにほんにきましたか？", romanized: "Itsu Nihon ni kimashita ka?", translation: "When did you come to Japan?" }
        ]
    },
    {
        id: "ja-g-a1-28",
        level: "A1",
        title: "Introduction to the て-form",
        explanation: `The て-form is one of the most important verb forms in Japanese. You will use it constantly at A2 and beyond — for connecting actions, making requests, and forming the progressive. This lesson introduces the rules so they are not new when you need them.

FORMING THE て-FORM

Group 2 (RU-verbs / ichidan) — drop る, add て:
  たべる → たべて    みる → みて    おきる → おきて

Group 3 (irregular) — must memorise:
  する → して    くる → きて

Group 1 (U-verbs / godan) — the ending changes:
  Stem ending    Change         Example
  ──────────────────────────────────────────
  る / つ / う  → って    かう → かって、まつ → まって、のる → のって
  む / ぬ / ぶ  → んで    のむ → のんで、よぶ → よんで
  く            → いて    かく → かいて
  ぐ            → いで    およぐ → およいで
  す            → して    はなす → はなして
  Exception: いく → いって (not いいて)

AT A1 — ONE USE TO KNOW NOW
て-form + ください = polite request ('please do ~')
You have already seen this in the requests lesson. Now you know where the て comes from.
  たべてください。   Please eat.
  みてください。     Please look.
  してください。     Please do it.

AT A2 — TWO MORE USES ARE COMING
  て-form + います  → progressive (いま たべています = I am eating now)
  て-form alone    → connecting two actions in sequence (たべて、ねます = I eat and then sleep)

You do not need to produce these yet. But recognising the て-form when you see it will make A2 lesson 1 much easier.`,
        examples: [
            { native: "たべる → たべて", romanized: "taberu → tabete", translation: "RU-verb: drop る, add て", speakText: "たべる、たべて" },
            { native: "のむ → のんで", romanized: "nomu → nonde", translation: "U-verb ending in む → んで", speakText: "のむ、のんで" },
            { native: "かく → かいて", romanized: "kaku → kaite", translation: "U-verb ending in く → いて", speakText: "かく、かいて" },
            { native: "いく → いって", romanized: "iku → itte", translation: "Exception: いく → いって (not いいて)", speakText: "いく、いって" },
            { native: "する → して / くる → きて", romanized: "suru → shite / kuru → kite", translation: "The two irregular て-forms — must memorise", speakText: "する、して、くる、きて" },
            { native: "ゆっくり はなしてください。", romanized: "Yukkuri hanashite kudasai.", translation: "Please speak slowly. (はなす → はなして + ください)" },
        ]
    },
    {
        id: "ja-g-a1-32",
        level: "A1",
        title: "〜ましょう / 〜ませんか — Let's / Shall We?",
        explanation: `Two verb endings express suggestions and invitations in polite Japanese. Both attach to the ます-stem (the part before ます).

〜ましょう — LET'S (do something)
A positive suggestion or decision to do something together.
Replace ます with ましょう:
  たべます  → たべましょう     Let's eat.
  いきます  → いきましょう     Let's go.
  はじめます → はじめましょう  Let's begin.
  します   → しましょう        Let's do it.

Ikimashou! is one of the most common expressions in Japanese — you will hear it constantly.

〜ませんか — SHALL WE? / WOULD YOU LIKE TO?
A softer invitation — it asks whether the other person would like to join.
Replace ます with ませんか:
  たべます  → たべませんか？    Shall we eat? / Would you like to eat?
  いきます  → いきませんか？    Shall we go? / Would you like to go?
  のみます  → のみませんか？    Shall we have a drink?

THE DIFFERENCE
  いきましょう！        Let's go! (positive, decided, enthusiastic)
  いきませんか？        Shall we go? / Would you like to go? (softer, asking)

ましょう is often a response to ませんか:
  いっしょに ひるごはんを たべませんか？  Shall we have lunch together?
  → ええ、たべましょう！                  Yes, let's eat!

RESPONDING
  Agreeing:    ええ、そうしましょう。    Yes, let's do that.
               はい、いきましょう！      Yes, let's go!
  Declining:   すみません、ちょっと...   Sorry, it's a bit... (polite decline — trailed off)

COMMON EXPRESSIONS
  はじめましょう。        Let's begin.
  やすみましょう。        Let's rest / take a break.
  いっしょに いきませんか？  Won't you come with us?
  なにか のみませんか？     Shall we have something to drink?`,
        examples: [
            { native: "いっしょに いきましょう！", romanized: "Issho ni ikimashou!", translation: "Let's go together!" },
            { native: "そろそろ はじめましょう。", romanized: "Sorosoro hajimemashou.", translation: "Let's begin soon." },
            { native: "いっしょに ひるごはんを たべませんか？", romanized: "Issho ni hirugohan wo tabemasen ka?", translation: "Shall we have lunch together?" },
            { native: "なにか のみませんか？", romanized: "Nanika nomimasen ka?", translation: "Shall we have something to drink?" },
            { native: "ええ、そうしましょう！", romanized: "Ee, sou shimashou!", translation: "Yes, let's do that!" },
            { native: "すこし やすみましょう。", romanized: "Sukoshi yasumimashou.", translation: "Let's rest a little." },
        ]
    },
    {
        id: "ja-g-a1-33",
        level: "A1",
        title: "Plain Form — An Introduction",
        explanation: `Throughout this course you have learned the polite ます/です forms. But Japanese has a second set of verb and adjective forms called the plain form (also called dictionary form or casual form). You need to know it exists and how to recognise it, because you encounter it in reading, in grammar patterns, and in casual speech from day one.

POLITE FORM vs PLAIN FORM

  Polite (ます/です)      Plain form        Meaning
  ────────────────────────────────────────────────────
  たべます               たべる            eat
  のみます               のむ              drink
  いきます               いく              go
  します                 する              do
  きます                 くる              come
  たべません             たべない          don't eat
  たべました             たべた            ate
  たべませんでした       たべなかった      didn't eat
  です                   だ                is/am/are
  じゃありません         じゃない          is not

The plain form is the form listed in dictionaries — this is why it is also called the dictionary form.

THREE REASONS YOU NEED THE PLAIN FORM NOW

1. READING — plain forms appear constantly in written Japanese, menus, signs, and messages between friends. はいれません (polite) vs はいるな (plain negative — 'do not enter' on signs).

2. GRAMMAR PATTERNS — several patterns you already know use plain forms before them:
   〜とおもいます (I think that ~) — uses plain form before と
   〜たいです (want to) — built on the ます-stem, related to plain form
   At A2, many more patterns require the plain form.

3. CASUAL SPEECH — when Japanese speakers talk to close friends they drop ます/です entirely. You will hear plain forms constantly in anime, music, and conversation between peers.

HOW TO RECOGNISE PLAIN FORMS

Verbs end in a う-row sound: たべ**る**、のむ、いく、はなす、まつ
Plain negative ends in ない: たべない、のまない、いかない
Plain past ends in た/だ: たべた、のんだ、いった
Plain past negative ends in なかった: たべなかった、のまなかった

い-adjectives: unchanged from what you know — おいしい、たかい、さむい (plain = polite base)
Plain negative: おいしくない、たかくない
Plain past: おいしかった、たかかった

な-adjectives + nouns: replace です with だ:
  しずかです → しずかだ
  がくせいです → がくせいだ

AT A1 — RECOGNITION ONLY
You do not need to produce plain forms yet. Stick to ます/です in your own speech.
The goal of this lesson is so that when you see たべる or いった or おいしくない,
you are not confused — you recognise them as verb and adjective forms you already know.`,
        examples: [
            { native: "たべます → たべる", romanized: "tabemasu → taberu", translation: "Polite present → plain form (dictionary form)", speakText: "たべます、たべる" },
            { native: "いきました → いった", romanized: "ikimashita → itta", translation: "Polite past → plain past", speakText: "いきました、いった" },
            { native: "たべません → たべない", romanized: "tabemasen → tabenai", translation: "Polite negative → plain negative", speakText: "たべません、たべない" },
            { native: "おいしいです → おいしい / おいしかった", romanized: "oishii desu → oishii / oishikatta", translation: "い-adjective: polite present → plain present / plain past", speakText: "おいしいです、おいしい、おいしかった" },
            { native: "がくせいです → がくせいだ", romanized: "gakusei desu → gakusei da", translation: "Noun + です → noun + だ (plain copula)", speakText: "がくせいです、がくせいだ" },
            { native: "〜とおもいます。", romanized: "~ to omoimasu.", translation: "I think that ~ (plain form comes before と in this pattern)" },
        ]
    },
]
