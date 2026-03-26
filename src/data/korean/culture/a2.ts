// src/data/korean/culture/a2.ts
import { CultureEpisode } from "../../../types"

export const koA2Culture: CultureEpisode[] = [
    {
        id: "ko-c-a2-1",
        language: "ko",
        level: "A2",
        category: "food",
        region: "all-korean",
        title: {
            native: "Korean Dining Culture — Eating Together",
            target: "한국의 식사 문화 — 함께 먹기"
        },
        subtitle: "In Korea, eating is never a solo act. Shared dishes, communal banchan, and the ritual of sitting down together define what it means to have a meal.",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800",
                caption: {
                    native: "A Korean table spread with banchan — side dishes shared by everyone",
                    target: "반찬이 가득한 한국 식탁 — 모두가 함께 나누는 반찬들"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800",
                caption: {
                    native: "Korean BBQ — cooking and eating together around a shared grill",
                    target: "한국 바베큐 — 함께 굽고 나누는 식사"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800",
                caption: {
                    native: "Jjigae (stew) bubbling at the table — a dish made for sharing",
                    target: "식탁에서 보글보글 끓는 찌개 — 나누기 위한 음식"
                }
            }
        ],
        body: {
            target: `한국의 식사 문화는 '함께'라는 정신을 중심으로 합니다. 한국에서 밥을 먹는다는 것은 단순히 배를 채우는 행위가 아닙니다. 그것은 관계를 맺고, 정을 나누고, 서로를 돌보는 시간입니다.

한국 식탁의 가장 큰 특징은 반찬입니다. 한 끼 식사에는 밥과 국, 그리고 여러 가지 반찬이 함께 나옵니다. 반찬은 개인 접시에 담겨 나오는 것이 아니라 테이블 중앙에 놓여 모두가 함께 먹습니다. 김치, 나물, 계란찜, 생선, 두부 등 다양한 반찬이 식탁을 채웁니다. 식당에서 반찬은 무제한으로 리필됩니다 — 비용 없이.

한국에서는 식사 전에 "잘 먹겠습니다"라고 말합니다. 이것은 음식을 준비해 준 사람과 음식 자체에 감사를 표하는 말입니다. 식사 후에는 "잘 먹었습니다"라고 합니다. 어른이 먼저 먹기 시작할 때까지 젊은 사람이 기다리는 것도 중요한 예절입니다.

한국 음식 중에서 찌개와 전골은 특히 함께 먹기 위한 음식입니다. 식탁 중앙에서 끓고 있는 뚝배기 찌개에서 각자 떠먹는 것은 매우 자연스러운 모습입니다. 서양의 '각자 덜어먹기' 문화와는 다르게, 같은 냄비에서 함께 먹는 것이 한국에서는 친밀함의 표현입니다.

"밥 먹었어요?"라는 질문은 단순한 안부 인사입니다. 이 표현은 '밥'이 한국인의 삶에서 얼마나 중심적인지를 보여 줍니다. 밥은 단순한 음식이 아니라 삶 그 자체입니다.`,
            native: `Korean dining culture is centred on the spirit of 'together'. In Korea, eating rice is not simply the act of filling one's stomach. It is a time to form relationships, share jeong (deep bonds), and care for one another.

The biggest characteristic of the Korean dining table is banchan (side dishes). A single meal comes with rice, soup, and multiple side dishes. The banchan are not served on individual plates but placed in the centre of the table for everyone to share. A variety of dishes — kimchi, seasoned vegetables, steamed egg, fish, tofu and more — fill the table. At restaurants, banchan are refilled without limit, at no extra charge.

In Korea, people say "jal meokgesseumnida" before a meal. This is an expression of gratitude to the person who prepared the food and to the food itself. After eating, people say "jal meogeotseumnida." It is also important etiquette for younger people to wait until the eldest at the table begins eating first.

Among Korean foods, jjigae (stew) and jeongol (hot pot) are especially meant to be eaten together. It is perfectly natural for everyone to scoop from the same earthenware pot of jjigae bubbling at the centre of the table. Unlike the Western culture of serving into individual portions, eating from the same pot in Korea is an expression of closeness.

The question "밥 먹었어요?" ("Did you eat?") is simply a greeting to check on someone's wellbeing. This phrase shows how central 'bap' (rice/meal) is to Korean life. Rice is not just food — it is life itself.`
        },
        cultureVocab: [
            {
                word: "반찬",
                romanized: "banchan",
                translation: "side dishes served alongside rice",
                culturalNote: "The number and variety of banchan on a table signals generosity and care. A table with many banchan is a sign of a warm host. In traditional settings, royals had 12 banchan; common people fewer."
            },
            {
                word: "잘 먹겠습니다",
                romanized: "jal meokgesseumnida",
                translation: "I will eat well (said before a meal)",
                culturalNote: "More than just 'bon appétit', this phrase expresses gratitude to the cook and respect for the food. Children are taught to say it from a very early age as a core etiquette."
            },
            {
                word: "찌개",
                romanized: "jjigae",
                translation: "Korean stew (shared communal dish)",
                culturalNote: "Jjigae is served in a single shared pot and placed at the centre of the table. Eating from the same pot is a sign of intimacy and trust — a deeply social act."
            },
            {
                word: "정 (情)",
                romanized: "jeong",
                translation: "deep emotional bond; attachment formed over time",
                culturalNote: "Sharing food is one of the primary ways jeong is built in Korean culture. The expression '밥 먹으면서 정이 든다' (jeong grows as you share meals) captures this perfectly."
            },
            {
                word: "어른 먼저",
                romanized: "eoreun meonjeo",
                translation: "elders first (etiquette principle)",
                culturalNote: "Waiting for the eldest person to pick up their spoon before eating is a basic Confucian-rooted table manner. Violating this is considered very rude, especially in family settings."
            }
        ],
        questions: [
            {
                id: "ko-c-a2-1-q1",
                type: "comprehension",
                prompt: {
                    native: "How are banchan typically served at a Korean table?",
                    target: "한국 식탁에서 반찬은 어떻게 제공됩니까?"
                },
                options: [
                    "In individual portions on each person's plate",
                    "Placed in the centre of the table for everyone to share",
                    "Only brought out after the main course",
                    "Served separately in a bag to take home"
                ],
                answer: "Placed in the centre of the table for everyone to share"
            },
            {
                id: "ko-c-a2-1-q2",
                type: "reflection",
                prompt: {
                    native: "In Korea, eating from the same pot is a sign of closeness. How do communal eating practices in your culture compare to this?",
                    target: "한국에서는 같은 냄비에서 먹는 것이 친밀함의 표현입니다. 당신의 문화에서 함께 먹는 방식은 어떻습니까?"
                }
            }
        ],
        didYouKnow: {
            native: "In Korean, the word for 'meal' and 'cooked rice' is the same: 밥 (bap). Asking '밥 먹었어요?' ('Did you eat rice?') is one of the most common greetings in Korea, equivalent to asking 'How are you?' — a linguistic reflection of just how central food is to Korean social life and wellbeing.",
            target: "한국어에서 '식사'와 '쌀밥'은 같은 단어입니다: 밥(bap). '밥 먹었어요?'라고 묻는 것은 한국에서 가장 흔한 인사말 중 하나로, '잘 지내요?'와 같은 의미입니다. 이것은 음식이 한국의 사회생활과 안녕에 얼마나 중심적인지를 언어적으로 반영하는 표현입니다."
        }
    },
    {
        id: "ko-c-a2-2",
        language: "ko",
        level: "A2",
        category: "arts",
        region: "all-korean",
        title: {
            native: "Hallyu — The Global Wave of Korean Culture",
            target: "한류 — 한국 문화의 세계화"
        },
        subtitle: "K-pop, K-dramas, and Korean food have conquered the world — but what drives the Korean Wave, and what does it mean for Koreans themselves?",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
                caption: {
                    native: "A K-pop concert",
                    target: "케이팝 콘서트"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1598387993441-a364f854cfdd?w=800",
                caption: {
                    native: "Korean street food",
                    target: "한국 길거리 음식"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?w=800",
                caption: {
                    native: "A traditional Korean hanbok",
                    target: "한복"
                }
            }
        ],
        body: {
            target: `한류(韓流)는 한국 대중문화가 전 세계로 퍼져나가는 현상을 말합니다. 1990년대 말 아시아 금융위기 이후, 한국 정부는 문화 산업을 국가 전략 산업으로 지정하고 적극적으로 지원하기 시작했습니다. 드라마 '겨울연가'가 일본과 동아시아에서 큰 인기를 끌었고, 가수 보아가 일본 시장에서 성공을 거두면서 한류의 첫 물결이 시작되었습니다.

케이팝(K-pop)은 한류의 가장 강력한 엔진입니다. BTS, 블랙핑크를 비롯한 아이돌 그룹들은 미국 빌보드 차트를 석권하고 세계 각지에서 투어 공연을 펼칩니다. 케이팝 팬덤은 단순한 팬 집단이 아닙니다. BTS의 '아미(ARMY)', 블랙핑크의 '블링크(BLINK)' 같은 팬덤은 전 세계에서 동시에 스트리밍 캠페인을 벌이고, 자선 활동을 주도하며, 여러 언어로 콘텐츠를 제작합니다. 칼군무와 화려한 비주얼 퍼포먼스, 철저히 관리된 아이돌 이미지는 서양 팝과 차별화되는 케이팝만의 특징입니다.

케이드라마(K-drama)는 넷플릭스를 통해 전 세계 시청자에게 닿았습니다. 2021년 공개된 '오징어 게임'은 넷플릭스 역사상 비영어권 콘텐츠 중 가장 많이 시청된 작품이 되었습니다. 이 드라마는 경제적 불평등과 생존 경쟁을 다루며 전 세계적 공감을 얻었고, 한국어 학습자가 급증하는 계기가 되었습니다.

한식도 세계 무대에 올랐습니다. 김치, 불고기, 비빔밥은 이제 세계인이 아는 음식이 되었고, 한국식 프라이드 치킨과 떡볶이는 길거리 음식을 넘어 글로벌 트렌드가 되었습니다.

한국인들은 한류에 대해 자부심을 느끼면서도 복잡한 감정을 갖고 있습니다. "우리 문화가 제대로 전달되고 있는가?"라는 질문과 함께, 한복과 김치 등 문화 원조에 대한 논쟁도 벌어지고 있습니다. 한류는 단순한 문화 수출을 넘어, 한국의 역사와 정체성에 대한 깊은 성찰을 불러일으키는 현상이기도 합니다.`,
            native: `Hallyu (韓流) refers to the phenomenon of Korean popular culture spreading across the world. After the Asian financial crisis of the late 1990s, the South Korean government designated the cultural industry as a national strategic sector and began actively supporting it. The drama Winter Sonata became hugely popular in Japan and across East Asia, and singer BoA achieved major success in the Japanese market — marking the beginning of the first wave of Hallyu.

K-pop is the most powerful engine of Hallyu. Idol groups such as BTS and BLACKPINK have topped the US Billboard charts and tour the world. K-pop fandoms are far more than ordinary fan communities. Groups like BTS's ARMY and BLACKPINK's BLINK run coordinated global streaming campaigns, lead charitable initiatives, and produce multilingual content. The precisely synchronised choreography, spectacular visual performances, and carefully managed idol image set K-pop apart from Western pop.

K-dramas reached global audiences through Netflix. The 2021 series Squid Game became the most-watched non-English language content in Netflix history. The show addressed economic inequality and survival competition, resonating with viewers worldwide, and sparked a sharp surge in Korean language learners.

Korean food has also taken the world stage. Kimchi, bulgogi, and bibimbap are now known to people around the globe, and Korean fried chicken and tteokbokki have grown from street food into global trends.

Koreans feel pride about Hallyu, but also hold complex emotions. Questions like "Is our culture being communicated accurately?" arise alongside debates over cultural origin — regarding hanbok, kimchi, and other traditions. Hallyu is more than a simple cultural export; it is a phenomenon that invites deep reflection on Korean history and identity.`
        },
        cultureVocab: [
            {
                word: "한류 (韓流)",
                romanized: "hallyu",
                translation: "the Korean Wave",
                culturalNote: "Literally 'Korean flow/wave' — the global spread of Korean popular culture. First coined in China in the late 1990s, it now covers K-pop, K-drama, K-beauty, and Korean food worldwide."
            },
            {
                word: "아이돌",
                romanized: "aidol",
                translation: "idol (K-pop performer)",
                culturalNote: "Korean idol groups are trained for years in singing, dancing, languages, and image before debut. The idol system is distinct from Western pop — it emphasises group cohesion, fan interaction (팬사인회), and a carefully managed public image."
            },
            {
                word: "팬덤",
                romanized: "paendeom",
                translation: "fandom",
                culturalNote: "Korean fandoms are famously organized and passionate. Groups like BTS's ARMY (아미) run coordinated streaming campaigns, charity drives, and multilingual fan accounts. Fan culture is a major driver of Hallyu's global reach."
            },
            {
                word: "오징어 게임",
                romanized: "ojingeo geim",
                translation: "Squid Game",
                culturalNote: "The 2021 Netflix series became the most-watched non-English show in the platform's history, sparking global curiosity about Korean language, society, and the pressure of economic competition that the show depicts."
            },
            {
                word: "한복",
                romanized: "hanbok",
                translation: "traditional Korean clothing",
                culturalNote: "Worn at 설날 (Lunar New Year) and 추석 (Chuseok), and increasingly in everyday fashion (신한복 neo-hanbok). The question of cultural ownership — particularly with China — has made 한복 a sensitive cultural pride point."
            }
        ],
        questions: [
            {
                id: "ko-c-a2-2-q1",
                type: "comprehension",
                prompt: {
                    native: "What does '한류' literally mean?",
                    target: "한류의 뜻은 무엇인가요?"
                },
                options: [
                    "Korean music",
                    "Korean Wave / Korean flow",
                    "Korean drama",
                    "K-pop idol group"
                ],
                answer: "Korean Wave / Korean flow"
            },
            {
                id: "ko-c-a2-2-q2",
                type: "comprehension",
                prompt: {
                    native: "What made Squid Game historically significant?",
                    target: "오징어 게임이 역사적으로 중요한 이유는 무엇인가요?"
                },
                options: [
                    "It was the first Korean drama",
                    "It became Netflix's most-watched non-English show",
                    "It won the TOPIK award",
                    "It was filmed entirely in English"
                ],
                answer: "It became Netflix's most-watched non-English show"
            },
            {
                id: "ko-c-a2-2-q3",
                type: "reflection",
                prompt: {
                    native: "Have you been influenced by the Korean Wave? Which aspect of Korean culture — K-pop, K-drama, food, or language — interests you most, and why?",
                    target: "한류의 영향을 받은 적이 있나요? 케이팝, 드라마, 음식, 언어 중 어떤 부분이 가장 흥미롭고 그 이유는 무엇인가요?"
                }
            }
        ]
    },
    {
        id: "ko-c-a2-3",
        language: "ko",
        level: "A2",
        category: "festivals",
        region: "all-korean",
        title: {
            native: "Korea's Seasons and Festivals — 계절과 명절",
            target: "한국의 계절과 명절"
        },
        subtitle: "Korea has four distinct seasons and a rich calendar of traditional festivals — each with its own food, rituals, and meaning for Korean families.",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800",
                caption: {
                    native: "Cherry blossom",
                    target: "벚꽃"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1474088436001-4a1a7bb8e52d?w=800",
                caption: {
                    native: "Autumn leaves",
                    target: "단풍"
                }
            },
            {
                url: "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=800",
                caption: {
                    native: "Korean traditional celebration",
                    target: "명절"
                }
            }
        ],
        body: {
            target: `한국은 뚜렷한 사계절을 가진 나라입니다. 각 계절마다 고유한 풍경, 음식, 그리고 문화적 의미가 있습니다.

봄(3~4월)은 벚꽃과 함께 시작됩니다. 서울 여의도와 경남 진해는 벚꽃 명소로 유명하며, 수많은 사람들이 꽃놀이를 즐기기 위해 모여듭니다. 꽃놀이는 나무 아래에서 돗자리를 펴고 음식을 나누며 봄을 맞이하는 문화입니다. 4월 5일 식목일에는 나무를 심는 전통이 있습니다.

여름(6~8월)은 장마철과 무더위로 특징지어집니다. 6~7월 장마가 끝나면 본격적인 더위가 시작되고, 사람들은 바다나 계곡으로 피서를 떠납니다. 삼복(초복·중복·말복)은 여름 중 가장 더운 기간으로, 이날에는 원기 회복을 위해 삼계탕을 먹는 전통이 있습니다. "이열치열(以熱治熱)"이라는 말처럼, 더위는 뜨거운 음식으로 다스린다는 지혜입니다.

가을(9~11월)은 단풍으로 물드는 계절입니다. 설악산과 내장산의 단풍은 전국에서 관광객을 불러 모읍니다. 음력 8월 15일 추석은 한국 최대 명절 중 하나입니다. 온 가족이 모여 차례를 지내고 성묘를 하며, 반달 모양의 송편을 빚어 먹습니다. 추석 연휴에는 전국의 도로가 귀성 차량으로 가득 찹니다.

겨울(12~2월)에는 설날이 찾아옵니다. 음력 1월 1일인 설날은 한 해의 시작을 알리는 가장 중요한 명절입니다. 가족들이 모여 새해 인사를 나누고, 어른들께 세배를 드립니다. 세배를 받은 어른들은 세뱃돈을 건네며 덕담을 전합니다. 설날 아침에는 떡국을 먹는데, 떡국 한 그릇을 먹으면 나이 한 살이 더 는다고 합니다. 강원도의 스키 리조트는 겨울 스포츠를 즐기는 사람들로 북적입니다.

한국의 계절 음식 문화는 제철 재료를 중심으로 합니다. 삼계탕은 여름 복날의 음식이고, 송편은 추석, 떡국은 설날에 먹습니다. 계절과 명절에 맞는 음식을 먹는 것은 자연과 전통에 연결되는 방식입니다.`,
            native: `Korea is a country with four distinct seasons. Each season has its own unique scenery, food, and cultural significance.

Spring (March–April) arrives with cherry blossoms. Yeouido in Seoul and Jinhae in South Gyeongsang Province are famous cherry blossom spots, drawing crowds of people to enjoy 꽃놀이 (flower viewing). Flower viewing is a culture of spreading a mat under the trees, sharing food, and welcoming spring. On April 5th — Arbour Day (식목일) — there is a tradition of planting trees.

Summer (June–August) is characterised by the monsoon season and intense heat. When the June–July rainy season ends, the full heat begins, and people head to the coast or mountain valleys to escape it. Sambok — comprising 초복, 중복, and 말복 — are the three hottest periods of the Korean summer. The tradition is to eat 삼계탕 (ginseng chicken soup) on these days to restore energy. As the saying goes, "이열치열" — fight heat with heat.

Autumn (September–November) is the season of turning leaves. The autumn foliage of Seoraksan and Naejangsan draws visitors from across the country. Chuseok, on the 15th day of the 8th lunar month, is one of Korea's greatest traditional holidays. The whole family gathers to perform ancestral rites (차례), visit family graves (성묘), and make and eat 송편 (half-moon shaped rice cakes). During the Chuseok holiday, the nation's roads fill with cars heading home (귀성길).

Winter (December–February) brings Seollal (Lunar New Year). Falling on the first day of the lunar calendar, Seollal is the most important holiday marking the new year. Families gather, exchange new year greetings, and perform the formal deep bow 세배 to elders. The elders give 세뱃돈 (money in envelopes) and offer words of blessing. On the morning of Seollal, 떡국 (rice cake soup) is eaten — it is said that eating a bowl of tteokguk means you have grown one year older. Ski resorts in Gangwon Province are busy with winter sports enthusiasts.

Korea's seasonal food culture centres on seasonal ingredients. Samgyetang is the food of the summer dog days; 송편 belongs to Chuseok; 떡국 to Seollal. Eating the right food for the season and festival is a way of staying connected to nature and tradition.`
        },
        cultureVocab: [
            {
                word: "추석 (秋夕)",
                romanized: "chuseok",
                translation: "Korean harvest festival (Chuseok)",
                culturalNote: "Often called 'Korean Thanksgiving', Chuseok falls on the 15th day of the 8th lunar month. Families travel across the country (귀성길) to perform 차례 (ancestral rites) and share 송편 (half-moon rice cakes)."
            },
            {
                word: "설날",
                romanized: "seollal",
                translation: "Korean Lunar New Year",
                culturalNote: "The most important traditional holiday. Koreans perform 세배 (a deep bow to elders), receive 세뱃돈 (money in envelopes), and eat 떡국 (rice cake soup) — eating it means you become one year older."
            },
            {
                word: "벚꽃 축제",
                romanized: "beotkkot chukje",
                translation: "cherry blossom festival",
                culturalNote: "Every spring, Koreans celebrate 벚꽃 (cherry blossoms) with picnics under the trees — called 꽃놀이. Major spots include 여의도 in Seoul and 진해 in the south."
            },
            {
                word: "복날",
                romanized: "boknal",
                translation: "the dog days of summer (three hottest days)",
                culturalNote: "초복, 중복, 말복 are the three hottest periods of the Korean summer. It is traditional to eat 삼계탕 (ginseng chicken soup) on these days to restore energy lost to the heat."
            },
            {
                word: "세뱃돈",
                romanized: "sebaedon",
                translation: "New Year's money given to children",
                culturalNote: "During 설날, younger family members perform the formal bow 세배 to elders, who give 세뱃돈 in small envelopes. The amount varies by age and relationship — it is an important ritual of respect and family bond."
            }
        ],
        questions: [
            {
                id: "ko-c-a2-3-q1",
                type: "comprehension",
                prompt: {
                    native: "What do Koreans traditionally eat on 설날?",
                    target: "설날에 한국 사람들이 전통적으로 먹는 음식은 무엇인가요?"
                },
                options: [
                    "송편",
                    "삼계탕",
                    "떡국",
                    "비빔밥"
                ],
                answer: "떡국"
            },
            {
                id: "ko-c-a2-3-q2",
                type: "comprehension",
                prompt: {
                    native: "What is the purpose of 세배?",
                    target: "세배는 무엇을 위한 것인가요?"
                },
                options: [
                    "To receive presents from parents",
                    "A deep bow to show respect to elders at New Year",
                    "A harvest ceremony to thank the gods",
                    "A dance performed at 추석"
                ],
                answer: "A deep bow to show respect to elders at New Year"
            },
            {
                id: "ko-c-a2-3-q3",
                type: "reflection",
                prompt: {
                    native: "Does your culture have seasonal festivals or family gathering times similar to 추석 or 설날? What rituals or foods are central to them?",
                    target: "여러분의 문화에도 추석이나 설날과 비슷한 계절 축제나 가족 모임이 있나요? 어떤 의식이나 음식이 중심이 되나요?"
                }
            }
        ]
    }
]
