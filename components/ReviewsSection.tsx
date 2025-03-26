"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment:
      "Our stay at the luxury cottage was magical! The misty mornings, cozy fireplace, and stunning views made our honeymoon perfect. The staff was incredibly attentive and the homemade food was delicious.",
    image: "/placeholder.svg?height=60&width=60",
    accommodation: "Luxury Cottages",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Bangalore",
    rating: 5,
    comment:
      "The glamping experience exceeded our expectations! It was the perfect balance of adventure and comfort. Waking up to the mountain views was breathtaking, and the guided treks arranged by TimberTrails were excellent.",
    image: "/placeholder.svg?height=60&width=60",
    accommodation: "Glamping Tents",
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Chennai",
    rating: 5,
    comment:
      "The treehouse retreat was a unique experience that my wife and I will never forget. Sleeping among the treetops while being completely comfortable was amazing. The staff went above and beyond to make our anniversary special.",
    image: "/placeholder.svg?height=60&width=60",
    accommodation: "Treehouse Retreats",
  },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-heading text-primary">What Our Guests Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from travelers who have experienced the magic of Kodaikanal with TimberTrails
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start mb-4">
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{review.name}</h4>
                        <p className="text-gray-500 text-sm">{review.location}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                              fill={i < review.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic flex-grow">&ldquo;{review.comment}&rdquo;</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-primary font-medium">Stayed at: {review.accommodation}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

