import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-heading">TimberTrails</h3>
            <p className="text-sm text-gray-400 mb-4">
              Discover the perfect stay in Kodaikanal with our handpicked cottages, tents, and glamping options.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-primary hover:text-primary/80" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-primary hover:text-primary/80" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-sm text-gray-400 hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white font-heading">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <p className="text-sm text-gray-400">123 Lake Road, Kodaikanal, Tamil Nadu 624101, India</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <p className="text-sm text-gray-400">908765190</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <p className="text-sm text-gray-400">timbertrailskodaikanal@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} TimberTrails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

