/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter Tight", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      colors: {
        // Deep, blue-tinted near-black base — the "cinematic midnight" ground
        navy: {
          950: "#04060C",
          900: "#080B14",
          800: "#0D1220",
          700: "#1A2233",
          600: "#28324a",
        },
        // Refined azure accent — cooler, cleaner than the old sky
        sky: {
          300: "#8CCBFF",
          400: "#4DA8F5",
          500: "#1E8CEB",
          600: "#0E6FCC",
        },
        // Warm ember highlight, used sparingly for that premium glow
        gold: {
          300: "#FBD98B",
          400: "#F5C15C",
          500: "#E8A13A",
        },
        violet: {
          400: "#A99BF7",
          500: "#8B7CF0",
        },
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(30,140,235,0.28) 0%, rgba(30,140,235,0.06) 45%, transparent 72%)",
        "aurora": "conic-gradient(from 210deg at 50% 40%, rgba(30,140,235,0.16), rgba(139,124,240,0.11), rgba(232,161,58,0.08), rgba(30,140,235,0.16))",
        "card-sheen": "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 30%, transparent 60%)",
        "warm-floor": "linear-gradient(to top, rgba(232,161,58,0.10) 0%, transparent 40%)",
      },
      boxShadow: {
        "glass": "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 8px 30px -12px rgba(0,0,0,0.7)",
        "card": "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 10px 40px -16px rgba(0,0,0,0.8)",
        "card-hover": "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 20px 60px -20px rgba(14,111,204,0.35), 0 8px 24px -12px rgba(0,0,0,0.8)",
        "glow-blue": "0 8px 40px -8px rgba(30,140,235,0.45)",
        "pill": "0 1px 0 0 rgba(255,255,255,0.4) inset, 0 8px 20px -8px rgba(0,0,0,0.5)",
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
