import type { Checkpoint } from '../../../types'

export const a1Checkpoints: Checkpoint[] = [
  // ── it-cp-a1-1 : Block 1 — Presentati! (after U4) ────────────────────────
  {
    id: 'it-cp-a1-1',
    level: 'A1',
    block: 1,
    type: 'speaking',
    title: 'Presentati!',
    scenario:
      "You're at a language exchange evening in Rome — Scambi di Lingua, held at a bar near Piazza Navona. A native Italian speaker sits down next to you, extends a hand, and says: \"Ciao! Raccontami qualcosa di te.\"\n\nSpeak for 60–90 seconds. Introduce yourself naturally — not as a list of grammar exercises, but as a real person meeting someone for the first time.",
    speakingPrompts: [
      'Greet them and respond to their greeting (Ciao! / Buonasera! — appropriate register)',
      'Say your name (Mi chiamo... / Sono...)',
      'Say your nationality and where you\'re from (Sono [nazionalità]. Sono di...)',
      'Say your age (Ho X anni.)',
      'Say what you do — job or studies (Sono... / Lavoro... / Studio...)',
      'Use a -are verb to say something you do (abito, parlo, lavoro, studio...)',
      'Say something you have — a family member, a pet, or a home (Ho un fratello... / Ho un cane...)',
      'Close with a polite farewell (È stato un piacere! / A presto! / Buona serata!)',
    ],
  },

  // ── it-cp-a1-2 : Block 2 — Parla del tuo mondo (after U9) ────────────────
  {
    id: 'it-cp-a1-2',
    level: 'A1',
    block: 2,
    type: 'speaking',
    title: 'Parla del tuo mondo',
    scenario:
      "You're on your second video call with Giulia, an Italian student in Bologna you met through a language exchange app. You've already introduced yourself. Now she asks: \"Dimmi di te! Della tua famiglia, di dove abiti, di quello che ti piace...\"\n\nSpeak for 90–120 seconds. Tell her about your family, your home, your likes and dislikes, and where you go.",
    speakingPrompts: [
      'Describe 2–3 family members using possessives (mio fratello, la mia famiglia, i miei genitori...)',
      'Describe one family member briefly — age, job, or personality (È simpatico. Ha ventisei anni.)',
      'Express 2 things you like — include at least one mi piacciono (plural) (Mi piace tantissimo... / Mi piacciono...)',
      'Express 1 thing you dislike (Non mi piace per niente... / Detesto... / Odio...)',
      'Use c\'è or ci sono to describe your home or neighbourhood (C\'è una cucina grande. Ci sono due camere.)',
      'Say where you go regularly using andare with different prepositions (Vado al lavoro... / Vado in palestra... / Vado da amici...)',
      'Use at least one -ere or -ire verb naturally (Leggo, scrivo, finisco, preferisco, parto...)',
    ],
  },

  // ── it-cp-a1-3 : Block 3 — Descrivi la tua giornata (after U14) ──────────
  {
    id: 'it-cp-a1-3',
    level: 'A1',
    block: 3,
    type: 'speaking',
    title: 'Descrivi la tua giornata',
    scenario:
      "Your Italian pen pal Francesca has sent you a voice message asking: \"Ciao! Voglio sapere tutto di te — com'è la tua giornata tipica? Cosa fai di mattina? A che ora ti alzi? Cosa non fai mai? E cosa ti piace fare nel weekend?\"\n\nRecord a voice message back to her. Aim for 90–120 seconds. Speak naturally — she's a friend, so informal register (tu) throughout.",
    speakingPrompts: [
      'Say what time something happened or usually happens (Mi alzo alle... / Sono le otto quando...)',
      'Use at least 2 reflexive verbs to describe your routine (mi sveglio, mi alzo, mi faccio la doccia, mi vesto, mi addormento...)',
      'Use a negative sentence with mai or niente (Non faccio mai colazione fuori. / Non c\'è niente da fare.)',
      'Ask Francesca at least one question back using a question word (E tu? / Cosa fai il weekend? / A che ora ti alzi?)',
      'Use at least one fare compound expression (fare colazione, fare sport, fare la spesa, fare una passeggiata...)',
      'Use a time adverb to give texture (di solito, già, ancora, spesso, di mattina, prima di...)',
    ],
  },

  // ── it-cp-a1-4 : Block 4 — Orientarsi nel mondo (after U19) ─────────────
  {
    id: 'it-cp-a1-4',
    level: 'A1',
    block: 4,
    type: 'speaking',
    title: 'Orientarsi nel mondo',
    scenario:
      "A day in an Italian city. Three mini-situations to handle:\n\n1. You're at a table in a trattoria in Rome — order a full meal and ask the waiter a question.\n2. Near the Duomo in Milan, a tourist asks you for directions to the nearest metro station.\n3. On a Friday video call, an Italian friend asks \"Cosa fai questo weekend?\" — explain what you can, want, and must do.",
    speakingPrompts: [
      'Order using vorrei and prendo — at least a primo, secondo, and drink (Vorrei le tagliatelle... / Come secondo prendo...)',
      'Use the partitive at least once when ordering (Dell\'acqua naturale, per favore. / Del pane.)',
      'Ask the waiter a relevant question (È incluso il coperto? / Ha qualcosa senza glutine? / Cosa consiglia?)',
      'Give or ask for directions using at least 3 direction phrases and 2 prepositions of place (Vada dritto... / Giri a sinistra... / È accanto alla farmacia, di fronte alla banca.)',
      'Use all three modal verbs in the weekend scenario — posso, voglio (or vorrei), and devo (Devo lavorare... / Posso uscire nel pomeriggio... / Voglio andare al mercato.)',
      'Use questo or quello to point to something (Prendo quello. / Questa borsa è bellissima.)',
    ],
  },

  // ── it-cp-a1-5 : Block 5 — Sono pronto! A1 capstone (after U25) ─────────
  {
    id: 'it-cp-a1-5',
    level: 'A1',
    block: 5,
    type: 'speaking',
    title: 'Sono pronto! A1 capstone',
    scenario:
      "You're on an Italian podcast for language learners. The host says: \"Ciao! Sei un apprendente di italiano — ci parli un po' di te, della tua vita in italiano, e dei tuoi piani per il futuro.\"\n\nSpeak for 2–3 minutes. This is your A1 capstone — bring everything together. Cover who you are, your world, your daily life, what you know how to do, somewhere or someone you know, and something you're about to do or planning.",
    speakingPrompts: [
      'Full self-introduction: name, origin, where you live, age, what you do (essere, avere, -are/-ere/-ire verbs)',
      'Your world: 1–2 family members with possessives and adjectives; 1 thing you like and 1 you dislike (mi piace / non mi piace)',
      'Daily routine: at least 2 reflexive verbs, a specific time, and 1 fare compound expression',
      'Use c\'è or ci sono to describe your neighbourhood or a city you know',
      'Use at least one modal verb in context — posso, voglio, or devo (something you can, want, or must do)',
      'Use sapere for something you know how to do (So cucinare... / So parlare...)',
      'Use conoscere for a person or place you know (Conosco Roma... / Non conosco ancora il Sud.)',
      'Use stare per or andare a (+ infinitive) for something you\'re about to do or planning (Sto per... / Vado a...)',
      'Use at least 3 connectors to sound natural and connected (ma, però, quindi, anche se, allora, insomma...)',
    ],
  },
]
