// UNIT MAPPING PATCHES
// How to integrate the new grammar lessons into existing unit files
// ================================================================

// ----------------------------------------------------------------
// KOREAN — a1-korean-units.ts
// The revised grammar file (a1-korean-revised.ts) renumbers lessons.
// Key mapping changes:
//
// OLD grammar ID        → NEW grammar ID   (lesson content)
// ko-g-a1-1 (Hangul)   → ko-g-a1-2        (Hangul: syllable blocks)
// ko-g-a1-2 (Sentence) → ko-g-a1-3        (X은/는 Y이에요)
// ko-g-a1-3 (Greetings)→ ko-g-a1-4        (Greetings)
// ko-g-a1-4 (Sino nums)→ ko-g-a1-11       (Numbers: both systems, combined)
// ko-g-a1-5 (이/가)    → ko-g-a1-5        (이/가 vs 은/는, now contrastive)
// ko-g-a1-6 (을/를)    → ko-g-a1-6        (을/를, unchanged)
// ko-g-a1-7 (에/에서)  → ko-g-a1-7        (에/에서, unchanged)
// ko-g-a1-8 (Present)  → ko-g-a1-8        (Present ~아/어요, unchanged)
// ko-g-a1-9 (Past)     → ko-g-a1-9        (Past ~았/었어요, unchanged)
// ko-g-a1-10 (Negation)→ ko-g-a1-10       (Negation 안/못, unchanged)
// ko-g-a1-11 (Native)  → now part of ko-g-a1-11 (merged with Sino)
// ko-g-a1-12 (Q words) → ko-g-a1-12       (Question words, unchanged)
//
// NEW lesson: ko-g-a1-1 "How Korean Works" → add to unit ko-a1-u1
//   Update ko-a1-u1 grammarIds: ["ko-g-a1-1", "ko-g-a1-2"]
//
// MERGED numbers: ko-a1-u3 and ko-a1-u4 now both reference ko-g-a1-11
//   ko-a1-u3 grammarIds: ["ko-g-a1-11"]   (Sino-Korean context)
//   ko-a1-u4 grammarIds: ["ko-g-a1-11"]   (Native Korean context)
//   This is fine — students see both systems in the same grammar reference
//
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// JAPANESE — a1-japanese-units.ts
// Add ja-g-a1-0 ("How Japanese Works") to unit ja-a1-u1.
//
// PATCH for ja-a1-u1:
//   grammarIds: ["ja-g-a1-0", "ja-g-a1-1"]   // orientation + Hiragana Part 1
//
// PATCH for ja-a1-u2 (currently bundles Hiragana Part 2 + Greetings):
//   This is fine as-is. But consider splitting: unit 2 = Hiragana Part 2 only,
//   move greetings grammar (ja-g-a1-5) entirely to unit 5 (Greetings & Daily Expressions)
//   which already focuses on greetings. Avoids the duplication.
//   PATCH: ja-a1-u2 grammarIds: ["ja-g-a1-2"]   // Hiragana Part 2 only
//   PATCH: ja-a1-u5 grammarIds: ["ja-g-a1-5"]    // Greetings only (already correct)
//
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// ITALIAN — a1-italian-units.ts
// Two new grammar lessons: it-g-a1-14 (Prepositions), it-g-a1-15 (Numbers)
//
// PATCH for it-a1-u5 (Irregular Verbs: Andare & Fare):
//   Andare uses prepositions constantly (vado a, andiamo al, vai in).
//   Add it-g-a1-14 here so prepositions are taught alongside the first heavy
//   use of destination/location language.
//   grammarIds: ["it-g-a1-8", "it-g-a1-9", "it-g-a1-14"]
//
// PATCH for it-a1-u8 (Numbers & Dates):
//   Currently has no grammarIds — learners get numbers vocab with no explanation.
//   grammarIds: ["it-g-a1-15"]
//
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// FRENCH — a1-french-units.ts
// Three new grammar lessons: fr-g-a1-14 (Contractions), fr-g-a1-15 (-ir verbs), fr-g-a1-16 (-re verbs)
//
// PATCH for fr-a1-u4 (Articles & Noun Gender):
//   Contractions (au/du/aux/des) are a direct extension of the articles lesson.
//   Teach them together — learners immediately need au/du when they hit aller and faire.
//   grammarIds: ["fr-g-a1-3", "fr-g-a1-14"]
//
// NEW UNIT: fr-a1-u16 "-ir and -re Verbs" (add after existing unit 15)
//   title: "More Verbs: -ir and -re"
//   description: "Expand beyond -er verbs: conjugate regular -ir verbs (finir) and -re verbs (vendre)."
//   grammarIds: ["fr-g-a1-15", "fr-g-a1-16"]
//   verbIds: []  // add fr-vb-a1 ids for finir/choisir/vendre/attendre when available
//   This pushes French to 16 units at A1, which is consistent with its content depth.
//
//   Suggested testQuestions for fr-a1-u16:
const frU16TestQuestions = [
    { id: "fr-uq-a1-16-1", level: "A1", prompt: "Complete: 'Tu ___ le bon repas.' (choisir)", options: ["choisis", "choisit", "choisissez", "choisissons"], answer: "choisis" },
    { id: "fr-uq-a1-16-2", level: "A1", prompt: "What is the key marker of regular -ir verbs in plural forms?", options: ["-iss-", "-ez-", "-ons-", "-ent-"], answer: "-iss-" },
    { id: "fr-uq-a1-16-3", level: "A1", prompt: "Complete: 'Il ___ la lettre.' (répondre)", options: ["répondons", "répond", "réponds", "répondez"], answer: "répond" },
    { id: "fr-uq-a1-16-4", level: "A1", prompt: "The il/elle form of -re verbs has:", options: ["an -e ending", "an -s ending", "no ending — bare stem", "an -ent ending"], answer: "no ending — bare stem" },
    { id: "fr-uq-a1-16-5", level: "A1", prompt: "Complete: 'Nous ___ le travail.' (finir)", options: ["finissons", "finissez", "finissent", "finisons"], answer: "finissons" },
    { id: "fr-uq-a1-16-6", level: "A1", prompt: "Complete: 'Vous ___ des livres.' (vendre)", options: ["vendons\", \"vendent\", \"vendez\", \"vends"], answer: "vendez" },
]
// ----------------------------------------------------------------
