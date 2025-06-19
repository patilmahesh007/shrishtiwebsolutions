"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Navigation from "./components/navigation"
import Link from "next/link"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      title: "Web Development",
      domain: "webdev.example.com",
      category: "DEVELOPMENT",
      description: "Custom, responsive websites built with Next.js & Tailwind CSS for optimal performance.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/web-development",
    },
    {
      title: "Digital Marketing",
      domain: "marketing.example.com",
      category: "MARKETING",
      description: "Data-driven campaigns to boost traffic, leads, and revenue through strategic channels.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/digital-marketing",
    },
    {
      title: "SEO",
      domain: "seo.example.com",
      category: "OPTIMIZATION",
      description: "On-page and off-page optimization to rank higher in search results and drive traffic.",
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/seo",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="relative w-screen overflow-hidden min-h-screen pb-20 md:pb-0">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-black/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none"></div>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
              <span className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Featured Services</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Services That Propel Your Online Growth
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
              We deliver Web Development, Digital Marketing, and SEO solutions with measurable ROI. Let us build and
              promote your brand online.
            </p>

            {/* Desktop Navigation arrows */}
            <div className="hidden lg:flex items-center space-x-4 pt-4 lg:pt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
                aria-label="Next service"
              >
                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden pt-2">
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 bg-white text-black px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right content - Service cards */}
          <div className="w-full lg:w-1/2 relative">
            {/* Desktop View All Button */}
            <div className="hidden lg:block absolute top-4 right-4 z-20">
              <Link
                href="/services"
                className="bg-white text-black px-4 py-2 lg:px-6 lg:py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <div
                ref={carouselRef}
                className="overflow-hidden rounded-2xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {services.map((service, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <MobileServiceCard service={service} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-white" : "bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Swipe indicator */}
              <div className="text-center mt-3">
                <span className="text-gray-500 text-xs">Swipe to explore services</span>
              </div>
            </div>

            {/* Desktop Carousel */}
            <div className="hidden lg:block overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <DesktopServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Slide indicators */}
            <div className="hidden lg:flex justify-center space-x-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-white" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden mx-2">
      {/* Service image/preview */}
      <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-3 left-3">
          <span className="text-xs text-gray-400 uppercase tracking-wider bg-black/30 px-2 py-1 rounded">
            {service.category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl sm:text-5xl font-bold text-white/10">{service.title.charAt(0)}</div>
        </div>
      </div>

      {/* Service content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{service.title}</h3>
          <div className="text-gray-400 text-xs sm:text-sm mb-2 font-mono">{service.domain}</div>
          <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
        </div>

        <Link
          href={service.href}
          className="inline-flex items-center space-x-2 text-white hover:text-gray-300 font-medium text-sm"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

function DesktopServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
      {/* Service image/preview */}
      <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="text-xs text-gray-400 uppercase tracking-wider bg-black/30 px-2 py-1 rounded">
            {service.category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-white/10">{service.title.charAt(0)}</div>
        </div>
      </div>

      {/* Service content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
            {service.title}
          </h3>
          <div className="text-gray-400 text-sm mb-3 font-mono">{service.domain}</div>
          <p className="text-gray-300 leading-relaxed">{service.description}</p>
        </div>

        <Link
          href={service.href}
          className="text-white hover:text-gray-300 font-medium flex items-center space-x-2 group/btn"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
