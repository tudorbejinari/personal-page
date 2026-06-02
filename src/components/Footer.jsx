import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/60 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">
          Tudor Bejinari
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <Link to="/articles"   className="hover:text-slate-400 transition-colors">Articles</Link>
          <Link to="/experience" className="hover:text-slate-400 transition-colors">Experience</Link>
          <Link to="/contact"    className="hover:text-slate-400 transition-colors">Contact</Link>
          <span className="text-slate-700">{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
