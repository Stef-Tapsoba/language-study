# Supabase Migration — Stage 2 ✅ Complete

*Authors: Backend Engineer Agent + Architect Agent | Originally written: 2026-04-02 | Shipped: 2026-04-06*

> **Status:** Stage 2 is live. This document is now a historical reference for the migration design decisions and schema.

> **Complete DDL:** See [`DATABASE_SCHEMA.sql`](./DATABASE_SCHEMA.sql) for the full production-ready schema with all tables, indexes, RLS policies, and helper RPCs.

---

## Overview

The adapter seam is already in place (`IProgressStorage`, `ISRSStorage`, `IStatsStorage` + `registry`). Stage 2 is a **backend slot-in**, not a refactor. This document specifies the Supabase schema, adapter implementations, auth migration, bottleneck mitigations, and error-handling requirements.

---

## 1. Entity Model & SQL Schema

### 1.1 Entity mapping (localStorage → Supabase tables)

| localStorage key | Current shape | Supabase table(s) |
|---|---|---|
| `ls:progress:{userId}` | `UserProgress` blob | `profiles` (goal, selected_language), `user_language_levels` (levels), `lesson_completions`, `mastered_units`, `reinforcement_grammar`, `reinforcement_sections` |
| `ls:srs` | `Record<langId, Record<vocabId, SRSCardState>>` | `srs_cards` |
| `ls:stats` | `Record<langId, Record<date, DayStats>>` | `daily_stats` |
| `ls:goal` (legacy) | GoalId string | `profiles.learning_goal` — now also in `UserProgress.goal` via adapter |
| `ls:tts-autoplay` | boolean | `user_preferences.preferences.tts_autoplay` |
| *(new)* | *(not yet tracked)* | `study_sessions` + `exercise_attempts` — for plateau detection |

### 1.2 Table summary

| Table | Rows represent | Key unique constraint |
|---|---|---|
| `profiles` | One per auth user | `id` (= auth.users.id) |
| `user_language_levels` | CEFR level per user+language | `(user_id, lang_id)` |
| `lesson_completions` | One completed content item | `(user_id, lang_id, content_type, content_id)` |
| `mastered_units` | One passed unit test | `(user_id, lang_id, unit_id)` |
| `reinforcement_grammar` | One grammar exercise done | `(user_id, lang_id, unit_id, grammar_lesson_id)` |
| `reinforcement_sections` | One vocab/verbs exercise done | `(user_id, lang_id, unit_id, section)` |
| `srs_cards` | SM-2 state per vocab item | `(user_id, lang_id, vocab_id)` |
| `daily_stats` | Aggregated daily metrics | `(user_id, lang_id, study_date)` |
| `user_preferences` | Cross-device UI prefs | `user_id` (1:1 with profiles) |
| `study_sessions` | One drill/reading session | primary key |
| `exercise_attempts` | One item attempt in a session | primary key (append-only) |

→ **Full DDL, indexes, RLS, and helper RPCs**: [`DATABASE_SCHEMA.sql`](./DATABASE_SCHEMA.sql)

### 1.2 Full DDL

