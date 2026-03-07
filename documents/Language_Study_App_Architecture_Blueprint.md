# Language Study App -- Architecture Blueprint

**Date: March 4, 2026**

------------------------------------------------------------------------

# 1. Product Philosophy

This app is designed as a **solo, structured, psychologically-aware
language institute for adults**.

Instead of organizing the product around simple lesson chains, the
architecture is built on:

> Core Language Engine + Skill Modules (CO/CE/EO/EE) + Cultural
> Immersion Layer + Cognitive Reinforcement Layer

The goal is deep, durable learning --- not streak-driven engagement.

------------------------------------------------------------------------

# 2. Core System (The Brain of the App)

## 2.1 User Model

Tracks:

-   CEFR Level (A1--C2)
-   Skill breakdown:
    -   CO (Listening)
    -   CE (Reading)
    -   EO (Speaking)
    -   EE (Writing)
-   Grammar mastery
-   Vocabulary retention strength
-   Pattern recognition progress
-   Immersion tolerance
-   Personal goals

This model powers adaptive sequencing and personalization.

------------------------------------------------------------------------

## 2.2 Learning Engine

Responsible for:

-   Spaced repetition scheduling
-   Retrieval practice prompts
-   Daily recall quizzes
-   Free recall sessions
-   Difficulty adjustment
-   Gradual immersion shifts

This engine feeds all skill modules.

------------------------------------------------------------------------

# 3. Skill Modules (French System Structure)

The app is structured around four balanced competencies:

  Skill   Description            Module Type
  ------- ---------------------- -------------
  CO      Compréhension Orale    Listening
  CE      Compréhension Écrite   Reading
  EO      Expression Orale       Speaking
  EE      Expression Écrite      Writing

------------------------------------------------------------------------

## 3.1 CO -- Listening Module

Content: - Native dialogues - Speeches - Interviews - Cultural audio -
News clips

Features: - Adjustable speed - Replay segments - Optional transcript
reveal - Comprehension questions - Inference questions - Free recall
summaries

------------------------------------------------------------------------

## 3.2 CE -- Reading Module

Content: - Articles - Cultural essays - Historical snippets -
Biographies - Dialect comparisons - Literature excerpts

Features: - Vocabulary highlighting - Context inference prompts -
Thematic vocabulary tracking - Comprehension tests - Reflection prompts

------------------------------------------------------------------------

## 3.3 EO -- Speaking Module

Structure: - Guided repetition - Scenario-based roleplays - Reaction
prompts - Debate questions (advanced levels) - Spontaneous speaking
prompts

Focus: structured oral tasks with feedback, not endless chatbot
interaction.

------------------------------------------------------------------------

## 3.4 EE -- Writing Module

Includes: - Sentence construction - Paragraph writing - Story prompts -
Opinion essays - Cultural reflections

Feedback Layers: 1. Grammar corrections 2. Style suggestions 3.
Vocabulary enrichment 4. Clarity analysis

------------------------------------------------------------------------

# 4. Cultural Immersion Module

Integrated but also accessible as a standalone section.

Includes: - History timelines - Regional maps - Dialect comparisons
(audio + text) - Political/cultural systems overview - Literature and
pop culture excerpts

Feeds into: - CE reading tasks - CO listening tasks - EO discussion
prompts - EE reflection writing

------------------------------------------------------------------------

# 5. Pattern Discovery System

Instead of immediate rule explanation:

1.  Present examples.
2.  Ask learners what they notice.
3.  Delay formal explanation.
4.  Confirm or refine hypothesis.

Encourages pattern recognition and long-term retention.

------------------------------------------------------------------------

# 6. Cognitive Reinforcement Layer

Invisible but active across modules:

-   Daily retrieval quizzes
-   Weekly free recall
-   Thematic recall exercises
-   "Explain yesterday's rule" prompts
-   Cross-skill reinforcement

Focus: memory strength over lesson completion.

------------------------------------------------------------------------

# 7. Immersion Progression Model

  Level   Interface Language
  ------- ------------------------
  A1      Mostly native language
  A2      Balanced
  B1      Mostly target language
  B2+     Fully target language

Gradual exposure builds cognitive resilience.

------------------------------------------------------------------------

# 8. Technical Architecture Overview

## Frontend

-   React + TypeScript
-   Modular skill dashboards
-   Dynamic content renderer

## Backend

-   User model service
-   Skill tracking service
-   Content service
-   Assessment engine
-   Isolated AI/ML microservice

## AI/ML Layer

Used selectively for: - Writing evaluation - Speech scoring - Adaptive
difficulty calibration - Prompt generation

Designed to be modular and replaceable.

------------------------------------------------------------------------

# 9. Monetization Model -- Freemium with Skill Gating

Free Tier: - Limited CE + CO content - Basic retrieval practice -
Limited daily tasks

Premium Tier: - Full EO (Speaking) module - Full EE (Writing) module -
Advanced immersion levels - Detailed feedback layers - Expanded cultural
library - Advanced analytics & progress modeling

Skill gating aligns revenue with high-compute and high-feedback
features.

------------------------------------------------------------------------

# 10. Phased Development Strategy

## Phase 1

-   Core engine
-   CE + CO modules
-   Basic writing correction
-   Cultural reading library

## Phase 2

-   Speaking evaluation
-   Advanced writing feedback
-   Dialect modules

## Phase 3

-   Deep adaptive immersion
-   Advanced recall system
-   Goal-based dynamic learning paths

------------------------------------------------------------------------

# Vision Summary

A structured, cognitively-designed, emotionally supportive self-study
language institute for adults.

Not gamified.\
Not chaotic.\
Not streak-obsessed.

Built for durable mastery.
