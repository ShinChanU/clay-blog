import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      screens: {
        '2xl': '64rem',
        lg: '48rem',
        md: '100%',
        sm: '100%',
        xl: '64rem',
      },
    },
    extend: {
      borderColor: {
        DEFAULT: 'var(--border)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      colors: {
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        background: 'var(--background)',
        border: 'var(--border)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        'chart-1': 'var(--chart-1)',
        'chart-2': 'var(--chart-2)',
        'chart-3': 'var(--chart-3)',
        'chart-4': 'var(--chart-4)',
        'chart-5': 'var(--chart-5)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        foreground: 'var(--foreground)',
        input: 'var(--input)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        ring: 'var(--ring)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      fontSize: {
        'inherit-sm': ['0.875em', { lineHeight: '1.25' }], // 부모 크기 기준으로 작게
      },
      spacing: {
        lg: 'var(--spacing-lg)',
        md: 'var(--spacing-md)',
        sm: 'var(--spacing-sm)',
        xl: 'var(--spacing-xl)',
      },
    },
  },
} satisfies Config;
