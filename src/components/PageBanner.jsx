import { useState } from "react"

export default function PageBanner({ src }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full h-52 sm:h-72 overflow-hidden bg-navy-900">
      <img
        src={src}
        alt=""
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10 pointer-events-none" />
    </div>
  )
}
