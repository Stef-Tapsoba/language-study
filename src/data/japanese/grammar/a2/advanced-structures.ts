import { GrammarLesson } from "../../../../types"

export const jaA2AdvancedStructures: GrammarLesson[] = [
    {
        id: "ja-g-a2-16",
        level: "A2",
        title: "Relative Clauses & Noun Modification",
        explanation: {
            native: "In Japanese, modifying clauses come BEFORE the noun they describe — the opposite of English. The clause uses the plain form: [plain-form clause] + noun. There is NO relative pronoun (no 'who', 'that', 'which'). Examples: 昨日食べた寿司 (the sushi [that] I ate yesterday), 日本語を話す人 (a person who speaks Japanese). The topic particle は cannot be used inside the modifying clause — replace it with が. This pattern is essential for reading and natural speech. Also: 〜という＋noun ('a [noun] called/named/described as ~').",
            target: "にほんごでは、しゅうしょくせつは めいしの まえに おかれます（えいごと ぎゃく）。せつは ふつうけいを つかいます：[ふつうけいの せつ]＋めいし。かんけいだいめいし（who / that / which）は つかいません。れい：きのう たべた すし（the sushi I ate yesterday）、にほんごを はなす ひと（a person who speaks Japanese）。しゅうしょくせつの なかでは は が になります。これは よむ・はなすうえで とても じゅうようです。また：〜という＋めいし（〜という なまえの、〜という いみの）。"
        },
        examples: [
            { native: "昨日食べた寿司は最高でした。", romanized: "Kinou tabeta sushi wa saikou deshita.", translation: "The sushi (that) I ate yesterday was amazing. (past action modifying noun)" },
            { native: "日本語を話す人はどこですか？", romanized: "Nihongo wo hanasu hito wa doko desu ka?", translation: "Where is the person who speaks Japanese? (present action)" },
            { native: "私が買った本を読みましたか？", romanized: "Watashi ga katta hon wo yomimashita ka?", translation: "Did you read the book (that) I bought? (Note: が, not は, inside clause)" },
            { native: "「さくら」というカフェを知っていますか？", romanized: "'Sakura' to iu kafe wo shitte imasu ka?", translation: "Do you know a café called 'Sakura'? (〜という pattern)" },
            { native: "彼女が作った料理がとてもおいしかった。", romanized: "Kanojo ga tsukutta ryouri ga totemo oishikatta.", translation: "The food (that) she made was very delicious." }
        ],
        inlineVocab: [
            { word: "〜という", romanized: "~to iu", translation: "called ~; named ~; known as ~" },
            { word: "修飾節", romanized: "shuushokusetsu", translation: "modifying/relative clause" },
            { word: "最高", romanized: "saikou", translation: "the best; amazing" }
        ]
    },
    {
        id: "ja-g-a2-17",
        level: "A2",
        title: "Purpose & Reason: 〜ために / 〜ので",
        explanation: {
            native: "PURPOSE 〜ために ('in order to / for the purpose of'): verb dictionary form (or noun + の) + ために. Expresses a deliberate goal: 日本語を勉強するために、毎日練習します (I practise every day in order to study Japanese). Cannot be used for involuntary actions. REASON 〜ので ('because / since' — more formal and softer than から): plain form + ので. Sounds more objective and polite than から. Example: 雨が降っているので、家にいます (Because it's raining, I'm staying home). KEY DISTINCTION: ので sounds more polite and explanatory; から sounds more assertive and is used in casual/logical arguments.",
            target: "もくてきの ために（〜するために）：じしょけい（または めいし＋の）＋ために。いとてきな もくひょうを あらわします：にほんごを べんきょうするために、まいにち れんしゅうします。いしの ない どうさには つかえません。りゆうの ので（〜から より ていねい・やわらか）：ふつうけい＋ので。きゃっかんてきで ていねいな かんじ。れい：あめが ふっているので、いえにいます。ちがい：ので は ていねいで せつめいてき、から は じかんてきで ロジカル・カジュアルな ときに つかう。"
        },
        examples: [
            { native: "日本語を上手にするために、毎日練習しています。", romanized: "Nihongo wo jouzu ni suru tame ni, mainichi renshuu shite imasu.", translation: "I practise every day in order to improve my Japanese. (ために — purpose)" },
            { native: "健康のために、毎朝走ります。", romanized: "Kenkou no tame ni, maiasa hashirimasu.", translation: "I run every morning for my health. (noun + のために)" },
            { native: "雨が降っているので、タクシーで行きます。", romanized: "Ame ga futte iru node, takushii de ikimasu.", translation: "Because it's raining, I'll go by taxi. (ので — polite reason)" },
            { native: "体調が悪いので、休ませてください。", romanized: "Taichou ga warui node, yasumasete kudasai.", translation: "As I'm not feeling well, please allow me to rest. (ので — polite explanation)" },
            { native: "試験に合格するために、一生懸命勉強します。", romanized: "Shiken ni goukaku suru tame ni, isshoukenmei benkyou shimasu.", translation: "I will study hard in order to pass the exam." }
        ],
        inlineVocab: [
            { word: "〜ために", romanized: "~tame ni", translation: "in order to ~; for the purpose of ~" },
            { word: "〜ので", romanized: "~node", translation: "because ~; since ~ (polite reason)" },
            { word: "合格する", romanized: "goukaku suru", translation: "to pass (an exam)" }
        ]
    },
    {
        id: "ja-g-a2-18",
        level: "A2",
        title: "Concession & Contrast: 〜のに / 〜ても / 〜けれど",
        explanation: {
            native: "〜のに ('even though / despite the fact that' — expresses surprise, disappointment, or unexpectedness): plain form + のに. Example: 頑張ったのに、失敗しました (Even though I tried hard, I failed). The speaker expected a different result. 〜ても ('even if / even though — concession regardless of condition'): て-form + も. Example: 雨が降っても、行きます (Even if it rains, I'll go). 〜けれど(も) / 〜が: 'but / although' — softer, factual contrast: 高いですけれど、買いたいです (It's expensive, but I want to buy it). のに implies emotional disappointment; ても is purely logical.",
            target: "〜のに（〜にもかかわらず / なのに — きたいどおりにならず がっかり・おどろき）：ふつうけい＋のに。れい：がんばったのに、しっぱいしました（がんばったのに うまくいかなかった — がっかり）。〜ても（〜たとしても — かていてきに ゆずる）：てけい＋も。れい：あめが ふっても、いきます（どんなじょうきょうでも）。〜けれど（も）/ が（やわらかい、じじつてき たいひ）：こうだけれど、〜したい。のには かんじょうてきながっかり；てもは ろんりてきに ゆずる。"
        },
        examples: [
            { native: "一生懸命勉強したのに、試験に落ちました。", romanized: "Isshoukenmei benkyou shita noni, shiken ni ochimashita.", translation: "Even though I studied hard, I failed the exam. (のに — disappointment)" },
            { native: "雨が降っても、試合は続きます。", romanized: "Ame ga futte mo, shiai wa tsuzukimasu.", translation: "Even if it rains, the match will continue. (ても — concession)" },
            { native: "何時間待っても、彼女は来ませんでした。", romanized: "Nan jikan matte mo, kanojo wa kimasen deshita.", translation: "No matter how many hours I waited, she didn't come. (ても — regardless)" },
            { native: "高いですけれど、欲しいです。", romanized: "Takai desu keredo, hoshii desu.", translation: "It's expensive, but I want it. (けれど — mild contrast)" },
            { native: "疲れているのに、まだ働いています。", romanized: "Tsukarete iru noni, mada hataraite imasu.", translation: "Even though I'm tired, I'm still working. (のに — unexpected situation)" }
        ],
        inlineVocab: [
            { word: "〜のに", romanized: "~noni", translation: "even though ~; despite ~ (unexpected/disappointing result)" },
            { word: "〜ても", romanized: "~temo", translation: "even if ~; even though ~ (concession)" },
            { word: "〜けれど", romanized: "~keredo", translation: "but ~; although ~ (mild contrast)" }
        ]
    },
    {
        id: "ja-g-a2-19",
        level: "A2",
        title: "Scope & Limits: 〜だけ / 〜しか〜ない / 〜ばかり",
        explanation: {
            native: "〜だけ ('only / just'): noun/verb + だけ, used with both positive and negative sentences: 一つだけ食べました (I ate just one). 〜しか〜ない ('only ~ / nothing but ~' — always with negative verb, expresses insufficiency or limitation): noun + しか + negative verb: 百円しかありません (I only have 100 yen — implying it's not enough). CONTRAST: だけ is neutral (simply 'only'); しか〜ない carries emotional weight (only, and that's not enough). 〜ばかり: (1) 'nothing but / only doing' (implying excessive focus): ゲームばかりしている (doing nothing but gaming). (2) After た-form: 'just did': 食べたばかりです (I just ate).",
            target: "〜だけ（「だけ / ただ」、ポジティブにも ネガティブにも つかえる）：めいし/どうし＋だけ（ひとつだけ たべました）。〜しか〜ない（かならず ひていどうしと つかう、たりなさや せいやくを あらわす）：めいし＋しか＋ひていどうし（ひゃくえんしか ありません＝ひゃくえんしか ない — たりない）。ちがい：だけは ちゅうりつ（ただ「だけ」）、しか〜ないは かんじょうてき（だけで、たりない）。〜ばかり：①「〜ばかりしている」（〜ばかり で もうほかのことはしない）。②たけい＋ばかり（〜したばかり＝just did）。"
        },
        examples: [
            { native: "あと一つだけお願いします。", romanized: "Ato hitotsu dake onegai shimasu.", translation: "Just one more, please. (だけ — neutral 'only')" },
            { native: "お金が千円しかありません。", romanized: "Okane ga sen-en shika arimasen.", translation: "I only have 1000 yen. (しか〜ない — insufficient, with negative)" },
            { native: "彼はゲームばかりしています。", romanized: "Kare wa geemu bakari shite imasu.", translation: "He does nothing but play games. (ばかり — excessive focus)" },
            { native: "今、食べたばかりです。", romanized: "Ima, tabeta bakari desu.", translation: "I just ate. (たばかり — just completed)" },
            { native: "日本語しか話せません。", romanized: "Nihongo shika hanasemasen.", translation: "I can only speak Japanese. (しか〜ない — limitation)" }
        ],
        inlineVocab: [
            { word: "〜だけ", romanized: "~dake", translation: "only ~; just ~ (neutral limit)" },
            { word: "〜しか〜ない", romanized: "~shika~nai", translation: "only ~ (implying insufficiency; always negative verb)" },
            { word: "〜ばかり", romanized: "~bakari", translation: "nothing but ~; just did ~ (excess or recency)" }
        ]
    },
    {
        id: "ja-g-a2-20",
        level: "A2",
        title: "Time Sequencing: 〜前に / 〜た後で / 〜ながら / 〜あいだに",
        explanation: {
            native: "〜前に ('before doing'): verb dictionary form + 前に (食べる前に = before eating). Note: even if the main clause is past, 前に uses the dictionary form. 〜た後で ('after doing'): verb た-form + 後で (食べた後で = after eating). 〜ながら ('while doing simultaneously — same subject'): verb stem (ます-stem) + ながら (音楽を聞きながら勉強します = I study while listening to music). The main action is the latter verb. 〜あいだ(に) ('during / while — can imply a change happened within a period'): noun/plain form + あいだに (彼が寝ているあいだに、電話が来た = While he was sleeping, a call came).",
            target: "〜まえに（〜するまえに）：じしょけい＋まえに（たべるまえに）。ちゅうい：しゅせつが かこでも、まえには じしょけいをつかいます。〜たあとで（〜したあとで）：たけい＋あとで（たべたあとで）。〜ながら（どうじどうさ — おなじ しゅご）：ますけい（どうしのごかん）＋ながら（おんがくをききながら べんきょうします）。しゅどうさは あとの どうし。〜あいだ（に）（〜している あいだに）：めいし/ふつうけい＋あいだに（かれが ねているあいだに、でんわが きた）。あいだに は そのきかんに なにかが おきた ことを しめす。"
        },
        examples: [
            { native: "寝る前に歯を磨いてください。", romanized: "Neru mae ni ha wo migaite kudasai.", translation: "Please brush your teeth before sleeping. (〜前に — before)" },
            { native: "宿題をした後で、テレビを見ます。", romanized: "Shukudai wo shita ato de, terebi wo mimasu.", translation: "After doing my homework, I'll watch TV. (〜た後で)" },
            { native: "音楽を聞きながら料理をします。", romanized: "Ongaku wo kikinagara ryouri wo shimasu.", translation: "I cook while listening to music. (〜ながら — simultaneous actions)" },
            { native: "私が買い物をしているあいだに、子供たちは公園で遊んでいました。", romanized: "Watashi ga kaimono wo shite iru aida ni, kodomotachi wa kouen de asonde imashita.", translation: "While I was shopping, the kids were playing in the park. (〜あいだに)" },
            { native: "日本に来る前に、少し日本語を勉強しておきました。", romanized: "Nihon ni kuru mae ni, sukoshi Nihongo wo benkyou shite okimashita.", translation: "Before coming to Japan, I studied a little Japanese in advance." }
        ],
        inlineVocab: [
            { word: "〜前に", romanized: "~mae ni", translation: "before doing ~" },
            { word: "〜た後で", romanized: "~ta ato de", translation: "after doing ~" },
            { word: "〜ながら", romanized: "~nagara", translation: "while doing ~ (simultaneously, same subject)" }
        ]
    },
]
