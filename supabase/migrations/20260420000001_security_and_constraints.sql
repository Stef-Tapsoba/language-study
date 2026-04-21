-- ============================================================
-- F-12: Add caller identity check to increment_daily_stat RPC
-- Prevents a valid JWT from writing to another user's stats row.
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
    IF auth.uid() IS NOT NULL AND auth.uid() != p_user_id THEN
        RAISE EXCEPTION 'Forbidden';
    END IF;
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
-- F-20: Drop over-eager CHECK constraints on daily_stats
-- These invariants (correct <= reviewed, q_correct <= q_total)
-- cannot be maintained with additive delta RPCs because each
-- increment fires independently. The constraint was valid for a
-- full-row replace model but not for the delta model in use.
-- ============================================================

ALTER TABLE public.daily_stats
    DROP CONSTRAINT IF EXISTS chk_correct_lte_reviewed,
    DROP CONSTRAINT IF EXISTS chk_q_correct_lte_q_total;
