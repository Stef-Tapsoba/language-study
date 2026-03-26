// data/spanish/reading/a2.ts
import { ReadingPassage } from "../../../types"

export const a2Reading: ReadingPassage[] = [
    {
        id: "es-r-a2-1",
        level: "A2",
        category: "culture",
        title: "Las fiestas de España",
        body: {
            target: "España tiene muchas fiestas y tradiciones únicas. La Tomatina se celebra en Buñol, Valencia, en agosto. Los participantes se lanzan tomates durante una hora. Es una fiesta muy divertida y muy sucia. Los Sanfermines son las fiestas de Pamplona. Durante una semana en julio, la gente corre delante de los toros por las calles de la ciudad. Es una tradición muy antigua y también muy peligrosa. La Semana Santa se celebra en toda España. Las procesiones son muy importantes, especialmente en Sevilla y Málaga. En Navidad, los españoles celebran el 6 de enero, el Día de Reyes, cuando los niños reciben sus regalos.",
            native: "Spain has many unique festivals and traditions. La Tomatina is celebrated in Buñol, Valencia, in August. Participants throw tomatoes at each other for an hour. It's a very fun and very messy festival. The Sanfermines are the festivals of Pamplona. During a week in July, people run in front of the bulls through the streets of the city. It is a very old and also very dangerous tradition. Holy Week is celebrated throughout Spain. The processions are very important, especially in Seville and Málaga. At Christmas, Spaniards celebrate the 6th of January, the Day of the Kings, when children receive their gifts."
        },
        vocabGloss: [
            { word: "se lanzan", translation: "they throw at each other" },
            { word: "sucia", translation: "dirty, messy" },
            { word: "toros", translation: "bulls" },
            { word: "antigua", translation: "old, ancient" },
            { word: "peligrosa", translation: "dangerous" },
            { word: "procesiones", translation: "processions" },
            { word: "regalos", translation: "gifts, presents" }
        ],
        questions: [
            {
                id: "es-r-a2-1-q1",
                level: "A2",
                prompt: "¿En qué ciudad se celebra la Tomatina?",
                options: ["En Buñol", "En Pamplona", "En Sevilla", "En Madrid"],
                answer: "En Buñol"
            },
            {
                id: "es-r-a2-1-q2",
                level: "A2",
                prompt: "¿Qué pasa en los Sanfermines?",
                options: ["La gente corre con los toros", "La gente lanza tomates", "Hay procesiones religiosas", "Los niños reciben regalos"],
                answer: "La gente corre con los toros"
            },
            {
                id: "es-r-a2-1-q3",
                level: "A2",
                prompt: "¿Cuándo reciben regalos los niños españoles?",
                options: ["El 6 de enero", "El 25 de diciembre", "En agosto", "En julio"],
                answer: "El 6 de enero"
            },
            {
                id: "es-r-a2-1-q4",
                level: "A2",
                prompt: "¿Cómo describe el texto los Sanfermines?",
                options: ["Antigua y peligrosa", "Divertida y sucia", "Religiosa e importante", "Famosa y tranquila"],
                answer: "Antigua y peligrosa"
            }
        ]
    },
    {
        id: "es-r-a2-2",
        level: "A2",
        category: "history",
        title: "Los conquistadores",
        body: {
            target: "En el siglo XV, los exploradores españoles llegaron al continente americano. Cristóbal Colón llegó a América en 1492 con tres barcos: la Niña, la Pinta y la Santa María. Pensaba que había llegado a Asia, pero en realidad había encontrado un continente nuevo. Después de Colón, muchos conquistadores españoles viajaron a América. Hernán Cortés conquistó el Imperio Azteca en México. Francisco Pizarro conquistó el Imperio Inca en Perú. Los conquistadores buscaban oro y riquezas. También llevaron el idioma español y la religión cristiana a América. Hoy en día, más de 400 millones de personas hablan español.",
            native: "In the 15th century, Spanish explorers arrived on the American continent. Christopher Columbus arrived in America in 1492 with three ships: the Niña, the Pinta and the Santa María. He thought he had arrived in Asia, but in fact he had found a new continent. After Columbus, many Spanish conquistadors travelled to America. Hernán Cortés conquered the Aztec Empire in Mexico. Francisco Pizarro conquered the Inca Empire in Peru. The conquistadors were looking for gold and riches. They also brought the Spanish language and the Christian religion to America. Today, more than 400 million people speak Spanish."
        },
        vocabGloss: [
            { word: "siglo", translation: "century" },
            { word: "barcos", translation: "ships" },
            { word: "conquistadores", translation: "conquerors, conquistadors" },
            { word: "conquistó", translation: "conquered" },
            { word: "oro", translation: "gold" },
            { word: "riquezas", translation: "riches, wealth" },
            { word: "hoy en día", translation: "nowadays, today" }
        ],
        questions: [
            {
                id: "es-r-a2-2-q1",
                level: "A2",
                prompt: "¿En qué año llegó Cristóbal Colón a América?",
                options: ["En 1492", "En 1500", "En 1400", "En 1520"],
                answer: "En 1492"
            },
            {
                id: "es-r-a2-2-q2",
                level: "A2",
                prompt: "¿Qué conquistó Hernán Cortés?",
                options: ["El Imperio Azteca", "El Imperio Inca", "El Imperio Maya", "El Imperio Romano"],
                answer: "El Imperio Azteca"
            },
            {
                id: "es-r-a2-2-q3",
                level: "A2",
                prompt: "¿Qué buscaban los conquistadores?",
                options: ["Oro y riquezas", "Nuevas plantas", "Arte y cultura", "Especias y té"],
                answer: "Oro y riquezas"
            },
            {
                id: "es-r-a2-2-q4",
                level: "A2",
                prompt: "¿Cuántas personas hablan español hoy en día?",
                options: ["Más de 400 millones", "Más de 100 millones", "Más de 200 millones", "Más de 500 millones"],
                answer: "Más de 400 millones"
            }
        ]
    },
    {
        id: "es-r-a2-3",
        level: "A2",
        category: "everyday",
        title: "El transporte en Madrid",
        body: {
            target: "Madrid tiene un sistema de transporte muy bueno. El metro de Madrid tiene 13 líneas y más de 300 estaciones. Es rápido, limpio y muy eficiente. Los trenes salen cada pocos minutos. También hay muchos autobuses en la ciudad. Los autobuses van a todos los barrios de Madrid, incluso a los lugares donde no llega el metro. Para usar el transporte público, necesitas comprar una tarjeta de transporte. Con esta tarjeta puedes usar el metro, el autobús y el tren de cercanías. El tren de cercanías conecta Madrid con las ciudades y pueblos cercanos. Muchos madrileños también van en bicicleta. Hay carriles bici por toda la ciudad.",
            native: "Madrid has a very good transport system. The Madrid metro has 13 lines and more than 300 stations. It is fast, clean and very efficient. Trains leave every few minutes. There are also many buses in the city. The buses go to all areas of Madrid, even to places where the metro doesn't reach. To use public transport, you need to buy a transport card. With this card you can use the metro, the bus and the commuter train. The commuter train connects Madrid with nearby cities and towns. Many Madrileños also cycle. There are cycle lanes throughout the city."
        },
        vocabGloss: [
            { word: "líneas", translation: "lines (metro)" },
            { word: "estaciones", translation: "stations" },
            { word: "eficiente", translation: "efficient" },
            { word: "barrios", translation: "neighbourhoods, areas" },
            { word: "tarjeta de transporte", translation: "transport card" },
            { word: "cercanías", translation: "commuter trains" },
            { word: "carriles bici", translation: "cycle lanes" }
        ],
        questions: [
            {
                id: "es-r-a2-3-q1",
                level: "A2",
                prompt: "¿Cuántas líneas tiene el metro de Madrid?",
                options: ["13 líneas", "10 líneas", "15 líneas", "8 líneas"],
                answer: "13 líneas"
            },
            {
                id: "es-r-a2-3-q2",
                level: "A2",
                prompt: "¿Para qué sirve la tarjeta de transporte?",
                options: ["Para usar el metro, autobús y cercanías", "Solo para el metro", "Solo para el autobús", "Para comprar billetes de avión"],
                answer: "Para usar el metro, autobús y cercanías"
            },
            {
                id: "es-r-a2-3-q3",
                level: "A2",
                prompt: "¿Qué conecta el tren de cercanías?",
                options: ["Madrid con ciudades y pueblos cercanos", "Las distintas líneas del metro", "Los aeropuertos con el centro", "Los barrios del norte y del sur"],
                answer: "Madrid con ciudades y pueblos cercanos"
            },
            {
                id: "es-r-a2-3-q4",
                level: "A2",
                prompt: "¿Cómo se describe el metro en el texto?",
                options: ["Rápido, limpio y eficiente", "Antiguo pero útil", "Caro pero moderno", "Lento pero barato"],
                answer: "Rápido, limpio y eficiente"
            }
        ]
    },
    {
        id: "es-r-a2-4",
        level: "A2",
        category: "literature",
        title: "Una carta de amor (adapted)",
        body: {
            target: "Querida María:\n\nTe escribo desde Sevilla. El tiempo aquí es muy bueno — hace sol y la temperatura es perfecta. Ayer fui al mercado y compré naranjas y aceitunas para ti. También visité la Catedral de Sevilla. ¡Es increíble! El edificio es enorme y muy antiguo.\n\nPor la tarde, caminé por el barrio de Santa Cruz. Las calles son pequeñas y hay muchas flores en las ventanas. Vi un flamenco en la plaza. Los bailarines llevaban ropa muy colorida y la música era emocionante.\n\nTe echo mucho de menos. Vuelvo a casa el sábado. Hasta pronto.\n\nCon todo mi amor,\nJuan",
            native: "Dear María,\n\nI'm writing to you from Seville. The weather here is very good — it's sunny and the temperature is perfect. Yesterday I went to the market and bought oranges and olives for you. I also visited Seville Cathedral. It's incredible! The building is enormous and very old.\n\nIn the afternoon, I walked through the Santa Cruz neighbourhood. The streets are small and there are many flowers in the windows. I saw a flamenco in the square. The dancers were wearing very colourful clothes and the music was exciting.\n\nI miss you so much. I'm coming home on Saturday. See you soon.\n\nWith all my love,\nJuan"
        },
        vocabGloss: [
            { word: "naranjas", translation: "oranges" },
            { word: "aceitunas", translation: "olives" },
            { word: "enorme", translation: "enormous, huge" },
            { word: "barrio", translation: "neighbourhood" },
            { word: "bailarines", translation: "dancers" },
            { word: "emocionante", translation: "exciting, moving" },
            { word: "te echo de menos", translation: "I miss you" }
        ],
        questions: [
            {
                id: "es-r-a2-4-q1",
                level: "A2",
                prompt: "¿Desde dónde escribe Juan?",
                options: ["Desde Sevilla", "Desde Madrid", "Desde Barcelona", "Desde México"],
                answer: "Desde Sevilla"
            },
            {
                id: "es-r-a2-4-q2",
                level: "A2",
                prompt: "¿Qué compró Juan en el mercado?",
                options: ["Naranjas y aceitunas", "Pan y queso", "Flores y ropa", "Café y churros"],
                answer: "Naranjas y aceitunas"
            },
            {
                id: "es-r-a2-4-q3",
                level: "A2",
                prompt: "¿Cuándo vuelve Juan a casa?",
                options: ["El sábado", "El domingo", "El lunes", "El viernes"],
                answer: "El sábado"
            },
            {
                id: "es-r-a2-4-q4",
                level: "A2",
                prompt: "¿Qué vio Juan en la plaza?",
                options: ["Un flamenco", "Una procesión", "Una corrida de toros", "Un mercado"],
                answer: "Un flamenco"
            }
        ]
    },
    {
        id: "es-r-a2-5",
        level: "A2",
        category: "everyday",
        title: "Un verano inolvidable",
        body: {
            target: "Aquel verano fue diferente a todos los demás. Tenía dieciséis años y mis padres me dejaron ir solo a casa de mi abuela en Galicia. Era la primera vez que viajaba sin ellos.\n\nCuando llegué a la estación, llovía. El paisaje era verde y tranquilo — muy diferente a Madrid, donde vivía. Mi abuela me esperaba en la puerta. Me preparó caldo gallego y me contó historias de cuando era joven.\n\nDurante las semanas que estuve allí, aprendí a pescar con mi tío, visité pueblos pequeños y nadé en el mar. Una tarde, mientras caminaba por la playa, encontré una botella con una carta dentro. La carta estaba escrita en francés. No entendí mucho, pero guardé la carta.\n\nAl volver a Madrid en septiembre, busqué la traducción y descubrí que era una carta de amor de 1985. Nunca supe quién la escribió, pero todavía la tengo en mi cajón.",
            native: "That summer was different from all the others. I was sixteen years old and my parents let me go alone to my grandmother's house in Galicia. It was the first time I had travelled without them.\n\nWhen I arrived at the station, it was raining. The landscape was green and peaceful — very different from Madrid, where I lived. My grandmother was waiting at the door. She made me Galician broth and told me stories from when she was young.\n\nDuring the weeks I was there, I learned to fish with my uncle, visited small villages and swam in the sea. One afternoon, while walking along the beach, I found a bottle with a letter inside. The letter was written in French. I didn't understand much, but I kept the letter.\n\nWhen I got back to Madrid in September, I looked up the translation and discovered it was a love letter from 1985. I never found out who wrote it, but I still have it in my drawer."
        },
        vocabGloss: [
            { word: "inolvidable", translation: "unforgettable" },
            { word: "caldo gallego", translation: "Galician broth (traditional soup)" },
            { word: "pescar", translation: "to fish" },
            { word: "guardar", translation: "to keep, to put away" },
            { word: "la traducción", translation: "translation" },
            { word: "descubrí", translation: "I discovered" },
            { word: "el cajón", translation: "drawer" }
        ],
        questions: [
            {
                id: "es-r-a2-5-q1",
                level: "A2",
                prompt: "¿Por qué aquel verano fue especial para el narrador?",
                options: ["Fue la primera vez que viajó sin sus padres", "Encontró mucho dinero en la playa", "Su abuela le enseñó a hablar francés", "Ganó un concurso de pesca"],
                answer: "Fue la primera vez que viajó sin sus padres"
            },
            {
                id: "es-r-a2-5-q2",
                level: "A2",
                prompt: "¿Qué encontró el narrador en la playa?",
                options: ["Una botella con una carta", "Una moneda antigua", "Una foto de su familia", "Un libro en francés"],
                answer: "Una botella con una carta"
            },
            {
                id: "es-r-a2-5-q3",
                level: "A2",
                prompt: "¿En qué año fue escrita la carta?",
                options: ["En 1985", "En 1975", "En 1995", "En 2005"],
                answer: "En 1985"
            },
            {
                id: "es-r-a2-5-q4",
                level: "A2",
                prompt: "¿Qué hizo el narrador con la carta al volver a Madrid?",
                options: ["Buscó la traducción", "La tiró", "Se la mandó a su abuela", "La publicó en el periódico"],
                answer: "Buscó la traducción"
            }
        ]
    }
]
