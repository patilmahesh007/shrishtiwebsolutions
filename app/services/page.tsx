import PageLayout from "../../components/page-layout"
import Link from "next/link"
import { ArrowRight, Code, Megaphone, Search } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      slug: "web-development",
      domain: "webdev.example.com",
      description: "Custom, responsive websites built with Next.js, React, and modern technologies.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "CMS Integration"],
      price: "Starting at $2,500",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      slug: "digital-marketing",
      domain: "marketing.example.com",
      description: "Data-driven campaigns across social media, PPC, and content marketing channels.",
      features: ["Social Media Management", "PPC Campaigns", "Content Strategy", "Analytics & Reporting"],
      price: "Starting at $1,500/month",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      slug: "seo",
      domain: "seo.example.com",
      description: "Comprehensive SEO strategies to improve your search rankings and organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"],
      price: "Starting at $800/month",
    },
  ]

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-gray-400 text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Services That Drive Results
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            From web development to digital marketing, we offer comprehensive solutions to help your business thrive in
            the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-gray-600 transition-all group"
            >
              <div className="text-white mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <div className="text-gray-400 text-sm mb-4 font-mono">{service.domain}</div>
              <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">{service.price}</span>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-white hover:text-gray-300 font-medium flex items-center space-x-2 group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that fits your needs and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
