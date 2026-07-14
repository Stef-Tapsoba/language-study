// store/outbox.ts — Persisted write queue for Supabase mutations.
//
// Every hot-path Supabase write goes through syncOrQueue(): try the write,
// and on failure (offline, network error, RLS hiccup) persist the operation
// to localStorage and rethrow so the UI can surface the error. Queued ops are
// replayed in FIFO order:
//   - when the browser fires 'online'
//   - at the start of the next session (useProgressStore.initUserSession
//     flushes BEFORE hydration so the fresh cache reflects queued writes)
//
// All queued writes are idempotent upserts/updates on natural keys, so
// last-write-wins replay is safe. Ops with the same `key` are coalesced on
// enqueue (newest payload wins); rpc-stat ops with the same key SUM their
// deltas instead. Stat increments are therefore at-least-once: an ambiguous
// timeout (write landed but response was lost) can double-count a stat —
// accepted trade-off, progress/SRS/preference ops are all fully idempotent.

import type { SupabaseClient } from "@supabase/supabase-js"
import { logError } from "../utils/logger"

export interface IncrementDailyStatArgs {
    p_user_id: string
    p_lang_id: string
    p_date: string
    p_reviewed: number
    p_correct: number
    p_acts: number
    p_q_total: number
    p_q_correct: number
}

export type OutboxOp =
    | { kind: "upsert"; table: string; payload: Record<string, unknown>; onConflict: string; key: string }
    | { kind: "update"; table: string; payload: Record<string, unknown>; match: Record<string, unknown>; key: string }
    | { kind: "rpc-stat"; args: IncrementDailyStatArgs; key: string }

interface QueuedOp {
    op: OutboxOp
    tries: number
    ts: number
}

const MAX_TRIES = 10
const storageKey = (userId: string) => `ls:outbox:${userId}`

let _sb: SupabaseClient | null = null
let _userId: string | null = null
let _flushing = false

function readQueue(): QueuedOp[] {
    if (!_userId) return []
    try {
        const raw = localStorage.getItem(storageKey(_userId))
        const parsed = raw ? JSON.parse(raw) : []
        return Array.isArray(parsed) ? parsed : []
    } catch {
        return []
    }
}

function writeQueue(queue: QueuedOp[]): void {
    if (!_userId) return
    try {
        if (queue.length === 0) localStorage.removeItem(storageKey(_userId))
        else localStorage.setItem(storageKey(_userId), JSON.stringify(queue))
    } catch (err) {
        logError("outbox.writeQueue", err)
    }
}

async function execute(sb: SupabaseClient, op: OutboxOp): Promise<void> {
    // supabase-js resolves { error } instead of rejecting — promote to a throw
    // so callers and flush() see one failure channel.
    if (op.kind === "upsert") {
        const { error } = await sb.from(op.table).upsert(op.payload, { onConflict: op.onConflict })
        if (error) throw error
    } else if (op.kind === "update") {
        let query = sb.from(op.table).update(op.payload)
        for (const [col, val] of Object.entries(op.match)) query = query.eq(col, val)
        const { error } = await query
        if (error) throw error
    } else {
        const { error } = await sb.rpc("increment_daily_stat", op.args)
        if (error) throw error
    }
}

export const outbox = {
    /** Wire the Supabase client once at Stage 2 bootstrap (main.tsx). */
    configure(sb: SupabaseClient): void {
        _sb = sb
        registerOnlineListener()
    },

    /** Scope the queue to the logged-in user. Call before flush() on login. */
    setUser(userId: string): void {
        _userId = userId
    },

    /** Number of ops currently queued (for tests / diagnostics). */
    size(): number {
        return readQueue().length
    },

    /**
     * Queue an op for later replay. Ops with the same key are coalesced:
     * newest payload wins (LWW); rpc-stat deltas are summed.
     */
    enqueue(op: OutboxOp): void {
        if (!_userId) return
        const queue = readQueue()
        const existing = queue.findIndex(q => q.op.key === op.key && q.op.kind === op.kind)
        if (existing >= 0) {
            if (op.kind === "rpc-stat") {
                const prev = queue[existing].op as Extract<OutboxOp, { kind: "rpc-stat" }>
                queue[existing] = {
                    ...queue[existing],
                    op: {
                        ...op,
                        args: {
                            ...op.args,
                            p_reviewed:  prev.args.p_reviewed  + op.args.p_reviewed,
                            p_correct:   prev.args.p_correct   + op.args.p_correct,
                            p_acts:      prev.args.p_acts      + op.args.p_acts,
                            p_q_total:   prev.args.p_q_total   + op.args.p_q_total,
                            p_q_correct: prev.args.p_q_correct + op.args.p_q_correct,
                        },
                    },
                }
            } else {
                queue[existing] = { ...queue[existing], op }
            }
        } else {
            queue.push({ op, tries: 0, ts: Date.now() })
        }
        writeQueue(queue)
    },

    /**
     * Replay the queue in FIFO order. Stops at the first failure (likely still
     * offline), bumping that op's retry count; ops that exceed MAX_TRIES are
     * dropped with a log. Re-entrant calls no-op while a flush is running.
     */
    async flush(): Promise<void> {
        if (_flushing || !_sb || !_userId) return
        _flushing = true
        try {
            let queue = readQueue()
            while (queue.length > 0) {
                const head = queue[0]
                try {
                    await execute(_sb, head.op)
                    queue = queue.slice(1)
                    writeQueue(queue)
                } catch (err) {
                    head.tries += 1
                    if (head.tries >= MAX_TRIES) {
                        logError(`outbox.flush — dropping op after ${MAX_TRIES} attempts: ${head.op.key}`, err)
                        queue = queue.slice(1)
                        writeQueue(queue)
                        continue
                    }
                    writeQueue(queue)
                    break   // likely offline — leave the rest for the next flush
                }
            }
        } finally {
            _flushing = false
        }
    },

    /** ONLY for tests. */
    _resetForTests(): void {
        if (import.meta.env.PROD) throw new Error("[outbox] _resetForTests() must not be called in production")
        _sb = null
        _userId = null
        _flushing = false
    },
}

/**
 * Execute an op immediately; on failure queue it for replay and rethrow so
 * the caller can surface the error (e.g. mutationError banner).
 */
export async function syncOrQueue(sb: SupabaseClient, op: OutboxOp): Promise<void> {
    try {
        await execute(sb, op)
    } catch (err) {
        outbox.enqueue(op)
        throw err
    }
}

// Register the 'online' replay trigger once. HMR-safe: the flag survives
// hot-replacement of this module (same pattern as store/registry.ts).
let _listenerRegistered = false
if (import.meta.hot) {
    _listenerRegistered = (import.meta.hot.data as { registered?: boolean } | undefined)?.registered ?? false
    import.meta.hot.dispose(data => { (data as { registered?: boolean }).registered = _listenerRegistered })
}

function registerOnlineListener(): void {
    if (_listenerRegistered || typeof window === "undefined") return
    _listenerRegistered = true
    window.addEventListener("online", () => {
        outbox.flush().catch(err => logError("outbox.onOnline", err))
    })
}
