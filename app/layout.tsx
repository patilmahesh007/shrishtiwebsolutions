import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Shrishti Web Solutions – Smarter Web, Smarter Business",
    template: "%s | Shrishti Web Solutions",
  },
  description:
    "Shrishti Web Solutions offers expert web design, development, SEO, and digital marketing to help businesses succeed online.",
  keywords: [
    "web design",
    "web development",
    "digital marketing",
    "SEO",
    "UI/UX",
    "ecommerce development",
    "responsive websites",
    "Shrishti Web Solutions",
  ],
  authors: [{ name: "Shrishti Web Team" }],
  creator: "Shrishti Web Solutions",
  publisher: "Shrishti Web Solutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.shrishtiwebsolutions.com"),
  alternates: {
    canonical: "https://www.shrishtiwebsolutions.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shrishtiwebsolutions.com",
    title: "Shrishti Web Solutions – Smarter Web, Smarter Business",
    description:
      "Shrishti Web Solutions offers expert web design, development, SEO, and digital marketing to help businesses succeed online.",
    siteName: "Shrishti Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shrishti Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrishti Web Solutions – Smarter Web, Smarter Business",
    description:
      "Shrishti Web Solutions offers expert web design, development, SEO, and digital marketing to help businesses succeed online.",
    images: ["/og-image.jpg"],
    creator: "@shrishtiweb",
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
    google: "your-google-verification-code", // Replace with your actual one
  },
  generator: "v0.dev",
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
              name: "Shrishti Web Solutions",
              url: "https://www.shrishtiwebsolutions.com",
              logo: "https://www.shrishtiwebsolutions.com/logo.png",
              description:
                "Web design, development, SEO, and digital marketing services tailored to boost business success.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Satral Songaon Tal-Rahuri",
                addressLocality: "Ahmednagar",
                addressRegion: "MH",
                postalCode: "413705",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8468954007",
                contactType: "customer service",
                email: "shrishtiwebsolutios@gmail.com",
              },
              sameAs: [
                "https://www.instagram.com/shrishtiwebsolutions",
                "https://www.linkedin.com/company/shrishtiwebsolutions",
              ],
              service: [
                {
                  "@type": "Service",
                  name: "Web Design",
                  description: "Modern, responsive website designs with exceptional UI/UX.",
                },
                {
                  "@type": "Service",
                  name: "Web Development",
                  description: "Full-stack web development using modern frameworks.",
                },
                {
                  "@type": "Service",
                  name: "Digital Marketing",
                  description: "Strategies to grow your online presence and engagement.",
                },
                {
                  "@type": "Service",
                  name: "SEO Optimization",
                  description: "Increase your search visibility and rank higher on Google.",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
