import { GrammarLesson } from "../../../../types"

export const block0Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-1",
        level: "A1",
        title: "Korean writing: syllable blocks and the ten basic vowels",
        exerciseType: "script-reading",
        explanation: `Korean is written in syllable blocks — each block is one spoken beat. Every block has at least two parts: a consonant and a vowel. The vowel's position depends on its shape: vertical vowels go to the right of the consonant; horizontal vowels go below it. When a syllable starts with a vowel sound, ㅇ acts as a silent placeholder. Stroke order follows two rules: top to bottom, left to right.`,
        rules: [
            {
                condition: "Vertical vowels (ㅏ ㅓ ㅣ ㅑ ㅕ)",
                result: "Go to the RIGHT of the consonant",
                examples: [
                    { native: "가", romanized: "ga", translation: "ㄱ+ㅏ — vertical vowel sits right of consonant" },
                    { native: "서", romanized: "seo", translation: "ㅅ+ㅓ — vertical vowel sits right of consonant" },
                    { native: "시", romanized: "si", translation: "ㅅ+ㅣ — vertical vowel sits right of consonant" },
                ],
            },
            {
                condition: "Horizontal vowels (ㅗ ㅜ ㅡ ㅛ ㅠ)",
                result: "Go BELOW the consonant",
                examples: [
                    { native: "고", romanized: "go", translation: "ㄱ+ㅗ — horizontal vowel sits below consonant" },
                    { native: "구", romanized: "gu", translation: "ㄱ+ㅜ — horizontal vowel sits below consonant" },
                    { native: "그", romanized: "geu", translation: "ㄱ+ㅡ — horizontal vowel sits below consonant" },
                ],
            },
            {
                condition: "Syllable begins with a vowel sound",
                result: "Use ㅇ as silent placeholder",
                examples: [
                    { native: "아", romanized: "a", translation: "ㅇ+ㅏ — ㅇ is silent; syllable sounds like 'a'" },
                    { native: "이", romanized: "i", translation: "ㅇ+ㅣ — ㅇ is silent; syllable sounds like 'i'" },
                    { native: "오", romanized: "o", translation: "ㅇ+ㅗ — ㅇ is silent; syllable sounds like 'o'" },
                ],
            },
            {
                condition: "The four y-vowels (ㅑ ㅕ ㅛ ㅠ)",
                result: "Each is the plain counterpart with an extra stroke",
                examples: [
                    { native: "ㅑ", romanized: "ya", translation: "ㅏ with an extra stroke — adds 'y' glide" },
                    { native: "ㅕ", romanized: "yeo", translation: "ㅓ with an extra stroke — adds 'y' glide" },
                    { native: "ㅛ", romanized: "yo", translation: "ㅗ with an extra stroke — adds 'y' glide" },
                    { native: "ㅠ", romanized: "yu", translation: "ㅜ with an extra stroke — adds 'y' glide" },
                ],
            },
        ],
        notes: [
            {
                type: "tip",
                content: "ㅇ plays two roles: silent placeholder at the start of a syllable (아 = ㅇ + ㅏ, sounds like 'a'), and the 'ng' sound at the end (방 = ba-ng). Same shape, different position, different job.",
            },
            {
                type: "tip",
                content: "ㅐ (ae) and ㅔ (e) look like basic vowels but are compound vowels — they combine two basic shapes and sound identical in modern Korean. You will meet them in the compound vowels lesson.",
            },
        ],
        examples: [
            { native: "아", romanized: "a", translation: "ㅏ — vertical, goes right of consonant" },
            { native: "어", romanized: "eo", translation: "ㅓ — vertical, goes right (stroke points left)" },
            { native: "오", romanized: "o", translation: "ㅗ — horizontal, goes below consonant" },
            { native: "우", romanized: "u", translation: "ㅜ — horizontal, goes below (stroke points down)" },
            { native: "으", romanized: "eu", translation: "ㅡ — flat horizontal line, goes below" },
            { native: "이", romanized: "i", translation: "ㅣ — vertical line, goes right" },
            { native: "야", romanized: "ya", translation: "ㅑ = ㅏ + extra stroke (vertical → right)" },
            { native: "여", romanized: "yeo", translation: "ㅕ = ㅓ + extra stroke (vertical → right)" },
            { native: "요", romanized: "yo", translation: "ㅛ = ㅗ + extra stroke (horizontal → below)" },
            { native: "유", romanized: "yu", translation: "ㅠ = ㅜ + extra stroke (horizontal → below)" },
        ],
        inlineVocab: [
            { word: "ㅇ", romanized: "(silent)", translation: "silent placeholder when syllable starts with a vowel sound" },
            { word: "가", romanized: "ga", translation: "ㄱ+ㅏ" },
            { word: "아", romanized: "a", translation: "ㅇ+ㅏ — ㅇ is silent; syllable sounds like 'a'" },
            { word: "방", romanized: "bang", translation: "ㅂ+ㅏ+ㅇ — ㅇ at the end gives 'ng' sound" },
        ],
    },
    {
        id: "ko-g-a1-2",
        level: "A1",
        title: "The 14 consonants and building Korean syllables",
        exerciseType: "script-reading",
        explanation: `You have vowels — now add consonants and syllable blocks become real words. The 14 basic consonants fall into three groups by how they sound. Consonant + vertical vowel sits side by side (가 나 다…); consonant + horizontal vowel stacks vertically (고 노 도…).`,
        rules: [
            {
                condition: "Easy sounds (close to English)",
                result: "ㄴ (n) · ㅁ (m) · ㅅ (s) · ㅎ (h)",
                examples: [
                    { native: "나", romanized: "na", translation: "ㄴ+ㅏ" },
                    { native: "마", romanized: "ma", translation: "ㅁ+ㅏ" },
                    { native: "사", romanized: "sa", translation: "ㅅ+ㅏ" },
                ],
            },
            {
                condition: "Familiar sounds, unfamiliar shapes",
                result: "ㄱ (g/k) · ㄷ (d/t) · ㄹ (r/l) · ㅂ (b/p) · ㅈ (j)",
                examples: [
                    { native: "가", romanized: "ga", translation: "ㄱ+ㅏ" },
                    { native: "다", romanized: "da", translation: "ㄷ+ㅏ" },
                    { native: "바", romanized: "ba", translation: "ㅂ+ㅏ" },
                ],
            },
            {
                condition: "Aspirated consonants (strong puff of air)",
                result: "ㅋ (k) · ㅌ (t) · ㅍ (p) · ㅊ (ch)",
                examples: [
                    { native: "카", romanized: "ka", translation: "ㅋ+ㅏ — aspirated ㄱ" },
                    { native: "타", romanized: "ta", translation: "ㅌ+ㅏ — aspirated ㄷ" },
                    { native: "파", romanized: "pa", translation: "ㅍ+ㅏ — aspirated ㅂ" },
                ],
            },
        ],
        notes: [
            {
                type: "warning",
                content: "ㄹ is the trickiest consonant: not an r, not an l — a light tongue flap, like the 'tt' in American English butter said quickly. Practice syllable by syllable: 라 리 루 레 로.",
            },
            {
                type: "tip",
                content: "Aspirated consonants (ㅋ ㅌ ㅍ ㅊ) are just their plain counterparts (ㄱ ㄷ ㅂ ㅈ) with a puff of air. Hold your hand in front of your mouth — you should feel a burst on the aspirated ones.",
            },
        ],
        examples: [
            { native: "가, 나, 다, 라, 마, 바, 사, 아, 자, 하", romanized: "ga, na, da, ra, ma, ba, sa, a, ja, ha", translation: "The first ten consonants + ㅏ — say them through twice" },
            { native: "카, 타, 파, 차", romanized: "ka, ta, pa, cha", translation: "The four aspirated consonants + ㅏ — feel the puff of air" },
            { native: "라, 리, 루, 레, 로", romanized: "ra/la ri/li ru/lu re/le ro/lo", translation: "ㄹ practice — light flap sound, between r and l" },
            { native: "바나나", romanized: "ba-na-na", translation: "banana — a real Korean word, just a loanword" },
            { native: "고, 기, 구, 가", romanized: "go, gi, gu, ga", translation: "ㄱ + four vowels — notice how ㄱ changes position" },
            { native: "카 vs 가", speakText: "카, 가", romanized: "ka vs ga", translation: "aspirated ㅋ vs plain ㄱ — hold your hand in front of your mouth and feel the puff of air on 카" },
            { native: "타 vs 다", speakText: "타, 다", romanized: "ta vs da", translation: "aspirated ㅌ vs plain ㄷ — hold your hand in front of your mouth and feel the puff of air on 타" },
            { native: "파 vs 바", speakText: "파, 바", romanized: "pa vs ba", translation: "aspirated ㅍ vs plain ㅂ — hold your hand in front of your mouth and feel the puff of air on 파" },
            { native: "차 vs 자", speakText: "차, 자", romanized: "cha vs ja", translation: "aspirated ㅊ vs plain ㅈ — hold your hand in front of your mouth and feel the puff of air on 차" },
        ],
        inlineVocab: [
            { word: "ㄹ", romanized: "r/l flap", translation: "light tongue flap — not r, not l. American English 'butter' tt sound" },
            { word: "라", romanized: "ra/la", translation: "Practice ㄹ syllable by syllable — 라 리 루 레 로" },
            { word: "리", romanized: "ri/li", translation: "Practice ㄹ syllable by syllable — 라 리 루 레 로" },
            { word: "루", romanized: "ru/lu", translation: "Practice ㄹ syllable by syllable — 라 리 루 레 로" },
            { word: "레", romanized: "re/le", translation: "Practice ㄹ syllable by syllable — 라 리 루 레 로" },
            { word: "로", romanized: "ro/lo", translation: "Practice ㄹ syllable by syllable — 라 리 루 레 로" },
        ],
    },
    {
        id: "ko-g-a1-3",
        level: "A1",
        title: "받침 (final consonants), loanwords, and your first Korean phrases",
        exerciseType: "script-reading",
        explanation: `Most syllable blocks have a final consonant at the bottom — called 받침 (batchim). A three-part syllable has an initial consonant, a vowel, and a 받침 at the base. Final consonants are not released — they close the syllable. Only seven distinct sounds are possible as 받침, regardless of which consonant is written.`,
        rules: [
            {
                condition: "받침 sound: k",
                result: "Written ㄱ (also ㄲ, ㅋ)",
                examples: [
                    { native: "국", romanized: "guk", translation: "soup — ㄱ받침" },
                    { native: "역", romanized: "yeok", translation: "station — ㄱ받침" },
                ],
            },
            {
                condition: "받침 sound: n",
                result: "Written ㄴ",
                examples: [
                    { native: "한", romanized: "han", translation: "ㄴ받침" },
                    { native: "산", romanized: "san", translation: "mountain — ㄴ받침" },
                ],
            },
            {
                condition: "받침 sound: t",
                result: "Written ㄷ, ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ",
                examples: [
                    { native: "옷", romanized: "ot", translation: "clothes — ㅅ받침 sounds like t" },
                    { native: "꽃", romanized: "kkot", translation: "flower — ㅊ받침 sounds like t" },
                ],
            },
            {
                condition: "받침 sound: l",
                result: "Written ㄹ",
                examples: [
                    { native: "글", romanized: "geul", translation: "writing — ㄹ받침" },
                    { native: "말", romanized: "mal", translation: "speech/language — ㄹ받침" },
                ],
            },
            {
                condition: "받침 sound: m",
                result: "Written ㅁ",
                examples: [
                    { native: "봄", romanized: "bom", translation: "spring — ㅁ받침" },
                    { native: "밤", romanized: "bam", translation: "night — ㅁ받침" },
                ],
            },
            {
                condition: "받침 sound: p",
                result: "Written ㅂ (also ㅍ)",
                examples: [
                    { native: "앞", romanized: "ap", translation: "front — ㅍ받침 sounds like p" },
                    { native: "입", romanized: "ip", translation: "mouth — ㅂ받침" },
                ],
            },
            {
                condition: "받침 sound: ng",
                result: "Written ㅇ",
                examples: [
                    { native: "방", romanized: "bang", translation: "room — ㅇ받침 sounds like ng" },
                    { native: "강", romanized: "gang", translation: "river — ㅇ받침" },
                ],
            },
        ],
        notes: [
            {
                type: "culture",
                content: "Korean borrowed heavily from English. The words are reshaped to Korean phonology — no 'f', no 'v', no final consonant clusters: 커피 (coffee) · 피자 (pizza) · 택시 (taxi) · 버스 (bus) · 호텔 (hotel) · 아이스크림 (ice cream) · 스마트폰 (smartphone). You can walk into a Korean café and read the menu. That is a real skill, right now.",
            },
            {
                type: "tip",
                content: "연음 (linking): when a 받침 is followed by a syllable starting with ㅇ (silent placeholder), the final consonant moves across and sounds as the initial of the next syllable. 한국어 sounds like '한구거', not '한국/어'.",
            },
        ],
        fixedPhrases: [
            {
                native: "안녕하세요",
                romanized: "an-nyeong-ha-se-yo",
                translation: "Hello",
                note: "Read it now — you'll use this with a real person in the very next lesson",
            },
            {
                native: "감사합니다",
                romanized: "gam-sa-ham-ni-da",
                translation: "Thank you (formal)",
            },
            {
                native: "괜찮아요",
                romanized: "gwaen-cha-na-yo",
                translation: "It's okay / I'm fine",
            },
            {
                native: "저는 학생이에요",
                romanized: "jeo-neun hak-saeng-i-e-yo",
                translation: "I am a student",
                note: "Your first full Korean sentence — explained in the 저는 이에요/예요 lesson",
            },
        ],
        examples: [
            { native: "한국", romanized: "han-guk", translation: "Korea — 한 (han) has ㄴ받침, 국 (guk) has ㄱ받침" },
            { native: "방, 봄, 글, 앞", romanized: "bang, bom, geul, ap", translation: "Four common final consonant sounds — feel the syllable close" },
            { native: "커피 주세요", romanized: "keo-pi ju-se-yo", translation: "One coffee, please — you can read this before knowing what it means" },
            { native: "안녕하세요", romanized: "an-nyeong-ha-se-yo", translation: "Hello — read it three times. This is the first Korean phrase you'll use with a real person." },
            { native: "감사합니다", romanized: "gam-sa-ham-ni-da", translation: "Thank you — notice 합 links to 니 in speech (연음 linking)" },
        ],
        inlineVocab: [
            { word: "받침", romanized: "batchim", translation: "final consonant — the bottom element of a three-part syllable block" },
            { word: "한글", romanized: "han-geul", translation: "Korean writing system — you can now read it" },
            { word: "연음", romanized: "yeon-eum", translation: "linking — final consonant moves to the next syllable's empty ㅇ slot in natural speech" },
            { word: "커피", romanized: "keo-pi", translation: "coffee — a loanword you can read but haven't learned the grammar to say yet" },
            { word: "피자", romanized: "pi-ja", translation: "pizza — a loanword you can read but haven't learned the grammar to say yet" },
            { word: "택시", romanized: "taek-si", translation: "taxi — a loanword you can read but haven't learned the grammar to say yet" },
            { word: "버스", romanized: "beo-seu", translation: "bus — a loanword you can read but haven't learned the grammar to say yet" },
            { word: "호텔", romanized: "ho-tel", translation: "hotel — a loanword you can read but haven't learned the grammar to say yet" },
            { word: "아이스크림", romanized: "a-i-seu-keu-rim", translation: "ice cream — a loanword you can read but haven't learned the grammar to say yet" },
            { word: "스마트폰", romanized: "seu-ma-teu-pon", translation: "smartphone — a loanword you can read but haven't learned the grammar to say yet" },
            { word: "한국어", romanized: "han-guk-eo", translation: "Korean language — 한국 (han-guk) + 어 (eo, language)" },
            { word: "한구거", romanized: "han-gu-geu", translation: "Korean language — sounds like '한구거' due to 연음 (linking)" },
            { word: "한국/어", romanized: "han-guk/eo", translation: "Korean language — written form, but not how it sounds in natural speech" },

        ],
    },
]
