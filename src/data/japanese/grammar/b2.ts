import { GrammarLesson } from "../../../types"

export const b2Grammar: GrammarLesson[] = [
    {
        id: "ja-g-b2-1",
        level: "B2",
        title: "受身・使役受身 — Passive & Causative-Passive",
        explanation: {
            native: "The passive voice (受身形, ukemi-kei) is formed by adding られる (raeru) to Group 2 verbs and adding れる (reru) to Group 1 verbs, or される (sareru) to する verbs. The direct passive simply describes an action done to the subject: 先生に褒められた (I was praised by the teacher). The indirect/suffering passive (迷惑の受身, meiwaku no ukemi) expresses that the subject was negatively affected by someone else's action, even if the action was not directed at them: 雨に降られた (I was inconvenienced by the rain falling). The causative-passive (使役受身, shieki-ukemi) combines causative and passive, meaning 'to be made to do something against one's will'. It is formed by adding させられる (saserareru) to Group 1/2 verbs: 食べさせられた (I was made to eat). For Group 1 verbs a shorter form 〜される is sometimes used colloquially.",
            target: "受身形（られる/れる）は、他者から動作を受けることを表します。「グループ2動詞＋られる」、「グループ1動詞の未然形＋れる」、「する→される」となります。直接受身は動作を受けた主語を表します：「先生に褒められた」。間接受身（迷惑の受身）は、その動作が直接自分に向けられていなくても、他者の行動によって迷惑を受けたことを表します：「雨に降られた」。使役受身は「使役（させる）＋受身（られる）」で「〜させられる」となり、「意志に反して〜させられる」という意味です。グループ1動詞では「飲まされる」のような短縮形も口語でよく使われます。"
        },
        examples: [
            { native: "その映画は世界中で見られています。", romanized: "Sono eiga wa sekaijuu de mirarete imasu.", translation: "That film is being watched all over the world." },
            { native: "電車の中で足を踏まれた。", romanized: "Densha no naka de ashi wo fumareta.", translation: "My foot was stepped on in the train (and I was bothered by it)." },
            { native: "上司に残業させられた。", romanized: "Joushi ni zangyou saserareta.", translation: "I was made to work overtime by my boss." },
            { native: "子どもの頃、嫌いな野菜を食べさせられた。", romanized: "Kodomo no koro, kirai na yasai wo tabesaserareta.", translation: "When I was a child, I was made to eat vegetables I didn't like." }
        ]
    },
    {
        id: "ja-g-b2-2",
        level: "B2",
        title: "尊敬語・謙譲語 — Sonkeigo & Kenjōgo (Respectful & Humble Speech)",
        explanation: {
            native: "Keigo (敬語) is the system of honorific language in Japanese. It has two main active forms: Sonkeigo (尊敬語) — respectful language used to elevate the actions of the person you are speaking to or about; and Kenjōgo (謙譲語) — humble language used to lower your own actions when speaking to someone of higher status. Key sonkeigo verbs: いらっしゃる (irassharu) — the respectful form of いる/行く/来る; おっしゃる (ossharu) — respectful form of 言う; なさる (nasaru) — respectful form of する; くださる (kudasaru) — respectful form of くれる. Key kenjōgo verbs: まいる (mairu) — humble form of 行く/来る; いたす (itasu) — humble form of する; 申す (mōsu) — humble form of 言う; いただく (itadaku) — humble form of もらう/食べる/飲む. The polite neutral form (丁寧語, teineigo) simply uses です/ます.",
            target: "敬語は相手や第三者への敬意を表す日本語の特別な表現システムです。主に「尊敬語」と「謙譲語」に分けられます。尊敬語は目上の人の行動を高めるために使います：いらっしゃる（いる・行く・来るの尊敬語）、おっしゃる（言うの尊敬語）、なさる（するの尊敬語）、くださる（くれるの尊敬語）。謙譲語は自分や身内の行動をへりくだって表現し、相手を間接的に高めます：まいる（行く・来るの謙譲語）、いたす（するの謙譲語）、申す（言うの謙譲語）、いただく（もらう・食べる・飲むの謙譲語）。また「丁寧語」はです・ます体で、中立的な丁寧さを表します。ビジネスや公式な場面では尊敬語と謙譲語を正確に使い分けることが大切です。"
        },
        examples: [
            { native: "先生はもういらっしゃいますか？", romanized: "Sensei wa mou irasshaimasu ka?", translation: "Is the teacher already here/there?" },
            { native: "部長がそのようにおっしゃいました。", romanized: "Buchou ga sono you ni osshaimashita.", translation: "The department head said so." },
            { native: "明日、そちらにまいります。", romanized: "Ashita, sochira ni mairimasu.", translation: "I will come to your place tomorrow (humble)." },
            { native: "私が説明いたします。", romanized: "Watashi ga setsumei itashimasu.", translation: "I will explain (humble form)." }
        ]
    },
    {
        id: "ja-g-b2-3",
        level: "B2",
        title: "複合条件形 — Complex Conditionals: たら vs ば vs なら vs と",
        explanation: {
            native: "Japanese has four main conditional forms, each with distinct nuances. 〜たら (tara): formed from the plain past + ら. The most versatile conditional; can express 'when/if X happens (then Y)'. The result can be past, present, or future. Often implies a sequential 'once X is done, Y happens'. 〜ば (ba): expresses a hypothetical or general truth condition. The main clause is typically a desired or hoped-for result. Cannot be used when the result is a command or request directed to the listener. 〜なら (nara): attached to a noun, verb plain form, or adjective. Means 'if it is the case that X / given that X'. Used when the speaker bases the condition on information received from the listener. 〜と (to): expresses an automatic, inevitable, or habitual consequence. The result clause cannot be a volitional action, command, or request. Often used for natural laws, directions, or habitual results: 春になると桜が咲く.",
            target: "日本語には主な条件形が4つあり、それぞれニュアンスが異なります。【〜たら】：た形＋ら。最も汎用的な条件形で「〜したら、〜」という順序・結果を表します。結果節には命令・依頼も使えます。【〜ば】：仮定・一般的真理を表します。結果節は話者が望む状態が多く、命令・依頼（聴者への）は使えません。【〜なら】：相手から得た情報を前提にして「〜ならば、〜」と表します。名詞・普通形に接続します。【〜と】：必然的・習慣的結果を表します。結果節には意志・命令・依頼は使えません。自然法則や道順説明によく使われます：「春になると桜が咲く」。"
        },
        examples: [
            { native: "駅に着いたら、電話してください。", romanized: "Eki ni tsuitara, denwa shite kudasai.", translation: "Once you arrive at the station, please call me. (たら: sequential condition)" },
            { native: "もっと練習すれば、上手になれる。", romanized: "Motto renshuu sureba, jouzu ni nareru.", translation: "If you practice more, you can become skilled. (ば: hypothetical)" },
            { native: "東京に行くなら、浅草を見てきてください。", romanized: "Tokyo ni iku nara, Asakusa wo mite kite kudasai.", translation: "If you're going to Tokyo, please go see Asakusa. (なら: given that)" },
            { native: "この道をまっすぐ行くと、駅に着きます。", romanized: "Kono michi wo massugu iku to, eki ni tsukimasu.", translation: "If you go straight down this road, you will reach the station. (と: automatic result)" }
        ]
    },
    {
        id: "ja-g-b2-4",
        level: "B2",
        title: "後悔・願望の表現 — Expressing Regret & Wishes: ～ばよかった, ～ておけばよかった",
        explanation: {
            native: "To express regret about something that did not happen (but should have), use the conditional ば-form + よかった: 〜ればよかった / 〜ばよかった. This means 'I should have done X (but I didn't)' or 'It would have been good if X'. To express regret about not preparing or doing something in advance, use the て-form + おく (to do in advance) in its plain past form + ばよかった: 〜ておけばよかった. This conveys 'I should have done X ahead of time'. The negative equivalent — regretting that you did something — uses the negative plain past + ばよかった: 〜なければよかった (I wish I hadn't done X). These patterns are commonly combined with emotional expressions like 残念だ (it's a shame), しまった (I messed up), or やっぱり (as I thought).",
            target: "「〜ればよかった／〜ばよかった」は、しなかったことへの後悔を表します。意味は「〜すればよかったのに（しなかった）」です。条件形（ば形）＋「よかった」で作ります：「もっと勉強すればよかった」。「〜ておけばよかった」は、事前に準備・対処しなかったことへの後悔を表します：「傘を持っておけばよかった」。逆に「してしまったことへの後悔」は「〜なければよかった」：「あんなことを言わなければよかった」。これらの表現はしばしば「残念だ」「しまった」「やっぱり」などの感情表現と一緒に使われます。"
        },
        examples: [
            { native: "もっと早く起きればよかった。", romanized: "Motto hayaku okireba yokatta.", translation: "I should have woken up earlier." },
            { native: "事前に予約しておけばよかった。", romanized: "Jizen ni yoyaku shite okeba yokatta.", translation: "I should have made a reservation in advance." },
            { native: "あんなことを言わなければよかった。", romanized: "Anna koto wo iwanakereba yokatta.", translation: "I wish I hadn't said such a thing." },
            { native: "もっと日本語を勉強しておけばよかったと後悔している。", romanized: "Motto nihongo wo benkyou shite okeba yokatta to koukai shite iru.", translation: "I regret that I didn't study Japanese more in advance." }
        ]
    },
    {
        id: "ja-g-b2-5",
        level: "B2",
        title: "名詞化・抽象構文 — Nominalisation & Abstract Constructions: こと vs の, ～という",
        explanation: {
            native: "Both こと (koto) and の (no) can nominalise verb phrases (turn them into noun phrases). こと is used: (1) with abstract or reported facts/ideas: 彼が来ることは知っている; (2) in set expressions like 〜ことができる, 〜ことがある, 〜ことにする; (3) in formal or written contexts. の is used: (1) when describing something that can be directly perceived (seen, heard, felt): 彼女が歌うのを聞いた; (2) in explanatory の (nominaliser in sentences ending in のだ / のです). They are sometimes interchangeable, but の feels more immediate and concrete. 〜という (to iu) is used to: (1) define or label: 「民主主義」という考え方 (the idea called democracy); (2) quote or report speech/content: 明日来るという (he says he is coming tomorrow); (3) indicate that something fits a category or description (formal/literary).",
            target: "「こと」と「の」はどちらも動詞句を名詞化しますが、使い分けがあります。【こと】は抽象的・観念的な内容や事実を表します：「彼が来ることは知っている」。また、「〜ことができる」「〜ことがある」「〜ことにする」などの固定表現でも使います。フォーマルな文体でよく使われます。【の】は直接知覚できる（見た・聞いた・感じた）内容を表します：「彼女が歌うのを聞いた」。また説明の「のだ／のです」でも使います。両者が交換可能な場合もありますが、「の」のほうがより具体的・直接的な感覚を与えます。【〜という】は「〜と言われる」「〜と呼ばれる」という定義・引用・名付けの表現です：「民主主義という考え方」「明日来るという連絡があった」。"
        },
        examples: [
            { native: "毎日運動することは健康に良い。", romanized: "Mainichi undou suru koto wa kenkou ni yoi.", translation: "Exercising every day is good for your health. (こと: abstract fact)" },
            { native: "彼女がピアノを弾くのを聞いた。", romanized: "Kanojo ga piano wo hiku no wo kiita.", translation: "I heard her playing the piano. (の: directly perceived)" },
            { native: "「持続可能性」という概念が注目されている。", romanized: "\"Jizoku kanousei\" to iu gainen ga chuumoku sarete iru.", translation: "The concept called 'sustainability' is attracting attention." },
            { native: "明日の会議が中止になるということを聞きました。", romanized: "Ashita no kaigi ga chuushi ni naru to iu koto wo kikimashita.", translation: "I heard that tomorrow's meeting will be cancelled." }
        ]
    }
]
