import { GrammarLesson } from "../../../../types"

export const adverbsAndExpressionsLessons: GrammarLesson[] = [
    {
        id: "ja-g-a1-22",
        level: "A1",
        title: "Adverbs of Time",
        explanation: `Time expressions in Japanese usually go at the START of the sentence or just before the verb — they are very flexible.

TIME ANCHORS:
  今日 (きょう)    today
  昨日 (きのう)    yesterday
  明日 (あした)    tomorrow
  今週 (こんしゅう)  this week
  先週 (せんしゅう)  last week
  来週 (らいしゅう)  next week

NOW / RELATIVE:
  今 (いま)     now
  もう          already / soon (+ affirmative: もう食べました — already ate)
                or not yet in questions: もうたべましたか？
  まだ          still / not yet (+ negative: まだたべていません — haven't eaten yet)
                or still continuing: まだいます — still here

NOTE: もう vs まだ
  もう〜ました    already did    (もう食べました。 — already ate)
  まだ〜ません   not yet        (まだ食べません。 — not eating yet / haven't eaten yet)

SPEED / ORDER:
  はやく         quickly / early
  ゆっくり        slowly / leisurely
  はじめに        first (in a sequence)
  つぎに          next
  さいごに        finally / last
  あとで          later`,
        examples: [
            { native: "きょうは いそがしいです。", romanized: "Kyou wa isogashii desu.", translation: "I am busy today." },
            { native: "きのう ともだちに あいました。", romanized: "Kinou tomodachi ni aimashita.", translation: "I met a friend yesterday." },
            { native: "もう たべました。", romanized: "Mou tabemashita.", translation: "I already ate." },
            { native: "まだ たべていません。", romanized: "Mada tabete imasen.", translation: "I haven't eaten yet." },
            { native: "ゆっくり はなしてください。", romanized: "Yukkuri hanashite kudasai.", translation: "Please speak slowly." },
            { native: "はじめに てを あらいます。", romanized: "Hajime ni te wo araimasu.", translation: "First I wash my hands." },
        ]
    },
    {
        id: "ja-g-a1-23",
        level: "A1",
        title: "Frequency Adverbs",
        explanation: `Use these adverbs to say how often something happens.

FREQUENCY SCALE (high → low):
  いつも         always
  よく           often
  ときどき        sometimes
  あまり (+ neg)  not much / not very often
  ぜんぜん (+ neg)  not at all / never

IMPORTANT: あまり and ぜんぜん REQUIRE a negative verb:
  あまり たべません。     I don't eat much.      ✓
  あまり たべます。       ✗ (grammatically wrong)
  ぜんぜん わかりません。  I don't understand at all. ✓
  ぜんぜん わかります。   ✗

POSITION: Frequency adverbs come before the verb, or at the start of the sentence:
  わたしは いつも あさごはんを たべます。  I always eat breakfast.
  ときどき えいがを みます。               I sometimes watch films.
  ぜんぜん わかりません。                 I don't understand at all.

DEGREE ADVERBS (bonus — used with adjectives and adverbs):
  とても          very          とても おいしいです。  very delicious
  すごく          really / super すごく さむいです。   really cold
  ちょっと        a little       ちょっと むずかしいです。  a little difficult`,
        examples: [
            { native: "わたしは いつも コーヒーを のみます。", romanized: "Watashi wa itsumo koohii wo nomimasu.", translation: "I always drink coffee." },
            { native: "ときどき えいがを みます。", romanized: "Tokidoki eiga wo mimasu.", translation: "I sometimes watch movies." },
            { native: "あまり にくを たべません。", romanized: "Amari niku wo tabemasen.", translation: "I don't eat much meat." },
            { native: "ぜんぜん わかりません。", romanized: "Zenzen wakarimasen.", translation: "I don't understand at all." },
            { native: "この えいがは とても おもしろいです。", romanized: "Kono eiga wa totemo omoshiroi desu.", translation: "This movie is very interesting." },
        ]
    },
    {
        id: "ja-g-a1-24",
        level: "A1",
        title: "Discourse Connectors",
        explanation: `These words connect separate sentences. They go at the START of a new sentence.

ADDING:
  そして          and / and then
  それから        and then / after that (stronger sequence)
  また            also / again

CONTRASTING:
  でも            but / however (casual, very common)
  しかし          but / however (more formal)
  でも is far more common in everyday speech.

CAUSE / RESULT:
  だから          so / therefore (consequence)
  それで          so / and as a result (softer cause-effect)

TOPIC SHIFT:
  ところで        by the way
  じつは          actually (introducing something the listener might not know)

SEQUENCE (in lists / routines):
  まず            first of all
  つぎに          next
  それから        then / after that
  さいごに        finally

EXAMPLE SEQUENCE:
  まず、てを あらいます。        First, I wash my hands.
  つぎに、りょうりを します。    Next, I cook.
  さいごに、たべます。           Finally, I eat.`,
        examples: [
            { native: "わたしは がくせいです。そして、アルバイトも しています。", romanized: "Watashi wa gakusei desu. Soshite, arubaito mo shite imasu.", translation: "I am a student. And I also work part-time." },
            { native: "たかいです。でも、おいしいです。", romanized: "Takai desu. Demo, oishii desu.", translation: "It's expensive. But it's delicious." },
            { native: "あめが ふりました。だから、いえに いました。", romanized: "Ame ga furimashita. Dakara, ie ni imashita.", translation: "It rained. So I stayed home." },
            { native: "まず てを あらいます。それから たべます。", romanized: "Mazu te wo araimasu. Sorekara tabemasu.", translation: "First I wash my hands. Then I eat." },
            { native: "じつは、にほんごが すきです。", romanized: "Jitsu wa, nihongo ga suki desu.", translation: "Actually, I like Japanese." },
        ]
    },
    {
        id: "ja-g-a1-25",
        level: "A1",
        title: "あります / います — Describing Existence",
        explanation: `あります and います both mean "there is / there are" or "to exist / to have", but they are used for different types of things.

INANIMATE vs ANIMATE:
  あります  →  non-living things: objects, places, events, plants
  います    →  living beings: people, animals

BASIC PATTERN:
  [Location] に [Thing] が あります / います。
  "There is [Thing] at [Location]."

EXAMPLES:
  テーブルの うえに りんごが あります。   There is an apple on the table.
  こうえんに いぬが います。              There is a dog in the park.

QUESTION FORM:
  [Location] に [Thing] が ありますか？    Is there a [Thing] at [Location]?
  → はい、あります。  /  いいえ、ありません。

WHERE-IS QUESTION:
  [Thing] は どこに ありますか？         Where is [Thing]?
  [Thing] は どこに いますか？           Where is [Thing] (person/animal)?
  → [Location] に あります / います。

NEGATIVE:
  あります → ありません  (there is not / I don't have)
  います   → いません    (is not here / not present)

POSSESSION (ある):
  ありますか can also mean "do you have?":
  じかんが ありますか？   Do you have time?
  おかねが ありません。  I don't have money.`,
        examples: [
            { native: "つくえの うえに ほんが あります。", romanized: "Tsukue no ue ni hon ga arimasu.", translation: "There is a book on the desk." },
            { native: "こうえんに こどもが います。", romanized: "Kouen ni kodomo ga imasu.", translation: "There are children in the park." },
            { native: "れいぞうこに たまごが ありますか？", romanized: "Reizouko ni tamago ga arimasu ka?", translation: "Are there eggs in the fridge?" },
            { native: "すみません、トイレは どこに ありますか？", romanized: "Sumimasen, toire wa doko ni arimasu ka?", translation: "Excuse me, where is the toilet?" },
            { native: "いえに ねこが にひき います。", romanized: "Ie ni neko ga nihiki imasu.", translation: "There are two cats at home." },
            { native: "きょうは じかんが ありません。", romanized: "Kyou wa jikan ga arimasen.", translation: "I don't have time today." },
        ]
    },
    {
        id: "ja-g-a1-26",
        level: "A1",
        title: "〜てください — Polite Requests",
        explanation: `〜てください is used to make polite requests: "Please do ~". It is formed by attaching ください to the て-form of a verb.

FORMING THE て-FORM:

Group 1 (U-verbs / godan) — stem ending changes:
  -う / -つ / -る   →  -って    (かう → かって、まつ → まって、のる → のって)
  -む / -ぬ / -ぶ   →  -んで    (のむ → のんで、よぶ → よんで)
  -く              →  -いて    (かく → かいて)  ※ いく → いって (exception)
  -ぐ              →  -いで    (およぐ → およいで)
  -す              →  -して    (はなす → はなして)

Group 2 (RU-verbs / ichidan) — drop る, add て:
  たべる → たべて    みる → みて    おきる → おきて

Irregular:
  する → して    くる → きて

ATTACHING ください:
  て-form + ください
  たべてください。    Please eat.
  みてください。      Please look/watch.
  してください。      Please do it.

NEGATIVE REQUEST (ないでください — please don't ~):
  Negative plain form (〜ない) + でください
  たべないでください。   Please don't eat.
  はなさないでください。 Please don't speak.

SOFTENING:
  Adding すみませんが前に or ending with ～ていただけますか makes the request more polite.`,
        examples: [
            { native: "ここに なまえを かいてください。", romanized: "Koko ni namae wo kaite kudasai.", translation: "Please write your name here." },
            { native: "ゆっくり はなしてください。", romanized: "Yukkuri hanashite kudasai.", translation: "Please speak slowly." },
            { native: "まどを しめてください。", romanized: "Mado wo shimete kudasai.", translation: "Please close the window." },
            { native: "しゃしんを とらないでください。", romanized: "Shashin wo toranai de kudasai.", translation: "Please don't take photos." },
            { native: "すみません、もう いちど いってください。", romanized: "Sumimasen, mou ichido itte kudasai.", translation: "Excuse me, please say that one more time." },
            { native: "ここで たばこを すわないでください。", romanized: "Koko de tabako wo suwanai de kudasai.", translation: "Please don't smoke here." },
        ]
    },
    {
        id: "ja-g-a1-27",
        level: "A1",
        title: "[Noun]をください — Ordering & Requesting",
        explanation: `ください on its own means "please give me". Attach it to a noun with を to request any item — at a restaurant, shop, ticket counter, or café.

BASIC PATTERN:
  [Noun] を ください。       [Noun], please. / Please give me [Noun].

  みずを ください。          Water, please.
  メニューを ください。      The menu, please.
  レシートを ください。      A receipt, please.

WITH COUNTERS (ordering a quantity):
  [Noun] を [Counter] ください。

  コーヒーを いっぱい ください。    One coffee, please. (杯 = cups)
  ビールを にほん ください。        Two beers, please. (本 = bottles)
  たまごを みっつ ください。        Three eggs, please. (つ = general counter)

POINTING AT THE MENU:
  これを ください。     This one, please.
  それを ください。     That one, please.
  あれを ください。     That one over there, please.

ASKING THE PRICE:
  いくらですか？                How much is it?
  [Noun] は いくらですか？      How much is [Noun]?

  このラーメンは いくらですか？  How much is this ramen?

ASKING IF SOMETHING IS AVAILABLE:
  [Noun] は ありますか？        Do you have [Noun]? / Is there [Noun]?

  えいごの メニューは ありますか？   Do you have an English menu?
  きょうの おすすめは ありますか？   Do you have today's special?

POLITE ALTERNATIVES:
  おねがいします。              Please. / I'd like that. (softer than ください — use with pointing or after stating your order)
  〜を おねがいします。          [Noun], please. (more formal/polite than をください)

DIFFERENCE: ください vs 〜てください
  みずを ください。              Water, please.  (noun + を + ください)
  みずを もってきてください。     Please bring me some water. (verb て-form + ください)

AT THE REGISTER:
  いくらですか？         How much is it?
  ぜんぶで いくらですか？ How much is everything altogether?`,
        examples: [
            { native: "すみません、みずを ください。", romanized: "Sumimasen, mizu wo kudasai.", translation: "Excuse me, water please." },
            { native: "コーヒーを ふたつ ください。", romanized: "Koohii wo futatsu kudasai.", translation: "Two coffees, please." },
            { native: "これを ください。いくらですか？", romanized: "Kore wo kudasai. Ikura desu ka?", translation: "This one, please. How much is it?" },
            { native: "えいごの メニューは ありますか？", romanized: "Eigo no menyuu wa arimasu ka?", translation: "Do you have an English menu?" },
            { native: "すしを みっつと みそしるを ひとつ おねがいします。", romanized: "Sushi wo mittsu to misoshiru wo hitotsu onegaishimasu.", translation: "Three pieces of sushi and one miso soup, please." },
            { native: "ぜんぶで いくらですか？", romanized: "Zenbu de ikura desu ka?", translation: "How much is everything altogether?" },
        ]
    },
]
