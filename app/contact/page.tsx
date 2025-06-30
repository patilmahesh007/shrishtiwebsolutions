"use client"

import type React from "react"
import PageLayout from "../../components/page-layout"
import { useState } from "react"
import { Mail, Phone, MapPin, Check, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message
    const whatsappMessage = `
*New Project Inquiry from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Company:* ${formData.company || "Not specified"}
*Service:* ${formData.service || "Not specified"}
*Budget:* ${formData.budget || "Not specified"}

*Message:*
${formData.message}

---
Sent from The Website Wala contact form
    `.trim()

    const whatsappNumber = "918468954007"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Simulate form processing
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Open WhatsApp
    window.open(whatsappURL, "_blank")

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Email",
      details: "shrishtiuwebsolutions@gmail.com",
      link: "mailto:shrishtiuwebsolutions@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Phone",
      details: "+91 8468954007",
      link: "tel:+918468954007",
    },
    {
      icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />,
      title: "WhatsApp",
      details: "+91 8468954007",
      link: "https://wa.me/918468954007",
    },
    {
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Location",
      details: "India",
      link: "https://maps.google.com",
    },
  ]

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
            <span className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Contact Us</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 lg:mb-8 px-2">
            Let's Create Something Amazing Together
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Ready to start your project? Get in touch with us and let's discuss how we can help bring your vision to
            life. We'll send your details directly to WhatsApp for instant communication.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Send us a message</h2>

            {isSubmitted ? (
              <div className="bg-green-900/20 border border-green-800 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
                <Check className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Message Sent to WhatsApp!</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Your inquiry has been forwarded to our WhatsApp. We'll respond shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 text-sm md:text-base">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg md:rounded-xl px-3 py-3 md:px-4 md:py-4 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors text-sm md:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 text-sm md:text-base">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg md:rounded-xl px-3 py-3 md:px-4 md:py-4 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-gray-300 mb-2 text-sm md:text-base">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg md:rounded-xl px-3 py-3 md:px-4 md:py-4 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors text-sm md:text-base"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2 text-sm md:text-base">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg md:rounded-xl px-3 py-3 md:px-4 md:py-4 text-white focus:border-white focus:outline-none transition-colors text-sm md:text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development (₹15,000+)</option>
                      <option value="digital-marketing">Digital Marketing (₹10,000/month)</option>
                      <option value="seo">SEO Optimization (₹3,000/month)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-gray-300 mb-2 text-sm md:text-base">
                    Project Budget (INR)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg md:rounded-xl px-3 py-3 md:px-4 md:py-4 text-white focus:border-white focus:outline-none transition-colors text-sm md:text-base"
                  >
                    <option value="">Select budget range</option>

                    {/* Web Development Plans */}
                    <optgroup label="🌐 Web Development (One-time)">
                      <option value="web-basic-15k">Basic Plan - ₹15,000 (4 Pages)</option>
                      <option value="web-standard-20k">Standard Plan - ₹20,000 (7 Pages)</option>
                      <option value="web-premium-30k">Premium Plan - ₹30,000 (Unlimited Pages)</option>
                      <option value="web-custom-30k+">Custom Development - ₹30,000+ (Advanced Features)</option>
                    </optgroup>

                    {/* Digital Marketing Plans */}
                    <optgroup label="📱 Digital Marketing (Monthly)">
                      <option value="marketing-basic-8k">Basic Plan - ₹8,000/month (2 Platforms)</option>
                      <option value="marketing-standard-10k">Standard Plan - ₹10,000/month (4 Platforms)</option>
                      <option value="marketing-premium-15k">Premium Plan - ₹15,000/month (All Platforms)</option>
                    </optgroup>

                    {/* SEO Plans */}
                    <optgroup label="🔍 SEO Optimization (Monthly)">
                      <option value="seo-basic-2.5k">Basic SEO - ₹2,500/month</option>
                      <option value="seo-standard-3k">Standard SEO - ₹3,000/month</option>
                      <option value="seo-premium-5k">Premium SEO - ₹5,000/month</option>
                    </optgroup>

                    {/* Combined Packages */}
                    <optgroup label="📦 Combined Packages">
                      <option value="combo-web-marketing">Website + Marketing - ₹25,000 + ₹8,000/month</option>
                      <option value="combo-web-seo">Website + SEO - ₹18,000 + ₹2,500/month</option>
                      <option value="combo-all-services">Complete Package - ₹35,000 + ₹10,000/month</option>
                    </optgroup>

                    {/* Custom Budget */}
                    <optgroup label="💰 Custom Budget">
                      <option value="budget-50k+">₹50,000+ (Enterprise Solutions)</option>
                      <option value="budget-custom">Custom Quote Required</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm md:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg md:rounded-xl px-3 py-3 md:px-4 md:py-4 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none text-sm md:text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#25D366] text-white py-3 md:py-4 rounded-lg md:rounded-xl font-semibold hover:bg-[#20b358] transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending to WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Send to WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Get in touch</h2>
              <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-sm sm:text-base">
                We're here to help bring your ideas to life. Whether you have a specific project in mind or just want to
                explore possibilities, we'd love to hear from you. All our services are priced in Indian Rupees for your
                convenience.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 hover:border-gray-600 transition-all group"
                >
                  <div className="text-white group-hover:text-gray-300 transition-colors flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm md:text-base">{info.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Response Time */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 p-4 md:p-6">
              <h3 className="text-white font-semibold mb-2 text-sm md:text-base">Quick Response</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                We typically respond to all WhatsApp inquiries within 2 hours during business hours. For urgent matters,
                please call us directly.
              </p>
            </div>

            {/* Availability */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 p-4 md:p-6">
              <h3 className="text-white font-semibold mb-2 text-sm md:text-base">Available for Projects</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Currently accepting new projects. Let's discuss your requirements and timeline. All prices in INR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
