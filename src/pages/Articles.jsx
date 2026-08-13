import { useState } from "react"
import { articles } from "../data/articles"
import ArticleCard from "../components/ArticleCard"
import PageBanner from "../components/PageBanner"

const FILTER_TAGS = ["AI", "Playwright", "CI/CD", "Architecture", "Automation"]

export default function Articles() {
  const [activeTag, setActiveTag] = useState(null)
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))
  const filtered = activeTag ? sorted.filter((a) => a.tags.includes(activeTag)) : sorted

  return (
    <div>
      <PageBanner src="https://images.unsplash.com/photo-1650473395434-8674d953ef2f?w=1400&q=75&fit=crop&auto=format&fm=webp" />
      <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14 space-y-10 sm:space-y-12">
        <div className="space-y-3 max-w-2xl">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">Writing</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tightest">Articles</h1>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            Practical knowledge from real QA work. Architecture decisions, AI tools, and techniques that actually move the needle.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
              !activeTag
                ? "bg-white text-navy-950 border-white shadow-pill"
                : "glass text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            All ({articles.length})
          </button>
          {FILTER_TAGS.map((tag) => {
            const count = articles.filter((a) => a.tags.includes(tag)).length
            const active = activeTag === tag
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(active ? null : tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                  active
                    ? "bg-white text-navy-950 border-white shadow-pill"
                    : "glass text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {tag} ({count})
              </button>
            )
          })}
        </div>

        <div className="space-y-3">
          {filtered.map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
      </div>
    </div>
  )
}
