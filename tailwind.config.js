/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Body — clean, neutral
        sans: ["Inter", "system-ui", "sans-serif"],
        // Display — distinctive modern grotesque (skild-style headlines)
        display: ["Space Grotesk", "Inter Tight", "system-ui", "sans-serif"],
        // Emphasis — editorial italic serif, the signature "accent word" treatment
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      colors: {
        // Warm near-black "ink" ground — replaces the old blue-tinted navy.
        // Token name kept so existing bg-navy-* classes adopt the new warmth.
        navy: {
          950: "#0A0908",
          900: "#100E0B",
          800: "#1A1713",
          700: "#2A2620",
          600: "#3A352D",
        },
        // Burnt-amber accent — the single signature hue (skild's warm orange).
        // Token name "sky" kept so existing accent classes turn amber automatically.
        sky: {
          100: "#FFE7D6",
          200: "#FFD2B3",
          300: "#FFB488",
          400: "#FF8A4C",
          500: "#FF6A2C",
          600: "#E85518",
        },
        // Soft gold — secondary warm highlight
        gold: {
          200: "#FCEBC4",
          300: "#F7D98B",
          400: "#EFC45C",
          500: "#E0A63A",
        },
        // Warm clay/terracotta — tertiary, keeps variety inside one warm family
        violet: {
          300: "#E6B29A",
          400: "#D4916E",
          500: "#C2764F",
        },
        // Warm neutral ramp — overrides Tailwind's cool "slate" so every
        // text-slate-* / border-slate-* across the site reads warm.
        slate: {
          100: "#F3EFE7",
          200: "#E4DED2",
          300: "#CEC6B6",
          400: "#A49C8D",
          500: "#7C756A",
          600: "#58524A",
          700: "#3A362F",
          800: "#2A2620",
          900: "#1A1713",
        },
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse 85% 55% at 50% 0%, rgba(255,106,44,0.22) 0%, rgba(255,106,44,0.05) 45%, transparent 72%)",
        "aurora": "conic-gradient(from 210deg at 50% 40%, rgba(255,106,44,0.18), rgba(224,166,58,0.12), rgba(194,118,79,0.10), rgba(255,106,44,0.18))",
        "card-sheen": "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 30%, transparent 60%)",
        "warm-floor": "linear-gradient(to top, rgba(255,106,44,0.10) 0%, transparent 40%)",
      },
      boxShadow: {
        "glass": "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 8px 30px -12px rgba(0,0,0,0.75)",
        "card": "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 10px 40px -16px rgba(0,0,0,0.85)",
        "card-hover": "0 1px 0 0 rgba(255,255,255,0.07) inset, 0 20px 60px -20px rgba(255,106,44,0.30), 0 8px 24px -12px rgba(0,0,0,0.85)",
        // Name kept; now a warm amber glow
        "glow-blue": "0 8px 40px -8px rgba(255,106,44,0.45)",
        "pill": "0 1px 0 0 rgba(255,255,255,0.5) inset, 0 8px 20px -8px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "aurora-drift": {
          "0%, 100%": { transform: "translate(-2%, -1%) rotate(0deg) scale(1.05)" },
          "50%": { transform: "translate(2%, 2%) rotate(8deg) scale(1.15)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "aurora-drift": "aurora-drift 22s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
