// components/DebugBadge.tsx — Fixed overlay shown only when VITE_DEBUG=true
//
// Clickable toggle: switches between full debug (everything unlocked) and
// real-user view (normal lock rules apply). Only renders in debug mode.

import { DEBUG, useDebugUnlock, toggleDebugUnlock } from "../auth/debugSession"

export function DebugBadge() {
    const unlockAll = useDebugUnlock()
    if (!DEBUG) return null
    return (
        <button
            onClick={toggleDebugUnlock}
            className={`fixed bottom-3 right-3 z-50 flex items-center gap-1.5
                        text-xs font-bold px-2.5 py-1 rounded-full shadow-md
                        transition-colors cursor-pointer
                        ${unlockAll
                            ? "bg-amber-400 text-amber-900"
                            : "bg-slate-600 text-slate-100"}`}
            title={unlockAll ? "Debug: everything unlocked. Click to view as real user." : "Viewing as real user. Click to unlock everything."}
        >
            <span>{unlockAll ? "UNLOCKED" : "USER VIEW"}</span>
        </button>
    )
}
