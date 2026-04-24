// data/spanish/listening/a2.ts
// Spanish A2 listening exercises — 4 exercises across all blocks.
// All scripts are TTS-ready Latin American Spanish.

import { ListeningExercise } from "../../../types"

export const a2Listening: ListeningExercise[] = [
  {
    id: "es-l-a2-1",
    level: "A2",
    title: "Una noche extraña — past tenses contrast",
    script: "El sábado por la noche no pude dormir. Era como la una de la mañana y estaba leyendo en el sofá cuando escuché un ruido enorme en la calle. Me asomé a la ventana y vi dos coches parados. Al parecer, se habían chocado. Los conductores estaban de pie, discutiendo. Había gente mirando desde las ventanas de los edificios. Todo duró como una hora. Al final llegó la policía y los conductores se calmaron. Cuando por fin me acosté, eran casi las tres. Al día siguiente estaba agotado.",
    translation: "On Saturday night I couldn't sleep. It was about one in the morning and I was reading on the sofa when I heard an enormous noise in the street. I looked out of the window and saw two cars stopped. Apparently they had crashed into each other. The drivers were standing up, arguing. There were people watching from the windows of the buildings. The whole thing lasted about an hour. In the end the police arrived and the drivers calmed down. When I finally went to bed, it was nearly three. The next day I was exhausted.",
    dialogue: [
      { speaker: "Narrador", text: "El sábado por la noche no pude dormir.", translation: "On Saturday night I couldn't sleep." },
      { speaker: "Narrador", text: "Era como la una de la mañana y estaba leyendo en el sofá cuando escuché un ruido enorme en la calle.", translation: "It was about one in the morning and I was reading on the sofa when I heard an enormous noise in the street." },
      { speaker: "Narrador", text: "Me asomé a la ventana y vi dos coches parados. Al parecer, se habían chocado.", translation: "I looked out the window and saw two cars stopped. Apparently they had crashed." },
      { speaker: "Narrador", text: "Los conductores estaban de pie, discutiendo. Había gente mirando desde las ventanas.", translation: "The drivers were standing up, arguing. There were people watching from the windows." },
      { speaker: "Narrador", text: "Todo duró como una hora. Al final llegó la policía y los conductores se calmaron.", translation: "The whole thing lasted about an hour. In the end the police arrived and the drivers calmed down." },
      { speaker: "Narrador", text: "Cuando por fin me acosté, eran casi las tres. Al día siguiente estaba agotado.", translation: "When I finally went to bed, it was nearly three. The next day I was exhausted." },
    ],
    questions: [
      {
        id: "es-l-a2-1-q1",
        level: "A2",
        prompt: "¿Qué estaba haciendo el narrador cuando escuchó el ruido?",
        options: ["Durmiendo", "Cocinando", "Leyendo en el sofá", "Mirando la televisión"],
        answer: "Leyendo en el sofá",
      },
      {
        id: "es-l-a2-1-q2",
        level: "A2",
        prompt: "¿Qué pasó en la calle?",
        options: ["Una fiesta muy ruidosa", "Dos coches se chocaron", "Un incendio", "Una manifestación"],
        answer: "Dos coches se chocaron",
      },
      {
        id: "es-l-a2-1-q3",
        level: "A2",
        prompt: "¿A qué hora se acostó el narrador?",
        options: ["A la una", "A las dos", "A las tres", "A las cuatro"],
        answer: "A las tres",
      },
      {
        id: "es-l-a2-1-q4",
        level: "A2",
        prompt: "'Estaba leyendo cuando escuché un ruido.' Which pattern does this use?",
        options: ["Two completed past events", "Imperfecto interrupted by indefinido", "Two imperfecto verbs", "Imperfecto + future"],
        answer: "Imperfecto interrupted by indefinido",
      },
    ],
  },

  {
    id: "es-l-a2-2",
    level: "A2",
    title: "¿Buenos Aires o Medellín? — comparing cities",
    script: "A: Oye, si pudieras vivir en cualquier ciudad de América Latina, ¿dónde elegirías? B: Uf, buena pregunta. Creo que Medellín. Me encantaría vivir allí. A: ¿Por qué Medellín y no Buenos Aires? Buenos Aires es más grande y tiene más cultura. B: Sí, pero para mí el clima es importantísimo. El de Medellín es mejor que el de casi cualquier otra ciudad del continente. Ni muy caliente ni muy frío. Lo llaman la ciudad de la eterna primavera. A: Bueno, eso es verdad. Y la gente es muy amable. B: Exacto. Además, Buenos Aires me parece más cara que Medellín. Tiene sus problemas económicos. A: De acuerdo. Pero para la vida cultural, Buenos Aires no tiene rival. Los teatros, los restaurantes, los museos... B: Tienes razón. Para visitar, Buenos Aires es increíble. Pero para vivir, yo preferiría Medellín sin duda.",
    translation: "A: Hey, if you could live in any city in Latin America, where would you choose? B: Wow, good question. I think Medellín. I'd love to live there. A: Why Medellín and not Buenos Aires? Buenos Aires is bigger and has more culture. B: Yes, but for me the climate is extremely important. Medellín's is better than almost any other city on the continent. Neither too hot nor too cold. They call it the city of eternal spring. A: Well, that's true. And the people are very friendly. B: Exactly. Besides, Buenos Aires seems more expensive to me than Medellín. It has its economic problems. A: Agreed. But for cultural life, Buenos Aires has no rival. The theatres, the restaurants, the museums... B: You're right. To visit, Buenos Aires is incredible. But to live, I'd prefer Medellín without question.",
    dialogue: [
      { speaker: "A", text: "Oye, si pudieras vivir en cualquier ciudad de América Latina, ¿dónde elegirías?", translation: "Hey, if you could live in any city in Latin America, where would you choose?" },
      { speaker: "B", text: "Uf, buena pregunta. Creo que Medellín. Me encantaría vivir allí.", translation: "Wow, good question. I think Medellín. I'd love to live there." },
      { speaker: "A", text: "¿Por qué Medellín y no Buenos Aires? Buenos Aires es más grande y tiene más cultura.", translation: "Why Medellín and not Buenos Aires? Buenos Aires is bigger and has more culture." },
      { speaker: "B", text: "Sí, pero para mí el clima es importantísimo. Lo llaman la ciudad de la eterna primavera.", translation: "Yes, but for me the climate is extremely important. They call it the city of eternal spring." },
      { speaker: "B", text: "Además, Buenos Aires me parece más cara que Medellín. Tiene sus problemas económicos.", translation: "Besides, Buenos Aires seems more expensive to me than Medellín. It has its economic problems." },
      { speaker: "A", text: "De acuerdo. Pero para la vida cultural, Buenos Aires no tiene rival.", translation: "Agreed. But for cultural life, Buenos Aires has no rival." },
      { speaker: "B", text: "Tienes razón. Para visitar, Buenos Aires es increíble. Pero para vivir, yo preferiría Medellín sin duda.", translation: "You're right. To visit, Buenos Aires is incredible. But to live, I'd prefer Medellín without question." },
    ],
    questions: [
      {
        id: "es-l-a2-2-q1",
        level: "A2",
        prompt: "¿Qué razón da B para preferir Medellín?",
        options: ["Es más grande que Buenos Aires.", "Tiene mejor clima.", "Tiene más museos.", "Es más cara."],
        answer: "Tiene mejor clima.",
      },
      {
        id: "es-l-a2-2-q2",
        level: "A2",
        prompt: "¿Qué problema menciona B sobre Buenos Aires?",
        options: ["El clima es muy frío.", "Tiene problemas económicos.", "No tiene vida cultural.", "La gente no es amable."],
        answer: "Tiene problemas económicos.",
      },
      {
        id: "es-l-a2-2-q3",
        level: "A2",
        prompt: "¿En qué están de acuerdo A y B?",
        options: ["Los dos prefieren Medellín para vivir.", "Los dos prefieren Buenos Aires para vivir.", "Buenos Aires es mejor para visitar pero Medellín para vivir.", "Medellín es mejor para visitar pero Buenos Aires para vivir."],
        answer: "Buenos Aires es mejor para visitar pero Medellín para vivir.",
      },
    ],
  },

  {
    id: "es-l-a2-3",
    level: "A2",
    title: "Planes para el futuro — futuro simple y condicional",
    script: "Hola a todos. Hoy quiero hablarles de mis planes para los próximos meses. Acabo de terminar mi carrera universitaria, así que hay muchos cambios que vendrán. Primero, voy a tomarme unas semanas de descanso. Lo merezco, después de cinco años de estudio. Después, buscaré trabajo en una agencia de comunicación. Tengo ya algunas entrevistas planeadas. Si consigo el trabajo que quiero, me quedaré en Bogotá. Pero si no hay oportunidades aquí, me gustaría irme a vivir a otra ciudad, quizás a Medellín o a Ciudad de México. En el futuro, algún día tendré mi propia empresa. No sé cuándo exactamente, pero lo haré. Cuando tenga suficiente experiencia, daré ese paso. Por ahora, estoy muy ilusionada con lo que viene.",
    translation: "Hello everyone. Today I want to talk to you about my plans for the next few months. I've just finished my university degree, so there are many changes to come. First, I'm going to take a few weeks' rest. I deserve it, after five years of studying. Afterwards, I'll look for work at a communications agency. I already have some interviews planned. If I get the job I want, I'll stay in Bogotá. But if there are no opportunities here, I'd like to go and live in another city — perhaps Medellín or Mexico City. In the future, one day I'll have my own company. I don't know exactly when, but I'll do it. When I have enough experience, I'll take that step. For now, I'm very excited about what's coming.",
    dialogue: [
      { speaker: "Hablante", text: "Acabo de terminar mi carrera universitaria, así que hay muchos cambios que vendrán.", translation: "I've just finished my university degree, so there are many changes to come." },
      { speaker: "Hablante", text: "Primero, voy a tomarme unas semanas de descanso. Después, buscaré trabajo en una agencia de comunicación.", translation: "First, I'm going to take a few weeks' rest. Afterwards, I'll look for work at a communications agency." },
      { speaker: "Hablante", text: "Si consigo el trabajo que quiero, me quedaré en Bogotá.", translation: "If I get the job I want, I'll stay in Bogotá." },
      { speaker: "Hablante", text: "Pero si no hay oportunidades aquí, me gustaría irme a otra ciudad.", translation: "But if there are no opportunities here, I'd like to go to another city." },
      { speaker: "Hablante", text: "Algún día tendré mi propia empresa. Cuando tenga suficiente experiencia, daré ese paso.", translation: "One day I'll have my own company. When I have enough experience, I'll take that step." },
    ],
    questions: [
      {
        id: "es-l-a2-3-q1",
        level: "A2",
        prompt: "¿Qué acaba de hacer la hablante?",
        options: ["Conseguir su primer trabajo", "Terminar la carrera universitaria", "Mudarse a Medellín", "Abrir su propia empresa"],
        answer: "Terminar la carrera universitaria",
      },
      {
        id: "es-l-a2-3-q2",
        level: "A2",
        prompt: "¿Qué pasará si no encuentra trabajo en Bogotá?",
        options: ["Volverá a estudiar.", "Se quedará en Bogotá de todas formas.", "Le gustaría irse a otra ciudad.", "Abrirá su empresa inmediatamente."],
        answer: "Le gustaría irse a otra ciudad.",
      },
      {
        id: "es-l-a2-3-q3",
        level: "A2",
        prompt: "'Cuando tenga suficiente experiencia, daré ese paso.' What does the verb tense after 'cuando' tell us?",
        options: ["The action is in the past.", "Cuando + future reference = present subjunctive (tenga).", "Cuando always takes present indicative.", "This is a type 1 si clause."],
        answer: "Cuando + future reference = present subjunctive (tenga).",
      },
    ],
  },

  {
    id: "es-l-a2-4",
    level: "A2",
    title: "El viaje de Daniela — listening checkpoint",
    script: "Bueno, te cuento lo que me pasó. Fue el viaje más loco que he tenido en mi vida. Desde hacía años quería hacer ese viaje a Perú — siempre había tenido ganas de ver Machu Picchu. Pero era uno de esos planes que uno va postergando. Hasta que un día decidí: ya, me voy. Reservé el vuelo con tres semanas de antelación. Hacía mucho calor en Bogotá esa semana y yo estaba súper emocionada. Llegué al aeropuerto con dos horas de anticipación. Y ahí empezó todo. En el tablero, mi vuelo aparecía como 'demorado'. Primero una hora. Luego dos. Luego directamente 'indefinido'. Por fin abordé con cinco horas de retraso. Llegué a Lima a la una de la mañana, agotada. Fui a la cinta del equipaje y esperé. Mi maleta no apareció. Todas las maletas aparecieron menos la mía. Me acerqué al mostrador y me dijeron que mi equipaje había quedado en Bogotá. Que lo mandarían en el primer vuelo de la mañana. Al principio quería llorar. Pero entonces una pareja de peruanos que estaba en la misma situación se acercó a mí. Me preguntaron si estaba bien. Valentina dijo: tranquila, te presto lo que necesites para mañana. Me llevaron en taxi, me prestaron ropa, me dieron de comer. Al día siguiente recuperé mi maleta. Al final fue el viaje más memorable de mi vida — no por Machu Picchu, sino por esa pareja que me trató como si fuera de la familia.",
    translation: "Well, let me tell you what happened to me. It was the craziest trip I've ever had. For years I had wanted to make that trip to Peru — I'd always wanted to see Machu Picchu. But it was one of those plans you keep putting off. Until one day I decided: that's it, I'm going. I booked the flight three weeks in advance. It was very hot in Bogotá that week and I was super excited. I arrived at the airport two hours early. And that's where it all started. On the board, my flight appeared as 'delayed'. First one hour. Then two. Then straight to 'indefinite'. In the end I boarded with a five-hour delay. I arrived in Lima at one in the morning, exhausted. I went to the baggage carousel and waited. My suitcase didn't appear. All the suitcases appeared except mine. I went up to the counter and they told me my luggage had been left in Bogotá. That they would send it on the first flight in the morning. At first I wanted to cry. But then a Peruvian couple who were in the same situation came up to me. They asked if I was OK. Valentina said: don't worry, I'll lend you whatever you need for tomorrow. They took me in a taxi, lent me clothes, gave me food. The next day I got my suitcase back. In the end it was the most memorable trip of my life — not because of Machu Picchu, but because of that couple who treated me as if I were family.",
    dialogue: [
      { speaker: "Daniela", text: "Desde hacía años quería hacer ese viaje a Perú.", translation: "For years I had wanted to make that trip to Peru." },
      { speaker: "Daniela", text: "En el tablero, mi vuelo aparecía como 'demorado'. Por fin abordé con cinco horas de retraso.", translation: "On the board my flight appeared as 'delayed'. In the end I boarded with a five-hour delay." },
      { speaker: "Daniela", text: "Fui a la cinta del equipaje y esperé. Mi maleta no apareció.", translation: "I went to the baggage carousel and waited. My suitcase didn't appear." },
      { speaker: "Valentina", text: "Tranquila, te presto lo que necesites para mañana.", translation: "Don't worry, I'll lend you whatever you need for tomorrow." },
      { speaker: "Daniela", text: "Al final fue el viaje más memorable de mi vida — no por Machu Picchu, sino por esa pareja.", translation: "In the end it was the most memorable trip of my life — not because of Machu Picchu, but because of that couple." },
    ],
    questions: [
      {
        id: "es-l-a2-4-q1",
        level: "A2",
        prompt: "¿Por qué decidió Daniela finalmente hacer el viaje?",
        options: ["Le regalaron los billetes.", "Había soñado con ir desde hacía años y tomó la decisión.", "Un amigo la invitó.", "Por trabajo."],
        answer: "Había soñado con ir desde hacía años y tomó la decisión.",
      },
      {
        id: "es-l-a2-4-q2",
        level: "A2",
        prompt: "¿Cuánto retraso tuvo el vuelo de Daniela?",
        options: ["Una hora", "Dos horas", "Cinco horas", "Ocho horas"],
        answer: "Cinco horas",
      },
      {
        id: "es-l-a2-4-q3",
        level: "A2",
        prompt: "¿Qué hizo la pareja peruana por Daniela?",
        options: ["Le pagaron el vuelo de vuelta.", "Le prestaron ropa, la llevaron en taxi y le dieron de comer.", "Reclamaron el equipaje por ella.", "La llevaron a Machu Picchu."],
        answer: "Le prestaron ropa, la llevaron en taxi y le dieron de comer.",
      },
      {
        id: "es-l-a2-4-q4",
        level: "A2",
        prompt: "'Desde hacía años quería hacer ese viaje.' Why is the imperfecto used?",
        options: ["Because the wanting was a single completed event.", "Because the desire was an ongoing state in the past.", "Because it will happen in the future.", "Because it is a si clause."],
        answer: "Because the desire was an ongoing state in the past.",
      },
    ],
  },
]

// Alias for backward compatibility
export const esListeningA2 = a2Listening
