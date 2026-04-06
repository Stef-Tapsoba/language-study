// src/data/french/questions/placement.ts — 4 questions per CEFR level = 20 total
import { QuizQuestion } from "../../../types"

export const placementQuestions: QuizQuestion[] = [
    { id: "fr-p-a1-1", level: "A1", prompt: "What does 'Bonjour' mean?", options: ["Thank you", "Goodbye", "Hello", "Please"], answer: "Hello" },
    { id: "fr-p-a1-2", level: "A1", prompt: "Complete: 'Je ___ (être) étudiant.'", options: ["est", "es", "suis", "sommes"], answer: "suis" },
    { id: "fr-p-a1-3", level: "A1", prompt: "Complete: 'Nous ___ le français.' (parler)", options: ["parle", "parlez", "parlons", "parlent"], answer: "parlons" },
    { id: "fr-p-a1-4", level: "A1", prompt: "What does 'un chat' mean?", options: ["a dog", "a cat", "a horse", "a rabbit"], answer: "a cat" },
    { id: "fr-p-a2-1", level: "A2", prompt: "Complete using passé composé: 'Hier, elle ___ (arriver) à l'heure.'", options: ["arrivait", "a arrivé", "est arrivée", "arriva"], answer: "est arrivée" },
    { id: "fr-p-a2-2", level: "A2", prompt: "What is the feminine form of 'grand'?", options: ["grande", "grands", "grandez", "grandi"], answer: "grande" },
    { id: "fr-p-a2-3", level: "A2", prompt: "Complete (imparfait — habitual): 'Quand il était enfant, il ___ souvent à la plage.' (aller)", options: ["va", "est allé", "allait", "ira"], answer: "allait" },
    { id: "fr-p-a2-4", level: "A2", prompt: "Complete: 'Elle ne veut ___ café.'", options: ["pas du", "pas de", "pas le", "pas un"], answer: "pas de" },
    { id: "fr-p-b1-1", level: "B1", prompt: "Complete using the subjunctive: 'Il faut que tu ___ (venir).'", options: ["viens", "viendras", "viennes", "venais"], answer: "viennes" },
    { id: "fr-p-b1-2", level: "B1", prompt: "What does 'cependant' mean?", options: ["therefore", "however", "although", "because"], answer: "however" },
    { id: "fr-p-b1-3", level: "B1", prompt: "Complete (plus-que-parfait): 'Quand je suis arrivé, il ___ déjà parti.'", options: ["a été", "était", "avait été", "serait"], answer: "était" },
    { id: "fr-p-b1-4", level: "B1", prompt: "Complete: 'La ville ___ j'habite est magnifique.'", options: ["qui", "que", "dont", "où"], answer: "où" },
    { id: "fr-p-b2-1", level: "B2", prompt: "Complete using the past conditional: 'Si j'avais su, je ___ venu.'", options: ["serai", "suis", "serais", "serez"], answer: "serais" },
    { id: "fr-p-b2-2", level: "B2", prompt: "Complete using the subjonctif passé: 'Bien qu'il ___ (partir) tôt, il est quand même arrivé en retard.'", options: ["est parti", "soit parti", "partait", "ait parti"], answer: "soit parti" },
    { id: "fr-p-b2-3", level: "B2", prompt: "Which is the correct nominalised form of 'réduire les coûts'?", options: ["La réduction des coûts", "Le réduire des coûts", "La réduisance des coûts", "Le réduit des coûts"], answer: "La réduction des coûts" },
    { id: "fr-p-b2-4", level: "B2", prompt: "Complete: 'C'est l'entreprise pour ___ il travaille depuis dix ans.'", options: ["qui", "laquelle", "dont", "que"], answer: "laquelle" },
    { id: "fr-p-c1-1", level: "C1", prompt: "Which sentence correctly uses the past subjunctive?", options: ["Je doute qu'il a fini.", "Je doute qu'il ait fini.", "Je doute qu'il aura fini.", "Je doute qu'il avait fini."], answer: "Je doute qu'il ait fini." },
    { id: "fr-p-c1-2", level: "C1", prompt: "What is the French equivalent of 'in spite of'?", options: ["grâce à", "à cause de", "malgré", "afin de"], answer: "malgré" },
    { id: "fr-p-c1-3", level: "C1", prompt: "What is the passé simple of 'avoir' (ils/elles)?", options: ["avèrent", "eurent", "auraient", "avaient"], answer: "eurent" },
    { id: "fr-p-c1-4", level: "C1", prompt: "Complete (formal structure): 'Il convient ___ noter les limites de cette analyse.'", options: ["à", "de", "pour", "que"], answer: "de" },
]
