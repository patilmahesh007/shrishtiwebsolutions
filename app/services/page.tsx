import PageLayout from "../../components/page-layout"
import Link from "next/link"
import { ArrowRight, Code, Megaphone, Search } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      slug: "web-development",
      domain: "webdev.thewebsitewala.com",
      description: "Custom, responsive websites built with Next.js, React, and modern technologies.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Social Media Integration"],
      price: "Starting at ₹15,000",
      plans: [
        { name: "Basic", price: "₹15,000", pages: "4 Pages" },
        { name: "Standard", price: "₹20,000", pages: "7 Pages" },
        { name: "Premium", price: "₹30,000", pages: "Unlimited Pages" },
      ],
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      slug: "digital-marketing",
      domain: "marketing.thewebsitewala.com",
      description: "Data-driven campaigns across social media, PPC, and content marketing channels.",
      features: ["Social Media Management", "PPC Campaigns", "Content Strategy", "Analytics & Reporting"],
      price: "Starting at ₹8,000/month",
      plans: [
        { name: "Basic", price: "₹8,000/mo", pages: "2 Platforms" },
        { name: "Standard", price: "₹10,000/mo", pages: "4 Platforms" },
        { name: "Premium", price: "₹15,000/mo", pages: "All Platforms" },
      ],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      slug: "seo",
      domain: "seo.thewebsitewala.com",
      description: "Comprehensive SEO strategies to improve your search rankings and organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"],
      price: "Starting at ₹2,500/month",
      plans: [
        { name: "Basic", price: "₹2,500/mo", pages: "Basic SEO" },
        { name: "Standard", price: "₹3,000/mo", pages: "Advanced SEO" },
        { name: "Premium", price: "₹5,000/mo", pages: "Enterprise SEO" },
      ],
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
            the digital landscape with transparent pricing in Indian Rupees.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

              {/* Pricing Plans Preview */}
              <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                <h4 className="text-white font-semibold mb-3 text-sm">Pricing Plans:</h4>
                <div className="space-y-2">
                  {service.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{plan.name}</span>
                      <span className="text-white font-semibold">{plan.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-green-400 font-semibold text-lg">{service.price}</span>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-white hover:text-gray-300 font-medium flex items-center space-x-2 group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Comparison Table */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Web Development Pricing Comparison
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">
                      Basic
                      <br />
                      <span className="text-green-400 text-lg">₹15,000</span>
                    </th>
                    <th className="text-center p-6 text-white font-semibold">
                      Standard
                      <br />
                      <span className="text-green-400 text-lg">₹20,000</span>
                    </th>
                    <th className="text-center p-6 text-white font-semibold">
                      Premium
                      <br />
                      <span className="text-green-400 text-lg">₹30,000</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-300">Number of Pages</td>
                    <td className="p-4 text-center text-white">4 Pages</td>
                    <td className="p-4 text-center text-white">7 Pages</td>
                    <td className="p-4 text-center text-white">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-300">Responsive Design</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-300">SEO Optimization</td>
                    <td className="p-4 text-center text-yellow-400">Basic</td>
                    <td className="p-4 text-center text-green-400">Advanced</td>
                    <td className="p-4 text-center text-green-400">Advanced</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-300">Social Media Integration</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-300">Custom Design</td>
                    <td className="p-4 text-center text-gray-500">-</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-4 text-gray-300">Backend Integration</td>
                    <td className="p-4 text-center text-gray-500">-</td>
                    <td className="p-4 text-center text-gray-500">-</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300">Admin Panel</td>
                    <td className="p-4 text-center text-gray-500">-</td>
                    <td className="p-4 text-center text-gray-500">-</td>
                    <td className="p-4 text-center text-green-400">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that fits your needs and budget. All prices in
              Indian Rupees with no hidden costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/918468954007?text=Hi! I'm interested in your web development services. Can we discuss pricing and my project requirements?"
                target="_blank"
                className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#20b358] transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
