"use client"

import { useEffect, useRef, useState } from "react"
import { useAnimatedCounter } from "../hooks/use-animated-counter"

interface IntersectionObserverCounterProps {
  number: string
  label: string
  delay?: number
}

export default function IntersectionObserverCounter({ number, label, delay = 0 }: IntersectionObserverCounterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  // Extract numeric value and suffix from the number string
  const numericValue = Number.parseInt(number.replace(/[^\d]/g, ""))
  const suffix = number.replace(/[\d]/g, "")

  const { count } = useAnimatedCounter({
    target: isVisible ? numericValue : 0,
    duration: 1500 + delay,
    easing: (t: number) => {
      // Bounce easing for more dynamic effect
      const c1 = 1.70158
      const c2 = c1 * 1.525
      return t < 0.5
        ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
        : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2
    },
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
        rootMargin: "-50px", // Start animation slightly before element is fully visible
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [isVisible])

  return (
    <div ref={elementRef} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-105 group-hover:text-gray-100">
        <span className="tabular-nums">{count}</span>
        <span className="text-gray-300">{suffix}</span>
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider transition-colors group-hover:text-gray-300">
        {label}
      </div>
    </div>
  )
}