```sql
-- ─── Extensions ───────────────────────────────────────────────────────────────

create extension if not exists "uuid-ossp";

-- ─── profiles ─────────────────────────────────────────────────────────────────
-- One row per auth.users row. Stores app-level profile data.

create table public.profiles (
  id               uuid references auth.users(id) on delete cascade primary key,
  display_name     text,
  selected_language text,          -- last active lang_id (nullable)
  learning_goal    text check (learning_goal in ('traveller','social','culture','general')),
                                   -- UserProgress.goal — syncs cross-device
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

-- ─── user_language_levels ─────────────────────────────────────────────────────
-- CEFR level per user per language. Replaces UserProgress.levels.

create table public.user_language_levels (
  id         uuid default gen_random_uuid() primary key,
  user_id    uuid not null references public.profiles(id) on delete cascade,
  lang_id    text not null,
  level      text not null check (level in ('A1','A2','B1','B2','C1','C2')),
  updated_at timestamptz not null default now(),
  unique (user_id, lang_id)
);

-- ─── lesson_completions ───────────────────────────────────────────────────────
-- One row per completed lesson item. Replaces UserProgress.completedLessons
-- AND UserProgress.completedByType. The content_type column is the discriminator.

create table public.lesson_completions (
  id           uuid default gen_random_uuid() primary key,
  user_id      uuid not null references public.profiles(id) on delete cascade,
  lang_id      text not null,
  lesson_id    text not null,
  content_type text not null check (
    content_type in ('grammar','vocab','verb','reading','listening','culture')
  ),
  completed_at timestamptz not null default now(),
  unique (user_id, lang_id, lesson_id)
);

-- ─── mastered_units ───────────────────────────────────────────────────────────
-- One row per mastered unit. Replaces UserProgress.masteredUnits.

create table public.mastered_units (
  id           uuid default gen_random_uuid() primary key,
  user_id      uuid not null references public.profiles(id) on delete cascade,
  lang_id      text not null,
  unit_id      text not null,
  completed_at timestamptz not null default now(),
  unique (user_id, lang_id, unit_id)
);

-- ─── reinforcement_grammar ────────────────────────────────────────────────────
-- Per-lesson grammar exercise completion. Replaces UserProgress.completedReinforcement
-- (grammarLessonIds array). IProgressStorage.markReinforcementDone("grammar", lessonId).

create table public.reinforcement_grammar (
  user_id           uuid not null references public.profiles(id) on delete cascade,
  lang_id           text not null,
  unit_id           text not null,
  grammar_lesson_id text not null,
  completed_at      timestamptz not null default now(),
  primary key (user_id, lang_id, unit_id, grammar_lesson_id)
);

create index idx_rg_user_lang on public.reinforcement_grammar (user_id, lang_id);

-- ─── reinforcement_sections ───────────────────────────────────────────────────
-- Section-level exercise completion (vocab, verbs). Replaces
-- UserProgress.completedReinforcement (vocab/verbs booleans).
-- IProgressStorage.markReinforcementDone("vocab" | "verbs").

create table public.reinforcement_sections (
  user_id      uuid not null references public.profiles(id) on delete cascade,
  lang_id      text not null,
  unit_id      text not null,
  section      text not null check (section in ('vocab','verbs')),
  completed_at timestamptz not null default now(),
  primary key (user_id, lang_id, unit_id, section)
);

create index idx_rs_user_lang on public.reinforcement_sections (user_id, lang_id);

-- ─── srs_cards ────────────────────────────────────────────────────────────────
-- One row per (user, language, vocab card). Mirrors SRSCardState from @myorg/srs.
-- SM-2 algorithm runs client-side; this table stores the resulting state.

create table public.srs_cards (
  id              uuid default gen_random_uuid() primary key,
  user_id         uuid not null references public.profiles(id) on delete cascade,
  lang_id         text not null,
  vocab_id        text not null,
  ease_factor     real    not null default 2.5,
  review_count    integer not null default 0,
  streak          integer not null default 0,
  next_review_at  bigint  not null default 0,  -- ms epoch; 0 = never reviewed
  interval_days   integer not null default 0,
  last_reviewed_at timestamptz,
  updated_at      timestamptz not null default now(),
  unique (user_id, lang_id, vocab_id)
);

-- ─── daily_stats ──────────────────────────────────────────────────────────────
-- Aggregated per-day study stats. Replaces the StatsData blob.
-- Rows are upserted (incremented) on each study event.

create table public.daily_stats (
  id        uuid default gen_random_uuid() primary key,
  user_id   uuid not null references public.profiles(id) on delete cascade,
  lang_id   text not null,
  date      date not null,
  reviewed  integer not null default 0,
  correct   integer not null default 0,
  acts      integer not null default 0,
  q_total   integer not null default 0,
  q_correct integer not null default 0,
  unique (user_id, lang_id, date)
);
```

### 1.3 Indexes

```sql
-- lesson_completions — primary query: all lessons for a user+lang
create index idx_lesson_completions_user_lang on public.lesson_completions (user_id, lang_id);

-- mastered_units — primary query: all mastered units for a user+lang
create index idx_mastered_units_user_lang on public.mastered_units (user_id, lang_id);

-- srs_cards — primary queries: all cards for a user+lang; due cards by next_review_at
create index idx_srs_cards_user_lang on public.srs_cards (user_id, lang_id);
create index idx_srs_cards_due on public.srs_cards (user_id, lang_id, next_review_at);

-- daily_stats — primary queries: all days for a user+lang; recent N days
create index idx_daily_stats_user_lang_date on public.daily_stats (user_id, lang_id, date desc);
```

### 1.4 Row Level Security

```sql
-- Enable RLS on all tables
alter table public.profiles            enable row level security;
alter table public.user_language_levels enable row level security;
alter table public.lesson_completions   enable row level security;
alter table public.mastered_units       enable row level security;
alter table public.srs_cards            enable row level security;
alter table public.daily_stats          enable row level security;

-- profiles
create policy "Own profile" on public.profiles
  for all using (auth.uid() = id);

-- user_language_levels
create policy "Own language levels" on public.user_language_levels
  for all using (auth.uid() = user_id);

-- lesson_completions
create policy "Own lesson completions" on public.lesson_completions
  for all using (auth.uid() = user_id);

-- mastered_units
create policy "Own mastered units" on public.mastered_units
  for all using (auth.uid() = user_id);

-- srs_cards
create policy "Own SRS cards" on public.srs_cards
  for all using (auth.uid() = user_id);

-- daily_stats
create policy "Own daily stats" on public.daily_stats
  for all using (auth.uid() = user_id);
```

### 1.5 Database functions (RPCs)

#### hydrate_progress — batch-load all progress in one round trip

```sql
create or replace function public.hydrate_progress(p_user_id uuid)
returns json
language sql
security definer
set search_path = public
as $$
  select json_build_object(
    'levels',
    (
      select coalesce(json_object_agg(lang_id, level), '{}')
      from user_language_levels
      where user_id = p_user_id
    ),
    'completedLessons',
    (
      select coalesce(json_object_agg(lang_id, ids), '{}')
      from (
        select lang_id, json_agg(lesson_id) as ids
        from lesson_completions
        where user_id = p_user_id
        group by lang_id
      ) t
    ),
    'masteredUnits',
    (
      select coalesce(json_object_agg(lang_id, ids), '{}')
      from (
        select lang_id, json_agg(unit_id) as ids
        from mastered_units
        where user_id = p_user_id
        group by lang_id
      ) t
    ),
    'selectedLanguage',
    (
      select selected_language
      from profiles
      where id = p_user_id
    )
  );
$$;
```

