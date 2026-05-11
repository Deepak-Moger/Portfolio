"use client"

import { useEffect, useRef } from "react"

/**
 * A subtle interactive background:
 *  - Animated grid (CSS)
 *  - A mouse-following spotlight (canvas-less, just a radial gradient div)
 *  - Two soft floating "ambient" blobs in brand colors
 *
 * Lightweight, GPU friendly, and respects reduced-motion.
 */
export function SpotlightBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = spotlightRef.current
    if (!el) return

    let raf = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 3
    let currentX = targetX
    let currentY = targetY

    const handleMove = (e: PointerEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      el.style.background = `radial-gradient(600px circle at ${currentX}px ${currentY}px, oklch(0.9 0.18 120 / 0.08), transparent 60%)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", handleMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("pointermove", handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      {/* Grid */}
      <div className="bg-grid absolute inset-0" />

      {/* Spotlight */}
      <div ref={spotlightRef} className="absolute inset-0" />

      {/* Ambient blobs */}
      <div
        className="pulse-glow absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.9 0.18 120 / 0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="pulse-glow absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          animationDelay: "2s",
          background:
            "radial-gradient(circle, oklch(0.72 0.18 45 / 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, oklch(0.14 0.005 80 / 0.65) 100%)",
        }}
      />
    </div>
  )
}
