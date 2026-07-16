-- ============================================================
-- Migration: per-skill daily stats + per-language goal plans
--
-- Adds the storage for the "goal transparency" cluster:
--   1. daily_skill_stats — CO/CE/EO/EE attempt counters per user/lang/day,
--      written via the additive increment_skill_stat RPC (same delta model
--      as daily_stats / increment_daily_stat).
--   2. goal_plans — one optional time-bound target per user per language
--      (target CEFR level, optional target date, optional minutes/day).
--
-- IDEMPOTENCY: CREATE TABLE IF NOT EXISTS, DO-block-wrapped policies,
-- CREATE OR REPLACE for the RPC — safe to re-run.
-- ============================================================

-- ============================================================
-- TABLE: daily_skill_stats
-- ============================================================

CREATE TABLE IF NOT EXISTS public.daily_skill_stats (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lang_id     TEXT NOT NULL,
    study_date  DATE NOT NULL,
    skill       TEXT NOT NULL CHECK (skill IN ('CO', 'CE', 'EO', 'EE')),
    total       INTEGER NOT NULL DEFAULT 0,
    correct     INTEGER NOT NULL DEFAULT 0,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_daily_skill_stat UNIQUE (user_id, lang_id, study_date, skill)
);

CREATE INDEX IF NOT EXISTS idx_daily_skill_stats_user_lang
    ON public.daily_skill_stats (user_id, lang_id, study_date);

ALTER TABLE public.daily_skill_stats ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN CREATE POLICY "daily_skill_stats: owner all" ON public.daily_skill_stats FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- ============================================================
-- RPC: increment_skill_stat (additive upsert, identity-guarded —
-- mirrors the hardened increment_daily_stat)
-- NOTE: no correct <= total CHECK constraint — additive deltas make
-- such invariants unenforceable row-by-row (see F-20 in
-- 20260420000001_security_and_constraints.sql).
-- ============================================================

CREATE OR REPLACE FUNCTION public.increment_skill_stat(
    p_user_id  UUID,
    p_lang_id  TEXT,
    p_date     DATE,
    p_skill    TEXT,
    p_total    INTEGER DEFAULT 0,
    p_correct  INTEGER DEFAULT 0
) RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
    IF auth.uid() IS NOT NULL AND auth.uid() != p_user_id THEN
        RAISE EXCEPTION 'Forbidden';
    END IF;
    INSERT INTO daily_skill_stats (user_id, lang_id, study_date, skill, total, correct)
    VALUES (p_user_id, p_lang_id, p_date, p_skill, p_total, p_correct)
    ON CONFLICT (user_id, lang_id, study_date, skill) DO UPDATE SET
        total      = daily_skill_stats.total   + EXCLUDED.total,
        correct    = daily_skill_stats.correct + EXCLUDED.correct,
        updated_at = now();
END;
$$;

-- ============================================================
-- TABLE: goal_plans
-- One optional time-bound target per user per language. The topic goal
-- (profiles.learning_goal) stays global; the CEFR target is per-language.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.goal_plans (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lang_id       TEXT NOT NULL,
    target_level  cefr_level,
    target_date   DATE,
    daily_minutes INTEGER CHECK (daily_minutes IS NULL OR daily_minutes > 0),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_goal_plan UNIQUE (user_id, lang_id)
);

ALTER TABLE public.goal_plans ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN CREATE POLICY "goal_plans: owner all" ON public.goal_plans FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
