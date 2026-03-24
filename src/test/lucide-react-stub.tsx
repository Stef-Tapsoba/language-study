// Stub for lucide-react icons — used in vitest where the real package is not installed.
// Each exported icon renders a plain <svg> so components that use lucide icons can still render.
import * as React from "react"

function Icon(props: React.SVGProps<SVGSVGElement>) {
    return <svg {...props} />
}

export const ChevronDown = Icon
export const X = Icon
export const Circle = Icon
export const Check = Icon
export const ChevronRight = Icon
export const AlertTriangle = Icon
