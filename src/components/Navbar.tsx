"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen)
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-transparent/80 rounded-full shadow-lg border border-white px-8 py-3">
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
            
            {/* About Us Dropdown with Arrow */}
            <div className="relative group">
              <button 
                onClick={toggleAboutDropdown}
                className="text-[#ffffff] hover:text-[#b6774d] transition-colors duration-300 font-medium flex items-center space-x-1"
              >
                <span>About Us</span>
                {/* Rotating Arrow */}
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute left-0 top-full bg-black shadow-lg mt-2 py-2 rounded-lg min-w-[150px] transition-all duration-300 transform ${
                isAboutDropdownOpen 
                  ? 'block opacity-100 translate-y-0' 
                  : 'hidden group-hover:block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
              }`}>
                <Link 
                  href="/about-us?section=story" 
                  className="block px-4 py-2 text-white hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Our Story
                </Link>
                <Link 
                  href="/about-us?section=philosophy" 
                  className="block px-4 py-2 text-white hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Philosophy
                </Link>
                <Link 
                  href="/about-us?section=values" 
                  className="block px-4 py-2 text-white hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Values
                </Link>
                <Link 
                  href="/about-us?section=team" 
                  className="block px-4 py-2 text-white hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Team
                </Link>
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
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              className="text-[#ffffff] hover:text-[#b6774d] transition-colors duration-300"
            >
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

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileOpen ? 'max-h-[480px] mt-2' : 'max-h-0'
        }`}
      >
        <div className="rounded-2xl shadow-lg border border-white/30 bg-[#0b0b0b]/80 backdrop-blur px-6 py-4 text-white">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setIsMobileOpen(false)}
              className="py-2 px-1 rounded hover:text-[#b6774d] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsMobileOpen(false)}
              className="py-2 px-1 rounded hover:text-[#b6774d] transition-colors"
            >
              Products
            </Link>

            {/* About Us Mobile Disclosure */}
            <div>
              <button
                onClick={() => setIsMobileAboutOpen((v) => !v)}
                className="w-full flex items-center justify-between py-2 px-1 rounded hover:text-[#b6774d] transition-colors"
                aria-expanded={isMobileAboutOpen}
                aria-controls="mobile-about"
              >
                <span>About Us</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id="mobile-about"
                className={`pl-3 border-l border-white/20 ml-1 transition-all duration-300 overflow-hidden ${
                  isMobileAboutOpen ? 'max-h-64 mt-2' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col py-1">
                  <Link
                    href="/about-us?section=story"
                    onClick={() => {
                      setIsMobileOpen(false)
                      setIsMobileAboutOpen(false)
                    }}
                    className="py-2 px-2 rounded hover:bg-white/10"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about-us?section=philosophy"
                    onClick={() => {
                      setIsMobileOpen(false)
                      setIsMobileAboutOpen(false)
                    }}
                    className="py-2 px-2 rounded hover:bg-white/10"
                  >
                    Philosophy
                  </Link>
                  <Link
                    href="/about-us?section=values"
                    onClick={() => {
                      setIsMobileOpen(false)
                      setIsMobileAboutOpen(false)
                    }}
                    className="py-2 px-2 rounded hover:bg-white/10"
                  >
                    Values
                  </Link>
                  <Link
                    href="/about-us?section=team"
                    onClick={() => {
                      setIsMobileOpen(false)
                      setIsMobileAboutOpen(false)
                    }}
                    className="py-2 px-2 rounded hover:bg-white/10"
                  >
                    Team
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="py-2 px-1 rounded hover:text-[#b6774d] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
