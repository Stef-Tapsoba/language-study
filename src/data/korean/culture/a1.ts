// ─────────────────────────────────────────────────────────────────────────────
// KOREAN A1 CULTURE
// src/data/korean/culture/a1.ts
// ─────────────────────────────────────────────────────────────────────────────
import { CultureEpisode } from "../../../types"

// Two episodes on core cultural concepts that are essential for understanding Korea:
// 1) 존댓말 (honorific language) — the system of speech levels that reflects social relationships and respect in Korean culture
// 2) 한글 (Hangul) — the unique Korean writing system, a source of national pride and cultural identity
export const koA1Culture: CultureEpisode[] = [
    {
        id: "ko-c-a1-1",
        language: "ko",
        level: "A1",
        category: "customs",
        region: "all-korean",
        title: {
            native: "눈치 — Reading the room, Korean style",
            target: "눈치 — 분위기를 읽는 법"
        },
        subtitle: "Nunchi is the Korean art of sensing what others feel without being told — and it's considered one of the most important social skills.",

        video: {
            youtubeId: "sAyKo6iF9E0",
            title: "Nunchi (눈치) in Korea: The Social Skill You Need",
            channelName: "Cookie Korea | Real Korean starts here",
            captionLang: "ko"
        },

        photos: [
            {
                url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
                caption: {
                    native: "Seoul at night — a city of intense social connection",
                    target: "밤의 서울 — 강렬한 사회적 연결의 도시"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800",
                caption: {
                    native: "Koreans eating together — sharing food is central to social life",
                    target: "함께 먹는 한국인들 — 음식 나눔은 사회생활의 중심"
                }
            }
        ],

        body: {
            target: `눈치는 한국 문화에서 매우 중요한 개념입니다. 영어로 완벽하게 번역하기가 어렵습니다.

눈치는 다른 사람의 기분과 상황을 빠르게 읽는 능력입니다. 말하지 않아도 다른 사람이 무엇을 원하는지, 어떤 기분인지 아는 것입니다. 눈치가 좋은 사람은 사회적으로 영리하고, 배려가 깊고, 관계에서 성공합니다.

눈치가 없는 사람 — "눈치 없다" — 은 사회적으로 어색하고, 분위기를 파악하지 못하고, 다른 사람에게 불편함을 줍니다. 한국 사회에서 이것은 큰 약점입니다.

한국에서 눈치는 왜 이렇게 중요할까요? 한국 문화는 집단을 중시합니다 — 개인보다 그룹이 중요합니다. 직접적으로 "싫다"고 말하는 것은 종종 무례합니다. 대신, 사람들은 미묘한 신호를 보냅니다. 눈치가 있으면 이 신호를 이해할 수 있습니다.

예를 들어, 한국에서 누군가가 "괜찮아요"라고 말할 때, 항상 진짜로 괜찮다는 뜻이 아닐 수 있습니다. 눈치가 있는 사람은 그 사람의 표정, 목소리 톤, 그리고 상황을 보고 진짜 의미를 이해합니다.

한국어를 배울 때, 언어만 배우는 것으로는 충분하지 않습니다. 눈치도 배워야 합니다.`,
            native: `Nunchi is a very important concept in Korean culture. It is difficult to translate perfectly into English.

Nunchi is the ability to quickly read the mood and situation of others. It is knowing what other people want and how they feel without them saying it. A person with good nunchi is socially intelligent, considerate, and successful in relationships.

A person without nunchi — 'nunchi eomda' — is socially awkward, unable to read the atmosphere, and makes others uncomfortable. In Korean society, this is a significant weakness.

Why is nunchi so important in Korea? Korean culture values the group — the group matters more than the individual. Directly saying 'no' or 'I don't want to' is often considered rude. Instead, people send subtle signals. If you have nunchi, you can understand these signals.

For example, in Korea when someone says 'it's fine', it may not always mean they are genuinely fine. A person with nunchi reads that person's facial expression, tone of voice, and the situation to understand the real meaning.

When learning Korean, learning only the language is not enough. You also need to learn nunchi.`
        },

        cultureVocab: [
            {
                word: "눈치",
                romanized: "nunchi",
                translation: "social awareness, ability to read the room",
                culturalNote: "Literally 'eye measure'. Having good nunchi (눈치가 빠르다, 'nunchi is fast') is one of the most valued social qualities in Korea. It is taught to children from a young age."
            },
            {
                word: "눈치 없다",
                romanized: "nunchi eopda",
                translation: "to have no nunchi, to be socially oblivious",
                culturalNote: "Being told someone has 'nunchi eomda' is a significant social criticism. It suggests they are self-absorbed and insensitive to others' needs."
            },
            {
                word: "눈치 보다",
                romanized: "nunchi boda",
                translation: "to be cautious, to watch others' reactions before acting",
                culturalNote: "Can be positive (considerate) or negative (overly deferential). The balance is important — too much nunchi-watching can be seen as indecisive."
            },
            {
                word: "분위기",
                romanized: "bun-wi-gi",
                translation: "atmosphere, mood, vibe",
                culturalNote: "Reading 분위기 is central to Korean social life. '분위기 파악' (reading the atmosphere) is what nunchi enables you to do."
            },
            {
                word: "정 (情)",
                romanized: "jeong",
                translation: "deep emotional bond, attachment",
                culturalNote: "Another untranslatable Korean concept — a feeling of deep connection that builds over time with people you spend a lot of time with. You can have jeong with places and objects too."
            }
        ],

        questions: [
            {
                id: "ko-c-a1-1-q1",
                type: "comprehension",
                prompt: { native: "What is the best description of 'nunchi'?", target: "「눈치」를 가장 잘 설명하는 것은 무엇입니까?" },
                options: [
                    "A type of Korean traditional food",
                    "The ability to quickly sense others' feelings and the social situation",
                    "A formal way of greeting elders",
                    "A style of Korean writing"
                ],
                answer: "The ability to quickly sense others' feelings and the social situation"
            },
            {
                id: "ko-c-a1-1-q2",
                type: "reflection",
                prompt: { native: "Is there a concept similar to nunchi in your culture? Do you have a word for it?", target: "당신의 문화에 눈치와 비슷한 개념이 있습니까? 그것을 나타내는 단어가 있습니까?" }
            },
            {
                id: "ko-c-a1-1-q3",
                type: "comparison",
                prompt: { native: "Korean culture often prioritises indirect communication. How direct is communication in your culture? Do you think one approach is better than the other?", target: "한국 문화는 종종 간접적인 의사소통을 중시합니다. 당신의 문화에서는 의사소통이 얼마나 직접적입니까?" }
            }
        ],

        didYouKnow: {
            native: "The concept of nunchi is so central to Korean parenting that there are bestselling books teaching children how to develop it. One book, 'The Power of Nunchi' by Euny Hong, became an international bestseller and introduced the concept to English-speaking audiences — who immediately recognized it but had no word for it.",
            target: "눈치의 개념은 한국 육아에서 너무 중심적이어서 아이들에게 이것을 개발하는 방법을 가르치는 베스트셀러 책들이 있습니다. 유니 홍의 '눈치의 힘'은 국제적인 베스트셀러가 되어 영어권 독자들에게 이 개념을 소개했습니다 — 그들은 즉시 이것을 알아보았지만 그것을 나타내는 단어가 없었습니다."
        }
    },

    {
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

        cultureVocab: [
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
                culturalNote: "Average Korean consumption: 40lbs (18kg) per person per year. There are over 200 regional and seasonal varieties. North and South Korea's kimchi styles differ noticeably."
            },
            {
                word: "김장",
                romanized: "kimjang",
                translation: "the communal autumn kimchi-making tradition",
                culturalNote: "Families and neighbours gather to make hundreds of heads of kimchi before winter. UNESCO recognised it in 2013 as an Intangible Cultural Heritage of Humanity."
            },
            {
                word: "밥",
                romanized: "bap",
                translation: "cooked rice / meal in general",
                culturalNote: "'밥 먹었어요?' ('Did you eat rice?') is how Koreans say 'How are you?' The word for 'meal' and 'rice' is the same, revealing how central rice is to the culture."
            },
            {
                word: "정",
                romanized: "jeong",
                translation: "deep bond, emotional attachment",
                culturalNote: "Sharing food creates jeong. Korean food culture is inseparable from this concept — eating together is how relationships deepen and bonds form."
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
                prompt: { native: "In Korea, lifting your bowl to eat from it is impolite — in Japan it's polite. Do table manners in your culture differ significantly from those of neighbouring countries?", target: "한국에서는 그릇을 들고 먹는 것이 예의 바르지 않지만, 일본에서는 예의 바릅니다. 당신의 문화의 식사 예절은 이웃 나라와 많이 다릅니까?" }
            },
            {
                id: "ko-c-a1-2-q3",
                type: "reflection",
                prompt: { native: "In Korea, '밥 먹었어요?' (Did you eat?) is a way to say 'How are you?'. Is there a food-related greeting in your culture? What does food symbolise in your language?", target: "한국에서 '밥 먹었어요?'는 '어떻게 지내요?'를 말하는 방법입니다. 당신의 문화에 음식과 관련된 인사가 있습니까?" }
            }
        ],

        didYouKnow: {
            native: "South Korea is the only country in the world with a designated national 'kimchi day' (November 22nd). The Korean government also maintains a national kimchi institute (World Institute of Kimchi) that researches its fermentation science, health benefits, and standardisation for global export. Kimchi is a matter of national identity.",
            target: "한국은 세계에서 유일하게 공식적인 '김치의 날'(11월 22일)을 지정한 나라입니다. 한국 정부는 또한 세계김치연구소를 운영하며 발효 과학, 건강 효능, 그리고 글로벌 수출을 위한 표준화를 연구합니다. 김치는 국가 정체성의 문제입니다."
        }
    }
]
