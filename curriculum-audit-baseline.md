# Curriculum Audit Baseline — Korean & French A1

This document records the systematic content-quality issues found while auditing Korean A1 and French A1 (Blocks 1–4), and the fixes applied. It's meant as a **baseline checklist and bug taxonomy** for auditing the remaining languages (Spanish, Italian, Japanese) and French Block 5.

Audits were done **block by block**, not the whole level at once — this surfaced far more issues than a shallow pass would have, because each fix sometimes revealed a duplicate or orphan in a neighboring, not-yet-reviewed unit.

---

## Bug taxonomy — what to check for in every unit

When auditing a unit, check each of these independently. They are different failure modes and a unit can have several at once.

1. **Title/description vs. actual grammar content mismatch.**
   A unit's title/description describes one topic, but the grammar lesson(s) attached to it (`grammarIds`) actually teach something else — almost always a leftover from an earlier curriculum redesign that renamed/reordered units without updating everything.
   *Check:* does the unit's title match what the attached grammar lesson's `explanation` and `examples` actually teach?

2. **VocabId misassignment ("swapped" units).**
   A unit's `vocabIds` point to words belonging to a completely different topic — often because two units' vocab ranges got swapped or shifted by one during authoring.
   *Check:* do the words in `vocabIds` thematically match the unit's title/grammar/phrase lesson? A good tell: if a unit's own test questions or phrase lesson use words that aren't in its `vocabIds` at all.

3. **Vocabulary taught in prose but never made trackable.**
   A grammar lesson's `explanation`, `inlineVocab`, or a phrase lesson's `phrases[]` teaches and uses specific words, but no matching `VocabItem` exists anywhere in the vocab file — so the words never enter Flashcards/SRS review.
   *Check:* for every word in a grammar lesson's `inlineVocab` or a phrase lesson's phrase list, does a real `VocabItem` exist with that word?

4. **Orphaned vocab entries.**
   A `VocabItem` exists, correctly authored, but no unit's `vocabIds` references it at all — it sits dead in the array.
   *Check:* grep every vocab id against every unit's `vocabIds`; anything unreferenced is orphaned.

5. **Cross-unit duplication.**
   The same vocabId is referenced by two or more units whose topics don't overlap. Distinguish this from **intentional** reuse in capstone/review units (e.g. French's Unit 22, "Handle more verbs and connect across time," deliberately resamples vocab from across the level — that's fine).
   *Check:* build a map of vocabId → units that reference it; anything with >1 unit that isn't a known capstone/review unit is a bug.

6. **Verb wiring gaps.**
   A verb is used/tested in a unit's grammar or test questions but (a) has no `VerbEntry`/conjugation table anywhere, or (b) has one, but it isn't wired into that unit's `verbIds`.
   *Check:* for every verb named in a unit's grammar explanation or test questions, does it have a `VerbEntry`, and is that entry's id in the unit's `verbIds`?

7. **Grammar lesson containing unrelated bonus content.**
   A grammar lesson's notes/tips/examples include an aside that belongs to a different topic entirely (usually because it was easier to bolt onto a nearby lesson than write a new one).
   *Check:* does every note/example in a grammar lesson actually relate to the lesson's own title?

8. **Empty `grammarIds` — legitimate vs. a gap.**
   Some units legitimately have no grammar lesson (pure phrase-driven units — greetings, telling time, weather). This is fine **only if** the phrase lesson and vocab genuinely cover the content end to end. Don't flag every empty `grammarIds` as a bug — check whether the phrase lesson actually carries the load.

---

## Korean A1 — issues found and fixed

### Unit 15 ("negation" — `ko-a1-u14`)
- **Title/content mismatch**: title read "I like this, I don't like that" (a likes/dislikes topic) but the grammar (`ko-g-a1-22`, `ko-g-a1-23`) was entirely about 안/못 negation. Renamed to "I don't do this, I can't do that."
- **VocabId misassignment cascading across Units 13–17**: each unit's `vocabIds` had absorbed the *next* unit's vocab by one slot (a shift bug). Realigned Units 13–17.
- **Missing grammar entirely**: noun negation (이/가 아니에요) was tested (`학생이 아니에요`) but never taught anywhere. Added a new grammar lesson (`ko-g-a1-23b`) and a vocab entry (아니에요).

