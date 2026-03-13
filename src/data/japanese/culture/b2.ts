// src/data/japanese/culture/b2.ts
import { CultureEpisode } from "../../../types"

export const jaB2Culture: CultureEpisode[] = [
    {
        id: "ja-c-b2-1",
        language: "ja",
        level: "B2",
        category: "history",
        region: "kyoto",
        title: {
            native: "Samurai and Bushido — the code that shaped Japan",
            target: "侍と武士道 — 日本を形作った精神"
        },
        subtitle: "The samurai class shaped Japanese culture for seven centuries — and the values of bushido still echo in modern boardrooms, sports halls, and daily life.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
                caption: {
                    native: "Nijo Castle in Kyoto — a monument to samurai political power",
                    target: "京都の二条城 — 武士の政治的権力の象徴"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800",
                caption: {
                    native: "Traditional Japanese armour — the aesthetics of the warrior class",
                    target: "日本の伝統的な鎧 — 武士階級の美学"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800",
                caption: {
                    native: "Kendo practitioners in Japan — the martial spirit lives on",
                    target: "剣道の稽古 — 武道の精神は今も生き続ける"
                }
            }
        ],

        body: {
            target: `武士（さむらい）は、日本の歴史において独自の支配階級を形成した戦士たちです。彼らの台頭は十二世紀に始まり、徳川幕府が終わりを告げる一八六八年（明治維新）まで、約七百年にわたって日本の社会と政治を支配しました。

武士の行動規範は「武士道」と呼ばれます。武士道は文書として定められた法典ではなく、長い歴史の中で形成された倫理的・精神的な価値観の体系です。その核心には七つの徳目があります。義（正しい行い）、勇（勇気）、仁（思いやり）、礼（礼儀）、誠（誠実さ）、名誉（誇り）、忠義（主君への忠誠）です。

特に重要なのは「名誉」の概念です。武士にとって、名誉を失うことは死よりも恐ろしいことでした。そのため、戦いに敗れた場合や主君を失った場合、「切腹」という自害の儀式が行われることがありました。これは外部の者には残酷に見えますが、武士道の観点からは名誉ある死を選ぶ行為でした。

徳川時代（一六〇三—一八六八年）には、日本は二百五十年以上にわたる平和な時代を経験しました。武士たちは戦士としての役割を失い、官僚や行政官としての役割を担うようになりました。この時代に武士道は文化的・哲学的概念として洗練されていきます。

明治維新によって武士階級は廃止されましたが、武士道の精神は形を変えて生き続けています。現代の日本のビジネス文化における忠誠心、集団への献身、恥の文化（はじ）、上下関係の厳格さ、そして剣道・柔道・空手などの武道の倫理観には、いずれも武士道の影響を明確に見て取ることができます。`,
            native: `Samurai were warriors who formed a distinctive ruling class in Japanese history. Their rise began in the twelfth century, and for approximately seven hundred years — until the Meiji Restoration ended the Tokugawa shogunate in 1868 — they dominated Japanese society and politics.

The code of conduct for samurai is called bushido. Bushido is not a codified legal document but a system of ethical and spiritual values that formed over a long history. At its core are seven virtues: gi (righteousness), yū (courage), jin (benevolence), rei (respect), makoto (sincerity), meiyo (honour), and chūgi (loyalty to one's lord).

Particularly important is the concept of honour. For a samurai, losing honour was more terrifying than death. As a result, in cases of defeat in battle or the loss of one's lord, a ritual of self-disembowelment called seppuku was sometimes performed. To outsiders this appears brutal, but from the perspective of bushido it was the act of choosing an honourable death.

During the Tokugawa period (1603–1868), Japan experienced more than 250 years of peace. Samurai lost their role as warriors and took on roles as bureaucrats and administrators. It was during this period that bushido was refined into a cultural and philosophical concept.

Although the samurai class was abolished by the Meiji Restoration, the spirit of bushido has continued to live on in transformed forms. Loyalty in modern Japanese business culture, devotion to the collective, the culture of shame (haji), the strictness of hierarchical relationships, and the ethics of martial arts such as kendo, judo, and karate — all clearly reflect the influence of bushido.`
        },

        cultureVocab: [
            {
                word: "武士道",
                romanized: "bushidō",
                translation: "the way of the warrior — the samurai code of ethics",
                culturalNote: "The concept was popularised internationally by Nitobe Inazō's 1900 book 'Bushido: The Soul of Japan', which presented it to Western audiences as analogous to European chivalry. The book was read by US President Theodore Roosevelt."
            },
            {
                word: "切腹",
                romanized: "seppuku",
                translation: "ritual self-disembowelment (honorable suicide)",
                culturalNote: "Also called harakiri (lit. belly-cutting) in informal speech. Rather than face capture, disgrace, or the death of one's lord, a samurai would perform seppuku. A second (kaishakunin) was often present to deliver a swift beheading to end suffering."
            },
            {
                word: "浪人",
                romanized: "rōnin",
                translation: "masterless samurai",
                culturalNote: "A samurai who had lost his lord (through death or disgrace) became a rōnin — a 'wave man' drifting without anchor. The Forty-Seven Rōnin (Chūshingura), who avenged their lord's death and then performed seppuku, remains Japan's most celebrated story of loyalty."
            },
            {
                word: "恥",
                romanized: "haji",
                translation: "shame, disgrace",
                culturalNote: "The cultural anthropologist Ruth Benedict described Japan as a 'shame culture' (in contrast to Western 'guilt cultures') in her 1946 study 'The Chrysanthemum and the Sword'. While debated by scholars, the concept captures a real dimension of social pressure in Japanese life."
            },
            {
                word: "武道",
                romanized: "budō",
                translation: "martial arts (literally: the way of martial arts)",
                culturalNote: "Modern budō — kendo (sword way), judo (gentle way), aikido (way of harmonious spirit) — are not simply sports. They preserve the ethical and spiritual dimensions of samurai training, including respect for opponents and the cultivation of character."
            }
        ],

        questions: [
            {
                id: "ja-c-b2-1-q1",
                type: "comprehension",
                prompt: {
                    native: "For approximately how long did the samurai class dominate Japanese society?",
                    target: "武士階級は日本社会をおよそ何年にわたって支配しましたか？"
                },
                options: [
                    "Around seven hundred years",
                    "Around two hundred years",
                    "Around one hundred years",
                    "Around one thousand years"
                ],
                answer: "Around seven hundred years"
            },
            {
                id: "ja-c-b2-1-q2",
                type: "comprehension",
                prompt: {
                    native: "How did the role of samurai change during the Tokugawa period?",
                    target: "徳川時代に武士の役割はどのように変わりましたか？"
                },
                options: [
                    "They shifted from warriors to bureaucrats and administrators",
                    "They became merchants and traders in the growing cities",
                    "They emigrated to other Asian countries",
                    "They became religious leaders in Shinto shrines"
                ],
                answer: "They shifted from warriors to bureaucrats and administrators"
            },
            {
                id: "ja-c-b2-1-q3",
                type: "reflection",
                prompt: {
                    native: "The passage argues that bushido values still shape modern Japan. Can you identify a specific example in contemporary Japanese society — workplace, sport, or daily life — where you can see this influence?",
                    target: "文章は武士道の価値観が現代の日本を今も形作っていると主張しています。現代の日本社会（職場、スポーツ、日常生活など）でこの影響を具体的に見られる例を挙げられますか？"
                }
            }
        ],

        didYouKnow: {
            native: "The last samurai was not a Hollywood story. Saigō Takamori led the Satsuma Rebellion in 1877 — the final armed uprising of the samurai class against the modernising Meiji government. After his defeat, he became a folk hero across Japan, admired not for winning but for his refusal to abandon the samurai code in an age that had made it obsolete. Statues of him still stand across Japan today.",
            target: "最後の侍はハリウッドの作り話ではありません。西郷隆盛は1877年に西南戦争を起こしました — 近代化を進める明治政府に対する武士階級最後の武力蜂起です。敗北後、彼は全国で民衆の英雄となりました。勝ったからではなく、武士道を時代遅れにした時代においても、その精神を捨てることを拒んだからです。今日も彼の銅像は日本各地に立っています。"
        }
    }
]
