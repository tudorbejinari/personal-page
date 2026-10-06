/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Geist everywhere — the typeface skild.ai uses
        sans: ["Geist", "system-ui", "sans-serif"],
        display: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      colors: {
        // Dark family — used for the footer band and dark accents on the light site.
        navy: {
          950: "#121212",
          900: "#1A1A1A",
          800: "#242424",
          700: "#333333",
          600: "#4A4A4A",
        },
        // Orange accent — skild's signature (#FF7E00). Token name "sky" kept.
        sky: {
          100: "#FFECD6",
          200: "#FFD3A8",
          300: "#FFB36B",
          400: "#FF9533",
          500: "#FF7E00",
          600: "#E66F00",
        },
        // Darker amber — legible warm highlight on a light ground
        gold: {
          200: "#E8B860",
          300: "#D49A1F",
          400: "#B8820A",
          500: "#946700",
        },
        // Warm clay — tertiary, keeps variety within one warm family
        violet: {
          300: "#C08457",
          400: "#A66A3D",
          500: "#8A5530",
        },
        // Warm neutral ramp. Convention: LOWER index = HIGHER contrast on white.
        // (slate-100 = near-black headings … slate-700 = faint hairlines.)
        // Tuned dark for strong readability on a white ground.
        slate: {
          100: "#14110C",
          200: "#1E1A14",
          300: "#241F18",
          400: "#4A443A",
          500: "#6B6356",
          600: "#8A8275",
          700: "#C6BEB1",
          800: "#E2DBD0",
          900: "#F1ECE4",
        },
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,126,0,0.10) 0%, rgba(255,126,0,0.02) 45%, transparent 72%)",
        "aurora": "conic-gradient(from 210deg at 50% 40%, rgba(255,126,0,0.12), rgba(212,154,31,0.08), rgba(192,132,87,0.07), rgba(255,126,0,0.12))",
        "card-sheen": "linear-gradient(160deg, rgba(255,126,0,0.06) 0%, rgba(255,126,0,0.01) 40%, transparent 65%)",
        "warm-floor": "linear-gradient(to top, rgba(255,126,0,0.08) 0%, transparent 40%)",
        // Faint technical "+" crosshatch (skild's engineering texture)
        "tech-grid": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='none' stroke='%231a1713' stroke-opacity='0.07' stroke-width='1'%3E%3Cpath d='M24 20v8M20 24h8'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glass": "0 1px 2px 0 rgba(26,23,19,0.04), 0 8px 24px -16px rgba(26,23,19,0.14)",
        "card": "0 1px 2px 0 rgba(26,23,19,0.05), 0 12px 36px -18px rgba(26,23,19,0.18)",
        "card-hover": "0 1px 2px 0 rgba(26,23,19,0.06), 0 22px 50px -22px rgba(255,126,0,0.30), 0 10px 28px -18px rgba(26,23,19,0.22)",
        // Name kept; now a warm amber glow
        "glow-blue": "0 8px 30px -8px rgba(255,126,0,0.40)",
        "pill": "0 1px 2px 0 rgba(26,23,19,0.10), 0 8px 20px -10px rgba(26,23,19,0.25)",
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
