// src/data/french/reading/a1.ts
import { ReadingPassage } from "../../../types"

export const a1Reading: ReadingPassage[] = [
    {
        id: "fr-r-a1-1",
        level: "A1",
        category: "everyday",
        title: "Ma famille",
        body: {
            target: "Je m'appelle Sophie. J'ai une famille nombreuse. Ma mère s'appelle Marie. Mon père s'appelle Pierre. J'ai deux frères et une sœur. Mon frère aîné s'appelle Thomas. Il a vingt ans. Ma sœur s'appelle Camille. Elle a douze ans. Nous habitons à Lyon. Notre appartement est grand. Nous avons un chat. Le chat s'appelle Minou. Il est gris et très mignon.",
            native: "My name is Sophie. I have a large family. My mother's name is Marie. My father's name is Pierre. I have two brothers and one sister. My eldest brother's name is Thomas. He is twenty years old. My sister's name is Camille. She is twelve years old. We live in Lyon. Our apartment is big. We have a cat. The cat's name is Minou. He is grey and very cute."
        },
        vocabGloss: [
            { word: "famille nombreuse", translation: "large family" },
            { word: "mère", translation: "mother" },
            { word: "père", translation: "father" },
            { word: "frères", translation: "brothers" },
            { word: "sœur", translation: "sister" },
            { word: "aîné", translation: "eldest" },
            { word: "habitons", translation: "we live" },
            { word: "mignon", translation: "cute" }
        ],
        questions: [
            {
                id: "fr-r-a1-1-q1",
                level: "A1",
                prompt: "Comment s'appelle la mère de Sophie ?",
                options: ["Marie", "Camille", "Sophie", "Thomas"],
                answer: "Marie"
            },
            {
                id: "fr-r-a1-1-q2",
                level: "A1",
                prompt: "Quel âge a Camille ?",
                options: ["Douze ans", "Vingt ans", "Quinze ans", "Dix ans"],
                answer: "Douze ans"
            },
            {
                id: "fr-r-a1-1-q3",
                level: "A1",
                prompt: "Où habite la famille ?",
                options: ["À Lyon", "À Paris", "À Marseille", "À Bordeaux"],
                answer: "À Lyon"
            }
        ]
    },
    {
        id: "fr-r-a1-2",
        level: "A1",
        category: "everyday",
        title: "Une journée normale",
        body: {
            target: "Je me lève à sept heures du matin. Je prends un café et des tartines au beurre. À huit heures, je vais à l'école. À l'école, j'ai des cours de maths, de français et d'anglais. Je déjeune à midi à la cantine. L'après-midi, je fais mes devoirs. À six heures, je joue avec mes amis dans le parc. Je dîne avec ma famille à sept heures. Je me couche à neuf heures et demie.",
            native: "I get up at seven in the morning. I have a coffee and bread with butter. At eight o'clock, I go to school. At school, I have maths, French and English classes. I have lunch at noon in the canteen. In the afternoon, I do my homework. At six o'clock, I play with my friends in the park. I have dinner with my family at seven o'clock. I go to bed at half past nine."
        },
        vocabGloss: [
            { word: "je me lève", translation: "I get up" },
            { word: "tartines au beurre", translation: "bread with butter" },
            { word: "cantine", translation: "school canteen" },
            { word: "devoirs", translation: "homework" },
            { word: "je me couche", translation: "I go to bed" }
        ],
        questions: [
            {
                id: "fr-r-a1-2-q1",
                level: "A1",
                prompt: "À quelle heure se lève la personne ?",
                options: ["À sept heures", "À huit heures", "À six heures", "À neuf heures"],
                answer: "À sept heures"
            },
            {
                id: "fr-r-a1-2-q2",
                level: "A1",
                prompt: "Où déjeune-t-elle à midi ?",
                options: ["À la cantine", "Chez elle", "Au café", "Dans le parc"],
                answer: "À la cantine"
            },
            {
                id: "fr-r-a1-2-q3",
                level: "A1",
                prompt: "À quelle heure se couche-t-elle ?",
                options: ["À neuf heures et demie", "À dix heures", "À huit heures", "À onze heures"],
                answer: "À neuf heures et demie"
            }
        ]
    },
    {
        id: "fr-r-a1-3",
        level: "A1",
        category: "dialogue",
        title: "Au café",
        body: {
            target: "Serveur : Bonjour ! Vous désirez ? Client : Bonjour ! Je voudrais un café, s'il vous plaît. Serveur : Un café, très bien. Et avec ça ? Client : Un croissant, s'il vous plaît. Combien ça coûte ? Serveur : Un café et un croissant, c'est trois euros cinquante. Client : Voilà. Merci ! Serveur : Merci à vous. Bonne journée !",
            native: "Waiter: Hello! What would you like? Customer: Hello! I'd like a coffee, please. Waiter: A coffee, very good. And with that? Customer: A croissant, please. How much is it? Waiter: A coffee and a croissant is three euros fifty. Customer: Here you go. Thank you! Waiter: Thank you. Have a good day!"
        },
        vocabGloss: [
            { word: "vous désirez", translation: "what would you like?" },
            { word: "je voudrais", translation: "I would like" },
            { word: "avec ça", translation: "with that / anything else?" },
            { word: "combien ça coûte", translation: "how much does it cost?" },
            { word: "voilà", translation: "here you go" },
            { word: "bonne journée", translation: "have a good day" }
        ],
        questions: [
            {
                id: "fr-r-a1-3-q1",
                level: "A1",
                prompt: "Qu'est-ce que le client commande ?",
                options: ["Un café et un croissant", "Un thé et une baguette", "Un café et un gâteau", "Un jus et un croissant"],
                answer: "Un café et un croissant"
            },
            {
                id: "fr-r-a1-3-q2",
                level: "A1",
                prompt: "Combien coûte la commande ?",
                options: ["Trois euros cinquante", "Deux euros", "Quatre euros", "Cinq euros"],
                answer: "Trois euros cinquante"
            },
            {
                id: "fr-r-a1-3-q3",
                level: "A1",
                prompt: "Que dit le serveur à la fin ?",
                options: ["Bonne journée", "Bonne nuit", "Au revoir", "Merci beaucoup"],
                answer: "Bonne journée"
            }
        ]
    },
    {
        id: "fr-r-a1-4",
        level: "A1",
        category: "everyday",
        title: "Ma maison",
        body: {
            target: "J'habite dans une maison à la campagne. Ma maison a deux étages. Au rez-de-chaussée, il y a un salon, une cuisine et une salle à manger. Au premier étage, il y a trois chambres et une salle de bains. Ma chambre est petite mais confortable. J'ai un lit, un bureau et une armoire. Par la fenêtre, je vois un grand jardin avec des fleurs. J'aime beaucoup ma maison.",
            native: "I live in a house in the country. My house has two floors. On the ground floor, there is a living room, a kitchen and a dining room. On the first floor, there are three bedrooms and a bathroom. My bedroom is small but comfortable. I have a bed, a desk and a wardrobe. Through the window, I can see a big garden with flowers. I love my house very much."
        },
        vocabGloss: [
            { word: "à la campagne", translation: "in the country(side)" },
            { word: "étages", translation: "floors / storeys" },
            { word: "rez-de-chaussée", translation: "ground floor" },
            { word: "salon", translation: "living room" },
            { word: "salle à manger", translation: "dining room" },
            { word: "chambre", translation: "bedroom" },
            { word: "armoire", translation: "wardrobe" }
        ],
        questions: [
            {
                id: "fr-r-a1-4-q1",
                level: "A1",
                prompt: "Où habite la personne ?",
                options: ["À la campagne", "En ville", "À la mer", "En montagne"],
                answer: "À la campagne"
            },
            {
                id: "fr-r-a1-4-q2",
                level: "A1",
                prompt: "Combien d'étages a la maison ?",
                options: ["Deux étages", "Un étage", "Trois étages", "Quatre étages"],
                answer: "Deux étages"
            },
            {
                id: "fr-r-a1-4-q3",
                level: "A1",
                prompt: "Qu'est-ce qu'on voit par la fenêtre ?",
                options: ["Un jardin avec des fleurs", "La rue", "Un parc", "La mer"],
                answer: "Un jardin avec des fleurs"
            }
        ]
    },
    {
        id: "fr-r-a1-5",
        level: "A1",
        category: "everyday",
        title: "Les animaux",
        body: {
            target: "J'adore les animaux. Mon animal préféré est le chien. Mon chien s'appelle Rex. Il est grand et marron. Rex aime jouer dans le jardin et se promener. Ma sœur a un lapin blanc. Il s'appelle Neige. Mon frère a un poisson rouge dans un aquarium. Chez mes grands-parents, il y a un cheval. Je rends visite à mes grands-parents le week-end pour monter à cheval. C'est mon activité préférée !",
            native: "I love animals. My favourite animal is the dog. My dog's name is Rex. He is big and brown. Rex loves playing in the garden and going for walks. My sister has a white rabbit. His name is Neige (Snow). My brother has a goldfish in an aquarium. At my grandparents' house, there is a horse. I visit my grandparents at the weekend to go horse riding. It's my favourite activity!"
        },
        vocabGloss: [
            { word: "j'adore", translation: "I love" },
            { word: "animal préféré", translation: "favourite animal" },
            { word: "se promener", translation: "to go for a walk" },
            { word: "lapin", translation: "rabbit" },
            { word: "poisson rouge", translation: "goldfish" },
            { word: "grands-parents", translation: "grandparents" },
            { word: "monter à cheval", translation: "to go horse riding" }
        ],
        questions: [
            {
                id: "fr-r-a1-5-q1",
                level: "A1",
                prompt: "Quel est l'animal préféré de la personne ?",
                options: ["Le chien", "Le lapin", "Le cheval", "Le poisson"],
                answer: "Le chien"
            },
            {
                id: "fr-r-a1-5-q2",
                level: "A1",
                prompt: "Comment s'appelle le lapin de la sœur ?",
                options: ["Neige", "Rex", "Minou", "Blanc"],
                answer: "Neige"
            },
            {
                id: "fr-r-a1-5-q3",
                level: "A1",
                prompt: "Quelle est l'activité préférée de la personne ?",
                options: ["Monter à cheval", "Jouer avec le chien", "Nager", "Jardiner"],
                answer: "Monter à cheval"
            }
        ]
    }
]
