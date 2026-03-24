// src/data/italian/reading/a1.ts
import { ReadingPassage } from "../../../types"

export const a1Reading: ReadingPassage[] = [
    {
        id: "it-r-a1-1",
        level: "A1",
        category: "everyday",
        title: "La mia famiglia",
        body: {
            target: "Mi chiamo Marco. Ho una famiglia piccola. Mia madre si chiama Laura. Mio padre si chiama Roberto. Ho una sorella. Si chiama Giulia. Giulia ha quattordici anni. Io ho sedici anni. Abitiamo a Napoli. La nostra casa ha tre camere da letto. Abbiamo un cane. Il cane si chiama Fido. È marrone e molto vivace. La mia famiglia è molto importante per me.",
            native: "My name is Marco. I have a small family. My mother's name is Laura. My father's name is Roberto. I have a sister. Her name is Giulia. Giulia is fourteen years old. I am sixteen years old. We live in Naples. Our house has three bedrooms. We have a dog. The dog's name is Fido. He is brown and very lively. My family is very important to me."
        },
        vocabGloss: [
            { word: "famiglia", translation: "family" },
            { word: "madre", translation: "mother" },
            { word: "padre", translation: "father" },
            { word: "sorella", translation: "sister" },
            { word: "abitiamo", translation: "we live" },
            { word: "camera da letto", translation: "bedroom" },
            { word: "vivace", translation: "lively, energetic" }
        ],
        questions: [
            {
                id: "it-r-a1-1-q1",
                level: "A1",
                prompt: "Come si chiama la madre di Marco?",
                options: ["Laura", "Giulia", "Marco", "Roberto"],
                answer: "Laura"
            },
            {
                id: "it-r-a1-1-q2",
                level: "A1",
                prompt: "Quanti anni ha Giulia?",
                options: ["Quattordici anni", "Sedici anni", "Dodici anni", "Diciotto anni"],
                answer: "Quattordici anni"
            },
            {
                id: "it-r-a1-1-q3",
                level: "A1",
                prompt: "Dove abita la famiglia?",
                options: ["A Napoli", "A Roma", "A Milano", "A Torino"],
                answer: "A Napoli"
            }
        ]
    },
    {
        id: "it-r-a1-2",
        level: "A1",
        category: "everyday",
        title: "Una giornata normale",
        body: {
            target: "Mi sveglio alle sette di mattina. Faccio colazione con un caffè e un cornetto. Alle otto vado a scuola. A scuola ho lezione di italiano, matematica e inglese. Pranzo all'una nella mensa scolastica. Nel pomeriggio faccio i compiti. Alle cinque gioco con i miei amici in piazza. Ceno con la mia famiglia alle sette e mezza. Vado a letto alle dieci. È una giornata impegnata ma bella!",
            native: "I wake up at seven in the morning. I have breakfast with a coffee and a croissant. At eight I go to school. At school I have Italian, maths and English lessons. I have lunch at one o'clock in the school canteen. In the afternoon I do my homework. At five I play with my friends in the square. I have dinner with my family at half past seven. I go to bed at ten. It's a busy but lovely day!"
        },
        vocabGloss: [
            { word: "mi sveglio", translation: "I wake up" },
            { word: "faccio colazione", translation: "I have breakfast" },
            { word: "cornetto", translation: "croissant (Italian style)" },
            { word: "mensa scolastica", translation: "school canteen" },
            { word: "compiti", translation: "homework" },
            { word: "piazza", translation: "town square" },
            { word: "impegnata", translation: "busy" }
        ],
        questions: [
            {
                id: "it-r-a1-2-q1",
                level: "A1",
                prompt: "A che ora si sveglia la persona?",
                options: ["Alle sette", "Alle otto", "Alle sei", "Alle nove"],
                answer: "Alle sette"
            },
            {
                id: "it-r-a1-2-q2",
                level: "A1",
                prompt: "Dove pranza la persona?",
                options: ["Nella mensa scolastica", "A casa", "Al bar", "In piazza"],
                answer: "Nella mensa scolastica"
            },
            {
                id: "it-r-a1-2-q3",
                level: "A1",
                prompt: "A che ora va a letto?",
                options: ["Alle dieci", "Alle undici", "Alle nove", "Alle otto e mezza"],
                answer: "Alle dieci"
            }
        ]
    },
    {
        id: "it-r-a1-3",
        level: "A1",
        category: "dialogue",
        title: "Al bar",
        body: {
            target: "Barista: Buongiorno! Cosa prende? Cliente: Buongiorno! Vorrei un caffè, per favore. Barista: Subito. Vuole anche qualcosa da mangiare? Cliente: Sì, un cornetto alla crema, grazie. Quanto costa? Barista: Un caffè e un cornetto fanno due euro e venti. Cliente: Ecco a Lei. Barista: Grazie mille. Buona giornata! Cliente: Altrettanto, grazie!",
            native: "Barista: Good morning! What would you like? Customer: Good morning! I'd like a coffee, please. Barista: Right away. Would you also like something to eat? Customer: Yes, a cream croissant, thank you. How much is it? Barista: A coffee and a croissant come to two euros twenty. Customer: Here you go. Barista: Thank you very much. Have a good day! Customer: Same to you, thanks!"
        },
        vocabGloss: [
            { word: "cosa prende?", translation: "what would you like? (formal)" },
            { word: "vorrei", translation: "I would like" },
            { word: "subito", translation: "right away" },
            { word: "alla crema", translation: "with cream filling" },
            { word: "fanno", translation: "come to / that makes (price)" },
            { word: "ecco a Lei", translation: "here you go (formal)" },
            { word: "altrettanto", translation: "same to you" }
        ],
        questions: [
            {
                id: "it-r-a1-3-q1",
                level: "A1",
                prompt: "Cosa ordina il cliente?",
                options: ["Un caffè e un cornetto alla crema", "Un tè e una brioche", "Un cappuccino e un cornetto", "Un succo e un biscotto"],
                answer: "Un caffè e un cornetto alla crema"
            },
            {
                id: "it-r-a1-3-q2",
                level: "A1",
                prompt: "Quanto costa la consumazione?",
                options: ["Due euro e venti", "Un euro e cinquanta", "Tre euro", "Due euro"],
                answer: "Due euro e venti"
            },
            {
                id: "it-r-a1-3-q3",
                level: "A1",
                prompt: "Come risponde il cliente al saluto del barista?",
                options: ["Altrettanto, grazie!", "Arrivederci!", "Prego!", "Grazie mille!"],
                answer: "Altrettanto, grazie!"
            }
        ]
    },
    {
        id: "it-r-a1-4",
        level: "A1",
        category: "everyday",
        title: "La mia casa",
        body: {
            target: "Abito in un appartamento in centro a Firenze. Il mio appartamento è al terzo piano. Ci sono un soggiorno, una cucina, due camere da letto e un bagno. La mia camera è piccola ma accogliente. Ho un letto, una scrivania e un armadio. Dalla finestra vedo il campanile del Duomo. Il mio appartamento non ha un giardino, ma c'è un bel terrazzo. D'estate mangio spesso sul terrazzo.",
            native: "I live in an apartment in the centre of Florence. My apartment is on the third floor. There is a living room, a kitchen, two bedrooms and a bathroom. My bedroom is small but cosy. I have a bed, a desk and a wardrobe. From the window I can see the bell tower of the Cathedral. My apartment doesn't have a garden, but there is a nice terrace. In summer I often eat on the terrace."
        },
        vocabGloss: [
            { word: "appartamento", translation: "apartment, flat" },
            { word: "terzo piano", translation: "third floor" },
            { word: "soggiorno", translation: "living room" },
            { word: "accogliente", translation: "cosy, welcoming" },
            { word: "scrivania", translation: "desk" },
            { word: "campanile", translation: "bell tower" },
            { word: "terrazzo", translation: "terrace, balcony" }
        ],
        questions: [
            {
                id: "it-r-a1-4-q1",
                level: "A1",
                prompt: "In quale città abita la persona?",
                options: ["A Firenze", "A Roma", "A Venezia", "A Milano"],
                answer: "A Firenze"
            },
            {
                id: "it-r-a1-4-q2",
                level: "A1",
                prompt: "Cosa si vede dalla finestra?",
                options: ["Il campanile del Duomo", "Il mare", "Un parco", "La piazza"],
                answer: "Il campanile del Duomo"
            },
            {
                id: "it-r-a1-4-q3",
                level: "A1",
                prompt: "Cosa fa la persona d'estate sul terrazzo?",
                options: ["Mangia", "Legge", "Dorme", "Studia"],
                answer: "Mangia"
            }
        ]
    },
    {
        id: "it-r-a1-5",
        level: "A1",
        category: "everyday",
        title: "Gli animali",
        body: {
            target: "Amo gli animali. Il mio animale preferito è il gatto. Il mio gatto si chiama Tigre. È arancione e bianco. Tigre ama dormire sul divano e giocare con il gomitolo di lana. Mio fratello ha un cane di nome Leo. Leo è un labrador nero. È grande e amichevole. Mia nonna ha un pappagallo. Si chiama Paco e sa dire qualche parola. Quando andiamo in campagna, vediamo molti animali: mucche, pecore e cavalli.",
            native: "I love animals. My favourite animal is the cat. My cat's name is Tigre (Tiger). He is orange and white. Tigre loves sleeping on the sofa and playing with balls of wool. My brother has a dog called Leo. Leo is a black labrador. He is big and friendly. My grandmother has a parrot. His name is Paco and he can say a few words. When we go to the country, we see many animals: cows, sheep and horses."
        },
        vocabGloss: [
            { word: "amo", translation: "I love" },
            { word: "animale preferito", translation: "favourite animal" },
            { word: "gomitolo di lana", translation: "ball of wool" },
            { word: "amichevole", translation: "friendly" },
            { word: "pappagallo", translation: "parrot" },
            { word: "mucche", translation: "cows" },
            { word: "pecore", translation: "sheep" }
        ],
        questions: [
            {
                id: "it-r-a1-5-q1",
                level: "A1",
                prompt: "Come si chiama il gatto?",
                options: ["Tigre", "Leo", "Paco", "Fido"],
                answer: "Tigre"
            },
            {
                id: "it-r-a1-5-q2",
                level: "A1",
                prompt: "Che tipo di cane ha il fratello?",
                options: ["Un labrador nero", "Un labrador marrone", "Un gatto arancione", "Un pappagallo"],
                answer: "Un labrador nero"
            },
            {
                id: "it-r-a1-5-q3",
                level: "A1",
                prompt: "Cosa sa fare il pappagallo Paco?",
                options: ["Dire qualche parola", "Cantare", "Volare molto lontano", "Imitare i cani"],
                answer: "Dire qualche parola"
            }
        ]
    }
]
