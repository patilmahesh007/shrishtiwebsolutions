"use client"

import { useState, useEffect, useRef } from "react"

interface UseLotteryCounterOptions {
  target: number
  duration?: number
  spinDuration?: number
  spinSpeed?: number
}

export function useLotteryCounter({
  target,
  duration = 2000,
  spinDuration = 1500,
  spinSpeed = 50,
}: UseLotteryCounterOptions) {
  const [count, setCount] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const frameRef = useRef<number>()
  const spinIntervalRef = useRef<NodeJS.Timeout>()
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    // Only animate once per component lifecycle
    if (hasAnimatedRef.current || target === 0) return

    hasAnimatedRef.current = true
    setIsAnimating(true)
    setIsSpinning(true)

    // Phase 1: Lottery spinning with random numbers
    let spinCount = 0
    const maxSpins = Math.floor(spinDuration / spinSpeed)

    spinIntervalRef.current = setInterval(() => {
      // Generate random number that gets closer to target as we approach the end
      const progress = spinCount / maxSpins
      const randomRange = Math.max(1, Math.floor(target * (1 - progress * 0.7)))
      const randomNumber = Math.floor(Math.random() * (target + randomRange))

      setCount(randomNumber)
      spinCount++

      if (spinCount >= maxSpins) {
        clearInterval(spinIntervalRef.current!)
        setIsSpinning(false)

        // Phase 2: Smooth animation to final target
        const startTime = Date.now()
        const startValue = randomNumber

        const smoothAnimate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / (duration - spinDuration), 1)

          // Easing function for smooth final animation
          const easeOut = 1 - Math.pow(1 - progress, 3)
          const currentValue = Math.floor(startValue + (target - startValue) * easeOut)

          setCount(currentValue)

          if (progress < 1) {
            frameRef.current = requestAnimationFrame(smoothAnimate)
          } else {
            setCount(target)
            setIsAnimating(false)
          }
        }

        frameRef.current = requestAnimationFrame(smoothAnimate)
      }
    }, spinSpeed)

    return () => {
      if (spinIntervalRef.current) {
        clearInterval(spinIntervalRef.current)
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [target, duration, spinDuration, spinSpeed])

  return { count, isSpinning, isAnimating }
}
