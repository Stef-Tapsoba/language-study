import { GrammarLesson } from "../../../../types"

// Block 3 — "Y si... / Lo que podría haber sido" (Units 8–10)
// Si-clause types 2+3, condicional compuesto, double pronouns, advanced relatives

export const block3Lessons: GrammarLesson[] = [
  {
    id: "es-g-b1-8",
    level: "B1",
    title: "Si Clauses — Types 2 and 3 (Hypothetical and Counterfactual)",
    explanation: {
      native: `Spanish has three types of si-clause. Type 1 (real) was A2. Types 2 and 3 are new at B1.

TYPE 1 — REAL (known from A2):
  si + presente → futuro / presente
  Si tienes tiempo, vendrás con nosotros.

TYPE 2 — HYPOTHETICAL PRESENT (new at B1):
  si + imperfecto de subjuntivo → condicional simple
  Si tuviera tiempo, viajaría más.
  Si fuera más valiente, hablaría con ella.
  Meaning: IF X were true (it's not, or unlikely), Y WOULD happen.

TYPE 3 — COUNTERFACTUAL PAST (new at B1):
  si + pluscuamperfecto de subjuntivo → condicional compuesto
  Si hubiera tenido tiempo, habría viajado más.
  Si hubiera llegado antes, habríamos podido salir juntos.
  Meaning: IF X had happened (it didn't), Y WOULD HAVE happened.

IMPERFECTO DE SUBJUNTIVO — formation:
Take the ELLOS form of pretérito indefinido, remove -ron, add -ra endings:
  hablar → hablaron → hablara, hablaras, hablara, habláramos, hablaran
  tener → tuvieron → tuviera, tuvieras, tuviera, tuviéramos, tuvieran
  ser/ir → fueron → fuera, fueras, fuera, fuéramos, fueran
  hacer → hicieron → hiciera, hicieras, hiciera, hiciéramos, hicieran
  poder → pudieron → pudiera / querer → quisieron → quisiera
  venir → vinieron → viniera / decir → dijeron → dijera

The -se form (tuviese, etc.) also exists but is literary — use -ra in all contexts.

CONDICIONAL COMPUESTO — formation:
  condicional simple of haber + participio
  habría hablado / habrías comido / habría hecho / habríamos ido / habrían venido

STANDALONE CONDICIONAL COMPUESTO (without si):
  Debería haber llegado antes. (I should have arrived earlier)
  Podrías haber preguntado. (You could have asked)
  Me habría gustado estar allí. (I would have liked to be there)`,
      target: `El español tiene tres tipos de oraciones condicionales con si.

TIPO 2 — HIPOTÉTICO PRESENTE:
  si + imperfecto de subjuntivo → condicional simple
  Si tuviera tiempo, viajaría más. (Si X fuera cierto — no lo es — Y ocurriría)

TIPO 3 — CONTRAFACTUAL PASADO:
  si + pluscuamperfecto de subjuntivo → condicional compuesto
  Si hubiera tenido tiempo, habría viajado más. (Si X hubiera ocurrido — no ocurrió — Y habría ocurrido)

IMPERFECTO DE SUBJUNTIVO:
Toma la forma ELLOS del indefinido, elimina -ron, añade -ra:
  tener → tuvieron → tuviera / ser → fueron → fuera / hacer → hicieron → hiciera

CONDICIONAL COMPUESTO:
  condicional de haber + participio: habría hablado, habría hecho`,
    },
    conjugationTable: {
      pronouns: ["yo", "tú", "él/ella", "nosotros", "ellos/ustedes"],
      verbs: [
        { label: "tener (imp. subj.)", forms: ["tuviera", "tuvieras", "tuviera", "tuviéramos", "tuvieran"] },
        { label: "ser/ir (imp. subj.)", forms: ["fuera", "fueras", "fuera", "fuéramos", "fueran"] },
        { label: "haber (cond. comp.)", forms: ["habría", "habrías", "habría", "habríamos", "habrían"] },
      ],
    },
    rules: [
      {
        condition: "Type 2 — hypothetical present (unlikely or contrary to reality now)",
        result: "si + imperfecto de subjuntivo + condicional simple",
        examples: [
          { native: "Si tuviera más dinero, viajaría por el mundo.", translation: "If I had more money (I don't), I would travel the world." },
          { native: "Si pudierais cambiar una cosa, ¿qué elegiríais?", translation: "If you could change one thing, what would you choose?" },
        ],
      },
      {
        condition: "Type 3 — counterfactual past (it didn't happen — what would have happened)",
        result: "si + pluscuamperfecto de subjuntivo + condicional compuesto",
        examples: [
          { native: "Si hubiera llegado antes, habríamos podido salir juntos.", translation: "If I had arrived earlier, we could have gone out together." },
          { native: "Si no hubieras dicho eso, nada habría pasado.", translation: "If you hadn't said that, nothing would have happened." },
        ],
      },
      {
        condition: "CRITICAL RULE: after si, NEVER use condicional or futuro",
        result: "si + presente/imperfecto subj./pluscuamperfecto subj. ONLY",
        examples: [
          { native: "Si tuviera (NOT tendría) tiempo, iría.", translation: "If I had (not I would have) time, I would go." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Key insight: the imperfecto de subjuntivo is completely regular — it always builds on the ellos indefinido. If you know tuvieron (tener), fueran (ser/ir), hicieron (hacer), you can form every imperfecto de subjuntivo.",
      },
      {
        type: "culture",
        content: "Spanish news media uses the condicional compuesto to report unverified information: 'Habría dimitido ayer' (He allegedly resigned yesterday). This journalistic conditional signals that information is unconfirmed.",
      },
    ],
    examples: [
      { native: "Si hubiera sido más valiente, me habría dedicado al teatro.", translation: "If I had been braver, I would have devoted myself to theatre." },
      { native: "Si tuvieras más tiempo libre, ¿qué harías?", translation: "If you had more free time, what would you do?" },
      { native: "Debería haber llegado antes — me había dicho que era importante.", translation: "I should have arrived earlier — he had told me it was important." },
      { native: "Según los medios, el ministro habría dimitido anoche.", translation: "According to the media, the minister allegedly resigned last night." },
      {
        type: "dialogue",
        exchanges: [
          { native: "Si pudieras elegir otra profesión, ¿qué harías?", translation: "If you could choose another profession, what would you do?" },
          { native: "Si hubiera sido más valiente de joven, me habría dedicado al teatro. Pero tenía demasiado miedo. Debería haberlo intentado entonces. Y tú, si hubieras viajado más, ¿crees que habrías aprendido más idiomas?", translation: "If I had been braver when I was young, I would have devoted myself to theatre. But I was too afraid. I should have tried then. And you, if you had travelled more, do you think you would have learned more languages?" },
        ],
        annotation: "Type 2: si pudieras (harías). Type 3: si hubiera sido (habría dedicado), si hubieras viajado (habrías aprendido). Standalone: debería haberlo intentado.",
      },
    ],
    inlineVocab: [
      { word: "si solo... / ojalá", translation: "if only" },
      { word: "en aquella época", translation: "at the time" },
      { word: "dedicarse a", translation: "to devote oneself to" },
      { word: "debería haber...", translation: "I/he should have..." },
      { word: "podría haber...", translation: "I/he could have..." },
      { word: "me habría gustado", translation: "I would have liked" },
      { word: "de otro modo / de otra manera", translation: "differently" },
      { word: "dimitir", translation: "to resign" },
      { word: "según", translation: "according to" },
    ],
  },
  {
    id: "es-g-b1-9",
    level: "B1",
    title: "Double Object Pronouns — Le→Se Rule and Imperative Combinations",
    explanation: {
      native: `Double-pronoun sentences are everywhere in natural spoken Spanish. Without them, speech sounds stilted — you keep repeating nouns.

PRONOUN ORDER:
  Indirect Object (OI) before Direct Object (OD)
  OI: me, te, le→se, nos, os, les→se
  OD: lo, la, los, las

THE LE→SE RULE — the most important rule:
When le/les (indirect object) comes before lo/la/los/las (direct object),
le/les changes to SE. This is because two consecutive l- pronouns are awkward.
  ~~Le lo doy.~~ → Se lo doy. (I give it to him/her)
  ~~Les la expliqué.~~ → Se la expliqué. (I explained it to them)

NOTE: This se is NOT reflexive — it simply replaces le/les before lo/la/los/las.
Context tells you who it refers to.

COMBINATIONS:
  Se lo doy. (OI se + OD lo = I give it to him/her/you)
  Te lo digo. (OI te + OD lo = I tell it to you)
  Me la enseñó. (OI me + OD la = he showed it to me)
  Nos los mandaron. (OI nos + OD los = they sent them to us)

POSITION:
Before conjugated verb: Se lo doy. / Me la explicó.
Attached to infinitive/gerund: Puedo dárselo. / Estoy explicándotelo.
In compound tenses: ¿Se lo has dado? / Me lo había explicado.

IMPERATIVE + double pronouns (affirmative = attach in OI+OD order):
  Dámelo. (Give it to me) — da + me + lo → dámelo (accent to preserve stress)
  Cuéntaselo. (Tell it to him/her) — cuenta + se + lo → cuéntaselo
  Díselo. (Tell it to him/her) — di + se + lo → díselo

NEGATIVE IMPERATIVES: pronouns go BEFORE:
  No me lo digas. / No se lo expliques.`,
      target: `Los pronombres de doble objeto son omnipresentes en el español hablado natural.

ORDEN: OI antes que OD

LA REGLA LE→SE:
Cuando le/les precede a lo/la/los/las, le/les cambia a SE.
  ~~Le lo doy.~~ → Se lo doy.
  ~~Les la expliqué.~~ → Se la expliqué.

Este se NO es reflexivo — solo reemplaza a le/les.

IMPERATIVO CON DOBLE PRONOMBRE (afirmativo — se adjuntan):
  Dámelo. / Cuéntaselo. / Díselo.

IMPERATIVO NEGATIVO — pronombres antes del verbo:
  No me lo digas. / No se lo expliques.`,
    },
    rules: [
      {
        condition: "le/les before lo/la/los/las",
        result: "Change le/les to se",
        examples: [
          { native: "Se lo dije. (= le lo dije → impossible)", translation: "I told it to him/her." },
          { native: "Se la expliqué. (= les la → impossible)", translation: "I explained it to them." },
        ],
      },
      {
        condition: "Affirmative imperative + double pronouns",
        result: "Attach in OI+OD order — add written accent to preserve original stress",
        examples: [
          { native: "Dámelo. / Cuéntaselo. / Explícamelo.", translation: "Give it to me. / Tell it to him. / Explain it to me." },
        ],
      },
      {
        condition: "Negative imperative + double pronouns",
        result: "Pronouns go BEFORE the verb, separated",
        examples: [
          { native: "No me lo digas. / No se lo expliques.", translation: "Don't tell it to me. / Don't explain it to him." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "The le→se rule is the single most important thing in this unit — practise it until it is automatic. Saying 'le lo' is a very noticeable error in Spanish.",
      },
      {
        type: "warning",
        content: "The se in 'se lo doy' is NOT reflexive — it simply replaces le/les. The context (the surrounding sentence) always makes clear whether it refers to him, her, them, or you (formal).",
      },
    ],
    examples: [
      { native: "¿Le has devuelto el libro a Pau? — No, todavía no se lo he devuelto.", translation: "Have you returned the book to Pau? — No, I haven't returned it to him yet." },
      { native: "Las llaves — ¿se las diste? — Sí, se las di esta mañana. Me las había pedido ayer.", translation: "The keys — did you give them to her? — Yes, I gave them to her this morning. She had asked me for them yesterday." },
      { native: "¿Puedes mandármelos? — Te los mando ahora.", translation: "Can you send them to me? — I'll send them to you now." },
      { native: "Díselo de mi parte — me tiene que invitar a un café.", translation: "Tell him on my behalf — he has to invite me for a coffee." },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Y el informe? ¿Se lo mandaste al jefe?", translation: "And the report? Did you send it to the boss?" },
          { native: "Sí, se lo mandé ayer por la tarde. Me lo había pedido urgente. También les dije a los demás que se lo leyeran antes de la reunión — o sea, les lo dije... perdón, se lo dije.", translation: "Yes, I sent it to him yesterday afternoon. He had asked me urgently for it. I also told the others to read it before the meeting — I mean, I told them." },
        ],
        annotation: "se lo mandé (= le lo, le = jefe), me lo había pedido, se lo dije (= les lo → se lo). Self-correcting se lo is a natural moment showing the rule in action.",
      },
    ],
    inlineVocab: [
      { word: "devolver (algo a alguien)", translation: "to return (sth to sb)" },
      { word: "se me olvidó", translation: "I forgot (lit: it forgot itself to me)" },
      { word: "prometido", translation: "I promise / promised" },
      { word: "de mi parte", translation: "on my behalf" },
      { word: "los apuntes", translation: "(course) notes" },
      { word: "por escrito", translation: "in writing" },
      { word: "urgente", translation: "urgent" },
    ],
  },
  {
    id: "es-g-b1-10",
    level: "B1",
    title: "Relative Pronouns — Cuyo, Lo que, Quien, El cual",
    explanation: {
      native: `Building on A2 relative pronouns (que, donde, quien), B1 adds richer forms for possession, abstract reference, and formal writing.

CUYO/A/OS/AS — whose:
  Cuyo expresses possession in relative clauses — it AGREES with the NOUN FOLLOWING IT (not the owner):
  Es un amigo cuyo padre es médico. (padre — m.sg. → cuyo)
  La empresa cuyos directores dimitieron... (directores — m.pl. → cuyos)
  Es una situación cuyas consecuencias son graves. (consecuencias — f.pl. → cuyas)

  Agreement:
    Masculine singular: cuyo
    Feminine singular: cuya
    Masculine plural: cuyos
    Feminine plural: cuyas

LO QUE / LO CUAL — what / which (abstract reference):
  Lo que refers to a whole idea or situation — not a specific noun:
  Lo que más me gusta es el silencio. (What I like most is silence.)
  No entiendo lo que dices. (I don't understand what you're saying.)
  Lo que pasó fue una sorpresa. (What happened was a surprise.)

  Lo cual refers BACK to a previously stated idea (formal):
  Llegó tarde, lo cual nos molestó. (He arrived late, which annoyed us.)
  Ha aprobado todos los exámenes, lo cual nos alegra mucho. (Which pleases us greatly.)

QUIEN/QUIENES — for people (after prepositions or non-restrictive):
  que: after a noun (restrictive)  → El amigo que vino ayer...
  quien/quienes: after preposition, or non-restrictive
    Es la persona a quien más admiro. (the person I admire most — after preposition)
    Quien bien te quiere te hará llorar. (He who truly loves you...)

EL CUAL / LA CUAL / LOS CUALES / LAS CUALES — formal variants:
  Las razones por las cuales tomaron esa decisión...
  Es el problema del cual ya te hablé.
  Used mainly in formal writing and for reading comprehension at B1.`,
      target: `El B1 añade pronombres relativos más ricos para posesión, referencia abstracta y escritura formal.

CUYO/A/OS/AS — cuyo concuerda con el SUSTANTIVO QUE LE SIGUE (no con el poseedor):
  cuyo padre (padre m.sg. → cuyo), cuya novela (novela f.sg. → cuya),
  cuyos directores (m.pl. → cuyos), cuyas consecuencias (f.pl. → cuyas)

LO QUE — hace referencia a una idea completa (no a un sustantivo específico):
  Lo que más me gusta es... / No entiendo lo que dices.

LO CUAL — se refiere a la cláusula anterior (formal):
  Llegó tarde, lo cual nos molestó.

QUIEN/QUIENES — para personas después de preposición o en cláusulas no restrictivas.`,
    },
    rules: [
      {
        condition: "Possession in a relative clause",
        result: "Use cuyo/a/os/as — agree with the thing possessed, not the owner",
        examples: [
          { native: "El escritor cuya novela ganó el premio...", translation: "The writer whose novel won the prize..." },
          { native: "Los países cuyos presidentes se reunieron...", translation: "The countries whose presidents met..." },
        ],
      },
      {
        condition: "Abstract reference (to a whole idea, not a noun)",
        result: "Use lo que (subject/object) or lo cual (back-reference, formal)",
        examples: [
          { native: "Lo que me sorprende es la velocidad del cambio.", translation: "What surprises me is the speed of change." },
          { native: "El proyecto fue aprobado, lo cual nos alegró.", translation: "The project was approved, which made us happy." },
        ],
      },
      {
        condition: "Person as object of preposition",
        result: "Use a quien / con quien / de quien (not a que in careful writing)",
        examples: [
          { native: "El colega del que te había hablado / a quien más admiro...", translation: "The colleague I had told you about / whom I admire most..." },
        ],
      },
    ],
    notes: [
      {
        type: "tip",
        content: "Lo que is one of the most useful connectors in spoken Spanish — it can open, summarise, and emphasise ideas. Use it freely in speaking tasks: 'Lo que me parece interesante es...'",
      },
      {
        type: "warning",
        content: "Cuyo is less frequent in spoken Spanish (speakers tend to avoid or paraphrase it), but it appears regularly in written texts and in DELE exams. Learn it for comprehension and formal writing.",
      },
    ],
    examples: [
      { native: "Conocí a gente cuya influencia en mí fue enorme.", translation: "I met people whose influence on me was enormous." },
      { native: "Lo que me atrae del proyecto es la dimensión internacional.", translation: "What attracts me to the project is the international dimension." },
      { native: "Me contactó para un proyecto en el que participa, lo cual me sorprendió.", translation: "He contacted me for a project he's involved in, which surprised me." },
      { native: "La razón por la que dudas es el riesgo económico, ¿verdad?", translation: "The reason you're hesitating is the financial risk, right?" },
      {
        type: "dialogue",
        exchanges: [
          { native: "¿Recuerdas al colega del que te había hablado?", translation: "Do you remember the colleague I had told you about?" },
          { native: "Sí — aquel cuyo hermano es arquitecto, ¿no? Me has contado que trabaja en un proyecto cuya dimensión internacional lo hace muy interesante. Lo que me planteé es si valdría la pena. Lo que me doy cuenta es de que este tipo de oportunidades no se repiten.", translation: "Yes — the one whose brother is an architect, right? You've told me he works on a project whose international dimension makes it very interesting. What I was wondering is whether it would be worth it. What I realise is that this kind of opportunity doesn't come twice." },
        ],
        annotation: "cuyo hermano, cuya dimensión — agree with the possessed noun. Lo que me planteé / lo que me doy cuenta — abstract lo que.",
      },
    ],
    inlineVocab: [
      { word: "cuyo/a/os/as", translation: "whose" },
      { word: "lo que", translation: "what / which (abstract)" },
      { word: "lo cual", translation: "which (formal, back-reference)" },
      { word: "quien/quienes", translation: "who (after preposition / non-restrictive)" },
      { word: "la excedencia", translation: "leave of absence" },
      { word: "la dimensión", translation: "dimension / aspect" },
      { word: "plantearse", translation: "to consider / think about" },
      { word: "darse cuenta de", translation: "to realise" },
      { word: "pertenecer a", translation: "to belong to" },
    ],
  },
]
