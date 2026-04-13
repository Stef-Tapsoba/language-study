import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-10",
        level: "A1",
        title: "Family vocabulary + 있어요/없어요 for family members",
        explanation: `Korean family terms encode the speaker's gender directly — the same biological relationship has different words depending on who is speaking. 있어요/없어요 states who you have: 저는 남동생이 있어요 (I have a younger brother).`,
        rules: [
            {
                condition: "Female speaker",
                result: "오빠 (older brother) · 언니 (older sister)",
                examples: [{ native: "오빠가 있어요", romanized: "oppaga isseoyo", translation: "I have an older brother (female speaker)" }, { native: "언니는 선생님이에요", romanized: "eonnineun seonsaengnimieyo", translation: "My older sister is a teacher (female speaker)" }, { native: "언니는 스물아홉 살이에요", romanized: "eonnineun seumulahop sarieyo", translation: "My older sister is 29 years old (female speaker)" }],
            },
            {
                condition: "Male speaker",
                result: "형 (older brother) · 누나 (older sister)",
                examples: [{ native: "형이 있어요", romanized: "hyeongi isseoyo", translation: "I have an older brother (male speaker)" }, { native: "누나는 의사예요", romanized: "nunaneun uisayeyo", translation: "My older sister is a doctor (male speaker)" }, { native: "형은 회사원이에요", romanized: "hyeongeun hoesawonieyo", translation: "My older brother is an office worker (male speaker)" }],
            },
            {
                condition: "Any speaker — younger siblings",
                result: "동생 · 남동생 · 여동생",
                examples: [{ native: "남동생이 한 명 있어요", romanized: "namdongsaengi han myeong isseoyo", translation: "I have one younger brother" }, { native: "여동생이 없어요", romanized: "yeodongsaengi eopseoyo", translation: "I don't have a younger sister" }, { native: "동생이 있어요?", romanized: "dongsaengi isseoyo?", translation: "Do you have a younger sibling?" }],
            },
        ],
        notes: [
            {
                type: "culture",
                content: "오빠 doesn't just mean 'older brother' — it encodes that the speaker is female. Korean family terms reflect relationship and the speaker's gender, not just biology. This feels unusual at first and then completely natural.",
            },
            {
                type: "tip",
                content: "명 is the counter for people: 한 명 (1), 두 명 (2), 세 명 (3), 네 명 (4). 저는 가족이 네 명이에요 = My family has four people.",
            },
        ],
        examples: [
            { native: "저는 부모님이랑 남동생이 있어요.", romanized: "Jeoneun bumonnimirang namdongsaengi isseoyo.", translation: "I have my parents and a younger brother. (이랑 = and/with — casual connector)" },
            { native: "저는 언니가 있어요. 오빠는 없어요.", romanized: "Jeoneun eonniga isseoyo. Oppaneun eopseoyo.", translation: "I have an older sister (female speaking). I don't have an older brother." },
            { native: "가족이 어떻게 돼요? — 저는 가족이 네 명이에요.", romanized: "Gagogi eotteoke dwaeyo? — Jeoneun gagogi ne myeongieyo.", translation: "What's your family like? — My family has four people." },
            { native: "형제가 있어요? — 네, 여동생이 한 명 있어요.", romanized: "Hyeongjega isseoyo? — Ne, yeodongsaengi han myeong isseoyo.", translation: "Do you have siblings? — Yes, I have one younger sister." },
            { native: "막내예요? — 네, 저는 막내예요!", romanized: "Maknaeyeyo? — Ne, jeoneun maknaeyeyo!", translation: "Are you the youngest? — Yes, I'm the youngest!" },
        ],
        inlineVocab: [
            { word: "저는 남동생이 있어요", romanized: "Jeoneun namdongsaengi isseoyo", translation: "I have a younger brother." },
            { word: "오빠", romanized: "oppa", translation: "older brother (female speaker)" },
            { word: "저는 가족이 네 명이에요", romanized: "Jeoneun gagogi ne myeongieyo", translation: "My family has four people." },
            { word: "명", romanized: "myeong", translation: "counter for people" },
        ],
    },
    {
        id: "ko-g-a1-11",
        level: "A1",
        title: "Describing family members — combining what you know",
        explanation: `You now have the copula, numbers, professions, and age — all of these work with family members using the same frames. 제 (my, polite) + family term + 은/는 is the standard pattern.`,
        notes: [
            {
                type: "tip",
                content: "제 is the polite spoken form of 'my.' 저의 is the full form — it exists but sounds stiff. Always use 제 in conversation.",
            },
            {
                type: "tip",
                content: "은/는 after a family member marks them as the topic: 제 어머니는, 아버지는, 남동생은. Topic marker 은/는 (은 after consonant, 는 after vowel) is explained fully in Block 3.",
            },
        ],
        fixedPhrases: [
            { native: "가족이 어떻게 돼요?", romanized: "gagogi eotteoke dwaeyo?", translation: "What's your family like?" },
            { native: "형제가 있어요?", romanized: "hyeongjega isseoyo?", translation: "Do you have siblings?" },
            { native: "몇 명이에요?", romanized: "myeot myeong-ieyo?", translation: "How many people?" },
        ],
        examples: [
            { native: "제 어머니는 선생님이에요. 정말 멋있어요!", romanized: "Je eomeonineun seonsaengnimieyo. Jeongmal meositsseoyo!", translation: "My mother is a teacher. She's really cool!" },
            { native: "아버지는 의사예요. 병원에서 일해요.", romanized: "Abeojineun uisayeyo. Byeongoneseo ilhaeyo.", translation: "My father is a doctor. He works at a hospital." },
            { native: "동생이 몇 살이에요? — 스물두 살이에요.", romanized: "Dongsaengi myeot sarieyo? — Seumudu sarieyo.", translation: "How old is your sibling? — They're 22." },
            { native: "언니는 뭐 해요? — 언니는 디자이너예요.", romanized: "Eonnineun mwo haeyo? — Eonnineun dijaineoeyeo.", translation: "What does your older sister do? — My older sister is a designer." },
            { native: "저는 가족이 다섯 명이에요. 부모님이랑 형이랑 저예요.", romanized: "Jeoneun gagogi daseos myeongieyo. Bumonnimirang hyeongirang jeoyeyo.", translation: "My family has five people. My parents, my older brother, and me." },
        ],
        inlineVocab: [
            { word: "제", romanized: "je", translation: "my (polite spoken form — always use this, not 저의)" },
            { word: "저의", romanized: "jeoui", translation: "my (full form — exists but sounds stiff, 제 is used in conversation)" },
            { word: "어머니는", romanized: "eomeonineun", translation: "my mother (제 어머니는 = my mother + topic marker)" },
            { word: "아버지는", romanized: "abeojineun", translation: "my father (제 아버지는 = my father + topic marker)" },
            { word: "남동생은", romanized: "namdongsaengi", translation: "my younger brother (제 남동생은 = my younger brother + topic marker)" },
        ],
    },
    {
        id: "ko-g-a1-12",
        level: "A1",
        title: "좋아해요 / 싫어해요 — likes and dislikes + first sight of 을/를",
        explanation: `Your first real action verb: 좋아해요 (I like). You perform liking something — and the thing you like gets marked with the object particle 를/을.`,
        rules: [
            {
                condition: "Expressing a like or dislike",
                result: "저는 ___를/을 좋아해요 / 싫어해요",
                examples: [{ native: "커피를 좋아해요", romanized: "keopireul joahaeyo", translation: "I like coffee" }, { native: "한국 음식을 좋아해요", romanized: "hanguk eumsigul joahaeyo", translation: "I like Korean food" }, { native: "운동을 별로 안 좋아해요", romanized: "undongeul byeolro an joahaeyo", translation: "I don't really like exercise" }],
            },
            {
                condition: "Object particle — word ends in vowel",
                result: "를",
                examples: [{ native: "커피를", romanized: "keopireul", translation: "coffee (object) — 커피 ends in vowel → 를" }, { native: "드라마를", romanized: "deuramareul", translation: "drama (object) — 드라마 ends in vowel → 를" }, { native: "음료를", romanized: "eumryoreul", translation: "drink/beverage (object) — 음료 ends in vowel → 를" }],
            },
            {
                condition: "Object particle — word ends in consonant",
                result: "을",
                examples: [{ native: "음악을", romanized: "eumagul", translation: "music (object) — 음악 ends in consonant ㄱ → 을" }, { native: "밥을", romanized: "bapeul", translation: "rice/meal (object) — 밥 ends in consonant ㅂ → 을" }, { native: "한국 음식을", romanized: "hanguk eumsigul", translation: "Korean food (object) — 음식 ends in consonant ㄱ → 을" }],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "도 (also) replaces 를/을 when adding 'too': 저는 여행도 좋아해요 = I also like travel. 도 replaces the object particle entirely.",
            },
        ],
        examples: [
            { native: "저는 한국 음식을 정말 좋아해요!", romanized: "Jeoneun hanguk eumsigul jeongmal joahaeyo!", translation: "I really like Korean food!" },
            { type: "dialogue" as const, exchanges: [
                { native: "뭐 좋아해요?", romanized: "Mwo joahaeyo?", translation: "What do you like?" },
                { native: "저는 드라마를 좋아해요.", romanized: "Jeoneun deuramareul joahaeyo.", translation: "I like dramas." },
            ]},
            { native: "운동을 별로 안 좋아해요.", romanized: "Undongeul byeolro an joahaeyo.", translation: "I don't really like exercise." },
            { native: "저는 커피를 좋아해요. 그리고 음악도 좋아해요.", romanized: "Jeoneun keopireul joahaeyo. Geurigo eumagdo joahaeyo.", translation: "I like coffee. And I also like music. (그리고 = and, 도 = also)" },
            { type: "dialogue" as const, exchanges: [
                { native: "어떤 음식을 좋아해요?", romanized: "Eotteon eumsigul joahaeyo?", translation: "What kind of food do you like?" },
                { native: "특히 비빔밥을 좋아해요.", romanized: "Teukhi bibimbapeul joahaeyo.", translation: "I especially like bibimbap." },
            ]},
        ],
        inlineVocab: [
            { word: "좋아해요", romanized: "joahaeyo", translation: "like (first action verb — present tense ~해요 form)" },
            { word: "싫어해요", romanized: "sireohaeyo", translation: "dislike" },
            { word: "저는 여행도 좋아해요", romanized: "Jeoneun yeohaengdo joahaeyo", translation: "I also like travel." },
            { word: "를", romanized: "reul", translation: "object particle — marks what the verb acts on. 를 after vowel. Named here." },
            { word: "을", romanized: "eul", translation: "object particle — marks what the verb acts on. 을 after consonant. Named here." },
            { word: "도", romanized: "do", translation: "also / too (replaces 를/을: 커피도 = coffee too)" },
        ],
    },
    {
        id: "ko-g-a1-13",
        level: "A1",
        title: "을/를 fully named + the object particle in action",
        explanation: `을/를 is the object particle — it marks the direct object of an action verb. It works with any action verb: 먹다, 마시다, 듣다, 보다, 읽다.`,
        rules: [
            {
                condition: "Word ends in vowel",
                result: "를",
                examples: [{ native: "커피를", romanized: "keopireul", translation: "coffee (object) — 커피 ends in vowel → 를" }, { native: "드라마를", romanized: "deuramareul", translation: "drama (object) — 드라마 ends in vowel → 를" }, { native: "영화를", romanized: "yeonghwareul", translation: "movie (object) — 영화 ends in vowel → 를" }],
            },
            {
                condition: "Word ends in consonant",
                result: "을",
                examples: [{ native: "음악을", romanized: "eumagul", translation: "music (object) — 음악 ends in consonant ㄱ → 을" }, { native: "밥을", romanized: "bapeul", translation: "rice/meal (object) — 밥 ends in consonant ㅂ → 을" }, { native: "책을", romanized: "chageul", translation: "book (object) — 책 ends in consonant ㄱ → 을" }],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "을/를 vs 은/는: 커피를 좋아해요 = I like coffee (coffee is the object). 커피는 좋아해요 = As for coffee, I like it (topic — implies contrast). At A1, use 를/을 as your default after things you like, eat, or drink.",
            },
            {
                type: "tip",
                content: "In casual spoken Korean, 를/을 is frequently dropped. 커피 좋아해요 is natural. Learning the particle now builds correct instincts.",
            },
        ],
        examples: [
            { native: "저는 매일 아침에 커피를 마셔요.", romanized: "Jeoneun maeil achime keopireul masyeoyo.", translation: "I drink coffee every morning.", annotation: "커피를 = coffee as direct object" },
            { type: "dialogue" as const, exchanges: [
                { native: "밥을 먹어요?", romanized: "Bapeul meogeoyo?", translation: "Are you eating?" },
                { native: "네, 지금 먹어요.", romanized: "Ne, jigeum meogeoyo.", translation: "Yes, I'm eating now." },
            ]},
            { native: "음악을 들어요. 특히 K-pop을 좋아해요.", romanized: "Eumagul deoreoyo. Teukhi K-popeul joahaeyo.", translation: "I listen to music. I especially like K-pop.", annotation: "음악을 = music as direct object" },
            { type: "dialogue" as const, exchanges: [
                { native: "책을 자주 읽어요?", romanized: "Chageul jaju ilgeoyo?", translation: "Do you often read books?" },
                { native: "별로 안 읽어요.", romanized: "Byeolro an ilgeoyo.", translation: "Not really." },
            ]},
            { native: "영화를 좋아해요. 매주 봐요.", romanized: "Yeonghwareul joahaeyo. Maejo bwayo.", translation: "I like movies. I watch them every week." },
        ],
        inlineVocab: [
            { word: "를", romanized: "reul", translation: "object particle — marks the direct object of an action verb" },
            { word: "을", romanized: "eul", translation: "object particle — marks the direct object of an action verb" },
            { word: "커피를 좋아해요", romanized: "keopireul joahaeyo", translation: "I like coffee (커피를 = coffee as object)" },
            { word: "커피는 좋아해요", romanized: "keopineun joahaeyo", translation: "As for coffee, I like it (커피는 = coffee as topic — implies contrast)" },
            { word: "커피 좋아해요", romanized: "keopi joahaeyo", translation: "I like coffee (casual spoken Korean often drops the object particle)" },
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
        explanation: `Every Korean present tense verb ends in ~요. The vowel before ~요 follows a simple harmony rule based on the verb stem.`,
        rules: [
            {
                condition: "Stem last vowel is ㅏ or ㅗ",
                result: "~아요",
                examples: [{ native: "가다 → 가요", romanized: "gada → gayo", translation: "go → goes (stem 가: ㅏ vowel → 아요, contracts to 가요)" }, { native: "보다 → 봐요", romanized: "boda → bwayo", translation: "see/watch → watches (stem 보: ㅗ vowel → 아요, contracts to 봐요)" }, { native: "좋다 → 좋아요", romanized: "jota → joayo", translation: "good → is good (stem 좋: ㅗ vowel → 아요)" }],
            },
            {
                condition: "Stem has any other vowel",
                result: "~어요",
                examples: [{ native: "먹다 → 먹어요", romanized: "meokda → meogeoyo", translation: "eat → eats (stem 먹: ㅓ vowel → 어요)" }, { native: "읽다 → 읽어요", romanized: "ikda → ilgeoyo", translation: "read → reads (stem 읽: ㅣ vowel → 어요)" }, { native: "마시다 → 마셔요", romanized: "masida → masyeoyo", translation: "drink → drinks (stem 마시: ㅣ vowel → 어요, contracts to 마셔요)" }],
            },
            {
                condition: "하다 verbs (noun + 하다)",
                result: "~해요 (always)",
                examples: [{ native: "공부해요", romanized: "gongbuhaeyo", translation: "study (공부하다 → 해요)" }, { native: "운동해요", romanized: "undonghaeyo", translation: "exercise (운동하다 → 해요)" }, { native: "요리해요", romanized: "yorihaeyo", translation: "cook (요리하다 → 해요)" }, { native: "일해요", romanized: "ilhaeyo", translation: "work (일하다 → 해요)" }],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "Verb comes LAST. Always. Subject → object → time/place → verb. 저는 아침에 커피를 마셔요, not 저는 마셔요 아침에 커피를. This never changes.",
            },
            {
                type: "tip",
                content: "Common contractions — use these, never the uncontracted forms: 가+아요→가요, 오+아요→와요, 마시+어요→마셔요, 보+아요→봐요.",
            },
        ],
        examples: [
            { native: "저는 아침에 커피를 마셔요.", romanized: "Jeoneun achime keopireul masyeoyo.", translation: "I drink coffee in the morning." },
            { native: "매일 저녁에 운동해요.", romanized: "Maeil jeonyeoge undonghaeyo.", translation: "I exercise every evening. (운동하다 → 운동해요)" },
            { native: "학교에 가요. 수업이 있어요.", romanized: "Hagyeoe gayo. Sueopi isseoyo.", translation: "I go to school. I have class." },
            { native: "뭐 해요? — 책을 읽어요.", romanized: "Mwo haeyo? — Chageul ilgeoyo.", translation: "What are you doing? — I'm reading a book." },
            { native: "저는 집에서 요리해요. 요리를 좋아해요.", romanized: "Jeoneun jibeseo yorihaeyo. Yorireul joahaeyo.", translation: "I cook at home. I like cooking." },
            { native: "친구를 만나요. 같이 밥을 먹어요.", romanized: "Chingureul mannayo. Gachi bapeul meogeoyo.", translation: "I meet a friend. We eat together." },
        ],
        inlineVocab: [
            { word: " 저는 아침에 커피를 마셔요", romanized: "Jeoneun achime keopireul masyeoyo", translation: "I drink coffee in the morning." },
            { word: "~아요 / ~어요", romanized: "~ayo / ~eoyo", translation: "present tense ending — ㅏ/ㅗ stems → 아요, others → 어요, 하다 → 해요" },
            { word: "가요", romanized: "gayo", translation: "goes (contractions of 가+아요)" },
            { word: "와요", romanized: "wayo", translation: "comes (contraction of 오+아요)" },
            { word: "봐요", romanized: "bwayo", translation: "watches (contraction of 보+아요)" },
            { word: "마셔요", romanized: "masyeoyo", translation: "drinks (contraction of 마시+어요)" },
        ],
    },
    {
        id: "ko-g-a1-15",
        level: "A1",
        title: "Daily routine verbs + present tense in context",
        explanation: `The present tense pattern now fills with daily life verbs. These are the verbs you need for talking about your routine — learn them as stems, the ~아요/어요 ending follows automatically.`,
        rules: [
            {
                condition: "Specific time (clock, day of week, part of day)",
                result: "time word + 에",
                examples: [{ native: "아침에", romanized: "achime", translation: "in the morning (specific time → 에)" }, { native: "일곱 시에", romanized: "ilgop sie", translation: "at seven o'clock (specific clock time → 에)" }, { native: "금요일에", romanized: "geumyoire", translation: "on Friday (named day → 에)" }, { native: "주말에", romanized: "jumare", translation: "on the weekend (named period → 에)" }],
            },
            {
                condition: "Relative time reference",
                result: "no 에 needed",
                examples: [{ native: "매일", romanized: "maeil", translation: "every day (relative reference — no 에)" }, { native: "오늘", romanized: "oneul", translation: "today (relative reference — no 에)" }, { native: "보통", romanized: "botong", translation: "usually (adverb — no 에)" }, { native: "지금", romanized: "jigeum", translation: "now (relative reference — no 에)" }],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "ㄷ irregular: 듣다 (listen) and 걷다 (walk) drop ㄷ before a vowel ending → 들어요, 걸어요. These are two of the most common ㄷ-irregular verbs.",
            },
            {
                type: "tip",
                content: "이/가 is the subject marker: 수업이 있어요 (I have class), 친구가 와요 (a friend is coming). 이 after consonant, 가 after vowel. It's explained fully in Block 3.",
            },
        ],
        examples: [
            { type: "dialogue" as const, exchanges: [
                { native: "보통 몇 시에 일어나요?", romanized: "Botong myeot sie ireonayo?", translation: "What time do you usually get up?" },
                { native: "일곱 시에 일어나요.", romanized: "Ilgop sie ireonayo.", translation: "I get up at 7." },
            ]},
            { native: "저는 매일 아침에 운동해요. 여섯 시에 일어나요.", romanized: "Jeoneun maeil achime undonghaeyo. Yeoseot sie ireonayo.", translation: "I exercise every morning. I get up at 6." },
            { native: "오늘 저녁에 친구를 만나요.", romanized: "Oneul jeonyeoge chingureul mannayo.", translation: "I'm meeting a friend this evening." },
            { type: "dialogue" as const, exchanges: [
                { native: "보통 몇 시에 자요?", romanized: "Botong myeot sie jayo?", translation: "What time do you usually go to sleep?" },
                { native: "저는 열두 시쯤 자요.", romanized: "Jeoneun yeoldu sijjeum jayo.", translation: "I sleep at around midnight." },
            ]},
            { type: "dialogue" as const, exchanges: [
                { native: "주말에 보통 뭐 해요?", romanized: "Jumare botong mwo haeyo?", translation: "What do you usually do on weekends?" },
                { native: "집에서 쉬어요. 요리도 해요.", romanized: "Jibeseo swieoyo. Yorido haeyo.", translation: "I rest at home. I also cook." },
            ]},
        ],
        inlineVocab: [
            { word: "듣다", romanized: "deutda", translation: "to listen (듣어요 — ㄷ irregular)" },
            { word: "걷다", romanized: "geotda", translation: "to walk (걸어요 — ㄷ irregular)" },
            { word: "들어요", romanized: "deureoyo", translation: "listens (present tense of 듣다 — ㄷ irregular)" },
            { word: "걸어요", romanized: "georeoyo", translation: "walks (present tense of 걷다 — ㄷ irregular)" },
            { word: "수업이 있어요", romanized: "sueopi isseoyo", translation: "I have class (이/가 = subject marker)" },
            { word: "친구가 와요", romanized: "chinguga wayo", translation: "a friend is coming (이/가 = subject marker)" },
        ],
    },
    {
        id: "ko-g-a1-16",
        level: "A1",
        title: "있어요 for location + 에 particle for place",
        explanation: `있어요 does three jobs: possession, existence, and location. When paired with 에, it expresses where something IS — as distinct from 에서 which is for where actions happen.`,
        rules: [
            {
                condition: "Location where something exists / someone is",
                result: "[place]에 있어요",
                examples: [{ native: "카페에 있어요", romanized: "kapeee isseoyo", translation: "I'm at the café (location existence — 에)" }, { native: "2층에 있어요", romanized: "icheonge isseoyo", translation: "It's on the 2nd floor (location existence — 에)" }, { native: "집에 있어요", romanized: "jibe isseoyo", translation: "I'm at home (location existence — 에)" }],
            },
            {
                condition: "Destination (moving toward a place)",
                result: "[place]에 가요 / 와요",
                examples: [{ native: "학교에 가요", romanized: "hakgyoe gayo", translation: "I go to school (destination — 에)" }, { native: "카페에 와요", romanized: "kapeee wayo", translation: "I come to the café (destination — 에)" }, { native: "여기에 오세요", romanized: "yeogieseo oseyo", translation: "Please come here (destination — 에)" }],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "에 vs 에서: 에 is for where something IS or where you're GOING TO. 에서 is for where an action TAKES PLACE (카페에서 공부해요). The full distinction is explained in Block 4.",
            },
        ],
        fixedPhrases: [
            {
                native: "___이/가 어디에 있어요?",
                romanized: "___i/ga eodie isseoyo?",
                translation: "Where is ___?",
                note: "에 is often dropped in speech: 어디 있어요? is equally natural",
            },
        ],
        examples: [
            { type: "dialogue" as const, exchanges: [
                { native: "화장실이 어디에 있어요?", romanized: "Hwajangsiri eodie isseoyo?", translation: "Where is the bathroom?" },
                { native: "저기 있어요.", romanized: "Jeogi isseoyo.", translation: "It's over there." },
            ]},
            { type: "dialogue" as const, exchanges: [
                { native: "지금 어디에 있어요?", romanized: "Jigeum eodie isseoyo?", translation: "Where are you right now?" },
                { native: "카페에 있어요.", romanized: "Kapeee isseoyo.", translation: "I'm at a café." },
            ]},
            { type: "dialogue" as const, exchanges: [
                { native: "편의점이 근처에 있어요?", romanized: "Pyeonuijeomi geuncheoe isseoyo?", translation: "Is there a convenience store nearby?" },
                { native: "네, 저쪽에 있어요.", romanized: "Ne, jejogeoe isseoyo.", translation: "Yes, it's over that way." },
            ]},
            { type: "dialogue" as const, exchanges: [
                { native: "가방이 어디에 있어요?", romanized: "Gabangi eodie isseoyo?", translation: "Where is the bag?" },
                { native: "의자 위에 있어요.", romanized: "Uija wie isseoyo.", translation: "It's on the chair." },
            ]},
            { native: "화장실은 2층에 있어요.", romanized: "Hwajangsileun icheonge isseoyo.", translation: "The bathroom is on the 2nd floor." },
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
        explanation: `Korean adjectives conjugate exactly like action verbs — they take the same ~아요/어요 endings. Two irregular patterns affect many common adjectives.`,
        rules: [
            {
                condition: "ㅡ-drop: stem ends in ㅡ",
                result: "Drop ㅡ, then apply 아요/어요 rule",
                examples: [{ native: "크다→커요", romanized: "keuda→keoyo", translation: "big → is big (drop ㅡ, ㅓ remains → 어요)" }, { native: "나쁘다→나빠요", romanized: "nappeuda→nappayo", translation: "bad → is bad (drop ㅡ, ㅏ remains → 아요)" }, { native: "예쁘다→예뻐요", romanized: "yeppeuda→yeppeoyo", translation: "pretty → is pretty (drop ㅡ, ㅓ remains → 어요)" }, { native: "바쁘다→바빠요", romanized: "pappeuda→bappayo", translation: "busy → is busy (drop ㅡ, ㅏ remains → 아요)" }],
            },
            {
                condition: "ㅂ irregular: stem ends in ㅂ",
                result: "ㅂ → 워 before a vowel ending",
                examples: [{ native: "덥다→더워요", romanized: "deodda→deowoyo", translation: "hot → is hot (ㅂ → 워 before vowel ending)" }, { native: "춥다→추워요", romanized: "chupda→chuwoyo", translation: "cold → is cold (ㅂ → 워 before vowel ending)" }, { native: "어렵다→어려워요", romanized: "eoryeopda→eoryeowoyo", translation: "difficult → is difficult (ㅂ → 워 before vowel ending)" }],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "오늘 날씨가 어때요? (How's the weather today?) + 추워요/더워요/좋아요 is the most-used adjective exchange you'll have. Practise it as a chunk.",
            },
            {
                type: "tip",
                content: "~지만 (but) connects two clauses: 조금 어렵지만 재미있어요 = A little difficult but interesting. This clause connector is explained fully in Block 5.",
            },
        ],
        examples: [
            { type: "dialogue" as const, exchanges: [
                { native: "오늘 날씨가 어때요?", romanized: "Oneul nalssiga eottaeyo?", translation: "How's the weather today?" },
                { native: "정말 추워요!", romanized: "Jeongmal chuwoyo!", translation: "It's really cold!" },
            ]},
            { type: "dialogue" as const, exchanges: [
                { native: "한국어가 어려워요?", romanized: "Hangugeoga eoryeowoyo?", translation: "Is Korean difficult?" },
                { native: "네, 조금 어렵지만 재미있어요.", romanized: "Ne, jogeum eoryeopjiman jaemiisseoyo.", translation: "Yes, a little difficult but interesting." },
            ]},
            { type: "dialogue" as const, exchanges: [
                { native: "저 카페 어때요?", romanized: "Jeo kape eottaeyo?", translation: "How's that café?" },
                { native: "분위기가 예뻐요!", romanized: "Bunwigiga yeppeoyo!", translation: "The atmosphere is pretty!" },
            ]},
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
