import { CultureEpisode } from "../../../types";

export const a2Culture: CultureEpisode[] = [
  {
    id: "es-c-a2-1",
    language: "es",
    level: "A2",
    category: "daily-life",
    region: "all-spanish",
    title: {
      native: "Public Transport in Spanish Cities",
      target: "El transporte público en las ciudades españolas",
    },
    subtitle:
      "How metro, bus, and high-speed rail shape everyday life across Spain's cities.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800",
        caption: {
          native: "The Madrid Metro, one of the largest in Europe",
          target: "El Metro de Madrid, uno de los más grandes de Europa",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        caption: {
          native: "A high-speed AVE train at a Spanish station",
          target: "Un tren de alta velocidad AVE en una estación española",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1581262208435-41726149a759?w=800",
        caption: {
          native: "Barcelona's iconic yellow city buses",
          target: "Los icónicos autobuses amarillos de Barcelona",
        },
        credit: "Unsplash",
      },
    ],
    body: {
      target:
        "En España, el transporte público es una parte esencial de la vida diaria. Las ciudades grandes, como Madrid, Barcelona, Valencia y Sevilla, tienen sistemas muy completos de metro, autobús y tranvía. El metro de Madrid, por ejemplo, tiene más de trescientos kilómetros de líneas y transporta a millones de personas cada día.\n\nEl billete de transporte público en España es generalmente más barato que en otros países de Europa. En muchas ciudades existe un abono mensual, que permite viajar un número ilimitado de veces durante treinta días. Esto es muy conveniente para las personas que van al trabajo todos los días.\n\nEn las ciudades pequeñas y en los pueblos, el autobús interurbano es el medio de transporte más común. Los autobuses conectan los municipios con las ciudades más grandes y son una opción económica para muchos españoles.\n\nPara los viajes entre ciudades, España tiene una red de trenes de alta velocidad llamada AVE (Alta Velocidad Española). Estos trenes pueden viajar a más de trescientos kilómetros por hora. Por ejemplo, el viaje de Madrid a Barcelona en AVE dura solo dos horas y media. El AVE ha cambiado mucho la forma de viajar dentro de España.\n\nEn los últimos años, muchas ciudades también han introducido sistemas de bicicletas compartidas y patinetes eléctricos para completar los desplazamientos cortos. Estos medios de transporte son populares entre los jóvenes y ayudan a reducir la contaminación.",
      native:
        "In Spain, public transport is an essential part of daily life. Large cities like Madrid, Barcelona, Valencia, and Seville have very comprehensive metro, bus, and tram systems. The Madrid metro, for example, has more than three hundred kilometers of lines and transports millions of people every day.\n\nPublic transport tickets in Spain are generally cheaper than in other European countries. In many cities there is a monthly pass that allows unlimited travel for thirty days. This is very convenient for people who commute to work every day.\n\nIn small cities and towns, the intercity bus is the most common means of transport. Buses connect municipalities to larger cities and are an affordable option for many Spaniards.\n\nFor travel between cities, Spain has a high-speed train network called AVE (Alta Velocidad Española). These trains can travel at over three hundred kilometers per hour. For example, the journey from Madrid to Barcelona by AVE takes only two and a half hours. The AVE has greatly changed the way people travel within Spain.\n\nIn recent years, many cities have also introduced shared bicycle and electric scooter systems to complete short journeys. These modes of transport are popular among young people and help reduce pollution.",
    },
    cultureVocab: [
      {
        word: "abono mensual",
        translation: "monthly travel pass",
        culturalNote:
          "In Madrid, the monthly Abono Transporte covers all metro, bus, and commuter rail within selected zones — a hugely popular option for residents.",
      },
      {
        word: "AVE",
        translation: "high-speed train (Alta Velocidad Española)",
        culturalNote:
          "Spain has the longest high-speed rail network in Europe. AVE literally means 'bird' in Spanish, a deliberate double meaning chosen when the service launched in 1992.",
      },
      {
        word: "tranvía",
        translation: "tram",
        culturalNote:
          "Several Spanish cities, including Seville and Bilbao, have modern tram lines that were built or rebuilt after the 1990s as part of urban sustainability plans.",
      },
      {
        word: "interurbano",
        translation: "intercity / between towns",
        culturalNote:
          "Spain's extensive coach (autobús interurbano) network reaches villages that trains don't serve, and fares are heavily subsidised to keep rural areas connected.",
      },
      {
        word: "patinete eléctrico",
        translation: "electric scooter",
        culturalNote:
          "E-scooter rentals exploded in Spanish cities from around 2018. Most cities now require riders to use cycle lanes and wear helmets following new national regulations.",
      },
    ],
    questions: [
      {
        id: "es-c-a2-1-q1",
        type: "comprehension",
        prompt: {
          native: "What does AVE stand for, and what is special about it?",
          target: "¿Qué significa AVE y qué tiene de especial?",
        },
        options: [
          "A bus network connecting Spanish villages",
          "Spain's high-speed train that travels over 300 km/h",
          "A monthly transport pass used in Madrid",
          "A shared bicycle system in Barcelona",
        ],
        answer: "Spain's high-speed train that travels over 300 km/h",
      },
      {
        id: "es-c-a2-1-q2",
        type: "reflection",
        prompt: {
          native:
            "How does public transport in your country compare to Spain's system? What would you change about it?",
          target:
            "¿Cómo es el transporte público de tu país comparado con el sistema español? ¿Qué cambiarías?",
        },
      },
    ],
  },
  {
    id: "es-c-a2-2",
    language: "es",
    level: "A2",
    category: "traditions",
    region: "all-spanish",
    title: {
      native: "Festivals Across the Spanish-Speaking World",
      target: "Las fiestas del mundo hispanohablante",
    },
    subtitle:
      "From Las Fallas to Día de Muertos — how festivals reveal the soul of a culture.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=800",
        caption: {
          native: "Las Fallas fireworks in Valencia, Spain",
          target: "Los fuegos artificiales de las Fallas en Valencia",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800",
        caption: {
          native: "Colourful altars during Día de Muertos in Mexico",
          target: "Altares de colores durante el Día de Muertos en México",
        },
        credit: "Unsplash",
      },
    ],
    body: {
      target: `El mundo hispanohablante tiene una riqueza enorme de fiestas y tradiciones. Cada región celebra de manera diferente, pero las fiestas siempre tienen algo en común: reúnen a las personas y celebran la identidad cultural.

En España, una de las fiestas más espectaculares es Las Fallas, que se celebra en Valencia en marzo. Durante cinco días, la ciudad se llena de enormes esculturas de cartón y madera llamadas "fallas". Estas esculturas representan personajes políticos o sociales de forma humorística. La noche del 19 de marzo, la Nit del Foc, se queman todas las fallas en grandes hogueras mientras la gente ve los fuegos artificiales. Es una mezcla impresionante de arte, humor y fuego.

En México, el Día de Muertos es una de las tradiciones más importantes. Se celebra el 1 y 2 de noviembre. Las familias construyen altares llamados "ofrendas" con fotos de sus familiares muertos, comida, flores de cempasúchil y velas. No es una fiesta triste — es una celebración de la vida y de la memoria de los que ya no están.

El Carnaval se celebra en muchos países hispanohablantes antes de la Cuaresma. En Bolivia, el Carnaval de Oruro es famoso por sus danzas tradicionales. En Uruguay, el carnaval de Montevideo es el más largo del mundo, con más de cuarenta días de celebraciones.

Todas estas fiestas tienen algo fundamental en común: son momentos en los que las comunidades se unen para recordar de dónde vienen y quiénes son.`,
      native: `The Spanish-speaking world has an enormous wealth of festivals and traditions. Each region celebrates differently, but festivals always have something in common: they bring people together and celebrate cultural identity.

In Spain, one of the most spectacular festivals is Las Fallas, celebrated in Valencia in March. For five days, the city fills up with enormous cardboard and wood sculptures called "fallas". These sculptures depict political or social figures in a humorous way. On the night of 19 March, the Nit del Foc, all the fallas are burned in great bonfires while people watch the fireworks. It is an impressive mixture of art, humour and fire.

In Mexico, Día de Muertos (Day of the Dead) is one of the most important traditions. It is celebrated on 1 and 2 November. Families build altars called "ofrendas" with photos of their deceased relatives, food, marigold flowers and candles. It is not a sad festival — it is a celebration of life and the memory of those who are no longer here.

Carnival is celebrated in many Spanish-speaking countries before Lent. In Bolivia, the Carnaval de Oruro is famous for its traditional dances. In Uruguay, the Montevideo carnival is the longest in the world, with more than forty days of celebrations.

All these festivals have one fundamental thing in common: they are moments when communities come together to remember where they come from and who they are.`,
    },
    cultureVocab: [
      {
        word: "las fallas",
        translation: "fallas (monumental sculptures burned at the Valencia festival)",
        culturalNote:
          "Each falla can take a whole year to build and cost tens of thousands of euros. Despite this, all but one are deliberately burned — the surviving falla is voted the best by the public and preserved in a museum.",
      },
      {
        word: "la ofrenda",
        translation: "offering / Day of the Dead altar",
        culturalNote:
          "The ofrenda is not a religious altar but a family tribute. It includes the deceased person's favourite food, a photo, marigolds (whose scent is believed to guide souls), and a glass of water for the journey. Children who died are remembered on 1 November; adults on 2 November.",
      },
      {
        word: "la cempasúchil",
        translation: "marigold (the flower of the dead)",
        culturalNote:
          "The bright orange marigold is the iconic flower of Día de Muertos. Its petals are used to create paths from the street to the ofrenda, guiding the returning souls home by smell.",
      },
      {
        word: "la Cuaresma",
        translation: "Lent",
        culturalNote:
          "Carnival falls in the days before Lent — the 40-day Catholic fasting period before Easter. Its excesses (food, drink, costumes, dancing) are traditionally a last celebration before the sober period begins. Even in secular societies, Carnival retains this calendar position.",
      },
      {
        word: "quemar",
        translation: "to burn",
        culturalNote:
          "The burning of the fallas (la cremà) is the emotional climax of the festival. It symbolises the end of winter and the beginning of spring. Neighbours who spent months building their falla watch it burn in minutes — the impermanence is part of the meaning.",
      },
    ],
    questions: [
      {
        id: "es-c-a2-2-q1",
        type: "comprehension",
        prompt: {
          native: "What happens to the fallas on the night of 19 March?",
          target: "¿Qué ocurre con las fallas la noche del 19 de marzo?",
        },
        options: [
          "They are moved to a museum",
          "They are all burned in bonfires",
          "They are auctioned to the public",
          "They are displayed for another month",
        ],
        answer: "They are all burned in bonfires",
      },
      {
        id: "es-c-a2-2-q2",
        type: "comprehension",
        prompt: {
          native: "Why is Día de Muertos described as not a sad festival?",
          target: "¿Por qué el Día de Muertos no es una fiesta triste según el texto?",
        },
        options: [
          "Because it celebrates life and memory",
          "Because people dress up in funny costumes",
          "Because children receive presents",
          "Because it only lasts one hour",
        ],
        answer: "Because it celebrates life and memory",
      },
      {
        id: "es-c-a2-2-q3",
        type: "reflection",
        prompt: {
          native:
            "Is there a festival in your country or culture that celebrates memory or the past? How is it similar to or different from Día de Muertos?",
          target:
            "¿Hay alguna fiesta en tu país o cultura que celebre la memoria o el pasado? ¿En qué se parece o se diferencia del Día de Muertos?",
        },
      },
    ],
    didYouKnow: {
      native:
        "In 2008, UNESCO declared the Carnaval de Oruro in Bolivia an Intangible Cultural Heritage of Humanity. In 2003, Mexican Día de Muertos received the same recognition. Las Fallas of Valencia followed in 2016 — making these three Spanish-speaking festivals all members of the UNESCO heritage list.",
      target:
        "En 2008, la UNESCO declaró el Carnaval de Oruro de Bolivia Patrimonio Cultural Inmaterial de la Humanidad. En 2003, el Día de Muertos mexicano recibió el mismo reconocimiento. Las Fallas de Valencia lo hicieron en 2016, convirtiendo así estos tres festivales del mundo hispanohablante en miembros de la lista del patrimonio de la UNESCO.",
    },
    relatedIds: ["es-r-a2-1", "es-c-a2-1"],
  },
  {
    id: "es-c-a2-3",
    language: "es",
    level: "A2",
    category: "food",
    region: "all-spanish",
    title: {
      native: "Food Culture in the Spanish-Speaking World",
      target: "La cultura gastronómica del mundo hispanohablante",
    },
    subtitle:
      "Meal times, the sobremesa, and why eating together is a social ritual — not just nutrition.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800",
        caption: {
          native: "Tapas — small dishes shared between friends in Spain",
          target: "Las tapas — pequeños platos que se comparten entre amigos en España",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1464093515883-ec948246accb?w=800",
        caption: {
          native: "A family gathered around the table — the heart of Hispanic food culture",
          target: "Una familia reunida en la mesa — el corazón de la cultura gastronómica hispana",
        },
        credit: "Unsplash",
      },
    ],
    body: {
      target: `En el mundo hispanohablante, la comida no es solo alimentación — es una forma de relacionarse con los demás. Comer juntos, hablar y pasar tiempo en la mesa son valores fundamentales en las culturas de España y Latinoamérica.

En España, los horarios de las comidas son muy diferentes a los del norte de Europa o América del Norte. El desayuno es ligero, normalmente un café con tostadas o churros. El almuerzo, a las dos o tres de la tarde, es la comida principal del día. La cena no suele empezar antes de las nueve de la noche, y en verano puede ser aún más tarde.

Una de las tradiciones más queridas en España es la sobremesa — el tiempo que se pasa hablando después de comer, sin levantarse de la mesa. La sobremesa puede durar horas. No se considera una pérdida de tiempo; al contrario, es un momento social muy valorado.

Las tapas son otro elemento central de la cultura gastronómica española. Son pequeños platos que se sirven en bares y restaurantes, normalmente acompañados de una bebida. En Andalucía y otras regiones, las tapas se sirven gratis con cada bebida. Ir de tapas con amigos es una actividad social completa.

En Latinoamérica, la gastronomía varía enormemente de un país a otro. México es famoso por sus tacos, salsas y el uso del chile. Argentina es conocida por el asado — la tradición de hacer carne a la parrilla en reuniones familiares o de amigos. En Perú, la cocina ha ganado reconocimiento internacional con platos como el ceviche.

En todos estos países, la mesa es mucho más que un mueble. Es el centro de la vida familiar y social.`,
      native: `In the Spanish-speaking world, food is not just sustenance — it is a way of relating to others. Eating together, talking and spending time at the table are fundamental values in the cultures of Spain and Latin America.

In Spain, mealtimes are very different from those in northern Europe or North America. Breakfast is light, usually a coffee with toast or churros. Lunch, at two or three in the afternoon, is the main meal of the day. Dinner does not usually begin before nine in the evening, and in summer it can be even later.

One of the most cherished traditions in Spain is the sobremesa — the time spent talking after a meal, without leaving the table. The sobremesa can last for hours. It is not considered a waste of time; on the contrary, it is a highly valued social moment.

Tapas are another central element of Spanish food culture. They are small dishes served in bars and restaurants, usually accompanied by a drink. In Andalusia and other regions, tapas are served free with each drink. Going for tapas with friends is a complete social activity in itself.

In Latin America, gastronomy varies enormously from country to country. Mexico is famous for its tacos, salsas and use of chilli. Argentina is known for the asado — the tradition of grilling meat at family or friends' gatherings. In Peru, the cuisine has gained international recognition with dishes such as ceviche.

In all these countries, the table is much more than a piece of furniture. It is the centre of family and social life.`,
    },
    cultureVocab: [
      {
        word: "la sobremesa",
        translation: "post-meal conversation time (lit. 'over the table')",
        culturalNote:
          "The sobremesa is so important in Spanish culture that it has its own word — untranslatable in English. Leaving the table immediately after eating is considered rude. A sobremesa of two hours after Sunday lunch is not unusual in many families.",
      },
      {
        word: "las tapas",
        translation: "tapas (small plates of food served with drinks)",
        culturalNote:
          "The origin of tapas is debated. One story says King Alfonso XIII of Spain requested a slice of ham to cover (tapar) his wine glass to keep flies out. Regardless of origin, tapas culture is now central to Spanish social life — bar-hopping from tapa to tapa is called 'ir de tapas' or 'tapear'.",
      },
      {
        word: "el asado",
        translation: "Argentine-style barbecue / the grilling tradition",
        culturalNote:
          "In Argentina and Uruguay, the asado is more than a meal — it is a ritual. The asador (grill master) is a figure of social authority. An asado can last an entire Sunday afternoon and evening, with multiple cuts of meat cooked slowly over wood or charcoal.",
      },
      {
        word: "el ceviche",
        translation: "ceviche (raw fish cured in citrus juice)",
        culturalNote:
          "Peruvian ceviche — raw fish marinated in lime juice with chilli, onion and coriander — is considered Peru's national dish. In 2004, Peru declared it a cultural heritage of the nation. It is now eaten across Latin America and internationally.",
      },
      {
        word: "ir de tapas / tapear",
        translation: "to go for tapas, to bar-hop eating tapas",
        culturalNote:
          "Going for tapas is a social ritual in Spain. Groups of friends move from bar to bar, each having one drink and one tapa, then moving on. It is less about the food and more about the conversation and the company.",
      },
    ],
    questions: [
      {
        id: "es-c-a2-3-q1",
        type: "comprehension",
        prompt: {
          native: "What is the sobremesa and why is it important in Spanish culture?",
          target: "¿Qué es la sobremesa y por qué es importante en la cultura española?",
        },
        options: [
          "The time spent talking after a meal — it is a valued social ritual",
          "The main meal of the day, eaten at midday",
          "A type of small dish served before the meal",
          "The tradition of eating very late at night",
        ],
        answer: "The time spent talking after a meal — it is a valued social ritual",
      },
      {
        id: "es-c-a2-3-q2",
        type: "comprehension",
        prompt: {
          native: "Which country is known for the asado tradition?",
          target: "¿Qué país es conocido por la tradición del asado?",
        },
        options: ["Argentina", "México", "Perú", "España"],
        answer: "Argentina",
      },
      {
        id: "es-c-a2-3-q3",
        type: "reflection",
        prompt: {
          native:
            "How important is sharing meals with others in your culture? Do you have a concept similar to the sobremesa?",
          target:
            "¿Qué importancia tiene compartir las comidas con otras personas en tu cultura? ¿Existe algún concepto similar a la sobremesa?",
        },
      },
    ],
    didYouKnow: {
      native:
        "Spain's lunch break (la hora de comer) used to last up to three hours and included a siesta. While this tradition has become less common in cities due to modern work schedules, many Spaniards still consider the two-hour lunch a fundamental right. In 2016, the Spanish government proposed changing working hours to align with the rest of Europe — but the proposal was met with significant resistance from the public.",
      target:
        "La hora de comer en España duraba antes hasta tres horas e incluía una siesta. Aunque esta tradición es menos común en las ciudades por los horarios de trabajo modernos, muchos españoles siguen considerando la comida de dos horas un derecho fundamental. En 2016, el gobierno español propuso cambiar los horarios laborales para alinearlos con el resto de Europa, pero la propuesta encontró una resistencia considerable por parte de la ciudadanía.",
    },
    relatedIds: ["es-r-a2-1", "es-l-a2-2", "es-c-a2-1"],
  },
];
