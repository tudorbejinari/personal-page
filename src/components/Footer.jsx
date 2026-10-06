import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-navy-900 text-neutral-400">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-5">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 text-[13px] font-display font-bold text-white">T</span>
          <span className="text-sm font-display font-medium text-neutral-200 group-hover:text-white transition-colors duration-200">
            Tudor<span className="text-sky-500">.b</span>
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-neutral-400">
          <Link to="/articles"   className="hover:text-white transition-colors">Articles</Link>
          <Link to="/experience" className="hover:text-white transition-colors">Experience</Link>
          <Link to="/contact"    className="hover:text-white transition-colors">Contact</Link>
          <span className="text-neutral-600">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
