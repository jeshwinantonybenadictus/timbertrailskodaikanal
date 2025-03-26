"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-heading text-primary">About TimberTrails</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Founded in 2018, TimberTrails was born from a passion for the natural beauty of Kodaikanal and a desire to
            share authentic experiences with travelers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-6">
            We carefully select and manage a portfolio of unique accommodations across Kodaikanal's most scenic
            locations. Our team of local experts ensures that each property meets our high standards of comfort,
            sustainability, and authentic experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-800">Local Expertise</h4>
                <p className="text-gray-600 text-sm">Our team knows every trail and hidden gem in Kodaikanal</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-800">Sustainable Tourism</h4>
                <p className="text-gray-600 text-sm">We're committed to preserving Kodaikanal's natural beauty</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-800">Curated Experiences</h4>
                <p className="text-gray-600 text-sm">Each stay is handpicked for its unique character and location</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                <p className="text-gray-600 text-sm">Our team is always available to assist with any needs</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-8">
            Our mission is to provide authentic, immersive experiences that connect travelers with the natural beauty
            and cultural heritage of Kodaikanal while supporting local communities and preserving the environment for
            future generations. We believe that responsible tourism can be a force for positive change, creating
            economic opportunities for local residents while encouraging conservation efforts.
          </p>
        </div>
      </div>
    </section>
  )
}