#### increment_daily_stats — atomic upsert for stats

```sql
create or replace function public.increment_daily_stats(
  p_user_id   uuid,
  p_lang_id   text,
  p_date      date,
  p_reviewed  integer default 0,
  p_correct   integer default 0,
  p_acts      integer default 0,
  p_q_total   integer default 0,
  p_q_correct integer default 0
)
returns void
language sql
security definer
set search_path = public
as $$
  insert into daily_stats (user_id, lang_id, date, reviewed, correct, acts, q_total, q_correct)
  values (p_user_id, p_lang_id, p_date, p_reviewed, p_correct, p_acts, p_q_total, p_q_correct)
  on conflict (user_id, lang_id, date) do update
    set reviewed  = daily_stats.reviewed  + excluded.reviewed,
        correct   = daily_stats.correct   + excluded.correct,
        acts      = daily_stats.acts      + excluded.acts,
        q_total   = daily_stats.q_total   + excluded.q_total,
        q_correct = daily_stats.q_correct + excluded.q_correct;
$$;
```

---

## 2. Adapter Implementations

### 2.1 `SupabaseProgressStorage`

```typescript
// store/SupabaseProgressStorage.ts
import type { SupabaseClient } from "@supabase/supabase-js"
import type { CEFRLevel, UserProgress } from "../types"
import type { IProgressStorage, ContentType } from "./IProgressStorage"

const DEFAULT: Omit<UserProgress, "userId"> = {
    schemaVersion: 1,
    selectedLanguage: null,
    levels: {},
    completedLessons: {},
    masteredUnits: {},
}

export class SupabaseProgressStorage implements IProgressStorage {
    private _cache: UserProgress | null = null
    private _userId: string | null = null

    constructor(private readonly supabase: SupabaseClient) {}

    // ── Sync read from write-through cache ─────────────────────────────────
    load(): UserProgress {
        if (!this._cache) throw new Error("SupabaseProgressStorage: hydrate before load()")
        return this._cache
    }

    // ── Session init: call hydrate_progress RPC once on login ──────────────
    async initSession(userId: string): Promise<void> {
        this._userId = userId

        // Upsert profile row
        await this.supabase
            .from("profiles")
            .upsert({ id: userId }, { onConflict: "id" })

        // Batch-load all progress in one RPC call
        const { data, error } = await this.supabase
            .rpc("hydrate_progress", { p_user_id: userId })

        if (error) throw error

        this._cache = {
            ...DEFAULT,
            userId,
            schemaVersion: 1,
            selectedLanguage: data.selectedLanguage ?? null,
            levels: data.levels ?? {},
            completedLessons: data.completedLessons ?? {},
            masteredUnits: data.masteredUnits ?? {},
        }
    }

    async save(progress: UserProgress): Promise<void> {
        // Used for bulk import — write all entities in parallel
        const uid = this._requireUserId()
        this._cache = progress

        const levelUpserts = Object.entries(progress.levels).map(([lang_id, level]) => ({
            user_id: uid, lang_id, level
        }))
        const completionInserts = Object.entries(progress.completedLessons).flatMap(
            ([lang_id, ids]) => ids.map(lesson_id => ({ user_id: uid, lang_id, lesson_id, content_type: "grammar" as ContentType }))
        )
        const unitInserts = Object.entries(progress.masteredUnits).flatMap(
            ([lang_id, ids]) => ids.map(unit_id => ({ user_id: uid, lang_id, unit_id }))
        )

        await Promise.all([
            this.supabase.from("profiles").upsert({ id: uid, selected_language: progress.selectedLanguage }),
            levelUpserts.length && this.supabase.from("user_language_levels").upsert(levelUpserts, { onConflict: "user_id,lang_id" }),
            completionInserts.length && this.supabase.from("lesson_completions").upsert(completionInserts, { onConflict: "user_id,lang_id,lesson_id" }),
            unitInserts.length && this.supabase.from("mastered_units").upsert(unitInserts, { onConflict: "user_id,lang_id,unit_id" }),
        ])
    }

    async setSelectedLanguage(langId: string): Promise<void> {
        this._mutateCache(c => ({ ...c, selectedLanguage: langId }))
        const { error } = await this.supabase
            .from("profiles")
            .update({ selected_language: langId, updated_at: new Date().toISOString() })
            .eq("id", this._requireUserId())
        if (error) throw error
    }

    async markLessonComplete(langId: string, lessonId: string, contentType: ContentType): Promise<void> {
        const existing = this._cache?.completedLessons[langId] ?? []
        if (existing.includes(lessonId)) return
        this._mutateCache(c => ({
            ...c,
            completedLessons: {
                ...c.completedLessons,
                [langId]: [...existing, lessonId],
            }
        }))
        const { error } = await this.supabase
            .from("lesson_completions")
            .upsert(
                { user_id: this._requireUserId(), lang_id: langId, lesson_id: lessonId, content_type: contentType },
                { onConflict: "user_id,lang_id,lesson_id" }
            )
        if (error) throw error
    }

    async masterUnit(langId: string, unitId: string): Promise<void> {
        const existing = this._cache?.masteredUnits[langId] ?? []
        if (existing.includes(unitId)) return
        this._mutateCache(c => ({
            ...c,
            masteredUnits: {
                ...c.masteredUnits,
                [langId]: [...existing, unitId],
            }
        }))
        const { error } = await this.supabase
            .from("mastered_units")
            .upsert(
                { user_id: this._requireUserId(), lang_id: langId, unit_id: unitId },
                { onConflict: "user_id,lang_id,unit_id" }
            )
        if (error) throw error
    }

    async setLevel(langId: string, level: CEFRLevel): Promise<void> {
        this._mutateCache(c => ({ ...c, levels: { ...c.levels, [langId]: level } }))
        const { error } = await this.supabase
            .from("user_language_levels")
            .upsert(
                { user_id: this._requireUserId(), lang_id: langId, level, updated_at: new Date().toISOString() },
                { onConflict: "user_id,lang_id" }
            )
        if (error) throw error
    }

    async resetLanguage(langId: string): Promise<void> {
        const uid = this._requireUserId()
        this._mutateCache(c => {
            const levels = { ...c.levels, [langId]: "A1" as CEFRLevel }
            const completedLessons = { ...c.completedLessons }
            const masteredUnits = { ...c.masteredUnits }
            delete completedLessons[langId]
            delete masteredUnits[langId]
            return { ...c, levels, completedLessons, masteredUnits }
        })
        await Promise.all([
            this.supabase.from("user_language_levels").upsert(
                { user_id: uid, lang_id: langId, level: "A1" },
                { onConflict: "user_id,lang_id" }
            ),
            this.supabase.from("lesson_completions").delete()
                .eq("user_id", uid).eq("lang_id", langId),
            this.supabase.from("mastered_units").delete()
                .eq("user_id", uid).eq("lang_id", langId),
        ])
    }

    async removeLanguage(langId: string): Promise<void> {
        const uid = this._requireUserId()
        this._mutateCache(c => {
            const levels = { ...c.levels }
            const completedLessons = { ...c.completedLessons }
            const masteredUnits = { ...c.masteredUnits }
            delete levels[langId]
            delete completedLessons[langId]
            delete masteredUnits[langId]
            const selectedLanguage = c.selectedLanguage === langId ? null : c.selectedLanguage
            return { ...c, levels, completedLessons, masteredUnits, selectedLanguage }
        })
        await Promise.all([
            this.supabase.from("user_language_levels").delete().eq("user_id", uid).eq("lang_id", langId),
            this.supabase.from("lesson_completions").delete().eq("user_id", uid).eq("lang_id", langId),
            this.supabase.from("mastered_units").delete().eq("user_id", uid).eq("lang_id", langId),
        ])
    }

    // ── Helpers ────────────────────────────────────────────────────────────
    private _requireUserId(): string {
        if (!this._userId) throw new Error("SupabaseProgressStorage: initSession not called")
        return this._userId
    }

    private _mutateCache(fn: (c: UserProgress) => UserProgress): void {
        if (!this._cache) throw new Error("SupabaseProgressStorage: no cache — call initSession first")
        this._cache = fn(this._cache)
    }
}
```

