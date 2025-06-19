import type { Metadata } from "next"
import PageLayout from "../../components/page-layout"
import { Users, Target, Award, Zap } from "lucide-react"
import SequentialAnimatedStat from "../../components/sequential-animated-stat"
import OdometerStat from "../../components/odometer-stat"

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about our passionate team of designers, developers, and digital strategists. Discover our mission to transform visions into powerful digital experiences since 2021.",
  openGraph: {
    title: "About Agency - Our Story & Mission",
    description:
      "Learn about our passionate team of designers, developers, and digital strategists. Discover our mission to transform visions into powerful digital experiences since 2021.",
    url: "https://agency.example.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Agency - Our Team",
      },
    ],
  },
}

export default function AboutPage() {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
      color: "gold" as const,
    },
    {
      number: "25+",
      label: "Happy Clients",
      description: "Long-term partnerships built on trust and results",
      color: "blue" as const,
    },
    {
      number: "3+",
      label: "Years Experience",
      description: "Proven track record in digital solutions",
      color: "green" as const,
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to exceeding expectations every time",
      color: "default" as const,
    },
  ]

  const values = [
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Strategic Focus",
      description: "We align every project with your business goals and target audience needs.",
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Innovation First",
      description: "Cutting-edge technologies and creative solutions drive our approach.",
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Collaborative Process",
      description: "Your vision combined with our expertise creates exceptional results.",
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Quality Commitment",
      description: "We deliver excellence in every pixel, line of code, and campaign.",
    },
  ]

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Agency",
            description: "Learn about our passionate team of designers, developers, and digital strategists.",
            url: "https://agency.example.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "Agency",
              foundingDate: "2021",
              numberOfEmployees: "10-50",
              description:
                "Passionate team of designers, developers, and digital strategists dedicated to transforming visions into powerful digital experiences.",
            },
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
            <span className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">About Us</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 lg:mb-8 px-2">
            Crafting Digital Excellence Since 2021
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            We're a passionate team of designers, developers, and digital strategists dedicated to transforming your
            vision into powerful digital experiences that drive real business results.
          </p>
        </div>

        {/* Stats with Sequential Counting - Odometer Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 p-3 md:p-4 lg:p-6 hover:border-gray-600 transition-all duration-300"
            >
              <OdometerStat
                number={stat.number}
                label={stat.label}
                delay={index * 200}
                description={stat.description}
                color={stat.color}
              />
            </div>
          ))}
        </div>

        {/* Alternative Simple Sequential Counter */}
        <div className="hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 p-3 md:p-4 lg:p-6"
              >
                <SequentialAnimatedStat
                  number={stat.number}
                  label={stat.label}
                  delay={index * 150}
                  description={stat.description}
                  color={stat.color}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">Our Story</h2>
            <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>
                Founded with a vision to bridge the gap between creative design and technical excellence, our agency has
                grown from a small team of passionate creators to a trusted partner for businesses worldwide.
              </p>
              <p>
                We believe that great digital experiences are born from the perfect blend of strategy, creativity, and
                technology. Every project we undertake is an opportunity to push boundaries and create something
                extraordinary.
              </p>
              <p>
                Our approach is simple: listen, understand, create, and deliver. We don't just build websites or run
                campaigns – we craft digital solutions that tell your story and drive your success.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 p-4 md:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm sm:text-base">
              To empower businesses with innovative digital solutions that not only look exceptional but deliver
              measurable results and sustainable growth.
            </p>
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-lg md:text-xl">A</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm md:text-base">Agency Team</div>
                <div className="text-gray-400 text-xs md:text-sm">Founders & Creative Directors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 md:mb-8 lg:mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 p-4 md:p-6 hover:border-gray-600 transition-all"
              >
                <div className="text-white mb-3 md:mb-4">{value.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
