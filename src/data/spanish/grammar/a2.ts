// Spanish A2 grammar lessons.
// data/spanish/grammar/a2.ts
import { GrammarLesson } from "../../../types"

// A2 grammar — 4 lessons.
// "Ir a + infinitive" has moved to A1 (grammar/a1.ts, lesson es-g-a1-12) as a bridge unit.

export const a2Grammar: GrammarLesson[] = [
    {
        id: "es-g-a2-1",
        level: "A2",
        title: "Preterite Tense (Pretérito Indefinido)",
        explanation: "The preterite expresses completed past actions at a specific moment or time. Regular -ar verbs take: -é, -aste, -ó, -amos, -asteis, -aron. Regular -er/-ir verbs take: -í, -iste, -ió, -imos, -isteis, -ieron. Many common verbs are irregular (ir/ser share forms: fui, fuiste, fue…).",
        examples: [
            { native: "Ayer comí pizza.", translation: "Yesterday I ate pizza." },
            { native: "Ella habló con el profesor.", translation: "She spoke with the teacher." },
            { native: "Fuimos al cine el sábado.", translation: "We went to the cinema on Saturday." },
            { native: "¿A qué hora llegaste?", translation: "What time did you arrive?" },
            { native: "Los niños durmieron bien.", translation: "The children slept well." }
        ]
    },
    {
        id: "es-g-a2-2",
        level: "A2",
        title: "Reflexive Verbs",
        explanation: "Reflexive verbs indicate the subject acts on itself. They are identified by the reflexive pronoun '-se' on the infinitive. Use me, te, se, nos, os, se before the conjugated verb. Many daily routine verbs are reflexive.",
        examples: [
            { native: "Me llamo Carlos.", translation: "My name is Carlos. (I call myself Carlos.)" },
            { native: "Me levanto a las siete.", translation: "I get up at seven." },
            { native: "Ella se viste rápido.", translation: "She gets dressed quickly." },
            { native: "Nos acostamos tarde.", translation: "We go to bed late." },
            { native: "¿A qué hora te duchas?", translation: "What time do you shower?" }
        ]
    },
    {
        id: "es-g-a2-3",
        level: "A2",
        title: "Gustar and Similar Verbs",
        explanation: "Gustar means 'to be pleasing to'. In Spanish, the thing liked is the grammatical subject, not the person. Use indirect object pronouns: me, te, le, nos, os, les. Use gusta with singular nouns/infinitives and gustan with plural nouns. Encantar, molestar, and interesar work the same way.",
        examples: [
            { native: "Me gusta el café.", translation: "I like coffee. (Coffee is pleasing to me.)" },
            { native: "Te gustan los libros.", translation: "You like books." },
            { native: "Le encanta bailar.", translation: "He / She loves to dance." },
            { native: "Nos gusta mucho viajar.", translation: "We really like travelling." },
            { native: "¿Te molesta el ruido?", translation: "Does the noise bother you?" }
        ]
    },
    {
        id: "es-g-a2-4",
        level: "A2",
        title: "Direct Object Pronouns",
        explanation: "Direct object pronouns replace the noun receiving the action: me, te, lo/la, nos, os, los/las. They go before the conjugated verb or attached to an infinitive or gerund. Lo and la agree in gender with the noun they replace.",
        examples: [
            { native: "Lo veo todos los días.", translation: "I see him / it every day." },
            { native: "¿La llamas tú?", translation: "Are you calling her / it?" },
            { native: "Quiero verla.", translation: "I want to see her / it." },
            { native: "Nos ayudan mucho.", translation: "They help us a lot." },
            { native: "¿Dónde los compraste?", translation: "Where did you buy them?" }
        ]
    }
]
