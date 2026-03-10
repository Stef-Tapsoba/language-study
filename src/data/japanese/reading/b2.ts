import { ReadingPassage } from "../../../types"

export const b2Reading: ReadingPassage[] = [
    {
        id: "ja-r-b2-1",
        level: "B2",
        category: "everyday",
        title: "社会問題と若者世代",
        body: {
            target: "現代の若者は、経済的不平等や気候変動、デジタル技術の急速な発展など、複雑な社会問題に直面している。就職難や奨学金の借金に悩む若者も多く、将来への不安が高まっている。一方で、SNSやデモを通じて社会変革を求める若者の声も大きくなっている。彼らは民主主義の価値を信じ、より公正な社会の実現に向けて積極的に行動しようとしている。このような若者世代の意識変化は、未来の社会を形成する上で重要な意味を持つ。",
            native: "Young people today face complex social problems such as economic inequality, climate change, and the rapid development of digital technology. Many young people are troubled by difficulties finding employment and student loan debt, and anxiety about the future is growing. On the other hand, the voices of young people seeking social change through social media and demonstrations are becoming louder. They believe in the values of democracy and are actively trying to act towards creating a fairer society. This shift in the consciousness of the younger generation has important implications for shaping the society of the future."
        },
        vocabGloss: [
            { word: "不平等", translation: "inequality", romanized: "fubyōdō" },
            { word: "直面している", translation: "are facing / confronting", romanized: "chokumen shite iru" },
            { word: "就職難", translation: "difficulty finding employment", romanized: "shūshoku-nan" },
            { word: "社会変革", translation: "social change / social reform", romanized: "shakai-henkaku" },
            { word: "公正な", translation: "fair / just", romanized: "kōsei na" },
            { word: "意識変化", translation: "change in consciousness / awareness", romanized: "ishiki-henka" }
        ],
        questions: [
            {
                id: "ja-r-b2-1-q1",
                level: "B2",
                prompt: "According to the passage, which of the following is NOT listed as a social problem young people face?",
                options: ["Economic inequality", "Climate change", "Rapid digital development", "Declining birth rate"],
                answer: "Declining birth rate"
            },
            {
                id: "ja-r-b2-1-q2",
                level: "B2",
                prompt: "How are young people described as seeking social change?",
                options: [
                    "Through academic research and publications",
                    "Through SNS and demonstrations",
                    "Through political parties and elections",
                    "Through art and literature"
                ],
                answer: "Through SNS and demonstrations"
            },
            {
                id: "ja-r-b2-1-q3",
                level: "B2",
                prompt: "What does the passage say about young people's personal economic concerns?",
                options: [
                    "They are worried about rising inflation",
                    "They are troubled by difficulties finding work and student debt",
                    "They are anxious about the stock market",
                    "They face high taxes and low wages"
                ],
                answer: "They are troubled by difficulties finding work and student debt"
            },
            {
                id: "ja-r-b2-1-q4",
                level: "B2",
                prompt: "What does the passage say the younger generation's changing consciousness is significant for?",
                options: [
                    "Solving climate change immediately",
                    "Shaping the society of the future",
                    "Improving economic conditions now",
                    "Reducing the national debt"
                ],
                answer: "Shaping the society of the future"
            }
        ]
    },
    {
        id: "ja-r-b2-2",
        level: "B2",
        category: "history",
        title: "江戸時代の文化と社会",
        body: {
            target: "江戸時代（1603〜1868年）は、徳川幕府による安定した統治のもと、独自の文化が花開いた時代だ。鎖国政策により外国との交流は制限されたが、国内では商業や芸術が発展した。歌舞伎や浮世絵、俳句などが庶民の間で広まり、独自の美学が形成された。また、寺子屋と呼ばれる教育機関により、識字率が向上した。武士階級は礼儀と規律を重んじ、儒教の影響を強く受けた価値観が社会に浸透していた。江戸時代の文化は現代の日本人の精神性にも深く影響している。",
            native: "The Edo period (1603–1868) was an era in which a unique culture flourished under the stable rule of the Tokugawa shogunate. Foreign exchange was restricted by the policy of national isolation (sakoku), but domestically commerce and the arts developed. Kabuki, ukiyo-e woodblock prints, and haiku spread among the common people, and a distinctive aesthetic was formed. Furthermore, literacy rates improved through educational institutions called terakoya (temple schools). The samurai class valued etiquette and discipline, and values strongly influenced by Confucianism permeated society. The culture of the Edo period deeply influences the spirituality of modern Japanese people."
        },
        vocabGloss: [
            { word: "幕府", translation: "shogunate / military government", romanized: "bakufu" },
            { word: "鎖国政策", translation: "policy of national isolation", romanized: "sakoku-seisaku" },
            { word: "庶民", translation: "common people / ordinary folk", romanized: "shomin" },
            { word: "寺子屋", translation: "temple school (Edo-era educational institution)", romanized: "terakoya" },
            { word: "識字率", translation: "literacy rate", romanized: "shikiji-ritsu" },
            { word: "精神性", translation: "spirituality / mentality", romanized: "seishin-sei" }
        ],
        questions: [
            {
                id: "ja-r-b2-2-q1",
                level: "B2",
                prompt: "What was the sakoku policy?",
                options: [
                    "A policy of military expansion",
                    "A policy restricting foreign exchange",
                    "A policy promoting international trade",
                    "A policy encouraging immigration"
                ],
                answer: "A policy restricting foreign exchange"
            },
            {
                id: "ja-r-b2-2-q2",
                level: "B2",
                prompt: "Which of the following is NOT mentioned as a cultural form that spread during the Edo period?",
                options: ["Kabuki", "Ukiyo-e", "Haiku", "Tea ceremony"],
                answer: "Tea ceremony"
            },
            {
                id: "ja-r-b2-2-q3",
                level: "B2",
                prompt: "What were terakoya?",
                options: [
                    "Samurai training halls",
                    "Government offices",
                    "Educational institutions that improved literacy",
                    "Religious temples for prayer"
                ],
                answer: "Educational institutions that improved literacy"
            },
            {
                id: "ja-r-b2-2-q4",
                level: "B2",
                prompt: "What philosophical influence shaped samurai values in the Edo period?",
                options: ["Buddhism", "Shinto", "Confucianism", "Taoism"],
                answer: "Confucianism"
            }
        ]
    },
    {
        id: "ja-r-b2-3",
        level: "B2",
        category: "literature",
        title: "夏目漱石の『こころ』について",
        body: {
            target: "夏目漱石の小説『こころ』（1914年）は、明治時代末期の日本社会における個人の孤独と近代化の葛藤を描いた作品だ。主人公の「先生」は、過去の裏切りによる罪悪感に苦しみながら、孤独な生活を送っている。作品を通じて漱石は、個人主義と伝統的な道徳観の衝突を鋭く描写している。「こころ」という題名は「心」を意味し、人間の内面の複雑さを象徴している。この小説は今日でも多くの読者に読まれ、日本文学を代表する名作の一つとされている。",
            native: "Natsume Soseki's novel 'Kokoro' (1914) is a work depicting individual loneliness and the conflict of modernisation in Japanese society at the end of the Meiji era. The protagonist, known as 'Sensei', leads a solitary life while tormented by guilt over a past betrayal. Throughout the work, Soseki sharply depicts the clash between individualism and traditional moral values. The title 'Kokoro' means 'heart/mind', symbolising the complexity of the human inner world. This novel is still read by many readers today and is considered one of the masterpieces representing Japanese literature."
        },
        vocabGloss: [
            { word: "孤独", translation: "loneliness / solitude", romanized: "kodoku" },
            { word: "葛藤", translation: "conflict / inner struggle", romanized: "kattō" },
            { word: "罪悪感", translation: "sense of guilt", romanized: "zaiakukan" },
            { word: "個人主義", translation: "individualism", romanized: "kojin-shugi" },
            { word: "衝突", translation: "clash / conflict", romanized: "shōtotsu" },
            { word: "内面", translation: "inner world / inner self", romanized: "naimen" }
        ],
        questions: [
            {
                id: "ja-r-b2-3-q1",
                level: "B2",
                prompt: "When was Natsume Soseki's novel 'Kokoro' published?",
                options: ["1868", "1914", "1945", "1989"],
                answer: "1914"
            },
            {
                id: "ja-r-b2-3-q2",
                level: "B2",
                prompt: "What is the protagonist 'Sensei' tormented by?",
                options: [
                    "Financial difficulties",
                    "A physical illness",
                    "Guilt over a past betrayal",
                    "Conflict with his family"
                ],
                answer: "Guilt over a past betrayal"
            },
            {
                id: "ja-r-b2-3-q3",
                level: "B2",
                prompt: "What central conflict does Soseki depict in the novel?",
                options: [
                    "Urban life versus rural life",
                    "Individualism versus traditional moral values",
                    "Japan versus Western countries",
                    "The rich versus the poor"
                ],
                answer: "Individualism versus traditional moral values"
            },
            {
                id: "ja-r-b2-3-q4",
                level: "B2",
                prompt: "What does the title 'Kokoro' mean?",
                options: ["Loneliness", "Betrayal", "Heart / Mind", "Tradition"],
                answer: "Heart / Mind"
            }
        ]
    },
    {
        id: "ja-r-b2-4",
        level: "B2",
        category: "culture",
        title: "環境問題への取り組み",
        body: {
            target: "地球温暖化や生物多様性の損失など、環境問題への関心が世界的に高まっている。日本でも再生可能エネルギーへの転換や排気ガスの削減に向けた取り組みが進められている。企業は持続可能な経営を求められ、消費者もエコ意識を高めている。一方で、経済成長と環境保護のバランスをどう取るかというジレンマは依然として解決されていない。森林破壊や海洋汚染などの問題は国境を超えており、国際社会の連携が不可欠だ。若い世代を中心に、環境活動家たちが政策変更を求めて声を上げている。",
            native: "Concern over environmental issues such as global warming and biodiversity loss is growing worldwide. In Japan too, efforts are underway towards the transition to renewable energy and the reduction of exhaust emissions. Companies are required to adopt sustainable management, and consumers are also raising their environmental awareness. However, the dilemma of how to balance economic growth and environmental protection remains unresolved. Problems such as deforestation and ocean pollution cross national borders, making international cooperation indispensable. Led by the younger generation, environmental activists are raising their voices demanding policy change."
        },
        vocabGloss: [
            { word: "生物多様性", translation: "biodiversity", romanized: "seibutsu-tayōsei" },
            { word: "持続可能な", translation: "sustainable", romanized: "jizoku-kanō na" },
            { word: "エコ意識", translation: "environmental consciousness / eco-awareness", romanized: "eko-ishiki" },
            { word: "海洋汚染", translation: "ocean pollution", romanized: "kaiyō-osen" },
            { word: "連携", translation: "cooperation / coordination", romanized: "renkei" },
            { word: "環境活動家", translation: "environmental activist", romanized: "kankyō-katsudō-ka" }
        ],
        questions: [
            {
                id: "ja-r-b2-4-q1",
                level: "B2",
                prompt: "According to the passage, what are two environmental problems that concern the world?",
                options: [
                    "Global warming and ocean acidification",
                    "Global warming and biodiversity loss",
                    "Deforestation and overpopulation",
                    "Air pollution and nuclear waste"
                ],
                answer: "Global warming and biodiversity loss"
            },
            {
                id: "ja-r-b2-4-q2",
                level: "B2",
                prompt: "What unresolved dilemma does the passage mention?",
                options: [
                    "How to reduce the national debt",
                    "How to balance economic growth and environmental protection",
                    "How to increase renewable energy production",
                    "How to reduce the population"
                ],
                answer: "How to balance economic growth and environmental protection"
            },
            {
                id: "ja-r-b2-4-q3",
                level: "B2",
                prompt: "Why does the passage say international cooperation is indispensable?",
                options: [
                    "Because each country has different economic interests",
                    "Because environmental problems cross national borders",
                    "Because developing countries need financial help",
                    "Because technology must be shared internationally"
                ],
                answer: "Because environmental problems cross national borders"
            },
            {
                id: "ja-r-b2-4-q4",
                level: "B2",
                prompt: "Who does the passage say is leading demands for policy change?",
                options: [
                    "Business leaders and corporations",
                    "Government officials and politicians",
                    "The younger generation and environmental activists",
                    "Scientists and researchers"
                ],
                answer: "The younger generation and environmental activists"
            }
        ]
    }
]
