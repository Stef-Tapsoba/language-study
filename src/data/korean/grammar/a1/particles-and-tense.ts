import { GrammarLesson } from "../../../../types"

export const particlesAndTenseLessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-5",
        level: "A1",
        title: "Topic Particle 은/는 vs Subject Particle 이/가",
        explanation: "This is one of the trickiest distinctions in Korean for English speakers.\n\n은/는 (topic) marks what the sentence is *about* — often something already known or being contrasted. Think of it as 'as for X...' or 'speaking of X...'\n\n이/가 (subject) marks the grammatical subject — often new information, a specific focus, or the answer to 'who/what?'\n\nIn practice: 저는 (I, as for me) is used for general statements about yourself. 제가 (I, specifically me) is used when you are the answer to a question or the focus.",
        examples: [
            { native: "저는 학생이에요.", romanized: "Jeoneun haksaengieyo.", translation: "I am a student. (general statement about myself)" },
            { native: "누가 학생이에요? — 제가 학생이에요.", romanized: "Nuga haksaengieyo? — Jega haksaengieyo.", translation: "Who is a student? — I am (the student). (focus → 이/가)", speakText: "누가 학생이에요? 제가 학생이에요." },
            { native: "친구가 왔어요.", romanized: "Chinguga wasseoyo.", translation: "A friend came. (new information — 이/가)" },
            { native: "친구는 왔어요.", romanized: "Chinguneun wasseoyo.", translation: "The friend (we were talking about) came. (known topic — 은/는)" },
        ],
        inlineVocab: [
            { word: "은/는", translation: "topic particle" },
            { word: "이/가", translation: "subject particle" },
            { word: "저는", translation: "I (as for me — topic particle)" },
            { word: "제가", translation: "I (specifically me — subject particle)" },
            { word: "누가", translation: "who (subject form of 누구)" },
            { word: "친구", translation: "friend" },
        ]
    },
    {
        id: "ko-g-a1-6",
        level: "A1",
        title: "Object Particle 을/를",
        explanation: "The object particle marks the direct object of an action verb — the thing being acted on.\n• 을 after a consonant-ending syllable\n• 를 after a vowel-ending syllable\n\nIn spoken Korean, object particles are frequently dropped. But understanding them helps you read, and producing them makes your speech sound more natural and precise.",
        examples: [
            { native: "밥을 먹어요.", romanized: "Babeul meogeoyo.", translation: "I eat rice. (밥 ends in consonant → 을)" },
            { native: "물을 마셔요.", romanized: "Mureul masyeoyo.", translation: "I drink water. (물 ends in consonant → 을)" },
            { native: "한국어를 공부해요.", romanized: "Hangugeoreul gongbuhaeyo.", translation: "I study Korean. (한국어 ends in vowel → 를)" },
            { native: "음악을 들어요.", romanized: "Eumaguel deureoyo.", translation: "I listen to music." },
            { native: "친구를 만나요.", romanized: "Chingureul mannayo.", translation: "I meet a friend." },
        ],
        inlineVocab: [
            { word: "을/를", translation: "object particle (을 after consonant, 를 after vowel)" },
            { word: "밥", translation: "rice / cooked rice / meal" },
            { word: "물", translation: "water" },
            { word: "한국어", translation: "Korean language" },
            { word: "음악", translation: "music" },
            { word: "공부하다", translation: "to study" },
        ]
    },
    {
        id: "ko-g-a1-7",
        level: "A1",
        title: "Location Particles 에 and 에서",
        explanation: "Both particles relate to place, but they work differently:\n\n에 — destination or static existence. Use with 가다 (go), 오다 (come), 있다 (exist/be at).\n에서 — where an action happens. Use with action verbs like 먹다 (eat), 공부하다 (study), 일하다 (work).\n\nMemory tip: 에서 has 서 (서다 = to stand) — you are standing somewhere doing something.",
        examples: [
            { native: "학교에 가요.", romanized: "Hakgyoe gayo.", translation: "I go to school. (에 = destination)" },
            { native: "집에 있어요.", romanized: "Jibe isseoyo.", translation: "I am at home. (에 = static location)" },
            { native: "카페에서 공부해요.", romanized: "Kapeeseo gongbuhaeyo.", translation: "I study at the café. (에서 = where action happens)" },
            { native: "어디에서 일해요?", romanized: "Eodieseo ilhaeyo?", translation: "Where do you work?" },
            { native: "한국에서 왔어요.", romanized: "Hangugeso wasseoyo.", translation: "I came from Korea. (에서 = from)" },
        ],
        inlineVocab: [
            { word: "에", translation: "at / to (destination or static location)" },
            { word: "에서", translation: "at / in (location of action) / from" },
            { word: "학교", translation: "school" },
            { word: "집", translation: "home / house" },
            { word: "카페", translation: "café" },
            { word: "어디", translation: "where" },
        ]
    },
    {
        id: "ko-g-a1-8",
        level: "A1",
        title: "Present Tense: ~아요/어요",
        explanation: "To conjugate a verb in polite present tense (해요체), take the dictionary form (ends in 다), remove 다, and add 아요 or 어요.\n\nThe rule — vowel harmony:\n• If the last vowel in the stem is ㅏ or ㅗ → add 아요\n• All other vowels → add 어요\n• 하다 verbs → always become 해요\n\nMany forms contract naturally in speech. 가 + 아요 → 가요 (not 가아요). This is normal — Korean prefers smooth pronunciation.",
        examples: [
            { native: "먹다 → 먹어요", romanized: "meokda → meogeoyo", translation: "eat (stem 먹, last vowel ㅓ → 어요)", speakText: "먹다, 먹어요" },
            { native: "가다 → 가요", romanized: "gada → gayo", translation: "go (stem 가, last vowel ㅏ → 아요, contracts to 가요)", speakText: "가다, 가요" },
            { native: "오다 → 와요", romanized: "oda → wayo", translation: "come (stem 오, last vowel ㅗ → 아요, contracts to 와요)", speakText: "오다, 와요" },
            { native: "공부하다 → 공부해요", romanized: "gongbuhada → gongbuhaeyo", translation: "study (하다 → 해요)", speakText: "공부하다, 공부해요" },
            { native: "마시다 → 마셔요", romanized: "masida → masyeoyo", translation: "drink (stem 마시, 이+어요 contracts to 여요)", speakText: "마시다, 마셔요" },
        ],
        inlineVocab: [
            { word: "먹다", translation: "to eat (dictionary form)" },
            { word: "먹어요", translation: "eat / eats (polite present)" },
            { word: "가다", translation: "to go (dictionary form)" },
            { word: "오다", translation: "to come (dictionary form)" },
            { word: "마시다", translation: "to drink" },
            { word: "하다", translation: "to do (always → 해요 in polite present)" },
        ]
    },
    {
        id: "ko-g-a1-9",
        level: "A1",
        title: "Past Tense: ~았어요/었어요",
        explanation: "Past tense in polite speech follows the same vowel harmony rule as present tense, but you add 았어요 or 었어요 to the stem.\n\n• Last vowel ㅏ or ㅗ → 았어요\n• All other vowels → 었어요\n• 하다 verbs → 했어요\n\nMany forms contract just as they do in present tense.",
        examples: [
            { native: "먹다 → 먹었어요", romanized: "meokda → meogeosseoyo", translation: "ate (먹 + 었어요)", speakText: "먹다, 먹었어요" },
            { native: "가다 → 갔어요", romanized: "gada → gasseoyo", translation: "went (가 + 았어요 → 갔어요, contracted)", speakText: "가다, 갔어요" },
            { native: "오다 → 왔어요", romanized: "oda → wasseoyo", translation: "came (오 + 았어요 → 왔어요, contracted)", speakText: "오다, 왔어요" },
            { native: "공부하다 → 공부했어요", romanized: "gongbuhada → gongbuhaesseoyo", translation: "studied", speakText: "공부하다, 공부했어요" },
            { native: "어제 친구를 만났어요.", romanized: "Eoje chingureul mannasseoyo.", translation: "I met a friend yesterday." },
        ],
        inlineVocab: [
            { word: "먹었어요", translation: "ate (past tense of 먹다)" },
            { word: "갔어요", translation: "went (past tense of 가다)" },
            { word: "왔어요", translation: "came (past tense of 오다)" },
            { word: "했어요", translation: "did (past tense of 하다)" },
            { word: "어제", translation: "yesterday" },
            { word: "만났어요", translation: "met (past tense of 만나다)" },
        ]
    },
    {
        id: "ko-g-a1-10",
        level: "A1",
        title: "Negation: 안 and 못",
        explanation: "Korean has two main negation words, placed directly before the verb:\n\n안 (an) — 'don't' / 'not'. General negation for any verb or adjective.\n못 (mot) — 'can't'. Inability only — use with action verbs.\n\nFor 하다 compound verbs, insert 안 or 못 between the noun and 하다:\n공부하다 → 공부 안 해요 (don't study) / 공부 못 해요 (can't study)",
        examples: [
            { native: "안 가요.", romanized: "An gayo.", translation: "I don't go. / I'm not going." },
            { native: "안 먹어요.", romanized: "An meogeoyo.", translation: "I don't eat it." },
            { native: "못 해요.", romanized: "Mot haeyo.", translation: "I can't do it." },
            { native: "한국어를 못 해요.", romanized: "Hangugeoreul mot haeyo.", translation: "I can't speak Korean." },
            { native: "공부 안 해요.", romanized: "Gongbu an haeyo.", translation: "I don't study." },
        ],
        inlineVocab: [
            { word: "안", translation: "don't / not (general negation)" },
            { word: "못", translation: "can't (inability)" },
            { word: "가요", translation: "go (polite present of 가다)" },
            { word: "먹어요", translation: "eat (polite present of 먹다)" },
            { word: "공부", translation: "studying / study (noun)" },
            { word: "한국어", translation: "Korean language" },
        ]
    },
    {
        id: "ko-g-a1-23",
        level: "A1",
        title: "있어요 / 없어요 — Existence, Location & Possession",
        explanation: `있어요 and 없어요 are two of the highest-frequency words in Korean. They cover three overlapping uses: existence ('there is'), location ('X is at Y'), and possession ('I have'). One form handles all three.

THE TWO FORMS
  있어요   there is / is at / have       (existence, location, possession)
  없어요   there is not / is not at / don't have  (negative of all three)

EXISTENCE — there is / there are
  화장실이 있어요.          There is a toilet.
  화장실이 없어요.          There is no toilet.
  근처에 카페가 있어요?     Is there a café nearby?

LOCATION — X is at / in Y
The pattern is: [Location]에 [Thing/Person]이/가 있어요
  책상 위에 책이 있어요.    There is a book on the desk.
  집에 있어요.              I am at home. / (Someone) is at home.
  어디에 있어요?            Where is it? / Where are you?
  지하철역이 어디에 있어요? Where is the subway station?

Note: 에 marks the location with 있어요/없어요, exactly as you learned in lesson 7.
사람 and animals are also있어요 — Korean does not distinguish animate from
inanimate the way Japanese does with あります vs います.

POSSESSION — to have
있어요/없어요 also expresses having or not having something.
The thing possessed takes 이/가:
  시간이 있어요?            Do you have time?
  네, 있어요. / 아니요, 없어요.  Yes, I do. / No, I don't.
  돈이 없어요.              I don't have any money.
  질문이 있어요.            I have a question.

ASKING WHERE SOMETHING IS
  [Thing]이/가 어디에 있어요?   Where is [thing]?
  → [Location]에 있어요.        It is at [location].

  가방이 어디에 있어요?     Where is the bag?
  → 의자 아래에 있어요.     It is under the chair.

LOCATION VOCABULARY — useful with 있어요
  위   above / on top    책상 위에   on the desk
  아래  below / under    침대 아래에  under the bed
  앞   in front          학교 앞에   in front of the school
  뒤   behind            건물 뒤에   behind the building
  옆   next to           은행 옆에   next to the bank
  안   inside            가방 안에   inside the bag
  밖   outside           밖에        outside`,
        examples: [
            { native: "근처에 편의점이 있어요?", romanized: "Geuncheo e pyeonuijeomi isseoyo?", translation: "Is there a convenience store nearby?" },
            { native: "네, 저기에 있어요.", romanized: "Ne, jeogie isseoyo.", translation: "Yes, it's over there." },
            { native: "화장실이 어디에 있어요?", romanized: "Hwajangsiri eodie isseoyo?", translation: "Where is the toilet?" },
            { native: "2층에 있어요.", romanized: "Ichunge isseoyo.", translation: "It's on the second floor." },
            { native: "지금 집에 있어요.", romanized: "Jigeum jibe isseoyo.", translation: "I am at home right now." },
            { native: "시간이 있어요?", romanized: "Sigani isseoyo?", translation: "Do you have time?" },
            { native: "아니요, 지금 시간이 없어요.", romanized: "Aniyo, jigeum sigani eopseoyo.", translation: "No, I don't have time right now." },
            { native: "가방이 의자 옆에 있어요.", romanized: "Gabangi uija yeope isseoyo.", translation: "The bag is next to the chair." },
        ],
        inlineVocab: [
            { word: "있어요", translation: "there is / I have / am at (polite present of 있다)" },
            { word: "없어요", translation: "there isn't / I don't have (polite present of 없다)" },
            { word: "화장실", translation: "toilet / restroom" },
            { word: "시간", translation: "time" },
            { word: "가방", translation: "bag" },
            { word: "위", translation: "above / on top" },
            { word: "옆", translation: "next to / beside" },
        ]
    },
    {
        id: "ko-g-a1-24",
        level: "A1",
        title: "도 Particle — Also / Too / Either",
        explanation: `도 (do) means 'also', 'too', or 'as well'. It replaces 은/는, 이/가, or 을/를 when you want to say that something additional shares the same predicate. It is one of the highest-frequency particles in Korean.

REPLACING 은/는 — adding a topic:
  저는 학생이에요.     I am a student.
  저도 학생이에요.     I am also a student. (도 replaces 는)

  민준씨는 한국 사람이에요.  Minjun is Korean.
  수지씨도 한국 사람이에요.  Suji is also Korean.

REPLACING 이/가 — adding a subject:
  커피가 있어요.       There is coffee.
  녹차도 있어요.       There is also green tea.

REPLACING 을/를 — adding an object:
  한국어를 공부해요.   I study Korean.
  일본어도 공부해요.   I also study Japanese.

NEGATIVE + 도 — 'either / not...either'
In negative sentences, 도 extends the negation:
  커피는 안 마셔요.    I don't drink coffee.
  녹차도 안 마셔요.    I don't drink green tea either.

  아무것도 + negative = nothing at all:
  아무것도 몰라요.     I don't know anything.
  아무것도 안 먹었어요. I didn't eat anything.

  아무도 + negative = nobody:
  아무도 없어요.       There is nobody.
  아무도 안 왔어요.    Nobody came.

STACKING 도 — 'both...and / neither...nor':
  커피도 녹차도 좋아해요.    I like both coffee and green tea.
  고기도 생선도 안 먹어요.   I eat neither meat nor fish.

도 NEVER stacks with 은/는, 이/가, or 을/를 — it replaces them.
Other particles (에, 에서, 한테) keep their particle and 도 follows:
  학교에도 갔어요.          I also went to school.
  도서관에서도 공부했어요.   I also studied at the library.

저도요 — a fixed expression:
  저도요. / 나도요.   Me too. (one of the most common expressions in Korean)`,
        examples: [
            { native: "저도 한국어를 공부해요.", romanized: "Jeodo hangugeo reul gongbuhaeyo.", translation: "I also study Korean." },
            { native: "이것도 맛있어요.", romanized: "Igeotdo masisseoyo.", translation: "This is also delicious." },
            { native: "아무것도 안 먹었어요.", romanized: "Amugeotdo an meogeosseoyo.", translation: "I didn't eat anything." },
            { native: "아무도 없어요.", romanized: "Amudo eopseoyo.", translation: "There is nobody." },
            { native: "커피도 녹차도 좋아해요.", romanized: "Keopido nokchado joahaeyo.", translation: "I like both coffee and green tea." },
            { native: "저도요!", romanized: "Jeodoyo!", translation: "Me too!" },
        ],
        inlineVocab: [
            { word: "도", translation: "also / too / either (replaces 은/는, 이/가, 을/를)" },
            { word: "저도", translation: "me too / I also" },
            { word: "커피", translation: "coffee" },
            { word: "녹차", translation: "green tea" },
            { word: "아무것도", translation: "nothing at all (with negative verb)" },
            { word: "아무도", translation: "nobody (with negative verb)" },
        ]
    },
    {
        id: "ko-g-a1-26",
        level: "A1",
        title: "이/가 아니에요 — Noun Negation (Is Not)",
        explanation: `You already know how to negate verbs using 안 and 못 (lesson a1-10). But negating a noun — saying 'X is NOT Y' — uses a completely different structure: 이/가 아니에요.

THE PATTERN
  [Noun]이/가 아니에요.    [Subject] is not [Noun].

  이/가 marks the noun being negated (not the topic):
  저는 학생이 아니에요.      I am not a student.
  이것은 책이 아니에요.      This is not a book.
  그 사람은 선생님이 아니에요. That person is not a teacher.

이 vs 가 — same rule as the subject particle:
  아니에요 after consonant-ending noun → 이 아니에요
  아니에요 after vowel-ending noun → 가 아니에요

  학생이 아니에요.     not a student (학생 ends in consonant → 이)
  의사가 아니에요.     not a doctor (의사 ends in vowel → 가)
  한국 사람이 아니에요. not Korean (사람 ends in consonant → 이)
  미국 사람이 아니에요. not American

POSITIVE vs NEGATIVE — the full pattern:
  Positive: [Topic]은/는 [Noun]이에요/예요.
  저는 학생이에요.     I am a student.

  Negative: [Topic]은/는 [Noun]이/가 아니에요.
  저는 학생이 아니에요.  I am not a student.

Note: 이에요/예요 is the positive copula (lesson a1-3).
아니에요 is its negative — a completely separate word, not formed by adding 안.

COMMON MISTAKES
  ✗ 저는 안 학생이에요.   (WRONG — 안 cannot negate nouns)
  ✓ 저는 학생이 아니에요. (CORRECT)

  ✗ 이것은 책 아니에요.   (WRONG — 이/가 is required)
  ✓ 이것은 책이 아니에요. (CORRECT)

QUESTION FORM
  학생이 아니에요?    Are you not a student? / Aren't you a student?
  한국 사람이 아니에요? Are you not Korean?

SHORT ANSWER
  네, 아니에요.    Yes, that's right, I'm not. (confirming the negative)
  아니요, 맞아요.  No, I am. (correcting — I actually am)

아니에요 alone as a response means 'No' or 'That's not right' in casual conversation.`,
        examples: [
            { native: "저는 선생님이 아니에요.", romanized: "Jeoneun seonsaengnimee anieeyo.", translation: "I am not a teacher. (이 after consonant)" },
            { native: "이것은 커피가 아니에요.", romanized: "Igeoseun keopiga anieeyo.", translation: "This is not coffee. (가 after vowel)" },
            { native: "그 사람은 한국 사람이 아니에요.", romanized: "Geu sarameun hanguk saramee anieeyo.", translation: "That person is not Korean." },
            { native: "여기는 화장실이 아니에요.", romanized: "Yeogineun hwajangsilee anieeyo.", translation: "This is not the toilet." },
            { native: "저는 학생이 아니에요. 회사원이에요.", romanized: "Jeoneun haksaengee anieeyo. Hoesawoneeyo.", translation: "I'm not a student. I'm an office worker." },
            { native: "아니에요!", romanized: "Anieeyo!", translation: "No! / That's not right!" },
        ],
        inlineVocab: [
            { word: "이/가 아니에요", translation: "is not (noun negation pattern)" },
            { word: "아니에요", translation: "is not / no (negative copula)" },
            { word: "학생", translation: "student" },
            { word: "의사", translation: "doctor" },
            { word: "회사원", translation: "company employee / office worker" },
            { word: "커피", translation: "coffee" },
        ]
    },
    {
        id: "ko-g-a1-28",
        level: "A1",
        title: "~(으)로 Particle — Direction, Means & Method",
        explanation: `The particle ~(으)로 has three closely related uses: direction ('towards'), means of transport ('by'), and method or tool ('with / using'). All three express HOW or WHICH WAY something happens.

FORMATION
  Stem ends in vowel or ㄹ → 로
  Stem ends in consonant   → 으로

  서울 → 서울로       towards Seoul
  왼쪽 → 왼쪽으로     towards the left
  버스 → 버스로       by bus
  한국어 → 한국어로   in Korean / using Korean

1. DIRECTION — towards / in the direction of
  이쪽으로 오세요.         Please come this way.
  왼쪽으로 가세요.         Go to the left.
  오른쪽으로 도세요.       Turn to the right.
  서울로 가는 기차         the train going to Seoul

  ~로 vs ~에 for direction:
  에 marks a destination (arrival point): 서울에 가요. I'm going to Seoul.
  로 marks a direction (the way you're heading): 서울로 가요. I'm heading towards Seoul.
  In practice these often overlap — 에 is more common for destinations, 로 for directions.

2. MEANS OF TRANSPORT — by
  버스로 가요.          I go by bus.
  지하철로 왔어요.      I came by subway.
  택시로 갈 거예요.     I will go by taxi.
  비행기로 얼마나 걸려요?  How long does it take by plane?

3. METHOD / TOOL / LANGUAGE — with / using / in
  한국어로 말해 주세요.   Please speak in Korean.
  젓가락으로 먹어요.      I eat with chopsticks.
  카드로 계산할게요.      I'll pay by card.
  이메일로 보내세요.      Please send it by email.

COMMON DIRECTIONS WITH ~(으)로
  이쪽으로   this way
  저쪽으로   that way
  왼쪽으로   to the left
  오른쪽으로 to the right
  앞으로     forward
  뒤로       backward`,
        examples: [
            { native: "왼쪽으로 가세요.", romanized: "Oenjjogeuro gaseyo.", translation: "Go to the left. (direction)" },
            { native: "버스로 학교에 가요.", romanized: "Beoseuro hakgyoe gayo.", translation: "I go to school by bus. (means)" },
            { native: "한국어로 말해 주세요.", romanized: "Hangugeo ro malhae juseyo.", translation: "Please speak in Korean. (language/method)" },
            { native: "카드로 계산할게요.", romanized: "Kadeuro gyesan halgeyo.", translation: "I'll pay by card. (means/method)" },
            { native: "이쪽으로 오세요.", romanized: "Ijjogeuro oseyo.", translation: "Please come this way. (direction)" },
            { native: "지하철로 얼마나 걸려요?", romanized: "Jihacheol ro eolmana geollyeoyo?", translation: "How long does it take by subway?" },
        ],
        inlineVocab: [
            { word: "(으)로", translation: "towards / by means of / using (direction/method particle)" },
            { word: "왼쪽", translation: "left side" },
            { word: "오른쪽", translation: "right side" },
            { word: "버스", translation: "bus" },
            { word: "지하철", translation: "subway / metro" },
            { word: "카드", translation: "card / credit card" },
        ]
    },
    {
        id: "ko-g-a1-30",
        level: "A1",
        title: "Particles 와/과/하고/랑 — And / With",
        explanation: `Korean has several ways to say 'and' (connecting nouns) or 'with' (doing something together with someone). They all mean the same thing but differ in formality and register.

THE FOUR FORMS

  와   after a vowel-ending noun       formal / written
  과   after a consonant-ending noun   formal / written
  하고  after any noun                  polite informal / spoken
  랑   after a vowel-ending noun       casual / spoken
  이랑  after a consonant-ending noun   casual / spoken

AT A1, focus on 하고 — it is the most useful everyday form and works after any noun without worrying about the final sound.

MEANING 1 — 'AND' (connecting two or more nouns)
  사과하고 바나나   apple and banana
  커피하고 케이크   coffee and cake
  형하고 동생      older brother and younger sibling

MEANING 2 — 'WITH' (together with a person)
  친구하고 갔어요.          I went with a friend.
  가족하고 밥을 먹었어요.   I ate with my family.
  누구하고 왔어요?          Who did you come with?

와/과 — FORMAL WRITTEN FORMS
  Used in textbooks, formal documents, and polite speech.
  사과와 바나나      apple and banana  (사과 ends in vowel → 와)
  빵과 우유          bread and milk    (빵 ends in consonant → 과)
  선생님과 학생      teacher and student (학생 ends in consonant → 과)

랑/이랑 — CASUAL SPOKEN FORMS
  친구랑 놀았어요.   I hung out with a friend.  (친구 ends in vowel → 랑)
  동생이랑 갔어요.   I went with my younger sibling.  (동생 ends in consonant → 이랑)

COMMON MISTAKE — these particles connect NOUNS only, not sentences.
  ✓ 커피하고 차   coffee and tea  (connecting nouns — correct)
  ✗ 가요하고 먹어요  (WRONG — use ~고 to connect verb clauses → lesson a1-21)`,
        examples: [
            { native: "커피하고 케이크를 주세요.", romanized: "Keopihago keikeu reul juseyo.", translation: "Please give me coffee and cake. (하고 connecting nouns)" },
            { native: "친구하고 영화를 봤어요.", romanized: "Chinguhago yeonghwareul bwasseoyo.", translation: "I watched a movie with a friend." },
            { native: "누구하고 갔어요?", romanized: "Nuguhago gasseoyo?", translation: "Who did you go with?" },
            { native: "사과와 바나나가 있어요.", romanized: "Sagwawa bananaga isseoyo.", translation: "There are apples and bananas. (와 = formal, 사과 ends in vowel)" },
            { native: "빵과 우유를 샀어요.", romanized: "Ppanggwa uyureul sasseoyo.", translation: "I bought bread and milk. (과 = formal, 빵 ends in consonant)" },
            { native: "동생이랑 같이 공부했어요.", romanized: "Dongsaengirang gachi gongbuhaesseoyo.", translation: "I studied together with my younger sibling. (이랑 = casual)" },
        ],
        inlineVocab: [
            { word: "하고", translation: "and / with (polite informal — works after any noun)" },
            { word: "와/과", translation: "and / with (formal — 와 after vowel, 과 after consonant)" },
            { word: "랑/이랑", translation: "and / with (casual — 랑 after vowel, 이랑 after consonant)" },
            { word: "친구", translation: "friend" },
            { word: "가족", translation: "family" },
            { word: "같이", translation: "together" },
            { word: "누구", translation: "who" },
        ]
    },
    {
        id: "ko-g-a1-31",
        level: "A1",
        title: "Particle 의 — Possessive ('s / of)",
        explanation: `의 (ui) is the possessive particle in Korean, equivalent to 's or 'of' in English. It comes after the possessor to show that what follows belongs to or is associated with them.

BASIC PATTERN
  [Possessor] + 의 + [Possessed noun]

  저의 가방     my bag          (저 = I/me + 의)
  친구의 이름   friend's name
  한국의 문화   the culture of Korea
  학교의 선생님  the school's teacher

PRONUNCIATION
  의 is pronounced [의] (ui) at the start of a word, but when used as the possessive particle it is very commonly pronounced as [에] (e) in everyday speech. Do not be surprised to hear 저의 pronounced as 저에.

COMMON CONTRACTIONS — learn these, they are used constantly
  저의 → 제   my   (formal/polite)
  나의 → 내   my   (casual)

  제 가방이에요.      It is my bag.
  내 친구야.          It is my friend. (casual speech)

  These contracted forms are far more common in conversation than 저의 or 나의.

AFTER OTHER PRONOUNS
  당신의   your (very formal, rare in speech)
  그의     his (literary — in speech, Koreans usually just say the person's name)
  그녀의   her (literary)

In natural spoken Korean, people tend to drop 의 or use the contracted form. For example, instead of 친구의 가방 you might hear just 친구 가방 — the possessive is implied.

COMMON MISTAKE
  ✗ 나의 = my (fine in writing, but sounds stiff in speech)
  ✓ 제 or 내 = my (far more natural in conversation)`,
        examples: [
            { native: "이건 제 가방이에요.", romanized: "Igeon je gabangieeyo.", translation: "This is my bag. (제 = contracted form of 저의)" },
            { native: "친구의 이름이 뭐예요?", romanized: "Chinguui ireum i mwoyeyo?", translation: "What is your friend's name? (의 possessive)" },
            { native: "한국의 음식은 맛있어요.", romanized: "Hangugui eumsigeunn masisseoyo.", translation: "Korean food is delicious. (한국의 = of Korea)" },
            { native: "저의 꿈은 한국어를 잘하는 거예요.", romanized: "Jeoui kkumeun hangugeoreul jalhaneun geoyeyo.", translation: "My dream is to be good at Korean. (저의 = formal 'my')" },
            { native: "이 책은 선생님의 책이에요.", romanized: "I chaegeun seonsaengnimui chaegieyo.", translation: "This book is the teacher's book." },
            { native: "내 친구는 서울에 살아요.", romanized: "Nae chinguneun seoure sarayo.", translation: "My friend lives in Seoul. (내 = casual contracted form of 나의)" },
        ],
        inlineVocab: [
            { word: "의", translation: "possessive particle ('s / of) — pronounced like 에 in casual speech" },
            { word: "제", translation: "my (contracted from 저의 — polite)" },
            { word: "내", translation: "my (contracted from 나의 — casual)" },
            { word: "저의", translation: "my (full formal form, rarely used in speech)" },
            { word: "꿈", translation: "dream" },
            { word: "이름", translation: "name" },
            { word: "음식", translation: "food" },
        ]
    },
    {
        id: "ko-g-a1-32",
        level: "A1",
        title: "Particles 에게/에게서 & 한테/한테서 — To / From a Person",
        explanation: `Korean distinguishes between location particles (에/에서 from lesson 7) and person-direction particles. When something is given TO a person or received FROM a person, you must use 에게 or 한테 — NOT 에.

THE FOUR FORMS

  에게    to (a person or animal)     formal/written
  에게서  from (a person or animal)   formal/written
  한테    to (a person or animal)     informal/spoken
  한테서  from (a person or animal)   informal/spoken

AT A1, use 한테 (to) and 한테서 (from) in everyday conversation. Use 에게 / 에게서 in writing or formal situations.

MEANING 1 — TO a person (에게 / 한테)
  친구한테 선물을 줬어요.      I gave a gift to a friend.
  선생님에게 질문이 있어요.     I have a question for the teacher.
  누구한테 보냈어요?           Who did you send it to?

MEANING 2 — FROM a person (에게서 / 한테서)
  친구한테서 편지를 받았어요.   I received a letter from a friend.
  선생님에게서 배웠어요.        I learned (it) from the teacher.

CRITICAL DISTINCTION — PERSON vs LOCATION
  에    = to/at a place (destination or static location)
  에게  = to a person
  에서  = at a place (where action happens) / from a place
  에게서 = from a person

  ✗ 친구에 줬어요.     (WRONG — 에 is for places, not people)
  ✓ 친구한테 줬어요.   (CORRECT — 한테 for people)

  ✗ 선생님에게서 학교.  (mixing up concepts)
  ✓ 학교에서 배웠어요. 선생님한테서 배웠어요.
     (location: 에서 / person: 한테서 — both correct in their own sentence)`,
        examples: [
            { native: "친구한테 전화했어요.", romanized: "Chinguhaante jeonhwahaesseoyo.", translation: "I called (to) a friend. (한테 = to a person, informal)" },
            { native: "선생님에게 질문이 있어요.", romanized: "Seonsaengnimege jilmuni isseoyo.", translation: "I have a question for the teacher. (에게 = to a person, formal)" },
            { native: "친구한테서 선물을 받았어요.", romanized: "Chinguhaanteseo seonmureul badasseoyo.", translation: "I received a gift from a friend. (한테서 = from a person)" },
            { native: "누구한테 줬어요?", romanized: "Nuguhante jwosseoyo?", translation: "Who did you give it to?" },
            { native: "어머니한테서 들었어요.", romanized: "Eomeonihaanteseo deureoosseoyo.", translation: "I heard it from my mother." },
            { native: "이 편지는 형한테서 왔어요.", romanized: "I pyeonjineun hyeonghanteseo wasseoyo.", translation: "This letter came from my older brother." },
        ],
        inlineVocab: [
            { word: "한테", translation: "to (a person/animal) — informal" },
            { word: "한테서", translation: "from (a person/animal) — informal" },
            { word: "에게", translation: "to (a person/animal) — formal/written" },
            { word: "에게서", translation: "from (a person/animal) — formal/written" },
            { word: "선물", translation: "gift / present" },
            { word: "편지", translation: "letter" },
            { word: "받았어요", translation: "received (past tense of 받다)" },
        ]
    },
    {
        id: "ko-g-a1-33",
        level: "A1",
        title: "Particles 부터/까지 — From … To / Until",
        explanation: `부터 and 까지 express a range — a start point and an end point. They work for both time and place, and are very commonly used together.

부터   from / starting at / since   (start point)
까지   to / until / up to / as far as  (end point)

TIME RANGES
  9시부터 6시까지    from 9 o'clock to 6 o'clock
  월요일부터 금요일까지  from Monday to Friday
  지금부터           from now / starting now
  내일까지           until tomorrow / by tomorrow

PLACE RANGES
  서울부터 부산까지   from Seoul to Busan
  여기부터 저기까지   from here to there

USED SEPARATELY — they do not have to appear together
  부터 alone:
    언제부터 공부했어요?   From when did you study? / Since when have you studied?
    지금부터 시작해요.     We start now. (from now)

  까지 alone:
    몇 시까지 해요?        Until what time does it go?
    여기까지예요.           Up to here. / That's all.
    학교까지 걸어요.        I walk all the way to school.

PARTICLE STACKING — 까지도 (even up to / all the way to)
  집까지도 왔어요.    (They) even came all the way to my house.

COMMON MISTAKE — 부터 is for start points; do not use 에서 for time ranges.
  ✗ 9시에서 6시까지     (에서 is for location, not time spans)
  ✓ 9시부터 6시까지     (부터 for time start points — correct)`,
        examples: [
            { native: "9시부터 6시까지 일해요.", romanized: "Ahopsibuto yeoseotsiggaji ilhaeyo.", translation: "I work from 9 o'clock to 6 o'clock." },
            { native: "월요일부터 금요일까지 학교에 가요.", romanized: "Woroyilbuto geumyoilkkaji hakgyoe gayo.", translation: "I go to school from Monday to Friday." },
            { native: "서울부터 부산까지 KTX로 얼마나 걸려요?", romanized: "Seoubuto busankkaji KTX ro eolmana geollyeoyo?", translation: "How long does it take from Seoul to Busan by KTX?" },
            { native: "지금부터 시작해요!", romanized: "Jigeum buto sijakaeyo!", translation: "We start right now! (from now)" },
            { native: "몇 시까지 있어요?", romanized: "Myeot sikkaji isseoyo?", translation: "Until what time are you here?" },
            { native: "내일까지 해 주세요.", romanized: "Naeilkkaji hae juseyo.", translation: "Please do it by tomorrow." },
        ],
        inlineVocab: [
            { word: "부터", translation: "from / since / starting at (start point)" },
            { word: "까지", translation: "to / until / up to / by (end point)" },
            { word: "지금부터", translation: "from now / starting now" },
            { word: "내일까지", translation: "by tomorrow / until tomorrow" },
            { word: "시작하다", translation: "to start / begin" },
            { word: "걸리다", translation: "to take (time) / to hang" },
            { word: "일하다", translation: "to work" },
        ]
    },
    {
        id: "ko-g-a1-34",
        level: "A1",
        title: "Particle 나/이나 — Or (Between Nouns)",
        explanation: `나/이나 is used between two nouns to express a choice: 'A or B'. Like most Korean particles, it has two forms depending on the final sound of the preceding noun.

FORMATION
  나    after a vowel-ending noun
  이나  after a consonant-ending noun

  사과나 바나나     apple or banana       (사과 ends in vowel → 나)
  빵이나 밥        bread or rice          (빵 ends in consonant → 이나)
  커피나 차        coffee or tea          (커피 ends in vowel → 나)
  책이나 잡지      a book or a magazine   (책 ends in consonant → 이나)

ASKING FOR A CHOICE
  커피나 차 드릴까요?       Shall I bring you coffee or tea?
  사과나 바나나 어때요?     How about an apple or banana?
  주말에 집이나 카페에서    At the weekend, at home or at the café?
  공부할까요?               Shall we study?

나/이나 vs 아니면
Both mean 'or' but they function differently:
  나/이나   connects nouns directly (A or B)
    빵이나 밥 먹을까요?     Shall we eat bread or rice?
  아니면    connects clauses or alternatives in a sentence (or / otherwise)
    빵을 먹을까요, 아니면 밥을 먹을까요?
    Shall we eat bread, or shall we eat rice?

At A1, use 나/이나 for simple noun choices and 아니면 when presenting two complete alternatives.

NOTE — ADVANCED USE TO RECOGNISE LATER
나/이나 can also carry the nuance of 'as many as / as much as' (surprise at quantity) or 'even' (concession). For example: 세 개나 먹었어요 means 'I ate as many as three (that's a lot!)'. Stick to the 'or' meaning at A1 — just be aware you may hear it used this way.`,
        examples: [
            { native: "커피나 차 드릴까요?", romanized: "Keopina cha deurilkkayo?", translation: "Shall I bring you coffee or tea? (나 after vowel)" },
            { native: "빵이나 밥 먹을까요?", romanized: "Ppangina bap meogeulkkayo?", translation: "Shall we eat bread or rice? (이나 after consonant)" },
            { native: "주말에 집이나 카페에서 만날까요?", romanized: "Jumare jibina kapeeseo mannalkkayo?", translation: "Shall we meet at home or a café at the weekend?" },
            { native: "사과나 바나나 드세요.", romanized: "Sagwana banana deuseyo.", translation: "Please have an apple or banana." },
            { native: "책이나 잡지 읽어요?", romanized: "Chaegina japji ilgeoyo?", translation: "Do you read books or magazines?" },
            { native: "버스나 지하철로 가요.", romanized: "Beoseuna jihacheollo gayo.", translation: "I go by bus or subway." },
        ],
        inlineVocab: [
            { word: "나/이나", translation: "or (between nouns — 나 after vowel, 이나 after consonant)" },
            { word: "아니면", translation: "or / otherwise (between clauses)" },
            { word: "사과", translation: "apple" },
            { word: "바나나", translation: "banana" },
            { word: "잡지", translation: "magazine" },
            { word: "주말", translation: "weekend" },
            { word: "차", translation: "tea" },
        ]
    },
]