### 2.2 `SupabaseSRSStorage`

```typescript
// store/SupabaseSRSStorage.ts
import type { SupabaseClient } from "@supabase/supabase-js"
import { calcNextReview, INITIAL_STATE } from "@myorg/srs"
import type { SRSCardState, SRSQuality } from "@myorg/srs"
import type { ISRSStorage } from "./ISRSStorage"

export class SupabaseSRSStorage implements ISRSStorage {
    // In-memory cache per language — loaded once on initSession.
    private _cache: Record<string, Record<string, SRSCardState>> = {}
    private _userId: string | null = null

    constructor(private readonly supabase: SupabaseClient, userId: string) {
        this._userId = userId
    }

    // Call this during initSession to pre-load all SRS states.
    async hydrate(langId?: string): Promise<void> {
        const uid = this._requireUserId()
        let query = this.supabase
            .from("srs_cards")
            .select("lang_id, vocab_id, ease_factor, review_count, streak, next_review_at, interval_days")
            .eq("user_id", uid)

        if (langId) query = query.eq("lang_id", langId)

        const { data, error } = await query
        if (error) throw error

        for (const row of data ?? []) {
            if (!this._cache[row.lang_id]) this._cache[row.lang_id] = {}
            this._cache[row.lang_id][row.vocab_id] = {
                easeFactor:   row.ease_factor,
                reviewCount:  row.review_count,
                streak:       row.streak,
                nextReviewAt: row.next_review_at,
                intervalDays: row.interval_days,
            }
        }
    }

    // Synchronous read from cache (matches ISRSStorage contract)
    getStates(langId: string): Record<string, SRSCardState> {
        return this._cache[langId] ?? {}
    }

    async loadAll(): Promise<Record<string, Record<string, SRSCardState>>> {
        await this.hydrate()
        return this._cache
    }

    async saveAll(data: Record<string, Record<string, SRSCardState>>): Promise<void> {
        const uid = this._requireUserId()
        this._cache = data
        const rows = Object.entries(data).flatMap(([lang_id, cards]) =>
            Object.entries(cards).map(([vocab_id, s]) => ({
                user_id: uid, lang_id, vocab_id,
                ease_factor:   s.easeFactor,
                review_count:  s.reviewCount,
                streak:        s.streak,
                next_review_at: s.nextReviewAt,
                interval_days: s.intervalDays,
                updated_at:    new Date().toISOString(),
            }))
        )
        if (!rows.length) return
        const { error } = await this.supabase
            .from("srs_cards")
            .upsert(rows, { onConflict: "user_id,lang_id,vocab_id" })
        if (error) throw error
    }

    async updateCard(langId: string, vocabId: string, quality: 1 | 4): Promise<void> {
        const uid = this._requireUserId()
        const prev = this._cache[langId]?.[vocabId] ?? { ...INITIAL_STATE }
        const { nextState } = calcNextReview(prev, quality as SRSQuality)

        // Update cache first (optimistic)
        if (!this._cache[langId]) this._cache[langId] = {}
        this._cache[langId][vocabId] = nextState

        const { error } = await this.supabase
            .from("srs_cards")
            .upsert({
                user_id:        uid,
                lang_id:        langId,
                vocab_id:       vocabId,
                ease_factor:    nextState.easeFactor,
                review_count:   nextState.reviewCount,
                streak:         nextState.streak,
                next_review_at: nextState.nextReviewAt,
                interval_days:  nextState.intervalDays,
                last_reviewed_at: new Date().toISOString(),
                updated_at:     new Date().toISOString(),
            }, { onConflict: "user_id,lang_id,vocab_id" })
        if (error) throw error
    }

    async resetLanguage(langId: string): Promise<void> {
        delete this._cache[langId]
        const { error } = await this.supabase
            .from("srs_cards")
            .delete()
            .eq("user_id", this._requireUserId())
            .eq("lang_id", langId)
        if (error) throw error
    }

    async resetAll(): Promise<void> {
        this._cache = {}
        const { error } = await this.supabase
            .from("srs_cards")
            .delete()
            .eq("user_id", this._requireUserId())
        if (error) throw error
    }

    private _requireUserId(): string {
        if (!this._userId) throw new Error("SupabaseSRSStorage: userId not set")
        return this._userId
    }
}
```

