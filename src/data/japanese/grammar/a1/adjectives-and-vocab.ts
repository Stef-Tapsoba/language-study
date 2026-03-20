import { GrammarLesson } from "../../../../types"

export const adjectivesAndVocabLessons: GrammarLesson[] = [
    {
        id: "ja-g-a1-13",
        level: "A1",
        title: "〜たい: Wanting to Do Something (A1 Bridge)",
        explanation: "To express a desire to do something ('I want to do X'), take the ます-form stem (the part before ます) and add たいです. Example: 食べます → 食べ + たいです = 食べたいです (I want to eat). This form only expresses the speaker's own first-person wants in statements. The object can take が or を — が is slightly more natural with たい. To ask what someone wants to do: 何がしたいですか？ The negative is たくないです (don't want to do). This is the last A1 unit and bridges into A2 grammar.",
        examples: [
            { native: "みずがのみたいです。", romanized: "Mizu ga nomitai desu.", translation: "I want to drink water." },
            { native: "にほんにいきたいです。", romanized: "Nihon ni ikitai desu.", translation: "I want to go to Japan." },
            { native: "すしがたべたいです。", romanized: "Sushi ga tabetai desu.", translation: "I want to eat sushi." },
            { native: "なにがしたいですか？", romanized: "Nani ga shitai desu ka?", translation: "What do you want to do?" },
            { native: "きょうはなにもしたくないです。", romanized: "Kyou wa nanimo shitakunai desu.", translation: "I don't want to do anything today." }
        ]
    },
    {
        id: "ja-g-a1-15",
        level: "A1",
        title: "Likes & Dislikes: 好き / 嫌い",
        explanation: `好き (suki) and 嫌い (kirai) express liking and disliking in Japanese. They are na-adjectives — they use な when placed before a noun, and they follow the XはYが好きです pattern.

STRUCTURE:
  [Person] は [Thing] が 好き です。= [Person] likes [Thing].
  [Person] は [Thing] が 嫌い です。= [Person] dislikes [Thing].

KEY POINT — が not を:
Japanese uses が (not を) to mark the thing you like. This is different from English where "like" takes a direct object. Don't say ×コーヒーを好きです — say ○コーヒーが好きです.

DEGREES:
  大好き (daisuki) = love / really like
  好き (suki) = like
  あまり好きじゃない (amari suki ja nai) = don't really like
  嫌い (kirai) = dislike
  大嫌い (daikirai) = really dislike / hate

QUESTIONS:
  〜が好きですか？ = Do you like ~?
  どんな〜が好きですか？ = What kind of ~ do you like?

NOTE: 好き and 嫌い can also describe activities when followed by の or combined with verb nominalisation — but at A1, just use them with nouns.`,
        examples: [
            { native: "コーヒーがすきです。", romanized: "Koohii ga suki desu.", translation: "I like coffee. (が marks the thing liked)" },
            { native: "さかながきらいです。", romanized: "Sakana ga kirai desu.", translation: "I dislike fish." },
            { native: "すしがだいすきです！", romanized: "Sushi ga daisuki desu!", translation: "I love sushi!" },
            { native: "やさいはあまりすきじゃないです。", romanized: "Yasai wa amari suki ja nai desu.", translation: "I don't really like vegetables." },
            { native: "どんなおんがくがすきですか？", romanized: "Donna ongaku ga suki desu ka?", translation: "What kind of music do you like?" },
            { native: "スポーツがすきですか？", romanized: "Supootsu ga suki desu ka?", translation: "Do you like sport?" },
            { native: "にほんごのべんきょうがすきです。", romanized: "Nihongo no benkyou ga suki desu.", translation: "I like studying Japanese." },
        ]
    },
    {
        id: "ja-g-a1-16",
        level: "A1",
        title: "Counters: Counting Things in Japanese",
        explanation: `In Japanese, you cannot simply say 'two cats' or 'three cups'. You must use a counter word that matches the type of object. This is one of the most distinctive features of Japanese grammar.

STRUCTURE: Number + Counter + の + Noun (or just Number + Counter before a verb)
  りんごが三つあります。 (There are three apples.)
  コーヒーを一杯ください。(One cup of coffee, please.)

THE FIVE ESSENTIAL A1 COUNTERS:

つ — generic objects (1–9, native Japanese numbers only):
  ひとつ(1) ふたつ(2) みっつ(3) よっつ(4) いつつ(5)
  むっつ(6) ななつ(7) やっつ(8) ここのつ(9)
  Use this when you don't know the right counter — it works for most physical objects.
  りんごを三つ食べました。(I ate three apples.)

人(にん) — people:
  一人(ひとり/hitori) 二人(ふたり/futari) 三人(さんにん) 四人(よにん)...
  Note: 1 and 2 people use native Japanese readings (hitori, futari), not Sino-Japanese.
  家族は四人です。(My family has four people.)

本(ほん) — long thin things (bottles, pens, trees, trains, phone calls):
  一本(いっぽん) 二本(にほん) 三本(さんぼん)
  水を一本ください。(One bottle of water, please.)

枚(まい) — flat thin things (paper, tickets, plates, shirts, photographs):
  一枚(いちまい) 二枚(にまい) 三枚(さんまい)
  チケットを二枚ください。(Two tickets, please.)

杯(はい) — cups and glasses of liquid:
  一杯(いっぱい) 二杯(にはい) 三杯(さんばい)
  コーヒーを一杯飲みました。(I drank one cup of coffee.)

SAFE FALLBACK: When unsure, use つ for objects and 人 for people. Native speakers will understand even if it's not perfect.`,
        examples: [
            { native: "りんごがみっつあります。", romanized: "Ringo ga mittsu arimasu.", translation: "There are three apples. (つ = generic objects)" },
            { native: "かぞくはよにんです。", romanized: "Kazoku wa yo-nin desu.", translation: "My family has four people. (人 = people)" },
            { native: "みずをいっぽんください。", romanized: "Mizu wo ippon kudasai.", translation: "One bottle of water, please. (本 = long thin objects)" },
            { native: "チケットをにまいください。", romanized: "Chiketto wo ni-mai kudasai.", translation: "Two tickets, please. (枚 = flat thin objects)" },
            { native: "コーヒーをいっぱいのみました。", romanized: "Koohii wo ippai nomimashita.", translation: "I drank a cup of coffee. (杯 = cups/glasses)" },
        ]
    },
    {
        id: "ja-g-a1-18",
        level: "A1",
        title: "Demonstratives: これ / それ / あれ",
        explanation: `Japanese has three distance levels for demonstratives — not two like English.

これ  this (near the speaker)
それ  that (near the listener)
あれ  that (far from both)

These are standalone pronouns. Add の + noun, or use shorter forms:
  この + noun  →  この本  (this book)
  その + noun  →  その人  (that person)
  あの + noun  →  あの店  (that shop over there)

PLACE WORDS (where):
  ここ   here (near speaker)
  そこ   there (near listener)
  あそこ  over there (far from both)

QUESTION FORMS (which / which one / where):
  どれ   which one? (standalone)
  どの + noun  →  どの本?  (which book?)
  どこ   where?  (you already know this from negation/question unit)

ASKING:
  これは なんですか？   What is this?
  それは いくらですか？  How much is that?
  あれは だれですか？   Who is that (over there)?

SHORTHAND: Japanese speakers often shorten:
  これ → こちら (more polite form, also used for directions/people)`,
        examples: [
            { native: "これは なんですか？", romanized: "Kore wa nan desu ka?", translation: "What is this?" },
            { native: "その ほんは おもしろいです。", romanized: "Sono hon wa omoshiroi desu.", translation: "That book is interesting." },
            { native: "あれは だれですか？", romanized: "Are wa dare desu ka?", translation: "Who is that (over there)?" },
            { native: "どれが あなたのですか？", romanized: "Dore ga anata no desu ka?", translation: "Which one is yours?" },
            { native: "あそこに ゆうびんきょくが あります。", romanized: "Asoko ni yuubinkyoku ga arimasu.", translation: "There is a post office over there." },
        ]
    },
    {
        id: "ja-g-a1-20",
        level: "A1",
        title: "い-adjective Conjugation",
        explanation: `い-adjectives end in い. They conjugate directly — no helper needed.

FORMS (using おおきい — big):
  Present affirmative:  おおきいです。     It is big.
  Present negative:     おおきくないです。  It is not big.  (drop い → く + ない)
  Past affirmative:     おおきかったです。  It was big.     (drop い → かった)
  Past negative:        おおきくなかったです。  It was not big.

ATTRIBUTIVE (before a noun — no change to い):
  おおきい いぬ    a big dog
  おいしい たべもの  delicious food

EXCEPTION — いい (good):
  Positive:  いいです        (is good)
  Negative:  よくないです     (NOT いくないです ✗)
  Past:      よかったです     (NOT いかったです ✗)
  Past neg:  よくなかったです

COMMON い-adjectives:
  おいしい (delicious)  たかい (expensive/tall)  やすい (cheap)
  おおきい (big)        ちいさい (small)          あたらしい (new)
  ふるい (old)          たのしい (fun)            むずかしい (difficult)
  おもしろい (interesting)  さむい (cold)         あつい (hot)`,
        examples: [
            { native: "この りんごは おいしいです。", romanized: "Kono ringo wa oishii desu.", translation: "This apple is delicious." },
            { native: "あの えいがは おもしろくないです。", romanized: "Ano eiga wa omoshirokunai desu.", translation: "That movie is not interesting." },
            { native: "きのう さむかったです。", romanized: "Kinou samukatta desu.", translation: "It was cold yesterday." },
            { native: "このホテルは よくなかったです。", romanized: "Kono hoteru wa yokunakatta desu.", translation: "This hotel was not good." },
            { native: "おいしい すしを たべました。", romanized: "Oishii sushi wo tabemashita.", translation: "I ate delicious sushi. (attributive — い unchanged)" },
        ]
    },
    {
        id: "ja-g-a1-21",
        level: "A1",
        title: "な-adjective Conjugation",
        explanation: `な-adjectives behave like nouns with です. They do NOT end in い (or end in い but aren't conjugated like い-adj).

FORMS (using しずか — quiet):
  Present affirmative:  しずかです。          It is quiet.
  Present negative:     しずかじゃないです。   It is not quiet.  (also: しずかではないです)
  Past affirmative:     しずかでした。         It was quiet.
  Past negative:        しずかじゃなかったです。 It was not quiet.

ATTRIBUTIVE — add な before the noun:
  しずかな まち    a quiet town
  きれいな はな    beautiful flowers
  NOTE: In the predicate (after は) no な needed: この まちは しずかです。

COMMON な-adjectives:
  きれい (beautiful/clean)   しずか (quiet)    にぎやか (lively/bustling)
  べんり (convenient)         ゆうめい (famous)  すき (liked/favourite)
  きらい (disliked)           げんき (healthy/energetic)  ひま (free/bored)
  たいへん (hard/tough)       へた (bad at)     じょうず (good at)

CAREFUL — すき and きらい are な-adjectives, used with が:
  すしが すきです。  I like sushi. (not: すしを すきです ✗)`,
        examples: [
            { native: "この こうえんは しずかです。", romanized: "Kono kouen wa shizuka desu.", translation: "This park is quiet." },
            { native: "あの まちは にぎやかじゃないです。", romanized: "Ano machi wa nigiyaka ja nai desu.", translation: "That town is not lively." },
            { native: "きれいな はなですね。", romanized: "Kirei na hana desu ne.", translation: "What beautiful flowers, aren't they! (attributive な)" },
            { native: "えきは べんりでした。", romanized: "Eki wa benri deshita.", translation: "The station was convenient." },
            { native: "ピアノが じょうずです。", romanized: "Piano ga jouzu desu.", translation: "You are good at piano. (じょうず takes が)" },
        ]
    },
]
