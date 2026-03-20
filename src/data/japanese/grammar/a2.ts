import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "ja-g-a2-1",
        level: "A2",
        title: "て-form: Connecting Actions and ている Progressive",
        explanation: {
            native: `The て-form unlocks two essential uses at A2: connecting sequential actions and forming the progressive with ています. You learned how to form the て-form in lesson ja-g-a1-28 — this lesson focuses on using it.

CONNECTING SEQUENTIAL ACTIONS — て as 'and then'
The て-form of a verb connects it to the next action in sequence. The tense of the whole sentence is carried by the final verb only.

  おきて、かおをあらって、ごはんをたべます。
  I get up, wash my face, and eat breakfast.

  シャワーをあびて、きがえます。
  I take a shower and then get changed.

  えきまであるいて、でんしゃにのります。
  I walk to the station and take the train.

The actions happen in order — left to right. The て-form signals 'and then, next'.

PROGRESSIVE — ている (te-form + います)
ている expresses an ongoing action — what is happening right now, or a state that results from a completed action.

STRUCTURE: て-form + います (polite) / て-form + いる (plain)

ONGOING ACTION — happening right now:
  いま なにをして いますか？        What are you doing now?
  おんがくを きいて います。        I am listening to music.
  あめが ふって います。            It is raining.
  ともだちを まって います。        I am waiting for a friend.

RESULTING STATE — something happened and the result continues:
  けっこんして います。             I am married. (got married and still am)
  にほんに すんで います。         I live in Japan. (moved there and still do)
  めがねを かけて います。         He is wearing glasses. (put them on, still wearing)
  まどが あいて います。           The window is open. (was opened, still open)

This distinction matters — すんでいます (living) is a state, not an ongoing action.

NEGATIVE PROGRESSIVE: ていません
  いま たべて いません。            I am not eating right now.
  まだ おきて いません。            He hasn't got up yet.

PAST PROGRESSIVE: ていました
  きのう よるは べんきょうして いました。  I was studying last night.`,
            target: `て-けいには A2 で ふたつの だいじな つかいかたが あります。じゅんじょで どうさを つなぐこと、そして ています の しんこうけいを つくること です。て-けいの つくりかたは レッスン ja-g-a1-28 で べんきょうしました。

じゅんじょの どうさをつなぐ — て は「そして」
  おきて、かおをあらって、ごはんをたべます。
  シャワーをあびて、きがえます。

しんこうけい — ている
こうぞう：て-けい ＋ います（ていねい）／ て-けい ＋ いる（ふつう）

いま おこなわれている どうさ：
  おんがくをきいています。／ あめがふっています。

けっかの じょうたい：
  けっこんしています。／ にほんにすんでいます。／ めがねをかけています。

ひていけい：ていません
  いまたべていません。／ まだおきていません。

かこしんこうけい：ていました
  きのうよるはべんきょうしていました。`
        },
        examples: [
            { native: "おきて、はをみがいて、がっこうへいきます。", romanized: "Okite, ha wo migaite, gakkou e ikimasu.", translation: "I get up, brush my teeth, and go to school. (sequential て-form)" },
            { native: "いま なにをして いますか？", romanized: "Ima nani wo shite imasu ka?", translation: "What are you doing now?" },
            { native: "ともだちを まって います。", romanized: "Tomodachi wo matte imasu.", translation: "I am waiting for a friend." },
            { native: "かれは にほんに すんで います。", romanized: "Kare wa Nihon ni sunde imasu.", translation: "He lives in Japan. (resulting state)" },
            { native: "あめが ふって いません。", romanized: "Ame ga futte imasen.", translation: "It is not raining." },
            { native: "きのう よるは なにをして いましたか？", romanized: "Kinou yoru wa nani wo shite imashita ka?", translation: "What were you doing last night?" },
        ]
    },
    {
        id: "ja-g-a2-2",
        level: "A2",
        title: "Potential Verbs — Can Do / Be Able To",
        explanation: {
            native: `Potential verbs express ability — 'can do' or 'be able to do'. Japanese builds potential forms directly into the verb rather than using a separate word like 'can'.

FORMING POTENTIAL VERBS

Group 2 (RU-verbs): replace る with られる
  たべる → たべられる      can eat
  みる  → みられる         can see / can watch
  おきる → おきられる      can get up
  でる  → でられる         can leave

Note: in casual speech, られる often shortens to れる for group 2:
  たべれる (casual) = たべられる (standard)
  Both are widely understood — the standard form is safer at A2.

Group 1 (U-verbs): change the final う-row sound to the え-row, then add る
  のむ  → のめる            can drink    (む→め＋る)
  かく  → かける            can write    (く→け＋る)
  はなす → はなせる         can speak    (す→せ＋る)
  まつ  → まてる            can wait     (つ→て＋る)
  よむ  → よめる            can read     (む→め＋る)
  いく  → いける            can go       (く→け＋る)
  あそぶ → あそべる         can play     (ぶ→べ＋る)

Group 3 (irregular):
  する  → できる            can do
  くる  → こられる          can come

OBJECT PARTICLE — が or を
With potential verbs, the object can take either が or を:
  にほんごが はなせます。   I can speak Japanese. (が — natural with potential)
  にほんごを はなせます。   I can speak Japanese. (を — also correct)
が is slightly more natural with potential verbs, but both are acceptable.

できる — the most important potential verb
できる means 'can do' and also stands alone as 'to be able to / possible':
  にほんごが できます。     I can speak Japanese. (lit. Japanese is possible for me)
  それは できません。       I can't do that.
  できるだけ はやく。       As quickly as possible.

NEGATIVE POTENTIAL — replace る with られない / ない-form:
  たべられません。          I can't eat it.
  はなせません。            I can't speak.
  できません。              I can't do it.`,
            target: `かのうどうしは のうりょくを あらわします —「〜できる」「〜することができる」。

かのうけいの つくりかた：

グループ２（る-どうし）：る を られる に かえる
  たべる → たべられる（たべれる — くだけたかたち）
  みる → みられる

グループ１（う-どうし）：さいごの う-だんおんを え-だんおんに かえて る をつける
  のむ → のめる,  かく → かける,  はなす → はなせる
  よむ → よめる,  いく → いける

グループ３（ふきそく）：
  する → できる,  くる → こられる

もくてきごに は が または を がつかえます：
  にほんごが はなせます。（が — しぜん）
  にほんごを はなせます。（を — もせいかく）

できる — もっともたいせつなかのうどうし：
  にほんごが できます。／ それは できません。

ひていかのう：られない/ない-けい
  たべられません。／ はなせません。／ できません。`
        },
        examples: [
            { native: "にほんごが すこし はなせます。", romanized: "Nihongo ga sukoshi hanasemasu.", translation: "I can speak a little Japanese." },
            { native: "ピアノが ひけますか？", romanized: "Piano ga hikemasu ka?", translation: "Can you play the piano?" },
            { native: "からい たべものが たべられません。", romanized: "Karai tabemono ga taberaremasen.", translation: "I can't eat spicy food." },
            { native: "きょうは こられません。", romanized: "Kyou wa koraremasen.", translation: "I can't come today." },
            { native: "にほんごが できますか？", romanized: "Nihongo ga dekimasu ka?", translation: "Can you speak Japanese? (lit. Is Japanese possible for you?)" },
            { native: "できるだけ はやく きて ください。", romanized: "Dekiru dake hayaku kite kudasai.", translation: "Please come as quickly as possible." },
        ]
    },
    {
        id: "ja-g-a2-3",
        level: "A2",
        title: "なければならない / なくてもいい — Obligation and Permission",
        explanation: {
            native: `Two essential patterns express obligation ('must / have to') and lack of obligation ('don't have to') in Japanese.

なければならない — MUST / HAVE TO
Structure: negative ない-form, replace ない with なければならない
  たべる → たべない → たべなければならない     must eat
  いく  → いかない → いかなければならない      must go
  する  → しない  → しなければならない         must do
  くる  → こない  → こなければならない         must come

Polite speech: なければなりません
  まいにち べんきょうしなければなりません。   I must study every day.
  はやく いかなければなりません。             I have to go soon.
  くすりを のまなければなりません。           I must take medicine.

Casual shortening — very common in spoken Japanese:
  なければならない → なきゃ (most common casual form)
  なければならない → なければいけない (slightly softer)
  はやく いかなきゃ。   I gotta go soon. / I have to go soon.

なくてもいい — DON'T HAVE TO / IT'S OK NOT TO
Structure: negative ない-form, replace ない with なくてもいい
  いく  → いかない → いかなくてもいいです      don't have to go
  する  → しない  → しなくてもいいです          don't have to do
  たべる → たべない → たべなくてもいいです     don't have to eat

  あしたは こなくてもいいです。    You don't have to come tomorrow.
  ぜんぶ たべなくてもいいよ。      You don't have to eat all of it.
  むりしなくてもいいです。         You don't have to push yourself.

MUST NOT vs DON'T HAVE TO — a critical distinction:
  いってはいけません。   You must not go. (prohibition — see ja-g-a2-14)
  いかなくてもいいです。 You don't have to go. (no obligation — this lesson)

FORMATION SUMMARY TABLE:
  Base verb    ない-form      Must             Don't have to
  いく         いかない       いかなければならない  いかなくてもいい
  する         しない         しなければならない    しなくてもいい
  たべる       たべない       たべなければならない  たべなくてもいい`,
            target: `ふたつのだいじなこうぞうが にほんごで ぎむ（「〜しなければならない」）と ぎむのなさ（「〜しなくてもいい」）をあらわします。

なければならない — しなければならない
こうぞう：ない-けい の ない を なければならない に かえる
  たべる → たべない → たべなければならない
  いく → いかない → いかなければならない

ていねい：なければなりません
  まいにちべんきょうしなければなりません。
  はやくいかなければなりません。

くだけたかたち（よく つかわれる）：
  なければならない → なきゃ
  はやくいかなきゃ。

なくてもいい — しなくてもいい
こうぞう：ない-けい の ない を なくてもいい に かえる
  いく → いかない → いかなくてもいいです
  あしたはこなくてもいいです。

してはいけない vs しなくてもいい — たいせつなちがい：
  いってはいけません。（きんし — してはならない）
  いかなくてもいいです。（ぎむがない — しなくてよい）`
        },
        examples: [
            { native: "まいにち れんしゅう しなければなりません。", romanized: "Mainichi renshuu shinakereba narimasen.", translation: "I must practice every day." },
            { native: "はやく いかなきゃ。", romanized: "Hayaku ikanakya.", translation: "I gotta go soon. (casual なきゃ)" },
            { native: "あしたは こなくて もいいですよ。", romanized: "Ashita wa konakute mo ii desu yo.", translation: "You don't have to come tomorrow." },
            { native: "ぜんぶ たべなくても いいです。", romanized: "Zenbu tabenakute mo ii desu.", translation: "You don't have to eat all of it." },
            { native: "くすりを のまなければ なりません。", romanized: "Kusuri wo nomanakereba narimasen.", translation: "I must take my medicine." },
            { native: "むりしなくても いいですよ。", romanized: "Muri shinakute mo ii desu yo.", translation: "You don't have to push yourself." },
        ]
    },
    {
        id: "ja-g-a2-4",
        level: "A2",
        title: "〜たら Conditional — If / When",
        explanation: {
            native: `The たら conditional expresses 'if' or 'when' — what will happen or what to do once a condition is met. It is the most natural and versatile conditional form at A2.

FORMING たら
Take the plain past form (た-form) and add ら:
  たべた → たべたら       if/when (you) eat
  いった → いったら       if/when (you) go
  した → したら           if/when (you) do
  きた → きたら           if/when (you) come
  よんだ → よんだら       if/when (you) read
  つかった → つかったら   if/when (you) use
  あめだった → あめだったら  if it was/is rain

For い-adjectives: replace い with かったら:
  さむい → さむかったら   if it's cold
  たかい → たかかったら   if it's expensive

For な-adjectives and nouns: add だったら:
  ひまだったら            if you're free
  がくせいだったら        if you're a student

TWO MAIN USES

1. REAL CONDITION — if X happens, then Y:
  うちに かえったら、でんわして ください。
  When you get home, please call me.

  もし やすかったら、かいます。
  If it's cheap, I'll buy it.

  あめが ふったら、うちに います。
  If it rains, I'll stay home.

2. DISCOVERY / UNEXPECTED RESULT — when X happened, (I found that) Y:
  うちに かえったら、だれも いなかった。
  When I got home, there was nobody there. (I found this unexpectedly)

  はこを あけたら、ねこが いた。
  When I opened the box, there was a cat inside.

もし — adds emphasis to the 'if' meaning (optional):
  もし じかんが あったら、てつだって ください。
  If you have time, please help me.

たら vs と vs ば vs なら — all mean 'if' but with different nuance:
At A2, focus on たら — it is the most versatile and common conditional.
The others are introduced at B1.`,
            target: `たら-じょうけんは「もし〜ならば」または「〜したとき」をあらわします。

たら の つくりかた：
た-けい（ふつうかこけい）に ら をつける
  たべた → たべたら,  いった → いったら,  した → したら,  きた → きたら

い-けいようし：い を かったら に かえる
  さむい → さむかったら,  たかい → たかかったら

な-けいようし・めいし：だったら をつける
  ひまだったら,  がくせいだったら

ふたつの おもな つかいかた：

1. じつじょうけん — もし X がおきたら、Y：
  うちにかえったら、でんわしてください。
  もしやすかったら、かいます。
  あめがふったら、うちにいます。

2. はっけん・よきせぬけっか — X したら、（Y とわかった）：
  うちにかえったら、だれもいなかった。
  はこをあけたら、ねこがいた。

もし — 「もし」の いみを きょうちょうする（にゅういん）：
  もしじかんがあったら、てつだってください。`
        },
        examples: [
            { native: "うちに かえったら、でんわして ください。", romanized: "Uchi ni kaettara, denwa shite kudasai.", translation: "When you get home, please call me." },
            { native: "もし やすかったら、かいます。", romanized: "Moshi yasukattara, kaimasu.", translation: "If it's cheap, I'll buy it." },
            { native: "あめが ふったら、うちに います。", romanized: "Ame ga futtara, uchi ni imasu.", translation: "If it rains, I'll stay home." },
            { native: "はこを あけたら、ねこが いた。", romanized: "Hako wo aketara, neko ga ita.", translation: "When I opened the box, there was a cat. (unexpected discovery)" },
            { native: "もし じかんが あったら、てつだって ください。", romanized: "Moshi jikan ga attara, tetsudatte kudasai.", translation: "If you have time, please help me." },
            { native: "おとなに なったら、なにを したいですか？", romanized: "Otona ni nattara, nani wo shitai desu ka?", translation: "When you grow up, what do you want to do?" },
        ]
    },
    {
        id: "ja-g-a2-5",
        level: "A2",
        title: "Kanji Batch 2 — 食飲見行来出入時間年月曜今何",
        explanation: {
            native: `This lesson introduces 14 essential kanji that appear constantly in everyday Japanese. After this lesson, these characters will be used freely in subsequent lessons.

GROUP 1 — EATING AND DRINKING
  食   しょく / た(べる)    eat / food
    食べる (たべる)      to eat
    食べもの (たべもの)   food

  飲   いん / の(む)       drink
    飲む (のむ)           to drink
    飲みもの (のみもの)   drink / beverage

GROUP 2 — SEEING AND MOVING
  見   けん / み(る)       see / look
    見る (みる)            to see / to watch
    見せる (みせる)        to show

  行   こう / い(く)       go
    行く (いく)            to go
    旅行 (りょこう)        travel

  来   らい / く(る)       come
    来る (くる)            to come
    来年 (らいねん)        next year

  出   しゅつ / で(る)     exit / come out
    出る (でる)            to leave / to exit
    出かける (でかける)    to go out

  入   にゅう / はい(る)   enter
    入る (はいる)          to enter
    入口 (いりぐち)        entrance

GROUP 3 — TIME
  時   じ / とき           time / o'clock
    〜時 (〜じ)            o'clock
    時間 (じかん)          time / duration

  間   かん / あいだ        between / interval
    時間 (じかん)          time
    〜時間 (〜じかん)      〜 hours

  年   ねん / とし          year
    今年 (ことし)          this year
    来年 (らいねん)        next year
    去年 (きょねん)        last year

  月   つき / げつ          month / moon
    〜月 (〜がつ)          month (January = 一月)
    毎月 (まいつき)        every month

  曜   よう                 day of the week
    〜曜日 (〜ようび)      day of the week
    月曜日 (げつようび)    Monday
    火曜日 (かようび)      Tuesday

GROUP 4 — ESSENTIAL QUESTION WORDS
  今   こん / いま          now / current
    今 (いま)              now
    今日 (きょう)          today
    今週 (こんしゅう)      this week

  何   なん / なに          what / how many
    何 (なに/なん)         what
    何時 (なんじ)          what time
    何月 (なんがつ)        what month

DAYS OF THE WEEK — using 曜:
  月曜日 (げつようび)   Monday      水曜日 (すいようび)   Wednesday
  火曜日 (かようび)     Tuesday     木曜日 (もくようび)   Thursday
  金曜日 (きんようび)   Friday      土曜日 (どようび)     Saturday
  日曜日 (にちようび)   Sunday`,
            target: `このレッスンでは にちじょうてきな にほんごに よく でてくる 14こ の かんじを しょうかいします。このレッスンのあとは、これらの もじが つぎの レッスンで じゆうに つかわれます。

グループ１ — たべること・のむこと
  食（た・べる）：食べる、食べもの
  飲（の・む）：飲む、飲みもの

グループ２ — みること・うごくこと
  見（み・る）：見る、見せる
  行（い・く）：行く
  来（く・る）：来る、来年
  出（で・る）：出る、出かける
  入（はい・る）：入る、入口

グループ３ — じかん
  時（じ・とき）：〜時、時間
  間（かん・あいだ）：時間、〜時間
  年（ねん・とし）：今年、来年、去年
  月（つき・げつ）：〜月、毎月
  曜（よう）：〜曜日、月曜日...日曜日

グループ４ — たいせつな ぎもんし
  今（いま・こん）：今、今日、今週
  何（なに・なん）：何、何時、何月

ようびのいちらん：
  月曜日・火曜日・水曜日・木曜日・金曜日・土曜日・日曜日`
        },
        examples: [
            { native: "今日 何時に 食べますか？", romanized: "Kyou nanji ni tabemasu ka?", translation: "What time do you eat today? (今日、何時、食べる — all new kanji)" },
            { native: "来年 日本に 行きたいです。", romanized: "Rainen Nihon ni ikitai desu.", translation: "I want to go to Japan next year. (来年、行く)" },
            { native: "何月に 来ますか？", romanized: "Nangatsu ni kimasu ka?", translation: "What month are you coming? (何月、来る)" },
            { native: "月曜日から 金曜日まで 仕事です。", romanized: "Getsuyoubi kara kin'youbi made shigoto desu.", translation: "I work from Monday to Friday. (月曜日、金曜日)" },
            { native: "三時間 勉強しました。", romanized: "San-jikan benkyou shimashita.", translation: "I studied for three hours. (時間)" },
            { native: "何を 飲みますか？", romanized: "Nani wo nomimasu ka?", translation: "What will you drink? (何、飲む)" },
        ]
    },
    {
        id: "ja-g-a2-6",
        level: "A2",
        title: "〜ながら — While Doing Two Things at Once",
        explanation: {
            native: `ながら expresses two actions happening simultaneously — the speaker is doing both at the same time. It is equivalent to 'while doing' in English.

FORMATION
Take the ます-stem (the part before ます) and add ながら:
  食べます → 食べながら         while eating
  飲みます → 飲みながら         while drinking
  見ます   → 見ながら           while watching / while looking
  歩きます → 歩きながら         while walking
  話します → 話しながら         while talking
  聞きます → 聞きながら         while listening

STRUCTURE
Main action is the FINAL verb — ながら describes the simultaneous secondary action:
  おんがくを 聞きながら、べんきょうします。
  I study while listening to music.

  テレビを 見ながら、ごはんを 食べます。
  I eat while watching TV.

  歩きながら、スマホを 見ないで ください。
  Please don't look at your phone while walking.

KEY RULE — both actions must have the SAME SUBJECT
ながら cannot be used when different people are doing the two actions:
  ✓ 私は 音楽を 聞きながら 勉強します。   I study while I listen to music. (same person)
  ✗ 彼が 話しながら、私は 食べます。       (different subjects — use あいだに instead at B1)

COMMON ながら COMBINATIONS
  音楽を 聞きながら          while listening to music
  テレビを 見ながら           while watching TV
  コーヒーを 飲みながら       while drinking coffee
  歩きながら                  while walking
  笑いながら                  while laughing
  泣きながら                  while crying

ながら with NEGATIVE MEANING (even though / despite)
At B1+, ながら can also mean 'even though' — just recognise this use for now:
  しっていながら、いわなかった。   Even though he knew, he didn't say anything.`,
            target: `ながら は ふたつの どうさが どうじに おこなわれることを あらわします。「〜しながら」は えいごの "while doing" にあたります。

つくりかた：
ます-けい（ます のまえの ぶぶん）に ながら をつける
  食べます → 食べながら,  飲みます → 飲みながら,  見ます → 見ながら
  歩きます → 歩きながら,  話します → 話しながら

こうぞう：
しゅようどうさは さいごの どうし — ながら は どうじに おこなわれる ふくじどうさ をしめす：
  音楽を 聞きながら、勉強します。
  テレビを 見ながら、ごはんを 食べます。

だいじなルール — ふたつの どうさの しゅごは おなじでなければならない：
  ✓ 私は 音楽を 聞きながら 勉強します。（おなじひと）
  ✗ かれが 話しながら、わたしは 食べます。（ちがうしゅご — つかえない）`
        },
        examples: [
            { native: "音楽を 聞きながら、勉強します。", romanized: "Ongaku wo kikinagara, benkyou shimasu.", translation: "I study while listening to music." },
            { native: "テレビを 見ながら、ごはんを 食べます。", romanized: "Terebi wo minagara, gohan wo tabemasu.", translation: "I eat while watching TV." },
            { native: "コーヒーを 飲みながら、話しましょう。", romanized: "Koohii wo nominagara, hanashimashou.", translation: "Let's talk while drinking coffee." },
            { native: "歩きながら スマホを 見ないで ください。", romanized: "Arukinagara sumaho wo minaide kudasai.", translation: "Please don't look at your phone while walking." },
            { native: "笑いながら 話して いました。", romanized: "Warainagara hanashite imashita.", translation: "He was talking while laughing." },
        ]
    },
    {
        id: "ja-g-a2-7",
        level: "A2",
        title: "〜てから / 〜前に / 〜後で — Before and After",
        explanation: {
            native: `Three expressions place actions in time sequence — what happens before and after something else.

〜てから — AFTER DOING (sequential: A, then B)
Structure: て-form + から
  食べてから、歯を みがきます。       After eating, I brush my teeth.
  シャワーを 浴びてから、寝ます。     After taking a shower, I go to bed.
  来てから 電話して ください。        Please call me after you arrive.

てから emphasises that the first action is fully completed before the second begins.
The tense of the whole sentence is carried by the final verb.

〜前に — BEFORE DOING
Structure: verb dictionary form (plain non-past) + 前に
  寝る 前に、歯を みがきます。        I brush my teeth before going to bed.
  出かける 前に、かぎを 確認します。  I check my keys before going out.
  食べる 前に、手を 洗って ください。 Please wash your hands before eating.

Note: 前に always uses the dictionary form (non-past plain form) — never the た-form.

〜後で — AFTER (a completed action)
Structure: verb た-form + 後で (OR noun + の + 後で)
  食べた 後で、さんぽします。         I take a walk after eating.
  学校の 後で、友だちに 会います。    I'll meet a friend after school.
  仕事の 後で、ごはんを 食べましょう。 Let's eat after work.

てから vs 後で — both mean 'after', subtle difference:
  てから — stronger sequence, the first action is the starting point for the second
  後で — looser timing, just means 'after that point in time'
  食べてから 行きます。     I'll go after I eat. (eating first is the prerequisite)
  食べた 後で 行きます。    I'll go after eating. (similar, slightly looser)
In everyday speech these are often interchangeable.

SUMMARY TABLE
  Expression    Form used           Meaning
  〜てから      て-form + から      after doing (sequence)
  〜前に        dictionary form     before doing
  〜後で        た-form + 後で      after doing (timing)`,
            target: `みっつのひょうげんが じかんのじゅんじょを あらわします。

〜てから — してから（じゅんじょ：A、そして B）
こうぞう：て-けい ＋ から
  食べてから、歯を みがきます。
  シャワーを 浴びてから、寝ます。

てから は さいしょの どうさが かんぜんに おわってから、つぎが はじまることを つよく しめします。

〜前に — するまえに
こうぞう：じしょけい（ふつう ひかこけい）＋ 前に
  寝る 前に、歯を みがきます。
  食べる 前に、手を 洗って ください。

注意：前に は いつも じしょけいをつかう — た-けい は つかわない。

〜後で — したあとで
こうぞう：た-けい ＋ 後で（または めいし ＋ の ＋ 後で）
  食べた 後で、さんぽします。
  学校の 後で、友だちに 会います。

てから と 後で — どちらも「あとで」をいみするが ちがいがある：
  てから — つよいじゅんじょ、さいしょのどうさが つぎのきてん
  後で — ゆるいじかん、「そのじかんのあと」をいみするだけ`
        },
        examples: [
            { native: "シャワーを 浴びてから、寝ます。", romanized: "Shawaa wo abite kara, nemasu.", translation: "After taking a shower, I go to bed. (てから)" },
            { native: "寝る 前に、歯を みがいて ください。", romanized: "Neru mae ni, ha wo migaite kudasai.", translation: "Please brush your teeth before going to bed. (前に + dictionary form)" },
            { native: "食べた 後で、さんぽしました。", romanized: "Tabeta ato de, sanpo shimashita.", translation: "I took a walk after eating. (後で + た-form)" },
            { native: "出かける 前に、でんわして ください。", romanized: "Dekakeru mae ni, denwa shite kudasai.", translation: "Please call me before going out." },
            { native: "仕事の 後で、いっしょに 飲みませんか？", romanized: "Shigoto no ato de, issho ni nomimasen ka?", translation: "Shall we have a drink together after work?" },
            { native: "来てから 連絡して ください。", romanized: "Kite kara renraku shite kudasai.", translation: "Please contact me after you arrive. (てから)" },
        ]
    },
    {
        id: "ja-g-a2-8",
        level: "A2",
        title: "〜そうです — Looks Like / I Heard That",
        explanation: {
            native: `そうです has two completely different uses depending on what it attaches to. They sound similar but carry different meanings — one is about appearance, the other is about hearsay.

USE 1 — LOOKS LIKE / SEEMS (conjecture from direct observation)
Attaches to the ます-stem of verbs or the stem of adjectives (drop い or だ):
  Structure: ます-stem / adjective stem + そうです

  あめが ふりそうです。              It looks like it's going to rain. (clouds visible)
  おいしそうです。                   It looks delicious. (I can see it)
  たのしそうですね。                 It looks fun, doesn't it!
  あの ひとは つかれそうです。       That person looks tired.
  このかばん、じょうぶそうです。     This bag looks sturdy.

い-adjectives: drop い, add そう:
  おいしい → おいしそう      たのしい → たのしそう
  むずかしい → むずかしそう  さむい → さむそう

EXCEPTION: いい (good) → よさそう (not いそう)

な-adjectives: drop だ, add そう:
  げんきだ → げんきそう      しずかだ → しずかそう

Verbs: use ます-stem:
  ふります → ふりそう        おちます → おちそう

USE 2 — I HEARD THAT / APPARENTLY (hearsay from another source)
Attaches to the plain form of verbs/adjectives/nouns + だ:
  Structure: plain form + そうです

  あしたは あめだそうです。          Apparently it will rain tomorrow. (heard from weather forecast)
  田中さんは くるそうです。          I heard that Tanaka-san is coming.
  あの レストランは おいしいそうです。 I hear that restaurant is delicious.

HOW TO TELL THEM APART
  おいしそうです。     It looks delicious.   (I can see it — ます-stem/adj. stem)
  おいしいそうです。   I hear it's delicious. (someone told me — plain form)

The double い in おいしいそうです is the key signal — plain form そうです keeps the full adjective ending.`,
            target: `そうです には ふたつの まったく ちがう つかいかたが あります。ひとつは みたかんじ、もうひとつは でんぶん（きいたこと）です。

つかいかた１ — みたかんじ / そうにみえる（ちょくせつかんさつから）
ます-けい または けいようし の ごかん（い または だ をとる）に そうです をつける：
  あめが ふりそうです。（くもがみえる）
  おいしそうです。（みえる）
  むずかしそうです。

い-けいようし：い をとって そう をつける
  おいしい → おいしそう,  さむい → さむそう
  れいがい：いい → よさそう

な-けいようし：だ をとって そう をつける
  げんきだ → げんきそう

どうし：ます-けい をつかう
  ふります → ふりそう

つかいかた２ — ときいた / らしい（ほかのひとから）
ふつうけい に そうです をつける：
  あしたはあめだそうです。（てんきよほうできいた）
  たなかさんはくるそうです。

みわけかた：
  おいしそうです。（みえる — ます-けい/ごかん）
  おいしいそうです。（ときいた — ふつうけい）`
        },
        examples: [
            { native: "そとは さむそうですね。", romanized: "Soto wa samusou desu ne.", translation: "It looks cold outside, doesn't it. (looks like — adj. stem)" },
            { native: "この ケーキ、おいしそう！", romanized: "Kono keeki, oishisou!", translation: "This cake looks delicious! (looks like)" },
            { native: "あしたは ゆきだそうです。", romanized: "Ashita wa yuki da sou desu.", translation: "I heard it will snow tomorrow. (hearsay — plain form)" },
            { native: "田中さんは らいしゅう 来るそうです。", romanized: "Tanaka-san wa raishuu kuru sou desu.", translation: "I hear Tanaka-san is coming next week. (hearsay)" },
            { native: "あの えいが、おもしろそうですね。", romanized: "Ano eiga, omoshirosou desu ne.", translation: "That film looks interesting." },
            { native: "あの みせは やすいそうです。", romanized: "Ano mise wa yasui sou desu.", translation: "I hear that shop is cheap. (おいしいそう — plain form, double い)" },
        ]
    },
    {
        id: "ja-g-a2-9",
        level: "A2",
        title: "〜てしまう — Completion and Regret",
        explanation: {
            native: `てしまう attaches to the て-form and expresses two closely related meanings: completion (an action is fully done, often with a sense of finality) and regret or unintended result (something happened that you wish hadn't, or that can't be undone).

FORMATION
て-form + しまう (polite: て-form + しまいます)
  食べてしまう           ate it all up / unfortunately ate it
  わすれてしまう         completely forgot / unfortunately forgot
  こわしてしまう         broke it (completely / by accident)
  なくしてしまう         lost it (completely / unfortunately)
  死んでしまう           died (with regret or finality)

POLITE FORMS
  食べてしまいました     I ate it all / I'm afraid I ate it
  わすれてしまいました   I completely forgot / I'm sorry, I forgot

CASUAL CONTRACTED FORMS — very common in spoken Japanese:
  てしまう → ちゃう / でしまう → じゃう
  食べてしまう → 食べちゃう
  わすれてしまう → わすれちゃう
  読んでしまう → 読んじゃう

  あ、わすれちゃった！     Oh no, I forgot!
  全部 食べちゃった。       I ate it all up.

TWO MAIN NUANCES

1. COMPLETION — the action is totally done, finished:
  この 本を 全部 読んでしまいました。   I finished reading the whole book.
  もう 食べてしまいました。             I already ate (it's all gone).

2. REGRET / UNINTENDED RESULT — something happened you didn't want:
  さいふを なくして しまいました。      I lost my wallet. (unfortunately)
  電車に のりおくれて しまいました。    I missed the train. (to my regret)
  かれに いって しまいました。          I ended up telling him. (I didn't mean to)

CONTEXT DETERMINES THE NUANCE
The same sentence can be completion or regret depending on context:
  全部 食べてしまいました。
  → Completion: I finished eating everything (satisfying).
  → Regret: I ate everything (I shouldn't have / there's none left).`,
            target: `てしまう は て-けいに つき、「かんりょう」（どうさが かんぜんに おわった）と「ざんねん/いがいなけっか」（おきてほしくなかったことがおきた）の ふたつの ちかい いみをあらわします。

つくりかた：て-けい ＋ しまう（ていねい：て-けい ＋ しまいます）
  食べてしまう,  わすれてしまう,  こわしてしまう,  なくしてしまう

くだけたけいやくけい — はなしことばに とてもよく つかわれる：
  てしまう → ちゃう／でしまう → じゃう
  食べてしまう → 食べちゃう
  わすれてしまう → わすれちゃう

ふたつのおもなニュアンス：

1. かんりょう — どうさが かんぜんに おわった：
  この本を全部読んでしまいました。
  もう食べてしまいました。

2. ざんねん/いがいなけっか — おきてほしくなかったこと：
  さいふをなくしてしまいました。
  電車にのりおくれてしまいました。

どちらの ニュアンスになるかは ぶんみゃくによります：
  全部食べてしまいました。
  → かんりょう：ぜんぶたべた（まんぞく）
  → ざんねん：ぜんぶたべた（たべるべきではなかった）`
        },
        examples: [
            { native: "あ、かさを わすれてしまいました。", romanized: "A, kasa wo wasurete shimaimashita.", translation: "Oh no, I forgot my umbrella. (regret)" },
            { native: "この 本を 全部 読んでしまいました。", romanized: "Kono hon wo zenbu yonde shimaimashita.", translation: "I finished reading the whole book. (completion)" },
            { native: "わすれちゃった！", romanized: "Wasurechatta!", translation: "I forgot! (casual contracted form)" },
            { native: "さいふを なくして しまいました。", romanized: "Saifu wo nakushite shimaimashita.", translation: "I lost my wallet. (unfortunately)" },
            { native: "ぜんぶ 食べちゃった。", romanized: "Zenbu tabechatta.", translation: "I ate it all up. (casual)" },
            { native: "電車に のりおくれて しまいました。", romanized: "Densha ni noriokurete shimaimashita.", translation: "I missed the train. (to my regret)" },
        ]
    },
    {
        id: "ja-g-a2-10",
        level: "A2",
        title: "〜ことができる — Formal Ability",
        explanation: {
            native: `ことができる is a formal way to express ability — 'can do' or 'to be able to do'. It is more formal than the potential verb form (e.g., 食べられる) but very common in writing, announcements, and polite speech.

FORMATION
Verb dictionary form (plain non-past) + ことができます / ことができる

  日本語を 話すことができます。       I can speak Japanese.
  ここで 泳ぐことができますか？       Can we swim here?
  車を うんてんすることができます。   I can drive a car.
  ピアノを ひくことができません。     I can't play the piano.

NEGATIVE: ことができません
  漢字を 読むことができません。       I can't read kanji.
  今日は 来ることができません。       I can't come today.

QUESTION: ことができますか
  日本語を 話すことができますか？    Can you speak Japanese?
  → はい、できます。 / いいえ、できません。

ことができる vs POTENTIAL VERBS
Both express ability but ことができる is more formal:
  話せます。              I can speak.        (potential — everyday speech)
  話すことができます。    I can speak.        (ことができる — formal/polite)

Use potential verbs in conversation; use ことができる in formal writing, announcements, and polite requests.

SIGNS AND ANNOUNCEMENTS — common real-world uses:
  ここで 写真を とることが できません。    Photos cannot be taken here.
  このカードで 支払うことが できます。     You can pay with this card.
  インターネットを 使うことが できます。   You can use the internet.

NOTE ON WORD ORDER
ことができる always follows the dictionary form directly:
  ✓ 日本語を 話すことができます。
  ✗ 日本語が 話すことができます。   (を or が — both acceptable for ability)`,
            target: `ことができる は のうりょくをあらわすていねいなかたちです。かのうどうし（たとえば食べられる）よりもていねいですが、ぶんしょうや ていねいなはなしことばに よく つかわれます。

つくりかた：じしょけい（ふつうひかこけい）＋ ことができます／ことができる
  日本語を 話すことができます。
  ここで 泳ぐことができますか？
  ピアノを ひくことができません。

ひていけい：ことができません
  漢字を 読むことができません。
  今日は 来ることができません。

ことができる vs かのうどうし：
  話せます。（かのうどうし — にちじょうかいわ）
  話すことができます。（ことができる — ていねい/かしこまった）

かんばんや アナウンスのよくある つかいかた：
  ここで 写真を とることができません。
  このカードで 支払うことができます。`
        },
        examples: [
            { native: "日本語を 少し 話すことができます。", romanized: "Nihongo wo sukoshi hanasu koto ga dekimasu.", translation: "I can speak a little Japanese." },
            { native: "ここで 泳ぐことが できますか？", romanized: "Koko de oyogu koto ga dekimasu ka?", translation: "Can we swim here?" },
            { native: "漢字を 読むことが できません。", romanized: "Kanji wo yomu koto ga dekimasen.", translation: "I can't read kanji." },
            { native: "このカードで 支払うことが できますか？", romanized: "Kono kaado de shiharau koto ga dekimasu ka?", translation: "Can I pay with this card?" },
            { native: "ここで 写真を とることが できません。", romanized: "Koko de shashin wo toru koto ga dekimasen.", translation: "You cannot take photos here." },
        ]
    },
    {
        id: "ja-g-a2-11",
        level: "A2",
        title: "Kanji Batch 3 — 話聞読書電車駅店円高安新古",
        explanation: {
            native: `This batch introduces 13 kanji grouped around communication, transport, and shopping — all essential for everyday life in Japan.

GROUP 1 — COMMUNICATION
  話   わ / はな(す)         talk / speak
    話す (はなす)             to speak / to talk
    電話 (でんわ)             telephone

  聞   ぶん / き(く)         hear / listen / ask
    聞く (きく)               to hear / to listen / to ask
    聞こえる (きこえる)       can be heard

  読   どく / よ(む)         read
    読む (よむ)               to read
    読み方 (よみかた)         how to read / reading

  書   しょ / か(く)         write
    書く (かく)               to write
    書き方 (かきかた)         how to write / writing

GROUP 2 — TRANSPORT
  電   でん                   electricity / electric
    電話 (でんわ)             telephone
    電車 (でんしゃ)           train (electric train)

  車   しゃ / くるま          car / vehicle
    車 (くるま)               car
    電車 (でんしゃ)           train

  駅   えき                   station
    駅 (えき)                 station
    東京駅 (とうきょうえき)   Tokyo Station

GROUP 3 — SHOPPING AND MONEY
  店   てん / みせ            shop / store
    店 (みせ)                 shop
    本屋 (ほんや)             bookshop (屋 = shop — introduced at B1)

  円   えん                   yen / circle
    〜円 (〜えん)             〜 yen
    百円 (ひゃくえん)         100 yen

  高   こう / たか(い)        expensive / tall / high
    高い (たかい)             expensive / tall
    高校 (こうこう)           high school

  安   あん / やす(い)        cheap / safe
    安い (やすい)             cheap
    安全 (あんぜん)           safe / safety

GROUP 4 — DESCRIBING THINGS
  新   しん / あたら(しい)    new
    新しい (あたらしい)       new
    新幹線 (しんかんせん)     shinkansen (new trunk line)

  古   こ / ふる(い)          old
    古い (ふるい)             old
    古本 (ふるほん)           used book`,
            target: `このバッチでは コミュニケーション、こうつう、かいもの に かんする 13こ の かんじを しょうかいします。

グループ１ — コミュニケーション
  話（はな・す）：話す、電話
  聞（き・く）：聞く、聞こえる
  読（よ・む）：読む、読み方
  書（か・く）：書く、書き方

グループ２ — こうつう
  電（でん）：電話、電車
  車（くるま・しゃ）：車、電車
  駅（えき）：駅、東京駅

グループ３ — かいもの と おかね
  店（みせ・てん）：店
  円（えん）：〜円、百円
  高（たか・い）：高い、高校
  安（やす・い）：安い、安全

グループ４ — ものをせつめいする
  新（あたら・しい）：新しい、新幹線
  古（ふる・い）：古い、古本`
        },
        examples: [
            { native: "電車で 駅まで 行きます。", romanized: "Densha de eki made ikimasu.", translation: "I go to the station by train. (電車、駅)" },
            { native: "この 店は 安くて 新しいです。", romanized: "Kono mise wa yasukute atarashii desu.", translation: "This shop is cheap and new. (店、安い、新しい)" },
            { native: "日本語を 読んだり 書いたり できますか？", romanized: "Nihongo wo yondari kaitari dekimasu ka?", translation: "Can you read and write Japanese? (読む、書く)" },
            { native: "百円 ショップは 安くて 便利です。", romanized: "Hyakuen shoppu wa yasukute benri desu.", translation: "The 100-yen shop is cheap and convenient. (百円、安い)" },
            { native: "駅の 近くに 古い 本屋が あります。", romanized: "Eki no chikaku ni furui honya ga arimasu.", translation: "There is an old bookshop near the station. (駅、古い)" },
            { native: "電話で 話しました。", romanized: "Denwa de hanashimashita.", translation: "I spoke by phone. (電話、話す)" },
        ]
    },
    {
        id: "ja-g-a2-12",
        level: "A2",
        title: "〜たことがある — Past Experience",
        explanation: {
            native: `たことがある expresses life experience — whether you have (or have never) done something before. It refers to experience in general, not a specific past event.

FORMATION
Verb た-form (plain past) + ことがあります / ことがある
  食べたことがあります       I have eaten (it before)
  行ったことがあります       I have gone / been (there before)
  見たことがあります         I have seen (it before)
  話したことがあります       I have spoken (it before)

NEGATIVE — have never done:
Plain negative + ことがありません / ことがない
  食べたことがありません      I have never eaten it
  行ったことがありません      I have never been there

QUESTION — have you ever done?:
  日本に 行ったことが ありますか？     Have you ever been to Japan?
  → はい、あります。 / いいえ、ありません。
  すしを 食べたことが ありますか？     Have you ever eaten sushi?

TELLING THE EXPERIENCE APART FROM A SIMPLE PAST EVENT
  きのう すしを 食べました。          I ate sushi yesterday. (specific event — past tense)
  すしを 食べたことが あります。      I have eaten sushi (at some point in my life). (experience)

FREQUENCY WITH EXPERIENCE
  一度 (いちど)      once:         一度だけ行ったことがあります。 I've been once.
  何度も (なんども)  many times:   何度も食べたことがあります。  I've eaten it many times.
  まだ〜ない         not yet:      まだ行ったことがありません。   I've never been yet.

COMMON PATTERNS
  〜に 行ったことがありますか？        Have you ever been to 〜?
  〜を 食べたことがありますか？        Have you ever eaten 〜?
  〜を 見たことがありますか？          Have you ever seen 〜?
  〜したことがありますか？             Have you ever done 〜?`,
            target: `たことがある は じんせいのけいけんをあらわします — なにかを まえに したことがあるかどうか（または けいけんがない）。

つくりかた：た-けい（ふつうかこけい）＋ ことがあります／ことがある
  食べたことがあります,  行ったことがあります,  見たことがあります

ひていけい — したことがない：
ふつうひていけい ＋ ことがありません
  食べたことがありません,  行ったことがありません

ぎもんけい：
  日本に 行ったことが ありますか？ → はい、あります。／いいえ、ありません。

けいけんと たんじゅんかこの ちがい：
  きのうすしをたべました。（とくていのできごと — かこけい）
  すしをたべたことがあります。（じんせいのどこかで — けいけん）

よく つかわれる パターン：
  〜に 行ったことがありますか？（〜にいったことがあるか）
  〜を 食べたことがありますか？
  〜したことがありますか？`
        },
        examples: [
            { native: "日本に 行ったことが ありますか？", romanized: "Nihon ni itta koto ga arimasu ka?", translation: "Have you ever been to Japan?" },
            { native: "はい、一度 行ったことが あります。", romanized: "Hai, ichido itta koto ga arimasu.", translation: "Yes, I've been once." },
            { native: "すしを 食べたことが ありません。", romanized: "Sushi wo tabeta koto ga arimasen.", translation: "I've never eaten sushi." },
            { native: "この 映画を 見たことが ありますか？", romanized: "Kono eiga wo mita koto ga arimasu ka?", translation: "Have you ever seen this film?" },
            { native: "スカイダイビングを したことが ありません。", romanized: "Sukaidaibingu wo shita koto ga arimasen.", translation: "I've never gone skydiving." },
            { native: "何度も 食べたことが あります。", romanized: "Nando mo tabeta koto ga arimasu.", translation: "I've eaten it many times." },
        ]
    },
    {
        id: "ja-g-a2-13",
        level: "A2",
        title: "〜つもりです — Intentions and Plans",
        explanation: {
            native: `つもりです expresses a firm intention or plan — something you have decided to do. It is stronger than たいです (want to) and expresses a decision already made.

FORMATION
Verb dictionary form (plain non-past) + つもりです / つもりだ
  行くつもりです         I intend to go / I'm planning to go
  勉強するつもりです     I intend to study
  買うつもりです         I'm planning to buy

NEGATIVE — plan NOT to do something:
Verb plain negative (ない-form) + つもりです
  行かないつもりです     I don't intend to go / I'm not planning to go
  食べないつもりです     I'm not planning to eat it

QUESTION:
  週末は 何を するつもりですか？      What do you intend to do this weekend?
  大学に 行くつもりですか？           Do you intend to go to university?

つもりです vs たいです
  行きたいです。          I want to go.             (desire — wish not yet decided)
  行くつもりです。        I intend to go.            (plan — decision made)

  The difference is the level of commitment:
  たいです = "I'd like to..."    つもりです = "I'm planning to..."

つもりはありません — have no intention of doing:
  けっこんするつもりは ありません。   I have no intention of getting married.
  やめるつもりは ありません。         I have no intention of quitting.

〜と 思っています — I'm thinking of doing (softer than つもり):
  らいねん 日本に 行こうと 思っています。
  I'm thinking of going to Japan next year. (less decided than つもり)`,
            target: `つもりです は けっていした いとや けいかくをあらわします。たいです（〜したい）より つよく、すでに きめたことをしめします。

つくりかた：じしょけい（ふつうひかこけい）＋ つもりです／つもりだ
  行くつもりです,  勉強するつもりです,  買うつもりです

ひていけい — しないつもり：
ふつうひていけい（ない-けい）＋ つもりです
  行かないつもりです,  食べないつもりです

ぎもんけい：
  週末は 何を するつもりですか？

つもりです vs たいです：
  行きたいです。（きぼう — まだきめていないねがい）
  行くつもりです。（けいかく — きめた）

つもりはありません — するいこうがない：
  けっこんするつもりはありません。

〜と 思っています — 〜しようとおもっている（つもりより やわらかい）：
  らいねん 日本に 行こうと 思っています。`
        },
        examples: [
            { native: "らいねん 日本に 行くつもりです。", romanized: "Rainen Nihon ni iku tsumori desu.", translation: "I intend to go to Japan next year." },
            { native: "大学で 日本語を 勉強するつもりです。", romanized: "Daigaku de nihongo wo benkyou suru tsumori desu.", translation: "I'm planning to study Japanese at university." },
            { native: "今日は 残業しないつもりです。", romanized: "Kyou wa zangyou shinai tsumori desu.", translation: "I'm not planning to work overtime today." },
            { native: "週末は 何を するつもりですか？", romanized: "Shuumatsu wa nani wo suru tsumori desu ka?", translation: "What are you planning to do this weekend?" },
            { native: "けっこんするつもりは ありません。", romanized: "Kekkon suru tsumori wa arimasen.", translation: "I have no intention of getting married." },
            { native: "らいねん 日本に 行こうと 思っています。", romanized: "Rainen Nihon ni ikou to omotte imasu.", translation: "I'm thinking of going to Japan next year. (softer than つもり)" },
        ]
    },
    {
        id: "ja-g-a2-14",
        level: "A2",
        title: "〜てもいいです / 〜てはいけません — Permission and Prohibition",
        explanation: {
            native: `Two essential patterns for asking permission, granting it, and expressing prohibition.

〜てもいいです — IT'S OK TO / YOU MAY
Structure: て-form + もいいです
  食べてもいいです。          It's OK to eat. / You may eat.
  入ってもいいですか？        May I come in? / Is it OK to enter?
  ここに すわっても いいですか？  Is it OK to sit here?

ASKING PERMISSION — てもいいですか？:
  しゃしんを とっても いいですか？   May I take a photo?
  まどを あけても いいですか？       May I open the window?
  すこし おくれても いいですか？     Is it OK to be a little late?

GRANTING PERMISSION:
  はい、いいですよ。                 Yes, that's fine. / Yes, you may.
  もちろん、どうぞ。                 Of course, please go ahead.

REFUSING PERMISSION:
  すみません、ちょっと...            Sorry, it's a bit... (polite refusal, left unsaid)
  いいえ、それは ちょっと。          No, that's a bit... (polite)

〜てはいけません — YOU MUST NOT / IT IS NOT ALLOWED
Structure: て-form + はいけません (polite) / てはいけない (plain)
  ここで たばこを すっては いけません。   You must not smoke here.
  しゃしんを とっては いけません。       Photos are not allowed.
  走っては いけません。                    You must not run.

MORE NATURAL IN SIGNS AND RULES — てはいけない / てはだめ:
  はしって はだめ！                   No running!
  ここに すわっては いけません。       Do not sit here.

てもいいです vs てはいけません vs なくてもいいです — summary:
  食べてもいいです。        You may eat. (permission)
  食べてはいけません。      You must not eat. (prohibition)
  食べなくてもいいです。    You don't have to eat. (no obligation — see ja-g-a2-3)`,
            target: `きょかをもとめたり あたえたり、きんしをあらわす ふたつのだいじなこうぞう。

〜てもいいです — してもよい／きょかされている
こうぞう：て-けい ＋ もいいです
  食べてもいいです。,  入ってもいいですか？

きょかをもとめる — てもいいですか？：
  しゃしんをとってもいいですか？
  まどをあけてもいいですか？

きょかをあたえる：
  はい、いいですよ。／ もちろん、どうぞ。

〜てはいけません — してはならない／きんし
こうぞう：て-けい ＋ はいけません
  ここでたばこをすってはいけません。
  しゃしんをとってはいけません。

てもいいです vs てはいけません vs なくてもいいです のまとめ：
  食べてもいいです。（きょか）
  食べてはいけません。（きんし）
  食べなくてもいいです。（ぎむなし）`
        },
        examples: [
            { native: "しゃしんを とっても いいですか？", romanized: "Shashin wo totte mo ii desu ka?", translation: "May I take a photo?" },
            { native: "はい、いいですよ。どうぞ。", romanized: "Hai, ii desu yo. Douzo.", translation: "Yes, that's fine. Go ahead." },
            { native: "ここで たばこを すっては いけません。", romanized: "Koko de tabako wo sutte wa ikemasen.", translation: "You must not smoke here." },
            { native: "まどを あけても いいですか？", romanized: "Mado wo akete mo ii desu ka?", translation: "May I open the window?" },
            { native: "授業中に 電話を 使っては いけません。", romanized: "Jugyouchuu ni denwa wo tsukatte wa ikemasen.", translation: "You must not use your phone during class." },
            { native: "すこし おくれても いいですか？", romanized: "Sukoshi okurete mo ii desu ka?", translation: "Is it OK to be a little late?" },
        ]
    },
    {
        id: "ja-g-a2-15",
        level: "A2",
        title: "あげる / もらう / くれる — Giving and Receiving",
        explanation: {
            native: `Japanese has three distinct verbs for giving and receiving. The choice depends on the direction of the action relative to the speaker — this is one of the most uniquely Japanese grammatical features.

THE THREE VERBS

あげる — the giver moves something away from the speaker's circle:
  I → someone else, or someone → someone else (neither is the speaker)
  私は 友だちに 本を あげました。     I gave a book to my friend.
  田中さんは 山田さんに 花を あげた。 Tanaka gave Yamada flowers.

もらう — the receiver gets something (speaker or someone close receives):
  I receive from someone, or someone receives from someone else
  私は 友だちに 本を もらいました。   I received a book from my friend.
  田中さんに 本を もらいました。      I received a book from Tanaka.
  Note: もらう uses に for the giver (not から — though から is also acceptable)

くれる — someone gives TO the speaker or speaker's close circle:
  Someone else → me / my family / my in-group
  友だちが 私に 本を くれました。     My friend gave me a book.
  先生が くれた 本です。              This is the book my teacher gave (me).

THE KEY DISTINCTION — perspective
  あげる: I give out / moves away from me
  もらう: I receive / comes toward me
  くれる: given to me / my circle (speaker is always the recipient)

SAME SITUATION, THREE WAYS TO SAY IT:
  私は 田中さんに 本を あげた。           I gave Tanaka a book. (あげる)
  私は 田中さんに 本を もらった。         I received a book from Tanaka. (もらう)
  田中さんが 私に 本を くれた。           Tanaka gave me a book. (くれる)

WITH て-FORM — doing something for someone:
  てあげる → doing something for someone (away from speaker)
  てもらう → having someone do something for you
  てくれる → someone does something for you (speaker benefits)

  友だちに 教えてあげました。              I taught my friend. (I did it for them)
  友だちに 教えてもらいました。            I had my friend teach me. (they did it for me)
  友だちが 教えてくれました。              My friend taught me. (they did it for me — same meaning as above, different focus)`,
            target: `にほんごには あげる・もらう・くれる という さんつの どうしが あり、はなしてとの かんけいによって つかいわけます。

みっつの どうし：

あげる — はなしての えん から でていく（あたえるひとがはなして、または はなして以外のひと）：
  私は 友だちに 本を あげました。（わたし → ともだち）
  田中さんは 山田さんに 花を あげた。

もらう — うけとる（はなしてまたははなしてにちかいひと）：
  私は 友だちに 本を もらいました。（わたし ← ともだち）

くれる — はなしてまたははなしてのえんに あたえる：
  友だちが 私に 本を くれました。（ともだち → わたし）

おなじじょうきょう、さんつのいいかた：
  私は 田中さんに 本を あげた。（あげる）
  私は 田中さんに 本を もらった。（もらう）
  田中さんが 私に 本を くれた。（くれる）

て-けいで — だれかのために〜する：
  てあげる → だれかのためにする（はなしてから はなれる）
  てもらう → だれかにしてもらう（はなしてがうけとる）
  てくれる → だれかがはなしてのためにする（はなしてがうける）`
        },
        examples: [
            { native: "友だちに プレゼントを あげました。", romanized: "Tomodachi ni purezento wo agemashita.", translation: "I gave a present to my friend. (あげる — I → friend)" },
            { native: "母から お金を もらいました。", romanized: "Haha kara okane wo moraimashita.", translation: "I received money from my mother. (もらう — mother → me)" },
            { native: "田中さんが 私に 本を くれました。", romanized: "Tanaka-san ga watashi ni hon wo kuremashita.", translation: "Tanaka gave me a book. (くれる — someone → me)" },
            { native: "友だちに 教えて あげました。", romanized: "Tomodachi ni oshiete agemashita.", translation: "I taught my friend. (てあげる — I did it for them)" },
            { native: "先生に 説明して もらいました。", romanized: "Sensei ni setsumei shite moraimashita.", translation: "I had my teacher explain it to me. (てもらう)" },
            { native: "友だちが 手伝って くれました。", romanized: "Tomodachi ga tetsudatte kuremashita.", translation: "My friend helped me. (てくれる — they did it for me)" },
        ]
    },
    {
        id: "ja-g-a2-16",
        level: "A2",
        title: "〜と思います / 〜のほうが好きです — Opinions and Preferences",
        explanation: {
            native: `Two essential patterns for expressing personal opinions and preferences.

〜と思います — I THINK THAT...
Structure: plain form + と思います
The verb or adjective before と must be in plain form — NOT the polite ます/です form.

  おもしろいと思います。              I think it's interesting. (い-adj — plain)
  むずかしいと思います。              I think it's difficult.
  かれは 来ると思います。             I think he'll come. (verb — plain)
  これは 正しいと思います。           I think this is correct.
  おいしくないと思います。            I don't think it's delicious. (negative plain)
  かのじょは 来ないと思います。       I don't think she'll come.

Note: 思います is the polite form — the clause before と stays in plain form regardless.

ASKING OPINIONS:
  どう思いますか？                    What do you think?
  〜についてどう思いますか？          What do you think about 〜?

SOFTENING OPINIONS:
  〜と思います is more tentative than a direct statement:
  むずかしいです。      It's difficult. (definite)
  むずかしいと思います。 I think it's difficult. (opinion, not absolute)

〜のほうが好きです — I PREFER / I LIKE 〜 BETTER
Structure: A より B のほうが好きです = I prefer B to A / I like B better than A

  犬より ねこのほうが 好きです。       I like cats better than dogs.
  なつより ふゆのほうが 好きです。    I prefer winter to summer.
  コーヒーより おちゃのほうが 好きです。 I prefer tea to coffee.

ASKING FOR A PREFERENCE:
  AとBと どちらのほうが 好きですか？   Which do you prefer, A or B?
  → Bのほうが 好きです。              I prefer B.

COMBINING BOTH PATTERNS:
  私は ねこのほうが 好きだと思います。
  I think I prefer cats. (combining preference + opinion)`,
            target: `〜と思います と 〜のほうが好きです は こじんのいけんやこのみをあらわすだいじなこうぞうです。

〜と思います — 〜とおもう
こうぞう：ふつうけい ＋ と思います
と の まえのどうしやけいようしは ふつうけいにする — ていねいけい（ます/です）にしない。

  おもしろいと思います。（い-けいようし — ふつうけい）
  かれはくると思います。（どうし — ふつうけい）
  おいしくないと思います。（ひていふつうけい）
  かのじょはこないと思います。

いけんをたずねる：
  どう思いますか？／ 〜についてどう思いますか？

いけんをやわらげる：
  むずかしいです。（だんてい）
  むずかしいと思います。（いけん、かならずしもたしかでない）

〜のほうが好きです — 〜がすき、〜のほうがいい
こうぞう：A より B のほうが好きです = BのほうがAよりすき

  犬より ねこのほうが 好きです。
  なつより ふゆのほうが 好きです。

このみをたずねる：
  AとBと どちらのほうが 好きですか？ → Bのほうが 好きです。`
        },
        examples: [
            { native: "この えいがは おもしろいと 思います。", romanized: "Kono eiga wa omoshiroi to omoimasu.", translation: "I think this film is interesting." },
            { native: "あしたは 雨が ふると 思います。", romanized: "Ashita wa ame ga furu to omoimasu.", translation: "I think it will rain tomorrow." },
            { native: "犬より ねこのほうが 好きです。", romanized: "Inu yori neko no hou ga suki desu.", translation: "I like cats better than dogs." },
            { native: "なつより ふゆのほうが 好きです。", romanized: "Natsu yori fuyu no hou ga suki desu.", translation: "I prefer winter to summer." },
            { native: "どちらのほうが 好きですか？", romanized: "Dochira no hou ga suki desu ka?", translation: "Which do you prefer?" },
            { native: "かのじょは 来ないと 思います。", romanized: "Kanojo wa konai to omoimasu.", translation: "I don't think she'll come. (negative plain form)" },
        ]
    },
    {
        id: "ja-g-a2-17",
        level: "A2",
        title: "Kanji Batch 4 — 友家国会社仕事毎週分半前後右左",
        explanation: {
            native: `This batch introduces 15 kanji for people, places, work, and time — all essential for talking about daily life and schedules.

GROUP 1 — PEOPLE AND PLACES
  友   ゆう / とも            friend
    友だち (ともだち)          friend(s)
    友人 (ゆうじん)            friend (formal)

  家   か / いえ / うち        house / home / family
    家 (いえ/うち)             house / home
    家族 (かぞく)              family

  国   こく / くに             country / nation
    国 (くに)                  country
    外国 (がいこく)            foreign country
    外国語 (がいこくご)        foreign language

GROUP 2 — SOCIETY AND WORK
  会   かい / あ(う)           meet / society / meeting
    会う (あう)                to meet
    会社 (かいしゃ)            company
    会議 (かいぎ)              meeting

  社   しゃ                    company / society
    会社 (かいしゃ)            company
    社会 (しゃかい)            society

  仕   し                      serve / work
    仕事 (しごと)              work / job

  事   じ / こと               thing / matter / work
    仕事 (しごと)              work / job
    食事 (しょくじ)            meal

GROUP 3 — TIME (DETAILED)
  毎   まい                    every
    毎日 (まいにち)            every day
    毎週 (まいしゅう)          every week
    毎月 (まいつき)            every month
    毎年 (まいとし/まいねん)   every year

  週   しゅう / しゅ           week
    今週 (こんしゅう)          this week
    来週 (らいしゅう)          next week
    先週 (せんしゅう)          last week

  分   ふん / ぶん / わ(かる)  minute / understand
    〜分 (〜ふん/〜ぷん)       〜 minutes
    分かる (わかる)            to understand

  半   はん                    half
    〜時半 (〜じはん)          half past 〜
    半分 (はんぶん)            half

GROUP 4 — DIRECTION AND POSITION
  前   ぜん / まえ             front / before
    前 (まえ)                  front / before
    午前 (ごぜん)              a.m.

  後   ご / こう / あと / うし after / behind
    後で (あとで)              later / after
    午後 (ごご)                p.m.

  右   う / みぎ               right
    右 (みぎ)                  right (direction)
    右側 (みぎがわ)            right side

  左   さ / ひだり             left
    左 (ひだり)                left (direction)
    左側 (ひだりがわ)          left side`,
            target: `このバッチでは ひと、ばしょ、しごと、じかん に かんする 15こ の かんじを しょうかいします。

グループ１ — ひと と ばしょ
  友（とも）：友だち、友人
  家（いえ/うち）：家、家族
  国（くに）：国、外国、外国語

グループ２ — しゃかい と しごと
  会（あう/かい）：会う、会社、会議
  社（しゃ）：会社、社会
  仕（し）：仕事
  事（こと/じ）：仕事、食事

グループ３ — じかん（くわしく）
  毎（まい）：毎日、毎週、毎月、毎年
  週（しゅう）：今週、来週、先週
  分（ふん/わかる）：〜分、分かる
  半（はん）：〜時半、半分

グループ４ — ほうこう と いち
  前（まえ/ぜん）：前、午前
  後（あと/ご）：後で、午後
  右（みぎ）：右、右側
  左（ひだり）：左、左側`
        },
        examples: [
            { native: "毎週 月曜日に 会社に 行きます。", romanized: "Maishuu getsuyoubi ni kaisha ni ikimasu.", translation: "I go to the company every Monday. (毎週、会社)" },
            { native: "友だちの 家に 行ったことが あります。", romanized: "Tomodachi no ie ni itta koto ga arimasu.", translation: "I have been to my friend's house. (友、家)" },
            { native: "仕事は 午前 九時から 午後 六時まで です。", romanized: "Shigoto wa gozen kuji kara gogo rokuji made desu.", translation: "Work is from 9 a.m. to 6 p.m. (仕事、午前、午後)" },
            { native: "右に まがって ください。", romanized: "Migi ni magatte kudasai.", translation: "Please turn right. (右)" },
            { native: "来週 国に かえるつもりです。", romanized: "Raishuu kuni ni kaeru tsumori desu.", translation: "I intend to return to my country next week. (来週、国)" },
            { native: "三十分 まってください。", romanized: "Sanjuppun matte kudasai.", translation: "Please wait thirty minutes. (分)" },
        ]
    },
    {
        id: "ja-g-a2-18",
        level: "A2",
        title: "Graduated Polite Requests",
        explanation: {
            native: `Japanese has a graduated system for making requests. Choosing the right level matters — too direct with a superior sounds rude, too formal with a close friend sounds strange.

LEVEL 1 — DIRECT (て-form + ください)
Standard polite request — appropriate for most everyday situations, instructions, teachers, service staff:
  もう 一度 言って ください。         Please say it once more.
  ゆっくり 話して ください。          Please speak slowly.
  ここに 名前を 書いて ください。     Please write your name here.
  Already introduced in lesson ja-g-a1-26.

LEVEL 2 — SOFTER REQUEST (て-form + くれませんか)
Asks if the person would do something for you — slightly softer than ください, more of a question:
  ちょっと 待って くれませんか？      Would you wait a moment?
  窓を 開けて くれませんか？          Would you open the window?
  手伝って くれませんか？             Would you help me?

LEVEL 3 — POLITE REQUEST (て-form + もらえませんか)
More formal — suitable for people you don't know well, customers to staff:
  説明して もらえませんか？           Would you explain it for me?
  もう 一度 見せて もらえませんか？   Could you show me once more?

LEVEL 4 — VERY POLITE (て-form + いただけませんか)
The most formal — used with superiors, strangers in formal settings, written requests:
  ここに サインして いただけませんか？  Would you be so kind as to sign here?
  少し 待って いただけませんか？        Could I trouble you to wait a moment?

NEGATIVE REQUEST — please don't:
て-form + ないで ください (already introduced ja-g-a1-26):
  写真を 撮らないで ください。         Please don't take photos.
  走らないで ください。                Please don't run.

SUMMARY
  〜てください            standard polite
  〜てくれませんか        softer request
  〜てもらえませんか      formal request
  〜ていただけませんか    very formal / most polite`,
            target: `にほんごには ていねいさの ちがう いくつかの たのみかたが あります。

レベル１ — ちょくせつ（て-けい ＋ ください）
ほとんどの にちじょうてきな じょうきょうに てきした ていねいなたのみ：
  もう 一度 言って ください。
  ゆっくり 話して ください。

レベル２ — やわらかいたのみ（て-けい ＋ くれませんか）
ていどが やわらかい、より しつもんのかたち：
  ちょっと 待って くれませんか？
  手伝って くれませんか？

レベル３ — ていねいなたのみ（て-けい ＋ もらえませんか）
しらないひとや きゃくむけに よりかしこまった：
  説明して もらえませんか？

レベル４ — とても ていねい（て-けい ＋ いただけませんか）
もっともかしこまった — めうえのひとや かしこまったばめんで：
  ここに サインして いただけませんか？

まとめ：
  〜てください（ふつうていねい）→〜てくれませんか（やわらかい）
  →〜てもらえませんか（ていねい）→〜ていただけませんか（とてもていねい）`
        },
        examples: [
            { native: "もう 一度 言って ください。", romanized: "Mou ichido itte kudasai.", translation: "Please say it once more. (standard)" },
            { native: "ちょっと 待って くれませんか？", romanized: "Chotto matte kuremasen ka?", translation: "Would you wait a moment? (softer)" },
            { native: "窓を 開けて もらえませんか？", romanized: "Mado wo akete moraemasen ka?", translation: "Could you open the window for me? (formal)" },
            { native: "ここに サインして いただけませんか？", romanized: "Koko ni sain shite itadakemasen ka?", translation: "Would you be so kind as to sign here? (very formal)" },
            { native: "写真を 撮らないで ください。", romanized: "Shashin wo toranaide kudasai.", translation: "Please don't take photos. (negative request)" },
            { native: "ゆっくり 話して くれませんか？", romanized: "Yukkuri hanashite kuremasen ka?", translation: "Would you speak slowly? (softer than ください)" },
        ]
    },
    {
        id: "ja-g-a2-19",
        level: "A2",
        title: "Plain Form in Clauses and Relative Clauses",
        explanation: {
            native: `At A1 you learned to recognise the plain form (lesson ja-g-a1-33). At A2 it becomes essential for building complex sentences — connecting clauses, modifying nouns, and expressing opinions and reports.

PLAIN FORM REVIEW
  Polite form    Plain present   Plain past    Plain negative
  食べます       食べる          食べた        食べない
  行きます       行く            行った        行かない
  します         する            した          しない
  きます         くる            きた          こない
  です (noun)    だ              だった        じゃない

MODIFYING NOUNS — relative clauses
In Japanese, modifying clauses go BEFORE the noun (opposite of English):
  [modifier] + noun

Plain form directly before a noun creates a relative clause:
  昨日 買った 本です。              It's the book I bought yesterday.
  今 読んでいる 本は おもしろいです。 The book I'm reading now is interesting.
  日本に 行きたいと 思っている 人     A person who wants to go to Japan
  私が 作った 料理です。             It's the dish I made.

IN CLAUSES AFTER VERBS OF THINKING / SAYING
Plain form + と思います (I think that — see ja-g-a2-16):
  おいしいと 思います。             I think it's delicious.
  かれは 来ると 思います。          I think he'll come.

Plain form + と言いました (said that):
  先生は むずかしいと 言いました。  The teacher said it's difficult.
  かれは 来ないと 言いました。      He said he's not coming.

Plain form + から (because — casual):
  おなかが すいたから、食べます。   Because I'm hungry, I'll eat.

Plain form + のに (even though / despite):
  雨が ふっているのに、出かけます。 Even though it's raining, I'm going out.

Plain form + ので (because — polite):
  仕事が あるので、行けません。     Because I have work, I can't go.

KEY RULE — た-form OR dictionary form before nouns:
  食べた + もの = 食べたもの        what I ate / the thing I ate
  食べる + もの = 食べるもの       something to eat / food to eat
  Both are correct — た-form for past, dictionary form for present/future.`,
            target: `A1 で ふつうけいを みとめることを べんきょうしました（レッスン ja-g-a1-33）。A2 では それが ふくさつなぶんをつくるために ひつようになります。

ふつうけいの おさらい：
  食べます → 食べる（ひかこ）→ 食べた（かこ）→ 食べない（ひてい）
  行きます → 行く → 行った → 行かない
  です（めいし）→ だ → だった → じゃない

めいしをしゅうしょくする — かんけいせつ
にほんごでは しゅうしょくせつは めいしの まえにくる（えいごとぎゃく）：

ふつうけい ＋ めいし = かんけいせつ
  昨日 買った 本です。（きのうかった ほん）
  今 読んでいる 本は おもしろいです。
  私が 作った 料理です。

どうし「おもう/いう」のあとのせつで
ふつうけい ＋ と思います：
  おいしいと 思います。／ かれはくると 思います。

ふつうけい ＋ と言いました：
  先生はむずかしいと 言いました。

ふつうけい ＋ から（りゆう — くだけた）：
  おなかがすいたから、食べます。

ふつうけい ＋ ので（りゆう — ていねい）：
  仕事があるので、行けません。`
        },
        examples: [
            { native: "昨日 買った 本は おもしろいです。", romanized: "Kinou katta hon wa omoshiroi desu.", translation: "The book I bought yesterday is interesting. (relative clause)" },
            { native: "今 読んでいる 本は むずかしいです。", romanized: "Ima yonde iru hon wa muzukashii desu.", translation: "The book I'm reading now is difficult." },
            { native: "先生は あしたは むずかしいと 言いました。", romanized: "Sensei wa ashita wa muzukashii to iimashita.", translation: "The teacher said tomorrow will be difficult." },
            { native: "雨が ふっているのに、出かけます。", romanized: "Ame ga futte iru noni, dekakemasu.", translation: "Even though it's raining, I'm going out." },
            { native: "仕事が あるので、行けません。", romanized: "Shigoto ga aru node, ikemasen.", translation: "Because I have work, I can't go." },
            { native: "私が 作った 料理を 食べて ください。", romanized: "Watashi ga tsukutta ryouri wo tabete kudasai.", translation: "Please eat the dish I made." },
        ]
    },
    {
        id: "ja-g-a2-20",
        level: "A2",
        title: "Number + も / Number + しか — Emphasis with Quantities",
        explanation: {
            native: `Two particles combine with numbers to add strong emphasis — one for surprising largeness, one for surprisingly small amounts.

Number + も — AS MANY AS / AS MUCH AS (emphasises a large or surprising quantity)
も after a number means 'as many/much as' — the speaker finds the quantity large or surprising:
  三時間も まちました。              I waited a whole three hours. (surprisingly long)
  百人も 来ました。                  As many as a hundred people came.
  五千円も はらいました。            I paid as much as 5,000 yen.
  十回も 見ました。                  I watched it as many as ten times.

The surprise or emphasis is key — the speaker considers the number notable.

Number + しか + negative — ONLY / NOTHING BUT (emphasises small or insufficient quantity)
しか always requires a negative verb. Together they mean 'only X' with a sense of insufficiency:
  三時間しか ねませんでした。        I only slept three hours. (not enough)
  百円しか ありません。               I only have 100 yen. (not enough)
  一回しか 会ったことが ありません。 I've only met her once.
  少ししか わかりません。            I only understand a little.

COMPARISON WITH だけ (only — neutral)
しか (with negative) expresses insufficiency or regret.
だけ (with affirmative) expresses 'only' neutrally — no complaint implied:
  百円しか ありません。   I only have 100 yen. (not enough — regret)
  百円だけ あります。     I have only 100 yen. (neutral statement)

PATTERN SUMMARY
  Number + も + affirmative verb     → as many as X (surprisingly large)
  Number + しか + negative verb      → only X (insufficiently small)
  Number + だけ + affirmative verb   → only X (neutral)

COMMON EXAMPLES
  もう 少ししか ありません。          There's only a little left.
  一つしか のこっていません。        Only one is left.
  何時間も 勉強しました。            I studied for many hours.
  何度も 言いました。                I said it many times.`,
            target: `ふたつのじょしが すうじと くみあわさって つよい きょうちょうをあらわします。

すうじ ＋ も — 〜も（おどろくほど おおい/おおきい）
すうじのあとの も は「〜も」をいみします — はなしてが そのかずを おおきい/おどろきと かんじている：
  三時間も まちました。（おどろくほど ながい）
  百人も 来ました。
  五千円も はらいました。

すうじ ＋ しか ＋ ひていけい — しか（おどろくほど すくない/たりない）
しか は つねに ひていどうしが ひつよう。あわせて「たった X だけ」のいみで たりなさや ざんねんをしめす：
  三時間しか ねませんでした。（じゅうぶんでない）
  百円しか ありません。
  少ししか わかりません。

だけ との ちがい（「だけ」— ちゅうせいな「だけ」）
  百円しか ありません。（たりない — ざんねん）
  百円だけ あります。（ちゅうせいなひょうげん）

まとめ：
  すうじ ＋ も ＋ こうていどうし → X も（おどろくほどおおい）
  すうじ ＋ しか ＋ ひていどうし → X しか（おどろくほどすくない）
  すうじ ＋ だけ ＋ こうていどうし → X だけ（ちゅうせい）`
        },
        examples: [
            { native: "三時間も まちました！", romanized: "San-jikan mo machimashita!", translation: "I waited a whole three hours! (も — surprisingly large)" },
            { native: "三時間しか ねませんでした。", romanized: "San-jikan shika nemasen deshita.", translation: "I only slept three hours. (しか — insufficiently small)" },
            { native: "百円しか ありません。", romanized: "Hyakuen shika arimasen.", translation: "I only have 100 yen." },
            { native: "何時間も 勉強しました。", romanized: "Nanjikan mo benkyou shimashita.", translation: "I studied for many hours. (も — emphasis on long time)" },
            { native: "少ししか 分かりません。", romanized: "Sukoshi shika wakarimasen.", translation: "I only understand a little." },
            { native: "一回しか 会ったことが ありません。", romanized: "Ikkai shika atta koto ga arimasen.", translation: "I've only met her once." },
        ]
    },
    {
        id: "ja-g-a2-21",
        level: "A2",
        title: "〜でしょう / 〜だろう — Probability and Conjecture",
        explanation: {
            native: `でしょう (polite) and だろう (plain) express probability, conjecture, and seeking agreement. They are very common in weather forecasts, expressing uncertainty, and inviting the listener to agree.

FORMATION
Attach でしょう / だろう to the plain form of verbs and adjectives, or directly to nouns:
  雨が ふるでしょう。         It will probably rain. (verb)
  むずかしいでしょう。        It's probably difficult. (い-adj — keep い)
  げんきでしょう。            He's probably fine. (な-adj — drop だ)
  がくせいでしょう。          He's probably a student. (noun — drop だ)

Past conjecture — plain past form + でしょう:
  たいへんだったでしょう。    It was probably tough. (for you)
  疲れたでしょう。            You're probably tired.

でしょう vs だろう
  でしょう — polite, common in news, weather, formal speech
  だろう — plain/casual, used in informal conversation and writing
  Both mean the same thing — register is the only difference.

THREE MAIN USES

1. PROBABILITY / CONJECTURE (I think it's probably...):
  あしたは 雨でしょう。        It will probably rain tomorrow.
  かれは 来ないでしょう。      He probably won't come.
  たぶん むずかしいでしょう。  It's probably difficult.

2. SEEKING AGREEMENT (isn't it? / don't you think? — rising intonation):
  いい 天気でしょう？          It's nice weather, isn't it?
  むずかしかったでしょう？     It was difficult, wasn't it?
  Similar to ね but slightly stronger — inviting confirmation.

3. RHETORICAL / REASONING (of course... / naturally...):
  そんなことは 分かるでしょう。  Of course you'd know something like that.

COMMON COMBINATIONS WITH たぶん / きっと:
  たぶん (probably):     たぶん 大丈夫でしょう。    It'll probably be fine.
  きっと (surely):       きっと 来るでしょう。       Surely he'll come.
  おそらく (presumably): おそらく むずかしいでしょう。 Presumably it's difficult.`,
            target: `でしょう（ていねい）と だろう（ふつう）は がいぜんせい、すいそく、どうい をもとめることを あらわします。

つくりかた：
ふつうけいのどうしやけいようし、またはめいしに でしょう/だろう をつける：
  雨がふるでしょう。（どうし）
  むずかしいでしょう。（い-けいようし — い をのこす）
  げんきでしょう。（な-けいようし — だ をはずす）
  がくせいでしょう。（めいし — だ をはずす）

かこのすいそく — ふつうかこけい ＋ でしょう：
  たいへんだったでしょう。
  疲れたでしょう。

でしょう vs だろう：
  でしょう — ていねい、ニュース・てんきよほう・かしこまったはなしで よく つかう
  だろう — くだけた/ふつう、にちじょうかいわや ぶんしょうで つかう

みっつのおもなつかいかた：
1. がいぜんせい/すいそく：あしたは 雨でしょう。
2. どういをもとめる（〜でしょう？のぼりイントネーション）：いい 天気でしょう？
3. とうぜん/りくつ：そんなことは 分かるでしょう。

よく つかう くみあわせ：
  たぶん 大丈夫でしょう。／ きっと 来るでしょう。`
        },
        examples: [
            { native: "あしたは 雨でしょう。", romanized: "Ashita wa ame deshou.", translation: "It will probably rain tomorrow. (weather forecast)" },
            { native: "たぶん むずかしいでしょう。", romanized: "Tabun muzukashii deshou.", translation: "It's probably difficult." },
            { native: "かれは 来ないでしょう。", romanized: "Kare wa konai deshou.", translation: "He probably won't come." },
            { native: "いい 天気でしょう？", romanized: "Ii tenki deshou?", translation: "It's nice weather, isn't it? (seeking agreement)" },
            { native: "たいへんだったでしょう。", romanized: "Taihen datta deshou.", translation: "It was probably tough (for you). (sympathy)" },
            { native: "きっと 大丈夫でしょう。", romanized: "Kitto daijoubu deshou.", translation: "It'll surely be fine." },
        ]
    },
    {
        id: "ja-g-a2-22",
        level: "A2",
        title: "こと と の — Verb Nominalisation",
        explanation: {
            native: `Nominalisation turns a verb or verb phrase into a noun — it makes an action into a 'thing'. In Japanese, both こと and の can do this, but they are used in different situations.

FORMING A NOMINAL CLAUSE
Both こと and の attach to the plain form (dictionary form or た-form):
  食べること / 食べるの            eating / the act of eating
  行くこと / 行くの                going / the act of going
  日本語を 話すこと / 話すの      speaking Japanese

こと — ABSTRACT, GENERAL, OR FORMAL NOMINALISATION
Use こと for:

1. General truths or abstract statements:
  日本語を 話すことは たのしいです。     Speaking Japanese is fun.
  早起きすることは 体に いいです。       Getting up early is good for your body.

2. After ことができる (ability — see ja-g-a2-10):
  泳ぐことが できます。                  I can swim.

3. After たことがある (experience — see ja-g-a2-12):
  日本に 行ったことが あります。         I have been to Japan.

4. After ことにする (decide to do):
  早く 寝ることに しました。             I decided to go to bed early.

5. After ことになる (it has been decided / turns out that):
  来月から 東京に 住むことに なりました。 It has been decided that I'll live in Tokyo from next month.

の — EXPERIENTIAL, PERCEPTUAL, OR EXPLANATORY NOMINALISATION
Use の for:

1. Seen or heard directly (perceptual):
  かれが 走っているのを 見ました。       I saw him running. (saw it directly)
  音楽が 聞こえるのが わかります。       I can tell that music can be heard.

2. Explaining a reason (のです / んです — see below):
  おなかが いたいんです。                The thing is, my stomach hurts. (explanation)

3. Asking for explanation:
  どうして 行かないんですか？            Why is it that you're not going?

のです / んです — EXPLANATION AND EMPHASIS
This is one of the most natural patterns in Japanese conversation. It adds the nuance of explaining, justifying, or sharing context:
  Polite: 〜のです / 〜んです
  Plain: 〜のだ / 〜んだ

  おそくなったんです、すみません。       I'm sorry, the thing is I'm late.
  つかれているんです。                   The thing is, I'm tired. (explaining my state)
  どこに 行くんですか？                  Where is it that you're going? (curious/seeking explanation)`,
            target: `めいしかは どうしや どうしく を めいし に かえます — こうい を「もの/こと」に します。にほんごでは こと と の の どちらも これが できますが、ちがう じょうきょうで つかわれます。

めいしせつの つくりかた：
こと と の は ふつうけい（じしょけいまたはた-けい）につく：
  食べること / 食べるの,  行くこと / 行くの

こと — ちゅうしょう・いっぱん・かしこまっためいしか
こと を つかう ばあい：

1. いっぱんてきなしんり/ちゅうしょうてきなひょうげん：
  日本語を 話すことは たのしいです。
  早起きすることは 体に いいです。

2. ことができる（のうりょく）のあと：泳ぐことが できます。

3. たことがある（けいけん）のあと：日本に 行ったことが あります。

4. ことにする（きめる）のあと：早く 寝ることに しました。

の — けいけん・ちかく・せつめいのめいしか
の を つかう ばあい：

1. じかんにみたりきいたりしたこと：
  かれが 走っているのを 見ました。

2. りゆうのせつめい：おなかが いたいんです。

のです/んです — せつめいときょうちょう
  おそくなったんです、すみません。
  つかれているんです。
  どこに 行くんですか？`
        },
        examples: [
            { native: "日本語を 話すことは たのしいです。", romanized: "Nihongo wo hanasu koto wa tanoshii desu.", translation: "Speaking Japanese is fun. (こと — general/abstract)" },
            { native: "かれが 走っているのを 見ました。", romanized: "Kare ga hashitte iru no wo mimashita.", translation: "I saw him running. (の — perceptual, saw directly)" },
            { native: "早く 寝ることに しました。", romanized: "Hayaku neru koto ni shimashita.", translation: "I decided to go to bed early. (ことにする)" },
            { native: "つかれているんです。", romanized: "Tsukarete iru n desu.", translation: "The thing is, I'm tired. (んです — explaining)" },
            { native: "どこに 行くんですか？", romanized: "Doko ni iku n desu ka?", translation: "Where is it that you're going? (んです — seeking explanation)" },
            { native: "来月から 東京に 住むことに なりました。", romanized: "Raigetsu kara Tokyo ni sumu koto ni narimashita.", translation: "It has been decided that I'll live in Tokyo from next month. (ことになる)" },
        ]
    },
]