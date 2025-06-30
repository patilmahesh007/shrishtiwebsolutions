"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import BottomNavigation from "./bottom-navigation"
import Image from "next/image"

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
                  ? "w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white/10 backdrop-blur-sm border border-gray-700 hover:border-gray-500"
                  : pathname === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
              }`}
              aria-label={item.isLogo ? "Home" : item.label}
            >
              {item.isLogo ? (
                <Image
                  src="/logo.png"
                  alt="The Website Wala"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                item.label
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Top Bar - Reduced padding */}
      <div className="md:hidden relative z-20 flex items-center justify-center pt-4 pb-2">
        <Link
          href="/"
          className="w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-gray-700"
        >
          <Image
            src="/logo.png"
            alt="The Website Wala"
            width={48}
            height={48}
            className="w-full h-full object-cover rounded-full"
          />
        </Link>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
    </>
  )
}
