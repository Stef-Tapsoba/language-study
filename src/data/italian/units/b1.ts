import { LessonUnit } from "../../../types"

export const b1Units: LessonUnit[] = [
    // ── Block 1: Il passato in profondità ──────────────────────────────────────

    {
        id: "it-b1-u1",
        level: "B1",
        order: 1,
        title: "Avevo già mangiato — il trapassato prossimo",
        description: "Add a third temporal layer to past narratives — what had already happened before the main events. Form the trapassato prossimo with avere/essere in imperfetto + participio passato, and use it naturally in stories.",
        grammarIds: ["it-g-b1-1"],
        vocabIds: ["it-v-b1-001", "it-v-b1-002", "it-v-b1-003", "it-v-b1-004", "it-v-b1-005"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-1-1", level: "B1",
                prompt: "Complete (trapassato): 'Quando sono arrivato, lei ___ già.' (partire)",
                options: ["è partita", "partiva", "era partita", "partì"],
                answer: "era partita"
            },
            {
                id: "it-uq-b1-1-2", level: "B1",
                prompt: "The trapassato prossimo uses which auxiliary tense?",
                options: ["presente", "passato prossimo", "imperfetto", "futuro"],
                answer: "imperfetto"
            },
            {
                id: "it-uq-b1-1-3", level: "B1",
                prompt: "Complete: 'Era stanco perché non ___ bene.' (dormire — trapassato)",
                options: ["dormiva", "ha dormito", "aveva dormito", "dormì"],
                answer: "aveva dormito"
            },
            {
                id: "it-uq-b1-1-4", level: "B1",
                prompt: "Where do 'già', 'ancora', 'mai' go in a trapassato sentence?",
                options: ["before the auxiliary", "between auxiliary and participio", "after the participio", "at the end of the sentence"],
                answer: "between auxiliary and participio"
            },
            {
                id: "it-uq-b1-1-5", level: "B1",
                prompt: "What does 'esausto/a' mean?",
                options: ["hurried", "exhausted", "confused", "relieved"],
                answer: "exhausted"
            },
        ]
    },

    {
        id: "it-b1-u2",
        level: "B1",
        order: 2,
        title: "La storia vera — narrazione in tre tempi",
        description: "Tell complex, layered stories using all three past tenses together: imperfetto for background, passato prossimo for plot events, trapassato for backstory. This is the defining B1 narration skill.",
        grammarIds: ["it-g-b1-2"],
        vocabIds: ["it-v-b1-006", "it-v-b1-007", "it-v-b1-008", "it-v-b1-009", "it-v-b1-010"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-2-1", level: "B1",
                prompt: "Which tense is used for background/ongoing states in narration?",
                options: ["passato prossimo", "imperfetto", "trapassato prossimo", "futuro"],
                answer: "imperfetto"
            },
            {
                id: "it-uq-b1-2-2", level: "B1",
                prompt: "All'improvviso signals which tense?",
                options: ["imperfetto", "passato prossimo", "trapassato", "condizionale"],
                answer: "passato prossimo"
            },
            {
                id: "it-uq-b1-2-3", level: "B1",
                prompt: "Complete: 'Stava camminando perché ___ l'ultimo autobus.' (perdere — trapassato)",
                options: ["perdeva", "ha perso", "aveva perso", "perse"],
                answer: "aveva perso"
            },
            {
                id: "it-uq-b1-2-4", level: "B1",
                prompt: "Which time signal points to imperfetto?",
                options: ["all'improvviso", "poi", "di solito", "alla fine"],
                answer: "di solito"
            },
            {
                id: "it-uq-b1-2-5", level: "B1",
                prompt: "What does 'in precedenza' mean?",
                options: ["in the end", "previously / before that", "at that moment", "all of a sudden"],
                answer: "previously / before that"
            },
        ]
    },

    {
        id: "it-b1-u3",
        level: "B1",
        order: 3,
        title: "È stato costruito nel 1850 — la forma passiva",
        description: "Understand and produce passive constructions. Use essere/venire + participio (agreeing with the subject), the by-agent with da, and the si passivante — the most natural passive in spoken Italian.",
        grammarIds: ["it-g-b1-3"],
        vocabIds: ["it-v-b1-011", "it-v-b1-012", "it-v-b1-013", "it-v-b1-014", "it-v-b1-015"],
        verbIds: [],
        checkpointId: "it-cp-b1-1",
        testQuestions: [
            {
                id: "it-uq-b1-3-1", level: "B1",
                prompt: "Transform to passive: 'Il governo ha approvato la legge.'",
                options: ["La legge ha approvato il governo.", "La legge è stata approvata dal governo.", "La legge veniva approvata dal governo.", "La legge si approva dal governo."],
                answer: "La legge è stata approvata dal governo."
            },
            {
                id: "it-uq-b1-3-2", level: "B1",
                prompt: "Which auxiliary passive can ONLY be used in simple (non-compound) tenses?",
                options: ["essere", "venire", "avere", "stare"],
                answer: "venire"
            },
            {
                id: "it-uq-b1-3-3", level: "B1",
                prompt: "Which is the correct si passivante for 'They are looking for waiters'?",
                options: ["Si cerca camerieri.", "Si cercano camerieri.", "Si è cercato camerieri.", "Si cercano il cameriere."],
                answer: "Si cercano camerieri."
            },
            {
                id: "it-uq-b1-3-4", level: "B1",
                prompt: "In a passive construction, the participio agrees with:",
                options: ["the agent (da + noun)", "the grammatical subject", "the auxiliary verb", "the object of da"],
                answer: "the grammatical subject"
            },
            {
                id: "it-uq-b1-3-5", level: "B1",
                prompt: "What does 'avviare' mean?",
                options: ["to announce", "to approve", "to launch / start", "to finance"],
                answer: "to launch / start"
            },
        ]
    },

    // ── Block 2: Quello che voglio, quello che sento ───────────────────────────

    {
        id: "it-b1-u4",
        level: "B1",
        order: 4,
        title: "Voglio che tu venga — il congiuntivo (volontà)",
        description: "Introduce the congiuntivo as a mood (not a tense). Master the key rule: same subject → infinito; different subjects → che + congiuntivo. Express wishes, desires, recommendations, and necessity.",
        grammarIds: ["it-g-b1-4"],
        vocabIds: ["it-v-b1-016", "it-v-b1-017", "it-v-b1-018", "it-v-b1-019", "it-v-b1-020"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-4-1", level: "B1",
                prompt: "Complete (congiuntivo): 'Voglio che lui ___ subito.' (venire)",
                options: ["viene", "venga", "venisse", "verrà"],
                answer: "venga"
            },
            {
                id: "it-uq-b1-4-2", level: "B1",
                prompt: "Same subject after a verb of will → use:",
                options: ["che + congiuntivo", "che + indicativo", "infinito", "gerundio"],
                answer: "infinito"
            },
            {
                id: "it-uq-b1-4-3", level: "B1",
                prompt: "Complete: 'Bisogna che tu ___ puntuale.' (essere)",
                options: ["sei", "sia", "saresti", "fossi"],
                answer: "sia"
            },
            {
                id: "it-uq-b1-4-4", level: "B1",
                prompt: "What is the congiuntivo presente of 'andare' (lui/lei)?",
                options: ["andate", "andassi", "vada", "andasse"],
                answer: "vada"
            },
            {
                id: "it-uq-b1-4-5", level: "B1",
                prompt: "What does 'augurarsi che' mean?",
                options: ["to demand that", "to hope / wish that", "to insist that", "to suggest that"],
                answer: "to hope / wish that"
            },
        ]
    },

    {
        id: "it-b1-u5",
        level: "B1",
        order: 5,
        title: "Sono contento che tu sia qui — congiuntivo (emozione e dubbio)",
        description: "Use the congiuntivo after verbs of emotion (fear, happiness, surprise) and doubt/possibility (dubito che, è possibile che, sembra che). Understand the certainty vs subjectivity principle.",
        grammarIds: ["it-g-b1-5"],
        vocabIds: ["it-v-b1-021", "it-v-b1-022", "it-v-b1-023", "it-v-b1-024", "it-v-b1-025"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-5-1", level: "B1",
                prompt: "Complete: 'Sono contento che tu ___ venuto.' (essere)",
                options: ["sei", "sia", "fossi", "saresti"],
                answer: "sia"
            },
            {
                id: "it-uq-b1-5-2", level: "B1",
                prompt: "Complete: 'Dubito che ___ ragione.' (avere — lui)",
                options: ["ha", "abbia", "avesse", "avrà"],
                answer: "abbia"
            },
            {
                id: "it-uq-b1-5-3", level: "B1",
                prompt: "Which triggers indicativo rather than congiuntivo?",
                options: ["dubito che", "è possibile che", "so che", "mi dispiace che"],
                answer: "so che"
            },
            {
                id: "it-uq-b1-5-4", level: "B1",
                prompt: "Complete: 'Sembra che la situazione ___ grave.' (essere)",
                options: ["è", "era", "sia", "fosse"],
                answer: "sia"
            },
            {
                id: "it-uq-b1-5-5", level: "B1",
                prompt: "What does 'pare che' mean?",
                options: ["it seems that / apparently", "I'm afraid that", "it is certain that", "I'm happy that"],
                answer: "it seems that / apparently"
            },
        ]
    },

    {
        id: "it-b1-u6",
        level: "B1",
        order: 6,
        title: "Perché tu capisca / benché sia difficile — congiuntivo (congiunzioni)",
        description: "Use the congiuntivo after conjunctions of purpose (perché/affinché), concession (benché/sebbene/nonostante), and condition (prima che, finché non, a meno che). Understand same vs different subject with perché.",
        grammarIds: ["it-g-b1-6"],
        vocabIds: ["it-v-b1-026", "it-v-b1-027", "it-v-b1-028", "it-v-b1-029", "it-v-b1-030"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-6-1", level: "B1",
                prompt: "Complete: 'Te lo spiego perché tu ___.' (capire)",
                options: ["capisci", "capisca", "capisce", "capivi"],
                answer: "capisca"
            },
            {
                id: "it-uq-b1-6-2", level: "B1",
                prompt: "Complete: '___ sia stanca, ha continuato.' (benché)",
                options: ["È stanca", "Benché è stanca", "Benché sia stanca", "Sebbene è stanca"],
                answer: "Benché sia stanca"
            },
            {
                id: "it-uq-b1-6-3", level: "B1",
                prompt: "Which conjunction takes INDICATIVO (not congiuntivo)?",
                options: ["benché", "prima che", "anche se", "a meno che"],
                answer: "anche se"
            },
            {
                id: "it-uq-b1-6-4", level: "B1",
                prompt: "Same subject: 'I left before eating' → Italian:",
                options: ["Ho lasciato prima che mangiassi.", "Ho lasciato prima di mangiare.", "Ho lasciato prima che mangiao.", "Ho lasciato prima che mangia."],
                answer: "Ho lasciato prima di mangiare."
            },
            {
                id: "it-uq-b1-6-5", level: "B1",
                prompt: "What does 'a meno che (non)' mean?",
                options: ["unless", "until", "before", "provided that"],
                answer: "unless"
            },
        ]
    },

    {
        id: "it-b1-u7",
        level: "B1",
        order: 7,
        title: "È il posto migliore che conosca — congiuntivo (superlativo e relativa)",
        description: "Use the congiuntivo after superlatives and l'unico/il primo (subjective judgement). Use congiuntivo in relative clauses with uncertain/non-existent referents. Full review of all B1 congiuntivo triggers.",
        grammarIds: ["it-g-b1-7"],
        vocabIds: ["it-v-b1-031", "it-v-b1-032", "it-v-b1-033", "it-v-b1-034", "it-v-b1-035"],
        verbIds: [],
        checkpointId: "it-cp-b1-2",
        testQuestions: [
            {
                id: "it-uq-b1-7-1", level: "B1",
                prompt: "Complete: 'È il film migliore che ___ mai visto.' (avere — io)",
                options: ["ho", "abbia", "avessi", "avevo"],
                answer: "abbia"
            },
            {
                id: "it-uq-b1-7-2", level: "B1",
                prompt: "Complete: 'Cerco qualcuno che ___ giapponese.' (parlare)",
                options: ["parla", "parli", "parlasse", "parlando"],
                answer: "parli"
            },
            {
                id: "it-uq-b1-7-3", level: "B1",
                prompt: "Complete: 'Ho trovato qualcuno che ___ giapponese.' (known person — exists)",
                options: ["parli", "parlasse", "parla", "parlerà"],
                answer: "parla"
            },
            {
                id: "it-uq-b1-7-4", level: "B1",
                prompt: "Complete: 'È l'unica persona che ___ davvero la situazione.' (capire)",
                options: ["capisce", "capisce", "capisca", "capiva"],
                answer: "capisca"
            },
            {
                id: "it-uq-b1-7-5", level: "B1",
                prompt: "Which category of congiuntivo trigger does 'è possibile che' belong to?",
                options: ["volontà", "emozione", "dubbio/possibilità", "congiunzione"],
                answer: "dubbio/possibilità"
            },
        ]
    },

    // ── Block 3: E se... / Quello che avrebbe potuto essere ───────────────────

    {
        id: "it-b1-u8",
        level: "B1",
        order: 8,
        title: "Se avessi tempo... — periodo ipotetico tipo 2 e tipo 3",
        description: "Express hypothetical present situations (se + congiuntivo imperfetto → condizionale) and counterfactual pasts (se + congiuntivo trapassato → condizionale passato). Form the congiuntivo imperfetto from passato remoto loro forms.",
        grammarIds: ["it-g-b1-8"],
        vocabIds: ["it-v-b1-036", "it-v-b1-037", "it-v-b1-038", "it-v-b1-039", "it-v-b1-040"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-8-1", level: "B1",
                prompt: "Complete (type 2 hypothetical): 'Se ___ tempo, viaggerei di più.' (avere — io)",
                options: ["ho", "avrò", "avessi", "avrei"],
                answer: "avessi"
            },
            {
                id: "it-uq-b1-8-2", level: "B1",
                prompt: "Complete (type 3 counterfactual): 'Se ___ prima, avremmo preso il treno.' (partire — noi)",
                options: ["siamo partiti", "partivamo", "fossimo partiti", "partissimo"],
                answer: "fossimo partiti"
            },
            {
                id: "it-uq-b1-8-3", level: "B1",
                prompt: "What is the congiuntivo imperfetto of 'essere' (io)?",
                options: ["essi", "fossi", "fosse", "fui"],
                answer: "fossi"
            },
            {
                id: "it-uq-b1-8-4", level: "B1",
                prompt: "Translate: 'I should have told you earlier.'",
                options: ["Devo dirtelo prima.", "Dovevo dirtelo prima.", "Avrei dovuto dirtelo prima.", "Dovresti dirmelo prima."],
                answer: "Avrei dovuto dirtelo prima."
            },
            {
                id: "it-uq-b1-8-5", level: "B1",
                prompt: "Which tense NEVER follows 'se' in a conditional clause?",
                options: ["congiuntivo imperfetto", "congiuntivo trapassato", "condizionale", "presente indicativo"],
                answer: "condizionale"
            },
        ]
    },

    {
        id: "it-b1-u9",
        level: "B1",
        order: 9,
        title: "Glielo hai detto? — i pronomi combinati",
        description: "Combine direct and indirect object pronouns fluently: me lo, te la, glielo, gliele. Apply the key rules (mi/ti/ci/vi → me/te/ce/ve; gli/le → glie-). Use double pronouns in compound tenses with correct participio agreement, and in imperative forms.",
        grammarIds: ["it-g-b1-9"],
        vocabIds: ["it-v-b1-041", "it-v-b1-042", "it-v-b1-043", "it-v-b1-044", "it-v-b1-045"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-9-1", level: "B1",
                prompt: "Replace: 'Ti passo il sale.' → ___",
                options: ["Gli lo passo.", "Lo ti passo.", "Te lo passo.", "Me lo passo."],
                answer: "Te lo passo."
            },
            {
                id: "it-uq-b1-9-2", level: "B1",
                prompt: "Replace: 'Ho dato il libro a Maria.' → ___ ho dato ieri.",
                options: ["Me lo", "Te lo", "Glielo", "Ce lo"],
                answer: "Glielo"
            },
            {
                id: "it-uq-b1-9-3", level: "B1",
                prompt: "Affirmative imperative: 'Give it to me!' (da' + me + lo)",
                options: ["Me lo dai.", "Dammi lo.", "Dammelo.", "Diglielo."],
                answer: "Dammelo."
            },
            {
                id: "it-uq-b1-9-4", level: "B1",
                prompt: "Complete: 'La lettera? ___ ho scritta ieri.' (gliela + avere)",
                options: ["Gliela", "Gliel'", "Glielo", "Le la"],
                answer: "Gliel'"
            },
            {
                id: "it-uq-b1-9-5", level: "B1",
                prompt: "What does 'restituire (qc. a qn.)' mean?",
                options: ["to lend (sth to sb)", "to return (sth to sb)", "to show (sth to sb)", "to promise (sth to sb)"],
                answer: "to return (sth to sb)"
            },
        ]
    },

    {
        id: "it-b1-u10",
        level: "B1",
        order: 10,
        title: "La persona di cui ti ho parlato — relativi avanzati",
        description: "Connect complex sentences with cui (after prepositions), il cui/la cui (possessive whose), il quale/la quale (formal), and quello che/ciò che (abstract reference). Essential for authentic Italian prose and argument.",
        grammarIds: ["it-g-b1-10"],
        vocabIds: ["it-v-b1-046", "it-v-b1-047", "it-v-b1-048", "it-v-b1-049", "it-v-b1-050"],
        verbIds: [],
        checkpointId: "it-cp-b1-3",
        testQuestions: [
            {
                id: "it-uq-b1-10-1", level: "B1",
                prompt: "Complete: 'È il libro ___ ho bisogno.' (di + cui)",
                options: ["che", "cui", "di cui", "del quale"],
                answer: "di cui"
            },
            {
                id: "it-uq-b1-10-2", level: "B1",
                prompt: "Complete: 'È un amico ___ padre è medico.' (whose father)",
                options: ["il cui", "di cui", "che il", "il quale"],
                answer: "il cui"
            },
            {
                id: "it-uq-b1-10-3", level: "B1",
                prompt: "Complete: '___ mi piace di questa città è l'atmosfera.'",
                options: ["Chi", "Cui", "Quello che", "Ciò"],
                answer: "Quello che"
            },
            {
                id: "it-uq-b1-10-4", level: "B1",
                prompt: "When is 'il quale / la quale' typically used instead of 'cui'?",
                options: ["Always in spoken Italian", "In formal/written Italian or to avoid ambiguity", "Only with animate nouns", "Never — they are always interchangeable"],
                answer: "In formal/written Italian or to avoid ambiguity"
            },
            {
                id: "it-uq-b1-10-5", level: "B1",
                prompt: "What does 'rendersi conto di' mean?",
                options: ["to count on", "to realise / become aware of", "to render useless", "to report on"],
                answer: "to realise / become aware of"
            },
        ]
    },

    // ── Block 4: Raccontare, sfumare, spiegare ─────────────────────────────────

    {
        id: "it-b1-u11",
        level: "B1",
        order: 11,
        title: "Mi ha detto che sarebbe venuto — il discorso indiretto",
        description: "Report what someone said, asked, or ordered. Apply tense backshift correctly (presente → imperfetto; futuro → condizionale; p.p. → trapassato). Change time expressions and use di + infinito for reported commands.",
        grammarIds: ["it-g-b1-11"],
        vocabIds: ["it-v-b1-051", "it-v-b1-052", "it-v-b1-053", "it-v-b1-054", "it-v-b1-055"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-11-1", level: "B1",
                prompt: "Transform: 'Sono stanco.' → Ha detto che ___.",
                options: ["è stanco", "era stanco", "fu stanco", "sarà stanco"],
                answer: "era stanco"
            },
            {
                id: "it-uq-b1-11-2", level: "B1",
                prompt: "Transform: 'Verrò domani.' → Ha detto che ___.",
                options: ["verrà l'indomani", "veniva l'indomani", "sarebbe venuto l'indomani", "viene domani"],
                answer: "sarebbe venuto l'indomani"
            },
            {
                id: "it-uq-b1-11-3", level: "B1",
                prompt: "Transform: 'Hai fame?' → Mi ha chiesto ___.",
                options: ["se ho fame", "se avevo fame", "se avessi fame", "se avrò fame"],
                answer: "se avevo fame"
            },
            {
                id: "it-uq-b1-11-4", level: "B1",
                prompt: "Transform command: 'Chiudi la porta!' → Mi ha detto ___.",
                options: ["che chiudesse la porta", "di chiudere la porta", "che chiuda la porta", "chiudere la porta"],
                answer: "di chiudere la porta"
            },
            {
                id: "it-uq-b1-11-5", level: "B1",
                prompt: "When the reporting verb is in the PRESENT, tense backshift:",
                options: ["always applies", "never applies", "only applies to the futuro", "depends on the verb"],
                answer: "never applies"
            },
        ]
    },

    {
        id: "it-b1-u12",
        level: "B1",
        order: 12,
        title: "Stavo camminando quando... — gerundio e stare + gerundio",
        description: "Use the gerundio for simultaneous actions: manner (studiando), cause (non avendo dormito), and concession (pur essendo stanco). Master stava + gerundio for B1 narrative. Apply the same-subject rule.",
        grammarIds: ["it-g-b1-12"],
        vocabIds: ["it-v-b1-056", "it-v-b1-057", "it-v-b1-058", "it-v-b1-059", "it-v-b1-060"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-12-1", level: "B1",
                prompt: "Complete: '___ ogni giorno, ha migliorato molto.' (studiare — gerundio di modo)",
                options: ["Studio", "Studiando", "Studiato", "Da studiare"],
                answer: "Studiando"
            },
            {
                id: "it-uq-b1-12-2", level: "B1",
                prompt: "Complete narrative: '___ quando ho sentito dei passi.' (camminare — imperfetto progressivo)",
                options: ["Camminavo", "Ho camminato", "Stavo camminando", "Stavo passeggiando"],
                answer: "Stavo camminando"
            },
            {
                id: "it-uq-b1-12-3", level: "B1",
                prompt: "What does 'pur essendo stanco, è venuto' mean?",
                options: ["Because he was tired, he came", "Even though he was tired, he came", "While being tired, he came", "He came and was tired"],
                answer: "Even though he was tired, he came"
            },
            {
                id: "it-uq-b1-12-4", level: "B1",
                prompt: "Which sentence violates the same-subject rule for the gerundio?",
                options: ["Camminando, ho incontrato Marco.", "Non avendo dormito, era stanco.", "Camminando per strada, è cominciato a piovere.", "Pur sapendo la verità, ha taciuto."],
                answer: "Camminando per strada, è cominciato a piovere."
            },
            {
                id: "it-uq-b1-12-5", level: "B1",
                prompt: "What is the gerundio of 'fare'?",
                options: ["fato", "faendo", "facendo", "fatto"],
                answer: "facendo"
            },
        ]
    },

    {
        id: "it-b1-u13",
        level: "B1",
        order: 13,
        title: "Pertanto / eppure — connettori logici B1",
        description: "Articulate cause (poiché, dato che), consequence (pertanto, di conseguenza), concession (eppure, tuttavia), and opposition (mentre, invece) with B1-level discourse connectors. These tools are the architecture of structured Italian argument.",
        grammarIds: ["it-g-b1-13"],
        vocabIds: ["it-v-b1-061", "it-v-b1-062", "it-v-b1-063", "it-v-b1-064", "it-v-b1-065"],
        verbIds: [],
        checkpointId: "it-cp-b1-4",
        testQuestions: [
            {
                id: "it-uq-b1-13-1", level: "B1",
                prompt: "Which connector expresses CAUSE in a formal register?",
                options: ["eppure", "poiché", "pertanto", "invece"],
                answer: "poiché"
            },
            {
                id: "it-uq-b1-13-2", level: "B1",
                prompt: "Which connector expresses CONSEQUENCE formally?",
                options: ["tuttavia", "dato che", "pertanto", "benché"],
                answer: "pertanto"
            },
            {
                id: "it-uq-b1-13-3", level: "B1",
                prompt: "What is the register of 'tuttavia'?",
                options: ["informal / spoken", "formal / written", "neutral", "literary only"],
                answer: "formal / written"
            },
            {
                id: "it-uq-b1-13-4", level: "B1",
                prompt: "Complete: 'Era stanco; ___ ha continuato.' (expressive — and yet)",
                options: ["tuttavia", "pertanto", "eppure", "quindi"],
                answer: "eppure"
            },
            {
                id: "it-uq-b1-13-5", level: "B1",
                prompt: "What does 'ciononostante' mean?",
                options: ["as a consequence", "nevertheless / nonetheless", "on the other hand", "given that"],
                answer: "nevertheless / nonetheless"
            },
        ]
    },

    // ── Block 5: L'italiano autentico ──────────────────────────────────────────

    {
        id: "it-b1-u14",
        level: "B1",
        order: 14,
        title: "La sento cantare / far fare — verbi di percezione e causativo",
        description: "Express what you perceive someone doing (sentire/vedere/guardare + object + infinito) and cause something to happen (fare + infinito). Use lasciare + infinito for 'to let/allow'. Apply pronouns correctly in these constructions.",
        grammarIds: ["it-g-b1-14"],
        vocabIds: ["it-v-b1-066", "it-v-b1-067", "it-v-b1-068", "it-v-b1-069", "it-v-b1-070"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-14-1", level: "B1",
                prompt: "Complete: 'Ho sentito qualcuno ___ alla porta.' (bussare)",
                options: ["bussare", "bussando", "bussato", "bussasse"],
                answer: "bussare"
            },
            {
                id: "it-uq-b1-14-2", level: "B1",
                prompt: "With a pronoun: 'Ho sentito Maria cantare' → ___ ho sentita cantare.",
                options: ["La", "Le", "L'", "Gli"],
                answer: "L'"
            },
            {
                id: "it-uq-b1-14-3", level: "B1",
                prompt: "What does 'Faccio riparare la macchina' mean?",
                options: ["I repaired the car.", "I'm having the car repaired.", "I was repairing the car.", "I let the car be repaired."],
                answer: "I'm having the car repaired."
            },
            {
                id: "it-uq-b1-14-4", level: "B1",
                prompt: "In a causative construction, 'fatto' (participio of fare) is:",
                options: ["variable — agrees with object", "invariable — never changes", "invariable — but agrees with subject", "always feminine"],
                answer: "invariable — never changes"
            },
            {
                id: "it-uq-b1-14-5", level: "B1",
                prompt: "What does 'in fondo' mean in conversation?",
                options: ["at the bottom", "after all / basically", "in the end (formal)", "in depth"],
                answer: "after all / basically"
            },
        ]
    },

    {
        id: "it-b1-u15",
        level: "B1",
        order: 15,
        title: "Mettere le idee in ordine — discorso B1",
        description: "Structure spoken and written argument at B1 level: hedging (mi sembra che, in una certa misura), organising (da un lato/dall'altro, in primo luogo), concluding (in definitiva), and reformulating (cioè, in altre parole). Bridge from grammar knowledge to discourse fluency.",
        grammarIds: ["it-g-b1-15"],
        vocabIds: ["it-v-b1-071", "it-v-b1-072", "it-v-b1-073", "it-v-b1-074", "it-v-b1-075"],
        verbIds: [],
        testQuestions: [
            {
                id: "it-uq-b1-15-1", level: "B1",
                prompt: "Which phrase hedges an opinion (not stating as absolute fact)?",
                options: ["È evidente che", "È certo che", "Mi sembra che", "È indiscutibile che"],
                answer: "Mi sembra che"
            },
            {
                id: "it-uq-b1-15-2", level: "B1",
                prompt: "Complete the two-sided argument: 'Da un lato, i vantaggi sono reali. ___, mancano le garanzie.'",
                options: ["Pertanto", "Dall'altro", "In definitiva", "In primo luogo"],
                answer: "Dall'altro"
            },
            {
                id: "it-uq-b1-15-3", level: "B1",
                prompt: "Which marker is used to CONCLUDE an argument?",
                options: ["da un lato", "in definitiva", "cioè", "per quanto riguarda"],
                answer: "in definitiva"
            },
            {
                id: "it-uq-b1-15-4", level: "B1",
                prompt: "What is 'cioè' most commonly used for in spoken Italian?",
                options: ["to conclude an argument", "clarification, self-correction, or hesitation", "introducing a list", "expressing strong disagreement"],
                answer: "clarification, self-correction, or hesitation"
            },
            {
                id: "it-uq-b1-15-5", level: "B1",
                prompt: "What does 'sfumare' mean in the context of argument?",
                options: ["to fade / disappear", "to nuance / qualify", "to shout / emphasise", "to deny"],
                answer: "to nuance / qualify"
            },
        ]
    },

    {
        id: "it-b1-u16",
        level: "B1",
        order: 16,
        title: "Il mio italiano — consolidamento B1",
        description: "Integrate and own all B1 grammar through self-audit, integrated writing and speaking tasks, and reflection on common fossilisation errors. No new grammar — the goal is fluency and confidence before the final units.",
        grammarIds: [],
        vocabIds: ["it-v-b1-076", "it-v-b1-077", "it-v-b1-078", "it-v-b1-079", "it-v-b1-080"],
        verbIds: [],
        checkpointId: "it-cp-b1-5",
        testQuestions: [
            {
                id: "it-uq-b1-16-1", level: "B1",
                prompt: "Identify the error: 'Voglio che tu viene subito.'",
                options: ["'voglio' should be 'vorrei'", "'viene' should be 'venga' (congiuntivo)", "'subito' is in the wrong position", "No error — the sentence is correct"],
                answer: "'viene' should be 'venga' (congiuntivo)"
            },
            {
                id: "it-uq-b1-16-2", level: "B1",
                prompt: "Identify the error: 'Gli lo ho detto ieri.'",
                options: ["'gli' should be 'le'", "'gli lo' should be 'glielo'", "the auxiliary is wrong", "'ieri' should be 'oggi'"],
                answer: "'gli lo' should be 'glielo'"
            },
            {
                id: "it-uq-b1-16-3", level: "B1",
                prompt: "Identify the error: 'Se avrei tempo, viaggerei di più.'",
                options: ["'viaggerei' should be 'viaggerò'", "'avrei' should be 'avessi' (cong. imperf.)", "'tempo' should be preceded by del", "No error"],
                answer: "'avrei' should be 'avessi' (cong. imperf.)"
            },
            {
                id: "it-uq-b1-16-4", level: "B1",
                prompt: "A B1 Italian speaker CAN:",
                options: ["use only present and past tenses", "narrate stories with background, events, and backstory", "understand written Italian only", "produce congiuntivo only in writing"],
                answer: "narrate stories with background, events, and backstory"
            },
            {
                id: "it-uq-b1-16-5", level: "B1",
                prompt: "Which connector distinguishes B1 from A2 Italian most clearly?",
                options: ["ma", "quindi", "pertanto / di conseguenza", "anche"],
                answer: "pertanto / di conseguenza"
            },
        ]
    },

    {
        id: "it-b1-u17",
        level: "B1",
        order: 17,
        title: "L'italiano vivo — gergo, espressioni e accenti regionali",
        description: "Understand colloquial Italian, use idioms and discourse particles naturally (boh, dai, mica, eppure), and recognise regional variety: Roma, Napoli, Milano, Sicilia. This is where Italian stops being a school subject and becomes a living language.",
        grammarIds: ["it-g-b1-16"],
        vocabIds: ["it-v-b1-081", "it-v-b1-082", "it-v-b1-083", "it-v-b1-084", "it-v-b1-085"],
        verbIds: [],
        checkpointId: "it-cp-b1-6",
        testQuestions: [
            {
                id: "it-uq-b1-17-1", level: "B1",
                prompt: "What does 'boh' express in conversation?",
                options: ["agreement", "strong disagreement", "uncertainty / I don't know", "surprise"],
                answer: "uncertainty / I don't know"
            },
            {
                id: "it-uq-b1-17-2", level: "B1",
                prompt: "What does 'meno male' mean?",
                options: ["unfortunately", "thank goodness", "not bad", "even worse"],
                answer: "thank goodness"
            },
            {
                id: "it-uq-b1-17-3", level: "B1",
                prompt: "'In bocca al lupo' is replied to with:",
                options: ["grazie", "prego", "crepi", "boh"],
                answer: "crepi"
            },
            {
                id: "it-uq-b1-17-4", level: "B1",
                prompt: "What does 'costare un occhio della testa' mean?",
                options: ["to look carefully", "to cost a fortune", "to see something clearly", "to be very important"],
                answer: "to cost a fortune"
            },
            {
                id: "it-uq-b1-17-5", level: "B1",
                prompt: "Which marker of informal Italian speech is used for approximation (like 'kind of / like')?",
                options: ["eppure", "tipo", "insomma", "pertanto"],
                answer: "tipo"
            },
        ]
    },
]
