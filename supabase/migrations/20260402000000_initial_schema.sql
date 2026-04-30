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
--   D-05  user_preferences table: JSONB column for cross-device synced UI prefs
--   D-06  study_sessions for plateau detection
--   D-07  exercise_attempts for per-item accuracy and weak-item detection
--   D-08  ls:review-dismissed stays localStorage — per-day, per-device
--   D-09  C2 level included in constraint for future-proofing
--
-- IDEMPOTENCY: all CREATE TABLE / INDEX / TRIGGER / POLICY statements use
-- IF NOT EXISTS or DROP-then-CREATE so this migration is safe to re-run on
-- preview branches that already have the schema applied.
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

DO $$ BEGIN
    CREATE DOMAIN lang_id AS TEXT CHECK (VALUE ~ '^[a-z]{2,5}$');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE DOMAIN cefr_level AS TEXT CHECK (VALUE IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2'));
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- ============================================================
-- SHARED TRIGGER FUNCTION: set_updated_at
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
-- ============================================================

CREATE TABLE IF NOT EXISTS public.profiles (
    id                UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name      TEXT,
    selected_language lang_id,
    learning_goal     TEXT        CHECK (
                                      learning_goal IN ('traveller', 'social', 'culture', 'general')
                                  ),
    created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE OR REPLACE TRIGGER profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_profiles_selected_language ON public.profiles (selected_language)
    WHERE selected_language IS NOT NULL;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
    INSERT INTO public.profiles (id, display_name)
    VALUES (NEW.id, NEW.raw_user_meta_data->>'display_name')
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- ============================================================
-- TABLE 2: user_language_levels
-- ============================================================

CREATE TABLE IF NOT EXISTS public.user_language_levels (
    id          BIGSERIAL   PRIMARY KEY,
    user_id     UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id     lang_id     NOT NULL,
    level       cefr_level  NOT NULL DEFAULT 'A1',
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_user_language UNIQUE (user_id, lang_id)
);

CREATE OR REPLACE TRIGGER user_language_levels_updated_at
    BEFORE UPDATE ON public.user_language_levels
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_ull_user_id ON public.user_language_levels (user_id);


-- ============================================================
-- TABLE 3: lesson_completions
-- ============================================================

CREATE TABLE IF NOT EXISTS public.lesson_completions (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    content_type    TEXT        NOT NULL CHECK (
                                    content_type IN (
                                        'grammar', 'vocab', 'verb',
                                        'reading', 'listening', 'culture', 'speaking'
                                    )
                                ),
    content_id      TEXT        NOT NULL,
    completed_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_lesson_completion UNIQUE (user_id, lang_id, content_type, content_id)
);

CREATE INDEX IF NOT EXISTS idx_lc_user_lang      ON public.lesson_completions (user_id, lang_id);
CREATE INDEX IF NOT EXISTS idx_lc_user_lang_type ON public.lesson_completions (user_id, lang_id, content_type);


-- ============================================================
-- TABLE 4: mastered_units
-- ============================================================

CREATE TABLE IF NOT EXISTS public.mastered_units (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    unit_id         TEXT        NOT NULL,
    mastered_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_mastered_unit UNIQUE (user_id, lang_id, unit_id)
);

CREATE INDEX IF NOT EXISTS idx_mu_user_lang ON public.mastered_units (user_id, lang_id);


-- ============================================================
-- TABLE 5a: reinforcement_grammar
-- ============================================================

CREATE TABLE IF NOT EXISTS public.reinforcement_grammar (
    id                  BIGSERIAL   PRIMARY KEY,
    user_id             UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id             lang_id     NOT NULL,
    unit_id             TEXT        NOT NULL,
    grammar_lesson_id   TEXT        NOT NULL,
    completed_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_reinforcement_grammar
        UNIQUE (user_id, lang_id, unit_id, grammar_lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_rg_user_lang_unit ON public.reinforcement_grammar (user_id, lang_id, unit_id);


-- ============================================================
-- TABLE 5b: reinforcement_sections
-- ============================================================

CREATE TABLE IF NOT EXISTS public.reinforcement_sections (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    unit_id         TEXT        NOT NULL,
    section         TEXT        NOT NULL CHECK (section IN ('vocab', 'verbs')),
    completed_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_reinforcement_section
        UNIQUE (user_id, lang_id, unit_id, section)
);

CREATE INDEX IF NOT EXISTS idx_rs_user_lang_unit ON public.reinforcement_sections (user_id, lang_id, unit_id);


-- ============================================================
-- TABLE 6: srs_cards
-- ============================================================

CREATE TABLE IF NOT EXISTS public.srs_cards (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    vocab_id        TEXT        NOT NULL,
    ease_factor     REAL        NOT NULL DEFAULT 2.5,
    review_count    INTEGER     NOT NULL DEFAULT 0,
    streak          INTEGER     NOT NULL DEFAULT 0,
    next_review_at  BIGINT      NOT NULL DEFAULT 0,
    interval_days   REAL        NOT NULL DEFAULT 0,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_srs_card UNIQUE (user_id, lang_id, vocab_id),
    CONSTRAINT chk_ease_factor  CHECK (ease_factor >= 1.3),
    CONSTRAINT chk_review_count CHECK (review_count >= 0),
    CONSTRAINT chk_streak       CHECK (streak >= 0),
    CONSTRAINT chk_interval_days CHECK (interval_days >= 0)
);

CREATE OR REPLACE TRIGGER srs_cards_updated_at
    BEFORE UPDATE ON public.srs_cards
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_srs_user_lang ON public.srs_cards (user_id, lang_id);
CREATE INDEX IF NOT EXISTS idx_srs_due ON public.srs_cards (user_id, lang_id, next_review_at)
    WHERE next_review_at > 0;


-- ============================================================
-- TABLE 7: daily_stats
-- ============================================================

CREATE TABLE IF NOT EXISTS public.daily_stats (
    id          BIGSERIAL   PRIMARY KEY,
    user_id     UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id     lang_id     NOT NULL,
    study_date  DATE        NOT NULL,
    reviewed    INTEGER     NOT NULL DEFAULT 0 CHECK (reviewed >= 0),
    correct     INTEGER     NOT NULL DEFAULT 0 CHECK (correct >= 0),
    acts        INTEGER     NOT NULL DEFAULT 0 CHECK (acts >= 0),
    q_total     INTEGER     NOT NULL DEFAULT 0 CHECK (q_total >= 0),
    q_correct   INTEGER     NOT NULL DEFAULT 0 CHECK (q_correct >= 0),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_daily_stat UNIQUE (user_id, lang_id, study_date)
);

CREATE OR REPLACE TRIGGER daily_stats_updated_at
    BEFORE UPDATE ON public.daily_stats
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_ds_user_lang      ON public.daily_stats (user_id, lang_id);
CREATE INDEX IF NOT EXISTS idx_ds_user_lang_date ON public.daily_stats (user_id, lang_id, study_date DESC);


-- ============================================================
-- TABLE 8: user_preferences
-- JSONB column — add new preference keys without ALTER TABLE.
-- Current keys:
--   tts_autoplay         boolean  (ls:tts-autoplay)
--   onboarded_languages  string[] (ls:onboarded:{langId})
--   theme                "system"|"light"|"dark"
-- ============================================================

CREATE TABLE IF NOT EXISTS public.user_preferences (
    user_id     UUID        PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    preferences JSONB       NOT NULL DEFAULT '{"tts_autoplay": true, "onboarded_languages": [], "theme": "system"}'::jsonb,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE OR REPLACE TRIGGER user_preferences_updated_at
    BEFORE UPDATE ON public.user_preferences
    FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_up_preferences ON public.user_preferences USING GIN (preferences);


-- ============================================================
-- TABLE 9: study_sessions
-- ============================================================

CREATE TABLE IF NOT EXISTS public.study_sessions (
    id              BIGSERIAL   PRIMARY KEY,
    user_id         UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id         lang_id     NOT NULL,
    activity_type   TEXT        NOT NULL,
    content_ref     TEXT,
    started_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    ended_at        TIMESTAMPTZ,
    items_attempted INTEGER     NOT NULL DEFAULT 0 CHECK (items_attempted >= 0),
    items_correct   INTEGER     NOT NULL DEFAULT 0 CHECK (items_correct >= 0),
    CONSTRAINT chk_session_correct CHECK (items_correct <= items_attempted),
    CONSTRAINT chk_session_times   CHECK (ended_at IS NULL OR ended_at >= started_at)
);

CREATE INDEX IF NOT EXISTS idx_ss_user_lang         ON public.study_sessions (user_id, lang_id);
CREATE INDEX IF NOT EXISTS idx_ss_user_lang_started ON public.study_sessions (user_id, lang_id, started_at DESC);
CREATE INDEX IF NOT EXISTS idx_ss_completed         ON public.study_sessions (user_id, lang_id, started_at DESC)
    WHERE ended_at IS NOT NULL;


-- ============================================================
-- TABLE 10: exercise_attempts
-- ============================================================

CREATE TABLE IF NOT EXISTS public.exercise_attempts (
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
    correct         BOOLEAN,
    self_rating     SMALLINT    CHECK (self_rating BETWEEN 1 AND 3),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT chk_attempt_grading CHECK (
        NOT (correct IS NOT NULL AND self_rating IS NOT NULL)
    )
);

CREATE INDEX IF NOT EXISTS idx_ea_user_lang_wrong ON public.exercise_attempts (user_id, lang_id, content_type, content_id)
    WHERE correct = FALSE;
CREATE INDEX IF NOT EXISTS idx_ea_user_lang_time  ON public.exercise_attempts (user_id, lang_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ea_session         ON public.exercise_attempts (session_id)
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

-- profiles: split by operation (column name is id, not user_id)
DO $$ BEGIN CREATE POLICY "profiles: owner read"   ON public.profiles FOR SELECT USING (auth.uid() = id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "profiles: owner insert" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "profiles: owner update" ON public.profiles FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE POLICY "user_language_levels: owner all"   ON public.user_language_levels   FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "lesson_completions: owner all"     ON public.lesson_completions     FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "mastered_units: owner all"         ON public.mastered_units         FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "reinforcement_grammar: owner all"  ON public.reinforcement_grammar  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "reinforcement_sections: owner all" ON public.reinforcement_sections FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "srs_cards: owner all"              ON public.srs_cards             FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "daily_stats: owner all"            ON public.daily_stats           FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "user_preferences: owner all"       ON public.user_preferences      FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "study_sessions: owner all"         ON public.study_sessions        FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE POLICY "exercise_attempts: owner all"      ON public.exercise_attempts     FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;


-- ============================================================
-- HELPER RPC: reset_language_data
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
    DELETE FROM exercise_attempts      WHERE user_id = p_user_id AND lang_id = p_lang_id;
END;
$$;


-- ============================================================
-- HELPER RPC: increment_daily_stat
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
-- WHAT STAYS CLIENT-SIDE
-- ============================================================
-- Grammar/vocab/units/passages/exercises → TypeScript bundle (D-01)
-- ls:review-dismissed:{langId}:{date}    → localStorage (per-day, per-device, D-08)
-- ls:new-level:{langId}                  → localStorage (ephemeral inter-page signal)
-- In-progress drill state                → React state (transient)
-- SRS write-through cache                → in-memory
-- Unit topic tags (unitTags.ts)          → TypeScript bundle
-- ============================================================
