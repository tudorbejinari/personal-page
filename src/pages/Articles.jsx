import { articles } from "../data/articles"
import ArticleCard from "../components/ArticleCard"

export default function Articles() {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))
  const featured = sorted.filter((a) => a.featured)
  const rest = sorted.filter((a) => !a.featured)

  return (
    <div className="max-w-5xl mx-auto px-6 py-14 sm:py-20 space-y-10 sm:space-y-12">
      <div className="space-y-3 max-w-2xl">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Writing</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Articles</h1>
        <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
          Practical knowledge from real QA work. Architecture decisions, AI tools, and techniques that actually move the needle.
        </p>
      </div>

      {featured.length > 0 && (
        <div className="space-y-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Featured</p>
          <div className="space-y-3">
            {featured.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      )}

      {rest.length > 0 && (
        <div className="space-y-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">More Articles</p>
          <div className="space-y-3">
            {rest.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      )}
    </div>
  )
}
