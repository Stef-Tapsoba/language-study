// src/data/japanese/culture/c1.ts
import { CultureEpisode } from "../../../types"

export const jaC1Culture: CultureEpisode[] = [
    {
        id: "ja-c-c1-1",
        language: "ja",
        level: "C1",
        category: "arts",
        region: "all-japanese",
        title: {
            native: "Haiku and the Japanese Aesthetic — wabi, sabi, and mono no aware",
            target: "俳句と日本の美意識 — 侘び・寂び・もののあわれ"
        },
        subtitle: "In seventeen syllables, haiku captures the Japanese sense of beauty: fleeting, imperfect, and quietly profound.",

        photos: [
            {
                url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
                caption: {
                    native: "Cherry blossoms — the central image of mono no aware, beauty inseparable from its passing",
                    target: "桜 — もののあわれの中心的なイメージ。その散りゆく姿と切り離せない美しさ"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800",
                caption: {
                    native: "A moss-covered stone lantern — the quiet beauty of wabi-sabi",
                    target: "苔むした石灯籠 — 侘び寂びの静かな美しさ"
                }
            }
        ],

        body: {
            target: `俳句は世界で最も短い詩形式のひとつであり、日本が世界に誇る文学的遺産です。五・七・五の三句十七音節から成るこの詩形式は、十七世紀の俳人・松尾芭蕉によって芸術的高みへと導かれました。芭蕉の代表作「古池や蛙飛び込む水の音」は、わずか十七音節でありながら、瞬間の静寂と動き、永遠と刹那の交差を見事に表現しています。

俳句の本質を理解するには、日本の美意識を支える三つの概念を理解する必要があります。

「侘び（わび）」は、簡素さ、不完全さ、そして質素な美しさを肯定する概念です。余分なものをそぎ落とした中に宿る静かな美を指します。茶道における粗削りな茶碗、庭園の非対称な石配置、そして俳句の省略の美学にそれは現れます。

「寂び（さび）」は時間の経過がもたらす風化・枯れ・孤独の美しさです。錆びた鉄、苔むした石、古びた木材——それらは欠点ではなく、時間の蓄積という美を体現します。侘びと寂びはしばしばひとつの概念「侘び寂び」として語られます。

「もののあわれ」は平安時代の文学から生まれた概念で、「物事の哀愁」または「物事の感動的な哀切」と訳されます。桜の花が最も美しいのは、まさに散り始めた瞬間だという日本人の感性はその典型です。美しさは永続するのではなく、その儚さゆえに美しい。

これらの美意識は現代日本文化のあらゆる場面に溶け込んでいます。建築、デザイン、料理の盛り付け、音楽——ミニマリズムと「余白」への日本的感覚は、西洋的な装飾過多への対極として、今や世界的に注目されています。

俳句は学校教育の一部として今も生きており、現代の日本人も句を詠む習慣を持っています。インターネット上では英語による俳句コミュニティが世界中に広がり、この詩形式は国境を越えた普遍的な表現媒体となっています。`,
            native: `Haiku is one of the shortest poetic forms in the world and a literary heritage of which Japan is justifiably proud. This poetic form, consisting of three phrases of five, seven, and five syllables — seventeen in total — was elevated to an art form in the seventeenth century by the haiku master Matsuo Bashō. His masterwork, "Furuike ya kawazu tobikomu mizu no oto" (The old pond — a frog jumps in — the sound of water), expresses, in just seventeen syllables, the intersection of silence and movement, eternity and the fleeting moment.

To understand the essence of haiku, one must understand three concepts that underpin the Japanese aesthetic.

"Wabi" is the concept of affirming simplicity, imperfection, and austere beauty. It refers to the quiet beauty that dwells in what remains after all the superfluous has been stripped away. It manifests in the rough-hewn tea bowl of the tea ceremony, the asymmetric arrangement of stones in a garden, and the aesthetics of omission in haiku.

"Sabi" is the beauty of weathering, withering, and solitude brought about by the passage of time. Rusted iron, moss-covered stones, aged timber — these embody not flaws but the beauty of accumulated time. Wabi and sabi are often spoken of as a single concept: wabi-sabi.

"Mono no aware" is a concept that emerged from Heian-period literature, translated as 'the pathos of things' or 'the moving melancholy of things'. The Japanese sensibility that cherry blossoms are most beautiful precisely at the moment they begin to scatter is its defining example. Beauty does not endure — it is beautiful because of its transience.

These aesthetic sensibilities permeate every aspect of modern Japanese culture. Architecture, design, food presentation, music — the Japanese sense of minimalism and "empty space" (ma) now attracts worldwide attention as the antithesis of Western excess.

Haiku remains alive as part of school education, and modern Japanese people still maintain the custom of composing verses. Online, English-language haiku communities have spread across the world, making this poetic form a universal medium of expression that transcends national borders.`
        },

        cultureVocab: [
            {
                word: "俳句",
                romanized: "haiku",
                translation: "haiku — a 5-7-5 syllable poem",
                culturalNote: "Haiku traditionally includes a kigo (seasonal word) — a reference to nature or a season — that anchors the poem in the physical world. This reflects the Shinto-influenced Japanese view that human feeling and natural world are inseparable."
            },
            {
                word: "侘び寂び",
                romanized: "wabi-sabi",
                translation: "the beauty of imperfection, impermanence, and incompleteness",
                culturalNote: "Wabi-sabi has become one of the most internationally discussed Japanese concepts. It stands in direct philosophical contrast to Western ideals of beauty as symmetry, permanence, and perfection. In Japanese aesthetics, a cracked tea bowl repaired with gold (kintsugi) is more beautiful than an unbroken one."
            },
            {
                word: "もののあわれ",
                romanized: "mono no aware",
                translation: "the pathos of things — bittersweet sensitivity to impermanence",
                culturalNote: "Coined by the eighteenth-century scholar Motoori Norinaga in his analysis of 'The Tale of Genji'. It describes the emotional response — tender, melancholy, touched — that arises from encountering something beautiful that will not last."
            },
            {
                word: "間",
                romanized: "ma",
                translation: "negative space, pause, emptiness as a compositional element",
                culturalNote: "'Ma' is the deliberate use of empty space or silence as an active element of art, design, and music. In haiku, what is left unsaid is as important as what is said. In architecture, the empty space of a room is considered as carefully as the walls. Japanese garden design, ikebana flower arrangement, and noh theatre all use ma extensively."
            },
            {
                word: "切れ字",
                romanized: "kireji",
                translation: "cutting word — a grammatical pause or break in haiku",
                culturalNote: "The kireji (e.g., ya, kana, or keri) creates an emotional break or juxtaposition between two images. It is untranslatable and considered one of the most difficult aspects of haiku to render in other languages. It functions like a drawn breath — a moment of silence between two states of perception."
            }
        ],

        questions: [
            {
                id: "ja-c-c1-1-q1",
                type: "comprehension",
                prompt: {
                    native: "According to the passage, what does 'sabi' specifically refer to?",
                    target: "文章によると、「寂び」は具体的に何を指していますか？"
                },
                options: [
                    "The beauty of weathering, withering, and solitude brought about by the passage of time",
                    "The simplicity and austerity found in stripped-back design",
                    "The bittersweet sadness at encountering something beautiful that will not last",
                    "The use of empty space as a compositional element in art"
                ],
                answer: "The beauty of weathering, withering, and solitude brought about by the passage of time"
            },
            {
                id: "ja-c-c1-1-q2",
                type: "comprehension",
                prompt: {
                    native: "How does the passage explain why cherry blossoms are considered especially beautiful in Japan?",
                    target: "文章では、日本で桜が特に美しいとされる理由をどのように説明していますか？"
                },
                options: [
                    "They are beautiful because of their transience — their beauty is inseparable from the fact that they will scatter",
                    "They have the most vivid pink colour of any flower found in nature",
                    "They bloom in perfect symmetry, representing the Japanese ideal of order",
                    "They have been cultivated for over a thousand years, making them a symbol of endurance"
                ],
                answer: "They are beautiful because of their transience — their beauty is inseparable from the fact that they will scatter"
            },
            {
                id: "ja-c-c1-1-q3",
                type: "reflection",
                prompt: {
                    native: "The Japanese aesthetic of wabi-sabi embraces imperfection and impermanence as sources of beauty. Does your own culture's aesthetic tradition tend more towards ideals of perfection and permanence, or are there comparable ideas that value the incomplete or the fleeting?",
                    target: "侘び寂びの美意識は、不完全さや無常を美の源として捉えます。あなた自身の文化の美的伝統は、完璧さや永続性という理想に向かう傾向がありますか？それとも、未完成なものや一時的なものに価値を見出す似たような考え方がありますか？"
                }
            }
        ],

        didYouKnow: {
            native: "Matsuo Bashō's most famous haiku — 'The old pond / a frog jumps in / the sound of water' — was reportedly composed in 1686 as a spontaneous response to the sound of a frog jumping into the pond outside his home in Edo (Tokyo). It is now considered one of the most analysed poems in world literature. The simplicity is deceptive: scholars have spent centuries unpacking the philosophical resonance between the eternal silence of the old pond and the single, unrepeatable sound that breaks it.",
            target: "松尾芭蕉の最も有名な俳句「古池や蛙飛び込む水の音」は、1686年に江戸（東京）の自宅の外の池にカエルが飛び込む音を聞いて即興で詠まれたと伝えられています。現在では世界文学の中で最も分析された詩のひとつとされています。その単純さは見かけ倒しです——学者たちは何世紀もかけて、古池の永遠の静寂と、それを破る一度限りの音との哲学的共鳴を解き明かそうとしてきました。"
        }
    }
]
