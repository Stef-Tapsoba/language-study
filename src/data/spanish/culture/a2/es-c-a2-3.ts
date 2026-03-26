import { CultureEpisode } from "../../../../types";

export const esCA23: CultureEpisode = {
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
};
