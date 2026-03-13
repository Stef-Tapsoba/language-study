import { CultureEpisode } from "../../../types";

export const b1Culture: CultureEpisode[] = [
  {
    id: "es-c-b1-1",
    language: "es",
    level: "B1",
    category: "festivals",
    region: "spain",
    title: {
      native: "Spain's Festival Culture",
      target: "Las fiestas de España",
    },
    subtitle:
      "From running bulls to throwing tomatoes — the wild, sacred, and spectacular world of Spanish regional festivals.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1559827291-72f28e42b255?w=800",
        caption: {
          native: "The Semana Santa procession moves through a Spanish street",
          target: "La procesión de Semana Santa recorre una calle española",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800",
        caption: {
          native: "Participants covered in tomatoes at La Tomatina in Buñol",
          target: "Participantes cubiertos de tomates en La Tomatina de Buñol",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=800",
        caption: {
          native: "Fireworks light up the sky during Las Fallas in Valencia",
          target: "Los fuegos artificiales iluminan el cielo durante las Fallas de Valencia",
        },
        credit: "Unsplash",
      },
    ],
    body: {
      target:
        "España es un país con una tradición festiva extraordinariamente rica. Cada región, ciudad e incluso pueblo pequeño celebra sus propias fiestas, que mezclan religión, historia, gastronomía y puro espíritu de comunidad. Estas celebraciones son mucho más que simples días de descanso: son la expresión de la identidad cultural de cada lugar.\n\nUna de las fiestas más famosas del mundo es el encierro de los Sanfermines, que se celebra cada año en Pamplona del seis al catorce de julio. Durante nueve días, la ciudad se viste de blanco y rojo y los participantes corren delante de los toros por las calles del casco histórico. El encierro dura solo unos minutos, pero la adrenalina y el peligro lo convierten en un evento único. Los Sanfermines también incluyen música, danzas tradicionales, procesiones y los famosos chupinazo que abre las fiestas el primer día.\n\nEn Valencia, las Fallas de marzo son una explosión de creatividad y fuego. Durante varios días, la ciudad exhibe enormes esculturas de madera y cartón piedra llamadas fallas, que representan personajes políticos y figuras satíricas. La noche del diecinueve de marzo, la Nit del Foc, todas las esculturas se queman en una gran hoguera llamada la cremà. El espectáculo de fuego y fuegos artificiales es impresionante. Las Fallas fueron declaradas Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2016.\n\nLa Tomatina de Buñol, en la Comunitat Valenciana, es quizás la fiesta más sorprendente para los visitantes extranjeros. El último miércoles de agosto, decenas de miles de personas participan en la mayor batalla de tomates del mundo. Durante una hora, todos lanzan tomates maduros sin ningún otro objetivo que divertirse. La Tomatina nació en 1945 de forma espontánea y hoy atrae a participantes de todo el planeta.\n\nLa Semana Santa es una celebración diferente: profundamente religiosa y visualmente sobrecogedora. En ciudades como Sevilla, Málaga y Valladolid, las cofradías (hermandades religiosas) sacan en procesión imponentes pasos — plataformas con esculturas de Cristo o la Virgen — por las calles iluminadas con velas. Los nazarenos, vestidos con túnicas y capirotes, acompañan los pasos en silencio. La música de las bandas y el olor del incienso crean una atmósfera única que emociona tanto a creyentes como a no creyentes.\n\nEstas fiestas demuestran que en España la cultura se vive de forma colectiva y apasionada. Son momentos en que los españoles de todas las generaciones se reúnen para honrar sus tradiciones y celebrar juntos.",
      native:
        "Spain is a country with an extraordinarily rich festive tradition. Each region, city, and even small town celebrates its own festivals, which mix religion, history, gastronomy, and pure community spirit. These celebrations are far more than simple days off: they are the expression of the cultural identity of each place.\n\nOne of the most famous festivals in the world is the encierro of San Fermín, held every year in Pamplona from the sixth to the fourteenth of July. For nine days, the city dresses in white and red and participants run in front of bulls through the streets of the historic center. The encierro lasts only a few minutes, but the adrenaline and danger make it a unique event. San Fermín also includes music, traditional dances, processions, and the famous chupinazo that opens the festivities on the first day.\n\nIn Valencia, the March Fallas are an explosion of creativity and fire. For several days, the city displays enormous wooden and papier-mâché sculptures called fallas, depicting political figures and satirical characters. On the night of March nineteenth, the Nit del Foc, all the sculptures are burned in a great bonfire called the cremà. The spectacle of fire and fireworks is breathtaking. The Fallas were declared an Intangible Cultural Heritage of Humanity by UNESCO in 2016.\n\nLa Tomatina in Buñol, in the Valencian Community, is perhaps the most surprising festival for foreign visitors. On the last Wednesday of August, tens of thousands of people participate in the world's largest tomato fight. For one hour, everyone throws ripe tomatoes with no other goal than to have fun. La Tomatina was born spontaneously in 1945 and today attracts participants from all over the world.\n\nSemana Santa is a different kind of celebration: deeply religious and visually overwhelming. In cities like Seville, Málaga, and Valladolid, the cofradías (religious brotherhoods) carry impressive pasos — platforms bearing sculptures of Christ or the Virgin — through candle-lit streets. The nazarenos, dressed in tunics and pointed hoods, accompany the pasos in silence. The music of the bands and the scent of incense create a unique atmosphere that moves believers and non-believers alike.\n\nThese festivals show that in Spain, culture is lived collectively and passionately. They are moments when Spaniards of all generations come together to honor their traditions and celebrate as one.",
    },
    cultureVocab: [
      {
        word: "encierro",
        translation: "the running of the bulls",
        culturalNote:
          "The Pamplona encierro lasts around three minutes and covers 875 meters. Ernest Hemingway's 1926 novel The Sun Also Rises made San Fermín famous internationally.",
      },
      {
        word: "falla (las Fallas)",
        translation: "satirical sculpture burned at the Valencia festival",
        culturalNote:
          "Fallas artists (falleros) spend an entire year building their sculptures. A jury selects one to be pardoned (indultada) from the burning each year — it goes to the Museo Fallero.",
      },
      {
        word: "cofradía",
        translation: "religious brotherhood / confraternity",
        culturalNote:
          "Spain has thousands of cofradías that organize Semana Santa processions. Membership is passed down through generations; some brotherhoods are over five hundred years old.",
      },
      {
        word: "paso",
        translation: "processional float carrying religious sculptures",
        culturalNote:
          "The most elaborate pasos in Seville weigh several tonnes and are carried by teams of up to 250 costaleros (bearers) who work in total darkness inside the float.",
      },
      {
        word: "chupinazo",
        translation: "the rocket launch that officially opens San Fermín",
        culturalNote:
          "Fired from Pamplona's town hall balcony at noon on July 6th, the chupinazo triggers an explosion of red scarves, singing, and cava-spraying in the square below.",
      },
      {
        word: "cremà",
        translation: "the burning of the Fallas sculptures on the final night",
        culturalNote:
          "The cremà on March 19th (the feast of Saint Joseph) is the emotional climax of the Fallas. Valencians watch their year's work go up in flames as a symbol of renewal.",
      },
    ],
    questions: [
      {
        id: "es-c-b1-1-q1",
        type: "comprehension",
        prompt: {
          native: "Which festival was recognised by UNESCO as Intangible Cultural Heritage in 2016?",
          target: "¿Qué fiesta fue reconocida por la UNESCO como Patrimonio Cultural Inmaterial en 2016?",
        },
        options: [
          "Los Sanfermines de Pamplona",
          "La Tomatina de Buñol",
          "Las Fallas de Valencia",
          "La Semana Santa de Sevilla",
        ],
        answer: "Las Fallas de Valencia",
      },
      {
        id: "es-c-b1-1-q2",
        type: "comprehension",
        prompt: {
          native: "What happens during the cremà at the end of Las Fallas?",
          target: "¿Qué ocurre durante la cremà al final de las Fallas?",
        },
        options: [
          "The best sculpture is awarded a prize and kept permanently",
          "All the fallas sculptures are burned in a giant bonfire",
          "The sculptures are donated to museums across Spain",
          "Participants throw tomatoes at the sculptures",
        ],
        answer: "All the fallas sculptures are burned in a giant bonfire",
      },
      {
        id: "es-c-b1-1-q3",
        type: "reflection",
        prompt: {
          native:
            "Spanish festivals often involve an element of controlled chaos — running bulls, burning sculptures, tomato fights. Why do you think communities value these kinds of celebrations? Does your own culture have anything similar?",
          target:
            "Las fiestas españolas a menudo incluyen un elemento de caos controlado: toros, esculturas ardiendo, batallas de tomates. ¿Por qué crees que las comunidades valoran este tipo de celebraciones? ¿Tu propia cultura tiene algo parecido?",
        },
      },
    ],
  },
];
