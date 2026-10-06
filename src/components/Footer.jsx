import { Link } from "react-router-dom"

const explore = [
  { to: "/experience", label: "Experience" },
  { to: "/articles", label: "Articles" },
  { to: "/about", label: "About" },
]

const connect = [
  { href: "https://linkedin.com/in/tudor-bejinari", label: "LinkedIn" },
  { href: "https://github.com/tudorbejinari", label: "GitHub" },
]

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-navy-900 text-neutral-400 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 py-14 sm:py-16">
        <div className="grid gap-10 sm:gap-8 sm:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand + statement + contact */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 text-[13px] font-display font-bold text-white">T</span>
              <span className="text-sm font-display font-medium text-neutral-100 group-hover:text-white transition-colors duration-200">
                Tudor<span className="text-sky-500">.b</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-neutral-400">
              <span className="text-neutral-100 font-medium">Reliable test systems</span> with AI
              wired in to write, debug, and maintain them.
            </p>
            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">Reach me at</p>
              <a
                href="mailto:tudorbejinari@outlook.com"
                className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500/15 border border-sky-500/25 px-3 py-1.5 text-sm font-mono text-sky-400 hover:bg-sky-500/25 hover:text-sky-300 transition-colors duration-200"
              >
                tudorbejinari@outlook.com
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          {/* Explore column */}
          <div className="space-y-3.5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">Explore</p>
            <ul className="space-y-2.5">
              {explore.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-neutral-300 hover:text-white transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div className="space-y-3.5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">Connect</p>
            <ul className="space-y-2.5">
              {connect.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-white transition-colors duration-200">
                    {label} <span aria-hidden className="text-neutral-600">↗</span>
                  </a>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-sm text-neutral-300 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[11px] text-neutral-500">© {new Date().getFullYear()} Tudor B. · All rights reserved</p>
          <p className="font-mono text-[11px] text-neutral-600">QA Automation · AI-Augmented Quality</p>
        </div>
      </div>
    </footer>
  )
}
