import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const links = [
  { to: "/experience", label: "Experience" },
  { to: "/articles", label: "Articles" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

function Mark() {
  return (
    <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 text-[13px] font-display font-bold text-white shadow-glow-blue">
      T
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <div className="sticky top-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
        <nav
          className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass-strong shadow-glass"
              : "glass shadow-glass"
          }`}
        >
          <div className="px-4 sm:px-5 h-14 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
            >
              <Mark />
              <span className="font-display font-semibold text-slate-100 text-[15px] tracking-tight group-hover:text-sky-500 transition-colors duration-200">
                Tudor<span className="text-sky-500">.b</span>
              </span>
            </Link>

            {/* Desktop nav — centered */}
            <div className="hidden sm:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                      isActive
                        ? "text-slate-100 bg-black/[0.06]"
                        : "text-slate-400 hover:text-slate-100 hover:bg-black/[0.04]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <Link to="/contact" className="btn-pill !py-2 !px-4 !text-[13.5px]">
                Get in touch
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-xl hover:bg-black/[0.04] transition-colors"
            >
              <span className={`block w-5 h-0.5 bg-slate-100 rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-slate-100 rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-slate-100 rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="absolute inset-0 bg-navy-900/25 backdrop-blur-sm animate-fade-up"
            style={{ animationDuration: "0.3s" }}
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-[4.75rem] left-3 right-3 glass-strong rounded-2xl shadow-card p-2.5 flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-slate-100 bg-black/[0.06]"
                      : "text-slate-300 hover:text-slate-100 hover:bg-black/[0.04]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-pill mt-1 w-full">
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
