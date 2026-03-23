// src/data/italian/listening/a1.ts
import { ListeningExercise } from "../../../types"

export const a1Listening: ListeningExercise[] = [
    {
        id: "it-l-a1-1",
        level: "A1",
        title: "Buongiorno! — dialogo di presentazione",
        script: "Buongiorno! Mi chiamo Luca. Come ti chiami? Mi chiamo Elena. Piacere, Elena! Piacere, Luca. Di dove sei? Sono di Roma. E tu? Anch'io sono di Roma! Quanti anni hai? Ho ventitré anni. E tu? Io ho ventisei anni. Lavori o studi? Studio all'università. E tu? Io lavoro in un ufficio.",
        translation: "Good morning! My name is Luca. What's your name? My name is Elena. Nice to meet you, Elena! Nice to meet you, Luca. Where are you from? I'm from Rome. And you? Me too, I'm from Rome! How old are you? I'm twenty-three years old. And you? I'm twenty-six years old. Do you work or study? I study at university. And you? I work in an office.",
        dialogue: [
            { speaker: "Luca", text: "Buongiorno! Mi chiamo Luca.", translation: "Good morning! My name is Luca." },
            { speaker: "Luca", text: "Come ti chiami?", translation: "What's your name?" },
            { speaker: "Elena", text: "Mi chiamo Elena.", translation: "My name is Elena." },
            { speaker: "Luca", text: "Piacere, Elena!", translation: "Nice to meet you, Elena!" },
            { speaker: "Elena", text: "Piacere, Luca.", translation: "Nice to meet you, Luca." },
            { speaker: "Luca", text: "Di dove sei?", translation: "Where are you from?" },
            { speaker: "Elena", text: "Sono di Roma.", translation: "I'm from Rome." },
            { speaker: "Luca", text: "E tu?", translation: "And you?" },
            { speaker: "Elena", text: "Anch'io sono di Roma!", translation: "Me too, I'm from Rome!" },
            { speaker: "Luca", text: "Quanti anni hai?", translation: "How old are you?" },
            { speaker: "Elena", text: "Ho ventitré anni.", translation: "I'm twenty-three years old." },
            { speaker: "Elena", text: "E tu?", translation: "And you?" },
            { speaker: "Luca", text: "Io ho ventisei anni.", translation: "I'm twenty-six years old." },
            { speaker: "Luca", text: "Lavori o studi?", translation: "Do you work or study?" },
            { speaker: "Elena", text: "Studio all'università.", translation: "I study at university." },
            { speaker: "Elena", text: "E tu?", translation: "And you?" },
            { speaker: "Luca", text: "Io lavoro in un ufficio.", translation: "I work in an office." }
        ],
        questions: [
            {
                id: "it-l-a1-1-q1",
                level: "A1",
                prompt: "Come si chiama la donna?",
                options: ["Elena", "Luca", "Maria", "Sofia"],
                answer: "Elena"
            },
            {
                id: "it-l-a1-1-q2",
                level: "A1",
                prompt: "Di dove sono i due?",
                options: ["Di Roma", "Di Milano", "Di Napoli", "Di Torino"],
                answer: "Di Roma"
            },
            {
                id: "it-l-a1-1-q3",
                level: "A1",
                prompt: "Cosa fa Luca?",
                options: ["Lavora in un ufficio", "Studia all'università", "Fa l'insegnante", "È medico"],
                answer: "Lavora in un ufficio"
            }
        ]
    },
    {
        id: "it-l-a1-2",
        level: "A1",
        title: "Al mercato — i prezzi",
        script: "Buongiorno! Quant'è un chilo di mele? Le mele costano un euro e ottanta al chilo. E le arance? Le arance costano due euro al chilo. Vorrei due chili di mele e un chilo di arance, per favore. Benissimo. Allora fanno cinque euro e sessanta. Ecco sei euro. Grazie, ecco il resto: quaranta centesimi. Arrivederci! Buona giornata!",
        translation: "Good morning! How much is a kilo of apples? The apples cost one euro eighty a kilo. And the oranges? The oranges cost two euros a kilo. I'd like two kilos of apples and one kilo of oranges, please. Very good. That comes to five euros sixty. Here's six euros. Thank you, here's the change: forty cents. Goodbye! Have a good day!",
        dialogue: [
            { speaker: "Cliente", text: "Buongiorno! Quant'è un chilo di mele?", translation: "Good morning! How much is a kilo of apples?" },
            { speaker: "Venditrice", text: "Le mele costano un euro e ottanta al chilo.", translation: "The apples cost one euro eighty a kilo." },
            { speaker: "Cliente", text: "E le arance?", translation: "And the oranges?" },
            { speaker: "Venditrice", text: "Le arance costano due euro al chilo.", translation: "The oranges cost two euros a kilo." },
            { speaker: "Cliente", text: "Vorrei due chili di mele e un chilo di arance, per favore.", translation: "I'd like two kilos of apples and one kilo of oranges, please." },
            { speaker: "Venditrice", text: "Benissimo. Allora fanno cinque euro e sessanta.", translation: "Very good. That comes to five euros sixty." },
            { speaker: "Cliente", text: "Ecco sei euro.", translation: "Here's six euros." },
            { speaker: "Venditrice", text: "Grazie, ecco il resto: quaranta centesimi.", translation: "Thank you, here's the change: forty cents." },
            { speaker: "Cliente", text: "Arrivederci!", translation: "Goodbye!" },
            { speaker: "Venditrice", text: "Buona giornata!", translation: "Have a good day!" }
        ],
        questions: [
            {
                id: "it-l-a1-2-q1",
                level: "A1",
                prompt: "Quanto costano le mele?",
                options: ["Un euro e ottanta al chilo", "Due euro al chilo", "Un euro al chilo", "Due euro e cinquanta al chilo"],
                answer: "Un euro e ottanta al chilo"
            },
            {
                id: "it-l-a1-2-q2",
                level: "A1",
                prompt: "Quanto paga la persona in tutto?",
                options: ["Cinque euro e sessanta", "Sei euro", "Quattro euro", "Cinque euro"],
                answer: "Cinque euro e sessanta"
            },
            {
                id: "it-l-a1-2-q3",
                level: "A1",
                prompt: "Quanto è il resto?",
                options: ["Quaranta centesimi", "Cinquanta centesimi", "Un euro", "Venti centesimi"],
                answer: "Quaranta centesimi"
            }
        ]
    },
    {
        id: "it-l-a1-3",
        level: "A1",
        title: "Che ore sono? — la giornata",
        script: "Mamma, che ore sono? Sono le sette e mezza. È ora di alzarsi! Va bene. A che ora è colazione? La colazione è alle otto meno un quarto. E la scuola inizia a che ora? La scuola inizia alle otto e mezza. Allora ho un'ora di tempo. No, hai quarantacinque minuti! Sbrigati, altrimenti fai tardi!",
        translation: "Mum, what time is it? It's half past seven. Time to get up! OK. What time is breakfast? Breakfast is at a quarter to eight. And what time does school start? School starts at half past eight. So I have an hour. No, you have forty-five minutes! Hurry up, otherwise you'll be late!",
        dialogue: [
            { speaker: "Bambino", text: "Mamma, che ore sono?", translation: "Mum, what time is it?" },
            { speaker: "Mamma", text: "Sono le sette e mezza. È ora di alzarsi!", translation: "It's half past seven. Time to get up!" },
            { speaker: "Bambino", text: "Va bene. A che ora è colazione?", translation: "OK. What time is breakfast?" },
            { speaker: "Mamma", text: "La colazione è alle otto meno un quarto.", translation: "Breakfast is at a quarter to eight." },
            { speaker: "Bambino", text: "E la scuola inizia a che ora?", translation: "And what time does school start?" },
            { speaker: "Mamma", text: "La scuola inizia alle otto e mezza.", translation: "School starts at half past eight." },
            { speaker: "Bambino", text: "Allora ho un'ora di tempo.", translation: "So I have an hour." },
            { speaker: "Mamma", text: "No, hai quarantacinque minuti! Sbrigati, altrimenti fai tardi!", translation: "No, you have forty-five minutes! Hurry up, otherwise you'll be late!" }
        ],
        questions: [
            {
                id: "it-l-a1-3-q1",
                level: "A1",
                prompt: "Che ore sono all'inizio della conversazione?",
                options: ["Le sette e mezza", "Le otto", "Le sette", "Le otto e mezza"],
                answer: "Le sette e mezza"
            },
            {
                id: "it-l-a1-3-q2",
                level: "A1",
                prompt: "A che ora inizia la scuola?",
                options: ["Alle otto e mezza", "Alle sette e mezza", "Alle otto", "Alle nove"],
                answer: "Alle otto e mezza"
            },
            {
                id: "it-l-a1-3-q3",
                level: "A1",
                prompt: "Quanto tempo ha il bambino prima della scuola?",
                options: ["Quarantacinque minuti", "Un'ora", "Trenta minuti", "Un'ora e mezza"],
                answer: "Quarantacinque minuti"
            }
        ]
    },
    {
        id: "it-l-a1-4",
        level: "A1",
        title: "In classe — presentazione",
        script: "Buongiorno a tutti! Mi chiamo Professor Bianchi. Sono il vostro insegnante d'italiano. Siete al primo anno. In questa classe impareremo il vocabolario di base, la grammatica e la pronuncia. Tutti capiscono? Sì, professore! Bene. Adesso presentatevi al compagno vicino. Dite il vostro nome, la vostra età e da dove venite.",
        translation: "Good morning everyone! My name is Professor Bianchi. I am your Italian teacher. You are in first year. In this class we will learn basic vocabulary, grammar and pronunciation. Does everyone understand? Yes, professor! Good. Now introduce yourselves to the person next to you. Say your name, your age and where you are from.",
        questions: [
            {
                id: "it-l-a1-4-q1",
                level: "A1",
                prompt: "Come si chiama il professore?",
                options: ["Professor Bianchi", "Professor Rossi", "Professor Verdi", "Professor Neri"],
                answer: "Professor Bianchi"
            },
            {
                id: "it-l-a1-4-q2",
                level: "A1",
                prompt: "Cosa impareranno gli studenti in quella classe?",
                options: ["Vocabolario, grammatica e pronuncia", "La storia d'Italia", "La matematica", "La letteratura italiana"],
                answer: "Vocabolario, grammatica e pronuncia"
            },
            {
                id: "it-l-a1-4-q3",
                level: "A1",
                prompt: "Cosa devono fare gli studenti alla fine?",
                options: ["Presentarsi al compagno vicino", "Scrivere il proprio nome", "Leggere un testo", "Fare i compiti"],
                answer: "Presentarsi al compagno vicino"
            }
        ]
    }
]
