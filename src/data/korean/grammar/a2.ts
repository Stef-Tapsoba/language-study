import { GrammarLesson } from "../../../types"

export const a2Grammar: GrammarLesson[] = [
    {
        id: "ko-g-a2-1",
        level: "A2",
        title: "~고 있다 — Progressive Action",
        explanation: {
            native: `~고 있다 expresses an ongoing action — what is happening right now or what was happening at a specific moment. It is the Korean equivalent of the English present continuous ('-ing').

FORMATION
Verb stem + 고 있어요 (polite) / 고 있다 (plain)
No consonant/vowel rule applies — 고 attaches directly to all verb stems.
  먹다    → 먹고 있어요       I am eating
  공부하다 → 공부하고 있어요  I am studying
  자다    → 자고 있어요       I am sleeping
  읽다    → 읽고 있어요       I am reading
  기다리다 → 기다리고 있어요  I am waiting

PRESENT PROGRESSIVE — happening right now:
  지금 뭐 하고 있어요?        What are you doing right now?
  음악을 듣고 있어요.         I am listening to music.
  밥을 먹고 있어요.           I am eating.
  친구를 기다리고 있어요.     I am waiting for a friend.

PAST PROGRESSIVE — 고 있었어요:
  어제 밤에 뭐 하고 있었어요?     What were you doing last night?
  공부하고 있었어요.               I was studying.

RESULTING STATE — some verbs with 고 있다 describe a state resulting from a completed action:
  결혼하고 있어요.    (less natural — prefer 결혼했어요 for 'is married')
  살고 있어요.        I am living (there). (current residence)
  입고 있어요.        He is wearing. (put it on and still wearing)
  알고 있어요.        I know. (lit. I am knowing — ongoing state)

NEGATIVE PROGRESSIVE: 고 있지 않아요 / 안 ~고 있어요
  지금 먹고 있지 않아요.     I am not eating right now.
  안 자고 있어요.            I am not sleeping.

고 있다 vs 고 있었다:
  먹고 있어요.    I am eating. (now)
  먹고 있었어요.  I was eating. (at that past moment)`,
            target: `~고 있다는 진행 중인 동작을 표현합니다 — 지금 일어나고 있는 일이나 특정 순간에 일어나고 있었던 일을 나타냅니다.

형성:
동사 어간 + 고 있어요 (공손체) / 고 있다 (기본체)
자음/모음 규칙이 적용되지 않습니다 — 고가 모든 동사 어간에 바로 붙습니다.
  먹다 → 먹고 있어요,  공부하다 → 공부하고 있어요,  자다 → 자고 있어요

현재 진행형:
  지금 뭐 하고 있어요? / 음악을 듣고 있어요. / 친구를 기다리고 있어요.

과거 진행형 — 고 있었어요:
  어제 밤에 뭐 하고 있었어요? / 공부하고 있었어요.

결과 상태 — 일부 동사는 완료된 동작의 결과 상태를 나타냅니다:
  살고 있어요. (현재 거주지) / 입고 있어요. (입은 상태) / 알고 있어요. (알고 있는 상태)

부정 진행형: 고 있지 않아요 / 안 ~고 있어요
  지금 먹고 있지 않아요. / 안 자고 있어요.`
        },
        examples: [
            { native: "지금 뭐 하고 있어요?", romanized: "Jigeum mwo hago isseoyo?", translation: "What are you doing right now?" },
            { native: "음악을 듣고 있어요.", romanized: "Eumagul deutgo isseoyo.", translation: "I am listening to music." },
            { native: "친구를 기다리고 있어요.", romanized: "Chingureul gidarigo isseoyo.", translation: "I am waiting for a friend." },
            { native: "어제 밤에 영화를 보고 있었어요.", romanized: "Eoje bame yeonghwareul bogo isseosseoyo.", translation: "I was watching a movie last night." },
            { native: "지금 안 자고 있어요.", romanized: "Jigeum an jago isseoyo.", translation: "I am not sleeping right now." },
            { native: "서울에 살고 있어요.", romanized: "Seoure salgo isseoyo.", translation: "I am living in Seoul. (resulting state)" },
        ]
    },
    {
        id: "ko-g-a2-2",
        level: "A2",
        title: "~(으)ㄹ 수 있다/없다 — Ability",
        explanation: {
            native: `~(으)ㄹ 수 있다/없다 expresses ability ('can/be able to') and inability ('cannot'). It is more permanent and general than 못 (situational inability).

FORMATION
  Verb stem ends in vowel or ㄹ → ㄹ 수 있어요/없어요
  Verb stem ends in consonant    → 을 수 있어요/없어요

  가다   → 갈 수 있어요       I can go
  먹다   → 먹을 수 있어요     I can eat
  하다   → 할 수 있어요       I can do
  만들다 → 만들 수 있어요     I can make (ㄹ stem — no addition)
  읽다   → 읽을 수 있어요     I can read

ABILITY — can:
  한국어를 할 수 있어요.        I can speak Korean.
  수영을 할 수 있어요?          Can you swim?
  이 문제를 풀 수 있어요.       I can solve this problem.

INABILITY — cannot:
  지금 올 수 없어요.            I can't come now.
  혼자 할 수 없어요.            I can't do it alone.
  잘 안 들려서 들을 수 없어요.  I can't hear because it's not audible well.

QUESTION:
  한국어를 할 수 있어요?        Can you speak Korean?
  → 네, 조금 할 수 있어요.      Yes, I can speak a little.
  → 아니요, 못 해요.            No, I can't.

~(으)ㄹ 수 있다 vs 못:
  못 가요.         I can't go. (situational — something is stopping me now)
  갈 수 없어요.    I cannot go. (general inability or formal statement)
Both are widely used — 못 is more common in casual speech, 수 없다 is more formal.

PAST ABILITY — 수 있었다/없었다:
  어렸을 때 수영을 할 수 있었어요.  When I was young, I could swim.
  그때는 갈 수 없었어요.            At that time I couldn't go.`,
            target: `~(으)ㄹ 수 있다/없다는 능력('할 수 있다')과 불능('할 수 없다')을 표현합니다.

형성:
  동사 어간이 모음이나 ㄹ로 끝나면 → ㄹ 수 있어요/없어요
  동사 어간이 자음으로 끝나면 → 을 수 있어요/없어요

  가다 → 갈 수 있어요,  먹다 → 먹을 수 있어요,  하다 → 할 수 있어요

능력:
  한국어를 할 수 있어요. / 수영을 할 수 있어요? / 이 문제를 풀 수 있어요.

불능:
  지금 올 수 없어요. / 혼자 할 수 없어요.

~(으)ㄹ 수 있다 vs 못:
  못 가요. (상황적 — 지금 무언가가 막고 있음)
  갈 수 없어요. (일반적 불능 또는 격식체)

과거 능력 — 수 있었다/없었다:
  어렸을 때 수영을 할 수 있었어요.
  그때는 갈 수 없었어요.`
        },
        examples: [
            { native: "한국어를 할 수 있어요.", romanized: "Hangugeo reul hal su isseoyo.", translation: "I can speak Korean." },
            { native: "수영을 할 수 없어요.", romanized: "Suyeongeul hal su eopseoyo.", translation: "I cannot swim." },
            { native: "지금 올 수 있어요?", romanized: "Jigeum ol su isseoyo?", translation: "Can you come now?" },
            { native: "자전거를 탈 수 있어요.", romanized: "Jajeongeoreul tal su isseoyo.", translation: "I can ride a bicycle." },
            { native: "어렸을 때는 수영을 할 수 있었어요.", romanized: "Eoryeosseul ttaeneun suyeongeul hal su isseosseoyo.", translation: "When I was young, I could swim." },
            { native: "혼자 할 수 없어요. 도와주세요.", romanized: "Honja hal su eopseoyo. Dowajuseyo.", translation: "I can't do it alone. Please help me." },
        ]
    },
    {
        id: "ko-g-a2-3",
        level: "A2",
        title: "~아/어야 하다/되다 — Obligation and Necessity",
        explanation: {
            native: `~아/어야 하다 and ~아/어야 되다 express obligation and necessity — 'must', 'have to', 'need to'. Both forms are widely used and largely interchangeable in everyday speech.

FORMATION
Apply the same vowel harmony rules as ~아요/어요, but add 야 하다/되다 instead:
  Last vowel ㅏ or ㅗ → 아야 하다
  All other vowels → 어야 하다
  하다 verbs → 해야 하다

  가다    → 가야 해요          I have to go
  먹다    → 먹어야 해요        I have to eat
  공부하다 → 공부해야 해요     I have to study
  자다    → 자야 해요          I have to sleep
  오다    → 와야 해요          I have to come

하다 vs 되다 — subtle difference:
  아/어야 하다 — I must do / it is required of me (personal obligation)
  아/어야 되다 — it has to be done / it must happen (more external/general)
  In everyday speech these are used interchangeably.

COMMON USES:
  매일 운동해야 해요.          I have to exercise every day.
  빨리 가야 해요.              I have to go quickly.
  숙제를 해야 돼요.            I have to do the homework.
  약을 먹어야 해요.            I need to take medicine.

NEGATIVE — 안 해도 돼요 / 하지 않아도 돼요 (don't have to):
  오늘은 안 와도 돼요.         You don't have to come today.
  다 먹지 않아도 돼요.         You don't have to eat it all.
  (See also ~지 않아도 되다 — same meaning)

ASKING ABOUT OBLIGATION:
  지금 가야 해요?              Do I have to go now?
  몇 시까지 와야 해요?         By what time do I have to come?

PAST OBLIGATION:
  어제 일찍 일어나야 했어요.   I had to wake up early yesterday.
  그때 거기 있어야 했어요.     I had to be there at that time.`,
            target: `~아/어야 하다와 ~아/어야 되다는 의무와 필요를 표현합니다 — '해야 한다', '할 필요가 있다'.

형성:
~아요/어요와 같은 모음 조화 규칙을 적용하되, 야 하다/되다를 붙입니다:
  마지막 모음이 ㅏ 또는 ㅗ → 아야 하다
  다른 모음들 → 어야 하다
  하다 동사 → 해야 하다

  가다 → 가야 해요,  먹다 → 먹어야 해요,  공부하다 → 공부해야 해요

하다 vs 되다:
  아/어야 하다 — 개인적 의무 (내가 해야 함)
  아/어야 되다 — 외부적/일반적 필요 (해야 함)
  일상 대화에서는 둘을 같은 의미로 사용합니다.

일반적 사용:
  매일 운동해야 해요. / 빨리 가야 해요. / 약을 먹어야 해요.

부정형 — 안 해도 돼요 / 하지 않아도 돼요 (안 해도 됨):
  오늘은 안 와도 돼요. / 다 먹지 않아도 돼요.

과거 의무:
  어제 일찍 일어나야 했어요. / 그때 거기 있어야 했어요.`
        },
        examples: [
            { native: "매일 운동해야 해요.", romanized: "Maeil undongha eya haeyo.", translation: "I have to exercise every day." },
            { native: "빨리 가야 해요.", romanized: "Ppalli gaya haeyo.", translation: "I have to go quickly." },
            { native: "숙제를 해야 돼요.", romanized: "Sukjereul haeya dwaeyo.", translation: "I have to do the homework." },
            { native: "오늘은 안 와도 돼요.", romanized: "Oneureun an wado dwaeyo.", translation: "You don't have to come today." },
            { native: "몇 시까지 와야 해요?", romanized: "Myeot sijkkaji waya haeyo?", translation: "By what time do I have to come?" },
            { native: "어제 일찍 일어나야 했어요.", romanized: "Eoje iljjik ireonaya haesseoyo.", translation: "I had to wake up early yesterday." },
        ]
    },
    {
        id: "ko-g-a2-4",
        level: "A2",
        title: "~(으)면 — If / When Conditional",
        explanation: {
            native: `~(으)면 is the main conditional ending in Korean — 'if' or 'when'. It attaches to verb stems and adjective stems.

FORMATION
  Stem ends in vowel or ㄹ → 면
  Stem ends in consonant   → 으면

  가다    → 가면          if/when you go
  오다    → 오면          if/when you come
  먹다    → 먹으면        if/when you eat
  좋다    → 좋으면        if it's good
  하다    → 하면          if you do
  크다    → 크면          if it's big
  살다    → 살면          if you live (ㄹ stem — no 으)
  만들다  → 만들면        if you make

WITH NOUNS + 이면/면:
  학생이면   if (you are) a student (after consonant-ending noun)
  의사면     if (you are) a doctor (after vowel-ending noun)

REAL CONDITION — if X, then Y (realistic or possible):
  비가 오면, 집에 있을 거예요.     If it rains, I'll stay home.
  시간이 있으면, 도와주세요.       If you have time, please help me.
  배가 고프면, 드세요.             If you're hungry, please eat.
  일찍 오면, 같이 갈 수 있어요.   If you come early, we can go together.

HABITUAL / GENERAL TRUTH — whenever X, Y:
  봄이 오면, 꽃이 펴요.           When spring comes, flowers bloom.
  열심히 하면, 잘 할 수 있어요.   If you work hard, you can do well.

~(으)면 vs ~(으)면 좋겠다 — I wish / it would be nice if:
  날씨가 좋으면 좋겠어요.         I wish the weather were nice.
  시간이 있으면 좋겠어요.         It would be nice if I had time.
  빨리 나으면 좋겠어요.           I hope you recover quickly.

COMMON PATTERNS:
  〜면 돼요         you just need to / all you have to do is
  〜면 안 돼요      you must not / it's not okay if
  〜면 좋겠어요     I wish / it would be nice if

  여기서 내리면 돼요.       You just need to get off here.
  늦으면 안 돼요.           You must not be late.`,
            target: `~(으)면은 한국어의 주요 조건형 어미입니다 — '만약' 또는 '~할 때'. 동사 어간과 형용사 어간에 붙습니다.

형성:
  어간이 모음이나 ㄹ로 끝나면 → 면
  어간이 자음으로 끝나면 → 으면

  가다 → 가면,  먹다 → 먹으면,  좋다 → 좋으면,  살다 → 살면

명사 + 이면/면:
  학생이면 (자음 뒤),  의사면 (모음 뒤)

실제 조건:
  비가 오면, 집에 있을 거예요.
  시간이 있으면, 도와주세요.
  일찍 오면, 같이 갈 수 있어요.

습관적/일반적 사실:
  봄이 오면, 꽃이 펴요.

~(으)면 좋겠다 — 바람/소원:
  날씨가 좋으면 좋겠어요. / 시간이 있으면 좋겠어요.

자주 쓰는 패턴:
  〜면 돼요 (그냥 ~하면 됨) / 〜면 안 돼요 (안 됨) / 〜면 좋겠어요 (바람)`
        },
        examples: [
            { native: "비가 오면, 집에 있을 거예요.", romanized: "Biga oamyeon, jibe isseul geoyeyo.", translation: "If it rains, I'll stay home." },
            { native: "시간이 있으면, 같이 가요.", romanized: "Sigani isseumyeon, gachi gayo.", translation: "If you have time, let's go together." },
            { native: "배고프면, 드세요.", romanized: "Baegopeuamyeon, deuseyo.", translation: "If you're hungry, please eat." },
            { native: "날씨가 좋으면 좋겠어요.", romanized: "Nalssiga josseumyeon jokesseoyo.", translation: "I wish the weather were nice." },
            { native: "여기서 내리면 돼요.", romanized: "Yeogiseo naeurimyeon dwaeyo.", translation: "You just need to get off here." },
            { native: "늦으면 안 돼요.", romanized: "Neutteumyeon an dwaeyo.", translation: "You must not be late." },
        ]
    },
    {
        id: "ko-g-a2-5",
        level: "A2",
        title: "~기 전에 / ~은/ㄴ 후에 — Before and After",
        explanation: {
            native: `Two essential expressions place actions in time sequence.

~기 전에 — BEFORE DOING
Structure: verb stem + 기 전에
  자다    → 자기 전에          before sleeping
  먹다    → 먹기 전에          before eating
  가다    → 가기 전에          before going
  공부하다 → 공부하기 전에     before studying

  자기 전에, 양치를 해요.               I brush my teeth before sleeping.
  먹기 전에, 손을 씻어야 해요.          You must wash your hands before eating.
  나가기 전에, 확인해 주세요.           Please check before going out.

Note: 기 전에 always uses the verb stem directly — no tense marker.
This is because the action hasn't happened yet when you're talking about it.

~은/ㄴ 후에 — AFTER DOING
Structure: verb past modifier (은/ㄴ) + 후에
  먹다    → 먹은 후에          after eating
  자다    → 잔 후에            after sleeping
  하다    → 한 후에            after doing
  오다    → 온 후에            after coming
  읽다    → 읽은 후에          after reading

  먹은 후에, 산책해요.                  I take a walk after eating.
  일한 후에, 친구를 만날 거예요.        I'll meet a friend after working.
  숙제를 다 한 후에, 놀아도 돼요.       After finishing all your homework, you may play.

ALSO COMMON — ~고 나서 (after doing, sequential):
  밥을 먹고 나서 커피를 마셔요.        I drink coffee after eating.
  샤워하고 나서 잘 거예요.             I'll sleep after showering.
  ~고 나서 is interchangeable with ~은/ㄴ 후에 in most cases.

WITH NOUNS — 전에 and 후에 attach directly to nouns:
  수업 전에    before class
  수업 후에    after class
  식사 전에    before a meal
  식사 후에    after a meal`,
            target: `두 가지 필수 표현이 시간적 순서로 동작을 배치합니다.

~기 전에 — 하기 전에
구성: 동사 어간 + 기 전에
  자다 → 자기 전에,  먹다 → 먹기 전에,  가다 → 가기 전에

  자기 전에, 양치를 해요.
  먹기 전에, 손을 씻어야 해요.
  나가기 전에, 확인해 주세요.

참고: 기 전에는 동작이 아직 일어나지 않았기 때문에 항상 동사 어간을 직접 사용합니다.

~은/ㄴ 후에 — 한 후에
구성: 동사 과거 수식어 (은/ㄴ) + 후에
  먹다 → 먹은 후에,  자다 → 잔 후에,  하다 → 한 후에

  먹은 후에, 산책해요.
  일한 후에, 친구를 만날 거예요.

~고 나서 (한 후에, 순차적):
  밥을 먹고 나서 커피를 마셔요.
  ~고 나서는 대부분의 경우 ~은/ㄴ 후에와 바꿔 쓸 수 있습니다.

명사 + 전에/후에:
  수업 전에,  수업 후에,  식사 전에,  식사 후에`
        },
        examples: [
            { native: "자기 전에, 양치해요.", romanized: "Jagi jeone, yangchihaeyo.", translation: "I brush my teeth before sleeping. (~기 전에)" },
            { native: "먹기 전에, 손을 씻어야 해요.", romanized: "Meokgi jeone, soneul ssisseoya haeyo.", translation: "You must wash your hands before eating." },
            { native: "먹은 후에, 산책할 거예요.", romanized: "Meogeun hue, sanchaekal geoyeyo.", translation: "I'll take a walk after eating. (~은 후에)" },
            { native: "수업 후에 뭐 해요?", romanized: "Sueo phue mwo haeyo?", translation: "What do you do after class? (noun + 후에)" },
            { native: "샤워하고 나서 잘 거예요.", romanized: "Syawoahago naseo jal geoyeyo.", translation: "I'll sleep after showering. (~고 나서)" },
            { native: "나가기 전에 확인해 주세요.", romanized: "Nagagi jeone hwagin hae juseyo.", translation: "Please check before going out." },
        ]
    },
    {
        id: "ko-g-a2-6",
        level: "A2",
        title: "~(으)ㄴ/는 — Adjective Clauses (Verb Modification)",
        explanation: {
            native: `Korean adjective clauses modify nouns — they are the equivalent of relative clauses in English ('the book that I read', 'the person who came'). The modifying verb or adjective comes directly before the noun it modifies, using special endings.

THE ENDINGS

Present tense modification:
  Action verbs → 는 + noun:         먹는 사람 (the person who eats / eating)
  Descriptive verbs → (으)ㄴ + noun: 큰 사람 (a tall person), 작은 가방 (a small bag)
  하다 verbs → 하는 + noun:          공부하는 학생 (studying student)

Past tense modification → (으)ㄴ + noun:
  먹은 음식 (food that was eaten), 간 사람 (the person who went)

Future/planned modification → (으)ㄹ + noun:
  먹을 음식 (food to eat), 갈 곳 (a place to go)

FORMING PRESENT MODIFIER (ACTION VERBS) — 는:
  먹다  → 먹는     the one that eats / eating
  가다  → 가는     the one that goes / going
  오다  → 오는     the one that comes / coming
  공부하다 → 공부하는  (the one) studying

  지금 먹는 음식이에요.              It's the food I'm eating now.
  거기 앉는 사람이 제 친구예요.      The person sitting there is my friend.
  한국어를 가르치는 선생님이에요.    She's a teacher who teaches Korean.

FORMING PAST MODIFIER — (으)ㄴ:
  먹다  → 먹은     the one that ate
  가다  → 간       the one that went (vowel stem — drop 아/어 add ㄴ)
  오다  → 온       the one that came
  읽다  → 읽은     the one that read

  어제 먹은 음식이 맛있었어요.       The food I ate yesterday was delicious.
  지난주에 만난 사람이에요.          It's the person I met last week.

FORMING FUTURE MODIFIER — (으)ㄹ:
  먹다  → 먹을     the one that will eat / to eat
  가다  → 갈       the one that will go / to go
  하다  → 할       the one that will do / to do

  내일 갈 곳이에요.                  It's the place I'm going to tomorrow.
  먹을 것이 없어요.                  There's nothing to eat.

DESCRIPTIVE VERBS (ADJECTIVES) — (으)ㄴ for present state:
  크다  → 큰       big
  작다  → 작은     small
  좋다  → 좋은     good
  많다  → 많은     many
  맛있다 → 맛있는  delicious (treated as action verb)

  큰 가방이 있어요?                  Do you have a big bag?
  좋은 식당을 알아요?               Do you know a good restaurant?`,
            target: `한국어 형용사절은 명사를 수식합니다 — 영어의 관계절과 동일합니다 ('내가 읽은 책', '온 사람'). 수식하는 동사나 형용사는 특수 어미를 사용하여 수식하는 명사 바로 앞에 옵니다.

어미:

현재형 수식:
  동작 동사 → 는 + 명사: 먹는 사람 (먹고 있는/먹는 사람)
  서술 동사 → (으)ㄴ + 명사: 큰 사람, 작은 가방
  하다 동사 → 하는 + 명사: 공부하는 학생

과거형 수식 → (으)ㄴ + 명사:
  먹은 음식,  간 사람

미래/계획 수식 → (으)ㄹ + 명사:
  먹을 음식,  갈 곳

현재 수식어 형성 (동작 동사) — 는:
  먹다 → 먹는,  가다 → 가는,  공부하다 → 공부하는
  지금 먹는 음식이에요. / 한국어를 가르치는 선생님이에요.

과거 수식어 형성 — (으)ㄴ:
  먹다 → 먹은,  가다 → 간,  오다 → 온
  어제 먹은 음식이 맛있었어요. / 지난주에 만난 사람이에요.

미래 수식어 형성 — (으)ㄹ:
  먹을 것이 없어요. / 내일 갈 곳이에요.

서술 동사 (형용사) — 현재 상태에는 (으)ㄴ:
  크다 → 큰,  작다 → 작은,  좋다 → 좋은,  많다 → 많은`
        },
        examples: [
            { native: "지금 먹는 음식이 뭐예요?", romanized: "Jigeum meongneun eumsigi mwoyeyo?", translation: "What is the food you're eating now? (present — 는)" },
            { native: "어제 만난 사람이에요.", romanized: "Eoje mannan saramieyo.", translation: "It's the person I met yesterday. (past — ㄴ)" },
            { native: "내일 갈 곳이 있어요?", romanized: "Naeil gal gosi isseoyo?", translation: "Is there somewhere you're going tomorrow? (future — ㄹ)" },
            { native: "한국어를 가르치는 선생님이에요.", romanized: "Hangugeo reul gareuchineun seonsaengnimieo yo.", translation: "She's a teacher who teaches Korean." },
            { native: "먹을 것이 없어요.", romanized: "Meogeul geosi eopseoyo.", translation: "There's nothing to eat." },
            { native: "좋은 식당을 알아요?", romanized: "Joeun sikdangeul arayo?", translation: "Do you know a good restaurant? (descriptive verb — 좋은)" },
        ]
    },
    {
        id: "ko-g-a2-7",
        level: "A2",
        title: "~아/어 보다 — Try Doing / Have Experience of",
        explanation: {
            native: `~아/어 보다 expresses trying an action or having the experience of doing something. It attaches to the verb stem using the same vowel harmony rules as ~아요/어요.

FORMATION
Apply vowel harmony to get 아/어, then add 보다:
  Last vowel ㅏ or ㅗ → 아 보다
  All other vowels → 어 보다
  하다 verbs → 해 보다

  먹다   → 먹어 보다        try eating / eat (and see)
  가다   → 가 보다          try going / go (and see)
  입다   → 입어 보다        try wearing / try on
  하다   → 해 보다          try doing
  마시다 → 마셔 보다        try drinking

POLITE PRESENT — 아/어 봐요 or 아/어 보세요 (suggestion):
  이거 먹어 봐요.               Try eating this. / Try this food.
  한번 해 봐요.                 Give it a try.
  이 옷 입어 보세요.            Please try on this clothes.

PAST — 아/어 봤어요 (I tried / I've experienced):
  김치를 먹어 봤어요.           I've tried kimchi. / I tried kimchi.
  서울에 가 봤어요.             I've been to Seoul. / I tried going to Seoul.
  혼자 해 봤어요.               I tried doing it alone.

QUESTION — have you ever tried?:
  비빔밥을 먹어 봤어요?         Have you ever tried bibimbap?
  한국어로 말해 봤어요?         Have you ever tried speaking Korean?

NEGATIVE — 아/어 보지 않다 / 못 ~아/어 보다:
  아직 못 먹어 봤어요.          I haven't tried eating it yet.
  한번도 가 보지 않았어요.      I've never tried going even once.

~아/어 보다 vs ~아/어 봤어요 vs ~(으)ㄴ 적이 있어요:
  먹어 보세요.      Try eating (it). (suggestion — present/future)
  먹어 봤어요.      I tried eating it. (completed attempt)
  먹은 적이 있어요. I have eaten it before. (pure experience — see ko-g-a2-10)

The key difference: 먹어 봤어요 emphasises the attempt/trying; 먹은 적이 있어요 emphasises the experience/fact.`,
            target: `~아/어 보다는 동작을 시도하거나 무언가를 해본 경험을 표현합니다. ~아요/어요와 같은 모음 조화 규칙을 사용하여 동사 어간에 붙습니다.

형성:
모음 조화를 적용하여 아/어를 구한 다음 보다를 붙입니다:
  마지막 모음이 ㅏ 또는 ㅗ → 아 보다
  다른 모음들 → 어 보다
  하다 동사 → 해 보다

  먹다 → 먹어 보다,  가다 → 가 보다,  입다 → 입어 보다,  하다 → 해 보다

공손한 현재형 — 아/어 봐요 또는 아/어 보세요 (제안):
  이거 먹어 봐요. / 한번 해 봐요. / 이 옷 입어 보세요.

과거형 — 아/어 봤어요 (시도했음/경험했음):
  김치를 먹어 봤어요. / 서울에 가 봤어요.

질문형:
  비빔밥을 먹어 봤어요? / 한국어로 말해 봤어요?

~아/어 보다 vs ~(으)ㄴ 적이 있어요:
  먹어 봤어요. (시도/경험을 강조)
  먹은 적이 있어요. (순수한 경험/사실 — ko-g-a2-10 참조)`
        },
        examples: [
            { native: "이거 먹어 봐요!", romanized: "Igeo meogeo bwayo!", translation: "Try this food! (suggestion)" },
            { native: "김치를 먹어 봤어요?", romanized: "Gimchireul meogeo bwasseoyo?", translation: "Have you ever tried kimchi?" },
            { native: "한번 해 봤어요.", romanized: "Hanbeon hae bwasseoyo.", translation: "I gave it a try." },
            { native: "이 옷 입어 보세요.", romanized: "I ot ibeo boseyo.", translation: "Please try on these clothes." },
            { native: "아직 못 먹어 봤어요.", romanized: "Ajik mot meogeo bwasseoyo.", translation: "I haven't tried eating it yet." },
            { native: "서울에 가 봤어요?", romanized: "Seoure ga bwasseoyo?", translation: "Have you been to Seoul? (tried going)" },
        ]
    },
    {
        id: "ko-g-a2-8",
        level: "A2",
        title: "~(으)ㄹ 때 — When / At the Time Of",
        explanation: {
            native: `~(으)ㄹ 때 expresses 'when' — the time at which something happens or happened. It creates a time clause that sets the context for the main sentence.

FORMATION
  Verb stem ends in vowel or ㄹ → ㄹ 때
  Verb stem ends in consonant   → 을 때

  가다    → 갈 때          when going / when you go
  오다    → 올 때          when coming / when you come
  먹다    → 먹을 때        when eating / when you eat
  자다    → 잘 때          when sleeping / when you sleep
  공부하다 → 공부할 때     when studying
  힘들다  → 힘들 때        when it's hard / when times are tough

FOR PAST SITUATIONS — use past modifier (으)ㄴ + 때:
  어렸을 때                when I was young
  학생이었을 때            when I was a student
  한국에 살았을 때         when I lived in Korea

Note: for past situations, use 았/었을 때 (past + 을 때):
  어리다 → 어렸을 때,  살다 → 살았을 때,  가다 → 갔을 때

USING ~(으)ㄹ 때:

Present/future situation → main verb determines tense:
  배가 고플 때, 편의점에 가요.     When I'm hungry, I go to the convenience store.
  비가 올 때, 우산을 써요.         When it rains, I use an umbrella.
  심심할 때, 뭐 해요?              What do you do when you're bored?

Past situation → 았/었을 때:
  어렸을 때, 축구를 좋아했어요.    When I was young, I liked football.
  학생이었을 때, 열심히 공부했어요. When I was a student, I studied hard.

Time of action → 을 때 as 'while':
  수업을 들을 때, 필기해요.        I take notes when I attend class.
  한국에 있을 때, 많이 먹었어요.   I ate a lot when I was in Korea.

~(으)ㄹ 때 vs ~(으)면:
  배고프면 먹어요.      If you're hungry, eat. (condition — may or may not happen)
  배고플 때 먹어요.     When I'm hungry, I eat. (describes a recurring situation)`,
            target: `~(으)ㄹ 때는 '~할 때'를 표현합니다 — 무언가가 일어나거나 일어난 시간. 본문의 문맥을 설정하는 시간절을 만듭니다.

형성:
  어간이 모음이나 ㄹ로 끝나면 → ㄹ 때
  어간이 자음으로 끝나면 → 을 때

  가다 → 갈 때,  먹다 → 먹을 때,  자다 → 잘 때,  공부하다 → 공부할 때

과거 상황에는 — 과거 수식어 (으)ㄴ + 때 사용:
  어렸을 때,  학생이었을 때,  한국에 살았을 때

~(으)ㄹ 때 사용:

현재/미래 상황:
  배가 고플 때, 편의점에 가요.
  비가 올 때, 우산을 써요.
  심심할 때, 뭐 해요?

과거 상황 → 았/었을 때:
  어렸을 때, 축구를 좋아했어요.

~(으)ㄹ 때 vs ~(으)면:
  배고프면 먹어요. (조건 — 일어날 수도 있고 아닐 수도 있음)
  배고플 때 먹어요. (반복적인 상황을 설명)`
        },
        examples: [
            { native: "배가 고플 때, 편의점에 가요.", romanized: "Baega gopeuol ttae, pyeonuijeome gayo.", translation: "When I'm hungry, I go to the convenience store." },
            { native: "비가 올 때, 우산을 써요.", romanized: "Biga ol ttae, usaneul sseoyo.", translation: "When it rains, I use an umbrella." },
            { native: "어렸을 때, 축구를 좋아했어요.", romanized: "Eoryeosseul ttae, chukgureul joahasseoyo.", translation: "When I was young, I liked football." },
            { native: "심심할 때 뭐 해요?", romanized: "Simsimhal ttae mwo haeyo?", translation: "What do you do when you're bored?" },
            { native: "한국에 있을 때, 많이 먹었어요.", romanized: "Hanguge isseul ttae, mani meogeosseoyo.", translation: "I ate a lot when I was in Korea." },
            { native: "힘들 때 친구한테 전화해요.", romanized: "Himdeul ttae chinguhantte jeonhwahaeyo.", translation: "When things are tough, I call my friend." },
        ]
    },
    {
        id: "ko-g-a2-9",
        level: "A2",
        title: "~지 않다 — Long Form Negation",
        explanation: {
            native: `At A1 you learned 안 (short negation) and 못 (inability). Korean also has long form negation ~지 않다, which is slightly more formal and more flexible.

FORMATION
Verb/adjective stem + 지 않다
  먹다    → 먹지 않아요       I don't eat
  가다    → 가지 않아요       I don't go
  좋다    → 좋지 않아요       It's not good
  크다    → 크지 않아요       It's not big
  공부하다 → 공부하지 않아요  I don't study
  피곤하다 → 피곤하지 않아요  I'm not tired

SHORT vs LONG NEGATION
  안 먹어요. = 먹지 않아요.    I don't eat.
  안 가요. = 가지 않아요.      I don't go.
  안 좋아요. = 좋지 않아요.    It's not good.

Both mean exactly the same thing. The differences are:
  안 — casual, everyday speech (the 안 goes BEFORE the verb)
  ~지 않다 — slightly more formal, emphasis, written Korean, longer sentences

WHY USE ~지 않다?
1. In longer sentences where 안 would be awkward:
  이 문제는 그렇게 쉽지 않아요.    This problem is not that easy.
  오늘은 별로 배고프지 않아요.      I'm not very hungry today.

2. For emphasis:
  절대로 하지 않을 거예요.          I absolutely will not do it.

3. With certain compound verbs:
  좋아하지 않아요.   I don't like it.  (not: 안 좋아해요 — less common)
  싫어하지 않아요.   I don't hate it.

PAST LONG NEGATION: 지 않았어요
  먹지 않았어요.     I didn't eat.
  가지 않았어요.     I didn't go.
  좋지 않았어요.     It wasn't good.

FUTURE LONG NEGATION: 지 않을 거예요
  가지 않을 거예요.  I won't go.
  하지 않을 거예요.  I won't do it.

~지 않다 vs ~지 못하다 (long form of 못):
  가지 않아요.   I don't go. (choice — won't)
  가지 못해요.   I can't go. (inability — can't)`,
            target: `A1에서 안 (짧은 부정)과 못 (불능)을 배웠습니다. 한국어에는 ~지 않다라는 긴 형식의 부정도 있는데, 좀 더 격식체이고 유연합니다.

형성:
동사/형용사 어간 + 지 않다
  먹다 → 먹지 않아요,  가다 → 가지 않아요,  좋다 → 좋지 않아요

짧은 부정 vs 긴 부정:
  안 먹어요. = 먹지 않아요.
  안 가요. = 가지 않아요.

둘 다 정확히 같은 의미입니다. 차이점:
  안 — 일상적인 말 (안은 동사 앞에 위치)
  ~지 않다 — 좀 더 격식체, 강조, 문어체, 긴 문장

~지 않다를 사용하는 이유:
1. 긴 문장에서: 이 문제는 그렇게 쉽지 않아요.
2. 강조를 위해: 절대로 하지 않을 거예요.
3. 특정 복합 동사와 함께: 좋아하지 않아요.

과거 긴 부정: 지 않았어요
  먹지 않았어요. / 가지 않았어요.

미래 긴 부정: 지 않을 거예요
  가지 않을 거예요. / 하지 않을 거예요.`
        },
        examples: [
            { native: "오늘은 별로 배고프지 않아요.", romanized: "Oneureun byeollo baegopeuji anayo.", translation: "I'm not very hungry today. (long form — natural in this context)" },
            { native: "이 문제는 그렇게 쉽지 않아요.", romanized: "I munjeneun geureoke swiuopji anayo.", translation: "This problem is not that easy." },
            { native: "어제는 가지 않았어요.", romanized: "Eojeneun gaji anasseoyo.", translation: "I didn't go yesterday." },
            { native: "절대로 하지 않을 거예요.", romanized: "Jeoldaero haji aneul geoyeyo.", translation: "I absolutely will not do it." },
            { native: "그 음식을 좋아하지 않아요.", romanized: "Geu eumsig eul joahaji anayo.", translation: "I don't like that food." },
            { native: "내일은 가지 않을 거예요.", romanized: "Naeil eun gaji aneul geoyeyo.", translation: "I won't go tomorrow." },
        ]
    },
    {
        id: "ko-g-a2-10",
        level: "A2",
        title: "~(으)ㄴ 적이 있다/없다 — Past Experience",
        explanation: {
            native: `~(으)ㄴ 적이 있다/없다 expresses whether you have or have never had a particular experience. It refers to life experience in general, not a specific past event.

FORMATION
Verb past modifier (으)ㄴ + 적이 있어요/없어요
  먹다    → 먹은 적이 있어요      I have eaten (it before)
  가다    → 간 적이 있어요        I have been (there before)
  보다    → 본 적이 있어요        I have seen (it before)
  만나다  → 만난 적이 있어요      I have met (them before)
  하다    → 한 적이 있어요        I have done (it before)

NEGATIVE — have never done:
  먹은 적이 없어요.      I have never eaten it.
  간 적이 없어요.        I have never been there.

QUESTION — have you ever done?:
  한국에 간 적이 있어요?         Have you ever been to Korea?
  → 네, 있어요. / 아니요, 없어요.
  김치를 먹은 적이 있어요?       Have you ever eaten kimchi?

DISTINGUISHING EXPERIENCE FROM SIMPLE PAST:
  어제 김치를 먹었어요.          I ate kimchi yesterday. (specific event)
  김치를 먹은 적이 있어요.       I have eaten kimchi before. (life experience)

WITH FREQUENCY:
  한 번 (한번)     once:       한 번 간 적이 있어요.  I've been once.
  여러 번          many times: 여러 번 먹은 적이 있어요. I've eaten it many times.
  한 번도 없어요   not even once: 한 번도 간 적이 없어요. I've never been even once.

~아/어 봤어요 vs ~(으)ㄴ 적이 있어요:
  먹어 봤어요.           I tried eating it. (emphasises the attempt/trying)
  먹은 적이 있어요.      I have eaten it before. (pure experience — fact)
  Both are often interchangeable in everyday speech, but:
  먹어 봤어요 → I tried it (implies seeking an experience)
  먹은 적이 있어요 → I have had that experience (neutral statement)`,
            target: `~(으)ㄴ 적이 있다/없다는 특정 경험이 있는지 없는지를 표현합니다. 특정 과거 사건이 아닌 일반적인 인생 경험을 가리킵니다.

형성:
동사 과거 수식어 (으)ㄴ + 적이 있어요/없어요
  먹다 → 먹은 적이 있어요,  가다 → 간 적이 있어요,  보다 → 본 적이 있어요

부정형:
  먹은 적이 없어요. / 간 적이 없어요.

질문형:
  한국에 간 적이 있어요? → 네, 있어요. / 아니요, 없어요.

경험과 단순 과거의 구별:
  어제 김치를 먹었어요. (특정 사건)
  김치를 먹은 적이 있어요. (인생 경험)

빈도와 함께:
  한 번 간 적이 있어요. / 여러 번 먹은 적이 있어요.
  한 번도 간 적이 없어요.

~아/어 봤어요 vs ~(으)ㄴ 적이 있어요:
  먹어 봤어요. (시도를 강조)
  먹은 적이 있어요. (순수한 경험 — 사실)`
        },
        examples: [
            { native: "한국에 간 적이 있어요?", romanized: "Hanguge gan jeogi isseoyo?", translation: "Have you ever been to Korea?" },
            { native: "네, 한 번 간 적이 있어요.", romanized: "Ne, han beon gan jeogi isseoyo.", translation: "Yes, I've been once." },
            { native: "김치를 먹은 적이 없어요.", romanized: "Gimchireul meogeun jeogi eopseoyo.", translation: "I've never eaten kimchi." },
            { native: "이 영화를 본 적이 있어요?", romanized: "I yeonghwareul bon jeogi isseoyo?", translation: "Have you ever seen this film?" },
            { native: "스카이다이빙을 한 적이 없어요.", romanized: "Seukaidaibingeul han jeogi eopseoyo.", translation: "I've never gone skydiving." },
            { native: "여러 번 먹은 적이 있어요.", romanized: "Yeoleo beon meogeun jeogi isseoyo.", translation: "I've eaten it many times." },
        ]
    },
    {
        id: "ko-g-a2-11",
        level: "A2",
        title: "~(으)러 가다/오다 — Going/Coming to Do",
        explanation: {
            native: `~(으)러 가다/오다 expresses the purpose of going or coming somewhere — 'go/come in order to do something'. It is one of the most natural ways to express purpose of movement in Korean.

FORMATION
  Verb stem ends in vowel or ㄹ → 러 가다/오다
  Verb stem ends in consonant   → 으러 가다/오다

  먹다    → 먹으러 가다        go to eat
  사다    → 사러 가다          go to buy
  보다    → 보러 가다          go to see/watch
  공부하다 → 공부하러 가다     go to study
  만나다  → 만나러 가다        go to meet
  찾다    → 찾으러 오다        come to find/pick up

WITH VERBS OF MOTION:
  가다 (go):   어디에 가요? — 밥 먹으러 가요.    Where are you going? — I'm going to eat.
  오다 (come): 왜 왔어요? — 책 사러 왔어요.     Why did you come? — I came to buy a book.
  다니다 (attend/go regularly): 운동하러 다녀요. I go (regularly) to exercise.

COMMON EXAMPLES:
  쇼핑하러 명동에 갔어요.              I went to Myeongdong to go shopping.
  친구를 만나러 카페에 가요.           I'm going to the café to meet a friend.
  한국어를 배우러 한국에 왔어요.       I came to Korea to learn Korean.
  영화 보러 같이 갈까요?               Shall we go together to watch a movie?
  무엇을 사러 왔어요?                  What did you come to buy?

~(으)러 vs ~(으)려고:
  Both express purpose, but:
  ~(으)러 — only with verbs of motion (가다, 오다, 다니다)
  ~(으)려고 — used with any verb (more general purpose)

  밥 먹으러 가요.      I'm going to eat. (으러 — with 가다)
  밥 먹으려고 해요.    I intend to eat. (으려고 — general intention, A2+/B1)`,
            target: `~(으)러 가다/오다는 어딘가에 가거나 오는 목적을 표현합니다 — '~하기 위해 가다/오다'. 한국어에서 이동의 목적을 표현하는 가장 자연스러운 방법 중 하나입니다.

형성:
  어간이 모음이나 ㄹ로 끝나면 → 러 가다/오다
  어간이 자음으로 끝나면 → 으러 가다/오다

  먹다 → 먹으러 가다,  사다 → 사러 가다,  보다 → 보러 가다
  공부하다 → 공부하러 가다,  만나다 → 만나러 가다

이동 동사와 함께:
  가다 (가다): 밥 먹으러 가요.
  오다 (오다): 책 사러 왔어요.
  다니다 (정기적으로 가다): 운동하러 다녀요.

일반적인 예시:
  쇼핑하러 명동에 갔어요.
  친구를 만나러 카페에 가요.
  한국어를 배우러 한국에 왔어요.

~(으)러 vs ~(으)려고:
  ~(으)러 — 이동 동사하고만 (가다, 오다, 다니다)
  ~(으)려고 — 모든 동사와 (더 일반적인 목적)`
        },
        examples: [
            { native: "밥 먹으러 가요.", romanized: "Bap meogeuro gayo.", translation: "I'm going to eat. (purpose of going)" },
            { native: "책 사러 서점에 갔어요.", romanized: "Chaek sareo seojome gasseoyo.", translation: "I went to the bookstore to buy a book." },
            { native: "한국어를 배우러 한국에 왔어요.", romanized: "Hangugeo reul baeureo hanguge wasseoyo.", translation: "I came to Korea to learn Korean." },
            { native: "영화 보러 같이 갈까요?", romanized: "Yeonghwa boreo gachi galkkayo?", translation: "Shall we go together to watch a movie?" },
            { native: "친구를 만나러 카페에 가요.", romanized: "Chingureul mannaro kapee gayo.", translation: "I'm going to the café to meet a friend." },
            { native: "무엇을 사러 왔어요?", romanized: "Mueoseul sareo wasseoyo?", translation: "What did you come to buy?" },
        ]
    },
    {
        id: "ko-g-a2-12",
        level: "A2",
        title: "~기 때문에 — Because (Formal)",
        explanation: {
            native: `~기 때문에 expresses formal 'because' or 'due to'. It is more formal and emphatic than ~아서/어서, and can be used with both verbs and nouns.

FORMATION WITH VERBS
Verb stem + 기 때문에
  비가 오기 때문에           because it's raining
  바쁘기 때문에              because (I'm) busy
  공부하기 때문에            because (I) study
  시간이 없기 때문에         because there's no time

FORMATION WITH NOUNS
Noun + 때문에 (no 기 needed with nouns):
  비 때문에                  because of rain
  교통 때문에               because of traffic
  일 때문에                  because of work
  스트레스 때문에           because of stress

USING ~기 때문에:
  비가 오기 때문에 못 갔어요.       Because it was raining, I couldn't go.
  바쁘기 때문에 연락을 못 했어요.   Because I was busy, I couldn't contact you.
  한국어를 배우기 때문에 한국에 왔어요. Because I'm learning Korean, I came to Korea.

USING NOUN + 때문에:
  비 때문에 못 갔어요.              Because of the rain, I couldn't go.
  일 때문에 늦었어요.               I was late because of work.
  교통 때문에 시간이 걸렸어요.     It took time because of traffic.

NEGATIVE REASON — 때문이 아니라 (not because of):
  날씨 때문이 아니라 피곤해서 집에 있어요.
  I'm staying home not because of the weather but because I'm tired.

~기 때문에 vs ~아서/어서:
  ~아서/어서 — casual, everyday speech; cannot be followed by imperative or propositive
  ~기 때문에 — more formal and emphatic; can be used in any sentence type
  비가 와서 집에 있어요.           (casual — everyday)
  비가 오기 때문에 집에 있어요.    (formal — written, formal speech)`,
            target: `~기 때문에는 격식체 '때문에' 또는 '~로 인해'를 표현합니다. ~아서/어서보다 더 격식적이고 강조적이며, 동사와 명사 모두에 사용할 수 있습니다.

동사와의 형성:
동사 어간 + 기 때문에
  비가 오기 때문에,  바쁘기 때문에,  시간이 없기 때문에

명사와의 형성:
명사 + 때문에 (명사에는 기가 필요 없음):
  비 때문에,  교통 때문에,  일 때문에

~기 때문에 사용:
  비가 오기 때문에 못 갔어요.
  바쁘기 때문에 연락을 못 했어요.

명사 + 때문에 사용:
  비 때문에 못 갔어요. / 일 때문에 늦었어요.

~기 때문에 vs ~아서/어서:
  ~아서/어서 — 일상적인 말; 명령형이나 청유형 뒤에 올 수 없음
  ~기 때문에 — 더 격식적이고 강조적; 모든 문장 유형에 사용 가능`
        },
        examples: [
            { native: "비가 오기 때문에 못 갔어요.", romanized: "Biga oagi ttaemuner mot gasseoyo.", translation: "Because it was raining, I couldn't go." },
            { native: "바쁘기 때문에 연락을 못 했어요.", romanized: "Bappeugi ttaemune yeollag eul mot haesseoyo.", translation: "Because I was busy, I couldn't contact you." },
            { native: "일 때문에 늦었어요.", romanized: "Il ttaemune neujeosseoyo.", translation: "I was late because of work. (noun + 때문에)" },
            { native: "교통 때문에 시간이 걸렸어요.", romanized: "Gyotong ttaemune sigani geollyeosseoyo.", translation: "It took time because of traffic." },
            { native: "한국어를 배우기 때문에 한국에 왔어요.", romanized: "Hangugeo reul baeugi ttaemune hanguge wasseoyo.", translation: "Because I'm learning Korean, I came to Korea." },
            { native: "스트레스 때문에 잠을 못 자요.", romanized: "Seuteureseu ttaemune jameul mot jayo.", translation: "I can't sleep because of stress." },
        ]
    },
    {
        id: "ko-g-a2-13",
        level: "A2",
        title: "~는데 / ~(으)ㄴ데 — Background Context and Contrast",
        explanation: {
            native: `~는데 / ~(으)ㄴ데 is one of the most frequently used connectors in Korean. It provides background context, sets up contrast, or introduces information before making a request or continuing a thought.

FORMATION
Action verbs (present) → 는데:
  가다 → 가는데       먹다 → 먹는데       하다 → 하는데

Descriptive verbs (adjectives) → (으)ㄴ데:
  좋다 → 좋은데       크다 → 큰데         많다 → 많은데

Past → 았/었는데:
  갔는데              먹었는데            했는데

With nouns + 인데:
  학생인데            한국 사람인데

FOUR MAIN USES

1. BACKGROUND CONTEXT — 'the thing is...' / providing context before main point:
  지금 바쁜데, 나중에 전화할게요.
  I'm busy right now, so I'll call you later.

  한국어를 배우는데, 어렵네요.
  I'm learning Korean (and) it's difficult.

2. CONTRAST — 'but' / 'however':
  비싼데 맛있어요.                It's expensive but delicious.
  알고 싶은데 모르겠어요.        I want to know but I don't.
  갔는데 없었어요.               I went but (he) wasn't there.

3. SOFT REQUEST / INTRODUCTION — trailing off to invite response:
  배가 고픈데...                 I'm hungry... (implying: what shall we do? / can we eat?)
  지금 바쁜데요...               I'm a bit busy right now... (soft refusal/hesitation)
  도움이 필요한데요.             I need some help... (soft request)

4. SURPRISED DISCOVERY — 'it turns out that':
  생각보다 맛있는데요!           It's more delicious than I expected!
  생각보다 어렵지 않은데요.      It's not as hard as I thought.

~는데 vs ~지만:
  Both express contrast, but:
  ~지만 — straightforward 'but' (A1 lesson ko-g-a1-21)
  ~는데 — softer, also provides context or background; more natural in speech
  비싸지만 사요.    It's expensive but I'll buy it. (direct contrast)
  비싼데 사요.      It's expensive but I'll buy it. (softer, more contextual)`,
            target: `~는데 / ~(으)ㄴ데는 한국어에서 가장 자주 사용되는 연결어 중 하나입니다. 배경 맥락을 제공하거나, 대조를 설정하거나, 요청을 하거나 생각을 이어가기 전에 정보를 소개합니다.

형성:
동작 동사 (현재) → 는데:
  가다 → 가는데,  먹다 → 먹는데,  하다 → 하는데

서술 동사 (형용사) → (으)ㄴ데:
  좋다 → 좋은데,  크다 → 큰데,  많다 → 많은데

과거 → 았/었는데:
  갔는데,  먹었는데,  했는데

명사 + 인데:
  학생인데,  한국 사람인데

네 가지 주요 용도:
1. 배경 맥락:
  지금 바쁜데, 나중에 전화할게요.
  한국어를 배우는데, 어렵네요.

2. 대조:
  비싼데 맛있어요. / 갔는데 없었어요.

3. 부드러운 요청/소개 (미완성으로 끝남):
  배가 고픈데... / 도움이 필요한데요.

4. 놀라운 발견:
  생각보다 맛있는데요! / 생각보다 어렵지 않은데요.`
        },
        examples: [
            { native: "지금 바쁜데, 나중에 전화할게요.", romanized: "Jigeum bappeunde, najunge jeonhwahalkkeyo.", translation: "I'm busy right now, so I'll call you later. (background context)" },
            { native: "비싼데 정말 맛있어요.", romanized: "Bissande jeongmal masisseoyo.", translation: "It's expensive but really delicious. (contrast)" },
            { native: "갔는데 없었어요.", romanized: "Ganneunde eopseosseoyo.", translation: "I went but (he) wasn't there." },
            { native: "배가 고픈데요...", romanized: "Baega goppeundaeyo...", translation: "I'm hungry... (soft request/hint)" },
            { native: "생각보다 맛있는데요!", romanized: "Saenggakboda masinnneundaeyo!", translation: "It's more delicious than I expected! (surprised discovery)" },
            { native: "한국어를 배우는데 어렵네요.", romanized: "Hangugeo reul baeuneunde eooryeopne yo.", translation: "I'm learning Korean and it's difficult. (background)" },
        ]
    },
    {
        id: "ko-g-a2-14",
        level: "A2",
        title: "~다고 하다 — Indirect Speech (Reporting)",
        explanation: {
            native: `~다고 하다 is used to report what someone said — indirect speech. It is one of the most essential patterns in Korean conversation.

FORMATION — STATEMENTS
Attach 다고 하다 / 다고 했어요 to the plain form:

Present verbs + 다고 해요/했어요:
  먹는다고 해요       He says (that) he eats / is eating
  간다고 했어요       He said (that) he's going

Past verbs + 다고 해요/했어요:
  먹었다고 해요       He says (that) he ate
  갔다고 했어요       He said (that) he went

Adjectives + 다고 해요:
  맛있다고 해요       He says (that) it's delicious
  바쁘다고 했어요     He said (that) he was busy

Nouns + (이)라고 해요:
  학생이라고 해요     He says (that) he's a student
  의사라고 했어요     He said (that) he was a doctor

SHORTENED FORMS — very common in speech:
  가다고 → 간다고     (informal shortened form of 가다 + 다고)
  먹는다고 → 먹는다고

ASKING ABOUT HEARSAY — ~다고 해요? / ~다고 하던데요:
  맛있다고 해요?      (I heard) they say it's delicious?
  비싸다고 하던데요.  I heard it was expensive.

REPORTING QUESTIONS — ~냐고 하다 / ~(으)냐고 물어보다:
  어디 가냐고 했어요.           He asked (me) where I was going.
  뭐 먹냐고 물어봤어요.         She asked what I was eating.

REPORTING COMMANDS — ~(으)라고 하다:
  빨리 오라고 했어요.           He told (me) to come quickly.
  공부하라고 했어요.            She told (me) to study.

REPORTING SUGGESTIONS — ~자고 하다:
  같이 가자고 했어요.           She suggested (that we) go together.
  밥 먹자고 했어요.             He said let's eat.`,
            target: `~다고 하다는 누군가가 말한 것을 보고하는 데 사용됩니다 — 간접 화법. 한국어 대화에서 가장 필수적인 패턴 중 하나입니다.

형성 — 서술문:
평서문에 다고 하다/다고 했어요를 붙임:

현재 동사 + 다고 해요/했어요:
  먹는다고 해요 / 간다고 했어요

과거 동사 + 다고 해요/했어요:
  먹었다고 해요 / 갔다고 했어요

형용사 + 다고 해요:
  맛있다고 해요 / 바쁘다고 했어요

명사 + (이)라고 해요:
  학생이라고 해요 / 의사라고 했어요

간접 의문문 — ~냐고 하다/물어보다:
  어디 가냐고 했어요. / 뭐 먹냐고 물어봤어요.

간접 명령 — ~(으)라고 하다:
  빨리 오라고 했어요. / 공부하라고 했어요.

간접 제안 — ~자고 하다:
  같이 가자고 했어요. / 밥 먹자고 했어요.`
        },
        examples: [
            { native: "친구가 바쁘다고 했어요.", romanized: "Chinguga bappeudago haesseoyo.", translation: "My friend said (that) he was busy." },
            { native: "선생님이 내일 시험이 있다고 했어요.", romanized: "Seonsaengnimi naeil siheomi itdago haesseoyo.", translation: "The teacher said there is a test tomorrow." },
            { native: "그 식당이 맛있다고 해요.", romanized: "Geu sikdangi masitdago haeyo.", translation: "They say that restaurant is delicious." },
            { native: "빨리 오라고 했어요.", romanized: "Ppalli orago haesseoyo.", translation: "He told me to come quickly." },
            { native: "같이 가자고 했어요.", romanized: "Gachi gajago haesseoyo.", translation: "She suggested we go together." },
            { native: "어디 가냐고 물어봤어요.", romanized: "Eodi ganago mureobwasseoyo.", translation: "He asked where I was going." },
        ]
    },
    {
        id: "ko-g-a2-15",
        level: "A2",
        title: "~아/어 주다 — Do Something for Someone",
        explanation: {
            native: `~아/어 주다 expresses doing something for someone else's benefit. It is essential for making polite requests and for describing helpful actions.

FORMATION
Verb stem + 아/어 주다 (same vowel harmony as ~아요/어요)
  Last vowel ㅏ or ㅗ → 아 주다
  All other vowels → 어 주다
  하다 verbs → 해 주다

  사다    → 사 주다           buy (for someone)
  가르치다 → 가르쳐 주다      teach (for someone)
  도와주다 → 도와 주다        help (for someone) — note: 돕다 is irregular
  만들다  → 만들어 주다       make (for someone)
  설명하다 → 설명해 주다      explain (for someone)
  써 주다 → 써 주다           write (for someone)

POLITE REQUEST — 아/어 주세요:
  가르쳐 주세요.              Please teach me.
  도와주세요.                 Please help me.
  설명해 주세요.              Please explain.
  천천히 말해 주세요.         Please speak slowly.
  여기에 써 주세요.           Please write it here.

SOFTER REQUEST — 아/어 줄 수 있어요? / 아/어 줄래요?:
  도와줄 수 있어요?            Can you help me?
  가르쳐 줄 수 있어요?         Can you teach me?
  잠깐 기다려 줄래요?          Can you wait a moment?

DESCRIBING AN ACTION DONE FOR SOMEONE:
  친구가 숙제를 도와줬어요.   My friend helped me with my homework.
  엄마가 밥을 만들어 줬어요.  My mom made food for me.
  선생님이 설명해 줬어요.     The teacher explained it for me.

~아/어 주다 vs ~아/어 드리다:
  주다 — giving/doing for peers or younger people
  드리다 — giving/doing for older or respected people (honorific form)
  도와주세요. (casual/neutral)
  도와드릴까요? (to someone older — shall I help you?)`,
            target: `~아/어 주다는 다른 사람의 이익을 위해 무언가를 하는 것을 표현합니다. 공손한 요청과 도움이 되는 행동을 설명하는 데 필수적입니다.

형성:
동사 어간 + 아/어 주다 (~아요/어요와 같은 모음 조화)
  마지막 모음이 ㅏ 또는 ㅗ → 아 주다
  다른 모음들 → 어 주다
  하다 동사 → 해 주다

  사다 → 사 주다,  가르치다 → 가르쳐 주다,  설명하다 → 설명해 주다

공손한 요청 — 아/어 주세요:
  가르쳐 주세요. / 도와주세요. / 설명해 주세요.

부드러운 요청 — 아/어 줄 수 있어요? / 아/어 줄래요?:
  도와줄 수 있어요? / 가르쳐 줄 수 있어요?

누군가를 위해 한 행동 설명:
  친구가 숙제를 도와줬어요. / 엄마가 밥을 만들어 줬어요.

~아/어 주다 vs ~아/어 드리다:
  주다 — 동년배나 어린 사람에게 주다/해 주다
  드리다 — 나이 많은 분이나 존경받는 분께 (경어형)`
        },
        examples: [
            { native: "도와주세요!", romanized: "Dowajuseyo!", translation: "Please help me!" },
            { native: "천천히 말해 주세요.", romanized: "Cheoncheonhi malhae juseyo.", translation: "Please speak slowly." },
            { native: "가르쳐 줄 수 있어요?", romanized: "Gareucho jul su isseoyo?", translation: "Can you teach me?" },
            { native: "친구가 숙제를 도와줬어요.", romanized: "Chinguga sukjereul dowajwosseoyo.", translation: "My friend helped me with my homework." },
            { native: "엄마가 밥을 만들어 줬어요.", romanized: "Eommaga babeul mandeureo jwosseoyo.", translation: "My mom made food for me." },
            { native: "잠깐 기다려 줄래요?", romanized: "Jamkkan gidaryo julraeyo?", translation: "Can you wait a moment?" },
        ]
    },
    {
        id: "ko-g-a2-16",
        level: "A2",
        title: "비교 — Comparisons: 더, 덜, 가장/제일, 보다",
        explanation: {
            native: `Korean comparisons use 보다 (than), 더 (more), 덜 (less), and 가장/제일 (most/best) to compare people, things, and qualities.

보다 — THAN (marks the standard of comparison)
  오늘이 어제보다 더 더워요.          Today is hotter than yesterday.
  이게 저것보다 덜 비싸요.            This is less expensive than that.
  서울이 부산보다 커요.               Seoul is bigger than Busan.

더 — MORE (adds emphasis to the degree)
  더 크다         bigger / more
  더 맛있다       more delicious
  조금 더 주세요.  Give me a little more.

덜 — LESS (lower degree)
  덜 맵다         less spicy
  덜 비싸다       less expensive
  조금 덜 주세요.  Give me a little less.

가장 / 제일 — MOST / BEST (superlative)
Both mean the same — 제일 is slightly more casual:
  가장 크다       the biggest
  제일 맛있다     the most delicious
  한국에서 가장 높은 산이 뭐예요?    What is the tallest mountain in Korea?
  이게 제일 좋아요.                  This is the best. / I like this one the most.

ASKING ABOUT PREFERENCES WITH 비교:
  A하고 B 중에 뭐가 더 좋아요?        Between A and B, which do you like more?
  A와 B 중에 어느 것이 더 커요?       Between A and B, which is bigger?

COMPARING ACTIONS — 더 많이 / 더 자주:
  저보다 더 많이 먹었어요.            You ate more than me.
  전보다 더 자주 운동해요.            I exercise more often than before.

SAME AS — 만큼:
  나만큼 키가 커요.                    He's as tall as me.
  생각만큼 어렵지 않아요.             It's not as difficult as I thought.`,
            target: `한국어 비교는 보다 (than), 더 (more), 덜 (less), 가장/제일 (most/best)을 사용하여 사람, 사물, 자질을 비교합니다.

보다 — ~보다 (비교의 기준을 나타냄):
  오늘이 어제보다 더 더워요. / 서울이 부산보다 커요.

더 — 더 (정도를 강조):
  더 크다 / 더 맛있다 / 조금 더 주세요.

덜 — 덜 (낮은 정도):
  덜 맵다 / 덜 비싸다 / 조금 덜 주세요.

가장 / 제일 — 가장/최고 (최상급):
  제일은 좀 더 구어적:
  이게 제일 좋아요. / 한국에서 가장 높은 산이 뭐예요?

선호도 묻기:
  A하고 B 중에 뭐가 더 좋아요?

동작 비교:
  저보다 더 많이 먹었어요.

같음 — 만큼:
  나만큼 키가 커요. / 생각만큼 어렵지 않아요.`
        },
        examples: [
            { native: "오늘이 어제보다 더 더워요.", romanized: "Oneuri eojeboda deo deowoyo.", translation: "Today is hotter than yesterday." },
            { native: "이게 저것보다 덜 비싸요.", romanized: "Ige jeogeotboda deol bissayo.", translation: "This is less expensive than that." },
            { native: "서울에서 제일 유명한 곳이 어디예요?", romanized: "Seoureseo jeil yumyeonghan gosi eodiyeyo?", translation: "What is the most famous place in Seoul?" },
            { native: "차하고 커피 중에 뭐가 더 좋아요?", romanized: "Chahago keopi junge mwoga deo joayo?", translation: "Between tea and coffee, which do you like more?" },
            { native: "생각만큼 어렵지 않아요.", romanized: "Saenggakmanqum eoryeopji anayo.", translation: "It's not as difficult as I thought. (만큼)" },
            { native: "전보다 한국어를 더 잘해요.", romanized: "Jeonboda hangugeo reul deo jalhaeyo.", translation: "I speak Korean better than before." },
        ]
    },
    {
        id: "ko-g-a2-17",
        level: "A2",
        title: "의견 표현 — ~것 같아요 / ~(이)라고 생각해요",
        explanation: {
            native: `Two essential patterns for expressing personal opinions and soft guesses.

~것 같아요 — IT SEEMS / I THINK (inference or soft opinion)
~것 같아요 expresses a guess, inference, or opinion that is not entirely certain. It is softer and more tentative than a direct statement.

FORMATION:
Present action verbs + 는 것 같아요:
  가는 것 같아요         It seems (he) is going / I think (he) is going
  먹는 것 같아요         It seems (she) is eating

Present adjectives + (으)ㄴ 것 같아요:
  좋은 것 같아요         It seems good / I think it's good
  비싼 것 같아요         It seems expensive
  맛있는 것 같아요       It seems delicious (action verb form)

Past + 았/었던 것 같아요 / (으)ㄴ 것 같아요:
  갔던 것 같아요         It seems (he) went
  먹었던 것 같아요       It seems (she) ate

Future + (으)ㄹ 것 같아요:
  갈 것 같아요           I think (he) will go / It looks like (he'll) go
  비가 올 것 같아요      It looks like it will rain

USING ~것 같아요:
  이 영화가 재미있는 것 같아요.    I think this movie is interesting.
  오늘 비가 올 것 같아요.          It looks like it will rain today.
  그 사람이 친절한 것 같아요.      That person seems kind.

~(이)라고 생각해요 — I THINK THAT (more direct opinion)
More assertive than 것 같아요 — the speaker is stating their view more confidently.

  저는 한국어가 어렵다고 생각해요.     I think Korean is difficult.
  제 생각에는 이게 더 좋아요.          In my opinion, this is better.
  저는 그게 맞다고 생각해요.           I think that's correct.

ASKING FOR OPINIONS:
  어떻게 생각해요?                     What do you think?
  어떤 것 같아요?                      How does it seem?

THE DIFFERENCE:
  것 같아요 — inference, not 100% sure, based on evidence or impression
  생각해요 — direct opinion, more confident assertion`,
            target: `개인적인 의견과 부드러운 추측을 표현하는 두 가지 필수 패턴입니다.

~것 같아요 — ~인 것 같다 (추론 또는 부드러운 의견)
~것 같아요는 완전히 확실하지 않은 추측, 추론, 또는 의견을 표현합니다.

형성:
현재 동작 동사 + 는 것 같아요:
  가는 것 같아요 / 먹는 것 같아요

현재 형용사 + (으)ㄴ 것 같아요:
  좋은 것 같아요 / 비싼 것 같아요

미래 + (으)ㄹ 것 같아요:
  갈 것 같아요 / 비가 올 것 같아요

~것 같아요 사용:
  이 영화가 재미있는 것 같아요.
  오늘 비가 올 것 같아요.

~(이)라고 생각해요 — ~라고 생각한다 (더 직접적인 의견)
것 같아요보다 더 주장적입니다.

  저는 한국어가 어렵다고 생각해요.
  제 생각에는 이게 더 좋아요.

의견 묻기:
  어떻게 생각해요? / 어떤 것 같아요?

차이점:
  것 같아요 — 추론, 100% 확실하지 않음
  생각해요 — 직접적인 의견, 더 자신 있는 주장`
        },
        examples: [
            { native: "이 영화가 재미있는 것 같아요.", romanized: "I yeonghwaga jaemiinneun geot gatayo.", translation: "I think this movie is interesting." },
            { native: "오늘 비가 올 것 같아요.", romanized: "Oneul biga ol geot gatayo.", translation: "It looks like it will rain today." },
            { native: "그 사람이 친절한 것 같아요.", romanized: "Geu sarami chinjeolhan geot gatayo.", translation: "That person seems kind." },
            { native: "저는 한국어가 재미있다고 생각해요.", romanized: "Jeoneun hangugeoga jaemitdago saenggakhaeyo.", translation: "I think Korean is interesting." },
            { native: "제 생각에는 이게 더 좋아요.", romanized: "Je saenggakeneun ige deo joayo.", translation: "In my opinion, this is better." },
            { native: "어떻게 생각해요?", romanized: "Eotteoke saenggakhaeyo?", translation: "What do you think?" },
        ]
    },
    {
        id: "ko-g-a2-18",
        level: "A2",
        title: "~(으)ㄹ까요? — Shall We? / I Wonder",
        explanation: {
            native: `~(으)ㄹ까요? is a versatile sentence-ending expressing soft suggestions, polite offers, and wondering. It was introduced briefly at A1 (lesson ko-g-a1-29) — this lesson gives full coverage.

FORMATION
  Verb stem ends in vowel or ㄹ → ㄹ까요?
  Verb stem ends in consonant   → 을까요?

  가다   → 갈까요?      Shall we go?
  먹다   → 먹을까요?    Shall we eat?
  하다   → 할까요?      Shall we do it?
  앉다   → 앉을까요?    Shall we sit?
  마시다 → 마실까요?    Shall we drink?

THREE USES

1. SUGGESTION — shall we? (most common, first person plural):
  같이 갈까요?              Shall we go together?
  뭐 먹을까요?              What shall we eat?
  여기 앉을까요?            Shall we sit here?
  커피 마실까요?            Shall we have coffee?

2. OFFERING — shall I? (first person singular, offering to do for someone):
  제가 할까요?              Shall I do it? / Would you like me to do it?
  창문 열까요?              Shall I open the window?
  도와드릴까요?             Shall I help you? (드리다 — honorific form)

3. WONDERING / RHETORICAL — I wonder... (often to oneself):
  오늘 날씨가 어떨까요?    I wonder what the weather will be like today.
  얼마나 걸릴까요?          I wonder how long it will take.

RESPONDING:
  Agreeing:     네, 좋아요! / 그래요, 그렇게 해요.
  Declining:    저는 괜찮아요. / 저는 좀...

~(으)ㄹ까요? vs ~(으)ㄹ게요:
  갈까요?    Shall we go? (asking if the other person agrees — suggestion)
  갈게요.    I'll go. (promise or statement of intention — see ko-g-a2-20)

~(으)ㄹ까요? vs ~(으)세요:
  앉을까요?   Shall we sit? (suggestion — both together)
  앉으세요.   Please sit. (polite instruction to the other person)`,
            target: `~(으)ㄹ까요?는 부드러운 제안, 정중한 제안, 궁금증을 표현하는 다용도 문장 종결 어미입니다. A1 레슨 ko-g-a1-29에서 간략히 소개되었으며, 이 레슨에서 전체적으로 다룹니다.

형성:
  어간이 모음이나 ㄹ로 끝나면 → ㄹ까요?
  어간이 자음으로 끝나면 → 을까요?

  가다 → 갈까요?,  먹다 → 먹을까요?,  하다 → 할까요?

세 가지 용도:
1. 제안 — 같이 할까요? (가장 흔한, 1인칭 복수):
  같이 갈까요? / 뭐 먹을까요? / 여기 앉을까요?

2. 제공 — 제가 할까요? (1인칭 단수, 누군가를 위해 제공):
  제가 할까요? / 창문 열까요? / 도와드릴까요?

3. 궁금증 — ~일까요? (혼자 또는 타인에게):
  오늘 날씨가 어떨까요? / 얼마나 걸릴까요?

응답:
  동의: 네, 좋아요! / 그래요, 그렇게 해요.
  거절: 저는 괜찮아요.

~(으)ㄹ까요? vs ~(으)ㄹ게요:
  갈까요? (상대방이 동의하는지 물음 — 제안)
  갈게요. (약속 또는 의도의 진술 — ko-g-a2-20 참조)`
        },
        examples: [
            { native: "같이 갈까요?", romanized: "Gachi galkkayo?", translation: "Shall we go together?" },
            { native: "뭐 먹을까요?", romanized: "Mwo meogeulkkayo?", translation: "What shall we eat?" },
            { native: "제가 할까요?", romanized: "Jega halkkayo?", translation: "Shall I do it?" },
            { native: "창문 열까요?", romanized: "Changmun yeolkkayo?", translation: "Shall I open the window?" },
            { native: "얼마나 걸릴까요?", romanized: "Eolmana geolrilkkayo?", translation: "I wonder how long it will take." },
            { native: "네, 좋아요! 같이 가요.", romanized: "Ne, joayo! Gachi gayo.", translation: "Yes, great! Let's go together. (response to suggestion)" },
        ]
    },
    {
        id: "ko-g-a2-19",
        level: "A2",
        title: "존댓말 동사 — Honorific Verb Forms",
        explanation: {
            native: `Korean has special honorific verb forms used when speaking about or to respected people — elders, superiors, and people you don't know well. These are essential for real-life situations.

THE HONORIFIC SUFFIX — (으)시
Adding (으)시 to a verb stem makes it honorific:
  Stem ends in vowel → 시다:  가시다, 오시다, 하시다
  Stem ends in consonant → 으시다: 읽으시다, 앉으시다, 잡수시다

In polite speech (~아요/어요 register), (으)시 becomes (으)세요 for commands/requests and (으)셔요 or (으)세요 for statements:
  가세요.              (He/She) is going. / Please go.
  오세요.              (He/She) is coming. / Please come.
  읽으세요.            (He/She) is reading. / Please read.

SPECIAL HONORIFIC VERBS — completely different forms:
These are separate vocabulary items that must be memorised:

  Regular verb          Honorific form       Meaning
  있다 / 없다          계시다               to be (present/absent)
  먹다 / 마시다        드시다 / 잡수시다     to eat / drink
  자다                 주무시다             to sleep
  말하다               말씀하시다           to speak / say
  죽다                 돌아가시다           to pass away (die)
  아프다               편찮으시다           to be unwell/ill
  이름                 성함                 name (honorific noun)
  나이                 연세                 age (honorific noun)

USING HONORIFIC VERBS:

계시다 (honorific of 있다/없다):
  선생님이 계세요?              Is the teacher here/in?
  할머니는 집에 계세요.         Grandma is at home.

드시다 (honorific of 먹다/마시다):
  뭐 드시겠어요?                What would you like to eat/drink?
  많이 드세요.                  Please eat a lot.

주무시다 (honorific of 자다):
  잘 주무셨어요?                Did you sleep well? (morning greeting)

말씀하시다 (honorific of 말하다):
  말씀해 주세요.                Please tell me / Please speak.

WHEN TO USE HONORIFICS:
  → When speaking TO or ABOUT people older than you
  → When speaking TO or ABOUT superiors (boss, teacher)
  → When speaking TO strangers or people you don't know well
  → In shops, announcements, formal situations

WHEN NOT TO USE:
  → About yourself (you don't use honorifics for your own actions)
  → About close friends of the same age`,
            target: `한국어에는 존경받는 사람에 대해 또는 그 사람에게 말할 때 사용하는 특별한 경어 동사 형태가 있습니다.

경어 접미사 — (으)시
동사 어간에 (으)시를 추가하면 경어가 됩니다:
  모음으로 끝나는 어간 → 시다: 가시다, 오시다, 하시다
  자음으로 끝나는 어간 → 으시다: 읽으시다, 앉으시다

공손한 말 (~아요/어요 등록)에서 (으)시는 (으)세요나 (으)셔요가 됩니다:
  가세요. / 오세요. / 읽으세요.

특별 경어 동사 — 완전히 다른 형태 (암기 필요):
  있다/없다 → 계시다 (존재함/없음)
  먹다/마시다 → 드시다/잡수시다 (드시다/잡수시다)
  자다 → 주무시다 (주무시다)
  말하다 → 말씀하시다 (말씀하시다)
  아프다 → 편찮으시다 (편찮으시다)
  이름 → 성함 (경어 명사)
  나이 → 연세 (경어 명사)

경어 동사 사용:
  선생님이 계세요? / 할머니는 집에 계세요.
  뭐 드시겠어요? / 많이 드세요.
  잘 주무셨어요? / 말씀해 주세요.

경어를 사용해야 할 때:
  → 자신보다 나이 많은 사람에게 말할 때
  → 상사, 선생님 등 윗사람에게 말할 때
  → 잘 모르는 낯선 사람에게 말할 때`
        },
        examples: [
            { native: "선생님이 계세요?", romanized: "Seonsaengnimi gyeseyo?", translation: "Is the teacher here? (계시다 — honorific of 있다)" },
            { native: "뭐 드시겠어요?", romanized: "Mwo deuisigesseoyo?", translation: "What would you like to eat/drink? (드시다 — honorific of 먹다)" },
            { native: "잘 주무셨어요?", romanized: "Jal jumusyeosseoyo?", translation: "Did you sleep well? (주무시다 — honorific of 자다)" },
            { native: "성함이 어떻게 되세요?", romanized: "Seongami eotteoke doeseyo?", translation: "What is your name? (성함 — honorific of 이름)" },
            { native: "할머니는 집에 계세요.", romanized: "Halmeonineun jibe gyeseyo.", translation: "Grandma is at home. (계시다)" },
            { native: "많이 드세요.", romanized: "Mani deuseyo.", translation: "Please eat a lot. (드시다 — polite invitation)" },
        ]
    },
    {
        id: "ko-g-a2-20",
        level: "A2",
        title: "~(으)ㄹ게요 — Promises and Stated Intentions",
        explanation: {
            native: `~(으)ㄹ게요 expresses a promise, firm intention, or statement of what the speaker will do — often in response to the other person's situation or needs. It always refers to the speaker's own action.

FORMATION
  Verb stem ends in vowel or ㄹ → ㄹ게요
  Verb stem ends in consonant   → 을게요

  가다    → 갈게요          I'll go. / I promise to go.
  오다    → 올게요          I'll come.
  하다    → 할게요          I'll do it.
  전화하다 → 전화할게요     I'll call.
  먹다    → 먹을게요        I'll eat.
  기다리다 → 기다릴게요     I'll wait.

USING ~(으)ㄹ게요:

Promise or reassurance:
  제가 할게요.              I'll do it. (I promise / let me do it)
  걱정하지 마세요. 제가 도와줄게요.  Don't worry. I'll help you.
  잊지 않을게요.            I won't forget.

Response to a request:
  빨리 올게요.              I'll come quickly.
  곧 돌아올게요.            I'll be back soon.

Stating what you'll do:
  저는 커피로 할게요.       I'll have coffee. (ordering/choosing)
  저는 여기서 기다릴게요.   I'll wait here.

~(으)ㄹ게요 vs ~(으)ㄹ 거예요:
  갈게요.        I'll go. (promise/intention responsive to the situation — the listener is involved)
  갈 거예요.     I'm going to go. (neutral statement of future plan — A1 lesson)
  Both express future, but:
  ~(으)ㄹ게요 — speaker is committing to an action, aware of the listener
  ~(으)ㄹ 거예요 — neutral statement of plan, listener not necessarily relevant

~(으)ㄹ게요 vs ~(으)ㄹ까요?:
  할게요.    I'll do it. (speaker decides and commits)
  할까요?    Shall I do it? (speaker asks for listener's preference)`,
            target: `~(으)ㄹ게요는 약속, 확고한 의도, 또는 화자가 할 일에 대한 진술을 표현합니다 — 종종 상대방의 상황이나 필요에 대한 반응으로. 항상 화자 자신의 동작을 가리킵니다.

형성:
  어간이 모음이나 ㄹ로 끝나면 → ㄹ게요
  어간이 자음으로 끝나면 → 을게요

  가다 → 갈게요,  오다 → 올게요,  하다 → 할게요,  먹다 → 먹을게요

~(으)ㄹ게요 사용:

약속 또는 안심:
  제가 할게요. / 걱정하지 마세요. 제가 도와줄게요.
  잊지 않을게요.

요청에 대한 응답:
  빨리 올게요. / 곧 돌아올게요.

할 일 진술:
  저는 커피로 할게요. / 저는 여기서 기다릴게요.

~(으)ㄹ게요 vs ~(으)ㄹ 거예요:
  갈게요. (약속/의도 — 청자 관련)
  갈 거예요. (중립적인 미래 계획 — 청자 관련 없음)

~(으)ㄹ게요 vs ~(으)ㄹ까요?:
  할게요. (화자가 결정하고 약속)
  할까요? (화자가 청자의 선호도를 물음)`
        },
        examples: [
            { native: "제가 할게요.", romanized: "Jega halkkeyo.", translation: "I'll do it. (promise/offer)" },
            { native: "걱정하지 마세요. 제가 도와줄게요.", romanized: "Geokjeonghaji maseyo. Jega dowajulkkeyo.", translation: "Don't worry. I'll help you." },
            { native: "곧 돌아올게요.", romanized: "Got doraolkkeyo.", translation: "I'll be back soon." },
            { native: "저는 커피로 할게요.", romanized: "Jeoneun keopiro halkkeyo.", translation: "I'll have coffee. (making a choice)" },
            { native: "잊지 않을게요.", romanized: "Itji aneulkkeyo.", translation: "I won't forget. (promise)" },
            { native: "저는 여기서 기다릴게요.", romanized: "Jeoneun yeogiseo gidarilkkeyo.", translation: "I'll wait here." },
        ]
    },
]