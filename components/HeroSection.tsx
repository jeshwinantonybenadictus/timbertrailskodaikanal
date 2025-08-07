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
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  

  return (
    <div
      className="relative bg-cover bg-center h-[85vh]"
      style={{
        backgroundImage: "url('/assets/cover.jpg')",
        backgroundColor: "#1a472a",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading leading-tight max-w-4xl"
        >
          Experience the Magic of Kodaikanal with TimberTrails
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-white mb-8 max-w-2xl"
        >
          Discover our handpicked cottages, homestays, tents, and glamping options with breathtaking views of the misty
          hills
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white">
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
                  <a href="tel:9087651905" className="hover:text-primary">
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
                  <Button className="bg-primary text-white" onClick={() => (window.location.href = "tel:9087651905")}>
                    Call Now
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <a href="#services">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white/20"
            >
              Explore Our Stays
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

