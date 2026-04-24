import { CultureEpisode } from "../../../../types"
export const koCA11: CultureEpisode = {
    id: "ko-c-a1-1",
    language: "ko",
    level: "A1",
    category: "customs",
    region: "all-korean",
    title: {
        native: "Nunchi — Reading the room, Korean style",
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

    simpleTarget: `눈치는 한국 문화에서 매우 중요합니다.
눈치는 다른 사람의 기분을 이해하는 능력입니다.
눈치가 좋은 사람은 사회생활을 잘합니다.
한국에서는 직접적으로 싫다고 말하기 어렵습니다.
사람들은 미묘한 신호를 보냅니다.
눈치가 있으면 이 신호를 이해할 수 있습니다.
한국어를 배울 때 눈치도 중요합니다.`,

    cultureVocab: [
        {
            word: "눈치",
            romanized: "nunchi",
            translation: "social awareness, ability to read the room",
            culturalNote: "Literally 'eye measure'. Having good nunchi (눈치가 빠르다, 'nunchi is fast') is one of the most valued social qualities in Korea. It is taught to children from a young age."
        },
        {
            word: "기분",
            romanized: "gibun",
            translation: "mood, feeling",
            culturalNote: "In Korean culture, sensing another person's 기분 without being told is the essence of good 눈치. Asking directly 'how do you feel?' is less common than reading the situation."
        },
        {
            word: "능력",
            romanized: "neungnyeok",
            translation: "ability, skill",
            culturalNote: "눈치 is considered a social 능력 — a skill that can be learned and developed, not just a talent. Korean children are often taught to develop it from a young age."
        },
        {
            word: "사회생활",
            romanized: "sahoesaenghwal",
            translation: "social life, navigating social situations",
            culturalNote: "Literally 'social living'. In Korea, being good at 사회생활 is key to professional and personal success — and 눈치 is essential for it."
        },
        {
            word: "신호",
            romanized: "sinho",
            translation: "signal, cue",
            culturalNote: "In Korean indirect communication, people send subtle 신호 instead of direct statements. Good 눈치 means you can read these signals without them being spelled out."
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
            prompt: { native: "Is there a concept similar to nunchi in your culture? Do you have a word for it?", target: "Is there a concept similar to nunchi in your culture? Do you have a word for it?" }
        },
        {
            id: "ko-c-a1-1-q3",
            type: "comparison",
            prompt: { native: "Korean culture often prioritises indirect communication. How direct is communication in your culture? Do you think one approach is better than the other?", target: "Korean culture often prioritises indirect communication. How direct is communication in your culture? Do you think one approach is better than the other?" }
        }
    ],

    didYouKnow: {
        native: "The concept of nunchi is so central to Korean parenting that there are bestselling books teaching children how to develop it. One book, 'The Power of Nunchi' by Euny Hong, became an international bestseller and introduced the concept to English-speaking audiences — who immediately recognized it but had no word for it.",
        target: "눈치의 개념은 한국 육아에서 너무 중심적이어서 아이들에게 이것을 개발하는 방법을 가르치는 베스트셀러 책들이 있습니다. 유니 홍의 '눈치의 힘'은 국제적인 베스트셀러가 되어 영어권 독자들에게 이 개념을 소개했습니다 — 그들은 즉시 이것을 알아보았지만 그것을 나타내는 단어가 없었습니다."
    }
}