### 2.3 `SupabaseStatsStorage`

```typescript
// store/SupabaseStatsStorage.ts
import type { SupabaseClient } from "@supabase/supabase-js"
import type { IStatsStorage } from "./IStatsStorage"
import type { StatsData, DayStats } from "./useStatsStore"

const STATS_WINDOW_DAYS = 90  // Load last 90 days on hydration

export class SupabaseStatsStorage implements IStatsStorage {
    constructor(
        private readonly supabase: SupabaseClient,
        private readonly userId: string
    ) {}

    async load(): Promise<StatsData> {
        const cutoff = new Date()
        cutoff.setDate(cutoff.getDate() - STATS_WINDOW_DAYS)
        const cutoffStr = cutoff.toISOString().slice(0, 10)

        const { data, error } = await this.supabase
            .from("daily_stats")
            .select("lang_id, date, reviewed, correct, acts, q_total, q_correct")
            .eq("user_id", this.userId)
            .gte("date", cutoffStr)

        if (error) throw error

        const result: StatsData = {}
        for (const row of data ?? []) {
            if (!result[row.lang_id]) result[row.lang_id] = {}
            result[row.lang_id][row.date] = {
                reviewed: row.reviewed,
                correct:  row.correct,
                acts:     row.acts,
                qTotal:   row.q_total,
                qCorrect: row.q_correct,
            }
        }
        return result
    }

    async recordReview(langId: string, date: string, correct: boolean): Promise<void> {
        await this._increment(langId, date, {
            reviewed: 1, correct: correct ? 1 : 0, acts: 1, qTotal: 1, qCorrect: correct ? 1 : 0
        })
    }

    async recordQuizAnswer(langId: string, date: string, correct: boolean): Promise<void> {
        await this._increment(langId, date, {
            reviewed: 0, correct: 0, acts: 1, qTotal: 1, qCorrect: correct ? 1 : 0
        })
    }

    async recordActivity(langId: string, date: string): Promise<void> {
        await this._increment(langId, date, {
            reviewed: 0, correct: 0, acts: 1, qTotal: 0, qCorrect: 0
        })
    }

    async saveAll(data: StatsData): Promise<void> {
        const rows = Object.entries(data).flatMap(([lang_id, days]) =>
            Object.entries(days).map(([date, s]: [string, DayStats]) => ({
                user_id: this.userId, lang_id, date,
                reviewed: s.reviewed, correct: s.correct, acts: s.acts,
                q_total: s.qTotal, q_correct: s.qCorrect,
            }))
        )
        if (!rows.length) return
        const { error } = await this.supabase
            .from("daily_stats")
            .upsert(rows, { onConflict: "user_id,lang_id,date" })
        if (error) throw error
    }

    async resetLanguage(langId: string): Promise<void> {
        const { error } = await this.supabase
            .from("daily_stats")
            .delete()
            .eq("user_id", this.userId)
            .eq("lang_id", langId)
        if (error) throw error
    }

    private async _increment(langId: string, date: string, delta: {
        reviewed: number; correct: number; acts: number; qTotal: number; qCorrect: number
    }): Promise<void> {
        const { error } = await this.supabase.rpc("increment_daily_stats", {
            p_user_id:   this.userId,
            p_lang_id:   langId,
            p_date:      date,
            p_reviewed:  delta.reviewed,
            p_correct:   delta.correct,
            p_acts:      delta.acts,
            p_q_total:   delta.qTotal,
            p_q_correct: delta.qCorrect,
        })
        if (error) throw error
    }
}
```

