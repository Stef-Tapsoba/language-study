// ─────────────────────────────────────────────────────────────────────────────
// ITALIAN A1 FIXES
// Three things addressed:
//   1. New grammar lesson  it-g-a1-16  — Likes & Dislikes (piacere/preferire/odiare)
//   2. New vocab items     it-v-a1-153 through it-v-a1-163 — numbers 21–100
//   3. Four unit patches:
//      u5  — add it-g-a1-14 (prepositions) to grammarIds
//      u8  — add it-g-a1-15 (numbers/time) to grammarIds + new number vocab IDs
//      u16 — NEW unit for likes & dislikes (order 16)
//      u15 — bump order from 15 → 17 (near future stays last)
//
// NOTE: it-g-a1-14 (prepositions) and it-g-a1-15 (numbers/time) already exist
// in a1-italian-additions.ts from a previous session. They are NOT duplicated
// here — just wired into units below.
// ─────────────────────────────────────────────────────────────────────────────

import { GrammarLesson, LessonUnit, VocabItem } from "../../../types"


// ─────────────────────────────────────────────────────────────────────────────
// 1.  NEW GRAMMAR LESSON
//     Append to the end of the a1Grammar array in src/data/italian/grammar/a1.ts
//     (after it-g-a1-15)
// ─────────────────────────────────────────────────────────────────────────────

export const newGrammarLesson: GrammarLesson = {
    id: "it-g-a1-16",
    level: "A1",
    title: "Likes & Dislikes: piacere, preferire, odiare",
    explanation: `Italian expresses 'to like' using piacere — but it works differently from English. The subject of piacere is the THING being liked, not the person. The person is an indirect object.

  mi piace    = I like (lit. 'it pleases me') — singular thing
  mi piacciono = I like (lit. 'they please me') — plural things
  ti piace / ti piacciono = you like...
  gli/le piace / piacciono = he/she likes...

So you say:
  ✓ Mi piace il caffè.     (Coffee pleases me = I like coffee)
  ✓ Mi piacciono i gatti.  (Cats please me = I like cats)
  ✗ Never: "Io piaccio il caffè"

To say you DON'T like something: Non mi piace / Non mi piacciono.
To express preference: preferire (regular -ire type 2, takes -isc-):
  Preferisco il tè al caffè. (I prefer tea to coffee.)
To express strong dislike: odiare (regular -are):
  Odio alzarmi presto. (I hate getting up early.)

Quick tip: piacere + infinitive = liking an activity:
  Mi piace leggere. (I like reading.) ← always singular, use piace not piacciono`,
    examples: [
        { native: "Mi piace la pizza.", translation: "I like pizza. (singular → piace)" },
        { native: "Mi piacciono i gatti.", translation: "I like cats. (plural → piacciono)" },
        { native: "Non mi piace il pesce.", translation: "I don't like fish." },
        { native: "Ti piace la musica italiana?", translation: "Do you like Italian music?" },
        { native: "Preferisco il vino rosso.", translation: "I prefer red wine." },
        { native: "Mi piace studiare l'italiano.", translation: "I like studying Italian. (+ infinitive)" },
        { native: "Gli piacciono i film d'azione.", translation: "He likes action films." },
    ]
}


// ─────────────────────────────────────────────────────────────────────────────
// 2.  NEW VOCAB — Numbers 21–100
//     Add to the end of a1Vocab in src/data/italian/vocab/a1.ts (after it-v-a1-152)
// ─────────────────────────────────────────────────────────────────────────────

