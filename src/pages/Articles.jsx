import { articles } from "../data/articles"
import ArticleCard from "../components/ArticleCard"
import PageBanner from "../components/PageBanner"

export default function Articles() {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div>
      <PageBanner src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=75&fit=crop&auto=format&fm=webp" />
    <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14 space-y-10 sm:space-y-12">
      <div className="space-y-3 max-w-2xl">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Writing</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Articles</h1>
        <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
          Practical knowledge from real QA work. Architecture decisions, AI tools, and techniques that actually move the needle.
        </p>
      </div>

      <div className="space-y-3">
        {sorted.map((a) => <ArticleCard key={a.id} article={a} />)}
      </div>
    </div>
    </div>
  )
}
