import { Link } from "react-router-dom"
import TechBadge from "../components/TechBadge"

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
  blue:   { text: "text-sky-400",    ring: "group-hover:border-sky-500/40",    glow: "from-sky-500/[0.10]" },
  gold:   { text: "text-gold-300",   ring: "group-hover:border-gold-500/40",   glow: "from-gold-500/[0.08]" },
  violet: { text: "text-violet-400", ring: "group-hover:border-violet-500/40", glow: "from-violet-500/[0.08]" },
}

// Warm near-black field with an amber bloom rising from the floor and a faint
// gold wash up top — the skild-style "dark room, warm light" hero.
const HERO_BG =
  "radial-gradient(68% 50% at 50% 116%, rgba(255,106,44,0.32) 0%, rgba(255,106,44,0) 62%)," +
  "radial-gradient(60% 50% at 50% -12%, rgba(224,166,58,0.12) 0%, transparent 60%)," +
  "linear-gradient(180deg, #0A0908 0%, #120E0A 58%, #1B1109 100%)"

function SectionLabel({ num, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="sec-marker">{num}</span>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.22em]">{children}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative">
      {/* HERO — warm dark field, bottom-anchored, slides under the floating nav */}
      <section
        className="relative -mt-[4.75rem] grain overflow-hidden"
        style={{ background: HERO_BG }}
      >
        {/* Giant faded brand watermark */}
        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 text-[24rem] sm:text-[34rem] leading-none font-display font-bold text-sky-500/[0.06] select-none pointer-events-none animate-float-slow">
          ✳
        </div>

        <div className="relative z-[2] max-w-6xl mx-auto px-6 min-h-[86vh] flex flex-col justify-end pt-32 pb-14 sm:pb-16">
          {/* Eyebrow */}
          <div className="mb-7 animate-fade-up">
            <span className="inline-flex items-center gap-2.5 text-[12.5px] font-medium text-slate-400 tracking-wide">
              <span className="w-6 h-px bg-sky-500/70" />
              QA Automation Engineer · AI-Augmented Quality
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-end">
            {/* Headline — lower left */}
            <h1 className="font-display text-[2.5rem] leading-[1.0] sm:text-6xl lg:text-[4.6rem] font-bold tracking-tightest text-slate-100 animate-fade-up">
              QA Automation
              <br />
              <span className="text-muted-fade">that </span>
              <span className="emphasis text-gradient-blue">ships itself.</span>
            </h1>

            {/* Blurb + CTAs — lower right */}
            <div className="lg:justify-self-end lg:max-w-sm space-y-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-[15px] sm:text-base text-slate-300 leading-relaxed">
                I build reliable automated test systems with Playwright and JavaScript —
                then wire in AI so they write, debug, and maintain <span className="emphasis text-slate-100">themselves</span>.
              </p>
              <div className="flex flex-wrap gap-3">
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

          {/* Floating glass command pill */}
          <div className="mt-12 sm:mt-14 flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-full glass-strong shadow-card pl-4 pr-2 py-2 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <span className="text-lg leading-none text-sky-400">✳</span>
              <span className="text-sm text-slate-200">Let's build something reliable</span>
              <span className="grid place-items-center w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 via-gold-300 to-sky-500 text-navy-950 group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-6 pt-20 sm:pt-28 pb-24 space-y-20 sm:space-y-28">

        {/* Tech stack strip */}
        <section className="space-y-5">
          <SectionLabel num="01">The Stack</SectionLabel>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-2xl">
            Working at the intersection of QA engineering and AI — test infrastructure that scales,
            automation baked into CI/CD, and tools like the Claude API and Cursor that 10x impact
            without sacrificing reliability.
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map(({ label, variant }) => (
              <TechBadge key={label} label={label} variant={variant} />
            ))}
          </div>
        </section>

        {/* Bug Bloodhound */}
        <section className="space-y-4">
          <SectionLabel num="02">The Mascot</SectionLabel>
          <div className="group relative rounded-2xl glass shadow-card overflow-hidden">
            <div className="absolute inset-0 bg-card-sheen pointer-events-none z-[1]" />
            <img
              src="/bug-bloodhound.png"
              alt="The Bug Bloodhound — QA detective illustration"
              className="w-full relative transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </div>
          <div className="rounded-2xl glass shadow-glass px-6 py-6 flex flex-col sm:flex-row sm:items-center gap-2 hairline-top">
            <p className="text-sm font-bold text-slate-100 shrink-0">The Bug Bloodhound</p>
            <span className="hidden sm:block text-slate-700">—</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              My unofficial mascot, brought to life by AI. Generated from our team Slack channel
              where "all software is broken until personally verified" became a running motto.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-6">
          <SectionLabel num="03">Key Results</SectionLabel>
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

      </div>
    </div>
  )
}
