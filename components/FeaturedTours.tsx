import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useCurrency, formatPrice } from "./CurrencyContext"

const tours = [
  {
    id: 1,
    name: "Luxo em Paris",
    location: "Paris, França",
    price: 6000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Castelos da Baviera",
    location: "Munique, Alemanha",
    price: 7500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1583452924150-c86772c4fab6?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Riviera Italiana",
    location: "Costa Amalfitana, Itália",
    price: 9000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400&h=300&fit=crop",
  },
]

export default function FeaturedTours() {
  const { currency } = useCurrency()

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-serif text-gold">Tours em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden">
              <Image
                src={tour.image || "/placeholder.svg"}
                alt={tour.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2 font-serif">{tour.name}</h3>
                <p className="text-gray-600 mb-2">{tour.location}</p>
                <p className="text-2xl font-bold mb-2 font-serif">{formatPrice(tour.price, currency)}</p>
                <div className="flex items-center">
                  <Star className="text-yellow-400 w-5 h-5 mr-1" />
                  <span>{tour.rating.toFixed(1)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/tours/${tour.id}`} passHref>
                  <Button className="w-full font-serif">Ver Detalhes</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

