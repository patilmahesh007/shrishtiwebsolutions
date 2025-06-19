"use client"

import { useLotteryCounter } from "../hooks/use-lottery-counter"

interface LotteryAnimatedStatProps {
  number: string
  label: string
  delay?: number
  description?: string
}

export default function LotteryAnimatedStat({ number, label, delay = 0, description }: LotteryAnimatedStatProps) {
  // Extract numeric value and suffix from the number string
  const numericValue = Number.parseInt(number.replace(/[^\d]/g, ""))
  const suffix = number.replace(/[\d]/g, "")

  const { count, isSpinning, isAnimating } = useLotteryCounter({
    target: numericValue,
    duration: 2500 + delay,
    spinDuration: 1800 + delay,
    spinSpeed: 80, // Faster spinning for lottery effect
  })

  return (
    <div className="text-center group relative overflow-hidden">
      {/* Spinning effect background */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-lg transition-all duration-300 ${
          isSpinning ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      <div className="relative z-10 p-4">
        <div
          className={`text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-200 ${
            isSpinning
              ? "scale-110 text-yellow-300 drop-shadow-lg animate-bounce"
              : isAnimating
                ? "scale-105 text-gray-100"
                : "group-hover:scale-105"
          }`}
        >
          {/* Number display with monospace font for consistent width */}
          <span className="tabular-nums font-mono inline-block min-w-[2ch] relative">
            {count}
            {/* Spinning visual effect */}
            {isSpinning && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            )}
          </span>
          <span className={`ml-1 transition-colors ${isSpinning ? "text-yellow-200" : "text-gray-300"}`}>{suffix}</span>
        </div>

        <div
          className={`text-gray-400 text-sm uppercase tracking-wider transition-all duration-300 mb-2 ${
            isSpinning ? "text-yellow-400 animate-pulse" : "group-hover:text-gray-300"
          }`}
        >
          {label}
        </div>

        {description && (
          <div className="text-gray-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </div>
        )}

        {/* Animated underline */}
        <div
          className={`h-0.5 transition-all duration-1000 ${
            isSpinning
              ? "w-full bg-gradient-to-r from-yellow-400 to-yellow-600 animate-pulse"
              : isAnimating
                ? "w-full bg-gradient-to-r from-white/20 to-white/60"
                : "w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-white/60"
          }`}
        />

        {/* Lottery machine effect indicators */}
        {isSpinning && (
          <div className="absolute top-2 right-2 flex space-x-1">
            <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping" />
            <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: "0.2s" }} />
            <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: "0.4s" }} />
          </div>
        )}
      </div>
    </div>
  )
}
