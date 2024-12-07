/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
import { type Config } from 'tailwindcss'

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
	darkMode: ['class'],
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
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
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
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
				},
				'fade-in-down': {
					from: {
						opacity: '0', transform: 'translateY(-20px)'
					},
					to: {
						opacity: '1', transform: 'translateY(0)'
					}
				},
				'fade-out-up': {
					from: {
						opacity: '1', transform: 'translateY(0)'
					},
					to: {
						opacity: '0', transform: 'translateY(-20px)'
					}
				},
				'fade-bottom-up': {
					from: {
						opacity: '0', transform: 'translateY(80px)'
					},
					to: {
						opacity: '1', transform: 'translateY(0)'
					}
				},
				'fade-bottom-up-short': {
					from: {
						opacity: '0', transform: 'translateY(10px)'
					},
					to: {
						opacity: '1', transform: 'translateY(0)'
					}
				},
				'fade-left': {
					from: {
						opacity: '0', transform: 'translateX(-20px)'
					},
					to: {
						opacity: '1', transform: 'translateX(0)'
					}
				},
				'fade-right': {
					from: {
						opacity: '0', transform: 'translateX(20px)'
					},
					to: {
						opacity: '1', transform: 'translateX(0)'
					}
				},
				'spotlight': {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)',
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)',
					}
				},
				'scroll': {
					to: { transform: 'translate(calc(-50% - 0.5rem))', }
				},
				'round': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'rotate360': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(-360deg)' }
				},
			},
			animation: {
				'spotlight': 'spotlight 2s ease .75s 1 forwards',
			}
		}
	},
	plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}