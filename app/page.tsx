import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection"
import AccommodationTypes from "@/components/AccommodationTypes"
import ReviewsSection from "@/components/ReviewsSection"
import AboutUs from "@/components/AboutUs"
import BookingCTA from "@/components/BookingCTA"
import DestinationHighlights from "@/components/DestinationHighlights"

export const metadata: Metadata = {
  title: "TimberTrails | Premium Stays in Kodaikanal",
  description:
    "Experience the beauty of Kodaikanal with TimberTrails' premium cottages, homestays, tents, and glamping options with breathtaking views.",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationHighlights />
      <AccommodationTypes />
      <ReviewsSection />
      <AboutUs />
      <BookingCTA />
    </>
  )
}

