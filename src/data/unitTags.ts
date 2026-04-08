// data/unitTags.ts — Topic tag assignments for all A1 + A2 units (all 5 languages).
//
// Keeping tags in a separate lookup avoids cluttering the unit data files and
// makes it easy to add/revise tags without touching content.
//
// Applied automatically in repo.getUnitsForLevel() — callers receive units
// with topicTags already merged in; no changes needed at call sites.
//
// Stage 2: tags will move into the Supabase units table and this file is retired.

import type { TopicTag } from "../types"

export const UNIT_TAGS: Record<string, TopicTag[]> = {

    // ── SPANISH A1 ──────────────────────────────────────────────────────────────
    "es-a1-u1":  ["greetings", "identity"],
    "es-a1-u2":  ["identity", "travel"],
    "es-a1-u3":  ["work", "social"],
    "es-a1-u4":  ["identity", "social"],
    "es-a1-u5":  ["food", "social"],
    "es-a1-u6":  ["work", "home"],
    "es-a1-u7":  ["numbers", "social"],
    "es-a1-u8":  ["numbers", "nature"],
    "es-a1-u9":  ["social"],
    "es-a1-u10": ["social"],
    "es-a1-u11": ["nature"],
    "es-a1-u12": ["identity", "social"],
    "es-a1-u13": ["food", "shopping"],
    "es-a1-u14": ["travel", "social"],
    "es-a1-u15": ["travel"],
    "es-a1-u16": ["identity", "health"],
    "es-a1-u17": ["home", "social"],
    "es-a1-u18": ["food", "social"],
    "es-a1-u19": ["work", "social"],
    "es-a1-u20": ["shopping", "travel"],
    "es-a1-u21": ["social"],
    "es-a1-u22": ["food", "social"],
    "es-a1-u23": ["social", "work"],
    "es-a1-u24": ["travel", "social"],
    "es-a1-u25": ["home", "identity"],
    "es-a1-u26": ["identity", "travel"],
    "es-a1-u27": ["travel", "social"],

    // ── SPANISH A2 ──────────────────────────────────────────────────────────────
    "es-a2-u1":  ["social", "travel"],
    "es-a2-u2":  ["work", "travel"],
    "es-a2-u3":  ["shopping", "travel"],
    "es-a2-u4":  ["social"],
    "es-a2-u5":  ["social"],
    "es-a2-u6":  ["social", "shopping"],
    "es-a2-u7":  ["social", "work"],
    "es-a2-u8":  ["social", "home"],
    "es-a2-u9":  ["social"],
    "es-a2-u10": ["identity", "social"],
    "es-a2-u11": ["social", "travel"],
    "es-a2-u12": ["travel", "social"],
    "es-a2-u13": ["food", "social"],
    "es-a2-u14": ["social"],
    "es-a2-u15": ["social", "culture"],
    "es-a2-u16": ["work", "social"],
    "es-a2-u17": ["social", "nature"],
    "es-a2-u18": ["travel", "social"],
    "es-a2-u19": ["social"],
    "es-a2-u20": ["travel", "social"],
    "es-a2-u21": ["identity", "social"],
    "es-a2-u22": ["social"],

    // ── FRENCH A1 ───────────────────────────────────────────────────────────────
    "fr-a1-u1":  ["greetings", "social"],         // Block 1: greetings, goodbyes, politeness
    "fr-a1-u2":  ["identity", "social"],          // Block 1: name, origin, nationality — être
    "fr-a1-u3":  ["identity"],                    // Block 1: age, numbers — avoir
    "fr-a1-u4":  ["work", "social"],              // Block 1: job, studies — -er verbs
    "fr-a1-u5":  ["identity", "social"],           // Block 2: family vocabulary + possessives
    "fr-a1-u6":  ["social"],                      // Block 2: adjective agreement, descriptions
    "fr-a1-u7":  ["social"],                      // Block 2: likes/dislikes + negation
    "fr-a1-u8":  ["travel", "social"],            // Block 2: where I live, aller, prepositions
    "fr-a1-u9":  ["home", "social"],              // Block 2: home description + articles reveal
    "fr-a1-u10": ["social"],                      // Block 3: daily routine, reflexive verbs
    "fr-a1-u11": ["social"],                      // Block 3: telling time, schedule
    "fr-a1-u12": ["social"],                      // Block 3: frequency, full -er verbs
    "fr-a1-u13": ["social"],                      // Block 3: question formation
    "fr-a1-u14": ["social"],                      // Block 3: connectors, discourse markers
    "fr-a1-u15": ["food", "social"],              // Block 4: ordering food, partitive articles
    "fr-a1-u16": ["shopping", "social"],          // Block 4: shopping and prices
    "fr-a1-u17": ["travel", "social"],            // Block 4: directions + imperative
    "fr-a1-u18": ["social"],                      // Block 4: making plans + futur proche
    "fr-a1-u19": ["social"],                      // Block 4: modals (vouloir/pouvoir/devoir)
    "fr-a1-u20": ["social"],                      // Block 5: passé composé (avoir)
    "fr-a1-u21": ["travel", "social"],            // Block 5: passé composé (être) — movement verbs
    "fr-a1-u22": ["social"],                      // Block 5: -ir/-re verbs + capstone

    // ── FRENCH A2 ───────────────────────────────────────────────────────────────
    "fr-a2-u1":  ["food", "travel"],
    "fr-a2-u2":  ["work", "social"],
    "fr-a2-u3":  ["travel", "social"],
    "fr-a2-u4":  ["identity", "social"],
    "fr-a2-u5":  ["health", "travel", "shopping"],
    "fr-a2-u6":  ["travel", "social"],
    "fr-a2-u7":  ["culture", "social"],
    "fr-a2-u8":  ["social", "home"],
    "fr-a2-u9":  ["food", "shopping"],
    "fr-a2-u10": ["health"],
    "fr-a2-u11": ["home"],
    "fr-a2-u12": ["travel"],
    "fr-a2-u13": ["social", "culture"],
    "fr-a2-u14": ["food", "work"],

    // ── ITALIAN A1 ──────────────────────────────────────────────────────────────
    "it-a1-u1":  ["greetings", "identity"],
    "it-a1-u2":  ["identity"],
    "it-a1-u3":  ["social"],
    "it-a1-u4":  ["work", "social"],
    "it-a1-u5":  ["travel", "social"],
    "it-a1-u6":  ["food", "nature"],
    "it-a1-u7":  ["shopping", "identity"],
    "it-a1-u8":  ["social", "work"],
    "it-a1-u9":  ["social"],
    "it-a1-u10": ["travel", "social"],
    "it-a1-u11": ["numbers", "social"],
    "it-a1-u12": ["numbers", "nature"],
    "it-a1-u13": ["food", "travel"],
    "it-a1-u14": ["identity", "home"],
    "it-a1-u15": ["food", "shopping"],
    "it-a1-u16": ["work", "health"],
    "it-a1-u17": ["travel"],
    "it-a1-u18": ["food", "social"],
    "it-a1-u19": ["home", "social"],
    "it-a1-u20": ["shopping", "food"],
    "it-a1-u21": ["social"],
    "it-a1-u22": ["social"],
    "it-a1-u23": ["food", "home"],
    "it-a1-u24": ["social", "work"],
    "it-a1-u25": ["travel", "social"],

    // ── ITALIAN A2 ──────────────────────────────────────────────────────────────
    "it-a2-u1":  ["food", "travel"],
    "it-a2-u2":  ["social", "home"],
    "it-a2-u3":  ["home", "social"],
    "it-a2-u4":  ["travel", "work"],
    "it-a2-u5":  ["work", "social"],
    "it-a2-u6":  ["food", "social"],
    "it-a2-u7":  ["social"],
    "it-a2-u8":  ["social", "work"],
    "it-a2-u9":  ["food", "social"],
    "it-a2-u10": ["social", "home"],
    "it-a2-u11": ["nature", "travel"],
    "it-a2-u12": ["shopping", "travel"],
    "it-a2-u13": ["shopping", "social"],
    "it-a2-u14": ["social"],
    "it-a2-u15": ["social"],
    "it-a2-u16": ["travel", "social"],
    "it-a2-u17": ["social"],
    "it-a2-u18": ["social"],
    "it-a2-u19": ["work", "social"],
    "it-a2-u20": ["social", "work"],

    // ── JAPANESE A1 ─────────────────────────────────────────────────────────────
    "ja-a1-u1":  ["identity", "social"],
    "ja-a1-u2":  ["greetings", "identity"],
    "ja-a1-u3":  ["food", "shopping"],
    "ja-a1-u4":  ["identity", "work"],
    "ja-a1-u5":  ["travel"],
    "ja-a1-u6":  ["numbers"],
    "ja-a1-u7":  ["social"],
    "ja-a1-u8":  ["food", "numbers"],
    "ja-a1-u9":  ["work", "social"],
    "ja-a1-u10": ["food", "travel"],
    "ja-a1-u11": ["social"],
    "ja-a1-u12": ["nature", "social"],
    "ja-a1-u13": ["food", "social"],
    "ja-a1-u14": ["travel", "social"],
    "ja-a1-u15": ["travel", "work"],
    "ja-a1-u16": ["food", "social"],
    "ja-a1-u17": ["food", "shopping"],
    "ja-a1-u18": ["food", "social"],
    "ja-a1-u19": ["travel", "food"],
    "ja-a1-u20": ["nature", "numbers"],
    "ja-a1-u21": ["social"],
    "ja-a1-u22": ["social"],
    "ja-a1-u23": ["food", "shopping"],
    "ja-a1-u24": ["travel", "food"],
    "ja-a1-u25": ["food", "social"],
    "ja-a1-u26": ["identity", "work"],
    "ja-a1-u27": ["social"],

    // ── JAPANESE A2 ─────────────────────────────────────────────────────────────
    "ja-a2-u1":  ["work", "social"],
    "ja-a2-u2":  ["travel", "work"],
    "ja-a2-u3":  ["travel", "food"],
    "ja-a2-u4":  ["food", "social"],
    "ja-a2-u5":  ["work", "social"],
    "ja-a2-u6":  ["work", "social"],
    "ja-a2-u7":  ["work", "social"],
    "ja-a2-u8":  ["nature", "home"],
    "ja-a2-u9":  ["nature", "travel"],
    "ja-a2-u10": ["health", "work"],
    "ja-a2-u11": ["social", "work"],
    "ja-a2-u12": ["nature", "social"],
    "ja-a2-u13": ["food", "nature"],
    "ja-a2-u14": ["food", "travel"],
    "ja-a2-u15": ["work", "travel"],
    "ja-a2-u16": ["social", "identity"],
    "ja-a2-u17": ["work", "travel"],
    "ja-a2-u18": ["social", "work"],
    "ja-a2-u19": ["food", "shopping"],
    "ja-a2-u20": ["home", "social"],

    // ── KOREAN A1 ───────────────────────────────────────────────────────────────
    "ko-a1-u1":  ["greetings", "identity"],
    "ko-a1-u2":  ["identity", "work"],
    "ko-a1-u3":  ["identity", "social"],
    "ko-a1-u4":  ["numbers", "social"],
    "ko-a1-u5":  ["numbers"],
    "ko-a1-u6":  ["identity", "social"],
    "ko-a1-u7":  ["social"],
    "ko-a1-u8":  ["food", "social"],
    "ko-a1-u9":  ["identity", "nature"],
    "ko-a1-u10": ["social"],
    "ko-a1-u11": ["food", "social"],
    "ko-a1-u12": ["travel", "social"],
    "ko-a1-u13": ["nature", "social"],
    "ko-a1-u14": ["social"],
    "ko-a1-u15": ["shopping", "social"],
    "ko-a1-u16": ["travel", "food"],
    "ko-a1-u17": ["social"],
    "ko-a1-u18": ["travel", "social"],
    "ko-a1-u19": ["food", "social"],
    "ko-a1-u20": ["social", "travel"],
    "ko-a1-u21": ["social"],

    // ── KOREAN A2 ───────────────────────────────────────────────────────────────
    "ko-a2-u1":  ["travel", "work"],
    "ko-a2-u2":  ["work", "travel"],
    "ko-a2-u3":  ["social", "work"],
    "ko-a2-u4":  ["work", "social"],
    "ko-a2-u5":  ["work", "health"],
    "ko-a2-u6":  ["food", "social"],
    "ko-a2-u7":  ["social"],
    "ko-a2-u8":  ["travel", "social"],
    "ko-a2-u9":  ["nature", "social"],
    "ko-a2-u10": ["social"],
    "ko-a2-u11": ["food", "travel"],
    "ko-a2-u12": ["work", "social"],
    "ko-a2-u13": ["home", "social"],
    "ko-a2-u14": ["social"],
    "ko-a2-u15": ["food", "identity"],
    "ko-a2-u16": ["work", "social"],
    "ko-a2-u17": ["social", "identity"],
    "ko-a2-u18": ["social"],
    "ko-a2-u19": ["work", "shopping"],
    "ko-a2-u20": ["social", "work"],

    // ── French B1 ──────────────────────────────────────────────────────────────
    "fr-b1-u1":  ["work", "social"],
    "fr-b1-u2":  ["nature", "social"],
    "fr-b1-u3":  ["culture", "social"],
    "fr-b1-u4":  ["social", "culture"],
    "fr-b1-u5":  ["work", "social"],
    "fr-b1-u6":  ["social", "work"],
    "fr-b1-u7":  ["work", "social"],
    "fr-b1-u8":  ["social", "work"],
    "fr-b1-u9":  ["social", "work"],
    "fr-b1-u10": ["social", "work"],
    "fr-b1-u11": ["culture", "work"],
    "fr-b1-u12": ["work", "culture"],

    // ── Spanish B1 ─────────────────────────────────────────────────────────────
    "es-b1-u1":  ["social", "culture"],
    "es-b1-u2":  ["social", "identity"],
    "es-b1-u3":  ["work", "travel"],
    "es-b1-u4":  ["social", "work"],
    "es-b1-u5":  ["shopping", "travel"],
    "es-b1-u6":  ["social", "nature"],
    "es-b1-u7":  ["social", "work"],
    "es-b1-u8":  ["social", "work"],
    "es-b1-u9":  ["social", "culture"],
    "es-b1-u10": ["work", "social"],
    "es-b1-u11": ["work", "culture"],

    // ── Italian B1 ─────────────────────────────────────────────────────────────
    "it-b1-u1":  ["social", "culture"],
    "it-b1-u2":  ["work", "social"],
    "it-b1-u3":  ["culture", "social"],
    "it-b1-u4":  ["culture", "identity"],
    "it-b1-u5":  ["social", "work"],
    "it-b1-u6":  ["social", "nature"],
    "it-b1-u7":  ["social", "work"],
    "it-b1-u8":  ["social", "culture"],
    "it-b1-u9":  ["culture", "social"],
    "it-b1-u10": ["social", "work"],
    "it-b1-u11": ["work", "culture"],

    // ── Korean B1 ──────────────────────────────────────────────────────────────
    "ko-b1-u1":  ["social", "work"],
    "ko-b1-u2":  ["social", "health"],
    "ko-b1-u3":  ["identity", "social"],
    "ko-b1-u4":  ["work", "social"],
    "ko-b1-u5":  ["social", "work"],
    "ko-b1-u6":  ["work", "health"],
    "ko-b1-u7":  ["travel", "work"],
    "ko-b1-u8":  ["work", "culture"],
    "ko-b1-u9":  ["social", "work"],
    "ko-b1-u10": ["social", "identity"],
    "ko-b1-u11": ["work", "social"],
    "ko-b1-u12": ["work", "culture"],

    // ── French B2 ──────────────────────────────────────────────────────────────
    "fr-b2-u1":  ["social", "culture"],
    "fr-b2-u2":  ["work", "social"],
    "fr-b2-u3":  ["culture", "social"],
    "fr-b2-u4":  ["social", "work"],
    "fr-b2-u5":  ["work", "culture"],
    "fr-b2-u6":  ["social", "work"],
    "fr-b2-u7":  ["work", "culture"],
    "fr-b2-u8":  ["social", "culture"],
    "fr-b2-u9":  ["culture", "identity"],
    "fr-b2-u10": ["work", "culture"],
    "fr-b2-u11": ["work", "social"],
    "fr-b2-u12": ["work", "culture"],

    // ── Spanish B2 ─────────────────────────────────────────────────────────────
    "es-b2-u1":  ["social", "work"],
    "es-b2-u2":  ["work", "social"],
    "es-b2-u3":  ["social", "culture"],
    "es-b2-u4":  ["social", "work"],
    "es-b2-u5":  ["work", "social"],
    "es-b2-u6":  ["social", "work"],
    "es-b2-u7":  ["social", "culture"],
    "es-b2-u8":  ["work", "culture"],
    "es-b2-u9":  ["social", "work"],
    "es-b2-u10": ["work", "culture"],
    "es-b2-u11": ["social", "work"],
    "es-b2-u12": ["work", "social"],
    "es-b2-u13": ["social", "culture"],

    // ── Italian B2 ─────────────────────────────────────────────────────────────
    "it-b2-u1":  ["social", "culture"],
    "it-b2-u2":  ["work", "social"],
    "it-b2-u3":  ["culture", "social"],
    "it-b2-u4":  ["social", "work"],
    "it-b2-u5":  ["work", "social"],
    "it-b2-u6":  ["social", "work"],
    "it-b2-u7":  ["work", "social"],
    "it-b2-u8":  ["social", "culture"],
    "it-b2-u9":  ["social", "culture"],
    "it-b2-u10": ["work", "culture"],
    "it-b2-u11": ["work", "social"],
    "it-b2-u12": ["work", "culture"],

    // ── Korean B2 ──────────────────────────────────────────────────────────────
    "ko-b2-u1":  ["work", "social"],
    "ko-b2-u2":  ["social", "work"],
    "ko-b2-u3":  ["work", "culture"],
    "ko-b2-u4":  ["work", "social"],
    "ko-b2-u5":  ["social", "work"],
    "ko-b2-u6":  ["work", "social"],
    "ko-b2-u7":  ["social", "identity"],
    "ko-b2-u8":  ["work", "culture"],
    "ko-b2-u9":  ["work", "culture"],
    "ko-b2-u10": ["identity", "culture"],
    "ko-b2-u11": ["work", "social"],
    "ko-b2-u12": ["work", "social"],
    "ko-b2-u13": ["work", "culture"],
}
