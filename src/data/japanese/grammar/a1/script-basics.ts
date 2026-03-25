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
        id: "ja-g-a1-39",
        level: "A1",
        title: "Why Kanji? Understanding the Logic of Japanese Writing",
        explanation: `You have learned hiragana and katakana — the two phonetic scripts. Now comes kanji.

Kanji are not just "harder hiragana". Each one is a meaning unit, not just a sound. This is what makes kanji powerful, and worth the effort.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHY KANJI MATTERS

Speed — fluent readers process kanji visually, the way you recognise a face. Reading without kanji is like reading a sentence where all the spaces have been removed — technically possible, but exhausting.

Homophone clarity — Japanese has many words that sound the same but mean different things. Kanji instantly separates them:
  はし = 橋 (bridge)  or  箸 (chopsticks)  or  端 (edge)
  In hiragana-only you must guess from context. In kanji, the meaning is immediate.

Reading access — newspapers, menus, signs, books, game text, websites — virtually all authentic Japanese uses kanji. Learning them is not optional if you want genuine fluency.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EACH KANJI IS A BUILDING BLOCK OF MEANING

Think of kanji as lego bricks. Combine them and the meaning compounds.

  木 (き) = tree
  林 (はやし) = two trees side by side = grove
  森 (もり) = three trees = forest

  山 (やま) = mountain
  川 (かわ) = river
  山川 = mountain + river = the natural landscape (used in surnames)

  二 (に) = two
  人 (ひと) = person
  二人 (ふたり) = two people ← the reading changes (ふたり, not にひと), but the meaning is transparent

  電 (でん) = electricity
  車 (くるま) = vehicle / car
  電車 (でんしゃ) = electric vehicle = train

  学 (がく) = study / learning
  生 (せい) = life / person
  学生 (がくせい) = student

  日 (にち) = sun / Japan
  本 (ほん) = origin / book
  語 (ご) = language
  日本語 (にほんご) = Japan's language = Japanese

Even when you encounter a compound you have never seen before, recognising the individual kanji often gives you a strong guess at the meaning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KUN'YOMI vs ON'YOMI

Most kanji have two types of reading:

  kun'yomi (訓読み) — the native Japanese reading, used when the kanji appears alone.
    木 → き (tree)   山 → やま (mountain)

  on'yomi (音読み) — the Chinese-origin reading, used mostly in compound words.
    木 → もく (in 木曜日 = Thursday)   山 → さん (in 富士山 = Mt. Fuji)

PRACTICAL RULE: If you see a kanji standing alone → try kun'yomi. If you see two or more kanji together → try on'yomi. This rule is not perfect, but it is right most of the time at N5 level.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE N5 KANJI SET

JLPT N5 requires approximately 103 kanji. That is not many — less than two kanji per week over a year. The key is learning them in semantic groups so the meanings stick together.

The next two lessons (Kanji Group 1 and Group 2) cover the full N5 set organised into themes: numbers, time, nature, people, actions, places. You already know many of the words — now you are putting a face to them.`,
        examples: [
            { native: "木 → 林 → 森", romanized: "ki → hayashi → mori", translation: "tree → grove (two trees) → forest (three trees) — the visual logic is literal" },
            { native: "二人 (ふたり)", romanized: "futari", translation: "two people — 二 (two) + 人 (person): the meaning is in the kanji even when the reading is irregular" },
            { native: "電車 (でんしゃ)", romanized: "densha", translation: "train — 電 (electricity) + 車 (vehicle): electric vehicle" },
            { native: "学生 (がくせい)", romanized: "gakusei", translation: "student — 学 (study) + 生 (person/life)" },
            { native: "日本語 (にほんご)", romanized: "nihongo", translation: "Japanese language — 日 (Japan/sun) + 本 (origin) + 語 (language)" },
            { native: "はし → 橋・箸・端", romanized: "hashi → bridge / chopsticks / edge", translation: "Kanji removes ambiguity — three words sound the same in hiragana but are instantly distinct in kanji" },
        ],
        inlineVocab: [
            { word: "木", translation: "tree (き / もく)" },
            { word: "森", translation: "forest (もり)" },
            { word: "二人", translation: "two people (ふたり)" },
            { word: "電車", translation: "train (でんしゃ)" },
            { word: "学生", translation: "student (がくせい)" },
            { word: "日本語", translation: "Japanese language (にほんご)" },
            { word: "訓読み", translation: "kun'yomi — native Japanese reading" },
            { word: "音読み", translation: "on'yomi — Chinese-origin reading" },
        ]
    },
    {
        id: "ja-g-a1-14",
        level: "A1",
        title: "N5 Kanji Group 1 — Numbers, Time, Nature & Position",
        explanation: `Japanese uses kanji — characters borrowed from Chinese — alongside hiragana and katakana. Most kanji have two reading types: kun'yomi (native Japanese reading) and on'yomi (Chinese-origin reading). Compounds usually use on'yomi; standalone words often use kun'yomi.

This lesson covers Group 1: the kanji you meet earliest in A1, organised by theme.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NUMBERS & MONEY
  一 (いち / ひと-)  one        一つ (ひとつ) — one thing
  二 (に / ふた-)    two        二時 (にじ) — two o'clock
  三 (さん / み-)    three      三月 (さんがつ) — March
  四 (し / よ-)      four       四日 (よっか) — 4th (date)
  五 (ご / いつ-)    five       五月 (ごがつ) — May
  六 (ろく / む-)    six        六時 (ろくじ) — six o'clock
  七 (しち / なな-)  seven      七月 (しちがつ) — July
  八 (はち / や-)    eight      八月 (はちがつ) — August
  九 (く / きゅう-)  nine       九時 (くじ) — nine o'clock
  十 (じゅう / とお) ten        十月 (じゅうがつ) — October
  百 (ひゃく)        one hundred 三百 (さんびゃく) — 300
  千 (せん)          one thousand 千円 (せんえん) — 1000 yen
  万 (まん)          ten thousand 一万円 (いちまんえん) — 10,000 yen
  円 (えん)          yen         五百円 (ごひゃくえん) — 500 yen

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIME & CALENDAR
  年 (ねん / とし)   year        今年 (ことし) — this year
  月 (つき / がつ)   month / moon 毎月 (まいつき) — every month
  日 (にち / ひ)     day / sun   今日 (きょう) — today; 日本 (にほん) — Japan
  時 (じ)            time / hour  何時 (なんじ) — what time?
  間 (あいだ / かん) interval    時間 (じかん) — time / hour
  分 (ふん / ぶん)   minute      三十分 (さんじゅっぷん) — 30 minutes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DAYS OF THE WEEK (天体 kanji — celestial bodies)
  火 (か)   fire → 火曜日 (かようび) — Tuesday
  水 (すい/みず) water → 水曜日 (すいようび) — Wednesday; 水 (みず) — water
  木 (もく/き)  tree → 木曜日 (もくようび) — Thursday; 木 (き) — tree
  金 (きん/かね) gold → 金曜日 (きんようび) — Friday; お金 (おかね) — money
  土 (ど/つち)  earth → 土曜日 (どようび) — Saturday
  (日 = sun → 日曜日 (にちようび) — Sunday — covered above)
  (月 = moon → 月曜日 (げつようび) — Monday — covered above)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POSITION & DIRECTION
  上 (うえ / じょう)  above / up    上手 (じょうず) — skilled
  下 (した / か)      below / down  地下 (ちか) — underground
  左 (ひだり)         left          左手 (ひだりて) — left hand
  右 (みぎ)           right         右側 (みぎがわ) — right side
  中 (なか / ちゅう)  inside/middle 中学校 (ちゅうがっこう) — middle school
  外 (そと / がい)    outside       外国 (がいこく) — foreign country
  前 (まえ / ぜん)    front/before  駅の前 (えきのまえ) — in front of the station
  後 (うしろ / ご)    behind/after  後で (あとで) — later

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NATURE
  山 (やま / さん)  mountain  富士山 (ふじさん) — Mt. Fuji
  川 (かわ / がわ)  river      川口 (かわぐち) — Kawaguchi (place name)
  田 (た / でん)    rice field 田中 (たなか) — Tanaka (surname)
  空 (そら / くう)  sky/empty  青空 (あおぞら) — blue sky
  花 (はな / か)    flower     花見 (はなみ) — cherry blossom viewing
  木 (き / もく)    tree       (same kanji as Thursday above)
  林 (はやし)       grove      小林 (こばやし) — Kobayashi (surname)
  森 (もり)         forest     森田 (もりた) — Morita (surname)`,
        examples: [
            { native: "一・二・三・四・五・六・七・八・九・十", romanized: "ichi / ni / san / shi / go / roku / shichi / hachi / ku / juu", translation: "Numbers 1–10 in kanji" },
            { native: "百・千・万・円", romanized: "hyaku / sen / man / en", translation: "100, 1000, 10,000, yen" },
            { native: "年・月・日・時間・分", romanized: "nen/toshi ・ tsuki/gatsu ・ nichi/hi ・ jikan ・ fun/pun", translation: "Year, month, day, time/hour, minute" },
            { native: "火曜日・水曜日・木曜日・金曜日・土曜日", romanized: "kayo-bi / suiyo-bi / mokuyo-bi / kinyo-bi / doyo-bi", translation: "Tuesday, Wednesday, Thursday, Friday, Saturday" },
            { native: "上・下・左・右・中・外・前・後", romanized: "ue / shita / hidari / migi / naka / soto / mae / ushiro", translation: "Above, below, left, right, inside, outside, front, behind" },
            { native: "山・川・田・空・花・木・林・森", romanized: "yama / kawa / ta / sora / hana / ki / hayashi / mori", translation: "Mountain, river, rice field, sky, flower, tree, grove, forest" },
        ]
    },
    {
        id: "ja-g-a1-38",
        level: "A1",
        title: "N5 Kanji Group 2 — People, Actions, Places & Society",
        explanation: `This lesson completes the N5 kanji set. These kanji appear throughout daily life — in family vocabulary, school, transport, and common actions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PEOPLE & FAMILY
  人 (ひと / じん / にん)  person     日本人 (にほんじん) — Japanese person
  女 (おんな / じょ)       woman      女の子 (おんなのこ) — girl
  男 (おとこ / だん)       man        男の人 (おとこのひと) — man
  子 (こ / し)             child      子供 (こども) — child
  父 (ちち / ふ)           father     お父さん (おとうさん) — father (polite)
  母 (はは / ぼ)           mother     お母さん (おかあさん) — mother (polite)
  兄 (あに / けい)         older brother  お兄さん (おにいさん)
  姉 (あね / し)           older sister   お姉さん (おねえさん)
  弟 (おとうと)            younger brother
  妹 (いもうと)            younger sister

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BODY
  目 (め / もく)   eye     目薬 (めぐすり) — eye drops
  耳 (みみ / じ)   ear     耳鳴り (みみなり) — ringing in ears
  口 (くち / こう) mouth   入口 (いりぐち) — entrance
  手 (て / しゅ)   hand    手紙 (てがみ) — letter
  足 (あし / そく) foot/leg 足りる (たりる) — to be sufficient

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTION VERBS (written form — kanji you see in verb stems)
  行 (い- / こう)   go       行きます (いきます)
  来 (き- / らい)   come     来ます (きます)
  帰 (かえ-)        return   帰ります (かえります)
  見 (み- / けん)   see      見ます (みます); 見物 (けんぶつ) — sightseeing
  聞 (き- / ぶん)   listen   聞きます (ききます)
  話 (はな- / わ)   speak    話します (はなします)
  読 (よ- / どく)   read     読みます (よみます)
  書 (か- / しょ)   write    書きます (かきます)
  食 (た- / しょく) eat      食べます (たべます); 食堂 (しょくどう) — cafeteria
  飲 (の- / いん)   drink    飲みます (のみます)
  入 (はい-/い-/にゅう) enter  入ります (はいります); 入口 (いりぐち) — entrance
  出 (で- / しゅつ) exit/go out  出ます (でます); 出口 (でぐち) — exit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCHOOL & LEARNING
  学 (がく / まな-)  study    大学 (だいがく) — university; 学校 (がっこう) — school
  校 (こう)          school   高校 (こうこう) — high school
  先 (せん / さき)   before   先生 (せんせい) — teacher; 先週 (せんしゅう) — last week
  生 (せい / なま)   life     学生 (がくせい) — student; 先生 (せんせい)
  語 (ご / かたり)   language 日本語 (にほんご); 英語 (えいご) — English
  文 (ぶん / もん)   sentence / writing  文章 (ぶんしょう) — text
  字 (じ)            character  漢字 (かんじ) — kanji; ローマ字 (ろーまじ) — romaji
  本 (ほん / もと)   book / origin  本 (ほん) — book; 日本 (にほん) — Japan

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PLACES & SOCIETY
  国 (くに / こく)   country  外国 (がいこく) — foreign country
  店 (みせ / てん)   shop     本屋 (ほんや) — bookshop; 食堂 (しょくどう)
  駅 (えき)          station  駅前 (えきまえ) — in front of the station
  道 (みち / どう)   road     歩道 (ほどう) — pavement
  町 (まち / ちょう) town     下町 (したまち) — old town district
  市 (し)            city     東京市 (とうきょうし)
  社 (しゃ)          company  会社 (かいしゃ) — company
  会 (かい / あ-)    meeting / meet  会社 (かいしゃ); 会います (あいます) — to meet
  電 (でん)          electricity  電話 (でんわ) — telephone; 電車 (でんしゃ) — train
  車 (くるま / しゃ) car / vehicle  電車 (でんしゃ) — train; 車 (くるま) — car

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPASS DIRECTIONS
  東 (ひがし / とう)  east   東京 (とうきょう) — Tokyo (Eastern Capital)
  西 (にし / せい)    west   関西 (かんさい) — Kansai region
  南 (みなみ / なん)  south  南口 (みなみぐち) — south exit
  北 (きた / ほく)    north  北海道 (ほっかいどう) — Hokkaido

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIME OF DAY
  朝 (あさ / ちょう)  morning  毎朝 (まいあさ) — every morning
  昼 (ひる / ちゅう)  noon/daytime  昼ごはん (ひるごはん) — lunch
  夜 (よる / や)       night    毎晩 (まいばん) — every evening; 夜 (よる) — night

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOURS & OTHER HIGH-FREQUENCY N5
  白 (しろ / はく)   white   白い (しろい) — white
  黒 (くろ / こく)   black   黒い (くろい) — black
  赤 (あか / せき)   red     赤い (あかい) — red
  青 (あお / せい)   blue    青い (あおい) — blue; 青空 (あおぞら)
  名 (な / めい)     name    名前 (なまえ) — name; 有名 (ゆうめい) — famous
  気 (き / け)       spirit/energy  元気 (げんき) — healthy/fine; 天気 (てんき) — weather
  力 (ちから / りょく) power  努力 (どりょく) — effort
  友 (とも / ゆう)   friend  友達 (ともだち) — friend
  家 (いえ / か)     house/family  家族 (かぞく) — family; 家 (いえ) — house
  族 (ぞく)          family/group  家族 (かぞく) — family`,
        examples: [
            { native: "人・女・男・子・父・母・兄・姉・弟・妹", romanized: "hito / onna / otoko / ko / chichi / haha / ani / ane / otouto / imouto", translation: "Person, woman, man, child, father, mother, older brother, older sister, younger brother, younger sister" },
            { native: "目・耳・口・手・足", romanized: "me / mimi / kuchi / te / ashi", translation: "Eye, ear, mouth, hand, foot/leg" },
            { native: "行・来・帰・見・聞・話・読・書・食・飲・入・出", romanized: "iku / kuru / kaeru / miru / kiku / hanasu / yomu / kaku / taberu / nomu / hairu / deru", translation: "Go, come, return, see, listen, speak, read, write, eat, drink, enter, exit" },
            { native: "東西南北", romanized: "higashi / nishi / minami / kita", translation: "East, West, South, North" },
            { native: "朝・昼・夜", romanized: "asa / hiru / yoru", translation: "Morning, noon/daytime, night" },
            { native: "白・黒・赤・青", romanized: "shiro / kuro / aka / ao", translation: "White, black, red, blue" },
        ]
    },
]