export const newNumberVocab: VocabItem[] = [
    {
        id: "it-v-a1-153", level: "A1", word: "ventuno / ventidue", translation: "twenty-one / twenty-two",
        category: "Numbers",
        example: { native: "Ho ventuno anni.", translation: "I am twenty-one years old." }
    },
    {
        id: "it-v-a1-154", level: "A1", word: "trenta", translation: "thirty",
        category: "Numbers",
        example: { native: "Il trenta per cento.", translation: "Thirty percent." }
    },
    {
        id: "it-v-a1-155", level: "A1", word: "quaranta", translation: "forty",
        category: "Numbers",
        example: { native: "Ho quaranta euro.", translation: "I have forty euros." }
    },
    {
        id: "it-v-a1-156", level: "A1", word: "cinquanta", translation: "fifty",
        category: "Numbers",
        example: { native: "Costa cinquanta euro.", translation: "It costs fifty euros." }
    },
    {
        id: "it-v-a1-157", level: "A1", word: "sessanta", translation: "sixty",
        category: "Numbers",
        example: { native: "Sessanta minuti in un'ora.", translation: "Sixty minutes in an hour." }
    },
    {
        id: "it-v-a1-158", level: "A1", word: "settanta", translation: "seventy",
        category: "Numbers",
        example: { native: "Mio nonno ha settant'anni.", translation: "My grandfather is seventy years old." }
    },
    {
        id: "it-v-a1-159", level: "A1", word: "ottanta", translation: "eighty",
        category: "Numbers",
        example: { native: "Ottanta chilometri all'ora.", translation: "Eighty kilometres per hour." }
    },
    {
        id: "it-v-a1-160", level: "A1", word: "novanta", translation: "ninety",
        category: "Numbers",
        example: { native: "Novanta euro è troppo.", translation: "Ninety euros is too much." }
    },
    {
        id: "it-v-a1-161", level: "A1", word: "cento", translation: "one hundred",
        category: "Numbers",
        example: { native: "Cento per cento.", translation: "One hundred percent." }
    },
    {
        id: "it-v-a1-162", level: "A1", word: "mezzogiorno / mezzanotte", translation: "noon / midnight",
        category: "Numbers",
        example: { native: "Ci vediamo a mezzogiorno.", translation: "We'll meet at noon." }
    },
    {
        id: "it-v-a1-163", level: "A1", word: "e mezza / e un quarto", translation: "half past / quarter past",
        category: "Numbers",
        example: { native: "Sono le tre e mezza.", translation: "It's half past three." }
    },
]


// ─────────────────────────────────────────────────────────────────────────────
// 3.  UNIT PATCHES
//     Each entry is the COMPLETE updated unit — replace the matching unit in
//     src/data/italian/units/a1.ts
// ─────────────────────────────────────────────────────────────────────────────

