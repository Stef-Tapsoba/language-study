/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** When "true", bypasses authentication and injects a debug session.
     *  Active in development via .env.development. Never set in production. */
    readonly VITE_DEBUG: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
