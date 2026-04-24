import { CultureEpisode } from "../../../../types"

export const esCA21: CultureEpisode = {
  id: "es-c-a2-1",
  language: "es",
  level: "A2",
  category: "daily-life",
  region: "latin-america",
  title: {
    native: "Health and the Pharmacist in Latin America",
    target: "La salud y el farmacéutico en Latinoamérica",
  },
  subtitle: "Why the pharmacist is the first stop for healthcare across Latin America.",
  photos: [
    {
      url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
      caption: {
        native: "A neighbourhood pharmacy in Bogotá",
        target: "Una farmacia de barrio en Bogotá",
      },
      credit: "Unsplash",
    },
    {
      url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
      caption: {
        native: "Herbal remedies alongside modern medicine in a Mexican market",
        target: "Remedios naturales junto a la medicina moderna en un mercado mexicano",
      },
      credit: "Unsplash",
    },
  ],
  body: {
    native: "In much of Latin America, the pharmacist — el farmacéutico or la farmacéutica — plays a role that goes far beyond simply dispensing medication. For millions of people, a visit to the local pharmacy is the first and sometimes only point of contact with the healthcare system.\n\nWhen you have a headache, a cough, or a stomach problem, the normal course of action in Mexico, Colombia, Peru, or Argentina is to walk into the nearest farmacia, describe your symptoms, and receive a recommendation on the spot. The pharmacist might suggest over-the-counter medication, or in some cases even prescribe antibiotics that would require a prescription in other countries.\n\nThis reflects a healthcare reality: in many parts of Latin America, public health systems are stretched and private doctor consultations are expensive. The pharmacy fills the gap. Signs like 'Servicio médico' (medical service) outside pharmacies — especially in Mexico — signal that a doctor is actually present on-site at low or no cost.\n\nTraditional remedies (remedios caseros) coexist comfortably with pharmaceutical products throughout the region. Chamomile tea (té de manzanilla) for stomach problems, ginger with lemon and honey for colds, and valerian for nerves are used alongside modern medicine without conflict. This integration of traditional and contemporary approaches to health is a distinctive feature of Latin American daily life.",
    target: "En gran parte de Latinoamérica, el farmacéutico o la farmacéutica desempeña un papel que va mucho más allá de dispensar medicamentos. Para millones de personas, visitar la farmacia del barrio es el primer — y a veces único — contacto con el sistema de salud.\n\nCuando tienes dolor de cabeza, tos o malestar estomacal, lo normal en México, Colombia, Perú o Argentina es entrar a la farmacia más cercana, describir tus síntomas y recibir una recomendación en el momento. El farmacéutico puede sugerir un medicamento de venta libre, o en algunos casos incluso recomendar antibióticos que en otros países requieren receta médica.\n\nEsto refleja una realidad sanitaria: en muchas partes de Latinoamérica, el sistema de salud público está saturado y las consultas médicas privadas son caras. La farmacia llena ese vacío. Los letreros de 'Servicio médico' en farmacias — especialmente en México — indican que hay un médico disponible en el local a bajo costo o incluso gratis.\n\nLos remedios caseros conviven con los productos farmacéuticos en toda la región. El té de manzanilla para el estómago, el jengibre con limón y miel para el resfriado, y la valeriana para los nervios se usan junto a la medicina moderna sin conflicto. Esta integración de enfoques tradicionales y contemporáneos hacia la salud es una característica distintiva de la vida cotidiana latinoamericana.",
  },
  cultureVocab: [
    {
      word: "el farmacéutico / la farmacéutica",
      translation: "pharmacist",
      culturalNote: "In Latin America, pharmacists are trained health consultants, not just dispensers. Many carry a licenciatura or even a doctorate in pharmacy sciences.",
    },
    {
      word: "venta libre",
      translation: "over the counter / no prescription needed",
      culturalNote: "Many medications requiring a prescription in Europe or North America are sold over the counter (de venta libre) across much of Latin America.",
    },
    {
      word: "remedios caseros",
      translation: "home remedies",
      culturalNote: "Traditional plant-based remedies passed down through generations. Used by all social classes and taken seriously alongside pharmaceutical treatments.",
    },
    {
      word: "la manzanilla",
      translation: "chamomile",
      culturalNote: "Té de manzanilla (chamomile tea) is the default remedy for stomach problems across the Spanish-speaking world — offered in most homes and restaurants.",
    },
    {
      word: "farmacia de guardia",
      translation: "duty pharmacy / 24-hour pharmacy",
      culturalNote: "Most cities have rotating duty pharmacies (farmacias de guardia or farmacias 24 horas) that remain open overnight for emergencies.",
    },
  ],
  questions: [
    {
      id: "es-c-a2-1-q1",
      type: "comprehension",
      prompt: {
        native: "Why do many people in Latin America go to the pharmacy before seeing a doctor?",
        target: "¿Por qué muchas personas en Latinoamérica van a la farmacia antes que al médico?",
      },
      options: [
        "Because pharmacies are cheaper and more accessible than doctor consultations",
        "Because doctors don't exist in Latin America",
        "Because pharmacists are more qualified than doctors",
        "Because pharmacies are only open at night",
      ],
      answer: "Because pharmacies are cheaper and more accessible than doctor consultations",
    },
    {
      id: "es-c-a2-1-q2",
      type: "reflection",
      prompt: {
        native: "Do you use traditional or home remedies from your own culture? How do they compare to the Latin American remedios caseros described here?",
        target: "¿Usas remedios tradicionales o caseros de tu propia cultura? ¿Cómo se comparan con los remedios caseros latinoamericanos descritos aquí?",
      },
    },
    {
      id: "es-c-a2-1-q3",
      type: "comparison",
      prompt: {
        native: "How does the role of the pharmacist in Latin America differ from the role in your country? What are the advantages and disadvantages of each approach?",
        target: "¿Cómo se diferencia el papel del farmacéutico en Latinoamérica del papel en tu país? ¿Cuáles son las ventajas y desventajas de cada enfoque?",
      },
    },
  ],
  didYouKnow: {
    native: "Mexico has one of the highest densities of pharmacies per capita in the world. In Mexico City alone, there are more than 17,000 registered pharmacies — roughly one for every 500 residents. Many Pemex (national oil company) petrol stations also have an attached pharmacy. This extraordinary access to medication reflects both the strength of the pharmaceutical industry in Mexico and the practical reality of a fragmented public health system.",
    target: "México tiene una de las densidades de farmacias per cápita más altas del mundo. Solo en Ciudad de México hay más de 17.000 farmacias registradas — aproximadamente una por cada 500 habitantes. Muchas gasolineras de Pemex (la empresa petrolera nacional) también tienen una farmacia adyacente. Este acceso extraordinario a medicamentos refleja tanto la fortaleza de la industria farmacéutica mexicana como la realidad práctica de un sistema de salud público fragmentado.",
  },
}
