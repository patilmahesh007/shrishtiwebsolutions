import type React from "react"
import Navigation from "./navigation"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-[#0a0a0a] ${className}`}>
      {/* Background layers */}
      <div className="fixed inset-0 bg-[#0a0a0a]"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-black/90"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10">
        <Navigation />
        {children}
      </div>
    </div>
  )
}
