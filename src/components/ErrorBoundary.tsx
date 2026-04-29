// components/ErrorBoundary.tsx — Catches unhandled React render errors.
//
// Wraps the app tree so a single component crash does not white-screen the
// entire application. Displays a minimal recovery UI instead.

import { Component, type ErrorInfo, type ReactNode } from "react"
import { logError } from "../utils/logger"

interface Props { children: ReactNode }
interface State { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false }

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        logError("ErrorBoundary", error)
        if (info.componentStack) {
            logError("ErrorBoundary.componentStack", info.componentStack)
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <p className="text-4xl">Something went wrong</p>
                    <p className="text-text-sec text-sm max-w-md">
                        An unexpected error occurred. Try refreshing the page.
                    </p>
                    <button
                        onClick={() => { this.setState({ hasError: false }); window.location.assign("/home") }}
                        className="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors"
                    >
                        Go to home
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}
