"use client"

import Link from "next/link"
import { MessageCircle, Instagram } from "lucide-react"

export default function FloatingSocialButtons() {
  const whatsappNumber = "918468954007"
  const whatsappMessage = "Hi! I'm interested in your web development services. Can we discuss my project?"

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Instagram Button */}
      <Link
        href="https://www.instagram.com/the_website_wala_/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Link>

      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />

        {/* WhatsApp pulse animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
      </Link>
    </div>
  )
}
