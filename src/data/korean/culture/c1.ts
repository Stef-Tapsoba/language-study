// src/data/korean/culture/c1.ts
import { CultureEpisode } from "../../../types"

export const koC1Culture: CultureEpisode[] = [
    {
        id: "ko-c-c1-1",
        language: "ko",
        level: "C1",
        category: "language-note",
        region: "all-korean",
        title: {
            native: "Korean Honorifics — Language as a Mirror of Society",
            target: "한국어의 경어법 — 사회를 비추는 언어"
        },
        subtitle: "Korean honorifics are far more than polite grammar — they encode Korea's entire social hierarchy into every sentence spoken, shaping who you are in relation to everyone around you.",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
                caption: {
                    native: "Generations in conversation — every Korean exchange is shaped by age and relationship",
                    target: "대화 중인 세대들 — 모든 한국어 대화는 나이와 관계에 의해 형성된다"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800",
                caption: {
                    native: "A Korean workplace — hierarchical relationships determine speech levels",
                    target: "한국 직장 — 위계적 관계가 말씨를 결정한다"
                }
            }
        ],
        body: {
            target: `한국어에서 경어법(敬語法)은 단순한 문법 규칙이 아닙니다. 그것은 한국 사회의 구조 자체를 언어 속에 내장한 복잡하고 정교한 시스템입니다. 한국어를 배운다는 것은 언어를 배우는 동시에 한국의 사회적 논리를 내면화하는 과정이기도 합니다.

한국어의 말씨 단계는 크게 격식체(formal)와 비격식체(informal)로 나뉘며, 각각 여러 단계의 높임 표현이 있습니다. 가장 높은 격식체는 '합쇼체'로, 공식적인 자리, 뉴스 방송, 처음 만난 어른에게 사용합니다. '해요체'는 일상적이고 공손한 표현으로 가장 광범위하게 쓰입니다. '해체'와 '해라체'는 친밀한 사이에서, 그리고 어린 사람이나 아랫사람에게 사용하는 반말입니다.

한국어의 높임법은 크게 세 가지 차원에서 작동합니다. 첫째, '주체 높임법'은 문장의 주어를 높이는 것으로, '-시-'를 동사에 삽입합니다. "선생님이 가십니다"가 그 예입니다. 둘째, '객체 높임법'은 문장의 목적어나 부사어를 높이는 것입니다. "선생님께 드립니다"에서 '드리다'는 '주다'의 높임말입니다. 셋째, '상대 높임법'은 말을 듣는 사람에 따라 어미를 바꾸는 것입니다.

경어법은 나이뿐만 아니라 사회적 지위, 직급, 친밀도, 상황에 따라 결정됩니다. 한국에서 처음 만난 사람들이 나이를 빨리 묻는 이유는 바로 이 때문입니다. 나이를 알아야 적절한 말씨를 선택할 수 있기 때문입니다. 단 한 살 차이도 말씨를 바꿀 수 있습니다.

경어법은 한국어 학습자에게 가장 어려운 영역 중 하나입니다. 잘못된 말씨를 사용하면 실례가 되거나 관계가 어색해질 수 있습니다. 반대로 적절한 경어를 구사하면 한국인들은 깊은 인상을 받습니다. 언어의 층위를 정확히 사용한다는 것은 단순히 문법을 아는 것이 아니라 한국 문화와 사회를 깊이 이해한다는 신호이기 때문입니다.

현대 한국에서 경어법은 변화를 겪고 있습니다. 스타트업 문화와 수평적 기업 문화의 확산으로 직장에서 서로 영어 이름을 쓰거나 '해요체'를 통일하는 회사들이 늘어나고 있습니다. 인터넷과 소셜 미디어에서는 반말과 존댓말이 자유롭게 혼용됩니다. 그러나 경어법의 핵심 구조는 여전히 한국어의 근본에 뿌리 깊이 박혀 있습니다. 그것은 언어이자 문화이자 정체성입니다.`,
            native: `In Korean, honorifics (gyeongeobbeop) are not merely grammatical rules. They are a complex and refined system that embeds the very structure of Korean society into language itself. To learn Korean is simultaneously a process of internalising Korean social logic.

Korean speech levels are divided broadly into formal (gyeongsikcheong) and informal (bigyeongsikche) registers, each with multiple tiers of honorific expression. The highest formal register is the 'hapsyo-che', used in official settings, news broadcasts, and with strangers who are your seniors. The 'haeyo-che' is the most widely used — a polite yet everyday form. 'Hae-che' and 'haera-che' are the informal registers used between close friends and when addressing younger people or juniors.

Korean honorifics operate across three main dimensions. First, 'subject honorification' elevates the subject of a sentence by inserting '-si-' into the verb — "Seon-saeng-nim-i ga-sim-ni-da" is one example. Second, 'object honorification' elevates the object or adverbial element — in "Seon-saeng-nim-kke deurim-ni-da", 'deurida' is the elevated form of 'juda' (to give). Third, 'addressee honorification' changes verb endings depending on who you are speaking to.

Honorifics are determined not only by age but also by social position, rank, intimacy and context. This is precisely why Koreans ask each other's age quickly upon first meeting. You need to know someone's age to choose the appropriate speech level. Even a single year's age difference can change how you speak.

Honorifics are one of the most difficult areas for Korean learners. Using the wrong speech level can cause offence or create social awkwardness. Conversely, deploying appropriate honorifics leaves a deep impression on Koreans. Accurately using the layers of language is not merely knowing grammar — it signals a profound understanding of Korean culture and society.

In modern Korea, honorifics are undergoing change. With the spread of startup culture and flatter organisational structures, companies where colleagues use English names or standardise on 'haeyo-che' are increasing. On the internet and social media, banmal and jondaemal are freely mixed. However, the core structure of honorifics remains deeply rooted in the foundations of Korean. It is language, culture, and identity in one.`
        },
        cultureVocab: [
            {
                word: "경어법 (敬語法)",
                romanized: "gyeongeobbeop",
                translation: "honorifics system; the grammar of social respect",
                culturalNote: "The entire Korean honorific system reflects Confucian values of respect for hierarchy, age, and social role. Learning it correctly is seen by Koreans as evidence of genuine cultural respect."
            },
            {
                word: "존댓말",
                romanized: "jondaemal",
                translation: "honorific speech; polite/formal language",
                culturalNote: "The default speech mode when talking to someone you don't know well, who is older, or who holds a higher social or professional rank. Using banmal with a stranger is a significant breach of etiquette."
            },
            {
                word: "반말",
                romanized: "banmal",
                translation: "informal speech; casual language between close peers",
                culturalNote: "Banmal is not simply 'rude' speech — it is the language of intimacy and equality. Two people who switch from jondaemal to banmal (말 놓다 — 'letting go of formal speech') are signalling that they have become genuine friends."
            },
            {
                word: "말 놓다",
                romanized: "mal nota",
                translation: "to switch to informal speech; to agree to use banmal with each other",
                culturalNote: "The moment two Koreans agree to '말 놓다' is a social milestone — it marks the transition from formal acquaintance to close friend. It usually requires a mutual agreement, sometimes with a toast of alcohol."
            },
            {
                word: "주체 높임법",
                romanized: "juchae nop'im-beop",
                translation: "subject honorification (adding -시- to verbs)",
                culturalNote: "The '-시-' infixed into a verb elevates whoever is performing the action. Forgetting to add '-시-' when talking about a respected person is a common mistake among Korean learners that native speakers immediately notice."
            }
        ],
        questions: [
            {
                id: "ko-c-c1-1-q1",
                type: "comprehension",
                prompt: {
                    native: "According to the passage, why do Koreans tend to ask each other's age quickly upon meeting?",
                    target: "본문에 따르면 한국인들이 처음 만났을 때 나이를 빨리 묻는 이유는 무엇입니까?"
                },
                options: [
                    "To determine which speech level to use in conversation",
                    "Because it is considered a warm and friendly greeting",
                    "To decide whether to use English or Korean",
                    "Because Korean law requires age verification in social settings"
                ],
                answer: "To determine which speech level to use in conversation"
            },
            {
                id: "ko-c-c1-1-q2",
                type: "reflection",
                prompt: {
                    native: "Korean encodes social hierarchy directly into grammar. Does your language have any grammatical features that reflect social relationships? How does your language handle the distinction between formal and informal speech?",
                    target: "한국어는 사회적 위계를 문법 안에 직접 내장합니다. 당신의 언어에도 사회적 관계를 반영하는 문법적 특성이 있습니까? 격식체와 비격식체의 구분을 당신의 언어에서는 어떻게 표현합니까?"
                }
            }
        ],
        didYouKnow: {
            native: "Korean has entirely different vocabulary items — not just different verb endings — for many honorific situations. For example, 'eat' is '먹다' (meokda) in ordinary speech but '드시다' (deusida) in honorific speech. 'Sleep' is '자다' (jada) but '주무시다' (jumusida) in honorific. 'Name' is '이름' (ireum) but '성함' (seongham). This means that in some cases, speaking Korean honorifically requires knowing two entirely separate words for the same concept.",
            target: "한국어는 많은 경어 상황에서 동사 어미만 바뀌는 것이 아니라 완전히 다른 어휘를 사용합니다. 예를 들어 '먹다'는 평어지만 높임말은 '드시다'입니다. '자다'는 평어지만 '주무시다'가 높임말입니다. '이름'은 평어지만 '성함'이 높임말입니다. 이는 어떤 경우 한국어를 경어로 구사하기 위해서는 같은 개념에 대해 두 가지 완전히 다른 단어를 알아야 한다는 것을 의미합니다."
        }
    }
]
