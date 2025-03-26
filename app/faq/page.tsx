import type { Metadata } from "next"
import FAQPageClient from "./FAQPageClient"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | TimberTrails Kodaikanal",
  description:
    "Find answers to common questions about TimberTrails accommodations, bookings, amenities, and experiences in Kodaikanal.",
  keywords:
    "TimberTrails FAQ, Kodaikanal accommodation questions, booking information, TimberTrails policies, Kodaikanal travel",
}

export default function FAQPage() {
  return <FAQPageClient />
}

