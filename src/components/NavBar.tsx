// components/NavBar.tsx
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import { LevelBadge } from "./LevelBadge"
import { CEFRLevel } from "../types"

interface NavBarProps {
    title?: string
    level?: CEFRLevel
    /** If provided, renders a back button that navigates to this path */
    backTo?: string
}

export function NavBar({ title = "Language Study", level, backTo }: NavBarProps) {
    const { logout } = useAuth()
    const navigate = useNavigate()

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-3xl mx-auto px-4 h-14 flex items-center gap-3">
                {backTo && (
                    <button
                        onClick={() => navigate(backTo)}
                        className="p-1 -ml-1 mr-1 text-gray-500 hover:text-gray-800 rounded"
                        aria-label="Go back"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                <span className="font-semibold text-gray-900 flex-1 truncate">{title}</span>

                {level && <LevelBadge level={level} />}

                <Link
                    to="/profile"
                    className="p-1 text-gray-400 hover:text-gray-700 shrink-0"
                    aria-label="Profile"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z" />
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>

                <button
                    onClick={logout}
                    className="text-sm text-gray-500 hover:text-gray-800 shrink-0"
                >
                    Sign out
                </button>
            </div>
        </nav>
    )
}
