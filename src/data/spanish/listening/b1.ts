import { ListeningExercise } from "../../../types";

export const b1Listening: ListeningExercise[] = [
  {
    id: "es-l-b1-1",
    level: "B1",
    title: "Un año sabático — Interview with a young gap-year traveler",
    script:
      "Hola, Claudia. Cuéntanos, ¿cómo fue tu año sabático? Fue una experiencia increíble. Después de terminar el bachillerato, decidí tomarme un año antes de empezar la universidad. Mis padres estaban un poco preocupados al principio, pero al final me apoyaron. ¿Adónde fuiste? Viajé por varios países de Sudamérica. Empecé en Colombia, luego fui a Ecuador y Perú. Viví tres meses en una comunidad indígena cerca de Cusco, donde trabajé como voluntaria en un proyecto de educación para niños. ¿Qué fue lo más difícil? Adaptarme a vivir sin comodidades modernas. No había internet estable y a veces el frío era muy intenso. Pero aprendí a valorar las cosas simples de la vida. También mejoré mucho mi español, porque en la comunidad solo hablaban español y quechua. ¿Recomendarías este tipo de experiencia a otros jóvenes? Sin duda. Me cambió la forma de ver el mundo. Ahora empiezo los estudios de medicina con una perspectiva mucho más amplia y sé por qué quiero ayudar a las personas.",
    translation:
      "Hi, Claudia. Tell us, how was your gap year? It was an incredible experience. After finishing secondary school, I decided to take a year off before starting university. My parents were a little worried at first, but in the end they supported me. Where did you go? I traveled through several countries in South America. I started in Colombia, then went to Ecuador and Peru. I lived three months in an indigenous community near Cusco, where I worked as a volunteer in an education project for children. What was the hardest part? Adapting to living without modern comforts. There was no stable internet and sometimes the cold was very intense. But I learned to appreciate the simple things in life. I also improved my Spanish a lot, because in the community they only spoke Spanish and Quechua. Would you recommend this kind of experience to other young people? Without a doubt. It changed the way I see the world. Now I'm starting my medical studies with a much broader perspective and I know why I want to help people.",
    dialogue: [
      { speaker: "Entrevistador", text: "Hola, Claudia. Cuéntanos, ¿cómo fue tu año sabático?", translation: "Hi, Claudia. Tell us, how was your gap year?" },
      { speaker: "Claudia", text: "Fue una experiencia increíble. Después de terminar el bachillerato, decidí tomarme un año antes de empezar la universidad. Mis padres estaban un poco preocupados al principio, pero al final me apoyaron.", translation: "It was an incredible experience. After finishing secondary school, I decided to take a year off before starting university. My parents were a little worried at first, but in the end they supported me." },
      { speaker: "Entrevistador", text: "¿Adónde fuiste?", translation: "Where did you go?" },
      { speaker: "Claudia", text: "Viajé por varios países de Sudamérica. Empecé en Colombia, luego fui a Ecuador y Perú. Viví tres meses en una comunidad indígena cerca de Cusco, donde trabajé como voluntaria en un proyecto de educación para niños.", translation: "I traveled through several countries in South America. I started in Colombia, then went to Ecuador and Peru. I lived three months in an indigenous community near Cusco, where I worked as a volunteer in an education project for children." },
      { speaker: "Entrevistador", text: "¿Qué fue lo más difícil?", translation: "What was the hardest part?" },
      { speaker: "Claudia", text: "Adaptarme a vivir sin comodidades modernas. No había internet estable y a veces el frío era muy intenso. Pero aprendí a valorar las cosas simples de la vida. También mejoré mucho mi español, porque en la comunidad solo hablaban español y quechua.", translation: "Adapting to living without modern comforts. There was no stable internet and sometimes the cold was very intense. But I learned to appreciate the simple things in life. I also improved my Spanish a lot, because in the community they only spoke Spanish and Quechua." },
      { speaker: "Entrevistador", text: "¿Recomendarías este tipo de experiencia a otros jóvenes?", translation: "Would you recommend this kind of experience to other young people?" },
      { speaker: "Claudia", text: "Sin duda. Me cambió la forma de ver el mundo. Ahora empiezo los estudios de medicina con una perspectiva mucho más amplia y sé por qué quiero ayudar a las personas.", translation: "Without a doubt. It changed the way I see the world. Now I'm starting my medical studies with a much broader perspective and I know why I want to help people." },
    ],
    questions: [
      {
        id: "es-l-b1-1-q1",
        level: "B1",
        prompt: "¿Qué hizo Claudia después de terminar el bachillerato?",
        options: [
          "Empezó a estudiar medicina inmediatamente",
          "Se fue a vivir a Europa durante un año",
          "Decidió tomarse un año sabático antes de la universidad",
          "Empezó a trabajar en una empresa familiar",
        ],
        answer: "Decidió tomarse un año sabático antes de la universidad",
      },
      {
        id: "es-l-b1-1-q2",
        level: "B1",
        prompt: "¿En qué tipo de proyecto trabajó Claudia como voluntaria?",
        options: [
          "En un proyecto de construcción de casas",
          "En un proyecto de educación para niños",
          "En un proyecto de conservación del medio ambiente",
          "En un proyecto de turismo sostenible",
        ],
        answer: "En un proyecto de educación para niños",
      },
      {
        id: "es-l-b1-1-q3",
        level: "B1",
        prompt: "¿Cuál fue la mayor dificultad que menciona Claudia?",
        options: [
          "El idioma, porque no hablaba español",
          "Los problemas de salud en la montaña",
          "Adaptarse a vivir sin comodidades modernas",
          "Los conflictos con otros voluntarios",
        ],
        answer: "Adaptarse a vivir sin comodidades modernas",
      },
    ],
  },
  {
    id: "es-l-b1-2",
    level: "B1",
    title: "La Feria de Otoño — Radio announcement about a local festival",
    script:
      "Buenos días, oyentes de Radio Castellana. Les traemos información sobre la Feria de Otoño de Valladolid, que este año celebra su vigésima edición. El evento tendrá lugar del quince al veintitrés de octubre en el recinto ferial del Parque Ribera Norte.\n\nDurante nueve días, los visitantes podrán disfrutar de una amplia programación cultural. Habrá conciertos de música tradicional castellana todas las tardes a partir de las seis, así como exposiciones de artesanía local con más de cien artesanos participantes. Los más pequeños contarán con una zona infantil con talleres de cerámica, pintura y teatro.\n\nLa gastronomía tendrá un papel protagonista: se instalarán carpas con productos típicos de Castilla y León, incluyendo vino de la Ribera del Duero, quesos artesanales y el famoso lechazo asado. La entrada al recinto es gratuita. Eso sí, los talleres y actividades especiales requieren inscripción previa a través de la página web del ayuntamiento.\n\nLes recordamos que el transporte público ofrecerá servicio reforzado durante los fines de semana del festival. No se pierdan esta celebración de la cultura y la tradición de nuestra región.",
    translation:
      "Good morning, Radio Castellana listeners. We bring you information about the Valladolid Autumn Fair, which this year celebrates its twentieth edition. The event will take place from the fifteenth to the twenty-third of October at the Parque Ribera Norte fairgrounds.\n\nDuring nine days, visitors will be able to enjoy a wide cultural program. There will be traditional Castilian music concerts every afternoon from six o'clock, as well as local craft exhibitions with more than one hundred participating artisans. The youngest visitors will have a children's area with pottery, painting, and theater workshops.\n\nGastronomy will play a starring role: marquees will be set up with typical products from Castile and León, including Ribera del Duero wine, artisan cheeses, and the famous roast lechazo. Entry to the fairgrounds is free. However, workshops and special activities require prior registration through the town hall website.\n\nWe remind you that public transport will offer a reinforced service during the festival weekends. Don't miss this celebration of the culture and tradition of our region.",
    questions: [
      {
        id: "es-l-b1-2-q1",
        level: "B1",
        prompt: "¿Cuántos días dura la Feria de Otoño de Valladolid?",
        options: ["Cinco días", "Siete días", "Nueve días", "Doce días"],
        answer: "Nueve días",
      },
      {
        id: "es-l-b1-2-q2",
        level: "B1",
        prompt: "¿Qué necesitan hacer los visitantes para participar en los talleres especiales?",
        options: [
          "Comprar una entrada especial en el recinto",
          "Inscribirse previamente en la página web del ayuntamiento",
          "Llevar materiales propios de artesanía",
          "Ser residentes del municipio de Valladolid",
        ],
        answer: "Inscribirse previamente en la página web del ayuntamiento",
      },
      {
        id: "es-l-b1-2-q3",
        level: "B1",
        prompt: "¿Cuál de estos productos gastronómicos se menciona en el anuncio?",
        options: [
          "Jamón ibérico y tortilla española",
          "Paella valenciana y gazpacho",
          "Vino de la Ribera del Duero y quesos artesanales",
          "Marisco gallego y pulpo a feira",
        ],
        answer: "Vino de la Ribera del Duero y quesos artesanales",
      },
    ],
  },
  {
    id: "es-l-b1-3",
    level: "B1",
    title: "Buscando trabajo — Conversation about job hunting and career plans",
    script:
      "Oye, Laura, ¿cómo va la búsqueda de trabajo? Llevas ya un par de meses buscando, ¿no? Sí, y la verdad es que está siendo bastante complicado. He mandado como treinta currículums y solo me han llamado para cuatro entrevistas. ¿Y qué tal las entrevistas? Dos fueron bien, pero al final eligieron a otros candidatos con más experiencia. El problema es que tengo el título, pero poca experiencia laboral real. Es el círculo vicioso de siempre: para conseguir experiencia necesitas trabajo, y para conseguir trabajo necesitas experiencia. ¿Has pensado en hacer prácticas mientras tanto? Sí, estoy considerando un puesto de prácticas en una empresa de marketing digital. No está muy bien pagado, pero al menos podría añadir algo al currículum y hacer contactos en el sector. Me parece una buena idea. Yo también pasé por eso. Al final, lo que más me ayudó fue el networking. Fui a eventos del sector y así conocí al jefe de mi empresa actual. Tienes razón. Creo que también debería mejorar mi perfil de LinkedIn y empezar a ir a esos eventos. ¿Me recomiendas alguno? Claro. El próximo mes hay una jornada de empleo en el centro de negocios. Te paso el enlace.",
    translation:
      "Hey, Laura, how's the job search going? You've been looking for a couple of months now, right? Yes, and to be honest it's been quite complicated. I've sent around thirty CVs and they've only called me for four interviews. And how did the interviews go? Two went well, but in the end they chose other candidates with more experience. The problem is that I have the degree, but little real work experience. It's the same old vicious circle: to get experience you need a job, and to get a job you need experience. Have you thought about doing an internship in the meantime? Yes, I'm considering an internship position at a digital marketing company. It doesn't pay very well, but at least I could add something to my CV and make contacts in the sector. That sounds like a good idea. I went through the same thing. In the end, what helped me most was networking. I went to industry events and that's how I met the boss of my current company. You're right. I think I should also improve my LinkedIn profile and start going to those events. Can you recommend any? Of course. Next month there's a jobs fair at the business center. I'll send you the link.",
    dialogue: [
      { speaker: "Andrés", text: "Oye, Laura, ¿cómo va la búsqueda de trabajo? Llevas ya un par de meses buscando, ¿no?", translation: "Hey, Laura, how's the job search going? You've been looking for a couple of months now, right?" },
      { speaker: "Laura", text: "Sí, y la verdad es que está siendo bastante complicado. He mandado como treinta currículums y solo me han llamado para cuatro entrevistas.", translation: "Yes, and to be honest it's been quite complicated. I've sent around thirty CVs and they've only called me for four interviews." },
      { speaker: "Andrés", text: "¿Y qué tal las entrevistas?", translation: "And how did the interviews go?" },
      { speaker: "Laura", text: "Dos fueron bien, pero al final eligieron a otros candidatos con más experiencia. El problema es que tengo el título, pero poca experiencia laboral real. Es el círculo vicioso de siempre: para conseguir experiencia necesitas trabajo, y para conseguir trabajo necesitas experiencia.", translation: "Two went well, but in the end they chose other candidates with more experience. The problem is that I have the degree, but little real work experience. It's the same old vicious circle: to get experience you need a job, and to get a job you need experience." },
      { speaker: "Andrés", text: "¿Has pensado en hacer prácticas mientras tanto?", translation: "Have you thought about doing an internship in the meantime?" },
      { speaker: "Laura", text: "Sí, estoy considerando un puesto de prácticas en una empresa de marketing digital. No está muy bien pagado, pero al menos podría añadir algo al currículum y hacer contactos en el sector.", translation: "Yes, I'm considering an internship position at a digital marketing company. It doesn't pay very well, but at least I could add something to my CV and make contacts in the sector." },
      { speaker: "Andrés", text: "Me parece una buena idea. Yo también pasé por eso. Al final, lo que más me ayudó fue el networking. Fui a eventos del sector y así conocí al jefe de mi empresa actual.", translation: "That sounds like a good idea. I went through the same thing. In the end, what helped me most was networking. I went to industry events and that's how I met the boss of my current company." },
      { speaker: "Laura", text: "Tienes razón. Creo que también debería mejorar mi perfil de LinkedIn y empezar a ir a esos eventos. ¿Me recomiendas alguno?", translation: "You're right. I think I should also improve my LinkedIn profile and start going to those events. Can you recommend any?" },
      { speaker: "Andrés", text: "Claro. El próximo mes hay una jornada de empleo en el centro de negocios. Te paso el enlace.", translation: "Of course. Next month there's a jobs fair at the business center. I'll send you the link." },
    ],
    questions: [
      {
        id: "es-l-b1-3-q1",
        level: "B1",
        prompt: "¿Cuál es el principal problema de Laura en su búsqueda de empleo?",
        options: [
          "Que no tiene título universitario",
          "Que tiene el título pero poca experiencia laboral real",
          "Que no habla idiomas extranjeros",
          "Que vive demasiado lejos de las empresas",
        ],
        answer: "Que tiene el título pero poca experiencia laboral real",
      },
      {
        id: "es-l-b1-3-q2",
        level: "B1",
        prompt: "¿Qué está considerando hacer Laura mientras tanto?",
        options: [
          "Hacer un máster en el extranjero",
          "Crear su propia empresa de marketing",
          "Aceptar un puesto de prácticas en una empresa de marketing digital",
          "Trabajar como autónoma para varios clientes",
        ],
        answer: "Aceptar un puesto de prácticas en una empresa de marketing digital",
      },
      {
        id: "es-l-b1-3-q3",
        level: "B1",
        prompt: "¿Cómo consiguió Andrés su trabajo actual?",
        options: [
          "A través de una oferta publicada en internet",
          "Por recomendación de un familiar",
          "Gracias a los contactos que hizo en eventos del sector",
          "Enviando su currículum directamente a la empresa",
        ],
        answer: "Gracias a los contactos que hizo en eventos del sector",
      },
    ],
  },

  {
    id: "es-l-b1-4",
    level: "B1",
    title: "El debate del teletrabajo — conversación de radio",
    script:
      "Buenas tardes. Hoy debatimos sobre el teletrabajo. Tenemos a dos invitados con opiniones distintas. Carmen, tú estás a favor. ¿Por qué? Porque el teletrabajo me da una flexibilidad que antes era imposible. Trabajo desde casa tres días a la semana y he ganado casi dos horas diarias que antes perdía en el transporte. Eso se traduce en más tiempo para mi familia y para mí. Y tú, Raúl, no estás tan convencido. No, la verdad es que no. Cuando trabajo desde casa, me cuesta mucho concentrarme. Los niños, el ruido, las distracciones... Además, echo de menos el contacto con los compañeros. En la oficina, muchas ideas surgían de conversaciones informales en el pasillo. Entiendo ese punto, pero creo que depende mucho de cada persona y de cada tipo de trabajo. En mi caso, las reuniones importantes las hago en la oficina. El resto, desde casa. El problema es que las empresas a veces imponen el teletrabajo sin tener en cuenta si el empleado tiene las condiciones adecuadas en casa. No todo el mundo tiene una habitación tranquila para trabajar. Buen punto. Carmen, ¿tú crees que el modelo híbrido es la solución? Sí, creo que es lo más razonable. Ni todo en casa ni todo en la oficina. Cada equipo debería poder decidir qué modelo le funciona mejor. Con eso sí estoy de acuerdo. Lo importante es que haya flexibilidad real, no solo en el papel.",
    translation:
      "Good afternoon. Today we are debating remote working. We have two guests with different opinions. Carmen, you are in favour. Why? Because remote working gives me a flexibility that was previously impossible. I work from home three days a week and I've gained almost two hours a day that I used to lose commuting. That translates into more time for my family and for myself. And you, Raúl, you are not so convinced. No, to be honest I'm not. When I work from home, I find it very hard to concentrate. The children, the noise, the distractions... Besides, I miss the contact with colleagues. In the office, many ideas came out of informal conversations in the corridor. I understand that point, but I think it depends a lot on each person and each type of work. In my case, I hold important meetings in the office. The rest, from home. The problem is that companies sometimes impose remote working without taking into account whether the employee has suitable conditions at home. Not everyone has a quiet room to work in. Good point. Carmen, do you think the hybrid model is the solution? Yes, I think it is the most reasonable approach. Not everything at home or everything in the office. Each team should be able to decide which model works best for them. I do agree with that. The important thing is that there is real flexibility, not just on paper.",
    dialogue: [
      { speaker: "Presentador", text: "Buenas tardes. Hoy debatimos sobre el teletrabajo. Tenemos a dos invitados con opiniones distintas. Carmen, tú estás a favor. ¿Por qué?", translation: "Good afternoon. Today we are debating remote working. We have two guests with different opinions. Carmen, you are in favour. Why?" },
      { speaker: "Carmen", text: "Porque el teletrabajo me da una flexibilidad que antes era imposible. Trabajo desde casa tres días a la semana y he ganado casi dos horas diarias que antes perdía en el transporte. Eso se traduce en más tiempo para mi familia y para mí.", translation: "Because remote working gives me a flexibility that was previously impossible. I work from home three days a week and I've gained almost two hours a day that I used to lose commuting. That translates into more time for my family and for myself." },
      { speaker: "Presentador", text: "Y tú, Raúl, no estás tan convencido.", translation: "And you, Raúl, you are not so convinced." },
      { speaker: "Raúl", text: "No, la verdad es que no. Cuando trabajo desde casa, me cuesta mucho concentrarme. Los niños, el ruido, las distracciones... Además, echo de menos el contacto con los compañeros. En la oficina, muchas ideas surgían de conversaciones informales en el pasillo.", translation: "No, to be honest I'm not. When I work from home, I find it very hard to concentrate. The children, the noise, the distractions... Besides, I miss the contact with colleagues. In the office, many ideas came out of informal conversations in the corridor." },
      { speaker: "Carmen", text: "Entiendo ese punto, pero creo que depende mucho de cada persona y de cada tipo de trabajo. En mi caso, las reuniones importantes las hago en la oficina. El resto, desde casa.", translation: "I understand that point, but I think it depends a lot on each person and each type of work. In my case, I hold important meetings in the office. The rest, from home." },
      { speaker: "Raúl", text: "El problema es que las empresas a veces imponen el teletrabajo sin tener en cuenta si el empleado tiene las condiciones adecuadas en casa. No todo el mundo tiene una habitación tranquila para trabajar.", translation: "The problem is that companies sometimes impose remote working without taking into account whether the employee has suitable conditions at home. Not everyone has a quiet room to work in." },
      { speaker: "Presentador", text: "Buen punto. Carmen, ¿tú crees que el modelo híbrido es la solución?", translation: "Good point. Carmen, do you think the hybrid model is the solution?" },
      { speaker: "Carmen", text: "Sí, creo que es lo más razonable. Ni todo en casa ni todo en la oficina. Cada equipo debería poder decidir qué modelo le funciona mejor.", translation: "Yes, I think it is the most reasonable approach. Not everything at home or everything in the office. Each team should be able to decide which model works best for them." },
      { speaker: "Raúl", text: "Con eso sí estoy de acuerdo. Lo importante es que haya flexibilidad real, no solo en el papel.", translation: "I do agree with that. The important thing is that there is real flexibility, not just on paper." },
    ],
    questions: [
      {
        id: "es-l-b1-4-q1",
        level: "B1",
        prompt: "¿Cuál es el principal beneficio del teletrabajo para Carmen?",
        options: [
          "Ganar más dinero al evitar gastos de la oficina",
          "Poder trabajar en un horario completamente libre",
          "Recuperar el tiempo que antes perdía en el transporte",
          "No tener que asistir a ninguna reunión presencial",
        ],
        answer: "Recuperar el tiempo que antes perdía en el transporte",
      },
      {
        id: "es-l-b1-4-q2",
        level: "B1",
        prompt: "¿Cuál es la principal crítica de Raúl al teletrabajo?",
        options: [
          "Que reduce el salario de los empleados",
          "Que las empresas lo imponen sin considerar las condiciones de cada empleado",
          "Que es perjudicial para la salud mental de los trabajadores",
          "Que solo funciona en empresas grandes",
        ],
        answer: "Que las empresas lo imponen sin considerar las condiciones de cada empleado",
      },
      {
        id: "es-l-b1-4-q3",
        level: "B1",
        prompt: "¿En qué están de acuerdo Carmen y Raúl al final del debate?",
        options: [
          "En que el teletrabajo completo es siempre mejor que ir a la oficina",
          "En que hay que eliminar el teletrabajo porque crea más problemas que soluciones",
          "En que es importante que haya flexibilidad real, no solo en teoría",
          "En que solo los equipos directivos deberían poder teletrabajar",
        ],
        answer: "En que es importante que haya flexibilidad real, no solo en teoría",
      },
    ],
  },
];