---

## 3. Auth Migration

### 3.1 What changes

| Stage 1 | Stage 2 |
|---|---|
| `mockAuthApi.ts` — users in `ls:users`, token = `btoa(email)` | `SupabaseAuthApi` — delegates to `@supabase/auth-js` |
| User ID = email hash | User ID = Supabase `auth.uid()` UUID |
| `LocalStorageAdapter` for session | Supabase session managed by `supabase-js` |

### 3.2 `SupabaseAuthApi` sketch

```typescript
// auth/SupabaseAuthApi.ts
import type { AuthApi, AuthUser, Session } from "@myorg/auth-core"
import type { SupabaseClient } from "@supabase/supabase-js"

export class SupabaseAuthApi implements AuthApi {
    constructor(private readonly supabase: SupabaseClient) {}

    async login(email: string, password: string): Promise<Session> {
        const { data, error } = await this.supabase.auth.signInWithPassword({ email, password })
        if (error || !data.session) throw new Error(error?.message ?? "Login failed")
        return this._toSession(data.session)
    }

    async register(email: string, password: string, displayName: string): Promise<Session> {
        const { data, error } = await this.supabase.auth.signUp({
            email, password,
            options: { data: { display_name: displayName } }
        })
        if (error || !data.session) throw new Error(error?.message ?? "Registration failed")
        return this._toSession(data.session)
    }

    async refresh(token: string): Promise<Session> {
        const { data, error } = await this.supabase.auth.refreshSession({ refresh_token: token })
        if (error || !data.session) throw new Error(error?.message ?? "Refresh failed")
        return this._toSession(data.session)
    }

    async logout(): Promise<void> {
        await this.supabase.auth.signOut()
    }

    private _toSession(s: { access_token: string; refresh_token: string; expires_at?: number; user: { id: string; email?: string } }): Session {
        return {
            accessToken:  s.access_token,
            refreshToken: s.refresh_token,
            expiresAt:    (s.expires_at ?? 0) * 1000,
            user: { id: s.user.id, email: s.user.email ?? "" }
        }
    }
}
```

### 3.3 Bootstrap sequence

Replace the current `AuthContext` wiring with:

```typescript
// auth/AuthContext.tsx (Stage 2 bootstrap)

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Wire adapters once (before any React render)
registry.configure({
    progress: new SupabaseProgressStorage(supabase),
    srs:      new SupabaseSRSStorage(supabase, /* userId injected after login */),
    stats:    new SupabaseStatsStorage(supabase, /* userId injected after login */),
})

// On successful login/session-restore:
//   1. Call registry.progress.initSession(userId)   ← hydrates UserProgress cache
//   2. Call (registry.srs as SupabaseSRSStorage).hydrate()  ← hydrates SRS cache
//   3. Call useStatsStore.getState().hydrate()       ← loads stats into Zustand
```

**Note:** The `registry.configure()` can only be called once (guarded in `registry.ts`). Wire it at module load time with the Supabase client. The `userId` should be injected post-login — either pass supabase client (which carries session internally) or redesign `SupabaseSRSStorage`/`SupabaseStatsStorage` constructors to accept a `getUserId` callback.

---

## 4. Bottleneck Analysis & Mitigations

### 4.1 Hydration round trips (HIGH risk)

**Problem:** `IProgressStorage.initSession()` currently triggers a single localStorage read. In Supabase, naively implemented, this would be 4 separate queries (profile, levels, completions, mastered units).

**Fix:** Use the `hydrate_progress` RPC (see §1.5) to batch all 4 reads into one network call.

### 4.2 Stats write frequency (HIGH risk)

**Problem:** `recordReview` / `recordQuizAnswer` / `recordActivity` are called on every card flip and quiz answer. A flashcard session with 20 cards = 20 Supabase writes. This will hit rate limits and degrade UX.

**Fix:** Batch stats writes — buffer deltas in memory during a session and flush on `completeDrillSession` / on a 10-second debounce / on `visibilitychange` (page hide). The in-memory Zustand store already has the current state; only the persistence call needs batching.

```typescript
// Revised SupabaseStatsStorage: accumulate deltas, flush on demand
class SupabaseStatsStorage implements IStatsStorage {
    private _pending: Map<string, { date: string } & DayDelta> = new Map()

    async recordReview(...) { this._accumulate(key, delta); this._scheduleFlush() }

    private _scheduleFlush() {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => this.flush(), 10_000)
    }

    async flush(): Promise<void> { /* upsert all pending rows */ }
}

// Also call flush() from completeDrillSession action and on visibilitychange.
```

