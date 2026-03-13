import { CultureEpisode } from "../../../types";

export const c1Culture: CultureEpisode[] = [
  {
    id: "es-c-c1-1",
    language: "es",
    level: "C1",
    category: "arts",
    region: "spain",
    title: {
      native: "The Art of Flamenco",
      target: "El arte flamenco",
    },
    subtitle:
      "Born in the margins of Andalusian society, flamenco became one of Spain's most powerful cultural exports and a UNESCO Intangible Heritage of Humanity.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800",
        caption: {
          native: "A flamenco dancer mid-performance in Seville",
          target: "Una bailaora de flamenco en plena actuación en Sevilla",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800",
        caption: {
          native: "The intricate footwork of flamenco — zapateado — is its rhythmic heartbeat",
          target: "El intrincado taconeo del flamenco —el zapateado— es su latido rítmico",
        },
        credit: "Unsplash",
      },
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        caption: {
          native: "The guitar is the melodic spine of every flamenco performance",
          target: "La guitarra es la columna vertebral melódica de toda actuación flamenca",
        },
        credit: "Unsplash",
      },
    ],
    body: {
      target:
        "El flamenco es mucho más que un espectáculo turístico: es una forma de vida, un lenguaje emocional y una de las expresiones artísticas más complejas que ha producido la cultura española. Declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2010, el flamenco nació en Andalucía —probablemente entre los siglos XVIII y XIX— de la confluencia de varias tradiciones culturales marginadas: la música gitana, el canto judío sefardí, las melodías árabes del Al-Ándalus y los ritmos africanos llegados a través del comercio con América.\n\nEn su forma más auténtica, el flamenco no es un género único sino un universo de palos —estilos diferenciados con estructuras rítmicas, tonales y emocionales propias. Hay más de cincuenta palos documentados, desde los más jondos (profundos y dolorosos, como la soleá o la seguiriya) hasta los más festivos (como la bulería o la alegrías). La palabra jondo —corrupción de hondo— es esencial para entender el flamenco: alude a esa capacidad de expresar el dolor existencial más profundo, lo que en flamenco se llama el duende.\n\nEl filósofo Federico García Lorca fue quien mejor teorizó sobre el duende en su famosa conferencia de 1933: no es una técnica, sino una fuerza oscura que sube desde dentro del artista y toma el control de su cuerpo y su voz. No todos los cantaores tienen duende; algunos solo tienen virtuosismo, que no es lo mismo. El duende se siente en la voz rota de una cantaora que interpreta una siguiriya, en el silencio tenso antes del zapateado, en la mirada perdida de un bailaor que ya no está en el tablao sino en otro lugar.\n\nEl flamenco se articula en torno a tres elementos inseparables: el cante (el canto), el toque (la guitarra) y el baile (la danza). A estos se añaden los jaleos —las exclamaciones de apoyo del público y los compañeros («¡Olé!», «¡Así se canta!»)— y el palmeo, el complejo sistema de palmas que marca el compás. El compás del flamenco es notoriamente difícil para músicos de otras tradiciones: la bulería, por ejemplo, se desarrolla en ciclos de doce tiempos con acentos en posiciones inesperadas, y aprenderlo de oído durante años es la única forma real de interiorizarlo.\n\nHistóricamente, el flamenco se transmitía de forma oral dentro de las familias gitanas y los círculos cerrados de las peñas flamencas —asociaciones de aficionados— de ciudades como Jerez de la Frontera, Sevilla y Cádiz. Las grandes sagas familiares —los Pastora, los Caracol, los Montoya— guardaban sus estilos como un tesoro íntimo. Esta tradición comenzó a abrirse al mundo en la segunda mitad del siglo XX, cuando artistas como Camarón de la Isla y Paco de Lucía llevaron el flamenco a escenarios internacionales y lo fusionaron con el jazz, el rock y la música clásica sin traicionar su esencia.\n\nHoy el flamenco vive una etapa de expansión y debate simultáneos. Por un lado, escuelas de flamenco existen en Tokio, Nueva York, París y Helsinki, y el flamenco-fusión llena teatros de todo el mundo. Por otro, los puristas advierten del peligro de la superficialización: el flamenco convertido en producto de consumo para turistas pierde precisamente aquello que lo hace único —la urgencia, la verdad emocional, el riesgo. La tensión entre la conservación del patrimonio y la necesaria evolución artística es una conversación que los propios flamencos llevan décadas manteniendo, y es en sí misma una parte constitutiva del arte.",
      native:
        "Flamenco is far more than a tourist spectacle: it is a way of life, an emotional language, and one of the most complex artistic expressions that Spanish culture has produced. Declared an Intangible Cultural Heritage of Humanity by UNESCO in 2010, flamenco was born in Andalusia — probably between the eighteenth and nineteenth centuries — from the confluence of several marginalized cultural traditions: Romani music, Sephardic Jewish song, the Arabic melodies of Al-Ándalus, and African rhythms that arrived through trade with the Americas.\n\nIn its most authentic form, flamenco is not a single genre but a universe of palos — distinct styles with their own rhythmic, tonal, and emotional structures. There are more than fifty documented palos, ranging from the most jondo (deep and sorrowful, like the soleá or seguiriya) to the most festive (like the bulería or alegrías). The word jondo — a corruption of hondo (deep) — is essential to understanding flamenco: it refers to that capacity to express the deepest existential pain, what in flamenco is called the duende.\n\nThe philosopher Federico García Lorca was the one who best theorized about the duende in his famous 1933 lecture: it is not a technique, but a dark force that rises from within the artist and takes control of their body and voice. Not all cantaores have duende; some only have virtuosity, which is not the same thing. The duende is felt in the broken voice of a singer interpreting a siguiriya, in the tense silence before the zapateado, in the distant gaze of a dancer who is no longer on the stage but somewhere else entirely.\n\nFlamenco is articulated around three inseparable elements: the cante (singing), the toque (guitar), and the baile (dance). To these are added the jaleos — the shouts of encouragement from the audience and fellow performers ('¡Olé!', '¡Así se canta!') — and the palmeo, the complex system of handclapping that marks the compás (rhythm). Flamenco's compás is notoriously difficult for musicians from other traditions: the bulería, for example, unfolds in twelve-beat cycles with accents in unexpected positions, and learning it by ear over many years is the only real way to internalize it.\n\nHistorically, flamenco was transmitted orally within Romani families and the closed circles of peñas flamencas — clubs of enthusiasts — in cities like Jerez de la Frontera, Seville, and Cádiz. The great family dynasties — the Pastoras, the Caracoles, the Montoyas — guarded their styles as an intimate treasure. This tradition began to open to the world in the second half of the twentieth century, when artists like Camarón de la Isla and Paco de Lucía brought flamenco to international stages and fused it with jazz, rock, and classical music without betraying its essence.\n\nToday flamenco exists in a state of simultaneous expansion and debate. On one hand, flamenco schools exist in Tokyo, New York, Paris, and Helsinki, and fusion flamenco fills theaters around the world. On the other, purists warn of the danger of superficialization: flamenco turned into a consumer product for tourists loses precisely what makes it unique — urgency, emotional truth, risk. The tension between preserving heritage and allowing necessary artistic evolution is a conversation that flamenco artists themselves have been having for decades, and it is in itself a constitutive part of the art.",
    },
    cultureVocab: [
      {
        word: "el duende",
        translation: "the ineffable spirit / dark creative force in flamenco",
        culturalNote:
          "García Lorca defined duende as a 'mysterious power that all may feel and no philosophy can explain.' It is considered the highest achievement in flamenco — beyond technique or beauty, it is raw emotional truth that physically moves the audience.",
      },
      {
        word: "palo (pl. palos)",
        translation: "a distinct flamenco style or form",
        culturalNote:
          "Each palo has its own compás, key, and emotional register. The seguiriya is associated with death and despair; the soleá with solitude and dignity; the bulería with joy and wit. Mastering even one palo deeply can take a lifetime.",
      },
      {
        word: "jondo / cante jondo",
        translation: "deep song — the most serious, emotionally intense flamenco",
        culturalNote:
          "Manuel de Falla and Federico García Lorca organized the first Concurso de Cante Jondo in Granada in 1922, partly to rescue the most ancient forms of flamenco from what they saw as commercial degradation — a debate that continues today.",
      },
      {
        word: "peña flamenca",
        translation: "flamenco club / enthusiasts' association",
        culturalNote:
          "Peñas are grassroots cultural associations where flamenco is performed in an intimate setting, often with the best artists performing for free among friends. They are considered the authentic heartbeat of flamenco culture, contrasting with the tourist-oriented tablaos.",
      },
      {
        word: "zapateado",
        translation: "the rhythmic footwork of flamenco dance",
        culturalNote:
          "Advanced flamenco dancers can produce over ten distinct sounds per second with their feet, using the heel, toe, ball, and full sole in combinations. Professional dancers wear specially reinforced shoes and practise for years before performing publicly.",
      },
      {
        word: "tablao",
        translation: "a flamenco performance venue",
        culturalNote:
          "The word comes from tablado (wooden platform stage). Tablaos proliferated in the 1960s to serve the tourist boom. Top tablaos in Seville, Madrid, and Granada do showcase genuine artists, but critics argue the format — with food service and fixed show times — is at odds with the spontaneous nature of real flamenco.",
      },
    ],
    questions: [
      {
        id: "es-c-c1-1-q1",
        type: "comprehension",
        prompt: {
          native:
            "According to the episode, from which cultural traditions did flamenco emerge in Andalusia?",
          target:
            "Según el episodio, ¿de qué tradiciones culturales surgió el flamenco en Andalucía?",
        },
        options: [
          "Classical Spanish court music and Baroque guitar tradition",
          "Romani music, Sephardic Jewish song, Arabic melodies, and African rhythms",
          "Latin American folk music brought back by conquistadors",
          "Medieval Christian liturgical chant and Moorish poetry",
        ],
        answer: "Romani music, Sephardic Jewish song, Arabic melodies, and African rhythms",
      },
      {
        id: "es-c-c1-1-q2",
        type: "comprehension",
        prompt: {
          native:
            "How did Camarón de la Isla and Paco de Lucía change flamenco in the twentieth century?",
          target:
            "¿Cómo cambiaron Camarón de la Isla y Paco de Lucía el flamenco en el siglo XX?",
        },
        options: [
          "They codified flamenco into a fixed academic system taught in conservatories",
          "They brought flamenco to international stages and fused it with jazz, rock, and classical music",
          "They petitioned UNESCO to recognize flamenco as world heritage",
          "They opened the first tablaos in Madrid specifically for foreign tourists",
        ],
        answer:
          "They brought flamenco to international stages and fused it with jazz, rock, and classical music",
      },
      {
        id: "es-c-c1-1-q3",
        type: "reflection",
        prompt: {
          native:
            "The episode describes a tension between flamenco's global spread and the risk of 'superficialization.' This dilemma — authenticity versus accessibility — affects many art forms that become internationally popular. Can a traditional art survive being exported, commodified, and taught worldwide without losing its soul? Where should the line be drawn, if at all?",
          target:
            "El episodio describe una tensión entre la expansión global del flamenco y el riesgo de 'superficialización'. Este dilema —autenticidad frente a accesibilidad— afecta a muchas formas artísticas que se vuelven internacionalmente populares. ¿Puede sobrevivir un arte tradicional siendo exportado, comercializado y enseñado en todo el mundo sin perder su alma? ¿Dónde debería trazarse el límite, si es que debe trazarse?",
        },
      },
    ],
  },
];
