import PageLayout from "../../../components/page-layout"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"

interface ServicePageProps {
  params: {
    slug: string
  }
}

const serviceData = {
  "web-development": {
    title: "Web Development",
    domain: "webdev.thewebsitewala.com",
    description: "Custom, responsive websites built with cutting-edge technologies",
    longDescription:
      "We create modern, fast, and scalable websites that not only look stunning but perform exceptionally. Our development process focuses on user experience, performance optimization, and future-proof architecture with affordable pricing in Indian Rupees.",
    features: [
      "Responsive Design for All Devices",
      "Performance Optimization",
      "SEO-Ready Architecture",
      "Social Media Integration",
      "Custom Design & Development",
      "Backend Integration",
      "Admin Panel Development",
      "Ongoing Maintenance & Support",
    ],
    process: [
      { step: "Discovery", description: "Understanding your requirements and business goals" },
      { step: "Design", description: "Creating wireframes and custom visual designs" },
      { step: "Development", description: "Building your website with modern technologies" },
      { step: "Testing", description: "Comprehensive testing across devices and browsers" },
      { step: "Launch", description: "Deploying your website and monitoring performance" },
      { step: "Support", description: "Ongoing maintenance and updates" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "PostgreSQL"],
    pricing: {
      basic: {
        price: "₹15,000",
        features: [
          "4 Pages",
          "Responsive Design",
          "Basic SEO",
          "Social Media Integration",
          "Contact Form",
          "Mobile Optimized",
        ],
      },
      standard: {
        price: "₹20,000",
        features: [
          "7 Pages",
          "Advanced SEO",
          "Social Media Integration",
          "Custom Design",
          "Analytics Setup",
          "Performance Optimization",
          "Content Management",
        ],
      },
      premium: {
        price: "₹30,000",
        features: [
          "Unlimited Pages",
          "Custom Functionality",
          "Backend Integration",
          "Admin Panel",
          "Database Integration",
          "User Authentication",
          "Priority Support",
          "Advanced Features",
        ],
      },
    },
  },
  "digital-marketing": {
    title: "Digital Marketing",
    domain: "marketing.thewebsitewala.com",
    description: "Data-driven marketing campaigns that deliver measurable results",
    longDescription:
      "Our digital marketing strategies combine creativity with analytics to drive engagement, generate leads, and increase conversions. We focus on ROI-driven campaigns across multiple channels with transparent pricing in Indian Rupees.",
    features: [
      "Social Media Management",
      "Pay-Per-Click Advertising",
      "Content Marketing Strategy",
      "Email Marketing Campaigns",
      "Influencer Partnerships",
      "Analytics & Reporting",
      "Conversion Optimization",
      "Brand Reputation Management",
    ],
    process: [
      { step: "Audit", description: "Analyzing your current digital presence" },
      { step: "Strategy", description: "Developing a comprehensive marketing plan" },
      { step: "Implementation", description: "Executing campaigns across chosen channels" },
      { step: "Monitoring", description: "Tracking performance and engagement metrics" },
      { step: "Optimization", description: "Refining campaigns based on data insights" },
      { step: "Reporting", description: "Providing detailed performance reports" },
    ],
    technologies: ["Google Ads", "Facebook Ads", "Instagram", "LinkedIn", "Google Analytics", "HubSpot"],
    pricing: {
      basic: {
        price: "₹8,000/mo",
        features: ["2 Platforms", "Content Creation", "Basic Analytics", "Monthly Reports"],
      },
      standard: {
        price: "₹10,000/mo",
        features: ["4 Platforms", "PPC Management", "Advanced Analytics", "Bi-weekly Reports", "A/B Testing"],
      },
      premium: {
        price: "₹15,000/mo",
        features: [
          "All Platforms",
          "Full Campaign Management",
          "Custom Analytics",
          "Weekly Reports",
          "Dedicated Account Manager",
        ],
      },
    },
  },
  seo: {
    title: "SEO Optimization",
    domain: "seo.thewebsitewala.com",
    description: "Comprehensive SEO strategies to dominate search rankings",
    longDescription:
      "Our SEO approach combines technical expertise with content strategy to improve your search visibility and drive organic traffic. We focus on sustainable, white-hat techniques that deliver long-term results with affordable monthly plans in Indian Rupees.",
    features: [
      "Comprehensive SEO Audit",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Technical SEO",
      "Link Building Campaigns",
      "Local SEO Optimization",
      "Content Strategy",
      "Performance Monitoring",
    ],
    process: [
      { step: "Audit", description: "Comprehensive analysis of your current SEO status" },
      { step: "Research", description: "Keyword research and competitor analysis" },
      { step: "Strategy", description: "Developing a customized SEO roadmap" },
      { step: "Implementation", description: "Executing on-page and technical optimizations" },
      { step: "Content", description: "Creating SEO-optimized content" },
      { step: "Monitoring", description: "Tracking rankings and organic traffic growth" },
    ],
    technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Google Analytics", "Schema.org"],
    pricing: {
      basic: {
        price: "₹2,500/mo",
        features: ["Keyword Research", "On-Page SEO", "Monthly Reports", "Basic Link Building"],
      },
      standard: {
        price: "₹3,000/mo",
        features: ["Technical SEO", "Content Strategy", "Advanced Link Building", "Bi-weekly Reports", "Local SEO"],
      },
      premium: {
        price: "₹5,000/mo",
        features: ["Enterprise SEO", "Custom Strategy", "Priority Support", "Weekly Reports", "Dedicated SEO Manager"],
      },
    },
  },
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceData[params.slug as keyof typeof serviceData]

  if (!service) {
    return (
      <PageLayout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="text-white hover:text-gray-300 flex items-center justify-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-gray-400 text-sm uppercase tracking-wider font-mono">{service.domain}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">{service.title}</h1>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed mb-8">{service.longDescription}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.step}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Technologies We Use</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2 text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Pricing */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Pricing Plans</h3>
              <div className="space-y-6">
                {Object.entries(service.pricing).map(([plan, details]) => (
                  <div
                    key={plan}
                    className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-semibold capitalize text-lg">{plan}</span>
                      <span className="text-white font-bold text-xl">{details.price}</span>
                    </div>
                    <div className="space-y-2">
                      {details.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Note */}
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                <p className="text-blue-300 text-sm">
                  <strong>Note:</strong> All prices are in Indian Rupees (INR). Custom requirements may affect pricing.
                  Contact us for a detailed quote.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Start?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project and create a custom solution that fits your budget.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full justify-center"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* WhatsApp CTA */}
              <div className="mt-4">
                <Link
                  href="https://wa.me/918468954007?text=Hi! I'm interested in your web development services. Can we discuss pricing and my project requirements?"
                  target="_blank"
                  className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20b358] transition-colors w-full justify-center"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
