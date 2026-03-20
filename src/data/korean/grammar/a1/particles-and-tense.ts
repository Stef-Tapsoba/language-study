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
        ]
    },
]
