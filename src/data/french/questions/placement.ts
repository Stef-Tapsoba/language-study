// src/data/french/questions/placement.ts
import { QuizQuestion } from "../../../types"

export const placementQuestions: QuizQuestion[] = [
    { id: "fr-p-a1-1", level: "A1", prompt: "What does 'Bonjour' mean?", options: ["Thank you", "Goodbye", "Hello", "Please"], answer: "Hello" },
    { id: "fr-p-a1-2", level: "A1", prompt: "Complete: 'Je ___ (être) étudiant.'", options: ["est", "es", "suis", "sommes"], answer: "suis" },
    { id: "fr-p-a2-1", level: "A2", prompt: "Complete using passé composé: 'Hier, elle ___ (arriver) à l'heure.'", options: ["arrivait", "a arrivé", "est arrivée", "arriva"], answer: "est arrivée" },
    { id: "fr-p-a2-2", level: "A2", prompt: "What is the feminine form of 'grand'?", options: ["grande", "grands", "grandez", "grandi"], answer: "grande" },
    { id: "fr-p-b1-1", level: "B1", prompt: "Complete using the subjunctive: 'Il faut que tu ___ (venir).'", options: ["viens", "viendras", "viennes", "venais"], answer: "viennes" },
    { id: "fr-p-b1-2", level: "B1", prompt: "What does 'cependant' mean?", options: ["therefore", "however", "although", "because"], answer: "however" },
    { id: "fr-p-b2-1", level: "B2", prompt: "Complete using the past conditional: 'Si j'avais su, je ___ venu.'", options: ["serai", "suis", "serais", "serez"], answer: "serais" },
    { id: "fr-p-b2-2", level: "B2", prompt: "Complete using the subjonctif passé: 'Bien qu'il ___ (partir) tôt, il est quand même arrivé en retard.'", options: ["est parti", "soit parti", "partait", "ait parti"], answer: "soit parti" },
    { id: "fr-p-c1-1", level: "C1", prompt: "Which sentence correctly uses the past subjunctive?", options: ["Je doute qu'il a fini.", "Je doute qu'il ait fini.", "Je doute qu'il aura fini.", "Je doute qu'il avait fini."], answer: "Je doute qu'il ait fini." },
    { id: "fr-p-c1-2", level: "C1", prompt: "What is the French equivalent of 'in spite of'?", options: ["grâce à", "à cause de", "malgré", "afin de"], answer: "malgré" },
]
