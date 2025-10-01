"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-transparent/80  rounded-full shadow-lg border border-white px-8 py-3">
        <div className="flex justify-between items-center">
          {/* VOIDRA Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-1 mr-3">
              <div className="w-4 h-4 rounded-full bg-[#b6774d] opacity-90"></div>
              <div className="w-4 h-4 rounded-full bg-[#464646] -ml-2 z-10"></div>
              <div className="w-4 h-4 rounded-full bg-[#cbd1c4] -ml-2"></div>
            </div>
            <span className="font-bold text-xl tracking-wide text-[#464646]">
              VOIDRA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#ffffff] hover:text-[#b6774d] transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-[#ffffff] hover:text-[#b6774d] transition-colors duration-300 font-medium"
            >
              Products
            </Link>
            <div className="relative group">
              <button className="text-[#ffffff] hover:text-[#b6774d] transition-colors duration-300 font-medium">
                About Us
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 rounded-lg min-w-[150px]">
                <Link href="/about-us?section=story" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Story</Link>
                <Link href="/about-us?section=philosophy" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Philosophy</Link>
                <Link href="/about-us?section=values" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Values</Link>
                <Link href="/about-us?section=team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Team</Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-[#ffffff] hover:text-[#b6774d] transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#ffffff] hover:text-[#b6774d] transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}