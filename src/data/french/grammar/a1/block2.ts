import { GrammarLesson } from "../../../../types"

export const block2Lessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-4",
        level: "A1",
        title: "Possessives — mon, ma, mes / ton, ta, tes / son, sa, ses",
        explanation: `To describe your family, you need words like 'my', 'your', and 'his/her'. In French, these are called possessive adjectives, and they work differently from English.

THE KEY RULE: The form follows the gender of the **noun being described** — not the gender of the person speaking.

This means a woman says **mon père** (not *ma père*) because *père* is masculine. A man says **ma mère** (not *mon mère*) because *mère* is feminine. The noun decides the form, not the speaker.

MY / YOUR (informal) / HIS OR HER:
  |               | Masculine noun | Feminine noun | Plural noun |
  | my            | mon            | ma            | mes         |
  | your (tu)     | ton            | ta            | tes         |
  | his / her     | son            | sa            | ses         |

Examples:
  mon père (masculine) — my father
  ma mère (feminine) — my mother
  mes parents (plural) — my parents
  son frère (masculine) — his/her brother
  sa sœur (feminine) — his/her sister
  ses enfants (plural) — his/her children

BEFORE A VOWEL: When the noun begins with a vowel or silent h, **ma/ta/sa** become **mon/ton/son** to avoid the awkward vowel clash:
  mon amie (not *ma amie*) — my friend (female)
  ton école (not *ta école*) — your school
  son appartement (not *sa appartement*) — his/her flat

This is a sound rule, not a gender rule — the noun amie is feminine, but you still say mon.

Note: **son/sa/ses** can mean either 'his' or 'her' — French doesn't distinguish between them. Context makes it clear:
  Sa sœur s'appelle Claire. — His/Her sister is called Claire. (context tells you which)`,
        examples: [
            { native: "Mon frère s'appelle Luc.", translation: "My brother's name is Luc." },
            { native: "Ma sœur a vingt ans.", translation: "My sister is twenty." },
            { native: "Mes parents habitent à Lyon.", translation: "My parents live in Lyon." },
            { native: "Son père est médecin.", translation: "His/Her father is a doctor." },
            { native: "Ta mère est de Paris ?", translation: "Is your mother from Paris?" },
            { native: "Mon amie s'appelle Sophie.", translation: "My friend (female) is called Sophie." },
        ],
        inlineVocab: [
            { word: "mon / ma / mes", translation: "my (masc. / fem. / plural)" },
            { word: "ton / ta / tes", translation: "your (informal) (masc. / fem. / plural)" },
            { word: "son / sa / ses", translation: "his / her (masc. / fem. / plural)" },
            { word: "le frère", translation: "the brother" },
            { word: "la sœur", translation: "the sister" },
            { word: "les parents", translation: "the parents" },
            { word: "la famille", translation: "the family" },
            { word: "un ami / une amie", translation: "a friend (male / female)" },
            { word: "s'appelle", translation: "is called (from s'appeler)" },
        ],
    },
    {
        id: "fr-g-a1-5",
        level: "A1",
        title: "Adjective agreement — the pattern you've been noticing",
        explanation: `Since Unit 2, you've been seeing something. Look at these pairs you've already encountered:

  Il est français.      Elle est française.
  Il est étudiant.      Elle est étudiante.
  Il est grand.         Elle est grande.
  Il est intelligent.   Elle est intelligente.
  Il est sportif.       Elle est sportive.
  Il est vieux.         Elle est vieille.

Something consistently changes when describing a woman. And when there's more than one person, it changes again:
  Il est grand. → Ils sont grands.
  Elle est grande. → Elles sont grandes.

This is **adjective agreement**. In French, adjectives change their ending to match the gender and number of the noun or person they describe.

THE BASIC RULES:
  Masculine singular:  grand
  Feminine singular:   grande   (add -e)
  Masculine plural:    grands   (add -s)
  Feminine plural:     grandes  (add -es)

When the masculine form already ends in -e (like **sympa**, **drôle**, **timide**), it stays the same in the feminine.

COMMON IRREGULAR PATTERNS:
  | Masculine  | Feminine   | Pattern        |
  | sportif    | sportive   | -f → -ve       |
  | actif      | active     | -f → -ve       |
  | sérieux    | sérieuse   | -x → -se       |
  | vieux      | vieille    | irregular      |
  | beau       | belle      | irregular      |
  | nouveau    | nouvelle   | irregular      |
  | gentil     | gentille   | -l → -lle      |

ADJECTIVE POSITION: In French, most adjectives come **after** the noun — the opposite of English:
  une femme intelligente (not *une intelligente femme*)
  un homme sérieux

BUT a small group of very common adjectives come **before** the noun:
  grand, petit, beau, vieux, nouveau, bon, mauvais
  un grand hôtel — un petit appartement — une belle ville

When spoken, masculine and feminine forms often sound the same (grand/grande sounds identical in fast speech). The agreement shows most clearly in writing — which is why spelling matters.`,
        examples: [
            { native: "Ma sœur est grande et sportive.", translation: "My sister is tall and sporty." },
            { native: "Mon frère est petit et intelligent.", translation: "My brother is short and intelligent." },
            { native: "Mes parents sont sympas.", translation: "My parents are nice." },
            { native: "C'est une belle ville.", translation: "It's a beautiful city." },
            { native: "Il est très travailleur.", translation: "He is very hardworking." },
            { native: "Elle est travailleuse aussi.", translation: "She is hardworking too." },
        ],
        inlineVocab: [
            { word: "grand(e)", translation: "tall / big (adds -e for feminine)" },
            { word: "petit(e)", translation: "short / small (adds -e for feminine)" },
            { word: "sportif / sportive", translation: "sporty (-f → -ve)" },
            { word: "vieux / vieille", translation: "old (irregular)" },
            { word: "beau / belle", translation: "beautiful / handsome (irregular)" },
            { word: "nouveau / nouvelle", translation: "new (irregular)" },
            { word: "sympa", translation: "nice / friendly (invariable)" },
            { word: "gentil / gentille", translation: "kind (-l → -lle)" },
            { word: "intelligent(e)", translation: "intelligent (adds -e for feminine)" },
        ],
    },
    {
        id: "fr-g-a1-6",
        level: "A1",
        title: "Negation — ne...pas",
        explanation: `You've been using *je n'aime pas* already. Let's look at what's actually happening.

Compare these pairs:
  J'aime le café.       → Je **n'**aime **pas** le café.
  Je travaille ici.     → Je **ne** travaille **pas** ici.
  Il est français.      → Il **n'**est **pas** français.
  Elle a une voiture.   → Elle **n'**a **pas** de voiture.

French negation uses **two parts** that wrap around the verb:
  je + [**ne**] + verb + [**pas**]

BEFORE A VOWEL: *ne* becomes *n'* (elision — remove the e, add an apostrophe):
  Je **n'**aime pas, Je **n'**habite pas, Il **n'**est pas

ARTICLE CHANGE IN NEGATION: After *ne...pas*, **un/une/des** becomes **de** (or **d'** before a vowel):
  J'ai **une** voiture.   → Je n'ai **pas de** voiture.
  Il a **des** frères.    → Il n'a **pas de** frères.
  BUT: **le/la/les** stays the same — negation doesn't change definite articles:
  J'aime **le** café.     → Je n'aime **pas le** café. ✓

BONUS PATTERNS — once you have ne...pas, two more are easy:
  **ne...jamais** — never:   Je ne mange **jamais** de viande. (I never eat meat.)
  **ne...plus**  — no longer: Il ne travaille **plus** ici. (He no longer works here.)
  Same structure — just swap *pas* for *jamais* or *plus*.

IN SPOKEN FRENCH: The *ne* is often dropped in casual speech:
  *J'aime pas ça.* — I don't like that. (informal spoken)
You will hear this constantly. Understand it when you hear it, but keep the full *ne...pas* in writing and formal speech.

The pattern feels mechanical at first, but after a few weeks of exposure it becomes second nature. The key is always: ne before the verb, pas (or jamais/plus) after it.`,
        examples: [
            { native: "Je ne comprends pas.", translation: "I don't understand." },
            { native: "Il ne parle pas anglais.", translation: "He doesn't speak English." },
            { native: "Je n'ai pas de voiture.", translation: "I don't have a car." },
            { native: "Elle n'est pas française.", translation: "She's not French." },
            { native: "Je ne mange jamais de viande.", translation: "I never eat meat." },
            { native: "Il ne travaille plus ici.", translation: "He no longer works here." },
        ],
        inlineVocab: [
            { word: "ne...pas", translation: "not (standard negation, wraps around verb)" },
            { word: "ne...jamais", translation: "never" },
            { word: "ne...plus", translation: "no longer / not anymore" },
            { word: "n'", translation: "ne before a vowel (elision)" },
            { word: "pas de / d'", translation: "no / not any (replaces un/une/des after negation)" },
            { word: "comprendre", translation: "to understand" },
            { word: "parler", translation: "to speak" },
            { word: "manger", translation: "to eat" },
        ],
    },
    {
        id: "fr-g-a1-7",
        level: "A1",
        title: "Aller + destinations — going places",
        explanation: `The verb **aller** (to go) is one of the most useful in French. Despite ending in -er, it is completely irregular — it doesn't follow the -er verb pattern you already know. Memorise these forms directly:

ALLER — TO GO
  je        → **vais**     Je vais au marché.
  tu        → **vas**      Tu vas où ?
  il / elle / on → **va**  Il va au travail.
  nous      → **allons**   Nous allons à la plage.
  vous      → **allez**    Vous allez où ?
  ils / elles  → **vont**  Ils vont en ville.

PREPOSITIONS WITH DESTINATIONS — one rule, all places:
  **à** + city:             à Paris, à Rome, à Tokyo
  **en** + feminine country (most ending in -e):  en France, en Espagne, en Italie
  **au** + masculine country:  au Canada, au Japon, au Brésil
  **aux** + plural country:    aux États-Unis, aux Pays-Bas

**au** and **aux** are contractions: *à + le = au*, *à + les = aux*. French never says *à le* — it always contracts.

How to know if a country is feminine: most ending in -e are feminine (la France, l'Espagne, l'Italie, l'Allemagne, la Chine). Key exceptions: le Mexique, le Cambodge.

ORIGIN — use **de/d'/du/des** for "from":
  Je viens **de** Paris.       Je viens **de** France.
  Je viens **du** Canada.      Je viens **des** États-Unis.

FUTUR PROCHE — aller + infinitive means 'going to do something':
  Je **vais manger** ce soir.    →  I'm going to eat tonight.
  On **va regarder** un film.    →  We're going to watch a film.
  Elle **va partir** demain.     →  She's going to leave tomorrow.

This is one of the most natural ways to talk about near-future plans in French — and you now have everything you need to use it. Just take the right aller form and add any infinitive.`,
        examples: [
            { native: "Je vais au marché.", translation: "I'm going to the market." },
            { native: "Elle va en France la semaine prochaine.", translation: "She's going to France next week." },
            { native: "Nous allons au Japon en été.", translation: "We're going to Japan in summer." },
            { native: "Tu vas aux États-Unis ?", translation: "Are you going to the United States?" },
            { native: "Je vais manger au restaurant ce soir.", translation: "I'm going to eat at a restaurant tonight." },
            { native: "On va regarder un film — tu viens ?", translation: "We're going to watch a film — are you coming?" },
        ],
        inlineVocab: [
            { word: "aller", translation: "to go (irregular -er verb)" },
            { word: "vais / vas / va", translation: "go / goes (je / tu / il/elle forms of aller)" },
            { word: "allons / allez / vont", translation: "go (nous / vous / ils/elles forms of aller)" },
            { word: "à", translation: "to / in (used with cities)" },
            { word: "en", translation: "to / in (used with feminine countries)" },
            { word: "au", translation: "to / in (à + le, used with masculine countries)" },
            { word: "aux", translation: "to / in (à + les, used with plural countries)" },
            { word: "venir de", translation: "to come from" },
            { word: "futur proche", translation: "near future (aller + infinitive)" },
        ],
    },
    {
        id: "fr-g-a1-8",
        level: "A1",
        title: "Articles — the full picture",
        explanation: `For nine units, you've been seeing these words everywhere:
  **un** café, **une** boulangerie, **un** appartement, **une** maison
  **le** matin, **la** famille, **l'**université, **les** enfants

You've been using them correctly without thinking about it. Now let's look at what's actually happening.

There are two main types of article, and the difference is about **what you're referring to**:

INDEFINITE ARTICLES — un / une / des (a / an / some):
Used for something not yet specified, one of many, or first mention.
  | Masculine | Feminine | Plural |
  | un        | une      | des    |
  un café — a coffee (any coffee)
  une maison — a house (not a specific one)
  des enfants — (some) children

DEFINITE ARTICLES — le / la / l' / les (the):
Used for something specific, already known, or — this is the key insight — **general statements**.
  | Masculine | Feminine | Before vowel | Plural |
  | le        | la       | l'           | les    |
  le café — the café (a specific one we both know)
  la famille — the family (this family, or family as a concept)
  l'université — the university (vowel triggers l')
  les enfants — the children (specific group)

THE MOST IMPORTANT RULE FOR ENGLISH SPEAKERS:
In French, **general statements use le/la/les** where English uses no article at all:
  J'aime **le** chocolat.      →  I like chocolate. (not: I like the chocolate)
  **Les** chats sont indépendants. →  Cats are independent. (not: The cats)
  **La** famille est importante.   →  Family is important.

This is the most common article error English speakers make. When you're speaking in general, use le/la/les.

THE l' RULE: Before any word starting with a vowel or silent h, le/la becomes l':
  l'appartement, l'université, l'hôtel, l'homme

CONTRACTIONS (reminder from Unit 8):
  à + le = **au**    |    de + le = **du**
  à + les = **aux**  |    de + les = **des**

AFTER NEGATION: un/une/des → **de/d'**:
  J'ai un frère.     → Je n'ai **pas de** frère.
  BUT: le/la/les stays: J'aime le café → Je n'aime **pas le** café.

PARTITIVE ARTICLES (a preview for Unit 15):
For uncountable things — food, liquids, abstract concepts — French uses du/de la/de l':
  Je mange **du** pain. — I eat (some) bread.
  Je bois **de la** soupe. — I drink (some) soup.
Full lesson on these comes when you learn to order food. For now, just notice them when they appear.

THE GOLDEN RULE: Every French noun has a gender — masculine or feminine. Learn every new noun with its article. Don't just learn *table* — learn **la table**. Don't just learn *livre* — learn **le livre**. Build this habit now and you'll save yourself enormous effort later.`,
        examples: [
            { native: "J'ai un appartement à Paris.", translation: "I have a flat in Paris. (first mention, one of many)" },
            { native: "L'appartement est au troisième étage.", translation: "The flat is on the third floor. (now specified)" },
            { native: "J'aime la musique.", translation: "I like music. (general — le/la/les for general statements)" },
            { native: "Les chats sont indépendants.", translation: "Cats are independent. (general statement)" },
            { native: "Il n'y a pas de jardin.", translation: "There is no garden. (un/une/des → de after negation)" },
            { native: "Je mange du pain le matin.", translation: "I eat (some) bread in the morning. (partitive preview)" },
        ],
        inlineVocab: [
            { word: "un / une / des", translation: "a / an / some (indefinite articles)" },
            { word: "le / la / l' / les", translation: "the (definite articles)" },
            { word: "l'", translation: "the (before vowel or silent h)" },
            { word: "au / aux", translation: "to the / at the (à + le / à + les)" },
            { word: "du / des", translation: "of the / some (de + le / de + les)" },
            { word: "du / de la / de l'", translation: "some (partitive — for uncountable nouns)" },
            { word: "pas de / d'", translation: "no / not any (replaces articles after negation)" },
            { word: "il y a", translation: "there is / there are (never changes form)" },
            { word: "un genre", translation: "a gender (grammatical — masculine or feminine)" },
        ],
    },
]
