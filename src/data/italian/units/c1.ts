import { LessonUnit } from "../../../types"

export const c1Units: LessonUnit[] = [
    {
        id: "it-c1-u1",
        level: "C1",
        order: 1,
        title: "Il Congiuntivo Trapassato",
        description: "Master the past perfect subjunctive for counterfactual regrets, Type-3 conditionals, and complex past subordinate clauses.",
        grammarIds: ["it-g-c1-1"],
        vocabIds: ["it-v-c1-001", "it-v-c1-003", "it-v-c1-053", "it-v-c1-057", "it-v-c1-058"],
        verbIds: ["it-vb-c1-1"],
        testQuestions: [
            { id: "it-c1-u1-q1", level: "C1", prompt: "Complete (congiuntivo trapassato): 'Magari ___ a casa invece di uscire!' (restare — io)", options: ["restavo", "sia rimasto", "fossi rimasto", "sarei rimasto"], answer: "fossi rimasto" },
            { id: "it-c1-u1-q2", level: "C1", prompt: "Complete (congiuntivo trapassato): 'Non credevo che lui ___ già la risposta.' (sapere)", options: ["sapeva", "abbia saputo", "avesse saputo", "avrebbe saputo"], answer: "avesse saputo" },
            { id: "it-c1-u1-q3", level: "C1", prompt: "How is the congiuntivo trapassato of 'andare' (io) formed?", options: ["avessi andato", "fossi andato", "sia andato", "sarei andato"], answer: "fossi andato" },
            { id: "it-c1-u1-q4", level: "C1", prompt: "Complete: 'Speravo che tu ___ il contratto prima di firmarlo.' (leggere)", options: ["leggessi", "avessi letto", "abbia letto", "leggeresti"], answer: "avessi letto" },
            { id: "it-c1-u1-q5", level: "C1", prompt: "After 'magari' expressing a past regret, which tense is used?", options: ["Congiuntivo presente", "Congiuntivo imperfetto", "Congiuntivo trapassato", "Condizionale passato"], answer: "Congiuntivo trapassato" },
            { id: "it-c1-u1-q6", level: "C1", prompt: "What does 'la metacognizione' mean?", options: ["Empathy", "Metacognition", "Self-efficacy", "Rationalisation"], answer: "Metacognition" }
        ]
    },
    {
        id: "it-c1-u2",
        level: "C1",
        order: 2,
        title: "Il Periodo Ipotetico di 3° tipo",
        description: "Form fully counterfactual past conditionals using the congiuntivo trapassato and condizionale passato.",
        grammarIds: ["it-g-c1-2"],
        vocabIds: ["it-v-c1-005", "it-v-c1-006", "it-v-c1-054", "it-v-c1-059", "it-v-c1-060"],
        verbIds: ["it-vb-c1-2"],
        testQuestions: [
            { id: "it-c1-u2-q1", level: "C1", prompt: "Complete (3° tipo): 'Se ___ la verità, non sarei venuto.' (sapere — io)", options: ["sapevo", "sapessi", "avessi saputo", "avrei saputo"], answer: "avessi saputo" },
            { id: "it-c1-u2-q2", level: "C1", prompt: "Complete (3° tipo): 'Se avesse avuto più coraggio, ___ la proposta.' (accettare — lui)", options: ["accettava", "avrebbe accettato", "accetterebbe", "accetti"], answer: "avrebbe accettato" },
            { id: "it-c1-u2-q3", level: "C1", prompt: "Which combination is correct for a 3rd conditional (3° tipo)?", options: ["se + congiuntivo imperfetto, condizionale presente", "se + indicativo imperfetto, condizionale passato", "se + congiuntivo trapassato, condizionale passato", "se + congiuntivo presente, futuro anteriore"], answer: "se + congiuntivo trapassato, condizionale passato" },
            { id: "it-c1-u2-q4", level: "C1", prompt: "Complete: 'Se fossimo partiti prima, non ___ il treno.' (perdere — noi)", options: ["perdevamo", "avremmo perso", "perderemmo", "abbiamo perso"], answer: "avremmo perso" },
            { id: "it-c1-u2-q5", level: "C1", prompt: "What is the passato remoto of 'fare' (lui/lei)?", options: ["faci", "faceva", "fece", "facesse"], answer: "fece" },
            { id: "it-c1-u2-q6", level: "C1", prompt: "What does 'il pragmatismo' mean?", options: ["Relativism", "Pragmatism", "Empiricism", "Rationalism"], answer: "Pragmatism" }
        ]
    },
    {
        id: "it-c1-u3",
        level: "C1",
        order: 3,
        title: "Stile Formale e Nominalizzazioni",
        description: "Command formal Italian register: use nominalisations, fixed prepositional phrases, and impersonal bureaucratic structures.",
        grammarIds: ["it-g-c1-3"],
        vocabIds: ["it-v-c1-045", "it-v-c1-046", "it-v-c1-047", "it-v-c1-050", "it-v-c1-052"],
        verbIds: [],
        testQuestions: [
            { id: "it-c1-u3-q1", level: "C1", prompt: "Which phrase means 'with regard to / concerning' in formal Italian?", options: ["a seguito di", "in merito a", "in virtù di", "ai fini di"], answer: "in merito a" },
            { id: "it-c1-u3-q2", level: "C1", prompt: "Complete the formal sentence: '___ delle verifiche effettuate, si è ritenuto opportuno sospendere il progetto.'", options: ["In merito a", "In virtù di", "A seguito", "Ai fini di"], answer: "A seguito" },
            { id: "it-c1-u3-q3", level: "C1", prompt: "What does the formal phrase 'è prassi comune' mean?", options: ["It is legally required", "It is common practice", "It is strongly recommended", "It has been proven"], answer: "It is common practice" },
            { id: "it-c1-u3-q4", level: "C1", prompt: "Which phrase means 'for the purposes of' in formal/legal Italian?", options: ["in linea con", "a prescindere da", "ai fini di", "nel quadro di"], answer: "ai fini di" },
            { id: "it-c1-u3-q5", level: "C1", prompt: "What does 'tenuto conto di' mean?", options: ["regardless of", "taking into account", "pursuant to", "within the framework of"], answer: "taking into account" },
            { id: "it-c1-u3-q6", level: "C1", prompt: "What does 'fatti salvi i diritti' mean in a legal context?", options: ["Having waived all rights", "Without prejudice to rights", "Having confirmed all rights", "Subject to rights"], answer: "Without prejudice to rights" }
        ]
    },
    {
        id: "it-c1-u4",
        level: "C1",
        order: 4,
        title: "Costruzioni Impersonali Avanzate",
        description: "Use advanced impersonal constructions from academic, journalistic, and formal Italian to present information with analytical distance.",
        grammarIds: ["it-g-c1-4"],
        vocabIds: ["it-v-c1-029", "it-v-c1-033", "it-v-c1-034", "it-v-c1-055", "it-v-c1-056"],
        verbIds: [],
        testQuestions: [
            { id: "it-c1-u4-q1", level: "C1", prompt: "Complete: 'Si ritiene che il progetto ___ valido dal punto di vista scientifico.' (essere)", options: ["è", "era", "sia", "fosse"], answer: "sia" },
            { id: "it-c1-u4-q2", level: "C1", prompt: "Which phrase introduces indirect attribution in journalistic Italian?", options: ["si dice sempre che", "stando a quanto riferisce", "secondo me", "si è dimostrato"], answer: "stando a quanto riferisce" },
            { id: "it-c1-u4-q3", level: "C1", prompt: "Complete: 'È noto che la crisi ___ in modo sproporzionato le fasce vulnerabili.' (colpire)", options: ["colpisce", "colpisce / abbia colpito", "colpiva", "colpirà"], answer: "colpisce / abbia colpito" },
            { id: "it-c1-u4-q4", level: "C1", prompt: "What does 'come si evince da' mean?", options: ["as has been corrected by", "as can be inferred from", "as was decided by", "as reported by"], answer: "as can be inferred from" },
            { id: "it-c1-u4-q5", level: "C1", prompt: "Complete: '___ quanto emerso, la situazione è più complessa del previsto.'", options: ["Secondo", "Stando a", "Alla luce di", "A tal riguardo"], answer: "Stando a" },
            { id: "it-c1-u4-q6", level: "C1", prompt: "What does 'la revisione tra pari' mean?", options: ["Internal review", "Peer review", "Editorial revision", "Self-assessment"], answer: "Peer review" }
        ]
    },
    {
        id: "it-c1-u5",
        level: "C1",
        order: 5,
        title: "Il Passato Remoto",
        description: "Use the literary past tense in formal writing and understand its regional variation in spoken Italian.",
        grammarIds: ["it-g-c1-5"],
        vocabIds: ["it-v-c1-069", "it-v-c1-070", "it-v-c1-071", "it-v-c1-072", "it-v-c1-073"],
        verbIds: ["it-vb-c1-3", "it-vb-c1-2"],
        testQuestions: [
            { id: "it-c1-u5-q1", level: "C1", prompt: "What is the passato remoto of 'essere' (noi)?", options: ["eravamo", "siamo stati", "fummo", "fossimo"], answer: "fummo" },
            { id: "it-c1-u5-q2", level: "C1", prompt: "What is the passato remoto of 'venire' (loro)?", options: ["vennero", "venirono", "vengono", "venissero"], answer: "vennero" },
            { id: "it-c1-u5-q3", level: "C1", prompt: "Which form is the correct passato remoto of 'fare' (io)?", options: ["facevo", "facessi", "feci", "farei"], answer: "feci" },
            { id: "it-c1-u5-q4", level: "C1", prompt: "In which context is the passato remoto used throughout Italy?", options: ["In casual conversation in the North", "In literary and formal historical writing", "Only in Southern dialects", "In journalism about current events"], answer: "In literary and formal historical writing" },
            { id: "it-c1-u5-q5", level: "C1", prompt: "What does 'il Risorgimento' refer to?", options: ["The Italian Renaissance", "The Italian unification movement of the 19th century", "The postwar economic boom", "The years of political terrorism"], answer: "The Italian unification movement of the 19th century" },
            { id: "it-c1-u5-q6", level: "C1", prompt: "What does 'gli anni di piombo' refer to?", options: ["The Roman era", "The Fascist period", "A period of political violence and terrorism in Italy (1970s–80s)", "The years of the economic miracle"], answer: "A period of political violence and terrorism in Italy (1970s–80s)" }
        ]
    }
]
