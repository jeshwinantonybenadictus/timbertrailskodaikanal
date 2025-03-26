import Link from "next/link"
import { Home, Phone, Menu } from "lucide-react"

const MobileTabBar = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40"
      aria-label="Mobile Tab Navigation"
    >
      <div className="flex justify-around py-3">
        <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-primary" aria-label="Home">
          <Home className="h-6 w-6" aria-hidden="true" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <a href="#reviews" className="flex flex-col items-center text-gray-600 hover:text-primary" aria-label="Reviews">
          <Menu className="h-6 w-6" aria-hidden="true" />
          <span className="text-xs mt-1">Reviews</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center text-gray-600 hover:text-primary"
          aria-label="Contact"
        >
          <Phone className="h-6 w-6" aria-hidden="true" />
          <span className="text-xs mt-1">Contact</span>
        </Link>
      </div>
    </nav>
  )
}

export default MobileTabBar

