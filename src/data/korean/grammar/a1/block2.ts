import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-10",
        level: "A1",
        title: "Family vocabulary + 있어요/없어요 for family members",
        explanation: `Korean family terms encode the speaker's gender and the relationship directly. The same biological relationship has different words depending on who is speaking.

| Term | Meaning | Said by |
|------|---------|---------|
| 아버지 | father | anyone |
| 어머니 | mother | anyone |
| 오빠 | older brother | female speaker |
| 형 | older brother | male speaker |
| 언니 | older sister | female speaker |
| 누나 | older sister | male speaker |
| 동생 | younger sibling | anyone |
| 남동생 | younger brother | anyone |
| 여동생 | younger sister | anyone |

오빠 doesn't just mean "older brother" — it means "my older brother, and I am female." This feels unusual at first and then completely natural. It reflects how deeply Korean encodes relationships.

부모님 = parents (formal/polite plural — 님 suffix adds respect)
가족 = family

Talking about your family uses the 있어요/없어요 pattern from Unit 7:
저는 남동생이 있어요. — I have a younger brother.
저는 언니가 두 명 있어요. — I have two older sisters. (명 = counter for people)
저는 형이 없어요. — I don't have an older brother.

To say how many: 한 명 (1 person), 두 명 (2), 세 명 (3), 네 명 (4)...
저는 가족이 네 명이에요. — My family has four people.`,
        examples: [
            { native: "저는 부모님이랑 남동생이 있어요.", romanized: "Jeoneun bumonnimirang namdongsaengi isseoyo.", translation: "I have my parents and a younger brother. (이랑 = and/with — casual connector)" },
            { native: "저는 언니가 있어요. 오빠는 없어요.", romanized: "Jeoneun eonniga isseoyo. Oppaneun eopseoyo.", translation: "I have an older sister (female speaking). I don't have an older brother." },
            { native: "가족이 어떻게 돼요? — 저는 가족이 네 명이에요.", romanized: "Gagogi eotteoke dwaeyo? — Jeoneun gagogi ne myeongieyo.", translation: "What's your family like? — My family has four people." },
            { native: "형제가 있어요? — 네, 여동생이 한 명 있어요.", romanized: "Hyeongjega isseoyo? — Ne, yeodongsaengi han myeong isseoyo.", translation: "Do you have siblings? — Yes, I have one younger sister." },
            { native: "막내예요? — 네, 저는 막내예요!", romanized: "Maknaeyeyo? — Ne, jeoneun maknaeyeyo!", translation: "Are you the youngest? — Yes, I'm the youngest!" },
        ],
        inlineVocab: [
            { word: "아버지 / 어머니", romanized: "abeoji / eomeoni", translation: "father / mother (polite forms — anyone can say these)" },
            { word: "오빠 / 형", romanized: "oppa / hyeong", translation: "older brother (female / male speaker)" },
            { word: "언니 / 누나", romanized: "eonni / nuna", translation: "older sister (female / male speaker)" },
            { word: "동생 / 남동생 / 여동생", romanized: "dongsaeng / namdongsaeng / yeodongsaeng", translation: "younger sibling / younger brother / younger sister" },
            { word: "부모님", romanized: "bumonim", translation: "parents (formal — 님 adds respect)" },
            { word: "막내", romanized: "maknae", translation: "youngest child in the family" },
            { word: "명", romanized: "myeong", translation: "counter for people" },
        ],
    },
    {
        id: "ko-g-a1-11",
        level: "A1",
        title: "Describing family members — combining what you know",
        explanation: `You now have the copula (이에요/예요), numbers, professions, and age. All of these work for family members. Put them together.

Combining frames:
제 어머니는 선생님이에요. — My mother is a teacher.
아버지는 회사원이에요. — My father is an office worker.
남동생은 대학생이에요. — My younger brother is a university student.
언니는 스물아홉 살이에요. — My older sister is 29.

제 vs 저의:
Both mean "my." 제 is the short form used in speech. 저의 exists but sounds formal and stiff — always use 제 in conversation.

Topic chaining with 은/는:
Notice in these sentences the topic marker 은/는 keeps appearing: 제 어머니**는**, 아버지**는**, 남동생**은**. When you introduce a person as the topic, 은/는 marks them. This is the beginning of a pattern that will be explained fully in Block 3. For now: topic 은/는 = "as for ___" or "speaking of ___". 은 after a consonant, 는 after a vowel.

Asking about family:
가족이 어떻게 돼요? — What's your family like?
형제가 있어요? — Do you have siblings?
몇 명이에요? — How many people?`,
        examples: [
            { native: "제 어머니는 선생님이에요. 정말 멋있어요!", romanized: "Je eomeonineun seonsaengnimieyo. Jeongmal meositsseoyo!", translation: "My mother is a teacher. She's really cool!" },
            { native: "아버지는 의사예요. 병원에서 일해요.", romanized: "Abeojineun uisayeyo. Byeongoneseo ilhaeyo.", translation: "My father is a doctor. He works at a hospital." },
            { native: "동생이 몇 살이에요? — 스물두 살이에요.", romanized: "Dongsaengi myeot sarieyo? — Seumudu sarieyo.", translation: "How old is your sibling? — They're 22." },
            { native: "언니는 뭐 해요? — 언니는 디자이너예요.", romanized: "Eonnineun mwo haeyo? — Eonnineun dijaineoeyeo.", translation: "What does your older sister do? — My older sister is a designer." },
            { native: "저는 가족이 다섯 명이에요. 부모님이랑 형이랑 저예요.", romanized: "Jeoneun gagogi daseos myeongieyo. Bumonnimirang hyeongirang jeoyeyo.", translation: "My family has five people. My parents, my older brother, and me." },
        ],
        inlineVocab: [
            { word: "제", romanized: "je", translation: "my (polite spoken form — always use this, not 저의)" },
            { word: "은 / 는", romanized: "eun / neun", translation: "topic marker — 은 after consonant, 는 after vowel (explained fully Block 3)" },
            { word: "멋있어요", romanized: "meositsseoyo", translation: "cool / stylish / impressive" },
            { word: "병원", romanized: "byeongwon", translation: "hospital" },
            { word: "이랑 / 랑", romanized: "irang / rang", translation: "and/with (casual connector — 이랑 after consonant, 랑 after vowel)" },
        ],
    },
    {
        id: "ko-g-a1-12",
        level: "A1",
        title: "좋아해요 / 싫어해요 — likes and dislikes + first sight of 을/를",
        explanation: `Your first real action verb: 좋아해요 (I like). Before this unit, everything was state-based (이에요, 있어요). 좋아해요 is a true action verb — you perform liking something.

The frames:
저는 ___ 를/을 좋아해요. — I like ___.
저는 ___ 를/을 싫어해요. — I dislike / don't like ___.
저는 ___ 를/을 정말 좋아해요. — I really like ___.
저는 ___ 를/을 별로 안 좋아해요. — I don't really like ___.

After the thing you like, something small appears: 를 or 을.
커피**를** 좋아해요. — like coffee (커피 ends in vowel → 를)
음악**을** 좋아해요. — like music (음악 ends in consonant → 을)
한국 음식**을** 좋아해요. — like Korean food (음식 ends in consonant → 을)

You've now seen this pattern twice — in Unit 7 (공부해요) and here. Look at what these small particles have in common: they always appear between the thing and the verb. They mark the object — the thing the verb is acting on. The name for this: object particle. Vowel ending → 를. Consonant ending → 을.

Things to like:
커피 · 음악 · 한국 음식 · 여행 · 드라마 · 영화 · 운동 · 요리 · 동물 · 독서

도 (also): 저는 여행도 좋아해요. — I also like travel. (도 replaces 를/을 for "also")`,
        examples: [
            { native: "저는 한국 음식을 정말 좋아해요!", romanized: "Jeoneun hanguk eumsigul jeongmal joahaeyo!", translation: "I really like Korean food!" },
            { native: "뭐 좋아해요? — 저는 드라마를 좋아해요.", romanized: "Mwo joahaeyo? — Jeoneun deuramareul joahaeyo.", translation: "What do you like? — I like dramas." },
            { native: "운동을 별로 안 좋아해요.", romanized: "Undongeul byeolro an joahaeyo.", translation: "I don't really like exercise." },
            { native: "저는 커피를 좋아해요. 그리고 음악도 좋아해요.", romanized: "Jeoneun keopireul joahaeyo. Geurigo eumagdo joahaeyo.", translation: "I like coffee. And I also like music. (그리고 = and, 도 = also)" },
            { native: "어떤 음식을 좋아해요? — 특히 비빔밥을 좋아해요.", romanized: "Eotteon eumsigul joahaeyo? — Teukhi bibimbapeul joahaeyo.", translation: "What kind of food do you like? — I especially like bibimbap." },
        ],
        inlineVocab: [
            { word: "좋아해요", romanized: "joahaeyo", translation: "like (first action verb — present tense ~해요 form)" },
            { word: "싫어해요", romanized: "sireohaeyo", translation: "dislike" },
            { word: "를 / 을", romanized: "reul / eul", translation: "object particle — marks what the verb acts on. 를 after vowel, 을 after consonant. Named here." },
            { word: "정말", romanized: "jeongmal", translation: "really / truly" },
            { word: "별로 안", romanized: "byeolro an", translation: "not really / not particularly (별로 requires negation)" },
            { word: "도", romanized: "do", translation: "also / too (replaces 를/을: 커피도 = coffee too)" },
            { word: "특히", romanized: "teukhi", translation: "especially" },
        ],
    },
    {
        id: "ko-g-a1-13",
        level: "A1",
        title: "을/를 fully named + the object particle in action",
        explanation: `In Unit 9, you saw 를/을 appearing between the thing and the verb. Now name it: this is the object particle.

The object particle marks the direct object of an action verb — the thing the verb acts on.

을/를 rule:
- 를 after a word ending in a vowel: 커피를, 드라마를, 여행을... wait — 여행 ends in ㅇ which is a consonant
- 을 after a word ending in a consonant: 음악을, 운동을, 밥을, 책을

Let's practice with the verbs you know:
커피를 마셔요. — drink coffee (마시다 = to drink)
밥을 먹어요. — eat rice/food (먹다 = to eat)
책을 읽어요. — read a book (읽다 = to read)
음악을 들어요. — listen to music (듣다/들다 = to listen)
영화를 봐요. — watch a movie (보다 = to watch/see)

These verbs are new — don't memorise them individually yet. See how 을/를 works across different verbs. The particle is constant; only the verb changes.

Object particle vs topic particle (을/를 vs 은/는):
These two particles are often confused. A quick contrast:
커피를 좋아해요. — I like coffee. (커피 is the object — what I like)
커피는 좋아해요. — As for coffee, I like it. (커피 is the topic — implies contrast or emphasis)

At A1, use 를/을 as your default after things. The 은/는 nuance will develop naturally.

One important note: in spoken Korean, 를/을 and even 이/가 are frequently dropped in casual speech. 커피 좋아해요 is perfectly natural. But learning them now helps you produce clear, complete sentences.`,
        examples: [
            { native: "저는 매일 아침에 커피를 마셔요.", romanized: "Jeoneun maeil achime keopireul masyeoyo.", translation: "I drink coffee every morning. (커피를 = coffee as object)" },
            { native: "밥을 먹어요? — 네, 지금 먹어요.", romanized: "Bapeul meogeoyo? — Ne, jigeum meogeoyo.", translation: "Are you eating? — Yes, I'm eating now." },
            { native: "음악을 들어요. 특히 K-pop을 좋아해요.", romanized: "Eumagul deoreoyo. Teukhi K-popeul joahaeyo.", translation: "I listen to music. I especially like K-pop." },
            { native: "책을 자주 읽어요? — 별로 안 읽어요.", romanized: "Chageul jaju ilgeoyo? — Byeolro an ilgeoyo.", translation: "Do you often read books? — Not really." },
            { native: "영화를 좋아해요. 매주 봐요.", romanized: "Yeonghwareul joahaeyo. Maejo bwayo.", translation: "I like movies. I watch them every week." },
        ],
        inlineVocab: [
            { word: "를 / 을", romanized: "reul / eul", translation: "object particle — marks the direct object of an action verb" },
            { word: "마시다", romanized: "masida", translation: "to drink (마셔요 = drinks — contraction)" },
            { word: "먹다", romanized: "meokda", translation: "to eat (먹어요 = eats)" },
            { word: "읽다", romanized: "ikda", translation: "to read (읽어요 = reads)" },
            { word: "듣다", romanized: "deutda", translation: "to listen (들어요 = listens — ㄷ irregular)" },
            { word: "보다", romanized: "boda", translation: "to watch/see (봐요 = watches — contraction)" },
        ],
    },
    {
        id: "ko-g-a1-14",
        level: "A1",
        title: "Present tense ~아요/어요 — the Korean verb system revealed",
        explanation: `Look at the verbs you've been using. Every single one ends in ~요. This is not a coincidence. It's the entire Korean present tense system — and it's simpler than you think.

The discovery: look at these sentences and notice the endings:
저는 커피를 마셔**요**. 저는 밥을 먹어**요**. 저는 학교에 가**요**. 저는 집에 있어**요**. 저는 드라마를 봐**요**.

Two things every sentence has in common:
1. The verb comes **last**. Always. Subject → object → time → verb. This is the most important structural fact about Korean.
2. Verbs end in **~아요** or **~어요**.

The rule for ~아요/~어요:
- Last vowel in the verb stem is ㅏ or ㅗ → ~아요: 가다 → 가**요** (가+아요 contracted)
- Any other vowel → ~어요: 먹다 → 먹**어요**
- 하다 verbs → **~해요** (always): 공부하다 → 공부**해요**

하다 verbs are enormously productive: any noun + 하다 = a verb. 공부해요, 운동해요, 요리해요, 일해요... thousands of verbs follow this pattern.

Common contractions (don't sound out the full uncontracted form — it's never used):
가다 → 가요 (가+아요 → 가요)
오다 → 와요 (오+아요 → 와요)
마시다 → 마셔요 (마시+어요 → 마셔요)
보다 → 봐요 (보+아요 → 봐요)`,
        examples: [
            { native: "저는 아침에 커피를 마셔요.", romanized: "Jeoneun achime keopireul masyeoyo.", translation: "I drink coffee in the morning." },
            { native: "매일 저녁에 운동해요.", romanized: "Maeil jeonyeoge undonghaeyo.", translation: "I exercise every evening. (운동하다 → 운동해요)" },
            { native: "학교에 가요. 수업이 있어요.", romanized: "Hagyeoe gayo. Sueopi isseoyo.", translation: "I go to school. I have class." },
            { native: "뭐 해요? — 책을 읽어요.", romanized: "Mwo haeyo? — Chageul ilgeoyo.", translation: "What are you doing? — I'm reading a book." },
            { native: "저는 집에서 요리해요. 요리를 좋아해요.", romanized: "Jeoneun jibeseo yorihaeyo. Yorireul joahaeyo.", translation: "I cook at home. I like cooking." },
            { native: "친구를 만나요. 같이 밥을 먹어요.", romanized: "Chingureul mannayo. Gachi bapeul meogeoyo.", translation: "I meet a friend. We eat together." },
        ],
        inlineVocab: [
            { word: "~아요 / ~어요", romanized: "~ayo / ~eoyo", translation: "present tense ending — ㅏ/ㅗ stems → 아요, others → 어요, 하다 → 해요" },
            { word: "가요 / 와요", romanized: "gayo / wayo", translation: "goes / comes (contractions of 가+아요, 오+아요)" },
            { word: "봐요 / 마셔요", romanized: "bwayo / masyeoyo", translation: "watches / drinks (contractions)" },
            { word: "하다 verbs", romanized: "hada verbs", translation: "noun + 하다 → 해요: 공부해요, 운동해요, 요리해요, 일해요 (productive pattern)" },
            { word: "같이", romanized: "gachi", translation: "together" },
            { word: "매일", romanized: "maeil", translation: "every day (no 에 needed — relative time word)" },
        ],
    },
    {
        id: "ko-g-a1-15",
        level: "A1",
        title: "Daily routine verbs + present tense in context",
        explanation: `The present tense pattern is real and productive. Let's fill it with the daily life verbs you need most.

Core daily verbs (with present tense forms):
일어나다 → 일어나요 — wake up / get up
자다 → 자요 — sleep
먹다 → 먹어요 — eat
마시다 → 마셔요 — drink
가다 → 가요 — go
오다 → 와요 — come
만나다 → 만나요 — meet
보다 → 봐요 — watch / see
듣다 → 들어요 — listen (ㄷ irregular — drops ㄷ before vowel)
읽다 → 읽어요 — read
쉬다 → 쉬어요 → 쉬어요 — rest
운동하다 → 운동해요 — exercise
공부하다 → 공부해요 — study
요리하다 → 요리해요 — cook

Time words used with routines (no 에 on relative words):
매일 — every day
보통 — usually / normally
오늘 — today
아침에 — in the morning (에 needed on specific times)
저녁에 — in the evening

Building a routine sentence:
[Time] + [place or object] + [verb]
저는 아침에 커피를 마셔요. — I drink coffee in the morning.
저는 보통 저녁에 드라마를 봐요. — I usually watch dramas in the evening.

**이/가 — the subject marker:**
You've seen 이/가 since Block 1. Here it appears again: 수업**이** 있어요, 친구**가** 와요. 이/가 marks the subject — who or what is doing or being something. 이 after consonant, 가 after vowel. You don't need to fully control this yet — just notice it.`,
        examples: [
            { native: "보통 몇 시에 일어나요? — 일곱 시에 일어나요.", romanized: "Botong myeot sie ireonayo? — Ilgop sie ireonayo.", translation: "What time do you usually get up? — I get up at 7." },
            { native: "저는 매일 아침에 운동해요. 여섯 시에 일어나요.", romanized: "Jeoneun maeil achime undonghaeyo. Yeoseot sie ireonayo.", translation: "I exercise every morning. I get up at 6." },
            { native: "오늘 저녁에 친구를 만나요.", romanized: "Oneul jeonyeoge chingureul mannayo.", translation: "I'm meeting a friend this evening." },
            { native: "보통 몇 시에 자요? — 저는 열두 시쯤 자요.", romanized: "Botong myeot sie jayo? — Jeoneun yeoldu sijjeum jayo.", translation: "What time do you usually sleep? — I sleep at around midnight." },
            { native: "주말에 보통 뭐 해요? — 집에서 쉬어요. 요리도 해요.", romanized: "Jumare botong mwo haeyo? — Jibeseo swi eoyo. Yorido haeyo.", translation: "What do you usually do on weekends? — I rest at home. I also cook." },
        ],
        inlineVocab: [
            { word: "일어나다", romanized: "ireonada", translation: "to get up / wake up (일어나요)" },
            { word: "자다", romanized: "jada", translation: "to sleep (자요)" },
            { word: "쉬다", romanized: "swida", translation: "to rest (쉬어요)" },
            { word: "들다", romanized: "deulda", translation: "to listen / to lift (들어요 — ㄷ irregular)" },
            { word: "보통", romanized: "botong", translation: "usually / normally (no 에)" },
            { word: "~쯤", romanized: "~jjeum", translation: "approximately / around (시쯤 = around o'clock)" },
            { word: "이 / 가", romanized: "i / ga", translation: "subject marker: 이 after consonant, 가 after vowel — named here" },
        ],
    },
    {
        id: "ko-g-a1-16",
        level: "A1",
        title: "있어요 for location + 에 particle for place",
        explanation: `있어요 has already done two jobs: possession (저는 형이 있어요) and existence (카페가 있어요). Now it does its third and most important job: location.

있어요 for location:
화장실이 어디에 있어요? — Where is the bathroom?
카페가 2층에 있어요. — The café is on the 2nd floor.
저는 집에 있어요. — I'm at home. / I'm in the house.
지금 어디에 있어요? — Where are you right now?

The particle 에 marks the location where something exists (있어요) or where you're heading (가요). You've been using it since Block 1. Here it's named:

에 — location of existence or destination:
집**에** 있어요. — (is) at home
학교**에** 가요. — go to school
카페**에** 와요. — come to the café

Essential location words:
여기 — here
거기 — there (near the listener)
저기 — over there (far from both)
어디 — where

이쪽 / 저쪽 — this side / that side
위 / 아래 / 옆 / 앞 / 뒤 — above/below/beside/in front/behind

Asking where things are:
___이/가 어디에 있어요? — Where is ___?
___이/가 어디 있어요? — same, 에 often omitted in speech

You'll learn the full 에 vs 에서 distinction in Block 4 when it becomes the big payoff moment. For now: 에 + 있어요 = location where something IS.`,
        examples: [
            { native: "화장실이 어디에 있어요? — 저기 있어요.", romanized: "Hwajangsiri eodie isseoyo? — Jeogi isseoyo.", translation: "Where is the bathroom? — It's over there." },
            { native: "지금 어디에 있어요? — 카페에 있어요.", romanized: "Jigeum eodie isseoyo? — Kapeee isseoyo.", translation: "Where are you right now? — I'm at a café." },
            { native: "편의점이 근처에 있어요? — 네, 저쪽에 있어요.", romanized: "Pyeonuijeomi geuncheoe isseoyo? — Ne, jejogeoe isseoyo.", translation: "Is there a convenience store nearby? — Yes, it's over that way." },
            { native: "가방이 어디에 있어요? — 의자 위에 있어요.", romanized: "Gabangi eodie isseoyo? — Uija wie isseoyo.", translation: "Where is the bag? — It's on the chair." },
            { native: "화장실은 2층에 있어요.", romanized: "Hwajangsileun icheonge isseoyo.", translation: "The bathroom is on the 2nd floor. (2층 = second floor)" },
        ],
        inlineVocab: [
            { word: "에 있어요", romanized: "e isseoyo", translation: "is at/in/on (location existence) — 에 marks the place" },
            { word: "여기 / 거기 / 저기", romanized: "yeogi / geogi / jeogi", translation: "here / there (near you) / over there (far)" },
            { word: "어디에 있어요?", romanized: "eodie isseoyo?", translation: "Where is ___? (most useful location question)" },
            { word: "위 / 아래 / 옆 / 앞 / 뒤", romanized: "wi / arae / yeop / ap / dwi", translation: "on top of / below / beside / in front / behind" },
            { word: "층", romanized: "cheung", translation: "floor/storey (1층 = ground floor / 1st floor)" },
            { word: "근처에", romanized: "geuncheoe", translation: "nearby / in the vicinity" },
        ],
    },
    {
        id: "ko-g-a1-17",
        level: "A1",
        title: "Adjective conjugation — adjectives work like verbs",
        explanation: `In Korean, adjectives are a type of verb. They conjugate exactly like action verbs — with the same ~아요/어요 ending. This is one of the most surprising and useful features of Korean grammar.

크다 (big) → 커요. 작다 (small) → 작아요. 좋다 (good/nice) → 좋아요. 나쁘다 (bad) → 나빠요. 예쁘다 (pretty) → 예뻐요.

The same rule: ㅏ/ㅗ vowel → ~아요, other vowels → ~어요, and ㅡ drops before the ending.

**ㅡ-drop irregular:**
Any verb or adjective ending in ㅡ drops ㅡ before ~아요/어요:
크다 (big): 크 + 어요 → ㅡ drops → 커요
나쁘다 (bad): 나쁘 + 아요 → ㅡ drops → 나빠요
예쁘다 (pretty): 예쁘 + 어요 → ㅡ drops → 예뻐요
바쁘다 (busy): 바쁘 + 아요 → ㅡ drops → 바빠요
슬프다 (sad): 슬프 + 어요 → ㅡ drops → 슬퍼요

**ㅂ irregular:**
Some adjectives ending in ㅂ change ㅂ → 워 before a vowel:
덥다 (hot) → 더워요. 춥다 (cold) → 추워요. 어렵다 (difficult) → 어려워요. 가깝다 (close/near) → 가까워요.

Adjectives in sentences:
오늘 날씨가 어때요? — What's the weather like today?
추워요. / 더워요. / 좋아요. — It's cold / hot / nice.
한국어가 어려워요? — Is Korean difficult?
조금 어렵지만 재미있어요! — A little difficult but interesting!

**~지만 = but** (first glimpse of a clause connector — more in Block 5).`,
        examples: [
            { native: "오늘 날씨가 어때요? — 정말 추워요!", romanized: "Oneul nalssiga eottaeyo? — Jeongmal chuwoyo!", translation: "How's the weather today? — It's really cold!" },
            { native: "한국어가 어려워요? — 네, 조금 어렵지만 재미있어요.", romanized: "Hangugeoga eoryeowoyo? — Ne, jogeum eoryeopjiman jaemiisseoyo.", translation: "Is Korean difficult? — Yes, a little difficult but interesting." },
            { native: "저 카페 어때요? — 분위기가 예뻐요!", romanized: "Jeo kape eottaeyo? — Bunwigiga yeppeoyo!", translation: "How's that café? — The atmosphere is pretty!" },
            { native: "가방이 너무 비싸요. 작은 거 있어요?", romanized: "Gabangi neomu bissayo. Jageun geo isseoyo?", translation: "The bag is too expensive. Do you have a smaller one?" },
            { native: "날씨가 좋아요! 같이 산책할까요?", romanized: "Nalssiga joayo! Gachi sanchaekhalkayo?", translation: "The weather is nice! Shall we take a walk together?" },
        ],
        inlineVocab: [
            { word: "크다 → 커요 / 작다 → 작아요", romanized: "keuda → keoyo / jakda → jagayo", translation: "big → is big / small → is small" },
            { word: "좋다 → 좋아요 / 나쁘다 → 나빠요", romanized: "jota → joayo / nappeuda → nappayo", translation: "good → is good / bad → is bad (ㅡ drop)" },
            { word: "덥다 → 더워요 / 춥다 → 추워요", romanized: "deodda → deowoyo / chupda → chuwoyo", translation: "hot → is hot / cold → is cold (ㅂ irregular)" },
            { word: "어렵다 → 어려워요 / 재미있어요", romanized: "eoryeopda → eoryeowoyo / jaemiisseoyo", translation: "difficult → is difficult / is interesting/fun" },
            { word: "분위기", romanized: "bunwigi", translation: "atmosphere / vibe" },
            { word: "~지만", romanized: "~jiman", translation: "but (first clause connector — fully explained in Block 5)" },
            { word: "너무", romanized: "neomu", translation: "too / excessively (너무 비싸요 = too expensive)" },
        ],
    },
]
