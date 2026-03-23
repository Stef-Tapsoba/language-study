// src/data/french/listening/a1.ts
import { ListeningExercise } from "../../../types"

export const a1Listening: ListeningExercise[] = [
    {
        id: "fr-l-a1-1",
        level: "A1",
        title: "Bonjour ! — dialogue de rencontre",
        script: "Bonjour ! Je m'appelle Luc. Comment tu t'appelles ? Je m'appelle Claire. Enchanté, Claire ! Enchantée, Luc. Tu habites à Paris ? Oui, j'habite à Paris. Et toi ? Moi aussi, j'habite à Paris. Quel âge as-tu ? J'ai vingt-deux ans. Et toi ? J'ai vingt-cinq ans.",
        translation: "Hello! My name is Luc. What's your name? My name is Claire. Nice to meet you, Claire! Nice to meet you, Luc. Do you live in Paris? Yes, I live in Paris. And you? Me too, I live in Paris. How old are you? I'm twenty-two years old. And you? I'm twenty-five years old.",
        dialogue: [
            { speaker: "Luc",   text: "Bonjour ! Je m'appelle Luc. Comment tu t'appelles ?", translation: "Hello! My name is Luc. What's your name?" },
            { speaker: "Claire", text: "Je m'appelle Claire.", translation: "My name is Claire." },
            { speaker: "Luc",   text: "Enchanté, Claire !", translation: "Nice to meet you, Claire!" },
            { speaker: "Claire", text: "Enchantée, Luc. Tu habites à Paris ?", translation: "Nice to meet you, Luc. Do you live in Paris?" },
            { speaker: "Luc",   text: "Oui, j'habite à Paris. Et toi ?", translation: "Yes, I live in Paris. And you?" },
            { speaker: "Claire", text: "Moi aussi, j'habite à Paris.", translation: "Me too, I live in Paris." },
            { speaker: "Luc",   text: "Quel âge as-tu ?", translation: "How old are you?" },
            { speaker: "Claire", text: "J'ai vingt-deux ans. Et toi ?", translation: "I'm twenty-two years old. And you?" },
            { speaker: "Luc",   text: "J'ai vingt-cinq ans.", translation: "I'm twenty-five years old." }
        ],
        questions: [
            {
                id: "fr-l-a1-1-q1",
                level: "A1",
                prompt: "Comment s'appelle la femme ?",
                options: ["Claire", "Luc", "Marie", "Sophie"],
                answer: "Claire"
            },
            {
                id: "fr-l-a1-1-q2",
                level: "A1",
                prompt: "Où habite Claire ?",
                options: ["À Paris", "À Lyon", "À Nice", "À Bordeaux"],
                answer: "À Paris"
            },
            {
                id: "fr-l-a1-1-q3",
                level: "A1",
                prompt: "Quel âge a Luc ?",
                options: ["Vingt-cinq ans", "Vingt-deux ans", "Vingt ans", "Trente ans"],
                answer: "Vingt-cinq ans"
            }
        ]
    },
    {
        id: "fr-l-a1-2",
        level: "A1",
        title: "Au marché — les prix",
        script: "Bonjour madame ! Bonjour ! Combien coûtent les pommes ? Les pommes coûtent deux euros le kilo. Et les bananes ? Un euro quatre-vingts le kilo. Je voudrais un kilo de pommes et deux kilos de bananes, s'il vous plaît. Très bien. Ça fait cinq euros soixante. Voilà six euros. Merci. Et voilà quarante centimes de monnaie. Bonne journée !",
        translation: "Good morning madam! Good morning! How much do the apples cost? The apples cost two euros a kilo. And the bananas? One euro eighty a kilo. I'd like a kilo of apples and two kilos of bananas, please. Very good. That's five euros sixty. Here's six euros. Thank you. And here's forty cents change. Have a good day!",
        dialogue: [
            { speaker: "Client",    text: "Bonjour madame !", translation: "Good morning, madam!" },
            { speaker: "Marchande", text: "Bonjour !", translation: "Good morning!" },
            { speaker: "Client",    text: "Combien coûtent les pommes ?", translation: "How much do the apples cost?" },
            { speaker: "Marchande", text: "Les pommes coûtent deux euros le kilo.", translation: "The apples cost two euros a kilo." },
            { speaker: "Client",    text: "Et les bananes ?", translation: "And the bananas?" },
            { speaker: "Marchande", text: "Un euro quatre-vingts le kilo.", translation: "One euro eighty a kilo." },
            { speaker: "Client",    text: "Je voudrais un kilo de pommes et deux kilos de bananes, s'il vous plaît.", translation: "I'd like a kilo of apples and two kilos of bananas, please." },
            { speaker: "Marchande", text: "Très bien. Ça fait cinq euros soixante.", translation: "Very good. That's five euros sixty." },
            { speaker: "Client",    text: "Voilà six euros.", translation: "Here's six euros." },
            { speaker: "Marchande", text: "Merci. Et voilà quarante centimes de monnaie. Bonne journée !", translation: "Thank you. And here's forty cents change. Have a good day!" }
        ],
        questions: [
            {
                id: "fr-l-a1-2-q1",
                level: "A1",
                prompt: "Combien coûtent les pommes ?",
                options: ["Deux euros le kilo", "Un euro le kilo", "Un euro quatre-vingts le kilo", "Trois euros le kilo"],
                answer: "Deux euros le kilo"
            },
            {
                id: "fr-l-a1-2-q2",
                level: "A1",
                prompt: "Combien la personne paie-t-elle en tout ?",
                options: ["Cinq euros soixante", "Six euros", "Quatre euros", "Cinq euros"],
                answer: "Cinq euros soixante"
            },
            {
                id: "fr-l-a1-2-q3",
                level: "A1",
                prompt: "Quelle monnaie reçoit la personne ?",
                options: ["Quarante centimes", "Cinquante centimes", "Un euro", "Vingt centimes"],
                answer: "Quarante centimes"
            }
        ]
    },
    {
        id: "fr-l-a1-3",
        level: "A1",
        title: "Quelle heure est-il ? — la journée",
        script: "Maman, quelle heure est-il ? Il est sept heures et demie. C'est l'heure de se lever ! D'accord. Quand est le petit-déjeuner ? Le petit-déjeuner est à huit heures moins le quart. Et l'école commence à quelle heure ? L'école commence à huit heures et demie. Alors j'ai une heure. Non, tu as quarante-cinq minutes ! Dépêche-toi !",
        translation: "Mum, what time is it? It's half past seven. Time to get up! OK. When is breakfast? Breakfast is at a quarter to eight. And what time does school start? School starts at half past eight. So I have an hour. No, you have forty-five minutes! Hurry up!",
        dialogue: [
            { speaker: "Enfant", text: "Maman, quelle heure est-il ?", translation: "Mum, what time is it?" },
            { speaker: "Maman",  text: "Il est sept heures et demie. C'est l'heure de se lever !", translation: "It's half past seven. Time to get up!" },
            { speaker: "Enfant", text: "D'accord. Quand est le petit-déjeuner ?", translation: "OK. When is breakfast?" },
            { speaker: "Maman",  text: "Le petit-déjeuner est à huit heures moins le quart.", translation: "Breakfast is at a quarter to eight." },
            { speaker: "Enfant", text: "Et l'école commence à quelle heure ?", translation: "And what time does school start?" },
            { speaker: "Maman",  text: "L'école commence à huit heures et demie.", translation: "School starts at half past eight." },
            { speaker: "Enfant", text: "Alors j'ai une heure.", translation: "So I have an hour." },
            { speaker: "Maman",  text: "Non, tu as quarante-cinq minutes ! Dépêche-toi !", translation: "No, you have forty-five minutes! Hurry up!" }
        ],
        questions: [
            {
                id: "fr-l-a1-3-q1",
                level: "A1",
                prompt: "Quelle heure est-il au début de la conversation ?",
                options: ["Sept heures et demie", "Huit heures", "Sept heures", "Huit heures et demie"],
                answer: "Sept heures et demie"
            },
            {
                id: "fr-l-a1-3-q2",
                level: "A1",
                prompt: "À quelle heure commence l'école ?",
                options: ["À huit heures et demie", "À sept heures et demie", "À huit heures", "À neuf heures"],
                answer: "À huit heures et demie"
            },
            {
                id: "fr-l-a1-3-q3",
                level: "A1",
                prompt: "Combien de temps a l'enfant avant l'école ?",
                options: ["Quarante-cinq minutes", "Une heure", "Trente minutes", "Une heure et demie"],
                answer: "Quarante-cinq minutes"
            }
        ]
    },
    {
        id: "fr-l-a1-4",
        level: "A1",
        title: "Dans la classe — présentation",
        script: "Bonjour à tous ! Je m'appelle Monsieur Dupont. Je suis votre professeur de français. Vous êtes en première année. Dans cette classe, nous allons apprendre le vocabulaire de base, la grammaire et la prononciation. Est-ce que tout le monde comprend ? Oui, monsieur ! Parfait. Maintenant, présentez-vous à votre voisin. Dites votre nom, votre âge et votre nationalité.",
        translation: "Good morning everyone! My name is Monsieur Dupont. I am your French teacher. You are in first year. In this class, we are going to learn basic vocabulary, grammar and pronunciation. Does everyone understand? Yes, sir! Perfect. Now, introduce yourself to your neighbour. Say your name, your age and your nationality.",
        dialogue: [
            { speaker: "M. Dupont", text: "Bonjour à tous ! Je m'appelle Monsieur Dupont. Je suis votre professeur de français.", translation: "Good morning everyone! My name is Monsieur Dupont. I am your French teacher." },
            { speaker: "M. Dupont", text: "Vous êtes en première année. Dans cette classe, nous allons apprendre le vocabulaire de base, la grammaire et la prononciation.", translation: "You are in first year. In this class, we are going to learn basic vocabulary, grammar and pronunciation." },
            { speaker: "M. Dupont", text: "Est-ce que tout le monde comprend ?", translation: "Does everyone understand?" },
            { speaker: "Élèves",    text: "Oui, monsieur !", translation: "Yes, sir!" },
            { speaker: "M. Dupont", text: "Parfait. Maintenant, présentez-vous à votre voisin. Dites votre nom, votre âge et votre nationalité.", translation: "Perfect. Now, introduce yourself to your neighbour. Say your name, your age and your nationality." }
        ],
        questions: [
            {
                id: "fr-l-a1-4-q1",
                level: "A1",
                prompt: "Comment s'appelle le professeur ?",
                options: ["Monsieur Dupont", "Monsieur Martin", "Madame Dubois", "Monsieur Lambert"],
                answer: "Monsieur Dupont"
            },
            {
                id: "fr-l-a1-4-q2",
                level: "A1",
                prompt: "Que vont-ils apprendre dans ce cours ?",
                options: ["Le vocabulaire, la grammaire et la prononciation", "L'histoire de France", "Les mathématiques", "La littérature"],
                answer: "Le vocabulaire, la grammaire et la prononciation"
            },
            {
                id: "fr-l-a1-4-q3",
                level: "A1",
                prompt: "Que doivent faire les élèves à la fin ?",
                options: ["Se présenter à leur voisin", "Écrire leur nom", "Lire un texte", "Faire leurs devoirs"],
                answer: "Se présenter à leur voisin"
            }
        ]
    },
    {
        id: "fr-l-a1-5",
        level: "A1",
        title: "Le week-end — la météo et les projets",
        script: "Lucas : Salut Emma ! Tu as des projets pour ce week-end ? Emma : Salut ! Je ne sais pas encore. Il fait beau aujourd'hui, mais demain il va pleuvoir. Lucas : Ah oui ? La météo dit qu'il va faire mauvais samedi. Emma : Oui, il va faire froid et il y a des nuages. Lucas : Alors samedi, je vais rester à la maison. Emma : Moi aussi. Je vais regarder un film. Lucas : Et dimanche ? Emma : Dimanche, il va faire beau ! Alors je vais aller au parc. Tu viens avec moi ? Lucas : Oui, bonne idée ! On va faire un pique-nique. Emma : Super ! Et il va faire chaud dimanche, alors on va prendre des glaces !",
        translation: "Lucas: Hi Emma! Do you have plans for this weekend? Emma: Hi! I don't know yet. The weather is nice today, but tomorrow it's going to rain. Lucas: Oh really? The forecast says the weather is going to be bad on Saturday. Emma: Yes, it's going to be cold and there are clouds. Lucas: So on Saturday I'm going to stay at home. Emma: Me too. I'm going to watch a film. Lucas: And Sunday? Emma: On Sunday, it's going to be nice! So I'm going to go to the park. Are you coming with me? Lucas: Yes, good idea! We're going to have a picnic. Emma: Great! And it's going to be warm on Sunday, so we're going to get ice creams!",
        dialogue: [
            { speaker: "Lucas", text: "Salut Emma ! Tu as des projets pour ce week-end ?", translation: "Hi Emma! Do you have plans for this weekend?" },
            { speaker: "Emma",  text: "Salut ! Je ne sais pas encore. Il fait beau aujourd'hui, mais demain il va pleuvoir.", translation: "Hi! I don't know yet. The weather is nice today, but tomorrow it's going to rain." },
            { speaker: "Lucas", text: "Ah oui ? La météo dit qu'il va faire mauvais samedi.", translation: "Oh really? The forecast says the weather is going to be bad on Saturday." },
            { speaker: "Emma",  text: "Oui, il va faire froid et il y a des nuages.", translation: "Yes, it's going to be cold and there are clouds." },
            { speaker: "Lucas", text: "Alors samedi, je vais rester à la maison.", translation: "So on Saturday I'm going to stay at home." },
            { speaker: "Emma",  text: "Moi aussi. Je vais regarder un film.", translation: "Me too. I'm going to watch a film." },
            { speaker: "Lucas", text: "Et dimanche ?", translation: "And Sunday?" },
            { speaker: "Emma",  text: "Dimanche, il va faire beau ! Alors je vais aller au parc. Tu viens avec moi ?", translation: "On Sunday, it's going to be nice! So I'm going to go to the park. Are you coming with me?" },
            { speaker: "Lucas", text: "Oui, bonne idée ! On va faire un pique-nique.", translation: "Yes, good idea! We're going to have a picnic." },
            { speaker: "Emma",  text: "Super ! Et il va faire chaud dimanche, alors on va prendre des glaces !", translation: "Great! And it's going to be warm on Sunday, so we're going to get ice creams!" }
        ],
        questions: [
            {
                id: "fr-l-a1-5-q1",
                level: "A1",
                prompt: "Quel temps va-t-il faire samedi ?",
                options: ["Il va faire mauvais et froid", "Il va faire beau et chaud", "Il va faire beau", "Il va neiger"],
                answer: "Il va faire mauvais et froid"
            },
            {
                id: "fr-l-a1-5-q2",
                level: "A1",
                prompt: "Qu'est-ce qu'Emma va faire samedi ?",
                options: ["Regarder un film à la maison", "Aller au parc", "Faire un pique-nique", "Rester au café"],
                answer: "Regarder un film à la maison"
            },
            {
                id: "fr-l-a1-5-q3",
                level: "A1",
                prompt: "Qu'est-ce que Lucas et Emma vont faire dimanche ?",
                options: ["Faire un pique-nique au parc", "Regarder un film", "Rester à la maison", "Aller au marché"],
                answer: "Faire un pique-nique au parc"
            }
        ]
    }
]
