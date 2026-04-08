import { GrammarLesson } from "../../../../types"

export const block4Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-30",
        level: "A1",
        title: "에 vs 에서 fully explained — destination/existence vs action location",
        explanation: `You have been using both 에 and 에서 since Block 2. You were told to notice the difference and wait. You have now used both dozens of times across units. Here is what they have been doing all along.

Look at these sentence pairs — you have said most of them already:

학교에 가요. — I go to school.
학교에서 공부해요. — I study at school.

집에 있어요. — I'm at home.
집에서 요리해요. — I cook at home.

서울에 살아요. — I live in Seoul.
서울에서 일해요. — I work in Seoul.

카페에 왔어요. — I came to the café.
카페에서 커피를 마셔요. — I drink coffee at the café.

What is 에 doing? Look at the verbs: 가요 (go), 있어요 (be/exist), 살아요 (live), 왔어요 (came). Either the place is a destination you are heading to, or something is simply located there.

What is 에서 doing? Look at the verbs: 공부해요 (study), 요리해요 (cook), 일해요 (work), 마셔요 (drink). An action is happening, and the place is where that action takes place.

Here is the complete rule:

에 — destination or static existence:
• With movement verbs (가다, 오다, 돌아오다): marks where you are going to
• With 있다 / 없다: marks where something is located (static)

에서 — location where an action takes place:
• With any action verb (먹다, 마시다, 공부하다, 일하다, 운동하다): marks where the action happens

The test: ask yourself — is this place a destination I am heading toward, or the place where an action is happening? Destination or existence = 에. Action location = 에서.

One more function of 에서 you have already used: it means "from" when combined with a movement verb pointing away:
집에서 나왔어요. — I left from home.
어디에서 왔어요? — Where did you come from?

You have been using this since very early units. The pattern is now complete.`,
        examples: [
            { native: "도서관에 가요. 도서관에서 책을 읽어요.", romanized: "Doseogwane gayo. Doseogwaneseo chaegeul ilgeoyo.", translation: "I go to the library. I read books at the library. (에 = destination; 에서 = action location)" },
            { native: "집에 있어요. 집에서 요리해요.", romanized: "Jibe isseoyo. Jibeseo yorihaeyo.", translation: "I'm at home. I cook at home. (에 = existence; 에서 = action location)" },
            { native: "카페에 가요. 카페에서 친구를 만나요.", romanized: "Kapee gayo. Kapeeseo chingureul mannayo.", translation: "I go to the café. I meet a friend at the café." },
            { native: "어디에서 왔어요? — 영국에서 왔어요.", romanized: "Eodieseo wasseoyo? — Yeonggugeso wasseoyo.", translation: "Where did you come from? — I came from the UK. (에서 = from)" },
            { native: "회사에서 점심을 먹어요.", romanized: "Hwisaeseo jeomsimeul meogeoyo.", translation: "I eat lunch at the office. (에서 = where the eating happens)" },
            { native: "저는 서울에 살아요. 홍대에서 일해요.", romanized: "Jeoneun seoure sarayo. Hongdaeseo ilhaeyo.", translation: "I live in Seoul. I work in Hongdae." },
        ],
        inlineVocab: [
            { word: "에", romanized: "e", translation: "particle — destination (going TO) or static location (being AT with 있다)" },
            { word: "에서", romanized: "eseo", translation: "particle — where an action takes place; also means 'from'" },
            { word: "가다 / 오다", romanized: "gada / oda", translation: "to go / to come (movement verbs — use 에)" },
            { word: "있다 / 없다", romanized: "itda / eopda", translation: "to exist/be at / to not exist (use 에)" },
            { word: "공부하다", romanized: "gongbuhada", translation: "to study (action verb — use 에서)" },
            { word: "일하다", romanized: "ilhada", translation: "to work (action verb — use 에서)" },
            { word: "요리하다", romanized: "yorihada", translation: "to cook (action verb — use 에서)" },
            { word: "~(으)로", romanized: "(eu)ro", translation: "particle — direction (towards) or means (by): 왼쪽으로, 지하철로" },
        ],
    },
    {
        id: "ko-g-a1-31",
        level: "A1",
        title: "Transport vocabulary: 타다/걷다/가다 with particles",
        explanation: `Getting around a Korean city requires a small but precise vocabulary set. The three core transport verbs are 타다 (to ride/board), 내리다 (to get off), and 걷다 (to walk). Each works with specific particles.

The particle ~(으)로 marks the means of transport — the "by" of how you travel. You saw this first in directions (왼쪽으로 = towards the left) and now it appears again for transport. It is the same particle doing the same job: expressing the method or direction:

지하철로 가요. — I go by subway.
버스로 가요. — I go by bus.
택시로 가요. — I go by taxi.

로 attaches after a vowel or ㄹ; 으로 attaches after a consonant. So: 지하철 ends in ㄹ → 지하철로, 버스 ends in vowel → 버스로, 택시 ends in vowel → 택시로.

For walking, Korean uses a different form: 걸어서 가요 (I walk there / I go on foot). The 서 here is from ~아/어서 (by means of). 걸어서 = "by walking" — a natural chunk.

The verb 타다 means to ride or board any vehicle: 지하철을 타요 (ride the subway), 버스를 타요 (take the bus), 택시를 타요 (take a taxi). The object particle 을/를 marks what you are boarding.

Useful transport phrases:
___ 역에서 내리세요. — Get off at ___ station.
___ 역에서 갈아타세요. — Transfer at ___ station.
여기에서 세워 주세요. — Please stop here. (to a taxi driver)
얼마나 걸려요? — How long does it take?

The same ~(으)로 particle appears in three contexts across Block 4: directions (왼쪽으로), transport (지하철로), and payment (카드로). Each time, 로/으로 is expressing method or direction. Noticing this connection will help you use it naturally across all three situations.`,
        examples: [
            { native: "지하철로 가요. 빠르고 편해요.", romanized: "Jihacheolro gayo. Ppareukko pyeonhaeyo.", translation: "I go by subway. It's fast and convenient." },
            { native: "버스 타면 얼마나 걸려요?", romanized: "Beosu tamyeon eolmana geollyeoyo?", translation: "How long does it take by bus?" },
            { native: "걸어서 갈 수 있어요? 가까워요?", romanized: "Georeoseo gal su isseoyo? Gakkawoyo?", translation: "Can I walk there? Is it close?" },
            { native: "이 역에서 갈아타세요. 2호선이에요.", romanized: "I yeokeseo garataseyo. Ihosenieyeo.", translation: "Transfer at this station. It's Line 2." },
            { native: "택시로 가면 한 이십 분쯤 걸릴 거예요.", romanized: "Taeksiro gamyeon han isip munjjeum geollil geoyeyo.", translation: "If you go by taxi, it'll take about 20 minutes." },
            { native: "어디로 가세요? — 경복궁으로 가 주세요.", romanized: "Eodiro gaseyo? — Gyeongbokgungeuro ga juseyo.", translation: "Where are you going? — Please take me to Gyeongbokgung." },
        ],
        inlineVocab: [
            { word: "타다", romanized: "tada", translation: "to ride / to board (지하철을 타요 = ride the subway)" },
            { word: "내리다", romanized: "naerida", translation: "to get off (버스에서 내려요 = get off the bus)" },
            { word: "갈아타다", romanized: "gallatada", translation: "to transfer (transport)" },
            { word: "걷다", romanized: "geotda", translation: "to walk" },
            { word: "걸어서", romanized: "georeoseo", translation: "on foot / by walking" },
            { word: "지하철", romanized: "jihacheol", translation: "subway / metro" },
            { word: "편해요", romanized: "pyeonhaeyo", translation: "convenient / comfortable" },
            { word: "혹시", romanized: "hoksi", translation: "by any chance / perhaps" },
        ],
    },
    {
        id: "ko-g-a1-32",
        level: "A1",
        title: "Native Korean numbers in context: counters 개/명/잔/그릇",
        explanation: `You have been using native Korean numbers since Unit 6 — 한 살 (one year old), 두 살, 세 살. Now those same numbers do real work in ordering food, counting people, and handling everyday quantities.

Korean uses two number systems, and the choice depends on what you are counting. Native Korean numbers (하나, 둘, 셋...) pair with counters for people, objects, glasses, bowls, and most physical things you encounter in daily life.

Before a counter, the first four native numbers change form:
하나 (one alone) → 한 잔, 한 개 (before a counter)
둘 (two alone) → 두 잔, 두 개
셋 (three alone) → 세 잔, 세 개
넷 (four alone) → 네 잔, 네 개
다섯 and above: no change — 다섯 잔, 여섯 개

You already know 한/두/세/네 from counting age: 스물한 살, 스물두 살. Same numbers, same contractions — this is not a new rule.

The essential counters:
개 — general objects (anything you can count individually): 만두 세 개 (three dumplings), 사과 두 개 (two apples)
명 — people: 세 명 (three people), 두 명이요 (two people — at a restaurant)
잔 — glasses or cups of liquid: 커피 두 잔 (two coffees), 물 한 잔 (one glass of water)
그릇 — bowls: 라면 두 그릇 (two bowls of ramen)
병 — bottles: 소주 한 병 (one bottle of soju)
인분 — portions/servings: 삼겹살 이 인분 (two portions of samgyeopsal — note: 인분 uses Sino-Korean numbers: 이 인분, 삼 인분)

The counter pattern: number + counter comes after the noun in Korean:
커피 두 잔 주세요. — Two coffees, please.
사람이 몇 명이에요? — How many people are there?

Knowing these six counters covers the vast majority of situations you will encounter ordering food, shopping, and socialising.`,
        examples: [
            { native: "만두 세 개 주세요.", romanized: "Mandu se gae juseyo.", translation: "Three dumplings, please. (개 = general objects)" },
            { native: "커피 두 잔이랑 물 한 잔 주세요.", romanized: "Keopi du jamirang mul han jan juseyo.", translation: "Two coffees and one water, please. (잔 = cups/glasses)" },
            { native: "몇 명이세요? — 네 명이요.", romanized: "Myeot myeongsiseyo? — Ne myeongiyeo.", translation: "How many people? — Four people. (명 = people)" },
            { native: "라면 두 그릇이랑 소주 한 병 주세요.", romanized: "Ramen du geuteusirang soju han byeong juseyo.", translation: "Two bowls of ramen and one bottle of soju, please." },
            { native: "사과 다섯 개 살게요.", romanized: "Sagwa daseos gae salgeyo.", translation: "I'll buy five apples. (다섯 — no change before counter)" },
            { native: "삼겹살 이 인분 주세요.", romanized: "Samgyeopsal i inbun juseyo.", translation: "Two portions of samgyeopsal, please. (인분 uses Sino-Korean: 이 인분)" },
        ],
        inlineVocab: [
            { word: "개", romanized: "gae", translation: "counter — general objects" },
            { word: "명", romanized: "myeong", translation: "counter — people" },
            { word: "잔", romanized: "jan", translation: "counter — glasses/cups of liquid" },
            { word: "그릇", romanized: "geureut", translation: "counter — bowls" },
            { word: "병", romanized: "byeong", translation: "counter — bottles" },
            { word: "인분", romanized: "inbun", translation: "counter — portions/servings (uses Sino-Korean numbers)" },
            { word: "한/두/세/네", romanized: "han/du/se/ne", translation: "1/2/3/4 before a counter (same as age counting)" },
            { word: "몇 명", romanized: "myeot myeong", translation: "how many people" },
        ],
    },
    {
        id: "ko-g-a1-33",
        level: "A1",
        title: "Sino-Korean numbers for money + 원; reading prices",
        explanation: `You have used Sino-Korean numbers for minutes (십 분, 삼십 분) and in a few counters. Now those same numbers do their most important everyday job: prices. In Korea, you encounter large numbers constantly — and the good news is that the Sino-Korean system is completely regular.

You already know the building blocks: 일(1), 이(2), 삼(3), 사(4), 오(5), 육(6), 칠(7), 팔(8), 구(9), 십(10). Now add:
백 — 100
천 — 1,000
만 — 10,000

The most important adjustment from English thinking: Korean counts in units of 만 (10,000), not 1,000. This is the main shift to make.

10,000 = 만 (not 십천 — there is no such form)
15,000 = 만 오천
23,000 = 이만 삼천
50,000 = 오만
120,000 = 십이만

The pattern is completely regular. You stack the units: 이만 삼천 오백 = 23,500.

Prices in practice — 원 (₩) is the Korean currency:
천 원 (₩1,000), 삼천오백 원 (₩3,500), 만 이천 원 (₩12,000), 삼만 오천 원 (₩35,000).

Essential price questions:
이거 얼마예요? — How much is this? (the single most useful question in any Korean shop)
저거 얼마예요? — How much is that (over there)?
너무 비싸요. — It's too expensive.
조금 싸게 해 주세요. — Please make it a little cheaper.

The demonstrative set is now complete: 이거 (this, near me), 그거 (that, near you), 저거 (that, far from both). You have been using 이거 since the restaurant unit — here is the full picture.

One small cultural note: traditional Korean markets (재래시장) often accept friendly bargaining (흥정). The phrase 조금 싸게 해 주세요 is natural and expected there. In ordinary shops and convenience stores, prices are fixed.`,
        examples: [
            { native: "이거 얼마예요? — 만 이천 원이에요.", romanized: "Igeo eolmayeyo? — Man icheon wonieyeo.", translation: "How much is this? — It's 12,000 won." },
            { native: "저거는 삼만 오천 원이에요.", romanized: "Jeogeoneun samman ocheon wonieyeo.", translation: "That one over there is 35,000 won." },
            { native: "너무 비싸요. 조금 싸게 해 주세요.", romanized: "Neomu bissayo. Jogeum ssage hae juseyo.", translation: "It's too expensive. Please make it a little cheaper." },
            { native: "모두 팔천오백 원이에요.", romanized: "Modu palcheon obaek wonieyeo.", translation: "It's 8,500 won in total." },
            { native: "이만 칠천 원 있어요?", romanized: "Iman chilcheon won isseoyo?", translation: "Do you have 27,000 won?" },
            { native: "카드 돼요? 아니면 현금으로 낼게요.", romanized: "Kadeu dwaeyo? Animyeon hyeongeumeuro naelgeyo.", translation: "Do you take card? Otherwise I'll pay in cash." },
        ],
        inlineVocab: [
            { word: "원", romanized: "won", translation: "Korean won (₩)" },
            { word: "백 / 천 / 만", romanized: "baek / cheon / man", translation: "100 / 1,000 / 10,000" },
            { word: "이거 / 그거 / 저거", romanized: "igeo / geugeo / jeogeo", translation: "this / that (near you) / that over there" },
            { word: "얼마예요?", romanized: "Eolmayeyo?", translation: "How much is it?" },
            { word: "비싸요", romanized: "bissayo", translation: "expensive" },
            { word: "싸요", romanized: "ssayo", translation: "cheap / inexpensive" },
            { word: "살게요", romanized: "salgeyo", translation: "I'll buy it" },
            { word: "현금", romanized: "hyeongeum", translation: "cash" },
        ],
    },
    {
        id: "ko-g-a1-34",
        level: "A1",
        title: "Polite instruction ~(으)세요 (please do / do this)",
        explanation: `You have been hearing and using ~(으)세요 throughout this course. In the directions unit you heard 직진하세요 (go straight), 왼쪽으로 도세요 (turn left), 내리세요 (get off). In the restaurant you heard 앉으세요 (please sit). You were using the polite instruction form before knowing its name.

Here is the pattern:

After a vowel: ~세요 → 가세요, 오세요, 보세요, 주세요
After a consonant: ~으세요 → 앉으세요, 읽으세요, 닫으세요

| Verb | ~(으)세요 form | Meaning |
| 가다 | 가세요 | Please go / Go |
| 오다 | 오세요 | Please come |
| 앉다 | 앉으세요 | Please sit |
| 읽다 | 읽으세요 | Please read |
| 기다리다 | 기다리세요 | Please wait |
| 드시다 | 드세요 | Please eat/have (honorific) |

~(으)세요 is both a polite instruction (please do X) and a polite invitation (do X, you're welcome to). The tone is warm and respectful — not commanding. When a shopkeeper says 앉으세요, they are inviting you to sit, not ordering you to.

You have also been using 주세요 constantly — now you see that 주세요 is simply the ~어 주세요 request form of 주다 (give), which you will learn fully in the next lesson. The 세요 you have been using in directions and the 주세요 you use in shops both follow the same underlying pattern.

~(으)세요 is a direct instruction or invitation. In the next lesson you will learn ~아/어 주세요, which is slightly different: it is a request that specifically asks someone to do something for you. Both are polite; the difference is subtle at A1 level. Use ~(으)세요 when giving instructions, inviting someone to do something, or following a direction prompt.`,
        examples: [
            { native: "이쪽으로 오세요. 여기 앉으세요.", romanized: "Ijjogeuro oseyo. Yeogi anjeuseyo.", translation: "Please come this way. Please sit here." },
            { native: "직진하세요. 그다음에 왼쪽으로 도세요.", romanized: "Jikjinhaseyo. Geudeaeume oenjjogeuro doseyo.", translation: "Go straight. Then turn left." },
            { native: "천천히 말씀해 주세요. 잘 못 들었어요.", romanized: "Cheoncheonhi malsseum hae juseyo. Jal mot deureosseoyo.", translation: "Please speak slowly. I didn't hear well." },
            { native: "잠깐만 기다리세요.", romanized: "Jamkkanman gidarieseyo.", translation: "Please wait just a moment." },
            { native: "여기 서명해 주세요.", romanized: "Yeogi seomyeonghae juseyo.", translation: "Please sign here." },
            { native: "모르면 물어보세요!", romanized: "Moreumyeon mureobaseyo!", translation: "If you don't know, please ask!" },
        ],
        inlineVocab: [
            { word: "~(으)세요", romanized: "(eu)seyo", translation: "please do / do this (polite instruction or invitation)" },
            { word: "가세요", romanized: "gaseyo", translation: "please go (vowel stem → 세요)" },
            { word: "앉으세요", romanized: "anjeseyo", translation: "please sit (consonant stem → 으세요)" },
            { word: "기다리세요", romanized: "gidarieseyo", translation: "please wait" },
            { word: "천천히", romanized: "cheoncheonhi", translation: "slowly" },
            { word: "잠깐만요", romanized: "jamkkanmanyo", translation: "just a moment" },
            { word: "이쪽으로", romanized: "ijjogeuro", translation: "this way (이쪽 = this side + 으로)" },
            { word: "서명하다", romanized: "seomyeonghada", translation: "to sign" },
        ],
    },
    {
        id: "ko-g-a1-35",
        level: "A1",
        title: "~아/어 주세요 (please do this for me) + the 해요체 register payoff",
        explanation: `Since Unit 4, every verb ending you have learned has finished with 요. 가요, 먹어요, 좋아해요, 했어요, 있어요. You were told: this is how you say things in Korean. Here is the full explanation — and it is more satisfying than you might expect.

Korean has multiple speech levels — different verb endings depending on your relationship with the person you are talking to. The main levels are:

해요체 — Polite informal. Warm, natural, universally appropriate in everyday interactions with strangers, acquaintances, shopkeepers, language partners, workplaces, restaurants, taxis, cafés. This is what you have been speaking since Unit 4.

합쇼체 — Formal polite. TV news, announcements, very formal situations. You will hear it but rarely need to produce it at A1.

반말 — Casual / informal. Close friends, younger people, family. Not for strangers.

You have been speaking 해요체 this whole time. And this was the right choice.

해요체 is appropriate in 95% of real-life conversations you will have as a learner — and it is never rude. You can use it with anyone you have just met, in any service context, at any age difference. When in doubt, 해요체 is correct.

Now, ~아/어 주세요. You have been using 주세요 since the restaurant unit, and before that: 기다려 주세요, 추천해 주세요, 세워 주세요, 포장해 주세요. These are all the same pattern:

[verb stem] + 아/어 주세요

주다 = to give. ~아/어 주세요 = please do [something] for me.

The form before 주세요 uses the same vowel harmony as the present tense:
기다리다 → 기다려요 → 기다려 주세요
말하다 → 말해요 → 말해 주세요
열다 → 열어요 → 열어 주세요

You see? The form you put before 주세요 is the same ~아/어 form from the present tense. You have been building toward this without knowing it. The connection is satisfying once you see it.

Immediately useful requests to practise:
한 번 더 말해 주세요. — Please say it one more time.
천천히 말해 주세요. — Please speak slowly.
사진 찍어 주세요. — Please take a photo.
도와 주세요! — Please help me!

These phrases — especially the first two — are practical survival tools every Korean learner needs.`,
        examples: [
            { native: "한 번 더 말해 주세요.", romanized: "Han beon deo malhae juseyo.", translation: "Please say it one more time." },
            { native: "천천히 말해 주세요. 빨라요.", romanized: "Cheoncheonhi malhae juseyo. Ppallayo.", translation: "Please speak slowly. It's too fast." },
            { native: "사진 찍어 주세요!", romanized: "Sajin jjigeo juseyo!", translation: "Please take a photo!" },
            { native: "창문 열어 주세요.", romanized: "Changmun yeoreo juseyo.", translation: "Please open the window." },
            { native: "한국어로 써 주세요.", romanized: "Hangugeoro sseo juseyo.", translation: "Please write it in Korean." },
            { native: "도와 주세요! 길을 잃었어요.", romanized: "Dowa juseyo! Gireul ireoosseoyo.", translation: "Please help me! I'm lost." },
        ],
        inlineVocab: [
            { word: "~아/어 주세요", romanized: "~a/eo juseyo", translation: "please do ___ (for me) — request form" },
            { word: "해요체", romanized: "haeyoche", translation: "polite informal speech level — your default throughout this course" },
            { word: "합쇼체", romanized: "hapsyoche", translation: "formal polite speech level (TV, announcements)" },
            { word: "반말", romanized: "banmal", translation: "casual informal speech (close friends — taught at B1)" },
            { word: "한 번 더", romanized: "han beon deo", translation: "one more time" },
            { word: "말하다", romanized: "malhada", translation: "to speak / to say" },
            { word: "도와주다", romanized: "dowajuda", translation: "to help" },
            { word: "창문", romanized: "changmun", translation: "window" },
        ],
    },
    {
        id: "ko-g-a1-36",
        level: "A1",
        title: "~(으)ㄹ까요? — suggestion/question form (Shall we? What do you think?)",
        explanation: `You want to suggest doing something with someone. In English you might say "Shall we go?" or "How about eating here?" Korean has a clean, versatile pattern for exactly this.

You have actually been hearing this pattern already. It appeared in earlier unit dialogues — 뭐 먹을까요? (What shall we eat?), 갈까요? — and in the taxi unit when the driver said 한 20분쯤 걸릴 거예요. The underlying pattern is now ready to be revealed.

Formation:
After a vowel or ㄹ: ~ㄹ까요?
After a consonant: ~을까요?

| Verb | ~(으)ㄹ까요? | Meaning |
| 가다 | 갈까요? | Shall we go? |
| 먹다 | 먹을까요? | Shall we eat? |
| 보다 | 볼까요? | Shall we watch / see? |
| 마시다 | 마실까요? | Shall we drink? |
| 앉다 | 앉을까요? | Shall we sit? |
| 만나다 | 만날까요? | Shall we meet? |

Two uses to know:

1. Suggestion directed at another person: 갈까요? = Shall we go? You are proposing a shared activity.
2. Wondering aloud or to yourself: 뭐 먹을까요... = What should I eat / I wonder what to eat. The same form, used with falling intonation while thinking.

Context tells you which meaning is intended. Directed at someone = suggestion. Said while looking at a menu or thinking = wondering.

Natural responses to suggestions:
좋아요! — Sounds good!
좋은데요. — That sounds good. (slightly warmer, slightly tentative)
그래요, 같이 가요. — Yes, let's go together.
저도요! — Me too! / I agree!
아, 그날은 좀... — Oh, that day isn't great... (natural, polite decline — trailing off with 좀)

That last one is worth memorising: trailing off with 좀 is one of the most natural ways to decline in Korean. No full excuse is required.`,
        examples: [
            { native: "같이 갈까요?", romanized: "Gachi galkkayo?", translation: "Shall we go together?" },
            { native: "뭐 먹을까요? — 비빔밥 어때요?", romanized: "Mwo meogeulkkayo? — Bibimbap eottaeyo?", translation: "What shall we eat? — How about bibimbap?" },
            { native: "언제 만날까요? — 토요일 오후 어때요?", romanized: "Eonje mannalkkayo? — Toyoil ohu eottaeyo?", translation: "When shall we meet? — How about Saturday afternoon?" },
            { native: "이번 주말에 한강에 갈까요?", romanized: "Ibeon jumare hangange galkkayo?", translation: "Shall we go to the Han River this weekend?" },
            { native: "어디서 만날까요? — 합정역 앞에서요.", romanized: "Eodiseo mannalkkayo? — Habjeongyeok apeseoyo.", translation: "Where shall we meet? — In front of Hapjeong Station." },
            { native: "음... 뭐 먹을까요? (thinking to self)", romanized: "Eum... mwo meogeulkkayo?", translation: "Hmm... what should I eat? (wondering aloud — same form, different use)" },
        ],
        inlineVocab: [
            { word: "~(으)ㄹ까요?", romanized: "(eu)lkkayo?", translation: "shall we / I wonder (suggestion or wondering aloud)" },
            { word: "갈까요?", romanized: "galkkayo?", translation: "shall we go? (vowel stem: 가 + ㄹ까요)" },
            { word: "먹을까요?", romanized: "meogeulkkayo?", translation: "shall we eat? (consonant stem: 먹 + 을까요)" },
            { word: "같이", romanized: "gachi", translation: "together" },
            { word: "좋은데요", romanized: "joeundeyo", translation: "that sounds good (warm, slightly tentative)" },
            { word: "저도요", romanized: "jeodoyeo", translation: "me too / I agree too" },
            { word: "특별한", romanized: "teukbyeolhan", translation: "special" },
            { word: "기대돼요", romanized: "gidaedwaeyo", translation: "I'm looking forward to it" },
        ],
    },
    {
        id: "ko-g-a1-37",
        level: "A1",
        title: "~고 싶어요 (I want to...) + ~고 싶어해요 (he/she wants to...)",
        explanation: `You already used this pattern in Unit 15: 언젠가 한국에 가고 싶어요 (I want to go to Korea someday). It appeared as a useful chunk then. Now you can see the full pattern and use it freely.

Formation:
[verb stem] + 고 싶어요

The 고 here is the same connector you will learn in Block 5 for linking clauses (먹고 마셔요 = eat and drink). 싶어요 comes from 싶다 (to want / to feel like). Together: 가고 싶어요 literally means something like "(going) and (I) want it" — but think of it as a unit meaning "I want to go."

Core examples:
가다 → 가고 싶어요 (I want to go)
먹다 → 먹고 싶어요 (I want to eat)
보다 → 보고 싶어요 (I want to see / I miss — see note below)
배우다 → 배우고 싶어요 (I want to learn)
사다 → 사고 싶어요 (I want to buy)
쉬다 → 쉬고 싶어요 (I want to rest)

Negating: 가고 싶지 않아요 (I don't want to go). The pattern uses ~지 않아요 for negation rather than 안 — file this away for later; at A1, using 안 before 싶어요 also sounds natural in informal speech.

Special meaning of 보고 싶어요: 보다 means "to see/watch." But 보고 싶어요 directed at a person means "I miss you" — literally "I want to see you." This is one of the most emotionally important phrases in Korean and a favourite line in dramas.
영화를 보고 싶어요. — I want to watch a movie.
엄마가 보고 싶어요. — I miss my mum.

Talking about what someone else wants: replace 싶어요 with 싶어해요. This form is used when describing another person's desire (a third-person form):
친구가 한국에 가고 싶어해요. — My friend wants to go to Korea.
동생이 강아지를 사고 싶어해요. — My younger sibling wants to buy a dog.

For your own desires: ~고 싶어요. For someone else's: ~고 싶어해요.`,
        examples: [
            { native: "언젠가 한국에 가고 싶어요.", romanized: "Eonjenga hanguge gago sipeoyo.", translation: "I want to go to Korea someday." },
            { native: "오늘은 삼겹살을 먹고 싶어요!", romanized: "Oneureun samgyeopsareul meokgo sipeoyo!", translation: "I want to eat samgyeopsal today!" },
            { native: "엄마가 보고 싶어요.", romanized: "Eommaga bogo sipeoyo.", translation: "I miss my mum. (보고 싶어요 = miss someone)" },
            { native: "오늘은 그냥 집에서 쉬고 싶어요.", romanized: "Oneureun geunyang jibeseo swigo sipeoyo.", translation: "Today I just want to rest at home." },
            { native: "친구가 제주도에 가고 싶어해요.", romanized: "Chinguga jejudoe gago sipeohaeyeo.", translation: "My friend wants to go to Jeju. (싶어해요 = third person)" },
            { native: "뭐 하고 싶어요? — 글쎄요, 영화 보고 싶어요.", romanized: "Mwo hago sipeoyo? — Geulsseoyo, yeonghwa bogo sipeoyo.", translation: "What do you want to do? — Hmm, I want to watch a movie." },
        ],
        inlineVocab: [
            { word: "~고 싶어요", romanized: "~go sipeoyo", translation: "I want to (first person desire)" },
            { word: "~고 싶어해요", romanized: "~go sipeohaeyeo", translation: "he/she/they want to (third person desire)" },
            { word: "보고 싶어요", romanized: "bogo sipeoyo", translation: "I want to see / I miss (someone)" },
            { word: "배우다", romanized: "baeuda", translation: "to learn" },
            { word: "쉬다", romanized: "swida", translation: "to rest" },
            { word: "글쎄요", romanized: "geulsseoyo", translation: "well / hmm (uncertainty or non-commitment)" },
            { word: "있잖아요", romanized: "itjanayo", translation: "you know... (warm soft conversation opener)" },
            { word: "기대돼요", romanized: "gidaedwaeyo", translation: "I'm looking forward to it" },
        ],
    },
]
