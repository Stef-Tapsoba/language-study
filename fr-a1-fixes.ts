// ─────────────────────────────────────────────────────────────────────────────
// FRENCH A1 FIXES
// Three things addressed:
//   1. New grammar lesson  fr-g-a1-17  — Likes & Dislikes (aimer/préférer/détester)
//   2. New grammar lesson  fr-g-a1-14  — Contractions au/du/aux/des  (already written,
//      included here for completeness so this file is the single source of truth)
//   3. Four unit patches:
//      u4  — add fr-g-a1-14 (contractions) to grammarIds
//      u11 — add days/months vocab IDs that are currently orphaned
//      u13 — add fr-g-a1-17 (likes/dislikes) to grammarIds, new test questions
//      u16 — NEW unit for likes/dislikes (order 16, bridge before futur proche)
//      u15 — bump order from 15 → 17  (futur proche stays last)
// ─────────────────────────────────────────────────────────────────────────────

import { GrammarLesson, LessonUnit } from "../../../types"

// ─────────────────────────────────────────────────────────────────────────────
// 1.  NEW GRAMMAR LESSONS
//     Add both to the end of the a1Grammar array in src/data/french/grammar/a1.ts
// ─────────────────────────────────────────────────────────────────────────────

export const newGrammarLessons: GrammarLesson[] = [
    // ── Contractions (was already written, keeping here as canonical copy) ──
    {
        id: "fr-g-a1-14",
        level: "A1",
        title: "Contractions: au, du, aux, des",
        explanation: "When the prepositions à (to/at) and de (of/from) meet the definite articles le and les, they must contract. This is not optional — 'à le' and 'de le' do not exist in French.\n\nà + le → au | à + les → aux\nde + le → du | de + les → des\n\nNote: à la, de la, à l', and de l' do NOT contract — they stay as they are.",
        examples: [
            { native: "Je vais au marché.", translation: "I'm going to the market. (à + le = au)" },
            { native: "Elle parle aux étudiants.", translation: "She speaks to the students. (à + les = aux)" },
            { native: "C'est le livre du professeur.", translation: "It's the teacher's book. (de + le = du)" },
            { native: "Il vient des États-Unis.", translation: "He comes from the United States. (de + les = des)" },
            { native: "Je vais à la boulangerie.", translation: "I'm going to the bakery. (à + la — no contraction)" },
            { native: "Elle revient de l'école.", translation: "She's coming back from school. (de + l' — no contraction)" },
        ]
    },

    // ── Likes & Dislikes — the new lesson ──
    {
        id: "fr-g-a1-17",
        level: "A1",
        title: "Likes & Dislikes: aimer, préférer, détester",
        explanation: "To express what you like or dislike, use aimer (to like/love), préférer (to prefer), or détester (to hate/strongly dislike). All three are regular -er verbs in conjugation.\n\nKey rule: when these verbs are followed by a noun, use the definite article (le/la/les) — not the indefinite. This trips up many learners:\n✓ J'aime le café.  ✗ J'aime un café.\n\nTo soften 'aimer', add bien: J'aime bien = I quite like (less intense than J'aime).\nTo ask about preferences, use: Tu aimes...? / Vous aimez...? / Qu'est-ce que tu préfères?",
        examples: [
            { native: "J'aime le français.", translation: "I like French." },
            { native: "Tu aimes le café?", translation: "Do you like coffee?" },
            { native: "Elle n'aime pas le sport.", translation: "She doesn't like sport." },
            { native: "Nous aimons bien ce restaurant.", translation: "We quite like this restaurant." },
            { native: "Je préfère le thé au café.", translation: "I prefer tea to coffee." },
            { native: "Il déteste les légumes.", translation: "He hates vegetables." },
            { native: "Qu'est-ce que tu aimes faire?", translation: "What do you like to do?" },
        ]
    },
]

// ─────────────────────────────────────────────────────────────────────────────
// 2.  UNIT PATCHES
//     Each entry below shows the COMPLETE updated unit object.
//     Replace the matching unit in src/data/french/units/a1.ts.
// ─────────────────────────────────────────────────────────────────────────────

