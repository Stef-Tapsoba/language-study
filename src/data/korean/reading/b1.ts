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
    }
]
