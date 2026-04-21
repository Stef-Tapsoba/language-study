// auth/authRegistry.ts — DI container for the auth service.
//
// Defaults to the mock AuthService so Stage 1 behaviour is unchanged.
//
// Stage 2 usage (bootstrap once, after Supabase client is ready):
//   import { authRegistry } from "./authRegistry"
//   authRegistry.configure(new AuthService(supabaseAuthApi, new LocalStorageAdapter("ls")))
//
// AuthProvider reads from this registry instead of creating a module-scoped
// instance, so swapping the implementation at Stage 2 requires no page changes.

import { AuthService } from "@myorg/auth-core"
import { LocalStorageAdapter } from "@myorg/storage"
import { mockAuthApi } from "./mockAuthApi"

let _service: AuthService = new AuthService(mockAuthApi, new LocalStorageAdapter("ls"))
let _configured = false

export const authRegistry = {
    get service(): AuthService { return _service },

    /** Replace the auth service. Call once during app bootstrap before AuthProvider mounts. */
    configure(service: AuthService): void {
        if (_configured) {
            console.warn("[authRegistry] configure() called more than once — ignoring.")
            return
        }
        _configured = true
        _service = service
    },
}

if (import.meta.hot) {
    _configured = (import.meta.hot.data as { configured?: boolean } | undefined)?.configured ?? false
    import.meta.hot.dispose(data => { (data as { configured?: boolean }).configured = _configured })
}
