"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#cbd1c4]/95 backdrop-blur-md border-b border-[#464646]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
              className="text-[#464646] hover:text-[#b6774d] transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-[#464646] hover:text-[#b6774d] transition-colors duration-300 font-medium"
            >
              Products
            </Link>
            <Link
              href="/about-us"
              className="text-[#464646] hover:text-[#b6774d] transition-colors duration-300 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-[#464646] hover:text-[#b6774d] transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#464646] hover:text-[#b6774d] transition-colors duration-300">
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
