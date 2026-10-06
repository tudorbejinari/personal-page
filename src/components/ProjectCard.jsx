import { useState } from "react"
import { Link } from "react-router-dom"
import TechBadge from "./TechBadge"

export default function ProjectCard({ project }) {
  const { title, problem, automated, tools, results, github, article } = project
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen((o) => !o)}
      className="group relative rounded-2xl glass shadow-card p-6 flex flex-col gap-4 overflow-hidden hover:border-black/[0.12] hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none"
    >
      <div className="absolute inset-0 bg-card-sheen opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="font-display text-[17px] font-semibold text-slate-100 leading-snug tracking-tight">{title}</h3>
        <span className={`grid place-items-center w-7 h-7 rounded-full bg-black/[0.04] border border-black/10 text-slate-400 group-hover:text-sky-500 group-hover:border-sky-400/50 transition-all duration-300 shrink-0 text-sm ${open ? "rotate-90" : ""}`}>
          →
        </span>
      </div>

      <div className="relative">
        <p className="font-mono text-[11px] font-medium text-slate-500 uppercase tracking-[0.1em] mb-1.5">Problem</p>
        <p className="text-slate-300 text-sm leading-relaxed">{problem}</p>
      </div>

      <div className="relative flex flex-wrap items-center gap-1.5">
        {tools.map((t) => <TechBadge key={t} label={t} />)}
      </div>

      {open && (
        <div className="relative space-y-4 pt-4 border-t border-black/[0.08]" onClick={(e) => e.stopPropagation()}>
          <div>
            <p className="font-mono text-[11px] font-medium text-slate-500 uppercase tracking-[0.1em] mb-1.5">What I built</p>
            <p className="text-slate-300 text-sm leading-relaxed">{automated}</p>
          </div>

          <ul className="space-y-2">
            {results.map((r) => (
              <li key={r} className="grid grid-cols-[16px_1fr] gap-2 text-sm">
                <span className="text-emerald-600 pt-0.5">✓</span>
                <span className="text-slate-300 leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>

          {(article || github) && (
            <div className="flex gap-4 pt-3 border-t border-black/[0.08]">
              {article && (
                <Link
                  to={`/articles/${article}`}
                  className="text-sm text-sky-600 hover:text-sky-500 font-medium transition-colors duration-200"
                >
                  Read full write-up →
                </Link>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-600 hover:text-sky-500 font-medium transition-colors duration-200"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
