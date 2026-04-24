// data/spanish/reading/a2.ts
// Spanish A2 reading passages — 5 passages covering all 5 blocks.
// body.target = Spanish (language being studied)
// body.native = English (learner's reference language)

import { ReadingPassage } from "../../../types"

export const a2Reading: ReadingPassage[] = [
  {
    id: "es-r-a2-1",
    level: "A2",
    category: "everyday",
    title: "Un fin de semana en Medellín",
    body: {
      target: "El mes pasado fui a Medellín con dos amigos. Salimos el viernes por la mañana y llegamos al mediodía. Hacía mucho calor, pero el cielo estaba despejado — un azul increíble.\n\nEl primer día fuimos al barrio Laureles y comimos en un restaurante pequeño cerca de la plaza. Pedí bandeja paisa por primera vez. Estaba buenísima, aunque enorme — no pude terminarla. Por la tarde paseamos por el Parque Poblado y tomamos café en una terraza. La ciudad era exactamente como la imaginaba: moderna, animada y llena de gente joven.\n\nEl sábado visitamos el Museo de Antioquia y vimos las esculturas de Botero. No sabía nada de él antes del viaje. Me pareció un artista increíble. Después subimos en el Metro Cable hasta Santo Domingo, que es uno de los barrios más conocidos de la transformación urbana de la ciudad. Hacía viento allá arriba, pero las vistas eran espectaculares.\n\nEl domingo fue más tranquilo. Caminamos por el mercado de frutas y compramos mangos y maracuyás. Al final, cuando llegamos al aeropuerto, los tres dijimos lo mismo: Medellín era nuestra ciudad favorita de Colombia. Volveremos seguro.",
      native: "Last month I went to Medellín with two friends. We left on Friday morning and arrived at midday. It was very hot, but the sky was clear — an incredible blue.\n\nOn the first day we went to the Laureles neighbourhood and ate at a small restaurant near the square. I ordered bandeja paisa for the first time. It was delicious, though enormous — I couldn't finish it. In the afternoon we strolled through Parque Poblado and had coffee on a terrace. The city was exactly as I had imagined it: modern, lively and full of young people.\n\nOn Saturday we visited the Museo de Antioquia and saw Botero's sculptures. I knew nothing about him before the trip. I thought he was an incredible artist. Afterwards we took the Metro Cable up to Santo Domingo, which is one of the most famous neighbourhoods from the city's urban transformation. It was windy up there, but the views were spectacular.\n\nSunday was more relaxed. We walked through the fruit market and bought mangoes and passion fruit. In the end, when we arrived at the airport, the three of us said the same thing: Medellín was our favourite city in Colombia. We'll definitely go back."
    },
    vocabGloss: [
      { word: "despejado", translation: "clear (sky)" },
      { word: "bandeja paisa", translation: "traditional Colombian dish from Antioquia region" },
      { word: "el artista", translation: "the artist" },
      { word: "las vistas", translation: "the views" },
      { word: "la transformación urbana", translation: "urban transformation" },
      { word: "el maracuyá", translation: "passion fruit" },
    ],
    questions: [
      {
        id: "es-r-a2-1-q1",
        level: "A2",
        prompt: "¿Por qué no pudo terminar la bandeja paisa el narrador?",
        options: ["Porque no le gustó.", "Porque estaba muy picante.", "Porque era demasiado grande.", "Porque ya había comido antes."],
        answer: "Porque era demasiado grande.",
      },
      {
        id: "es-r-a2-1-q2",
        level: "A2",
        prompt: "¿Qué hicieron el sábado?",
        options: ["Fueron al mercado de frutas.", "Visitaron un museo y subieron en el Metro Cable.", "Comieron en el barrio Laureles.", "Llegaron al aeropuerto."],
        answer: "Visitaron un museo y subieron en el Metro Cable.",
      },
      {
        id: "es-r-a2-1-q3",
        level: "A2",
        prompt: "¿Qué sabía el narrador sobre Botero antes del viaje?",
        options: ["Que era el artista más famoso de Colombia.", "Nada — no sabía nada de él.", "Que vivía en Medellín.", "Que sus obras estaban en el Louvre."],
        answer: "Nada — no sabía nada de él.",
      },
    ],
  },

  {
    id: "es-r-a2-2",
    level: "A2",
    category: "everyday",
    title: "Una noche que no olvidaré",
    body: {
      target: "Era un martes normal. Hacía frío y llovía cuando salí del trabajo. Iba en el metro hacia casa, escuchando música, sin pensar en nada especial. Llevaba los auriculares puestos y miraba por la ventana oscura.\n\nDe repente, un señor mayor se sentó a mi lado y me tocó el brazo suavemente. Me quité los auriculares. 'Disculpe, joven, ¿va usted a la estación Hidalgo?' Me preguntó con una voz muy baja. Le dije que sí. 'Es que estoy un poco perdido. Nunca tomo el metro solo. Normalmente mi nieta me acompaña, pero hoy no pudo venir.'\n\nEmpezamos a hablar. Se llamaba don Ernesto y tenía ochenta y dos años. Vivía en el mismo barrio desde hacía cuarenta años. Me contó que de joven era carpintero y que hacía muebles para casas de toda la Ciudad de México. 'Mis manos hicieron las sillas de muchas cocinas de esta ciudad', dijo, y se las miró con orgullo.\n\nCuando llegamos a Hidalgo, lo ayudé a bajar las escaleras y lo llevé hasta la salida. Me dio las gracias varias veces. 'Hoy los jóvenes ya no ayudan tanto', me dijo al final. 'Usted es una excepción.'\n\nVolví a casa pensando en él. A veces una conversación inesperada cambia el día entero.",
      native: "It was a normal Tuesday. It was cold and raining when I left work. I was on the metro heading home, listening to music, not thinking about anything in particular. I had my headphones on and was looking out of the dark window.\n\nSuddenly, an elderly gentleman sat down next to me and touched my arm gently. I took off my headphones. 'Excuse me, young person, are you going to Hidalgo station?' He asked in a very quiet voice. I told him yes. 'It's just that I'm a little lost. I never take the metro alone. Usually my granddaughter comes with me, but she couldn't come today.'\n\nWe started talking. His name was don Ernesto and he was eighty-two years old. He had lived in the same neighbourhood for forty years. He told me that when he was young he was a carpenter and that he made furniture for homes all over Mexico City. 'My hands made the chairs of many kitchens in this city,' he said, and looked at them with pride.\n\nWhen we arrived at Hidalgo, I helped him down the stairs and walked him to the exit. He thanked me several times. 'Young people today don't help so much anymore,' he said at the end. 'You are an exception.'\n\nI went home thinking about him. Sometimes an unexpected conversation changes the whole day."
    },
    vocabGloss: [
      { word: "los auriculares", translation: "headphones" },
      { word: "el carpintero", translation: "carpenter" },
      { word: "el mueble", translation: "piece of furniture" },
      { word: "el orgullo", translation: "pride" },
      { word: "la salida", translation: "exit" },
      { word: "la excepción", translation: "exception" },
    ],
    questions: [
      {
        id: "es-r-a2-2-q1",
        level: "A2",
        prompt: "¿Por qué iba don Ernesto solo en el metro?",
        options: ["Porque no tenía nieta.", "Porque su nieta no pudo acompañarlo ese día.", "Porque prefería viajar solo.", "Porque vivía lejos de su familia."],
        answer: "Porque su nieta no pudo acompañarlo ese día.",
      },
      {
        id: "es-r-a2-2-q2",
        level: "A2",
        prompt: "¿Cuál era el oficio de don Ernesto cuando era joven?",
        options: ["Cocinero", "Médico", "Carpintero", "Músico"],
        answer: "Carpintero",
      },
      {
        id: "es-r-a2-2-q3",
        level: "A2",
        prompt: "¿Cuánto tiempo llevaba don Ernesto viviendo en el mismo barrio?",
        options: ["Diez años", "Veinte años", "Cuarenta años", "Ochenta y dos años"],
        answer: "Cuarenta años",
      },
    ],
  },

  {
    id: "es-r-a2-3",
    level: "A2",
    category: "culture",
    title: "Ciudades latinoamericanas: ¿cuál es la mejor para vivir?",
    body: {
      target: "Latinoamérica tiene algunas de las ciudades más fascinantes del mundo. Pero, ¿cuál es la mejor para vivir? Depende mucho de lo que buscas.\n\nBuenos Aires es la ciudad más europea de América Latina. Sus barrios son increíblemente bonitos, la arquitectura es elegante y la cultura es riquísima. Tiene más teatros por persona que casi ninguna otra ciudad del mundo. Sin embargo, los problemas económicos hacen que la vida sea más cara de lo que parece.\n\nMedellín, en Colombia, es uno de los casos más impresionantes de transformación urbana del siglo XXI. Hace treinta años era la ciudad más peligrosa del mundo. Hoy es moderna, innovadora y llena de parques y espacio público. Tiene el mejor clima de Colombia — ni muy caliente ni muy frío. Lo que más atrae a los extranjeros es la calidez de su gente.\n\nCiudad de México es la ciudad más grande de América Latina y una de las más vibrantes del planeta. Hay museos mejores que en muchas capitales europeas, una gastronomía sin rival y una vida cultural que nunca para. El problema es el tráfico — es el peor de la región — y la contaminación es bastante alta.\n\nEn definitiva, no hay una respuesta única. La mejor ciudad para vivir es la que mejor se adapta a quien eres y a lo que necesitas.",
      native: "Latin America has some of the most fascinating cities in the world. But which is the best to live in? It depends a great deal on what you're looking for.\n\nBuenos Aires is the most European city in Latin America. Its neighbourhoods are incredibly beautiful, the architecture is elegant and the culture is extremely rich. It has more theatres per person than almost any other city in the world. However, economic problems mean that life is more expensive than it appears.\n\nMedellín, in Colombia, is one of the most impressive cases of urban transformation in the twenty-first century. Thirty years ago it was the most dangerous city in the world. Today it is modern, innovative and full of parks and public space. It has the best climate in Colombia — neither too hot nor too cold. What attracts foreigners most is the warmth of its people.\n\nMexico City is the largest city in Latin America and one of the most vibrant on the planet. It has better museums than many European capitals, unrivalled gastronomy and a cultural life that never stops. The problem is the traffic — it's the worst in the region — and the pollution is quite high.\n\nIn the end, there's no single answer. The best city to live in is the one that best suits who you are and what you need."
    },
    vocabGloss: [
      { word: "la calidez", translation: "warmth (of people)" },
      { word: "innovador/a", translation: "innovative" },
      { word: "la gastronomía", translation: "gastronomy / cuisine" },
      { word: "el tráfico", translation: "traffic" },
      { word: "en definitiva", translation: "in the end / ultimately" },
      { word: "la transformación urbana", translation: "urban transformation" },
    ],
    questions: [
      {
        id: "es-r-a2-3-q1",
        level: "A2",
        prompt: "Según el texto, ¿qué caracteriza a Medellín hoy comparada con hace treinta años?",
        options: ["Ahora tiene más teatros que Buenos Aires.", "Pasó de ser la ciudad más peligrosa a ser moderna e innovadora.", "El clima es mejor que en Ciudad de México.", "La gente es menos cálida que antes."],
        answer: "Pasó de ser la ciudad más peligrosa a ser moderna e innovadora.",
      },
      {
        id: "es-r-a2-3-q2",
        level: "A2",
        prompt: "¿Cuál es el principal problema de Ciudad de México según el texto?",
        options: ["La falta de museos", "El clima", "El tráfico y la contaminación", "Los problemas económicos"],
        answer: "El tráfico y la contaminación",
      },
      {
        id: "es-r-a2-3-q3",
        level: "A2",
        prompt: "¿Cuál es la conclusión del texto sobre qué ciudad es la mejor?",
        options: ["Buenos Aires es la mejor por su cultura.", "Medellín es la mejor por el clima.", "No hay una respuesta única — depende de cada persona.", "Ciudad de México es la mejor por su gastronomía."],
        answer: "No hay una respuesta única — depende de cada persona.",
      },
    ],
  },

  {
    id: "es-r-a2-4",
    level: "A2",
    category: "dialogue",
    title: "Una conversación sobre el pasado",
    body: {
      target: "— ¿Cuándo conociste a tu mejor amigo?\n— Lo conocí en la universidad, hace como diez años. Fue en una clase de historia en la que los dos nos quedamos dormidos el mismo día. El profesor nos miró y los dos nos pusimos rojos. Después nos reímos en el pasillo y así empezamos a hablar.\n— ¡Qué historia! ¿Y eran buenos estudiantes?\n— Yo era bastante buena. Él, no tanto. Siempre llegaba tarde, nunca traía los apuntes... Pero era el más gracioso de la clase. En aquella época él vivía con tres compañeros en un apartamento pequeñísimo cerca de la facultad. Yo vivía con mis padres todavía.\n— ¿Y desde entonces siguen siendo amigos?\n— Sí, aunque ya no nos vemos tanto como antes. Él se mudó a Guadalajara hace tres años y yo sigo en Ciudad de México. Lo llamo cada semana. Desde hace un año él también tiene familia, así que todavía hay menos tiempo. Pero cuando nos vemos, es como si no hubiera pasado el tiempo.",
      native: "— When did you meet your best friend?\n— I met him at university, about ten years ago. It was in a history class where we both fell asleep on the same day. The professor looked at us and we both went red. Afterwards we laughed in the corridor and that's how we started talking.\n— What a story! And were you good students?\n— I was pretty good. He, not so much. He always arrived late, never brought notes... But he was the funniest person in the class. Back then he lived with three housemates in a tiny flat near the faculty. I was still living with my parents.\n— And have you been friends ever since?\n— Yes, although we don't see each other as much as before. He moved to Guadalajara three years ago and I'm still in Mexico City. I call him every week. For the past year he's also had a family, so there's even less time. But when we do see each other, it's as if no time has passed."
    },
    vocabGloss: [
      { word: "quedarse dormido/a", translation: "to fall asleep" },
      { word: "los apuntes", translation: "notes (class notes)" },
      { word: "gracioso/a", translation: "funny / amusing" },
      { word: "la facultad", translation: "university faculty / campus" },
      { word: "mudarse", translation: "to move (house)" },
      { word: "como si no hubiera pasado el tiempo", translation: "as if no time had passed" },
    ],
    questions: [
      {
        id: "es-r-a2-4-q1",
        level: "A2",
        prompt: "¿Cómo se conocieron los dos amigos?",
        options: ["En el trabajo.", "En una clase donde los dos se quedaron dormidos.", "En un partido de fútbol.", "A través de amigos comunes."],
        answer: "En una clase donde los dos se quedaron dormidos.",
      },
      {
        id: "es-r-a2-4-q2",
        level: "A2",
        prompt: "¿Dónde vive el mejor amigo ahora?",
        options: ["En Ciudad de México", "En Buenos Aires", "En Guadalajara", "Cerca de la facultad"],
        answer: "En Guadalajara",
      },
      {
        id: "es-r-a2-4-q3",
        level: "A2",
        prompt: "¿Cómo mantienen la amistad a pesar de la distancia?",
        options: ["Se ven cada semana.", "La narradora lo llama cada semana.", "Él la visita en Ciudad de México.", "Se mandan mensajes por correo."],
        answer: "La narradora lo llama cada semana.",
      },
    ],
  },

  {
    id: "es-r-a2-5",
    level: "A2",
    category: "everyday",
    title: "El vuelo cancelado",
    body: {
      target: "Era un domingo por la mañana. Había salido de casa muy temprano para llegar al aeropuerto con tiempo. Tenía un vuelo a las nueve hacia Lima — un viaje que llevaba meses planeando.\n\nCuando llegué a la terminal, el tablero de salidas mostraba algo que no esperaba: 'Cancelado'. Sentí un golpe en el estómago. Me acerqué al mostrador de la aerolínea y pregunté qué había pasado. La empleada me explicó, con calma, que había habido un problema técnico en el avión y que el siguiente vuelo disponible sería a las seis de la tarde.\n\nAl principio me desesperé. Había reservado el hotel, tenía una excursión a Machu Picchu el lunes y no quería perder ese día. Pero entonces decidí cambiar de actitud. Llamé al hotel para avisarles. Les expliqué la situación y ellos me dijeron que no habría ningún problema.\n\nAprovechando las horas de espera, fui a un café del aeropuerto, pedí un desayuno enorme y me puse a leer. También llamé a mi madre para contarle lo que pasaba. Ella me dijo que estas cosas siempre tienen solución.\n\nA las seis embarqué sin más problemas. Llegué a Lima de noche, cansada pero tranquila. A veces los planes cambian, y hay que adaptarse.",
      native: "It was a Sunday morning. I had left home very early to get to the airport with time to spare. I had a flight at nine to Lima — a trip I had been planning for months.\n\nWhen I arrived at the terminal, the departures board showed something I hadn't expected: 'Cancelled'. I felt a punch in my stomach. I went up to the airline counter and asked what had happened. The employee explained to me, calmly, that there had been a technical problem with the plane and that the next available flight would be at six in the evening.\n\nAt first I panicked. I had booked the hotel, I had an excursion to Machu Picchu on Monday and I didn't want to lose that day. But then I decided to change my attitude. I called the hotel to let them know. I explained the situation and they told me there would be no problem.\n\nMaking the most of the waiting time, I went to a café in the airport, ordered a big breakfast and started reading. I also called my mother to tell her what was happening. She told me these things always have a solution.\n\nAt six I boarded without any further problems. I arrived in Lima at night, tired but calm. Sometimes plans change, and you have to adapt."
    },
    vocabGloss: [
      { word: "el tablero de salidas", translation: "departures board" },
      { word: "cancelado", translation: "cancelled" },
      { word: "el mostrador", translation: "counter / desk" },
      { word: "la excursión", translation: "excursion / day trip" },
      { word: "cambiar de actitud", translation: "to change your attitude" },
      { word: "embarcar", translation: "to board (a plane)" },
    ],
    questions: [
      {
        id: "es-r-a2-5-q1",
        level: "A2",
        prompt: "¿Por qué cancelaron el vuelo?",
        options: ["Por una huelga de pilotos", "Por mal tiempo", "Por un problema técnico en el avión", "Por falta de pasajeros"],
        answer: "Por un problema técnico en el avión",
      },
      {
        id: "es-r-a2-5-q2",
        level: "A2",
        prompt: "¿Qué hizo la narradora mientras esperaba en el aeropuerto?",
        options: ["Durmió en el aeropuerto.", "Fue a un café, desayunó, leyó y llamó a su madre.", "Buscó otro aeropuerto.", "Canceló toda la reserva del viaje."],
        answer: "Fue a un café, desayunó, leyó y llamó a su madre.",
      },
      {
        id: "es-r-a2-5-q3",
        level: "A2",
        prompt: "¿Cuál es el mensaje final del texto?",
        options: ["Los vuelos siempre se cancelan.", "Hay que reclamar siempre a la aerolínea.", "A veces los planes cambian y hay que adaptarse.", "Es mejor viajar en tren que en avión."],
        answer: "A veces los planes cambian y hay que adaptarse.",
      },
    ],
  },
]

// Alias for backward compatibility
export const esReadingA2 = a2Reading
