// src/data/korean/culture/b1.ts
import { CultureEpisode } from "../../../types"

export const koB1Culture: CultureEpisode[] = [
    {
        id: "ko-c-b1-1",
        language: "ko",
        level: "B1",
        category: "customs",
        region: "all-korean",
        title: {
            native: "Nunchi — Korea's Art of Reading the Room",
            target: "눈치 — 분위기를 읽는 한국의 기술"
        },
        subtitle: "Nunchi is the Korean concept of instantly sensing what others feel and need without being told — and it may be the most important social skill in Korean culture.",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
                caption: {
                    native: "Seoul's crowded streets — a city where reading social cues is essential",
                    target: "서울의 붐비는 거리 — 사회적 신호를 읽는 것이 필수인 도시"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1535083783855-aaab6f92c9e0?w=800",
                caption: {
                    native: "A group meal in Korea — sharing a table means sharing awareness",
                    target: "한국의 단체 식사 — 식탁을 나누는 것은 배려를 나누는 것"
                }
            }
        ],
        body: {
            target: `눈치는 한국어로 정확하게 번역하기 어려운 개념입니다. 가장 가까운 영어 표현은 'the ability to read the room'이지만, 눈치는 그보다 훨씬 깊고 넓은 의미를 가집니다.

눈치는 다른 사람의 감정, 의도, 필요를 말없이 파악하는 능력입니다. 표정, 말투, 침묵, 몸짓, 상황 — 이 모든 것을 종합해서 상대방이 무엇을 원하는지, 지금 분위기가 어떤지를 빠르게 읽어내는 것이 눈치입니다.

한국 사회에서 눈치는 왜 이토록 중요할까요? 한국 문화는 집단주의적 성격이 강합니다. 직접적으로 의사를 표현하는 것보다 간접적인 신호를 통해 소통하는 경우가 많습니다. 누군가 "괜찮아요"라고 말해도, 그것이 진짜 괜찮다는 뜻이 아닐 수 있습니다. 눈치가 있는 사람은 그 차이를 알아챕니다.

눈치는 어린 시절부터 자연스럽게 학습됩니다. 가족 안에서, 학교에서, 직장에서 눈치를 키워 나갑니다. 눈치가 없다는 것은 사회적으로 큰 결점으로 여겨집니다. 반대로 눈치가 빠른 사람은 배려심이 깊고 사회적으로 성숙하다는 평가를 받습니다.

눈치는 때로는 부담이 되기도 합니다. 항상 다른 사람의 기분을 살피고 눈치를 봐야 한다는 압박은 스트레스의 원인이 될 수 있습니다. 현대 한국의 젊은 세대는 이러한 압박에서 벗어나 더 직접적인 소통을 추구하는 경향도 있습니다.

한국어를 배울 때, 언어 실력만큼이나 눈치를 이해하는 것이 중요합니다. 눈치 없이 한국어를 구사하는 것은, 마치 음정 없이 노래를 부르는 것과 같습니다.`,
            native: `Nunchi is a concept difficult to translate precisely into English. The closest English expression is 'the ability to read the room', but nunchi carries a far deeper and broader meaning.

Nunchi is the ability to silently perceive others' emotions, intentions and needs. Facial expression, tone of voice, silence, body language, context — synthesising all of these to quickly read what the other person wants and what the atmosphere is: that is nunchi.

Why is nunchi so important in Korean society? Korean culture has a strongly collectivist character. People communicate more through indirect signals than by directly expressing their thoughts. Even if someone says "it's fine", that might not mean they are genuinely fine. A person with nunchi notices the difference.

Nunchi is naturally learnt from childhood. It is developed within the family, at school, and in the workplace. Having no nunchi is considered a significant social flaw. Conversely, a person with quick nunchi is regarded as considerate and socially mature.

Nunchi can sometimes feel like a burden. The pressure of always having to gauge others' moods and watch for nunchi can be a source of stress. Younger generations in modern Korea also tend to seek more direct communication and move away from this pressure.

When learning Korean, understanding nunchi is just as important as language ability. Speaking Korean without nunchi is like singing a song without pitch.`
        },
        cultureVocab: [
            {
                word: "눈치",
                romanized: "nunchi",
                translation: "social awareness; ability to read the room",
                culturalNote: "Literally 'eye measure'. Considered one of the most essential social skills in Korea. Parents actively teach it to children, and its absence is one of the harshest social criticisms."
            },
            {
                word: "눈치가 빠르다",
                romanized: "nunchi-ga ppareuda",
                translation: "to have quick nunchi; to be socially perceptive",
                culturalNote: "A genuine compliment in Korea. Describes someone who immediately senses the atmosphere and responds appropriately — valued in friendships, workplaces, and romantic relationships alike."
            },
            {
                word: "눈치 없다",
                romanized: "nunchi eopda",
                translation: "to have no nunchi; to be socially oblivious",
                culturalNote: "Calling someone '눈치 없다' is a serious social criticism, suggesting they are self-absorbed and insensitive. In Korean workplace culture especially, this label can damage one's reputation significantly."
            },
            {
                word: "분위기 파악",
                romanized: "bun-wi-gi pa-ak",
                translation: "reading the atmosphere; assessing the mood",
                culturalNote: "'분위기 파악을 못 한다' (can't read the atmosphere) is close in meaning to '눈치가 없다'. In social gatherings or meetings, failing to assess the mood before speaking is considered tactless."
            },
            {
                word: "집단주의",
                romanized: "jipdan-juui",
                translation: "collectivism",
                culturalNote: "Korea's collectivist culture — shaped by Confucian values — is the foundation that makes nunchi so necessary. The group's harmony takes precedence over individual expression, making social reading skills essential."
            }
        ],
        questions: [
            {
                id: "ko-c-b1-1-q1",
                type: "comprehension",
                prompt: {
                    native: "What is the most accurate description of nunchi according to the text?",
                    target: "본문에 따르면 눈치를 가장 정확하게 설명한 것은 무엇입니까?"
                },
                options: [
                    "The ability to silently perceive others' emotions, intentions and needs",
                    "A formal system of showing respect to elders",
                    "A type of indirect speech used in Korean",
                    "The practice of avoiding conflict at all costs"
                ],
                answer: "The ability to silently perceive others' emotions, intentions and needs"
            },
            {
                id: "ko-c-b1-1-q2",
                type: "reflection",
                prompt: {
                    native: "Is there a concept in your culture similar to nunchi? Do you think indirect communication or direct communication is better for social harmony?",
                    target: "당신의 문화에 눈치와 비슷한 개념이 있습니까? 간접적 소통과 직접적 소통 중 사회적 조화에 더 좋은 것은 무엇이라고 생각합니까?"
                }
            }
        ],
        didYouKnow: {
            native: "Euny Hong, a Korean-American journalist, wrote a bestselling book called 'The Power of Nunchi' (2019) which introduced the concept to Western audiences. She argues that nunchi is the secret behind Korea's rapid rise — from one of the world's poorest countries after the Korean War to a global cultural and economic powerhouse within two generations.",
            target: "한국계 미국인 저널리스트 유니 홍은 서양 독자들에게 눈치 개념을 소개한 베스트셀러 '눈치의 힘'(2019)을 썼습니다. 그녀는 눈치야말로 한국이 한국전쟁 후 세계 최빈국 중 하나에서 두 세대 만에 글로벌 문화·경제 강국으로 빠르게 성장한 비결이라고 주장합니다."
        }
    }
]
