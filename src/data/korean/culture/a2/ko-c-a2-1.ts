import { CultureEpisode } from "../../../../types"

export const koCA21: CultureEpisode = {
    id: "ko-c-a2-1",
    language: "ko",
    level: "A2",
    category: "customs",
    region: "all-korean",
    title: {
        native: "Jondaemal — The grammar of respect",
        target: "존댓말 — 존경의 문법"
    },
    subtitle: "Korean honorifics are not just grammar rules — they are a social system that encodes relationship, hierarchy, and care. Understanding jondaemal is understanding how Korean society works.",

    photos: [
        {
            url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
            caption: {
                native: "Seoul — a city where politeness and hierarchy shape every conversation",
                target: "서울 — 예의와 위계가 모든 대화를 형성하는 도시"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
            caption: {
                native: "Meeting an elder — honorifics signal respect and social awareness",
                target: "어른을 만날 때 — 존댓말은 존경과 사회적 인식을 나타낸다"
            }
        }
    ],

    body: {
        target: `한국어에는 존댓말이라는 특별한 언어 체계가 있습니다. 존댓말은 단순한 문법 규칙이 아니에요. 사람과 사람 사이의 관계를 표현하는 방법입니다.

한국에서는 나이, 직위, 사회적 관계에 따라 말하는 방식이 달라져요. 처음 만나는 사람에게는 존댓말을 써요. 친한 친구에게는 반말을 써요.

존댓말의 가장 중요한 부분 중 하나는 '-(으)시-' 어미예요. 이 어미를 동사에 붙이면 그 동사의 주어가 존경받는 사람임을 나타내요. 예를 들어, 선생님이 오셨어요 (The teacher came)에서 '셨어요'는 선생님을 존경한다는 의미예요.

한국에서 나이를 묻는 것은 무례한 행동이 아니에요. 오히려 올바른 존댓말을 사용하기 위해 나이를 물어보는 것이 예의 바른 행동이에요. 상대방의 나이를 알아야 어떤 말투를 써야 할지 알 수 있기 때문이에요.

외국인도 존댓말을 올바르게 사용하면 한국 사람들이 매우 감동을 받아요. 특히 어르신께 드리다, 계시다, 주무시다 같은 특별한 경어 동사를 사용하면 문화적 이해가 깊다는 것을 보여줄 수 있어요.`,
        native: `Korean has a special language system called jondaemal (jondaemal). Honorifics are not simple grammar rules. They are a way of expressing the relationship between people.

In Korea, the way you speak changes depending on age, position, and social relationship. With someone you meet for the first time, you use honorifics. With close friends, you use informal speech (banmal).

One of the most important parts of honorifics is the -(eu)si- ending. Attaching this ending to a verb shows that the subject of the verb is a respected person. For example, in Seonsaengnim-i osyeosseoyo (The teacher came), the '-syeosseoyo' form signals respect for the teacher.

Asking someone's age in Korea is not considered rude. On the contrary, asking for age in order to use the correct honorifics is considered polite behaviour. You need to know the other person's age to know what kind of speech to use.

When foreigners use honorifics correctly, Korean people are very moved. Especially when you use special honorific verbs like deurida (give), gyesida (be/location), and jumusida (sleep) for elders, it shows a deep cultural understanding.`
    },

    cultureVocab: [
        {
            word: "존댓말",
            romanized: "jondaemal",
            translation: "honorific speech, polite speech",
            culturalNote: "The formal system of polite speech used toward people of higher status, older age, or when meeting someone for the first time. Its counterpart is 반말 (banmal — casual/informal speech)."
        },
        {
            word: "반말",
            romanized: "banmal",
            translation: "casual/informal speech (used with close friends, younger people)",
            culturalNote: "Banmal is not disrespectful by itself — it signals closeness and familiarity. Using banmal with someone older or less familiar than expected can cause offence."
        },
        {
            word: "경어",
            romanized: "gyeongeo",
            translation: "honorific language (respect language)",
            culturalNote: "The broader category of respectful language, including both speech level (존댓말) and honorific vocabulary items (드시다, 계시다, 말씀하시다, etc.)."
        },
        {
            word: "어른",
            romanized: "eoreun",
            translation: "adult; elder (someone who deserves respect)",
            culturalNote: "In Korean culture, 어른 specifically implies someone deserving deference — an elder in age or position. Using honorifics toward 어른 is not optional politeness; it is a social obligation."
        },
        {
            word: "연세",
            romanized: "yeonsae",
            translation: "age (honorific form of 나이)",
            culturalNote: "연세 (yeon-se) is the honorific word for age. If someone asks 연세가 어떻게 되세요? (How old are you?), they are showing respect — not prying. It helps calibrate the correct speech register."
        }
    ],

    questions: [
        {
            id: "ko-c-a2-1-q1",
            type: "comprehension",
            prompt: { native: "Why might a Korean person ask your age when meeting you for the first time?", target: "한국 사람이 처음 만날 때 나이를 물어보는 이유는 무엇입니까?" },
            options: [
                "To judge your social status",
                "To know which speech level to use when speaking to you",
                "Because it is a traditional greeting custom",
                "To decide whether to be friendly"
            ],
            answer: "To know which speech level to use when speaking to you"
        },
        {
            id: "ko-c-a2-1-q2",
            type: "reflection",
            prompt: { native: "Does your culture have a similar system of different speech levels depending on who you are speaking to? How do you show respect in your language?", target: "여러분의 문화에도 대화 상대에 따라 말하는 방식이 다른 체계가 있나요? 여러분의 언어에서는 어떻게 존경을 표현하나요?" }
        },
        {
            id: "ko-c-a2-1-q3",
            type: "comparison",
            prompt: { native: "Which is harder — learning the grammar rules of the -(eu)si- ending or developing the social intuition for when to use them? What do you think would help most?", target: "Which is harder — learning the grammar rules of -(으)시- or developing the social intuition for when to use them? What do you think would help most?" }
        }
    ],

    didYouKnow: {
        native: "Korean honorifics are so deeply embedded in the culture that Korean people have a specific concept called 'hochingmunjae' (title/address problem) — the social difficulty of figuring out what to call someone you've just met. Koreans exchange ages and sometimes business cards precisely to resolve this. For many learners, mastering honorifics is the point at which Korean stops feeling like a foreign language and starts feeling like a real tool for human connection.",
        target: "한국 경어는 문화에 너무 깊이 뿌리내려져 있어서 한국 사람들은 '호칭 문제'라는 개념이 있습니다. 방금 만난 사람을 뭐라고 불러야 할지 결정하는 사회적 어려움이에요. 한국인들은 나이와 때로는 명함을 교환하는 것도 바로 이 문제를 해결하기 위해서예요. 많은 학습자들에게 경어를 마스터하는 것은 한국어가 외국어처럼 느껴지지 않고 진정한 인간 관계의 도구처럼 느껴지기 시작하는 순간이에요."
    }
}
