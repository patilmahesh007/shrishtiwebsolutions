"use client"

import { useSequentialCounter } from "../hooks/use-sequential-counter"

interface SequentialAnimatedStatProps {
  number: string
  label: string
  delay?: number
  description?: string
  color?: "default" | "gold" | "blue" | "green"
}

export default function SequentialAnimatedStat({
  number,
  label,
  delay = 0,
  description,
  color = "default",
}: SequentialAnimatedStatProps) {
  // Extract numeric value and suffix from the number string
  const numericValue = Number.parseInt(number.replace(/[^\d]/g, ""))
  const suffix = number.replace(/[\d]/g, "")

  const { count, isAnimating } = useSequentialCounter({
    target: numericValue,
    duration: 2000 + delay,
    stepDelay: 100,
    easing: (t: number) => {
      // Custom easing: start fast, slow down at the end
      return t < 0.7 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    },
  })

  const colorClasses = {
    default: {
      animating: "text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)]",
      normal: "text-white",
      accent: "text-yellow-400",
      gradient: "from-yellow-400 to-yellow-600",
      glow: "shadow-yellow-400/20",
    },
    gold: {
      animating: "text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]",
      normal: "text-white",
      accent: "text-amber-400",
      gradient: "from-amber-400 to-amber-600",
      glow: "shadow-amber-400/20",
    },
    blue: {
      animating: "text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.6)]",
      normal: "text-white",
      accent: "text-blue-400",
      gradient: "from-blue-400 to-blue-600",
      glow: "shadow-blue-400/20",
    },
    green: {
      animating: "text-green-300 drop-shadow-[0_0_8px_rgba(134,239,172,0.6)]",
      normal: "text-white",
      accent: "text-green-400",
      gradient: "from-green-400 to-green-600",
      glow: "shadow-green-400/20",
    },
  }

  const colors = colorClasses[color]

  return (
    <div className="text-center group relative overflow-hidden">
      {/* Background glow effect */}
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          isAnimating
            ? `bg-gradient-to-t from-${color === "default" ? "yellow" : color}-500/10 to-transparent opacity-100`
            : "bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Counter frame effect */}
      {isAnimating && <div className="absolute inset-0 border border-current rounded-lg opacity-20 animate-pulse" />}

      <div className="relative z-10 p-4">
        {/* Main number display */}
        <div
          className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-200 font-mono ${
            isAnimating ? `scale-110 ${colors.animating} animate-pulse` : `${colors.normal} group-hover:scale-105`
          }`}
        >
          {/* Number with sequential counting */}
          <span className="tabular-nums inline-block min-w-[3ch] relative">
            <span className={`block transition-all duration-100 ${isAnimating ? "animate-bounce" : ""}`}>{count}</span>

            {/* Counting effect indicator */}
            {isAnimating && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full animate-ping opacity-60" />
            )}
          </span>

          <span className={`ml-1 transition-colors ${isAnimating ? colors.accent : "text-gray-300"}`}>{suffix}</span>
        </div>

        <div
          className={`text-sm uppercase tracking-wider transition-all duration-300 mb-2 font-semibold ${
            isAnimating ? `${colors.accent} animate-pulse` : "text-gray-400 group-hover:text-gray-300"
          }`}
        >
          {label}
        </div>

        {description && (
          <div className="text-gray-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </div>
        )}

        {/* Progress bar showing counting progress */}
        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden mt-3">
          <div
            className={`h-full transition-all duration-100 rounded-full ${
              isAnimating
                ? `bg-gradient-to-r ${colors.gradient}`
                : "w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-white/60"
            }`}
            style={{
              width: isAnimating ? `${(count / numericValue) * 100}%` : "0%",
            }}
          />
        </div>

        {/* Sequential counting indicators */}
        {isAnimating && (
          <div className="absolute top-2 right-2 flex flex-col space-y-1">
            <div className="w-1 h-1 bg-current rounded-full animate-ping" />
            <div className="w-1 h-1 bg-current rounded-full animate-ping" style={{ animationDelay: "0.2s" }} />
            <div className="w-1 h-1 bg-current rounded-full animate-ping" style={{ animationDelay: "0.4s" }} />
          </div>
        )}
      </div>
    </div>
  )
}
