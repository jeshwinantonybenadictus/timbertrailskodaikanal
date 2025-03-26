import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const accommodations = [
  {
    id: "luxury-cottages",
    name: "Luxury Cottages",
    location: "Pine Forest, Kodaikanal",
    image: "/assets/Cottage 2.jpg",
    description: "Cozy wooden cottages nestled among pine trees with panoramic valley views and modern amenities.",
  },
  {
    id: "glamping-tents",
    name: "Glamping Tents",
    location: "Vattakanal, Kodaikanal",
    image: "/assets/Glamp1.jpg",
    description:
      "Luxury camping with comfortable beds, electricity, and private bathrooms with stunning mountain views.",
  },
  {
    id: "treehouse-retreats",
    name: "Treehouse Retreats",
    location: "Berijam Forest, Kodaikanal",
    image: "/assets/Woodhouse1.jpg",
    description: "Elevated wooden treehouses offering a unique stay experience with forest canopy views.",
  },
]

export default function AccommodationTypes() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-heading text-primary">Our Accommodation Options</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of handpicked stays in Kodaikanal's most scenic locations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <Card
              key={accommodation.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={accommodation.image || "/assets/cover1.jpg"}
                  alt={accommodation.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2 font-heading text-gray-800">{accommodation.name}</h3>
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPin className="h-4 w-4 mr-1 text-primary" />
                  <span className="text-sm">{accommodation.location}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{accommodation.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/accommodations/${accommodation.id}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

