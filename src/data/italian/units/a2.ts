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
            { id: "it-uq-a2-2-5", level: "A2", prompt: "Complete (imperfetto): 'Pioveva quando io ___.' (uscire)", options: ["esco", "uscivo", "sono uscito", "uscirò"], answer: "uscivo" }
        ]
    },
    {
        id: "it-a2-u3",
        level: "A2",
        order: 3,
        title: "Reflexive Verbs & Daily Routines",
        description: "Use reflexive verbs to describe daily routines: svegliarsi, alzarsi, vestirsi, and more.",
        grammarIds: ["it-g-a2-3"],
        vocabIds: ["it-v-a2-9", "it-v-a2-10"],
        verbIds: [],
        testQuestions: [
            { id: "it-uq-a2-3-1", level: "A2", prompt: "Complete (reflexive): 'Io ___ alle sette.' (svegliarsi)", options: ["sveglia", "si sveglio", "mi sveglio", "ti sveglio"], answer: "mi sveglio" },
            { id: "it-uq-a2-3-2", level: "A2", prompt: "Complete: 'Come ___ ?' (chiamarsi — tu)", options: ["ti chiamo", "si chiama", "ti chiami", "mi chiamo"], answer: "ti chiami" },
            { id: "it-uq-a2-3-3", level: "A2", prompt: "How do you say 'My name is Marco'?", options: ["Chiamo Marco.", "Si chiama Marco.", "Ti chiami Marco.", "Mi chiamo Marco."], answer: "Mi chiamo Marco." },
            { id: "it-uq-a2-3-4", level: "A2", prompt: "Complete: 'Loro ___ in fretta.' (vestirsi)", options: ["mi vesto", "si vestono", "si veste", "vi vestite"], answer: "si vestono" },
            { id: "it-uq-a2-3-5", level: "A2", prompt: "In passato prossimo, reflexive verbs use which auxiliary?", options: ["Avere", "Fare", "Essere", "Stare"], answer: "Essere" }
        ]
    },
    {
        id: "it-a2-u4",
        level: "A2",
        order: 4,
        title: "The Simple Future",
        description: "Express future plans and predictions using the futuro semplice.",
        grammarIds: ["it-g-a2-4"],
        vocabIds: ["it-v-a2-1", "it-v-a2-2", "it-v-a2-3"],
        verbIds: ["it-vb-a2-1"],
        testQuestions: [
            { id: "it-uq-a2-4-1", level: "A2", prompt: "Complete (futuro): 'Domani loro ___.' (partire)", options: ["partono", "partiranno", "sono partiti", "partivano"], answer: "partiranno" },
            { id: "it-uq-a2-4-2", level: "A2", prompt: "Complete: 'Io ___ a Roma la prossima settimana.' (andare — futuro)", options: ["vado", "sono andato", "andrò", "andrei"], answer: "andrò" },
            { id: "it-uq-a2-4-3", level: "A2", prompt: "What is the futuro semplice of 'essere' (noi)?", options: ["siamo", "eravamo", "saremo", "saremmo"], answer: "saremo" },
            { id: "it-uq-a2-4-4", level: "A2", prompt: "Complete: 'Quando ___, chiamami.' (arrivare — tu — futuro)", options: ["arrivi", "arriverai", "arrivavi", "sei arrivato"], answer: "arriverai" },
            { id: "it-uq-a2-4-5", level: "A2", prompt: "What does 'prenotare' mean?", options: ["To pay", "To arrive", "To book / reserve", "To travel"], answer: "To book / reserve" }
        ]
    }
]
