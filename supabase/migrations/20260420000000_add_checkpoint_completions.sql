-- ============================================================
-- Add checkpoint_completions table (F-01 / F-09)
-- Tracks which speaking checkpoints a user has passed per language.
-- ============================================================

CREATE TABLE public.checkpoint_completions (
    id            BIGSERIAL   PRIMARY KEY,
    user_id       UUID        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lang_id       lang_id     NOT NULL,
    checkpoint_id TEXT        NOT NULL,
    completed_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT uq_checkpoint_completion UNIQUE (user_id, lang_id, checkpoint_id)
);

ALTER TABLE public.checkpoint_completions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "checkpoint_completions: owner all"
    ON public.checkpoint_completions FOR ALL
    USING  (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_cc_user_lang
    ON public.checkpoint_completions (user_id, lang_id);

-- ============================================================
-- Patch reset_language_data RPC to also clear checkpoint rows
-- ============================================================

CREATE OR REPLACE FUNCTION public.reset_language_data(p_user_id UUID, p_lang_id TEXT)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
    -- auth.uid() returns NULL in server-side contexts; NULL != x evaluates to NULL (not TRUE),
    -- so the guard only rejects callers with a JWT that belongs to a different user.
    -- Server-side admin callers (NULL uid) are intentionally permitted.
    IF auth.uid() IS NOT NULL AND auth.uid() != p_user_id THEN
        RAISE EXCEPTION 'Forbidden';
    END IF;
    DELETE FROM lesson_completions        WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM mastered_units            WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM reinforcement_grammar     WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM reinforcement_sections    WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM srs_cards                 WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM daily_stats               WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM user_language_levels      WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM study_sessions            WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM exercise_attempts         WHERE user_id = p_user_id AND lang_id = p_lang_id;
    DELETE FROM checkpoint_completions    WHERE user_id = p_user_id AND lang_id = p_lang_id;
END;
$$;
