// store/registry.ts — Dependency-injection container for storage adapters.
//
// Holds the active IProgressStorage, ISRSStorage, and IStatsStorage instances.
// Defaults to the localStorage implementations so Stage 1 behaviour is unchanged.
//
// Stage 2 usage (bootstrap once, after Supabase client is ready):
//   import { registry } from "./registry"
//   registry.configure({
//     progress: new SupabaseProgressStorage(supabaseClient),
//     srs:      new SupabaseSRSStorage(supabaseClient),
//     stats:    new SupabaseStatsStorage(supabaseClient),
//   })
//
// All modules that need storage import from here, not from the concrete classes.

import type { IProgressStorage } from "./IProgressStorage"
import type { ISRSStorage } from "./ISRSStorage"
import type { IStatsStorage } from "./IStatsStorage"
import { LocalStorageProgressStorage } from "./LocalStorageProgressStorage"
import { LocalStorageSRSStorage } from "./LocalStorageSRSStorage"
import { LocalStorageStatsStorage } from "./LocalStorageStatsStorage"

interface StorageAdapters {
    progress: IProgressStorage
    srs: ISRSStorage
    stats: IStatsStorage
}

let _adapters: StorageAdapters = {
    progress: new LocalStorageProgressStorage(),
    srs:      new LocalStorageSRSStorage(),
    stats:    new LocalStorageStatsStorage(),
}

let _configured = false

export const registry = {
    get progress(): IProgressStorage { return _adapters.progress },
    get srs():      ISRSStorage      { return _adapters.srs },
    get stats():    IStatsStorage    { return _adapters.stats },

    /** Replace one or more storage adapters. Call once during app bootstrap. */
    configure(adapters: Partial<StorageAdapters>): void {
        if (_configured) {
            console.warn("[registry] configure() called more than once — ignoring. Call configure() exactly once at app bootstrap.")
            return
        }
        _configured = true
        _adapters = { ..._adapters, ...adapters }
    },
}
