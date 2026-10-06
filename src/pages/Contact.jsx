const links = [
  {
    label: "Email",
    value: "tudorbejinari@outlook.com",
    href: "mailto:tudorbejinari@outlook.com",
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
      <PageBanner src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1400&q=75&fit=crop&auto=format&fm=webp" />
    <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14 space-y-10 sm:space-y-12">
      <div className="space-y-4">
        <p className="tag-label">Contact</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-slate-100 tracking-tightest">Get in <span className="text-muted-fade">touch</span></h1>
        <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-md">
          Always happy to talk testing, automation, and AI — from consulting to
          technical deep-dives. I respond within 24 hours.
        </p>
        {/* Availability badge — hidden for now
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium glass text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)] animate-pulse" />
          Available for opportunities
        </div>
        */}
      </div>

      <div className="space-y-3">
        {links.map(({ label, value, href, description }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between gap-4 p-5 rounded-2xl glass shadow-card overflow-hidden hover:border-black/[0.12] hover:shadow-card-hover hover:-translate-y-1 active:scale-[0.99] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-card-sheen opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative min-w-0 flex-1 space-y-1">
              <p className="font-mono text-[11px] font-medium text-slate-500 uppercase tracking-[0.1em]">{label}</p>
              <p className="text-sm font-medium text-slate-100 group-hover:text-sky-500 transition-colors duration-200 break-all">
                {value}
              </p>
              <p className="text-xs text-slate-500 hidden sm:block">{description}</p>
            </div>
            <span className="relative text-slate-500 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all duration-200 shrink-0">→</span>
          </a>
        ))}
      </div>
    </div>
    </div>
  )
}
