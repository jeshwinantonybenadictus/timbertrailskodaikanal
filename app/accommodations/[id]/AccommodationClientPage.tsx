"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MapPin } from "lucide-react"

// Define accommodation data
const accommodationsData = {
  "luxury-cottages": {
    id: "luxury-cottages",
    name: "Luxury Cottages",
    location: "Pine Forest, Kodaikanal",
    description:
      "Our luxury cottages are nestled among the majestic pine trees of Kodaikanal, offering a perfect blend of rustic charm and modern comfort. Each cottage features panoramic valley views, a cozy fireplace, premium furnishings, and a private deck where you can enjoy your morning coffee while watching the mist roll through the mountains. The cottages are designed with local materials to blend harmoniously with the natural surroundings while providing all the amenities you need for a comfortable stay.",
    longDescription:
      "Experience the ultimate mountain retreat in our luxury cottages, where traditional architecture meets modern comfort. Each cottage is strategically positioned to offer maximum privacy and stunning views of the Kodaikanal valley. Inside, you'll find spacious bedrooms with premium bedding, a fully-equipped kitchen, a dining area, and a living room with a traditional fireplace. The large windows allow natural light to flood in while providing breathtaking views of the surrounding pine forest. Outside, your private deck is the perfect spot for stargazing or enjoying a quiet evening with loved ones. Our cottages are equipped with high-speed internet, smart TVs, and premium bath amenities. Housekeeping services are provided daily, and our concierge can arrange for special experiences like private dining or guided nature walks.",
    images: [
      "/assets/Woodhouse6.jpg?height=100&width=100",
      "/assets/Cottage4.jpg?height=100&width=100",
    ],
    amenities: [
      "Fireplace",
      "Private deck",
      "Mountain views",
      "Premium furnishings",
      "Fully-equipped kitchen",
      "High-speed WiFi",
      "Daily housekeeping",
      "Concierge service",
    ],
  },
  "glamping-tents": {
    id: "glamping-tents",
    name: "Glamping Tents",
    location: "Vattakanal, Kodaikanal",
    description:
      "Experience luxury camping in our glamping tents located in the serene Vattakanal area of Kodaikanal. These spacious canvas tents combine the adventure of camping with the comforts of a hotel room. Each tent features comfortable beds with premium linens, electricity, private bathrooms, and a small porch where you can sit and enjoy the mountain views. It's the perfect way to connect with nature without sacrificing comfort.",
    longDescription:
      "Our glamping tents offer the perfect balance between adventure and luxury in the pristine wilderness of Vattakanal. Each spacious tent is built on a raised wooden platform and features a canvas exterior that keeps you protected from the elements while allowing you to hear the soothing sounds of nature. Inside, you'll find a queen-sized bed with premium linens, side tables with reading lamps, a seating area, and a private en-suite bathroom with a hot shower and eco-friendly toiletries. The tents are powered by solar energy, providing electricity for lighting and charging your devices. Each tent has its own private deck with comfortable seating where you can enjoy your morning coffee or evening drinks while taking in the spectacular mountain views. The glamping area includes a communal fire pit where guests gather in the evenings for stargazing and storytelling. Our on-site restaurant serves organic, locally-sourced meals, and we offer activities like guided hikes, bird watching tours, and meditation sessions in the forest.",
    images: [
      "/assets/Glamp2.jpg",
      "/assets/Glamp1.jpg",
    ],
    amenities: [
      "Comfortable beds with premium linens",
      "Private bathroom with hot shower",
      "Solar-powered electricity",
      "Private deck",
      "Communal fire pit",
      "On-site dining",
      "Guided activities",
      "Eco-friendly amenities",
    ],
  },
  "treehouse-retreats": {
    id: "treehouse-retreats",
    name: "Treehouse Retreats",
    location: "Berijam Forest, Kodaikanal",
    description:
      "Our unique treehouse retreats offer a magical experience high above the forest floor in the Berijam Forest area. These carefully constructed wooden structures provide comfortable accommodations with stunning canopy views. Each treehouse features a comfortable bedroom, a small sitting area, basic bathroom facilities, and a balcony where you can observe wildlife and enjoy the peaceful forest atmosphere. It's an unforgettable experience for nature lovers and adventure seekers.",
    longDescription:
      "Our treehouse retreats offer a truly magical experience that will transport you back to childhood dreams while providing all the comforts you need. Built by local craftsmen using sustainable practices, each treehouse is securely nestled among the branches of large, sturdy trees in the Berijam Forest. Accessible via wooden staircases or rope bridges, these elevated havens provide a unique perspective of the forest ecosystem. Inside, you'll find beautifully crafted wooden interiors with a comfortable bedroom area, a small living space with large windows offering panoramic forest views, and basic bathroom facilities with eco-friendly products. The private balcony is the perfect spot to observe birds and wildlife in their natural habitat or to simply relax with a book while surrounded by the gentle rustling of leaves. Despite the remote feeling, the treehouses are equipped with solar-powered electricity, hot water, and even limited Wi-Fi. A breakfast basket with fresh, local ingredients is delivered each morning, and our staff can arrange for other meals to be brought to your treehouse or served in our ground-level dining area. The treehouse experience is perfect for couples seeking romance, solo travelers looking for peaceful reflection, or anyone wanting to reconnect with nature in a unique setting.",
    images: [
      "/assets/Aframe2.jpg",
      "/assets/Aframe3.jpg",
      "/assets/AFrame1.jpg",
      "/assets/Aframein4.jpg",
    ],
    amenities: [
      "Elevated forest views",
      "Handcrafted wooden interiors",
      "Private balcony",
      "Solar-powered amenities",
      "Breakfast basket delivery",
      "Wildlife observation opportunities",
      "Eco-friendly bathroom",
      "Limited Wi-Fi",
    ],
  },
}

export default function AccommodationClientPage({ params }: { params: { id: string } }) {
  const accommodationId = params.id
  const accommodation = accommodationsData[accommodationId as keyof typeof accommodationsData]

  if (!accommodation) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Accommodation Not Found</h1>
        <p className="mb-8">The accommodation you're looking for doesn't exist or has been removed.</p>
        <Link href={`/accommodations/luxury-cottages`}>
          <Button>View Details</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/#services" className="inline-flex items-center text-primary hover:underline mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to All Accommodations
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 font-heading text-primary">{accommodation.name}</h1>

      <div className="flex items-center mb-6 text-gray-600">
        <MapPin className="h-5 w-5 mr-1 text-primary" />
        <span>{accommodation.location}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {accommodation.images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${accommodation.name} - Image ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 font-heading">About this accommodation</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{accommodation.longDescription}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 font-heading">Amenities</h3>
          <ul className="space-y-2">
            {accommodation.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                {amenity}
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 font-heading">Contact Us</h3>
            <p className="text-gray-700 mb-2">For bookings and inquiries:</p>
            <p className="text-gray-700 mb-1">📞 9087651905</p>
            <p className="text-gray-700 mb-4">✉️ timbertrailskodaikanal@gmail.com</p>

            <Button
              className="w-full bg-primary text-white hover:bg-primary/90"
              onClick={() => (window.location.href = "tel:908765190")}
            >
              Call to Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

