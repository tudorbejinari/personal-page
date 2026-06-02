const links = [
  {
    label: "Email",
    value: "tudorwebsolutions@gmail.com",
    href: "mailto:tudorwebsolutions@gmail.com",
    description: "Best for project inquiries and opportunities",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tudor-bejinari",
    href: "https://linkedin.com/in/tudor-bejinari",
    description: "Connect professionally",
  },
  {
    label: "GitHub",
    value: "github.com/tudorbejinari",
    href: "https://github.com/tudorbejinari",
    description: "Code, projects, and contributions",
  },
]

import PageBanner from "../components/PageBanner"

export default function Contact() {
  return (
    <div>
      <PageBanner src="https://images.unsplash.com/photo-1614850523011-8f49ffc73908?w=1400&q=75&fit=crop&auto=format&fm=webp" />
    <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14 space-y-10 sm:space-y-12">
      <div className="space-y-4">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Contact</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Get In Touch</h1>
        <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-md">
          Open to QA roles, consulting, and conversations about testing and AI.
          I respond within 24 hours.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>
      </div>

      <div className="space-y-3">
        {links.map(({ label, value, href, description }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-xl border border-navy-700/60 bg-navy-900 hover:border-sky-500/30 hover:shadow-card-hover transition-all duration-300"
          >
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest w-20 shrink-0">
              {label}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-white group-hover:text-sky-300 transition-colors duration-200 truncate">
                {value}
              </p>
              <p className="text-xs text-slate-600 mt-0.5 hidden sm:block">{description}</p>
            </div>
            <span className="text-slate-600 group-hover:text-sky-400 transition-colors duration-200 shrink-0">→</span>
          </a>
        ))}
      </div>
    </div>
    </div>
  )
}
