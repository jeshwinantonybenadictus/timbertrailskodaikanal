import { Inter, Poppins } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MobileTabBar from "@/components/MobileTabBar"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "TimberTrails | Premium Stays in Kodaikanal",
  description:
    "Experience the beauty of Kodaikanal with TimberTrails' premium cottages, homestays, tents, and glamping options with breathtaking views.",
  keywords:
    "Kodaikanal accommodation, cottages in Kodaikanal, glamping, homestays, mountain views, hill station, Tamil Nadu tourism",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "TimberTrails",
              description:
                "Premium accommodations in Kodaikanal including cottages, homestays, glamping tents, and treehouse retreats.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kodaikanal",
                addressRegion: "Tamil Nadu",
                postalCode: "624101",
                addressCountry: "IN",
              },
              telephone: "+918056393753",
              priceRange: "₹₹₹",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Mountain Views" },
                { "@type": "LocationFeatureSpecification", name: "Nature Trails" },
                { "@type": "LocationFeatureSpecification", name: "Local Cuisine" },
              ],
            }),
          }}
        />
        {/* Add meta tags for better SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://timbertrials.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <MobileTabBar />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'