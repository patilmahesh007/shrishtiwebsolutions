"use client"

import { useState, useEffect, useRef } from "react"

interface UseOdometerCounterOptions {
  target: number
  duration?: number
  startDelay?: number
  accelerationPhase?: number // percentage of animation that accelerates
  decelerationPhase?: number // percentage of animation that decelerates
}

export function useOdometerCounter({
  target,
  duration = 1500, // Reduced from 2500 to 1500
  startDelay = 0,
  accelerationPhase = 0.2, // Reduced from 0.3
  decelerationPhase = 0.3, // Reduced from 0.4
}: UseOdometerCounterOptions) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (hasAnimatedRef.current || target === 0) return

    const startAnimation = () => {
      hasAnimatedRef.current = true
      setIsAnimating(true)

      let currentCount = 0
      const startTime = Date.now()

      const updateCounter = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        let speed
        if (progress < accelerationPhase) {
          // Acceleration phase: start slow, speed up
          const accelProgress = progress / accelerationPhase
          speed = accelProgress * accelProgress
        } else if (progress > 1 - decelerationPhase) {
          // Deceleration phase: slow down towards the end
          const decelProgress = (progress - (1 - decelerationPhase)) / decelerationPhase
          speed = 1 - decelProgress * decelProgress
        } else {
          // Constant speed phase
          speed = 1
        }

        const expectedCount = Math.floor(target * progress)

        // Ensure we increment by 1 each time
        if (expectedCount > currentCount) {
          currentCount = Math.min(currentCount + 1, target)
          setCount(currentCount)
        }

        if (currentCount < target && progress < 1) {
          // Dynamic delay based on speed
          const delay = Math.max(5, 50 * (1 - speed)) // Reduced from Math.max(10, 100 * (1 - speed))
          intervalRef.current = setTimeout(updateCounter, delay)
        } else {
          setCount(target)
          setIsAnimating(false)
        }
      }

      updateCounter()
    }

    // Start with delay
    const timeoutId = setTimeout(startAnimation, startDelay)

    return () => {
      clearTimeout(timeoutId)
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [target, duration, startDelay, accelerationPhase, decelerationPhase])

  return { count, isAnimating }
}
