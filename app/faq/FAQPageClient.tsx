"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What types of accommodation does TimberTrails offer?",
    answer:
      "TimberTrails offers a variety of unique accommodation experiences in Kodaikanal, including cozy cottages nestled in nature, luxurious glamping tents, and elevated treehouse retreats.",
  },
  {
    question: "How do I make a booking?",
    answer:
      "You can easily make a booking by calling us at 8056393753 or sending an email to bookings@timbertrails.com. We advise booking 2-3 weeks in advance, especially during the peak season from October to May.",
  },
  {
    question: "What is the check-in and check-out time?",
    answer:
      "Our standard check-in time is 2:00 PM, and check-out time is 11:00 AM. Early check-in or late check-out may be arranged upon request, depending on availability.",
  },
  {
    question: "Is there a minimum stay requirement?",
    answer:
      "Yes, we require a minimum stay of 2 nights for all accommodations. During peak season and holidays, this may extend to 3 nights.",
  },
  {
    question: "Are meals included in the stay?",
    answer:
      "Meal inclusions depend on the accommodation type. Luxury Cottages and Treehouse Retreats include breakfast. Glamping Tents include breakfast and dinner. Additional meals can be arranged for an extra charge.",
  },
  {
    question: "Do you offer transportation services?",
    answer:
      "Yes, we can arrange transportation from Madurai Airport or Kodaikanal Road Railway Station to your accommodation for an additional fee. Please provide your travel details at least 48 hours before arrival.",
  },
  {
    question: "Are children allowed in all accommodation types?",
    answer:
      "Children are welcome in our Luxury Cottages. For safety reasons, Treehouse Retreats are recommended for children above 12 years. Glamping Tents can accommodate children of all ages, but parental supervision is always required.",
  },
  {
    question: "Is Wi-Fi available?",
    answer:
      "Wi-Fi is available in our Luxury Cottages. Glamping Tents and Treehouse Retreats have limited connectivity due to their remote locations, offering a more immersive nature experience.",
  },
  {
    question: "What activities are available nearby?",
    answer:
      "Kodaikanal offers a range of activities, including boating on Kodaikanal Lake, hiking to Dolphin's Nose and Pillar Rocks, visiting Kurinji Andavar Temple, exploring the Pine Forest, cycling around the lake, and horseback riding. Our team can assist in arranging these activities.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 14 days or more before check-in will receive a full refund. Cancellations made 7-13 days before check-in will receive a 50% refund. Cancellations made less than 7 days before check-in are non-refundable. We recommend travel insurance for unexpected circumstances.",
  },
]

export default function FAQPageClient() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-primary">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our accommodations, bookings, and experiences in Kodaikanal
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-gray-800">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-primary/90">Contact Us</Button>
            </Link>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => (window.location.href = "tel:8056393753")}
            >
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

