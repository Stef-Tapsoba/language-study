-- ============================================================
-- language-study — Complete Supabase Database Schema
-- Generated: 2026-04-02
-- Authors: Architect Agent + Backend Engineer Agent
--
-- Design decisions:
--   D-01  Content stays in TypeScript bundle (not DB) — same for all users
--   D-02  learning_goal: TEXT + check constraint (not enum) — extensible
--   D-03  lang_id and CEFR levels: TEXT + check constraints (not lookup tables)
--   D-04  Two reinforcement sub-tables (grammar vs sections) — different granularity
--   D-05  user_preferences table for cross-device synced UI prefs
--   D-06  study_sessions for plateau detection
--   D-07  exercise_attempts for per-item accuracy and weak-item detection
--   D-08  ls:onboarded stays localStorage — ephemeral UI state
--   D-09  ls:review-dismissed stays localStorage — per-day, per-device
--   D-10  C2 level included in constraint for future-proofing
-- ============================================================

-- ============================================================
-- PREREQUISITES
-- ============================================================
-- Requires: pg_extensions uuid-ossp (enabled by default on Supabase)
-- All tables live in the public schema.
-- auth.users is managed by Supabase Auth — never modified here.

-- ============================================================
-- CUSTOM DOMAINS
-- ============================================================

-- Reusable domain for language IDs (es, fr, it, ja, ko — extensible via ALTER DOMAIN)
DO $$ BEGIN
    CREATE DOMAIN lang_id AS TEXT CHECK (VALUE ~ '^[a-z]{2,5}$');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Reusable domain for CEFR levels