export const unitPatches: LessonUnit[] = [

    // ── PATCH u5: add it-g-a1-14 (prepositions) to grammarIds ──
    // Reason: u5 teaches andare (to go) and introduces destinations — "vado al
    // cinema", "andiamo in Italia" — but the contraction rules (a + il = al,
    // in + country etc.) are never explained. The prepositions lesson must land
    // before or alongside the first heavy use.
    // Change: grammarIds ["it-g-a1-8", "it-g-a1-9"] → adds "it-g-a1-14"
    // Also: description updated, two test questions replaced to cover prepositions
    {
        id: "it-a1-u5",
        level: "A1",
        order: 5,
        title: "Irregular Verbs: Andare & Fare + Prepositions",
        description: "Learn andare (to go) and fare (to do/make), and the core prepositions and contractions needed to say where you're going.",
        grammarIds: ["it-g-a1-8", "it-g-a1-9", "it-g-a1-14"],
        vocabIds: [
            "it-v-a1-108", "it-v-a1-109", "it-v-a1-110", "it-v-a1-111",
            "it-v-a1-112", "it-v-a1-113", "it-v-a1-114", "it-v-a1-117", "it-v-a1-118"
        ],
        verbIds: ["it-vb-a1-4", "it-vb-a1-5"],
        testQuestions: [
            { id: "it-uq-a1-5-1", level: "A1", prompt: "Complete: 'Io ___ a scuola.' (andare)", options: ["vai", "va", "vado", "andiamo"], answer: "vado" },
            { id: "it-uq-a1-5-2", level: "A1", prompt: "Complete: 'Loro ___ al cinema.' (andare)", options: ["vado", "va", "andate", "vanno"], answer: "vanno" },
            { id: "it-uq-a1-5-3", level: "A1", prompt: "Complete: 'Io ___ colazione alle sette.' (fare)", options: ["fai", "fa", "faccio", "fanno"], answer: "faccio" },
            { id: "it-uq-a1-5-4", level: "A1", prompt: "What is 'a + il'?", options: ["del", "al", "alla", "nel"], answer: "al" },
            { id: "it-uq-a1-5-5", level: "A1", prompt: "Complete: 'Vado ___ Italia.' (in a country)", options: ["a", "al", "in", "da"], answer: "in" },
            { id: "it-uq-a1-5-6", level: "A1", prompt: "Complete: 'Il libro è ___ tavolo.' (su + il)", options: ["sulla", "sul", "sullo", "sui"], answer: "sul" },
        ]
    },

    // ── PATCH u8: add it-g-a1-15 (numbers/time) to grammarIds + new number vocab ──
    // Change: grammarIds [] → ["it-g-a1-15"]
    // Change: vocabIds gains it-v-a1-153 through it-v-a1-163 (numbers 21–100, time)
    // Change: title and description updated to reflect full coverage
    // Change: test questions updated — 2 now test numbers above 20 and telling time
    {
        id: "it-a1-u8",
        level: "A1",
        order: 8,
        title: "Numbers, Time & Dates",
        description: "Count from 1 to 100, tell the time, and talk about days, months, and seasons.",
        grammarIds: ["it-g-a1-15"],
        vocabIds: [
            // 1–20 (existing)
            "it-v-a1-13", "it-v-a1-14", "it-v-a1-15", "it-v-a1-16", "it-v-a1-17",
            "it-v-a1-18", "it-v-a1-19", "it-v-a1-20", "it-v-a1-21", "it-v-a1-22",
            "it-v-a1-32",
            // Days (existing)
            "it-v-a1-33", "it-v-a1-34", "it-v-a1-35", "it-v-a1-36",
            "it-v-a1-37", "it-v-a1-38", "it-v-a1-39",
            // Months + seasons (existing)
            "it-v-a1-40", "it-v-a1-41", "it-v-a1-42", "it-v-a1-43",
            "it-v-a1-44", "it-v-a1-45", "it-v-a1-46",
            // Numbers 21–100 + time expressions (new)
            "it-v-a1-153", "it-v-a1-154", "it-v-a1-155", "it-v-a1-156",
            "it-v-a1-157", "it-v-a1-158", "it-v-a1-159", "it-v-a1-160",
            "it-v-a1-161", "it-v-a1-162", "it-v-a1-163",
        ],
        verbIds: ["it-vb-a1-2"],
        testQuestions: [
            { id: "it-uq-a1-8-1", level: "A1", prompt: "What is 'fifteen' in Italian?", options: ["Dodici", "Sedici", "Quindici", "Tredici"], answer: "Quindici" },
            { id: "it-uq-a1-8-2", level: "A1", prompt: "What day comes after 'lunedì'?", options: ["Mercoledì", "Domenica", "Giovedì", "Martedì"], answer: "Martedì" },
            { id: "it-uq-a1-8-3", level: "A1", prompt: "How do you say 'It's three o'clock'?", options: ["È le tre.", "Sono le tre.", "Sono tre.", "È tre ore."], answer: "Sono le tre." },
            { id: "it-uq-a1-8-4", level: "A1", prompt: "How do you say 'It's half past eight'?", options: ["Sono le otto e un quarto.", "Sono le otto meno mezza.", "Sono le otto e mezza.", "Sono le otto e trenta."], answer: "Sono le otto e mezza." },
            { id: "it-uq-a1-8-5", level: "A1", prompt: "Which month is 'agosto'?", options: ["June", "July", "August", "September"], answer: "August" },
            { id: "it-uq-a1-8-6", level: "A1", prompt: "How do you say 'I am twenty-two years old'?", options: ["Ho venti-due anni.", "Ho ventadue anni.", "Ho ventidue anni.", "Sono ventidue anni."], answer: "Ho ventidue anni." },
        ]
    },

    // ── NEW u16: Likes & Dislikes ──
    // Inserted between u14 (Places & Directions) and u15 (Near Future)
    // u15 order bumps to 17 — see patch below
    {
        id: "it-a1-u16",
        level: "A1",
        order: 16,
        title: "Likes & Dislikes",
        description: "Learn to say what you like, dislike, and prefer using piacere — Italian's back-to-front 'like' verb.",
        grammarIds: ["it-g-a1-16"],
        vocabIds: [
            // Things to like/dislike — draw from existing food, places, activities
            "it-v-a1-64",  // il caffè
            "it-v-a1-65",  // il vino
            "it-v-a1-66",  // la pizza
            "it-v-a1-67",  // la pasta
            "it-v-a1-70",  // la frutta
            "it-v-a1-71",  // la verdura
            "it-v-a1-110", // la città
            "it-v-a1-117", // il parco
            "it-v-a1-122", // la spiaggia
            "it-v-a1-147", // sempre
            "it-v-a1-148", // mai
            "it-v-a1-149", // spesso
            "it-v-a1-150", // a volte
        ],
        verbIds: ["it-vb-a1-6"],  // volere — pairs naturally with preference expressions
        testQuestions: [
            { id: "it-uq-a1-16-1", level: "A1", prompt: "How do you say 'I like pizza'?", options: ["Io piace la pizza.", "Mi piace la pizza.", "Mi piacciono la pizza.", "Piaccio la pizza."], answer: "Mi piace la pizza." },
            { id: "it-uq-a1-16-2", level: "A1", prompt: "How do you say 'I like cats' (plural)?", options: ["Mi piace i gatti.", "Mi piacciono i gatti.", "Mi piaciono i gatti.", "Ti piacciono i gatti."], answer: "Mi piacciono i gatti." },
            { id: "it-uq-a1-16-3", level: "A1", prompt: "How do you say 'I don't like fish'?", options: ["Non mi piace il pesce.", "Mi non piace il pesce.", "Non mi piacciono il pesce.", "Mi piace non il pesce."], answer: "Non mi piace il pesce." },
            { id: "it-uq-a1-16-4", level: "A1", prompt: "How do you say 'I prefer red wine'?", options: ["Preferisco il vino rosso.", "Preferisce il vino rosso.", "Preferisco vino rosso.", "Mi piace preferire il vino rosso."], answer: "Preferisco il vino rosso." },
            { id: "it-uq-a1-16-5", level: "A1", prompt: "How do you say 'Do you like Italian music?' (informal)", options: ["Le piace la musica italiana?", "Ti piace la musica italiana?", "Ti piacciono la musica italiana?", "Gli piace la musica italiana?"], answer: "Ti piace la musica italiana?" },
            { id: "it-uq-a1-16-6", level: "A1", prompt: "Complete: 'Mi piace ___.' (to study Italian)", options: ["studiare l'italiano", "lo studio italiano", "studio l'italiano", "studente italiano"], answer: "studiare l'italiano" },
        ]
    },

    // ── PATCH u15: bump order from 15 → 17 ──
    // Only order changes — all other content identical to existing unit
    {
        id: "it-a1-u15",
        level: "A1",
        order: 17,  // <-- was 15
        title: "The Near Future",
        description: "Express future plans and imminent events using stare per + infinitive and andare a + infinitive.",
        grammarIds: ["it-g-a1-13"],
        vocabIds: [
            "it-v-a1-141", "it-v-a1-142", "it-v-a1-143",
            "it-v-a1-144", "it-v-a1-145", "it-v-a1-146"
        ],
        verbIds: ["it-vb-a1-4", "it-vb-a1-1"],
        testQuestions: [
            { id: "it-uq-a1-15-1", level: "A1", prompt: "How do you say 'I am about to go out'?", options: ["Vado a uscire.", "Sto per uscire.", "Uscirò presto.", "Sto uscendo."], answer: "Sto per uscire." },
            { id: "it-uq-a1-15-2", level: "A1", prompt: "Complete: 'Vado ___ mangiare.'", options: ["per", "di", "a", "in"], answer: "a" },
            { id: "it-uq-a1-15-3", level: "A1", prompt: "How do you say 'It is about to rain'?", options: ["Piove sempre.", "Sta per piovere.", "Va a piovere.", "Pioverà."], answer: "Sta per piovere." },
            { id: "it-uq-a1-15-4", level: "A1", prompt: "What does 'domani' mean?", options: ["Today", "Yesterday", "Now", "Tomorrow"], answer: "Tomorrow" },
            { id: "it-uq-a1-15-5", level: "A1", prompt: "Which structure means something is ABOUT TO happen right now?", options: ["andare a + inf.", "stare per + inf.", "volere + inf.", "potere + inf."], answer: "stare per + inf." },
            { id: "it-uq-a1-15-6", level: "A1", prompt: "Translate: 'We are going to watch a film tonight.'", options: ["Guardiamo un film stasera.", "Abbiamo guardato un film stasera.", "Andiamo a vedere un film stasera.", "Stiamo per vedere un film."], answer: "Andiamo a vedere un film stasera." },
        ]
    },
]


// ─────────────────────────────────────────────────────────────────────────────
// SUMMARY — what to do with this file
//
// src/data/italian/grammar/a1.ts
//   → Append newGrammarLesson (it-g-a1-16) after the existing it-g-a1-15
//     (it-g-a1-14 and it-g-a1-15 should already be there from a1-italian-additions.ts)
//
// src/data/italian/vocab/a1.ts
//   → Append all 11 items in newNumberVocab after the last existing item (it-v-a1-152)
//
// src/data/italian/units/a1.ts
//   → Replace it-a1-u5  with the patched version (adds prepositions to grammarIds)
//   → Replace it-a1-u8  with the patched version (adds grammar + 11 new vocab IDs)
//   → Add     it-a1-u16 (new — insert before u15 in the array)
//   → Replace it-a1-u15 with the patched version (order 15 → 17 only)
// ─────────────────────────────────────────────────────────────────────────────
