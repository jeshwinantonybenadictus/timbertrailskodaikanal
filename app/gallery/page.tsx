import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | TimberTrails Kodaikanal",
  description:
    "Explore our gallery of beautiful accommodations in Kodaikanal including luxury cottages, glamping tents, and treehouse retreats.",
  keywords: "Kodaikanal gallery, accommodation photos, TimberTrails images, cottages, glamping, treehouses",
}

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Luxury Cottage Exterior",
    category: "Luxury Cottages",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Glamping Tent Interior",
    category: "Glamping Tents",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Treehouse Retreat Exterior",
    category: "Treehouse Retreats",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cottage Living Room",
    category: "Luxury Cottages",
  },
  {
    src: "/assets/Glamp1.jpg",
    alt: "Glamping Tent Exterior",
    category: "Glamping Tents",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Treehouse Balcony View",
    category: "Treehouse Retreats",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cottage Bedroom",
    category: "Luxury Cottages",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Glamping Bathroom",
    category: "Glamping Tents",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Treehouse Interior",
    category: "Treehouse Retreats",
  },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-primary">Our Gallery</h1>
      <p className="text-gray-600 max-w-3xl mb-8">
        Explore our collection of images showcasing our beautiful accommodations in Kodaikanal. From cozy cottages to
        unique treehouses, get a glimpse of the experiences that await you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={image.src || "/assets/cover2.jpg"}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-medium">{image.alt}</h3>
              <p className="text-white/80 text-sm">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/#services">
          <Button className="bg-primary text-white hover:bg-primary/90">Explore Our Accommodations</Button>
        </Link>
      </div>
    </div>
  )
}