DO $$ BEGIN
    CREATE DOMAIN cefr_level AS TEXT CHECK (VALUE IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2'));
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- ============================================================
-- SHARED TRIGGER: set_updated_at
-- ============================================================

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

-- ============================================================
-- TABLE 1: profiles
-- One row per auth user. Auto-created via trigger on auth.users INSERT.
-- ============================================================
CREATE TABLE public.profiles (
    id                UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name      TEXT,
    selected_language lang_id,               -- active language in dashboard; NULL = not chosen yet
    -- Learning goal (extensible — TEXT + check, not enum; see D-02)
    learning_goal     TEXT        CHECK (
                                      learning_goal IN ('traveller', 'social', 'culture', 'general')
                                  ),
    created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX idx_profiles_selected_language ON public.profiles (selected_language)
    WHERE selected_language IS NOT NULL;

-- Auto-create profile on new auth user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
    INSERT INTO public.profiles (id, display_name)
    VALUES (NEW.id, NEW.raw_user_meta_data->>'display_name')
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- ============================================================
-- TABLE 2: user_language_levels
-- CEFR level per (user, language). One row per language started.
-- ============================================================
CREATE TABLE public.user_language_levels (
    id          BIGSERIAL   PRIMARY KEY,
    user_id     UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id     lang_id     NOT NULL,
    level       cefr_level  NOT NULL DEFAULT 'A1',
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_user_language UNIQUE (user_id, lang_id)
);

CREATE TRIGGER user_language_levels_updated_at
    BEFORE UPDATE ON public.user_language_levels
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX idx_ull_user_id ON public.user_language_levels (user_id);


-- ============================================================
-- TABLE 3: lesson_completions
-- One row per content item completed. content_type discriminates the item type.
-- content_id is an opaque string matching the TS content item .id field (no FK — see D-01).
-- ============================================================
CREATE TABLE public.lesson_completions (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    content_type    TEXT        NOT NULL CHECK (
                                    content_type IN (
                                        'grammar', 'vocab', 'verb',
                                        'reading', 'listening', 'culture', 'speaking'
                                    )
                                ),
    content_id      TEXT        NOT NULL,   -- opaque TS content item id
    completed_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_lesson_completion UNIQUE (user_id, lang_id, content_type, content_id)
);

CREATE INDEX idx_lc_user_lang ON public.lesson_completions (user_id, lang_id);
CREATE INDEX idx_lc_user_lang_type ON public.lesson_completions (user_id, lang_id, content_type);


-- ============================================================
-- TABLE 4: mastered_units
-- One row per unit where the user passed the mini-test.
-- unit_id is an opaque string matching LessonUnit.id (no FK — see D-01).
-- ============================================================
CREATE TABLE public.mastered_units (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    unit_id         TEXT        NOT NULL,   -- opaque LessonUnit.id
    mastered_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_mastered_unit UNIQUE (user_id, lang_id, unit_id)
);

CREATE INDEX idx_mu_user_lang ON public.mastered_units (user_id, lang_id);


-- ============================================================
-- TABLE 5a: reinforcement_grammar
-- Per grammar-lesson-level reinforcement completion (see D-04).
-- One row = one grammar lesson's paired exercise completed within a unit.
-- ============================================================
CREATE TABLE public.reinforcement_grammar (
    id                  BIGSERIAL   PRIMARY KEY,
    user_id             UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id             lang_id     NOT NULL,
    unit_id             TEXT        NOT NULL,             -- parent unit
    grammar_lesson_id   TEXT        NOT NULL,             -- specific GrammarLesson.id
    completed_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_reinforcement_grammar
        UNIQUE (user_id, lang_id, unit_id, grammar_lesson_id)
);

CREATE INDEX idx_rg_user_lang_unit ON public.reinforcement_grammar (user_id, lang_id, unit_id);


-- ============================================================
-- TABLE 5b: reinforcement_sections
-- Section-level reinforcement (vocab | verbs). Grammar uses its own table (see D-04).
-- ============================================================
CREATE TABLE public.reinforcement_sections (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    unit_id         TEXT        NOT NULL,
    section         TEXT        NOT NULL CHECK (section IN ('vocab', 'verbs')),
    completed_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_reinforcement_section
        UNIQUE (user_id, lang_id, unit_id, section)
);

CREATE INDEX idx_rs_user_lang_unit ON public.reinforcement_sections (user_id, lang_id, unit_id);


-- ============================================================
-- TABLE 6: srs_cards
-- SM-2 spaced-repetition state per (user, language, vocab item).
-- Fields map 1:1 to @myorg/srs SRSCardState.
-- ============================================================
CREATE TABLE public.srs_cards (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    vocab_id        TEXT        NOT NULL,                  -- opaque VocabItem.id
    ease_factor     REAL        NOT NULL DEFAULT 2.5,      -- SM-2 E-Factor; floor 1.3
    review_count    INTEGER     NOT NULL DEFAULT 0,
    streak          INTEGER     NOT NULL DEFAULT 0,        -- consecutive correct answers
    next_review_at  BIGINT      NOT NULL DEFAULT 0,        -- ms epoch; 0 = never reviewed = immediately due
    interval_days   REAL        NOT NULL DEFAULT 0,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_srs_card UNIQUE (user_id, lang_id, vocab_id),
    CONSTRAINT chk_ease_factor CHECK (ease_factor >= 1.3),
    CONSTRAINT chk_review_count CHECK (review_count >= 0),
    CONSTRAINT chk_streak CHECK (streak >= 0),
    CONSTRAINT chk_interval_days CHECK (interval_days >= 0)
);

CREATE TRIGGER srs_cards_updated_at
    BEFORE UPDATE ON public.srs_cards
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX idx_srs_user_lang ON public.srs_cards (user_id, lang_id);
-- Due-card queries (only cards that have a scheduled review)
CREATE INDEX idx_srs_due ON public.srs_cards (user_id, lang_id, next_review_at)
    WHERE next_review_at > 0;


-- ============================================================
-- TABLE 7: daily_stats
-- Aggregated study metrics per (user, language, calendar date).
-- Upserted with atomic increments — never full replacement (avoids lost-update races).
-- ============================================================
CREATE TABLE public.daily_stats (
    id          BIGSERIAL   PRIMARY KEY,
    user_id     UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id     lang_id     NOT NULL,
    study_date  DATE        NOT NULL,                    -- YYYY-MM-DD from client local timezone
    reviewed    INTEGER     NOT NULL DEFAULT 0 CHECK (reviewed >= 0),
    correct     INTEGER     NOT NULL DEFAULT 0 CHECK (correct >= 0),
    acts        INTEGER     NOT NULL DEFAULT 0 CHECK (acts >= 0),
    q_total     INTEGER     NOT NULL DEFAULT 0 CHECK (q_total >= 0),
    q_correct   INTEGER     NOT NULL DEFAULT 0 CHECK (q_correct >= 0),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_daily_stat UNIQUE (user_id, lang_id, study_date),
    CONSTRAINT chk_correct_lte_reviewed CHECK (correct <= reviewed),
    CONSTRAINT chk_q_correct_lte_q_total CHECK (q_correct <= q_total)
);

CREATE TRIGGER daily_stats_updated_at
    BEFORE UPDATE ON public.daily_stats
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX idx_ds_user_lang ON public.daily_stats (user_id, lang_id);
-- Streak queries walk backwards in date order
CREATE INDEX idx_ds_user_lang_date ON public.daily_stats (user_id, lang_id, study_date DESC);


-- ============================================================
-- TABLE 8: user_preferences
-- Cross-device synced UI preferences (TTS autoplay, theme).
-- JSONB column — new preference keys require no schema migration (see D-05).
-- ============================================================
CREATE TABLE public.user_preferences (
    user_id     UUID        PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    preferences JSONB       NOT NULL DEFAULT '{"tts_autoplay": true, "theme": "system"}'::jsonb,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
    -- Current expected keys:
    --   tts_autoplay: boolean   (ls:tts-autoplay)
    --   theme: "system"|"light"|"dark"
    -- Add new keys without ALTER TABLE.
);

CREATE TRIGGER user_preferences_updated_at
    BEFORE UPDATE ON public.user_preferences
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX idx_up_preferences ON public.user_preferences USING GIN (preferences);


-- ============================================================
-- TABLE 9: study_sessions
-- One row per study session. Powers plateau detection (see D-06).
-- ============================================================
CREATE TABLE public.study_sessions (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    -- 'flashcard' | 'grammar-drill' | 'verb-drill' | 'reading' | 'listening' |
    -- 'culture' | 'speaking' | 'placement-test' | 'level-test' | 'unit-test'
    activity_type   TEXT        NOT NULL,
    content_ref     TEXT,                               -- optional: unit_id, passage_id, etc.
    started_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    ended_at        TIMESTAMPTZ,                        -- NULL = session abandoned
    items_attempted INTEGER     NOT NULL DEFAULT 0 CHECK (items_attempted >= 0),
    items_correct   INTEGER     NOT NULL DEFAULT 0 CHECK (items_correct >= 0),
    CONSTRAINT chk_session_correct CHECK (items_correct <= items_attempted),
    CONSTRAINT chk_session_times CHECK (ended_at IS NULL OR ended_at >= started_at)
);

CREATE INDEX idx_ss_user_lang ON public.study_sessions (user_id, lang_id);
CREATE INDEX idx_ss_user_lang_started ON public.study_sessions (user_id, lang_id, started_at DESC);
-- Plateau detection: only completed sessions
CREATE INDEX idx_ss_completed ON public.study_sessions (user_id, lang_id, started_at DESC)
    WHERE ended_at IS NOT NULL;


-- ============================================================
-- TABLE 10: exercise_attempts
-- Append-only log of individual item attempts (see D-07).
-- Powers per-item accuracy, weak-item detection, EO/EE self-assessment.
-- ============================================================
CREATE TABLE public.exercise_attempts (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    session_id      BIGINT      REFERENCES public.study_sessions(id) ON DELETE SET NULL,
    content_type    TEXT        NOT NULL CHECK (
                                    content_type IN (
                                        'grammar', 'vocab', 'verb',
                                        'reading', 'listening', 'culture', 'speaking'
                                    )
                                ),
    content_id      TEXT        NOT NULL,
    correct         BOOLEAN,                            -- NULL for self-assessed
    self_rating     SMALLINT    CHECK (self_rating BETWEEN 1 AND 3),  -- EO/EE: 1–3 scale
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT chk_attempt_grading CHECK (
        NOT (correct IS NOT NULL AND self_rating IS NOT NULL)
    )
);

CREATE INDEX idx_ea_user_lang_wrong ON public.exercise_attempts (user_id, lang_id, content_type, content_id)
    WHERE correct = FALSE;
CREATE INDEX idx_ea_user_lang_time ON public.exercise_attempts (user_id, lang_id, created_at DESC);
CREATE INDEX idx_ea_session ON public.exercise_attempts (session_id)
    WHERE session_id IS NOT NULL;


-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE public.profiles               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_language_levels   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_completions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mastered_units         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reinforcement_grammar  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reinforcement_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.srs_cards             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_stats           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercise_attempts     ENABLE ROW LEVEL SECURITY;

-- profiles: split policies (different column for owner check)
CREATE POLICY "profiles: owner read"   ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles: owner insert" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles: owner update" ON public.profiles FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- All other tables: single owner-all policy
CREATE POLICY "user_language_levels: owner all"   ON public.user_language_levels   FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "lesson_completions: owner all"     ON public.lesson_completions     FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "mastered_units: owner all"         ON public.mastered_units         FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "reinforcement_grammar: owner all"  ON public.reinforcement_grammar  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "reinforcement_sections: owner all" ON public.reinforcement_sections FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "srs_cards: owner all"              ON public.srs_cards             FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "daily_stats: owner all"            ON public.daily_stats           FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "user_preferences: owner all"       ON public.user_preferences      FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "study_sessions: owner all"         ON public.study_sessions        FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "exercise_attempts: owner all"      ON public.exercise_attempts     FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);


-- ============================================================
-- HELPER RPC: reset_language_data
-- Atomically deletes all user data for a language in one round-trip.
-- Called by IProgressStorage.resetLanguage().
-- ============================================================
CREATE OR REPLACE FUNCTION public.reset_language_data(p_user_id UUID, p_lang_id TEXT)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
    DELETE FROM lesson_completions     WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM mastered_units         WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM reinforcement_grammar  WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM reinforcement_sections WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM srs_cards              WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM daily_stats            WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM user_language_levels   WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM study_sessions         WHERE user_id = p_user_id AND lang_id = p_lang_id;
    -- exercise_attempts: lang_id-scoped delete via session_id cascade is handled above
    DELETE FROM exercise_attempts      WHERE user_id = p_user_id AND lang_id = p_lang_id;
END;
$$;


-- ============================================================
-- HELPER RPC: increment_daily_stat
-- Atomically increments daily_stats counters. Avoids lost-update races from
-- multiple tabs. Called by SupabaseStatsStorage on every study event.
-- ============================================================
CREATE OR REPLACE FUNCTION public.increment_daily_stat(
    p_user_id   UUID,
    p_lang_id   TEXT,
    p_date      DATE,
    p_reviewed  INTEGER DEFAULT 0,
    p_correct   INTEGER DEFAULT 0,
    p_acts      INTEGER DEFAULT 0,
    p_q_total   INTEGER DEFAULT 0,
    p_q_correct INTEGER DEFAULT 0
) RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
    INSERT INTO daily_stats (user_id, lang_id, study_date, reviewed, correct, acts, q_total, q_correct)
    VALUES (p_user_id, p_lang_id, p_date, p_reviewed, p_correct, p_acts, p_q_total, p_q_correct)
    ON CONFLICT (user_id, lang_id, study_date) DO UPDATE SET
        reviewed  = daily_stats.reviewed  + EXCLUDED.reviewed,
        correct   = daily_stats.correct   + EXCLUDED.correct,
        acts      = daily_stats.acts      + EXCLUDED.acts,
        q_total   = daily_stats.q_total   + EXCLUDED.q_total,
        q_correct = daily_stats.q_correct + EXCLUDED.q_correct,
        updated_at = now();
END;
$$;


-- ============================================================
-- WHAT STAYS CLIENT-SIDE (not in DB)
-- ============================================================
-- Grammar lessons, vocab, verbs, units, passages, exercises, prompts → TypeScript bundle
-- Reading/listening/culture/speaking content                          → TypeScript bundle
-- Placement test + level test questions                               → TypeScript bundle
-- ls:onboarded:{langId}   (onboarding card dismissed)                → localStorage only
-- ls:review-dismissed:{langId}:{date} (break prompt dismissed today) → localStorage only
-- In-progress drill state (current question index, partial score)    → React state (transient)
-- SRS write-through cache (_cache in store/srs.ts)                   → in-memory
-- Unit topic tags (unitTags.ts)                                       → TypeScript bundle until
--                                                                        content moves to DB
-- ============================================================
