import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default:
      "The Website Wala | Affordable Next.js Web Development & Digital Marketing in Pune, Mumbai, Maharashtra & Across India",
    template: "%s | The Website Wala - Web Development & Digital Marketing",
  },
  description:
    "Get a free quote today! The Website Wala delivers low‑cost, fast, reliable, professional Next.js web development, digital marketing, and SEO services in Pune, Mumbai, Maharashtra and throughout India.",
  keywords: [
    "web development India",
    "digital marketing India",
    "SEO services India",
    "website design",
    "affordable web development",
    "Indian web developer",
    "website wala",
    "custom websites",
    "responsive design",
    "e-commerce development",
    "social media marketing",
    "search engine optimization",
    "online marketing",
    "website maintenance",
    "web development services",
    "photographer website",
    "gym website",
  ],
  authors: [{ name: "The Website Wala", url: "https://thewebsitewala.com" }],
  creator: "The Website Wala",
  publisher: "The Website Wala",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shrishtiwebsolutions.com"),
  alternates: {
    canonical: "https://thewebsitewala.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thewebsitewala.com",
    title: "The Website Wala | Professional Web Development & Digital Marketing",
    description:
      "Low‑cost, fast, reliable Next.js development, digital marketing, and SEO in Pune, Mumbai, Maharashtra & India. Get a free quote!",
    siteName: "The Website Wala",
    images: [
      {
        url: "https://shrishtiwebsolutions.com/path/to/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Website Wala - Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Website Wala | Professional Web Development & Digital Marketing",
    description:
      "Low‑cost, fast, reliable Next.js development, digital marketing, and SEO in Pune, Mumbai, Maharashtra & India. Get a free quote!",
    images: ["https://shrishtiwebsolutions.com/path/to/og-image.jpg"],
    creator: "@the_website_wala_",
    site: "@the_website_wala_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "geo.placename": "India",
    language: "English",
    target_country: "IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Website Wala",
              url: "https://thewebsitewala.com",
              logo: "https://thewebsitewala.com/logo.png",
              description: "Professional web development, digital marketing, and SEO services in India.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8468954007",
                contactType: "customer service",
                email: "shrishtiwebsolutions@gmail.com",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: ["https://www.instagram.com/the_website_wala_/", "https://wa.me/918468954007"],
              priceRange: "₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: ["Cash", "Credit Card", "UPI", "Bank Transfer"],
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              service: [
                {
                  "@type": "Service",
                  name: "Web Development",
                  description: "Custom, responsive websites built with modern technologies",
                  offers: {
                    "@type": "Offer",
                    price: "15000",
                    priceCurrency: "INR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "15000",
                      priceCurrency: "INR",
                      valueAddedTaxIncluded: true,
                    },
                  },
                },
                {
                  "@type": "Service",
                  name: "Digital Marketing",
                  description: "Data-driven marketing campaigns that deliver measurable results",
                  offers: {
                    "@type": "Offer",
                    price: "10000",
                    priceCurrency: "INR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "10000",
                      priceCurrency: "INR",
                      billingPeriod: "P1M",
                      valueAddedTaxIncluded: true,
                    },
                  },
                },
                {
                  "@type": "Service",
                  name: "SEO Optimization",
                  description: "Comprehensive SEO strategies to improve search rankings",
                  offers: {
                    "@type": "Offer",
                    price: "3000",
                    priceCurrency: "INR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "3000",
                      priceCurrency: "INR",
                      billingPeriod: "P1M",
                      valueAddedTaxIncluded: true,
                    },
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
