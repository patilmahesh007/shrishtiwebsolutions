import type { Metadata } from "next"
import HeroSection from "../hero-section"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Professional web development, digital marketing, and SEO services. We create custom solutions that propel your online growth with measurable ROI.",
  openGraph: {
    title: "Agency - Digital Solutions That Drive Results",
    description:
      "Professional web development, digital marketing, and SEO services. We create custom solutions that propel your online growth with measurable ROI.",
    url: "https://agency.example.com",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Agency Homepage - Digital Solutions",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Agency - Digital Solutions That Drive Results",
            description: "Professional web development, digital marketing, and SEO services.",
            url: "https://agency.example.com",
            mainEntity: {
              "@type": "Organization",
              name: "Agency",
              offers: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development",
                    description: "Custom, responsive websites built with Next.js & Tailwind CSS",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Digital Marketing",
                    description: "Data-driven campaigns to boost traffic, leads, and revenue",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO Optimization",
                    description: "On-page and off-page optimization to rank higher in search results",
                  },
                },
              ],
            },
          }),
        }}
      />
      <HeroSection />
    </>
  )
}
