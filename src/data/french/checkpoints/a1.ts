import type { Checkpoint } from '../../../types'

export const a1Checkpoints: Checkpoint[] = [
  // ── fr-cp-a1-1 : Block 1 — Introduce yourself (after U4) ─────────────────
  {
    id: 'fr-cp-a1-1',
    level: 'A1',
    block: 1,
    type: 'speaking',
    title: 'Introduce yourself',
    scenario:
      "You've just arrived at a language exchange evening in Paris. You sit down next to someone you've never met. They smile and say \"Bonsoir !\"\n\nIntroduce yourself. Tell them your name, where you're from, your age, and what you do (job or studies). Then ask them at least one question back.",
    speakingPrompts: [
      "Use a greeting (Bonsoir ! / Bonjour !)",
      "Say your name (Je m'appelle...)",
      "Say where you're from (Je suis de... / Je viens de...)",
      "Say your nationality (Je suis [nationalité].)",
      "Say your age (J'ai ... ans.)",
      "Say your job or studies (Je suis... / J'étudie... / Je travaille...)",
      "Ask a question back (Et toi ? / Tu fais quoi ? / Tu as quel âge ?)",
      "Use a farewell or polite filler (Enchanté(e) ! / C'est intéressant !)",
    ],
  },

  // ── fr-cp-a1-2 : Block 2 — Talk about your world (after U9) ──────────────
  {
    id: 'fr-cp-a1-2',
    level: 'A1',
    block: 2,
    type: 'speaking',
    title: 'Talk about your world',
    scenario:
      "You're on a video call with a French pen pal you've just been matched with. You've already introduced yourself (Checkpoint 1). Now they want to know more about you and your life.\n\nTell them about: your family (who's in it, a brief description of one or two people), something you like and something you don't like, and where you live and what it's like.",
    speakingPrompts: [
      "Describe your family (J'ai un frère et une sœur. Mon frère a trente ans...)",
      "Use possessives correctly (Mon père, ma mère, mes parents...)",
      "Use at least one adjective with correct agreement (Ma sœur est grande et sportive.)",
      "Express a like or preference (J'adore le cinéma. Je préfère l'été.)",
      "Express a dislike using ne...pas (Je n'aime pas le froid.)",
      "Say where you live with the correct preposition (J'habite à Londres / en Angleterre.)",
      "Describe something about where you live (Il y a un grand parc près de chez moi.)",
      "Use il y a at least once (Il y a deux chambres dans mon appartement.)",
    ],
  },

  // ── fr-cp-a1-3 : Block 3 — Describe your routine + listening (after U14) ─
  {
    id: 'fr-cp-a1-3',
    level: 'A1',
    block: 3,
    type: 'speaking',
    title: 'Describe your routine',
    scenario:
      "Your French pen pal wants to understand what your typical day looks like. Describe your own typical weekday. Include: what time you get up and your morning routine, what you do during the day (work, study, activities), what you do in the evening, something you do regularly (with a frequency adverb), and connect at least 3 ideas with sequence connectors.\n\nTip: if you stumble on a verb form, self-correct and keep going — that's exactly what a real conversation looks like.",
    speakingPrompts: [
      "Use at least 2 reflexive verbs (Je me lève à..., je me couche à...)",
      "Give specific times (Je commence à 9h, je finis à...)",
      "Use a frequency adverb (Je cuisine souvent..., je lis rarement...)",
      "Use ne...jamais or ne...pas (Je ne travaille jamais le week-end.)",
      "Use at least 3 connectors (d'abord, ensuite, parce que, donc...)",
      "Describe both day and evening (Le matin... / Le soir...)",
      "Use -er verbs correctly across persons (je parle, il travaille...)",
      "Sound connected and natural — ideas flowing from one to the next",
    ],
  },

  // ── fr-cp-a1-4 : Block 4 — Navigate a day in a French city (after U19) ───
  {
    id: 'fr-cp-a1-4',
    level: 'A1',
    block: 4,
    type: 'speaking',
    title: 'Navigate a day in a French city',
    scenario:
      "You're spending a Saturday in Paris. Your French friend has given you the day to explore on your own.\n\nDescribe what your day looks like — or roleplay it. Cover:\n1. You're at a café — order something to drink and eat\n2. You want to go to the Louvre — ask someone for directions from the café\n3. Later, you go shopping — ask about a price and decide whether to buy\n4. You call your friend at the end of the day to make evening plans\n5. You have to say no to one of their suggestions because you can't / you must do something else",
    speakingPrompts: [
      "Order politely using je voudrais (Je voudrais un café et un croissant, s'il vous plaît.)",
      "Use a partitive article correctly (De l'eau gazeuse, s'il vous plaît.)",
      "Use at least one filler naturally (Euh... je voudrais... enfin, je prends le plat du jour.)",
      "Ask for directions and use the vocabulary (Pardon, où est le Louvre ? Vous tournez à gauche...)",
      "Ask a price and respond (C'est combien ? C'est trop cher / je prends ça.)",
      "Use futur proche for evening plans (On va aller au restaurant ? Je vais rentrer à 20h.)",
      "Use a modal verb to decline or explain (Je ne peux pas / je dois rentrer tôt.)",
      "Use at least one connector (Je voudrais venir mais je dois...)",
      "Sound like a conversation — fillers, connectors, natural pace",
    ],
  },

  // ── fr-cp-a1-5 : Block 5 — The A1 exit checkpoint (after U22) ────────────
  {
    id: 'fr-cp-a1-5',
    level: 'A1',
    block: 5,
    type: 'speaking',
    title: 'The A1 exit checkpoint',
    scenario:
      "You're on a French podcast for language learners. The host asks you to speak for 2–3 minutes in French. This is your moment.\n\nCover all of the following — in any order, as naturally as possible:\n1. Who you are: name, origin, age, job/studies\n2. Your world: family, where you live, what you like and dislike\n3. Your routine: what a typical day looks like\n4. Something that happened recently: a specific event, trip, or experience\n5. Something you're planning: what you're going to do in the coming weeks or months",
    speakingPrompts: [
      "Introduce yourself completely (Je m'appelle..., j'ai X ans, je suis de..., je suis...)",
      "Describe family or preferences (J'ai un frère... / J'adore la musique mais je n'aime pas...)",
      "Describe your routine with reflexive verbs (Je me lève à..., je travaille jusqu'à...)",
      "Use frequency adverbs (Je fais souvent..., je ne... jamais...)",
      "Use passé composé with avoir correctly (Hier, j'ai mangé... / La semaine dernière, j'ai vu...)",
      "Use passé composé with être correctly (Je suis allé(e)..., je suis rentré(e)...)",
      "Use futur proche for future plans (La semaine prochaine, je vais...)",
      "Use at least one modal verb (Je dois..., je voudrais..., je peux...)",
      "Use connectors throughout (d'abord, ensuite, mais, parce que, donc...)",
      "Use at least one filler naturally (Euh..., enfin..., voilà, c'est-à-dire...)",
      "Sound connected and conversational — not a list but a flowing monologue",
    ],
  },
]
