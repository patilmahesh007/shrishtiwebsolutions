import PageLayout from "../../components/page-layout"
import Link from "next/link"
import { ArrowRight, ExternalLink, Calendar, Users, TrendingUp } from "lucide-react"

export default function WorkPage() {
  const projects = [
    {
      title: "TechCorp Enterprise Platform",
      category: "Web Development",
      description:
        "Complete enterprise web application with advanced analytics dashboard and real-time data visualization for a Fortune 500 technology company.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "D3.js", "AWS"],
      url: "https://techcorp.example.com",
      year: "2024",
      duration: "6 months",
      teamSize: "8 developers",
      results: "+150% user engagement",
      featured: true,
    },
    {
      title: "HealthTech Digital Transformation",
      category: "Web Development",
      description:
        "Modern healthcare platform with patient portal, appointment scheduling, and telemedicine integration for a leading medical practice.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "HIPAA Compliant"],
      url: "https://healthtech.example.com",
      year: "2024",
      duration: "4 months",
      teamSize: "6 developers",
      results: "+200% patient satisfaction",
      featured: true,
    },
    {
      title: "FinanceFlow SaaS Platform",
      category: "Web Development",
      description:
        "Comprehensive financial management SaaS with automated reporting, invoice generation, and multi-currency support for small businesses.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Stripe API", "Prisma", "Redis", "Docker"],
      url: "https://financeflow.example.com",
      year: "2024",
      duration: "5 months",
      teamSize: "5 developers",
      results: "+300% revenue growth",
      featured: false,
    },
    {
      title: "EduLearn Online Platform",
      category: "Web Development",
      description:
        "Interactive e-learning platform with video streaming, progress tracking, and certification system for educational institutions.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AWS S3"],
      url: "https://edulearn.example.com",
      year: "2023",
      duration: "7 months",
      teamSize: "10 developers",
      results: "+500% student enrollment",
      featured: false,
    },
    {
      title: "RestaurantHub Marketing Campaign",
      category: "Digital Marketing",
      description:
        "Multi-channel digital marketing campaign for restaurant chain resulting in significant increase in online orders and brand awareness.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Google Ads", "Facebook Ads", "Instagram", "Email Marketing", "Analytics"],
      url: "https://restauranthub.example.com",
      year: "2024",
      duration: "3 months",
      teamSize: "4 marketers",
      results: "+400% online orders",
      featured: false,
    },
    {
      title: "TravelPro SEO Optimization",
      category: "SEO Optimization",
      description:
        "Comprehensive SEO strategy implementation for travel agency, including technical SEO, content optimization, and local search enhancement.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Technical SEO", "Content Strategy", "Local SEO", "Link Building", "Analytics"],
      url: "https://travelpro.example.com",
      year: "2023",
      duration: "8 months",
      teamSize: "3 SEO specialists",
      results: "+250% organic traffic",
      featured: false,
    },
  ]

  const categories = ["All", "Web Development", "Digital Marketing", "SEO Optimization"]
  const featuredProjects = projects.filter((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-gray-400 text-sm uppercase tracking-wider">Our Work</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Projects That Deliver Results
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful web development, digital marketing, and SEO projects. Each project
            represents our commitment to excellence and measurable business impact.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full border transition-all ${
                index === 0
                  ? "bg-white text-black border-white"
                  : "border-gray-700 text-gray-300 hover:border-white hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all group"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs text-gray-400 uppercase tracking-wider bg-black/30 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded">{project.year}</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10">{project.title.charAt(0)}</div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-center">
                      <Calendar className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Duration</div>
                      <div className="text-sm text-white font-semibold">{project.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Team Size</div>
                      <div className="text-sm text-white font-semibold">{project.teamSize}</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Results</div>
                      <div className="text-sm text-green-400 font-semibold">{project.results}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.url}
                    target="_blank"
                    className="text-white hover:text-gray-300 font-medium flex items-center space-x-2 group/btn"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Projects Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs text-gray-400 uppercase tracking-wider bg-black/30 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded">{project.year}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/10">{project.title.charAt(0)}</div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3 text-sm">{project.description}</p>

                  {/* Compact Stats */}
                  <div className="flex justify-between text-xs text-gray-400 mb-3 p-2 bg-gray-800/30 rounded">
                    <span>{project.duration}</span>
                    <span>{project.teamSize}</span>
                    <span className="text-green-400">{project.results}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">+{project.tags.length - 3} more</span>
                    )}
                  </div>

                  <Link
                    href={project.url}
                    target="_blank"
                    className="text-white hover:text-gray-300 font-medium flex items-center space-x-2 group/btn text-sm"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. We'd love to discuss your vision and bring it to
              life.
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
