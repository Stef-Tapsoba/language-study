// Korean C1 reading passages
// data/korean/reading/c1.ts
import { ReadingPassage } from "../../../types"

export const c1Reading: ReadingPassage[] = [
    {
        id: "ko-r-c1-1",
        level: "C1",
        category: "culture",
        title: "한국의 미학: 한과 정의 개념",
        body: {
            target: "한국 미학에서 '한(恨)'과 '정(情)'은 단순한 감정을 넘어 민족의 역사적 경험과 공동체적 유대를 담은 문화적 개념입니다. '한'은 억압, 상실, 오랜 고통에서 비롯된 깊은 슬픔과 원망이면서도 동시에 삶을 지속하게 하는 내면의 힘을 내포합니다. 김소월의 시나 판소리의 음악적 표현에서 한은 단순한 비탄이 아닌, 삶의 아이러니와 인간 조건을 응시하는 미학적 범주로 기능합니다. 반면, '정'은 오랜 시간을 함께하면서 형성되는 깊은 정서적 유대로, 가족, 이웃, 심지어 익숙한 사물에 대해서도 느끼는 애착을 포함합니다. 이 두 개념은 서로 대립하기보다는 상호 보완적으로 작용하며, 한국인의 세계관과 공동체 의식의 핵심을 이룹니다.",
            native: "In Korean aesthetics, 'han' and 'jeong' are cultural concepts that go beyond simple emotions to encompass the historical experiences and communal bonds of the people. 'Han' is a deep sorrow and resentment arising from oppression, loss, and prolonged suffering, yet it simultaneously contains an inner strength that sustains life. In Kim Sowol's poetry and the musical expression of pansori, han functions not merely as lamentation but as an aesthetic category that gazes upon life's ironies and the human condition. In contrast, 'jeong' is a deep emotional bond formed through time spent together, encompassing attachment felt towards family, neighbours, and even familiar objects. These two concepts do not so much oppose each other as act as complementary forces, forming the core of the Korean worldview and sense of community."
        },
        vocabGloss: [
            { word: "미학", translation: "aesthetics", romanized: "mihak" },
            { word: "억압", translation: "oppression / suppression", romanized: "eoknaap" },
            { word: "원망", translation: "resentment / grievance", romanized: "wonmang" },
            { word: "내포하다", translation: "to contain / to imply", romanized: "naepohada" },
            { word: "상호 보완적", translation: "mutually complementary", romanized: "sangho bowanjeoK" },
            { word: "공동체 의식", translation: "sense of community", romanized: "gongdongche euisik" }
        ],
        questions: [
            {
                id: "ko-r-c1-1-q1",
                level: "C1",
                prompt: "According to the passage, what does 'han' contain beyond sorrow and resentment?",
                options: ["An inner strength that sustains life", "Pure artistic expression only", "Social criticism directed at leaders", "Religious devotion and acceptance"],
                answer: "An inner strength that sustains life"
            },
            {
                id: "ko-r-c1-1-q2",
                level: "C1",
                prompt: "How is han described in the context of Kim Sowol's poetry and pansori?",
                options: ["As an aesthetic category contemplating life's ironies and the human condition", "As a simple expression of sadness", "As a form of political protest", "As a religious spiritual concept"],
                answer: "As an aesthetic category contemplating life's ironies and the human condition"
            },
            {
                id: "ko-r-c1-1-q3",
                level: "C1",
                prompt: "What distinguishes 'jeong' from ordinary affection according to the passage?",
                options: ["It is formed through time spent together and extends to family, neighbours, and familiar objects", "It is only felt between romantic partners", "It is an intellectual admiration rather than an emotion", "It is a concept unique to the aristocratic class"],
                answer: "It is formed through time spent together and extends to family, neighbours, and familiar objects"
            },
            {
                id: "ko-r-c1-1-q4",
                level: "C1",
                prompt: "What is the relationship between 'han' and 'jeong' as described in the passage?",
                options: ["They are mutually complementary and form the core of the Korean worldview", "They are opposite forces in constant conflict", "Han belongs to literature while jeong belongs to music", "They are essentially the same concept with different names"],
                answer: "They are mutually complementary and form the core of the Korean worldview"
            }
        ]
    },
    {
        id: "ko-r-c1-2",
        level: "C1",
        category: "history",
        title: "독립운동과 3·1운동의 의의",
        body: {
            target: "1919년 3월 1일, 한국 역사상 가장 큰 규모의 비폭력 저항 운동인 3·1운동이 일어났습니다. 일제의 식민 통치 아래 억압받던 조선 민중은 독립 선언서를 낭독하며 전국적으로 만세 운동을 전개했습니다. 이 운동은 단순한 정치적 독립 요구를 넘어 한민족의 자결 의식과 문화적 정체성을 세계에 천명한 사건이었습니다. 비록 즉각적인 독립을 이끌어내지는 못했지만, 3·1운동은 같은 해 중국 상하이에서 대한민국임시정부 수립으로 이어졌으며, 이후 독립운동의 사상적·조직적 기반이 되었습니다. 나아가 이 운동은 아시아 각국의 민족 해방 운동에도 영감을 주었으며, 오늘날에도 한국인의 민족 정신과 자주독립 의식의 원형으로 기억되고 있습니다.",
            native: "On 1 March 1919, the March First Movement, the largest non-violent resistance movement in Korean history, broke out. The Korean people, oppressed under Japanese colonial rule, read out the Declaration of Independence and launched nationwide independence demonstrations. This movement went beyond a simple demand for political independence; it was an event that proclaimed the Korean people's consciousness of self-determination and cultural identity to the world. Although it did not immediately achieve independence, the March First Movement led to the establishment of the Provisional Government of the Republic of Korea in Shanghai, China, in the same year, and became the ideological and organisational foundation for the subsequent independence movement. Furthermore, this movement also inspired national liberation movements in other Asian countries, and is remembered to this day as the archetype of the Korean national spirit and consciousness of self-determined independence."
        },
        vocabGloss: [
            { word: "비폭력", translation: "non-violence", romanized: "bipongnyeok" },
            { word: "독립 선언서", translation: "Declaration of Independence", romanized: "dongnip seonaenseo" },
            { word: "자결 의식", translation: "consciousness of self-determination", romanized: "jagyeol euisik" },
            { word: "천명하다", translation: "to proclaim / to make known to the world", romanized: "cheonmyeonghada" },
            { word: "사상적 기반", translation: "ideological foundation", romanized: "sasangjeok giban" },
            { word: "원형", translation: "archetype / original form", romanized: "wonhyeong" }
        ],
        questions: [
            {
                id: "ko-r-c1-2-q1",
                level: "C1",
                prompt: "What type of movement was the March First Movement (3·1운동)?",
                options: ["A large-scale non-violent resistance movement", "An armed military uprising", "A diplomatic negotiation effort", "A cultural arts festival"],
                answer: "A large-scale non-violent resistance movement"
            },
            {
                id: "ko-r-c1-2-q2",
                level: "C1",
                prompt: "What broader significance did the March First Movement carry beyond the demand for independence?",
                options: ["It proclaimed Korean self-determination and cultural identity to the world", "It secured a peace treaty with Japan", "It established diplomatic relations with Western powers", "It resulted in immediate liberation from colonial rule"],
                answer: "It proclaimed Korean self-determination and cultural identity to the world"
            },
            {
                id: "ko-r-c1-2-q3",
                level: "C1",
                prompt: "What significant political event did the March First Movement directly lead to?",
                options: ["The establishment of the Provisional Government of the Republic of Korea in Shanghai", "The signing of the Treaty of Versailles", "The annexation of Korea by China", "The founding of the Joseon Dynasty"],
                answer: "The establishment of the Provisional Government of the Republic of Korea in Shanghai"
            },
            {
                id: "ko-r-c1-2-q4",
                level: "C1",
                prompt: "What was the movement's impact beyond Korea?",
                options: ["It inspired national liberation movements in other Asian countries", "It led to the immediate end of World War I", "It caused Japan to surrender its colonies worldwide", "It had no impact outside Korea"],
                answer: "It inspired national liberation movements in other Asian countries"
            }
        ]
    },
    {
        id: "ko-r-c1-3",
        level: "C1",
        category: "literature",
        title: "김소월의 시와 한국적 정서",
        body: {
            target: "김소월(1902~1934)은 한국 근대 시문학에서 가장 사랑받는 시인 중 한 명으로, 그의 작품은 이별, 그리움, 한의 정서를 민요적 리듬과 순수한 우리말로 담아냈습니다. 대표작 「진달래꽃」은 이별의 슬픔을 원망 없이 받아들이는 화자의 목소리로, 한국적 '한'의 미학을 가장 잘 구현한 시로 평가받습니다. 소월의 시는 단순히 감정의 토로에 그치지 않고, 한국 전통 정서를 보편적인 인간의 언어로 승화시킵니다. 그의 시에서 자연 이미지—산, 꽃, 강—는 단순한 배경이 아니라 내면 감정의 상징으로 기능합니다. 또한 소월의 작품은 일제 강점기라는 역사적 맥락에서 개인의 이별을 민족의 상실로 확장하는 중층적 의미를 지닌다는 점에서 문학사적으로도 중요합니다.",
            native: "Kim Sowol (1902–1934) is one of the most beloved poets in modern Korean poetry, and his works captured the sentiments of separation, longing, and han through folk-song rhythms and pure native Korean words. His representative work 'Azalea' (Jindallaeekkot) is evaluated as the poem that best embodies the aesthetics of Korean 'han', through the voice of a speaker who accepts the sorrow of parting without resentment. Sowol's poetry does not merely remain at emotional outpouring; it sublimates Korean traditional sentiments into a universal human language. In his poems, natural images — mountains, flowers, rivers — function not merely as background but as symbols of inner emotions. Furthermore, Sowol's works carry multiple layers of meaning that expand personal separation into national loss within the historical context of Japanese colonial rule, making them important in literary history as well."
        },
        vocabGloss: [
            { word: "민요적 리듬", translation: "folk-song rhythm", romanized: "minyojeok rideum" },
            { word: "구현하다", translation: "to embody / to realise", romanized: "guhyeonhada" },
            { word: "토로", translation: "outpouring / venting", romanized: "toro" },
            { word: "승화시키다", translation: "to sublimate / to elevate", romanized: "seunghwasikida" },
            { word: "중층적", translation: "multi-layered", romanized: "jungcheungjeok" },
            { word: "문학사적", translation: "in terms of literary history", romanized: "munhaksajeok" }
        ],
        questions: [
            {
                id: "ko-r-c1-3-q1",
                level: "C1",
                prompt: "What distinctive qualities of Kim Sowol's poetry are highlighted in the passage?",
                options: ["Folk-song rhythms and pure native Korean language", "Complex Chinese classical references", "Western modernist free verse", "Scientific and analytical language"],
                answer: "Folk-song rhythms and pure native Korean language"
            },
            {
                id: "ko-r-c1-3-q2",
                level: "C1",
                prompt: "What is the speaker's attitude to parting in 'Azalea' (진달래꽃)?",
                options: ["Accepting sorrow without resentment", "Expressing fierce anger at the beloved", "Seeking revenge for the separation", "Celebrating freedom from the relationship"],
                answer: "Accepting sorrow without resentment"
            },
            {
                id: "ko-r-c1-3-q3",
                level: "C1",
                prompt: "How do natural images function in Sowol's poetry according to the passage?",
                options: ["As symbols of inner emotions, not merely background", "As literal geographical descriptions", "As metaphors for political resistance only", "As decorative elements with no deeper meaning"],
                answer: "As symbols of inner emotions, not merely background"
            },
            {
                id: "ko-r-c1-3-q4",
                level: "C1",
                prompt: "What broader significance does the passage attribute to Sowol's work in its historical context?",
                options: ["Expanding personal separation into the national loss of the colonial period", "Praising Japanese colonial modernity", "Rejecting all traditional Korean values", "Purely celebrating romantic love outside of history"],
                answer: "Expanding personal separation into the national loss of the colonial period"
            }
        ]
    },
    {
        id: "ko-r-c1-4",
        level: "C1",
        category: "everyday",
        title: "AI 기술과 한국 사회의 변화",
        body: {
            target: "인공지능 기술의 급속한 발전은 한국 사회의 노동 시장, 교육, 의료, 문화 전반에 걸쳐 심층적인 변화를 촉발하고 있습니다. 특히 생성형 AI의 등장은 창의적 작업과 지식 노동의 경계를 재편하며, 기존의 직업 분류 체계와 교육 패러다임을 근본적으로 재고하게 만들고 있습니다. 이에 따라 한국 정부는 디지털 전환 정책을 강화하고 AI 관련 인재 양성을 국가 전략의 핵심 과제로 설정했습니다. 그러나 AI 도입이 가져오는 일자리 대체 효과와 알고리즘 편향 문제는 사회적 불평등을 심화시킬 수 있다는 우려도 있습니다. 오히려 기술 도입의 속도를 조절하고 윤리적 AI 거버넌스 체계를 확립하는 것이 장기적 사회 안정에 필수적이라는 목소리가 높아지고 있습니다.",
            native: "The rapid development of artificial intelligence technology is triggering profound changes across Korea's labour market, education, healthcare, and culture as a whole. In particular, the emergence of generative AI is reshaping the boundaries between creative work and knowledge labour, fundamentally prompting a reconsideration of existing job classification systems and educational paradigms. Accordingly, the Korean government has strengthened digital transformation policies and set AI talent development as a core task of national strategy. However, there are concerns that the job displacement effects brought by AI adoption and the problem of algorithmic bias could deepen social inequality. On the contrary, voices are growing louder that controlling the pace of technology adoption and establishing an ethical AI governance framework is essential for long-term social stability."
        },
        vocabGloss: [
            { word: "생성형 AI", translation: "generative AI", romanized: "saengseongHyeong AI" },
            { word: "재편하다", translation: "to reorganise / to reshape", romanized: "jaepyeonhada" },
            { word: "패러다임", translation: "paradigm", romanized: "paereodaim" },
            { word: "인재 양성", translation: "talent cultivation / developing human capital", romanized: "injae yangseong" },
            { word: "알고리즘 편향", translation: "algorithmic bias", romanized: "algorijeom pyeonhyang" },
            { word: "거버넌스", translation: "governance", romanized: "geobeoneon-seu" }
        ],
        questions: [
            {
                id: "ko-r-c1-4-q1",
                level: "C1",
                prompt: "What specific development in AI is identified as reshaping creative and knowledge work?",
                options: ["The emergence of generative AI", "The invention of the internet", "Social media algorithms", "Industrial robotics"],
                answer: "The emergence of generative AI"
            },
            {
                id: "ko-r-c1-4-q2",
                level: "C1",
                prompt: "What has the Korean government set as a core national strategy in response to AI development?",
                options: ["AI talent development and digital transformation policies", "Banning generative AI from public use", "Returning to traditional manufacturing industries", "Limiting foreign AI technology imports"],
                answer: "AI talent development and digital transformation policies"
            },
            {
                id: "ko-r-c1-4-q3",
                level: "C1",
                prompt: "What social concern is raised regarding AI adoption?",
                options: ["Job displacement and algorithmic bias could deepen social inequality", "AI will eliminate the need for education entirely", "AI technology is too expensive for Korea to adopt", "AI will make Korean culture disappear"],
                answer: "Job displacement and algorithmic bias could deepen social inequality"
            },
            {
                id: "ko-r-c1-4-q4",
                level: "C1",
                prompt: "What does the passage argue is essential for long-term social stability?",
                options: ["Controlling the pace of technology adoption and establishing ethical AI governance", "Adopting AI as rapidly as possible to maintain competitiveness", "Replacing all human workers with AI systems", "Leaving AI regulation entirely to private companies"],
                answer: "Controlling the pace of technology adoption and establishing ethical AI governance"
            }
        ]
    }
]
