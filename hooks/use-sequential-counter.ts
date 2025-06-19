"use client"

import { useState, useEffect, useRef } from "react"

interface UseSequentialCounterOptions {
  target: number
  duration?: number
  easing?: (t: number) => number
  stepDelay?: number
}

export function useSequentialCounter({
  target,
  duration = 1500, // Reduced from 2000
  easing = (t: number) => t * t * (3 - 2 * t),
  stepDelay = 30, // Reduced from 50
}: UseSequentialCounterOptions) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    // Only animate once per component lifecycle
    if (hasAnimatedRef.current || target === 0) return

    hasAnimatedRef.current = true
    setIsAnimating(true)

    let currentCount = 0
    const totalSteps = target
    const baseStepDelay = duration / totalSteps

    const incrementCounter = () => {
      if (currentCount < target) {
        currentCount++
        setCount(currentCount)

        // Calculate dynamic delay with easing
        const progress = currentCount / target
        const easedProgress = easing(progress)

        // Start fast, slow down towards the end
        const dynamicDelay = baseStepDelay * (1.5 - easedProgress) // Reduced multiplier from 2

        intervalRef.current = setTimeout(incrementCounter, Math.max(dynamicDelay, 20))
      } else {
        setIsAnimating(false)
      }
    }

    // Start the sequential counting
    intervalRef.current = setTimeout(incrementCounter, stepDelay)

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [target, duration, easing, stepDelay])

  return { count, isAnimating }
}
