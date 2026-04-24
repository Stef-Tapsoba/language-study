import { CultureEpisode } from "../../../../types"

export const koCA22: CultureEpisode = {
    id: "ko-c-a2-2",
    language: "ko",
    level: "A2",
    category: "food",
    region: "seoul",
    title: {
        native: "한국의 음식 문화 — The culture of Korean food",
        target: "한국의 음식 문화 — 한국 음식의 세계"
    },
    subtitle: "Korean food culture is inseparable from social connection — sharing, trying, and encouraging each other to eat are at the heart of how Koreans build relationships.",

    photos: [
        {
            url: "https://images.unsplash.com/photo-1604908177522-6e50d3f00756?w=800",
            caption: {
                native: "Korean BBQ — samgyeopsal is best shared with friends",
                target: "한국 BBQ — 삼겹살은 친구들과 함께 먹는 게 제일 맛있어요"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800",
            caption: {
                native: "Street food markets in Seoul — a culture of trying new things",
                target: "서울의 길거리 음식 시장 — 새로운 것을 시도하는 문화"
            }
        }
    ],

    body: {
        target: `한국의 음식 문화는 단순히 먹는 것 이상의 의미가 있어요. 음식은 관계를 쌓는 방법이에요.

한국에서는 식사를 같이 하는 것이 매우 중요해요. '밥 먹었어요?'라는 질문은 단순히 식사를 했냐는 질문이 아니에요. '잘 지내요?'라는 뜻을 담고 있어요.

한국 음식 문화의 특징 중 하나는 '한번 먹어봐요'라는 표현이에요. 한국 사람들은 음식을 권할 때 항상 '한번 먹어봐요'라고 해요. 이것은 단순한 권유가 아니라 관심과 배려의 표현이에요.

식당에서 음식을 주문할 때 여러 가지 반찬이 함께 나와요. 반찬은 추가로 더 달라고 해도 돼요. 보통 무료예요. 한국에서 식사를 할 때 혼자 다 먹는 것보다 여러 사람이 나눠 먹는 문화가 있어요.

요즘 젊은 세대는 혼밥(혼자 먹는 밥)도 즐겨요. 하지만 친구나 가족과 함께 먹는 것이 여전히 한국 음식 문화의 중심이에요.`,
        native: `Korean food culture means more than simply eating. Food is a way to build relationships.

In Korea, eating together is very important. The question '밥 먹었어요?' (Have you eaten?) is not simply asking whether you've had a meal. It carries the meaning of 'How are you doing?'

One characteristic of Korean food culture is the expression '한번 먹어봐요' (Just try it). When Koreans offer food, they always say '한번 먹어봐요'. This is not a simple recommendation — it is an expression of interest and care.

When ordering food at a restaurant, various side dishes (banchan) come with the meal. You can ask for more side dishes. Usually they are free. When eating in Korea, there is a culture of sharing food among several people rather than everyone eating alone.

These days younger generations also enjoy 혼밥 (eating alone). But eating with friends or family is still at the centre of Korean food culture.`
    },

    cultureVocab: [
        {
            word: "밥 먹었어요?",
            romanized: "bap meogeosseoyo?",
            translation: "Have you eaten? (social greeting)",
            culturalNote: "This phrase is used as a general social greeting — not just a literal question about eating. Answering 네, 먹었어요 (Yes, I ate) is perfectly fine even if you haven't. The spirit of the question is 'are you okay?'"
        },
        {
            word: "반찬",
            romanized: "banchan",
            translation: "side dishes served with a Korean meal",
            culturalNote: "Side dishes at Korean restaurants are typically refillable and free. Asking for more (더 주세요 — deo juseyo) is expected and normal, not greedy. The variety and quality of banchan is a point of pride."
        },
        {
            word: "혼밥",
            romanized: "honbap",
            translation: "eating alone (혼자 + 밥 contraction)",
            culturalNote: "A relatively modern term reflecting the rise of solo dining. Apps and restaurants specifically designed for 혼밥 are popular in Korean cities. The trend marks a shift from purely communal eating culture, though eating together remains the social ideal."
        },
        {
            word: "회식",
            romanized: "hoesik",
            translation: "company/team dinner (obligatory group meal)",
            culturalNote: "회식 is a Korean workplace and social institution — a group dinner that builds team bonds. Attendance is often expected even if informal. Food and shared conversation are the mechanism for relationship-building in Korean professional life."
        },
        {
            word: "한번 먹어봐요",
            romanized: "hanbeon meogeobwayo",
            translation: "Just try it! (standard food encouragement)",
            culturalNote: "This phrase is the quintessential Korean food encouragement. Refusing food without even trying it is mildly awkward. The polite response to food you found too spicy or not to your taste is to frame it personally: 저한테는 좀 매워요 (It's a bit spicy for me) rather than saying the food is bad."
        }
    ],

    questions: [
        {
            id: "ko-c-a2-2-q1",
            type: "comprehension",
            prompt: { native: "In Korean culture, what does '밥 먹었어요?' really mean beyond asking about eating?", target: "한국 문화에서 '밥 먹었어요?'는 식사 여부 외에 어떤 의미가 있습니까?" },
            options: [
                "A question about what you had for breakfast",
                "A social greeting meaning 'how are you doing?'",
                "An invitation to eat together",
                "A polite refusal of food"
            ],
            answer: "A social greeting meaning 'how are you doing?'"
        },
        {
            id: "ko-c-a2-2-q2",
            type: "reflection",
            prompt: { native: "In Korean food culture, sharing and encouraging others to eat is central. How does food function as a social tool in your culture? Are there similar expressions of care through food?", target: "한국 음식 문화에서는 나누고 먹도록 권하는 것이 중심이에요. 여러분의 문화에서 음식은 어떤 사회적 역할을 하나요? 음식을 통한 배려의 표현이 있나요?" }
        },
        {
            id: "ko-c-a2-2-q3",
            type: "comparison",
            prompt: { native: "Korean banchan (side dishes) are refillable and free. How does this compare to dining experiences in your country? What does this practice reveal about Korean hospitality values?", target: "Korean banchan (side dishes) are refillable and free. How does this compare to dining experiences in your country? What does this practice reveal about Korean hospitality values?" }
        }
    ],

    didYouKnow: {
        native: "The Korean expression 금강산도 식후경 (Geumgangsan-do sikhuggyeong) — literally 'Even a trip to the Diamond Mountains comes after eating' — captures the Korean belief that food is the foundation of everything. No matter how beautiful the destination or how important the event, you should eat first. It's a philosophy, not just an appetite.",
        target: "한국 속담 '금강산도 식후경'은 말 그대로 '금강산 여행도 식사 후'라는 뜻이에요. 음식이 모든 것의 기초라는 한국의 믿음을 담고 있어요. 목적지가 아무리 아름답거나 행사가 아무리 중요해도 먼저 먹어야 한다는 뜻이에요. 이것은 단순한 식욕이 아니라 하나의 철학이에요."
    }
}
