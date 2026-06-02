import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { articles } from "../data/articles"
import PageBanner from "../components/PageBanner"

function Skeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-navy-800 rounded-lg w-3/4" />
      <div className="space-y-2 pt-2">
        <div className="h-4 bg-navy-800 rounded w-full" />
        <div className="h-4 bg-navy-800 rounded w-5/6" />
        <div className="h-4 bg-navy-800 rounded w-full" />
        <div className="h-4 bg-navy-800 rounded w-4/6" />
      </div>
      <div className="h-6 bg-navy-800 rounded w-2/5 mt-8" />
      <div className="space-y-2">
        <div className="h-4 bg-navy-800 rounded w-full" />
        <div className="h-4 bg-navy-800 rounded w-full" />
        <div className="h-4 bg-navy-800 rounded w-3/4" />
      </div>
      <div className="h-6 bg-navy-800 rounded w-1/3 mt-8" />
      <div className="space-y-2">
        <div className="h-4 bg-navy-800 rounded w-5/6" />
        <div className="h-4 bg-navy-800 rounded w-full" />
        <div className="h-4 bg-navy-800 rounded w-2/3" />
      </div>
    </div>
  )
}

export default function ArticleDetail() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === id)
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!article) return
    setLoading(true)
    fetch(`/articles/${article.file}`)
      .then((res) => res.text())
      .then((text) => { setContent(text); setLoading(false) })
      .catch(() => { setContent("Article content not found."); setLoading(false) })
  }, [article])

  if (!article) return (
    <div className="max-w-3xl mx-auto px-6 py-14 sm:py-20">
      <p className="text-slate-400 text-sm">
        Article not found.{" "}
        <Link to="/articles" className="text-sky-400 hover:text-sky-300 transition-colors">
          Back to articles
        </Link>
      </p>
    </div>
  )

  return (
    <div>
      {article.image && <PageBanner src={article.image} />}

      <div className="max-w-3xl mx-auto px-6 py-10 sm:py-14">
        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200 mb-8 sm:mb-10"
        >
          ← Back to Articles
        </Link>

        <div className="mb-6 sm:mb-8 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium text-slate-500 bg-navy-800 border border-navy-700/60 px-2 py-0.5 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
          <time className="block text-xs text-slate-600">{article.date}</time>
        </div>

        <article className="
          prose prose-invert prose-sm sm:prose-base max-w-none
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
          prose-h1:text-2xl sm:prose-h1:text-3xl prose-h1:mb-6
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-sky-100
          prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-slate-200
          prose-p:text-slate-300 prose-p:leading-relaxed prose-p:my-4
          prose-a:text-sky-400 prose-a:no-underline hover:prose-a:text-sky-300
          prose-strong:text-white prose-strong:font-semibold
          prose-code:text-sky-300 prose-code:bg-navy-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-navy-800 prose-pre:border prose-pre:border-navy-700/60 prose-pre:rounded-xl prose-pre:p-4 sm:prose-pre:p-5 prose-pre:overflow-x-auto
          prose-li:text-slate-300 prose-li:my-1
          prose-ul:my-4 prose-ol:my-4
          prose-blockquote:border-l-sky-500 prose-blockquote:text-slate-400 prose-blockquote:not-italic
          prose-table:text-sm prose-th:text-slate-300 prose-th:font-semibold prose-td:text-slate-400
          prose-hr:border-navy-700/60
        ">
          {loading ? <Skeleton /> : <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>}
        </article>
      </div>
    </div>
  )
}