### Unit 16 ("question words" — `ko-a1-u15`)
- **Incomplete vocab set**: only 5 of 9 A1 question words were wired. Added 어디, 몇 (already existed elsewhere, just not wired here) plus newly-authored 무엇, 어떤, 얼마나.
- **Grammar lesson containing unrelated bonus content**: the 누구→누가 grammar lesson (`ko-g-a1-25`) had an unrelated "answering politely" tip (short-answer-with-요 trick) and orphaned vocab (요즘, 잘 지내요, 열심히, 언젠가) mixed in. Removed the unrelated content; relocated the useful short-answer trick into a new phrase lesson (`ko-pl-a1-15`, "Asking questions naturally") built specifically for natural conversational Q&A.

### New feature (not a bug fix)
- Added a Hangul syllable-chart reference page (`/learn/:langId/script`) — all 190 open syllables (19 consonants × 10 vowels) plus 11 compound vowels — wired into the Study tab and home-screen Quick practice, gated to `language.script === "hangul"`.

---

## French A1 — issues found and fixed, Blocks 1–4

### Block 1 (Units 1–4: "Who I Am")
- **Unit 3** ("numbers 1–30"): 14 number vocab entries (4, 6, 7, 8, 9, 12–19, 90) existed in the vocab file but were never wired into the unit — half the numbers taught were unreachable via SRS.
- **Unit 2 ↔ Unit 4 vocab swap**: Unit 2 ("Tell people who you are" — nationality/origin) had *profession* vocab wired; Unit 4 ("Say what you do" — jobs) had *adjectives* wired. **There was no nationality vocabulary anywhere in French A1 at all**, despite it being Unit 2's entire premise and directly tested. Authored 6 nationality entries for Unit 2; moved the profession vocab to Unit 4.
- **Unit 6** (Block 2, but required to close the loop): received the 6 core adjectives (grand/petit/nouveau/vieux/beau/bon) freed up from Unit 4 — these are the exact example set Unit 6's own grammar lesson uses.

### Block 2 (Units 5–9: "My World")
- **Unit 5**: clean.
- **Unit 6** ("describe people and things"): grammar's own worked examples (intelligent/intelligente, sportif/sportive) and the phrase lesson's entire personality-adjective set (mince, costaud, mignon, drôle, bavard, timide, sérieux, travailleur, gentil) had **no vocab entries at all**. Authored 11 new entries.
- **Unit 7** ("say what you like/don't like"): description promised aimer/adorer/détester/préférer, but the attached grammar taught only ne...pas negation — none of adorer/détester/préférer were ever mentioned in grammar, and none were wired as trackable verbs (only aimer was). Authored all 3 as verb entries with conjugation tables (préférer has an é→è stem change).
- **Unit 8** ("say where you live" — à/en/au/aux country prepositions): **no country vocabulary existed anywhere**, same gap as Unit 2's nationalities. Authored 8 country nouns covering all three preposition cases.
- **Unit 9** ("home and neighbourhood"): test question needs "un parc," but le parc/la rue/le centre-ville were misplaced in Unit 13 (itself broken — see below). Moved them to Unit 9.

### Block 3 (Units 10–14: "Daily Life")
- **Unit 10** (reflexive verbs / daily routine): 4 of 7 routine reflexive verbs were wired; se réveiller (directly tested), se doucher, se reposer had no verb entries. Authored all 3.
- **Unit 11** ("tell the time"): `grammarIds: []` is fine here (phrase-lesson-driven, like Unit 1) — but core time-telling vocabulary (l'heure, midi, minuit, et quart, et demie, moins le quart, vers, jusqu'à) **didn't exist anywhere**. Authored 8 entries.
- **Unit 10/12 duplication**: souvent/toujours/jamais/quelquefois were wired to both units. Kept only in Unit 12 ("add frequency adverbs" is literally its topic).
- **Unit 13** ("ask questions"): grammar teaches qui/où/quand/pourquoi/comment/combien/quel/qu'est-ce que, but **none of it existed as vocab** — instead the unit had le beurre (butter) and 5 transport words (billet, métro, bus, train, quai), completely unrelated. Authored 8 question-word entries; removed the food/transport words (flagged, resolved in Block 4 — see below).
- **Unit 14** ("connectors"): same gap — mais/donc/alors/parce que/puis/d'abord/ensuite/enfin/voilà were taught in depth by grammar but had zero vocab, while the unit's actual vocab (classroom phrases, time words) was **duplicated wholesale from Units 22 and 18**. Authored 9 connector entries; removed both duplicated sets.

