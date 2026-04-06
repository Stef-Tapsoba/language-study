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
  {
    id: "es-c-b1-2",
    language: "es",
    level: "B1",
    category: "history",
    region: "spain",
    title: {
      native: "La movida madrileña — cuando España despertó",
      target: "La movida madrileña",
    },
    subtitle:
      "After forty years of dictatorship, Spain erupted in a wave of creative freedom that transformed Madrid into Europe's most electrifying city — almost overnight.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        caption: {
          native: "The streets of Madrid, epicentre of la movida in the late 1970s and 1980s",
          target: "Las calles de Madrid, epicentro de la movida a finales de los años setenta y ochenta",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
        caption: {
          native: "A live music concert — the pulse of the underground scene",
          target: "Un concierto de música en directo — el pulso de la escena underground",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=800",
        caption: {
          native: "Film reels and cinema — Pedro Almodóvar put la movida on the world stage",
          target: "Rollos de película y cine — Pedro Almodóvar llevó la movida al escenario mundial",
        },
        credit: "Unsplash",
      },
    ],
    body: {
      target: `La dictadura de Francisco Franco duró desde 1939 hasta su muerte en noviembre de 1975. Durante casi cuatro décadas, España vivió bajo una estricta censura, códigos morales católicos, represión política y aislamiento cultural. Estaba prohibido publicar libros contrarios al régimen, las películas extranjeras se doblaban con diálogos censurados y cualquier expresión de disidencia política podía tener consecuencias graves. Cuando Franco murió, España tuvo que reinventarse por completo: política, social y culturalmente.

El período entre 1975 y 1982 se conoce como la Transición. Bajo el rey Juan Carlos I, España pasó de la dictadura a la democracia de forma sorprendentemente pacífica. La Constitución de 1978 estableció España como monarquía parlamentaria. Se legalizaron los partidos políticos, se estableció la libertad de prensa y se crearon las comunidades autónomas. El mundo observó con asombro cómo España se transformaba sin violencia generalizada, un proceso que hoy se estudia como modelo de cambio de régimen pacífico.

En este contexto nació la movida madrileña, una explosión cultural centrada en Madrid desde aproximadamente 1977 hasta 1985. Los jóvenes que habían crecido bajo la censura de repente tenían libertad total — y la usaron de forma radical. Música rock, moda vanguardista, cine experimental, revistas underground, cultura gay, drogas: todo lo que había sido reprimido explotó a la vez. El nombre proviene del verbo mover — una movida es algo que está pasando, que tiene vida, que es excitante. Al principio era puramente underground; después se convirtió en fenómeno mainstream e internacionalmente famoso.

Entre las figuras clave destaca Pedro Almodóvar, cuya primera película, Pepi, Luci, Bom (1980), se convirtió en un éxito de culto en los cines underground de Madrid. Alaska, cantante de pop punk e icono cultural, fue otra figura central. La revista La Luna de Madrid documentó la escena. El barrio de Malasaña fue el epicentro geográfico del movimiento. La movida era deliberadamente apolítica: no se trataba de ideología política sino de libertad personal. Almodóvar decía famosamente que quería hacer películas como si Franco nunca hubiera existido.

El legado de la movida es inmenso. Transformó la imagen de España — de un país atrasado y conservador a una sociedad moderna, creativa y abierta. Madrid se convirtió en una de las grandes ciudades europeas para la vida nocturna y la cultura. Pero la movida también tuvo su cara oscura: la epidemia de heroína que devastó a toda una generación durante los años ochenta. Sin embargo, el espíritu de liberación creativa de la movida definió la identidad española moderna y continúa resonando en la cultura del país.`,
      native: `Francisco Franco's dictatorship lasted from 1939 until his death in November 1975. For nearly four decades, Spain lived under strict censorship, Catholic moral codes, political repression, and cultural isolation. It was forbidden to publish books that opposed the regime, foreign films were dubbed with censored dialogue, and any expression of political dissent could have serious consequences. When Franco died, Spain had to reinvent itself entirely — politically, socially, and culturally.

The period between 1975 and 1982 is known as la Transición — the Transition. Under King Juan Carlos I, Spain moved from dictatorship to democracy in a surprisingly peaceful way. The 1978 Constitution established Spain as a parliamentary monarchy. Political parties were legalised, press freedom was established, and regional autonomies were created. The world watched with amazement as Spain transformed itself without widespread violence — a process now studied globally as a model for peaceful regime change.

In this context, la movida madrileña was born — a cultural explosion centred on Madrid from roughly 1977 to 1985. Young people who had grown up under censorship suddenly had total freedom — and they used it radically. Rock music, avant-garde fashion, experimental cinema, underground magazines, gay culture, drugs: everything that had been suppressed exploded at once. The name comes from the verb mover — a movida is something that is happening, that is alive, that is exciting. It began as entirely underground; it then became a mainstream phenomenon, and eventually internationally famous.

Among the key figures was Pedro Almodóvar, whose first film, Pepi, Luci, Bom (1980), became a cult hit in Madrid's underground cinemas. Alaska, a pop punk singer and cultural icon, was another central figure. The magazine La Luna de Madrid documented the scene. The district of Malasaña was the geographic epicentre of the movement. La movida was deliberately apolitical — it was not about political ideology but about personal freedom. Almodóvar famously said he wanted to make films as if Franco had never existed.

La movida's legacy is immense. It transformed Spain's image — from a backward, conservative country to a modern, creative, open society. Madrid became one of Europe's great cities for nightlife and culture. But la movida also had a dark side: the heroin epidemic that devastated an entire generation during the 1980s. Nevertheless, the spirit of creative liberation of la movida defined modern Spanish identity and continues to resonate in the country's culture.`,
    },
    cultureVocab: [
      {
        word: "la movida (madrileña)",
        translation: "the movement / the Madrid scene",
        culturalNote:
          "The word itself is slang, related to 'mover' (to move) and implying a scene that is alive, happening, exciting. It entered standard Spanish to describe this specific cultural moment and is now used as a proper noun.",
      },
      {
        word: "la Transición",
        translation: "the Transition (to democracy)",
        culturalNote:
          "Capital T — Spanish speakers refer to this period with the same gravity that French speakers refer to la Révolution. It is a period of intense national pride, and the peaceful nature of the change — negotiated between Francoist politicians and opposition leaders — is considered extraordinary.",
      },
      {
        word: "el destape",
        translation: "literally 'the uncovering'",
        culturalNote:
          "Refers to the sudden explosion of content — nudity, sexuality, political satire — previously banned under Franco. Destape films, magazines and art flourished in the late 1970s. The word captures both liberation and a certain rebellious excess.",
      },
      {
        word: "la censura franquista",
        translation: "Francoist censorship",
        culturalNote:
          "Under Franco, all books, films, newspapers and broadcasts required government approval. International films were dubbed with censored dialogue. Many Spanish authors published abroad or in secret. The sudden end of censorship created a pent-up explosion.",
      },
      {
        word: "la cultura underground",
        translation: "underground culture",
        culturalNote:
          "Borrowed from English, this term describes the alternative, DIY scene of magazines, concerts and art that emerged outside mainstream channels. La movida was initially entirely underground before becoming mainstream and then internationally famous.",
      },
    ],
    questions: [
      {
        id: "es-c-b1-2-q1",
        type: "comprehension",
        prompt: {
          native: "What was la movida a reaction to?",
          target: "¿A qué fue una reacción la movida?",
        },
        options: [
          "Forty years of censorship and cultural repression under Franco's dictatorship",
          "The economic crisis caused by Spain's entry into the European Union",
          "A conflict between Madrid and Barcelona over cultural supremacy",
          "The influence of American pop culture on Spanish youth",
        ],
        answer: "Forty years of censorship and cultural repression under Franco's dictatorship",
      },
      {
        id: "es-c-b1-2-q2",
        type: "comprehension",
        prompt: {
          native: "Why is Pedro Almodóvar associated with la movida?",
          target: "¿Por qué se asocia a Pedro Almodóvar con la movida?",
        },
        options: [
          "He made provocative, experimental films that embodied the new creative freedom of the period",
          "He founded the magazine La Luna de Madrid and documented the scene",
          "He was the lead singer of Alaska's pop punk band",
          "He organised the first underground concerts in the Malasaña district",
        ],
        answer: "He made provocative, experimental films that embodied the new creative freedom of the period",
      },
      {
        id: "es-c-b1-2-q3",
        type: "reflection",
        prompt: {
          native:
            "La movida is described as 'deliberately apolitical' — it was about personal freedom rather than political ideology. Do you think cultural revolutions are more or less effective than political movements at changing a society? Can you think of a similar cultural explosion in another country's history?",
          target:
            "La movida se describe como 'deliberadamente apolítica': se trataba de libertad personal más que de ideología política. ¿Crees que las revoluciones culturales son más o menos eficaces que los movimientos políticos para cambiar una sociedad? ¿Se te ocurre una explosión cultural similar en la historia de otro país?",
        },
      },
    ],
    didYouKnow: {
      native:
        "Pedro Almodóvar shot his first film, 'Pepi, Luci, Bom' (1980), on a Super 8 camera borrowed from friends, with a budget of around half a million pesetas raised from friends and collaborators over two years. He was working as a telephone company employee at the time. The film became a cult hit in Madrid's underground cinemas. Almodóvar went on to win two Academy Awards (for Todo sobre mi madre in 2000 and Hable con ella in 2003), becoming one of the most celebrated directors in the world — and the most visible symbol of Spain's extraordinary cultural transformation.",
      target:
        "Pedro Almodóvar rodó su primera película, 'Pepi, Luci, Bom' (1980), con una cámara Super 8 prestada por amigos, con un presupuesto de alrededor de medio millón de pesetas recaudado entre amigos y colaboradores a lo largo de dos años. En ese momento trabajaba como empleado de una compañía telefónica. La película se convirtió en un éxito de culto en los cines underground de Madrid. Almodóvar llegó a ganar dos premios Óscar (por Todo sobre mi madre en 2000 y Hable con ella en 2003), convirtiéndose en uno de los directores más célebres del mundo y en el símbolo más visible de la extraordinaria transformación cultural de España.",
    },
    relatedIds: ["es-c-b1-1", "es-c-a2-2"],
  },
  {
    id: "es-c-b1-3",
    language: "es",
    level: "B1",
    category: "language-note",
    region: "all-spanish",
    title: {
      native: "El español en el mundo — una lengua, veinte países",
      target: "El español en el mundo",
    },
    subtitle:
      "Spanish is the second most spoken native language on Earth — and the enormous variety between its 500 million speakers is one of its greatest strengths.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=800",
        caption: {
          native: "A world map showing the spread of the Spanish language across three continents",
          target: "Un mapamundi que muestra la extensión de la lengua española por tres continentes",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800",
        caption: {
          native: "A diverse group of people — Spanish belongs to all its speakers equally",
          target: "Un grupo diverso de personas — el español pertenece a todos sus hablantes por igual",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
        caption: {
          native: "Books and dictionaries — the RAE has documented the Spanish language since 1713",
          target: "Libros y diccionarios — la RAE documenta la lengua española desde 1713",
        },
        credit: "Unsplash",
      },
    ],
    body: {
      target: `El español es la segunda lengua materna más hablada del mundo, con aproximadamente 485 millones de hablantes nativos. Es lengua oficial en 20 países repartidos en tres continentes: Europa, América y África. Solo el chino mandarín supera al español en número de hablantes nativos, y el español está por delante del inglés en este ranking. En 2050, se proyecta que Estados Unidos será el país con mayor número de hispanohablantes del mundo, ya que cuenta con más de 60 millones en la actualidad. El español es también uno de los seis idiomas oficiales de las Naciones Unidas.

Una de las características más llamativas del español es su variedad regional en pronunciación y vocabulario. El español castellano de España utiliza el sonido "th" para las letras c y z — así, "gracias" se pronuncia "grathias" —, mientras que en América Latina se usa el seseo: todas las letras suenan como una "s". Otra diferencia importante es el uso del pronombre de segunda persona del plural: en España se usa "vosotros" de forma informal; en América Latina no existe "vosotros" y se usa "ustedes" en todos los contextos. Además, en Argentina, Uruguay y partes de Centroamérica se usa "vos" en lugar de "tú", con conjugaciones propias. Estas diferencias no son errores: son variedades regionales igualmente legítimas.

La diversidad léxica del español es notable. El mismo objeto puede tener nombres completamente diferentes según el país: "coche" en España, "auto" en Argentina, "carro" en Colombia y México. El ordenador en España es "computadora" en la mayor parte de América Latina. El "zumo" en España es "jugo" en América Latina. Un español y un argentino siempre se entienden, pero notan las diferencias inmediatamente. Esta diversidad refleja siglos de desarrollo independiente y el contacto con diferentes lenguas indígenas, africanas y europeas en cada región.

La Real Academia Española (RAE), fundada en 1713, tiene como lema "limpia, fija y da esplendor". Trabaja junto a 22 academias nacionales de todo el mundo hispanohablante para publicar el diccionario oficial y las normas gramaticales de la lengua. A lo largo de los años, la RAE ha aceptado numerosos latinoamericanismos y ha resistido el impulso de imponer una sola variedad como "correcta". En los últimos tiempos, ha sido objeto de debate por su postura relativamente conservadora ante las propuestas de lenguaje inclusivo con terminaciones en "x" o "e".

El futuro del español es prometedor. Es la lengua europea que crece más rápido en número de hablantes. En Estados Unidos es la segunda lengua dominante, y en África hay una presencia pequeña pero creciente, sobre todo en Guinea Ecuatorial. El debate sobre qué variedad de español enseñar — ¿el español neutro? ¿el castellano de España? — refleja la tensión democrática dentro de la lengua misma: ninguna variedad la posee en exclusiva, y su riqueza reside precisamente en esa diversidad.`,
      native: `Spanish is the second most spoken native language in the world, with approximately 485 million native speakers. It is an official language in 20 countries spread across three continents: Europe, the Americas, and Africa. Only Mandarin Chinese surpasses Spanish in number of native speakers, and Spanish ranks ahead of English in this regard. By 2050, the United States is projected to be the country with the largest Spanish-speaking population in the world, as it already has over 60 million speakers. Spanish is also one of the six official languages of the United Nations.

One of the most striking characteristics of Spanish is its regional variety in pronunciation and vocabulary. Castilian Spanish in Spain uses the "th" sound for the letters c and z — so "gracias" is pronounced "grathias" — while in Latin America, seseo is used: all letters sound like an "s". Another important difference is the use of the second person plural pronoun: in Spain, "vosotros" is used informally; in Latin America, "vosotros" does not exist and "ustedes" is used in all contexts. In addition, in Argentina, Uruguay, and parts of Central America, "vos" is used instead of "tú", with its own conjugations. These differences are not errors: they are equally legitimate regional varieties.

The lexical diversity of Spanish is remarkable. The same object can have completely different names depending on the country: "coche" in Spain, "auto" in Argentina, "carro" in Colombia and Mexico. The "ordenador" in Spain is "computadora" in most of Latin America. "Zumo" in Spain is "jugo" in Latin America. A Spaniard and an Argentine can always understand each other, but they notice the differences immediately. This diversity reflects centuries of independent development and contact with different indigenous, African, and European languages in each region.

The Real Academia Española (RAE), founded in 1713, has the motto "limpia, fija y da esplendor" (cleans, fixes and gives splendour). It works together with 22 national academies from across the Spanish-speaking world to publish the official dictionary and grammatical standards of the language. Over the years, the RAE has accepted numerous Latin Americanisms and has resisted the impulse to impose a single variety as "correct". In recent times, it has been the subject of debate for its relatively conservative stance on proposals for inclusive language using "x" or "e" endings.

The future of Spanish is bright. It is the European language growing fastest in number of speakers. In the United States it is the dominant second language, and in Africa there is a small but growing presence, particularly in Equatorial Guinea. The debate about which variety of Spanish to teach — neutral Spanish? Castilian Spanish? — reflects the democratic tension within the language itself: no variety owns it exclusively, and its richness lies precisely in that diversity.`,
    },
    cultureVocab: [
      {
        word: "el seseo",
        translation: "the use of 's' for c/z throughout Latin America",
        culturalNote:
          "The myth that Latin American Spanish is 'incorrect' because it uses seseo is false. Seseo existed in 15th-century Seville and was brought to the Americas by early colonists. Neither Castilian nor Latin American pronunciation is more 'original'.",
      },
      {
        word: "el voseo",
        translation: "the use of 'vos' instead of 'tú'",
        culturalNote:
          "Vos is the second person singular pronoun used in Argentina, Uruguay, Paraguay and parts of Central America. It has its own conjugations (vos tenés, vos hablás) and is used in all registers — formal, informal, written and spoken. Argentine Spanish sounds markedly different from any other variety partly because of this.",
      },
      {
        word: "la RAE (Real Academia Española)",
        translation: "the Royal Spanish Academy",
        culturalNote:
          "Despite its authority, the RAE does not control the language — it describes it. In recent years the RAE has been both praised (for accepting Latin American vocabulary) and criticized (for being slow to include gender-neutral forms). The official dictionary now also lists words from 22 national academies.",
      },
      {
        word: "el español neutro",
        translation: "neutral Spanish",
        culturalNote:
          "A constructed register used in dubbing, international advertising and pan-Hispanic media to avoid sounding specifically from one country. It avoids vosotros and vos, uses vocabulary common to all regions, and has no strong regional accent. Critics argue it sounds artificial; advocates say it is the only practical solution for transnational content.",
      },
      {
        word: "el espanglish",
        translation: "Spanglish",
        culturalNote:
          "The mixing of Spanish and English used by many Hispanic communities in the United States. Includes code-switching (switching mid-sentence) and hybrid words (lonchar = to have lunch, from 'lunch'). Linguists consider it a natural contact language, not a degraded form of either language.",
      },
    ],
    questions: [
      {
        id: "es-c-b1-3-q1",
        type: "comprehension",
        prompt: {
          native:
            "Why is the claim that Latin American Spanish pronunciation is 'incorrect' linguistically false?",
          target:
            "¿Por qué es lingüísticamente falsa la afirmación de que la pronunciación del español latinoamericano es 'incorrecta'?",
        },
        options: [
          "Because seseo was present in 15th-century Seville and was brought to the Americas by early Spanish colonists",
          "Because Latin American Spanish is older than Castilian Spanish and therefore more original",
          "Because the RAE officially declared Latin American Spanish the standard in 1998",
          "Because seseo is used in more countries than the Castilian 'th' sound",
        ],
        answer:
          "Because seseo was present in 15th-century Seville and was brought to the Americas by early Spanish colonists",
      },
      {
        id: "es-c-b1-3-q2",
        type: "comprehension",
        prompt: {
          native:
            "What is the difference between how Spain and Latin America use the second person plural 'you'?",
          target:
            "¿Cuál es la diferencia entre el uso de la segunda persona del plural en España y en América Latina?",
        },
        options: [
          "Spain uses 'vosotros' for informal plural you; Latin America uses 'ustedes' for all plural you",
          "Spain uses 'ustedes' only in formal contexts; Latin America uses 'vosotros' informally",
          "Spain uses 'vos' for informal contexts; Latin America uses 'vosotros' in all contexts",
          "Both Spain and Latin America use 'ustedes' — the only difference is pronunciation",
        ],
        answer:
          "Spain uses 'vosotros' for informal plural you; Latin America uses 'ustedes' for all plural you",
      },
      {
        id: "es-c-b1-3-q3",
        type: "reflection",
        prompt: {
          native:
            "Spanish is spoken by 485 million people across 20 countries, with significant regional differences. Do you think this diversity is a strength or a weakness for the language? How does Spanish compare to English in terms of regional variety and global reach?",
          target:
            "El español lo hablan 485 millones de personas en 20 países, con diferencias regionales significativas. ¿Crees que esta diversidad es una fortaleza o una debilidad para la lengua? ¿Cómo se compara el español con el inglés en cuanto a variedad regional y alcance global?",
        },
      },
    ],
    didYouKnow: {
      native:
        "The United States has more Spanish speakers than Spain itself — over 60 million, compared to Spain's 47 million. By 2060, the US is projected to have the largest Spanish-speaking population in the world, overtaking Mexico. Yet Spanish is not an official language of the United States. The question of whether to make it co-official — or even just to acknowledge its central role in American life — remains one of the most politically charged linguistic debates in the country.",
      target:
        "Estados Unidos tiene más hispanohablantes que España — más de 60 millones, frente a los 47 millones de España. Para 2060, se proyecta que Estados Unidos tendrá la mayor población hispanohablante del mundo, superando a México. Sin embargo, el español no es lengua oficial de Estados Unidos. La pregunta de si convertirlo en cooficial — o incluso simplemente reconocer su papel central en la vida estadounidense — sigue siendo uno de los debates lingüísticos más cargados políticamente del país.",
    },
    relatedIds: ["es-c-b1-1", "es-c-b1-2"],
  },
];
