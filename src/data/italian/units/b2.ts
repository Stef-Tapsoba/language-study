import { LessonUnit } from "../../../types"

export const b2Units: LessonUnit[] = [
    {
        id: "it-b2-u1",
        level: "B2",
        order: 1,
        title: "Il Congiuntivo Imperfetto",
        description: "Master the imperfect subjunctive for hypotheticals, wishes, and reported speech in past contexts.",
        grammarIds: ["it-g-b2-1"],
        vocabIds: ["it-v-b2-061", "it-v-b2-068", "it-v-b2-075", "it-v-b2-076", "it-v-b2-079"],
        verbIds: ["it-vb-b2-1"],
        testQuestions: [
            { id: "it-b2-u1-q1", level: "B2", prompt: "Complete (congiuntivo imperfetto): 'Magari ___ più tempo libero!' (avere — io)", options: ["ho", "abbia", "avessi", "avevo"], answer: "avessi" },
            { id: "it-b2-u1-q2", level: "B2", prompt: "Complete (congiuntivo imperfetto): 'Se ___ , verrei anch'io.' (potere — io)", options: ["posso", "possa", "potessi", "potrei"], answer: "potessi" },
            { id: "it-b2-u1-q3", level: "B2", prompt: "Complete: 'Si comporta come se ___ il capo.' (essere — lui)", options: ["è", "sia", "fosse", "sarà"], answer: "fosse" },
            { id: "it-b2-u1-q4", level: "B2", prompt: "Complete (congiuntivo imperfetto di essere — noi): 'Speravo che ___ d'accordo.'", options: ["siamo", "siamo stati", "fossimo", "fussimo"], answer: "fossimo" },
            { id: "it-b2-u1-q5", level: "B2", prompt: "Which tense follows 'magari' in a wish about the present?", options: ["Congiuntivo presente", "Congiuntivo imperfetto", "Condizionale presente", "Imperfetto"], answer: "Congiuntivo imperfetto" },
            { id: "it-b2-u1-q6", level: "B2", prompt: "What does 'il dilemma' mean?", options: ["Paradigm", "Dilemma", "Principle", "Abstraction"], answer: "Dilemma" }
        ]
    },
    {
        id: "it-b2-u2",
        level: "B2",
        order: 2,
        title: "La Forma Passiva",
        description: "Use the passive voice with essere + past participle and express the agent with 'da'.",
        grammarIds: ["it-g-b2-2"],
        vocabIds: ["it-v-b2-001", "it-v-b2-005", "it-v-b2-053", "it-v-b2-057", "it-v-b2-059"],
        verbIds: ["it-vb-b2-3"],
        testQuestions: [
            { id: "it-b2-u2-q1", level: "B2", prompt: "Transform to passive: 'Il governo approva la legge.' →", options: ["La legge approva il governo.", "La legge è approvata dal governo.", "La legge viene approvare.", "Il governo viene approvato."], answer: "La legge è approvata dal governo." },
            { id: "it-b2-u2-q2", level: "B2", prompt: "Which preposition introduces the agent in an Italian passive sentence?", options: ["per", "di", "da", "con"], answer: "da" },
            { id: "it-b2-u2-q3", level: "B2", prompt: "Complete (passive, passato prossimo): 'Il rapporto ___ dagli esperti.' (scrivere)", options: ["è scritto", "è stato scritto", "viene scritto", "sarà scritto"], answer: "è stato scritto" },
            { id: "it-b2-u2-q4", level: "B2", prompt: "Which auxiliary can replace 'essere' in simple tenses for a more dynamic passive?", options: ["avere", "stare", "venire", "andare"], answer: "venire" },
            { id: "it-b2-u2-q5", level: "B2", prompt: "What does 'andare + participio passato' express?", options: ["A completed action", "A future action", "An obligation", "A hypothesis"], answer: "An obligation" },
            { id: "it-b2-u2-q6", level: "B2", prompt: "What does 'la sentenza' mean?", options: ["The law", "The verdict / ruling", "The trial", "The defendant"], answer: "The verdict / ruling" }
        ]
    },
    {
        id: "it-b2-u3",
        level: "B2",
        order: 3,
        title: "Pronomi Relativi Avanzati",
        description: "Use il cui, colui che, il quale, and chi to form sophisticated relative clauses.",
        grammarIds: ["it-g-b2-3"],
        vocabIds: ["it-v-b2-037", "it-v-b2-038", "it-v-b2-039", "it-v-b2-041", "it-v-b2-043"],
        verbIds: [],
        testQuestions: [
            { id: "it-b2-u3-q1", level: "B2", prompt: "Complete: 'Lo scrittore ___ romanzo ho letto è famoso.'", options: ["che", "cui", "il cui", "di cui"], answer: "il cui" },
            { id: "it-b2-u3-q2", level: "B2", prompt: "Complete (formal): '___ studia con costanza ottiene buoni risultati.'", options: ["Colui", "Chi", "Cui", "Il quale"], answer: "Chi" },
            { id: "it-b2-u3-q3", level: "B2", prompt: "Complete: 'Il contratto, ___ mi riferivo, è stato firmato.'", options: ["che", "cui", "al quale", "il cui"], answer: "al quale" },
            { id: "it-b2-u3-q4", level: "B2", prompt: "Which pronoun expresses 'whose' in Italian and is placed between article and noun?", options: ["che", "cui", "il cui", "il quale"], answer: "il cui" },
            { id: "it-b2-u3-q5", level: "B2", prompt: "Complete: 'La professoressa, ___ è molto apprezzata, terrà una lezione aperta.'", options: ["che", "la quale", "la cui", "chi"], answer: "la quale" },
            { id: "it-b2-u3-q6", level: "B2", prompt: "What does 'l'interpretazione' mean?", options: ["Narration", "Metaphor", "Interpretation", "Genre"], answer: "Interpretation" }
        ]
    },
    {
        id: "it-b2-u4",
        level: "B2",
        order: 4,
        title: "Il Discorso Indiretto",
        description: "Report what others said or asked using tense backshift and the correct reporting structures.",
        grammarIds: ["it-g-b2-4"],
        vocabIds: ["it-v-b2-064", "it-v-b2-065", "it-v-b2-069", "it-v-b2-072", "it-v-b2-074"],
        verbIds: ["it-vb-b2-2"],
        testQuestions: [
            { id: "it-b2-u4-q1", level: "B2", prompt: "Transform to reported speech: 'Ho fame.' → Ha detto che ___", options: ["ha fame", "aveva fame", "avrebbe fame", "abbia fame"], answer: "aveva fame" },
            { id: "it-b2-u4-q2", level: "B2", prompt: "Transform: 'Andrò a Roma.' → Ha detto che ___", options: ["andrà a Roma", "andrebbe a Roma", "sarebbe andato a Roma", "sia andato a Roma"], answer: "sarebbe andato a Roma" },
            { id: "it-b2-u4-q3", level: "B2", prompt: "How do you report a yes/no question in Italian?", options: ["ha detto che", "ha chiesto se", "ha chiesto quale", "ha chiesto perché"], answer: "ha chiesto se" },
            { id: "it-b2-u4-q4", level: "B2", prompt: "Transform the imperative: 'Vieni!' → Ha detto ___", options: ["che venivi", "di venire", "che venga", "da venire"], answer: "di venire" },
            { id: "it-b2-u4-q5", level: "B2", prompt: "In reported speech (past reporting verb), 'oggi' shifts to:", options: ["ieri", "domani", "quel giorno", "l'altro giorno"], answer: "quel giorno" },
            { id: "it-b2-u4-q6", level: "B2", prompt: "What does 'analogamente' mean?", options: ["Consequently", "However", "Similarly", "With regard to"], answer: "Similarly" }
        ]
    },
    {
        id: "it-b2-u5",
        level: "B2",
        order: 5,
        title: "Il Periodo Ipotetico di 2° tipo",
        description: "Form second conditional sentences using the congiuntivo imperfetto and condizionale presente.",
        grammarIds: ["it-g-b2-5"],
        vocabIds: ["it-v-b2-003", "it-v-b2-014", "it-v-b2-066", "it-v-b2-073", "it-v-b2-080"],
        verbIds: ["it-vb-b2-1", "it-vb-b2-2"],
        testQuestions: [
            { id: "it-b2-u5-q1", level: "B2", prompt: "Complete (2° tipo): 'Se ___ a Parigi, imparerei il francese.' (vivere — io)", options: ["vivo", "vivrò", "vivessi", "vivrei"], answer: "vivessi" },
            { id: "it-b2-u5-q2", level: "B2", prompt: "Complete (2° tipo): 'Se potessi scegliere, ___ in Toscana.' (vivere — io)", options: ["vivo", "vivrò", "vivessi", "vivrei"], answer: "vivrei" },
            { id: "it-b2-u5-q3", level: "B2", prompt: "Which tense goes in the 'se' clause of a 2nd conditional?", options: ["Congiuntivo presente", "Congiuntivo imperfetto", "Indicativo presente", "Condizionale presente"], answer: "Congiuntivo imperfetto" },
            { id: "it-b2-u5-q4", level: "B2", prompt: "Which tense goes in the main clause of a 2nd conditional?", options: ["Futuro semplice", "Congiuntivo imperfetto", "Condizionale presente", "Presente indicativo"], answer: "Condizionale presente" },
            { id: "it-b2-u5-q5", level: "B2", prompt: "Complete: 'Se il governo ___ le tasse, i cittadini sarebbero più contenti.' (ridurre)", options: ["riduce", "ridurrà", "riducesse", "ridurrebbe"], answer: "riducesse" },
            { id: "it-b2-u5-q6", level: "B2", prompt: "What does 'nonostante' mean?", options: ["Consequently", "Despite / notwithstanding", "Similarly", "With regard to"], answer: "Despite / notwithstanding" }
        ]
    },
    {
        id: "it-b2-u6",
        level: "B2",
        order: 6,
        title: "Periodo Ipotetico Misto & Ipotesi Avanzate",
        description: "Master the mixed conditional — past condition, present consequence — and consolidate all three types of Italian conditional sentence. Build fluency with concessive subjunctive patterns.",
        grammarIds: ["it-g-b2-6"],
        vocabIds: ["it-v-b2-081", "it-v-b2-082", "it-v-b2-083", "it-v-b2-084", "it-v-b2-085"],
        verbIds: ["it-vb-b2-4"],
        testQuestions: [
            { id: "it-b2-u6-q1", level: "B2", prompt: "Identify: 'Se avessi studiato medicina, sarei medico adesso.'", options: ["1° tipo — reale", "2° tipo — ipotetico presente", "3° tipo — rimpianto passato", "Misto — condizione passata, conseguenza presente"], answer: "Misto — condizione passata, conseguenza presente", hint: "Se + congiuntivo trapassato → condizionale presente = periodo ipotetico misto." },
            { id: "it-b2-u6-q2", level: "B2", prompt: "Complete: 'Se ___ (partire) prima, sarei qui adesso.'", options: ["partissi", "fossi partito", "sarei partito", "partivo"], answer: "fossi partito", hint: "Mixed: se + congiuntivo trapassato (past clause) → condizionale presente (now)." },
            { id: "it-b2-u6-q3", level: "B2", prompt: "What does 'per quanto' introduce?", options: ["a result", "a concession — however much / no matter how", "a condition", "a purpose"], answer: "a concession — however much / no matter how", hint: "Per quanto + congiuntivo = however much / no matter how. Per quanto studi, non riesce." },
            { id: "it-b2-u6-q4", level: "B2", prompt: "Complete: 'Nonostante ___ tardi, continuò a lavorare.' (essere)", options: ["fosse", "è", "sia", "era"], answer: "fosse", hint: "Nonostante + congiuntivo imperfetto after a past context." },
            { id: "it-b2-u6-q5", level: "B2", prompt: "What does 'a condizione che' mean?", options: ["unless", "provided that / on condition that", "despite", "in order that"], answer: "provided that / on condition that", hint: "A condizione che + congiuntivo = provided that / on condition that." },
            { id: "it-b2-u6-q6", level: "B2", prompt: "Journalistic conditional: what does 'Il ministro avrebbe rassegnato le dimissioni' mean?", options: ["The minister definitely resigned", "The minister is reported to have resigned (unconfirmed)", "The minister will resign", "The minister used to resign"], answer: "The minister is reported to have resigned (unconfirmed)", hint: "Condizionale passato in journalism = alleged information. Equivalent to 'reportedly' in English." },
        ]
    },
    {
        id: "it-b2-u7",
        level: "B2",
        order: 7,
        title: "Congiuntivo Concessivo & Connettivi Avanzati",
        description: "Use the full range of concessive subjunctive triggers, master B2 discourse connectors, and build the argumentative framework needed for formal written and spoken Italian.",
        grammarIds: ["it-g-b2-7"],
        vocabIds: ["it-v-b2-086", "it-v-b2-087", "it-v-b2-088", "it-v-b2-089"],
        verbIds: [],
        testQuestions: [
            { id: "it-b2-u7-q1", level: "B2", prompt: "Complete: 'Sebbene ___ stanco, continuò.' (essere — present context)", options: ["è", "era", "sia", "fosse"], answer: "sia", hint: "Sebbene/benché/nonostante always require congiuntivo. Present context → congiuntivo presente." },
            { id: "it-b2-u7-q2", level: "B2", prompt: "Which connector means 'however / nevertheless' in formal Italian?", options: ["quindi", "tuttavia / ciononostante", "inoltre", "pertanto"], answer: "tuttavia / ciononostante", hint: "Tuttavia and ciononostante = however / nevertheless. More formal than ma." },
            { id: "it-b2-u7-q3", level: "B2", prompt: "What does 'a meno che non' introduce?", options: ["a result", "a purpose", "an exception — unless", "a concession"], answer: "an exception — unless", hint: "A meno che non + congiuntivo = unless. The non is compulsory even in affirmative meaning." },
            { id: "it-b2-u7-q4", level: "B2", prompt: "Complete: 'Lo faccio affinché tu ___ (capire) la situazione.'", options: ["capisci", "capirai", "capisca", "capiva"], answer: "capisca", hint: "Affinché (so that / in order that) always triggers congiuntivo." },
            { id: "it-b2-u7-q5", level: "B2", prompt: "What does 'di conseguenza' mean?", options: ["in contrast", "on the other hand", "as a consequence / therefore", "in addition"], answer: "as a consequence / therefore", hint: "Di conseguenza = consequently / as a result. Formal written alternative to quindi." },
            { id: "it-b2-u7-q6", level: "B2", prompt: "What does 'stante la situazione' mean?", options: ["while standing", "given the situation (formal)", "despite the situation", "before the situation"], answer: "given the situation (formal)", hint: "Stante + noun = given / in view of. Stante il problema = given the problem (formal)." },
        ]
    },
    {
        id: "it-b2-u8",
        level: "B2",
        order: 8,
        title: "Registro & Espressioni Idiomatiche",
        description: "Navigate formal written Italian versus colloquial spoken language. Master key idiomatic expressions, understand register divergence, and use the fixed collocations that characterise authentic B2 Italian.",
        grammarIds: ["it-g-b2-8"],
        vocabIds: ["it-v-b2-090", "it-v-b2-091", "it-v-b2-092"],
        verbIds: [],
        testQuestions: [
            { id: "it-b2-u8-q1", level: "B2", prompt: "What does 'non ci piove' mean?", options: ["it's not raining", "there's absolutely no doubt about it", "it doesn't matter", "it's uncertain"], answer: "there's absolutely no doubt about it", hint: "Non ci piove is a fixed idiom: 'there's no doubt about it' — cannot be guessed from its literal meaning." },
            { id: "it-b2-u8-q2", level: "B2", prompt: "Which is the formal written alternative to 'perché'?", options: ["in quanto / poiché / dal momento che", "ma / però / eppure", "quindi / perciò", "mentre / quando"], answer: "in quanto / poiché / dal momento che", hint: "Perché = neutral. Poiché / in quanto / dal momento che = formal written alternatives." },
            { id: "it-b2-u8-q3", level: "B2", prompt: "What does 'avere un diavolo per capello' mean?", options: ["to be very proud", "to be furious / hopping mad", "to be confused", "to have a bad day"], answer: "to be furious / hopping mad", hint: "Avere un diavolo per capello = literally 'to have a devil in every hair' — to be very angry." },
            { id: "it-b2-u8-q4", level: "B2", prompt: "In formal Italian writing, which structure compresses 'anche se è difficile'?", options: ["malgrado la difficoltà / nonostante la difficoltà", "però è difficile", "è difficile quindi", "perché è difficile"], answer: "malgrado la difficoltà / nonostante la difficoltà", hint: "Nominalisation: anche se è difficile → nonostante/malgrado la difficoltà. Core B2 formal writing." },
            { id: "it-b2-u8-q5", level: "B2", prompt: "What does 'in merito a' mean?", options: ["on merit", "with regard to / concerning (formal)", "because of", "in addition to"], answer: "with regard to / concerning (formal)", hint: "In merito a = riguardo a = with regard to. Formal register — used in business and official writing." },
            { id: "it-b2-u8-q6", level: "B2", prompt: "What does 'cavarsela' mean?", options: ["to hide oneself", "to manage / to get by / to cope", "to escape", "to find something"], answer: "to manage / to get by / to cope", hint: "Cavarsela = to manage / get by. Se la cava = he/she manages. Colloquial but very frequent." },
        ]
    },
    {
        id: "it-b2-u9",
        level: "B2",
        order: 9,
        title: "Congiuntivo Passato e Trapassato",
        description: "Master the compound subjunctive tenses: use the congiuntivo passato for completed actions with a present main clause, and the congiuntivo trapassato for past-in-past actions.",
        grammarIds: ["it-g-b2-9"],
        vocabIds: ["it-v-b2-075", "it-v-b2-076", "it-v-b2-086", "it-v-b2-087", "it-v-b2-073"],
        verbIds: [],
        testQuestions: [
            { id: "it-b2-u9-q1", level: "B2", prompt: "Complete (congiuntivo passato): 'Sono contento che tu ___ alla festa.' (venire)", options: ["venissi", "sei venuto", "sia venuto", "venivi"], answer: "sia venuto", hint: "Main clause: present (sono contento) → completed prior action → congiuntivo passato: sia venuto." },
            { id: "it-b2-u9-q2", level: "B2", prompt: "Complete (congiuntivo passato): 'Credo che loro ___ già.' (decidere)", options: ["decidevano", "abbiano deciso", "avessero deciso", "decisero"], answer: "abbiano deciso", hint: "Credere (present) + completed action → congiuntivo passato: abbiano deciso." },
            { id: "it-b2-u9-q3", level: "B2", prompt: "Complete (congiuntivo trapassato): 'Nonostante ___ molto, non superò l'esame.' (studiare — lui)", options: ["studiasse", "studi", "avesse studiato", "abbia studiato"], answer: "avesse studiato", hint: "Nonostante + past main clause → prior completed action → congiuntivo trapassato: avesse studiato." },
            { id: "it-b2-u9-q4", level: "B2", prompt: "Complete (congiuntivo trapassato): 'Era felice che loro ___ in tempo.' (arrivare)", options: ["arrivassero", "siano arrivati", "fossero arrivati", "arrivarono"], answer: "fossero arrivati", hint: "Main clause past (era felice) + completed prior arrival → congiuntivo trapassato: fossero arrivati." },
            { id: "it-b2-u9-q5", level: "B2", prompt: "Which rule governs the choice between congiuntivo passato and congiuntivo trapassato?", options: ["Whether the subject is singular or plural", "The tense of the main clause trigger", "Whether the verb is transitive or intransitive", "The gender of the subject"], answer: "The tense of the main clause trigger", hint: "Main clause present/future → congiuntivo passato; main clause past → congiuntivo trapassato." },
            { id: "it-b2-u9-q6", level: "B2", prompt: "What does 'la resilienza' mean?", options: ["Remorse", "Resilience", "Empathy", "Ambivalence"], answer: "Resilience" }
        ]
    },
    {
        id: "it-b2-u10",
        level: "B2",
        order: 10,
        title: "Nominalizzazione",
        description: "Convert verbs and adjectives into noun phrases to write in the dense, impersonal style of academic and journalistic Italian. Use key formal constructions including 'il fatto che' and 'è opportuno sottolineare che'.",
        grammarIds: ["it-g-b2-10"],
        vocabIds: ["it-v-b2-096", "it-v-b2-097", "it-v-b2-098", "it-v-b2-099", "it-v-b2-100", "it-v-b2-101"],
        verbIds: [],
        testQuestions: [
            { id: "it-b2-u10-q1", level: "B2", prompt: "Which is the nominalisation of 'sviluppare'?", options: ["lo sviluppatore", "lo sviluppo", "lo sviluppato", "l'atto di sviluppare"], answer: "lo sviluppo", hint: "Nominalisation: sviluppare → lo sviluppo. Pattern: -are verb → a corresponding noun form." },
            { id: "it-b2-u10-q2", level: "B2", prompt: "Complete: 'Il fatto che i prezzi ___ a salire preoccupa i consumatori.' (continuare — present congiuntivo)", options: ["continuano", "continuino", "continuassero", "continuavano"], answer: "continuino", hint: "Il fatto che always triggers the congiuntivo: continuino (3rd person plural congiuntivo presente)." },
            { id: "it-b2-u10-q3", level: "B2", prompt: "Which formal structure introduces a hedged academic statement?", options: ["ma devo dire che", "è opportuno sottolineare che", "comunque sia", "mi sembra che"], answer: "è opportuno sottolineare che", hint: "È opportuno sottolineare che = it is appropriate to point out that. Core formal academic phrase." },
            { id: "it-b2-u10-q4", level: "B2", prompt: "What does 'pur ammettendo' introduce?", options: ["A result", "A purpose", "A concession (while admitting)", "A condition"], answer: "A concession (while admitting)", hint: "Pur + gerundio = concession: pur ammettendo le difficoltà = while admitting the difficulties." },
            { id: "it-b2-u10-q5", level: "B2", prompt: "What is the nominalisation of 'ridurre'?", options: ["la riduzione", "il ridotto", "la riduttività", "il ridurre"], answer: "la riduzione", hint: "Ridurre → la riduzione. Italian nominalisations of -ure verbs often take the -zione suffix." },
            { id: "it-b2-u10-q6", level: "B2", prompt: "What does 'occorre precisare che' mean?", options: ["it is possible to specify", "it is necessary to specify / it must be noted that", "we have already specified", "it seems that"], answer: "it is necessary to specify / it must be noted that", hint: "Occorre precisare che = it is necessary to specify / it must be noted that. Formal academic marker." }
        ]
    },
    {
        id: "it-b2-u11",
        level: "B2",
        order: 11,
        title: "Strutture Impersonali & Concordanza dei Tempi",
        description: "Combine mastery of formal impersonal constructions — si + verb, venire + participle, sembrerebbe che — with full control of sequence-of-tenses rules governing congiuntivo in subordinate clauses.",
        grammarIds: ["it-g-b2-11", "it-g-b2-12"],
        vocabIds: ["it-v-b2-102", "it-v-b2-103", "it-v-b2-104", "it-v-b2-069", "it-v-b2-070"],
        verbIds: [],
        testQuestions: [
            { id: "it-b2-u11-q1", level: "B2", prompt: "Complete: 'Si ___ che il cambiamento climatico rappresenti una minaccia.' (ritenere — impersonal present)", options: ["ritiene", "ha ritenuto", "ritenga", "riterebbe"], answer: "ritiene", hint: "Si ritiene che = it is believed that. The si + verb form gives impersonal meaning; the main verb stays indicative." },
            { id: "it-b2-u11-q2", level: "B2", prompt: "Which sentence uses the formal passive with 'venire' correctly?", options: ["I dati sono stati raccolti venire.", "I dati vengono raccolti ogni mese.", "I dati venivano stati analizzati.", "I dati verranno stati pubblicati."], answer: "I dati vengono raccolti ogni mese.", hint: "Venire + past participle replaces essere in simple tenses only (present, imperfect, future simple)." },
            { id: "it-b2-u11-q3", level: "B2", prompt: "Complete (concordanza dei tempi): 'Penso che Marco ___ ancora.' (lavorare — simultaneous present)", options: ["lavora", "lavorasse", "lavori", "lavorerà"], answer: "lavori", hint: "Main clause present + simultaneous action → congiuntivo presente: lavori." },
            { id: "it-b2-u11-q4", level: "B2", prompt: "Complete (concordanza dei tempi): 'Pensavo che Marco ___ già.' (finire — prior to main past)", options: ["finisca", "abbia finito", "avesse finito", "finisse"], answer: "avesse finito", hint: "Main clause past + action prior to that past moment → congiuntivo trapassato: avesse finito." },
            { id: "it-b2-u11-q5", level: "B2", prompt: "Complete: '___ opportuno precisare i limiti di questa analisi.' (formal hedging)", options: ["Sembra", "Risulta", "Appare chiaro", "Risulta"], answer: "Risulta", hint: "Risulta opportuno + infinito = it is appropriate to (formal hedging). Note: 'Risulta' fits naturally here." },
            { id: "it-b2-u11-q6", level: "B2", prompt: "What does 'sembrerebbe che' signal?", options: ["A firm assertion", "A cautious or hedged assertion", "A past completed fact", "A necessary condition"], answer: "A cautious or hedged assertion", hint: "Sembrerebbe che + congiuntivo = it would seem that. The conditional sembrerebbe signals the writer's distancing from the claim." }
        ]
    },
    {
        id: "it-b2-u12",
        level: "B2",
        order: 12,
        title: "Condizionale Giornalistico",
        description: "Use the journalistic conditional to report unverified information in the style of quality Italian journalism, and deploy the modal conditional to make formally distanced or politely hedged statements.",
        grammarIds: ["it-g-b2-13"],
        vocabIds: ["it-v-b2-093", "it-v-b2-094", "it-v-b2-095", "it-v-b2-096", "it-v-b2-097"],
        verbIds: [],
        readingIds: ["it-r-b2-4"],
        testQuestions: [
            { id: "it-b2-u12-q1", level: "B2", prompt: "What does the sentence 'Il governo avrebbe deciso di posticipare le elezioni' convey?", options: ["The government definitely decided to postpone elections.", "The government is reported to have decided to postpone elections (unverified).", "The government will decide to postpone elections.", "The government had decided to postpone elections."], answer: "The government is reported to have decided to postpone elections (unverified).", hint: "Avrebbe deciso = condizionale passato used journalistically to signal unconfirmed information." },
            { id: "it-b2-u12-q2", level: "B2", prompt: "Which form is used in Italian journalism to signal unverified current information?", options: ["Indicativo presente", "Condizionale presente (avrebbe, sarebbe, ecc.)", "Congiuntivo imperfetto", "Futuro anteriore"], answer: "Condizionale presente (avrebbe, sarebbe, ecc.)", hint: "The condizionale (especially passato forms like avrebbe + participio) signals alleged or unconfirmed information in Italian journalism." },
            { id: "it-b2-u12-q3", level: "B2", prompt: "Complete: 'Il presidente ___ il decreto nella giornata di ieri.' (firmare — journalistic past conditional)", options: ["ha firmato", "avrebbe firmato", "firmerebbe", "firmasse"], answer: "avrebbe firmato", hint: "Avrebbe firmato = journalistic conditional passato: the president is said to have signed. Signals unverified past action." },
            { id: "it-b2-u12-q4", level: "B2", prompt: "Complete (modal conditional): '___ opportuno condurre ulteriori indagini prima di concludere.'", options: ["È", "Sarebbe", "Sia", "Fosse"], answer: "Sarebbe", hint: "Sarebbe opportuno = it would be appropriate to. Modal conditional for formal hedging — no explicit if-clause needed." },
            { id: "it-b2-u12-q5", level: "B2", prompt: "What does 'secondo fonti attendibili' mean?", options: ["according to the official statement", "according to reliable sources", "according to previous reports", "according to public opinion"], answer: "according to reliable sources", hint: "Secondo fonti attendibili = according to reliable sources. Fixed journalistic phrase used with the journalistic conditional." },
            { id: "it-b2-u12-q6", level: "B2", prompt: "What does 'risulterebbe che' signal in a news article?", options: ["A confirmed fact", "An official denial", "An alleged or unverified situation", "A historical event"], answer: "An alleged or unverified situation", hint: "Risulterebbe che = it would appear that. Journalistic hedge signalling the information is not officially confirmed." }
        ]
    }
]