export const unitPatches: LessonUnit[] = [

    // ── PATCH u4: add fr-g-a1-14 (contractions) to grammarIds ──
    // Change: grammarIds ["fr-g-a1-3"] → ["fr-g-a1-3", "fr-g-a1-14"]
    {
        id: "fr-a1-u4",
        level: "A1",
        order: 4,
        title: "Articles & Noun Gender",
        description: "Learn definite articles (le/la/l'/les), grammatical gender, and the essential contractions au, du, aux, des.",
        grammarIds: ["fr-g-a1-3", "fr-g-a1-14"],
        vocabIds: [
            "fr-v-a1-63", "fr-v-a1-64", "fr-v-a1-65", "fr-v-a1-66", "fr-v-a1-67",
            "fr-v-a1-80", "fr-v-a1-81", "fr-v-a1-82", "fr-v-a1-83", "fr-v-a1-84"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-4-1", level: "A1", prompt: "Which article is used with a feminine noun?", options: ["le", "les", "un", "la"], answer: "la" },
            { id: "fr-uq-a1-4-2", level: "A1", prompt: "What happens to le/la before a vowel?", options: ["they become les", "they become l'", "they stay the same", "they become un"], answer: "they become l'" },
            { id: "fr-uq-a1-4-3", level: "A1", prompt: "What is 'à + le'?", options: ["al", "du", "au", "aux"], answer: "au" },
            { id: "fr-uq-a1-4-4", level: "A1", prompt: "What is 'de + les'?", options: ["du", "des", "de les", "dels"], answer: "des" },
            { id: "fr-uq-a1-4-5", level: "A1", prompt: "Complete: 'Je vais ___ marché.' (le marché)", options: ["à le", "au", "du", "de le"], answer: "au" },
            { id: "fr-uq-a1-4-6", level: "A1", prompt: "Complete: 'C'est le livre ___ professeur.' (le professeur)", options: ["de le", "du", "des", "au"], answer: "du" },
        ]
    },

    // ── PATCH u11: add orphaned days/months vocab IDs ──
    // Change: vocabIds gains fr-v-a1-28 through fr-v-a1-41 (days, months, seasons)
    {
        id: "fr-a1-u11",
        level: "A1",
        order: 11,
        title: "Numbers, Time & Calendar",
        description: "Learn numbers 0–100, how to tell the time, and vocabulary for days, months, and seasons.",
        grammarIds: ["fr-g-a1-12"],
        vocabIds: [
            // Numbers
            "fr-v-a1-13", "fr-v-a1-14", "fr-v-a1-15", "fr-v-a1-16", "fr-v-a1-17",
            "fr-v-a1-18", "fr-v-a1-19", "fr-v-a1-20", "fr-v-a1-21", "fr-v-a1-22",
            "fr-v-a1-23", "fr-v-a1-24", "fr-v-a1-25", "fr-v-a1-26", "fr-v-a1-27",
            // Days of the week
            "fr-v-a1-28", "fr-v-a1-29", "fr-v-a1-30", "fr-v-a1-31",
            "fr-v-a1-32", "fr-v-a1-33", "fr-v-a1-34",
            // Months (3 representative entries — full set if you add the missing months)
            "fr-v-a1-35", "fr-v-a1-36", "fr-v-a1-37",
            // Seasons
            "fr-v-a1-38", "fr-v-a1-39", "fr-v-a1-40", "fr-v-a1-41",
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-11-1", level: "A1", prompt: "How do you say 'It is half past three'?", options: ["Il est trois heures et quart.", "Il est trois heures et demie.", "Il est trois heures moins le quart.", "Il est trois heures."], answer: "Il est trois heures et demie." },
            { id: "fr-uq-a1-11-2", level: "A1", prompt: "What is 70 in French?", options: ["soixante", "quatre-vingts", "soixante-dix", "septante"], answer: "soixante-dix" },
            { id: "fr-uq-a1-11-3", level: "A1", prompt: "What is 80 in French?", options: ["soixante-dix", "quatre-vingt-dix", "quatre-vingts", "huitante"], answer: "quatre-vingts" },
            { id: "fr-uq-a1-11-4", level: "A1", prompt: "What day comes after mardi?", options: ["lundi", "jeudi", "mercredi", "vendredi"], answer: "mercredi" },
            { id: "fr-uq-a1-11-5", level: "A1", prompt: "What season is 'l'hiver'?", options: ["spring", "summer", "autumn", "winter"], answer: "winter" },
            { id: "fr-uq-a1-11-6", level: "A1", prompt: "How do you say 'I am twenty years old'?", options: ["J'ai vingt ans.", "Je suis vingt ans.", "J'ai vingt années.", "Je fais vingt ans."], answer: "J'ai vingt ans." },
        ]
    },

    // ── NEW u16: Likes & Dislikes ──
    // Insert between current u14 (Places & Daily Routine) and u15 (Futur Proche)
    // u15 order bumps from 15 → 17 — see patch below
    {
        id: "fr-a1-u16",
        level: "A1",
        order: 16,
        title: "Likes & Dislikes",
        description: "Learn to say what you like, dislike, and prefer — one of the most essential skills in everyday French conversation.",
        grammarIds: ["fr-g-a1-17"],
        vocabIds: [
            // Activities and things to like/dislike — drawn from existing vocab
            "fr-v-a1-65",  // le café
            "fr-v-a1-66",  // le thé
            "fr-v-a1-75",  // le fromage
            "fr-v-a1-76",  // la viande
            "fr-v-a1-78",  // les légumes
            "fr-v-a1-79",  // les fruits
            "fr-v-a1-82",  // la nourriture
            "fr-v-a1-83",  // le restaurant
            "fr-v-a1-152", // souvent
            "fr-v-a1-153", // toujours
            "fr-v-a1-154", // jamais
            "fr-v-a1-166", // facile
            "fr-v-a1-167", // difficile
            "fr-v-a1-170", // content/contente
            "fr-v-a1-172", // sympa
        ],
        verbIds: ["fr-vb-a1-6"],  // vouloir — pairs well with expressing preferences
        testQuestions: [
            { id: "fr-uq-a1-16-1", level: "A1", prompt: "How do you say 'I like French'?", options: ["J'aime bien un français.", "J'aime le français.", "J'aime de français.", "J'aime français."], answer: "J'aime le français." },
            { id: "fr-uq-a1-16-2", level: "A1", prompt: "How do you say 'She doesn't like sport'?", options: ["Elle n'aime pas le sport.", "Elle aime ne pas sport.", "Elle aime pas de sport.", "Elle n'aime pas de sport."], answer: "Elle n'aime pas le sport." },
            { id: "fr-uq-a1-16-3", level: "A1", prompt: "Which sentence correctly expresses a preference?", options: ["Je préfère un thé au café.", "Je préfère le thé au café.", "Je préfère thé de café.", "Je préfère de thé au café."], answer: "Je préfère le thé au café." },
            { id: "fr-uq-a1-16-4", level: "A1", prompt: "What does 'J'aime bien' express compared to 'J'aime'?", options: ["Stronger like", "Slightly softer like", "Dislike", "Indifference"], answer: "Slightly softer like" },
            { id: "fr-uq-a1-16-5", level: "A1", prompt: "How do you ask 'Do you like coffee?' (informal)?", options: ["Vous aimez le café?", "Tu aimes le café?", "Tu aimes un café?", "Tu aimes de café?"], answer: "Tu aimes le café?" },
            { id: "fr-uq-a1-16-6", level: "A1", prompt: "Complete: 'Il ___ les légumes.' (détester)", options: ["déteste", "détestes", "détestez", "détestent"], answer: "déteste" },
        ]
    },

    // ── PATCH u15: bump order from 15 → 17 (futur proche stays the bridge/final unit) ──
    // Only the order field changes — everything else is identical to the existing unit
    {
        id: "fr-a1-u15",
        level: "A1",
        order: 17,   // <-- was 15
        title: "Bridge: Le Futur Proche",
        description: "Learn to talk about planned future actions using aller + infinitive — the most common future structure in French.",
        grammarIds: ["fr-g-a1-13"],
        vocabIds: [
            "fr-v-a1-42", "fr-v-a1-43", "fr-v-a1-44", "fr-v-a1-45", "fr-v-a1-46", "fr-v-a1-47",
            "fr-v-a1-156", "fr-v-a1-157", "fr-v-a1-158"
        ],
        verbIds: [],
        testQuestions: [
            { id: "fr-uq-a1-15-1", level: "A1", prompt: "How is the futur proche formed?", options: ["Present of avoir + infinitive", "Present of être + infinitive", "Present of aller + infinitive", "Present of faire + infinitive"], answer: "Present of aller + infinitive" },
            { id: "fr-uq-a1-15-2", level: "A1", prompt: "Complete: 'Je ___ manger ce soir.' (futur proche)", options: ["vais", "suis", "fais", "ai"], answer: "vais" },
            { id: "fr-uq-a1-15-3", level: "A1", prompt: "How do you say 'We are going to visit Paris'?", options: ["Nous visitons Paris.", "Nous allons visiter Paris.", "Nous faisons visiter Paris.", "Nous avons visité Paris."], answer: "Nous allons visiter Paris." },
            { id: "fr-uq-a1-15-4", level: "A1", prompt: "What does 'demain' mean?", options: ["yesterday", "now", "tomorrow", "soon"], answer: "tomorrow" },
            { id: "fr-uq-a1-15-5", level: "A1", prompt: "Complete: 'Il ___ pleuvoir demain.' (futur proche)", options: ["fait", "va", "est", "a"], answer: "va" },
            { id: "fr-uq-a1-15-6", level: "A1", prompt: "What does 'bientôt' mean?", options: ["already", "soon", "now", "still"], answer: "soon" },
        ]
    },
]

