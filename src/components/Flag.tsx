// components/Flag.tsx — Country flag image component (avoids emoji flags which don't render on Windows)

const LANG_TO_COUNTRY: Record<string, string> = {
    es: "es",  // Spain
    fr: "fr",  // France
    it: "it",  // Italy
    ja: "jp",  // Japan
    ko: "kr",  // South Korea
}

// flagcdn.com available widths: 20 | 40 | 80 | 160 | 320 | 640 | 1280
function cdnSrc(code: string, width: 20 | 40 | 80 | 160) {
    return `https://flagcdn.com/w${width}/${code}.png`
}

interface FlagProps {
    langId: string
    /** Rendered width in px. Height is calculated automatically (≈ 3:4 ratio). */
    size?: "sm" | "md" | "lg"
    className?: string
}

const SIZE_MAP = {
    sm: { w: 20, src: 20, src2x: 40 } as const,
    md: { w: 28, src: 40, src2x: 80 } as const,
    lg: { w: 40, src: 80, src2x: 160 } as const,
}

export function Flag({ langId, size = "md", className = "" }: Readonly<FlagProps>) {
    const code = LANG_TO_COUNTRY[langId]
    if (!code) return null
    const { w, src, src2x } = SIZE_MAP[size]
    return (
        <img
            src={cdnSrc(code, src)}
            srcSet={`${cdnSrc(code, src2x)} 2x`}
            width={w}
            alt={`${langId} flag`}
            className={`inline-block rounded-sm object-cover ${className}`}
            style={{ aspectRatio: "4/3" }}
        />
    )
}
