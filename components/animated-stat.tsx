"use client"

import { useAnimatedCounter } from "../hooks/use-animated-counter"

interface AnimatedStatProps {
  number: string
  label: string
  delay?: number
}

export default function AnimatedStat({ number, label, delay = 0 }: AnimatedStatProps) {
  // Extract numeric value and suffix from the number string
  const numericValue = Number.parseInt(number.replace(/[^\d]/g, ""))
  const suffix = number.replace(/[\d]/g, "")

  const { count } = useAnimatedCounter({
    target: numericValue,
    duration: 1500 + delay, // Stagger animation with delay
    easing: (t: number) => {
      // Custom easing function for more natural feel
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    },
  })

  return (
    <div className="text-center group">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-105">
        <span className="tabular-nums">{count}</span>
        <span className="text-gray-300">{suffix}</span>
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider transition-colors group-hover:text-gray-300">
        {label}
      </div>
    </div>
  )
}
