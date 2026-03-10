import { ReadingPassage } from "../../../types"

export const c1Reading: ReadingPassage[] = [
    {
        id: "ja-r-c1-1",
        level: "C1",
        category: "culture",
        title: "わびさびと間の美学",
        body: {
            target: "日本の美学は、西洋の美的理念とは根本的に異なる価値観に基づいている。侘び寂びは不完全さ・無常・未完成の中に深い美しさを見出す概念であり、千利休が完成させた茶道の精神に深く根ざしている。欠けた茶碗や苔むした石、褪せた色合いの中にこそ真の美がある、という考え方は、永続性と完全性を尊ぶ西洋の美意識とは対極をなす。一方、「間」は空間的・時間的な「空白」が持つ意味の概念であり、能楽・音楽・建築・書道のあらゆる分野に浸透している。沈黙が言葉以上に語り、余白が描かれた部分よりも雄弁であるという逆説的な美学は、日本文化全体を貫く通奏低音として今日もなお息づいている。これらの美的概念は、効率・豊かさ・完全性を追求する現代社会への深い問いかけでもある。",
            native: "Japanese aesthetics is based on values fundamentally different from Western aesthetic ideals. Wabi-sabi is the concept of finding deep beauty in imperfection, impermanence, and incompleteness, deeply rooted in the spirit of the tea ceremony perfected by Sen no Rikyū. The idea that true beauty lies in a chipped tea bowl, a moss-covered stone, or faded colours stands in stark contrast to the Western aesthetic that values permanence and perfection. Meanwhile, 'ma' is the concept of meaning held by spatial and temporal 'emptiness', permeating all fields from Noh theatre and music to architecture and calligraphy. The paradoxical aesthetic — that silence speaks more than words, that negative space is more eloquent than what is depicted — continues to breathe today as a basso continuo running through the whole of Japanese culture. These aesthetic concepts are also a profound questioning of modern society's pursuit of efficiency, abundance, and perfection."
        },
        vocabGloss: [
            { word: "侘び寂び", translation: "wabi-sabi (beauty of imperfection and impermanence)", romanized: "wabi-sabi" },
            { word: "無常", translation: "impermanence / transience", romanized: "mujō" },
            { word: "茶道", translation: "the tea ceremony / the way of tea", romanized: "sadō" },
            { word: "余白", translation: "negative space / blank space / margin", romanized: "yohaku" },
            { word: "逆説的", translation: "paradoxical", romanized: "gyakusetsu-teki" },
            { word: "通奏低音", translation: "basso continuo / underlying theme running throughout", romanized: "tsūsō-teion" }
        ],
        questions: [
            {
                id: "ja-r-c1-1-q1",
                level: "C1",
                prompt: "According to the passage, which figure is most associated with perfecting wabi-sabi in the tea ceremony?",
                options: ["Matsuo Bashō", "Sen no Rikyū", "Zeami Motokiyo", "Murasaki Shikibu"],
                answer: "Sen no Rikyū"
            },
            {
                id: "ja-r-c1-1-q2",
                level: "C1",
                prompt: "How does the passage describe the relationship between wabi-sabi and Western aesthetics?",
                options: [
                    "They share the same appreciation for perfection",
                    "Wabi-sabi was influenced by Western ideas",
                    "They stand in stark contrast — wabi-sabi values imperfection while Western aesthetics values permanence",
                    "Both value completeness but express it differently"
                ],
                answer: "They stand in stark contrast — wabi-sabi values imperfection while Western aesthetics values permanence"
            },
            {
                id: "ja-r-c1-1-q3",
                level: "C1",
                prompt: "The concept of 'ma' is described as permeating which fields?",
                options: [
                    "Only architecture and music",
                    "Noh theatre, music, architecture, and calligraphy",
                    "Tea ceremony, painting, and poetry",
                    "Film, literature, and sculpture"
                ],
                answer: "Noh theatre, music, architecture, and calligraphy"
            },
            {
                id: "ja-r-c1-1-q4",
                level: "C1",
                prompt: "What does the passage say these aesthetic concepts represent in relation to modern society?",
                options: [
                    "A celebration of technological progress",
                    "A return to pre-modern rural life",
                    "A deep questioning of the modern pursuit of efficiency, abundance, and perfection",
                    "An endorsement of minimalist design"
                ],
                answer: "A deep questioning of the modern pursuit of efficiency, abundance, and perfection"
            }
        ]
    },
    {
        id: "ja-r-c1-2",
        level: "C1",
        category: "history",
        title: "明治維新とその影響",
        body: {
            target: "一八六八年に始まった明治維新は、日本の歴史における最も劇的な転換点の一つである。江戸幕府の崩壊と天皇への大政奉還に始まり、新政府は富国強兵・殖産興業を国策として採用し、急速な近代化を推し進めた。廃藩置県によって旧来の封建的支配体制は解体され、中央集権国家が確立された。教育・法律・軍事・産業のあらゆる分野で西洋モデルが積極的に導入され、「文明開化」の名のもとに社会は大きく変容した。しかし、この変革は一面的ではなかった。岩倉使節団が欧米を視察して帰国した後、和魂洋才の理念のもとに、西洋の制度・技術を採用しながらも日本固有の精神・文化を守ろうとする動きが強まった。明治維新は日本を列強の一員に押し上げる一方で、アジアにおける帝国主義的膨張という負の側面をも孕んでいた。その功罪を冷静に分析することが、現代の歴史学に求められている。",
            native: "The Meiji Restoration, which began in 1868, is one of the most dramatic turning points in Japanese history. Beginning with the collapse of the Edo shogunate and the restoration of imperial rule, the new government adopted the policies of 'rich nation, strong army' and 'promote industry' and pushed forward rapid modernisation. Through the abolition of domains and establishment of prefectures, the old feudal system of control was dismantled and a centralised state was established. Western models were actively introduced in all fields — education, law, military, and industry — and society was greatly transformed under the banner of 'civilisation and enlightenment'. However, this transformation was not one-dimensional. After the Iwakura Mission returned from inspecting Europe and America, under the ideal of 'Japanese spirit with Western learning', a movement to preserve Japan's unique spirit and culture while adopting Western institutions and technology grew stronger. While the Meiji Restoration elevated Japan to the ranks of the great powers, it also harboured the negative aspect of imperialist expansion in Asia. A calm analysis of its merits and faults is required of modern historiography."
        },
        vocabGloss: [
            { word: "大政奉還", translation: "restoration of imperial rule / return of political power to the Emperor", romanized: "taisei-hōkan" },
            { word: "富国強兵", translation: "rich nation, strong army (Meiji policy)", romanized: "fukoku-kyōhei" },
            { word: "廃藩置県", translation: "abolition of domains and establishment of prefectures", romanized: "haihan-chiken" },
            { word: "文明開化", translation: "civilisation and enlightenment (Meiji-era westernisation)", romanized: "bunmei-kaika" },
            { word: "和魂洋才", translation: "Japanese spirit with Western learning", romanized: "wakon-yōsai" },
            { word: "帝国主義", translation: "imperialism", romanized: "teikoku-shugi" }
        ],
        questions: [
            {
                id: "ja-r-c1-2-q1",
                level: "C1",
                prompt: "What were the two main national policies the Meiji government adopted, according to the passage?",
                options: [
                    "Democracy and free trade",
                    "Rich nation, strong army, and promote industry",
                    "Cultural preservation and military isolation",
                    "Constitutional monarchy and parliamentary democracy"
                ],
                answer: "Rich nation, strong army, and promote industry"
            },
            {
                id: "ja-r-c1-2-q2",
                level: "C1",
                prompt: "What was the purpose of the abolition of domains and establishment of prefectures (廃藩置県)?",
                options: [
                    "To restore the shogunate system",
                    "To allow Western powers to govern Japan",
                    "To dismantle the feudal system and establish a centralised state",
                    "To promote regional autonomy"
                ],
                answer: "To dismantle the feudal system and establish a centralised state"
            },
            {
                id: "ja-r-c1-2-q3",
                level: "C1",
                prompt: "What ideal did the Meiji government adopt after the Iwakura Mission's return?",
                options: [
                    "Total adoption of Western culture and abandonment of Japanese traditions",
                    "Complete rejection of Western influence",
                    "Japanese spirit with Western learning (和魂洋才)",
                    "Return to Edo-period isolationism"
                ],
                answer: "Japanese spirit with Western learning (和魂洋才)"
            },
            {
                id: "ja-r-c1-2-q4",
                level: "C1",
                prompt: "What negative aspect of the Meiji Restoration does the passage mention?",
                options: [
                    "Economic failure and poverty",
                    "Loss of all traditional culture",
                    "Imperialist expansion in Asia",
                    "Military defeat by Western powers"
                ],
                answer: "Imperialist expansion in Asia"
            }
        ]
    },
    {
        id: "ja-r-c1-3",
        level: "C1",
        category: "literature",
        title: "芥川龍之介の文学世界",
        body: {
            target: "芥川龍之介（一八九二〜一九二七）は、日本近代文学史において独自の地位を占める作家である。「羅生門」「藪の中」「地獄変」など、古典や説話を大胆に再解釈した作品群は、人間の利己心・道徳的曖昧さ・現実の多義性を鋭く問い直すものだ。芥川の文学的方法論の核心にあるのは、単純な善悪の二項対立を拒否し、人間存在の複雑さと矛盾をそのまま描き出す姿勢にある。「藪の中」において同一の出来事が複数の証言者によってまったく異なるように語られる構造は、客観的真実の不可能性という主題を前衛的な手法で体現しており、現代の「信頼できない語り手」という文学概念の先駆けとも言える。芥川の作品に流れる深い懐疑主義と美的洗練は、彼が三十五歳で自ら命を絶つ直前に書いた「ある阿呆の一生」の中で頂点に達する。毎年授与される芥川賞は、その文学的遺産を現代に継承する制度として機能している。",
            native: "Akutagawa Ryūnosuke (1892–1927) occupies a unique position in the history of modern Japanese literature. His works — including 'Rashōmon', 'In a Grove', and 'Hell Screen' — which boldly reinterpret classical tales and legends, sharply question human selfishness, moral ambiguity, and the polyvalence of reality. At the core of Akutagawa's literary methodology is the refusal to accept a simple binary opposition of good and evil, and instead depicting the complexity and contradictions of human existence as they are. The structure of 'In a Grove', in which the same event is narrated in completely different ways by multiple witnesses, embodies the theme of the impossibility of objective truth through an avant-garde technique, and can also be considered a forerunner of the modern literary concept of the 'unreliable narrator'. The deep scepticism and aesthetic refinement that run through Akutagawa's works reach their peak in 'A Fool's Life', written just before he took his own life at the age of thirty-five. The Akutagawa Prize, awarded annually, functions as an institution that carries his literary legacy into the present."
        },
        vocabGloss: [
            { word: "利己心", translation: "selfishness / self-interest", romanized: "rikoshin" },
            { word: "多義性", translation: "polyvalence / multiple meanings / ambiguity", romanized: "tagishin" },
            { word: "二項対立", translation: "binary opposition / dichotomy", romanized: "nikō-tairitsu" },
            { word: "信頼できない語り手", translation: "unreliable narrator", romanized: "shinrai dekinai kataritte" },
            { word: "懐疑主義", translation: "scepticism", romanized: "kaigi-shugi" },
            { word: "前衛的", translation: "avant-garde", romanized: "zen'ei-teki" }
        ],
        questions: [
            {
                id: "ja-r-c1-3-q1",
                level: "C1",
                prompt: "What is described as 'the core of Akutagawa's literary methodology'?",
                options: [
                    "Faithful retelling of classical tales",
                    "Celebrating traditional Japanese values",
                    "Refusing simple binary opposition and depicting human complexity",
                    "Writing short, simple prose accessible to all readers"
                ],
                answer: "Refusing simple binary opposition and depicting human complexity"
            },
            {
                id: "ja-r-c1-3-q2",
                level: "C1",
                prompt: "What modern literary concept does the passage say 'In a Grove' (藪の中) foreshadows?",
                options: [
                    "Stream of consciousness",
                    "Magical realism",
                    "The unreliable narrator",
                    "The epistolary novel"
                ],
                answer: "The unreliable narrator"
            },
            {
                id: "ja-r-c1-3-q3",
                level: "C1",
                prompt: "Which of Akutagawa's works does the passage say was written just before his death?",
                options: ["羅生門 (Rashōmon)", "藪の中 (In a Grove)", "地獄変 (Hell Screen)", "ある阿呆の一生 (A Fool's Life)"],
                answer: "ある阿呆の一生 (A Fool's Life)"
            },
            {
                id: "ja-r-c1-3-q4",
                level: "C1",
                prompt: "What does the passage say the Akutagawa Prize does?",
                options: [
                    "Funds translations of Akutagawa's work into foreign languages",
                    "Carries his literary legacy into the present",
                    "Rewards writers who imitate his style",
                    "Promotes classical Japanese literature internationally"
                ],
                answer: "Carries his literary legacy into the present"
            }
        ]
    },
    {
        id: "ja-r-c1-4",
        level: "C1",
        category: "everyday",
        title: "現代社会とAI技術の倫理",
        body: {
            target: "人工知能の急速な発展は、現代社会に前例のない倫理的課題をもたらしている。生成AIは創造的業務・医療診断・法律判断の補助など、かつては人間固有の領域とみなされてきた分野にまで浸透しつつある。この技術革新がもたらす恩恵は計り知れないが、同時に見過ごすことのできない問題も浮上している。まず、アルゴリズムが内包する偏見——すなわち認知バイアスを学習データから継承すること——は、採用・融資・司法判断などの場面で特定集団への差別的帰結をもたらしかねない。次に、深層学習モデルの判断プロセスは多くの場合「ブラックボックス」として機能し、説明可能性の欠如が説明責任の観点から深刻な問題となっている。さらに、生成AIによる偽情報の大量生成は、民主主義の基盤をなす情報環境を根本から脅かしかねない。こうした課題に対応するためには、技術的解決策のみならず、倫理的枠組みと法的規制の整備が不可欠であり、社会全体でのAIガバナンスの構築が急務となっている。",
            native: "The rapid development of artificial intelligence is bringing unprecedented ethical challenges to contemporary society. Generative AI is permeating fields once considered uniquely human — creative work, medical diagnosis, assistance with legal judgements, and more. The benefits brought by this technological innovation are immeasurable, but at the same time, problems that cannot be overlooked are surfacing. First, the bias inherent in algorithms — namely, the inheritance of cognitive biases from training data — can lead to discriminatory outcomes against specific groups in contexts such as employment, lending, and judicial decisions. Next, the decision-making process of deep learning models often functions as a 'black box', and the lack of explainability has become a serious problem from the perspective of accountability. Furthermore, the mass generation of disinformation by generative AI can fundamentally threaten the information environment that forms the foundation of democracy. To address these challenges, not only technical solutions but also the development of ethical frameworks and legal regulations are indispensable, and the construction of AI governance across society as a whole has become an urgent task."
        },
        vocabGloss: [
            { word: "生成AI", translation: "generative AI", romanized: "seisei-AI" },
            { word: "認知バイアス", translation: "cognitive bias", romanized: "ninchi-baiasu" },
            { word: "説明可能性", translation: "explainability / interpretability", romanized: "setsumei-kanōsei" },
            { word: "説明責任", translation: "accountability", romanized: "setsumei-sekinin" },
            { word: "偽情報", translation: "disinformation / false information", romanized: "gijōhō" },
            { word: "AIガバナンス", translation: "AI governance", romanized: "AI-gabannansu" }
        ],
        questions: [
            {
                id: "ja-r-c1-4-q1",
                level: "C1",
                prompt: "According to the passage, how do algorithms perpetuate bias?",
                options: [
                    "By being programmed by biased engineers",
                    "By inheriting cognitive biases from training data",
                    "By deliberately discriminating against minorities",
                    "By prioritising efficiency over fairness"
                ],
                answer: "By inheriting cognitive biases from training data"
            },
            {
                id: "ja-r-c1-4-q2",
                level: "C1",
                prompt: "What does the passage say about the 'black box' problem of deep learning models?",
                options: [
                    "It makes the models more efficient",
                    "It is a technical limitation that has been fully solved",
                    "The lack of explainability creates serious accountability problems",
                    "It only affects medical applications"
                ],
                answer: "The lack of explainability creates serious accountability problems"
            },
            {
                id: "ja-r-c1-4-q3",
                level: "C1",
                prompt: "How does the passage describe the threat of generative AI disinformation?",
                options: [
                    "It threatens individual privacy",
                    "It fundamentally threatens the information environment underlying democracy",
                    "It creates economic losses for media companies",
                    "It mainly affects academic research"
                ],
                answer: "It fundamentally threatens the information environment underlying democracy"
            },
            {
                id: "ja-r-c1-4-q4",
                level: "C1",
                prompt: "What does the passage say is urgently needed to address AI ethics challenges?",
                options: [
                    "Banning AI development entirely",
                    "Technical solutions alone",
                    "Ethical frameworks, legal regulations, and AI governance across society",
                    "International treaties to limit AI to military use"
                ],
                answer: "Ethical frameworks, legal regulations, and AI governance across society"
            }
        ]
    }
]
