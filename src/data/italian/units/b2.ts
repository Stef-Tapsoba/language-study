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
    }
]
