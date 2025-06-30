import type { Metadata } from "next"
import HeroSection from "../hero-section"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Get a free quote today! The Website Wala delivers low‑cost, fast, reliable, professional Next.js web development, digital marketing, and SEO services in Pune, Mumbai, Maharashtra and throughout India.",
  openGraph: {
    title: "The Website Wala | Professional Web Development & Digital Marketing",
    description:
      "Low‑cost, fast, reliable Next.js development, digital marketing, and SEO in Pune, Mumbai, Maharashtra & India. Get a free quote!",
    url: "https://thewebsitewala.com",
    images: [
      {
        url: "https://shrishtiwebsolutions.com/path/to/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Website Wala - Professional Web Development & Digital Marketing",
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
            name: "The Website Wala | Professional Web Development & Digital Marketing",
            description:
              "Low‑cost, fast, reliable Next.js development, digital marketing, and SEO in Pune, Mumbai, Maharashtra & India.",
            url: "https://thewebsitewala.com",
            mainEntity: {
              "@type": "Organization",
              name: "The Website Wala",
              url: "https://thewebsitewala.com",
              sameAs: ["https://www.instagram.com/the_website_wala_/", "https://wa.me/918468954007"],
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
