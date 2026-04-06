import { CultureEpisode } from "../../../../types";

export const esCA21: CultureEpisode = {
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
    {
      id: "es-c-a2-1-q3",
      type: "reflection",
      prompt: {
        native:
          "Spain has one of the most extensive high-speed rail networks in the world, yet car ownership is also very high. Do you think investing in public transport changes how people live and move in cities? How does transport in your country compare?",
        target:
          "España tiene una de las redes ferroviarias de alta velocidad más extensas del mundo, pero el número de coches también es muy alto. ¿Crees que invertir en transporte público cambia la forma en que las personas viven y se desplazan en las ciudades? ¿Cómo es el transporte en tu país en comparación?",
      },
    },
  ],
  didYouKnow: {
    native:
      "Spain has the longest high-speed rail network in Europe and the second longest in the world after China, with over 3,600 kilometres of AVE track. Despite this, Spain's car ownership rate is among the highest in the EU. The two coexist because Spain's geography — vast distances between major cities and sparse rural populations — makes both necessary. A Madrid–Barcelona journey that takes 2.5 hours by AVE would take 6 hours by car.",
    target:
      "España tiene la red ferroviaria de alta velocidad más larga de Europa y la segunda más larga del mundo después de China, con más de 3.600 kilómetros de vía AVE. A pesar de esto, la tasa de posesión de automóviles en España es una de las más altas de la UE. Ambas realidades coexisten porque la geografía de España —las grandes distancias entre las ciudades principales y una población rural dispersa— hace que ambas sean necesarias. Un viaje de Madrid a Barcelona que dura 2,5 horas en AVE tardaría 6 horas en coche.",
  },
};
