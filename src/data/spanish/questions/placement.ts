// Spanish placement questions.
// data/spanish/questions/placement.ts
import { QuizQuestion } from "../../../types"

// 10 placement questions — 2 per CEFR level (A1, A2, B1, B2, C1).
// These determine the user's starting level before the course begins.

export const placementQuestions: QuizQuestion[] = [
    {
        id: "es-p-a1-1",
        level: "A1",
        prompt: "What does '¿Cómo estás?' mean?",
        options: ["What is your name?", "How are you?", "Where are you from?", "How old are you?"],
        answer: "How are you?"
    },
    {
        id: "es-p-a1-2",
        level: "A1",
        prompt: "Which verb means 'to be' for permanent traits (profession, origin)?",
        options: ["estar", "tener", "ser", "hacer"],
        answer: "ser"
    },
    {
        id: "es-p-a2-1",
        level: "A2",
        prompt: "Complete: 'Ayer yo ___ (comer) una pizza.'",
        options: ["como", "comí", "comía", "comeré"],
        answer: "comí"
    },
    {
        id: "es-p-a2-2",
        level: "A2",
        prompt: "How do you say 'I like music' using gustar?",
        options: ["Yo gusto música.", "Me gusta la música.", "Me gustan la música.", "Gusta me música."],
        answer: "Me gusta la música."
    },
    {
        id: "es-p-b1-1",
        level: "B1",
        prompt: "Which tense describes habitual or ongoing past actions (e.g. 'I used to play football')?",
        options: ["Preterite", "Present", "Imperfect", "Future"],
        answer: "Imperfect"
    },
    {
        id: "es-p-b1-2",
        level: "B1",
        prompt: "Complete: 'Quiero que tú ___ (venir) a la fiesta.'",
        options: ["vienes", "vengas", "vendrás", "ven"],
        answer: "vengas"
    },
    {
        id: "es-p-b2-1",
        level: "B2",
        prompt: "Complete (past regret): 'Si ___ (saber, yo) la verdad, no habría venido.'",
        options: ["sabía", "supiera", "hubiera sabido", "habría sabido"],
        answer: "hubiera sabido"
    },
    {
        id: "es-p-b2-2",
        level: "B2",
        prompt: "Which mood expresses hypothetical situations in the past?",
        options: ["Subjuntivo presente", "Condicional simple", "Condicional compuesto", "Indicativo"],
        answer: "Condicional compuesto"
    },
    {
        id: "es-p-c1-1",
        level: "C1",
        prompt: "Complete: 'Si hubiera sabido, ___ (venir) antes.'",
        options: ["habría venido", "vendría", "hubiera venido", "vengo"],
        answer: "habría venido"
    },
    {
        id: "es-p-c1-2",
        level: "C1",
        prompt: "What is the passive voice of 'Construyeron el puente'?",
        options: ["El puente construyeron.", "El puente fue construido.", "El puente se construyó.", "Both B and C are correct"],
        answer: "Both B and C are correct"
    }
]
