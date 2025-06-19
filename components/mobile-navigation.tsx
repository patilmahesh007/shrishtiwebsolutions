"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services",
      label: "Services",
      hasSubmenu: true,
      submenu: [
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/digital-marketing", label: "Digital Marketing" },
        { href: "/services/seo", label: "SEO Optimization" },
      ],
    },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ]

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-4 z-50 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full border border-gray-800 flex items-center justify-center text-white hover:bg-black/30 transition-all"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0a0a0a] border-l border-gray-800 z-40 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6 h-full overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">A</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.hasSubmenu ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-lg transition-all"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && item.submenu && (
                      <div className="ml-4 space-y-1 mt-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm rounded-lg transition-all ${
                              pathname === subItem.href
                                ? "text-white bg-gray-900/50"
                                : "text-gray-400 hover:text-white hover:bg-gray-900/30"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition-all ${
                      pathname === item.href
                        ? "text-white bg-gray-900/50"
                        : "text-gray-300 hover:text-white hover:bg-gray-900/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <Link
              href="/contact"
              className="w-full bg-white text-black py-3 px-6 rounded-full font-semibold text-center block hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm mb-2">Ready to start your project?</p>
            <a href="tel:+15551234567" className="text-white font-semibold">
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
