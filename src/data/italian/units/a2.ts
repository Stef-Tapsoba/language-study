import { LessonUnit } from "../../../types"

export const a2Units: LessonUnit[] = [
    {
        id: "it-a2-u1",
        level: "A2",
        order: 1,
        title: "Talking About the Past",
        description: "Form the passato prossimo with avere and essere to describe completed past actions.",
        grammarIds: ["it-g-a2-1"],
        vocabIds: ["it-v-a2-1", "it-v-a2-4", "it-v-a2-5"],
        verbIds: ["it-vb-a2-2"],
        testQuestions: [
            { id: "it-uq-a2-1-1", level: "A2", prompt: "Complete (passato prossimo): 'Ieri lei ___ la pizza.' (mangiare)", options: ["mangiava", "mangia", "ha mangiato", "mangiò"], answer: "ha mangiato" },
            { id: "it-uq-a2-1-2", level: "A2", prompt: "Complete: 'Noi ___ al cinema ieri.' (andare — uses essere)", options: ["abbiamo andato", "siamo andati", "andavamo", "andiamo"], answer: "siamo andati" },
            { id: "it-uq-a2-1-3", level: "A2", prompt: "What is the past participle of 'fare'?", options: ["fato", "fatto", "facito", "faccio"], answer: "fatto" },
            { id: "it-uq-a2-1-4", level: "A2", prompt: "Complete: 'Tu ___ la pasta.' (mangiare — passato prossimo)", options: ["mangi", "mangiavi", "hai mangiato", "mangerai"], answer: "hai mangiato" },
            { id: "it-uq-a2-1-5", level: "A2", prompt: "Verbs of motion in passato prossimo use which auxiliary?", options: ["Avere", "Essere", "Stare", "Fare"], answer: "Essere" }
        ]
    },
    {
        id: "it-a2-u2",
        level: "A2",
        order: 2,
        title: "Describing the Past",
        description: "Use the imperfetto to describe habitual past actions and ongoing states.",
        grammarIds: ["it-g-a2-2"],
        vocabIds: ["it-v-a2-6", "it-v-a2-7", "it-v-a2-8"],
        verbIds: ["it-vb-a2-1"],
        testQuestions: [
            { id: "it-uq-a2-2-1", level: "A2", prompt: "How do you say 'I used to eat pizza every week'?", options: ["Ho mangiato la pizza ogni settimana.", "Mangiavo la pizza ogni settimana.", "Mangio la pizza ogni settimana.", "Mangerò la pizza ogni settimana."], answer: "Mangiavo la pizza ogni settimana." },
            { id: "it-uq-a2-2-2", level: "A2", prompt: "Complete (imperfetto): 'Da bambino, io ___ a calcio.' (giocare)", options: ["giocavo", "gioco", "ho giocato", "giocherò"], answer: "giocavo" },
            { id: "it-uq-a2-2-3", level: "A2", prompt: "Which tense describes habitual past actions?", options: ["Passato prossimo", "Futuro semplice", "Imperfetto", "Presente"], answer: "Imperfetto" },
            { id: "it-uq-a2-2-4", level: "A2", prompt: "Complete (imperfetto): 'Quando ___ piccola, amavo leggere.' (essere, io)", options: ["ero", "era", "eravamo", "erei"], answer: "ero" },
            { id: "it-uq-a2-2-5", level: "A2", prompt: "Complete (imperfetto): 'Da giovane, ___ spesso al parco.' (uscire — abituale)", options: ["esco", "uscivo", "sono uscito", "uscirò"], answer: "uscivo" }
        ]
    },
    {
        id: "it-a2-u3",
        level: "A2",
        order: 3,
        title: "Reflexive Verbs in the Past",
        description: "Use reflexive verbs in the passato prossimo with essere. Learn reciprocal forms (ci siamo visti) and past agreement rules.",
        grammarIds: ["it-g-a2-3"],
        vocabIds: ["it-v-a2-9", "it-v-a2-10"],
        verbIds: [],
        listeningIds: ["it-l-a2-1"],
        testQuestions: [
            { id: "it-uq-a2-3-1", level: "A2", prompt: "Complete (passato prossimo): 'Stamattina io ___ alle sette.' (svegliarsi)", options: ["svegliavo", "si è svegliato", "mi sono svegliato", "ho svegliato"], answer: "mi sono svegliato" },
            { id: "it-uq-a2-3-2", level: "A2", prompt: "Complete: 'Lei ___ elegantemente.' (vestirsi — passato prossimo)", options: ["si vestiva", "ha vestito", "si è vestita", "si vestirà"], answer: "si è vestita" },
            { id: "it-uq-a2-3-3", level: "A2", prompt: "How do you say 'We enjoyed ourselves at the party'?", options: ["Ci siamo divertiti alla festa.", "Abbiamo divertito alla festa.", "Si siamo divertiti alla festa.", "Ci divertivamo alla festa."], answer: "Ci siamo divertiti alla festa." },
            { id: "it-uq-a2-3-4", level: "A2", prompt: "Complete (reciprocal): 'Marco e Sara ___ davanti al bar.' (incontrarsi)", options: ["hanno incontrato", "si incontravano", "si sono incontrati", "ci siamo incontrati"], answer: "si sono incontrati" },
            { id: "it-uq-a2-3-5", level: "A2", prompt: "In passato prossimo, reflexive verbs use which auxiliary?", options: ["Avere", "Fare", "Essere", "Stare"], answer: "Essere" }
        ]
    },
    {
        id: "it-a2-u4",
        level: "A2",
        order: 4,
        title: "The Simple Future",
        description: "Express future plans and predictions using the futuro semplice, including irregular stems.",
        grammarIds: ["it-g-a2-4"],
        vocabIds: ["it-v-a2-1", "it-v-a2-2", "it-v-a2-3"],
        verbIds: ["it-vb-a2-1"],
        testQuestions: [
            { id: "it-uq-a2-4-1", level: "A2", prompt: "Complete (futuro): 'Domani loro ___.' (partire)", options: ["partono", "partiranno", "sono partiti", "partivano"], answer: "partiranno" },
            { id: "it-uq-a2-4-2", level: "A2", prompt: "Complete: 'Io ___ a Roma la prossima settimana.' (andare — futuro)", options: ["vado", "sono andato", "andrò", "andrei"], answer: "andrò" },
            { id: "it-uq-a2-4-3", level: "A2", prompt: "What is the futuro semplice of 'essere' (noi)?", options: ["siamo", "eravamo", "saremo", "saremmo"], answer: "saremo" },
            { id: "it-uq-a2-4-4", level: "A2", prompt: "Complete: 'Quando ___, chiamami.' (arrivare — tu — futuro)", options: ["arrivi", "arriverai", "arrivavi", "sei arrivato"], answer: "arriverai" },
            { id: "it-uq-a2-4-5", level: "A2", prompt: "What is the futuro of 'volere' (io)?", options: ["voglio", "volevo", "vorrò", "vorrei"], answer: "vorrò" }
        ]
    },
    {
        id: "it-a2-u5",
        level: "A2",
        order: 5,
        title: "Modal Verbs in the Past",
        description: "Use dovere, potere, and volere in the passato prossimo. Learn when to use avere or essere, and how riuscire a works.",
        grammarIds: ["it-g-a2-5"],
        vocabIds: [],
        verbIds: ["it-vb-a2-4"],
        readingIds: ["it-r-a2-1"],
        testQuestions: [
            { id: "it-uq-a2-5-1", level: "A2", prompt: "How do you say 'I had to work all night'?", options: ["Dovevo lavorare tutta la notte.", "Ho dovuto lavorare tutta la notte.", "Devo lavorare tutta la notte.", "Avevo lavorato tutta la notte."], answer: "Ho dovuto lavorare tutta la notte." },
            { id: "it-uq-a2-5-2", level: "A2", prompt: "Complete: 'Non ___ venire alla festa.' (potere — io — passato prossimo)", options: ["potevo", "ho potuto", "sono potuto", "posso"], answer: "ho potuto" },
            { id: "it-uq-a2-5-3", level: "A2", prompt: "Which verb always uses essere in the passato prossimo?", options: ["dovere", "potere", "volere", "riuscire"], answer: "riuscire" },
            { id: "it-uq-a2-5-4", level: "A2", prompt: "Translate: 'She managed to book the table.'", options: ["Ha potuto prenotare il tavolo.", "È riuscita a prenotare il tavolo.", "Ha voluto prenotare il tavolo.", "Ha dovuto prenotare il tavolo."], answer: "È riuscita a prenotare il tavolo." },
            { id: "it-uq-a2-5-5", level: "A2", prompt: "Complete: '___ mangiare la pizza, ma non c'era più.' (volere — loro — passato prossimo)", options: ["Hanno voluto", "Volevano", "Sono voluti", "Volessero"], answer: "Hanno voluto" }
        ]
    },
    {
        id: "it-a2-u6",
        level: "A2",
        order: 6,
        title: "Comparatives, Opinions & Preferences",
        description: "Compare people and things using più/meno/tanto...quanto, express preferences with preferire, and give opinions.",
        grammarIds: ["it-g-a2-6"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-6-1", level: "A2", prompt: "How do you say 'Rome is bigger than Florence'?", options: ["Roma è molto grande.", "Roma è più grande di Firenze.", "Roma è grande come Firenze.", "Roma è la più grande."], answer: "Roma è più grande di Firenze." },
            { id: "it-uq-a2-6-2", level: "A2", prompt: "How do you say 'as... as' in Italian?", options: ["più ... di", "meno ... di", "tanto ... quanto", "molto ... che"], answer: "tanto ... quanto" },
            { id: "it-uq-a2-6-3", level: "A2", prompt: "What does 'secondo me' mean?", options: ["in my opinion", "at the moment", "according to the rules", "I'm second"], answer: "in my opinion" },
            { id: "it-uq-a2-6-4", level: "A2", prompt: "How do you say 'I prefer coffee to tea'?", options: ["Preferisco il caffè al tè.", "Mi piace il caffè più del tè.", "Voglio il caffè e il tè.", "Il caffè è migliore del tè."], answer: "Preferisco il caffè al tè." },
            { id: "it-uq-a2-6-5", level: "A2", prompt: "What is the superlative of 'buono'?", options: ["il più buono / il migliore", "il molto buono", "il buonissimo solo", "il bene"], answer: "il più buono / il migliore" }
        ]
    },
    {
        id: "it-a2-u7",
        level: "A2",
        order: 7,
        title: "Relative Clauses",
        description: "Link ideas about the same noun using che and chi. Connect clauses naturally in speech and writing.",
        grammarIds: ["it-g-a2-7"],
        vocabIds: [],
        verbIds: [],
        readingIds: ["it-r-a2-2"],
        testQuestions: [
            { id: "it-uq-a2-7-1", level: "A2", prompt: "Fill in the relative pronoun: 'Il libro ___ ho letto è bellissimo.'", options: ["chi", "che", "cui", "quale"], answer: "che" },
            { id: "it-uq-a2-7-2", level: "A2", prompt: "Translate: 'Those who study will pass the exam.'", options: ["Che studia passerà.", "Chi studia passerà l'esame.", "Quello che studia passerà.", "Chi studia hanno passato."], answer: "Chi studia passerà l'esame." },
            { id: "it-uq-a2-7-3", level: "A2", prompt: "Can 'che' be omitted in Italian relative clauses?", options: ["Yes, always", "Yes, when it's an object", "No, never", "Only in formal writing"], answer: "No, never" },
            { id: "it-uq-a2-7-4", level: "A2", prompt: "Complete: 'La ragazza ___ lavora qui è mia cugina.'", options: ["chi", "che", "cui", "quale"], answer: "che" },
            { id: "it-uq-a2-7-5", level: "A2", prompt: "When do you use 'chi' rather than 'che'?", options: ["Only with things", "Only with people meaning 'whoever/those who'", "Before all adjectives", "After 'non'"], answer: "Only with people meaning 'whoever/those who'" }
        ]
    },
    {
        id: "it-a2-u8",
        level: "A2",
        order: 8,
        title: "The Future of Probability",
        description: "Use the futuro semplice to make guesses about the present — 'must be', 'I wonder', 'probably'.",
        grammarIds: ["it-g-a2-8"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-8-1", level: "A2", prompt: "How do you say 'He must be at the office'?", options: ["È in ufficio.", "Sarà in ufficio.", "Era in ufficio.", "Andrebbe in ufficio."], answer: "Sarà in ufficio." },
            { id: "it-uq-a2-8-2", level: "A2", prompt: "Translate (probability): 'She's probably forty years old.'", options: ["Ha quarant'anni.", "Aveva quarant'anni.", "Avrà quarant'anni.", "Avrebbe quarant'anni."], answer: "Avrà quarant'anni." },
            { id: "it-uq-a2-8-3", level: "A2", prompt: "'Why isn't he answering? He's probably sleeping.' — Translate:", options: ["Dormiva.", "Dormirà.", "Starà dormendo.", "Ha dormito."], answer: "Starà dormendo." },
            { id: "it-uq-a2-8-4", level: "A2", prompt: "Translate: 'That restaurant is probably expensive.'", options: ["Quel ristorante era caro.", "Quel ristorante costerà molto.", "Quel ristorante costerebbe molto.", "Quel ristorante è caro."], answer: "Quel ristorante costerà molto." },
            { id: "it-uq-a2-8-5", level: "A2", prompt: "'Quanti anni avrà quel signore?' conveys:", options: ["A definite statement about his age", "A guess or wonder about his age", "A question about his future", "A past estimate of age"], answer: "A guess or wonder about his age" }
        ]
    },
    {
        id: "it-a2-u9",
        level: "A2",
        order: 9,
        title: "The Conditional — Wishes and Polite Requests",
        description: "Use the condizionale presente to express what you would do, make polite requests, and give suggestions. Essential for natural, courteous Italian.",
        grammarIds: ["it-g-a2-9"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-9-1", level: "A2", prompt: "How do you politely say 'I would like a coffee'?", options: ["Voglio un caffè.", "Volevo un caffè.", "Vorrei un caffè.", "Vorrò un caffè."], answer: "Vorrei un caffè." },
            { id: "it-uq-a2-9-2", level: "A2", prompt: "How do you say 'Could you open the window?' (polite)?", options: ["Apri la finestra!", "Vuoi aprire la finestra?", "Potresti aprire la finestra?", "Puoi aprire la finestra?"], answer: "Potresti aprire la finestra?" },
            { id: "it-uq-a2-9-3", level: "A2", prompt: "Complete (condizionale): 'Cosa ___ con un milione di euro?' (fare — tu)", options: ["farai", "facevi", "faresti", "faccia"], answer: "faresti" },
            { id: "it-uq-a2-9-4", level: "A2", prompt: "Translate: 'You should sleep more.'", options: ["Devi dormire di più.", "Dovevi dormire di più.", "Dovresti dormire di più.", "Dormi di più."], answer: "Dovresti dormire di più." },
            { id: "it-uq-a2-9-5", level: "A2", prompt: "The condizionale is formed with the same stem as:", options: ["the imperfetto", "the presente", "the futuro semplice", "the passato prossimo"], answer: "the futuro semplice" }
        ]
    },
    {
        id: "it-a2-u10",
        level: "A2",
        order: 10,
        title: "Passato Prossimo vs Imperfetto in Context",
        description: "Master the contrast between the two past tenses: set the scene with imperfetto, then tell what happened with passato prossimo.",
        grammarIds: ["it-g-a2-10"],
        vocabIds: [],
        verbIds: ["it-vb-a2-1", "it-vb-a2-2"],
        readingIds: ["it-r-a2-3"],
        listeningIds: ["it-l-a2-4"],
        testQuestions: [
            { id: "it-uq-a2-10-1", level: "A2", prompt: "Which tense fits? 'Mentre ___ (leggere), il telefono ___ (suonare).'", options: ["leggevo / ha suonato", "ho letto / suonava", "ho letto / ha suonato", "leggevo / suonava"], answer: "leggevo / ha suonato" },
            { id: "it-uq-a2-10-2", level: "A2", prompt: "Complete: 'D'improvviso ___ forte.' (piovere)", options: ["pioveva", "ha piovuto", "piove", "pioverà"], answer: "ha piovuto" },
            { id: "it-uq-a2-10-3", level: "A2", prompt: "Complete: 'Di solito ___ il caffè al bar, ma ieri ___ a casa.' (prendere / restare)", options: ["prendevo / sono restato", "ho preso / restavo", "prendevo / restavo", "ho preso / sono restato"], answer: "prendevo / sono restato" },
            { id: "it-uq-a2-10-4", level: "A2", prompt: "Which word signals imperfetto (habit)?", options: ["d'improvviso", "di solito", "poi", "alla fine"], answer: "di solito" },
            { id: "it-uq-a2-10-5", level: "A2", prompt: "Which word signals passato prossimo (sudden event)?", options: ["sempre", "da bambino", "d'improvviso", "ogni giorno"], answer: "d'improvviso" }
        ]
    },
    {
        id: "it-a2-u11",
        level: "A2",
        order: 11,
        title: "Real Conditionals — If … Then",
        description: "Construct realistic 'if-then' sentences using se + present + future. Handle everyday conditions from weather plans to personal commitments.",
        grammarIds: ["it-g-a2-11"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-11-1", level: "A2", prompt: "Complete: 'Se ___ (piovere), prenderò l'ombrello.'", options: ["pioverà", "piova", "piove", "pioveva"], answer: "piove" },
            { id: "it-uq-a2-11-2", level: "A2", prompt: "Complete: 'Se studi, ___ l'esame.' (passare — futuro)", options: ["passavi", "passi", "passerai", "passeresti"], answer: "passerai" },
            { id: "it-uq-a2-11-3", level: "A2", prompt: "In Italian real conditionals, which tense CANNOT follow 'se'?", options: ["Presente", "Imperfetto", "Futuro", "Passato prossimo"], answer: "Futuro" },
            { id: "it-uq-a2-11-4", level: "A2", prompt: "Translate: 'If you arrive late, I will wait for you.'", options: ["Se arriverai in ritardo, ti aspetto.", "Se arrivi in ritardo, ti aspetterò.", "Se arrivavi in ritardo, ti aspetterei.", "Se sei arrivato in ritardo, ti aspetterò."], answer: "Se arrivi in ritardo, ti aspetterò." },
            { id: "it-uq-a2-11-5", level: "A2", prompt: "Can the 'se' clause come second in the sentence?", options: ["No, it must always come first", "Yes, both orders are correct", "Only in formal writing", "Only in questions"], answer: "Yes, both orders are correct" }
        ]
    },
    {
        id: "it-a2-u12",
        level: "A2",
        order: 12,
        title: "Formal Italian — The Lei Imperative",
        description: "Switch to formal register using the Lei imperative. Essential for shops, offices, hotels, and professional contexts.",
        grammarIds: ["it-g-a2-12"],
        vocabIds: [],
        verbIds: [],
        listeningIds: ["it-l-a2-2"],
        testQuestions: [
            { id: "it-uq-a2-12-1", level: "A2", prompt: "What is the formal Lei imperative of 'parlare'?", options: ["parla!", "parlate!", "parli!", "parlino!"], answer: "parli!" },
            { id: "it-uq-a2-12-2", level: "A2", prompt: "Complete (formal): 'Si ___, prego.' (accomodarsi)", options: ["accomoda", "accomodino", "accomodi", "accomodati"], answer: "accomodi" },
            { id: "it-uq-a2-12-3", level: "A2", prompt: "What is the formal Lei imperative of 'fare'?", options: ["fa'!", "fate!", "fai!", "faccia!"], answer: "faccia!" },
            { id: "it-uq-a2-12-4", level: "A2", prompt: "How do you say 'Don't worry' formally?", options: ["Non ti preoccupare.", "Non preoccuparti.", "Non si preoccupi.", "Non preoccupate."], answer: "Non si preoccupi." },
            { id: "it-uq-a2-12-5", level: "A2", prompt: "The formal Lei imperative of -are verbs ends in:", options: ["-a", "-i", "-e", "-o"], answer: "-i" }
        ]
    },
    {
        id: "it-a2-u13",
        level: "A2",
        order: 13,
        title: "Direct Object Pronouns",
        description: "Replace direct objects with lo, la, li, le, mi, ti, ci, vi. Learn position rules and past participle agreement with avere.",
        grammarIds: ["it-g-a2-13"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-13-1", level: "A2", prompt: "Replace the object: 'Conosco Marco.' → 'Sì, ___ conosco.'", options: ["la", "li", "lo", "gli"], answer: "lo" },
            { id: "it-uq-a2-13-2", level: "A2", prompt: "Complete: 'Hai visto Maria? — Non ___ ho vista.'", options: ["lo", "la", "l'", "le"], answer: "l'" },
            { id: "it-uq-a2-13-3", level: "A2", prompt: "Replace: 'Compro i giornali ogni mattina.' → '___ compro ogni mattina.'", options: ["lo", "la", "le", "li"], answer: "li" },
            { id: "it-uq-a2-13-4", level: "A2", prompt: "In passato prossimo with avere, the participle agrees with:", options: ["the subject", "the auxiliary", "the direct object pronoun", "nothing"], answer: "the direct object pronoun" },
            { id: "it-uq-a2-13-5", level: "A2", prompt: "Complete: 'Le scarpe? ___ ho comprate ieri.'", options: ["Lo", "Li", "Le", "La"], answer: "Le" }
        ]
    },
    {
        id: "it-a2-u14",
        level: "A2",
        order: 14,
        title: "Indirect Object Pronouns",
        description: "Replace indirect objects (to/for someone) with mi, ti, gli, le, ci, vi, gli. Use them with verbs like dare, mandare, spiegare, piacere.",
        grammarIds: ["it-g-a2-14"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-14-1", level: "A2", prompt: "Translate: 'I sent you a message.'", options: ["Ti ho mandato un messaggio.", "Lo ho mandato un messaggio.", "Mi hai mandato un messaggio.", "Gli ho mandato un messaggio."], answer: "Ti ho mandato un messaggio." },
            { id: "it-uq-a2-14-2", level: "A2", prompt: "What does 'Gli piace il calcio' mean?", options: ["She likes football.", "He likes football.", "They play football.", "I like football."], answer: "He likes football." },
            { id: "it-uq-a2-14-3", level: "A2", prompt: "Complete: 'Ho dato il libro a Maria.' → '___ ho dato il libro.'", options: ["Lo", "La", "Le", "Gli"], answer: "Le" },
            { id: "it-uq-a2-14-4", level: "A2", prompt: "Which pronoun means 'to us'?", options: ["vi", "ci", "si", "li"], answer: "ci" },
            { id: "it-uq-a2-14-5", level: "A2", prompt: "Where does the indirect object pronoun go with a conjugated verb?", options: ["after the verb", "before the verb", "at end of sentence", "attached to the subject"], answer: "before the verb" }
        ]
    },
    {
        id: "it-a2-u15",
        level: "A2",
        order: 15,
        title: "Double Object Pronouns",
        description: "Combine direct and indirect pronouns (me lo, te la, glielo, ce li). Simplify complex sentences by replacing both objects at once.",
        grammarIds: ["it-g-a2-15"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-15-1", level: "A2", prompt: "Replace: 'Ti passo il sale.' → '___ passo subito.'", options: ["Lo ti", "Me lo", "Te lo", "Gli lo"], answer: "Te lo" },
            { id: "it-uq-a2-15-2", level: "A2", prompt: "How does 'mi' change when combined with a direct pronoun?", options: ["stays mi", "becomes me", "becomes mo", "becomes gli"], answer: "becomes me" },
            { id: "it-uq-a2-15-3", level: "A2", prompt: "What does 'glielo' replace?", options: ["it to me", "it to you", "it to him/her/them", "them to us"], answer: "it to him/her/them" },
            { id: "it-uq-a2-15-4", level: "A2", prompt: "Complete: 'Ho dato il libro a Maria.' → '___ ho dato ieri.'", options: ["Me lo", "Glielo", "Te lo", "Ce lo"], answer: "Glielo" },
            { id: "it-uq-a2-15-5", level: "A2", prompt: "In passato prossimo, the past participle agrees with:", options: ["the indirect pronoun", "the direct pronoun", "the subject", "neither pronoun"], answer: "the direct pronoun" }
        ]
    },
    {
        id: "it-a2-u16",
        level: "A2",
        order: 16,
        title: "Ci and Ne",
        description: "Use ci to replace locations ('there') and with key verbs (pensarci, crederci). Use ne to replace quantities and nouns after di.",
        grammarIds: ["it-g-a2-16"],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-16-1", level: "A2", prompt: "Replace: 'Sono andato a Venezia.' → 'Ci ___ ieri.'", options: ["sono andato", "ho andato", "vado", "andrò"], answer: "sono andato" },
            { id: "it-uq-a2-16-2", level: "A2", prompt: "'Vuoi del vino? — Sì, ne prendo ___.'", options: ["molto poco", "un po'", "qualcuno", "ogni"], answer: "un po'" },
            { id: "it-uq-a2-16-3", level: "A2", prompt: "What does 'ci penso spesso' mean?", options: ["I go there often.", "I think about it often.", "I care about you.", "I believe in that."], answer: "I think about it often." },
            { id: "it-uq-a2-16-4", level: "A2", prompt: "Complete: 'Quanti fratelli hai? — ___ ho due.'", options: ["ci", "gli", "ne", "li"], answer: "ne" },
            { id: "it-uq-a2-16-5", level: "A2", prompt: "What does 'non me ne importa' mean?", options: ["I don't have any.", "I don't care about it.", "I can't go there.", "I don't believe it."], answer: "I don't care about it." }
        ]
    },
    {
        id: "it-a2-u17",
        level: "A2",
        order: 17,
        title: "Adverbs — Describing How",
        description: "Build adverbs from adjectives using -mente. Learn high-frequency adverbs and their position in the sentence.",
        grammarIds: [],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-17-1", level: "A2", prompt: "What is the adverb from 'lento'?", options: ["lentamente", "lentamento", "lentamenta", "lentare"], answer: "lentamente" },
            { id: "it-uq-a2-17-2", level: "A2", prompt: "What is the adverb from 'regolare'?", options: ["regularmente", "regolaramente", "regolarmente", "regolarmento"], answer: "regolarmente" },
            { id: "it-uq-a2-17-3", level: "A2", prompt: "Translate: 'Fortunately it wasn't serious.'", options: ["Fortunato non era grave.", "Fortunatamente non era grave.", "Per fortuna non è grave.", "Fortunata, non era grave."], answer: "Fortunatamente non era grave." },
            { id: "it-uq-a2-17-4", level: "A2", prompt: "Adverbs in Italian are:", options: ["variable (change for gender)", "invariable (never change)", "always placed before nouns", "always placed at start"], answer: "invariable (never change)" },
            { id: "it-uq-a2-17-5", level: "A2", prompt: "Which adjective loses its final -e before -mente?", options: ["bello", "lento", "facile", "rapido"], answer: "facile" }
        ]
    },
    {
        id: "it-a2-u18",
        level: "A2",
        order: 18,
        title: "Linking Ideas — Discourse Connectors",
        description: "Connect sentences fluently using quindi, però, anche se, invece, anzi, cioè, and insomma. Move beyond basic Italian to natural, flowing speech.",
        grammarIds: [],
        vocabIds: [],
        verbIds: [],
        readingIds: ["it-r-a2-4"],
        testQuestions: [
            { id: "it-uq-a2-18-1", level: "A2", prompt: "Translate: 'I was tired, so I went to bed early.'", options: ["Ero stanco, però sono andato a letto presto.", "Ero stanco, quindi sono andato a letto presto.", "Ero stanco, invece sono andato a letto presto.", "Ero stanco, anzi sono andato a letto presto."], answer: "Ero stanco, quindi sono andato a letto presto." },
            { id: "it-uq-a2-18-2", level: "A2", prompt: "What does 'anzi' mean?", options: ["however", "so", "on the contrary / in fact", "even if"], answer: "on the contrary / in fact" },
            { id: "it-uq-a2-18-3", level: "A2", prompt: "Complete: '___ piove, voglio uscire lo stesso.'", options: ["Però", "Quindi", "Anche se", "Invece"], answer: "Anche se" },
            { id: "it-uq-a2-18-4", level: "A2", prompt: "What does 'insomma' mean?", options: ["furthermore", "in short / basically", "on the other hand", "even though"], answer: "in short / basically" },
            { id: "it-uq-a2-18-5", level: "A2", prompt: "Complete: 'Lui studia il francese; io ___ studio il tedesco.'", options: ["anzi", "invece", "quindi", "cioè"], answer: "invece" }
        ]
    },
    {
        id: "it-a2-u19",
        level: "A2",
        order: 19,
        title: "Verbs with Prepositions",
        description: "Learn which verbs take a before an infinitive and which take di. Master essential structures: avere voglia di, riuscire a, cercare di, and more.",
        grammarIds: [],
        vocabIds: [],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-19-1", level: "A2", prompt: "Complete: 'Ho ___ comprare il latte.' (dimenticarsi)", options: ["dimenticato a", "dimenticato di", "dimenticato per", "dimenticato da"], answer: "dimenticato di" },
            { id: "it-uq-a2-19-2", level: "A2", prompt: "Complete: 'Ho imparato ___ sciare l'anno scorso.'", options: ["di", "a", "per", "da"], answer: "a" },
            { id: "it-uq-a2-19-3", level: "A2", prompt: "Translate: 'I feel like eating something sweet.'", options: ["Cerco di mangiare qualcosa di dolce.", "Ho bisogno di mangiare qualcosa di dolce.", "Ho voglia di mangiare qualcosa di dolce.", "Provo a mangiare qualcosa di dolce."], answer: "Ho voglia di mangiare qualcosa di dolce." },
            { id: "it-uq-a2-19-4", level: "A2", prompt: "Which verb uses 'di' before an infinitive?", options: ["cominciare", "imparare", "cercare", "andare"], answer: "cercare" },
            { id: "it-uq-a2-19-5", level: "A2", prompt: "Translate: 'Are you thinking of coming to the party?'", options: ["Stai venendo alla festa?", "Pensi di venire alla festa?", "Cerchi di venire alla festa?", "Vuoi venire alla festa?"], answer: "Pensi di venire alla festa?" }
        ]
    },
    {
        id: "it-a2-u20",
        level: "A2",
        order: 20,
        title: "Actions in Progress — Stare + Gerundio",
        description: "Describe ongoing actions using stare + gerundio. Use the present progressive for right now and the past progressive for what was happening.",
        grammarIds: [],
        vocabIds: [],
        verbIds: [],
        cultureIds: ["it-c-a2-1", "it-c-a2-2", "it-c-a2-3"],
        listeningIds: ["it-l-a2-3"],
        testQuestions: [
            { id: "it-uq-a2-20-1", level: "A2", prompt: "Translate: 'What are you doing? — I'm studying.'", options: ["Che cosa fai? — Studio.", "Cosa stai facendo? — Sto studiando.", "Che cosa hai fatto? — Ho studiato.", "Cosa facevi? — Studiavo."], answer: "Cosa stai facendo? — Sto studiando." },
            { id: "it-uq-a2-20-2", level: "A2", prompt: "What is the gerundio of 'mangiare'?", options: ["mangiando", "mangiante", "mangiato", "mangiare"], answer: "mangiando" },
            { id: "it-uq-a2-20-3", level: "A2", prompt: "Complete: 'Stava ___ quando l'ho chiamato.' (mangiare)", options: ["mangiato", "mangia", "mangiando", "mangiava"], answer: "mangiando" },
            { id: "it-uq-a2-20-4", level: "A2", prompt: "What is the gerundio of 'fare'?", options: ["facendo", "faccendo", "fatto", "fare"], answer: "facendo" },
            { id: "it-uq-a2-20-5", level: "A2", prompt: "Translate: 'Is it still raining?'", options: ["Pioveva ancora?", "Ha piovuto ancora?", "Sta piovendo ancora?", "Pioverà ancora?"], answer: "Sta piovendo ancora?" }
        ]
    },
]
