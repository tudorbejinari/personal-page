import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import PageBanner from "../components/PageBanner"

export default function Experience() {
  return (
    <div>
      <PageBanner src="https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=1400&q=75&fit=crop&auto=format&fm=webp" />
    <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14 space-y-10 sm:space-y-12">
      <div className="space-y-3 max-w-2xl">
        <p className="tag-label">Work</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-slate-100 tracking-tightest">Experience &amp; <span className="text-muted-fade">projects</span></h1>
        <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
          Real problems. Real tools. Every project below is production work with measurable outcomes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
    </div>
  )
}
