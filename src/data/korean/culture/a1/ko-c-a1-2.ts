import { CultureEpisode } from "../../../../types"
export const koCA12: CultureEpisode = {
    id: "ko-c-a1-2",
    language: "ko",
    level: "A1",
    category: "food",
    region: "all-korean",
    title: {
        native: "한식 — Korean food and the table of sharing",
        target: "한식 — 나눔의 식탁"
    },
    subtitle: "Korean food culture is built around the idea that eating is always a communal act — and banchan changes everything.",

    video: {
        youtubeId: "uRMhMGQqYro",
        title: "Intro to Korean Side Dishes (Banchan)",
        channelName: "Adam Witt",
        captionLang: "ko"
    },

    photos: [
        {
            url: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800",
            caption: {
                native: "Banchan — the small side dishes served with every Korean meal",
                target: "반찬 — 모든 한국 식사와 함께 제공되는 작은 반찬"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800",
            caption: {
                native: "Korean BBQ — the shared grill at the centre of the table",
                target: "한국 바베큐 — 테이블 중앙의 공유 그릴"
            }
        }
    ],

    body: {
        target: `한국 음식 문화를 이해하려면 "반찬"을 이해해야 합니다.

한국에서 식사는 밥과 국/찌개, 그리고 여러 개의 반찬으로 구성됩니다. 반찬은 작은 접시에 담긴 여러 가지 음식입니다 — 김치, 나물, 계란, 두부, 생선 등. 반찬은 보통 테이블 중앙에 놓여 있고, 모든 사람이 함께 먹습니다.

반찬은 공유합니다. 한국에서 식사는 개인적인 활동이 아닙니다. 테이블 위의 모든 음식은 모든 사람의 것입니다. 이것은 한국 문화의 공동체 정신을 반영합니다.

김치는 가장 유명한 반찬입니다. 배추, 고춧가루, 마늘, 생강으로 만든 발효 음식입니다. 한국에는 수백 가지의 김치가 있습니다. 전통적으로 가을에 가족이 모여서 겨울을 위한 김치를 만드는 "김장"을 합니다. 김장은 유네스코 무형문화유산입니다.

한국 식사 예절도 중요합니다. 어른이 먼저 먹기 시작해야 합니다. 숟가락과 젓가락을 함께 사용합니다 — 숟가락은 밥과 국에, 젓가락은 반찬에 사용합니다. 그릇을 손에 들고 먹는 것은 한국에서 예의 바르지 않습니다 — 일본 문화와 반대입니다.

"밥 먹었어요?" — "밥 먹었어요" (Did you eat rice?)는 한국어에서 "어떻게 지내요?"와 같은 의미입니다. 밥은 음식이 아니라 생활 자체입니다.`,
        native: `To understand Korean food culture, you need to understand 'banchan'.

In Korea, a meal consists of rice and soup or jjigae (stew), plus several banchan. Banchan are various foods served in small dishes — kimchi, seasoned vegetables, egg, tofu, fish, and more. Banchan are usually placed in the centre of the table, shared by everyone.

Banchan is shared. In Korea, eating is not an individual activity. All the food on the table belongs to everyone. This reflects the communal spirit of Korean culture.

Kimchi is the most famous banchan. It is a fermented food made from napa cabbage, red pepper powder, garlic, and ginger. There are hundreds of types of kimchi in Korea. Traditionally in autumn, families gather to make kimchi for winter — this is called 'kimjang'. Kimjang is a UNESCO Intangible Cultural Heritage.

Korean table manners are also important. The eldest person should begin eating first. Spoon and chopsticks are used together — the spoon for rice and soup, chopsticks for banchan. Lifting a bowl to eat from it is considered impolite in Korea — the opposite of Japanese culture.

'Did you eat rice?' — '밥 먹었어요?' — has the same meaning as 'How are you?' in Korean. Rice is not just food, it is life itself.`
    },

    simpleTarget: `한국 음식은 맛있고 다양합니다.
식사에는 밥, 국, 그리고 반찬이 있습니다.
반찬은 작은 접시에 담긴 여러 가지 음식입니다.
모든 사람이 반찬을 함께 먹습니다.
김치는 가장 유명한 반찬입니다.
김치는 배추와 고춧가루로 만듭니다.
한국에서 음식은 나눔입니다.`,

    cultureVocab: [
        {
            word: "밥",
            romanized: "bap",
            translation: "cooked rice / meal in general",
            culturalNote: "'밥 먹었어요?' ('Did you eat rice?') is how Koreans say 'How are you?' The word for 'meal' and 'rice' is the same, revealing how central rice is to the culture."
        },
        {
            word: "반찬",
            romanized: "banchan",
            translation: "side dishes served with rice",
            culturalNote: "In a traditional Korean restaurant, banchan is refilled for free as many times as you like. The number and quality of banchan reflects the restaurant's — or host's — generosity."
        },
        {
            word: "김치",
            romanized: "kimchi",
            translation: "fermented cabbage (Korea's national food)",
            culturalNote: "There are over 200 varieties of kimchi — made with cabbage, radish, cucumber, and more. Every Korean household has its own recipe, passed down through generations."
        },
        {
            word: "식사",
            romanized: "siksa",
            translation: "meal",
            culturalNote: "식사 is the formal word for a meal. The everyday greeting '밥 먹었어요?' uses 밥 (rice) rather than 식사, showing how informal and central rice is to Korean daily life."
        },
        {
            word: "나눔",
            romanized: "na-num",
            translation: "sharing, giving",
            culturalNote: "나눔 is the Korean concept of sharing — especially food. Korean food culture is built around 나눔: banchan is shared, BBQ is cooked together at the table, and eating alone is considered sad."
        }
    ],

    questions: [
        {
            id: "ko-c-a1-2-q1",
            type: "comprehension",
            prompt: { native: "What is 'kimjang'?", target: "「김장」이란 무엇입니까?" },
            options: [
                "A type of Korean soup",
                "The communal autumn tradition of making kimchi for winter",
                "A Korean table manner",
                "A type of fermented drink"
            ],
            answer: "The communal autumn tradition of making kimchi for winter"
        },
        {
            id: "ko-c-a1-2-q2",
            type: "comparison",
            prompt: { native: "In Korea, lifting your bowl to eat from it is impolite — in Japan it's polite. Do table manners in your culture differ significantly from those of neighbouring countries?", target: "In Korea, lifting your bowl to eat from it is impolite — in Japan it's polite. Do table manners in your culture differ significantly from those of neighbouring countries?" }
        },
        {
            id: "ko-c-a1-2-q3",
            type: "reflection",
            prompt: { native: "In Korea, '밥 먹었어요?' (Did you eat?) is a way to say 'How are you?'. Is there a food-related greeting in your culture? What does food symbolise in your language?", target: "In Korea, '밥 먹었어요?' (Did you eat?) is a way to say 'How are you?'. Is there a food-related greeting in your culture? What does food symbolise in your language?" }
        }
    ],

    didYouKnow: {
        native: "South Korea is the only country in the world with a designated national 'kimchi day' (November 22nd). The Korean government also maintains a national kimchi institute (World Institute of Kimchi) that researches its fermentation science, health benefits, and standardisation for global export. Kimchi is a matter of national identity.",
        target: "한국은 세계에서 유일하게 공식적인 '김치의 날'(11월 22일)을 지정한 나라입니다. 한국 정부는 또한 세계김치연구소를 운영하며 발효 과학, 건강 효능, 그리고 글로벌 수출을 위한 표준화를 연구합니다. 김치는 국가 정체성의 문제입니다."
    }
}
