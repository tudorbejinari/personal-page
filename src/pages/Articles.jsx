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
      <PageBanner src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=75&fit=crop&auto=format&fm=webp" />
      <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14 space-y-10 sm:space-y-12">
        <div className="space-y-3 max-w-2xl">
          <p className="tag-label">Writing</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-slate-100 tracking-tightest">Field <span className="text-muted-fade">notes</span></h1>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            Practical knowledge from real QA work. Architecture decisions, AI tools, and techniques that actually move the needle.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
              !activeTag
                ? "bg-navy-900 text-white border-navy-900 shadow-pill"
                : "glass text-slate-400 hover:text-slate-100 hover:border-black/20"
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
                    ? "bg-navy-900 text-white border-navy-900 shadow-pill"
                    : "glass text-slate-400 hover:text-slate-100 hover:border-black/20"
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
