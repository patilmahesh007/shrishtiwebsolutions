"use client"

import { useAnimatedCounter } from "../hooks/use-animated-counter"
import { useEffect, useState } from "react"

interface EnhancedAnimatedStatProps {
  number: string
  label: string
  delay?: number
  description?: string
}

export default function EnhancedAnimatedStat({ number, label, delay = 0, description }: EnhancedAnimatedStatProps) {
  const [mounted, setMounted] = useState(false)

  // Extract numeric value and suffix from the number string
  const numericValue = Number.parseInt(number.replace(/[^\d]/g, ""))
  const suffix = number.replace(/[\d]/g, "")

  const { count, isAnimating } = useAnimatedCounter({
    target: mounted ? numericValue : 0,
    duration: 2000 + delay,
    easing: (t: number) => {
      // Custom elastic easing for more engaging animation
      const c4 = (2 * Math.PI) / 3
      return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
    },
  })

  useEffect(() => {
    // Small delay to ensure smooth mounting
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="text-center group relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-4">
        <div
          className={`text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-500 ${
            isAnimating ? "scale-110 text-gray-100" : "group-hover:scale-105"
          }`}
        >
          <span className="tabular-nums inline-block">{count}</span>
          <span className="text-gray-300 ml-1">{suffix}</span>
        </div>

        <div className="text-gray-400 text-sm uppercase tracking-wider transition-colors group-hover:text-gray-300 mb-2">
          {label}
        </div>

        {description && (
          <div className="text-gray-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </div>
        )}

        {/* Animated underline */}
        <div
          className={`h-0.5 bg-gradient-to-r from-white/20 to-white/60 transition-all duration-1000 ${
            isAnimating ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </div>
    </div>
  )
}