### 4.3 SRS cache miss on `getStates()` (MEDIUM risk)

**Problem:** `getStates(langId)` is synchronous and must be served from cache. If the app is opened on a language whose SRS data hasn't been loaded, the cache is empty and `getDueCards` returns all vocab as "new".

**Fix:** Hydrate SRS eagerly for the active language during `initSession`. Lazy-hydrate other languages on first navigation to them.

```typescript
// In SupabaseSRSStorage: track which langIds are loaded
async getStatesAsync(langId: string): Promise<Record<string, SRSCardState>> {
    if (!this._loaded.has(langId)) await this.hydrate(langId)
    return this._cache[langId] ?? {}
}
```

The `FlashcardsPage` (which calls `getDueCards`) must `await` the hydration before rendering — add a loading state.

### 4.4 `lesson_completions` fan-out (LOW risk now, MEDIUM at scale)

**Problem:** Loading all completed lessons for a user+lang could return 500+ rows at higher CEFR levels.

**Fix:** The `hydrate_progress` RPC already aggregates these into a JSON array server-side, so only one row is returned per language. The index on `(user_id, lang_id)` handles the aggregation efficiently.

### 4.5 `getGlobalStreak` iteration (LOW risk)

**Problem:** Iterates up to 365 days backwards across all languages. Fine client-side with in-memory data.

**Fix:** No change needed for Stage 2 — streak is computed from the Zustand in-memory store which is hydrated from the last 90 days of `daily_stats`. The 90-day window covers all realistic streak lengths.

---

## 5. Error Handling Requirements

### 5.1 Current gaps

| Location | Gap |
|---|---|
| `useStatsStore.ts` lines 78, 94, 110, 119, 126 | Fire-and-forget with `.catch(console.error)` — Supabase errors are silently dropped |
| `actions.ts` `resetLanguageData()` | Three sequential `await`s — if one fails, subsequent ones still run; no rollback |
| `LocalStorageProgressStorage` | All methods return `Promise.resolve()` — no error path exists |
| No loading/error state in ProgressContext | `initSession` is async but the context provides no `isLoading` or `error` to pages |

### 5.2 Required fixes for Stage 2

**A. Offline write queue for stats**

Stats writes must not block UX and should survive network blips. Implement a persistent retry queue:

```typescript
// utils/writeQueue.ts
class WriteQueue {
    private _queue: Array<() => Promise<void>> = []
    private _flushing = false

    enqueue(fn: () => Promise<void>) {
        this._queue.push(fn)
        this._flush()
    }

    private async _flush() {
        if (this._flushing) return
        this._flushing = true
        while (this._queue.length) {
            const fn = this._queue[0]
            try {
                await fn()
                this._queue.shift()
            } catch {
                // Retry on next flush (triggered by next enqueue or reconnect)
                break
            }
        }
        this._flushing = false
    }
}
```

**B. Progress mutation error propagation**

`IProgressStorage` write methods throw on Supabase errors. Callers in `actions.ts` should catch and expose errors to the UI:

```typescript
// actions.ts — example
export async function completeUnit(langId, unitId, quizScore, quizTotal): Promise<void> {
    try {
        await registry.progress.masterUnit(langId, unitId)
        // ... stats updates
    } catch (err) {
        // Emit to a global error store / toast system
        console.error("[completeUnit] Failed to persist mastered unit:", err)
        throw err  // Re-throw so the page can show an error banner
    }
}
```

**C. ProgressContext loading state**

```typescript
// Add to ProgressContext value type:
interface ProgressContextValue {
    // ... existing fields
    isHydrating: boolean
    hydrateError: Error | null
}
```

Pages that read progress (DashboardPage, UnitPage) should show a spinner or skeleton while `isHydrating` is true, and a retry banner if `hydrateError` is set.

**D. `resetLanguageData` atomicity**

Currently three independent deletes. For Stage 2, wrap in a Postgres function or at minimum handle partial failures:

```sql
-- RPC: reset_language_data(p_user_id, p_lang_id)
-- Deletes from all three tables in one transaction server-side
create or replace function public.reset_language_data(p_user_id uuid, p_lang_id text)
returns void language plpgsql security definer as $$
begin
  delete from lesson_completions where user_id = p_user_id and lang_id = p_lang_id;
  delete from mastered_units     where user_id = p_user_id and lang_id = p_lang_id;
  delete from srs_cards          where user_id = p_user_id and lang_id = p_lang_id;
  delete from daily_stats        where user_id = p_user_id and lang_id = p_lang_id;
  update user_language_levels set level = 'A1' where user_id = p_user_id and lang_id = p_lang_id;
end;
$$;
```

---

## 6. Existing User Migration

Users on Stage 1 have data in `localStorage`. On first Supabase login, detect and migrate:

