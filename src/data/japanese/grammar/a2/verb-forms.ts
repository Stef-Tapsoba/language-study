import { GrammarLesson } from "../../../../types"

export const jaA2VerbForms: GrammarLesson[] = [
    {
        id: "ja-g-a2-1",
        level: "A2",
        title: "Potential Form: Can / Be Able To",
        explanation: {
            native: "Japanese has two ways to express ability: (1) the potential verb form and (2) ことができる. POTENTIAL VERB FORM: Group 2 (ru-verbs): replace る with られる (食べる → 食べられる). Group 1 (u-verbs): replace the final u-sound with the e-row + る (書く→書ける, 飲む→飲める, 話す→話せる, 行く→行ける). Group 3: する→できる, 来る→来られる. ことができる (more formal): verb dictionary form + ことができる (食べることができる = can eat). The potential subject often takes が. Negative: られない / ことができない.",
            target: "のうりょくを あらわす ほうほうは ふたつ あります。①かのうどうし：グループ２（るどうし）→ るを られるに かえる（たべる→たべられる）。グループ１（うどうし）→ さいごの うのだんを えのだんに かえて るを つける（かく→かける、のむ→のめる、はなす→はなせる）。グループ３：する→できる、くる→こられる。②ことができる（フォーマル）：じしょけい＋ことができる（たべることができる）。かのうの しゅごには「が」を つかうことが おおい。ひてい：〜られない / ことができない。"
        },
        examples: [
            { native: "日本語を話せます。", romanized: "Nihongo wo hanasemasu.", translation: "I can speak Japanese. (potential verb form: 話す→話せる)" },
            { native: "この漢字を読むことができますか？", romanized: "Kono kanji wo yomu koto ga dekimasu ka?", translation: "Can you read this kanji? (ことができる — formal)" },
            { native: "ピアノが弾けません。", romanized: "Piano ga hikemasen.", translation: "I can't play the piano. (negative potential: 弾く→弾ける→弾けない)" },
            { native: "一人で料理できます。", romanized: "Hitori de ryouri dekimasu.", translation: "I can cook by myself. (する→できる)" },
            { native: "どのくらい泳げますか？", romanized: "Dono kurai oyogemasu ka?", translation: "How far can you swim? (泳ぐ→泳げる)" }
        ],
        inlineVocab: [
            { word: "話せる", romanized: "hanaseru", translation: "can speak (potential of 話す)" },
            { word: "読める", romanized: "yomeru", translation: "can read (potential of 読む)" },
            { word: "できる", romanized: "dekiru", translation: "can do; is possible" }
        ]
    },
    {
        id: "ja-g-a2-5",
        level: "A2",
        title: "Passive Form: Being Affected by an Action",
        explanation: {
            native: "The passive form describes situations where the subject receives or is affected by someone else's action. CONJUGATION: Group 2 (ru-verbs): replace る with られる (食べる → 食べられる). Group 1 (u-verbs): replace the final u-sound with the a-row + れる (書く→書かれる, 飲む→飲まれる, 話す→話される). Group 3: する→される, 来る→来られる. The doer of the action is marked with に. TWO TYPES: (1) Direct passive — straightforward description (先生にほめられた = I was praised by the teacher). (2) Adversative/indirect passive — expresses that someone was negatively affected (友達に来られて困った = My friend showed up and it was a problem for me).",
            target: "うけみけいは、しゅごが だれかの どうさを うける・えいきょうを うける ばめんで つかいます。かつよう：グループ２（るどうし）→ るを られるに かえる（たべる→たべられる）。グループ１（うどうし）→ さいごの うのだんを あのだんに かえて れるを つける（かく→かかれる、のむ→のまれる、はなす→はなされる）。グループ３：する→される、くる→こられる。どうさをする ひとには に。ふたつの かたち：①ちょくせつ うけみ（ほめられた＝was praised）。②めいわく うけみ（ともだちに こられて こまった＝my friend showed up and I was bothered）。"
        },
        examples: [
            { native: "先生に褒められました。", romanized: "Sensei ni homeraremashita.", translation: "I was praised by my teacher. (direct passive)" },
            { native: "この小説は多くの人に読まれています。", romanized: "Kono shousetsu wa ooku no hito ni yomarete imasu.", translation: "This novel is being read by many people." },
            { native: "財布を盗まれました。", romanized: "Saifu wo nusumaremashita.", translation: "My wallet was stolen. (adversative — I was negatively affected)" },
            { native: "この建物は1850年に建てられました。", romanized: "Kono tatemono wa 1850-nen ni tateraremashita.", translation: "This building was built in 1850. (factual passive)" },
            { native: "雨に降られて、ずぶ濡れになりました。", romanized: "Ame ni furarete, zubu nure ni narimashita.", translation: "It rained on me and I got soaked. (adversative passive — unwanted event)" }
        ],
        inlineVocab: [
            { word: "褒める", romanized: "homeru", translation: "to praise" },
            { word: "盗む", romanized: "nusumu", translation: "to steal" },
            { word: "建てる", romanized: "tateru", translation: "to build" }
        ]
    },
    {
        id: "ja-g-a2-6",
        level: "A2",
        title: "Causative Form: Making & Letting Someone Do",
        explanation: {
            native: "The causative form expresses that someone causes or allows another person to do something. CONJUGATION: Group 2 (ru-verbs): replace る with させる (食べる → 食べさせる). Group 1 (u-verbs): replace the final u-sound with the a-row + せる (書く→書かせる, 飲む→飲ませる, 話す→話させる). Group 3: する→させる, 来る→来させる. The person who causes is the subject (が/は). The person who is made to do the action takes を (if the original verb is intransitive) or に (if the original verb is transitive). MEANING: causative can mean 'make someone do' (compulsory) or 'let/allow someone do' depending on context.",
            target: "しえきけいは、だれかに なにかを させる（きょうせい）または させてあげる（きょか）ことを あらわします。かつよう：グループ２（るどうし）→ るを させるに かえる（たべる→たべさせる）。グループ１（うどうし）→ さいごの うのだんを あのだんに かえて せるを つける（かく→かかせる、のむ→のませる）。グループ３：する→させる、くる→こさせる。させる しゅごは が・は。させられる ひとは じどうしなら を、たどうしなら に。「させる」は「むりやり させる」（きょうせい）または「させてあげる」（きょか）の どちらにも つかいます。"
        },
        examples: [
            { native: "母は子供に野菜を食べさせました。", romanized: "Haha wa kodomo ni yasai wo tabesasemashita.", translation: "My mother made the child eat vegetables. (compulsory)" },
            { native: "先生は学生を立たせました。", romanized: "Sensei wa gakusei wo tatasemashita.", translation: "The teacher made the students stand up." },
            { native: "社長は田中さんを出張させました。", romanized: "Shachou wa Tanaka-san wo shucchou sasemashita.", translation: "The president sent Tanaka on a business trip." },
            { native: "子供に好きなものを食べさせてあげます。", romanized: "Kodomo ni suki na mono wo tabesasete agemasu.", translation: "I'll let the child eat what they like. (permissive)" },
            { native: "少し休ませてください。", romanized: "Sukoshi yasumasete kudasai.", translation: "Please let me rest for a bit. (requesting permission)" }
        ],
        inlineVocab: [
            { word: "させる", romanized: "saseru", translation: "causative auxiliary: make/let someone do" },
            { word: "出張", romanized: "shucchou", translation: "business trip" },
            { word: "立つ", romanized: "tatsu", translation: "to stand up" }
        ]
    },
    {
        id: "ja-g-a2-7",
        level: "A2",
        title: "Causative-Passive: Being Made to Do Something",
        explanation: {
            native: "The causative-passive combines causative and passive meaning: 'to be made to do something' (usually against one's will). FORMATION: causative form + passive られる. Group 2: 食べさせる → 食べさせられる. Group 1 SHORT FORM (common in speech): 飲む→飲まされる (from 飲ませる→飲ませられる, contracted), 書く→書かされる. Group 3: させる→させられる. This form almost always carries a nuance of being forced, compelled, or inconvenienced. It is a classic N4 grammar target.",
            target: "しえきうけみは しえきけいと うけみけいを くみあわせた かたち：「〜させられる」＝ むりやり 〜させられる（ほとんど つねに やらされた、こまった という ニュアンス）。つくりかた：しえきけい＋られる。グループ２：たべさせる→たべさせられる。グループ１みじかいかたち（はなしことばで よく つかう）：のむ→のまされる（のませられる の しゅくやく）、かく→かかされる。グループ３：させる→させられる。JLPT N4で よく でる ぶんけいです。"
        },
        examples: [
            { native: "子供の頃、嫌いな野菜を食べさせられました。", romanized: "Kodomo no koro, kirai na yasai wo tabesaseraremashita.", translation: "As a child, I was made to eat vegetables I hated." },
            { native: "残業を毎日させられています。", romanized: "Zangyou wo mainichi saserarete imasu.", translation: "I am made to work overtime every day." },
            { native: "上司に全部やらされました。", romanized: "Joushi ni zenbu yarasaremashita.", translation: "I was made to do everything by my boss." },
            { native: "部長のスピーチを一時間聞かされました。", romanized: "Buchou no supiichi wo ichijikan kikasaremashita.", translation: "I was forced to listen to the manager's speech for an hour." },
            { native: "子供に泣かされて、困りました。", romanized: "Kodomo ni nakasarete, komarimashita.", translation: "The child made me cry — it was really upsetting." }
        ],
        inlineVocab: [
            { word: "させられる", romanized: "saserareru", translation: "be made to do; be forced to do" },
            { word: "上司", romanized: "joushi", translation: "boss / superior" },
            { word: "残業", romanized: "zangyou", translation: "overtime work" }
        ]
    },
]
