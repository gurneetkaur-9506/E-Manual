/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          void: '#050608',
          base: '#080B0F',
          panel: '#0C1017',
          surface: '#111620',
          elevated: '#161D2A',
          highlight: '#1C2536',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(0, 240, 255, 0.3)',
        },
        cyber: {
          cyan: '#00F0FF',
          sky: '#38BDF8',
          blue: '#3B82F6',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          purple: '#A855F7',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Space Grotesk', 'Inter', 'sans-serif'],
        tech: ['Space Grotesk', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(0, 240, 255, 0.35)',
        'glow-violet': '0 0 25px -4px rgba(139, 92, 246, 0.35)',
        'glow-emerald': '0 0 25px -4px rgba(16, 185, 129, 0.35)',
        'glow-amber': '0 0 25px -4px rgba(245, 158, 11, 0.35)',
        'panel': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'panel-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(0, 240, 255, 0.25), 0 0 30px -10px rgba(0, 240, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