```typescript
// auth/migrateLocalStorage.ts

export async function migrateLocalStorageToSupabase(userId: string): Promise<void> {
    const PROGRESS_KEY = `ls:progress:${userId}`
    const SRS_KEY = "ls:srs"
    const STATS_KEY = "ls:stats"

    const hasLocalData = localStorage.getItem(PROGRESS_KEY) !== null

    if (!hasLocalData) return  // Nothing to migrate

    // Read all local data
    const progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? "{}")
    const srsRaw   = JSON.parse(localStorage.getItem(SRS_KEY) ?? "{}")
    const statsRaw = JSON.parse(localStorage.getItem(STATS_KEY) ?? "{}")

    // Write to Supabase via adapters
    await registry.progress.save(progress)
    await (registry.srs as ISRSStorage).saveAll(srsRaw)
    await (registry.stats as IStatsStorage).saveAll(statsRaw)

    // Clear localStorage after successful migration
    localStorage.removeItem(PROGRESS_KEY)
    localStorage.removeItem(SRS_KEY)
    localStorage.removeItem(STATS_KEY)

    console.log("[migrate] localStorage data migrated to Supabase successfully")
}
```

Call `migrateLocalStorageToSupabase(userId)` inside `initSession`, after `hydrate_progress` confirms the user has no Supabase data yet (e.g. empty levels object).

---

## 7. IProgressStorage Gap: `completedByType`

`UserProgress` has a `completedByType` field that `progress.ts` writes alongside `completedLessons`. The `IProgressStorage` interface does **not** expose it separately — it's an implementation detail of the localStorage layer.

In Supabase, `lesson_completions.content_type` is the canonical store. When hydrating:
- Build `completedLessons[langId]` from all rows for that language (any content_type).
- `completedByType` is no longer needed — the Supabase adapter can omit it from the hydrated `UserProgress`.

**Action:** Remove `completedByType` from `UserProgress` type declaration in `src/types/index.ts` when the Supabase adapter is introduced. It's already optional; the adapter just won't populate it.

---

## 8. Implementation Checklist

### Pre-migration (do now, in Stage 1)
- [x] `userId` field on `UserProgress` — present in both `types/index.ts` and `progress.ts`
- [x] `isHydrating` / `hydrateError` / `mutationError` in ProgressContext — exposed + `HydrationErrorBanner` component wired into DashboardPage
- [x] `flush()` on `IStatsStorage` — interface method present; Stage 1 no-op in `LocalStorageStatsStorage`
- [x] `hydrate(langId?)` on `ISRSStorage` — interface method present; Stage 1 no-op in `LocalStorageSRSStorage`
- [x] Structured error logging — `src/utils/logger.ts` `logError()` utility; swap body for Sentry at Stage 2
- [x] `goal` in `UserProgress` — added with `IProgressStorage.setGoal()`, `preferences.getGoal()` reads through adapter
- [x] Reinforcement tables documented — `reinforcement_grammar` + `reinforcement_sections` DDL above
- [x] `profiles.learning_goal` column — added to profiles DDL above
- [ ] `topic_tags text[]` column on units content table — add when content moves to Supabase; `unitTags.ts` retired at that point
- [ ] Schema version check on import — validate `data.progress.schemaVersion <= SCHEMA_VERSION` in `importProgressSnapshot()`
- [ ] `SupabaseProgressStorage` implementation — implement all `IProgressStorage` methods against Supabase tables
- [ ] `SupabaseSRSStorage` implementation — implement all `ISRSStorage` methods
- [ ] `SupabaseStatsStorage` implementation — implement all `IStatsStorage` methods
- [ ] Replace `mockAuthApi` with `SupabaseAuthApi` wrapping `@supabase/supabase-js` auth

### Stage 2 execution order
1. Set up Supabase project, apply DDL (§1.2), enable RLS (§1.4), deploy RPCs (§1.5)
2. Implement `SupabaseAuthApi` — wire into `AuthContext`, keep `mockAuthApi` path behind `VITE_USE_MOCK_AUTH=true` flag
3. Implement `SupabaseProgressStorage` — wire via `registry.configure()` in bootstrap
4. Implement `SupabaseSRSStorage` — hydrate on login + lazy-load per language
5. Implement `SupabaseStatsStorage` — with batched write queue
6. Implement `migrateLocalStorageToSupabase` — detect and migrate on first login
7. Add `isHydrating` / `hydrateError` loading states to pages that read progress
8. End-to-end smoke test: Register → placement → study → flashcards → level test → profile export
9. Remove `mockAuthApi.ts` and `ls:users` localStorage key

---

## 9. API Surface Summary

| Operation | Method | Supabase call |
|---|---|---|
| Hydrate all progress | `initSession(userId)` | `rpc("hydrate_progress")` |
| Mark lesson complete | `markLessonComplete(langId, lessonId, type)` | `from("lesson_completions").upsert()` |
| Master a unit | `masterUnit(langId, unitId)` | `from("mastered_units").upsert()` |
| Set CEFR level | `setLevel(langId, level)` | `from("user_language_levels").upsert()` |
| Update SRS card | `updateCard(langId, vocabId, quality)` | `from("srs_cards").upsert()` |
| Record stats event | `recordReview/QuizAnswer/Activity` | `rpc("increment_daily_stats")` (batched) |
| Reset language | `resetLanguage(langId)` | `rpc("reset_language_data")` |
| Export progress | `loadAll()` on all three adapters | 3 selects → JSON |
| Import progress | `save()` + `saveAll()` × 2 | bulk upserts |