### Block 4 (Units 15–20: "Out in the World")
This block had the most cross-contamination — vocab from three different topics (food, transport, shopping) was scattered across five units with no unit having a fully correct set.
- **Transport vocabulary** (10 words total: billet, aller simple, métro, bus, train, quai, la correspondance, "à quelle heure part...?", valider son ticket, l'arrêt de bus) was split across Unit 15 (food unit), Unit 16 (shopping unit), and Unit 18 (making-plans unit) — **no unit's grammar or phrase lesson actually taught transport**. Consolidated all 10 into Unit 17 ("ask for and understand directions"), the only real thematic fit for "getting around a city."
- **Food vocabulary** (viande, poisson, légumes, fruits, pomme, poulet) was sitting in Unit 16 (shopping/clothing) instead of Unit 15 (food/ordering), which was missing exactly these basic categories. Moved to Unit 15.
- **Shopping-transaction phrases** (Ça fait combien?, paie par carte, avez-vous la monnaie?, c'est combien?, le prix, la monnaie) — matching Unit 16's own phrase lesson almost verbatim — were split between Unit 19 (wrong fit) and Unit 22 (fine, capstone review), with 3 of them **entirely orphaned**. Consolidated into Unit 16.
- **Health/emergency vocabulary**: "Au secours!" (Help!) was misplaced in Unit 16; 4 more emergency phrases (Appelez le SAMU/pompiers/police, j'ai besoin d'aide, j'ai perdu mon passeport, c'est urgent) were **entirely orphaned** — no phrase lesson or unit ever used them. Added all 5 to Unit 17 (its phrase lesson already says "Je suis perdu(e)," so "lost and needing help" is a natural fit).
- **Unit 19** (modals: vouloir/pouvoir/devoir): had **zero correctly-assigned vocab** — everything wired to it was duplicated from Unit 6 (adjectives), Unit 7 (hobbies), or Unit 22 (classroom/shopping phrases), none related to wanting/needing/being able to. Removed all of it; authored 4 new entries that support the grammar's own examples (il faut, avoir besoin de, réserver, confirmer).
- **Unit 23** (weather): clean, no issues.

---

## Still open / not yet audited

- **French A1 Block 5** (Units 21–26: "Talking About Time") — not yet reviewed.
- **Spanish, Italian, Japanese A1** — not yet audited at all. Given the density of issues found in French, expect a similar or worse hit rate, especially anywhere a curriculum redesign happened (check git log for "redesign" / "remap grammarIds" commits per language as a starting signal).
- **Minor pre-existing duplications noticed but not fixed** (out of scope for the blocks reviewed so far, flagged for later):
  - French vite/lentement/très/assez (`fr-v-a1-230`–`233`) reused across Unit 12 and Unit 17 — low severity, plausible fit in both.
  - French bien/mal (`228`–`229`) and trop/beaucoup (`234`–`235`) reused across Unit 12 and Units 20/21 (Block 5) — not yet assessed since Block 5 hasn't been reviewed.
  - French la ville/le supermarché (`115`, `121`) reused across Unit 8 and Units 24/25/26 (Block 5) — not yet assessed.
- **The Korean `missing-inline-vocabs-*.md` files** at the repo root are an earlier, incomplete pass (Block 1 only, Blocks 2–5 are placeholders) at a narrower version of taxonomy item #3 above (inlineVocab specifically, not the full vocab-wiring picture). Superseded in spirit by this document but not deleted — check with the user before removing them.
