import { useState } from "react"

export default function PageBanner({ src }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full h-52 sm:h-72 overflow-hidden bg-navy-950 grain -mt-[4.75rem]">
      <img
        src={src}
        alt=""
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-[1200ms] ease-out ${loaded ? "opacity-70 scale-100" : "opacity-0 scale-105"}`}
      />
      {/* Aurora glow behind the image */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[130%] h-72 bg-aurora blur-[80px] opacity-60 pointer-events-none" />
      {/* Cinematic fade to base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(10,9,8,0.80) 0%, rgba(10,9,8,0.28) 45%, rgba(10,9,8,0.88) 82%, #0A0908 100%)" }}
      />
    </div>
  )
}
