import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const links = [
  { to: "/experience", label: "Experience" },
  { to: "/articles", label: "Articles" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-navy-700/60 bg-navy-950/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-semibold text-white text-base tracking-tight hover:text-sky-400 transition-colors duration-200"
          >
            Tudor B.
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-sky-400 bg-sky-500/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-navy-900 border-b border-navy-700/60 px-6 py-4 flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-sky-400 bg-sky-500/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
