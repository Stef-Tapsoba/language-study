// components/DebugBadge.tsx — Fixed overlay shown only when VITE_DEBUG=true
//
// Renders a small persistent badge so it's always obvious the app is running
// in debug mode. Does not render in production.

import { DEBUG } from "../auth/debugSession"

export function DebugBadge() {
    if (!DEBUG) return null
    return (
        <div className="fixed bottom-3 right-3 z-50 flex items-center gap-1.5
                        bg-amber-400 text-amber-900 text-xs font-bold
                        px-2.5 py-1 rounded-full shadow-md select-none pointer-events-none">
            <span>🔧</span>
            <span>DEBUG</span>
        </div>
    )
}
