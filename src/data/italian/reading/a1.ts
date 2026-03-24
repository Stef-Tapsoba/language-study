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
    },
    {
        id: "it-r-a1-6",
        level: "A1",
        category: "everyday",
        title: "Che tempo fa?",
        body: {
            target: "Oggi fa bel tempo. C'è il sole e non fa troppo caldo — la temperatura è di circa ventidue gradi. È una giornata perfetta! Ieri invece faceva brutto tempo: pioveva e c'era vento. Io sono rimasto a casa tutto il giorno. Domani, secondo le previsioni, fa freddo e forse nevica in montagna. Io ho un maglione pesante, quindi non ho paura del freddo. Nel pomeriggio voglio fare una passeggiata nel parco. Se fa ancora bel tempo, porto anche il mio cane.",
            native: "Today the weather is nice. It's sunny and not too hot — the temperature is about twenty-two degrees. It's a perfect day! Yesterday, on the other hand, the weather was bad: it was raining and windy. I stayed at home all day. Tomorrow, according to the forecast, it will be cold and it might snow in the mountains. I have a heavy jumper, so I'm not afraid of the cold. In the afternoon I want to go for a walk in the park. If the weather is still nice, I'll bring my dog too."
        },
        vocabGloss: [
            { word: "fa bel tempo", translation: "the weather is nice" },
            { word: "la temperatura", translation: "temperature" },
            { word: "faceva brutto tempo", translation: "the weather was bad" },
            { word: "le previsioni", translation: "the forecast" },
            { word: "il maglione pesante", translation: "heavy jumper / thick sweater" },
            { word: "fare una passeggiata", translation: "to go for a walk" }
        ],
        questions: [
            {
                id: "it-r-a1-6-q1",
                level: "A1",
                prompt: "Che tempo fa oggi?",
                options: ["Fa bel tempo e c'è il sole", "Piove e c'è vento", "Fa molto caldo", "Nevica"],
                answer: "Fa bel tempo e c'è il sole"
            },
            {
                id: "it-r-a1-6-q2",
                level: "A1",
                prompt: "Che tempo ha fatto ieri?",
                options: ["Brutto tempo — pioveva e c'era vento", "Bel tempo con il sole", "Faceva caldo", "Nevicava"],
                answer: "Brutto tempo — pioveva e c'era vento"
            },
            {
                id: "it-r-a1-6-q3",
                level: "A1",
                prompt: "Cosa vuole fare la persona nel pomeriggio?",
                options: ["Fare una passeggiata nel parco", "Restare a casa", "Andare in montagna", "Guardare le previsioni"],
                answer: "Fare una passeggiata nel parco"
            }
        ]
    },
    {
        id: "it-r-a1-7",
        level: "A1",
        category: "everyday",
        title: "Il mio appartamento a Bologna",
        body: {
            target: "Mi chiamo Sofia e abito in un appartamento a Bologna. Il mio appartamento è al primo piano. Ci sono quattro stanze: un soggiorno, una cucina, una camera da letto e un bagno. Non c'è lo studio, ma c'è un piccolo balcone. Nel soggiorno ci sono un divano grigio, un tavolo e quattro sedie. La cucina è grande e moderna. Nella mia camera da letto c'è un letto matrimoniale e un armadio. Il bagno è piccolo ma ha tutto quello che serve. Mi piace il mio appartamento perché è luminoso e tranquillo.",
            native: "My name is Sofia and I live in an apartment in Bologna. My apartment is on the first floor. There are four rooms: a living room, a kitchen, a bedroom and a bathroom. There is no study, but there is a small balcony. In the living room there are a grey sofa, a table and four chairs. The kitchen is large and modern. In my bedroom there is a double bed and a wardrobe. The bathroom is small but has everything you need. I like my apartment because it is bright and quiet."
        },
        vocabGloss: [
            { word: "appartamento", translation: "apartment, flat" },
            { word: "stanze", translation: "rooms" },
            { word: "il soggiorno", translation: "living room" },
            { word: "il balcone", translation: "balcony" },
            { word: "il letto matrimoniale", translation: "double bed" },
            { word: "luminoso", translation: "bright, full of light" }
        ],
        questions: [
            {
                id: "it-r-a1-7-q1",
                level: "A1",
                prompt: "A che piano è l'appartamento di Sofia?",
                options: ["Al primo piano", "Al secondo piano", "Al terzo piano", "Al piano terra"],
                answer: "Al primo piano"
            },
            {
                id: "it-r-a1-7-q2",
                level: "A1",
                prompt: "Quante stanze ci sono nell'appartamento?",
                options: ["Quattro stanze", "Tre stanze", "Cinque stanze", "Due stanze"],
                answer: "Quattro stanze"
            },
            {
                id: "it-r-a1-7-q3",
                level: "A1",
                prompt: "Che colore è il divano nel soggiorno?",
                options: ["Grigio", "Rosso", "Blu", "Bianco"],
                answer: "Grigio"
            }
        ]
    },
    {
        id: "it-r-a1-8",
        level: "A1",
        category: "dialogue",
        title: "Al telefono",
        body: {
            target: "Marco: Pronto, ciao Chiara! Chiara: Ciao Marco! Come stai? Marco: Bene, grazie. Senti, vuoi uscire domani sera? Chiara: Sì, volentieri! Dove vuoi andare? Marco: Possiamo andare al cinema. C'è un bel film alle otto. Chiara: Perfetto! A che ora ci vediamo? Marco: Possiamo incontrarci alle sette e mezza davanti al cinema. Chiara: Va bene. Ma dove si trova il cinema? Marco: È in Via Nazionale, vicino alla stazione. Chiara: Ok, lo conosco. A domani sera allora! Marco: A domani! Ciao!",
            native: "Marco: Hello, hi Chiara! Chiara: Hi Marco! How are you? Marco: Fine, thanks. Listen, do you want to go out tomorrow evening? Chiara: Yes, I'd love to! Where do you want to go? Marco: We can go to the cinema. There's a good film at eight. Chiara: Perfect! What time shall we meet? Marco: We can meet at half past seven in front of the cinema. Chiara: OK. But where is the cinema? Marco: It's in Via Nazionale, near the station. Chiara: OK, I know it. See you tomorrow evening then! Marco: See you tomorrow! Bye!"
        },
        vocabGloss: [
            { word: "pronto", translation: "hello (answering the phone)" },
            { word: "senti", translation: "listen / hey (informal)" },
            { word: "vuoi uscire", translation: "do you want to go out" },
            { word: "volentieri", translation: "gladly, with pleasure" },
            { word: "ci vediamo", translation: "we'll meet / see you" },
            { word: "vicino alla stazione", translation: "near the station" }
        ],
        questions: [
            {
                id: "it-r-a1-8-q1",
                level: "A1",
                prompt: "Dove vogliono andare Marco e Chiara?",
                options: ["Al cinema", "Al ristorante", "In piazza", "Alla stazione"],
                answer: "Al cinema"
            },
            {
                id: "it-r-a1-8-q2",
                level: "A1",
                prompt: "A che ora si incontrano Marco e Chiara?",
                options: ["Alle sette e mezza", "Alle otto", "Alle sette", "Alle nove"],
                answer: "Alle sette e mezza"
            },
            {
                id: "it-r-a1-8-q3",
                level: "A1",
                prompt: "Dove si trova il cinema?",
                options: ["In Via Nazionale, vicino alla stazione", "In centro, vicino al parco", "In Via Roma, vicino al bar", "Davanti alla scuola"],
                answer: "In Via Nazionale, vicino alla stazione"
            }
        ]
    }
]
