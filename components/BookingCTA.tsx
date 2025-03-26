"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone, Mail } from "lucide-react"

export default function BookingCTA() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 font-heading text-primary">Ready for Your Kodaikanal Adventure?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Book your perfect stay now and experience the magic of Kodaikanal's misty mountains, serene lakes, and lush
          forests
        </p>

        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6">
              Book Your Stay Now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading">Contact Us to Book</DialogTitle>
              <DialogDescription>Reach out to our team to book your perfect stay in Kodaikanal</DialogDescription>
            </DialogHeader>
            <div className="py-6">
              <div className="flex items-center mb-4 text-lg">
                <Phone className="h-6 w-6 mr-3 text-primary" />
                <a href="tel:908765190" className="hover:text-primary">
                908765190
                </a>
              </div>
              <div className="flex items-center mb-6 text-lg">
                <Mail className="h-6 w-6 mr-3 text-primary" />
                <a href="mailto:timbertrailskodaikanal@gmail.com" className="hover:text-primary">
                timbertrailskodaikanal@gmail.com
                </a>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Our booking team is available from 9:00 AM to 8:00 PM IST, 7 days a week.
              </p>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setIsContactOpen(false)}>
                  Close
                </Button>
                <Button className="bg-primary text-white" onClick={() => (window.location.href = "tel:8056393753")}>
                  Call Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

