import { LessonUnit } from "../../../types"

// Italian A2 — Functional/communicative redesign
// 16 units in 5 blocks, each block ending with a hard-gated speaking checkpoint.
//
// Block 1 — "Cosa è successo?" (U1–U3 + CP1): Past narration
// Block 2 — "Come si confronta?" (U4–U6 + CP2): Comparatives, relatives, negation
// Block 3 — "Di chi stiamo parlando?" (U7–U9 + CP3): Pronouns system
// Block 4 — "Cosa succederà?" (U10–U12 + CP4): Future, conditional, se clauses
// Block 5 — "La vita in italiano" (U13–U16 + CP5 + CP6): Integration

export const a2Units: LessonUnit[] = [
    // ─────────────────────────────────────────────────────────────────────
    // BLOCK 1 — "Cosa è successo?" (What happened?)
    // ─────────────────────────────────────────────────────────────────────
    {
        id: "it-a2-u1",
        level: "A2",
        order: 1,
        title: "Cosa hai fatto?",
        description: "Narrate past events accurately — master irregular past participles and reflexives",
        grammarIds: ["it-g-a2-1", "it-g-a2-2"],
        vocabIds: ["it-v-a2-1", "it-v-a2-2", "it-v-a2-3", "it-v-a2-4", "it-v-a2-5", "it-v-a2-6", "it-v-a2-7"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-1-1", level: "A2", prompt: "Which past participle is correct? 'Ho ___ la verità.' (dire)", options: ["dito", "detto", "dettato", "dicuto"], answer: "detto" },
            { id: "it-uq-a2-1-2", level: "A2", prompt: "Choose the correct form: 'Siamo ___ a casa ieri sera.' (rimanere)", options: ["rimasto", "rimasti", "rimanuto", "rimanuti"], answer: "rimasti" },
            { id: "it-uq-a2-1-3", level: "A2", prompt: "Which sentence uses the correct auxiliary?", options: ["Ho andato al mercato.", "Sono andato al mercato.", "Ho venuto a trovarti.", "Sono avuto fame."], answer: "Sono andato al mercato." },
            { id: "it-uq-a2-1-4", level: "A2", prompt: "Complete: 'Mi ___ alzato/a tardi stamattina.' (alzarsi)", options: ["ho", "sono", "sei", "si è"], answer: "sono" },
            { id: "it-uq-a2-1-5", level: "A2", prompt: "How do you ask 'How did it go?' in Italian?", options: ["Come stai andato?", "Com'è andata?", "Come sei andata?", "Com'hai fatto?"], answer: "Com'è andata?" },
        ],
    },
    {
        id: "it-a2-u2",
        level: "A2",
        order: 2,
        title: "Com'era una volta",
        description: "Describe how things were, habitual past actions, and background scenes",
        grammarIds: ["it-g-a2-3"],
        vocabIds: ["it-v-a2-8", "it-v-a2-9", "it-v-a2-10", "it-v-a2-11", "it-v-a2-12", "it-v-a2-13", "it-v-a2-14"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-2-1", level: "A2", prompt: "Complete: 'Da bambino, ___ in bici ogni giorno.' (andare — imperfetto)", options: ["andavo", "sono andato", "ho andato", "andai"], answer: "andavo" },
            { id: "it-uq-a2-2-2", level: "A2", prompt: "What is the imperfetto of 'fare' (io)?", options: ["facevo", "fazevo", "favo", "facivo"], answer: "facevo" },
            { id: "it-uq-a2-2-3", level: "A2", prompt: "What is the imperfetto of 'bere' (noi)?", options: ["bevevamo", "bevevamo", "bevamo", "birevamo"], answer: "bevevamo" },
            { id: "it-uq-a2-2-4", level: "A2", prompt: "Which sentence uses the imperfetto correctly for a habitual action?", options: ["Ogni domenica ho mangiato con la nonna.", "Ogni domenica mangiavo con la nonna.", "Ogni domenica mangiai con la nonna.", "Ogni domenica mangio con la nonna."], answer: "Ogni domenica mangiavo con la nonna." },
            { id: "it-uq-a2-2-5", level: "A2", prompt: "What is the imperfetto of 'essere' (loro)?", options: ["stavano", "erano", "sievano", "eravano"], answer: "erano" },
        ],
    },
    {
        id: "it-a2-u3",
        level: "A2",
        order: 3,
        title: "Racconta la storia",
        description: "Tell stories naturally — the passato prossimo vs imperfetto contrast and stavo + gerundio",
        grammarIds: ["it-g-a2-4"],
        vocabIds: ["it-v-a2-5", "it-v-a2-6", "it-v-a2-7", "it-v-a2-8", "it-v-a2-9", "it-v-a2-10"],
        verbIds: [],
        checkpointId: "it-cp-a2-1",
        testQuestions: [
            { id: "it-uq-a2-3-1", level: "A2", prompt: "Choose the correct combination: 'Dormivo quando il telefono ___.'", options: ["squillava", "ha squillato", "squillò", "squillerà"], answer: "ha squillato" },
            { id: "it-uq-a2-3-2", level: "A2", prompt: "Which sentence uses 'stavo + gerundio' correctly?", options: ["Stavo mangiato la pizza.", "Stavo mangiando la pizza.", "Stavo mangiare la pizza.", "Stavo a mangiare la pizza."], answer: "Stavo mangiando la pizza." },
            { id: "it-uq-a2-3-3", level: "A2", prompt: "The gerundio of 'fare' is:", options: ["fando", "facendo", "fare", "fatto"], answer: "facendo" },
            { id: "it-uq-a2-3-4", level: "A2", prompt: "Which word signals a completed past event (use passato prossimo)?", options: ["spesso", "di solito", "all'improvviso", "ogni sera"], answer: "all'improvviso" },
            { id: "it-uq-a2-3-5", level: "A2", prompt: "Complete: 'Era tardi e ___ freddo quando siamo usciti.' (fare — imperfetto)", options: ["ha fatto", "faceva", "fa", "farà"], answer: "faceva" },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────
    // BLOCK 2 — "Come si confronta?" (How does it compare?)
    // ─────────────────────────────────────────────────────────────────────
    {
        id: "it-a2-u4",
        level: "A2",
        order: 4,
        title: "Meglio, peggio, il migliore",
        description: "Compare people, places, and experiences — including irregular comparatives",
        grammarIds: ["it-g-a2-5"],
        vocabIds: ["it-v-a2-15", "it-v-a2-16", "it-v-a2-17", "it-v-a2-18", "it-v-a2-19", "it-v-a2-20", "it-v-a2-21"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-4-1", level: "A2", prompt: "Complete: 'Roma è più grande ___ Milano.'", options: ["che", "di", "a", "da"], answer: "di" },
            { id: "it-uq-a2-4-2", level: "A2", prompt: "Complete: 'È più facile capire ___ parlare.'", options: ["di", "a", "da", "che"], answer: "che" },
            { id: "it-uq-a2-4-3", level: "A2", prompt: "Which is the correct comparative of 'buono' (for quality evaluation)?", options: ["più buono", "migliore", "beniore", "megliore"], answer: "migliore" },
            { id: "it-uq-a2-4-4", level: "A2", prompt: "Choose the correct form: 'Parla ___ di me.' (well/better — adverb)", options: ["migliore", "più bene", "meglio", "ottimo"], answer: "meglio" },
            { id: "it-uq-a2-4-5", level: "A2", prompt: "How do you say 'extremely tired' using -issimo?", options: ["stanchissimo", "più stanco", "stanchissimamente", "tantissimo stanco"], answer: "stanchissimo" },
        ],
    },
    {
        id: "it-a2-u5",
        level: "A2",
        order: 5,
        title: "Dimmi di più",
        description: "Add layers of description with relative pronouns — che, cui, dove, quello che",
        grammarIds: ["it-g-a2-6"],
        vocabIds: ["it-v-a2-22", "it-v-a2-23", "it-v-a2-15", "it-v-a2-16", "it-v-a2-17", "it-v-a2-18"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-5-1", level: "A2", prompt: "Complete: 'Ho un amico ___ parla giapponese.'", options: ["cui", "che", "dove", "chi"], answer: "che" },
            { id: "it-uq-a2-5-2", level: "A2", prompt: "Complete: 'La persona ___ ho scritto non ha risposto.' (to whom)", options: ["che", "dove", "a cui", "di cui"], answer: "a cui" },
            { id: "it-uq-a2-5-3", level: "A2", prompt: "Complete: 'È il bar ___ lavoro ogni mattina.'", options: ["che", "cui", "dove", "chi"], answer: "dove" },
            { id: "it-uq-a2-5-4", level: "A2", prompt: "Complete: '___ mi piace di questa città è l'atmosfera.'", options: ["Chi", "Quello che", "Quale", "Ciò"], answer: "Quello che" },
            { id: "it-uq-a2-5-5", level: "A2", prompt: "Complete: 'Il motivo ___ sono partito è semplice.'", options: ["che", "cui", "per cui", "dove"], answer: "per cui" },
        ],
    },
    {
        id: "it-a2-u6",
        level: "A2",
        order: 6,
        title: "Niente più, nessuno, soltanto",
        description: "Express absence, change, and restriction with the full Italian negation toolkit",
        grammarIds: ["it-g-a2-7"],
        vocabIds: ["it-v-a2-24", "it-v-a2-25", "it-v-a2-26", "it-v-a2-61", "it-v-a2-64"],
        verbIds: [],
        checkpointId: "it-cp-a2-2",
        testQuestions: [
            { id: "it-uq-a2-6-1", level: "A2", prompt: "Complete: 'Non ___ più a Roma da quando si è trasferito.'", options: ["abita", "è abitato", "abitava", "abiti"], answer: "abita" },
            { id: "it-uq-a2-6-2", level: "A2", prompt: "In the passato prossimo, where does 'più' go in 'Non ho ___ mangiato lì'?", options: ["Non ho mangiato più lì.", "Non ho più mangiato lì.", "Non più ho mangiato lì.", "Non ho mangiato lì più."], answer: "Non ho più mangiato lì." },
            { id: "it-uq-a2-6-3", level: "A2", prompt: "In the passato prossimo, where does 'niente' go?", options: ["Non ho niente capito.", "Non niente ho capito.", "Non ho capito niente.", "Niente ho capito."], answer: "Non ho capito niente." },
            { id: "it-uq-a2-6-4", level: "A2", prompt: "What does 'Non mangio che insalata' mean?", options: ["I don't eat salad.", "I eat only salad.", "I never eat salad.", "I don't eat anything except salad (implied: never)."], answer: "I eat only salad." },
            { id: "it-uq-a2-6-5", level: "A2", prompt: "How do you say 'Not even I knew' in Italian?", options: ["Non neanche io sapevo.", "Nemmeno io lo sapevo.", "Anche io non sapevo.", "Neanche non sapevo."], answer: "Nemmeno io lo sapevo." },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────
    // BLOCK 3 — "Di chi stiamo parlando?" (Who are we talking about?)
    // ─────────────────────────────────────────────────────────────────────
    {
        id: "it-a2-u7",
        level: "A2",
        order: 7,
        title: "Smettila di ripeterti (parte 1)",
        description: "Replace direct objects with pronouns — lo, la, li, le and past participle agreement",
        grammarIds: ["it-g-a2-8"],
        vocabIds: ["it-v-a2-27", "it-v-a2-28", "it-v-a2-29", "it-v-a2-30"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-7-1", level: "A2", prompt: "Replace 'il caffè' with a direct object pronoun: 'Prendo ___ caffè → ___ prendo.'", options: ["lo", "la", "li", "le"], answer: "lo" },
            { id: "it-uq-a2-7-2", level: "A2", prompt: "Replace 'le chiavi': 'Ho trovato le chiavi → ___ ho trovate.'", options: ["Lo", "La", "Le", "Li"], answer: "Le" },
            { id: "it-uq-a2-7-3", level: "A2", prompt: "Choose the correct sentence with a direct pronoun and passato prossimo:", options: ["L'ho visto il film.", "Lo ho visto.", "L'ho visto.", "Ho lo visto."], answer: "L'ho visto." },
            { id: "it-uq-a2-7-4", level: "A2", prompt: "Complete with the correct participle: 'La pizza? L'ho ordinat___.'", options: ["o", "a", "i", "e"], answer: "a" },
            { id: "it-uq-a2-7-5", level: "A2", prompt: "How do you say 'I want to watch it (m.)' with the pronoun attached to the infinitive?", options: ["Lo voglio guardare.", "Voglio guardarlo.", "Voglio lo guardare.", "Guardarlo voglio."], answer: "Voglio guardarlo." },
        ],
    },
    {
        id: "it-a2-u8",
        level: "A2",
        order: 8,
        title: "Smettila di ripeterti (parte 2)",
        description: "Indirect pronouns, ci locativo, ne, and combined pronouns",
        grammarIds: ["it-g-a2-9"],
        vocabIds: ["it-v-a2-27", "it-v-a2-30", "it-v-a2-31", "it-v-a2-32"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-8-1", level: "A2", prompt: "Replace 'a Marco': 'Ho detto a Marco la verità → ___ ho detto la verità.'", options: ["Lo", "Gli", "Le", "Li"], answer: "Gli" },
            { id: "it-uq-a2-8-2", level: "A2", prompt: "Replace 'in centro': 'Vai in centro? → ___ vai?'", options: ["Lo", "Ne", "Ci", "Si"], answer: "Ci" },
            { id: "it-uq-a2-8-3", level: "A2", prompt: "Replace 'del vino' (partitive): 'Vuoi del vino? → ___ vuoi?'", options: ["Lo", "Ne", "Ci", "Gli"], answer: "Ne" },
            { id: "it-uq-a2-8-4", level: "A2", prompt: "Complete the combined pronoun: 'Mi dai il numero? → ___ dai?'", options: ["Me ne", "Me lo", "Glielo", "Te lo"], answer: "Me lo" },
            { id: "it-uq-a2-8-5", level: "A2", prompt: "How do you say 'He/she explained it to her (gli + la situazione)'?", options: ["Gliela spiego.", "Gli la spiego.", "Le lo spiego.", "Gliela spiega."], answer: "Gliela spiego." },
        ],
    },
    {
        id: "it-a2-u9",
        level: "A2",
        order: 9,
        title: "Sapere, conoscere e i verbi che cambiano tutto",
        description: "Sapere/conoscere in past tenses plus tenere, rimanere, and scegliere families",
        grammarIds: ["it-g-a2-10"],
        vocabIds: ["it-v-a2-33", "it-v-a2-34", "it-v-a2-35", "it-v-a2-36"],
        verbIds: [],
        checkpointId: "it-cp-a2-3",
        testQuestions: [
            { id: "it-uq-a2-9-1", level: "A2", prompt: "'Ho saputo che ti sei sposata' means:", options: ["I knew you got married.", "I found out you got married.", "I learned that you married.", "I heard about your wedding plans."], answer: "I found out you got married." },
            { id: "it-uq-a2-9-2", level: "A2", prompt: "'Ho conosciuto tuo fratello alla festa' means:", options: ["I knew your brother at the party.", "I met your brother at the party for the first time.", "I recognised your brother at the party.", "I already knew your brother."], answer: "I met your brother at the party for the first time." },
            { id: "it-uq-a2-9-3", level: "A2", prompt: "What is the 1st person singular (io) of 'tenere'?", options: ["teno", "tiene", "tengo", "tenevo"], answer: "tengo" },
            { id: "it-uq-a2-9-4", level: "A2", prompt: "What is the 1st person singular (io) of 'scegliere'?", options: ["scelgio", "scelgo", "sceglio", "scelgeo"], answer: "scelgo" },
            { id: "it-uq-a2-9-5", level: "A2", prompt: "What is the 1st person singular (io) of 'rimanere'?", options: ["rimano", "rimanio", "rimango", "rimango"], answer: "rimango" },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────
    // BLOCK 4 — "Cosa succederà?" (What will happen?)
    // ─────────────────────────────────────────────────────────────────────
    {
        id: "it-a2-u10",
        level: "A2",
        order: 10,
        title: "Cosa succederà?",
        description: "Talk about the future — futuro semplice, quando + future rule, epistemic use",
        grammarIds: ["it-g-a2-11"],
        vocabIds: ["it-v-a2-37", "it-v-a2-38", "it-v-a2-39"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-10-1", level: "A2", prompt: "What is the correct futuro semplice of 'parlare' (io)?", options: ["parlarò", "parlerò", "parlirò", "parlevo"], answer: "parlerò" },
            { id: "it-uq-a2-10-2", level: "A2", prompt: "What is the futuro of 'essere' (loro)?", options: ["saranno", "seranno", "stanno", "sono stati"], answer: "saranno" },
            { id: "it-uq-a2-10-3", level: "A2", prompt: "Complete: 'Quando ___ i soldi, comprerò una macchina.' (avere — futuro)", options: ["ho", "avrò", "avrei", "avevo"], answer: "avrò" },
            { id: "it-uq-a2-10-4", level: "A2", prompt: "'Saranno le tre' means:", options: ["It will be three o'clock.", "It must be about three o'clock (probably).", "They are at three.", "It was three o'clock."], answer: "It must be about three o'clock (probably)." },
            { id: "it-uq-a2-10-5", level: "A2", prompt: "Which is correct? 'Se ___ tempo, lo leggo.'", options: ["avrò", "avrei", "ho", "avevo"], answer: "ho" },
        ],
    },
    {
        id: "it-a2-u11",
        level: "A2",
        order: 11,
        title: "Cosa vorresti?",
        description: "Polite requests, wishes, and advice — the condizionale presente",
        grammarIds: ["it-g-a2-12"],
        vocabIds: ["it-v-a2-40", "it-v-a2-47", "it-v-a2-48"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-11-1", level: "A2", prompt: "In a restaurant, the polite way to say 'I want a coffee' is:", options: ["Voglio un caffè.", "Vorrei un caffè.", "Vorrò un caffè.", "Volevo un caffè."], answer: "Vorrei un caffè." },
            { id: "it-uq-a2-11-2", level: "A2", prompt: "What is the condizionale of 'potere' (tu)?", options: ["puoi", "potrai", "potresti", "potrò"], answer: "potresti" },
            { id: "it-uq-a2-11-3", level: "A2", prompt: "To give gentle advice: 'You should rest more' →", options: ["Devi riposare di più.", "Dovresti riposare di più.", "Riposa di più.", "Bisognava riposare."], answer: "Dovresti riposare di più." },
            { id: "it-uq-a2-11-4", level: "A2", prompt: "What is the condizionale of 'volere' (noi)?", options: ["vogliamo", "vorremo", "vorremmo", "volevamo"], answer: "vorremmo" },
            { id: "it-uq-a2-11-5", level: "A2", prompt: "Complete: 'Mi ___ vivere vicino al mare.' (piacere — condizionale)", options: ["piace", "piacerà", "piacerebbe", "piacevo"], answer: "piacerebbe" },
        ],
    },
    {
        id: "it-a2-u12",
        level: "A2",
        order: 12,
        title: "Se faccio questo, succederà quello",
        description: "Type 1 conditionals, stare per, and da + duration",
        grammarIds: ["it-g-a2-13"],
        vocabIds: ["it-v-a2-75", "it-v-a2-76", "it-v-a2-77", "it-v-a2-78"],
        verbIds: [],
        checkpointId: "it-cp-a2-4",
        testQuestions: [
            { id: "it-uq-a2-12-1", level: "A2", prompt: "Complete: 'Se ___ bello, andiamo al lago.' (fare)", options: ["farà", "fa", "faceva", "farà"], answer: "fa" },
            { id: "it-uq-a2-12-2", level: "A2", prompt: "Choose the correct type 1 conditional:", options: ["Se avrò tempo, lo farò.", "Se ho tempo, lo farò.", "Se avevo tempo, lo faccio.", "Se ho tempo, lo farei."], answer: "Se ho tempo, lo farò." },
            { id: "it-uq-a2-12-3", level: "A2", prompt: "'Studio italiano da due anni' means:", options: ["I studied Italian two years ago.", "I have been studying Italian for two years (and still am).", "I had been studying Italian for two years.", "I studied Italian for two years (now I've stopped)."], answer: "I have been studying Italian for two years (and still am)." },
            { id: "it-uq-a2-12-4", level: "A2", prompt: "Which is correct for an ongoing action?", options: ["Ho studiato italiano da due anni.", "Studio italiano da due anni.", "Studiavo italiano da due anni.", "Ho studiato italiano per due anni."], answer: "Studio italiano da due anni." },
            { id: "it-uq-a2-12-5", level: "A2", prompt: "'Stavo per chiamarti!' means:", options: ["I was calling you!", "I was just about to call you!", "I had called you!", "I will call you!"], answer: "I was just about to call you!" },
        ],
    },

    // ─────────────────────────────────────────────────────────────────────
    // BLOCK 5 — "La vita in italiano" (Life in Italian)
    // ─────────────────────────────────────────────────────────────────────
    {
        id: "it-a2-u13",
        level: "A2",
        order: 13,
        title: "Il corpo e la salute",
        description: "Describe symptoms, navigate a doctor's appointment, and understand medical instructions",
        grammarIds: ["it-g-a2-14"],
        vocabIds: ["it-v-a2-49", "it-v-a2-50", "it-v-a2-51", "it-v-a2-52", "it-v-a2-53", "it-v-a2-54", "it-v-a2-55"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-13-1", level: "A2", prompt: "How do you say 'My back hurts' in Italian?", options: ["Ho male alla schiena.", "Mi fa male la schiena.", "La mia schiena fa male.", "Ho la schiena malata."], answer: "Mi fa male la schiena." },
            { id: "it-uq-a2-13-2", level: "A2", prompt: "Complete: 'Mi ___ male i piedi.' (fare — correct form)", options: ["fa", "fanno", "faccio", "faranno"], answer: "fanno" },
            { id: "it-uq-a2-13-3", level: "A2", prompt: "'Ho mal di gola' means:", options: ["I have a stomachache.", "I have a sore throat.", "I have a headache.", "I have an earache."], answer: "I have a sore throat." },
            { id: "it-uq-a2-13-4", level: "A2", prompt: "What is the plural of 'il ginocchio'?", options: ["i ginocchi", "le ginocche", "le ginocchia", "i ginocchie"], answer: "le ginocchia" },
            { id: "it-uq-a2-13-5", level: "A2", prompt: "'Dovresti stare a casa' vs 'Devi stare a casa' — what's the difference?", options: ["They mean the same thing.", "'Dovresti' is a gentle suggestion; 'devi' is a direct instruction.", "'Devi' is more polite.", "'Dovresti' is stronger."], answer: "'Dovresti' is a gentle suggestion; 'devi' is a direct instruction." },
        ],
    },
    {
        id: "it-a2-u14",
        level: "A2",
        order: 14,
        title: "In viaggio",
        description: "Book accommodation, manage transport problems, and tell a travel story",
        grammarIds: ["it-g-a2-12", "it-g-a2-4"],
        vocabIds: ["it-v-a2-40", "it-v-a2-41", "it-v-a2-42", "it-v-a2-43", "it-v-a2-44", "it-v-a2-45", "it-v-a2-46", "it-v-a2-79"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-14-1", level: "A2", prompt: "The polite way to request a room is:", options: ["Voglio una camera doppia.", "Vorrei una camera doppia.", "Ho bisogno di una camera.", "Una camera doppia, per favore."], answer: "Vorrei una camera doppia." },
            { id: "it-uq-a2-14-2", level: "A2", prompt: "In Italy, regional trains (not high-speed) require you to:", options: ["Book a seat reservation.", "Convalidare (validate) the ticket before boarding.", "Pay on board.", "Show a passport."], answer: "Convalidare (validate) the ticket before boarding." },
            { id: "it-uq-a2-14-3", level: "A2", prompt: "'Il treno è soppresso' means:", options: ["The train is delayed.", "The train is cancelled.", "The train is full.", "The train is on time."], answer: "The train is cancelled." },
            { id: "it-uq-a2-14-4", level: "A2", prompt: "When telling a travel story, which tense sets the background scene?", options: ["Passato prossimo", "Futuro", "Imperfetto", "Condizionale"], answer: "Imperfetto" },
            { id: "it-uq-a2-14-5", level: "A2", prompt: "'Un agriturismo' is:", options: ["A luxury hotel", "A city apartment rental", "A rural guesthouse or farm stay", "A campsite"], answer: "A rural guesthouse or farm stay" },
        ],
    },
    {
        id: "it-a2-u15",
        level: "A2",
        order: 15,
        title: "Come mi sento, cosa penso",
        description: "Express nuanced emotions, share opinions, and agree or disagree politely",
        grammarIds: ["it-g-a2-15"],
        vocabIds: ["it-v-a2-56", "it-v-a2-57", "it-v-a2-58", "it-v-a2-59", "it-v-a2-60", "it-v-a2-69", "it-v-a2-70", "it-v-a2-71", "it-v-a2-72"],
        verbIds: [],
        checkpointId: "it-cp-a2-5",
        testQuestions: [
            { id: "it-uq-a2-15-1", level: "A2", prompt: "'Sono diventato/a nervoso/a' vs 'Sono nervoso/a' — what's the difference?", options: ["No difference.", "'Sono diventato/a nervoso/a' describes a change of state; 'sono nervoso/a' describes a static condition.", "'Diventato/a' is more formal.", "'Sono nervoso/a' is only used at A1."], answer: "'Sono diventato/a nervoso/a' describes a change of state; 'sono nervoso/a' describes a static condition." },
            { id: "it-uq-a2-15-2", level: "A2", prompt: "At A2 level, 'Penso che' is followed by:", options: ["the congiuntivo only", "the indicativo (normal present/past)", "the infinitive", "the futuro"], answer: "the indicativo (normal present/past)" },
            { id: "it-uq-a2-15-3", level: "A2", prompt: "How do you say 'I see it differently' in Italian?", options: ["Non sono d'accordo.", "La vedo diversamente.", "Ho torto.", "Dipende."], answer: "La vedo diversamente." },
            { id: "it-uq-a2-15-4", level: "A2", prompt: "'In parte hai ragione, ma...' is an example of:", options: ["Full agreement", "Partial agreement", "Full disagreement", "Changing the subject"], answer: "Partial agreement" },
            { id: "it-uq-a2-15-5", level: "A2", prompt: "Complete: 'È diventata molto ___  quando ha sentito la notizia.' (to express she became serious — adjective)", options: ["seriamente", "seria", "serio", "seriosa"], answer: "seria" },
        ],
    },
    {
        id: "it-a2-u16",
        level: "A2",
        order: 16,
        title: "Parla con sicurezza",
        description: "Connect ideas fluently — advanced connectors, discourse markers, and A2 synthesis",
        grammarIds: ["it-g-a2-16"],
        vocabIds: ["it-v-a2-61", "it-v-a2-62", "it-v-a2-63", "it-v-a2-64", "it-v-a2-65", "it-v-a2-66", "it-v-a2-67", "it-v-a2-68", "it-v-a2-73", "it-v-a2-74"],
        verbIds: [],
        checkpointId: "it-cp-a2-6",
        testQuestions: [
            { id: "it-uq-a2-16-1", level: "A2", prompt: "'Eppure' is best translated as:", options: ["because", "and yet / even so", "therefore", "despite"], answer: "and yet / even so" },
            { id: "it-uq-a2-16-2", level: "A2", prompt: "Choose the correct attribution: 'Ho trovato il posto ___ tua madre.' (thanks to — positive credit)", options: ["a causa di", "per colpa di", "grazie a", "nonostante"], answer: "grazie a" },
            { id: "it-uq-a2-16-3", level: "A2", prompt: "'Addirittura' adds a sense of:", options: ["cause", "contrast", "intensified surprise or extremity", "time"], answer: "intensified surprise or extremity" },
            { id: "it-uq-a2-16-4", level: "A2", prompt: "What does the spoken filler 'insomma' most often signal?", options: ["A question", "A summary, mild frustration, or vague agreement", "A strong assertion", "A formal transition"], answer: "A summary, mild frustration, or vague agreement" },
            { id: "it-uq-a2-16-5", level: "A2", prompt: "'Nonostante tutto, è stata una serata bellissima' means:", options: ["Because of everything, it was a beautiful evening.", "Despite everything, it was a beautiful evening.", "Everything considered, it wasn't a beautiful evening.", "Regardless of the evening, everything was beautiful."], answer: "Despite everything, it was a beautiful evening." },
        ],
    },
]
