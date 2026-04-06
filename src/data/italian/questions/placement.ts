import { QuizQuestion } from "../../../types"

export const placementQuestions: QuizQuestion[] = [
    // --- A1 ---
    { id: "it-p-a1-1", level: "A1", prompt: "Complete: 'Io ___ italiano.' (essere)", options: ["è", "sei", "sono", "siamo"], answer: "sono" },
    { id: "it-p-a1-2", level: "A1", prompt: "Which article goes before 'studente' (masc.)?", options: ["Il", "La", "Lo", "I"], answer: "Lo" },

    // --- A2 ---
    { id: "it-p-a2-1", level: "A2", prompt: "Complete (passato prossimo): 'Ieri lei ___ la pizza.' (mangiare)", options: ["mangiava", "mangia", "ha mangiato", "mangiò"], answer: "ha mangiato" },
    { id: "it-p-a2-2", level: "A2", prompt: "Complete (imperfetto): 'Da bambino, io ___ ogni giorno.' (giocare)", options: ["gioco", "giocavo", "ho giocato", "giocherò"], answer: "giocavo" },

    // --- B1 ---
    { id: "it-p-b1-1", level: "B1", prompt: "Complete (congiuntivo): 'Voglio che tu ___ .' (venire)", options: ["vieni", "venga", "venissi", "verrai"], answer: "venga" },
    { id: "it-p-b1-2", level: "B1", prompt: "Complete (condizionale): 'Con più soldi, ___ di più.' (viaggiare — io)", options: ["viaggio", "viaggerò", "viaggerei", "viaggiavo"], answer: "viaggerei" },

    // --- B2 ---
    { id: "it-p-b2-1", level: "B2", prompt: "Complete (condizionale passato): 'Se avessi saputo, ___ venuto.' (essere — io)", options: ["sarei", "sarò", "sono", "ero"], answer: "sarei" },
    { id: "it-p-b2-2", level: "B2", prompt: "Complete (congiuntivo trapassato — past regret): 'Se ___ (partire, noi) prima, avremmo preso il treno.'", options: ["partivamo", "fossimo partiti", "eravamo partiti", "saremmo partiti"], answer: "fossimo partiti" },

    // --- C1 ---
    { id: "it-p-c1-1", level: "C1", prompt: "Which sentence correctly uses the congiuntivo passato?", options: ["Penso che sia venuto.", "Penso che è venuto.", "Penso che venga.", "Penso che venisse."], answer: "Penso che sia venuto." },
    { id: "it-p-c1-2", level: "C1", prompt: "What does 'nonostante' mean?", options: ["because of", "in spite of", "thanks to", "instead of"], answer: "in spite of" }
]
