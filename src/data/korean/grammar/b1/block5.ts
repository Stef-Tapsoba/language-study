import { GrammarLesson } from "../../../../types"

export const block5Lessons: GrammarLesson[] = [
    // ── ko-g-b1-16 — Discourse particles ────────────────────────────────────
    {
        id: "ko-g-b1-16",
        level: "B1",
        title: "Discourse Particles: -거든요, -잖아요, -네요, -는데요",
        explanation: {
            native: `These sentence-final particles are what separate textbook Korean from natural Korean. They encode social stance — not grammar rules.

⭐ If you could only learn one from this unit: -거든요
-거든요 is the single particle most likely to make you sound like a natural speaker. It tells your listener "I'm giving you information you didn't already know."

-거든요 (because / let me tell you — NEW information for listener):
늦어서 죄송해요. 버스가 막혔거든요. (Sorry I'm late. The bus was backed up, you see.)
오늘 못 갈 것 같아요. 할 일이 많거든요. (I don't think I can go today. I have a lot to do, you see.)
Key: "I'm explaining — this is background you didn't know."

-잖아요 (you know / as you know — SHARED information):
한국어가 어렵잖아요. 그래서 시간이 걸려요. (Korean is hard, you know. That's why it takes time.)
어제 얘기했잖아요! (We talked about it yesterday, didn't we!)
Key: "You already know this — I'm reminding you / appealing to shared knowledge."

-네요 (I notice / I see — DISCOVERY / reaction right now):
정말 맛있네요! (This is really delicious!) / 생각보다 어렵네요. (It's harder than I thought.)
한국어 정말 잘 하시네요! (Your Korean is really good, I see!)
Key: "I'm discovering or noticing this for the first time."

-는데요 / -은데요 (framing / background / turn management):
이건 좀 비싼데요... (This is a bit expensive... [implication implied])
지금 바쁜데요. (I'm busy right now... [implication: can we talk later?])
Key: "I'm setting context, softening, or implying something beyond what I said."

Note for systematic learners: These particles encode social/pragmatic stance, not grammatical categories. There is no deducible formation rule. They are best learned through exposure and imitation. A summary table helps reference, but feeling these particles requires listening to authentic Korean.`,
            target: `이 문장 끝 입자들이 교과서 한국어와 자연스러운 한국어를 구분합니다.

⭐ 딱 하나만 선택한다면: -거든요
한국어를 "교과서 한국어"에서 "진짜 한국어"로 바꿔주는 가장 중요한 입자입니다.

-거든요: 리스너가 몰랐던 새 정보 제공, 배경 설명
늦어서 죄송해요. 버스가 막혔거든요.

-잖아요: 리스너가 이미 알고 있는 공유 정보, 상기시키기
한국어가 어렵잖아요. / 어제 얘기했잖아요!

-네요: 지금 막 발견하거나 알아차린 것 (발견/반응)
정말 맛있네요! / 생각보다 어렵네요.

-는데요: 맥락 설정, 부드럽게 하기, 암묵적 내용 (대화 관리)
이건 좀 비싼데요... / 지금 바쁜데요.`,
        },
        examples: [
            { native: "왜 이렇게 늦었어요? — 길이 많이 막혔거든요.", romanized: "Wae ireoke neujeosseoyo? — Giri mani makhyeotgeodeunyo.", translation: "Why are you so late? — The traffic was really backed up, you see." },
            { native: "그 사람 알아요? 제 친구거든요.", romanized: "Geu saram arayo? Je chingugeo deunyo.", translation: "Do you know that person? They're actually my friend, you see." },
            { native: "그거 어렵잖아요. 왜 혼자 하려고 해요?", romanized: "Geugeo eoryeopjanayo. Wae honja haryeogo haeyo?", translation: "That's hard, you know. Why are you trying to do it alone?" },
            { native: "이 커피 진짜 맛있네요! 어디서 샀어요?", romanized: "I keopi jinjja masitneyo! Eodiseo sasseoyo?", translation: "This coffee is really delicious! Where did you buy it?" },
        ],
    },

    // ── ko-g-b1-17 — Idioms, proverbs, internet Korean ──────────────────────
    {
        id: "ko-g-b1-17",
        level: "B1",
        title: "살아있는 한국어: 관용어, 속담, 인터넷 한국어",
        explanation: {
            native: `This unit is a celebration — not a grammar lesson. You've learned the system. Now you learn how real Koreans use it, colour it, and play with it.

Essential idioms (관용어):
발이 넓다 (lit. wide feet) = well-connected / knows many people
손이 크다 (lit. big hands) = generous / spends a lot
배가 아프다 (lit. stomach hurts) = feeling envious
눈에 넣어도 안 아프다 (lit. wouldn't hurt even in the eye) = I love them dearly
닭살 돋다 = goosebumps (cold or cringe)
시작이 반이다 = Getting started is the hard part
발 없는 말이 천 리 간다 = Gossip spreads fast (lit. words with no feet travel 1000 li)

Key proverbs (속담):
세 살 버릇 여든까지 간다 = Old habits die hard (habits at 3 last till 80)
원숭이도 나무에서 떨어진다 = Everyone makes mistakes (even monkeys fall from trees)
급할수록 돌아가라 = Haste makes waste (the more hurried, go around)

Internet / youth Korean (인터넷/청년 한국어):
대박! = Wow / amazing! / OMG
헐 = OMG / what?! (surprise)
ㅋㅋㅋ = haha / lol / 크크크
갑분싸 = 갑자기 분위기 싸해짐 (sudden mood kill)
멘붕 = 멘탈 붕괴 (mental breakdown / losing it)
완전 = totally / completely (intensifier)
핵- = extremely / ultra (prefix: 핵맛있어 = insanely delicious)
레전드 = legendary / epic

Grammar bridge: B1 grammar is intact in colloquial Korean — only the surface changes. -거든요 still appears, -더라도 still appears. Colloquial Korean is not broken grammar — it is compressed grammar.`,
            target: `이 단원은 축하입니다 — 문법 수업이 아닙니다. 시스템을 배웠어요. 이제 진짜 한국인이 어떻게 쓰는지 배웁니다.

관용어: 발이 넓다 / 손이 크다 / 배가 아프다 / 닭살 돋다 / 시작이 반이다

속담: 세 살 버릇 여든까지 간다 / 원숭이도 나무에서 떨어진다 / 급할수록 돌아가라

인터넷/청년 한국어:
대박! / 헐 / ㅋㅋㅋ / 갑분싸 / 멘붕 / 완전 / 핵- / 레전드

문법 연결: 구어체 한국어에서도 B1 문법은 그대로입니다. 바뀌는 것은 속도, 소리, 어휘 선택이지 구조가 아닙니다.`,
        },
        examples: [
            { native: "그 사람은 발이 진짜 넓어요. 아는 사람이 엄청 많아요.", romanized: "Geu sarameun bari jinja neolbeoyo. Aneun sarami eomcheong manayo.", translation: "That person is really well-connected. They know a huge number of people." },
            { native: "대박! 어떻게 그렇게 빨리 할 수 있어요?", romanized: "Daebak! Eotteoke geureoke ppalli hal su isseoyo?", translation: "Wow! How can you do it so quickly?!" },
            { native: "세 살 버릇 여든까지 간다고 하잖아요. 지금부터 좋은 습관을 만드세요.", romanized: "Se sal beoreut yeodeun kkaji gandago hajanayo. Jigeumbuteo joeun seupgwan eul mandeouseyo.", translation: "As they say, habits at 3 last till 80. Start building good habits now." },
            { native: "오늘 발표 완전 멘붕이었어요. 다음엔 더 잘 준비해야겠어요.", romanized: "Oneul balpyo wanjeon menbung ieosseoyo. Daeumene deo jal junbihaeya gesseoyo.", translation: "Today's presentation was a total mental breakdown. Next time I need to prepare better." },
        ],
    },
]
