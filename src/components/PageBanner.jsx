import { useState } from "react"

export default function PageBanner({ src }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full h-52 sm:h-72 overflow-hidden bg-slate-900 -mt-[4.75rem]">
      <img
        src={src}
        alt=""
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-[1200ms] ease-out ${loaded ? "opacity-90 scale-100" : "opacity-0 scale-105"}`}
      />
      {/* Warm glow bloom behind the image */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[130%] h-72 bg-aurora blur-[80px] opacity-70 pointer-events-none" />
      {/* Fade into the white page */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 42%, rgba(255,255,255,0.80) 80%, #FFFFFF 100%)" }}
      />
    </div>
  )
}
