// src/data/korean/reading/b1.ts
import { ReadingPassage } from "../../../types"

export const b1Reading: ReadingPassage[] = [
    {
        id: "ko-r-b1-1",
        level: "B1",
        category: "culture",
        title: "한국의 교육 문화",
        body: {
            target: `한국은 교육열이 매우 높은 나라로 유명합니다. 많은 부모님들이 자녀의 교육에 큰 투자를 합니다. 학생들은 학교 수업이 끝난 후에도 학원에 가서 수학, 영어, 과학 등을 추가로 공부합니다. 밤 열 시나 열한 시까지 공부하는 학생들도 많습니다.

한국의 대학 입시는 특히 경쟁이 심합니다. 고등학교 3학년 때 치르는 수능 시험은 학생의 미래를 크게 결정합니다. 수능 시험날에는 전국이 긴장합니다. 비행기도 소음을 줄이기 위해 경로를 바꾸고, 경찰이 학생들을 시험장까지 오토바이로 데려다 주기도 합니다.

이러한 교육 문화는 빠른 경제 성장을 이루는 데 기여했지만, 동시에 학생들의 스트레스와 정신 건강 문제를 일으키기도 합니다. 최근에는 교육 방식을 개혁하려는 논의가 활발히 이루어지고 있습니다. 창의력과 비판적 사고를 키우는 방향으로 교육이 변화해야 한다는 목소리가 높아지고 있습니다.`,
            native: `Korea is famously a country with very high enthusiasm for education. Many parents make major investments in their children's education. After school classes finish, students go to private academies (hagwon) to study additional maths, English, science and other subjects. Many students study until ten or eleven at night.

University entrance in Korea is especially competitive. The Suneung exam, taken in the third year of high school, greatly determines a student's future. On the day of the Suneung, the whole country is tense. Aircraft even change their flight paths to reduce noise, and police sometimes escort students to exam halls by motorbike.

This education culture has contributed to rapid economic growth, but at the same time causes stress and mental health problems among students. Recently there has been active discussion about reforming the education system. The call is growing louder for education to change towards nurturing creativity and critical thinking.`
        },
        vocabGloss: [
            { word: "교육열", romanized: "gyoyungnyeol", translation: "enthusiasm for education, education fever" },
            { word: "학원", romanized: "hagwon", translation: "private academy, cram school" },
            { word: "수능", romanized: "suneung", translation: "College Scholastic Ability Test (Korean university entrance exam)" },
            { word: "입시", romanized: "ipsi", translation: "entrance examination (for university)" },
            { word: "창의력", romanized: "changiryeok", translation: "creativity, creative ability" },
            { word: "개혁", romanized: "gaehyeok", translation: "reform, reformation" }
        ],
        questions: [
            {
                id: "ko-r-b1-1-q1",
                level: "B1",
                prompt: "What is a hagwon?",
                options: [
                    "A private academy where students study after school",
                    "A Korean university entrance exam",
                    "A type of public high school",
                    "A government education programme"
                ],
                answer: "A private academy where students study after school"
            },
            {
                id: "ko-r-b1-1-q2",
                level: "B1",
                prompt: "Why do aircraft change their flight paths on Suneung day?",
                options: [
                    "To reduce noise that could disturb the exam",
                    "Because airports are used as exam halls",
                    "To make way for police escorts",
                    "Because of a government holiday"
                ],
                answer: "To reduce noise that could disturb the exam"
            },
            {
                id: "ko-r-b1-1-q3",
                level: "B1",
                prompt: "According to the passage, what negative effects has Korea's education culture had?",
                options: [
                    "Student stress and mental health problems",
                    "A decline in university graduation rates",
                    "A shortage of teachers",
                    "Lower performance in science subjects"
                ],
                answer: "Student stress and mental health problems"
            },
            {
                id: "ko-r-b1-1-q4",
                level: "B1",
                prompt: "What direction does the passage suggest education should move in?",
                options: [
                    "Nurturing creativity and critical thinking",
                    "Introducing more competitive exams",
                    "Increasing the number of hagwon",
                    "Making the Suneung exam harder"
                ],
                answer: "Nurturing creativity and critical thinking"
            }
        ]
    },
    {
        id: "ko-r-b1-2",
        level: "B1",
        category: "everyday",
        title: "환경 보호와 분리수거",
        body: {
            target: `한국은 세계에서 가장 체계적인 쓰레기 분리수거 시스템 중 하나를 운영하고 있습니다. 한국에서는 쓰레기를 일반 봉투에 버릴 수 없습니다. 반드시 지방자치단체가 지정한 유료 종량제 봉투를 구입해서 사용해야 합니다. 이 제도는 1995년에 도입되어 쓰레기 배출량을 크게 줄이는 데 성공했습니다.

재활용 쓰레기는 종류별로 철저하게 분리해야 합니다. 플라스틱, 유리, 종이, 금속, 음식물 쓰레기는 모두 따로 버려야 합니다. 특히 음식물 쓰레기는 별도의 용기에 모아서 지정된 장소에 버려야 하며, 퇴비나 가축 사료로 재활용됩니다.

아파트 단지에는 재활용 전용 공간이 있고, 주민들이 정해진 요일에 분리된 쓰레기를 내놓습니다. 이러한 노력 덕분에 한국의 재활용률은 세계 최고 수준을 자랑합니다. 그러나 플라스틱 소비 증가와 배달 음식 포장재 문제는 여전히 해결해야 할 과제로 남아 있습니다.`,
            native: `Korea operates one of the most systematic waste-separation recycling systems in the world. In Korea, rubbish cannot be thrown away in ordinary bags. You must purchase and use designated, paid volume-based waste bags issued by the local authority. This system was introduced in 1995 and successfully reduced the amount of waste produced significantly.

Recyclable waste must be separated thoroughly by type. Plastic, glass, paper, metal and food waste must all be disposed of separately. Food waste in particular must be collected in a separate container and put out in a designated place; it is recycled into compost or animal feed.

Apartment complexes have dedicated recycling spaces, and residents put out sorted rubbish on designated days. Thanks to these efforts, Korea's recycling rate is among the highest in the world. However, increasing plastic consumption and packaging from food delivery services remain challenges that still need to be addressed.`
        },
        vocabGloss: [
            { word: "분리수거", romanized: "bullisugeo", translation: "separate collection, recycling sorting" },
            { word: "종량제", romanized: "jongnyangje", translation: "volume-based waste fee system" },
            { word: "재활용", romanized: "jaehwalyong", translation: "recycling, reuse" },
            { word: "음식물 쓰레기", romanized: "eumsigmul sseulejgi", translation: "food waste" },
            { word: "퇴비", romanized: "toibi", translation: "compost, fertiliser" },
            { word: "재활용률", romanized: "jaehwalyongnyul", translation: "recycling rate" }
        ],
        questions: [
            {
                id: "ko-r-b1-2-q1",
                level: "B1",
                prompt: "What must Koreans use to dispose of general waste?",
                options: [
                    "Designated paid waste bags from the local authority",
                    "Any plastic bag from a supermarket",
                    "A special government-issued container",
                    "Compostable bags only"
                ],
                answer: "Designated paid waste bags from the local authority"
            },
            {
                id: "ko-r-b1-2-q2",
                level: "B1",
                prompt: "When was Korea's volume-based waste fee system introduced?",
                options: ["1995", "1985", "2000", "2005"],
                answer: "1995"
            },
            {
                id: "ko-r-b1-2-q3",
                level: "B1",
                prompt: "How is food waste recycled in Korea?",
                options: [
                    "It is turned into compost or animal feed",
                    "It is incinerated at special plants",
                    "It is buried in landfill sites",
                    "It is exported to other countries"
                ],
                answer: "It is turned into compost or animal feed"
            },
            {
                id: "ko-r-b1-2-q4",
                level: "B1",
                prompt: "What environmental problem does the passage say remains unsolved?",
                options: [
                    "Plastic consumption and food delivery packaging",
                    "The cost of the paid waste bag system",
                    "A lack of recycling centres in rural areas",
                    "Water pollution from industrial sites"
                ],
                answer: "Plastic consumption and food delivery packaging"
            }
        ]
    },
    {
        id: "ko-r-b1-3",
        level: "B1",
        category: "everyday",
        title: "서울에서의 하루",
        body: {
            target: `오전 여덟 시, 서울 마포구에 사는 지우는 지하철을 타고 광화문으로 향합니다. 출근 시간대라 지하철은 매우 혼잡하지만, 노약자 전용석은 항상 비워져 있습니다. 광화문 광장에 도착하자 이순신 장군 동상 앞으로 직장인들이 바쁘게 지나갑니다.

점심시간에 지우는 동료들과 함께 인근 식당으로 갑니다. 오늘의 선택은 된장찌개와 밥. 식사 후에는 편의점에서 아메리카노 한 잔을 사서 가져옵니다. 한국의 편의점은 단순한 가게가 아닙니다. 커피, 도시락, 공과금 납부, 택배 접수까지 모두 가능한 생활의 중심입니다.

퇴근 후 지우는 홍대 앞으로 향합니다. 거리에는 버스킹 공연을 하는 뮤지션들과 사진을 찍는 관광객들로 가득합니다. 친구와 소주 한잔을 기울이며 하루를 마무리합니다. 서울은 빠르고 바쁘지만, 그 속에서도 각자의 리듬으로 살아가는 사람들로 넘쳐납니다.`,
            native: `At eight o'clock in the morning, Jiu, who lives in Mapo-gu, Seoul, takes the subway towards Gwanghwamun. The subway is very crowded during rush hour, but the priority seats for the elderly and vulnerable are always kept empty. Arriving at Gwanghwamun Plaza, office workers bustle past in front of the statue of Admiral Yi Sun-sin.

At lunchtime Jiu goes to a nearby restaurant with her colleagues. Today's choice is doenjang-jjigae (fermented soybean stew) with rice. After eating she buys an Americano coffee from the convenience store and brings it back. Korean convenience stores are not just simple shops — they are the centre of daily life where you can buy coffee, packed lunches, pay utility bills and even drop off parcels.

After work, Jiu heads to Hongdae. The streets are full of busking musicians and tourists taking photos. She wraps up the day sharing a glass of soju with a friend. Seoul is fast and busy, but overflowing with people each living at their own rhythm.`
        },
        vocabGloss: [
            { word: "혼잡하다", romanized: "honjapage", translation: "to be crowded, congested" },
            { word: "노약자 전용석", romanized: "noyakja jeonyonseok", translation: "priority seat for the elderly and vulnerable" },
            { word: "된장찌개", romanized: "doenjang-jjigae", translation: "fermented soybean paste stew" },
            { word: "편의점", romanized: "pyeonijeom", translation: "convenience store" },
            { word: "버스킹", romanized: "beoseuking", translation: "busking, street performance" },
            { word: "소주", romanized: "soju", translation: "soju (Korean distilled spirit)" }
        ],
        questions: [
            {
                id: "ko-r-b1-3-q1",
                level: "B1",
                prompt: "What is notable about priority seats on the Seoul subway?",
                options: [
                    "They are always kept empty out of respect",
                    "They are only available during rush hour",
                    "They require a special pass to use",
                    "They are located near the exit doors"
                ],
                answer: "They are always kept empty out of respect"
            },
            {
                id: "ko-r-b1-3-q2",
                level: "B1",
                prompt: "What does Jiu eat for lunch?",
                options: [
                    "Doenjang-jjigae (fermented soybean stew) with rice",
                    "Bibimbap from the convenience store",
                    "Samgyeopsal with her colleagues",
                    "A packed lunch bought from a convenience store"
                ],
                answer: "Doenjang-jjigae (fermented soybean stew) with rice"
            },
            {
                id: "ko-r-b1-3-q3",
                level: "B1",
                prompt: "According to the passage, what services can Korean convenience stores offer?",
                options: [
                    "Coffee, packed lunches, utility bill payments and parcel drop-off",
                    "Banking and money exchange only",
                    "Groceries and fresh produce",
                    "Mobile phone repair and electronics"
                ],
                answer: "Coffee, packed lunches, utility bill payments and parcel drop-off"
            },
            {
                id: "ko-r-b1-3-q4",
                level: "B1",
                prompt: "Where does Jiu go after work?",
                options: ["Hongdae", "Gwanghwamun", "Mapo-gu", "Insadong"],
                answer: "Hongdae"
            }
        ]
    },
    {
        id: "ko-r-b1-4",
        level: "B1",
        category: "dialogue",
        title: "직업 선택 — 친구와의 대화 (Choosing a Career — A Conversation Between Friends)",
        body: {
            target: "민수: 요즘 취업 준비는 잘 되고 있어?\n지원: 솔직히 말하면 잘 모르겠어. 처음에는 대기업에 가기로 했는데, 요즘은 스타트업도 괜찮겠다 싶어서.\n민수: 그래? 왜 생각이 바뀐 거야?\n지원: 대기업은 안정적이지만 자유도가 낮다고 하더라고. 스타트업은 힘들지만 배우는 게 많다는 말을 들었어.\n민수: 나는 스타트업에서 인턴을 했는데, 처음에는 엄청 힘들었어. 그런데 지금은 그 경험 덕분에 많이 성장한 것 같아.\n지원: 부럽다. 나도 일단 다양한 경험을 쌓는 게 중요할 것 같아서 인턴을 알아보기로 했어.\n민수: 잘 생각했다. 어디 지원할 건데?\n지원: 아직 모르겠어. 어디에 지원해야 할지 생각 중이야.",
            native: "Minsu: How is the job preparation going these days?\nJiwon: Honestly, I'm not sure. At first I had decided to go to a large company, but lately I've been thinking a start-up might not be bad either.\nMinsu: Really? Why did your thinking change?\nJiwon: I heard that large companies are stable but have low autonomy. I heard that start-ups are tough but you learn a lot.\nMinsu: I did an internship at a start-up, and at first it was incredibly hard. But now I think I've grown a lot thanks to that experience.\nJiwon: I'm envious. I also think it'll be important to build up various experiences first, so I've decided to look into internships.\nMinsu: You thought well. Where are you going to apply?\nJiwon: I'm not sure yet. I'm in the middle of thinking about where I should apply."
        },
        vocabGloss: [
            { word: "취업 준비", romanized: "chwieop junbi", translation: "job-hunting preparation" },
            { word: "대기업", romanized: "daegieop", translation: "large corporation / conglomerate" },
            { word: "스타트업", romanized: "seutateueop", translation: "start-up company" },
            { word: "자유도", romanized: "jayudo", translation: "degree of freedom / autonomy" },
            { word: "인턴", romanized: "inteon", translation: "intern / internship" },
            { word: "경험을 쌓다", romanized: "gyeongheomeul ssat-da", translation: "to build up / accumulate experience" }
        ],
        questions: [
            { id: "ko-r-b1-4-q1", level: "B1", prompt: "What was Jiwon's original career plan?", options: ["To go to a large company", "To start her own business", "To study abroad first", "To work at a start-up"], answer: "To go to a large company" },
            { id: "ko-r-b1-4-q2", level: "B1", prompt: "What does Jiwon say about start-ups?", options: ["They are tough but you learn a lot", "They pay better than large companies", "They have no job security at all", "They are very stable and structured"], answer: "They are tough but you learn a lot" },
            { id: "ko-r-b1-4-q3", level: "B1", prompt: "What has Jiwon decided to do?", options: ["Look into internships to build diverse experience", "Apply directly to large companies", "Give up on job-hunting for now", "Start her own company"], answer: "Look into internships to build diverse experience" },
            { id: "ko-r-b1-4-q4", level: "B1", prompt: "Which grammar pattern from ko-g-b1-12 appears in the last line?", options: ["~는지 (embedded question with 알아보다)", "~기 때문에 (formal because)", "~지만 (contrast)", "~다고 하다 (reported speech)"], answer: "~는지 (embedded question with 알아보다)" }
        ]
    },
    {
        id: "ko-r-b1-5",
        level: "B1",
        category: "history",
        title: "한국의 경제 성장 — '한강의 기적' (Korea's Economic Growth — 'The Miracle on the Han River')",
        body: {
            target: `한국은 20세기 후반 세계에서 가장 빠른 경제 성장을 이룬 나라 중 하나입니다. 1950년대 한국전쟁 이후, 한국은 세계에서 가장 가난한 나라 중 하나였습니다. 1인당 GDP가 몇십 달러에 불과했고, 농업이 주요 산업이었습니다.

그러나 1960~1980년대에 걸쳐 정부 주도의 강력한 경제 개발 계획이 시작되었습니다. 수출 중심 산업화가 핵심 전략이었습니다. 삼성, 현대, LG와 같은 대기업 그룹인 '재벌'이 이 시기에 크게 성장했습니다. 노동자들은 낮은 임금을 받으며 긴 시간 일했지만, 경제는 빠르게 발전했습니다.

이러한 급격한 경제 성장을 '한강의 기적'이라고 부릅니다. 한강은 서울을 가로지르는 강으로, 이 표현은 한국이 극빈국에서 선진국으로 도약한 것을 상징합니다. 불과 반세기 만에 1인당 GDP가 수백 달러에서 3만 달러 이상으로 늘어난 것입니다.

오늘날 한국은 세계 10위권의 경제 대국이 되었습니다. 반도체, 자동차, 조선, K-콘텐츠 등 다양한 산업에서 세계적인 경쟁력을 갖추고 있습니다. 그러나 경제 성장과 함께 빈부격차, 높은 청년 실업률, 과도한 경쟁 등의 사회적 문제도 함께 나타났습니다.`,
            native: `Korea is one of the countries that achieved the fastest economic growth in the world in the second half of the 20th century. After the Korean War in the 1950s, Korea was one of the poorest countries in the world. GDP per capita was only a few tens of dollars, and agriculture was the main industry.

However, starting from the 1960s through to the 1980s, powerful government-led economic development plans began. Export-oriented industrialisation was the core strategy. Large corporate conglomerates known as 'chaebol', such as Samsung, Hyundai and LG, grew enormously during this period. Workers received low wages and worked long hours, but the economy developed rapidly.

This rapid economic growth is called the 'Miracle on the Han River'. The Han River flows through Seoul, and this expression symbolises Korea's leap from an extremely poor country to a developed nation. In just half a century, GDP per capita grew from a few hundred dollars to over thirty thousand dollars.

Today Korea has become one of the world's top ten economies. It has world-class competitiveness across diverse industries including semiconductors, automobiles, shipbuilding, and K-content. However, alongside economic growth, social problems have also appeared — including wealth inequality, a high youth unemployment rate, and excessive competition.`
        },
        vocabGloss: [
            { word: "한강의 기적", romanized: "Han-gang-ui gijeok", translation: "Miracle on the Han River — Korea's rapid economic development" },
            { word: "재벌", romanized: "jaebeol", translation: "chaebol — large family-owned Korean conglomerate" },
            { word: "수출 중심 산업화", romanized: "suchul jungsin saneophwa", translation: "export-oriented industrialisation" },
            { word: "1인당 GDP", romanized: "ilindan GDP", translation: "GDP per capita" },
            { word: "빈부격차", romanized: "binbu gyeokcha", translation: "wealth gap / inequality between rich and poor" },
            { word: "청년 실업률", romanized: "cheongnyeon sireomnyul", translation: "youth unemployment rate" }
        ],
        questions: [
            { id: "ko-r-b1-5-q1", level: "B1", prompt: "What was Korea's economic situation after the Korean War?", options: ["It was one of the poorest countries in the world", "It was already beginning to industrialise", "It had strong agriculture and manufacturing", "It was receiving large amounts of foreign aid from China"], answer: "It was one of the poorest countries in the world" },
            { id: "ko-r-b1-5-q2", level: "B1", prompt: "What was the core strategy of Korea's economic development plan?", options: ["Export-oriented industrialisation", "Developing domestic consumption", "Agricultural modernisation", "Foreign investment in tourism"], answer: "Export-oriented industrialisation" },
            { id: "ko-r-b1-5-q3", level: "B1", prompt: "What does the expression '한강의 기적' symbolise?", options: ["Korea's transformation from an extremely poor nation to a developed one", "The construction of bridges over the Han River", "South Korea's victory in the Korean War", "The founding of companies like Samsung and Hyundai"], answer: "Korea's transformation from an extremely poor nation to a developed one" },
            { id: "ko-r-b1-5-q4", level: "B1", prompt: "What social problems are mentioned alongside Korea's economic success?", options: ["Wealth inequality, high youth unemployment, and excessive competition", "Environmental pollution, housing shortages, and low birth rates only", "Corruption, crime, and political instability", "Declining education standards and brain drain"], answer: "Wealth inequality, high youth unemployment, and excessive competition" }
        ]
    }
]
