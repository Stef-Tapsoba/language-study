import { GrammarLesson } from "../../../../types"

export const adverbsAndDiscourseLessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-19",
        level: "A1",
        title: "Adverbs of Time",
        explanation: `Korean time adverbs come BEFORE the verb (usually at the start of the sentence or just before the verb).

TIME ANCHORS:
  오늘    today
  어제    yesterday
  내일    tomorrow
  이번 주  this week
  지난주  last week
  다음 주  next week

NOW / RELATIVE:
  지금    now
  아직    still / not yet (+ negative: 아직 안 갔어요 — haven't gone yet)
  이미    already (action completed: 이미 먹었어요 — already ate)
  벌써    already (surprising timing: 벌써 왔어요? — already here?)

SPEED / ORDER:
  빨리    quickly / hurry up
  천천히  slowly
  먼저    first (before others)
  나중에  later

POSITION: Time expressions typically go at the START of the sentence or directly before the verb. They can move freely without changing meaning — just emphasis shifts.`,
        examples: [
            { native: "오늘 바빠요.", romanized: "Oneul bappayo.", translation: "I'm busy today." },
            { native: "어제 친구를 만났어요.", romanized: "Eoje chingureul mannasseoyo.", translation: "I met a friend yesterday." },
            { native: "내일 갈 거예요.", romanized: "Naeil gal geoyeyo.", translation: "I will go tomorrow." },
            { native: "아직 안 먹었어요.", romanized: "Ajik an meogeosseoyo.", translation: "I haven't eaten yet." },
            { native: "이미 했어요.", romanized: "Imi haesseoyo.", translation: "I already did it." },
            { native: "빨리 오세요!", romanized: "Ppalli oseyo!", translation: "Come quickly! / Hurry up!" },
        ]
    },
    {
        id: "ko-g-a1-20",
        level: "A1",
        title: "Frequency Adverbs",
        explanation: `Use frequency adverbs to say how often something happens.

FREQUENCY SCALE (high → low):
  항상 / 늘    always
  보통         usually / normally
  자주         often
  가끔         sometimes
  별로 (+ neg) not really / not much
  거의 (+ neg) hardly ever
  절대로 (+ neg) never (strong)

IMPORTANT: 별로, 거의, and 절대로 require a NEGATIVE verb:
  별로 안 좋아해요.   I don't really like it.    ✓
  별로 좋아해요.      ✗  (grammatically wrong)
  절대로 안 먹어요.   I never eat it.            ✓

POSITION: Frequency adverbs typically go before the verb or at the start of the sentence.
  저는 항상 아침을 먹어요.   I always eat breakfast.
  가끔 영화를 봐요.          I sometimes watch movies.`,
        examples: [
            { native: "저는 항상 커피를 마셔요.", romanized: "Jeoneun hangsang keopireul masyeoyo.", translation: "I always drink coffee." },
            { native: "가끔 운동해요.", romanized: "Gakkeum undongha eyo.", translation: "I sometimes exercise." },
            { native: "별로 안 좋아해요.", romanized: "Byeollo an joahaeyo.", translation: "I don't really like it." },
            { native: "절대로 안 먹어요.", romanized: "Jeoldaero an meogeoy o.", translation: "I never eat it." },
            { native: "자주 한국 음식을 먹어요.", romanized: "Jaju hanguk eumsige ul meogeoy o.", translation: "I often eat Korean food." },
        ]
    },
    {
        id: "ko-g-a1-21",
        level: "A1",
        title: "Sentence Connectors: ~고, ~지만, ~아서/어서",
        explanation: `These endings attach directly to verb stems to connect two clauses in a single sentence.

~고  —  AND / and then (neutral connection or sequence)
  Verb stem + 고 (no consonant/vowel rule)
  밥을 먹고 커피를 마셔요.   I eat rice and drink coffee.
  집에 가고 자요.             I go home and sleep.

~지만  —  BUT (contrast)
  Verb stem + 지만
  비싸지만 맛있어요.          It's expensive but delicious.
  한국어는 어렵지만 재미있어요.  Korean is hard but fun.

~아서/어서  —  SO / BECAUSE (reason → result; reason comes first)
  Vowel-final stem → 아서   가다 → 가서
  Other stems     → 어서   먹다 → 먹어서
  하다            → 해서
  배가 고파서 밥을 먹었어요.  I was hungry so I ate.
  피곤해서 집에 있어요.       I'm tired so I'm staying home.

NOTE: ~아서/어서 expresses a natural cause-effect. For "because" with an explanation, ~기 때문에 is stronger but comes later.`,
        examples: [
            { native: "저는 한국어를 공부하고 일본어도 공부해요.", romanized: "Jeoneun hangugeo reul gongbuhago ilboneodo gongbuhaeyo.", translation: "I study Korean and also study Japanese." },
            { native: "피곤하지만 일해요.", romanized: "Pigonhajiman ilhaeyo.", translation: "I'm tired but I work." },
            { native: "배가 고파서 밥을 먹었어요.", romanized: "Baega gopaseo babeul meogeosseoyo.", translation: "I was hungry so I ate rice." },
            { native: "음식이 맛있어서 많이 먹었어요.", romanized: "Eumsigi massisseoseo mani meogeosseoyo.", translation: "The food was delicious so I ate a lot." },
            { native: "비가 와서 집에 있어요.", romanized: "Biga waseo jibe isseoyo.", translation: "It's raining so I'm staying home." },
        ]
    },
    {
        id: "ko-g-a1-22",
        level: "A1",
        title: "Discourse Connectors",
        explanation: `These words connect separate sentences (not clauses). They go at the START of a new sentence.

ADDING / CONTRASTING:
  그리고    and / and then (connects sentences)
  하지만    but / however
  그런데    but / by the way (softer contrast or topic shift)
  또는 / 아니면  or (either...or)

CAUSE / RESULT:
  그래서    so / therefore (consequence)
  그러면    then / if so (condition → result)
  그러니까  so / that's why (explains reason)

SEQUENCE / ADDITION:
  먼저      first (in a list or order)
  그다음    next / then
  마지막으로  finally / lastly
  그리고    also / additionally (in lists)
  또        also / again

EXAMPLE SEQUENCE:
  먼저 손을 씻어요.        First, I wash my hands.
  그다음 밥을 먹어요.      Then I eat.
  마지막으로 양치해요.     Finally I brush my teeth.`,
        examples: [
            { native: "저는 학생이에요. 그리고 아르바이트도 해요.", romanized: "Jeoneun haksaengieyo. Geurigo areubaiteu do haeyo.", translation: "I am a student. And I also work part-time." },
            { native: "비가 왔어요. 하지만 우산이 없었어요.", romanized: "Biga wasseoyo. Hajiman usani eopseosseoyo.", translation: "It rained. But I didn't have an umbrella." },
            { native: "배가 고팠어요. 그래서 밥을 먹었어요.", romanized: "Baega gopasseoy o. Geuraeseo babeul meogeosseoyo.", translation: "I was hungry. So I ate rice." },
            { native: "먼저 공부해요. 그다음 운동해요.", romanized: "Meonjeo gongbuhaeyo. Geudaeum undongha eyo.", translation: "First I study. Then I exercise." },
            { native: "한국어는 어려워요. 그런데 재미있어요.", romanized: "Hangugeo neun eoryeowoyo. Geureonde jaemiisseoyo.", translation: "Korean is difficult. But it's fun." },
        ]
    },
]
