export default function TechBadge({ label, variant = "blue" }) {
  const styles = {
    blue: "text-sky-300/90 border-sky-400/20 hover:border-sky-400/45 hover:text-sky-200",
    gold: "text-gold-300/90 border-gold-400/20 hover:border-gold-400/45 hover:text-gold-200",
    violet: "text-violet-400/90 border-violet-400/20 hover:border-violet-400/45 hover:text-violet-300",
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border bg-white/[0.03] backdrop-blur-sm transition-all duration-200 ${styles[variant]}`}
    >
      {label}
    </span>
  )
}
