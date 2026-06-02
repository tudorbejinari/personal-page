import { useState } from "react"
import { Link } from "react-router-dom"
import TechBadge from "./TechBadge"

export default function ProjectCard({ project }) {
  const { title, problem, automated, tools, results, github, article } = project
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen((o) => !o)}
      className="group rounded-xl border border-navy-700/80 bg-navy-900 p-6 flex flex-col gap-4 hover:border-sky-500/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer select-none"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
        <span className={`text-slate-500 group-hover:text-sky-400 transition-all duration-200 shrink-0 mt-0.5 text-sm ${open ? "rotate-90" : ""}`}>
          →
        </span>
      </div>

      <div>
        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Problem</p>
        <p className="text-slate-300 text-sm leading-relaxed">{problem}</p>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {tools.map((t) => <TechBadge key={t} label={t} />)}
      </div>

      {open && (
        <div className="space-y-4 pt-1 border-t border-navy-700/60" onClick={(e) => e.stopPropagation()}>
          <div>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">What I built</p>
            <p className="text-slate-300 text-sm leading-relaxed">{automated}</p>
          </div>

          <ul className="space-y-2">
            {results.map((r) => (
              <li key={r} className="grid grid-cols-[16px_1fr] gap-2 text-sm">
                <span className="text-emerald-400 pt-0.5">✓</span>
                <span className="text-slate-300 leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>

          {(article || github) && (
            <div className="flex gap-4 pt-1 border-t border-navy-700/60">
              {article && (
                <Link
                  to={`/articles/${article}`}
                  className="text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors duration-200"
                >
                  Read full write-up →
                </Link>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors duration-200"
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
