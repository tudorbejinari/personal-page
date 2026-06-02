import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32 text-center space-y-6">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Page not found</h1>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 text-white font-medium text-sm hover:bg-sky-400 transition-all duration-200 shadow-glow-blue"
      >
        Back to Home
      </Link>
    </div>
  )
}
