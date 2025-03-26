"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md border-b border-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary font-heading">
            TimberTrails
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <nav aria-label="Main Navigation" className="space-x-6">
              <a href="#reviews" className="text-gray-800 hover:text-primary font-medium">
                Reviews
              </a>
              <a href="#about" className="text-gray-800 hover:text-primary font-medium">
                About Us
              </a>
              <Link href="/contact" className="text-gray-800 hover:text-primary font-medium">
                Contact
              </Link>
            </nav>
            <Button
              className="bg-primary text-white hover:bg-primary/90"
              onClick={() => (window.location.href = "tel:9087651905")}
              aria-label="Call us at 9087651905"
            >
              <Phone className="h-4 w-4 mr-2" aria-hidden="true" /> 9087651905
            </Button>
          </div>
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div id="mobile-menu" className="mt-4 md:hidden">
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
              <a href="#reviews" className="text-gray-800 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </a>
              <a href="#about" className="text-gray-800 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>
                About Us
              </a>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-4">
              <Button
                className="w-full bg-primary text-white hover:bg-primary/90"
                onClick={() => (window.location.href = "tel:9087651905")}
                aria-label="Call us at 9087651905"
              >
                <Phone className="h-4 w-4 mr-2" aria-hidden="true" /> 9087651905
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

