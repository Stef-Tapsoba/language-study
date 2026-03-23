import { GrammarLesson } from "../../../../types"

export const articlesAndAgreementLessons: GrammarLesson[] = [
    {
        id: "fr-g-a1-3",
        level: "A1",
        title: "Definite Articles: le, la, l', les",
        explanation: `Definite articles (= 'the') agree with the gender and number of the noun.

SINGULAR
  le  — masculine before consonant:             le livre, le café, le père
  la  — feminine before consonant:              la maison, la rue, la mère
  l'  — masc. or fem. before vowel or silent h: l'ami, l'école, l'hôtel

PLURAL
  les — all genders:  les livres, les maisons, les amis

The silent h: words starting with h always take l' (not le/la) — the h is never pronounced:
  l'homme, l'heure, l'hôpital`,
        examples: [
            { native: "le livre", translation: "the book (masculine)" },
            { native: "la maison", translation: "the house (feminine)" },
            { native: "l'ami / l'amie", speakText: "l'ami, l'amie", translation: "the friend (vowel → l')" },
            { native: "les enfants", translation: "the children (plural)" },
            { native: "l'hôtel", translation: "the hotel (silent h → l')" },
        ],
        inlineVocab: [
            { word: "livre", translation: "book" },
            { word: "café", translation: "café / coffee" },
            { word: "père", translation: "father" },
            { word: "maison", translation: "house / home" },
            { word: "rue", translation: "street" },
            { word: "mère", translation: "mother" },
            { word: "ami", translation: "friend (masculine)" },
            { word: "hôpital", translation: "hospital" },
            { word: "homme", translation: "man" },
            { word: "heure", translation: "hour / time" },
            { word: "enfants", translation: "children" },
        ]
    },
    {
        id: "fr-g-a1-4",
        level: "A1",
        title: "Indefinite Articles: un, une, des",
        explanation: `Indefinite articles (= 'a', 'an', 'some') agree with gender and number.

SINGULAR
  un  — masculine: un café, un livre, un ami
  une — feminine:  une pomme, une maison, une amie

PLURAL
  des — all genders: des amis, des maisons (= some friends, some houses)

After negation, un/une/des → de (or d' before a vowel):
  J'ai une voiture.   → Je n'ai pas de voiture.   (I don't have a car.)
  Il a des amis.      → Il n'a pas d'amis.         (He has no friends.)`,
        examples: [
            { native: "un café", translation: "a coffee (masculine)" },
            { native: "une pomme", translation: "an apple (feminine)" },
            { native: "des amis", translation: "some friends (plural)" },
            { native: "Je n'ai pas de voiture.", translation: "I don't have a car. (de after negation)" },
        ],
        inlineVocab: [
            { word: "pomme", translation: "apple" },
            { word: "voiture", translation: "car" },
            { word: "amis", translation: "friends" },
        ]
    },
    {
        id: "fr-g-a1-14",
        level: "A1",
        title: "Contractions: au, du, aux, des",
        explanation: `WHAT À AND DE MEAN
Before learning contractions, you need to know why à and de are used.

  à  — to / at / in   (direction or location)
    Je vais à Paris.         = I'm going to Paris.
    Je suis à la maison.     = I'm at home.
    Je travaille à Paris.    = I work in Paris.

  de — of / from   (possession, origin, content)
    le livre de Marie        = Marie's book (= the book OF Marie)
    le livre du professeur   = the teacher's book (= the book OF the teacher)
    Je viens de Lyon.        = I come from Lyon.
    un verre de vin          = a glass of wine

So 'le livre du professeur' uses 'de' because it expresses possession — who the book belongs to.
And 'je vais au marché' uses 'à' because it expresses direction — where you're going.

CONTRACTIONS — when à or de meet le or les, they MUST contract:

  à  + le  → au    Je vais au marché.          (to the market)
  à  + les → aux   Elle parle aux étudiants.   (to the students)
  de + le  → du    Le livre du professeur.     (of the teacher)
  de + les → des   Il vient des États-Unis.    (from the United States)

NO contraction with la and l':
  à  + la  → à la    (unchanged)   Je vais à la boulangerie.
  à  + l'  → à l'    (unchanged)   Je vais à l'école.
  de + la  → de la   (unchanged)   Il vient de la campagne.
  de + l'  → de l'   (unchanged)   Elle revient de l'école.`,
        examples: [
            { native: "Je vais au marché.", translation: "I'm going to the market. (à + le = au)" },
            { native: "Elle parle aux étudiants.", translation: "She is speaking to the students. (à + les = aux)" },
            { native: "C'est le livre du professeur.", translation: "It's the teacher's book. (de + le = du)" },
            { native: "Il vient des États-Unis.", translation: "He comes from the United States. (de + les = des)" },
            { native: "Je vais à la boulangerie.", translation: "I'm going to the bakery. (à + la — no contraction)" },
            { native: "Elle revient de l'école.", translation: "She's coming back from school. (de + l' — no contraction)" },
        ],
        inlineVocab: [
            { word: "marché", translation: "market" },
            { word: "étudiants", translation: "students" },
            { word: "professeur", translation: "teacher / professor" },
            { word: "boulangerie", translation: "bakery" },
            { word: "campagne", translation: "countryside" },
            { word: "vin", translation: "wine" },
        ]
    },
    {
        id: "fr-g-a1-11",
        level: "A1",
        title: "Adjective Agreement",
        explanation: `French adjectives agree with their noun in gender (masc./fem.) and number (sing./pl.).

REGULAR PATTERN — adjectives ending in consonant:
  Masc. singular:   grand     →  un grand homme
  Fem. singular:    grande    →  une grande femme         (+e)
  Masc. plural:     grands    →  de grands enfants        (+s)
  Fem. plural:      grandes   →  de grandes femmes        (+es)

Adjectives already ending in -e: same form for masc. and fem.:
  un livre facile / une idée facile
  un homme sympathique / une femme sympathique

IRREGULAR ADJECTIVES (must memorise):
  beau    → belle    | beaux / belles
  nouveau → nouvelle | nouveaux / nouvelles
  vieux   → vieille  | vieux / vieilles

POSITION — adjectives usually come AFTER the noun:
  un livre intéressant, une maison blanche, un film français

These common adjectives come BEFORE the noun:
  beau, grand, petit, bon, mauvais, jeune, vieux, nouveau
  un beau jardin, une petite maison, un bon repas`,
        examples: [
            { native: "un grand homme", translation: "a tall man (masc. singular)" },
            { native: "une grande femme", translation: "a tall woman (fem. singular → +e)" },
            { native: "de grands enfants", translation: "tall children (masc. plural → +s)" },
            { native: "une belle maison", translation: "a beautiful house (irregular: beau → belle)" },
            { native: "un livre intéressant", translation: "an interesting book" },
            { native: "une idée intéressante", translation: "an interesting idea (+ e)" },
        ],
        inlineVocab: [
            { word: "grand", translation: "tall / big" },
            { word: "homme", translation: "man" },
            { word: "femme", translation: "woman / wife" },
            { word: "enfants", translation: "children" },
            { word: "maison", translation: "house / home" },
            { word: "beau", translation: "beautiful / handsome" },
            { word: "belle", translation: "beautiful (feminine)" },
            { word: "jardin", translation: "garden" },
            { word: "petit", translation: "small / little" },
            { word: "bon", translation: "good" },
            { word: "repas", translation: "meal" },
            { word: "intéressant", translation: "interesting" },
            { word: "idée", translation: "idea" },
            { word: "blanche", translation: "white (feminine)" },
        ]
    },
    {
        id: "fr-g-a1-21",
        level: "A1",
        title: "Possessive Adjectives",
        explanation: `Possessive adjectives agree with the NOUN they describe — not with the owner.

           MASC. SG.   FEM. SG.   PLURAL (all genders)
  my:      mon         ma         mes
  your:    ton         ta         tes    (informal — tu)
  his/her: son         sa         ses
  our:     notre       notre      nos
  your:    votre       votre      vos    (formal/plural — vous)
  their:   leur        leur       leurs

VOWEL RULE: mon/ton/son are used before feminine nouns starting with a vowel or silent h — to avoid two vowel sounds clashing:
  mon amie (not ma amie)   |   ton école   |   son histoire

Note: son/sa/ses means both 'his' and 'her' — context makes it clear:
  Il aime sa mère.   = He loves his mother.
  Elle aime sa mère. = She loves her mother.`,
        examples: [
            { native: "mon frère, ma sœur, mes parents", translation: "my brother, my sister, my parents" },
            { native: "son père et sa mère", translation: "his/her father and his/her mother" },
            { native: "notre famille, nos enfants", translation: "our family, our children" },
            { native: "mon amie Sophie", translation: "my friend Sophie (mon — not ma — before vowel)" },
            { native: "Leur maison est grande.", translation: "Their house is big." },
        ],
        inlineVocab: [
            { word: "frère", translation: "brother" },
            { word: "sœur", translation: "sister" },
            { word: "parents", translation: "parents" },
            { word: "père", translation: "father" },
            { word: "mère", translation: "mother" },
            { word: "famille", translation: "family" },
            { word: "enfants", translation: "children" },
            { word: "amie", translation: "friend (feminine)" },
            { word: "maison", translation: "house / home" },
            { word: "grande", translation: "big / tall (feminine)" },
        ]
    },
    {
        id: "fr-g-a1-26",
        level: "A1",
        title: "Demonstratives: ce, cet, cette, ces",
        explanation: `Demonstrative adjectives mean 'this', 'that', 'these', or 'those'. In French, they agree with the gender and number of the noun they modify.

FORMS:
  **ce**    — masculine singular before consonant:      ce livre, ce café
  **cet**   — masculine singular before vowel/silent h: cet homme, cet hôtel
  **cette** — feminine singular:                        cette maison, cette idée
  **ces**   — all plurals:                              ces livres, ces maisons

French does not always distinguish 'this' from 'that'. To be specific, add -ci (here) or -là (there) after the noun:
  ce livre-**ci**  → this book (near you)
  ce livre-**là**  → that book (over there)

DEMONSTRATIVE PRONOUNS
To replace a noun entirely (this one / that one):
  **ceci** — this (thing)      Regarde ceci.      (Look at this.)
  **cela** / **ça** — that    Je veux ça.        (I want that.)
  In spoken French, ça is far more common than cela.`,
        examples: [
            { native: "Ce café est excellent.", translation: "This coffee is excellent." },
            { native: "Cet hôtel est très cher.", translation: "This hotel is very expensive." },
            { native: "Cette robe est magnifique.", translation: "This dress is magnificent." },
            { native: "Ces chaussures sont confortables.", translation: "These shoes are comfortable." },
            { native: "Je préfère ce livre-ci.", translation: "I prefer this book (here). (-ci for emphasis)" },
            { native: "C'est ça!", translation: "That's it! / Exactly! (very common spoken French)" },
        ],
        inlineVocab: [
            { word: "café", translation: "coffee / café" },
            { word: "hôtel", translation: "hotel" },
            { word: "robe", translation: "dress" },
            { word: "magnifique", translation: "magnificent / stunning" },
            { word: "chaussures", translation: "shoes" },
            { word: "confortables", translation: "comfortable" },
            { word: "excellent", translation: "excellent" },
            { word: "cher", translation: "expensive / dear" },
        ]
    },
    {
        id: "fr-g-a1-31",
        level: "A1",
        title: "Partitive Articles: du, de la, de l', des",
        explanation: `Partitive articles express an unspecified quantity — the English equivalent is 'some', or simply no article at all. Use them when you want part of something rather than a specific, countable unit.

FORMS — same as the contractions you know from lesson 14, but used differently:

  du   — masculine singular:              du pain, du café, du fromage
  de la — feminine singular:              de la viande, de la limonade, de la chance
  de l' — masc. or fem. before vowel:    de l'eau, de l'huile, de l'argent
  des   — all plurals:                    des légumes, des œufs, des amis

PARTITIVE vs CONTRACTION — same form, different meaning
You already know du and des as contractions of de + le / de + les (lesson 14).
The form is identical — the meaning depends on context:

  Contraction:  Le livre du professeur.   = The teacher's book.   (de = of/possession)
  Partitive:    Je mange du pain.          = I eat some bread.    (du = unspecified quantity)

The easiest test: can you replace it with 'some'? If yes, it's a partitive.

AFTER NEGATION — all partitive forms become de (or d' before a vowel):
  Je veux du café.          → Je ne veux pas de café.
  Elle mange de la viande.  → Elle ne mange pas de viande.
  Il boit de l'eau.         → Il ne boit pas d'eau.
  Tu as des amis.           → Tu n'as pas d'amis.

DEFINITE vs INDEFINITE vs PARTITIVE — quick comparison:
  le café    → coffee in general / coffee as a concept   (Je n'aime pas le café.)
  un café    → one coffee, a specific coffee             (Je veux un café.)
  du café    → some coffee, an unspecified amount        (Je bois du café.)`,
        examples: [
            { native: "Je veux du pain.", translation: "I want some bread. (du — masc. sg.)" },
            { native: "Elle boit de la limonade.", translation: "She drinks some lemonade. (de la — fem. sg.)" },
            { native: "Tu veux de l'eau?", translation: "Do you want some water? (de l' — before vowel)" },
            { native: "Je mange des légumes.", translation: "I eat some vegetables. (des — plural)" },
            { native: "Je ne bois pas de café.", translation: "I don't drink coffee. (de after negation)" },
            { native: "J'aime le café. / Je bois du café.", translation: "I like coffee (in general). / I drink some coffee (quantity).", speakText: "J'aime le café. Je bois du café." },
        ],
        inlineVocab: [
            { word: "pain", translation: "bread" },
            { word: "fromage", translation: "cheese" },
            { word: "viande", translation: "meat" },
            { word: "limonade", translation: "lemonade" },
            { word: "eau", translation: "water" },
            { word: "huile", translation: "oil" },
            { word: "argent", translation: "money / silver" },
            { word: "légumes", translation: "vegetables" },
            { word: "œufs", translation: "eggs" },
            { word: "lait", translation: "milk" },
        ]
    },
]
