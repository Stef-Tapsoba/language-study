import type { Config } from "tailwindcss"

export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
    	extend: {
    		colors: {
    			/* ── Semantic surface tokens ─────────────────────────────────────── */
    			surface: {
    				app:      'var(--surface-app)',
    				card:     'var(--surface-card)',
    				elevated: 'var(--surface-elevated)',
    				inset:    'var(--surface-inset)',
    			},
    			/* ── Border tokens ───────────────────────────────────────────────── */
    			'border-subtle':  'var(--border-subtle)',
    			'border-default': 'var(--border-default)',
    			'border-strong':  'var(--border-strong)',
    			/* ── Text tokens ─────────────────────────────────────────────────── */
    			'text-pri': 'var(--text-primary)',
    			'text-sec': 'var(--text-secondary)',
    			'text-ter': 'var(--text-tertiary)',
    			/* ── Semantic accents ────────────────────────────────────────────── */
    			grammar: {
    				DEFAULT: 'var(--accent-grammar)',
    				surface: 'var(--accent-grammar-surface)',
    				border:  'var(--accent-grammar-border)',
    			},
    			vocab: {
    				DEFAULT: 'var(--accent-vocab)',
    				surface: 'var(--accent-vocab-surface)',
    				border:  'var(--accent-vocab-border)',
    			},
    			verbs: {
    				DEFAULT: 'var(--accent-verbs)',
    				surface: 'var(--accent-verbs-surface)',
    				border:  'var(--accent-verbs-border)',
    			},
    			reading: {
    				DEFAULT: 'var(--accent-reading)',
    				surface: 'var(--accent-reading-surface)',
    				border:  'var(--accent-reading-border)',
    			},
    			listening: {
    				DEFAULT: 'var(--accent-listening)',
    				surface: 'var(--accent-listening-surface)',
    				border:  'var(--accent-listening-border)',
    			},
    			culture: {
    				DEFAULT: 'var(--accent-culture)',
    				surface: 'var(--accent-culture-surface)',
    				border:  'var(--accent-culture-border)',
    			},
    			streak: {
    				DEFAULT: 'var(--accent-streak)',
    				surface: 'var(--streak-surface)',
    				border:  'var(--streak-border)',
    				muted:   'var(--streak-muted)',
    			},
    			romanized: 'var(--accent-romanized)',
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			}
    		},
    		fontFamily: {
    			body: [
    				'var(--font-body)'
    			],
    			heading: [
    				'var(--font-heading)'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		borderWidth: {
    			hairline: '0.5px',
    		},
    		boxShadow: {
    			sm: 'var(--shadow-sm)',
    			md: 'var(--shadow-md)',
    			lg: 'var(--shadow-lg)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")]
} satisfies Config
