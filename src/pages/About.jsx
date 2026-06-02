const specialties = [
  "QA Automation",
  "AI-Augmented Engineering",
  "Playwright · Cypress · TestComplete",
  "CI/CD · DevOps",
]

const aiCards = [
  {
    title: "Multi-agent test systems",
    body: "Built pipelines where AI writes, debugs, and reviews Playwright tests end-to-end — not as a demo, as a daily workflow.",
  },
  {
    title: "Visual regression analysis",
    body: "Tooling where the Claude API compares UI states across environments and surfaces code fix suggestions automatically.",
  },
  {
    title: "Daily force multipliers",
    body: "Cursor, Claude CLI, Devin.ai, and GitHub Copilot — used as engineering judgment amplifiers, not autocomplete shortcuts.",
  },
  {
    title: "The distinction that matters",
    body: "I don't use AI to click around an app and hope for the best. I use it to build better test infrastructure.",
  },
]

const experience = [
  {
    company: "SkySlope",
    type: "Full-time · Remote",
    location: "Sacramento, California",
    roles: [
      {
        title: "QA Automation Engineer III",
        period: "Oct 2022 – Present",
        skills: "Playwright · JavaScript · CI/CD · Codefresh · Argo",
      },
      {
        title: "QA Automation Engineer II",
        period: "Aug 2021 – Oct 2022",
        skills: "Datadog · JetBrains Rider · Cypress · TestComplete",
      },
    ],
  },
  {
    company: "Accutech Systems Corporation",
    type: "Full-time",
    location: "Muncie, Indiana",
    roles: [
      {
        title: "QA Specialist",
        period: "Aug 2020 – Jul 2021",
        skills: "Postman · Regression Testing · Manual QA",
      },
    ],
  },
  {
    company: "Verizon",
    type: "Contract",
    location: "United States",
    roles: [
      {
        title: "Quality Assurance Automation Engineer",
        period: "Jul 2018 – Jul 2020",
        skills: "API Automation · Postman · Karate Framework",
      },
    ],
  },
]

const education = [
  {
    title: "Certificate — Front-End Engineering Program With React.js and Back-End Primers",
    institution: "Western Governors University",
    period: "Aug 2022 – Mar 2023",
    note: "HTML · CSS · JavaScript · React · Node.js",
  },
  {
    title: "Certificate — Coding Boot Camp",
    institution: "University of Denver",
    period: "Oct 2018 – May 2019",
    note: "HTML · CSS · Bootstrap · JavaScript · React · SQL · MongoDB · Node.js · Mocha · Chai · Postman",
  },
  {
    title: "Associate's Degree — Business Administration and Management",
    institution: "Atlantic Cape Community College",
    period: "2014 – 2017",
    note: null,
  },
  {
    title: "Associate's Degree — Computer Science",
    institution: "Technical University of Moldova",
    period: "2005 – 2008",
    note: null,
  },
]

const tools = [
  { category: "Test Frameworks", items: "Playwright · Cypress · TestComplete · Karate" },
  { category: "Languages", items: "JavaScript · Node.js · SQL" },
  { category: "API Testing", items: "Postman · Swagger · RESTful APIs" },
  { category: "CI/CD", items: "Codefresh · Argo · GitHub Actions" },
  { category: "AI Tools", items: "Cursor · Claude CLI · Devin.ai · GitHub Copilot" },
  { category: "Dev Tools", items: "IntelliJ IDEA · Visual Studio · GitHub · GitKraken" },
]

export default function About() {
  return (
    <div>
      <div className="relative w-full h-52 sm:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1668681919287-7367677cdc4c?w=1400&q=75&fit=crop&auto=format&fm=webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10" />
      </div>
    <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14 space-y-16 sm:space-y-20">

      {/* Hero intro */}
      <section className="space-y-8">
        <div className="flex flex-wrap gap-2">
          {specialties.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full text-xs font-medium bg-navy-800 border border-navy-700/60 text-slate-400"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="space-y-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            I build automated test systems that are fast, reliable, and designed to scale —
            then I use AI to make them faster to build and easier to maintain.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Quality isn't a phase in my workflow. It's the foundation everything else is built on.
          </p>
        </div>

        <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          <p>
            I've worked across the full testing spectrum — functional, integration, regression,
            and exploratory — on everything from front-end Angular applications to complex
            back-end financial systems. My core is JavaScript and Node.js automation using
            Playwright, Cypress, and TestComplete, with deep API testing experience through
            Postman, Swagger, and the Karate Framework.
          </p>
          <p>
            On the infrastructure side, I integrate automation directly into CI/CD pipelines with
            Codefresh and Argo — working alongside DevOps so quality gates are part of every
            deployment, not bolted on after the fact. Solid grounding in SQL, RESTful APIs, and
            RDBMS concepts means I'm equally effective testing front-end interfaces and back-end services.
          </p>
        </div>
      </section>

      {/* How I apply AI */}
      <section className="space-y-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
          How I apply AI — specifically
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aiCards.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-navy-700/60 bg-navy-900 p-5 space-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-sky-500/40 via-violet-500/20 to-transparent" />
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 px-6 py-5">
          <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed">
            My goal is to operate at the intersection of QA, automation engineering, and AI —
            where 10x impact is achievable without sacrificing the determinism and reliability
            that make tests worth running.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="space-y-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Work Experience</p>
        <div className="space-y-4">
          {experience.map(({ company, type, location, roles }) => (
            <div key={company} className="rounded-xl border border-navy-700/60 bg-navy-900 p-5 space-y-4">
              <div>
                <p className="text-sm font-semibold text-white">{company}</p>
                <p className="text-xs text-slate-500 mt-0.5">{type} · {location}</p>
              </div>
              <div className="space-y-3">
                {roles.map(({ title, period, skills }) => (
                  <div key={title} className="pl-3 border-l border-sky-500/30 space-y-0.5">
                    <p className="text-sm font-medium text-slate-200">{title}</p>
                    <p className="text-xs text-slate-500">{period}</p>
                    <p className="text-xs text-slate-600 pt-0.5">{skills}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Education</p>
        <div className="divide-y divide-navy-700/60">
          {education.map(({ title, institution, period, note }) => (
            <div key={title} className="py-4 space-y-0.5">
              <p className="text-sm font-semibold text-white leading-snug">{title}</p>
              <p className="text-sm text-slate-400">{institution}</p>
              <p className="text-xs text-slate-600">{period}</p>
              {note && <p className="text-xs text-slate-500 pt-1 leading-relaxed">{note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="space-y-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Tools & Stack</p>
        <div className="divide-y divide-navy-700/60">
          {tools.map(({ category, items }) => (
            <div key={category} className="py-3.5 flex flex-col sm:flex-row sm:gap-6 gap-1 text-sm">
              <span className="text-slate-500 sm:w-32 sm:shrink-0 font-medium">{category}</span>
              <span className="text-slate-300">{items}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
    </div>
  )
}
