import { QuizQuestion } from "../../../types"

// 4 questions per CEFR level = 20 total
export const placementQuestions: QuizQuestion[] = [
    // --- A1 ---
    { id: "it-p-a1-1", level: "A1", prompt: "Complete: 'Io ___ italiano.' (essere)", options: ["è", "sei", "sono", "siamo"], answer: "sono" },
    { id: "it-p-a1-2", level: "A1", prompt: "Which article goes before 'studente' (masc.)?", options: ["Il", "La", "Lo", "I"], answer: "Lo" },
    { id: "it-p-a1-3", level: "A1", prompt: "Complete: 'Loro ___ due gatti.' (avere)", options: ["abbiamo", "avete", "hanno", "ha"], answer: "hanno" },
    { id: "it-p-a1-4", level: "A1", prompt: "Complete: 'Tu ___ l'italiano.' (parlare)", options: ["parla", "parli", "parliamo", "parlate"], answer: "parli" },

    // --- A2 ---
    { id: "it-p-a2-1", level: "A2", prompt: "Complete (passato prossimo): 'Ieri lei ___ la pizza.' (mangiare)", options: ["mangiava", "mangia", "ha mangiato", "mangiò"], answer: "ha mangiato" },
    { id: "it-p-a2-2", level: "A2", prompt: "Complete (imperfetto): 'Da bambino, io ___ ogni giorno.' (giocare)", options: ["gioco", "giocavo", "ho giocato", "giocherò"], answer: "giocavo" },
    { id: "it-p-a2-3", level: "A2", prompt: "Complete (reflexive + passato prossimo): 'Ieri mattina mi ___ tardi.' (alzarsi)", options: ["alzavo", "alzo", "sono alzato/a", "mi alzerei"], answer: "sono alzato/a" },
    { id: "it-p-a2-4", level: "A2", prompt: "Complete: 'Non ___ venire stasera perché ho troppo lavoro.' (potere — io)", options: ["posso", "puoi", "può", "potevo"], answer: "posso" },

    // --- B1 ---
    { id: "it-p-b1-1", level: "B1", prompt: "Complete (congiuntivo): 'Voglio che tu ___ .' (venire)", options: ["vieni", "venga", "venissi", "verrai"], answer: "venga" },
    { id: "it-p-b1-2", level: "B1", prompt: "Complete (condizionale): 'Con più soldi, ___ di più.' (viaggiare — io)", options: ["viaggio", "viaggerò", "viaggerei", "viaggiavo"], answer: "viaggerei" },
    { id: "it-p-b1-3", level: "B1", prompt: "Complete (trapassato prossimo): 'Quando sono arrivato, lui ___ già mangiato.'", options: ["ha", "aveva", "avrà", "avrebbe"], answer: "aveva" },
    { id: "it-p-b1-4", level: "B1", prompt: "Complete: 'La città ___ vivo si chiama Roma.'", options: ["che", "cui", "in cui", "dove"], answer: "in cui" },

    // --- B2 ---
    { id: "it-p-b2-1", level: "B2", prompt: "Complete (condizionale passato): 'Se avessi saputo, ___ venuto.' (essere — io)", options: ["sarei", "sarò", "sono", "ero"], answer: "sarei" },
    { id: "it-p-b2-2", level: "B2", prompt: "Complete (congiuntivo trapassato — past regret): 'Se ___ (partire, noi) prima, avremmo preso il treno.'", options: ["partivamo", "fossimo partiti", "eravamo partiti", "saremmo partiti"], answer: "fossimo partiti" },
    { id: "it-p-b2-3", level: "B2", prompt: "Complete (congiuntivo imperfetto — Type 2 si-clause): 'Se ___ (avere, io) più tempo, viaggerei di più.'", options: ["ho", "avrò", "avessi", "avrei"], answer: "avessi" },
    { id: "it-p-b2-4", level: "B2", prompt: "Complete the formal impersonal structure: 'Si ___ che la situazione stia migliorando.' (ritenere)", options: ["ritiene", "è ritenuto", "riteniamo", "ritenga"], answer: "ritiene" },

    // --- C1 ---
    { id: "it-p-c1-1", level: "C1", prompt: "Which sentence correctly uses the congiuntivo passato?", options: ["Penso che sia venuto.", "Penso che è venuto.", "Penso che venga.", "Penso che venisse."], answer: "Penso che sia venuto." },
    { id: "it-p-c1-2", level: "C1", prompt: "What does 'nonostante' mean?", options: ["because of", "in spite of", "thanks to", "instead of"], answer: "in spite of" },
    { id: "it-p-c1-3", level: "C1", prompt: "Which is correct? (main clause: 'Pensava che' + simultaneous past action)", options: ["Pensava che lavora ancora.", "Pensava che lavorasse ancora.", "Pensava che abbia lavorato.", "Pensava che lavorerà."], answer: "Pensava che lavorasse ancora." },
    { id: "it-p-c1-4", level: "C1", prompt: "In formal Italian, which passive structure emphasises the ongoing action rather than the resulting state?", options: ["essere + participio", "venire + participio", "stare + participio", "risultare + participio"], answer: "venire + participio" },
]
