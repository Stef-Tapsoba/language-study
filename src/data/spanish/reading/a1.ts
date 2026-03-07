// data/spanish/reading/a1.ts
import { ReadingPassage } from "../../../types"

export const a1Reading: ReadingPassage[] = [
    {
        id: "es-r-a1-1",
        level: "A1",
        category: "everyday",
        title: "Mi familia",
        body: {
            target: "Me llamo Ana. Tengo una familia pequeña. Mi madre se llama Carmen. Mi padre se llama Carlos. Tengo un hermano. Se llama Miguel. Miguel tiene doce años. Yo tengo quince años. Vivimos en Madrid. Nuestra casa es grande. Tenemos un perro. El perro se llama Max. Max es pequeño y muy simpático. Mi familia es muy importante para mí.",
            native: "My name is Ana. I have a small family. My mother's name is Carmen. My father's name is Carlos. I have one brother. His name is Miguel. Miguel is twelve years old. I am fifteen years old. We live in Madrid. Our house is big. We have a dog. The dog's name is Max. Max is small and very friendly. My family is very important to me."
        },
        vocabGloss: [
            { word: "familia", translation: "family" },
            { word: "pequeña", translation: "small (feminine)" },
            { word: "madre", translation: "mother" },
            { word: "padre", translation: "father" },
            { word: "hermano", translation: "brother" },
            { word: "vivimos", translation: "we live" },
            { word: "simpático", translation: "friendly, nice" }
        ],
        questions: [
            {
                id: "es-r-a1-1-q1",
                level: "A1",
                prompt: "¿Cómo se llama la madre de Ana?",
                options: ["Carmen", "Ana", "Miguel", "Max"],
                answer: "Carmen"
            },
            {
                id: "es-r-a1-1-q2",
                level: "A1",
                prompt: "¿Cuántos años tiene Miguel?",
                options: ["Doce años", "Quince años", "Diez años", "Veinte años"],
                answer: "Doce años"
            },
            {
                id: "es-r-a1-1-q3",
                level: "A1",
                prompt: "¿Dónde vive la familia?",
                options: ["En Madrid", "En Barcelona", "En París", "En México"],
                answer: "En Madrid"
            }
        ]
    },
    {
        id: "es-r-a1-2",
        level: "A1",
        category: "everyday",
        title: "Un día normal",
        body: {
            target: "Me levanto a las siete de la mañana. Desayuno café y pan con mantequilla. A las ocho voy a la escuela. En la escuela tengo clases de matemáticas, español e inglés. Como a las dos de la tarde. Por la tarde hago los deberes. A las seis juego con mis amigos en el parque. Ceno con mi familia a las ocho. Me acuesto a las diez. ¡Es un día muy ocupado!",
            native: "I get up at seven in the morning. I have coffee and bread with butter for breakfast. At eight I go to school. At school I have maths, Spanish and English classes. I have lunch at two in the afternoon. In the afternoon I do my homework. At six I play with my friends in the park. I have dinner with my family at eight. I go to bed at ten. It's a very busy day!"
        },
        vocabGloss: [
            { word: "me levanto", translation: "I get up" },
            { word: "desayuno", translation: "I have breakfast / breakfast" },
            { word: "mantequilla", translation: "butter" },
            { word: "escuela", translation: "school" },
            { word: "deberes", translation: "homework" },
            { word: "me acuesto", translation: "I go to bed" },
            { word: "ocupado", translation: "busy" }
        ],
        questions: [
            {
                id: "es-r-a1-2-q1",
                level: "A1",
                prompt: "¿A qué hora se levanta?",
                options: ["A las siete", "A las ocho", "A las seis", "A las diez"],
                answer: "A las siete"
            },
            {
                id: "es-r-a1-2-q2",
                level: "A1",
                prompt: "¿Qué hace a las seis de la tarde?",
                options: ["Juega con sus amigos", "Va a la escuela", "Hace los deberes", "Come con la familia"],
                answer: "Juega con sus amigos"
            },
            {
                id: "es-r-a1-2-q3",
                level: "A1",
                prompt: "¿Qué desayuna?",
                options: ["Café y pan con mantequilla", "Leche y cereales", "Fruta y yogur", "Huevos y jamón"],
                answer: "Café y pan con mantequilla"
            }
        ]
    },
    {
        id: "es-r-a1-3",
        level: "A1",
        category: "dialogue",
        title: "En el café",
        body: {
            target: "— Buenos días. ¿Qué desea?\n— Buenos días. Quiero un café con leche, por favor.\n— ¿Grande o pequeño?\n— Pequeño, por favor. ¿Tiene croissants?\n— Sí, tenemos croissants y también tenemos bocadillos.\n— Un croissant, por favor. ¿Cuánto es?\n— El café con leche es dos euros y el croissant es uno cincuenta.\n— Aquí tiene tres euros cincuenta.\n— Gracias. ¡Que aproveche!\n— Gracias. ¡Hasta luego!",
            native: "— Good morning. What would you like?\n— Good morning. I'd like a white coffee, please.\n— Large or small?\n— Small, please. Do you have croissants?\n— Yes, we have croissants and we also have sandwiches.\n— A croissant, please. How much is it?\n— The white coffee is two euros and the croissant is one fifty.\n— Here is three euros fifty.\n— Thank you. Enjoy your meal!\n— Thank you. Goodbye!"
        },
        vocabGloss: [
            { word: "desea", translation: "would you like / do you want" },
            { word: "quiero", translation: "I want / I'd like" },
            { word: "café con leche", translation: "white coffee (coffee with milk)" },
            { word: "bocadillo", translation: "sandwich (on a baguette)" },
            { word: "¿Cuánto es?", translation: "How much is it?" },
            { word: "¡Que aproveche!", translation: "Enjoy your meal!" }
        ],
        questions: [
            {
                id: "es-r-a1-3-q1",
                level: "A1",
                prompt: "¿Qué pide la persona?",
                options: ["Un café con leche y un croissant", "Un té y un bocadillo", "Un café solo y una tarta", "Un zumo y un croissant"],
                answer: "Un café con leche y un croissant"
            },
            {
                id: "es-r-a1-3-q2",
                level: "A1",
                prompt: "¿Cuánto cuesta el café con leche?",
                options: ["Dos euros", "Uno cincuenta", "Tres euros", "Un euro"],
                answer: "Dos euros"
            },
            {
                id: "es-r-a1-3-q3",
                level: "A1",
                prompt: "¿Qué tamaño de café quiere?",
                options: ["Pequeño", "Grande", "Mediano", "Extra grande"],
                answer: "Pequeño"
            }
        ]
    },
    {
        id: "es-r-a1-4",
        level: "A1",
        category: "culture",
        title: "Los saludos en España",
        body: {
            target: "En España, los saludos son muy importantes. Por la mañana decimos '¡Buenos días!'. Por la tarde decimos '¡Buenas tardes!'. Por la noche decimos '¡Buenas noches!'. Entre amigos decimos '¡Hola!' o '¿Qué tal?'. Cuando nos despedimos decimos '¡Adiós!' o '¡Hasta luego!'. En España es normal dar dos besos en las mejillas. Los hombres también se dan la mano. Es importante saludar a todos cuando llegas a un lugar.",
            native: "In Spain, greetings are very important. In the morning we say 'Good morning!'. In the afternoon we say 'Good afternoon!'. In the evening we say 'Good evening / Good night!'. Among friends we say 'Hello!' or 'How are you?'. When we say goodbye we say 'Goodbye!' or 'See you later!'. In Spain it is normal to give two kisses on the cheeks. Men also shake hands. It is important to greet everyone when you arrive somewhere."
        },
        vocabGloss: [
            { word: "saludos", translation: "greetings" },
            { word: "nos despedimos", translation: "we say goodbye" },
            { word: "besos", translation: "kisses" },
            { word: "mejillas", translation: "cheeks" },
            { word: "se dan la mano", translation: "they shake hands" },
            { word: "llegas", translation: "you arrive" }
        ],
        questions: [
            {
                id: "es-r-a1-4-q1",
                level: "A1",
                prompt: "¿Qué decimos por la mañana?",
                options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta luego"],
                answer: "Buenos días"
            },
            {
                id: "es-r-a1-4-q2",
                level: "A1",
                prompt: "¿Cuántos besos se dan normalmente en España?",
                options: ["Dos", "Uno", "Tres", "Cuatro"],
                answer: "Dos"
            },
            {
                id: "es-r-a1-4-q3",
                level: "A1",
                prompt: "¿Qué dicen los hombres además de los besos?",
                options: ["Se dan la mano", "Se abrazan", "Dicen 'Buenos días'", "Nada especial"],
                answer: "Se dan la mano"
            }
        ]
    },
    {
        id: "es-r-a1-5",
        level: "A1",
        category: "culture",
        title: "La comida española",
        body: {
            target: "La comida española es muy famosa. El desayuno es pequeño: café con leche y tostadas. La comida es la comida más importante del día. Es a las dos o tres de la tarde. Muchas personas comen en casa con su familia. La cena es más tarde, a las nueve o las diez de la noche. Un plato típico español es la paella. La paella tiene arroz, verduras y mariscos o pollo. La tortilla española es también muy popular. Tiene huevos y patatas.",
            native: "Spanish food is very famous. Breakfast is small: white coffee and toast. Lunch is the most important meal of the day. It is at two or three in the afternoon. Many people eat at home with their family. Dinner is later, at nine or ten in the evening. A typical Spanish dish is paella. Paella has rice, vegetables and seafood or chicken. The Spanish omelette is also very popular. It has eggs and potatoes."
        },
        vocabGloss: [
            { word: "tostadas", translation: "toast" },
            { word: "comida", translation: "lunch / food / meal" },
            { word: "cena", translation: "dinner" },
            { word: "paella", translation: "paella (rice dish)" },
            { word: "arroz", translation: "rice" },
            { word: "mariscos", translation: "seafood" },
            { word: "tortilla española", translation: "Spanish omelette" }
        ],
        questions: [
            {
                id: "es-r-a1-5-q1",
                level: "A1",
                prompt: "¿A qué hora es la comida normalmente en España?",
                options: ["A las dos o tres", "A las doce", "A las seis", "A las nueve"],
                answer: "A las dos o tres"
            },
            {
                id: "es-r-a1-5-q2",
                level: "A1",
                prompt: "¿Qué tiene la tortilla española?",
                options: ["Huevos y patatas", "Arroz y verduras", "Mariscos y pollo", "Pan y mantequilla"],
                answer: "Huevos y patatas"
            },
            {
                id: "es-r-a1-5-q3",
                level: "A1",
                prompt: "¿Cuál es la comida más importante del día en España?",
                options: ["La comida (almuerzo)", "El desayuno", "La cena", "El café"],
                answer: "La comida (almuerzo)"
            }
        ]
    }
]
