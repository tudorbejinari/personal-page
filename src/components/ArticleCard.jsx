import { Link } from "react-router-dom"
import TechBadge from "./TechBadge"

export default function ArticleCard({ article }) {
  const { id, title, summary, date, tags } = article
  return (
    <Link
      to={`/articles/${id}`}
      className="group block rounded-xl border border-navy-700/60 bg-navy-900 p-5 sm:p-6 hover:border-sky-500/40 hover:shadow-card active:scale-[0.99] transition-all duration-200"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors duration-200 leading-snug">
            {title}
          </h2>
          <span className="text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-0.5">→</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{summary}</p>
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
          <time className="text-xs text-slate-600 whitespace-nowrap shrink-0">{date}</time>
        </div>
      </div>
    </Link>
  )
}
