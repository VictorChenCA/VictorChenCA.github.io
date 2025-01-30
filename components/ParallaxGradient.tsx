import type React from "react"
import { useEffect, useRef } from "react"

const ParallaxGradient: React.FC = () => {
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (gradientRef.current) {
        const scrollPosition = window.pageYOffset
        gradientRef.current.style.transform = `translate(${scrollPosition * 0.1}px, ${scrollPosition * 0.3}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={gradientRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{
        background: "linear-gradient(45deg, rgba(0,38,66,0.6) 0%, rgba(88,123,127,0.6) 100%)",
        transform: "translateZ(0)",
      }}
    />
  )
}

export default ParallaxGradient

