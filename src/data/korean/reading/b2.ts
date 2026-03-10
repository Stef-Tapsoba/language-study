// Korean B2 reading passages
// data/korean/reading/b2.ts
import { ReadingPassage } from "../../../types"

export const b2Reading: ReadingPassage[] = [
    {
        id: "ko-r-b2-1",
        level: "B2",
        category: "everyday",
        title: "사회 문제와 청년 세대",
        body: {
            target: "오늘날 한국의 청년 세대는 심각한 사회적 불평등에 직면해 있습니다. 취업난과 주거비 상승으로 인해 많은 젊은이들이 결혼과 출산을 포기하고 있습니다. 이러한 현상을 '삼포 세대'라고 부르기도 합니다. 정부는 청년 일자리 창출과 주거 지원 정책을 추진하고 있지만, 구조적 문제를 해결하기에는 역부족이라는 지적이 많습니다. 청년들은 온라인 플랫폼을 통해 자신들의 목소리를 높이고, 사회 변화를 촉구하는 시위에 적극 참여하고 있습니다.",
            native: "Today, the younger generation in Korea faces serious social inequality. Due to difficulties in finding employment and rising housing costs, many young people are giving up on marriage and having children. This phenomenon is sometimes called the 'sampo generation' (generation that gives up three things). The government is pursuing policies to create jobs for young people and support housing, but many point out that it is not enough to solve the structural problems. Young people are raising their voices through online platforms and are actively participating in demonstrations calling for social change."
        },
        vocabGloss: [
            { word: "불평등", translation: "inequality", romanized: "bulpyeongdeung" },
            { word: "취업난", translation: "difficulty finding employment", romanized: "chwieomnan" },
            { word: "주거비", translation: "housing costs", romanized: "jugeobi" },
            { word: "삼포 세대", translation: "'sampo' generation (gives up three things)", romanized: "sampo sedae" },
            { word: "구조적", translation: "structural", romanized: "gujojõk" },
            { word: "역부족", translation: "insufficient / not enough", romanized: "yeokbujok" }
        ],
        questions: [
            {
                id: "ko-r-b2-1-q1",
                level: "B2",
                prompt: "What are young Koreans giving up due to employment difficulties and high housing costs?",
                options: ["Marriage and having children", "Higher education", "International travel", "Social media use"],
                answer: "Marriage and having children"
            },
            {
                id: "ko-r-b2-1-q2",
                level: "B2",
                prompt: "What does the term '삼포 세대' (sampo generation) refer to?",
                options: ["A generation that gives up on certain life milestones", "A generation focused on three careers", "A generation that embraces three values", "A generation with three goals"],
                answer: "A generation that gives up on certain life milestones"
            },
            {
                id: "ko-r-b2-1-q3",
                level: "B2",
                prompt: "What criticism is made of the government's policies?",
                options: ["They are not enough to solve structural problems", "They focus only on housing", "They ignore young people entirely", "They are too expensive"],
                answer: "They are not enough to solve structural problems"
            },
            {
                id: "ko-r-b2-1-q4",
                level: "B2",
                prompt: "How are young Koreans raising their voices according to the passage?",
                options: ["Through online platforms and demonstrations", "Through the National Assembly", "Through traditional media only", "Through petitions to companies"],
                answer: "Through online platforms and demonstrations"
            }
        ]
    },
    {
        id: "ko-r-b2-2",
        level: "B2",
        category: "history",
        title: "조선시대의 문화와 사회",
        body: {
            target: "조선시대(1392~1910)는 한국 역사에서 가장 긴 왕조 중 하나로, 유교 이념을 국가 통치의 근본으로 삼았습니다. 이 시기에 세종대왕이 한글을 창제하여 문자 보급에 크게 기여했습니다. 사회는 양반, 중인, 상민, 천민의 엄격한 신분 제도로 나뉘었습니다. 과거 제도는 관리를 선발하는 공식적인 제도였으며, 능력 있는 자에게 출세의 기회를 제공했습니다. 또한 이 시기에 도자기와 회화 등 다양한 예술 분야가 발전했으며, 독창적인 한국 문화의 기틀이 마련되었습니다.",
            native: "The Joseon Dynasty (1392–1910) was one of the longest dynasties in Korean history, taking Confucian ideology as the fundamental basis of state governance. During this period, King Sejong created Hangul, greatly contributing to the spread of literacy. Society was divided into a strict class system: yangban (aristocracy), jungIn (middle class), sangmin (commoners), and cheonmin (lowest class). The civil service examination system was the official system for selecting government officials, providing opportunities for advancement to those with talent. In addition, various artistic fields such as ceramics and painting developed during this period, laying the foundation for a distinctive Korean culture."
        },
        vocabGloss: [
            { word: "유교", translation: "Confucianism", romanized: "yugyo" },
            { word: "한글 창제", translation: "creation of Hangul", romanized: "hangeul changjae" },
            { word: "신분 제도", translation: "class system", romanized: "sinbun jedo" },
            { word: "양반", translation: "aristocratic class", romanized: "yangban" },
            { word: "과거 제도", translation: "civil service examination system", romanized: "gwageo jedo" },
            { word: "도자기", translation: "ceramics / pottery", romanized: "dojagi" }
        ],
        questions: [
            {
                id: "ko-r-b2-2-q1",
                level: "B2",
                prompt: "What was the fundamental basis of governance during the Joseon Dynasty?",
                options: ["Confucian ideology", "Buddhist principles", "Military rule", "Democratic values"],
                answer: "Confucian ideology"
            },
            {
                id: "ko-r-b2-2-q2",
                level: "B2",
                prompt: "What was King Sejong's major contribution to Korean culture?",
                options: ["Creating the Hangul writing system", "Establishing the class system", "Founding the Joseon Dynasty", "Building Gyeongbokgung Palace"],
                answer: "Creating the Hangul writing system"
            },
            {
                id: "ko-r-b2-2-q3",
                level: "B2",
                prompt: "What was the purpose of the 과거 제도 (civil service examination)?",
                options: ["Selecting government officials", "Choosing members of the royal family", "Determining the class system", "Distributing land to citizens"],
                answer: "Selecting government officials"
            },
            {
                id: "ko-r-b2-2-q4",
                level: "B2",
                prompt: "Which artistic fields developed during the Joseon Dynasty according to the passage?",
                options: ["Ceramics and painting", "Architecture and sculpture only", "Music and dance exclusively", "Literature and poetry only"],
                answer: "Ceramics and painting"
            }
        ]
    },
    {
        id: "ko-r-b2-3",
        level: "B2",
        category: "literature",
        title: "이상의 문학 세계",
        body: {
            target: "이상(李箱, 1910~1937)은 일제 강점기를 살았던 한국의 전위적 작가로, 당시로서는 매우 실험적인 문학 세계를 구축했습니다. 그의 대표작인 「날개」는 현실 감각을 잃은 주인공의 내면을 해체적 문체로 그린 단편소설입니다. 이상은 심리적 갈등과 근대 문명에 대한 비판을 초현실주의적 기법으로 표현했습니다. 그의 작품에서 반복되는 서사 구조와 독특한 비유는 독자에게 낯선 독서 경험을 제공합니다. 이상의 문학은 사후 재평가를 통해 한국 현대 문학의 선구자로 인정받고 있습니다.",
            native: "Yi Sang (1910–1937) was a Korean avant-garde writer who lived under Japanese colonial rule and built a very experimental literary world for his time. His representative work 'Wings' is a short story that depicts the inner world of a protagonist who has lost his sense of reality using a deconstructive writing style. Yi Sang expressed psychological conflict and criticism of modern civilization through surrealist techniques. The repetitive narrative structures and unique metaphors in his works provide readers with an unfamiliar reading experience. Yi Sang's literature has been re-evaluated posthumously and he is recognised as a pioneer of modern Korean literature."
        },
        vocabGloss: [
            { word: "일제 강점기", translation: "Japanese colonial period", romanized: "ilje gangjomgi" },
            { word: "전위적", translation: "avant-garde", romanized: "jeon'wijeok" },
            { word: "해체적", translation: "deconstructive", romanized: "haechejeok" },
            { word: "초현실주의", translation: "surrealism", romanized: "chohyeonsillijuui" },
            { word: "선구자", translation: "pioneer", romanized: "seonguja" },
            { word: "사후 재평가", translation: "posthumous re-evaluation", romanized: "sahu jaepyeong-ga" }
        ],
        questions: [
            {
                id: "ko-r-b2-3-q1",
                level: "B2",
                prompt: "During which historical period did Yi Sang live and write?",
                options: ["Japanese colonial rule", "The Joseon Dynasty", "The Korean War period", "The modern democratic era"],
                answer: "Japanese colonial rule"
            },
            {
                id: "ko-r-b2-3-q2",
                level: "B2",
                prompt: "What is Yi Sang's representative work mentioned in the passage?",
                options: ["Wings (날개)", "The Cloud Dream of the Nine", "The Guest", "Land"],
                answer: "Wings (날개)"
            },
            {
                id: "ko-r-b2-3-q3",
                level: "B2",
                prompt: "What techniques did Yi Sang use to express psychological conflict?",
                options: ["Surrealist techniques", "Traditional Confucian storytelling", "Realist narrative", "Folk tale structures"],
                answer: "Surrealist techniques"
            },
            {
                id: "ko-r-b2-3-q4",
                level: "B2",
                prompt: "How is Yi Sang recognized in Korean literary history?",
                options: ["As a pioneer of modern Korean literature", "As the founder of traditional Korean poetry", "As the last writer of the Joseon period", "As a government-appointed court writer"],
                answer: "As a pioneer of modern Korean literature"
            }
        ]
    },
    {
        id: "ko-r-b2-4",
        level: "B2",
        category: "culture",
        title: "환경 문제에 대한 토론",
        body: {
            target: "최근 한국에서는 환경 문제에 대한 사회적 관심이 크게 높아지고 있습니다. 특히 미세먼지, 플라스틱 쓰레기, 탄소 배출 문제가 주요 현안으로 떠오르고 있습니다. 시민 단체들은 재생에너지 전환과 일회용품 규제를 강화해야 한다고 주장합니다. 반면 일부 기업과 경제 전문가들은 급격한 규제가 경제 성장에 부정적인 영향을 미칠 수 있다고 우려합니다. 따라서 환경 보호와 경제 발전을 동시에 달성하기 위한 균형 잡힌 정책 마련이 시급하다는 것이 전문가들의 공통된 의견입니다.",
            native: "Recently, social interest in environmental issues has grown significantly in Korea. In particular, fine dust, plastic waste, and carbon emission problems are emerging as major issues. Civil society groups argue that the transition to renewable energy and regulation of single-use items must be strengthened. On the other hand, some companies and economics experts worry that rapid regulations could have a negative impact on economic growth. Therefore, experts commonly agree that there is an urgent need to establish balanced policies to achieve both environmental protection and economic development simultaneously."
        },
        vocabGloss: [
            { word: "미세먼지", translation: "fine dust / particulate matter", romanized: "misemeonji" },
            { word: "탄소 배출", translation: "carbon emissions", romanized: "tanso baeul" },
            { word: "일회용품", translation: "single-use items / disposables", romanized: "ilhweyongpum" },
            { word: "재생에너지 전환", translation: "transition to renewable energy", romanized: "jaesaeng-eneoji jeonhwan" },
            { word: "균형 잡힌", translation: "balanced", romanized: "gyunhyeong japhin" },
            { word: "시급하다", translation: "urgent / pressing", romanized: "sigeuphada" }
        ],
        questions: [
            {
                id: "ko-r-b2-4-q1",
                level: "B2",
                prompt: "Which environmental issues are highlighted as major problems in the passage?",
                options: ["Fine dust, plastic waste, and carbon emissions", "Water pollution and deforestation only", "Ocean pollution and nuclear waste", "Noise pollution and light pollution"],
                answer: "Fine dust, plastic waste, and carbon emissions"
            },
            {
                id: "ko-r-b2-4-q2",
                level: "B2",
                prompt: "What do civil society groups argue?",
                options: ["Transition to renewable energy and stricter regulation of single-use items", "Economic growth should be prioritized over the environment", "Carbon taxes should be removed", "Only large companies should be regulated"],
                answer: "Transition to renewable energy and stricter regulation of single-use items"
            },
            {
                id: "ko-r-b2-4-q3",
                level: "B2",
                prompt: "What concern do some companies and economists raise?",
                options: ["Rapid regulations could negatively affect economic growth", "Environmental policies are already too strict", "Renewable energy is not yet feasible", "Single-use items are necessary for hygiene"],
                answer: "Rapid regulations could negatively affect economic growth"
            },
            {
                id: "ko-r-b2-4-q4",
                level: "B2",
                prompt: "What do experts agree is urgently needed?",
                options: ["Balanced policies that achieve both environmental and economic goals", "Prioritizing the economy over the environment", "Immediate ban on all industries", "Increasing carbon emissions for growth"],
                answer: "Balanced policies that achieve both environmental and economic goals"
            }
        ]
    }
]
