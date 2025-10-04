"use client"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const pathname = usePathname()
  const aboutRef = useRef<HTMLDivElement | null>(null)

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close About dropdown on outside click/touch
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (!isAboutDropdownOpen) return
      const target = e.target as Node
      if (aboutRef.current && !aboutRef.current.contains(target)) {
        setIsAboutDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("touchstart", handlePointerDown)
    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("touchstart", handlePointerDown)
    }
  }, [isAboutDropdownOpen])

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div
        className={`rounded-full shadow-lg border px-8 py-3 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/80 border-black/20"
            : "bg-transparent border-white"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* VOIDRA Logo */}
          <div className="flex items-center">
            <div className="relative mr-3 h-4 w-10">
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#b6774d] opacity-90"></div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#464646] z-10"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#cbd1c4]"></div>
            </div>
            <span
              className={`font-bold text-xl tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              VOIDRA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-300 font-medium ${
                isScrolled
                  ? "text-black hover:text-[#b6774d]"
                  : "text-white hover:text-[#b6774d]"
              } ${pathname === "/" ? "border-b-2 border-current" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`transition-colors duration-300 font-medium ${
                isScrolled
                  ? "text-black hover:text-[#b6774d]"
                  : "text-white hover:text-[#b6774d]"
              } ${pathname === "/products" ? "border-b-2 border-current" : ""}`}
            >
              Products
            </Link>

            {/* About Us Dropdown with Arrow */}
            <div ref={aboutRef} className="relative group">
              <button
                onClick={toggleAboutDropdown}
                className={`transition-colors duration-300 font-medium flex items-center space-x-1 ${
                  isScrolled
                    ? "text-black hover:text-[#b6774d]"
                    : "text-white hover:text-[#b6774d]"
                } ${pathname.startsWith("/about-us") ? "border-b-2 border-current" : ""}`}
              >
                <span>About Us</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isAboutDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
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

              <div
                className={`absolute left-0 top-full shadow-lg mt-2 py-2 rounded-lg min-w-[150px] transition-all duration-300 transform ${
                  isAboutDropdownOpen
                    ? "block opacity-100 translate-y-0"
                    : "hidden group-hover:block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                } ${isScrolled ? "bg-white text-black" : "bg-black text-white"}`}
              >
                <Link
                  href="/about-us?section=story"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Our Story
                </Link>
                <Link
                  href="/about-us?section=philosophy"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Philosophy
                </Link>
                <Link
                  href="/about-us?section=values"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Values
                </Link>
                <Link
                  href="/about-us?section=team"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Team
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className={`transition-colors duration-300 font-medium ${
                isScrolled
                  ? "text-black hover:text-[#b6774d]"
                  : "text-white hover:text-[#b6774d]"
              } ${pathname === "/contact" ? "border-b-2 border-current" : ""}`}
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
              className={`transition-colors duration-300 ${
                isScrolled ? "text-black hover:text-[#b6774d]" : "text-white hover:text-[#b6774d]"
              }`}
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

      {/* Mobile Menu (unchanged) */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileOpen ? "max-h-[480px] mt-2" : "max-h-0"
        }`}
      >
        <div className="rounded-2xl shadow-lg border border-white/30 bg-[#0b0b0b]/80 backdrop-blur px-6 py-4 text-white">
          <div className="flex flex-col space-y-3">
            <Link href="/" onClick={() => setIsMobileOpen(false)} className={`py-2 px-1 rounded hover:text-[#b6774d] transition-colors ${pathname === "/" ? "border-b-2 border-white" : ""}`}>Home</Link>
            <Link href="/products" onClick={() => setIsMobileOpen(false)} className={`py-2 px-1 rounded hover:text-[#b6774d] transition-colors ${pathname === "/products" ? "border-b-2 border-white" : ""}`}>Products</Link>
            {/* About Us Mobile Disclosure (unchanged) */}
            {/* ... */}
            <Link href="/contact" onClick={() => setIsMobileOpen(false)} className={`py-2 px-1 rounded hover:text-[#b6774d] transition-colors ${pathname === "/contact" ? "border-b-2 border-white" : ""}`}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}