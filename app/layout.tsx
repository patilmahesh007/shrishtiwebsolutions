import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Agency - Digital Solutions That Drive Results",
    template: "%s | Agency - Digital Solutions",
  },
  description:
    "Professional web development, digital marketing, and SEO services. We create custom solutions that propel your online growth with measurable ROI.",
  keywords: ["web development", "digital marketing", "SEO", "brand design", "e-commerce", "analytics"],
  authors: [{ name: "Agency Team" }],
  creator: "Agency",
  publisher: "Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://agency.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agency.example.com",
    title: "Agency - Digital Solutions That Drive Results",
    description:
      "Professional web development, digital marketing, and SEO services. We create custom solutions that propel your online growth with measurable ROI.",
    siteName: "Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agency - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency - Digital Solutions That Drive Results",
    description:
      "Professional web development, digital marketing, and SEO services. We create custom solutions that propel your online growth with measurable ROI.",
    images: ["/og-image.jpg"],
    creator: "@agency",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agency",
              url: "https://agency.example.com",
              logo: "https://agency.example.com/logo.png",
              description: "Professional web development, digital marketing, and SEO services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Creative Street",
                addressLocality: "Design City",
                addressRegion: "DC",
                postalCode: "12345",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "hello@agency.com",
              },
              sameAs: [
                "https://twitter.com/agency",
                "https://linkedin.com/company/agency",
                "https://instagram.com/agency",
              ],
              service: [
                {
                  "@type": "Service",
                  name: "Web Development",
                  description: "Custom, responsive websites built with modern technologies",
                },
                {
                  "@type": "Service",
                  name: "Digital Marketing",
                  description: "Data-driven marketing campaigns that deliver measurable results",
                },
                {
                  "@type": "Service",
                  name: "SEO Optimization",
                  description: "Comprehensive SEO strategies to improve search rankings",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
