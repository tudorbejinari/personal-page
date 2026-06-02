import { Link } from "react-router-dom"
import TechBadge from "./TechBadge"

export default function ArticleCard({ article }) {
  const { id, title, summary, date, tags } = article
  return (
    <Link
      to={`/articles/${id}`}
      className="group block rounded-xl border border-navy-700/60 bg-navy-900 p-6 hover:border-sky-500/40 hover:shadow-card transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3 flex-1 min-w-0">
          <h2 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors duration-200 leading-snug">
            {title}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">{summary}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
        </div>
        <time className="text-xs text-slate-600 whitespace-nowrap mt-0.5 shrink-0">{date}</time>
      </div>
    </Link>
  )
}