// ─────────────────────────────────────────────────────────────────────────────
// 3.  MONTHS VOCAB GAP
//
//     The vocab file only has 3 of 12 months:
//       fr-v-a1-35 janvier, fr-v-a1-36 juin, fr-v-a1-37 décembre
//
//     The 9 missing months need to be added to src/data/french/vocab/a1.ts.
//     Add them after fr-v-a1-37 and before fr-v-a1-38 (printemps).
//     Then add their IDs to u11 vocabIds above.
// ─────────────────────────────────────────────────────────────────────────────

export const missingMonthsVocab = [
    { id: "fr-v-a1-37b", level: "A1", word: "février",   translation: "February",  category: "Time", example: { native: "Il fait froid en février.",        translation: "It is cold in February." } },
    { id: "fr-v-a1-37c", level: "A1", word: "mars",      translation: "March",     category: "Time", example: { native: "Le printemps commence en mars.",   translation: "Spring begins in March." } },
    { id: "fr-v-a1-37d", level: "A1", word: "avril",     translation: "April",     category: "Time", example: { native: "Il pleut souvent en avril.",        translation: "It often rains in April." } },
    { id: "fr-v-a1-37e", level: "A1", word: "mai",       translation: "May",       category: "Time", example: { native: "Le 1er mai est un jour férié.",     translation: "May 1st is a public holiday." } },
    { id: "fr-v-a1-37g", level: "A1", word: "juillet",   translation: "July",      category: "Time", example: { native: "Le 14 juillet est la fête nationale.", translation: "July 14th is the national holiday." } },
    { id: "fr-v-a1-37h", level: "A1", word: "août",      translation: "August",    category: "Time", example: { native: "En août, beaucoup de Français partent en vacances.", translation: "In August, many French people go on holiday." } },
    { id: "fr-v-a1-37i", level: "A1", word: "septembre", translation: "September", category: "Time", example: { native: "La rentrée scolaire est en septembre.", translation: "The start of the school year is in September." } },
    { id: "fr-v-a1-37j", level: "A1", word: "octobre",   translation: "October",   category: "Time", example: { native: "Les feuilles tombent en octobre.",   translation: "The leaves fall in October." } },
    { id: "fr-v-a1-37k", level: "A1", word: "novembre",  translation: "November",  category: "Time", example: { native: "Il fait gris en novembre.",          translation: "It is grey in November." } },
]

// NOTE on IDs: IDs fr-v-a1-37b through fr-v-a1-37k use letter suffixes to
// avoid renumbering the existing vocab items. If you prefer sequential IDs,
// renumber starting from fr-v-a1-174 (after the last existing item at 173).
// The letter-suffix approach is safer if any existing content references
// the higher IDs by number.
