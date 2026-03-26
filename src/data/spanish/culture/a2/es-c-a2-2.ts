import { CultureEpisode } from "../../../../types";

export const esCA22: CultureEpisode = {
  id: "es-c-a2-2",
  language: "es",
  level: "A2",
  category: "festivals",
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
};
