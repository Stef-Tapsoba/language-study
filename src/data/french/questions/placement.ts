// src/data/french/questions/placement.ts
import { QuizQuestion } from "../../../types"

export const placementQuestions: QuizQuestion[] = [
    { id: "fr-p-a1-1", level: "A1", prompt: "Comment dit-on 'hello' en français?", options: ["Merci", "Bonjour", "Au revoir", "S'il vous plaît"], answer: "Bonjour" },
    { id: "fr-p-a1-2", level: "A1", prompt: "Complete: 'Je ___ (être) étudiant.'", options: ["est", "es", "suis", "sommes"], answer: "suis" },
    { id: "fr-p-a2-1", level: "A2", prompt: "Complete (passé composé): 'Hier, elle ___ (arriver) à l'heure.'", options: ["arrivait", "a arrivé", "est arrivée", "arriva"], answer: "est arrivée" },
    { id: "fr-p-a2-2", level: "A2", prompt: "Quelle est la forme féminine de 'grand'?", options: ["grande", "grands", "grandez", "grandi"], answer: "grande" },
    { id: "fr-p-b1-1", level: "B1", prompt: "Complete (subjonctif): 'Il faut que tu ___ (venir).'", options: ["viens", "viendras", "viennes", "venais"], answer: "viennes" },
    { id: "fr-p-b1-2", level: "B1", prompt: "Que signifie 'cependant'?", options: ["therefore", "however", "although", "because"], answer: "however" },
    { id: "fr-p-b2-1", level: "B2", prompt: "Complete (conditionnel passé): 'Si j'avais su, je ___ venu.'", options: ["serai", "suis", "serais", "serez"], answer: "serais" },
    { id: "fr-p-b2-2", level: "B2", prompt: "Quel temps s'utilise pour exprimer une action en cours dans le passé?", options: ["Passé composé", "Imparfait", "Passé simple", "Plus-que-parfait"], answer: "Imparfait" },
    { id: "fr-p-c1-1", level: "C1", prompt: "Quelle phrase utilise correctement le subjonctif passé?", options: ["Je doute qu'il a fini.", "Je doute qu'il ait fini.", "Je doute qu'il aura fini.", "Je doute qu'il avait fini."], answer: "Je doute qu'il ait fini." },
    { id: "fr-p-c1-2", level: "C1", prompt: "Quel est l'équivalent de 'in spite of'?", options: ["grâce à", "à cause de", "malgré", "afin de"], answer: "malgré" },
]
