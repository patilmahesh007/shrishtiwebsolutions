"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, FolderOpen, MessageCircle, Plus } from "lucide-react"
import { useState } from "react"

export default function BottomNavigation() {
  const pathname = usePathname()
  const [showServices, setShowServices] = useState(false)

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/services", label: "Services", icon: Plus, hasSubmenu: true },
    { href: "/work", label: "Work", icon: FolderOpen },
    { href: "/contact", label: "Contact", icon: MessageCircle },
  ]

  const serviceItems = [
    { href: "/services/web-development", label: "Web Dev" },
    { href: "/services/digital-marketing", label: "Marketing" },
    { href: "/services/seo", label: "SEO" },
  ]

  return (
    <>
      {/* Services Popup */}
      {showServices && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowServices(false)}
        >
          <div className="absolute bottom-20 left-4 right-4 bg-[#0a0a0a] border border-gray-800 rounded-2xl p-4 space-y-2">
            <div className="text-white font-semibold mb-3 px-2">Our Services</div>
            {serviceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setShowServices(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-xl transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/services"
              onClick={() => setShowServices(false)}
              className="block px-4 py-3 text-white bg-gray-900/50 rounded-xl font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-gray-800">
        <div className="flex items-center justify-around px-2 py-2 safe-area-pb">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href === "/services" && pathname.startsWith("/services"))

            if (item.hasSubmenu) {
              return (
                <button
                  key={item.href}
                  onClick={() => setShowServices(!showServices)}
                  className={`flex flex-col items-center justify-center p-2 min-w-[60px] transition-all ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full transition-all ${
                      isActive ? "bg-white/10" : showServices ? "bg-gray-800" : ""
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs mt-1 font-medium">{item.label}</span>
                </button>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 min-w-[60px] transition-all ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                <div className={`p-2 rounded-full transition-all ${isActive ? "bg-white/10" : ""}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Bottom padding for content */}
      <div className="md:hidden h-20" />
    </>
  )
}
