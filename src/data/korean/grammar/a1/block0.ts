import { GrammarLesson } from "../../../../types"

export const block0Lessons: GrammarLesson[] = [
    {
        id: "ko-g-a1-1",
        level: "A1",
        title: "Korean writing: syllable blocks and the ten basic vowels",
        exerciseType: "script-reading",
        explanation: `Hangul, the Korean alphabet, was designed in 1443 under King Sejong to be learned quickly, and it shows: every syllable is written as a single block, and every block corresponds to exactly one spoken beat. This is different from English spelling, where letters just run in a line with no grouping. Each block needs at least two elements, a consonant and a vowel, arranged according to the vowel's shape: vowels with a vertical main stroke sit to the right of the consonant, while vowels with a horizontal main stroke sit below it. Because every block must open with a consonant slot even when a syllable actually starts with a vowel sound, Korean uses ㅇ as a silent placeholder in that position. Finally, stroke order is not arbitrary: writing top to bottom and left to right keeps blocks legible and is how Korean speakers learn penmanship from childhood.`,
        ruleIds: ["ko-r-a1-1-1", "ko-r-a1-1-2", "ko-r-a1-1-3", "ko-r-a1-1-4"],
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
            { native: "아", romanized: "a", translation: "vertical, goes right of consonant", annotation: "ㅏ"},
            { native: "어", romanized: "eo", translation: "vertical, goes right (stroke points left)", annotation: "ㅓ"},
            { native: "오", romanized: "o", translation: "horizontal, goes below consonant", annotation: "ㅗ"},
            { native: "우", romanized: "u", translation: "horizontal, goes below (stroke points down)", annotation: "ㅜ"},
            { native: "으", romanized: "eu", translation: "flat horizontal line, goes below", annotation: "ㅡ"},
            { native: "이", romanized: "i", translation: "vertical line, goes right", annotation: "ㅣ"},
            { native: "야", romanized: "ya", translation: "= + extra stroke (vertical, points right)", annotation: "ㅑ / ㅏ"},
            { native: "여", romanized: "yeo", translation: "= + extra stroke (vertical, points right)", annotation: "ㅕ / ㅓ"},
            { native: "요", romanized: "yo", translation: "= + extra stroke (horizontal, points below)", annotation: "ㅛ / ㅗ"},
            { native: "유", romanized: "yu", translation: "= + extra stroke (horizontal, points below)", annotation: "ㅠ / ㅜ"},
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
        explanation: `With the ten basic vowels in hand, adding consonants turns syllable blocks into real, pronounceable words. Korean has 14 basic consonants, and they divide into three groups by how they are produced: plain consonants (ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅎ), aspirated consonants pronounced with a burst of air (ㅋ ㅌ ㅍ ㅊ), and, later, tensed consonants. The block layout you learned in the previous lesson now applies consistently: a consonant paired with a vertical vowel sits side by side (가, 나, 다), while a consonant paired with a horizontal vowel stacks with the consonant on top (고, 노, 도). Because Korean spelling maps very closely to pronunciation, once you can read a block, you can say it, which is not true of English.`,
        ruleIds: ["ko-r-a1-2-1", "ko-r-a1-2-2", "ko-r-a1-2-3"],
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
            { native: "가, 나, 다, 라, 마, 바, 사, 아, 자, 하", romanized: "ga, na, da, ra, ma, ba, sa, a, ja, ha", translation: "say them through twice", annotation: "The first ten consonants + ㅏ"},
            { native: "카, 타, 파, 차", romanized: "ka, ta, pa, cha", translation: "feel the puff of air", annotation: "The four aspirated consonants + ㅏ"},
            { native: "라, 리, 루, 레, 로", romanized: "ra/la ri/li ru/lu re/le ro/lo", translation: "light flap sound, between r and l", annotation: "ㄹ practice"},
            { native: "바나나", romanized: "ba-na-na", translation: "banana — a real Korean word, just a loanword" },
            { native: "고, 기, 구, 가", romanized: "go, gi, gu, ga", translation: "+ four vowels — notice how changes position", annotation: "ㄱ / ㄱ"},
            { native: "카 vs 가", speakText: "카, 가", romanized: "ka vs ga", translation: "aspirated vs plain — hold your hand in front of your mouth and feel the puff of air on", annotation: "ㅋ / ㄱ / 카"},
            { native: "타 vs 다", speakText: "타, 다", romanized: "ta vs da", translation: "aspirated vs plain — hold your hand in front of your mouth and feel the puff of air on", annotation: "ㅌ / ㄷ / 타"},
            { native: "파 vs 바", speakText: "파, 바", romanized: "pa vs ba", translation: "aspirated vs plain — hold your hand in front of your mouth and feel the puff of air on", annotation: "ㅍ / ㅂ / 파"},
            { native: "차 vs 자", speakText: "차, 자", romanized: "cha vs ja", translation: "aspirated vs plain — hold your hand in front of your mouth and feel the puff of air on", annotation: "ㅊ / ㅈ / 차"},
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
        explanation: `Many syllable blocks carry a third element beneath the vowel: a final consonant called 받침 (batchim, literally "supporting floor"). A three-part syllable block therefore has an initial consonant, a vowel, and a 받침 stacked at the bottom. Unlike English final consonants, which are often released with a puff of air, Korean 받침 are unreleased: the mouth forms the shape of the consonant and stops there, closing the syllable abruptly. This closing action also has a major simplifying effect on pronunciation: although 16 different consonants can technically appear as 받침 in spelling, they collapse into only seven distinct sounds in speech (roughly the equivalents of k, n, t, l, m, p, and ng). Recognizing 받침 is also the key to reading Korean's many English loanwords, since Korean reshapes borrowed words to fit its own sound system.`,
        ruleIds: ["ko-r-a1-3-1", "ko-r-a1-3-2", "ko-r-a1-3-3", "ko-r-a1-3-4", "ko-r-a1-3-5", "ko-r-a1-3-6", "ko-r-a1-3-7"],
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
            { native: "한국", romanized: "han-guk", translation: "Korea.", annotation: "한 (han) has ㄴ받침, 국 (guk) has ㄱ받침"},
            { native: "방, 봄, 글, 앞", romanized: "bang, bom, geul, ap", translation: "Four common final consonant sounds — feel the syllable close" },
            { native: "커피 주세요", romanized: "keo-pi ju-se-yo", translation: "One coffee, please — you can read this before knowing what it means" },
            { native: "안녕하세요", romanized: "an-nyeong-ha-se-yo", translation: "Hello — read it three times. This is the first Korean phrase you'll use with a real person." },
            { native: "감사합니다", romanized: "gam-sa-ham-ni-da", translation: "Thank you.", annotation: "연음 linking — notice 합 links to 니 in speech" },
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
