"use client"

import { useLotteryCounter } from "../hooks/use-lottery-counter"
import { useEffect, useState } from "react"

interface EnhancedLotteryStatProps {
  number: string
  label: string
  delay?: number
  description?: string
  color?: "default" | "gold" | "blue" | "green"
}

export default function EnhancedLotteryStat({
  number,
  label,
  delay = 0,
  description,
  color = "default",
}: EnhancedLotteryStatProps) {
  const [mounted, setMounted] = useState(false)

  // Extract numeric value and suffix from the number string
  const numericValue = Number.parseInt(number.replace(/[^\d]/g, ""))
  const suffix = number.replace(/[\d]/g, "")

  const { count, isSpinning, isAnimating } = useLotteryCounter({
    target: mounted ? numericValue : 0,
    duration: 3000 + delay,
    spinDuration: 2000 + delay,
    spinSpeed: 60,
  })

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100 + delay)
    return () => clearTimeout(timer)
  }, [delay])

  const colorClasses = {
    default: {
      spinning: "text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]",
      normal: "text-white",
      accent: "text-yellow-400",
      gradient: "from-yellow-400 to-yellow-600",
    },
    gold: {
      spinning: "text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]",
      normal: "text-white",
      accent: "text-amber-400",
      gradient: "from-amber-400 to-amber-600",
    },
    blue: {
      spinning: "text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]",
      normal: "text-white",
      accent: "text-blue-400",
      gradient: "from-blue-400 to-blue-600",
    },
    green: {
      spinning: "text-green-300 drop-shadow-[0_0_10px_rgba(134,239,172,0.5)]",
      normal: "text-white",
      accent: "text-green-400",
      gradient: "from-green-400 to-green-600",
    },
  }

  const colors = colorClasses[color]

  return (
    <div className="text-center group relative overflow-hidden">
      {/* Spinning effect background with glow */}
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          isSpinning
            ? `bg-gradient-to-t from-${color === "default" ? "yellow" : color}-500/10 to-transparent opacity-100 animate-pulse`
            : "bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Lottery machine frame effect */}
      {isSpinning && (
        <div
          className="absolute inset-0 border-2 border-dashed border-current rounded-lg animate-spin opacity-20"
          style={{ animationDuration: "3s" }}
        />
      )}

      <div className="relative z-10 p-4">
        {/* Main number display */}
        <div className="relative">
          <div
            className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-200 font-mono ${
              isSpinning
                ? `scale-110 ${colors.spinning} animate-bounce`
                : isAnimating
                  ? `scale-105 ${colors.normal}`
                  : `${colors.normal} group-hover:scale-105`
            }`}
          >
            {/* Number with rolling effect */}
            <span className="tabular-nums inline-block min-w-[3ch] relative overflow-hidden">
              <span className={`block transition-transform duration-100 ${isSpinning ? "animate-pulse" : ""}`}>
                {count}
              </span>

              {/* Rolling numbers effect overlay */}
              {isSpinning && (
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-30">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="absolute animate-bounce text-xs opacity-50"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        transform: `translateY(${(i - 1) * 10}px)`,
                      }}
                    >
                      {Math.floor(Math.random() * numericValue)}
                    </span>
                  ))}
                </div>
              )}
            </span>

            <span className={`ml-1 transition-colors ${isSpinning ? colors.accent : "text-gray-300"}`}>{suffix}</span>
          </div>

          {/* Slot machine reels effect */}
          {isSpinning && (
            <div className="absolute -top-2 -bottom-2 left-1/2 transform -translate-x-1/2 w-16 border-l-2 border-r-2 border-dashed border-current opacity-20 animate-pulse" />
          )}
        </div>

        <div
          className={`text-sm uppercase tracking-wider transition-all duration-300 mb-2 font-semibold ${
            isSpinning ? `${colors.accent} animate-pulse` : "text-gray-400 group-hover:text-gray-300"
          }`}
        >
          {label}
        </div>

        {description && (
          <div className="text-gray-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </div>
        )}

        {/* Animated progress bar */}
        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden mt-3">
          <div
            className={`h-full transition-all duration-1000 rounded-full ${
              isSpinning
                ? `w-full bg-gradient-to-r ${colors.gradient} animate-pulse`
                : isAnimating
                  ? `w-full bg-gradient-to-r from-white/20 to-white/60`
                  : "w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-white/60"
            }`}
          />
        </div>

        {/* Lottery machine spinning indicators */}
        {isSpinning && (
          <>
            {/* Corner indicators */}
            <div className="absolute top-1 left-1 w-2 h-2 bg-current rounded-full animate-ping opacity-60" />
            <div
              className="absolute top-1 right-1 w-2 h-2 bg-current rounded-full animate-ping opacity-60"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-1 left-1 w-2 h-2 bg-current rounded-full animate-ping opacity-60"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1 right-1 w-2 h-2 bg-current rounded-full animate-ping opacity-60"
              style={{ animationDelay: "1.5s" }}
            />

            {/* Center spinning effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-current rounded-full animate-spin" />
          </>
        )}
      </div>
    </div>
  )
}
