import { GrammarLesson } from "../../../../types"

export const block0Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-1",
        level: "A1",
        title: "Korean writing: syllable blocks and the ten basic vowels",
        exerciseType: "script-reading",
        explanation: `Korean is not written letter by letter. It is written in syllable blocks — each block is one spoken beat, and the letters inside are arranged together:

한 글 — two blocks, two beats: "han" + "geul"

Every block has at least two parts: a consonant and a vowel. The consonant sits at the top-left. The vowel goes to its right (if vertical) or below it (if horizontal).

When a syllable starts with a vowel sound, Korean writes ㅇ as a silent placeholder:
아 = ㅇ (silent) + ㅏ → sounds like "a"
이 = ㅇ (silent) + ㅣ → sounds like "i"

The ten basic vowels:

| Vowel | Sound | Position |
|-------|-------|----------|
| ㅏ | "a" (father) | right of consonant |
| ㅓ | "eo" (sun) | right of consonant |
| ㅗ | "o" (go) | below consonant |
| ㅜ | "u" (moon) | below consonant |
| ㅡ | "eu" (no English equivalent — lips flat, back of throat) | below consonant |
| ㅣ | "i" (see) | right of consonant |
| ㅐ | "ae" (bed) | right of consonant |
| ㅔ | "e" (same as ㅐ in modern Korean) | right of consonant |
| ㅑ | "ya" (yard) | right of consonant |
| ㅕ | "yeo" (quick "yuh") | right of consonant |

Stroke order follows two rules: top to bottom, left to right. These two rules cover almost everything in Korean.

With ㅇ and the ten vowels, you can already read: 아 어 오 우 으 이 애 에 야 여
Say them aloud. This is not vocabulary yet — pure sound practice.`,
        examples: [
            { native: "아", romanized: "a", translation: "ㅇ (silent) + ㅏ — your first syllable block" },
            { native: "오", romanized: "o", translation: "ㅇ on top, ㅗ below (horizontal vowel → consonant above, vowel below)" },
            { native: "이", romanized: "i", translation: "ㅇ to left, ㅣ to right (vertical vowel → consonant left, vowel right)" },
            { native: "야", romanized: "ya", translation: "ㅑ = two right-pointing strokes (like ㅏ doubled)" },
            { native: "여", romanized: "yeo", translation: "ㅕ = two left-pointing strokes (like ㅓ doubled)" },
            { native: "한글", romanized: "han-geul", translation: "Korean writing system — two blocks, two beats" },
        ],
        inlineVocab: [
            { word: "ㅏ / ㅓ", romanized: "a / eo", translation: "vertical vowels — go to the RIGHT of the consonant" },
            { word: "ㅗ / ㅜ / ㅡ", romanized: "o / u / eu", translation: "horizontal vowels — go BELOW the consonant" },
            { word: "ㅣ", romanized: "i", translation: "vertical — to the right" },
            { word: "ㅇ", romanized: "(silent)", translation: "silent placeholder when syllable starts with a vowel sound" },
            { word: "ㅐ / ㅔ", romanized: "ae / e", translation: "pronounced identically in modern Korean — don't stress the difference" },
        ],
    },
    {
        id: "ko-g-a1-2",
        level: "A1",
        title: "The 14 consonants and building Korean syllables",
        exerciseType: "script-reading",
        explanation: `You have vowels. Now add consonants — and syllable blocks become real words.

The 14 basic consonants in groups:

**Group 1 — Easy sounds:**
ㄴ (n), ㅁ (m), ㅅ (s), ㅎ (h)

**Group 2 — Familiar sounds, unfamiliar shapes:**
ㄱ (g/k), ㄷ (d/t), ㄹ (r/l flap), ㅂ (b/p), ㅈ (j)

**Group 3 — Aspirated (puff of air):**
ㅋ (k puff), ㅌ (t puff), ㅍ (p puff), ㅊ (ch puff)

**ㄹ — the most important note:**
Not an r or an l — a light tongue flap, like the "tt" in American English *butter* said quickly. Practice: 라 리 루 레 로

Building syllables:
- Consonant + vertical vowel → side by side: 가 나 다 라 마 바 사 자 하
- Consonant + horizontal vowel → stacked: 고 노 도 모 보 소 조 호

Practice grid — read aloud, don't worry about meaning:

| | ㅏ (a) | ㅓ (eo) | ㅣ (i) | ㅗ (o) |
|--|--------|---------|--------|--------|
| ㄱ | 가 | 거 | 기 | 고 |
| ㄴ | 나 | 너 | 니 | 노 |
| ㅅ | 사 | 서 | 시 | 소 |
| ㅎ | 하 | 허 | 히 | 호 |

Two-syllable words — read aloud (meaning comes later):
나라 (na-ra) · 바나나 (ba-na-na) · 사자 (sa-ja) · 가수 (ga-su)`,
        examples: [
            { native: "가나다라마바사아자하", romanized: "ga-na-da-ra-ma-ba-sa-a-ja-ha", translation: "The first ten consonants + ㅏ — say them through twice" },
            { native: "라 리 루 레 로", romanized: "ra/la ri/li ru/lu re/le ro/lo", translation: "ㄹ practice — light flap sound, between r and l" },
            { native: "바나나", romanized: "ba-na-na", translation: "banana — a real Korean word, just a loanword" },
            { native: "고 기 구 가", romanized: "go gi gu ga", translation: "ㄱ + four vowels — notice how ㄱ changes position" },
            { native: "ㅋ vs ㄱ", romanized: "k-puff vs g/k", translation: "aspirated ㅋ has a burst of breath — hold your hand in front of your mouth" },
        ],
        inlineVocab: [
            { word: "ㄹ", romanized: "r/l flap", translation: "light tongue flap — not r, not l. American English 'butter' tt sound" },
            { word: "ㄱ → ㅋ / ㄷ → ㅌ / ㅂ → ㅍ / ㅈ → ㅊ", romanized: "plain → aspirated", translation: "add a puff of breath to get the aspirated version" },
            { word: "ㅇ at end", romanized: "ng", translation: "ㅇ at the END of a syllable = 'ng' sound (like sing). Only silent at the START." },
        ],
    },
    {
        id: "ko-g-a1-3",
        level: "A1",
        title: "받침 (final consonants), loanwords, and your first Korean phrases",
        exerciseType: "script-reading",
        explanation: `Most syllable blocks have a final consonant at the bottom — called 받침 (batchim, "support"). A syllable with 받침 has three parts:

한 = ㅎ (top-left) + ㅏ (right) + ㄴ (bottom)
방 = ㅂ (top-left) + ㅏ (right) + ㅇ (bottom → "ng" sound)

Final consonants are not released — they close the syllable rather than finishing fully. The seven possible final sounds:

| Sound | Consonants | Example |
|-------|-----------|---------|
| k | ㄱ | 국 (guk — soup) |
| n | ㄴ | 한 (han) |
| t | ㄷ, ㅅ, others | 옷 (ot — clothes) |
| l | ㄹ | 글 (geul) |
| m | ㅁ | 봄 (bom — spring) |
| p | ㅂ | 앞 (ap — front) |
| ng | ㅇ | 방 (bang — room) |

**Loanwords — words you already know:**
Korean borrowed heavily from English. The words are reshaped to Korean phonology (no "f", no "v", no final consonant clusters):

커피 (keo-pi = coffee) · 피자 (pi-ja = pizza) · 택시 (taek-si = taxi) · 버스 (beo-seu = bus) · 호텔 (ho-tel = hotel) · 주스 (ju-seu = juice) · 아이스크림 (a-i-seu-keu-rim = ice cream) · 스마트폰 (seu-ma-teu-pon = smartphone)

You can now walk into a Korean café and read the menu. That is a real skill, right now.

**Preview — Block 1 phrases (read them, don't memorise yet):**
안녕하세요 · 감사합니다 · 괜찮아요 · 저는 학생이에요

From here: no romanization. You don't need it anymore.`,
        examples: [
            { native: "한국", romanized: "han-guk", translation: "Korea — 한 (han) has ㄴ받침, 국 (guk) has ㄱ받침" },
            { native: "방 봄 글 앞", romanized: "bang / bom / geul / ap", translation: "Four common final consonant sounds — feel the syllable close" },
            { native: "커피 주세요", romanized: "keopireul juseyo", translation: "One coffee, please — you can read this before learning what it means" },
            { native: "안녕하세요", romanized: "an-nyeong-ha-se-yo", translation: "Hello — read it three times. This is the first Korean phrase you'll use with a real person." },
            { native: "감사합니다", romanized: "gam-sa-ham-ni-da", translation: "Thank you — notice 합 links to 니 in speech (연음 linking)" },
        ],
        inlineVocab: [
            { word: "받침", romanized: "batchim", translation: "final consonant — the bottom element of a three-part syllable block" },
            { word: "한글", romanized: "han-geul", translation: "Korean writing system — you can read this now. That is the goal of Block 0." },
            { word: "연음", romanized: "yeon-eum", translation: "linking — final consonant moves to the next syllable's empty ㅇ slot in natural speech" },
        ],
    },
]
