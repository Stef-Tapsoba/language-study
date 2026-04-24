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
    },
    {
        id: "ko-c-b1-2",
        language: "ko",
        level: "B1",
        category: "customs",
        region: "all-korean",
        title: {
            native: "The Ppalli-Ppalli Culture — A Nation of Speed",
            target: "빨리빨리 문화 — 속도의 나라"
        },
        subtitle: "Korea's 'hurry-hurry' culture runs far deeper than impatience — it is a reflection of a nation that rebuilt itself from near-total destruction in a single generation.",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1601381718327-1a6f7f8a7e7b?w=800",
                caption: {
                    native: "Seoul's highway at rush hour — traffic that never stops",
                    target: "러시아워의 서울 고속도로 — 멈추지 않는 교통"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
                caption: {
                    native: "Construction cranes over the Seoul skyline — Korea builds fast",
                    target: "서울 스카이라인 위의 건설 크레인 — 빠르게 짓는 나라"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
                caption: {
                    native: "A food delivery rider — Korean delivery culture is among the fastest in the world",
                    target: "음식 배달 라이더 — 한국의 배달 문화는 세계에서 가장 빠른 수준"
                }
            }
        ],
        body: {
            target: `한국에서는 '빨리빨리'가 단순한 개인 성격이 아닙니다. 그것은 국민적인 문화입니다. 식당에서 음식을 주문하면 몇 분 안에 나옵니다. 엘리베이터를 탔을 때 문이 닫히기 전에 '닫힘' 버튼을 누릅니다. 인터넷 속도가 세계에서 가장 빠른 나라 중 하나인 것도 우연이 아닙니다. 한국인들은 기다리는 것을 좋아하지 않습니다.

빨리빨리 문화의 뿌리는 한국의 역사에 있습니다. 1950년 한국전쟁으로 나라 전체가 파괴되었습니다. 그 후 불과 30~40년 만에 '한강의 기적'을 이루었습니다. 이 짧은 시간 동안 완성해야 할 일이 엄청났기 때문에 빠름은 생존의 방식이었습니다. 아버지, 어머니 세대는 '빠르게 해야 살아남는다'는 의식을 가지고 있었고, 이것이 다음 세대로 전해졌습니다.

빨리빨리는 한국의 경쟁력이기도 합니다. 삼성, LG, 현대가 세계 시장에서 빠르게 성장한 것도 이 문화와 무관하지 않습니다. 새로운 트렌드에 즉각 반응하고, 신제품을 빠르게 출시하며, 위기에 신속하게 대응하는 능력 — 이 모든 것이 빨리빨리 정신에서 나옵니다. 한국이 5G와 AI 기술 도입에서 세계를 선도하는 것도 같은 맥락입니다.

그러나 빨리빨리 문화의 부작용도 있습니다. 빠른 결정이 언제나 좋은 결정은 아닙니다. 성수대교와 삼풍백화점 붕괴 사고(1994~1995)는 너무 빠른 건설과 부실한 안전 점검의 결과였습니다. 또한 청소년들은 학교에서 치열한 경쟁 속에 살고 있고, 직장인들은 과도한 업무 스트레스로 번아웃을 경험합니다. '빨리 해야 한다'는 압박은 만성 피로와 불안으로 이어지기도 합니다.

최근 젊은 세대는 변화를 시도하고 있습니다. 워라밸(일과 삶의 균형)을 중시하는 경향이 강해지고, 욜로(YOLO) 문화가 퍼지면서 '지금 이 순간을 즐기자'는 가치관도 생겨났습니다. 하지만 빨리빨리는 여전히 한국인의 DNA 안에 깊이 새겨져 있으며, 이것이 한국을 세계에서 가장 역동적인 나라 중 하나로 만드는 힘이기도 합니다.`,
            native: `In Korea, 'ppalli-ppalli' is not simply a personal character trait. It is a national culture. When you order food at a restaurant, it arrives within minutes. When you get in a lift, you press the 'close' button before the doors have a chance to shut on their own. It is no coincidence that Korea is one of the countries with the fastest internet speeds in the world. Koreans do not like to wait.

The roots of ppalli-ppalli culture lie in Korean history. The Korean War of 1950 destroyed the entire country. Yet within just thirty to forty years, Korea achieved the 'Miracle on the Han River'. Because the work to be accomplished in that short time was immense, speed was a matter of survival. The parent generation carried the consciousness that 'you have to be fast to survive', and this was passed on to the next generation.

Ppalli-ppalli is also Korea's competitive strength. It is no coincidence that Samsung, LG, and Hyundai grew rapidly in global markets. The ability to respond immediately to new trends, launch new products quickly, and react swiftly to crises — all of this comes from the ppalli-ppalli spirit. Korea's lead in adopting 5G and AI technology is part of the same story.

However, ppalli-ppalli culture also has side-effects. Fast decisions are not always good decisions. The Seongsu Bridge and Sampoong Department Store collapses (1994–1995) were the result of rushed construction and inadequate safety inspections. Young people live under fierce competition at school, and workers experience burnout from excessive work stress. The pressure of 'having to do it quickly' can lead to chronic fatigue and anxiety.

In recent years, younger generations are attempting change. The tendency to value work-life balance (worabael) has grown stronger, and as YOLO culture spreads, the value of 'enjoy this moment right now' has emerged. But ppalli-ppalli remains deeply inscribed in the DNA of Koreans, and it is also the force that makes Korea one of the most dynamic countries in the world.`
        },
        cultureVocab: [
            {
                word: "빨리빨리",
                romanized: "ppalli-ppalli",
                translation: "hurry-hurry / quickly-quickly",
                culturalNote: "A reduplication that intensifies the sense of urgency. The repetition itself is grammatically Korean — 빠르다 (to be fast) → 빨리 (quickly) → 빨리빨리 (very quickly, hurry up). Foreign visitors often notice it immediately in restaurants, lifts, and workplaces."
            },
            {
                word: "한강의 기적",
                romanized: "Han-gang-ui gijeok",
                translation: "The Miracle on the Han River",
                culturalNote: "The phrase used to describe Korea's extraordinary economic transformation from one of the world's poorest nations to a developed economy in one generation. The Han River flows through Seoul — using it as a symbol places the miracle at the heart of the capital city."
            },
            {
                word: "워라밸",
                romanized: "worabael",
                translation: "Work-Life Balance",
                culturalNote: "A Korean portmanteau of the English phrase 'work-life balance'. It became a cultural keyword in the 2010s as younger Koreans began to push back against the long-hours culture of their parents' generation. Its widespread use signals a generational shift in values."
            },
            {
                word: "번아웃",
                romanized: "beon-a-ut",
                translation: "burnout",
                culturalNote: "Borrowed from English, this term has become widely used in Korean to describe exhaustion from overwork. Korea consistently ranks among countries with the longest working hours in the OECD, making 번아웃 a serious public health topic."
            },
            {
                word: "욜로",
                romanized: "yollo",
                translation: "YOLO (You Only Live Once)",
                culturalNote: "Adopted from English and integrated into Korean youth culture. It represents a philosophical counter-movement to competitive achievement culture — prioritising present enjoyment over future financial security. Sometimes contrasted with 소확행 (소소하지만 확실한 행복, small but certain happiness)."
            }
        ],
        questions: [
            {
                id: "ko-c-b1-2-q1",
                type: "comprehension",
                prompt: {
                    native: "What historical event is described as the root of the ppalli-ppalli culture?",
                    target: "본문에서 빨리빨리 문화의 뿌리로 설명된 역사적 사건은 무엇입니까?"
                },
                options: [
                    "The destruction of the Korean War in 1950, followed by rapid reconstruction",
                    "The 1988 Seoul Olympics, which forced Korea to modernise quickly",
                    "The 1997 Asian financial crisis, which demanded urgent economic reform",
                    "The invention of the Korean alphabet, Hangul, in the 15th century"
                ],
                answer: "The destruction of the Korean War in 1950, followed by rapid reconstruction"
            },
            {
                id: "ko-c-b1-2-q2",
                type: "comprehension",
                prompt: {
                    native: "What are two negative consequences of ppalli-ppalli culture mentioned in the text?",
                    target: "본문에서 언급된 빨리빨리 문화의 부작용 두 가지는 무엇입니까?"
                },
                options: [
                    "Building collapses due to rushed construction, and burnout and anxiety from excessive pressure",
                    "Slow internet speeds and poor international trade performance",
                    "Declining birth rates and increasing urbanisation",
                    "Loss of traditional culture and reduced interest in Korean history"
                ],
                answer: "Building collapses due to rushed construction, and burnout and anxiety from excessive pressure"
            },
            {
                id: "ko-c-b1-2-q3",
                type: "reflection",
                prompt: {
                    native: "Ppalli-ppalli culture is described as both a strength and a weakness. Can you think of an equivalent cultural value in another country that has a similar double-edged quality — something that drives success but also creates problems?",
                    target: "빨리빨리 문화는 강점이자 약점으로 설명됩니다. 다른 나라에서 성공을 이끌지만 동시에 문제를 일으키는, 이와 비슷한 양면성을 가진 문화적 가치가 있다면 무엇인가요?"
                }
            }
        ],
        didYouKnow: {
            native: "Korea has the fastest average internet speeds in the world and was the first country to deploy a nationwide 5G network, in April 2019. The Korea Institute for Industrial Economics and Trade found that Korean construction projects are completed at roughly twice the speed of comparable projects in Western Europe. The same urgency applies to food delivery: Korea's average delivery time for food orders is under 30 minutes, compared to 45-60 minutes in most Western countries. The word ppalli-ppalli has even entered English-language academic papers on Korean economic development as a term with no direct equivalent.",
            target: "한국은 세계에서 가장 빠른 평균 인터넷 속도를 자랑하며, 2019년 4월 전국적인 5G 네트워크를 세계 최초로 구축한 나라입니다. 산업연구원(KIET)에 따르면 한국의 건설 프로젝트는 서유럽의 유사 프로젝트보다 약 두 배 빠른 속도로 완공됩니다. 배달 문화에서도 같은 속도감이 나타납니다. 한국의 음식 배달 평균 시간은 30분 이내로, 대부분의 서양 국가의 45~60분과 비교됩니다. '빨리빨리'라는 단어는 한국 경제 발전을 다루는 영어 학술 논문에서도 직접적인 대응어 없이 그대로 사용될 만큼 독보적인 개념으로 자리 잡았습니다."
        },
        relatedIds: ["ko-c-b1-1", "ko-c-a2-1"]
    },
    {
        id: "ko-c-b1-3",
        language: "ko",
        level: "B1",
        category: "arts",
        region: "all-korean",
        title: {
            native: "Hallyu — The Korean Wave",
            target: "한류 — 세계를 흔든 한국 문화"
        },
        subtitle: "From K-pop to K-drama to K-food — how a small country turned its culture into one of the most powerful soft-power forces in the world.",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
                caption: {
                    native: "A K-pop concert — thousands of fans united by shared music",
                    target: "케이팝 콘서트 — 음악으로 하나가 된 수천 명의 팬"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
                caption: {
                    native: "Korean street food stalls at night — K-food has gone global",
                    target: "야간 한국 길거리 음식 포장마차 — K-푸드가 세계로"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800",
                caption: {
                    native: "The Seoul skyline — the city at the heart of the Korean Wave",
                    target: "서울 스카이라인 — 한류의 중심 도시"
                }
            }
        ],
        body: {
            target: `'한류(韓流)'는 한국 문화 콘텐츠가 해외에서 인기를 얻는 현상을 말합니다. 1990년대 후반 중국과 동남아시아에서 한국 드라마와 음악이 인기를 얻기 시작하면서 이 용어가 생겨났습니다. '한류'의 한(韓)은 '한국(韓國)'의 한이고, 류(流)는 '물결, 흐름'을 의미합니다. 한국 문화라는 파도가 전 세계로 퍼져 나간다는 뜻입니다.

한류의 첫 번째 물결은 드라마였습니다. '겨울연가'(2002년)는 일본에서 엄청난 인기를 끌었고, 배우 배용준은 '욘사마'라는 별명으로 불리며 일본 팬들의 사랑을 받았습니다. 이후 중국, 베트남, 태국 등 아시아 전역에서 한국 드라마 열풍이 불었습니다. 오늘날에는 넷플릭스를 통해 전 세계 시청자들이 한국 드라마를 볼 수 있습니다. '오징어 게임'(2021년)은 94개국에서 1위를 차지하며 한류의 세계화를 상징적으로 보여주었습니다.

두 번째 물결은 K-팝이었습니다. 2010년대에 들어 소녀시대, EXO, BTS, 블랙핑크 등의 그룹이 세계적인 팬덤을 형성했습니다. 특히 BTS는 빌보드 차트에서 여러 차례 1위를 차지했으며, 2020년대에는 영어권 시장에서도 확고한 입지를 다졌습니다. K-팝의 성공 비결 중 하나는 팬과의 적극적인 소통입니다. 아이돌 그룹들은 SNS와 V-LIVE 등을 통해 팬들과 실시간으로 교류하며 강한 유대감을 만들어냅니다.

한류는 음악과 드라마를 넘어 확장되었습니다. K-뷰티(한국 화장품), K-푸드(김치, 불고기, 삼겹살, 한국식 치킨), K-패션, 그리고 한국어 학습 열풍까지 이어졌습니다. 한국어 학습자 수는 지난 10년간 폭발적으로 증가했으며, BTS의 팬인 아미(ARMY)들이 한국어를 배우는 것은 전 세계적인 현상이 되었습니다. TOPIK(한국어능력시험) 응시자도 매년 크게 늘고 있습니다.

한국 정부는 한류를 적극적으로 지원하고 있습니다. 문화체육관광부는 한류 콘텐츠 제작에 투자하고, 한국관광공사는 한류를 활용한 관광 마케팅을 진행합니다. 하지만 한류의 성공이 단순히 정부 지원 때문만은 아닙니다. 한국 콘텐츠가 가진 독창성, 완성도, 그리고 보편적 공감을 얻는 이야기들이 세계인의 마음을 움직인 것입니다.`,
            native: `'Hallyu' refers to the phenomenon of Korean cultural content gaining popularity overseas. The term emerged in the late 1990s when Korean dramas and music began gaining popularity in China and Southeast Asia. The 'han' in 'hallyu' comes from 'Hanguk' (Korea) and 'ryu' means 'wave' or 'flow'. The meaning is that the wave of Korean culture spreads out across the entire world.

The first wave of Hallyu was dramas. 'Winter Sonata' (2002) became enormously popular in Japan, and actor Bae Yong-joon was given the nickname 'Yon-sama' and received adoration from Japanese fans. Afterwards, a Korean drama craze swept across Asia — China, Vietnam, Thailand, and beyond. Today, global audiences can watch Korean dramas through Netflix. 'Squid Game' (2021) reached No.1 in 94 countries simultaneously, symbolically demonstrating the globalisation of Hallyu.

The second wave was K-pop. Entering the 2010s, groups such as Girls' Generation, EXO, BTS, and BLACKPINK formed worldwide fandoms. BTS in particular topped the Billboard charts multiple times and firmly established themselves in the English-speaking market through the 2020s. One of the secrets of K-pop's success is active communication with fans. Idol groups interact with fans in real time through social media and V-LIVE, building strong bonds.

Hallyu expanded beyond music and dramas. It extended into K-beauty (Korean cosmetics), K-food (kimchi, bulgogi, samgyeopsal, Korean fried chicken), K-fashion, and a boom in Korean language learning. The number of Korean language learners has exploded over the past decade, and BTS fans — ARMY — learning Korean has become a global phenomenon. The number of TOPIK (Test of Proficiency in Korean) candidates also grows significantly each year.

The South Korean government actively supports Hallyu. The Ministry of Culture, Sports and Tourism invests in Hallyu content production, and the Korea Tourism Organisation conducts tourism marketing using Hallyu. But Hallyu's success is not simply the result of government support. It is the originality, quality, and universally resonant stories within Korean content that have moved the hearts of people around the world.`
        },
        cultureVocab: [
            {
                word: "한류 (韓流)",
                romanized: "hallyu",
                translation: "the Korean Wave",
                culturalNote: "Coined in the late 1990s by Chinese journalists to describe the sudden popularity of Korean entertainment in China. The character 流 means 'current' or 'flow', evoking water spreading outward — an apt metaphor for how Korean culture has moved through successive waves into new markets."
            },
            {
                word: "아이돌",
                romanized: "aidol",
                translation: "idol (K-pop idol group)",
                culturalNote: "Borrowed from English but with a more specific meaning in Korean. A K-pop 아이돌 is a performer who has typically trained for 3-7 years in a talent agency before debut, learning singing, dancing, and performance simultaneously. The training system is unique to Korea and has produced the polished group performances that characterise K-pop."
            },
            {
                word: "팬덤",
                romanized: "paendeom",
                translation: "fandom",
                culturalNote: "Borrowed from English. K-pop fandoms have official names (BTS fans are ARMY, BLACKPINK fans are BLINK) and function as organised communities. They buy albums in bulk, stream songs to improve chart positions, and coordinate large-scale charitable projects in their idol's name — a level of organised fan participation unique to K-pop culture."
            },
            {
                word: "아미 (ARMY)",
                romanized: "ami",
                translation: "BTS fandom name",
                culturalNote: "Stands for 'Adorable Representative M.C. for Youth'. ARMY is considered one of the most organised and influential fandoms in history — credited with contributing to BTS achieving multiple Billboard No.1 singles. The name also means 'army' in English, reflecting the organised, loyal nature of the community."
            },
            {
                word: "오징어 게임",
                romanized: "ojingeo geim",
                translation: "Squid Game",
                culturalNote: "The 2021 Netflix series became the most-watched non-English language series in Netflix history. It reached No.1 in 94 countries simultaneously — a record. Its success marked a tipping point: Korean content was no longer a niche interest but mainstream global entertainment."
            }
        ],
        questions: [
            {
                id: "ko-c-b1-3-q1",
                type: "comprehension",
                prompt: {
                    native: "What was the first wave of the Korean Wave, and where did it begin?",
                    target: "한류의 첫 번째 물결은 무엇이었으며, 어디서 시작되었습니까?"
                },
                options: [
                    "Korean dramas, starting in Japan and across Asia in the late 1990s and early 2000s",
                    "K-pop music, starting in the United States in the 2010s",
                    "Korean films, starting with Parasite winning the Academy Award in 2020",
                    "Korean food, spreading through Asian restaurants globally"
                ],
                answer: "Korean dramas, starting in Japan and across Asia in the late 1990s and early 2000s"
            },
            {
                id: "ko-c-b1-3-q2",
                type: "comprehension",
                prompt: {
                    native: "Why is the BTS fanbase ARMY considered unusually influential?",
                    target: "BTS의 팬덤 아미(ARMY)가 특별히 영향력이 크다고 여겨지는 이유는 무엇입니까?"
                },
                options: [
                    "It is highly organised — streaming songs to boost chart positions and coordinating charitable projects",
                    "It is the largest fandom in the world, with over one billion members",
                    "It is funded directly by the South Korean government",
                    "It controls which songs BTS records and releases"
                ],
                answer: "It is highly organised — streaming songs to boost chart positions and coordinating charitable projects"
            },
            {
                id: "ko-c-b1-3-q3",
                type: "reflection",
                prompt: {
                    native: "The Korean Wave has created enormous interest in the Korean language. Do you think popular culture (music, dramas, films) is an effective way to learn a language? What are the advantages and limitations compared to traditional study?",
                    target: "한류는 한국어에 대한 엄청난 관심을 불러일으켰습니다. 대중문화(음악, 드라마, 영화)가 언어를 배우는 효과적인 방법이라고 생각하나요? 전통적인 공부 방법과 비교했을 때 장단점은 무엇인가요?"
                }
            }
        ],
        didYouKnow: {
            native: "Before BTS, no South Korean act had ever reached No.1 on the US Billboard Hot 100 chart. BTS broke that barrier in 2020 with 'Dynamite', their first all-English song — which they recorded at the specific request of their label to reach Western markets. Since then they have had multiple No.1 singles. In 2021, BTS was invited to speak at the United Nations General Assembly — the second time (they first spoke in 2018) — where they addressed world leaders about COVID-19 recovery and youth empowerment. The South Korean government estimated in 2022 that the BTS 'effect' contributed approximately $5 billion annually to the Korean economy through tourism, album sales, and brand endorsements.",
            target: "BTS 이전에 한국 가수가 미국 빌보드 핫100 차트에서 1위를 차지한 적은 없었습니다. BTS는 2020년 서양 시장 공략을 위해 소속사의 요청으로 녹음한 첫 전곡 영어 노래 '다이너마이트(Dynamite)'로 그 장벽을 돌파했습니다. 이후에도 여러 차례 1위를 차지했습니다. 2021년 BTS는 유엔 총회 연설에 초청받았는데, 이는 2018년에 이은 두 번째로, 세계 지도자들 앞에서 코로나19 회복과 청년 역량 강화를 주제로 연설했습니다. 한국 정부는 2022년 BTS '효과'가 관광, 음반 판매, 브랜드 협찬 등을 통해 연간 약 50억 달러를 한국 경제에 기여하는 것으로 추산했습니다."
        },
        relatedIds: ["ko-c-b1-1", "ko-c-b1-2"]
    }
]
