export default function TechBadge({ label, variant = "blue" }) {
  const styles = {
    blue: "text-sky-600 border-sky-500/25 bg-sky-500/[0.06] hover:border-sky-500/55 hover:bg-sky-500/[0.10]",
    gold: "text-gold-400 border-gold-300/30 bg-gold-300/[0.08] hover:border-gold-400/55 hover:bg-gold-300/[0.14]",
    violet: "text-violet-500 border-violet-400/30 bg-violet-400/[0.07] hover:border-violet-500/55 hover:bg-violet-400/[0.12]",
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all duration-200 ${styles[variant]}`}
    >
      {label}
    </span>
  )
}
