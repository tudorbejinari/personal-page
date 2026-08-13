import { useState } from "react"
import { Link } from "react-router-dom"
import TechBadge from "../components/TechBadge"

function HeroBg() {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Cinematic photograph — visible, not smothered */}
      <img
        src="https://images.unsplash.com/photo-1536242918817-db5e93c7a0e4?w=1600&q=80&fit=crop&auto=format&fm=webp"
        alt=""
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ${loaded ? "opacity-60" : "opacity-0"}`}
      />
      {/* Directional wash: darker on the left where the copy sits, fading down to the base */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(105deg, rgba(4,6,12,0.94) 0%, rgba(4,6,12,0.72) 42%, rgba(4,6,12,0.45) 100%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(4,6,12,0.85) 65%, #04060C 100%)" }}
      />
      {/* Brand watermark glyph */}
      <div className="absolute -right-16 top-4 sm:right-4 sm:top-2 text-[22rem] sm:text-[30rem] leading-none font-display font-bold text-white/[0.025] select-none animate-float-slow">
        ✳
      </div>
      {/* Warm ember floor — the premium glow from the reference */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-warm-floor" />
    </div>
  )
}

const stack = [
  { label: "Playwright", variant: "blue" },
  { label: "Cypress", variant: "blue" },
  { label: "TestComplete", variant: "blue" },
  { label: "JavaScript", variant: "gold" },
  { label: "Node.js", variant: "gold" },
  { label: "Postman", variant: "blue" },
  { label: "CI/CD", variant: "violet" },
  { label: "Claude API", variant: "violet" },
  { label: "Cursor", variant: "violet" },
]

const achievements = [
  { metric: "80%", label: "Reduction in flaky tests", color: "blue" },
  { metric: "33%", label: "Faster test suite runs", color: "gold" },
  { metric: "90%", label: "Faster visual regression QA", color: "violet" },
]

const styleMap = {
  blue:   { text: "text-sky-300",    ring: "group-hover:border-sky-500/40",    glow: "from-sky-500/[0.08]" },
  gold:   { text: "text-gold-300",   ring: "group-hover:border-gold-500/40",   glow: "from-gold-500/[0.08]" },
  violet: { text: "text-violet-400", ring: "group-hover:border-violet-500/40", glow: "from-violet-500/[0.08]" },
}

export default function Home() {
  return (
    <div className="relative">
      {/* HERO — slides up under the translucent floating nav */}
      <section className="relative -mt-[4.75rem] grain overflow-hidden">
        <HeroBg />
        {/* Aurora glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[130%] h-[520px] bg-aurora blur-[90px] opacity-70 animate-aurora-drift pointer-events-none" />

        <div className="relative z-[2] max-w-5xl mx-auto px-6 pt-32 sm:pt-44 pb-16 sm:pb-28">
          <div className="max-w-2xl space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium glass text-emerald-300 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)] animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] font-bold tracking-tightest text-white animate-fade-up" style={{ animationDelay: "0.05s" }}>
              QA Automation
              <br />
              <span className="text-muted-fade">that ships itself.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              I build reliable automated test systems with Playwright and JavaScript —
              then wire in AI so they write, debug, and maintain themselves.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Working at the intersection of QA engineering and AI — test infrastructure
              that scales, automation baked into CI/CD, and tools like the Claude API and
              Cursor that 10x impact without sacrificing reliability.
            </p>

            <div className="flex flex-wrap gap-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {stack.map(({ label, variant }) => (
                <TechBadge key={label} label={label} variant={variant} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <Link to="/articles" className="btn-pill">
                Read my articles
                <span aria-hidden>→</span>
              </Link>
              <Link to="/experience" className="btn-ghost">
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-6 pb-24 space-y-20 sm:space-y-28">

        {/* Bug Bloodhound */}
        <section className="space-y-4">
          <div className="group relative rounded-2xl glass shadow-card overflow-hidden">
            <div className="absolute inset-0 bg-card-sheen pointer-events-none z-[1]" />
            <img
              src="/bug-bloodhound.png"
              alt="The Bug Bloodhound — QA detective illustration"
              className="w-full relative transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </div>
          <div className="rounded-2xl glass shadow-glass px-6 py-6 flex flex-col sm:flex-row sm:items-center gap-2 hairline-top">
            <p className="text-sm font-bold text-white shrink-0">The Bug Bloodhound</p>
            <span className="hidden sm:block text-slate-700">—</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              My unofficial mascot, brought to life by AI. Generated from our team Slack channel
              where "all software is broken until personally verified" became a running motto.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">
            Key Results
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map(({ metric, label, color }) => {
              const s = styleMap[color]
              return (
                <div
                  key={metric}
                  className={`group relative rounded-2xl glass shadow-card p-6 overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-white/[0.08] ${s.ring}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <p className={`relative font-display text-5xl font-bold mb-2 tracking-tight ${s.text}`}>{metric}</p>
                  <p className="relative text-slate-400 text-sm leading-snug">{label}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Floating glass command bar — the reference's bottom capsule */}
        <section>
          <Link
            to="/contact"
            className="group relative mx-auto max-w-md flex items-center gap-3 rounded-full glass-strong shadow-card px-5 py-3 hover:-translate-y-0.5 transition-transform duration-300"
          >
            <span className="grid place-items-center w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 text-navy-950 text-sm shadow-glow-blue">✳</span>
            <span className="flex-1 text-sm text-slate-300">Let's build something reliable together</span>
            <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-navy-950 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </section>

      </div>
    </div>
  )
}
