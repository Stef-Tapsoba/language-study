// auth/ProtectedRoute.tsx — Route guard that redirects unauthenticated users to /
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./AuthContext"
import { DEBUG } from "./debugSession"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { session, loading } = useAuth()
    const location = useLocation()

    // Debug mode: AuthContext already has a stub session, but guard this as
    // a second line of defence so no spinner or redirect ever fires.
    if (DEBUG) return <>{children}</>

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    if (!session) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return <>{children}</>
}
