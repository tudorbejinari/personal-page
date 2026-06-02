import { useState } from "react"

export default function PageBanner({ src }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-navy-950">
      <img
        src={src}
        alt=""
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(2,8,16,0.75) 0%, rgba(2,8,16,0.45) 50%, rgba(2,8,16,0.90) 100%)" }} />
    </div>
  )
}
