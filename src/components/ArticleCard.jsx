import { Link } from "react-router-dom"
import TechBadge from "./TechBadge"

export default function ArticleCard({ article }) {
  const { id, title, summary, date, tags } = article
  return (
    <Link
      to={`/articles/${id}`}
      className="group relative block rounded-2xl glass shadow-card p-5 sm:p-6 overflow-hidden hover:shadow-card-hover hover:-translate-y-1 hover:border-black/[0.12] active:scale-[0.99] transition-all duration-300"
    >
      <div className="absolute inset-0 bg-card-sheen opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-[17px] font-semibold text-slate-100 group-hover:text-sky-500 transition-colors duration-200 leading-snug tracking-tight">
            {title}
          </h2>
          <span className="text-slate-500 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-0.5">→</span>
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
