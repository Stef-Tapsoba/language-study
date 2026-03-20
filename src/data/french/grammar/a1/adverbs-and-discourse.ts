import { GrammarLesson } from "../../../../types"

export const adverbsAndDiscourseLessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-27",
        level: "A1",
        title: "Adverbs of Place & Time",
        explanation: `Adverbs of place and time are single words that answer WHERE and WHEN. They do not change form (no agreement).

PLACE — where?
  **ici**        here             Je suis ici.
  **là**         there            Il est là.
  **là-bas**     over there       La gare est là-bas.
  **partout**    everywhere       Il y a des touristes partout.
  **quelque part** somewhere      Je l'ai vu quelque part.
  **nulle part** nowhere          Je ne vais nulle part.
  **en haut**    upstairs / up    La chambre est en haut.
  **en bas**     downstairs / down L'entrée est en bas.

TIME — when?
  **aujourd'hui** today           Aujourd'hui il fait beau.
  **demain**      tomorrow        On se voit demain.
  **hier**        yesterday       Il est parti hier.
  **maintenant**  now             Je suis occupé maintenant.
  **bientôt**     soon            À bientôt!
  **déjà**        already         Tu as déjà mangé?
  **encore**      still / again   Il dort encore.
  **tôt**         early           Je me lève tôt.
  **tard**        late            Il rentre tard.`,
        examples: [
            { native: "La banque est là-bas.", translation: "The bank is over there." },
            { native: "Aujourd'hui je travaille à la maison.", translation: "Today I'm working from home." },
            { native: "Tu as déjà vu ce film?", translation: "Have you already seen this film?" },
            { native: "Il est encore au bureau.", translation: "He is still at the office." },
            { native: "On mange ici ou là-bas?", translation: "Are we eating here or over there?", speakText: "On mange ici ou là-bas?" },
        ]
    },
    {
        id: "fr-g-a1-28",
        level: "A1",
        title: "Frequency Adverbs",
        explanation: `Frequency adverbs answer the question 'How often?'. They are placed **after the conjugated verb** in French — not before it as in English.

  **toujours**       always          Je prends toujours un café le matin.
  **souvent**        often           Elle sort souvent le soir.
  **parfois**        sometimes       Il pleut parfois en été.
  **quelquefois**    sometimes       (less common than parfois)
  **de temps en temps** from time to time  De temps en temps, je lis.
  **rarement**       rarely          Je mange rarement de la viande.
  **jamais**         never           Il ne mange jamais de poisson.

POSITION — after the main verb:
  Je mange ✓ toujours ✓ le petit-déjeuner.  (NOT: Toujours je mange...)
  Elle est souvent fatiguée.

JAMAIS always needs ne before the verb (ne...jamais):
  Je ne bois jamais d'alcool.     (I never drink alcohol.)
  Elle n'est jamais en retard.    (She is never late.)`,
        examples: [
            { native: "Je prends toujours un café le matin.", translation: "I always have a coffee in the morning." },
            { native: "Nous allons souvent au marché.", translation: "We often go to the market." },
            { native: "Il mange parfois au restaurant.", translation: "He sometimes eats at a restaurant." },
            { native: "Je ne regarde jamais la télévision.", translation: "I never watch television." },
            { native: "Elle vient rarement ici.", translation: "She rarely comes here." },
        ]
    },
    {
        id: "fr-g-a1-29",
        level: "A1",
        title: "Basic Connectors",
        explanation: `Connectors link ideas together. Learning these allows you to build longer, more natural sentences instead of short disconnected ones.

COORDINATING CONNECTORS (join two equal clauses):
  **et**          and             J'aime le café et le thé.
  **ou**          or              Tu veux du café ou du thé?
  **mais**        but             Je veux venir mais je suis fatigué.
  **donc**        so / therefore  Il pleut donc je reste.
  **car**         because (formal) Je reste car il pleut.
  **alors**       so / then       Il était fatigué, alors il a dormi.

SUBORDINATING CONNECTORS (introduce a clause):
  **parce que**   because         Je mange parce que j'ai faim.
  **parce qu'**   because (before vowel) Je pars parce qu'il est tard.
  **quand**       when            J'appelle quand j'arrive.
  **si**          if              Si tu veux, on peut partir.
  **que**         that            Je pense que c'est vrai.

SEQUENCE:
  **d'abord**     first           D'abord, je me lève.
  **ensuite**     then / next     Ensuite, je mange.
  **enfin**       finally / at last  Enfin, je pars.
  **puis**        then            Je prends un café, puis je travaille.`,
        examples: [
            { native: "J'aime le café mais je préfère le thé.", translation: "I like coffee but I prefer tea." },
            { native: "Je reste à la maison parce qu'il pleut.", translation: "I stay at home because it's raining." },
            { native: "Si tu veux, on peut aller au cinéma.", translation: "If you want, we can go to the cinema." },
            { native: "D'abord je mange, ensuite je travaille.", translation: "First I eat, then I work.", speakText: "D'abord je mange, ensuite je travaille." },
            { native: "Il est tard, donc je dois partir.", translation: "It's late, so I have to leave." },
        ]
    },
    {
        id: "fr-g-a1-30",
        level: "A1",
        title: "Weather Expressions",
        explanation: `French weather uses impersonal constructions — always with the subject **il** (it), which doesn't refer to a person.

WITH IL FAIT (it is / it makes):
  **il fait beau**      nice weather         Il fait beau aujourd'hui.
  **il fait mauvais**   bad weather          Il fait mauvais ce matin.
  **il fait chaud**     it's hot             Il fait très chaud en juillet.
  **il fait froid**     it's cold            Il fait froid en hiver.
  **il fait du soleil** it's sunny           Il fait du soleil.
  **il fait du vent**   it's windy           Il fait du vent en automne.
  **il fait ... degrés** it's ... degrees    Il fait 25 degrés.

WITH IL Y A (there is / there are):
  **il y a des nuages**    it's cloudy / there are clouds
  **il y a du brouillard** it's foggy
  **il y a de l'orage**    there's a storm

VERB EXPRESSIONS (these are full verbs):
  **il pleut**      it's raining     (pleuvoir — irregular)
  **il neige**      it's snowing     (neiger)
  **il gèle**       it's freezing    (geler)

SEASONS — always with en (except printemps):
  **en hiver** (in winter) · **au printemps** (in spring) · **en été** (in summer) · **en automne** (in autumn)`,
        examples: [
            { native: "Il fait beau et chaud aujourd'hui.", translation: "The weather is nice and warm today." },
            { native: "Il pleut beaucoup en automne.", translation: "It rains a lot in autumn." },
            { native: "Il neige en hiver dans les montagnes.", translation: "It snows in winter in the mountains." },
            { native: "Il fait froid ce matin — il gèle!", translation: "It's cold this morning — it's freezing!" },
            { native: "Quel temps fait-il?", translation: "What's the weather like? (the standard question)" },
        ]
    },
]
