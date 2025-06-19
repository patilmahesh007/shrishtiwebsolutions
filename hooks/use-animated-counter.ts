"use client"

import { useState, useEffect, useRef } from "react"

interface UseAnimatedCounterOptions {
  target: number
  duration?: number
  easing?: (t: number) => number
}

export function useAnimatedCounter({
  target,
  duration = 2000,
  easing = (t: number) => t * t * (3 - 2 * t), // smooth step easing
}: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const frameRef = useRef<number>()
  const startTimeRef = useRef<number>()
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    // Only animate once per component lifecycle
    if (hasAnimatedRef.current || target === 0) return

    hasAnimatedRef.current = true
    setIsAnimating(true)

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }

      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Apply easing function
      const easedProgress = easing(progress)
      const currentCount = Math.floor(easedProgress * target)

      setCount(currentCount)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(target) // Ensure we end exactly at target
        setIsAnimating(false)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [target, duration, easing])

  return { count, isAnimating }
}
