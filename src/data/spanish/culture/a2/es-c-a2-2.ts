import { CultureEpisode } from "../../../../types"

export const esCA22: CultureEpisode = {
  id: "es-c-a2-2",
  language: "es",
  level: "A2",
  category: "daily-life",
  region: "latin-america",
  title: {
    native: "Getting Around Latin America: Transport and the Road",
    target: "Moverse por Latinoamérica: el transporte y la carretera",
  },
  subtitle: "From Mexico City metro to Colombian bus cama — how Latin Americans move.",
  photos: [
    {
      url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
      caption: {
        native: "A long-distance bus in the Peruvian Andes",
        target: "Un autobús de larga distancia en los Andes peruanos",
      },
      credit: "Unsplash",
    },
    {
      url: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800",
      caption: {
        native: "The Mexico City metro — the largest in Latin America",
        target: "El metro de Ciudad de México — el más grande de América Latina",
      },
      credit: "Unsplash",
    },
  ],
  body: {
    native: "Transport in Latin America is a world of its own — diverse, sometimes chaotic, often surprisingly comfortable, and deeply connected to the social fabric of each country.\n\nThe vocabulary for public transport varies enormously from country to country. What Spaniards call an 'autobús' becomes a 'camión' in Mexico, a 'bus' or 'buseta' in Colombia, a 'colectivo' or 'micro' in Argentina and Chile, and an 'ómnibus' in Uruguay. If you travel across the continent, learning these regional words is essential for navigating public transport.\n\nFor long-distance travel, buses are the backbone of Latin American transport. In countries like Argentina, Chile, Colombia, and Peru, long-haul bus services in premium classes (bus cama — sleeper bus, or semi-cama — reclining) offer full seat recline, meals, films, and service that rivals flying. A twelve-hour overnight journey from Buenos Aires to Mendoza can be genuinely comfortable.\n\nCity transport is another story. Mexico City's metro system — with its twelve lines and colour-coded stations — carries over four million passengers per day, making it the busiest in the Americas. In Medellín, the innovative Metro Cable connects hillside comunas to the city centre, transforming communities that were previously isolated. Bogotá's TransMilenio bus rapid transit system moves up to 2.2 million people daily.\n\nCars and taxis remain important, especially in cities where public transport is less developed. Ride-hailing apps like Uber, Didi, and InDriver are now standard across the region. Traditional taxis are negotiated by meter or by agreeing a price before you get in — always confirm this first to avoid surprises.",
    target: "El transporte en Latinoamérica es un mundo propio — diverso, a veces caótico, con frecuencia sorprendentemente cómodo y profundamente conectado al tejido social de cada país.\n\nEl vocabulario del transporte público varía enormemente de país en país. Lo que los españoles llaman 'autobús' se convierte en 'camión' en México, 'bus' o 'buseta' en Colombia, 'colectivo' o 'micro' en Argentina y Chile, y 'ómnibus' en Uruguay. Si viajas por el continente, aprender estas palabras regionales es fundamental para moverte.\n\nPara los viajes de larga distancia, los buses son la columna vertebral del transporte latinoamericano. En países como Argentina, Chile, Colombia y Perú, los servicios de larga distancia en clases premium (bus cama o semi-cama) ofrecen reclinación total, comidas, películas y un servicio que rivaliza con el avión. Un viaje nocturno de doce horas de Buenos Aires a Mendoza puede ser genuinamente cómodo.\n\nEl transporte urbano es otra historia. El metro de Ciudad de México — con sus doce líneas y estaciones con código de colores — transporta a más de cuatro millones de pasajeros al día, lo que lo convierte en el más transitado de las Américas. En Medellín, el innovador Metro Cable conecta las comunas de las laderas con el centro de la ciudad, transformando comunidades que antes estaban aisladas. El TransMilenio de Bogotá mueve hasta 2,2 millones de personas al día.\n\nLos coches y los taxis siguen siendo importantes, especialmente en ciudades donde el transporte público está menos desarrollado. Las aplicaciones de transporte como Uber, Didi e InDriver son ya estándar en toda la región. Los taxis tradicionales se negocian por taxímetro o acordando un precio antes de subir — confirma esto siempre para evitar sorpresas.",
  },
  cultureVocab: [
    {
      word: "el camión",
      translation: "bus (in Mexico)",
      culturalNote: "In Mexico, 'camión' refers to any public bus — from city buses to long-haul coaches. Don't confuse it with 'camión' meaning 'truck' in other countries.",
    },
    {
      word: "bus cama",
      translation: "sleeper bus (full recline for overnight journeys)",
      culturalNote: "A distinctly South American institution. Bus cama services on routes like Buenos Aires–Mendoza or Lima–Cusco are genuinely comfortable and popular with locals.",
    },
    {
      word: "el Metro Cable",
      translation: "cable car metro system",
      culturalNote: "Medellín's Metro Cable was the first urban cable car system integrated into a city's public transport network. It became a global model for connecting isolated hillside communities.",
    },
    {
      word: "el colectivo",
      translation: "shared taxi / local bus (Argentina, Peru)",
      culturalNote: "In Argentina, 'colectivo' means bus. In Peru and other countries, it can mean a shared taxi on a fixed route. The word shifts meaning significantly by country.",
    },
    {
      word: "el taxímetro",
      translation: "taxi meter",
      culturalNote: "Not all taxis use meters. In many cities it's normal to negotiate the fare before getting in. Always ask '¿cuánto cobra?' before the journey starts.",
    },
  ],
  questions: [
    {
      id: "es-c-a2-2-q1",
      type: "comprehension",
      prompt: {
        native: "What is a 'bus cama' and why is it popular in South America?",
        target: "¿Qué es un 'bus cama' y por qué es popular en Sudamérica?",
      },
      options: [
        "A fast urban metro bus",
        "A long-distance sleeper bus with full recline, meals and films",
        "A taxi shared with other passengers",
        "A tourist bus for sightseeing",
      ],
      answer: "A long-distance sleeper bus with full recline, meals and films",
    },
    {
      id: "es-c-a2-2-q2",
      type: "reflection",
      prompt: {
        native: "What word for 'bus' is used in each of these countries: Mexico, Colombia, Argentina? Why do you think the vocabulary varies so much across the Spanish-speaking world?",
        target: "¿Qué palabra se usa para 'autobús' en México, Colombia y Argentina? ¿Por qué crees que el vocabulario varía tanto en el mundo hispanohablante?",
      },
    },
    {
      id: "es-c-a2-2-q3",
      type: "comparison",
      prompt: {
        native: "How does public transport in your country compare to what is described here for Latin America? What would you find most surprising or most familiar if you were travelling in Latin America?",
        target: "¿Cómo es el transporte público en tu país comparado con lo descrito aquí para Latinoamérica? ¿Qué te parecería más sorprendente o más familiar si viajaras por Latinoamérica?",
      },
    },
  ],
  didYouKnow: {
    native: "Medellín's transformation from the world's most dangerous city (1991) to an internationally celebrated 'city of innovation' was driven in part by targeted public infrastructure investment. The Metro Cable lines — connecting isolated hillside comunas to the rest of the city — were not just transport projects. They were instruments of social inclusion, bringing schools, libraries, and economic opportunity to communities that had been cut off for decades. The city has won multiple international urban innovation prizes. Local residents simply call it 'la ciudad más querida'.",
    target: "La transformación de Medellín de la ciudad más peligrosa del mundo (1991) a una metrópolis internacionalmente reconocida como 'ciudad de innovación' fue impulsada en parte por inversiones estratégicas en infraestructura pública. Las líneas del Metro Cable — que conectan las comunas aisladas de las laderas con el resto de la ciudad — no fueron solo proyectos de transporte. Fueron instrumentos de inclusión social, que llevaron escuelas, bibliotecas y oportunidades económicas a comunidades que habían estado desconectadas durante décadas. La ciudad ha ganado múltiples premios internacionales de innovación urbana. Los residentes locales simplemente la llaman 'la ciudad más querida'.",
  },
}
