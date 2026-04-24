import { CultureEpisode } from "../../../../types"

export const esCA23: CultureEpisode = {
  id: "es-c-a2-3",
  language: "es",
  level: "A2",
  category: "customs",
  region: "latin-america",
  title: {
    native: "Debating and Disagreeing in Latin American Spanish",
    target: "Debatir y no estar de acuerdo en el español latinoamericano",
  },
  subtitle: "How opinions are expressed, defended and challenged across Latin America.",
  photos: [
    {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
      caption: {
        native: "Friends in conversation at a café in Buenos Aires",
        target: "Amigos conversando en un café de Buenos Aires",
      },
      credit: "Unsplash",
    },
    {
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800",
      caption: {
        native: "A lively discussion at a market in Oaxaca",
        target: "Una animada conversación en un mercado de Oaxaca",
      },
      credit: "Unsplash",
    },
  ],
  body: {
    native: "How people express and handle disagreement is deeply cultural — and Latin America is no exception. There are significant differences between countries and contexts, but some general patterns apply across the region.\n\nIn Argentina, particularly in Buenos Aires, direct debate and spirited argument are signs of engagement and respect, not rudeness. Porteños (Buenos Aires residents) are famous for their strong opinions, their love of discussion, and their willingness to challenge ideas directly. A lively argument at a dinner table is a form of social bonding. The expression 'me parece que estás equivocado' (I think you're wrong) delivered with warmth and a smile is not an insult — it's an invitation to keep talking.\n\nIn Mexico and Colombia, the style tends to be somewhat more indirect, especially in formal contexts or when speaking to someone older or in a position of authority. Disagreement is often softened with phrases like 'entiendo lo que dices, pero...' (I understand what you're saying, but...) or 'no estoy del todo de acuerdo' (I'm not entirely in agreement). Face-saving is important — you can disagree, but you do it in a way that respects the other person.\n\nAcross the region, 'según yo' (literally 'according to me') has become one of the most natural markers of personal opinion in informal speech — particularly in Mexico. Some older speakers consider it grammatically incorrect, but it's entirely standard in everyday conversation among younger generations.\n\nOne universal feature: passion. Latin American Spanish conversations about politics, football, food, and family tend to be animated and emotionally engaged. Volume goes up, gestures increase, and everyone speaks at once. This is not arguing — it's the normal rhythm of engaged conversation.",
    target: "La manera en que las personas expresan y manejan el desacuerdo es profundamente cultural — y Latinoamérica no es una excepción. Hay diferencias importantes entre países y contextos, pero algunos patrones generales se aplican en toda la región.\n\nEn Argentina, particularmente en Buenos Aires, el debate directo y la discusión apasionada son señales de compromiso y respeto, no de mala educación. Los porteños son famosos por sus opiniones fuertes, su amor por la discusión y su disposición a cuestionar ideas directamente. Una discusión animada en una mesa de cena es una forma de vinculación social. La expresión 'me parece que estás equivocado', dicha con calidez y una sonrisa, no es un insulto — es una invitación a seguir hablando.\n\nEn México y Colombia, el estilo tiende a ser algo más indirecto, especialmente en contextos formales o cuando se habla con alguien mayor o en posición de autoridad. El desacuerdo suele suavizarse con frases como 'entiendo lo que dices, pero...' o 'no estoy del todo de acuerdo'. El respeto a la imagen del otro es importante — puedes disentir, pero lo haces de una manera que respeta a la otra persona.\n\nEn toda la región, 'según yo' se ha convertido en uno de los marcadores más naturales de opinión personal en el habla informal — especialmente en México. Algunos hablantes mayores lo consideran gramaticalmente incorrecto, pero es completamente estándar en la conversación cotidiana entre generaciones más jóvenes.\n\nUna característica universal: la pasión. Las conversaciones en español latinoamericano sobre política, fútbol, comida y familia tienden a ser animadas y emocionalmente comprometidas. El volumen sube, los gestos aumentan y todos hablan al mismo tiempo. Esto no es pelea — es el ritmo normal de una conversación comprometida.",
  },
  cultureVocab: [
    {
      word: "el porteño / la porteña",
      translation: "person from Buenos Aires (literally: 'port person')",
      culturalNote: "Buenos Aires was built around its port. Porteños have a strong cultural identity and are known for their European-influenced lifestyle, psychoanalysis culture, and direct communication style.",
    },
    {
      word: "según yo",
      translation: "in my opinion / I think (LatAm colloquial)",
      culturalNote: "Widely used across Mexico, Colombia and beyond, especially by younger speakers. Some grammarians object to it, but in everyday speech it's completely natural.",
    },
    {
      word: "no estoy del todo de acuerdo",
      translation: "I'm not entirely in agreement",
      culturalNote: "A common softening phrase used to introduce polite disagreement. Adding 'del todo' (entirely) softens the disagreement significantly compared to 'no estoy de acuerdo'.",
    },
    {
      word: "guardar las formas",
      translation: "to maintain appearances / respect social norms",
      culturalNote: "An important concept in many Latin American contexts — disagreeing or declining without causing embarrassment to anyone. Form and manner matter as much as content.",
    },
    {
      word: "la sobremesa",
      translation: "the time spent talking at the table after a meal",
      culturalNote: "A culturally cherished tradition across Latin America and Spain. The conversation after eating — la sobremesa — can last hours and is when the most interesting debates happen.",
    },
  ],
  questions: [
    {
      id: "es-c-a2-3-q1",
      type: "comprehension",
      prompt: {
        native: "How is disagreement typically handled differently in Argentina compared to Mexico or Colombia?",
        target: "¿Cómo se maneja el desacuerdo de manera diferente en Argentina comparado con México o Colombia?",
      },
      options: [
        "Argentina avoids disagreement; Mexico and Colombia debate directly",
        "Argentina debates more directly; Mexico and Colombia tend to soften disagreement",
        "Both styles are identical across all three countries",
        "In Argentina, disagreement is always considered rude",
      ],
      answer: "Argentina debates more directly; Mexico and Colombia tend to soften disagreement",
    },
    {
      id: "es-c-a2-3-q2",
      type: "reflection",
      prompt: {
        native: "In your own culture, how is disagreement handled? Is it more direct or more indirect than what is described here for Latin America?",
        target: "En tu propia cultura, ¿cómo se maneja el desacuerdo? ¿Es más directo o más indirecto que lo descrito aquí para Latinoamérica?",
      },
    },
    {
      id: "es-c-a2-3-q3",
      type: "comparison",
      prompt: {
        native: "The text says that an animated, loud conversation in Latin America is 'not arguing — it's normal rhythm'. Does this match your experience with Spanish-speaking people? How might this style be misread by someone from a different cultural background?",
        target: "El texto dice que una conversación animada y en voz alta en Latinoamérica 'no es pelea — es el ritmo normal'. ¿Esto coincide con tu experiencia con hispanohablantes? ¿Cómo podría alguien de otro contexto cultural malinterpretar este estilo?",
      },
    },
  ],
  didYouKnow: {
    native: "Argentina has the highest number of psychoanalysts per capita in the world — more than any country including the United States. Buenos Aires has been called 'the psychoanalytic capital of the world', with an estimated 46 psychoanalysts per 100,000 inhabitants. This is not unrelated to the Argentine love of self-reflection, conversation, and analysing one's feelings and relationships at length — themes that come up naturally in the kind of passionate, introspective debates that characterise porteño culture.",
    target: "Argentina tiene el mayor número de psicoanalistas per cápita del mundo — más que cualquier otro país, incluidos los Estados Unidos. Buenos Aires ha sido llamada 'la capital mundial del psicoanálisis', con un estimado de 46 psicoanalistas por cada 100.000 habitantes. Esto no es ajeno al amor argentino por la autorreflexión, la conversación y el análisis extenso de los propios sentimientos y relaciones — temas que surgen naturalmente en el tipo de debates apasionados e introspectivos que caracterizan la cultura porteña.",
  },
}
