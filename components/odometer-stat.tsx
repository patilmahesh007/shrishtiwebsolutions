"use client"

import { useOdometerCounter } from "../hooks/use-odometer-counter"

interface OdometerStatProps {
  number: string
  label: string
  delay?: number
  description?: string
  color?: "default" | "gold" | "blue" | "green"
}

export default function OdometerStat({ number, label, delay = 0, description, color = "default" }: OdometerStatProps) {
  // Extract numeric value and suffix from the number string
  const numericValue = Number.parseInt(number.replace(/[^\d]/g, ""))
  const suffix = number.replace(/[\d]/g, "")

  const { count, isAnimating } = useOdometerCounter({
    target: numericValue,
    duration: 3000 + delay,
    startDelay: delay,
    accelerationPhase: 0.2,
    decelerationPhase: 0.5,
  })

  const colorClasses = {
    default: {
      animating: "text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]",
      normal: "text-white",
      accent: "text-yellow-400",
      gradient: "from-yellow-400 to-yellow-600",
      border: "border-yellow-400/30",
    },
    gold: {
      animating: "text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]",
      normal: "text-white",
      accent: "text-amber-400",
      gradient: "from-amber-400 to-amber-600",
      border: "border-amber-400/30",
    },
    blue: {
      animating: "text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.8)]",
      normal: "text-white",
      accent: "text-blue-400",
      gradient: "from-blue-400 to-blue-600",
      border: "border-blue-400/30",
    },
    green: {
      animating: "text-green-300 drop-shadow-[0_0_10px_rgba(134,239,172,0.8)]",
      normal: "text-white",
      accent: "text-green-400",
      gradient: "from-green-400 to-green-600",
      border: "border-green-400/30",
    },
  }

  const colors = colorClasses[color]

  return (
    <div className="text-center group relative overflow-hidden">
      {/* Odometer-style background */}
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-500 ${
          isAnimating
            ? `bg-gradient-to-t from-${color === "default" ? "yellow" : color}-500/15 to-transparent opacity-100 ${
                colors.border
              } border`
            : "bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Odometer frame */}
      <div
        className={`absolute inset-2 border-2 border-dashed rounded-lg transition-all duration-300 ${
          isAnimating ? `${colors.border} opacity-30` : "border-gray-700 opacity-0"
        }`}
      />

      <div className="relative z-10 p-4">
        {/* Digital display style number */}
        <div className="relative">
          <div
            className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-150 font-mono ${
              isAnimating ? `scale-105 ${colors.animating}` : `${colors.normal} group-hover:scale-105`
            }`}
          >
            {/* Odometer-style number display */}
            <div className="relative inline-block">
              {/* Background number slots */}
              <div className="absolute inset-0 text-gray-800 opacity-20">
                {"8".repeat(numericValue.toString().length)}
              </div>

              {/* Actual counting number */}
              <span className="relative tabular-nums inline-block min-w-[3ch]">
                {count.toString().padStart(numericValue.toString().length, "0")}
              </span>

              {/* Odometer rolling effect */}
              {isAnimating && (
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-pulse" />
                </div>
              )}
            </div>

            <span className={`ml-1 transition-colors ${isAnimating ? colors.accent : "text-gray-300"}`}>{suffix}</span>
          </div>

          {/* Digital display segments */}
          {isAnimating && (
            <div className="absolute -top-1 -bottom-1 left-1/2 transform -translate-x-1/2 w-20 flex justify-between opacity-20">
              <div className="w-px bg-current" />
              <div className="w-px bg-current" />
              <div className="w-px bg-current" />
            </div>
          )}
        </div>

        <div
          className={`text-sm uppercase tracking-wider transition-all duration-300 mb-2 font-semibold ${
            isAnimating ? `${colors.accent}` : "text-gray-400 group-hover:text-gray-300"
          }`}
        >
          {label}
        </div>

        {description && (
          <div className="text-gray-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </div>
        )}

        {/* Real-time progress indicator */}
        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden mt-3">
          <div
            className={`h-full transition-all duration-100 rounded-full ${
              isAnimating
                ? `bg-gradient-to-r ${colors.gradient} shadow-lg`
                : "w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-white/60"
            }`}
            style={{
              width: isAnimating ? `${(count / numericValue) * 100}%` : "0%",
            }}
          />
        </div>

        {/* Counting status indicator */}
        {isAnimating && (
          <div className="absolute top-1 left-1 flex items-center space-x-1">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
            <div className="text-xs text-current opacity-60 font-mono">
              {count}/{numericValue}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
