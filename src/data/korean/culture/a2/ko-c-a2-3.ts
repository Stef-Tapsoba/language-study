import { CultureEpisode } from "../../../../types"

export const koCA23: CultureEpisode = {
    id: "ko-c-a2-3",
    language: "ko",
    level: "A2",
    category: "daily-life",
    region: "seoul",
    title: {
        native: "Ppalli-ppalli munhwa — The culture of speed",
        target: "빨리빨리 문화 — 속도의 문화"
    },
    subtitle: "Ppalli-ppalli (quickly quickly) is more than a phrase — it is a philosophy that shapes how Korea works, innovates, and lives at a pace unlike anywhere else.",

    photos: [
        {
            url: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800",
            caption: {
                native: "Seoul rush hour — the city that never slows down",
                target: "서울 러시아워 — 절대 속도를 늦추지 않는 도시"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800",
            caption: {
                native: "Korea's high-speed internet infrastructure — built in record time",
                target: "한국의 초고속 인터넷 인프라 — 기록적인 시간에 구축됨"
            }
        }
    ],

    body: {
        target: `한국에는 '빨리빨리'라는 문화가 있어요. 빨리빨리는 '빨리'를 두 번 반복한 표현으로 '빨리, 빨리!'라는 뜻이에요. 이것은 단순한 말이 아니라 한국 사회의 속도와 역동성을 나타내는 표현이에요.

한국에서는 많은 것들이 빠르게 진행돼요. 음식 배달은 보통 30분 이내로 도착해요. 인터넷 속도는 세계 최고 수준이에요. 건물을 짓는 것도 다른 나라보다 훨씬 빨라요. 한국은 1960년대에 세계에서 가장 가난한 나라 중 하나였는데, 불과 반세기 만에 경제 대국이 됐어요. 이것이 가능했던 이유 중 하나가 바로 빨리빨리 정신이에요.

빨리빨리 문화는 일상생활에서도 볼 수 있어요. 엘리베이터 버튼을 여러 번 누르거나, 문이 닫히기 전에 빨리 들어가려고 하거나, 식당에서 음식이 빨리 나오기를 기대하는 것들이에요.

하지만 빨리빨리 문화에는 단점도 있어요. 너무 빠른 속도 때문에 스트레스를 받거나 실수를 하는 경우도 있어요. 요즘 젊은 세대는 '느리게 살기'나 '슬로우 라이프'에 관심을 갖기 시작했어요.

외국인들은 한국의 빠른 속도에 처음에는 놀라지만, 나중에는 한국의 효율성과 역동성을 높이 평가하는 경우가 많아요.`,
        native: `Korea has a culture called ppalli-ppalli. Ppalli-ppalli is the word ppalli (quickly) repeated twice, meaning 'quickly, quickly!'. This is not just a phrase — it is an expression of the speed and dynamism of Korean society.

In Korea, many things move quickly. Food delivery usually arrives within 30 minutes. Internet speed is among the highest in the world. Building construction is also much faster than in other countries. In the 1960s, Korea was one of the poorest countries in the world, but in just half a century it became an economic powerhouse. One of the reasons this was possible is precisely the ppalli-ppalli spirit.

Ppalli-ppalli culture is also visible in daily life: pressing elevator buttons multiple times, trying to get in before the doors close, expecting food to come out quickly at restaurants.

But ppalli-ppalli culture also has its downsides. The excessive speed can cause stress and mistakes. These days, younger generations are starting to take an interest in 'living slowly' and the slow life.

Many foreigners are surprised by Korea's pace at first, but later often come to appreciate the efficiency and dynamism of Korea.`
    },

    cultureVocab: [
        {
            word: "빨리빨리",
            romanized: "ppalli ppalli",
            translation: "quickly quickly (Korean cultural concept of speed)",
            culturalNote: "More than an adverb, 빨리빨리 is a cultural identity. It reflects Korea's post-war drive for rapid modernisation — a collective mindset that helped transform a war-devastated country into a tech and economic powerhouse within a generation. Koreans are often aware of the concept and discuss it themselves."
        },
        {
            word: "역동성",
            romanized: "yeokdongseong",
            translation: "dynamism, vibrancy, energy",
            culturalNote: "Koreans often describe their country's character using this word. Korea's culture of constant change — in technology, fashion, food trends, entertainment — is part of the 역동성 that defines modern Korean identity."
        },
        {
            word: "한강의 기적",
            romanized: "Hangang-ui gijeok",
            translation: "Miracle on the Han River (Korea's economic development)",
            culturalNote: "This phrase refers to South Korea's extraordinary economic transformation from the 1960s to 1990s. Starting from one of the world's poorest countries after the Korean War, Korea became a major industrial economy in a single generation — a feat widely attributed partly to the 빨리빨리 work culture."
        },
        {
            word: "슬로우 라이프",
            romanized: "seullou raipu",
            translation: "slow life (counter-movement to 빨리빨리)",
            culturalNote: "A growing movement, especially among younger Koreans, that consciously resists the pressure of constant speed. 슬로우 라이프 enthusiasts value mindful eating, slower travel, and taking time for hobbies. It exists in deliberate tension with 빨리빨리 culture."
        },
        {
            word: "배달 문화",
            romanized: "baedal munhwa",
            translation: "delivery culture",
            culturalNote: "Korea's food delivery culture is among the most sophisticated in the world. Almost any type of food can be delivered within 30 minutes, often to parks or public spaces as well as homes. Apps like 배달의민족 (Baemin) and 쿠팡이츠 transformed Korean food culture and reflect the 빨리빨리 expectation of speed and convenience."
        }
    ],

    questions: [
        {
            id: "ko-c-a2-3-q1",
            type: "comprehension",
            prompt: { native: "What is one area where Korean speed and efficiency is particularly visible?", target: "한국의 속도와 효율성이 특히 두드러지는 분야는 무엇입니까?" },
            options: [
                "Slow and deliberate construction",
                "Food delivery arriving within 30 minutes",
                "Low-speed internet connections",
                "Relaxed workplace culture"
            ],
            answer: "Food delivery arriving within 30 minutes"
        },
        {
            id: "ko-c-a2-3-q2",
            type: "reflection",
            prompt: { native: "빨리빨리 culture has both strengths (efficiency, innovation) and weaknesses (stress, mistakes). How does your culture balance speed with quality? Is there a similar cultural value or its opposite in your society?", target: "빨리빨리 문화에는 장점(효율성, 혁신)과 단점(스트레스, 실수)이 있어요. 여러분의 문화에서는 속도와 질을 어떻게 균형 잡나요? 비슷하거나 반대되는 문화적 가치가 있나요?" }
        },
        {
            id: "ko-c-a2-3-q3",
            type: "comparison",
            prompt: { native: "Korea transformed from one of the world's poorest countries to an economic powerhouse in about 50 years. What role do you think 빨리빨리 culture played? Are there downsides to a society built around speed?", target: "Korea transformed from one of the world's poorest countries to an economic powerhouse in about 50 years. What role do you think 빨리빨리 culture played? Are there downsides to a society built around speed?" }
        }
    ],

    didYouKnow: {
        native: "Korea has the fastest average internet speed in the world — a title it has held for many years. This is not an accident: Korea's government invested heavily in nationwide broadband infrastructure from the late 1990s as a national priority. The result is that broadband internet, including high-speed connections in remote areas, is considered a basic utility in Korea — as essential as electricity and water. The ppalli-ppalli spirit applied to technology infrastructure created a digital foundation that enabled Korea's gaming, entertainment, and tech industries to flourish.",
        target: "한국은 세계에서 평균 인터넷 속도가 가장 빠른 나라로 수년째 이 타이틀을 유지하고 있어요. 이것은 우연이 아니에요. 한국 정부는 1990년대 후반부터 전국 광대역 인프라에 집중적으로 투자했어요. 그 결과 한국에서는 광대역 인터넷이 전기, 수도처럼 기본 생활 서비스로 여겨져요. 빨리빨리 정신을 기술 인프라에 적용한 결과, 한국의 게임, 엔터테인먼트, IT 산업이 꽃필 수 있는 디지털 기반이 만들어졌어요."
    }
}
