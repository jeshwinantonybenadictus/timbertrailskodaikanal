"use client"

import Image from "next/image"

export default function DestinationHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-heading text-primary">Discover Kodaikanal</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src="/assets/cover3.jpg"
              alt="Kodaikanal Lake"
              width={600}
              height={500}
              className="rounded-lg shadow-lg object-cover max-w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4 font-heading text-gray-800">The Princess of Hill Stations</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nestled in the Palani Hills of Tamil Nadu at an elevation of 2,133 meters, Kodaikanal is often referred to
              as the "Princess of Hill Stations." Its name translates to "The Gift of the Forest" in Tamil, aptly
              describing its lush landscapes and natural beauty.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Unlike many hill stations developed by the British, Kodaikanal was established by American missionaries in
              1845 as a retreat from the tropical diseases and heat of the plains. This unique history has given the
              town a distinct character, blending Tamil culture with Western influences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The town is centered around the star-shaped Kodaikanal Lake, a man-made lake created in 1863 that serves
              as the heart of the town. Surrounded by misty hills, dense forests, and cascading waterfalls, Kodaikanal
              offers a refreshing escape from the hustle and bustle of city life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-heading text-gray-800">
              Natural Wonders & Rich Cultural Heritage
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Kodaikanal is blessed with an abundance of natural attractions that showcase the region's stunning
              biodiversity and geological features. The Pine Forest, with its tall trees creating a carpet of pine
              needles on the forest floor, offers a serene walking experience unlike any other in South India.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dolphin's Nose, a flat rock projecting over a thousand feet into the valley, provides breathtaking
              panoramic views of the surrounding hills and valleys. Nearby, the cascading Silver Cascade Falls, formed
              from the outflow of Kodaikanal Lake, creates a mesmerizing spectacle as it drops from a height of 180
              feet.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Beyond its natural beauty, Kodaikanal boasts a rich cultural tapestry woven from indigenous traditions and
              colonial influences. The native Paliyar tribe, one of the oldest indigenous communities in India, has
              inhabited these hills for thousands of years, living in harmony with nature and practicing traditional
              medicine.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The town's colonial heritage is evident in its architecture, particularly in buildings like the Christ the
              King Church and the 160-year-old Kodaikanal International School, one of Asia's oldest international
              schools. These structures stand as testaments to the town's unique historical development.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/cover2.jpg"
              alt="Kodaikanal Pine Forest"
              width={600}
              height={500}
              className="rounded-lg shadow-lg object-cover max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

