"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import BottomNavigation from "./bottom-navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/", label: "Home", isLogo: true },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact us" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="relative z-20 hidden md:flex items-center justify-center pt-8 pb-4">
        <div className="flex items-center space-x-8 bg-black/20 backdrop-blur-sm rounded-full px-8 py-3 border border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors text-sm ${
                item.isLogo
                  ? "w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg"
                  : pathname === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
              }`}
              aria-label={item.isLogo ? "Home" : item.label}
            >
              {item.isLogo ? "A" : item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden relative z-20 flex items-center justify-center pt-6 pb-4">
        <Link href="/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-lg">A</span>
        </Link>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
    </>
  )
}
