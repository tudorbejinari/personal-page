import { useState } from "react"
import { Link } from "react-router-dom"
import TechBadge from "../components/TechBadge"

function HeroBg() {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1536242918817-db5e93c7a0e4?w=1400&q=70&fit=crop&auto=format&fm=webp"
        alt=""
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(2,8,16,0.92)" }} />
    </>
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
  { metric: "10x", label: "Impact with AI-assisted testing", color: "violet" },
]

const styleMap = {
  blue:   { border: "border-sky-500/20 hover:border-sky-500/40",   glow: "from-sky-500/5",   text: "text-sky-400" },
  gold:   { border: "border-gold-500/20 hover:border-gold-500/40", glow: "from-gold-500/5",   text: "text-gold-400" },
  violet: { border: "border-violet-500/20 hover:border-violet-500/40", glow: "from-violet-500/5", text: "text-violet-400" },
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero background image */}
      <HeroBg />
      {/* Base hero gradient */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      {/* Ambient orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-violet-500/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-sky-400/6 blur-[80px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-20 sm:pt-24 sm:pb-32 space-y-16 sm:space-y-24">

        {/* Hero */}
        <section className="max-w-2xl space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
              QA Automation
              <span className="block text-gradient-blue pb-2">Engineer</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
              API & UI testing specialist. I build reliable automated test systems
              with Playwright and JavaScript — then use AI to build them faster.
            </p>
          </div>

          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            I work at the intersection of QA engineering and AI — designing test infrastructure
            that scales, integrating automation into CI/CD pipelines, and using tools like
            Claude API and Cursor to 10x engineering impact without sacrificing reliability.
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map(({ label, variant }) => (
              <TechBadge key={label} label={label} variant={variant} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
            <Link
              to="/articles"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 text-white font-medium text-sm hover:bg-sky-400 transition-all duration-200 shadow-glow-blue"
            >
              Read My Articles
            </Link>
            <Link
              to="/experience"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm hover:border-sky-500/50 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm hover:border-sky-500/50 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Bug Bloodhound */}
        <section className="space-y-4">
          <div className="rounded-xl border border-navy-700/60 bg-navy-900 overflow-hidden">
            <img
              src="/bug-bloodhound.png"
              alt="The Bug Bloodhound — QA detective illustration"
              className="w-full"
            />
          </div>
          <div className="rounded-xl border border-navy-700/60 bg-navy-900 px-6 py-8 flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="text-sm font-bold text-white shrink-0">The Bug Bloodhound</p>
            <span className="hidden sm:block text-slate-700">—</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              My unofficial mascot, brought to life by AI. Generated from our team Slack channel
              where "all software is broken until personally verified" became a running motto.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Key Results
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map(({ metric, label, color }) => {
              const s = styleMap[color]
              return (
                <div
                  key={metric}
                  className={`rounded-xl border ${s.border} bg-navy-900 p-6 transition-all duration-300 hover:shadow-card bg-gradient-to-br ${s.glow} to-transparent`}
                >
                  <p className={`text-4xl font-bold mb-1.5 ${s.text}`}>{metric}</p>
                  <p className="text-slate-400 text-sm leading-snug">{label}</p>
                </div>
              )
            })}
          </div>
        </section>

      </div>
    </div>
  )
}
